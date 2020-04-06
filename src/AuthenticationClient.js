import CrudClient from './CrudClient'

export default class AuthenticationClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  authenticate = async ({ email, password, headers, token, responseType, timeout }) => {
    return await this.post({ url: "users/login", body: { email, password }, headers, token, responseType, timeout })
  }
}