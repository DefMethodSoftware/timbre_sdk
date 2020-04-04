import RequestManager from './RequestManager'

export default class CrudClient extends RequestManager {
  constructor(config) {
    super(config)
  }

  get = async ({ url, token, ...reqConfig }) => {
    return await this.requestor({
      url: url, token: token, method: 'GET',
      headers: reqConfig.headers, responseType: reqConfig.responseType
    });
  }

  post = async ({ url, body, token, ...reqConfig }) => {
    return await this.requestor({
      url: url, token: token, method: 'POST',
      body: body, headers: reqConfig.headers, responseType: reqConfig.responseType
    });
  };

  patch = async ({ url, body, token, ...reqConfig }) => {
    return await this.requestor({
      url: url, token: token, method: 'PATCH',
      body: body, headers: reqConfig.headers, responseType: reqConfig.responseType
    });
  };
}