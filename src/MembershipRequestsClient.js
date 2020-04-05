import CrudClient from './CrudClient'

export default class MembershipRequestsClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({ bandId, token }) => {
    return await this.post({ url: `bands/${bandId}/membership_requests`, token: token })
  }

  view = async ({ token }) => {
    return await this.get({ url: "membership_requests", token: token })
  }

  respond = async ({ bandId, membershipRequestId, token, body: body}) => {
    return await this.patch({ body: body, url: `bands/${bandId}/membership_requests/${membershipRequestId}`, token: token })
  }
}