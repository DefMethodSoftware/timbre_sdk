import CrudClient from './CrudClient'

export default class MembershipRequestsClient extends CrudClient {
  constructor(config) {
    super(config)
  }

  create = async ({ bandId, headers, token, responseType, timeout  } = {}) => {
    return await this.post({ url: `bands/${bandId}/membership_requests`, headers, token, responseType, timeout })
  }

  view = async ({ headers, token, responseType, timeout } = {}) => {
    return await this.get({ url: "membership_requests", headers, token, responseType, timeout  })
  }

  respond = async ({ bandId, membershipRequestId, accepted, declined, headers, token, responseType, timeout }) => {
    return await this.patch({ url: `bands/${bandId}/membership_requests/${membershipRequestId}`, body: { accepted, declined }, headers, token, responseType, timeout })
  }
}