import CrudClient from './CrudClient'

export default class BandsClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({bandName, missingInstruments, bio, headers, token, responseType, timeout }) => {
    return await this.post({ url: "bands", body: { bandName, missingInstruments, bio }, headers, token, responseType, timeout })
  }

  view = async ({ headers, token, responseType, timeout } = {}) => {
    return await this.get({ url: "bands", headers, token, responseType, timeout })
  }
}