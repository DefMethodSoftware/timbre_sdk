import CrudClient from './CrudClient'

export default class AuthenticationClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  authenticate = async ({ email, password }) => {
    return await this.post({ body: { email, password }, url: "users/login" })
  }
}