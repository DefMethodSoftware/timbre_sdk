import CrudClient from './CrudClient'

export default class BandsClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({body, token}) => {
    return await this.post({ body: body, url: "bands", token: token })
  }

  view = async ({token}) => {
    return await this.get({ url: "bands", token: token })
  }
}