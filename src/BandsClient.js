import CrudClient from './CrudClient'

export default class BandsClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({body}) => {
    return await this.post({ body: body, url: "bands" })
  }

  view = async () => {
    return await this.get({ url: "bands" })
  }
}