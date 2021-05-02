(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providerEngine-8b8d4e67-js"], {
    /***/
    14:
    /*!*************************!*\
      !*** request (ignored) ***!
      \*************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "1TIO":
    /*!***************************************************************!*\
      !*** ./node_modules/eth-json-rpc-errors/src/errorValues.json ***!
      \***************************************************************/

    /*! exports provided: 4001, 4100, 4200, -32700, -32600, -32601, -32602, -32603, -32000, -32001, -32002, -32003, -32004, default */

    /***/
    function TIO(module) {
      module.exports = JSON.parse("{\"4001\":{\"standard\":\"EIP 1193\",\"message\":\"User rejected the request.\"},\"4100\":{\"standard\":\"EIP 1193\",\"message\":\"The requested account and/or method has not been authorized by the user.\"},\"4200\":{\"standard\":\"EIP 1193\",\"message\":\"The requested method is not supported by this Ethereum provider.\"},\"-32700\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.\"},\"-32600\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"The JSON sent is not a valid Request object.\"},\"-32601\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"The method does not exist / is not available.\"},\"-32602\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Invalid method parameter(s).\"},\"-32603\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Internal JSON-RPC error.\"},\"-32000\":{\"standard\":\"EIP 1474\",\"message\":\"Invalid input.\"},\"-32001\":{\"standard\":\"EIP 1474\",\"message\":\"Resource not found.\"},\"-32002\":{\"standard\":\"EIP 1474\",\"message\":\"Resource unavailable.\"},\"-32003\":{\"standard\":\"EIP 1474\",\"message\":\"Transaction rejected.\"},\"-32004\":{\"standard\":\"EIP 1474\",\"message\":\"Method not supported.\"}}");
      /***/
    },

    /***/
    "Lf5n":
    /*!*********************************************************!*\
      !*** ./node_modules/eth-json-rpc-errors/src/classes.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function Lf5n(module, exports, __webpack_require__) {
      var safeStringify = __webpack_require__(
      /*! fast-safe-stringify */
      "N1pS");
      /**
       * @class JsonRpcError
       * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
       * per EIP 1474.
       * Permits any integer error code.
       */


      var EthereumRpcError = /*#__PURE__*/function (_Error) {
        _inherits(EthereumRpcError, _Error);

        var _super = _createSuper(EthereumRpcError);

        /**
         * Create an Ethereum JSON RPC error.
         * 
         * @param {number} code - The integer error code.
         * @param {string} message - The string message.
         * @param {any} [data] - The error data.
         */
        function EthereumRpcError(code, message, data) {
          var _this;

          _classCallCheck(this, EthereumRpcError);

          if (!Number.isInteger(code)) throw new Error('"code" must be an integer.');
          if (!message || typeof message !== 'string') throw new Error('"message" must be a nonempty string.');
          _this = _super.call(this, message);
          _this.code = code;
          if (data !== undefined) _this.data = data;
          return _this;
        }
        /**
         * Returns a plain object with all public class properties.
         * 
         * @returns {object} The serialized error. 
         */


        _createClass(EthereumRpcError, [{
          key: "serialize",
          value: function serialize() {
            var serialized = {
              code: this.code,
              message: this.message
            };
            if (this.data !== undefined) serialized.data = this.data;
            if (this.stack) serialized.stack = this.stack;
            return serialized;
          }
          /**
           * Return a string representation of the serialized error, omitting
           * any circular references.
           * 
           * @returns {string} The serialized error as a string.
           */

        }, {
          key: "toString",
          value: function toString() {
            return safeStringify(this.serialize(), stringifyReplacer, 2);
          }
        }]);

        return EthereumRpcError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      /**
       * @class EthereumRpcError
       * Error subclass implementing Ethereum Provider errors per EIP 1193.
       * Permits integer error codes in the [ 1000 <= 4999 ] range.
       */


      var EthereumProviderError = /*#__PURE__*/function (_EthereumRpcError) {
        _inherits(EthereumProviderError, _EthereumRpcError);

        var _super2 = _createSuper(EthereumProviderError);

        /**
         * Create an Ethereum JSON RPC error.
         * 
         * @param {number} code - The integer error code, in the [ 1000 <= 4999 ] range.
         * @param {string} message - The string message.
         * @param {any} [data] - The error data.
         */
        function EthereumProviderError(code, message, data) {
          _classCallCheck(this, EthereumProviderError);

          if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
          }

          return _super2.call(this, code, message, data);
        }

        return EthereumProviderError;
      }(EthereumRpcError); // Internal


      function isValidEthProviderCode(code) {
        return Number.isInteger(code) && code >= 1000 && code <= 4999;
      }

      function stringifyReplacer(_, value) {
        if (value === '[Circular]') {
          return;
        }

        return value;
      } // Exports


      module.exports = {
        EthereumRpcError: EthereumRpcError,
        EthereumProviderError: EthereumProviderError
      };
      /***/
    },

    /***/
    "WPTD":
    /*!***************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/rpc.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function WPTD(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (process) {
        var xhr = process.browser ? __webpack_require__(
        /*! xhr */
        "7sdD") : __webpack_require__(
        /*! request */
        14);

        var inherits = __webpack_require__(
        /*! util */
        "MCLT").inherits;

        var createPayload = __webpack_require__(
        /*! ../util/create-payload.js */
        "xQaN");

        var Subprovider = __webpack_require__(
        /*! ./subprovider.js */
        "Uu7K");

        var _webpack_require__ = __webpack_require__(
        /*! eth-json-rpc-errors */
        "z8+S"),
            ethErrors = _webpack_require__.ethErrors,
            serializeError = _webpack_require__.serializeError;

        module.exports = RpcSource;
        inherits(RpcSource, Subprovider);

        function RpcSource(opts) {
          var self = this;
          self.rpcUrl = opts.rpcUrl;
        }

        RpcSource.prototype.handleRequest = function (payload, next, end) {
          var self = this;
          var targetUrl = self.rpcUrl; // overwrite id to conflict with other concurrent users

          var sanitizedPayload = sanitizePayload(payload);
          var newPayload = createPayload(sanitizedPayload);
          xhr({
            uri: targetUrl,
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPayload),
            rejectUnauthorized: false,
            timeout: 20000
          }, function (err, res, body) {
            if (err) return end(serializeError(err)); // check for error code

            switch (res.statusCode) {
              case 405:
                return end(ethErrors.rpc.methodNotFound());

              case 504:
                // Gateway timeout
                return function () {
                  var msg = "Gateway timeout. The request took too long to process. ";
                  msg += "This can happen when querying logs over too wide a block range.";
                  var err = new Error(msg);
                  return end(serializeError(err));
                }();

              case 429:
                // Too many requests (rate limiting)
                return function () {
                  var err = new Error("Too Many Requests");
                  return end(serializeError(err));
                }();

              default:
                if (res.statusCode != 200) {
                  var msg = 'Unknown Error: ' + res.body;

                  var _err = new Error(msg);

                  return end(serializeError(_err));
                }

            } // parse response


            var data;

            try {
              data = JSON.parse(body);
            } catch (err) {
              console.error(err.stack);
              return end(serializeError(err));
            }

            if (data.error) return end(data.error);
            end(null, data.result);
          });
        }; // drops any non-standard params


        function sanitizePayload(payload) {
          return {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            method: payload.method,
            params: payload.params
          };
        }
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "ZdnY":
    /*!**********************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/providerEngine-8b8d4e67.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function ZdnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! regenerator-runtime/runtime */
      "ls82");
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _onboard_87b65846_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./onboard-87b65846.js */
      "hWsi");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bignumber.js */
      "kB5k");
      /* harmony import */


      var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! bnc-sdk */
      "/TMw");
      /* harmony import */


      var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! bowser */
      "M39V");
      /* harmony import */


      var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var web3_provider_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! web3-provider-engine */
      "f4g2");
      /* harmony import */


      var web3_provider_engine__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! web3-provider-engine/subproviders/rpc */
      "WPTD");
      /* harmony import */


      var web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! web3-provider-engine/subproviders/hooked-wallet */
      "Rlsf");
      /* harmony import */


      var web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! web3-provider-engine/subproviders/subscriptions */
      "EqmL");
      /* harmony import */


      var web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! web3-provider-engine/subproviders/filters */
      "cC/c");
      /* harmony import */


      var web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_9__);

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
      /* harmony default export */


      __webpack_exports__["default"] = createProvider;
      /***/
    },

    /***/
    "drvL":
    /*!**************************************************************!*\
      !*** ./node_modules/eth-json-rpc-errors/src/errorCodes.json ***!
      \**************************************************************/

    /*! exports provided: rpc, provider, default */

    /***/
    function drvL(module) {
      module.exports = JSON.parse("{\"rpc\":{\"invalidInput\":-32000,\"resourceNotFound\":-32001,\"resourceUnavailable\":-32002,\"transactionRejected\":-32003,\"methodNotSupported\":-32004,\"parse\":-32700,\"invalidRequest\":-32600,\"methodNotFound\":-32601,\"invalidParams\":-32602,\"internal\":-32603},\"provider\":{\"userRejectedRequest\":4001,\"unauthorized\":4100,\"unsupportedMethod\":4200}}");
      /***/
    },

    /***/
    "rdiz":
    /*!*******************************************************!*\
      !*** ./node_modules/eth-json-rpc-errors/src/utils.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function rdiz(module, exports, __webpack_require__) {
      var errorValues = __webpack_require__(
      /*! ./errorValues.json */
      "1TIO");

      var FALLBACK_ERROR_CODE = __webpack_require__(
      /*! ./errorCodes.json */
      "drvL").rpc.internal;

      var _webpack_require__2 = __webpack_require__(
      /*! ./classes */
      "Lf5n"),
          EthereumRpcError = _webpack_require__2.EthereumRpcError;

      var JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
      var FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
      var FALLBACK_ERROR = {
        code: FALLBACK_ERROR_CODE,
        message: getMessageFromCode(FALLBACK_ERROR_CODE)
      };
      /**
       * Gets the message for a given code, or a fallback message if the code has
       * no corresponding message.
       * 
       * @param {number} code - The integer error code
       * @param {string} fallbackMessage - The fallback message
       * @return {string} The corresponding message or the fallback message
       */

      function getMessageFromCode(code) {
        var fallbackMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FALLBACK_MESSAGE;

        if (Number.isInteger(code)) {
          var codeString = code.toString();
          if (errorValues[codeString]) return errorValues[codeString].message;
          if (isJsonRpcServerError(code)) return JSON_RPC_SERVER_ERROR_MESSAGE; // TODO: allow valid codes and messages to be extended
          // // EIP 1193 Status Codes
          // if (code >= 4000 && code <= 4999) return Something?
        }

        return fallbackMessage;
      }
      /**
       * Returns whether the given code is valid.
       * A code is only valid if it has a message.
       * 
       * @param {number} code - The code to check
       * @return {boolean} true if the code is valid, false otherwise.
       */


      function isValidCode(code) {
        if (!Number.isInteger(code)) return false;
        var codeString = code.toString();
        if (errorValues[codeString]) return true;
        if (isJsonRpcServerError(code)) return true; // TODO: allow valid codes and messages to be extended
        // // EIP 1193 Status Codes
        // if (code >= 4000 && code <= 4999) return true

        return false;
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


      function serializeError(error) {
        var fallbackError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FALLBACK_ERROR;

        if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== 'string') {
          throw new Error('fallbackError must contain integer number code and string message.');
        }

        if (error instanceof EthereumRpcError) {
          return error.serialize();
        }

        var serialized = {};

        if (error && isValidCode(error.code)) {
          serialized.code = error.code;

          if (error.message && typeof error.message === 'string') {
            serialized.message = error.message;
            if (error.hasOwnProperty('data')) serialized.data = error.data;
          } else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = {
              originalError: assignOriginalError(error)
            };
          }
        } else {
          serialized.code = fallbackError.code;
          serialized.message = error && error.message ? error.message : fallbackError.message;
          serialized.data = {
            originalError: assignOriginalError(error)
          };
        }

        if (error && error.stack) serialized.stack = error.stack;
        return serialized;
      } // Internal


      function isJsonRpcServerError(code) {
        return code >= -32099 && code <= -32000;
      }

      function assignOriginalError(error) {
        if (error && typeof error === 'object' && !Array.isArray(error)) {
          return Object.assign({}, error);
        }

        return error;
      } // Exports


      module.exports = {
        getMessageFromCode: getMessageFromCode,
        isValidCode: isValidCode,
        serializeError: serializeError,
        JSON_RPC_SERVER_ERROR_MESSAGE: JSON_RPC_SERVER_ERROR_MESSAGE
      };
      /***/
    },

    /***/
    "z8+S":
    /*!***************************************************!*\
      !*** ./node_modules/eth-json-rpc-errors/index.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function z8S(module, exports, __webpack_require__) {
      var _webpack_require__3 = __webpack_require__(
      /*! ./src/classes */
      "Lf5n"),
          EthereumRpcError = _webpack_require__3.EthereumRpcError,
          EthereumProviderError = _webpack_require__3.EthereumProviderError;

      var _webpack_require__4 = __webpack_require__(
      /*! ./src/utils */
      "rdiz"),
          serializeError = _webpack_require__4.serializeError,
          getMessageFromCode = _webpack_require__4.getMessageFromCode;

      var ethErrors = __webpack_require__(
      /*! ./src/errors */
      "zUc0");

      var ERROR_CODES = __webpack_require__(
      /*! ./src/errorCodes.json */
      "drvL");

      module.exports = {
        ethErrors: ethErrors,
        EthereumRpcError: EthereumRpcError,
        EthereumProviderError: EthereumProviderError,
        serializeError: serializeError,
        getMessageFromCode: getMessageFromCode,

        /** @type ErrorCodes */
        ERROR_CODES: ERROR_CODES
      }; // Types

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

      /***/
    },

    /***/
    "zUc0":
    /*!********************************************************!*\
      !*** ./node_modules/eth-json-rpc-errors/src/errors.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function zUc0(module, exports, __webpack_require__) {
      var _webpack_require__5 = __webpack_require__(
      /*! ./classes */
      "Lf5n"),
          EthereumRpcError = _webpack_require__5.EthereumRpcError,
          EthereumProviderError = _webpack_require__5.EthereumProviderError;

      var _webpack_require__6 = __webpack_require__(
      /*! ./utils */
      "rdiz"),
          getMessageFromCode = _webpack_require__6.getMessageFromCode;

      var ERROR_CODES = __webpack_require__(
      /*! ./errorCodes.json */
      "drvL");

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
          parse: function parse(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.parse, opts);
          },

          /**
           * Get a JSON RPC 2.0 Invalid Request (-32600) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          invalidRequest: function invalidRequest(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.invalidRequest, opts);
          },

          /**
           * Get a JSON RPC 2.0 Invalid Params (-32602) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          invalidParams: function invalidParams(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.invalidParams, opts);
          },

          /**
           * Get a JSON RPC 2.0 Method Not Found (-32601) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          methodNotFound: function methodNotFound(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.methodNotFound, opts);
          },

          /**
           * Get a JSON RPC 2.0 Internal (-32603) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          internal: function internal(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.internal, opts);
          },

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
          server: function server(opts) {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
              throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }

            var code = opts.code;

            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
              throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }

            return getEthJsonRpcError(code, opts);
          },

          /**
           * Get an Ethereum JSON RPC Invalid Input (-32000) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          invalidInput: function invalidInput(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.invalidInput, opts);
          },

          /**
           * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          resourceNotFound: function resourceNotFound(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.resourceNotFound, opts);
          },

          /**
           * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          resourceUnavailable: function resourceUnavailable(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.resourceUnavailable, opts);
          },

          /**
           * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          transactionRejected: function transactionRejected(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.transactionRejected, opts);
          },

          /**
           * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumRpcError} The error
           */
          methodNotSupported: function methodNotSupported(opts) {
            return getEthJsonRpcError(ERROR_CODES.rpc.methodNotSupported, opts);
          }
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
          userRejectedRequest: function userRejectedRequest(opts) {
            return getEthProviderError(ERROR_CODES.provider.userRejectedRequest, opts);
          },

          /**
           * Get an Ethereum Provider Unauthorized (4100) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumProviderError} The error
           */
          unauthorized: function unauthorized(opts) {
            return getEthProviderError(ERROR_CODES.provider.unauthorized, opts);
          },

          /**
           * Get an Ethereum Provider Unsupported Method (4200) error.
           * 
           * @param {Object|string} [opts] - Options object or error message string
           * @param {string} [opts.message] - The error message
           * @param {any} [opts.data] - Error data
           * @returns {EthereumProviderError} The error
           */
          unsupportedMethod: function unsupportedMethod(opts) {
            return getEthProviderError(ERROR_CODES.provider.unsupportedMethod, opts);
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
          custom: function custom(opts) {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
              throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }

            var code = opts.code,
                message = opts.message,
                data = opts.data;
            if (!message || typeof message !== 'string') throw new Error('"message" must be a nonempty string');
            return new EthereumProviderError(code, message, data);
          }
        }
      }; // Internal

      function getEthJsonRpcError(code, opts) {
        var _validateOpts = validateOpts(opts),
            _validateOpts2 = _slicedToArray(_validateOpts, 2),
            message = _validateOpts2[0],
            data = _validateOpts2[1];

        return new EthereumRpcError(code, message || getMessageFromCode(code), data);
      }

      function getEthProviderError(code, opts) {
        var _validateOpts3 = validateOpts(opts),
            _validateOpts4 = _slicedToArray(_validateOpts3, 2),
            message = _validateOpts4[0],
            data = _validateOpts4[1];

        return new EthereumProviderError(code, message || getMessageFromCode(code), data);
      }

      function validateOpts(opts) {
        var message, data;

        if (opts) {
          if (typeof opts === 'string') {
            message = opts;
          } else if (typeof opts === 'object' && !Array.isArray(opts)) {
            message = opts.message;
            data = opts.data;
          }
        }

        return [message, data];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=providerEngine-8b8d4e67-js-es5.js.map