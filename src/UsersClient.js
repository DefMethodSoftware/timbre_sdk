import CrudClient from './CrudClient'

export default class UsersClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({ email, password, username, headers, token, responseType, timeout }) => {
    return await this.post({ url: "users", body: { email, password, username }, headers, token, responseType, timeout })
  }
  
  updateProfile = async ({ 
    userId,
    firstName,
    lastName,
    bio,
    instruments,
    location,
    headers,
    token,
    responseType,
    timeout
  }) => {
    return await this.patch({  url: `users/${userId}`, body: { firstName, lastName, bio, instruments, location }, headers, token, responseType, timeout })
  }
}