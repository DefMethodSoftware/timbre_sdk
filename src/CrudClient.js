import RequestManager from './RequestManager'

export default class CrudClient extends RequestManager {
  constructor(config) {
    super(config)
  }

  get = async (config) => {
    return await this.requestor({ method: 'GET', ...config });
  }

  post = async (config) => {
    return await this.requestor({ method: 'POST', ...config });
  };

  patch = async (config) => {
    return await this.requestor({ method: 'PATCH', ...config });
  };
}