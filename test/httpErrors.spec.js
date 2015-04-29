'use strict';
/* jslint node: true */
/* global describe, it */

var expect = require('expect.js');
var httpErrors = require(__dirname + '/../index.js');

describe('HTTP errors', function () {
  function testInheritance(Class_, super_) {
    return function () {
      expect(new Class_()).to.be.a(super_);
    };
  }

  function testExposeErrorCodeProperty(ErrorClass, expectedCode) {
    return function() {
      var instanceErrorClass = new ErrorClass();
      expect(instanceErrorClass.httpErrorCode).to.be(expectedCode);
    };
  }

  function testMeaningfulErrorName(ErrorClass, expectedName) {
    return function() {
      var instanceErrorClass = new ErrorClass();
      expect(instanceErrorClass.name).to.be(expectedName);
    };
  }

  describe('HttpError', function () {
    it('should be a Error instance', testInheritance(httpErrors.HttpError, Error));
  });

  describe('BadRequestError', function () {
    it('should be a HttpError instance', testInheritance(httpErrors.BadRequestError, httpErrors.HttpError));
    it('should expose a meaningful name', testMeaningfulErrorName(httpErrors.BadRequestError,'Bad request'));
    it('should expose a httpErrorProperty with the right error-code', testExposeErrorCodeProperty(httpErrors.BadRequestError, 400));
  });

  describe('UnauthorizedError', function () {
    it('should be a HttpError instance', testInheritance(httpErrors.UnauthorizedError, httpErrors.HttpError));
    it('should expose a meaningful name', testMeaningfulErrorName(httpErrors.UnauthorizedError,'Unauthorized'));
    it('should expose a httpErrorProperty with the right error-code', testExposeErrorCodeProperty(httpErrors.UnauthorizedError, 401));
  });

  describe('ForbiddenError', function () {
    it('should be a HttpError instance', testInheritance(httpErrors.ForbiddenError, httpErrors.HttpError));
    it('should expose a meaningful name', testMeaningfulErrorName(httpErrors.ForbiddenError,'Forbidden'));
    it('should expose a httpErrorProperty with the right error-code', testExposeErrorCodeProperty(httpErrors.ForbiddenError, 403));
  });

  describe('NotFoundError', function () {
    it('should be a HttpError instance', testInheritance(httpErrors.NotFoundError, httpErrors.HttpError));
    it('should expose a meaningful name', testMeaningfulErrorName(httpErrors.NotFoundError,'Not found'));
    it('should expose a httpErrorProperty with the right error-code', testExposeErrorCodeProperty(httpErrors.NotFoundError, 404));
  });

  describe('InternalServerError', function () {
    it('should be a HttpError instance', testInheritance(httpErrors.InternalServerError, httpErrors.HttpError));
    it('should expose a meaningful name', testMeaningfulErrorName(httpErrors.InternalServerError,'Internal server error'));
    it('should expose a httpErrorProperty with the right error-code', testExposeErrorCodeProperty(httpErrors.InternalServerError, 500));
  });

  describe('NotImplementedError', function () {
    it('should be a HttpError instance', testInheritance(httpErrors.NotImplementedError, httpErrors.HttpError));
    it('should expose a meaningful name', testMeaningfulErrorName(httpErrors.NotImplementedError,'Not implemented'));
    it('should expose a httpErrorProperty with the right error-code', testExposeErrorCodeProperty(httpErrors.NotImplementedError, 501));
  });

});
