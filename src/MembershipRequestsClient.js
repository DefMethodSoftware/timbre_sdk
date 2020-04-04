import CrudClient from './CrudClient'

export default class MembershipRequestsClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({ bandId }) => {
    return await this.post({ url: `bands/${bandId}/membership_requests` })
  }

  view = async () => {
    return await this.get({ url: "membership_requests" })
  }

  respond = async ({ bandId, membershipRequestId, body: body}) => {
    return await this.patch({ body: body, url: `bands/${bandId}/membership_requests/${membershipRequestId}` })
  }
}