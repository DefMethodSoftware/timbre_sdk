const AuthenticationClient = require('./AuthenticationClient').default
const BandsClient = require('./BandsClient').default
const UsersClient = require('./UsersClient').default
const MembershipRequestsClient = require('./MembershipRequestsClient').default
const {isEmpty} = require('./utils')

export default function(url, version, config) {
  if (isEmpty(url) || isEmpty(version)) {
    throw new Error(
      'timbre-javascript-sdk: A valid url and version are required to successfully make network requests'
    );
  }

  const apiURI = [url, version].join('/');

  return {
    AuthenticationClient: new AuthenticationClient({ apiURI: apiURI, config}),
    BandsClient: new BandsClient({ apiURI: apiURI, config}),
    UsersClient: new UsersClient({ apiURI: apiURI, config}),
    MembershipRequestsClient: new MembershipRequestsClient({ apiURI: apiURI, config})
  };
}
