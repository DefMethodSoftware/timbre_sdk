import axios from 'axios'
import ErrorHandler from './ErrorHandler'
import {
  isEmpty,
  notEmpty,
  identity
} from './utils'

const REQUIRED_BUILD_KEYS = [
  'storage',
  'storageId'
]

const REQUIRED_REQUEST_KEYS = [
  'method',
  'url',
]

const WHITELISTED_ENDPOINTS = [
  { url: 'users', method: 'post'},
  { url: 'users/login', method: 'post' }
]

export default class RequestManager extends ErrorHandler {
  constructor ({ apiURI, config}) {
    super()
    this._verifyConfig(config, REQUIRED_BUILD_KEYS)

    // root URL
    this.apiURI = apiURI
    // platform object for getting / setting stored keys
    this.storage = config.storage
    // the object key used to access the stored token
    this.storageId = config.storageId
  }

  _verifyConfig = (config, keys) => {
    keys.forEach(key => {
      if(!config[key]) {
        throw `Invalid config: ${key} missing or invalid`
      }
    });
  }

  generateRequestConfig = async ({apiURI, url, method, responseType, body, headers, token, ...config}) => {
      const meth = method.toLowerCase();
      return {
        url: `${apiURI}/${url}`,
        method: meth,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': await this.getToken(url, meth, token),
          ...headers
        },
        withCredentials: false,
        crossDomain: true,
        timeout: 1000,
        responseType: isEmpty(responseType) ? 'json' : responseType,
        data: method !== 'get' && notEmpty(body) ? JSON.stringify(body) : {}
      }
  };

  getToken = async (url, method, token) => {
    if (this.isWhitelistedAction(url, method)) {
      return null
    }
    return notEmpty(token) ?
    token :
    await this.storage.getItem(this.storageId)
  }

  isWhitelistedAction = (url, method) => {
    return WHITELISTED_ENDPOINTS.some(endpoint=>{
      return endpoint.url === url && endpoint.method === method
    })
  }

  isStorageableEndpoint = (url, method) =>{
    url = url.replace(this.apiURI + "/", "")
    return this.isWhitelistedAction(url, method)
  }

  performRequest = async (requestConf) => {
    return await axios.request(requestConf).then(this.performSuccess, this.performFailure).finally(identity)
  }

  performSuccess = response => {
    const { status, statusText, config, data } = response;
    if (this.isStorageableEndpoint(config.url, config.method)) {
      this.storeAccessData(this.storage, this.storageID, data.token);
    }
    return ({ result: { status, statusText, request: config, data }})
  }

  requestor = async (config, retries = 1) => { 
    this._verifyConfig(config, REQUIRED_REQUEST_KEYS)
    const requestConf = await this.generateRequestConfig({ ...config, apiURI: this.apiURI })
    const response = await this.performRequest(requestConf)

    return response
  }

  storeAccessData = (storage, storageId, token) => {
    storage.setItem(storageId, token)
  }
}
