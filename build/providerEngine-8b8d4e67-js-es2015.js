(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providerEngine-8b8d4e67-js"],{

/***/ 14:
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1TIO":
/*!***************************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/errorValues.json ***!
  \***************************************************************/
/*! exports provided: 4001, 4100, 4200, -32700, -32600, -32601, -32602, -32603, -32000, -32001, -32002, -32003, -32004, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"4001\":{\"standard\":\"EIP 1193\",\"message\":\"User rejected the request.\"},\"4100\":{\"standard\":\"EIP 1193\",\"message\":\"The requested account and/or method has not been authorized by the user.\"},\"4200\":{\"standard\":\"EIP 1193\",\"message\":\"The requested method is not supported by this Ethereum provider.\"},\"-32700\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.\"},\"-32600\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"The JSON sent is not a valid Request object.\"},\"-32601\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"The method does not exist / is not available.\"},\"-32602\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Invalid method parameter(s).\"},\"-32603\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Internal JSON-RPC error.\"},\"-32000\":{\"standard\":\"EIP 1474\",\"message\":\"Invalid input.\"},\"-32001\":{\"standard\":\"EIP 1474\",\"message\":\"Resource not found.\"},\"-32002\":{\"standard\":\"EIP 1474\",\"message\":\"Resource unavailable.\"},\"-32003\":{\"standard\":\"EIP 1474\",\"message\":\"Transaction rejected.\"},\"-32004\":{\"standard\":\"EIP 1474\",\"message\":\"Method not supported.\"}}");

/***/ }),

/***/ "Lf5n":
/*!*********************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/classes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const safeStringify = __webpack_require__(/*! fast-safe-stringify */ "N1pS")

/**
 * @class JsonRpcError
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP 1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {

  /**
   * Create an Ethereum JSON RPC error.
   * 
   * @param {number} code - The integer error code.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor (code, message, data) {

    if (!Number.isInteger(code)) throw new Error(
      '"code" must be an integer.'
    )
    if (!message || typeof message !== 'string') throw new Error(
      '"message" must be a nonempty string.'
    )

    super(message)
    this.code = code
    if (data !== undefined) this.data = data
  }

  /**
   * Returns a plain object with all public class properties.
   * 
   * @returns {object} The serialized error. 
   */
  serialize() {
    const serialized = {
      code: this.code,
      message: this.message,
    }
    if (this.data !== undefined) serialized.data = this.data
    if (this.stack) serialized.stack = this.stack
    return serialized
  }

  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   * 
   * @returns {string} The serialized error as a string.
   */
  toString() {
    return safeStringify(
      this.serialize(),
      stringifyReplacer,
      2
    )
  }
}

/**
 * @class EthereumRpcError
 * Error subclass implementing Ethereum Provider errors per EIP 1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {

  /**
   * Create an Ethereum JSON RPC error.
   * 
   * @param {number} code - The integer error code, in the [ 1000 <= 4999 ] range.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor(code, message, data) {

    if (!isValidEthProviderCode(code)) {
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      )
    }

    super(code, message, data)
  }
}

// Internal

function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1000 && code <= 4999
}

function stringifyReplacer(_, value) {
  if (value === '[Circular]') {
    return
  }
  return value
}

// Exports

module.exports =  {
  EthereumRpcError,
  EthereumProviderError
}


/***/ }),

/***/ "WPTD":
/*!***************************************************************!*\
  !*** ./node_modules/web3-provider-engine/subproviders/rpc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const xhr = process.browser ? __webpack_require__(/*! xhr */ "7sdD") : __webpack_require__(/*! request */ 14)
const inherits = __webpack_require__(/*! util */ "MCLT").inherits
const createPayload = __webpack_require__(/*! ../util/create-payload.js */ "xQaN")
const Subprovider = __webpack_require__(/*! ./subprovider.js */ "Uu7K")
const { ethErrors, serializeError } = __webpack_require__(/*! eth-json-rpc-errors */ "z8+S")


module.exports = RpcSource

inherits(RpcSource, Subprovider)

function RpcSource(opts) {
  const self = this
  self.rpcUrl = opts.rpcUrl
}

RpcSource.prototype.handleRequest = function(payload, next, end){
  const self = this
  const targetUrl = self.rpcUrl

  // overwrite id to conflict with other concurrent users
  const sanitizedPayload = sanitizePayload(payload)
  const newPayload = createPayload(sanitizedPayload)

  xhr({
    uri: targetUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPayload),
    rejectUnauthorized: false,
    timeout: 20000,
  }, function(err, res, body) {
    if (err) return end(serializeError(err))

    // check for error code
    switch (res.statusCode) {
      case 405:
        return end(ethErrors.rpc.methodNotFound())
      case 504: // Gateway timeout
        return (function(){
          let msg = `Gateway timeout. The request took too long to process. `
          msg += `This can happen when querying logs over too wide a block range.`
          const err = new Error(msg)
          return end(serializeError(err))
        })()
      case 429: // Too many requests (rate limiting)
        return (function(){
          const err = new Error(`Too Many Requests`)
          return end(serializeError(err))
        })()
      default:
        if (res.statusCode != 200) {
          const msg = 'Unknown Error: ' + res.body
          const err = new Error(msg)
          return end(serializeError(err))
        }
    }

    // parse response
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.error(err.stack)
      return end(serializeError(err))
    }
    if (data.error) return end(data.error)

    end(null, data.result)
  })
}

// drops any non-standard params
function sanitizePayload (payload) {
  return {
    id: payload.id,
    jsonrpc: payload.jsonrpc,
    method: payload.method,
    params: payload.params,
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "8oxB")))

/***/ }),

/***/ "ZdnY":
/*!**********************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/providerEngine-8b8d4e67.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onboard_87b65846_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-87b65846.js */ "hWsi");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ "/TMw");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ "M39V");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3_provider_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3-provider-engine */ "f4g2");
/* harmony import */ var web3_provider_engine__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3-provider-engine/subproviders/rpc */ "WPTD");
/* harmony import */ var web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3-provider-engine/subproviders/hooked-wallet */ "Rlsf");
/* harmony import */ var web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3-provider-engine/subproviders/subscriptions */ "EqmL");
/* harmony import */ var web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! web3-provider-engine/subproviders/filters */ "cC/c");
/* harmony import */ var web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9__);











function createProvider(config) {
  var getAccounts = config.getAccounts,
      signTransaction = config.signTransaction,
      rpcUrl = config.rpcUrl,
      processMessage = config.processMessage,
      processPersonalMessage = config.processPersonalMessage,
      signMessage = config.signMessage,
      signPersonalMessage = config.signPersonalMessage;
  var pollingInterval = Object(_onboard_87b65846_js__WEBPACK_IMPORTED_MODULE_1__["g"])(_onboard_87b65846_js__WEBPACK_IMPORTED_MODULE_1__["a"]).blockPollingInterval;
  var idMgmt = getAccounts && new web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7___default.a({
    getAccounts: getAccounts,
    signTransaction: signTransaction,
    processMessage: processMessage,
    processPersonalMessage: processPersonalMessage,
    signMessage: signMessage,
    signPersonalMessage: signPersonalMessage
  });
  var rpcSubProvider = new web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6___default.a({
    rpcUrl: rpcUrl.includes('http') ? rpcUrl : "https://".concat(rpcUrl)
  });
  var provider = new web3_provider_engine__WEBPACK_IMPORTED_MODULE_5___default.a({
    pollingInterval: pollingInterval
  });
  provider.addProvider(new web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8___default.a());
  provider.addProvider(new web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9___default.a());
  idMgmt && provider.addProvider(idMgmt);
  provider.addProvider(rpcSubProvider);
  provider.start();
  provider.on('error', console.error);
  return provider;
}

/* harmony default export */ __webpack_exports__["default"] = (createProvider);

/***/ }),

/***/ "drvL":
/*!**************************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/errorCodes.json ***!
  \**************************************************************/
/*! exports provided: rpc, provider, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"rpc\":{\"invalidInput\":-32000,\"resourceNotFound\":-32001,\"resourceUnavailable\":-32002,\"transactionRejected\":-32003,\"methodNotSupported\":-32004,\"parse\":-32700,\"invalidRequest\":-32600,\"methodNotFound\":-32601,\"invalidParams\":-32602,\"internal\":-32603},\"provider\":{\"userRejectedRequest\":4001,\"unauthorized\":4100,\"unsupportedMethod\":4200}}");

/***/ }),

/***/ "rdiz":
/*!*******************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const errorValues = __webpack_require__(/*! ./errorValues.json */ "1TIO")
const FALLBACK_ERROR_CODE = __webpack_require__(/*! ./errorCodes.json */ "drvL").rpc.internal
const { EthereumRpcError } = __webpack_require__(/*! ./classes */ "Lf5n")

const JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'

const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.'

const FALLBACK_ERROR = {
  code: FALLBACK_ERROR_CODE,
  message: getMessageFromCode(FALLBACK_ERROR_CODE)
}

/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 * 
 * @param {number} code - The integer error code
 * @param {string} fallbackMessage - The fallback message
 * @return {string} The corresponding message or the fallback message
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {

  if (Number.isInteger(code)) {

    const codeString = code.toString()
    if (errorValues[codeString]) return errorValues[codeString].message

    if (isJsonRpcServerError(code)) return JSON_RPC_SERVER_ERROR_MESSAGE

    // TODO: allow valid codes and messages to be extended
    // // EIP 1193 Status Codes
    // if (code >= 4000 && code <= 4999) return Something?
  }
  return fallbackMessage
}

/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 * 
 * @param {number} code - The code to check
 * @return {boolean} true if the code is valid, false otherwise.
 */
function isValidCode(code) {

  if (!Number.isInteger(code)) return false

  const codeString = code.toString()
  if (errorValues[codeString]) return true

  if (isJsonRpcServerError(code)) return true

  // TODO: allow valid codes and messages to be extended
  // // EIP 1193 Status Codes
  // if (code >= 4000 && code <= 4999) return true

  return false
}

/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 * Adds a 'stack' property if it exists on the given error.
 *
 * @param {any} error - The error to serialize.
 * @param {object} fallbackError - The custom fallback error values if the
 * given error is invalid.
 * @return {object} A standardized error object.
 */
function serializeError (error, fallbackError = FALLBACK_ERROR) {

  if (
    !fallbackError || 
    !Number.isInteger(fallbackError.code) ||
    typeof fallbackError.message !== 'string'
  ) {
    throw new Error(
      'fallbackError must contain integer number code and string message.'
    )
  }

  if (error instanceof EthereumRpcError) {
    return error.serialize()
  }

  const serialized = {}

  if (error && isValidCode(error.code)) {

    serialized.code = error.code

    if (error.message && typeof error.message === 'string') {
      serialized.message = error.message
      if (error.hasOwnProperty('data')) serialized.data = error.data
    } else {
      serialized.message = getMessageFromCode(serialized.code)
      serialized.data = { originalError: assignOriginalError(error) }
    }

  } else {
    serialized.code = fallbackError.code
    serialized.message = (
      error && error.message
        ? error.message
        : fallbackError.message
    )
    serialized.data = { originalError: assignOriginalError(error) }
  }

  if (error && error.stack) serialized.stack = error.stack
  return serialized
}

// Internal

function isJsonRpcServerError (code) {
  return code >= -32099 && code <= -32000
}

function assignOriginalError (error) {
  if (error && typeof error === 'object' && !Array.isArray(error)) {
    return Object.assign({}, error)
  }
  return error
}

// Exports

module.exports = {
  getMessageFromCode,
  isValidCode,
  serializeError,
  JSON_RPC_SERVER_ERROR_MESSAGE,
}


/***/ }),

/***/ "z8+S":
/*!***************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const { EthereumRpcError, EthereumProviderError } = __webpack_require__(/*! ./src/classes */ "Lf5n")
const {
  serializeError, getMessageFromCode,
} = __webpack_require__(/*! ./src/utils */ "rdiz")
const ethErrors = __webpack_require__(/*! ./src/errors */ "zUc0")
const ERROR_CODES = __webpack_require__(/*! ./src/errorCodes.json */ "drvL")

module.exports = {
  ethErrors,
  EthereumRpcError,
  EthereumProviderError,
  serializeError,
  getMessageFromCode,
  /** @type ErrorCodes */
  ERROR_CODES,
}

// Types

/**
 * @typedef {Object} EthereumProviderErrorCodes
 * @property {number} userRejectedRequest
 * @property {number} unauthorized
 * @property {number} unsupportedMethod
 */

/**
 * @typedef {Object} EthereumRpcErrorCodes
 * @property {number} parse
 * @property {number} invalidRequest
 * @property {number} invalidParams
 * @property {number} methodNotFound
 * @property {number} internal
 * @property {number} invalidInput
 * @property {number} resourceNotFound
 * @property {number} resourceUnavailable
 * @property {number} transactionRejected
 * @property {number} methodNotSupported
 */

/**
 * @typedef ErrorCodes
 * @property {EthereumRpcErrorCodes} rpc
 * @property {EthereumProviderErrorCodes} provider
 */


/***/ }),

/***/ "zUc0":
/*!********************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const { EthereumRpcError, EthereumProviderError } = __webpack_require__(/*! ./classes */ "Lf5n")
const { getMessageFromCode } = __webpack_require__(/*! ./utils */ "rdiz")
const ERROR_CODES = __webpack_require__(/*! ./errorCodes.json */ "drvL")

module.exports = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    parse: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.parse, opts
    ),

    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidRequest: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidRequest, opts
    ),

    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidParams: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidParams, opts
    ),

    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    methodNotFound: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.methodNotFound, opts
    ),

    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    internal: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.internal, opts
    ),

    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP 1474.
     * 
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    server: (opts) => {
      if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum RPC Server errors must provide single object argument.')
      }
      const { code } = opts
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        )
      }
      return getEthJsonRpcError(code, opts)
    },

    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidInput: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidInput, opts
    ),

    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    resourceNotFound: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.resourceNotFound, opts
    ),

    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    resourceUnavailable: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.resourceUnavailable, opts
    ),

    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    transactionRejected: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.transactionRejected, opts
    ),

    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    methodNotSupported: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.methodNotSupported, opts
    ),
  },

  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    userRejectedRequest: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.userRejectedRequest, opts
      )
    },

    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    unauthorized: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.unauthorized, opts
      )
    },

    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    unsupportedMethod: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.unsupportedMethod, opts
      )
    },

    /**
     * Get a custom Ethereum Provider error.
     * 
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} opts.message - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    custom: (opts) => {
      if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum Provider custom errors must provide single object argument.')
      }
      const { code, message, data } = opts
      if (!message || typeof message !== 'string') throw new Error(
        '"message" must be a nonempty string'
      )
      return new EthereumProviderError(code, message, data)
    },
  },
}

// Internal

function getEthJsonRpcError(code, opts) {
  const [ message, data ] = validateOpts(opts)
  return new EthereumRpcError(
    code,
    message || getMessageFromCode(code),
    data
  )
}

function getEthProviderError(code, opts) {
  const [ message, data ] = validateOpts(opts)
  return new EthereumProviderError(
    code,
    message || getMessageFromCode(code),
    data
  )
}

function validateOpts (opts) {
  let message, data
  if (opts) {
    if (typeof opts === 'string') {
      message = opts
    } else if (typeof opts === 'object' && !Array.isArray(opts)) {
      message = opts.message
      data = opts.data
    }
  }
  return [ message, data ]
}


/***/ })

}]);
//# sourceMappingURL=providerEngine-8b8d4e67-js-es2015.js.map