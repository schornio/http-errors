'use strict';
/* jslint node: true */

var inherits = require('util').inherits;

function HttpError(errorCode, errorMessage) {
  Error.call(this, errorMessage);
  this.httpErrorCode = errorCode;
}

inherits(HttpError, Error);

function errorFactory(errorCode) {
  var error = function (errorMessage) {
    HttpError.call(this, errorCode, errorMessage);
  };
  inherits(error, HttpError);
  return error;
}

module.exports = {
  HttpError: HttpError,
  BadRequestError: errorFactory(400),
  UnauthorizedError: errorFactory(401),
  ForbiddenError: errorFactory(403),
  NotFoundError: errorFactory(404),
  InternalServerError: errorFactory(500),
  NotImplementedError: errorFactory(501),
};
