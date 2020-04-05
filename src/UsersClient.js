import CrudClient from './CrudClient'

export default class UsersClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({ email, password, username }) => {
    return await this.post({ body: { email, password, username }, url: "users" })
  }

  updateProfile = async ({ userId, token, body: body}) => {
    return await this.patch({ body: body, url: `users/${userId}`, token: token })
  }
}