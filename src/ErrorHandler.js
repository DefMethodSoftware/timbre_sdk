import {notEmpty, identity} from './utils'

export default class ErrorHandler {
  getFailure = failure => {
    const { status, statusText, config } = notEmpty(failure.response) ? failure.response : failure;
    return { result: { status, statusText, request: config } };
  };

  performFailure = failure => Promise.reject(this.getFailure(failure)).catch(identity);
}