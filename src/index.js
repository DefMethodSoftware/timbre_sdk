import {isEmpty} from './utils'

export default function (url, config) {
  if (isEmpty(url)) {
    throw new Error(
      'timbre-javascript-sdk: A valid url is required to successfully make network requests'
    );
  }
  
  return {
  };
}