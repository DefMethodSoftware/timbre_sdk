const AuthenticationClient = require('./AuthenticationClient').default
const BandsClient = require('./BandsClient').default
const UsersClient = require('./UsersClient').default
const MembershipRequestsClient = require('./MembershipRequestsClient').default
const {isEmpty} = require('./utils')

export default function(url, config) {
  if (isEmpty(url)) {
    throw new Error(
      'timbre-javascript-sdk: A valid url is required to successfully make network requests'
    );
  }
  
  return {
    AuthenticationClient: new AuthenticationClient({ apiURI: url, config}),
    BandsClient: new BandsClient({ apiURI: url, config}),
    UsersClient: new UsersClient({ apiURI: url, config}),
    MembershipRequestsClient: new MembershipRequestsClient({ apiURI: url, config})
  };
}