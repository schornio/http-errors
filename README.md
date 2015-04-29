# HTTP errors

[![Build Status](https://travis-ci.org/schornio/http-errors.svg)](https://travis-ci.org/schornio/http-errors)

Error classes for HTTP-error-codes (4xx, 5xx)

## Implemented errors

**Generic errors**

- `HttpError`

**4xx errors**

- 400 `BadRequestError`
- 401 `UnauthorizedError`
- 403 `ForbiddenError`
- 404 `NotFoundError`

**5xx errors**

- 500 `InternalServerError`
- 501 `NotImplementedError`

## Usage

### Installation

    npm install @schornio/http-errors

### Example

    var httpErrors = require('@schornio/http-errors');
    var NotFoundError = httpErrors.NotFoundError;
    throw new NotFoundError('Ressource not found');
