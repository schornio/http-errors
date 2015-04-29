'use strict';
/* jslint node: true */

var inherits = require('util').inherits;

function HttpError(errorCode, errorMessage) {
  Error.call(this, errorMessage);

  this.name = 'HttpError';
  this.message = errorMessage;
  this.stack = new Error().stack;

  this.httpErrorCode = errorCode;
}

inherits(HttpError, Error);

function errorFactory(errorCode, errorName) {
  var error = function (errorMessage) {
    HttpError.call(this, errorCode, errorMessage);
    this.name = errorName;
  };
  inherits(error, HttpError);
  return error;
}

module.exports = {
  HttpError: HttpError,
  BadRequestError: errorFactory(400, 'Bad request'),
  UnauthorizedError: errorFactory(401, 'Unauthorized'),
  ForbiddenError: errorFactory(403, 'Forbidden'),
  NotFoundError: errorFactory(404, 'Not found'),
  InternalServerError: errorFactory(500, 'Internal server error'),
  NotImplementedError: errorFactory(501, 'Not implemented'),
};
