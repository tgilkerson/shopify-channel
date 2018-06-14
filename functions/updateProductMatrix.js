'use strict';

module.exports = function (flowContext, payload) {
  let options = {
    url: `${this.baseUri}/admin/products/${payload.productRemoteID}.json`,
    method: "PUT",
    body: payload.doc,
    resolveWithFullResponse: true
  };

  this.info(`Requesting [${options.method} ${options.uri}]`);

  this.request(options).then(response => {
    return {
      endpointStatusCode: response.statusCode,
      statusCode: 201,
      payload: response.body
    };
  }).catch(this.handleRejection);
};
