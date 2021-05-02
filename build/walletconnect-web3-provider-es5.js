(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walletconnect-web3-provider"], {
    /***/
    "+7Xm":
    /*!***************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/browser.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function Xm(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var windowMetadata = tslib_1.__importStar(__webpack_require__(
      /*! window-metadata */
      "P4H2"));

      var windowGetters = tslib_1.__importStar(__webpack_require__(
      /*! window-getters */
      "TjcH"));

      var detect_browser_1 = __webpack_require__(
      /*! detect-browser */
      "wkci");

      function detectEnv(userAgent) {
        return detect_browser_1.detect(userAgent);
      }

      exports.detectEnv = detectEnv;

      function detectOS() {
        var env = detectEnv();
        return env && env.os ? env.os : undefined;
      }

      exports.detectOS = detectOS;

      function isIOS() {
        var os = detectOS();
        return os ? os.toLowerCase().includes("ios") : false;
      }

      exports.isIOS = isIOS;

      function isMobile() {
        var os = detectOS();
        return os ? os.toLowerCase().includes("android") || os.toLowerCase().includes("ios") : false;
      }

      exports.isMobile = isMobile;

      function isNode() {
        var env = detectEnv();
        var result = env && env.name ? env.name.toLowerCase() === "node" : false;
        return result;
      }

      exports.isNode = isNode;

      function isBrowser() {
        var result = !isNode() && !!exports.getNavigator();
        return result;
      }

      exports.isBrowser = isBrowser;
      exports.getFromWindow = windowGetters.getFromWindow;
      exports.getFromWindowOrThrow = windowGetters.getFromWindowOrThrow;
      exports.getDocumentOrThrow = windowGetters.getDocumentOrThrow;
      exports.getDocument = windowGetters.getDocument;
      exports.getNavigatorOrThrow = windowGetters.getNavigatorOrThrow;
      exports.getNavigator = windowGetters.getNavigator;
      exports.getLocationOrThrow = windowGetters.getLocationOrThrow;
      exports.getLocation = windowGetters.getLocation;
      exports.getCryptoOrThrow = windowGetters.getCryptoOrThrow;
      exports.getCrypto = windowGetters.getCrypto;
      exports.getLocalStorageOrThrow = windowGetters.getLocalStorageOrThrow;
      exports.getLocalStorage = windowGetters.getLocalStorage;

      function getClientMeta() {
        return windowMetadata.getWindowMetadata();
      }

      exports.getClientMeta = getClientMeta; //# sourceMappingURL=browser.js.map

      /***/
    },

    /***/
    "/jfU":
    /*!**************************************************!*\
      !*** ./node_modules/enc-utils/dist/cjs/index.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function jfU(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var bn_js_1 = __importDefault(__webpack_require__(
        /*! bn.js */
        "D+Mp"));

        var is_typedarray_1 = __importDefault(__webpack_require__(
        /*! is-typedarray */
        "qXd6"));

        var typedarray_to_buffer_1 = __importDefault(__webpack_require__(
        /*! typedarray-to-buffer */
        "BJdv"));

        var ENC_HEX = 'hex';
        var ENC_UTF8 = 'utf8';
        var TYPE_BUFFER = 'buffer';
        var TYPE_ARRAY = 'array';
        var TYPE_TYPED_ARRAY = 'typed-array';
        var TYPE_ARRAY_BUFFER = 'array-buffer';
        var STRING_ZERO = '0';

        function bufferToArray(buf) {
          return new Uint8Array(buf);
        }

        exports.bufferToArray = bufferToArray;

        function bufferToHex(buf) {
          var prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var hex = buf.toString(ENC_HEX);
          return prefixed ? addHexPrefix(hex) : hex;
        }

        exports.bufferToHex = bufferToHex;

        function bufferToUtf8(buf) {
          return buf.toString(ENC_UTF8);
        }

        exports.bufferToUtf8 = bufferToUtf8;

        function bufferToNumber(buf) {
          return hexToNumber(bufferToHex(buf));
        }

        exports.bufferToNumber = bufferToNumber;

        function arrayToBuffer(arr) {
          return typedarray_to_buffer_1["default"](arr);
        }

        exports.arrayToBuffer = arrayToBuffer;

        function arrayToHex(arr) {
          var prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return bufferToHex(arrayToBuffer(arr), prefixed);
        }

        exports.arrayToHex = arrayToHex;

        function arrayToUtf8(arr) {
          return bufferToUtf8(arrayToBuffer(arr));
        }

        exports.arrayToUtf8 = arrayToUtf8;

        function arrayToNumber(arr) {
          return bufferToNumber(arrayToBuffer(arr));
        }

        exports.arrayToNumber = arrayToNumber;

        function hexToBuffer(hex) {
          return Buffer.from(removeHexPrefix(hex), ENC_HEX);
        }

        exports.hexToBuffer = hexToBuffer;

        function hexToArray(hex) {
          return bufferToArray(hexToBuffer(hex));
        }

        exports.hexToArray = hexToArray;

        function hexToUtf8(hex) {
          return bufferToUtf8(hexToBuffer(hex));
        }

        exports.hexToUtf8 = hexToUtf8;

        function hexToNumber(hex) {
          return new bn_js_1["default"](removeHexPrefix(hex), 'hex').toNumber();
        }

        exports.hexToNumber = hexToNumber;

        function utf8ToBuffer(utf8) {
          return Buffer.from(utf8, ENC_UTF8);
        }

        exports.utf8ToBuffer = utf8ToBuffer;

        function utf8ToArray(utf8) {
          return bufferToArray(utf8ToBuffer(utf8));
        }

        exports.utf8ToArray = utf8ToArray;

        function utf8ToHex(utf8) {
          var prefixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return bufferToHex(utf8ToBuffer(utf8), prefixed);
        }

        exports.utf8ToHex = utf8ToHex;

        function utf8ToNumber(utf8) {
          return new bn_js_1["default"](utf8, 10).toNumber();
        }

        exports.utf8ToNumber = utf8ToNumber;

        function numberToBuffer(num) {
          var hex = numberToHex(num);
          return hexToBuffer(hex);
        }

        exports.numberToBuffer = numberToBuffer;

        function numberToArray(num) {
          var hex = numberToHex(num);
          return hexToArray(hex);
        }

        exports.numberToArray = numberToArray;

        function numberToHex(num, prefixed) {
          var hex = removeHexPrefix(sanitizeHex(new bn_js_1["default"](num).toString(16)));
          return prefixed ? addHexPrefix(hex) : hex;
        }

        exports.numberToHex = numberToHex;

        function numberToUtf8(num) {
          var utf8 = new bn_js_1["default"](num).toString();
          return utf8;
        }

        exports.numberToUtf8 = numberToUtf8;

        function isHexString(value, length) {
          if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
            return false;
          }

          if (length && value.length !== 2 + 2 * length) {
            return false;
          }

          return true;
        }

        exports.isHexString = isHexString;

        function isBuffer(val) {
          return Buffer.isBuffer(val);
        }

        exports.isBuffer = isBuffer;

        function isTypedArray(val) {
          return is_typedarray_1["default"].strict(val) && !isBuffer(val);
        }

        exports.isTypedArray = isTypedArray;

        function isArrayBuffer(val) {
          return !isTypedArray(val) && !isBuffer(val) && typeof val.byteLength !== 'undefined';
        }

        exports.isArrayBuffer = isArrayBuffer;

        function getType(val) {
          if (isBuffer(val)) {
            return TYPE_BUFFER;
          } else if (isTypedArray(val)) {
            return TYPE_TYPED_ARRAY;
          } else if (isArrayBuffer(val)) {
            return TYPE_ARRAY_BUFFER;
          } else if (Array.isArray(val)) {
            return TYPE_ARRAY;
          } else {
            return typeof val;
          }
        }

        exports.getType = getType;

        function getEncoding(str) {
          if (isHexString(str)) {
            return ENC_HEX;
          }

          return ENC_UTF8;
        }

        exports.getEncoding = getEncoding;

        function concatBuffers() {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var result = Buffer.concat(args);
          return result;
        }

        exports.concatBuffers = concatBuffers;

        function trimLeft(data, length) {
          var diff = data.length - length;

          if (diff > 0) {
            data = data.slice(diff);
          }

          return data;
        }

        exports.trimLeft = trimLeft;

        function trimRight(data, length) {
          return data.slice(0, length);
        }

        exports.trimRight = trimRight;

        function padString(str, length, left) {
          var padding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : STRING_ZERO;
          var diff = length - str.length;
          var result = str;

          if (diff > 0) {
            var pad = padding.repeat(diff);
            result = left ? pad + str : str + pad;
          }

          return result;
        }

        function padLeft(str, length) {
          var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STRING_ZERO;
          return padString(str, length, true, padding);
        }

        exports.padLeft = padLeft;

        function padRight(str, length) {
          var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STRING_ZERO;
          return padString(str, length, false, padding);
        }

        exports.padRight = padRight;

        function removeHexPrefix(hex) {
          return hex.replace(/^0x/, '');
        }

        exports.removeHexPrefix = removeHexPrefix;

        function addHexPrefix(hex) {
          return hex.startsWith('0x') ? hex : "0x".concat(hex);
        }

        exports.addHexPrefix = addHexPrefix;

        function sanitizeHex(hex) {
          hex = removeHexPrefix(hex);
          hex = hex.length % 2 !== 0 ? STRING_ZERO + hex : hex;

          if (hex) {
            hex = addHexPrefix(hex);
          }

          return hex;
        }

        exports.sanitizeHex = sanitizeHex;

        function removeHexLeadingZeros(hex) {
          var prefixed = hex.startsWith('0x');
          hex = removeHexPrefix(hex);
          hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
          return prefixed ? addHexPrefix(hex) : hex;
        }

        exports.removeHexLeadingZeros = removeHexLeadingZeros; //# sourceMappingURL=index.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "/zJV":
    /*!**************************************************************!*\
      !*** ./node_modules/@walletconnect/core/dist/cjs/storage.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function zJV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var utils_1 = __webpack_require__(
      /*! @walletconnect/utils */
      "xI+a");

      var SessionStorage = /*#__PURE__*/function () {
        function SessionStorage() {
          _classCallCheck2(this, SessionStorage);

          this.storageId = "walletconnect";
        }

        _createClass(SessionStorage, [{
          key: "getSession",
          value: function getSession() {
            var session = null;
            var json = utils_1.getLocal(this.storageId);

            if (json && utils_1.isWalletConnectSession(json)) {
              session = json;
            }

            return session;
          }
        }, {
          key: "setSession",
          value: function setSession(session) {
            utils_1.setLocal(this.storageId, session);
            return session;
          }
        }, {
          key: "removeSession",
          value: function removeSession() {
            utils_1.removeLocal(this.storageId);
          }
        }]);

        return SessionStorage;
      }();

      exports["default"] = SessionStorage; //# sourceMappingURL=storage.js.map

      /***/
    },

    /***/
    "00uA":
    /*!***************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/session.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function uA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var url_1 = __webpack_require__(
      /*! ./url */
      "bmOx");

      function isWalletConnectSession(object) {
        return typeof object.bridge !== "undefined";
      }

      exports.isWalletConnectSession = isWalletConnectSession;

      function parseWalletConnectUri(str) {
        var pathStart = str.indexOf(":");
        var pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
        var protocol = str.substring(0, pathStart);
        var path = str.substring(pathStart + 1, pathEnd);

        function parseRequiredParams(path) {
          var separator = "@";
          var values = path.split(separator);
          var requiredParams = {
            handshakeTopic: values[0],
            version: parseInt(values[1], 10)
          };
          return requiredParams;
        }

        var requiredParams = parseRequiredParams(path);
        var queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";

        function parseQueryParams(queryString) {
          var result = url_1.parseQueryString(queryString);
          var parameters = {
            key: result.key || "",
            bridge: result.bridge || ""
          };
          return parameters;
        }

        var queryParams = parseQueryParams(queryString);
        var result = Object.assign(Object.assign({
          protocol: protocol
        }, requiredParams), queryParams);
        return result;
      }

      exports.parseWalletConnectUri = parseWalletConnectUri; //# sourceMappingURL=session.js.map

      /***/
    },

    /***/
    "0FX9":
    /*!********************************************!*\
      !*** ./node_modules/qrcode/lib/browser.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function FX9(module, exports, __webpack_require__) {
      var canPromise = __webpack_require__(
      /*! ./can-promise */
      "Z92M");

      var QRCode = __webpack_require__(
      /*! ./core/qrcode */
      "qmMu");

      var CanvasRenderer = __webpack_require__(
      /*! ./renderer/canvas */
      "QUaw");

      var SvgRenderer = __webpack_require__(
      /*! ./renderer/svg-tag.js */
      "QAZZ");

      function renderCanvas(renderFunc, canvas, text, opts, cb) {
        var args = [].slice.call(arguments, 1);
        var argsNum = args.length;
        var isLastArgCb = typeof args[argsNum - 1] === 'function';

        if (!isLastArgCb && !canPromise()) {
          throw new Error('Callback required as last argument');
        }

        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error('Too few arguments provided');
          }

          if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
          } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
              cb = opts;
              opts = undefined;
            } else {
              cb = opts;
              opts = text;
              text = canvas;
              canvas = undefined;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error('Too few arguments provided');
          }

          if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
          } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
          }

          return new Promise(function (resolve, reject) {
            try {
              var data = QRCode.create(text, opts);
              resolve(renderFunc(data, canvas, opts));
            } catch (e) {
              reject(e);
            }
          });
        }

        try {
          var data = QRCode.create(text, opts);
          cb(null, renderFunc(data, canvas, opts));
        } catch (e) {
          cb(e);
        }
      }

      exports.create = QRCode.create;
      exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL); // only svg for now.

      exports.toString = renderCanvas.bind(null, function (data, _, opts) {
        return SvgRenderer.render(data, opts);
      });
      /***/
    },

    /***/
    "0cyn":
    /*!******************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/validators.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function cyn(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var encUtils = tslib_1.__importStar(__webpack_require__(
      /*! enc-utils */
      "/jfU"));

      var constants_1 = __webpack_require__(
      /*! ./constants */
      "621o");

      function isEmptyString(value) {
        return value === "" || typeof value === "string" && value.trim() === "";
      }

      exports.isEmptyString = isEmptyString;

      function isEmptyArray(array) {
        return !(array && array.length);
      }

      exports.isEmptyArray = isEmptyArray;

      function isBuffer(val) {
        return encUtils.isBuffer(val);
      }

      exports.isBuffer = isBuffer;

      function isTypedArray(val) {
        return encUtils.isTypedArray(val);
      }

      exports.isTypedArray = isTypedArray;

      function isArrayBuffer(val) {
        return encUtils.isArrayBuffer(val);
      }

      exports.isArrayBuffer = isArrayBuffer;

      function getType(val) {
        return encUtils.getType(val);
      }

      exports.getType = getType;

      function getEncoding(val) {
        return encUtils.getEncoding(val);
      }

      exports.getEncoding = getEncoding;

      function isHexString(value, length) {
        return encUtils.isHexString(value, length);
      }

      exports.isHexString = isHexString;

      function isJsonRpcSubscription(object) {
        return typeof object.params === "object";
      }

      exports.isJsonRpcSubscription = isJsonRpcSubscription;

      function isJsonRpcRequest(object) {
        return typeof object.method !== "undefined";
      }

      exports.isJsonRpcRequest = isJsonRpcRequest;

      function isJsonRpcResponseSuccess(object) {
        return typeof object.result !== "undefined";
      }

      exports.isJsonRpcResponseSuccess = isJsonRpcResponseSuccess;

      function isJsonRpcResponseError(object) {
        return typeof object.error !== "undefined";
      }

      exports.isJsonRpcResponseError = isJsonRpcResponseError;

      function isInternalEvent(object) {
        return typeof object.event !== "undefined";
      }

      exports.isInternalEvent = isInternalEvent;

      function isReservedEvent(event) {
        return constants_1.reservedEvents.includes(event) || event.startsWith("wc_");
      }

      exports.isReservedEvent = isReservedEvent;

      function isSilentPayload(request) {
        if (request.method.startsWith("wc_")) {
          return true;
        }

        if (constants_1.signingMethods.includes(request.method)) {
          return false;
        }

        return true;
      }

      exports.isSilentPayload = isSilentPayload; //# sourceMappingURL=validators.js.map

      /***/
    },

    /***/
    "1sBl":
    /*!***********************************************************!*\
      !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function sBl(module, exports, __webpack_require__) {
      /**
       * Alignment pattern are fixed reference pattern in defined positions
       * in a matrix symbology, which enables the decode software to re-synchronise
       * the coordinate mapping of the image modules in the event of moderate amounts
       * of distortion of the image.
       *
       * Alignment patterns are present only in QR Code symbols of version 2 or larger
       * and their number depends on the symbol version.
       */
      var getSymbolSize = __webpack_require__(
      /*! ./utils */
      "e/Dd").getSymbolSize;
      /**
       * Calculate the row/column coordinates of the center module of each alignment pattern
       * for the specified QR Code version.
       *
       * The alignment patterns are positioned symmetrically on either side of the diagonal
       * running from the top left corner of the symbol to the bottom right corner.
       *
       * Since positions are simmetrical only half of the coordinates are returned.
       * Each item of the array will represent in turn the x and y coordinate.
       * @see {@link getPositions}
       *
       * @param  {Number} version QR Code version
       * @return {Array}          Array of coordinate
       */


      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1) return [];
        var posCount = Math.floor(version / 7) + 2;
        var size = getSymbolSize(version);
        var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        var positions = [size - 7]; // Last coord is always (size - 7)

        for (var i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }

        positions.push(6); // First coord is always 6

        return positions.reverse();
      };
      /**
       * Returns an array containing the positions of each alignment pattern.
       * Each array's element represent the center point of the pattern as (x, y) coordinates
       *
       * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
       * and filtering out the items that overlaps with finder pattern
       *
       * @example
       * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
       * The alignment patterns, therefore, are to be centered on (row, column)
       * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
       * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
       * and are not therefore used for alignment patterns.
       *
       * var pos = getPositions(7)
       * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
       *
       * @param  {Number} version QR Code version
       * @return {Array}          Array of coordinates
       */


      exports.getPositions = function getPositions(version) {
        var coords = [];
        var pos = exports.getRowColCoords(version);
        var posLength = pos.length;

        for (var i = 0; i < posLength; i++) {
          for (var j = 0; j < posLength; j++) {
            // Skip if position is occupied by finder patterns
            if (i === 0 && j === 0 || // top-left
            i === 0 && j === posLength - 1 || // bottom-left
            i === posLength - 1 && j === 0) {
              // top-right
              continue;
            }

            coords.push([pos[i], pos[j]]);
          }
        }

        return coords;
      };
      /***/

    },

    /***/
    "2yqT":
    /*!*****************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/cache.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function yqT(module, exports, __webpack_require__) {
      var ProviderSubprovider = __webpack_require__(
      /*! ./json-rpc-engine-middleware */
      "ja2i");

      var createBlockCacheMiddleware = __webpack_require__(
      /*! eth-json-rpc-middleware/block-cache */
      "nSd/");

      var BlockCacheSubprovider = /*#__PURE__*/function (_ProviderSubprovider) {
        _inherits(BlockCacheSubprovider, _ProviderSubprovider);

        var _super = _createSuper(BlockCacheSubprovider);

        function BlockCacheSubprovider(opts) {
          _classCallCheck2(this, BlockCacheSubprovider);

          return _super.call(this, function (_ref) {
            var blockTracker = _ref.blockTracker;
            return createBlockCacheMiddleware(Object.assign({
              blockTracker: blockTracker
            }, opts));
          });
        }

        return BlockCacheSubprovider;
      }(ProviderSubprovider);

      module.exports = BlockCacheSubprovider;
      /***/
    },

    /***/
    "3X7Y":
    /*!******************************************************!*\
      !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function X7Y(module, exports, __webpack_require__) {
      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");

      function NumericData(data) {
        this.mode = Mode.NUMERIC;
        this.data = data.toString();
      }

      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };

      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };

      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };

      NumericData.prototype.write = function write(bitBuffer) {
        var i, group, value; // The input data string is divided into groups of three digits,
        // and each group is converted to its 10-bit binary equivalent.

        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer.put(value, 10);
        } // If the number of input digits is not an exact multiple of three,
        // the final one or two digits are converted to 4 or 7 bits respectively.


        var remainingNum = this.data.length - i;

        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer.put(value, remainingNum * 3 + 1);
        }
      };

      module.exports = NumericData;
      /***/
    },

    /***/
    "58VP":
    /*!*****************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/helpers/validators.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function VP(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var constants_1 = __webpack_require__(
        /*! ../constants */
        "FEYL");

        function assert(condition, message) {
          if (!condition) {
            throw new Error(message || 'Assertion failed');
          }
        }

        exports.assert = assert;

        function isScalar(x) {
          return Buffer.isBuffer(x) && x.length === 32;
        }

        exports.isScalar = isScalar;

        function isValidPrivateKey(privateKey) {
          if (!isScalar(privateKey)) {
            return false;
          }

          return privateKey.compare(constants_1.ZERO32) > 0 && privateKey.compare(constants_1.EC_GROUP_ORDER) < 0;
        }

        exports.isValidPrivateKey = isValidPrivateKey;

        function equalConstTime(b1, b2) {
          if (b1.length !== b2.length) {
            return false;
          }

          var res = 0;

          for (var i = 0; i < b1.length; i++) {
            res |= b1[i] ^ b2[i];
          }

          return res === 0;
        }

        exports.equalConstTime = equalConstTime;

        function isValidKeyLength(length) {
          return !(length <= constants_1.LENGTH_0 || length > constants_1.MAX_KEY_LENGTH || parseInt(String(length)) !== length);
        }

        exports.isValidKeyLength = isValidKeyLength; //# sourceMappingURL=validators.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "5hj7":
    /*!**************************************************************************!*\
      !*** ./node_modules/@walletconnect/socket-transport/dist/cjs/network.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function hj7(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var NetworkMonitor = /*#__PURE__*/function () {
        function NetworkMonitor() {
          var _this = this;

          _classCallCheck2(this, NetworkMonitor);

          this._eventEmitters = [];

          if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
            window.addEventListener("online", function () {
              return _this.trigger("online");
            });
            window.addEventListener("offline", function () {
              return _this.trigger("offline");
            });
          }
        }

        _createClass(NetworkMonitor, [{
          key: "on",
          value: function on(event, callback) {
            this._eventEmitters.push({
              event: event,
              callback: callback
            });
          }
        }, {
          key: "trigger",
          value: function trigger(event) {
            var eventEmitters = [];

            if (event) {
              eventEmitters = this._eventEmitters.filter(function (eventEmitter) {
                return eventEmitter.event === event;
              });
            }

            eventEmitters.forEach(function (eventEmitter) {
              eventEmitter.callback();
            });
          }
        }]);

        return NetworkMonitor;
      }();

      exports["default"] = NetworkMonitor; //# sourceMappingURL=network.js.map

      /***/
    },

    /***/
    "621o":
    /*!*****************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/constants.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function o(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.reservedEvents = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close"];
      exports.signingMethods = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign"];
      exports.stateMethods = ["eth_accounts", "eth_chainId", "net_version"];
      exports.mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE"; //# sourceMappingURL=constants.js.map

      /***/
    },

    /***/
    "7L9u":
    /*!************************************************************************!*\
      !*** ./node_modules/@walletconnect/socket-transport/dist/cjs/index.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function L9u(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (global) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var tslib_1 = __webpack_require__(
        /*! tslib */
        "mrSG");

        var network_1 = tslib_1.__importDefault(__webpack_require__(
        /*! ./network */
        "5hj7"));

        var WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : __webpack_require__(
        /*! ws */
        "RmUe");

        var SocketTransport = /*#__PURE__*/function () {
          function SocketTransport(opts) {
            var _this2 = this;

            _classCallCheck2(this, SocketTransport);

            this._queue = [];
            this._events = [];
            this._subscriptions = [];
            this._initiating = false;
            this._url = "";
            this._netMonitor = null;
            this._socket = null;
            this._nextSocket = null;
            this._subscriptions = opts.subscriptions || [];
            this._netMonitor = opts.netMonitor || new network_1["default"]();

            if (!opts.url || typeof opts.url !== "string") {
              throw new Error("Missing or invalid WebSocket url");
            }

            this._url = opts.url;

            this._netMonitor.on("online", function () {
              return _this2._socketCreate();
            });
          }

          _createClass(SocketTransport, [{
            key: "open",
            value: function open() {
              this._socketCreate();
            }
          }, {
            key: "close",
            value: function close() {
              this._socketClose();
            }
          }, {
            key: "send",
            value: function send(message, topic, silent) {
              if (!topic || typeof topic !== "string") {
                throw new Error("Missing or invalid topic field");
              }

              this._socketSend({
                topic: topic,
                type: "pub",
                payload: message,
                silent: !!silent
              });
            }
          }, {
            key: "subscribe",
            value: function subscribe(topic) {
              this._socketSend({
                topic: topic,
                type: "sub",
                payload: "",
                silent: true
              });
            }
          }, {
            key: "on",
            value: function on(event, callback) {
              this._events.push({
                event: event,
                callback: callback
              });
            }
          }, {
            key: "_socketCreate",
            value: function _socketCreate() {
              var _this3 = this;

              if (this._initiating) {
                return;
              }

              this._initiating = true;
              var url = this._url.startsWith("https") ? this._url.replace("https", "wss") : this._url.startsWith("http") ? this._url.replace("http", "ws") : this._url;
              this._nextSocket = new WS(url);

              if (!this._nextSocket) {
                throw new Error("Failed to create socket");
              }

              this._nextSocket.onmessage = function (event) {
                return _this3._socketReceive(event);
              };

              this._nextSocket.onopen = function () {
                return _this3._socketOpen();
              };
            }
          }, {
            key: "_socketOpen",
            value: function _socketOpen() {
              this._socketClose();

              this._initiating = false;
              this._socket = this._nextSocket;
              this._nextSocket = null;

              this._queueSubscriptions();

              this._pushQueue();
            }
          }, {
            key: "_socketClose",
            value: function _socketClose() {
              if (this._socket) {
                this._socket.onclose = function () {};

                this._socket.close();
              }
            }
          }, {
            key: "_socketSend",
            value: function _socketSend(socketMessage) {
              var message = JSON.stringify(socketMessage);

              if (this._socket && this._socket.readyState === 1) {
                this._socket.send(message);
              } else {
                this._setToQueue(socketMessage);

                this._socketCreate();
              }
            }
          }, {
            key: "_socketReceive",
            value: function _socketReceive(event) {
              return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var socketMessage, events;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        socketMessage = JSON.parse(event.data);
                        _context.next = 7;
                        break;

                      case 4:
                        _context.prev = 4;
                        _context.t0 = _context["catch"](0);
                        return _context.abrupt("return");

                      case 7:
                        this._socketSend({
                          topic: socketMessage.topic,
                          type: "ack",
                          payload: "",
                          silent: true
                        });

                        if (this._socket && this._socket.readyState === 1) {
                          events = this._events.filter(function (event) {
                            return event.event === "message";
                          });

                          if (events && events.length) {
                            events.forEach(function (event) {
                              return event.callback(socketMessage);
                            });
                          }
                        }

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[0, 4]]);
              }));
            }
          }, {
            key: "_queueSubscriptions",
            value: function _queueSubscriptions() {
              var _this4 = this;

              var subscriptions = this._subscriptions;
              subscriptions.forEach(function (topic) {
                return _this4._queue.push({
                  topic: topic,
                  type: "sub",
                  payload: "",
                  silent: true
                });
              });
              this._subscriptions = [];
            }
          }, {
            key: "_setToQueue",
            value: function _setToQueue(socketMessage) {
              this._queue.push(socketMessage);
            }
          }, {
            key: "_pushQueue",
            value: function _pushQueue() {
              var _this5 = this;

              var queue = this._queue;
              queue.forEach(function (socketMessage) {
                return _this5._socketSend(socketMessage);
              });
              this._queue = [];
            }
          }, {
            key: "readyState",
            set: function set(value) {},
            get: function get() {
              return this._socket ? this._socket.readyState : -1;
            }
          }, {
            key: "connecting",
            set: function set(value) {},
            get: function get() {
              return this.readyState === 0;
            }
          }, {
            key: "connected",
            set: function set(value) {},
            get: function get() {
              return this.readyState === 1;
            }
          }, {
            key: "closing",
            set: function set(value) {},
            get: function get() {
              return this.readyState === 2;
            }
          }, {
            key: "closed",
            set: function set(value) {},
            get: function get() {
              return this.readyState === 3;
            }
          }]);

          return SocketTransport;
        }();

        exports["default"] = SocketTransport; //# sourceMappingURL=index.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../webpack/buildin/global.js */
      "yLpj"));
      /***/
    },

    /***/
    "7uVY":
    /*!***********************************************************!*\
      !*** ./node_modules/qrcode/node_modules/isarray/index.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function uVY(module, exports) {
      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };
      /***/

    },

    /***/
    "8lHD":
    /*!************************************************************************************!*\
      !*** ./node_modules/web3-provider-engine/node_modules/ethereum-common/params.json ***!
      \************************************************************************************/

    /*! exports provided: genesisGasLimit, genesisDifficulty, genesisNonce, genesisExtraData, genesisHash, genesisStateRoot, minGasLimit, gasLimitBoundDivisor, minimumDifficulty, difficultyBoundDivisor, durationLimit, maximumExtraDataSize, epochDuration, stackLimit, callCreateDepth, tierStepGas, expGas, expByteGas, sha3Gas, sha3WordGas, sloadGas, sstoreSetGas, sstoreResetGas, sstoreRefundGas, jumpdestGas, logGas, logDataGas, logTopicGas, createGas, callGas, callStipend, callValueTransferGas, callNewAccountGas, suicideRefundGas, memoryGas, quadCoeffDiv, createDataGas, txGas, txCreation, txDataZeroGas, txDataNonZeroGas, copyGas, ecrecoverGas, sha256Gas, sha256WordGas, ripemd160Gas, ripemd160WordGas, identityGas, identityWordGas, minerReward, ommerReward, niblingReward, homeSteadForkNumber, homesteadRepriceForkNumber, timebombPeriod, freeBlockPeriod, default */

    /***/
    function lHD(module) {
      module.exports = JSON.parse("{\"genesisGasLimit\":{\"v\":5000,\"d\":\"Gas limit of the Genesis block.\"},\"genesisDifficulty\":{\"v\":17179869184,\"d\":\"Difficulty of the Genesis block.\"},\"genesisNonce\":{\"v\":\"0x0000000000000042\",\"d\":\"the geneis nonce\"},\"genesisExtraData\":{\"v\":\"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa\",\"d\":\"extra data \"},\"genesisHash\":{\"v\":\"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3\",\"d\":\"genesis hash\"},\"genesisStateRoot\":{\"v\":\"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544\",\"d\":\"the genesis state root\"},\"minGasLimit\":{\"v\":5000,\"d\":\"Minimum the gas limit may ever be.\"},\"gasLimitBoundDivisor\":{\"v\":1024,\"d\":\"The bound divisor of the gas limit, used in update calculations.\"},\"minimumDifficulty\":{\"v\":131072,\"d\":\"The minimum that the difficulty may ever be.\"},\"difficultyBoundDivisor\":{\"v\":2048,\"d\":\"The bound divisor of the difficulty, used in the update calculations.\"},\"durationLimit\":{\"v\":13,\"d\":\"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not.\"},\"maximumExtraDataSize\":{\"v\":32,\"d\":\"Maximum size extra data may be after Genesis.\"},\"epochDuration\":{\"v\":30000,\"d\":\"Duration between proof-of-work epochs.\"},\"stackLimit\":{\"v\":1024,\"d\":\"Maximum size of VM stack allowed.\"},\"callCreateDepth\":{\"v\":1024,\"d\":\"Maximum depth of call/create stack.\"},\"tierStepGas\":{\"v\":[0,2,3,5,8,10,20],\"d\":\"Once per operation, for a selection of them.\"},\"expGas\":{\"v\":10,\"d\":\"Once per EXP instuction.\"},\"expByteGas\":{\"v\":10,\"d\":\"Times ceil(log256(exponent)) for the EXP instruction.\"},\"sha3Gas\":{\"v\":30,\"d\":\"Once per SHA3 operation.\"},\"sha3WordGas\":{\"v\":6,\"d\":\"Once per word of the SHA3 operation's data.\"},\"sloadGas\":{\"v\":50,\"d\":\"Once per SLOAD operation.\"},\"sstoreSetGas\":{\"v\":20000,\"d\":\"Once per SSTORE operation if the zeroness changes from zero.\"},\"sstoreResetGas\":{\"v\":5000,\"d\":\"Once per SSTORE operation if the zeroness does not change from zero.\"},\"sstoreRefundGas\":{\"v\":15000,\"d\":\"Once per SSTORE operation if the zeroness changes to zero.\"},\"jumpdestGas\":{\"v\":1,\"d\":\"Refunded gas, once per SSTORE operation if the zeroness changes to zero.\"},\"logGas\":{\"v\":375,\"d\":\"Per LOG* operation.\"},\"logDataGas\":{\"v\":8,\"d\":\"Per byte in a LOG* operation's data.\"},\"logTopicGas\":{\"v\":375,\"d\":\"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas.\"},\"createGas\":{\"v\":32000,\"d\":\"Once per CREATE operation & contract-creation transaction.\"},\"callGas\":{\"v\":40,\"d\":\"Once per CALL operation & message call transaction.\"},\"callStipend\":{\"v\":2300,\"d\":\"Free gas given at beginning of call.\"},\"callValueTransferGas\":{\"v\":9000,\"d\":\"Paid for CALL when the value transfor is non-zero.\"},\"callNewAccountGas\":{\"v\":25000,\"d\":\"Paid for CALL when the destination address didn't exist prior.\"},\"suicideRefundGas\":{\"v\":24000,\"d\":\"Refunded following a suicide operation.\"},\"memoryGas\":{\"v\":3,\"d\":\"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL.\"},\"quadCoeffDiv\":{\"v\":512,\"d\":\"Divisor for the quadratic particle of the memory cost equation.\"},\"createDataGas\":{\"v\":200,\"d\":\"\"},\"txGas\":{\"v\":21000,\"d\":\"Per transaction. NOTE: Not payable on data of calls between transactions.\"},\"txCreation\":{\"v\":32000,\"d\":\"the cost of creating a contract via tx\"},\"txDataZeroGas\":{\"v\":4,\"d\":\"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions.\"},\"txDataNonZeroGas\":{\"v\":68,\"d\":\"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions.\"},\"copyGas\":{\"v\":3,\"d\":\"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added.\"},\"ecrecoverGas\":{\"v\":3000,\"d\":\"\"},\"sha256Gas\":{\"v\":60,\"d\":\"\"},\"sha256WordGas\":{\"v\":12,\"d\":\"\"},\"ripemd160Gas\":{\"v\":600,\"d\":\"\"},\"ripemd160WordGas\":{\"v\":120,\"d\":\"\"},\"identityGas\":{\"v\":15,\"d\":\"\"},\"identityWordGas\":{\"v\":3,\"d\":\"\"},\"minerReward\":{\"v\":\"5000000000000000000\",\"d\":\"the amount a miner get rewarded for mining a block\"},\"ommerReward\":{\"v\":\"625000000000000000\",\"d\":\"The amount of wei a miner of an uncle block gets for being inculded in the blockchain\"},\"niblingReward\":{\"v\":\"156250000000000000\",\"d\":\"the amount a miner gets for inculding a uncle\"},\"homeSteadForkNumber\":{\"v\":1150000,\"d\":\"the block that the Homestead fork started at\"},\"homesteadRepriceForkNumber\":{\"v\":2463000,\"d\":\"the block that the Homestead Reprice (EIP150) fork started at\"},\"timebombPeriod\":{\"v\":100000,\"d\":\"Exponential difficulty timebomb period\"},\"freeBlockPeriod\":{\"v\":2}}");
      /***/
    },

    /***/
    "8yz6":
    /*!**********************************************!*\
      !*** ./node_modules/split-on-first/index.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function yz6(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function (string, separator) {
        if (!(typeof string === 'string' && typeof separator === 'string')) {
          throw new TypeError('Expected the arguments to be of type `string`');
        }

        if (separator === '') {
          return [string];
        }

        var separatorIndex = string.indexOf(separator);

        if (separatorIndex === -1) {
          return [string];
        }

        return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
      };
      /***/

    },

    /***/
    "9A97":
    /*!******************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/env.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function A97(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (process) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var browser_1 = __webpack_require__(
        /*! ./browser */
        "FEiw");

        function isBrowser() {
          return !!browser_1.getBrowerCrypto() && !!browser_1.getSubtleCrypto();
        }

        exports.isBrowser = isBrowser;

        function isNode() {
          return typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.node !== 'undefined';
        }

        exports.isNode = isNode; //# sourceMappingURL=env.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "9Y7b":
    /*!*******************************************************!*\
      !*** ./node_modules/rpc-payload-id/dist/cjs/index.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Y7b(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function payloadId() {
        var date = Date.now() * Math.pow(10, 3);
        var extra = Math.floor(Math.random() * Math.pow(10, 3));
        return date + extra;
      }

      exports.payloadId = payloadId;
      exports["default"] = payloadId; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "9y2/":
    /*!************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/misc.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function y2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var encUtils = tslib_1.__importStar(__webpack_require__(
      /*! enc-utils */
      "/jfU"));

      var safeJsonUtils = tslib_1.__importStar(__webpack_require__(
      /*! safe-json-utils */
      "zACh"));

      var rpcPayloadId = tslib_1.__importStar(__webpack_require__(
      /*! rpc-payload-id */
      "9Y7b"));

      function sanitizeHex(hex) {
        return encUtils.sanitizeHex(hex);
      }

      exports.sanitizeHex = sanitizeHex;

      function addHexPrefix(hex) {
        return encUtils.addHexPrefix(hex);
      }

      exports.addHexPrefix = addHexPrefix;

      function removeHexPrefix(hex) {
        return encUtils.removeHexPrefix(hex);
      }

      exports.removeHexPrefix = removeHexPrefix;

      function removeHexLeadingZeros(hex) {
        return encUtils.removeHexLeadingZeros(encUtils.addHexPrefix(hex));
      }

      exports.removeHexLeadingZeros = removeHexLeadingZeros;
      exports.safeJsonParse = safeJsonUtils.safeJsonParse;
      exports.safeJsonStringify = safeJsonUtils.safeJsonStringify;
      exports.payloadId = rpcPayloadId.payloadId;

      function uuid() {
        var result = function (a, b) {
          for (b = a = ""; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") {}

          return b;
        }();

        return result;
      }

      exports.uuid = uuid;

      function logDeprecationWarning() {
        console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
      }

      exports.logDeprecationWarning = logDeprecationWarning; //# sourceMappingURL=misc.js.map

      /***/
    },

    /***/
    "AZa5":
    /*!***************************************************!*\
      !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function AZa5(module, exports, __webpack_require__) {
      var BufferUtil = __webpack_require__(
      /*! ../utils/buffer */
      "Wogr");

      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");

      function ByteData(data) {
        this.mode = Mode.BYTE;
        this.data = BufferUtil.from(data);
      }

      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };

      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };

      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };

      ByteData.prototype.write = function (bitBuffer) {
        for (var i = 0, l = this.data.length; i < l; i++) {
          bitBuffer.put(this.data[i], 8);
        }
      };

      module.exports = ByteData;
      /***/
    },

    /***/
    "AwLY":
    /*!**************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/aes.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function AwLY(module, exports, __webpack_require__) {
      "use strict";

      var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var env_1 = __webpack_require__(
      /*! ./lib/env */
      "9A97");

      var browser_1 = __webpack_require__(
      /*! ./lib/browser */
      "FEiw");

      var node_1 = __webpack_require__(
      /*! ./lib/node */
      "Jl6S");

      var fallback_1 = __webpack_require__(
      /*! ./lib/fallback */
      "R+mK");

      function aesCbcEncrypt(iv, key, data) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!env_1.isBrowser()) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 3;
                  return browser_1.browserAesEncrypt(iv, key, data);

                case 3:
                  result = _context2.sent;
                  _context2.next = 7;
                  break;

                case 6:
                  if (env_1.isNode()) {
                    result = node_1.nodeAesEncrypt(iv, key, data);
                  } else {
                    result = fallback_1.fallbackAesEncrypt(iv, key, data);
                  }

                case 7:
                  return _context2.abrupt("return", result);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
      }

      exports.aesCbcEncrypt = aesCbcEncrypt;

      function aesCbcDecrypt(iv, key, data) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var result;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!env_1.isBrowser()) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 3;
                  return browser_1.browserAesDecrypt(iv, key, data);

                case 3:
                  result = _context3.sent;
                  _context3.next = 7;
                  break;

                case 6:
                  if (env_1.isNode()) {
                    result = node_1.nodeAesDecrypt(iv, key, data);
                  } else {
                    result = fallback_1.fallbackAesDecrypt(iv, key, data);
                  }

                case 7:
                  return _context3.abrupt("return", result);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
      }

      exports.aesCbcDecrypt = aesCbcDecrypt;

      function aesCbcEncryptSync(iv, key, data) {
        var result;

        if (env_1.isNode()) {
          result = node_1.nodeAesEncrypt(iv, key, data);
        } else {
          result = fallback_1.fallbackAesEncrypt(iv, key, data);
        }

        return result;
      }

      exports.aesCbcEncryptSync = aesCbcEncryptSync;

      function aesCbcDecryptSync(iv, key, data) {
        var result;

        if (env_1.isNode()) {
          result = node_1.nodeAesDecrypt(iv, key, data);
        } else {
          result = fallback_1.fallbackAesDecrypt(iv, key, data);
        }

        return result;
      }

      exports.aesCbcDecryptSync = aesCbcDecryptSync; //# sourceMappingURL=aes.js.map

      /***/
    },

    /***/
    "BCVQ":
    /*!***********************************************!*\
      !*** ./node_modules/qrcode/lib/core/regex.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function BCVQ(module, exports) {
      var numeric = '[0-9]+';
      var alphanumeric = '[A-Z $%*+\\-./:]+';
      var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
      kanji = kanji.replace(/u/g, "\\u");

      var _byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

      exports.KANJI = new RegExp(kanji, 'g');
      exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
      exports.BYTE = new RegExp(_byte, 'g');
      exports.NUMERIC = new RegExp(numeric, 'g');
      exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
      var TEST_KANJI = new RegExp('^' + kanji + '$');
      var TEST_NUMERIC = new RegExp('^' + numeric + '$');
      var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

      exports.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };

      exports.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };

      exports.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
      /***/

    },

    /***/
    "BJdv":
    /*!****************************************************!*\
      !*** ./node_modules/typedarray-to-buffer/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function BJdv(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        /**
        * Convert a typed array to a Buffer without a copy
        *
        * Author:   Feross Aboukhadijeh <https://feross.org>
        * License:  MIT
        *
        * `npm install typedarray-to-buffer`
        */
        var isTypedArray = __webpack_require__(
        /*! is-typedarray */
        "qXd6").strict;

        module.exports = function typedarrayToBuffer(arr) {
          if (isTypedArray(arr)) {
            // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
            var buf = Buffer.from(arr.buffer);

            if (arr.byteLength !== arr.buffer.byteLength) {
              // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
              buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
            }

            return buf;
          } else {
            // Pass through all other types to `Buffer.from`
            return Buffer.from(arr);
          }
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "CotQ":
    /*!************************************************************!*\
      !*** ./node_modules/@walletconnect/core/dist/cjs/index.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function CotQ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var utils_1 = __webpack_require__(
      /*! @walletconnect/utils */
      "xI+a");

      var socket_transport_1 = tslib_1.__importDefault(__webpack_require__(
      /*! @walletconnect/socket-transport */
      "7L9u"));

      var errors_1 = __webpack_require__(
      /*! ./errors */
      "YsmX");

      var events_1 = tslib_1.__importDefault(__webpack_require__(
      /*! ./events */
      "bjVm"));

      var storage_1 = tslib_1.__importDefault(__webpack_require__(
      /*! ./storage */
      "/zJV"));

      var Connector = /*#__PURE__*/function () {
        function Connector(opts) {
          _classCallCheck2(this, Connector);

          this.protocol = "wc";
          this.version = 1;
          this._bridge = "";
          this._key = null;
          this._clientId = "";
          this._clientMeta = null;
          this._peerId = "";
          this._peerMeta = null;
          this._handshakeId = 0;
          this._handshakeTopic = "";
          this._connected = false;
          this._accounts = [];
          this._chainId = 0;
          this._networkId = 0;
          this._rpcUrl = "";
          this._eventManager = new events_1["default"]();
          this._clientMeta = utils_1.getClientMeta() || opts.connectorOpts.clientMeta || null;
          this._cryptoLib = opts.cryptoLib;
          this._sessionStorage = opts.sessionStorage || new storage_1["default"]();
          this._qrcodeModal = opts.connectorOpts.qrcodeModal;
          this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;

          if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
            throw new Error(errors_1.ERROR_MISSING_REQUIRED);
          }

          if (opts.connectorOpts.bridge) {
            this.bridge = opts.connectorOpts.bridge;
          }

          if (opts.connectorOpts.uri) {
            this.uri = opts.connectorOpts.uri;
          }

          var session = opts.connectorOpts.session || this._getStorageSession();

          if (session) {
            this.session = session;
          }

          if (this.handshakeId) {
            this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
          }

          this._transport = opts.transport || new socket_transport_1["default"]({
            url: this.bridge,
            subscriptions: [this.clientId]
          });

          this._subscribeToInternalEvents();

          this._initTransport();

          if (opts.connectorOpts.uri) {
            this._subscribeToSessionRequest();
          }

          if (opts.pushServerOpts) {
            this._registerPushServer(opts.pushServerOpts);
          }
        }

        _createClass(Connector, [{
          key: "on",
          value: function on(event, callback) {
            var eventEmitter = {
              event: event,
              callback: callback
            };

            this._eventManager.subscribe(eventEmitter);
          }
        }, {
          key: "createInstantRequest",
          value: function createInstantRequest(instantRequest) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var request, endInstantRequest, result;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this._generateKey();

                    case 2:
                      this._key = _context4.sent;
                      request = this._formatRequest({
                        method: "wc_instantRequest",
                        params: [{
                          peerId: this.clientId,
                          peerMeta: this.clientMeta,
                          request: this._formatRequest(instantRequest)
                        }]
                      });
                      this.handshakeId = request.id;
                      this.handshakeTopic = utils_1.uuid();

                      this._eventManager.trigger({
                        event: "display_uri",
                        params: [this.uri]
                      });

                      this.on("modal_closed", function () {
                        throw new Error(errors_1.ERROR_QRCODE_MODAL_USER_CLOSED);
                      });

                      endInstantRequest = function endInstantRequest() {
                        _this6.killSession();
                      };

                      _context4.prev = 9;
                      _context4.next = 12;
                      return this._sendCallRequest(request);

                    case 12:
                      result = _context4.sent;

                      if (result) {
                        endInstantRequest();
                      }

                      return _context4.abrupt("return", result);

                    case 17:
                      _context4.prev = 17;
                      _context4.t0 = _context4["catch"](9);
                      endInstantRequest();
                      throw _context4.t0;

                    case 21:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[9, 17]]);
            }));
          }
        }, {
          key: "connect",
          value: function connect(opts) {
            var _this7 = this;

            if (!this._qrcodeModal) {
              throw new Error(errors_1.ERROR_QRCODE_MODAL_NOT_PROVIDED);
            }

            return new Promise(function (resolve, reject) {
              return tslib_1.__awaiter(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (this.connected) {
                          resolve({
                            chainId: this.chainId,
                            accounts: this.accounts
                          });
                        }

                        if (this.connected) {
                          _context5.next = 10;
                          break;
                        }

                        _context5.prev = 2;
                        _context5.next = 5;
                        return this.createSession(opts);

                      case 5:
                        _context5.next = 10;
                        break;

                      case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5["catch"](2);
                        reject(_context5.t0);

                      case 10:
                        this.on("modal_closed", function () {
                          return reject(new Error(errors_1.ERROR_QRCODE_MODAL_USER_CLOSED));
                        });
                        this.on("connect", function (error, payload) {
                          if (error) {
                            return reject(error);
                          }

                          resolve(payload.params[0]);
                        });

                      case 12:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[2, 7]]);
              }));
            });
          }
        }, {
          key: "createSession",
          value: function createSession(opts) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var request;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!this._connected) {
                        _context6.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_CONNECTED);

                    case 2:
                      if (!this.pending) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 4:
                      _context6.next = 6;
                      return this._generateKey();

                    case 6:
                      this._key = _context6.sent;
                      request = this._formatRequest({
                        method: "wc_sessionRequest",
                        params: [{
                          peerId: this.clientId,
                          peerMeta: this.clientMeta,
                          chainId: opts && opts.chainId ? opts.chainId : null
                        }]
                      });
                      this.handshakeId = request.id;
                      this.handshakeTopic = utils_1.uuid();

                      this._sendSessionRequest(request, "Session update rejected", {
                        topic: this.handshakeTopic
                      });

                      this._eventManager.trigger({
                        event: "display_uri",
                        params: [this.uri]
                      });

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "approveSession",
          value: function approveSession(sessionStatus) {
            if (this._connected) {
              throw new Error(errors_1.ERROR_SESSION_CONNECTED);
            }

            this.chainId = sessionStatus.chainId;
            this.accounts = sessionStatus.accounts;
            this.networkId = sessionStatus.networkId || 0;
            this.rpcUrl = sessionStatus.rpcUrl || "";
            var sessionParams = {
              approved: true,
              chainId: this.chainId,
              networkId: this.networkId,
              accounts: this.accounts,
              rpcUrl: this.rpcUrl,
              peerId: this.clientId,
              peerMeta: this.clientMeta
            };
            var response = {
              id: this.handshakeId,
              jsonrpc: "2.0",
              result: sessionParams
            };

            this._sendResponse(response);

            this._connected = true;

            this._setStorageSession();

            this._eventManager.trigger({
              event: "connect",
              params: [{
                peerId: this.peerId,
                peerMeta: this.peerMeta,
                chainId: this.chainId,
                accounts: this.accounts
              }]
            });
          }
        }, {
          key: "rejectSession",
          value: function rejectSession(sessionError) {
            if (this._connected) {
              throw new Error(errors_1.ERROR_SESSION_CONNECTED);
            }

            var message = sessionError && sessionError.message ? sessionError.message : errors_1.ERROR_SESSION_REJECTED;

            var response = this._formatResponse({
              id: this.handshakeId,
              error: {
                message: message
              }
            });

            this._sendResponse(response);

            this._connected = false;

            this._eventManager.trigger({
              event: "disconnect",
              params: [{
                message: message
              }]
            });

            this._removeStorageSession();
          }
        }, {
          key: "updateSession",
          value: function updateSession(sessionStatus) {
            if (!this._connected) {
              throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);
            }

            this.chainId = sessionStatus.chainId;
            this.accounts = sessionStatus.accounts;
            this.networkId = sessionStatus.networkId || 0;
            this.rpcUrl = sessionStatus.rpcUrl || "";
            var sessionParams = {
              approved: true,
              chainId: this.chainId,
              networkId: this.networkId,
              accounts: this.accounts,
              rpcUrl: this.rpcUrl
            };

            var request = this._formatRequest({
              method: "wc_sessionUpdate",
              params: [sessionParams]
            });

            this._sendSessionRequest(request, "Session update rejected");

            this._eventManager.trigger({
              event: "session_update",
              params: [{
                chainId: this.chainId,
                accounts: this.accounts
              }]
            });

            this._manageStorageSession();
          }
        }, {
          key: "killSession",
          value: function killSession(sessionError) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var message, sessionParams, request;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      message = sessionError ? sessionError.message : "Session Disconnected";
                      sessionParams = {
                        approved: false,
                        chainId: null,
                        networkId: null,
                        accounts: null
                      };
                      request = this._formatRequest({
                        method: "wc_sessionUpdate",
                        params: [sessionParams]
                      });
                      _context7.next = 5;
                      return this._sendRequest(request);

                    case 5:
                      this._handleSessionDisconnect(message);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "sendTransaction",
          value: function sendTransaction(tx) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var parsedTx, request, result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (this._connected) {
                        _context8.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);

                    case 2:
                      parsedTx = utils_1.parseTransactionData(tx);
                      request = this._formatRequest({
                        method: "eth_sendTransaction",
                        params: [parsedTx]
                      });
                      _context8.next = 6;
                      return this._sendCallRequest(request);

                    case 6:
                      result = _context8.sent;
                      return _context8.abrupt("return", result);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "signTransaction",
          value: function signTransaction(tx) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var parsedTx, request, result;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (this._connected) {
                        _context9.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);

                    case 2:
                      parsedTx = utils_1.parseTransactionData(tx);
                      request = this._formatRequest({
                        method: "eth_signTransaction",
                        params: [parsedTx]
                      });
                      _context9.next = 6;
                      return this._sendCallRequest(request);

                    case 6:
                      result = _context9.sent;
                      return _context9.abrupt("return", result);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "signMessage",
          value: function signMessage(params) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var request, result;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (this._connected) {
                        _context10.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);

                    case 2:
                      request = this._formatRequest({
                        method: "eth_sign",
                        params: params
                      });
                      _context10.next = 5;
                      return this._sendCallRequest(request);

                    case 5:
                      result = _context10.sent;
                      return _context10.abrupt("return", result);

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "signPersonalMessage",
          value: function signPersonalMessage(params) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var request, result;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (this._connected) {
                        _context11.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);

                    case 2:
                      params = utils_1.parsePersonalSign(params);
                      request = this._formatRequest({
                        method: "personal_sign",
                        params: params
                      });
                      _context11.next = 6;
                      return this._sendCallRequest(request);

                    case 6:
                      result = _context11.sent;
                      return _context11.abrupt("return", result);

                    case 8:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "signTypedData",
          value: function signTypedData(params) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var request, result;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (this._connected) {
                        _context12.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);

                    case 2:
                      request = this._formatRequest({
                        method: "eth_signTypedData",
                        params: params
                      });
                      _context12.next = 5;
                      return this._sendCallRequest(request);

                    case 5:
                      result = _context12.sent;
                      return _context12.abrupt("return", result);

                    case 7:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "updateChain",
          value: function updateChain(chainParams) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var request, result;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (this._connected) {
                        _context13.next = 2;
                        break;
                      }

                      throw new Error("Session currently disconnected");

                    case 2:
                      request = this._formatRequest({
                        method: "wallet_updateChain",
                        params: [chainParams]
                      });
                      _context13.next = 5;
                      return this._sendCallRequest(request);

                    case 5:
                      result = _context13.sent;
                      return _context13.abrupt("return", result);

                    case 7:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "unsafeSend",
          value: function unsafeSend(request, options) {
            var _this8 = this;

            this._sendRequest(request, options);

            return new Promise(function (resolve, reject) {
              _this8._subscribeToResponse(request.id, function (error, payload) {
                if (error) {
                  reject(error);
                  return;
                }

                if (!payload) {
                  throw new Error(errors_1.ERROR_MISSING_JSON_RPC);
                }

                resolve(payload);
              });
            });
          }
        }, {
          key: "sendCustomRequest",
          value: function sendCustomRequest(request, options) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var formattedRequest, result;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (this._connected) {
                        _context14.next = 2;
                        break;
                      }

                      throw new Error(errors_1.ERROR_SESSION_DISCONNECTED);

                    case 2:
                      _context14.t0 = request.method;
                      _context14.next = _context14.t0 === "eth_accounts" ? 5 : _context14.t0 === "eth_chainId" ? 6 : _context14.t0 === "eth_sendTransaction" ? 7 : _context14.t0 === "eth_signTransaction" ? 7 : _context14.t0 === "personal_sign" ? 9 : 11;
                      break;

                    case 5:
                      return _context14.abrupt("return", this.accounts);

                    case 6:
                      return _context14.abrupt("return", utils_1.convertNumberToHex(this.chainId));

                    case 7:
                      if (request.params) {
                        request.params[0] = utils_1.parseTransactionData(request.params[0]);
                      }

                      return _context14.abrupt("break", 12);

                    case 9:
                      if (request.params) {
                        request.params = utils_1.parsePersonalSign(request.params);
                      }

                      return _context14.abrupt("break", 12);

                    case 11:
                      return _context14.abrupt("break", 12);

                    case 12:
                      formattedRequest = this._formatRequest(request);
                      _context14.next = 15;
                      return this._sendCallRequest(formattedRequest, options);

                    case 15:
                      result = _context14.sent;
                      return _context14.abrupt("return", result);

                    case 17:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "approveRequest",
          value: function approveRequest(response) {
            if (utils_1.isJsonRpcResponseSuccess(response)) {
              var formattedResponse = this._formatResponse(response);

              this._sendResponse(formattedResponse);
            } else {
              throw new Error(errors_1.ERROR_MISSING_RESULT);
            }
          }
        }, {
          key: "rejectRequest",
          value: function rejectRequest(response) {
            if (utils_1.isJsonRpcResponseError(response)) {
              var formattedResponse = this._formatResponse(response);

              this._sendResponse(formattedResponse);
            } else {
              throw new Error(errors_1.ERROR_MISSING_ERROR);
            }
          }
        }, {
          key: "_sendRequest",
          value: function _sendRequest(request, options) {
            var _a, _b;

            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var callRequest, encryptionPayload, topic, payload, silent;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      callRequest = this._formatRequest(request);
                      _context15.next = 3;
                      return this._encrypt(callRequest);

                    case 3:
                      encryptionPayload = _context15.sent;
                      topic = typeof ((_a = options) === null || _a === void 0 ? void 0 : _a.topic) !== "undefined" ? options.topic : this.peerId;
                      payload = JSON.stringify(encryptionPayload);
                      silent = typeof ((_b = options) === null || _b === void 0 ? void 0 : _b.forcePushNotification) !== "undefined" ? !options.forcePushNotification : utils_1.isSilentPayload(callRequest);

                      this._transport.send(payload, topic, silent);

                    case 8:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "_sendResponse",
          value: function _sendResponse(response) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var encryptionPayload, topic, payload, silent;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this._encrypt(response);

                    case 2:
                      encryptionPayload = _context16.sent;
                      topic = this.peerId;
                      payload = JSON.stringify(encryptionPayload);
                      silent = true;

                      this._transport.send(payload, topic, silent);

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "_sendSessionRequest",
          value: function _sendSessionRequest(request, errorMsg, options) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this._sendRequest(request, options);

                      this._subscribeToSessionResponse(request.id, errorMsg);

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "_sendCallRequest",
          value: function _sendCallRequest(request, options) {
            this._sendRequest(request, options);

            if (utils_1.isMobile() && utils_1.signingMethods.includes(request.method)) {
              var mobileLinkUrl = utils_1.getLocal(utils_1.mobileLinkChoiceKey);

              if (mobileLinkUrl) {
                window.location.href = mobileLinkUrl.href;
              }
            }

            return this._subscribeToCallResponse(request.id);
          }
        }, {
          key: "_formatRequest",
          value: function _formatRequest(request) {
            if (typeof request.method === "undefined") {
              throw new Error(errors_1.ERROR_MISSING_METHOD);
            }

            var formattedRequest = {
              id: typeof request.id === "undefined" ? utils_1.payloadId() : request.id,
              jsonrpc: "2.0",
              method: request.method,
              params: typeof request.params === "undefined" ? [] : request.params
            };
            return formattedRequest;
          }
        }, {
          key: "_formatResponse",
          value: function _formatResponse(response) {
            if (typeof response.id === "undefined") {
              throw new Error(errors_1.ERROR_MISSING_ID);
            }

            var baseResponse = {
              id: response.id,
              jsonrpc: "2.0"
            };

            if (utils_1.isJsonRpcResponseError(response)) {
              var error = utils_1.formatRpcError(response.error);
              var errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), {
                error: error
              });
              return errorResponse;
            } else if (utils_1.isJsonRpcResponseSuccess(response)) {
              var successResponse = Object.assign(Object.assign({}, baseResponse), response);
              return successResponse;
            }

            throw new Error(errors_1.ERROR_INVALID_RESPONSE);
          }
        }, {
          key: "_handleSessionDisconnect",
          value: function _handleSessionDisconnect(errorMsg) {
            var message = errorMsg || "Session Disconnected";

            if (!this._connected) {
              if (this._qrcodeModal) {
                this._qrcodeModal.close();
              }

              utils_1.removeLocal(utils_1.mobileLinkChoiceKey);
            }

            if (this._connected) {
              this._connected = false;
            }

            this._eventManager.trigger({
              event: "disconnect",
              params: [{
                message: message
              }]
            });

            this._removeStorageSession();

            this._transport.close();
          }
        }, {
          key: "_handleSessionResponse",
          value: function _handleSessionResponse(errorMsg, sessionParams) {
            if (sessionParams) {
              if (sessionParams.approved) {
                if (!this._connected) {
                  this._connected = true;

                  if (sessionParams.chainId) {
                    this.chainId = sessionParams.chainId;
                  }

                  if (sessionParams.accounts) {
                    this.accounts = sessionParams.accounts;
                  }

                  if (sessionParams.peerId && !this.peerId) {
                    this.peerId = sessionParams.peerId;
                  }

                  if (sessionParams.peerMeta && !this.peerMeta) {
                    this.peerMeta = sessionParams.peerMeta;
                  }

                  this._eventManager.trigger({
                    event: "connect",
                    params: [{
                      peerId: this.peerId,
                      peerMeta: this.peerMeta,
                      chainId: this.chainId,
                      accounts: this.accounts
                    }]
                  });
                } else {
                  if (sessionParams.chainId) {
                    this.chainId = sessionParams.chainId;
                  }

                  if (sessionParams.accounts) {
                    this.accounts = sessionParams.accounts;
                  }

                  this._eventManager.trigger({
                    event: "session_update",
                    params: [{
                      chainId: this.chainId,
                      accounts: this.accounts
                    }]
                  });
                }

                this._manageStorageSession();
              } else {
                this._handleSessionDisconnect(errorMsg);
              }
            } else {
              this._handleSessionDisconnect(errorMsg);
            }
          }
        }, {
          key: "_handleIncomingMessages",
          value: function _handleIncomingMessages(socketMessage) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var activeTopics, encryptionPayload, payload;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      activeTopics = [this.clientId, this.handshakeTopic];

                      if (activeTopics.includes(socketMessage.topic)) {
                        _context18.next = 3;
                        break;
                      }

                      return _context18.abrupt("return");

                    case 3:
                      _context18.prev = 3;
                      encryptionPayload = JSON.parse(socketMessage.payload);
                      _context18.next = 10;
                      break;

                    case 7:
                      _context18.prev = 7;
                      _context18.t0 = _context18["catch"](3);
                      return _context18.abrupt("return");

                    case 10:
                      _context18.next = 12;
                      return this._decrypt(encryptionPayload);

                    case 12:
                      payload = _context18.sent;

                      if (payload) {
                        this._eventManager.trigger(payload);
                      }

                    case 14:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this, [[3, 7]]);
            }));
          }
        }, {
          key: "_subscribeToSessionRequest",
          value: function _subscribeToSessionRequest() {
            this._transport.subscribe(this.handshakeTopic);
          }
        }, {
          key: "_subscribeToResponse",
          value: function _subscribeToResponse(id, callback) {
            this.on("response:".concat(id), callback);
          }
        }, {
          key: "_subscribeToSessionResponse",
          value: function _subscribeToSessionResponse(id, errorMsg) {
            var _this9 = this;

            this._subscribeToResponse(id, function (error, payload) {
              if (error) {
                _this9._handleSessionResponse(error.message);

                return;
              }

              if (payload.result) {
                _this9._handleSessionResponse(errorMsg, payload.result);
              } else if (payload.error && payload.error.message) {
                _this9._handleSessionResponse(payload.error.message);
              } else {
                _this9._handleSessionResponse(errorMsg);
              }
            });
          }
        }, {
          key: "_subscribeToCallResponse",
          value: function _subscribeToCallResponse(id) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              _this10._subscribeToResponse(id, function (error, payload) {
                if (error) {
                  reject(error);
                  return;
                }

                if (payload.result) {
                  resolve(payload.result);
                } else if (payload.error && payload.error.message) {
                  reject(new Error(payload.error.message));
                } else {
                  reject(new Error(errors_1.ERROR_INVALID_RESPONSE));
                }
              });
            });
          }
        }, {
          key: "_subscribeToInternalEvents",
          value: function _subscribeToInternalEvents() {
            var _this11 = this;

            this.on("display_uri", function () {
              if (_this11._qrcodeModal) {
                _this11._qrcodeModal.open(_this11.uri, function () {
                  _this11._eventManager.trigger({
                    event: "modal_closed",
                    params: []
                  });
                }, _this11._qrcodeModalOptions);
              }
            });
            this.on("connect", function () {
              if (_this11._qrcodeModal) {
                _this11._qrcodeModal.close();
              }
            });
            this.on("wc_sessionRequest", function (error, payload) {
              if (error) {
                _this11._eventManager.trigger({
                  event: "error",
                  params: [{
                    code: "SESSION_REQUEST_ERROR",
                    message: error.toString()
                  }]
                });
              }

              _this11.handshakeId = payload.id;
              _this11.peerId = payload.params[0].peerId;
              _this11.peerMeta = payload.params[0].peerMeta;
              var internalPayload = Object.assign(Object.assign({}, payload), {
                method: "session_request"
              });

              _this11._eventManager.trigger(internalPayload);
            });
            this.on("wc_sessionUpdate", function (error, payload) {
              if (error) {
                _this11._handleSessionResponse(error.message);
              }

              _this11._handleSessionResponse("Session disconnected", payload.params[0]);
            });
          }
        }, {
          key: "_initTransport",
          value: function _initTransport() {
            var _this12 = this;

            this._transport.on("message", function (socketMessage) {
              return _this12._handleIncomingMessages(socketMessage);
            });

            this._transport.on("open", function () {
              return _this12._eventManager.trigger({
                event: "transport_open",
                params: []
              });
            });

            this._transport.on("close", function () {
              return _this12._eventManager.trigger({
                event: "transport_close",
                params: []
              });
            });

            this._transport.open();
          }
        }, {
          key: "_formatUri",
          value: function _formatUri() {
            var protocol = this.protocol;
            var handshakeTopic = this.handshakeTopic;
            var version = this.version;
            var bridge = encodeURIComponent(this.bridge);
            var key = this.key;
            var uri = "".concat(protocol, ":").concat(handshakeTopic, "@").concat(version, "?bridge=").concat(bridge, "&key=").concat(key);
            return uri;
          }
        }, {
          key: "_parseUri",
          value: function _parseUri(uri) {
            var result = utils_1.parseWalletConnectUri(uri);

            if (result.protocol === this.protocol) {
              if (!result.handshakeTopic) {
                throw Error("Invalid or missing handshakeTopic parameter value");
              }

              var handshakeTopic = result.handshakeTopic;

              if (!result.bridge) {
                throw Error("Invalid or missing bridge url parameter value");
              }

              var bridge = decodeURIComponent(result.bridge);

              if (!result.key) {
                throw Error("Invalid or missing kkey parameter value");
              }

              var key = result.key;
              return {
                handshakeTopic: handshakeTopic,
                bridge: bridge,
                key: key
              };
            } else {
              throw new Error(errors_1.ERROR_INVALID_URI);
            }
          }
        }, {
          key: "_generateKey",
          value: function _generateKey() {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var result;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (!this._cryptoLib) {
                        _context19.next = 5;
                        break;
                      }

                      _context19.next = 3;
                      return this._cryptoLib.generateKey();

                    case 3:
                      result = _context19.sent;
                      return _context19.abrupt("return", result);

                    case 5:
                      return _context19.abrupt("return", null);

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "_encrypt",
          value: function _encrypt(data) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var key, result;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      key = this._key;

                      if (!(this._cryptoLib && key)) {
                        _context20.next = 6;
                        break;
                      }

                      _context20.next = 4;
                      return this._cryptoLib.encrypt(data, key);

                    case 4:
                      result = _context20.sent;
                      return _context20.abrupt("return", result);

                    case 6:
                      return _context20.abrupt("return", null);

                    case 7:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "_decrypt",
          value: function _decrypt(payload) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var key, result;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      key = this._key;

                      if (!(this._cryptoLib && key)) {
                        _context21.next = 6;
                        break;
                      }

                      _context21.next = 4;
                      return this._cryptoLib.decrypt(payload, key);

                    case 4:
                      result = _context21.sent;
                      return _context21.abrupt("return", result);

                    case 6:
                      return _context21.abrupt("return", null);

                    case 7:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "_getStorageSession",
          value: function _getStorageSession() {
            var result = null;

            if (this._sessionStorage) {
              result = this._sessionStorage.getSession();
            }

            return result;
          }
        }, {
          key: "_setStorageSession",
          value: function _setStorageSession() {
            if (this._sessionStorage) {
              this._sessionStorage.setSession(this.session);
            }
          }
        }, {
          key: "_removeStorageSession",
          value: function _removeStorageSession() {
            if (this._sessionStorage) {
              this._sessionStorage.removeSession();
            }
          }
        }, {
          key: "_manageStorageSession",
          value: function _manageStorageSession() {
            if (this._connected) {
              this._setStorageSession();
            } else {
              this._removeStorageSession();
            }
          }
        }, {
          key: "_registerPushServer",
          value: function _registerPushServer(pushServerOpts) {
            var _this13 = this;

            if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
              throw Error("Invalid or missing pushServerOpts.url parameter value");
            }

            if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
              throw Error("Invalid or missing pushServerOpts.type parameter value");
            }

            if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
              throw Error("Invalid or missing pushServerOpts.token parameter value");
            }

            var pushSubscription = {
              bridge: this.bridge,
              topic: this.clientId,
              type: pushServerOpts.type,
              token: pushServerOpts.token,
              peerName: "",
              language: pushServerOpts.language || ""
            };
            this.on("connect", function (error, payload) {
              return tslib_1.__awaiter(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                var peerName, response, json;
                return regeneratorRuntime.wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        if (!error) {
                          _context22.next = 2;
                          break;
                        }

                        throw error;

                      case 2:
                        if (pushServerOpts.peerMeta) {
                          peerName = payload.params[0].peerMeta.name;
                          pushSubscription.peerName = peerName;
                        }

                        _context22.prev = 3;
                        _context22.next = 6;
                        return fetch("".concat(pushServerOpts.url, "/new"), {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify(pushSubscription)
                        });

                      case 6:
                        response = _context22.sent;
                        _context22.next = 9;
                        return response.json();

                      case 9:
                        json = _context22.sent;

                        if (json.success) {
                          _context22.next = 12;
                          break;
                        }

                        throw Error("Failed to register in Push Server");

                      case 12:
                        _context22.next = 17;
                        break;

                      case 14:
                        _context22.prev = 14;
                        _context22.t0 = _context22["catch"](3);
                        throw Error("Failed to register in Push Server");

                      case 17:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, null, [[3, 14]]);
              }));
            });
          }
        }, {
          key: "bridge",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._bridge = value;
          },
          get: function get() {
            return this._bridge;
          }
        }, {
          key: "key",
          set: function set(value) {
            if (!value) {
              return;
            }

            var key = utils_1.convertHexToArrayBuffer(value);
            this._key = key;
          },
          get: function get() {
            if (this._key) {
              var key = utils_1.convertArrayBufferToHex(this._key, true);
              return key;
            }

            return "";
          }
        }, {
          key: "clientId",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._clientId = value;
          },
          get: function get() {
            var clientId = this._clientId;

            if (!clientId) {
              clientId = this._clientId = utils_1.uuid();
            }

            return this._clientId;
          }
        }, {
          key: "peerId",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._peerId = value;
          },
          get: function get() {
            return this._peerId;
          }
        }, {
          key: "clientMeta",
          set: function set(value) {},
          get: function get() {
            var clientMeta = this._clientMeta;

            if (!clientMeta) {
              clientMeta = this._clientMeta = utils_1.getClientMeta();
            }

            return clientMeta;
          }
        }, {
          key: "peerMeta",
          set: function set(value) {
            this._peerMeta = value;
          },
          get: function get() {
            var peerMeta = this._peerMeta;
            return peerMeta;
          }
        }, {
          key: "handshakeTopic",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._handshakeTopic = value;
          },
          get: function get() {
            return this._handshakeTopic;
          }
        }, {
          key: "handshakeId",
          set: function set(value) {
            if (!value) {
              return;
            }

            this._handshakeId = value;
          },
          get: function get() {
            return this._handshakeId;
          }
        }, {
          key: "uri",
          get: function get() {
            var _uri = this._formatUri();

            return _uri;
          },
          set: function set(value) {
            if (!value) {
              return;
            }

            var _this$_parseUri = this._parseUri(value),
                handshakeTopic = _this$_parseUri.handshakeTopic,
                bridge = _this$_parseUri.bridge,
                key = _this$_parseUri.key;

            this.handshakeTopic = handshakeTopic;
            this.bridge = bridge;
            this.key = key;
          }
        }, {
          key: "chainId",
          set: function set(value) {
            this._chainId = value;
          },
          get: function get() {
            var chainId = this._chainId;
            return chainId;
          }
        }, {
          key: "networkId",
          set: function set(value) {
            this._networkId = value;
          },
          get: function get() {
            var networkId = this._networkId;
            return networkId;
          }
        }, {
          key: "accounts",
          set: function set(value) {
            this._accounts = value;
          },
          get: function get() {
            var accounts = this._accounts;
            return accounts;
          }
        }, {
          key: "rpcUrl",
          set: function set(value) {
            this._rpcUrl = value;
          },
          get: function get() {
            var rpcUrl = this._rpcUrl;
            return rpcUrl;
          }
        }, {
          key: "connected",
          set: function set(value) {},
          get: function get() {
            return this._connected;
          }
        }, {
          key: "pending",
          set: function set(value) {},
          get: function get() {
            return !!this._handshakeTopic;
          }
        }, {
          key: "session",
          get: function get() {
            return {
              connected: this.connected,
              accounts: this.accounts,
              chainId: this.chainId,
              bridge: this.bridge,
              key: this.key,
              clientId: this.clientId,
              clientMeta: this.clientMeta,
              peerId: this.peerId,
              peerMeta: this.peerMeta,
              handshakeId: this.handshakeId,
              handshakeTopic: this.handshakeTopic
            };
          },
          set: function set(value) {
            if (!value) {
              return;
            }

            this._connected = value.connected;
            this.accounts = value.accounts;
            this.chainId = value.chainId;
            this.bridge = value.bridge;
            this.key = value.key;
            this.clientId = value.clientId;
            this.clientMeta = value.clientMeta;
            this.peerId = value.peerId;
            this.peerMeta = value.peerMeta;
            this.handshakeId = value.handshakeId;
            this.handshakeTopic = value.handshakeTopic;
          }
        }]);

        return Connector;
      }();

      exports["default"] = Connector; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "DeLK":
    /*!*************************************************************!*\
      !*** ./node_modules/eth-json-rpc-middleware/cache-utils.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function DeLK(module, exports, __webpack_require__) {
      var stringify = __webpack_require__(
      /*! json-stable-stringify */
      "rE/H");

      module.exports = {
        cacheIdentifierForPayload: cacheIdentifierForPayload,
        canCache: canCache,
        blockTagForPayload: blockTagForPayload,
        paramsWithoutBlockTag: paramsWithoutBlockTag,
        blockTagParamIndex: blockTagParamIndex,
        cacheTypeForPayload: cacheTypeForPayload
      };

      function cacheIdentifierForPayload(payload, skipBlockRef) {
        var simpleParams = skipBlockRef ? paramsWithoutBlockTag(payload) : payload.params;

        if (canCache(payload)) {
          return payload.method + ':' + stringify(simpleParams);
        } else {
          return null;
        }
      }

      function canCache(payload) {
        return cacheTypeForPayload(payload) !== 'never';
      }

      function blockTagForPayload(payload) {
        var index = blockTagParamIndex(payload); // Block tag param not passed.

        if (index >= payload.params.length) {
          return null;
        }

        return payload.params[index];
      }

      function paramsWithoutBlockTag(payload) {
        var index = blockTagParamIndex(payload); // Block tag param not passed.

        if (index >= payload.params.length) {
          return payload.params;
        } // eth_getBlockByNumber has the block tag first, then the optional includeTx? param


        if (payload.method === 'eth_getBlockByNumber') {
          return payload.params.slice(1);
        }

        return payload.params.slice(0, index);
      }

      function blockTagParamIndex(payload) {
        switch (payload.method) {
          // blockTag is at index 2
          case 'eth_getStorageAt':
            return 2;
          // blockTag is at index 1

          case 'eth_getBalance':
          case 'eth_getCode':
          case 'eth_getTransactionCount':
          case 'eth_call':
            return 1;
          // blockTag is at index 0

          case 'eth_getBlockByNumber':
            return 0;
          // there is no blockTag

          default:
            return undefined;
        }
      }

      function cacheTypeForPayload(payload) {
        switch (payload.method) {
          // cache permanently
          case 'web3_clientVersion':
          case 'web3_sha3':
          case 'eth_protocolVersion':
          case 'eth_getBlockTransactionCountByHash':
          case 'eth_getUncleCountByBlockHash':
          case 'eth_getCode':
          case 'eth_getBlockByHash':
          case 'eth_getTransactionByHash':
          case 'eth_getTransactionByBlockHashAndIndex':
          case 'eth_getTransactionReceipt':
          case 'eth_getUncleByBlockHashAndIndex':
          case 'eth_getCompilers':
          case 'eth_compileLLL':
          case 'eth_compileSolidity':
          case 'eth_compileSerpent':
          case 'shh_version':
          case 'test_permaCache':
            return 'perma';
          // cache until fork

          case 'eth_getBlockByNumber':
          case 'eth_getBlockTransactionCountByNumber':
          case 'eth_getUncleCountByBlockNumber':
          case 'eth_getTransactionByBlockNumberAndIndex':
          case 'eth_getUncleByBlockNumberAndIndex':
          case 'test_forkCache':
            return 'fork';
          // cache for block

          case 'eth_gasPrice':
          case 'eth_blockNumber':
          case 'eth_getBalance':
          case 'eth_getStorageAt':
          case 'eth_getTransactionCount':
          case 'eth_call':
          case 'eth_estimateGas':
          case 'eth_getFilterLogs':
          case 'eth_getLogs':
          case 'test_blockCache':
            return 'block';
          // never cache

          case 'net_version':
          case 'net_peerCount':
          case 'net_listening':
          case 'eth_syncing':
          case 'eth_sign':
          case 'eth_coinbase':
          case 'eth_mining':
          case 'eth_hashrate':
          case 'eth_accounts':
          case 'eth_sendTransaction':
          case 'eth_sendRawTransaction':
          case 'eth_newFilter':
          case 'eth_newBlockFilter':
          case 'eth_newPendingTransactionFilter':
          case 'eth_uninstallFilter':
          case 'eth_getFilterChanges':
          case 'eth_getWork':
          case 'eth_submitWork':
          case 'eth_submitHashrate':
          case 'db_putString':
          case 'db_getString':
          case 'db_putHex':
          case 'db_getHex':
          case 'shh_post':
          case 'shh_newIdentity':
          case 'shh_hasIdentity':
          case 'shh_newGroup':
          case 'shh_addToGroup':
          case 'shh_newFilter':
          case 'shh_uninstallFilter':
          case 'shh_getFilterChanges':
          case 'shh_getMessages':
          case 'test_neverCache':
            return 'never';
        }
      }
      /***/

    },

    /***/
    "DxSV":
    /*!*****************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/elliptic/index.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function DxSV(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var elliptic_1 = __webpack_require__(
        /*! elliptic */
        "MzeL");

        var signature_1 = __webpack_require__(
        /*! elliptic/lib/elliptic/ec/signature */
        "tz+M");

        var random_1 = __webpack_require__(
        /*! ../../random */
        "Yp4/");

        var constants_1 = __webpack_require__(
        /*! ../../constants */
        "FEYL");

        var helpers_1 = __webpack_require__(
        /*! ../../helpers */
        "ghe6");

        var ec = new elliptic_1.ec('secp256k1');

        function ellipticCompress(publicKey) {
          publicKey = helpers_1.sanitizePublicKey(publicKey);
          var pubPoint = ec.keyFromPublic(publicKey);
          var hex = pubPoint.getPublic().encode(constants_1.HEX_ENC, true);
          return helpers_1.hexToBuffer(hex);
        }

        exports.ellipticCompress = ellipticCompress;

        function ellipticDecompress(publicKey) {
          publicKey = helpers_1.sanitizePublicKey(publicKey);
          var pubPoint = ec.keyFromPublic(publicKey);
          var hex = pubPoint.getPublic().encode(constants_1.HEX_ENC, false);
          return helpers_1.hexToBuffer(hex);
        }

        exports.ellipticDecompress = ellipticDecompress;

        function ellipticGeneratePrivate() {
          var privateKey = random_1.randomBytes(constants_1.KEY_LENGTH);

          while (!ellipticVerifyPrivateKey(privateKey)) {
            privateKey = random_1.randomBytes(constants_1.KEY_LENGTH);
          }

          return privateKey;
        }

        exports.ellipticGeneratePrivate = ellipticGeneratePrivate;

        function ellipticVerifyPrivateKey(privateKey) {
          return helpers_1.isValidPrivateKey(privateKey);
        }

        exports.ellipticVerifyPrivateKey = ellipticVerifyPrivateKey;

        function ellipticGetPublic(privateKey) {
          var hex = ec.keyFromPrivate(privateKey).getPublic(false, constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(hex);
        }

        exports.ellipticGetPublic = ellipticGetPublic;

        function ellipticGetPublicCompressed(privateKey) {
          var hex = ec.keyFromPrivate(privateKey).getPublic(true, constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(hex);
        }

        exports.ellipticGetPublicCompressed = ellipticGetPublicCompressed;

        function ellipticDerive(publicKeyB, privateKeyA) {
          var keyA = ec.keyFromPrivate(privateKeyA);
          var keyB = ec.keyFromPublic(publicKeyB);
          var Px = keyA.derive(keyB.getPublic());
          return Buffer.from(Px.toArray());
        }

        exports.ellipticDerive = ellipticDerive;

        function ellipticSignatureExport(sig) {
          return signature_1.Signature({
            r: sig.slice(0, 32),
            s: sig.slice(32, 64),
            recoveryParam: helpers_1.importRecoveryParam(sig.slice(64, 65))
          }).toDER();
        }

        exports.ellipticSignatureExport = ellipticSignatureExport;

        function ellipticSign(msg, privateKey) {
          var rsvSig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var signature = ec.sign(msg, privateKey, {
            canonical: true
          });
          return rsvSig ? helpers_1.concatBuffers(helpers_1.hexToBuffer(helpers_1.sanitizeHex(signature.r.toString(16))), helpers_1.hexToBuffer(helpers_1.sanitizeHex(signature.s.toString(16))), helpers_1.exportRecoveryParam(signature.recoveryParam || 0)) : Buffer.from(signature.toDER());
        }

        exports.ellipticSign = ellipticSign;

        function ellipticRecover(sig, msg) {
          var compressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (helpers_1.isValidDERSignature(sig)) {
            throw new Error('Cannot recover from DER signatures');
          }

          var signature = helpers_1.splitSignature(sig);
          var recoveryParam = helpers_1.importRecoveryParam(signature.v);
          var hex = ec.recoverPubKey(msg, {
            r: helpers_1.removeHexLeadingZeros(helpers_1.bufferToHex(signature.r)),
            s: helpers_1.removeHexLeadingZeros(helpers_1.bufferToHex(signature.s)),
            recoveryParam: recoveryParam
          }, recoveryParam).encode(constants_1.HEX_ENC, compressed);
          return helpers_1.hexToBuffer(hex);
        }

        exports.ellipticRecover = ellipticRecover;

        function ellipticVerify(sig, msg, publicKey) {
          if (!helpers_1.isValidDERSignature) {
            sig = ellipticSignatureExport(sig);
          }

          return ec.verify(msg, sig, publicKey);
        }

        exports.ellipticVerify = ellipticVerify; //# sourceMappingURL=index.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "ELBg":
    /*!*********************************************!*\
      !*** ./node_modules/dijkstrajs/dijkstra.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function ELBg(module, exports, __webpack_require__) {
      "use strict";
      /******************************************************************************
       * Created 2008-08-19.
       *
       * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
       *
       * Copyright (C) 2008
       *   Wyatt Baldwin <self@wyattbaldwin.com>
       *   All rights reserved
       *
       * Licensed under the MIT license.
       *
       *   http://www.opensource.org/licenses/mit-license.php
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       *****************************************************************************/

      var dijkstra = {
        single_source_shortest_paths: function single_source_shortest_paths(graph, s, d) {
          // Predecessor map for each node that has been encountered.
          // node ID => predecessor node ID
          var predecessors = {}; // Costs of shortest paths from s to all nodes encountered.
          // node ID => cost

          var costs = {};
          costs[s] = 0; // Costs of shortest paths from s to all nodes encountered; differs from
          // `costs` in that it provides easy access to the node that currently has
          // the known shortest path from s.
          // XXX: Do we actually need both `costs` and `open`?

          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);
          var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;

          while (!open.empty()) {
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost; // Get nodes adjacent to u...

            adjacent_nodes = graph[u] || {}; // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.

            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v]; // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.

                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e; // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).

                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === 'undefined';

                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }

          if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
            throw new Error(msg);
          }

          return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function extract_shortest_path_from_predecessor_list(predecessors, d) {
          var nodes = [];
          var u = d;
          var predecessor;

          while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
          }

          nodes.reverse();
          return nodes;
        },
        find_path: function find_path(graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
        },

        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function make(opts) {
            var T = dijkstra.PriorityQueue,
                t = {},
                key;
            opts = opts || {};

            for (key in T) {
              if (T.hasOwnProperty(key)) {
                t[key] = T[key];
              }
            }

            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },
          default_sorter: function default_sorter(a, b) {
            return a.cost - b.cost;
          },

          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function push(value, cost) {
            var item = {
              value: value,
              cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },

          /**
           * Return the highest priority element in the queue.
           */
          pop: function pop() {
            return this.queue.shift();
          },
          empty: function empty() {
            return this.queue.length === 0;
          }
        }
      }; // node.js module exports

      if (true) {
        module.exports = dijkstra;
      }
      /***/

    },

    /***/
    "FEYL":
    /*!**************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/constants/index.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function FEYL(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.HEX_ENC = 'hex';
        exports.UTF8_ENC = 'utf8';
        exports.ENCRYPT_OP = 'encrypt';
        exports.DECRYPT_OP = 'decrypt';
        exports.SIGN_OP = 'sign';
        exports.VERIFY_OP = 'verify';
        exports.LENGTH_0 = 0;
        exports.LENGTH_1 = 1;
        exports.LENGTH_16 = 16;
        exports.LENGTH_32 = 32;
        exports.LENGTH_64 = 64;
        exports.LENGTH_128 = 128;
        exports.LENGTH_256 = 256;
        exports.LENGTH_512 = 512;
        exports.LENGTH_1024 = 1024;
        exports.AES_LENGTH = exports.LENGTH_256;
        exports.HMAC_LENGTH = exports.LENGTH_256;
        exports.AES_BROWSER_ALGO = 'AES-CBC';
        exports.HMAC_BROWSER_ALGO = "SHA-".concat(exports.AES_LENGTH);
        exports.HMAC_BROWSER = 'HMAC';
        exports.SHA256_BROWSER_ALGO = 'SHA-256';
        exports.SHA512_BROWSER_ALGO = 'SHA-512';
        exports.AES_NODE_ALGO = "aes-".concat(exports.AES_LENGTH, "-cbc");
        exports.HMAC_NODE_ALGO = "sha".concat(exports.HMAC_LENGTH);
        exports.SHA256_NODE_ALGO = 'sha256';
        exports.SHA512_NODE_ALGO = 'sha512';
        exports.RIPEMD160_NODE_ALGO = 'ripemd160';
        exports.PREFIX_LENGTH = exports.LENGTH_1;
        exports.KEY_LENGTH = exports.LENGTH_32;
        exports.IV_LENGTH = exports.LENGTH_16;
        exports.MAC_LENGTH = exports.LENGTH_32;
        exports.DECOMPRESSED_LENGTH = exports.LENGTH_64;
        exports.PREFIXED_KEY_LENGTH = exports.KEY_LENGTH + exports.PREFIX_LENGTH;
        exports.PREFIXED_DECOMPRESSED_LENGTH = exports.DECOMPRESSED_LENGTH + exports.PREFIX_LENGTH;
        exports.MAX_KEY_LENGTH = exports.LENGTH_1024;
        exports.MAX_MSG_LENGTH = exports.LENGTH_32;
        exports.EMPTY_BUFFER = Buffer.from(new Uint8Array(exports.LENGTH_0));
        exports.EC_GROUP_ORDER = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', exports.HEX_ENC);
        exports.ZERO32 = Buffer.alloc(exports.LENGTH_32, exports.LENGTH_0);
        exports.ERROR_BAD_MAC = 'Bad MAC';
        exports.ERROR_BAD_PRIVATE_KEY = 'Bad private key';
        exports.ERROR_BAD_PUBLIC_KEY = 'Bad public key';
        exports.ERROR_EMPTY_MESSAGE = 'Message should not be empty';
        exports.ERROR_MESSAGE_TOO_LONG = 'Message is too long'; //# sourceMappingURL=index.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "FEiw":
    /*!**********************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/browser.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function FEiw(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (global, Buffer) {
        var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var constants_1 = __webpack_require__(
        /*! ../constants */
        "FEYL");

        var helpers_1 = __webpack_require__(
        /*! ../helpers */
        "ghe6");

        var fallback_1 = __webpack_require__(
        /*! ./fallback */
        "R+mK");

        function getBrowerCrypto() {
          var _a, _b;

          return ((_a = global) === null || _a === void 0 ? void 0 : _a.crypto) || ((_b = global) === null || _b === void 0 ? void 0 : _b.msCrypto) || {};
        }

        exports.getBrowerCrypto = getBrowerCrypto;

        function getSubtleCrypto() {
          var browserCrypto = getBrowerCrypto();
          return browserCrypto.subtle || browserCrypto.webkitSubtle;
        }

        exports.getSubtleCrypto = getSubtleCrypto;

        function browserRandomBytes(length) {
          var browserCrypto = getBrowerCrypto();

          if (typeof browserCrypto.getRandomValues !== 'undefined') {
            return helpers_1.arrayToBuffer(browserCrypto.getRandomValues(new Uint8Array(length)));
          }

          return fallback_1.fallbackRandomBytes(length);
        }

        exports.browserRandomBytes = browserRandomBytes;

        function browserImportKey(buffer) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constants_1.AES_BROWSER_ALGO;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var subtle, algo, ops, cryptoKey;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    algo = type === constants_1.AES_BROWSER_ALGO ? {
                      length: constants_1.AES_LENGTH,
                      name: constants_1.AES_BROWSER_ALGO
                    } : {
                      hash: {
                        name: constants_1.HMAC_BROWSER_ALGO
                      },
                      name: constants_1.HMAC_BROWSER
                    };
                    ops = type === constants_1.AES_BROWSER_ALGO ? [constants_1.ENCRYPT_OP, constants_1.DECRYPT_OP] : [constants_1.SIGN_OP, constants_1.VERIFY_OP];
                    _context23.next = 5;
                    return subtle.importKey('raw', buffer, algo, true, ops);

                  case 5:
                    cryptoKey = _context23.sent;
                    return _context23.abrupt("return", cryptoKey);

                  case 7:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));
        }

        exports.browserImportKey = browserImportKey;

        function browserAesEncrypt(iv, key, data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var subtle, cryptoKey, result;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    _context24.next = 3;
                    return browserImportKey(key, constants_1.AES_BROWSER_ALGO);

                  case 3:
                    cryptoKey = _context24.sent;
                    _context24.next = 6;
                    return subtle.encrypt({
                      iv: iv,
                      name: constants_1.AES_BROWSER_ALGO
                    }, cryptoKey, data);

                  case 6:
                    result = _context24.sent;
                    return _context24.abrupt("return", Buffer.from(result));

                  case 8:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));
        }

        exports.browserAesEncrypt = browserAesEncrypt;

        function browserAesDecrypt(iv, key, data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var subtle, cryptoKey, result;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    _context25.next = 3;
                    return browserImportKey(key, constants_1.AES_BROWSER_ALGO);

                  case 3:
                    cryptoKey = _context25.sent;
                    _context25.next = 6;
                    return subtle.decrypt({
                      iv: iv,
                      name: constants_1.AES_BROWSER_ALGO
                    }, cryptoKey, data);

                  case 6:
                    result = _context25.sent;
                    return _context25.abrupt("return", Buffer.from(result));

                  case 8:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25);
          }));
        }

        exports.browserAesDecrypt = browserAesDecrypt;

        function browserHmacSha256Sign(key, data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var subtle, cryptoKey, signature;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    _context26.next = 3;
                    return browserImportKey(key, constants_1.HMAC_BROWSER);

                  case 3:
                    cryptoKey = _context26.sent;
                    _context26.next = 6;
                    return subtle.sign({
                      length: constants_1.HMAC_LENGTH,
                      name: constants_1.HMAC_BROWSER
                    }, cryptoKey, data);

                  case 6:
                    signature = _context26.sent;
                    return _context26.abrupt("return", Buffer.from(signature));

                  case 8:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26);
          }));
        }

        exports.browserHmacSha256Sign = browserHmacSha256Sign;

        function browserHmacSha512Sign(key, data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            var subtle, cryptoKey, signature;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    _context27.next = 3;
                    return browserImportKey(key, constants_1.HMAC_BROWSER);

                  case 3:
                    cryptoKey = _context27.sent;
                    _context27.next = 6;
                    return subtle.sign({
                      length: constants_1.LENGTH_512,
                      name: constants_1.HMAC_BROWSER
                    }, cryptoKey, data);

                  case 6:
                    signature = _context27.sent;
                    return _context27.abrupt("return", Buffer.from(signature));

                  case 8:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27);
          }));
        }

        exports.browserHmacSha512Sign = browserHmacSha512Sign;

        function browserSha256(data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var subtle, result;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    _context28.next = 3;
                    return subtle.digest({
                      name: constants_1.SHA256_BROWSER_ALGO
                    }, data);

                  case 3:
                    result = _context28.sent;
                    return _context28.abrupt("return", Buffer.from(result));

                  case 5:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28);
          }));
        }

        exports.browserSha256 = browserSha256;

        function browserSha512(data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var subtle, result;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    subtle = getSubtleCrypto();
                    _context29.next = 3;
                    return subtle.digest({
                      name: constants_1.SHA512_BROWSER_ALGO
                    }, data);

                  case 3:
                    result = _context29.sent;
                    return _context29.abrupt("return", Buffer.from(result));

                  case 5:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29);
          }));
        }

        exports.browserSha512 = browserSha512; //# sourceMappingURL=browser.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../webpack/buildin/global.js */
      "yLpj"), __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "FdF9":
    /*!**********************************************************!*\
      !*** ./node_modules/preact/compat/dist/compat.module.js ***!
      \**********************************************************/

    /*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, Suspense, SuspenseList, lazy */

    /***/
    function FdF9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Children", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "render", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hydrate", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPortal", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFactory", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cloneElement", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidElement", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findDOMNode", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PureComponent", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "memo", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forwardRef", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Suspense", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuspenseList", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lazy", function () {
        return L;
      });
      /* harmony import */


      var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! preact/hooks */
      "MOxe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useState", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useReducer", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useEffect", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useRef", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useMemo", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useCallback", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useContext", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useDebugValue", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function () {
        return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"];
      });
      /* harmony import */


      var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! preact */
      "2mXy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createElement", function () {
        return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createContext", function () {
        return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createRef", function () {
        return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Fragment", function () {
        return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Component", function () {
        return preact__WEBPACK_IMPORTED_MODULE_1__["Component"];
      });

      function E(n, t) {
        for (var e in t) {
          n[e] = t[e];
        }

        return n;
      }

      function w(n, t) {
        for (var e in n) {
          if ("__source" !== e && !(e in t)) return !0;
        }

        for (var r in t) {
          if ("__source" !== r && n[r] !== t[r]) return !0;
        }

        return !1;
      }

      var C = function (n) {
        var t, e;

        function r(t) {
          var e;
          return (e = n.call(this, t) || this).isPureReactComponent = !0, e;
        }

        return e = n, (t = r).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, r.prototype.shouldComponentUpdate = function (n, t) {
          return w(this.props, n) || w(this.state, t);
        }, r;
      }(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);

      function _(n, t) {
        function e(n) {
          var e = this.props.ref,
              r = e == n.ref;
          return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : w(this.props, n);
        }

        function r(t) {
          return this.shouldComponentUpdate = e, Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n, E({}, t));
        }

        return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.t = !0, r;
      }

      var A = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;

      function S(n) {
        function t(t) {
          var e = E({}, t);
          return delete e.ref, n(e, t.ref);
        }

        return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
      }

      preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b = function (n) {
        n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), A && A(n);
      };

      var k = function k(n, t) {
        return n ? Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).reduce(function (n, e, r) {
          return n.concat(t(e, r));
        }, []) : null;
      },
          R = {
        map: k,
        forEach: k,
        count: function count(n) {
          return n ? Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length : 0;
        },
        only: function only(n) {
          if (1 !== (n = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n)).length) throw new Error("Children.only() expects only one child.");
          return n[0];
        },
        toArray: preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]
      },
          F = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;

      function N(n) {
        return n && ((n = E({}, n)).__c = null, n.__k = n.__k && n.__k.map(N)), n;
      }

      function U() {
        this.__u = 0, this.o = null, this.__b = null;
      }

      function M(n) {
        var t = n.__.__c;
        return t && t.u && t.u(n);
      }

      function L(n) {
        var t, e, r;

        function o(o) {
          if (t || (t = n()).then(function (n) {
            e = n["default"] || n;
          }, function (n) {
            r = n;
          }), r) throw r;
          if (!e) throw t;
          return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e, o);
        }

        return o.displayName = "Lazy", o.t = !0, o;
      }

      function O() {
        this.i = null, this.l = null;
      }

      preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e = function (n, t, e) {
        if (n.then) for (var r, o = t; o = o.__;) {
          if ((r = o.__c) && r.__c) return r.__c(n, t.__c);
        }
        F(n, t, e);
      }, (U.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).__c = function (n, t) {
        var e = this;
        null == e.o && (e.o = []), e.o.push(t);

        var r = M(e.__v),
            o = !1,
            u = function u() {
          o || (o = !0, r ? r(i) : i());
        };

        t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
          u(), t.__c && t.__c();
        };

        var i = function i() {
          var n;
          if (! --e.__u) for (e.__v.__k[0] = e.state.u, e.setState({
            u: e.__b = null
          }); n = e.o.pop();) {
            n.forceUpdate();
          }
        };

        e.__u++ || e.setState({
          u: e.__b = e.__v.__k[0]
        }), n.then(u, u);
      }, U.prototype.render = function (n, t) {
        return this.__b && (this.__v.__k[0] = N(this.__b), this.__b = null), [Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Component"], null, t.u ? null : n.children), t.u && n.fallback];
      };

      var P = function P(n, t, e) {
        if (++e[1] === e[0] && n.l["delete"](t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
          for (; e.length > 3;) {
            e.pop()();
          }

          if (e[1] < e[0]) break;
          n.i = e = e[2];
        }
      };

      (O.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).u = function (n) {
        var t = this,
            e = M(t.__v),
            r = t.l.get(n);
        return r[0]++, function (o) {
          var u = function u() {
            t.props.revealOrder ? (r.push(o), P(t, n, r)) : o();
          };

          e ? e(u) : u();
        };
      }, O.prototype.render = function (n) {
        this.i = null, this.l = new Map();
        var t = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);
        n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

        for (var e = t.length; e--;) {
          this.l.set(t[e], this.i = [1, 0, this.i]);
        }

        return n.children;
      }, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function () {
        var n = this;
        n.l.forEach(function (t, e) {
          P(n, e, t);
        });
      };

      var W = function () {
        function n() {}

        var t = n.prototype;
        return t.getChildContext = function () {
          return this.props.context;
        }, t.render = function (n) {
          return n.children;
        }, n;
      }();

      function j(n) {
        var t = this,
            e = n.container,
            r = Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(W, {
          context: t.context
        }, n.vnode);
        return t.s && t.s !== e && (t.v.parentNode && t.s.removeChild(t.v), Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.h), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r, e), t.__k = e.__k) : (t.v = document.createTextNode(""), Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("", e), e.appendChild(t.v), t.p = !0, t.s = e, Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r, e, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.h)), t.h = r, t.componentWillUnmount = function () {
          t.v.parentNode && t.s.removeChild(t.v), Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.h);
        }, null;
      }

      function z(n, t) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(j, {
          vnode: n,
          container: t
        });
      }

      var D = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent = {};
      var H = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103;

      function T(n, t, e) {
        if (null == t.__k) for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }
        return Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
      }

      function V(n, t, e) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
      }

      var Z = preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;

      function I(n, t) {
        n["UNSAFE_" + t] && !n[t] && Object.defineProperty(n, t, {
          configurable: !1,
          get: function get() {
            return this["UNSAFE_" + t];
          },
          set: function set(n) {
            this["UNSAFE_" + t] = n;
          }
        });
      }

      preact__WEBPACK_IMPORTED_MODULE_1__["options"].event = function (n) {
        Z && (n = Z(n)), n.persist = function () {};
        var t = !1,
            e = !1,
            r = n.stopPropagation;

        n.stopPropagation = function () {
          r.call(n), t = !0;
        };

        var o = n.preventDefault;
        return n.preventDefault = function () {
          o.call(n), e = !0;
        }, n.isPropagationStopped = function () {
          return t;
        }, n.isDefaultPrevented = function () {
          return e;
        }, n.nativeEvent = n;
      };

      var $ = {
        configurable: !0,
        get: function get() {
          return this["class"];
        }
      },
          q = preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;

      preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode = function (n) {
        n.$$typeof = H;
        var t = n.type,
            e = n.props;

        if (t) {
          if (e["class"] != e.className && ($.enumerable = "className" in e, null != e.className && (e["class"] = e.className), Object.defineProperty(e, "className", $)), "function" != typeof t) {
            var r, o, u;

            for (u in e.defaultValue && void 0 !== e.value && (e.value || 0 === e.value || (e.value = e.defaultValue), delete e.defaultValue), Array.isArray(e.value) && e.multiple && "select" === t && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function (n) {
              -1 != e.value.indexOf(n.props.value) && (n.props.selected = !0);
            }), delete e.value), e) {
              if (r = D.test(u)) break;
            }

            if (r) for (u in o = n.props = {}, e) {
              o[D.test(u) ? u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u] = e[u];
            }
          }

          !function (t) {
            var e = n.type,
                r = n.props;

            if (r && "string" == typeof e) {
              var o = {};

              for (var u in r) {
                /^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;
              }

              if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
                var i = o.oninput || "oninput";
                r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
              }
            }
          }(), "function" == typeof t && !t.m && t.prototype && (I(t.prototype, "componentWillMount"), I(t.prototype, "componentWillReceiveProps"), I(t.prototype, "componentWillUpdate"), t.m = !0);
        }

        q && q(n);
      };

      var B = "16.8.0";

      function G(n) {
        return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null, n);
      }

      function J(n) {
        return !!n && n.$$typeof === H;
      }

      function K(n) {
        return J(n) ? preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null, arguments) : n;
      }

      function Q(n) {
        return !!n.__k && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null, n), !0);
      }

      function X(n) {
        return n && (n.base || 1 === n.nodeType && n) || null;
      }

      var Y = function Y(n, t) {
        return n(t);
      };
      /* harmony default export */


      __webpack_exports__["default"] = {
        useState: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],
        useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],
        useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
        useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],
        useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],
        useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],
        useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],
        useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],
        useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],
        useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],
        version: "16.8.0",
        Children: R,
        render: T,
        hydrate: T,
        unmountComponentAtNode: Q,
        createPortal: z,
        createElement: preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],
        createContext: preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],
        createFactory: G,
        cloneElement: K,
        createRef: preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],
        Fragment: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
        isValidElement: J,
        findDOMNode: X,
        Component: preact__WEBPACK_IMPORTED_MODULE_1__["Component"],
        PureComponent: C,
        memo: _,
        forwardRef: S,
        unstable_batchedUpdates: Y,
        Suspense: U,
        SuspenseList: O,
        lazy: L
      }; //# sourceMappingURL=compat.module.js.map

      /***/
    },

    /***/
    "Iidz":
    /*!***************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/sha2.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Iidz(module, exports, __webpack_require__) {
      "use strict";

      var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var env_1 = __webpack_require__(
      /*! ./lib/env */
      "9A97");

      var browser_1 = __webpack_require__(
      /*! ./lib/browser */
      "FEiw");

      var node_1 = __webpack_require__(
      /*! ./lib/node */
      "Jl6S");

      var fallback_1 = __webpack_require__(
      /*! ./lib/fallback */
      "R+mK");

      var constants_1 = __webpack_require__(
      /*! ./constants */
      "FEYL");

      function sha256(msg) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
          var result;
          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  result = constants_1.EMPTY_BUFFER;

                  if (!env_1.isBrowser()) {
                    _context30.next = 7;
                    break;
                  }

                  _context30.next = 4;
                  return browser_1.browserSha256(msg);

                case 4:
                  result = _context30.sent;
                  _context30.next = 8;
                  break;

                case 7:
                  if (env_1.isNode()) {
                    result = node_1.nodeSha256(msg);
                  } else {
                    result = fallback_1.fallbackSha256(msg);
                  }

                case 8:
                  return _context30.abrupt("return", result);

                case 9:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30);
        }));
      }

      exports.sha256 = sha256;

      function sha512(msg) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
          var result;
          return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  result = constants_1.EMPTY_BUFFER;

                  if (!env_1.isBrowser()) {
                    _context31.next = 7;
                    break;
                  }

                  _context31.next = 4;
                  return browser_1.browserSha512(msg);

                case 4:
                  result = _context31.sent;
                  _context31.next = 8;
                  break;

                case 7:
                  if (env_1.isNode()) {
                    result = node_1.nodeSha512(msg);
                  } else {
                    result = fallback_1.fallbackSha512(msg);
                  }

                case 8:
                  return _context31.abrupt("return", result);

                case 9:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31);
        }));
      }

      exports.sha512 = sha512;

      function ripemd160(msg) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
          var result;
          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  result = constants_1.EMPTY_BUFFER;

                  if (env_1.isNode()) {
                    result = node_1.nodeRipemd160(msg);
                  } else {
                    result = fallback_1.fallbackRipemd160(msg);
                  }

                  return _context32.abrupt("return", result);

                case 3:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32);
        }));
      }

      exports.ripemd160 = ripemd160;

      function sha256Sync(msg) {
        var result = constants_1.EMPTY_BUFFER;

        if (env_1.isNode()) {
          result = node_1.nodeSha256(msg);
        } else {
          result = fallback_1.fallbackSha256(msg);
        }

        return result;
      }

      exports.sha256Sync = sha256Sync;

      function sha512Sync(msg) {
        var result = constants_1.EMPTY_BUFFER;

        if (env_1.isNode()) {
          result = node_1.nodeSha512(msg);
        } else {
          result = fallback_1.fallbackSha512(msg);
        }

        return result;
      }

      exports.sha512Sync = sha512Sync;

      function ripemd160Sync(msg) {
        var result = constants_1.EMPTY_BUFFER;

        if (env_1.isNode()) {
          result = node_1.nodeRipemd160(msg);
        } else {
          result = fallback_1.fallbackRipemd160(msg);
        }

        return result;
      }

      exports.ripemd160Sync = ripemd160Sync; //# sourceMappingURL=sha2.js.map

      /***/
    },

    /***/
    "J6Nv":
    /*!*******************************************************!*\
      !*** ./node_modules/qrcode/lib/core/version-check.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function J6Nv(module, exports) {
      /**
       * Check if QR Code version is valid
       *
       * @param  {Number}  version QR Code version
       * @return {Boolean}         true if valid version, false otherwise
       */
      exports.isValid = function isValid(version) {
        return !isNaN(version) && version >= 1 && version <= 40;
      };
      /***/

    },

    /***/
    "Jl6S":
    /*!*******************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/node.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Jl6S(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var crypto_1 = __importDefault(__webpack_require__(
        /*! crypto */
        "HEbw"));

        var constants_1 = __webpack_require__(
        /*! ../constants */
        "FEYL");

        var helpers_1 = __webpack_require__(
        /*! ../helpers */
        "ghe6");

        function nodeRandomBytes(length) {
          return crypto_1["default"].randomBytes(length);
        }

        exports.nodeRandomBytes = nodeRandomBytes;

        function nodeAesEncrypt(iv, key, data) {
          var cipher = crypto_1["default"].createCipheriv(constants_1.AES_NODE_ALGO, key, iv);
          return helpers_1.concatBuffers(cipher.update(data), cipher["final"]());
        }

        exports.nodeAesEncrypt = nodeAesEncrypt;

        function nodeAesDecrypt(iv, key, data) {
          var decipher = crypto_1["default"].createDecipheriv(constants_1.AES_NODE_ALGO, key, iv);
          return helpers_1.concatBuffers(decipher.update(data), decipher["final"]());
        }

        exports.nodeAesDecrypt = nodeAesDecrypt;

        function nodeHmacSha256Sign(key, data) {
          return crypto_1["default"].createHmac(constants_1.HMAC_NODE_ALGO, Buffer.from(key)).update(data).digest();
        }

        exports.nodeHmacSha256Sign = nodeHmacSha256Sign;

        function nodeHmacSha512Sign(key, data) {
          return crypto_1["default"].createHmac(constants_1.SHA512_NODE_ALGO, Buffer.from(key)).update(data).digest();
        }

        exports.nodeHmacSha512Sign = nodeHmacSha512Sign;

        function nodeSha256(data) {
          return crypto_1["default"].createHash(constants_1.SHA256_NODE_ALGO).update(data).digest();
        }

        exports.nodeSha256 = nodeSha256;

        function nodeSha512(data) {
          return crypto_1["default"].createHash(constants_1.SHA512_NODE_ALGO).update(data).digest();
        }

        exports.nodeSha512 = nodeSha512;

        function nodeRipemd160(data) {
          return crypto_1["default"].createHash(constants_1.RIPEMD160_NODE_ALGO).update(data).digest();
        }

        exports.nodeRipemd160 = nodeRipemd160; //# sourceMappingURL=node.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "JzKC":
    /*!****************************************************!*\
      !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function JzKC(module, exports, __webpack_require__) {
      var BufferUtil = __webpack_require__(
      /*! ../utils/buffer */
      "Wogr");

      var GF = __webpack_require__(
      /*! ./galois-field */
      "aZ40");
      /**
       * Multiplies two polynomials inside Galois Field
       *
       * @param  {Buffer} p1 Polynomial
       * @param  {Buffer} p2 Polynomial
       * @return {Buffer}    Product of p1 and p2
       */


      exports.mul = function mul(p1, p2) {
        var coeff = BufferUtil.alloc(p1.length + p2.length - 1);

        for (var i = 0; i < p1.length; i++) {
          for (var j = 0; j < p2.length; j++) {
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
          }
        }

        return coeff;
      };
      /**
       * Calculate the remainder of polynomials division
       *
       * @param  {Buffer} divident Polynomial
       * @param  {Buffer} divisor  Polynomial
       * @return {Buffer}          Remainder
       */


      exports.mod = function mod(divident, divisor) {
        var result = BufferUtil.from(divident);

        while (result.length - divisor.length >= 0) {
          var coeff = result[0];

          for (var i = 0; i < divisor.length; i++) {
            result[i] ^= GF.mul(divisor[i], coeff);
          } // remove all zeros from buffer head


          var offset = 0;

          while (offset < result.length && result[offset] === 0) {
            offset++;
          }

          result = result.slice(offset);
        }

        return result;
      };
      /**
       * Generate an irreducible generator polynomial of specified degree
       * (used by Reed-Solomon encoder)
       *
       * @param  {Number} degree Degree of the generator polynomial
       * @return {Buffer}        Buffer containing polynomial coefficients
       */


      exports.generateECPolynomial = function generateECPolynomial(degree) {
        var poly = BufferUtil.from([1]);

        for (var i = 0; i < degree; i++) {
          poly = exports.mul(poly, [1, GF.exp(i)]);
        }

        return poly;
      };
      /***/

    },

    /***/
    "KUYr":
    /*!*************************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/nonce-tracker.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function KUYr(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        var inherits = __webpack_require__(
        /*! util */
        "MCLT").inherits;

        var Transaction = __webpack_require__(
        /*! ethereumjs-tx */
        "Nnx4");

        var ethUtil = __webpack_require__(
        /*! ethereumjs-util */
        "tnHP");

        var Subprovider = __webpack_require__(
        /*! ./subprovider.js */
        "Uu7K");

        var blockTagForPayload = __webpack_require__(
        /*! ../util/rpc-cache-utils */
        "gO+T").blockTagForPayload;

        module.exports = NonceTrackerSubprovider; // handles the following RPC methods:
        //   eth_getTransactionCount (pending only)
        //
        // observes the following RPC methods:
        //   eth_sendRawTransaction
        //   evm_revert (to clear the nonce cache)

        inherits(NonceTrackerSubprovider, Subprovider);

        function NonceTrackerSubprovider(opts) {
          var self = this;
          self.nonceCache = {};
        }

        NonceTrackerSubprovider.prototype.handleRequest = function (payload, next, end) {
          var self = this;

          switch (payload.method) {
            case 'eth_getTransactionCount':
              var blockTag = blockTagForPayload(payload);
              var address = payload.params[0].toLowerCase();
              var cachedResult = self.nonceCache[address]; // only handle requests against the 'pending' blockTag

              if (blockTag === 'pending') {
                // has a result
                if (cachedResult) {
                  end(null, cachedResult); // fallthrough then populate cache
                } else {
                  next(function (err, result, cb) {
                    if (err) return cb();

                    if (self.nonceCache[address] === undefined) {
                      self.nonceCache[address] = result;
                    }

                    cb();
                  });
                }
              } else {
                next();
              }

              return;

            case 'eth_sendRawTransaction':
              // allow the request to continue normally
              next(function (err, result, cb) {
                // only update local nonce if tx was submitted correctly
                if (err) return cb(); // parse raw tx

                var rawTx = payload.params[0];
                var stripped = ethUtil.stripHexPrefix(rawTx);
                var rawData = Buffer.from(ethUtil.stripHexPrefix(rawTx), 'hex');
                var tx = new Transaction(Buffer.from(ethUtil.stripHexPrefix(rawTx), 'hex')); // extract address

                var address = '0x' + tx.getSenderAddress().toString('hex').toLowerCase(); // extract nonce and increment

                var nonce = ethUtil.bufferToInt(tx.nonce);
                nonce++; // hexify and normalize

                var hexNonce = nonce.toString(16);
                if (hexNonce.length % 2) hexNonce = '0' + hexNonce;
                hexNonce = '0x' + hexNonce; // dont update our record on the nonce until the submit was successful
                // update cache

                self.nonceCache[address] = hexNonce;
                cb();
              });
              return;
            // Clear cache on a testrpc revert

            case 'evm_revert':
              self.nonceCache = {};
              next();
              return;

            default:
              next();
              return;
          }
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "Lw4u":
    /*!***************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/sha3.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Lw4u(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var js_sha3_1 = __webpack_require__(
      /*! js-sha3 */
      "HFX+");

      var helpers_1 = __webpack_require__(
      /*! ./helpers */
      "ghe6");

      function sha3(msg) {
        return helpers_1.hexToBuffer(js_sha3_1.sha3_256(msg));
      }

      exports.sha3 = sha3;

      function keccak256(msg) {
        return helpers_1.hexToBuffer(js_sha3_1.keccak_256(msg));
      }

      exports.keccak256 = keccak256; //# sourceMappingURL=sha3.js.map

      /***/
    },

    /***/
    "Lzq4":
    /*!****************************************************!*\
      !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Lzq4(module, exports, __webpack_require__) {
      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");

      var Utils = __webpack_require__(
      /*! ./utils */
      "e/Dd");

      function KanjiData(data) {
        this.mode = Mode.KANJI;
        this.data = data;
      }

      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };

      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };

      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };

      KanjiData.prototype.write = function (bitBuffer) {
        var i; // In the Shift JIS system, Kanji characters are represented by a two byte combination.
        // These byte values are shifted from the JIS X 0208 values.
        // JIS X 0208 gives details of the shift coded representation.

        for (i = 0; i < this.data.length; i++) {
          var value = Utils.toSJIS(this.data[i]); // For characters with Shift JIS values from 0x8140 to 0x9FFC:

          if (value >= 0x8140 && value <= 0x9FFC) {
            // Subtract 0x8140 from Shift JIS value
            value -= 0x8140; // For characters with Shift JIS values from 0xE040 to 0xEBBF
          } else if (value >= 0xE040 && value <= 0xEBBF) {
            // Subtract 0xC140 from Shift JIS value
            value -= 0xC140;
          } else {
            throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
          } // Multiply most significant byte of result by 0xC0
          // and add least significant byte to product


          value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff); // Convert result to a 13-bit binary string

          bitBuffer.put(value, 13);
        }
      };

      module.exports = KanjiData;
      /***/
    },

    /***/
    "MHx8":
    /*!*********************************************************************!*\
      !*** ./node_modules/@walletconnect/web3-provider/dist/cjs/index.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function MHx8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var client_1 = tslib_1.__importDefault(__webpack_require__(
      /*! @walletconnect/client */
      "wVYR"));

      var qrcode_modal_1 = tslib_1.__importDefault(__webpack_require__(
      /*! @walletconnect/qrcode-modal */
      "dFyl"));

      var http_connection_1 = tslib_1.__importDefault(__webpack_require__(
      /*! @walletconnect/http-connection */
      "StEZ"));

      var utils_1 = __webpack_require__(
      /*! @walletconnect/utils */
      "xI+a");

      var ProviderEngine = __webpack_require__(
      /*! web3-provider-engine */
      "f4g2");

      var CacheSubprovider = __webpack_require__(
      /*! web3-provider-engine/subproviders/cache */
      "2yqT");

      var FixtureSubprovider = __webpack_require__(
      /*! web3-provider-engine/subproviders/fixture */
      "WRhU");

      var FilterSubprovider = __webpack_require__(
      /*! web3-provider-engine/subproviders/filters */
      "cC/c");

      var HookedWalletSubprovider = __webpack_require__(
      /*! web3-provider-engine/subproviders/hooked-wallet */
      "Rlsf");

      var NonceSubprovider = __webpack_require__(
      /*! web3-provider-engine/subproviders/nonce-tracker */
      "KUYr");

      var SubscriptionsSubprovider = __webpack_require__(
      /*! web3-provider-engine/subproviders/subscriptions */
      "EqmL");

      var WalletConnectProvider = /*#__PURE__*/function (_ProviderEngine) {
        _inherits(WalletConnectProvider, _ProviderEngine);

        var _super2 = _createSuper(WalletConnectProvider);

        function WalletConnectProvider(opts) {
          var _this14;

          _classCallCheck2(this, WalletConnectProvider);

          _this14 = _super2.call(this, {
            pollingInterval: opts.pollingInterval || 8000
          });
          _this14.bridge = "https://bridge.walletconnect.org";
          _this14.qrcode = true;
          _this14.qrcodeModalOptions = undefined;
          _this14.rpc = null;
          _this14.infuraId = "";
          _this14.http = null;
          _this14.isConnecting = false;
          _this14.connected = false;
          _this14.connectCallbacks = [];
          _this14.accounts = [];
          _this14.chainId = 1;
          _this14.networkId = 1;
          _this14.rpcUrl = "";
          _this14.bridge = opts.connector ? opts.connector.bridge : opts.bridge || "https://bridge.walletconnect.org";
          _this14.qrcode = typeof opts.qrcode === "undefined" || opts.qrcode !== false;
          _this14.qrcodeModalOptions = opts.qrcodeModalOptions;
          _this14.wc = opts.connector || new client_1["default"]({
            bridge: _this14.bridge,
            qrcodeModal: _this14.qrcode ? qrcode_modal_1["default"] : undefined,
            qrcodeModalOptions: _this14.qrcodeModalOptions
          });
          _this14.rpc = opts.rpc || null;

          if (!_this14.rpc && (!opts.infuraId || typeof opts.infuraId !== "string" || !opts.infuraId.trim())) {
            throw new Error("Missing one of the required parameters: rpc or infuraId");
          }

          _this14.infuraId = opts.infuraId || "";
          _this14.chainId = typeof opts.chainId !== "undefined" ? opts.chainId : 1;
          _this14.networkId = _this14.chainId;

          _this14.updateRpcUrl(_this14.chainId);

          _this14.addProvider(new FixtureSubprovider({
            eth_hashrate: "0x00",
            eth_mining: false,
            eth_syncing: true,
            net_listening: true,
            web3_clientVersion: "WalletConnect/v1.x.x/javascript"
          }));

          _this14.addProvider(new CacheSubprovider());

          _this14.addProvider(new SubscriptionsSubprovider());

          _this14.addProvider(new FilterSubprovider());

          _this14.addProvider(new NonceSubprovider());

          _this14.addProvider(new HookedWalletSubprovider({
            getAccounts: function getAccounts(cb) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
                var wc, accounts;
                return regeneratorRuntime.wrap(function _callee33$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        _context33.prev = 0;
                        _context33.next = 3;
                        return this.getWalletConnector();

                      case 3:
                        wc = _context33.sent;
                        accounts = wc.accounts;

                        if (accounts && accounts.length) {
                          cb(null, accounts);
                        } else {
                          cb(new Error("Failed to get accounts"));
                        }

                        _context33.next = 11;
                        break;

                      case 8:
                        _context33.prev = 8;
                        _context33.t0 = _context33["catch"](0);
                        cb(_context33.t0);

                      case 11:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee33, this, [[0, 8]]);
              }));
            },
            processMessage: function processMessage(msgParams, cb) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
                var wc, result;
                return regeneratorRuntime.wrap(function _callee34$(_context34) {
                  while (1) {
                    switch (_context34.prev = _context34.next) {
                      case 0:
                        _context34.prev = 0;
                        _context34.next = 3;
                        return this.getWalletConnector();

                      case 3:
                        wc = _context34.sent;
                        _context34.next = 6;
                        return wc.signMessage([msgParams.from, msgParams.data]);

                      case 6:
                        result = _context34.sent;
                        cb(null, result);
                        _context34.next = 13;
                        break;

                      case 10:
                        _context34.prev = 10;
                        _context34.t0 = _context34["catch"](0);
                        cb(_context34.t0);

                      case 13:
                      case "end":
                        return _context34.stop();
                    }
                  }
                }, _callee34, this, [[0, 10]]);
              }));
            },
            processPersonalMessage: function processPersonalMessage(msgParams, cb) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
                var wc, result;
                return regeneratorRuntime.wrap(function _callee35$(_context35) {
                  while (1) {
                    switch (_context35.prev = _context35.next) {
                      case 0:
                        _context35.prev = 0;
                        _context35.next = 3;
                        return this.getWalletConnector();

                      case 3:
                        wc = _context35.sent;
                        _context35.next = 6;
                        return wc.signPersonalMessage([msgParams.data, msgParams.from]);

                      case 6:
                        result = _context35.sent;
                        cb(null, result);
                        _context35.next = 13;
                        break;

                      case 10:
                        _context35.prev = 10;
                        _context35.t0 = _context35["catch"](0);
                        cb(_context35.t0);

                      case 13:
                      case "end":
                        return _context35.stop();
                    }
                  }
                }, _callee35, this, [[0, 10]]);
              }));
            },
            processSignTransaction: function processSignTransaction(txParams, cb) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
                var wc, result;
                return regeneratorRuntime.wrap(function _callee36$(_context36) {
                  while (1) {
                    switch (_context36.prev = _context36.next) {
                      case 0:
                        _context36.prev = 0;
                        _context36.next = 3;
                        return this.getWalletConnector();

                      case 3:
                        wc = _context36.sent;
                        _context36.next = 6;
                        return wc.signTransaction(txParams);

                      case 6:
                        result = _context36.sent;
                        cb(null, result);
                        _context36.next = 13;
                        break;

                      case 10:
                        _context36.prev = 10;
                        _context36.t0 = _context36["catch"](0);
                        cb(_context36.t0);

                      case 13:
                      case "end":
                        return _context36.stop();
                    }
                  }
                }, _callee36, this, [[0, 10]]);
              }));
            },
            processTransaction: function processTransaction(txParams, cb) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
                var wc, result;
                return regeneratorRuntime.wrap(function _callee37$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        _context37.prev = 0;
                        _context37.next = 3;
                        return this.getWalletConnector();

                      case 3:
                        wc = _context37.sent;
                        _context37.next = 6;
                        return wc.sendTransaction(txParams);

                      case 6:
                        result = _context37.sent;
                        cb(null, result);
                        _context37.next = 13;
                        break;

                      case 10:
                        _context37.prev = 10;
                        _context37.t0 = _context37["catch"](0);
                        cb(_context37.t0);

                      case 13:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee37, this, [[0, 10]]);
              }));
            },
            processTypedMessage: function processTypedMessage(msgParams, cb) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
                var wc, result;
                return regeneratorRuntime.wrap(function _callee38$(_context38) {
                  while (1) {
                    switch (_context38.prev = _context38.next) {
                      case 0:
                        _context38.prev = 0;
                        _context38.next = 3;
                        return this.getWalletConnector();

                      case 3:
                        wc = _context38.sent;
                        _context38.next = 6;
                        return wc.signTypedData([msgParams.from, msgParams.data]);

                      case 6:
                        result = _context38.sent;
                        cb(null, result);
                        _context38.next = 13;
                        break;

                      case 10:
                        _context38.prev = 10;
                        _context38.t0 = _context38["catch"](0);
                        cb(_context38.t0);

                      case 13:
                      case "end":
                        return _context38.stop();
                    }
                  }
                }, _callee38, this, [[0, 10]]);
              }));
            }
          }));

          _this14.addProvider({
            handleRequest: function handleRequest(payload, next, end) {
              return tslib_1.__awaiter(_assertThisInitialized(_this14), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
                var _yield$this$handleReq, result;

                return regeneratorRuntime.wrap(function _callee39$(_context39) {
                  while (1) {
                    switch (_context39.prev = _context39.next) {
                      case 0:
                        _context39.prev = 0;
                        _context39.next = 3;
                        return this.handleRequest(payload);

                      case 3:
                        _yield$this$handleReq = _context39.sent;
                        result = _yield$this$handleReq.result;
                        end(null, result);
                        _context39.next = 11;
                        break;

                      case 8:
                        _context39.prev = 8;
                        _context39.t0 = _context39["catch"](0);
                        end(_context39.t0);

                      case 11:
                      case "end":
                        return _context39.stop();
                    }
                  }
                }, _callee39, this, [[0, 8]]);
              }));
            },
            setEngine: function setEngine(_) {
              return _;
            }
          });

          return _this14;
        }

        _createClass(WalletConnectProvider, [{
          key: "enable",
          value: function enable() {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              var wc;
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return this.getWalletConnector();

                    case 2:
                      wc = _context40.sent;

                      if (!wc) {
                        _context40.next = 9;
                        break;
                      }

                      this.start();
                      this.subscribeWalletConnector();
                      return _context40.abrupt("return", wc.accounts);

                    case 9:
                      throw new Error("Failed to connect to WalleConnect");

                    case 10:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "request",
          value: function request(payload) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      return _context41.abrupt("return", this.send(payload));

                    case 1:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "send",
          value: function send(payload, callback) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var method, params;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      if (!(typeof payload === "string")) {
                        _context42.next = 5;
                        break;
                      }

                      method = payload;
                      params = callback;

                      if (method === "personal_sign") {
                        params = utils_1.parsePersonalSign(params);
                      }

                      return _context42.abrupt("return", this.sendAsyncPromise(method, params));

                    case 5:
                      payload = Object.assign({
                        id: utils_1.payloadId(),
                        jsonrpc: "2.0"
                      }, payload);

                      if (payload.method === "personal_sign") {
                        payload.params = utils_1.parsePersonalSign(payload.params);
                      }

                      if (!callback) {
                        _context42.next = 10;
                        break;
                      }

                      this.sendAsync(payload, callback);
                      return _context42.abrupt("return");

                    case 10:
                      return _context42.abrupt("return", this.sendAsyncPromise(payload.method, payload.params));

                    case 11:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "onConnect",
          value: function onConnect(callback) {
            this.connectCallbacks.push(callback);
          }
        }, {
          key: "triggerConnect",
          value: function triggerConnect(result) {
            if (this.connectCallbacks && this.connectCallbacks.length) {
              this.connectCallbacks.forEach(function (callback) {
                return callback(result);
              });
            }
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      this.close();

                    case 1:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var wc;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      _context44.next = 2;
                      return this.getWalletConnector({
                        disableSessionCreation: true
                      });

                    case 2:
                      wc = _context44.sent;
                      _context44.next = 5;
                      return wc.killSession();

                    case 5:
                      _context44.next = 7;
                      return this.onDisconnect();

                    case 7:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "handleRequest",
          value: function handleRequest(payload) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              var response, result, wc;
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.prev = 0;
                      result = null;
                      _context45.next = 4;
                      return this.getWalletConnector();

                    case 4:
                      wc = _context45.sent;
                      _context45.t0 = payload.method;
                      _context45.next = _context45.t0 === "wc_killSession" ? 8 : _context45.t0 === "eth_accounts" ? 12 : _context45.t0 === "eth_coinbase" ? 14 : _context45.t0 === "eth_chainId" ? 16 : _context45.t0 === "net_version" ? 18 : _context45.t0 === "eth_uninstallFilter" ? 20 : 23;
                      break;

                    case 8:
                      _context45.next = 10;
                      return this.close();

                    case 10:
                      result = null;
                      return _context45.abrupt("break", 26);

                    case 12:
                      result = wc.accounts;
                      return _context45.abrupt("break", 26);

                    case 14:
                      result = wc.accounts[0];
                      return _context45.abrupt("break", 26);

                    case 16:
                      result = wc.chainId;
                      return _context45.abrupt("break", 26);

                    case 18:
                      result = wc.networkId || wc.chainId;
                      return _context45.abrupt("break", 26);

                    case 20:
                      this.sendAsync(payload, function (_) {
                        return _;
                      });
                      result = true;
                      return _context45.abrupt("break", 26);

                    case 23:
                      _context45.next = 25;
                      return this.handleOtherRequests(payload);

                    case 25:
                      response = _context45.sent;

                    case 26:
                      if (!response) {
                        _context45.next = 28;
                        break;
                      }

                      return _context45.abrupt("return", response);

                    case 28:
                      return _context45.abrupt("return", this.formatResponse(payload, result));

                    case 31:
                      _context45.prev = 31;
                      _context45.t1 = _context45["catch"](0);
                      this.emit("error", _context45.t1);
                      throw _context45.t1;

                    case 35:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this, [[0, 31]]);
            }));
          }
        }, {
          key: "handleOtherRequests",
          value: function handleOtherRequests(payload) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              var wc, result;
              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      if (!(!utils_1.signingMethods.includes(payload.method) && payload.method.startsWith("eth_"))) {
                        _context46.next = 2;
                        break;
                      }

                      return _context46.abrupt("return", this.handleReadRequests(payload));

                    case 2:
                      _context46.next = 4;
                      return this.getWalletConnector();

                    case 4:
                      wc = _context46.sent;
                      _context46.next = 7;
                      return wc.sendCustomRequest(payload);

                    case 7:
                      result = _context46.sent;
                      return _context46.abrupt("return", this.formatResponse(payload, result));

                    case 9:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "handleReadRequests",
          value: function handleReadRequests(payload) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              var error;
              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      if (this.http) {
                        _context47.next = 4;
                        break;
                      }

                      error = new Error("HTTP Connection not available");
                      this.emit("error", error);
                      throw error;

                    case 4:
                      return _context47.abrupt("return", this.http.send(payload));

                    case 5:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this);
            }));
          }
        }, {
          key: "formatResponse",
          value: function formatResponse(payload, result) {
            return {
              id: payload.id,
              jsonrpc: payload.jsonrpc,
              result: result
            };
          }
        }, {
          key: "getWalletConnector",
          value: function getWalletConnector() {
            var _this15 = this;

            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _opts$disableSessionC = opts.disableSessionCreation,
                disableSessionCreation = _opts$disableSessionC === void 0 ? false : _opts$disableSessionC;
            return new Promise(function (resolve, reject) {
              var wc = _this15.wc;

              if (_this15.isConnecting) {
                _this15.onConnect(function (x) {
                  return resolve(x);
                });
              } else if (!wc.connected && !disableSessionCreation) {
                _this15.isConnecting = true;
                var sessionRequestOpions = _this15.chainId ? {
                  chainId: _this15.chainId
                } : undefined;
                wc.on("modal_closed", function () {
                  reject(new Error("User closed modal"));
                });
                wc.createSession(sessionRequestOpions).then(function () {
                  wc.on("connect", function (error, payload) {
                    if (error) {
                      _this15.isConnecting = false;
                      return reject(error);
                    }

                    _this15.isConnecting = false;
                    _this15.connected = true;

                    if (payload) {
                      _this15.updateState(payload.params[0]);
                    }

                    _this15.emit("connect");

                    _this15.triggerConnect(wc);

                    resolve(wc);
                  });
                })["catch"](function (error) {
                  _this15.isConnecting = false;
                  reject(error);
                });
              } else {
                if (!_this15.connected) {
                  _this15.connected = true;

                  _this15.updateState(wc.session);
                }

                resolve(wc);
              }
            });
          }
        }, {
          key: "subscribeWalletConnector",
          value: function subscribeWalletConnector() {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _this16 = this;

              var wc;
              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      _context48.next = 2;
                      return this.getWalletConnector();

                    case 2:
                      wc = _context48.sent;
                      wc.on("disconnect", function (error) {
                        if (error) {
                          _this16.emit("error", error);

                          return;
                        }

                        _this16.onDisconnect();
                      });
                      wc.on("session_update", function (error, payload) {
                        if (error) {
                          _this16.emit("error", error);

                          return;
                        }

                        _this16.updateState(payload.params[0]);
                      });

                    case 5:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          }
        }, {
          key: "onDisconnect",
          value: function onDisconnect() {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      _context49.next = 2;
                      return this.stop();

                    case 2:
                      this.emit("close", 1000, "Connection closed");
                      this.emit("disconnect", 1000, "Connection disconnected");

                    case 4:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "updateState",
          value: function updateState(sessionParams) {
            return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
              var accounts, chainId, networkId, rpcUrl;
              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      accounts = sessionParams.accounts, chainId = sessionParams.chainId, networkId = sessionParams.networkId, rpcUrl = sessionParams.rpcUrl;

                      if (!this.accounts || accounts && this.accounts !== accounts) {
                        this.accounts = accounts;
                        this.emit("accountsChanged", accounts);
                      }

                      if (!this.chainId || chainId && this.chainId !== chainId) {
                        this.chainId = chainId;
                        this.emit("chainChanged", chainId);
                      }

                      if (!this.networkId || networkId && this.networkId !== networkId) {
                        this.networkId = networkId;
                        this.emit("networkChanged", networkId);
                      }

                      this.updateRpcUrl(this.chainId, rpcUrl || "");

                    case 5:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "updateRpcUrl",
          value: function updateRpcUrl(chainId) {
            var rpcUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var infuraNetworks = {
              1: "mainnet",
              3: "ropsten",
              4: "rinkeby",
              5: "goerli",
              42: "kovan"
            };
            var network = infuraNetworks[chainId];

            if (!rpcUrl) {
              if (this.rpc && this.rpc[chainId]) {
                rpcUrl = this.rpc[chainId];
              } else if (network) {
                rpcUrl = "https://".concat(network, ".infura.io/v3/").concat(this.infuraId);
              }
            }

            if (rpcUrl) {
              this.rpcUrl = rpcUrl;
              this.updateHttpConnection();
            } else {
              this.emit("error", new Error("No RPC Url available for chainId: ".concat(chainId)));
            }
          }
        }, {
          key: "updateHttpConnection",
          value: function updateHttpConnection() {
            var _this17 = this;

            if (this.rpcUrl) {
              this.http = new http_connection_1["default"](this.rpcUrl);
              this.http.on("payload", function (payload) {
                return _this17.emit("payload", payload);
              });
              this.http.on("error", function (error) {
                return _this17.emit("error", error);
              });
            }
          }
        }, {
          key: "sendAsyncPromise",
          value: function sendAsyncPromise(method, params) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              _this18.sendAsync({
                id: utils_1.payloadId(),
                jsonrpc: "2.0",
                method: method,
                params: params || []
              }, function (error, response) {
                if (error) {
                  reject(error);
                  return;
                }

                resolve(response.result);
              });
            });
          }
        }, {
          key: "isWalletConnect",
          get: function get() {
            return true;
          }
        }, {
          key: "connector",
          get: function get() {
            return this.wc;
          }
        }, {
          key: "walletMeta",
          get: function get() {
            return this.wc.peerMeta;
          }
        }]);

        return WalletConnectProvider;
      }(ProviderEngine);

      exports["default"] = WalletConnectProvider; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "NPxG":
    /*!***************************************************************!*\
      !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function NPxG(module, exports, __webpack_require__) {
      var ECLevel = __webpack_require__(
      /*! ./error-correction-level */
      "ekOh");

      var EC_BLOCKS_TABLE = [// L  M  Q  H
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
      var EC_CODEWORDS_TABLE = [// L  M  Q  H
      7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
      /**
       * Returns the number of error correction block that the QR Code should contain
       * for the specified version and error correction level.
       *
       * @param  {Number} version              QR Code version
       * @param  {Number} errorCorrectionLevel Error correction level
       * @return {Number}                      Number of error correction blocks
       */

      exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];

          case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];

          case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];

          case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];

          default:
            return undefined;
        }
      };
      /**
       * Returns the number of error correction codewords to use for the specified
       * version and error correction level.
       *
       * @param  {Number} version              QR Code version
       * @param  {Number} errorCorrectionLevel Error correction level
       * @return {Number}                      Number of error correction codewords
       */


      exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];

          case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];

          case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];

          case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];

          default:
            return undefined;
        }
      };
      /***/

    },

    /***/
    "Nnx4":
    /*!***********************************************************************************!*\
      !*** ./node_modules/web3-provider-engine/node_modules/ethereumjs-tx/es5/index.js ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function Nnx4(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var ethUtil = __webpack_require__(
        /*! ethereumjs-util */
        "tnHP");

        var fees = __webpack_require__(
        /*! ethereum-common/params.json */
        "8lHD");

        var BN = ethUtil.BN; // secp256k1n/2

        var N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
        /**
         * Creates a new transaction object.
         *
         * @example
         * var rawTx = {
         *   nonce: '00',
         *   gasPrice: '09184e72a000',
         *   gasLimit: '2710',
         *   to: '0000000000000000000000000000000000000000',
         *   value: '00',
         *   data: '7f7465737432000000000000000000000000000000000000000000000000000000600057',
         *   v: '1c',
         *   r: '5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
         *   s: '5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
         * };
         * var tx = new Transaction(rawTx);
         *
         * @class
         * @param {Buffer | Array | Object} data a transaction can be initiailized with either a buffer containing the RLP serialized transaction or an array of buffers relating to each of the tx Properties, listed in order below in the exmple.
         *
         * Or lastly an Object containing the Properties of the transaction like in the Usage example.
         *
         * For Object and Arrays each of the elements can either be a Buffer, a hex-prefixed (0x) String , Number, or an object with a toBuffer method such as Bignum
         *
         * @property {Buffer} raw The raw rlp encoded transaction
         * @param {Buffer} data.nonce nonce number
         * @param {Buffer} data.gasLimit transaction gas limit
         * @param {Buffer} data.gasPrice transaction gas price
         * @param {Buffer} data.to to the to address
         * @param {Buffer} data.value the amount of ether sent
         * @param {Buffer} data.data this will contain the data of the message or the init of a contract
         * @param {Buffer} data.v EC signature parameter
         * @param {Buffer} data.r EC signature parameter
         * @param {Buffer} data.s EC recovery ID
         * @param {Number} data.chainId EIP 155 chainId - mainnet: 1, ropsten: 3
         * */

        var Transaction = function () {
          function Transaction(data) {
            _classCallCheck(this, Transaction);

            data = data || {}; // Define Properties

            var fields = [{
              name: 'nonce',
              length: 32,
              allowLess: true,
              "default": new Buffer([])
            }, {
              name: 'gasPrice',
              length: 32,
              allowLess: true,
              "default": new Buffer([])
            }, {
              name: 'gasLimit',
              alias: 'gas',
              length: 32,
              allowLess: true,
              "default": new Buffer([])
            }, {
              name: 'to',
              allowZero: true,
              length: 20,
              "default": new Buffer([])
            }, {
              name: 'value',
              length: 32,
              allowLess: true,
              "default": new Buffer([])
            }, {
              name: 'data',
              alias: 'input',
              allowZero: true,
              "default": new Buffer([])
            }, {
              name: 'v',
              allowZero: true,
              "default": new Buffer([0x1c])
            }, {
              name: 'r',
              length: 32,
              allowZero: true,
              allowLess: true,
              "default": new Buffer([])
            }, {
              name: 's',
              length: 32,
              allowZero: true,
              allowLess: true,
              "default": new Buffer([])
            }];
            /**
             * Returns the rlp encoding of the transaction
             * @method serialize
             * @return {Buffer}
             * @memberof Transaction
             * @name serialize
             */
            // attached serialize

            ethUtil.defineProperties(this, fields, data);
            /**
             * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
             * @name from
             * @memberof Transaction
             */

            Object.defineProperty(this, 'from', {
              enumerable: true,
              configurable: true,
              get: this.getSenderAddress.bind(this)
            }); // calculate chainId from signature

            var sigV = ethUtil.bufferToInt(this.v);
            var chainId = Math.floor((sigV - 35) / 2);
            if (chainId < 0) chainId = 0; // set chainId

            this._chainId = chainId || data.chainId || 0;
            this._homestead = true;
          }
          /**
           * If the tx's `to` is to the creation address
           * @return {Boolean}
           */


          Transaction.prototype.toCreationAddress = function toCreationAddress() {
            return this.to.toString('hex') === '';
          };
          /**
           * Computes a sha3-256 hash of the serialized tx
           * @param {Boolean} [includeSignature=true] whether or not to inculde the signature
           * @return {Buffer}
           */


          Transaction.prototype.hash = function hash(includeSignature) {
            if (includeSignature === undefined) includeSignature = true; // EIP155 spec:
            // when computing the hash of a transaction for purposes of signing or recovering,
            // instead of hashing only the first six elements (ie. nonce, gasprice, startgas, to, value, data),
            // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0

            var items = void 0;

            if (includeSignature) {
              items = this.raw;
            } else {
              if (this._chainId > 0) {
                var raw = this.raw.slice();
                this.v = this._chainId;
                this.r = 0;
                this.s = 0;
                items = this.raw;
                this.raw = raw;
              } else {
                items = this.raw.slice(0, 6);
              }
            } // create hash


            return ethUtil.rlphash(items);
          };
          /**
           * returns the public key of the sender
           * @return {Buffer}
           */


          Transaction.prototype.getChainId = function getChainId() {
            return this._chainId;
          };
          /**
           * returns the sender's address
           * @return {Buffer}
           */


          Transaction.prototype.getSenderAddress = function getSenderAddress() {
            if (this._from) {
              return this._from;
            }

            var pubkey = this.getSenderPublicKey();
            this._from = ethUtil.publicToAddress(pubkey);
            return this._from;
          };
          /**
           * returns the public key of the sender
           * @return {Buffer}
           */


          Transaction.prototype.getSenderPublicKey = function getSenderPublicKey() {
            if (!this._senderPubKey || !this._senderPubKey.length) {
              if (!this.verifySignature()) throw new Error('Invalid Signature');
            }

            return this._senderPubKey;
          };
          /**
           * Determines if the signature is valid
           * @return {Boolean}
           */


          Transaction.prototype.verifySignature = function verifySignature() {
            var msgHash = this.hash(false); // All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.

            if (this._homestead && new BN(this.s).cmp(N_DIV_2) === 1) {
              return false;
            }

            try {
              var v = ethUtil.bufferToInt(this.v);

              if (this._chainId > 0) {
                v -= this._chainId * 2 + 8;
              }

              this._senderPubKey = ethUtil.ecrecover(msgHash, v, this.r, this.s);
            } catch (e) {
              return false;
            }

            return !!this._senderPubKey;
          };
          /**
           * sign a transaction with a given a private key
           * @param {Buffer} privateKey
           */


          Transaction.prototype.sign = function sign(privateKey) {
            var msgHash = this.hash(false);
            var sig = ethUtil.ecsign(msgHash, privateKey);

            if (this._chainId > 0) {
              sig.v += this._chainId * 2 + 8;
            }

            Object.assign(this, sig);
          };
          /**
           * The amount of gas paid for the data in this tx
           * @return {BN}
           */


          Transaction.prototype.getDataFee = function getDataFee() {
            var data = this.raw[5];
            var cost = new BN(0);

            for (var i = 0; i < data.length; i++) {
              data[i] === 0 ? cost.iaddn(fees.txDataZeroGas.v) : cost.iaddn(fees.txDataNonZeroGas.v);
            }

            return cost;
          };
          /**
           * the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
           * @return {BN}
           */


          Transaction.prototype.getBaseFee = function getBaseFee() {
            var fee = this.getDataFee().iaddn(fees.txGas.v);

            if (this._homestead && this.toCreationAddress()) {
              fee.iaddn(fees.txCreation.v);
            }

            return fee;
          };
          /**
           * the up front amount that an account must have for this transaction to be valid
           * @return {BN}
           */


          Transaction.prototype.getUpfrontCost = function getUpfrontCost() {
            return new BN(this.gasLimit).imul(new BN(this.gasPrice)).iadd(new BN(this.value));
          };
          /**
           * validates the signature and checks to see if it has enough gas
           * @param {Boolean} [stringError=false] whether to return a string with a dscription of why the validation failed or return a Bloolean
           * @return {Boolean|String}
           */


          Transaction.prototype.validate = function validate(stringError) {
            var errors = [];

            if (!this.verifySignature()) {
              errors.push('Invalid Signature');
            }

            if (this.getBaseFee().cmp(new BN(this.gasLimit)) > 0) {
              errors.push(['gas limit is too low. Need at least ' + this.getBaseFee()]);
            }

            if (stringError === undefined || stringError === false) {
              return errors.length === 0;
            } else {
              return errors.join(' ');
            }
          };

          return Transaction;
        }();

        module.exports = Transaction;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "OOOY":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/node_modules/strict-uri-encode/index.js ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function OOOY(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function (str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
          return "%".concat(x.charCodeAt(0).toString(16).toUpperCase());
        });
      };
      /***/

    },

    /***/
    "P4H2":
    /*!********************************************************!*\
      !*** ./node_modules/window-metadata/dist/cjs/index.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function P4H2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var window_getters_1 = __webpack_require__(
      /*! window-getters */
      "TjcH");

      function getWindowMetadata() {
        var doc;
        var loc;

        try {
          doc = window_getters_1.getDocumentOrThrow();
          loc = window_getters_1.getLocationOrThrow();
        } catch (e) {
          return null;
        }

        function getIcons() {
          var links = doc.getElementsByTagName('link');
          var icons = [];

          for (var i = 0; i < links.length; i++) {
            var link = links[i];
            var rel = link.getAttribute('rel');

            if (rel) {
              if (rel.toLowerCase().indexOf('icon') > -1) {
                var href = link.getAttribute('href');

                if (href) {
                  if (href.toLowerCase().indexOf('https:') === -1 && href.toLowerCase().indexOf('http:') === -1 && href.indexOf('//') !== 0) {
                    var absoluteHref = loc.protocol + '//' + loc.host;

                    if (href.indexOf('/') === 0) {
                      absoluteHref += href;
                    } else {
                      var path = loc.pathname.split('/');
                      path.pop();
                      var finalPath = path.join('/');
                      absoluteHref += finalPath + '/' + href;
                    }

                    icons.push(absoluteHref);
                  } else if (href.indexOf('//') === 0) {
                    var absoluteUrl = loc.protocol + href;
                    icons.push(absoluteUrl);
                  } else {
                    icons.push(href);
                  }
                }
              }
            }
          }

          return icons;
        }

        function getWindowMetadataOfAny() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }

          var metaTags = doc.getElementsByTagName('meta');

          var _loop = function _loop(i) {
            var tag = metaTags[i];
            var attributes = ['itemprop', 'property', 'name'].map(function (target) {
              return tag.getAttribute(target);
            }).filter(function (attr) {
              if (attr) {
                return args.includes(attr);
              }

              return false;
            });

            if (attributes.length && attributes) {
              var content = tag.getAttribute('content');

              if (content) {
                return {
                  v: content
                };
              }
            }
          };

          for (var i = 0; i < metaTags.length; i++) {
            var _ret = _loop(i);

            if (typeof _ret === "object") return _ret.v;
          }

          return '';
        }

        function getName() {
          var name = getWindowMetadataOfAny('name', 'og:site_name', 'og:title', 'twitter:title');

          if (!name) {
            name = doc.title;
          }

          return name;
        }

        function getDescription() {
          var description = getWindowMetadataOfAny('description', 'og:description', 'twitter:description', 'keywords');
          return description;
        }

        var name = getName();
        var description = getDescription();
        var url = loc.origin;
        var icons = getIcons();
        var meta = {
          description: description,
          url: url,
          icons: icons,
          name: name
        };
        return meta;
      }

      exports.getWindowMetadata = getWindowMetadata; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "QAZZ":
    /*!*****************************************************!*\
      !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function QAZZ(module, exports, __webpack_require__) {
      var Utils = __webpack_require__(
      /*! ./utils */
      "Rb7d");

      function getColorAttrib(color, attrib) {
        var alpha = color.a / 255;
        var str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }

      function svgCmd(cmd, x, y) {
        var str = cmd + x;
        if (typeof y !== 'undefined') str += ' ' + y;
        return str;
      }

      function qrToPath(data, size, margin) {
        var path = '';
        var moveBy = 0;
        var newRow = false;
        var lineLength = 0;

        for (var i = 0; i < data.length; i++) {
          var col = Math.floor(i % size);
          var row = Math.floor(i / size);
          if (!col && !newRow) newRow = true;

          if (data[i]) {
            lineLength++;

            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
              moveBy = 0;
              newRow = false;
            }

            if (!(col + 1 < size && data[i + 1])) {
              path += svgCmd('h', lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }

        return path;
      }

      exports.render = function render(qrData, options, cb) {
        var opts = Utils.getOptions(options);
        var size = qrData.modules.size;
        var data = qrData.modules.data;
        var qrcodesize = size + opts.margin * 2;
        var bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
        var path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
        var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
        var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
        var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

        if (typeof cb === 'function') {
          cb(null, svgTag);
        }

        return svgTag;
      };
      /***/

    },

    /***/
    "QUaw":
    /*!****************************************************!*\
      !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function QUaw(module, exports, __webpack_require__) {
      var Utils = __webpack_require__(
      /*! ./utils */
      "Rb7d");

      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style) canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + 'px';
        canvas.style.width = size + 'px';
      }

      function getCanvasElement() {
        try {
          return document.createElement('canvas');
        } catch (e) {
          throw new Error('You need to specify a canvas element');
        }
      }

      exports.render = function render(qrData, canvas, options) {
        var opts = options;
        var canvasEl = canvas;

        if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = undefined;
        }

        if (!canvas) {
          canvasEl = getCanvasElement();
        }

        opts = Utils.getOptions(opts);
        var size = Utils.getImageWidth(qrData.modules.size, opts);
        var ctx = canvasEl.getContext('2d');
        var image = ctx.createImageData(size, size);
        Utils.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
      };

      exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        var opts = options;

        if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = undefined;
        }

        if (!opts) opts = {};
        var canvasEl = exports.render(qrData, canvas, opts);
        var type = opts.type || 'image/png';
        var rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
      /***/

    },

    /***/
    "R+mK":
    /*!***********************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/fallback.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function RMK(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        var __importStar = this && this.__importStar || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) {
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          }
          result["default"] = mod;
          return result;
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var aes_js_1 = __importDefault(__webpack_require__(
        /*! aes-js */
        "cke4"));

        var randombytes_1 = __importDefault(__webpack_require__(
        /*! randombytes */
        "Edxu"));

        var hash = __importStar(__webpack_require__(
        /*! hash.js */
        "fZJM"));

        var pkcs7 = __importStar(__webpack_require__(
        /*! ./pkcs7 */
        "XnnX"));

        var constants_1 = __webpack_require__(
        /*! ../constants */
        "FEYL");

        var helpers_1 = __webpack_require__(
        /*! ../helpers */
        "ghe6");

        function fallbackRandomBytes(length) {
          return randombytes_1["default"](length);
        }

        exports.fallbackRandomBytes = fallbackRandomBytes;

        function fallbackAesEncrypt(iv, key, data) {
          var aesCbc = new aes_js_1["default"].ModeOfOperation.cbc(key, iv);
          var padded = helpers_1.arrayToBuffer(pkcs7.pad(data));
          var encryptedBytes = aesCbc.encrypt(padded);
          return Buffer.from(encryptedBytes);
        }

        exports.fallbackAesEncrypt = fallbackAesEncrypt;

        function fallbackAesDecrypt(iv, key, data) {
          var aesCbc = new aes_js_1["default"].ModeOfOperation.cbc(key, iv);
          var encryptedBytes = aesCbc.decrypt(data);
          var padded = Buffer.from(encryptedBytes);
          var result = helpers_1.arrayToBuffer(pkcs7.unpad(padded));
          return result;
        }

        exports.fallbackAesDecrypt = fallbackAesDecrypt;

        function fallbackHmacSha256Sign(key, data) {
          var result = hash.hmac(hash[constants_1.SHA256_NODE_ALGO], key).update(data).digest(constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(result);
        }

        exports.fallbackHmacSha256Sign = fallbackHmacSha256Sign;

        function fallbackHmacSha512Sign(key, data) {
          var result = hash.hmac(hash[constants_1.SHA512_NODE_ALGO], key).update(data).digest(constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(result);
        }

        exports.fallbackHmacSha512Sign = fallbackHmacSha512Sign;

        function fallbackSha256(msg) {
          var result = hash.sha256().update(msg).digest(constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(result);
        }

        exports.fallbackSha256 = fallbackSha256;

        function fallbackSha512(msg) {
          var result = hash.sha512().update(msg).digest(constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(result);
        }

        exports.fallbackSha512 = fallbackSha512;

        function fallbackRipemd160(msg) {
          var result = hash.ripemd160().update(msg).digest(constants_1.HEX_ENC);
          return helpers_1.hexToBuffer(result);
        }

        exports.fallbackRipemd160 = fallbackRipemd160; //# sourceMappingURL=fallback.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "RMmr":
    /*!****************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function RMmr(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./constants */
      "FEYL"));

      __export(__webpack_require__(
      /*! ./helpers */
      "ghe6"));

      __export(__webpack_require__(
      /*! ./aes */
      "AwLY"));

      __export(__webpack_require__(
      /*! ./ecdh */
      "ynIj"));

      __export(__webpack_require__(
      /*! ./ecdsa */
      "ocbH"));

      __export(__webpack_require__(
      /*! ./ecies */
      "weYg"));

      __export(__webpack_require__(
      /*! ./hmac */
      "YV8Y"));

      __export(__webpack_require__(
      /*! ./random */
      "Yp4/"));

      __export(__webpack_require__(
      /*! ./sha2 */
      "Iidz"));

      __export(__webpack_require__(
      /*! ./sha3 */
      "Lw4u")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "Rb7d":
    /*!***************************************************!*\
      !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Rb7d(module, exports) {
      function hex2rgba(hex) {
        if (typeof hex === 'number') {
          hex = hex.toString();
        }

        if (typeof hex !== 'string') {
          throw new Error('Color should be defined as hex string');
        }

        var hexCode = hex.slice().replace('#', '').split('');

        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error('Invalid hex color: ' + hex);
        } // Convert from short to long form (fff -> ffffff)


        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
            return [c, c];
          }));
        } // Add default alpha value


        if (hexCode.length === 6) hexCode.push('F', 'F');
        var hexValue = parseInt(hexCode.join(''), 16);
        return {
          r: hexValue >> 24 & 255,
          g: hexValue >> 16 & 255,
          b: hexValue >> 8 & 255,
          a: hexValue & 255,
          hex: '#' + hexCode.slice(0, 6).join('')
        };
      }

      exports.getOptions = function getOptions(options) {
        if (!options) options = {};
        if (!options.color) options.color = {};
        var margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
        var width = options.width && options.width >= 21 ? options.width : undefined;
        var scale = options.scale || 4;
        return {
          width: width,
          scale: width ? 4 : scale,
          margin: margin,
          color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {}
        };
      };

      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
      };

      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        var scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };

      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        var size = qr.modules.size;
        var data = qr.modules.data;
        var scale = exports.getScale(size, opts);
        var symbolSize = Math.floor((size + opts.margin * 2) * scale);
        var scaledMargin = opts.margin * scale;
        var palette = [opts.color.light, opts.color.dark];

        for (var i = 0; i < symbolSize; i++) {
          for (var j = 0; j < symbolSize; j++) {
            var posDst = (i * symbolSize + j) * 4;
            var pxColor = opts.color.light;

            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
              var iSrc = Math.floor((i - scaledMargin) / scale);
              var jSrc = Math.floor((j - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }

            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
      /***/

    },

    /***/
    "RmUe":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@walletconnect/socket-transport/node_modules/ws/browser.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function RmUe(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function () {
        throw new Error('ws does not work in the browser. Browser clients must use the native ' + 'WebSocket object');
      };
      /***/

    },

    /***/
    "StEZ":
    /*!***********************************************************************!*\
      !*** ./node_modules/@walletconnect/http-connection/dist/cjs/index.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function StEZ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var events_1 = __webpack_require__(
      /*! events */
      "+qE3");

      var xhr2_cookies_1 = __webpack_require__(
      /*! xhr2-cookies */
      "hgLn");

      var utils_1 = __webpack_require__(
      /*! @walletconnect/utils */
      "xI+a");

      var XHR = utils_1.getFromWindow("XMLHttpRequest") || xhr2_cookies_1.XMLHttpRequest;

      var HTTPConnection = /*#__PURE__*/function (_events_1$EventEmitte) {
        _inherits(HTTPConnection, _events_1$EventEmitte);

        var _super3 = _createSuper(HTTPConnection);

        function HTTPConnection(url) {
          var _this19;

          _classCallCheck2(this, HTTPConnection);

          _this19 = _super3.call(this);
          _this19.url = url;
          return _this19;
        }

        _createClass(HTTPConnection, [{
          key: "formatError",
          value: function formatError(payload, message) {
            var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
            return {
              error: {
                message: message,
                code: code
              },
              id: payload.id,
              jsonrpc: payload.jsonrpc
            };
          }
        }, {
          key: "send",
          value: function send(payload, internal) {
            var _this20 = this;

            return new Promise(function (resolve) {
              if (payload.method === "eth_subscribe") {
                var error = _this20.formatError(payload, "Subscriptions are not supported by this HTTP endpoint");

                _this20.emit("error", error);

                return resolve(error);
              }

              var xhr = new XHR();
              var responded = false;

              var res = function res(err, result) {
                if (!responded) {
                  xhr.abort();
                  responded = true;

                  if (internal) {
                    internal(err, result);
                  } else {
                    var id = payload.id,
                        jsonrpc = payload.jsonrpc;
                    var response = err ? {
                      id: id,
                      jsonrpc: jsonrpc,
                      error: {
                        message: err.message,
                        code: err.code
                      }
                    } : {
                      id: id,
                      jsonrpc: jsonrpc,
                      result: result
                    };

                    _this20.emit("payload", response);

                    resolve(response);
                  }
                }
              };

              xhr.open("POST", _this20.url, true);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.timeout = 60 * 1000;
              xhr.onerror = res;
              xhr.ontimeout = res;

              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  try {
                    var response = JSON.parse(xhr.responseText);
                    res(response.error, response.result);
                  } catch (e) {
                    res(e);
                  }
                }
              };

              xhr.send(JSON.stringify(payload));
            });
          }
        }]);

        return HTTPConnection;
      }(events_1.EventEmitter);

      exports["default"] = HTTPConnection; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "TRRE":
    /*!***************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/helpers/encoding.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function TRRE(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! enc-utils */
      "/jfU")); //# sourceMappingURL=encoding.js.map

      /***/

    },

    /***/
    "TjcH":
    /*!*******************************************************!*\
      !*** ./node_modules/window-getters/dist/cjs/index.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function TjcH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function getFromWindow(name) {
        var res = undefined;

        if (typeof window !== 'undefined' && typeof window[name] !== 'undefined') {
          res = window[name];
        }

        return res;
      }

      exports.getFromWindow = getFromWindow;

      function getFromWindowOrThrow(name) {
        var res = getFromWindow(name);

        if (!res) {
          throw new Error("".concat(name, " is not defined in Window"));
        }

        return res;
      }

      exports.getFromWindowOrThrow = getFromWindowOrThrow;

      function getDocumentOrThrow() {
        return getFromWindowOrThrow('document');
      }

      exports.getDocumentOrThrow = getDocumentOrThrow;

      function getDocument() {
        return getFromWindow('document');
      }

      exports.getDocument = getDocument;

      function getNavigatorOrThrow() {
        return getFromWindowOrThrow('navigator');
      }

      exports.getNavigatorOrThrow = getNavigatorOrThrow;

      function getNavigator() {
        return getFromWindow('navigator');
      }

      exports.getNavigator = getNavigator;

      function getLocationOrThrow() {
        return getFromWindowOrThrow('location');
      }

      exports.getLocationOrThrow = getLocationOrThrow;

      function getLocation() {
        return getFromWindow('location');
      }

      exports.getLocation = getLocation;

      function getCryptoOrThrow() {
        return getFromWindowOrThrow('crypto');
      }

      exports.getCryptoOrThrow = getCryptoOrThrow;

      function getCrypto() {
        return getFromWindow('crypto');
      }

      exports.getCrypto = getCrypto;

      function getLocalStorageOrThrow() {
        return getFromWindowOrThrow('localStorage');
      }

      exports.getLocalStorageOrThrow = getLocalStorageOrThrow;

      function getLocalStorage() {
        return getFromWindow('localStorage');
      }

      exports.getLocalStorage = getLocalStorage; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "V35J":
    /*!****************************************************!*\
      !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function V35J(module, exports, __webpack_require__) {
      var BufferUtil = __webpack_require__(
      /*! ../utils/buffer */
      "Wogr");
      /**
       * Helper class to handle QR Code symbol modules
       *
       * @param {Number} size Symbol size
       */


      function BitMatrix(size) {
        if (!size || size < 1) {
          throw new Error('BitMatrix size must be defined and greater than 0');
        }

        this.size = size;
        this.data = BufferUtil.alloc(size * size);
        this.reservedBit = BufferUtil.alloc(size * size);
      }
      /**
       * Set bit value at specified location
       * If reserved flag is set, this bit will be ignored during masking process
       *
       * @param {Number}  row
       * @param {Number}  col
       * @param {Boolean} value
       * @param {Boolean} reserved
       */


      BitMatrix.prototype.set = function (row, col, value, reserved) {
        var index = row * this.size + col;
        this.data[index] = value;
        if (reserved) this.reservedBit[index] = true;
      };
      /**
       * Returns bit value at specified location
       *
       * @param  {Number}  row
       * @param  {Number}  col
       * @return {Boolean}
       */


      BitMatrix.prototype.get = function (row, col) {
        return this.data[row * this.size + col];
      };
      /**
       * Applies xor operator at specified location
       * (used during masking process)
       *
       * @param {Number}  row
       * @param {Number}  col
       * @param {Boolean} value
       */


      BitMatrix.prototype.xor = function (row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      /**
       * Check if bit at specified location is reserved
       *
       * @param {Number}   row
       * @param {Number}   col
       * @return {Boolean}
       */


      BitMatrix.prototype.isReserved = function (row, col) {
        return this.reservedBit[row * this.size + col];
      };

      module.exports = BitMatrix;
      /***/
    },

    /***/
    "WRhU":
    /*!*******************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/fixture.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function WRhU(module, exports, __webpack_require__) {
      var inherits = __webpack_require__(
      /*! util */
      "MCLT").inherits;

      var Subprovider = __webpack_require__(
      /*! ./subprovider.js */
      "Uu7K");

      module.exports = FixtureProvider;
      inherits(FixtureProvider, Subprovider);

      function FixtureProvider(staticResponses) {
        var self = this;
        staticResponses = staticResponses || {};
        self.staticResponses = staticResponses;
      }

      FixtureProvider.prototype.handleRequest = function (payload, next, end) {
        var self = this;
        var staticResponse = self.staticResponses[payload.method]; // async function

        if ('function' === typeof staticResponse) {
          staticResponse(payload, next, end); // static response - null is valid response
        } else if (staticResponse !== undefined) {
          // return result asynchronously
          setTimeout(function () {
            return end(null, staticResponse);
          }); // no prepared response - skip
        } else {
          next();
        }
      };
      /***/

    },

    /***/
    "Wogr":
    /*!************************************************************!*\
      !*** ./node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Wogr(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Implementation of a subset of node.js Buffer methods for the browser.
       * Based on https://github.com/feross/buffer
       */

      /* eslint-disable no-proto */

      var isArray = __webpack_require__(
      /*! isarray */
      "7uVY");

      function typedArraySupport() {
        // Can typed array instances be augmented?
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function foo() {
              return 42;
            }
          };
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }

      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
      var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;

      function Buffer(arg, offset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
          return new Buffer(arg, offset, length);
        }

        if (typeof arg === 'number') {
          return allocUnsafe(this, arg);
        }

        return from(this, arg, offset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array; // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97

        if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
          Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: true,
            enumerable: false,
            writable: false
          });
        }
      }

      function checked(length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }

        return length | 0;
      }

      function isnan(val) {
        return val !== val; // eslint-disable-line no-self-compare
      }

      function createBuffer(that, length) {
        var buf;

        if (Buffer.TYPED_ARRAY_SUPPORT) {
          buf = new Uint8Array(length);
          buf.__proto__ = Buffer.prototype;
        } else {
          // Fallback: Return an object instance of the Buffer class
          buf = that;

          if (buf === null) {
            buf = new Buffer(length);
          }

          buf.length = length;
        }

        return buf;
      }

      function allocUnsafe(that, size) {
        var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

        if (!Buffer.TYPED_ARRAY_SUPPORT) {
          for (var i = 0; i < size; ++i) {
            buf[i] = 0;
          }
        }

        return buf;
      }

      function fromString(that, string) {
        var length = byteLength(string) | 0;
        var buf = createBuffer(that, length);
        var actual = buf.write(string);

        if (actual !== length) {
          // Writing a hex string, for example, that contains invalid characters will
          // cause everything after the first invalid character to be ignored. (e.g.
          // 'abxxcd' will be treated as 'ab')
          buf = buf.slice(0, actual);
        }

        return buf;
      }

      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(that, length);

        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }

        return buf;
      }

      function fromArrayBuffer(that, array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('\'offset\' is out of bounds');
        }

        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('\'length\' is out of bounds');
        }

        var buf;

        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }

        if (Buffer.TYPED_ARRAY_SUPPORT) {
          // Return an augmented `Uint8Array` instance, for best performance
          buf.__proto__ = Buffer.prototype;
        } else {
          // Fallback: Return an object instance of the Buffer class
          buf = fromArrayLike(that, buf);
        }

        return buf;
      }

      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(that, len);

          if (buf.length === 0) {
            return buf;
          }

          obj.copy(buf, 0, 0, len);
          return buf;
        }

        if (obj) {
          if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
            if (typeof obj.length !== 'number' || isnan(obj.length)) {
              return createBuffer(that, 0);
            }

            return fromArrayLike(that, obj);
          }

          if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
            return fromArrayLike(that, obj.data);
          }
        }

        throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
      }

      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];

        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i); // is surrogate component

          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
              // no lead yet
              if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } // valid lead


              leadSurrogate = codePoint;
              continue;
            } // 2 leads in a row


            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            } // valid surrogate pair


            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }

          leadSurrogate = null; // encode utf8

          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }

        return bytes;
      }

      function byteLength(string) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }

        if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
          return string.byteLength;
        }

        if (typeof string !== 'string') {
          string = '' + string;
        }

        var len = string.length;
        if (len === 0) return 0;
        return utf8ToBytes(string).length;
      }

      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }

        return i;
      }

      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }

      function from(that, value, offset, length) {
        if (typeof value === 'number') {
          throw new TypeError('"value" argument must not be a number');
        }

        if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
          return fromArrayBuffer(that, value, offset, length);
        }

        if (typeof value === 'string') {
          return fromString(that, value, offset);
        }

        return fromObject(that, value);
      }

      Buffer.prototype.write = function write(string, offset, length) {
        // Buffer#write(string)
        if (offset === undefined) {
          length = this.length;
          offset = 0; // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
          length = this.length;
          offset = 0; // Buffer#write(string, offset[, length])
        } else if (isFinite(offset)) {
          offset = offset | 0;

          if (isFinite(length)) {
            length = length | 0;
          } else {
            length = undefined;
          }
        }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }

        return utf8Write(this, string, offset, length);
      };

      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;
        var newBuf;

        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, undefined);

          for (var i = 0; i < sliceLen; ++i) {
            newBuf[i] = this[i + start];
          }
        }

        return newBuf;
      };

      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }

        if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
        if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

        if (end > this.length) end = this.length;

        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;
        var i;

        if (this === target && start < targetStart && targetStart < end) {
          // descending copy from end
          for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
          }
        } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
          // ascending copy from start
          for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        }

        return len;
      };

      Buffer.prototype.fill = function fill(val, start, end) {
        // Handle string cases:
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            end = this.length;
          }

          if (val.length === 1) {
            var code = val.charCodeAt(0);

            if (code < 256) {
              val = code;
            }
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        } // Invalid ranges are not set to a default, so can range check early.


        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }

        if (end <= start) {
          return this;
        }

        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        var i;

        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : new Buffer(val);
          var len = bytes.length;

          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }

        return this;
      };

      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        if (list.length === 0) {
          return createBuffer(null, 0);
        }

        var i;

        if (length === undefined) {
          length = 0;

          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }

        var buffer = allocUnsafe(null, length);
        var pos = 0;

        for (i = 0; i < list.length; ++i) {
          var buf = list[i];

          if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }

          buf.copy(buffer, pos);
          pos += buf.length;
        }

        return buffer;
      };

      Buffer.byteLength = byteLength;
      Buffer.prototype._isBuffer = true;

      Buffer.isBuffer = function isBuffer(b) {
        return !!(b != null && b._isBuffer);
      };

      module.exports.alloc = function (size) {
        var buffer = new Buffer(size);
        buffer.fill(0);
        return buffer;
      };

      module.exports.from = function (data) {
        return new Buffer(data);
      };
      /***/

    },

    /***/
    "Wtwg":
    /*!****************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/ethereum.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function Wtwg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var js_sha3_1 = __webpack_require__(
      /*! js-sha3 */
      "HFX+");

      var encoding_1 = __webpack_require__(
      /*! ./encoding */
      "i1L0");

      var misc_1 = __webpack_require__(
      /*! ./misc */
      "9y2/");

      var validators_1 = __webpack_require__(
      /*! ./validators */
      "0cyn");

      var enc_utils_1 = __webpack_require__(
      /*! enc-utils */
      "/jfU");

      function toChecksumAddress(address) {
        address = enc_utils_1.removeHexPrefix(address.toLowerCase());
        var hash = enc_utils_1.removeHexPrefix(js_sha3_1.keccak_256(encoding_1.convertUtf8ToBuffer(address)));
        var checksum = "";

        for (var i = 0; i < address.length; i++) {
          if (parseInt(hash[i], 16) > 7) {
            checksum += address[i].toUpperCase();
          } else {
            checksum += address[i];
          }
        }

        return enc_utils_1.addHexPrefix(checksum);
      }

      exports.toChecksumAddress = toChecksumAddress;

      exports.isValidAddress = function (address) {
        if (!address) {
          return false;
        } else if (address.toLowerCase().substring(0, 2) !== "0x") {
          return false;
        } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
          return false;
        } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
          return true;
        } else {
          return address === toChecksumAddress(address);
        }
      };

      function parsePersonalSign(params) {
        if (!validators_1.isEmptyArray(params) && !validators_1.isHexString(params[0])) {
          params[0] = encoding_1.convertUtf8ToHex(params[0]);
        }

        return params;
      }

      exports.parsePersonalSign = parsePersonalSign;

      function parseTransactionData(txData) {
        if (typeof txData.from === "undefined" || !exports.isValidAddress(txData.from)) {
          throw new Error("Transaction object must include a valid 'from' value.");
        }

        function parseHexValues(value) {
          var result = value;

          if (typeof value === "number" || typeof value === "string" && !validators_1.isEmptyString(value)) {
            if (!validators_1.isHexString(value)) {
              result = encoding_1.convertNumberToHex(value);
            } else if (typeof value === "string") {
              result = misc_1.sanitizeHex(value);
            }
          }

          if (typeof result === "string") {
            result = misc_1.removeHexLeadingZeros(result);
          }

          return result;
        }

        var txDataRPC = {
          from: misc_1.sanitizeHex(txData.from),
          to: typeof txData.to === "undefined" ? "" : misc_1.sanitizeHex(txData.to),
          gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
          gas: typeof txData.gas === "undefined" ? typeof txData.gasLimit === "undefined" ? "" : parseHexValues(txData.gasLimit) : parseHexValues(txData.gas),
          value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
          nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
          data: typeof txData.data === "undefined" ? "" : misc_1.sanitizeHex(txData.data) || "0x"
        };
        var prunable = ["gasPrice", "gas", "value", "nonce"];
        Object.keys(txDataRPC).forEach(function (key) {
          if (!txDataRPC[key].trim().length && prunable.includes(key)) {
            delete txDataRPC[key];
          }
        });
        return txDataRPC;
      }

      exports.parseTransactionData = parseTransactionData; //# sourceMappingURL=ethereum.js.map

      /***/
    },

    /***/
    "XnnX":
    /*!**************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/pkcs7/index.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function XnnX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var PADDING = [[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13], [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [9, 9, 9, 9, 9, 9, 9, 9, 9], [8, 8, 8, 8, 8, 8, 8, 8], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]];

      function pad(plaintext) {
        var padding = PADDING[plaintext.byteLength % 16 || 0];
        var result = new Uint8Array(plaintext.byteLength + padding.length);
        result.set(plaintext);
        result.set(padding, plaintext.byteLength);
        return result;
      }

      exports.pad = pad;

      function unpad(padded) {
        return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
      }

      exports.unpad = unpad; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "YV8Y":
    /*!***************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/hmac.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function YV8Y(module, exports, __webpack_require__) {
      "use strict";

      var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var env_1 = __webpack_require__(
      /*! ./lib/env */
      "9A97");

      var browser_1 = __webpack_require__(
      /*! ./lib/browser */
      "FEiw");

      var fallback_1 = __webpack_require__(
      /*! ./lib/fallback */
      "R+mK");

      var node_1 = __webpack_require__(
      /*! ./lib/node */
      "Jl6S");

      var helpers_1 = __webpack_require__(
      /*! ./helpers */
      "ghe6");

      function hmacSha256Sign(key, msg) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
          var result;
          return regeneratorRuntime.wrap(function _callee51$(_context51) {
            while (1) {
              switch (_context51.prev = _context51.next) {
                case 0:
                  if (!env_1.isBrowser()) {
                    _context51.next = 6;
                    break;
                  }

                  _context51.next = 3;
                  return browser_1.browserHmacSha256Sign(key, msg);

                case 3:
                  result = _context51.sent;
                  _context51.next = 7;
                  break;

                case 6:
                  if (env_1.isNode()) {
                    result = node_1.nodeHmacSha256Sign(key, msg);
                  } else {
                    result = fallback_1.fallbackHmacSha256Sign(key, msg);
                  }

                case 7:
                  return _context51.abrupt("return", result);

                case 8:
                case "end":
                  return _context51.stop();
              }
            }
          }, _callee51);
        }));
      }

      exports.hmacSha256Sign = hmacSha256Sign;

      function hmacSha256Verify(key, msg, sig) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
          var result, expectedSig, _expectedSig, _expectedSig2;

          return regeneratorRuntime.wrap(function _callee52$(_context52) {
            while (1) {
              switch (_context52.prev = _context52.next) {
                case 0:
                  if (!env_1.isBrowser()) {
                    _context52.next = 7;
                    break;
                  }

                  _context52.next = 3;
                  return browser_1.browserHmacSha256Sign(key, msg);

                case 3:
                  expectedSig = _context52.sent;
                  result = helpers_1.equalConstTime(expectedSig, sig);
                  _context52.next = 8;
                  break;

                case 7:
                  if (env_1.isNode()) {
                    _expectedSig = node_1.nodeHmacSha256Sign(key, msg);
                    result = helpers_1.equalConstTime(_expectedSig, sig);
                  } else {
                    _expectedSig2 = fallback_1.fallbackHmacSha256Sign(key, msg);
                    result = helpers_1.equalConstTime(_expectedSig2, sig);
                  }

                case 8:
                  return _context52.abrupt("return", result);

                case 9:
                case "end":
                  return _context52.stop();
              }
            }
          }, _callee52);
        }));
      }

      exports.hmacSha256Verify = hmacSha256Verify;

      function hmacSha512Sign(key, msg) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
          var result;
          return regeneratorRuntime.wrap(function _callee53$(_context53) {
            while (1) {
              switch (_context53.prev = _context53.next) {
                case 0:
                  if (!env_1.isBrowser()) {
                    _context53.next = 6;
                    break;
                  }

                  _context53.next = 3;
                  return browser_1.browserHmacSha512Sign(key, msg);

                case 3:
                  result = _context53.sent;
                  _context53.next = 7;
                  break;

                case 6:
                  if (env_1.isNode()) {
                    result = node_1.nodeHmacSha512Sign(key, msg);
                  } else {
                    result = fallback_1.fallbackHmacSha512Sign(key, msg);
                  }

                case 7:
                  return _context53.abrupt("return", result);

                case 8:
                case "end":
                  return _context53.stop();
              }
            }
          }, _callee53);
        }));
      }

      exports.hmacSha512Sign = hmacSha512Sign;

      function hmacSha512Verify(key, msg, sig) {
        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
          var result, expectedSig, _expectedSig3;

          return regeneratorRuntime.wrap(function _callee54$(_context54) {
            while (1) {
              switch (_context54.prev = _context54.next) {
                case 0:
                  if (env_1.isNode()) {
                    expectedSig = node_1.nodeHmacSha512Sign(key, msg);
                    result = helpers_1.equalConstTime(expectedSig, sig);
                  } else {
                    _expectedSig3 = fallback_1.fallbackHmacSha512Sign(key, msg);
                    result = helpers_1.equalConstTime(_expectedSig3, sig);
                  }

                  return _context54.abrupt("return", result);

                case 2:
                case "end":
                  return _context54.stop();
              }
            }
          }, _callee54);
        }));
      }

      exports.hmacSha512Verify = hmacSha512Verify;

      function hmacSha256SignSync(key, msg) {
        var result;

        if (env_1.isNode()) {
          result = node_1.nodeHmacSha256Sign(key, msg);
        } else {
          result = fallback_1.fallbackHmacSha256Sign(key, msg);
        }

        return result;
      }

      exports.hmacSha256SignSync = hmacSha256SignSync;

      function hmacSha256VerifySync(key, msg, sig) {
        var result;

        if (env_1.isNode()) {
          var expectedSig = node_1.nodeHmacSha256Sign(key, msg);
          result = helpers_1.equalConstTime(expectedSig, sig);
        } else {
          var _expectedSig4 = fallback_1.fallbackHmacSha256Sign(key, msg);

          result = helpers_1.equalConstTime(_expectedSig4, sig);
        }

        return result;
      }

      exports.hmacSha256VerifySync = hmacSha256VerifySync;

      function hmacSha512SignSync(key, msg) {
        var result;

        if (env_1.isNode()) {
          result = node_1.nodeHmacSha512Sign(key, msg);
        } else {
          result = fallback_1.fallbackHmacSha512Sign(key, msg);
        }

        return result;
      }

      exports.hmacSha512SignSync = hmacSha512SignSync;

      function hmacSha512VerifySync(key, msg, sig) {
        var result;

        if (env_1.isNode()) {
          var expectedSig = node_1.nodeHmacSha512Sign(key, msg);
          result = helpers_1.equalConstTime(expectedSig, sig);
        } else {
          var _expectedSig5 = fallback_1.fallbackHmacSha512Sign(key, msg);

          result = helpers_1.equalConstTime(_expectedSig5, sig);
        }

        return result;
      }

      exports.hmacSha512VerifySync = hmacSha512VerifySync; //# sourceMappingURL=hmac.js.map

      /***/
    },

    /***/
    "Yp4/":
    /*!*****************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/random.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function Yp4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var helpers_1 = __webpack_require__(
      /*! ./helpers */
      "ghe6");

      var env_1 = __webpack_require__(
      /*! ./lib/env */
      "9A97");

      var browser_1 = __webpack_require__(
      /*! ./lib/browser */
      "FEiw");

      var node_1 = __webpack_require__(
      /*! ./lib/node */
      "Jl6S");

      var fallback_1 = __webpack_require__(
      /*! ./lib/fallback */
      "R+mK");

      function randomBytes(length) {
        if (!helpers_1.isValidKeyLength(length)) {
          throw new Error("randomBytes - invalid key length: ".concat(length));
        }

        var result;

        if (env_1.isBrowser()) {
          result = browser_1.browserRandomBytes(length);
        } else if (env_1.isNode()) {
          result = node_1.nodeRandomBytes(length);
        } else {
          result = fallback_1.fallbackRandomBytes(length);
        }

        return result;
      }

      exports.randomBytes = randomBytes; //# sourceMappingURL=random.js.map

      /***/
    },

    /***/
    "YsmX":
    /*!*************************************************************!*\
      !*** ./node_modules/@walletconnect/core/dist/cjs/errors.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function YsmX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ERROR_SESSION_CONNECTED = "Session currently connected";
      exports.ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
      exports.ERROR_SESSION_REJECTED = "Session Rejected";
      exports.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
      exports.ERROR_MISSING_RESULT = "JSON-RPC success response must include \"result\" field";
      exports.ERROR_MISSING_ERROR = "JSON-RPC error response must include \"error\" field";
      exports.ERROR_MISSING_METHOD = "JSON RPC request must have valid \"method\" value";
      exports.ERROR_MISSING_ID = "JSON RPC request must have valid \"id\" value";
      exports.ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
      exports.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
      exports.ERROR_INVALID_URI = "URI format is invalid";
      exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
      exports.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal"; //# sourceMappingURL=errors.js.map

      /***/
    },

    /***/
    "Z92M":
    /*!************************************************!*\
      !*** ./node_modules/qrcode/lib/can-promise.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function Z92M(module, exports) {
      // can-promise has a crash in some versions of react native that dont have
      // standard global objects
      // https://github.com/soldair/node-qrcode/issues/157
      module.exports = function () {
        return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
      };
      /***/

    },

    /***/
    "aZ40":
    /*!******************************************************!*\
      !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function aZ40(module, exports, __webpack_require__) {
      var BufferUtil = __webpack_require__(
      /*! ../utils/buffer */
      "Wogr");

      var EXP_TABLE = BufferUtil.alloc(512);
      var LOG_TABLE = BufferUtil.alloc(256)
      /**
       * Precompute the log and anti-log tables for faster computation later
       *
       * For each possible value in the galois field 2^8, we will pre-compute
       * the logarithm and anti-logarithm (exponential) of this value
       *
       * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
       */
      ;

      (function initTables() {
        var x = 1;

        for (var i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1; // multiply by 2
          // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
          // This means that when a number is 256 or larger, it should be XORed with 0x11D.

          if (x & 0x100) {
            // similar to x >= 256, but a lot faster (because 0x100 == 256)
            x ^= 0x11D;
          }
        } // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
        // stay inside the bounds (because we will mainly use this table for the multiplication of
        // two GF numbers, no more).
        // @see {@link mul}


        for (i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      /**
       * Returns log value of n inside Galois Field
       *
       * @param  {Number} n
       * @return {Number}
       */


      exports.log = function log(n) {
        if (n < 1) throw new Error('log(' + n + ')');
        return LOG_TABLE[n];
      };
      /**
       * Returns anti-log value of n inside Galois Field
       *
       * @param  {Number} n
       * @return {Number}
       */


      exports.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      /**
       * Multiplies two number inside Galois Field
       *
       * @param  {Number} x
       * @param  {Number} y
       * @return {Number}
       */


      exports.mul = function mul(x, y) {
        if (x === 0 || y === 0) return 0; // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
        // @see {@link initTables}

        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
      /***/

    },

    /***/
    "adDM":
    /*!***********************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/helpers/util.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function adDM(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var constants_1 = __webpack_require__(
        /*! ../constants */
        "FEYL");

        var encoding_1 = __webpack_require__(
        /*! ./encoding */
        "TRRE");

        function isCompressed(publicKey) {
          return publicKey.length === constants_1.KEY_LENGTH || publicKey.length === constants_1.PREFIXED_KEY_LENGTH;
        }

        exports.isCompressed = isCompressed;

        function isDecompressed(publicKey) {
          return publicKey.length === constants_1.DECOMPRESSED_LENGTH || publicKey.length === constants_1.PREFIXED_DECOMPRESSED_LENGTH;
        }

        exports.isDecompressed = isDecompressed;

        function isPrefixed(publicKey) {
          if (isCompressed(publicKey)) {
            return publicKey.length === constants_1.PREFIXED_KEY_LENGTH;
          }

          return publicKey.length === constants_1.PREFIXED_DECOMPRESSED_LENGTH;
        }

        exports.isPrefixed = isPrefixed;

        function sanitizePublicKey(publicKey) {
          return isPrefixed(publicKey) ? publicKey : Buffer.from("04".concat(publicKey.toString('hex')), 'hex');
        }

        exports.sanitizePublicKey = sanitizePublicKey;

        function exportRecoveryParam(recoveryParam) {
          return encoding_1.hexToBuffer(encoding_1.sanitizeHex((recoveryParam + 27).toString(16)));
        }

        exports.exportRecoveryParam = exportRecoveryParam;

        function importRecoveryParam(v) {
          return encoding_1.hexToNumber(encoding_1.removeHexLeadingZeros(encoding_1.bufferToHex(v))) - 27;
        }

        exports.importRecoveryParam = importRecoveryParam;

        function splitSignature(sig) {
          return {
            r: sig.slice(0, 32),
            s: sig.slice(32, 64),
            v: sig.slice(64, 65)
          };
        }

        exports.splitSignature = splitSignature;

        function joinSignature(sig) {
          return encoding_1.concatBuffers(sig.r, sig.s, sig.v);
        }

        exports.joinSignature = joinSignature;

        function isValidDERSignature(sig) {
          return encoding_1.bufferToHex(sig).startsWith('30') && sig.length > 65;
        }

        exports.isValidDERSignature = isValidDERSignature;

        function sanitizeRSVSignature(sig) {
          return {
            signature: sig.slice(0, 64),
            recovery: importRecoveryParam(sig.slice(64, 65))
          };
        }

        exports.sanitizeRSVSignature = sanitizeRSVSignature; //# sourceMappingURL=util.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "bjVm":
    /*!*************************************************************!*\
      !*** ./node_modules/@walletconnect/core/dist/cjs/events.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function bjVm(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var utils_1 = __webpack_require__(
      /*! @walletconnect/utils */
      "xI+a");

      var EventManager = /*#__PURE__*/function () {
        function EventManager() {
          _classCallCheck2(this, EventManager);

          this._eventEmitters = [];
        }

        _createClass(EventManager, [{
          key: "subscribe",
          value: function subscribe(eventEmitter) {
            this._eventEmitters.push(eventEmitter);
          }
        }, {
          key: "trigger",
          value: function trigger(payload) {
            var eventEmitters = [];
            var event;

            if (utils_1.isJsonRpcRequest(payload)) {
              event = payload.method;
            } else if (utils_1.isJsonRpcResponseSuccess(payload) || utils_1.isJsonRpcResponseError(payload)) {
              event = "response:".concat(payload.id);
            } else if (utils_1.isInternalEvent(payload)) {
              event = payload.event;
            } else {
              event = "";
            }

            if (event) {
              eventEmitters = this._eventEmitters.filter(function (eventEmitter) {
                return eventEmitter.event === event;
              });
            }

            if ((!eventEmitters || !eventEmitters.length) && !utils_1.isReservedEvent(event) && !utils_1.isInternalEvent(event)) {
              eventEmitters = this._eventEmitters.filter(function (eventEmitter) {
                return eventEmitter.event === "call_request";
              });
            }

            eventEmitters.forEach(function (eventEmitter) {
              if (utils_1.isJsonRpcResponseError(payload)) {
                var error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
              } else {
                eventEmitter.callback(null, payload);
              }
            });
          }
        }]);

        return EventManager;
      }();

      exports["default"] = EventManager; //# sourceMappingURL=events.js.map

      /***/
    },

    /***/
    "bmOx":
    /*!***********************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/url.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function bmOx(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var queryStringUtils = tslib_1.__importStar(__webpack_require__(
      /*! query-string */
      "cSa0"));

      function getQueryString(url) {
        var pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
        var queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
        return queryString;
      }

      exports.getQueryString = getQueryString;

      function appendToQueryString(queryString, newQueryParams) {
        var queryParams = parseQueryString(queryString);
        queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
        queryString = formatQueryString(queryParams);
        return queryString;
      }

      exports.appendToQueryString = appendToQueryString;

      function parseQueryString(queryString) {
        return queryStringUtils.parse(queryString);
      }

      exports.parseQueryString = parseQueryString;

      function formatQueryString(queryParams) {
        return queryStringUtils.stringify(queryParams);
      }

      exports.formatQueryString = formatQueryString; //# sourceMappingURL=url.js.map

      /***/
    },

    /***/
    "cSa0":
    /*!******************************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/node_modules/query-string/index.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function cSa0(module, exports, __webpack_require__) {
      "use strict";

      var strictUriEncode = __webpack_require__(
      /*! strict-uri-encode */
      "OOOY");

      var decodeComponent = __webpack_require__(
      /*! decode-uri-component */
      "8jRI");

      var splitOnFirst = __webpack_require__(
      /*! split-on-first */
      "8yz6");

      var isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || value === undefined;
      };

      function encoderForArrayFormat(options) {
        switch (options.arrayFormat) {
          case 'index':
            return function (key) {
              return function (result, value) {
                var index = result.length;

                if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                  return result;
                }

                if (value === null) {
                  return [].concat(_toConsumableArray(result), [[encode(key, options), '[', index, ']'].join('')]);
                }

                return [].concat(_toConsumableArray(result), [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
              };
            };

          case 'bracket':
            return function (key) {
              return function (result, value) {
                if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                  return result;
                }

                if (value === null) {
                  return [].concat(_toConsumableArray(result), [[encode(key, options), '[]'].join('')]);
                }

                return [].concat(_toConsumableArray(result), [[encode(key, options), '[]=', encode(value, options)].join('')]);
              };
            };

          case 'comma':
          case 'separator':
            return function (key) {
              return function (result, value) {
                if (value === null || value === undefined || value.length === 0) {
                  return result;
                }

                if (result.length === 0) {
                  return [[encode(key, options), '=', encode(value, options)].join('')];
                }

                return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
              };
            };

          default:
            return function (key) {
              return function (result, value) {
                if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                  return result;
                }

                if (value === null) {
                  return [].concat(_toConsumableArray(result), [encode(key, options)]);
                }

                return [].concat(_toConsumableArray(result), [[encode(key, options), '=', encode(value, options)].join('')]);
              };
            };
        }
      }

      function parserForArrayFormat(options) {
        var result;

        switch (options.arrayFormat) {
          case 'index':
            return function (key, value, accumulator) {
              result = /\[(\d*)\]$/.exec(key);
              key = key.replace(/\[\d*\]$/, '');

              if (!result) {
                accumulator[key] = value;
                return;
              }

              if (accumulator[key] === undefined) {
                accumulator[key] = {};
              }

              accumulator[key][result[1]] = value;
            };

          case 'bracket':
            return function (key, value, accumulator) {
              result = /(\[\])$/.exec(key);
              key = key.replace(/\[\]$/, '');

              if (!result) {
                accumulator[key] = value;
                return;
              }

              if (accumulator[key] === undefined) {
                accumulator[key] = [value];
                return;
              }

              accumulator[key] = [].concat(accumulator[key], value);
            };

          case 'comma':
          case 'separator':
            return function (key, value, accumulator) {
              var isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
              var newValue = isArray ? value.split(options.arrayFormatSeparator).map(function (item) {
                return decode(item, options);
              }) : value === null ? value : decode(value, options);
              accumulator[key] = newValue;
            };

          default:
            return function (key, value, accumulator) {
              if (accumulator[key] === undefined) {
                accumulator[key] = value;
                return;
              }

              accumulator[key] = [].concat(accumulator[key], value);
            };
        }
      }

      function validateArrayFormatSeparator(value) {
        if (typeof value !== 'string' || value.length !== 1) {
          throw new TypeError('arrayFormatSeparator must be single character string');
        }
      }

      function encode(value, options) {
        if (options.encode) {
          return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
        }

        return value;
      }

      function decode(value, options) {
        if (options.decode) {
          return decodeComponent(value);
        }

        return value;
      }

      function keysSorter(input) {
        if (Array.isArray(input)) {
          return input.sort();
        }

        if (typeof input === 'object') {
          return keysSorter(Object.keys(input)).sort(function (a, b) {
            return Number(a) - Number(b);
          }).map(function (key) {
            return input[key];
          });
        }

        return input;
      }

      function removeHash(input) {
        var hashStart = input.indexOf('#');

        if (hashStart !== -1) {
          input = input.slice(0, hashStart);
        }

        return input;
      }

      function getHash(url) {
        var hash = '';
        var hashStart = url.indexOf('#');

        if (hashStart !== -1) {
          hash = url.slice(hashStart);
        }

        return hash;
      }

      function extract(input) {
        input = removeHash(input);
        var queryStart = input.indexOf('?');

        if (queryStart === -1) {
          return '';
        }

        return input.slice(queryStart + 1);
      }

      function parseValue(value, options) {
        if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
          value = Number(value);
        } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
          value = value.toLowerCase() === 'true';
        }

        return value;
      }

      function parse(input, options) {
        options = Object.assign({
          decode: true,
          sort: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ',',
          parseNumbers: false,
          parseBooleans: false
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        var formatter = parserForArrayFormat(options); // Create an object with no prototype

        var ret = Object.create(null);

        if (typeof input !== 'string') {
          return ret;
        }

        input = input.trim().replace(/^[?#&]/, '');

        if (!input) {
          return ret;
        }

        var _iterator = _createForOfIteratorHelper(input.split('&')),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var param = _step.value;

            var _splitOnFirst = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='),
                _splitOnFirst2 = _slicedToArray(_splitOnFirst, 2),
                _key4 = _splitOnFirst2[0],
                _value = _splitOnFirst2[1]; // Missing `=` should be `null`:
            // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters


            _value = _value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? _value : decode(_value, options);
            formatter(decode(_key4, options), _value, ret);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        for (var _i = 0, _Object$keys = Object.keys(ret); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          var value = ret[key];

          if (typeof value === 'object' && value !== null) {
            for (var _i2 = 0, _Object$keys2 = Object.keys(value); _i2 < _Object$keys2.length; _i2++) {
              var k = _Object$keys2[_i2];
              value[k] = parseValue(value[k], options);
            }
          } else {
            ret[key] = parseValue(value, options);
          }
        }

        if (options.sort === false) {
          return ret;
        }

        return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function (result, key) {
          var value = ret[key];

          if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
            // Sort object keys, not values
            result[key] = keysSorter(value);
          } else {
            result[key] = value;
          }

          return result;
        }, Object.create(null));
      }

      exports.extract = extract;
      exports.parse = parse;

      exports.stringify = function (object, options) {
        if (!object) {
          return '';
        }

        options = Object.assign({
          encode: true,
          strict: true,
          arrayFormat: 'none',
          arrayFormatSeparator: ','
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);

        var shouldFilter = function shouldFilter(key) {
          return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
        };

        var formatter = encoderForArrayFormat(options);
        var objectCopy = {};

        for (var _i3 = 0, _Object$keys3 = Object.keys(object); _i3 < _Object$keys3.length; _i3++) {
          var key = _Object$keys3[_i3];

          if (!shouldFilter(key)) {
            objectCopy[key] = object[key];
          }
        }

        var keys = Object.keys(objectCopy);

        if (options.sort !== false) {
          keys.sort(options.sort);
        }

        return keys.map(function (key) {
          var value = object[key];

          if (value === undefined) {
            return '';
          }

          if (value === null) {
            return encode(key, options);
          }

          if (Array.isArray(value)) {
            return value.reduce(formatter(key), []).join('&');
          }

          return encode(key, options) + '=' + encode(value, options);
        }).filter(function (x) {
          return x.length > 0;
        }).join('&');
      };

      exports.parseUrl = function (input, options) {
        options = Object.assign({
          decode: true
        }, options);

        var _splitOnFirst3 = splitOnFirst(input, '#'),
            _splitOnFirst4 = _slicedToArray(_splitOnFirst3, 2),
            url = _splitOnFirst4[0],
            hash = _splitOnFirst4[1];

        return Object.assign({
          url: url.split('?')[0] || '',
          query: parse(extract(input), options)
        }, options && options.parseFragmentIdentifier && hash ? {
          fragmentIdentifier: decode(hash, options)
        } : {});
      };

      exports.stringifyUrl = function (input, options) {
        options = Object.assign({
          encode: true,
          strict: true
        }, options);
        var url = removeHash(input.url).split('?')[0] || '';
        var queryFromUrl = exports.extract(input.url);
        var parsedQueryFromUrl = exports.parse(queryFromUrl, {
          sort: false
        });
        var query = Object.assign(parsedQueryFromUrl, input.query);
        var queryString = exports.stringify(query, options);

        if (queryString) {
          queryString = "?".concat(queryString);
        }

        var hash = getHash(input.url);

        if (input.fragmentIdentifier) {
          hash = "#".concat(encode(input.fragmentIdentifier, options));
        }

        return "".concat(url).concat(queryString).concat(hash);
      };
      /***/

    },

    /***/
    "dFyl":
    /*!********************************************************************!*\
      !*** ./node_modules/@walletconnect/qrcode-modal/dist/cjs/index.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function dFyl(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (process) {
        function _interopDefault(ex) {
          return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
        }

        var utils = __webpack_require__(
        /*! @walletconnect/utils */
        "xI+a");

        var QRCode = _interopDefault(__webpack_require__(
        /*! qrcode */
        "0FX9"));

        var React = __webpack_require__(
        /*! preact/compat */
        "FdF9");

        function open(uri) {
          QRCode.toString(uri, {
            type: "terminal"
          }).then(console.log);
        }

        var WALLETCONNECT_STYLE_SHEET = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 5vw;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n";
        var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
        var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
        var ANIMATION_DURATION = 300;
        var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
        var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
        var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
        var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
        var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
        var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
        var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";

        function Header(props) {
          return React.createElement("div", {
            className: "walletconnect-modal__header"
          }, React.createElement("img", {
            src: WALLETCONNECT_LOGO_SVG_URL,
            className: "walletconnect-modal__headerLogo"
          }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
            className: "walletconnect-modal__close__wrapper",
            onClick: props.onClose
          }, React.createElement("div", {
            id: WALLETCONNECT_CLOSE_BUTTON_ID,
            className: "walletconnect-modal__close__icon"
          }, React.createElement("div", {
            className: "walletconnect-modal__close__line1"
          }), React.createElement("div", {
            className: "walletconnect-modal__close__line2"
          }))));
        }

        var MOBILE_REGISTRY = [{
          "name": "Rainbow",
          "shortName": "Rainbow",
          "color": "rgb(0, 30, 89)",
          "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAACcZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBMQACAAAAJAAAAFqHaQAEAAAAAQAAAH4AAAAAAAAASAAAAAEAAABIAAAAAUFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpAAACoAIABAAAAAEAAAB4oAMABAAAAAEAAAB4AAAAAHcBEEsAAAAJcEhZcwAACxMAAAsTAQCanBgAAASYaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NTFBODBGRjMzQjg0MTFFQUE4OEFDRjk1Q0U0Mjg1NTI8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6NTFBODBGRjQzQjg0MTFFQUE4OEFDRjk1Q0U0Mjg1NTI8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo5ZWY3YjM0Ny1hZGY4LTRkMmYtYTVlMy1kNWExNjkwMDZmZmU8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo1NjZjZmI1ZC1lMWNjLTRlYWQtYjVjNi03ODhmZjlhNzkxNzc8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDowNzE3MjAwMC1jNTA2LTExNzgtOWFiMC1mYWMyNTUzYzdlYTg8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Ctllm9AAAEAASURBVHgBjb3pk2fXed93fr9eBrNh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",
          "universalLink": "https://rnbwapp.com",
          "deepLink": "rainbow:"
        }, {
          "name": "Trust Wallet",
          "shortName": "Trust",
          "color": "rgb(51, 117, 187)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://link.trustwallet.com",
          "deepLink": "trust:"
        }, {
          "name": "Argent",
          "shortName": "Argent",
          "color": "rgb(255, 135, 91)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://argent.link/app",
          "deepLink": "argent://app"
        }, {
          "name": "MetaMask",
          "shortName": "MetaMask",
          "color": "rgb(255, 255, 255)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://metamask.app.link",
          "deepLink": "metamask:"
        }, {
          "name": "Crypto.com DeFi Wallet",
          "shortName": "Crypto.com",
          "color": "rgb(17, 153, 250)",
          "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAHigAwAEAAAAAQAAAHgAAAAAKyp31AAAGCFJREFUeAHtXQd8FcXW/4eAQBICSAs1oYmodGlP39OHIp+IIGDjgSiC9Ca9CAo+efSWAEJQQKpIUUQpKihVFBBFUBTpAlJEegvhO2d252bvZu/dvfdOkptrzi97z+zMmTNnzn/OzPaE3SZCFoWsB7KFbM+yOiY8kAVwiA+ELICzAA5xD4R497IiOAvgEPdAiHcvK4KzAA5xD4R497IiOAvgEPdAiHcvK4KzAA4ND8xYshl5yz+HBh1nYM9vf4RGpxz0IizUbzZs+/EwnntlFA5/tw0Izw6UfRDh4dnQ8dl/YFjnBiiQN8KBmzKvSMgCfOrPS3im8yRsWPkxkHRTQ0gHWMKVLzo3Xu/YAF2efwA5sofmahVyACcTep2GzsPMhHeRfOW8xNISYFl4V1xhjOvzJBr96x6ZFTI8pACe9v4m9O0/HpdPHrYGyBTBZqH6dStgfN/GuK9cjLko0+6HBMCbdx3EfzqMxpHvv/EOhA3AXJnX5/ZP18XwLg1QMF+kd32ZoDRTA3yS19mOE7Hpk5XALX2d9eZ0BwDL6nnz5MbQjvXRtcWDuCN7uMzOdDxTAszrbIfB7+HdabNonb3g3Ok+ACyVlo8thLG9n0Tjh++VWZmKZzqApy7cQOvsBFw5dcR3R/sBsGzkkTp3YULfJqhUPnOtz5kG4E07eZ0diaO7t0uf+84DAJgb4/W5XbPaeLPr4yiUP3Osz0EPMK+zzTuMx5ZPPwWSeZ0No40fBGVuRbJMPixqkM9Ga2mZB6wq+ZSXJyoXhnSoj+4t/4mcOejiSRBT0AKclJyMDkPmYva0OUi+yuusJ0DN3jUDbCjPRmCUqWvI8JY0DAwhZtYbhjIlCmAMnVY1q1fJm6IMLQtKgBPmf4X+gyfSOnuMnGPvaPeINgNh8C8DHFfHkOEt6UWPqJZi10O1ymFC/6aoVqGYN4UZUhZUAG/ccQAtO4+hdXYnOYMd7IRSHK1Jm4ExlPMUHVfLiVKSMevxXi2MdL/0VC2M6PEEYgrk8S6cjqVBAfDxMxfwbKdJ2Lx6Na2zSWnXfY7gUvd70G8G1DAwRA1n5XmicmJAu8fQ66V/I1eOjD9/zlCAeZ3tyOvs9Lm4dfWSB8crzOYILlVDoULPqmKLF8Co3o3xXINqnoXSoSTDAI6ndXbQkHhcOvV7OnRTbyKM7hiVqq7tmAPSzgq7gPZQ/4EaZTFhQHPUvLekB4m0zU53gHmdfaHLWBz+cVfa9sxKezYCuISMKF8RtlJozPM8AsKo3ZZP1hIRXaxgtLFSmqfTDeDfT19Ai67x2Lh6jWmdNTvG3GczEHby5vqG/TCaoot7OqUx6zW3a9DjZzIyMhf6tK1Pa3T9dFuf0xxgXmc7DZmH2YnzkWS5zto51lxu510zMIb6vAYXu09XYJYz6zXUE0Vmebtys76U/ZLFCmLEq03QqlHaHw+kKcAJ8zdg0NAEXDx13PN1Cju/pfgF0UVKIHdkBJ0Zh9FJDFf0jcLDw1G6osOb+h7wO3zsLI6d+FPJ6XmtqmUwadAzqFM51reO+CCdJgB/tf03tOk+AQd//N4HU+xFN345Bw9UK20vmIYSM5d9jfZ0J0sVhWULw7MNa2Jsv2YoUTivKrUuPUoBPnbqPFp2n4KNaz7D7eRbWiN2EWoud5mmJ/RIyhEZhevHPzGXpvv+gd//RLlHB/t6HcQ24iNy50TPNvUxmJ4Ri8iZQ1m/6LAycLqRlIz2dD5bpnILbFi1hsDlO7aMDG1hBm5MeypnGeOm64i7667ADVWgoUzxO1G0cD7SRCNTfP2CR6iDTcoyN6b1uleuXsOIqR+j/GNDMetDegJUESkBeNWGvUiMn4mb1y7r4JB1RpACSmu6at0vD44U9TwANbWrlNFAkmAp5MdPnMXL/d7B6XPkSwWkBGDNDj1SxQ6nVZGmq9GjVVUpDFjPgzXKB6wjvRTQxdnAiQNUm4od6OLZjOWZM8m0hqOWZ/wluWw5cqBJvSrG3AxN16vDAPNUS8yL3a6+WVlr12+rOn7kKQFY66SnnpqskmKSc7ExbRLnsphScch1hxpTzer92a9aoTjyRkfg/HmaRhlkT+SkzJuMJ70+5KfBFM1oqd2qVqvoQ5fSR/T+Svo6LBBmlNRuqj5fpgRg1xQd0MEUDQoP9R95sHL6oOZDK/8Q6zCBqvAAy02XD7Z4E1UCsGjAadCyMMtKkmlP9Unumcc93cOVStKf16tNp20CXGpbTrOSszkyzdxqM8oY01KW8xSQkoUtTAthZ+YYAZU1ZJ7cN/D8MTF0hSd978AYmveYfKB6GeTKlRPXrl3XZIyAyloyT+4buSyTnMuMabcoMFb0La0kglMAJqQk2HK6ZUNlnh9rc8V7g+MCh9mt2ekSY+V74iibUaGNo1lyY9rvclKngJQALDrnCVAJriz3kf+zjqfbewp6H6CKOtXKasAqAdQwSGhQBNlBFs+xabM1qR88FzjM46Fe3bspS49c5dzcmn/7StZgAS7jK4gT3GmZIdPMrcizfO6oPKhTKdaqUlDkPVKnArLT2w5JSfqNlaCwyt0INVM0A8rPO/HGJLm2I341wAlMUaZzKSe5qKsPDJrKy1Uop9cNThaZKwcqlC+lGSemaUoyt9pYSsoY0y5ZWZc5bbobWDQQUhTBBhPEmkv7khuKtCSDyykJpJ52dYjLtR6ePXsODdqMF6qkb1jM2H+ZZm5FbAbXZc4Hg/nyqT0iv3j5Sgpw0kgrQ27rd9gEZwE2TN51433ZA42rWoOVAJyNH2aTgLGttsQwSZJpyTlfSx8/fBS8KSNGObf6m+rO7ZMgcg2Zlty5Fl8klQAsRhs7L4MoGz2Kw08u2lMY3bhw1uVkuqd9K4jXVvu+ahLOemujLRudE8qosxFNk+KXX26GGW+2Vqq74xsLMGM2fTkgw0hNwDgZ9vZd5FlGYiwWO96nDMtNlsk6LCfzPNXxnr98xUZSoI54ZVy+crO2troOgqiTbmkSEvvMjWkpZ8wzpmW5mRtlWDUrDZyUAKxdyWJVvDFakgvk9DynaRLX12BOpSbWw5Si7+yp01jymboH6Zeu2YXTp+nJSdc6ye1JhzO32owynOZhwsScN64juVEXZQsy5sm0LPOfKwFYNO+KVtpzRbExTYC4ZOzTJUvHYvRb3VCoKH0ywa2eUSentS1hFj1Qr4imL/iC8CAn22z33FMWC6f3Q9my9FpKKlkyRuQxt9pYv5SxaIuKVJASgPnRzxSSad3zokDm8Y5My/LU/Kmm9bHvywno8/KjOLg1AS+2bkpfIeQnDVPLytliy5adOP1X4M8xnb1wBRs3f0dtsfeZBApuPBc9ATm03wv4cdVbeO7/qmH36v/h2Wb1dBlPESuj12k5tx04KQFYmOEWZQSE432qLWSBiDyRmDG5H5ZN6UxPcNBbCET8COmskS/Sp5LGosI9dOMhlV6tftLNm5g4myIvQIqfux43r98gXM1RRYopr3btyvjh8wl4o+sTrpbY1kUT2yNx4quIiMitjwmur9VJiWSZJ/Mll/mSu1QHnFACML9pYB1dzvPvvrcCdpHj2tFHyKyoNl2y/OnzURj22ivIHRVlaI+luR1g4bL1ggfys2DpV3p1crYg5reRJzoKk0Z2wdYPXkO5kgX0MnfWtlkd7Fg9FndVKO1eIPbc9enoU4mm38yD6iBLGJcqssjpDvLC6Bz25TZN8MPqt8hxBS0c4541pNPj+HlDPB6uR59iEPppjOr80IGj2EBvL/pL23Yfxv5fDlJ3yOmGrf6j/8C+DZPRreVDtqorxBXC7jX/w3+eb0CyrIemZLHxLqe1bPeoZjnOl5zSikhNBLODHUcxW87yQL4782HJ7Ncw87+tkd3RhQpRDSWL5MW6uX0xf8YgFCpSiDJT2p8YwMHWhHfXkq6UNbJAofzUxkCsmfUqfZaBZw1nlINuQMwb0xbvJvRBJC07BlR9SDtry05KCcBi9LmilZoUaeZWG2XSX81alfHjF+PRtJ7/z1u1aFgdBzZPRuGiBLLe1rc7frbrs8fybdv36lF0mwZffvy2KQEtGvr/BuBLTWrju7XjUKEiPWbril4Z0RytnGZusXm00rcCJQCLAHa1y55m0j1u4uH0jHO/ni2xbdlQFCsU+IV/vqMTkZsObPR28uVzHmnCTMNPtIg2LSMnHdxFR95hKPUvycvO7jUj8EKrxpqJHtUQyIKY8w1/fTdApgRgYYMrgglYL+l2rRthZO+nAjTbVF2MJa3dmCJ3mgqd7xYsSDciXNHkvJ6dJC8/c0a9hPr16SNsLv0WUWsss1PqsFwJwG7PZJkiVkaW5AuWrgefa6ok41F8sSLWR7hO2ouhNZejR0SQ4E5qOZPh/xOxft1Wl37ZjmfuTK+dlBKAvUWsuezihUvoNmyhnV2+lfOFFn3WKFHU/wguWoQAToMo4s607TcdSTf4/Jp2xMYRzGnmFhtXUkBKANbWYDFPkkn2fPHy9dixV919Xi2CNW/E0ucR/KUSMTw4hNfJ58zV0KJVO/DNlu2kjHXKo3TWzWlJsj2tfZkbKFcCsDDCHlcX9nyvtfOQOYHanlJftE0/NNJKOziXTqnonoorToND+lcRwPyNkl5DEw16qU3RBv24uDGtlasaYEoA9jWCGelvd/yE91bYfILf3f8e9+g2PpVpI6xsAACXjeX1W3hd/Hps0IeCgWM/xMmjv7v0Sv323IdGvIiqA1hfA+Va6IQPHLUQ128qeCJRb5uvisUW5wMl/6hcycLkd44m3ozTp3/6Tpy5iClvv2/QKXU74P41maqWEoA1rVoEyUhywk8cP4Mhk1akMsrXDDmD5M8fjXBtx1cVQj53zuzIFRFBaQbALxVuldr2n4lrly9p+vSZQVPMyu02N1V+7yh5ZEfY6qdjE2Z9is4tH0ZcUf8jTwwmaj9XzpxY+vkPuvN4wLkTr2sXL11FcrL25sAtWh+1gL2NZEpwOnt2colIB4bwV9v3Y82n64Qudyuc7alag5UAbDyKdWZ+itS1q9fRffhCrJjWOSXTx9Td5Utg/4FjOH7iNJ5pP9ZLbQLt0hkv5SlFJUsF9u3nV/pMxe1bgXw5N/UATbHOeUrNFC1mZ/rhKPZjW7l2G9Z9s9+51SbJJfEd0KBeTfu2uZ7dzEjl99Wois1L3zC14nx3/Jx12L/nJ0dtebRHDb7i8NO55R4kfbmSJaZTi3Pl7sPmuZ0VemjKMpv/r9HKxK5o1oj/H4MYbR44j2fvCNd8sDa2f/xf8HrsD12+dgPDR7xj246dHf60bVVHTQSzZj8i11hn777DSJi3wcpGR3l8cLVkUnu89Pwj3m3RFl3yLwFt2h6q/zC2Ln8joH+E1fG193DhLC0DJt0+7zvqtb2QEoBVRDBH3vDJy3D+0jV7q71IvPvWC+jWlh+n8RTJ1hHcsOnjWL9gQEBT2k+H/sCiBR9R29Zt+JKv6iBLEcDscd2hHMmc9iOi/zx3EQPGLWdlAdGkgU9jcI/mmg3SFsFJrUVkPduqOU3xPQNqkyu37jEFt67TALVow+e8gK3RFCgBWKiSAcM7nPaT3ln0JfYq+A/db3Z7AqMHtaSHLvUuioFnNIqjjG4CdH6BHpjrYCzwK/3B2u+wYxPfLfJEWnspUcxyMs9TncDzFQLsX9SK10lFtJMp9Bpp0q1b6PqmmrtNfdrUQ+/2NF0L/eQsfk3VFV1Aw2ZPIFHBKy98zatbv3iDbgLO1Y5Mk5DIY25My3ITJxEVpATgbCI6ZAj7yrkbxpAPw5db9mD5F7tV9A+lxO1DaROrFN4VvEQxfp4rcOo/eilOHTlMilJ0B5oOqjVYuEhECTnSjhvXRGPaVK/PyMW4eSvw68Fi7EjdvGOILBVOPEUfDU2If89Nr7ENv9OBjzuhQUkE87jVolBGihfOzpbAGtMaEi49B4+cwqjEz1hxQHTjBt/MMLRpiDLXJ5ACaKFVz2m4fukCaVAXvZoutjlwUgKwhhMZJCPFG2ebRQUPxssy4qMTV+Hk2YseBO2zP/v6FwyLp9MWqVOAkFJv/uzF4H+j5y9t2nkAX6xcrVXnmYHJMEO4pWWZELL40au7xomFiD9ZSgCuXrEkXu/xFKKi5NONbIoeNWYunO1lMLC8LnPp8nX0He3fadMSuunwZHv6v0ykQ9jCB1huB1l0g+EGXQfvNgyDJ/K5q+/0Iv3bAnG9WYBLCEnuGkgSNdItbz+KR2Vp6REDQXKW0+rfERGFTr3ao2TRfL4bZFFD6Sf9Odr6jlmOBSu+pjs2cv1koLkDzJlkmrkTCsPWxQNQu1IpJ8JCJnHpVnQaSpc+XTboVfnfDJzcl1oPDagXO7yIWaPapC7zkDNx7jr06jrMUGrul7nfBlGRdJcPo5fr/t2wARZM7oIid0aZhf3eVwqwtGLnT8fQY8QSbPrWwplSyMXNjnDvOIvVrFIa2xb1ddXwlhj5zhcYNHaptchtAvgE3QQQZG4nDI81a4LVs3pb1zXkXruRhEJ3t8Dls38Ycv1Plq1SHXMTeqFulVj/lXioqWSKNuuuXrEENs7tifcndUDp2CLalMvTrtXGlcWULLUw4EzMte3b7w9hzopvRa63nz70eMygsct0fSn1pR6NM7C8MUnOydtYu+xD1Gj0Gvg5Km/UduAsXD5zUtRxW2fFtEs65VQtuWhHtqtzKssbUwKJs0Zh/8ZJaQIu9yFNItjoHP6HHWPptc5RM9bgwsWrxiI9zR1mMJgzyTRzJq08plBe/LL6dUTlTv22wS1yVrshCzFnGX12IVV9oUT74Sn6uP35dVylqtj12ThER+Q0VNaSvx45jYrVW9D6zdfMpa1cJtPudlv1K0dkHrTt0ApThrUM6Nq3ZpH33zQHWDZ/6twlDJzwMWYv24pkulqlOYRL7QCWGoBaVUujRIz54OM2jhz/C9t/OKgLenE0T9G/8xMf9hSRvwiiC6R+yuTCub9wxWpq5mjlmUhELemXadfsdBth4bTONmqIRfFdUSh/pL0RCiTSDWBp6659x9Fr5DKs3/aznmUGREo65eYBYq5n0M//m/jYLrOAvm+Q8yDhnm1u13v9MlVqYP60Pmn6X87c7dP20h1gacTydT+g39iPsP/wacqSzuJSmWbOZHacTXmqSCIVsgpP0Uf58wycR5kyykSGuR2RmfJjLpY6mTN5KI+OKYVxo7qjXXN+GCH9KcMA5q7y+jxp3ld46+01OH9R7ftKlq5kgI/ssCxKnWmHYOoaxpzsEdFo17k1rbOt0nydNbZrTmcowNIY/njKkPhVmLlkS+Bfl/MQSSKKeYo+sl1rNjD8UmYFcwTT+exDjZ7A4oRuKKzwfFb6ylceFABLo/cc+AM9Ry7H51vk+ixLFHF+yvGwmrcprCyKq1oT78/oh1r3xVoVZ0heUAEsPbCS/lVe7zEr8MtBJxcSfAhFjuBDX+vNeAt1aYkzHhUTi/GjX8UrT2fMOuvNyqAEmA3mW4VTFm3G8Gmrce48nz/LudDcHTugDOUcwQc9PXVhN1DM5UB4ZF6069IGUzN4nTV7xLgftABLI88SuG9MXY1pi7dq67MBLyFjezRsAEYAvEVTba5n1ms+LDbKZ78D/2rUCEvffhUF8/GrLsFLQQ+wdN3Ph06hF03bqzbKa8myxAfOAP+2yYcKJlE6rYqtWgsfJA5Azfuc3/wwaUnX3UwDsPTKmi37BNB7f6Nrwb5SAABHFYvDxDF90LZ5XV9bzVD5TAcweyuJ1ue3P9hKU/canPXl+5R+ABwemR/tu7dBwutpf904LUZCpgRYOuLchasY9vZaTH1/M246ec/YF4BpnX24cWOxzt4ZnUs2mel4pgZYenvfodPoPXYFPqHTK6/kBGBaZ0tXq43FiQNx/70lvKrLDIUhAbB09Nqtv9D6/BH27PewPtsAHFWsNCaP64s2TWtLlZmehxTAjMYterl7Oq3Pr9P6fIZuUbqRB4DDo/KjU/e2iB/awk08FHZCDmAJyl8Xr2H49LVIWLgpZX02A5w9J+o91RgfTO2JzLzOyj5b8ZAFWHb21yNnxPr88Zd7KLz182BaZ8vUqEvns/3BjxeFMoU8wBK8z7/+FT1GLsHR3TuRMKEfWjemLwL8DehvAzBjyc9uBfIVnsw4Hv5WAGdGgAK1OU0emw3UqKz66jyQBbA6XwalpiyAgxIWdUZlAazOl0GpKQvgoIRFnVFZAKvzZVBqygI4KGFRZ1QWwOp8GZSasgAOSljUGZUFsDpfBqWm/wdac8bd4vjFnAAAAABJRU5ErkJggg==",
          "universalLink": "https://wallet.crypto.com",
          "deepLink": "cryptowallet:"
        }, {
          "name": "Pillar Wallet",
          "shortName": "Pillar",
          "color": "rgb(255, 255, 255)",
          "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAeKADAAQAAAABAAAAeAAAAAAI4lXuAAADdklEQVR4Ae3dS2oUURTG8RMfKD6Cojsw4ArEFYiIC3AkLkDjTPdgJg50CT524MglqODADTh24BsNYnuvUhASqroqdbS/+/m/EDt2Vd3c8/3qVDfpdLIWi41FMGwTOGBbGYX9TgBg8xMBYIDNEzAvjw4G2DwB8/LoYIDNEzAvjw4G2DwB8/LoYIDNEzAvjw4G2DwB8/LoYIDNEzAvjw4G2DwB8/LoYIDNEzAvjw4G2DwB8/LoYIDNEzAvjw7uA972eD8AwH3Az79GPHjft7WZ+wHuo6oNfPtd88gA9wF39zeODHAHOXTbMDLAQ7A7t1Xkh+09JgO8E3HZ55vtIQO8DHX39saQAd4NOOb/DSEfGlPPP93n0aeIZ1/mfcnLxyJurM+bY9nRFbmOW6f+3Ir+qwf86lvE08/z4jpzsADPm2LU0Q0gc4keJTmwk/jlGuABu9GbhJEBHq24ZMeK/Lg8fxAbAGeCvCzPH8QGwGIg2csBODtRsfkAFgPJXg7A2YmKzQewGEj2cgDOTlRsPoDFQLKXA3B2omLzASwGkr0cgLMTFZsPYDGQ7OXovR585XjE6fJ67pxx4cico62O1QO+VH4ao34wUhLgEp0So+4kAOvapKwM4JQYdScBWNcmZWUAp8SoOwnAujYpKwM4JUbdSQDWtUlZGcApMepOArCuTcrKAE6JUXcSgHVtUlYGcEqMupMArGuTsjKAU2LUnUTv9eAX5Q1cb7ZXn9jr76tfQ8IK9ICflLdg3v+QUBpT1AS4RJufBwADbJ6AeXl0MMDmCZiXRwcDbJ6AeXl0MMDmCZiXRwcDbJ6AeXl634s+d3h65NdPRpzfx3HTv9LwERePDm9fwVY94Jvl9y+//RGxNeHvI1w7EXG1vO2UsScBzcfge2cj7mr/ou09SYreoQlcwwI55ZTRBQb5PwDukO9wud6vtnYHd1VtlcdkkLs0Jt22AVxLAnkSbLdzO8Agd2aTbtsCBnkSbt25PWCQJyG3CQzyaGS9b1WOXnrZsT7xYgwmsBaLjfrHzNseH39GrLd7Mfqb4XukAm7vOeIB3FseGwA2PwcABtg8AfPy6GCAzRMwL48OBtg8AfPy6GCAzRMwL48OBtg8AfPy6GCAzRMwL48OBtg8AfPy6GCAzRMwL48OBtg8AfPy6GCAzRMwL48OBtg8AfPyfgHtr1K6++2nIgAAAABJRU5ErkJggg==",
          "universalLink": "",
          "deepLink": "pillarwallet:"
        }, {
          "name": "imToken",
          "shortName": "imToken",
          "color": "rgb(255, 255, 255)",
          "logo": "data:image/png;base64,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",
          "universalLink": "",
          "deepLink": "imtokenv2:"
        }, {
          "name": "TokenPocket",
          "shortName": "TokenPocket",
          "color": "rgb(41, 128, 254)",
          "logo": "data:image/png;base64,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",
          "universalLink": "",
          "deepLink": "tpoutside:"
        }, {
          "name": "KyberSwap",
          "shortName": "KyberSwap",
          "color": "rgb(255, 255, 255)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://kyberswapnew.app.link",
          "deepLink": "kyberswap:"
        }, {
          "name": "Nash",
          "shortName": "Nash",
          "color": "rgb(0,82,243)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://nash.io/walletconnect",
          "deepLink": "nash:"
        }, {
          "name": "MYKEY",
          "shortName": "MYKEY",
          "color": "rgb(255, 255, 255)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://mykey.org",
          "deepLink": "mykeywalletconnect:"
        }, {
          "name": "Math Wallet",
          "shortName": "Math",
          "color": "rgb(0, 30, 89)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://www.mathwallet.org",
          "deepLink": "mathwallet:"
        }, {
          "name": "ZelCore",
          "shortName": "ZelCore",
          "color": "rgb(35, 34, 32)",
          "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAAB3RJTUUH5AkPBRYTip+38QAAH7hJREFUeNrtnXd4VUX6xz+3pJAOoSZIggQCmFClRXEhgEoTCzUgSQhWQAVdXXV/iq6s7q6CHcF0adIFBBcQWCkCQoAkUkKQZEkBTEgPCfeec35/zD3XSySk3SQ3br7PwwPMPWfOnPmeeWfmnbdoaCJQFOVWxRrADWgP+AJ3Ap2BTqYyT8AdaAHYAzrTfRJwA7gOFAC5wGXgv8BF4BcgzVRWCPzu4RqNprG7pFqw6VbeglQN0AboCvQB+gLdgTuAloATv5FYW0hAKZAHXALOAieAk8B54FcqEG7LZNtkyyoQa4cYlYOBYcDdiNHqers6ZFnGaDRiMBgwGo1IkoQsywBotVp0Oh16vR47Ozv0ej1arbaqZhUhRvUxYB9wGDHaDebOtEGibaZFtxitnRCEjkOQ6w38joWysjLy8vK4cuUymZmZZGVlcfnyZXJzcsgvyKekuISy8jIMBgOyZCJYp8XOzg5HB0ecXZzxcPfAs3Vr2rdvj5eXF97e3rRr156WLVvi6Oh4q+bKQCaC5G0Iwv97U8faCNmN3ooKxDoiRuhEYDTQhQoit7S0lIxLlzhz9gzJSUmcO3eOjIxLXLt2jdLSUoxGo3mkWnZyxQ63fK76b61Wi16vx8nJiVatWtGx4x34+/sTEBhIj+496HjHHTg5OVV8BQm4AOwA1iNGeFllz21oNNrTKxDrCowAZgLDAQ/LH/Pz8zl9+jSHD//IsZ9+4sKFVPLy8jAYhHTUaDTmP9Zqm/oHwM7OjpYtW9Klix93DxjA4MFD6NmzJx4eHhVvzQf2AvHA9wixbm5jY6DBn1qBWBfgAeBJYChitQsI0XvmzGn27tnD/v0/kJqaSnFxMSBGWkN3mKIoZsng4uKCn58fQ4fex/DgYHr06FlRlF8H9gPLgX8DxeoPDd3uBn2aBbl2iPl1HjASC2Jzc3PZv/8Hvt22jePHj5Gfl4dC45B6u/eQZRkN4NGyJf37383YceMYOvQ+PD09LS+9DuwGPkHM0wZoWJIb5EkVRm0P4HlgChai+PLlbHbs2ME3mzdx5swZbty4YVOk3u7dZFnG3t6eHj16MOHhRxg9ejTt23ewvCwf+Br4CDijFjbEu9X7EyzIdQVmAPMR+1gAcnJ+ZevWraxbu5aUlHNIkoROV9etbONAbXu3bv5MmjyZ8ePH07p1G8tLzgNLgBWY5uf6Jrlea7cgtxfwf8BDCI0SpaWl7Nq1k7jYWJKSEpEkqTp70SYBWZbR6XQEBvYiNCyMUaPut1x93wC2AH8DEqF+Sa6Xmi2ItUeI4jcAP7Xw1KmTLF+2jL1793D9+vUmO2KrgiRJtGjRguHDg3nyqafo3buP5c+pwNsI0X0D6odoq9doQW5r4C/A04AzQEFBAWtWryYuLobs7OwmMcdaoz9kWaZDhw6EhoYzddo03N3d1Z9LgC+A94AcsD7JVq3NgtzuwL+AseozkpOT+HDJEv7zn31/KHFcXahi+09/GsYL8+cTEBBo7jbgW+DPCL23VUm2Wk0W5A5FrBb7AhgMBrZt3cpHHy0hPT39DyuOqwtJkvDx8eH55+czbvx47Ozs1J9OIHYX+8F6JFulFgtyHwI+RBwOUFBQwPJlXxAfH0dJScn/3KitDLIs4+zszOMzQ3nqqactRfZF4AXEIswqJNe5BhO5GmAqsBhxDktmZib/eO9dtm//FkVR/vBzbU2h9smYMWN55S+v4u3trf50GVgArAGUuvZbne62IHcGgtzWACkp51j45pscPvxj86itArIsM3jwEBa+9RbduvmrxTkIkldQR5JrfacFudMQc25rgMRTp/jrX18nKSnxf36+rS4kSSIwsBfvvLOIXr17q8U5iDl5NXUguVZ3Wcy5E4BlQDuAEwkJvPraXzh39mwzuTWEJEn4d+/Ou39/j779+qnFV4CngG+gdnNyje+wIPc+IA5hXcGpU6d45eU/c+5cM7m1hSRJ+Pt35x///Be9fxvJaUAo8APUnOTaEtwDITp6A5w7d46XXlpAclJSM7l1hCRJBAQG8v77i/H3N8/JpxBT4ZmaElyjFZCJ3DbAB5jIzczIYOGbbzSTayXodDqSk5JY+Ob/kZmRoRb3RvR5m0qsSytFtQk2VewAvI44pKegoIB33/07R44cbibXitDpdBw5coR33/07BQUFavEDiL53qAnJ1SLYosJpwBOA1mAwsHTp53z33Y7mrVA9QKvV8t13O1i69HPVNEmL6PtpUKmd+O/rqcEz+yBOhZwAvvlmMyu+iq/2g2wFTam9iqKw4qt4vvlms1rkhOCgT3XrqJJgU4e4AQsxqSATExP5+KMPKS0tbTIaKkmSsLe3p0WLFkiS1NjNqRY0Gg2lpaV8/NGHJCYmqsWdEVy4Vedjrc4I1iCW6WNAWDguWfwBly5dahKiWTWU69evP//81/t89PGn3HvvULRarfk3W4ZWq+XSpUssWfwB+fn5avEYIIxq7IJue4HpCwkAtgK+siyzdOnnfLhksc2LOvUctlOnTkwLmc5jj02kTRthPlNQUMDWLVuIj48jNfW8VU1u6wsajYYX5i/gmWeeVQdWGjAeSL5d2yv9xWLVvBQIB0hIOM4zTz/Nr79etenRK0kS7u7ujB03jtDQMEsd701IT09n5coVbNq4gZycHJs2QJBlmTZt2rL0iy/o16+/WhwDPAOUV9buqggegzjVcC0pKWH+/OfZtXOnzW6JZFnGzs6OIUOCiJg9myFDgtDr9VXek5BwnOioKPbt22vTJkSSJDHq/vtZsuQjnJ2dQRjuTQW214hgi4XVOuB+gA3r1/P6669iNBob+z0ray/duvkTGhrG2HFjcXV1q1EdpaWl7N61i5iYKJKSkpBl2SallF6vZ9Gid3ls4kS1aCcwCSi8Fcm3I3gaQgQ4XLlyhSdmzyLJxrRV6jzbtl07Jj42kWkh0+nYsWOd6rx69Qrr1q5lzZrVZGRk2JzYFidPgXwZGU27du0AyhFT6OpbtfN3n6iJXA/EKYYDiD3v6dOnbYpc1WJx/EMPsWzZcl7688t1Jhegbdt2zJk7j+VfRjF5yhRcXFxsalul0+k4ffq05d7YAcGVx60Wvr+j3HTRFMRJkUNmZgbhYaGkpqbahMhSjdf69OnLrIgIhg8PrszFs84wGAwcOLCfqMhIjh49gtFotJk+8PPzIyY2Dm/vjiBGcSjwdcVRfKvWOpsudgDYtm0bFy5caPQXM297fHx4+eVX+GLZMkaPHlNv5ILwKhw+PJjPPv+c/3vjTfz8/JBludG3iFqtlgsXLrBt2za1yAHBmXPFa2+i29TwEcBmwOXq1auEh83kzJkzjUqwJEl4eLRk/PjxzJwZil/XrnWvtBZIT09jxYoVbN60sdG3VbIs06NHD2Ji42nbti0ID8aHge8t21SRNR0wGeHWyb59ezl//nyjkSvLMnq9nuHBwXz62We88ebCRiMXwMfHl1dffY3Ply7jwQdH4+Dg0Gjzs1ar5fz58+zbt1ctckFwd9NCybxJNI1eX0xHgaWlpWzbthWDwdDgiytVBPbo0ZPQsDDGjBmDi4trHWu1DrRaLQMGDOCuu+5i166dxERHk5zcONsqg8HAtm1bGTduvOr79ADgqyjKBXUUV9QCjERErCEpKYlTJ082eKMVRaFt27ZMnDSZaVOn4fWbOalNwcnJiQkTHmbw4CGsW/s1a9asJjs7u0FFtlar5dTJkyQlJTFo0CAQ3I1ChJQQ11hc74gIeKJVFIXvv99FYWFhg88xWq2WefOeY8GCF22WXEu0a9eOufOe46U/v2zppdAg0Gg0FBYW8v33u1Spp0W4C5lXnlowi0Q/YADAtdxcDh440CgLCI1Gg2fr1jalXKgOPD1bo2mEtYpGo+HggQNcy81ViwYAfubAMhbX3ouwtyIpKYmLFy822uJKkW37pOqWbVYUaITtk1ar5eLFiyQlJalFbRBcit9Nf+sR0W20iqJw6NBBrl+/3shd1ozq4vr16xw6dNBSTA/HtL5SCW6HyRuwuLiI48ePNXabm1FDHD9+jOIic9SmvpicEbQWds53AKSlpXPxYlqja66aUX0IMZ1GWnq6WnQH0ENRFPMI7o9p5fXzz8kUFhY06CKnovqvqS2wRJtBVQxaxtRqmGdrKCws4Oefk9UiRwSnaBGyuo/asOSkpAY781U7wsvLi3bt2pkChioUFhU2WOdYC0VFRSiKjCRJuLm50blzZ4AGI9poNJKclGQ5UPoAej0iDG83ENqrlJSUBhlBQr/swdhx43n88ZlIRiOxcTF8t2MHH3/0Ifn5+Tz66GMVA4vZHPLz89nyzWZiYmNQFIU/DRtGRMRsOne+k82bN/F1A50razQaUlJSKC0tVa09ugEtNYqi9EEE0myfnp7O9JCpZGVl1dscLEkSDg4O3HPPvcyKiGDQoMFmsxqD4QYH9h8gMnI5x44dIyAggIjZTxAcPKJeT41qgxs3brB//w9Efvklx479hJ+fH2HhsxgzZiyurr+pVc+cOUNcbAw7dmynsLCw3tS+qiRcuWoNPj4+IBzJR2sURXkUWAk4Hj78I7MjZlF2/bo6qVi1ARqNhp497yI0LIwHHxyNi4vLLa9VrR5jY6PJysoiOHgEsyJm06dPH5tY/P2cnExMTDQ7dmzHxcWFKVOnMXXqVLy8bq15MxgMHDx4kOioSI4cOYzBYLD+eygKji1aEBkVzeDBQ0BEvJ2uR2iwHAAyLmVQVlZmVXLVedbb25vJk6cwefIU2nfocNt73N3dmfH449z3pz+xcuUK1q9by48//sikSZMImT6DTp06Wbdzqons7Gy+/noNa1avoqioiAdHjyY8fBZ33RVwW/FrZ2fHsGHD6NevL9u2bSM+Lo6UlHPWNdfVaCgrKyPjUoaIri049dMjYjJrADIzM6waSlBdcDw4ejShoeH07NmzRvd36tSJV175Cw888ABRkZHExcWye/cuwsLCGf/QBMvgJfWKkuJivvvuO6KjI0lJSWHAgIHMnv0E9w4dir29fbXrcXNzJyRkOkOH3sfqVSvZsGE9V69etdr8LEkSmZlmj0QN0EW3cOHCZzHFjvxm82aSkpLqLD7Uc9yge+7htddeJywsnPbt29eqLo1GQ4cOXowYMYKuXbtx+uefWb9+PQkJCbRs1RJv7471Nq9JksSRI4dZtOgdYmKicXFx4fkX5rPgxRfp0aNnrZ/r7u5O0D33MGDAQEqviwDn5eXlVun3zp07M3LkKLXoqkZRlASgr9Fo5Nlnnmbnzn9XaUtcGRRZBo2Gbv7+zJwZytix43Bzq5n5alXIyclh44b1fPVVPHl5eTeJSWviQmoq8fFxbN68CTs7OyZNmkxIyHTusPL0UFZWxt69e4iJjuLEiRN1ChJnNBq5//4H+HzpFyqHJzSKoqQBPqWlpYSHh3L0yJEaf5nqPNu+fXsmTpzElKnTrGLheDucP3+e+LhYtmz5hhYtWjB1WghTpkylQxXze1XIzc1l08YNxH8VT86vvzJy5ChmRUTQu3efet3miOduZOXKFaSnp9VqfpYkiYEDBxETG6caAKRrFEXJBVoVFOQzY3oIycnJNSJYkiRcXFwYNep+wsJnERgY2GCaKKPRyNEjR4iMXM7Bgwfp4ufHrFkRjB49Rt0LVhvl5eXs3buHyC+Xk5iYSO8+fZgd8QTDhg/DwaHhtmgXLqTyVXw8W7ZsIS/vWo25CAgIYMWKVbiLdAPXNIqilAItcn79lWkhU7lQA/NYnU5H//53M2tWBEPvuw8HB4cG6whLFBcX892O7URFR5Gelsa/3v+AsWPH1aiOI0cO89STT+Dh0ZLQ0FAmPPwIrVq1apT3kSSJo0ePEB0VxYED+825KaqCLMt08fNj1ao1qqPddT2m+M1GyYixmhWJyiS69+jBkiUf0q6WCyhrwcXFhYmTJtO9R08iZoVT9NupSrVRWlqKVqvjb++8w9Ch9zXq++h0OoYMCSIgIIA5zz7L/v0/VHskGw0GJMmsarbXYjoylGW5RnpTRQGnFk64uVt3EVUXtGrVEgcHezS1Cv+lwc5Oj2cr21GNOju74OrqUiM77Ao81lWdojSGEUPlrVHq1h5FAdmGXqiu7wNi9MoAWo3WJtSAzagbtFotWo2ZR1mLKZy8Tq9Hr29Yq8BmWB96vR263/QYN7SY0rDZ2dnh4ODQ6H43zag9FEXBwcHB0ny3TIspvYu9vT3Ozk61rrwZtgFnZydL/XiRFrgGYgS7ubk3j+AmDEVRcHNztxzB17SIkLXo9Xqbt55oRtXw9PS0PEu4osWU91aj0dCuffsmafDWDIFbcHhJi0gEoQB4e3vbVJiGZtQMOp3OMveDAvyiReTTKwfo2LFjo+mTm1F3ODg4WJ7ilQOpWuAXoBDAy8sbDw+P5oVWE4SiKHh4eFjahRUCF7RABpAF0Lp1azp08GoSMRybcTNE+jwvWrdurRZlARnqNuk8gLOzM127dm0ewU0QiqLQtWtXy3Pw85i2SUbgJIhVWGBgYPNCqwlCpLO9ydjiJGBUtdLHMS207goIwM3NrWmP4lrs9Jry5lAoONy4K8Bsl1aO4BStifHTQCaAr29nfHx9m/A8XDvHL1mRMe0WmxxkWcbH1xdf385qUSZwWqPRmL0LLyOyX+Lm5mYZrrZJYt3ar9mz53tu3LhR5bWSJHH48GHiYmMxGo3WduhoMPTr19/SgvUEglMzwQZgH6YUakFBQTbnC1Q9CEvEhIQEXnj+OV577VWSk5MrvfrChVT+9re3mfPs0/zwn32N3fhaw9HRkaCgIHX+VRBcGuDmMEr7Efny2vTu1RsfHx9SUlJuawQg21gsDWEBoaDVaikpKWHD+nUcOniASZMmM2XqNLy8vADIzclh46aNrFq50myiqtXpzPfbCjQaTZXTjSzL+Pj40LvXTTkP96v/0QG89dZbLFy4sBCRrs7PycmJi7/8wokTJyolWKPRUFJSjMFoxNfX9yaPusZAamoqXy5fxvHjx82pW7VaLUVFRfz001F+PHQIvV7PxV9+YdGiv7Fhw3ry8vLMbiMajQaj0Uh+fj53dLyDtm3bNqpe/tq1XFatWsW3326jrKys0rbIssxDD01g9Jgx6jX7gc81Go0RLBaPpi93LiKTqPbQoYM89eSTlJaWVFq5OSJdz56EhYbz4OjKPQbrC6qhujAYT6/0g1SjwWu1WsrKyirdCkqSRPv2HZg0aRJTGyEQW3l5Ofv27SU6KpKEhASzV+atoCgKTk7OLFu+nKCge0CYXz0PfKreU5Fgf2A30LG4uJinnpzNoUOHqtwXy5KEvdnndzaDBg2qtftLTTpi7949REdFceJEQp1cPn73PqZO7d69O6Gh4YweM6beJZSiKCQlJRITHc2uXTspKSmpst8lSSIoKIhlyyPVgZWBiFZ47ncEmx6iB5ZjSsKxcuUKFr75RrXnJUmS8GjZkvHjxvP4zFC61kPgUEVRSExMJCY6it27d1WrI2oLWZaxt7dnSFAQEbNmM3jIkHr5cLOyMlmzejXr1q3l8uXL1fY21Gg0LHzrbaZPn6EWxQBPquIZbh1O+AFgA+CcnZ1NWOhMzp9PqfboEAsVmU6dfAgJmc6jj0201I/WCZmZmaxZvYp169Zx5Ur1O6KuUMNNjBk7jtCZoXTz9697pQiPjB3btxMbG8PZs2fMC8TqQJZlunbtRmxcvOqPVQI8Bvzbsk9uRbArsBEYqSgKn336CUuWLK5xR6rRV/v06UN4eATBI0bQokWL2nVEURHbd2wnLjaGs2fPioY38ALIMg/T1GkhTJw4kTZt2taqLtUtNSoykoMHD3Djxo0aTy+KojB//gLmzJ2n9sVu4FGgqFKC1RuBGUA0YJeenk54WChpabULbShJEk5OTgwfHkz4rAj69u1b7XqMRqO5Iw4dOlirjrA21A+3V6/ehIfPYuSoUTX6cFNTU/kqPo6tW7eQl5dXq+lFlmV8fTsTExunxuMwALOAFRU//MoIboXIdhakKAqfffYpSxZ/UOtRo379bdq04ZFHHiVk+gy1YbfpiPPEx8WxdetW8vNr1xH1CTUpyLBhw5k1K4J+/fvf9uPLzc1l06aNrFxRe/dQy/6cv+BF5syZq9ZxCJEF7VqVBKsVIHIALAfss7KymB0RztmzZ+s0glRFgp+fH4/PDGX8+IfwEG6ON3XExo0bWGXa9thy2jn1w23dujUPP/wI02c8jq+v703XlJeXs2/vXqKiIzmRUPfVvizLdO/encioGFVxcwORdSW2pnmTPIBNwDCA1atWsXDhG1YJYa+GeBgwcCARs2Zz79ChKIrC3j17iI6OrLOne0ND/XC7dOnCjBkzmTBhAu4eHiQlJhIdE8XuXdZb7et0OhYufJtpISFq0T7gESC/2gSrjUYkeVgBOBcWFvL8c3PZt2+fVYO0uLq6MnLkKIxGI3v2fF+v2576hvnDHTCQLn5+7N61k+zsbKsGWRk2bBgfffyperBQglgvba5t7kJHIAoIAThy+DBz5jxDXl6e1cSmZVxHW8syVluosTet+T6KotCyZUs++2wpgwYPVotXARFAWWXPqVQGmm4oA95HaEi4e8AAQqbPsCoJGo0GnU6HTqf7Q5AL4kO19vtoNBpCps/g7gED1KIM4ANuQy5UL0H0SeBjwKjT6QgNDWPQoEE2le7tjw5Jkhg0aBChoWHq9GVEcHKiqntvS7DF+WIkYiONp6cnCxa8RIcOHZqw1UfTgbCW7MD8BS9ZuhbtRnCiVCUlqhzBpgryEHnjMwD69e/PnLnzmt1N6xmqO+icufPo399sZZOB4CKvOlNATfYhR4FFmGT+xIniOK0Z9YupU6cxceIkyzXRIgQX1UK1CLYQ1XFAPKA4ODgwd95zBAePaJ6P6wGSJBEcPIK5855T3YkURN/HUQ3RrKJGyzyTOPZC7I2HA6RdvMiCBfM5cSKhye5fbQ2SJNG3bz8WL16Cb2ezpeRexJ43qyar8xqpikwVZwELgDMAvp0789bbb9Otm3/zSLYCJEmiWzd/3nr7bUtyzyD6vEbkQg0JtsBJ4AVMttSBgb14551FdL7zzmaS6wBJkuh85528884iAgN7qcWZiL4+WZs6a0ywxRe0E3gJyAUYMHAgixa920xyLaGSu2jRuwwYOFAtzkX08U6o3Rl4rUawxYPWAq8A+QBDhgzhvff+STf/ZnFdE0iSRDd/f957758MGTJELc5H9O1aqL2BQ62Pa0wPlIFY4C+mBjFw4EDef/8D+vbt10xyNaAuqN5//wMG/jZy8xF9GgvIdVF51llZalpZ64Aw4B+AJ8DFixf5+6J32LPne/GgP4ie2VpQFUTBwSN47fW/mvMsIcTyKwhypbr2m1V63SIp4mTE4YQ3iMP7Tz/5mK+/XkNZWVmTOd+tb8iyjKOjI1OmTGXuvOcsVZCZiDl3LXUcuSqsNqwsVJb3A0uAniAsGtavX8dnn35Cdnb2//xeWZIkOnTowJy585g4cZJlTJTTwHzqsKC6FawqNyukVfsACFYLjh37iSWLF3PkyGGza8n/EtR3HjRoMPMXLODuuwdY/rwHeBELR3xrweq9bEGyF/AGwrbLESA3N4f4uDhWrlpJbk7O/8xoliQJz9atmR4ynZmhoXh6mu3EyxCqx7cxxUmx9odfL8PIguQWCIJfw5S+VpZljh49yrIvlnLo0MH6yQJmI1D9oYKC7uGpp59h4MCBlu96Cfg7guDrUD8L0XqTkxWOEQcBbyLmZx1AYWEh327bxldfxXPu3NkaWfXbOlTfJn//7jz++EzGjrspvZCEmGffAo6ohfU1ZdX7RGhBdEtgNjAP02gGyMrKYtPGDWzcuIG0tLQmTbRKrK+vL48++hiPPPqY2SfZhEvAJ4jD+jyo/+1jg6x0KozmfgjF+cOAOeZPeno6W7duYdvWLVy4cAGj0dgkjPBUo0G9Xk+XLl0YN/4hxo9/qKJhfwmwGVgMJKiFDfFuDdp7FkQ7Ag8iRvNQwBz/Njs7m717vufbb78lKSmRoqIiszO3LUG1nHR1dSUwsBdjx45lePCIiom5DAiH7E+A7zAFX2/Ij7bBh0eF0ewBTECI7kFYEF1cXExi4il2797NoUMHSU9LE5lRaRzzWkvzXkdHR3x8fQkKuoeRI0fSq1fvio7vBsT8Ggl8g0mNCw2v0Ws0+VeB6FbAGGAmEISF6Aa4evUqiYmn+PHQIRISjpOWlkZRUZEpKo6mXghXCVUUBb1ej6urK76+vvTr158hQUH06tWbtm1/511YgvATige2Ywq2Do2nqm30Ca4C0S7APQiV50jgd5kgCwoKSEu7yM/JP5OcnMT58ylkZWWRn19AeXkZkiSZ6zR7uVcRgsLyep1Oh4ODIx4e7nh5edG1azcCAgK5K+AufH07V5bS9r8IS8e1wEGg2NzBjbyGaHSCVVQgWodIXD0SGAv0B27pjFtcXExOTg5ZWVlkZFwiMzOTK5cvk5ubS2FhASUlpZSXl2M0Gm7yoNDrRRISZ2cn3Nzc8fT0pF379nh7e9Ox4x14eYnAnreJOXIVEU3uWwS5qYgtkOhYG1kc2kYrLHALM9wWQDfgXoQjXB+gIybtWGUwGAwYDAZu3LiBwWDAaDSK9LeARqtFr9djZ2eHvb09dnZ2lnkOKkMZwmT1JMLh6wCQgklJYe5QGyHW3J7GbsDtcAuy9UAHxEFGP6A3gnwvwB2R1ryu76QgYj0WINSHKcApxPbmNJCN8Cwww9ZIvaltjd2A6qISA3s9YoHWEbgTIdbvRChS2pl+c0VIAXt+M3CQEX611xFpha4hkpNcQgRITzX9nWH6zVjxwbZMqiX+H68l0eTNGAHPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTE1VDA1OjIyOjE5LTA0OjAwbp8GkgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0xNVQwNToyMjoxOS0wNDowMB/Cvi4AAAAASUVORK5CYII=",
          "universalLink": "https://link.zel.network",
          "deepLink": "zel:"
        }, {
          "name": "EasyPocket",
          "shortName": "EasyPocket",
          "color": "rgb(17, 93, 251)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://wallet.easypocket.app",
          "deepLink": "easypocket:"
        }, {
          "name": "SparkPoint Wallet",
          "shortName": "SparkPoint",
          "color": "rgb(20,67,95)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://sparkpoint.io",
          "deepLink": "sparkpoint:"
        }, {
          "name": "Flare Wallet",
          "shortName": "Flare",
          "color": "rgb(31, 36, 59)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://flarewallet.io",
          "deepLink": "flare:"
        }, {
          "name": "ONTO",
          "shortName": "ONTO",
          "color": "rgb(255, 255, 255)",
          "logo": "data:image/png;base64,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",
          "universalLink": "https://onto.app",
          "deepLink": "ontoprovider:"
        }, {
          "name": "SafePal Wallet",
          "shortName": "SafePal",
          "color": "rgb(0, 128, 255)",
          "logo": "data:image/png;base64,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",
          "universalLink": "link.safepal.io",
          "deepLink": "safepalwallet:"
        }];

        function ConnectButton(props) {
          return React.createElement("a", {
            className: "walletconnect-connect__button",
            href: props.href,
            id: WALLETCONNECT_CONNECT_BUTTON_ID + "-" + props.name,
            onClick: props.onClick,
            rel: "noopener noreferrer",
            style: {
              backgroundColor: props.color
            },
            target: "_blank"
          }, props.name);
        }

        var CARET_SVG_URL = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";

        function WalletButton(props) {
          var color = props.color;
          var href = props.href;
          var name = props.name;
          var logo = props.logo;
          var onClick = props.onClick;
          return React.createElement("a", {
            className: "walletconnect-modal__base__row",
            href: href,
            onClick: onClick,
            rel: "noopener noreferrer",
            target: "_blank"
          }, React.createElement("h3", {
            className: "walletconnect-modal__base__row__h3"
          }, name), React.createElement("div", {
            className: "walletconnect-modal__base__row__right"
          }, React.createElement("div", {
            className: "walletconnect-modal__base__row__right__app-icon",
            style: {
              background: "url('" + logo + "') " + color,
              backgroundSize: "100%"
            }
          }), React.createElement("img", {
            src: CARET_SVG_URL,
            className: "walletconnect-modal__base__row__right__caret"
          })));
        }

        function WalletIcon(props) {
          var color = props.color;
          var href = props.href;
          var name = props.name;
          var logo = props.logo;
          var onClick = props.onClick;
          return React.createElement("a", {
            className: "walletconnect-connect__button__icon_anchor",
            href: href,
            onClick: onClick,
            rel: "noopener noreferrer",
            target: "_blank"
          }, React.createElement("div", {
            className: "walletconnect-connect__button__icon",
            style: {
              background: "url('" + logo + "') " + color,
              backgroundSize: "100%"
            }
          }), React.createElement("div", {
            style: {
              fontSize: (name.length > 8 ? 2.5 : 2.7) + "vw"
            },
            className: "walletconnect-connect__button__text"
          }, name));
        }

        function formatIOSMobile(uri, entry) {
          var encodedUri = encodeURIComponent(uri);
          return entry.universalLink ? entry.universalLink + "/wc?uri=" + encodedUri : entry.deepLink ? "" + entry.deepLink + (entry.deepLink.endsWith(":") ? "//" : "/") + "wc?uri=" + encodedUri : "";
        }

        function saveMobileLinkInfo(data) {
          var focusUri = data.href.split("?")[0];
          utils.setLocal(utils.mobileLinkChoiceKey, Object.assign({}, data, {
            href: focusUri
          }));
        }

        function getMobileRegistryEntry(name) {
          return MOBILE_REGISTRY.filter(function (entry) {
            return entry.name.toLowerCase().includes(name);
          })[0];
        }

        function getMobileLinkRegistry(qrcodeModalOptions) {
          var links = MOBILE_REGISTRY;

          if (qrcodeModalOptions && qrcodeModalOptions.mobileLinks && qrcodeModalOptions.mobileLinks.length) {
            links = qrcodeModalOptions.mobileLinks.map(function (name) {
              return getMobileRegistryEntry(name);
            });
          }

          return links;
        }

        function MobileLinkDisplay(props) {
          var ios = utils.isIOS();
          var links = getMobileLinkRegistry(props.qrcodeModalOptions);
          var ref = React.useState(false);
          var showMore = ref[0];
          var setShowMore = ref[1];
          var grid = links.length > 5;
          var displayShowMore = links.length > 12;
          return React.createElement("div", null, React.createElement("p", {
            id: WALLETCONNECT_CTA_TEXT_ID,
            className: "walletconnect-qrcode__text"
          }, ios ? props.text.choose_preferred_wallet : props.text.connect_mobile_wallet), React.createElement("div", {
            className: "walletconnect-connect__buttons__wrapper" + (!ios ? "__android" : grid ? "__wrap" : "")
          }, ios ? links.map(function (entry, idx) {
            var color = entry.color;
            var name = entry.name;
            var shortName = entry.shortName;
            var logo = entry.logo;
            var href = formatIOSMobile(props.uri, entry);
            var handleClickIOS = React.useCallback(function () {
              saveMobileLinkInfo({
                name: name,
                href: href
              });
            }, []);

            if (idx > 11 && !showMore) {
              return;
            }

            return !grid ? React.createElement(WalletButton, {
              color: color,
              href: href,
              name: name,
              logo: logo,
              onClick: handleClickIOS
            }) : React.createElement(WalletIcon, {
              color: color,
              href: href,
              name: shortName,
              logo: logo,
              onClick: handleClickIOS
            });
          }) : React.createElement(ConnectButton, {
            name: props.text.connect,
            color: DEFAULT_BUTTON_COLOR,
            href: props.uri,
            onClick: React.useCallback(function () {
              saveMobileLinkInfo({
                name: "Unknown",
                href: props.uri
              });
            }, [])
          })), !!(ios && displayShowMore) && React.createElement("div", {
            className: "walletconnect-modal__footer"
          }, React.createElement("a", {
            onClick: function onClick() {
              return setShowMore(!showMore);
            }
          }, showMore ? props.text.show_less : props.text.show_more)));
        }

        function Notification(props) {
          var show = !!props.message.trim();
          return React.createElement("div", {
            className: "walletconnect-qrcode__notification" + (show ? " notification__show" : "")
          }, props.message);
        }

        var formatQRCodeImage = function formatQRCodeImage(data) {
          try {
            var result = "";
            return Promise.resolve(QRCode.toString(data, {
              margin: 0,
              type: "svg"
            })).then(function (dataString) {
              if (typeof dataString === "string") {
                result = dataString.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"");
              }

              return result;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        };

        function QRCodeDisplay(props) {
          var ref = React.useState("");
          var notification = ref[0];
          var setNotification = ref[1];
          var ref$1 = React.useState("");
          var svg = ref$1[0];
          var setSvg = ref$1[1];
          React.useEffect(function () {
            try {
              return Promise.resolve(formatQRCodeImage(props.uri)).then(function (_formatQRCodeImage) {
                setSvg(_formatQRCodeImage);
              });
            } catch (e) {
              Promise.reject(e);
            }
          }, []);

          var copyToClipboard = function copyToClipboard() {
            var tmp = document.createElement("input");
            tmp.value = props.uri;
            document.body.appendChild(tmp);
            tmp.select();
            document.execCommand("copy");
            tmp.remove();
            setNotification(props.text.copied_to_clipboard);
            setInterval(function () {
              return setNotification("");
            }, 1200);
          };

          return React.createElement("div", null, React.createElement("p", {
            id: WALLETCONNECT_CTA_TEXT_ID,
            className: "walletconnect-qrcode__text"
          }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: svg
            }
          }), React.createElement("div", {
            className: "walletconnect-modal__footer"
          }, React.createElement("a", {
            onClick: copyToClipboard
          }, props.text.copy_to_clipboard)), React.createElement(Notification, {
            message: notification
          }));
        }

        function Modal(props) {
          var mobile = utils.isMobile();
          var ref = React.useState(!mobile);
          var displayQRCode = ref[0];
          var setDisplayQRCode = ref[1];
          var displayProps = {
            text: props.text,
            uri: props.uri,
            qrcodeModalOptions: props.qrcodeModalOptions
          };
          return React.createElement("div", {
            id: WALLETCONNECT_MODAL_ID,
            className: "walletconnect-qrcode__base animated fadeIn"
          }, React.createElement("div", {
            className: "walletconnect-modal__base"
          }, React.createElement(Header, {
            onClose: props.onClose
          }), mobile && React.createElement("div", {
            className: "walletconnect-modal__mobile__toggle" + (displayQRCode ? " right__selected" : "")
          }, React.createElement("div", {
            className: "walletconnect-modal__mobile__toggle_selector"
          }), React.createElement("a", {
            onClick: function onClick() {
              return setDisplayQRCode(false);
            }
          }, props.text.mobile), React.createElement("a", {
            onClick: function onClick() {
              return setDisplayQRCode(true);
            }
          }, props.text.qrcode)), React.createElement("div", null, displayQRCode ? React.createElement(QRCodeDisplay, Object.assign({}, displayProps)) : React.createElement(MobileLinkDisplay, Object.assign({}, displayProps)))));
        }

        var de = {
          choose_preferred_wallet: "Wähle bevorzugte Wallet",
          connect_mobile_wallet: "Verbinde mit Mobile Wallet",
          scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
          connect: "Verbinden",
          qrcode: "QR-Code",
          mobile: "Mobile",
          copy_to_clipboard: "In die Zwischenablage kopieren",
          copied_to_clipboard: "In die Zwischenablage kopiert!",
          show_more: "Zeig mehr",
          show_less: "Zeige weniger"
        };
        var en = {
          choose_preferred_wallet: "Choose your preferred wallet",
          connect_mobile_wallet: "Connect to Mobile Wallet",
          scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
          connect: "Connect",
          qrcode: "QR Code",
          mobile: "Mobile",
          copy_to_clipboard: "Copy to clipboard",
          copied_to_clipboard: "Copied to clipboard!",
          show_more: "Show More",
          show_less: "Show Less"
        };
        var es = {
          choose_preferred_wallet: "Elige tu billetera preferida",
          connect_mobile_wallet: "Conectar a billetera móvil",
          scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
          connect: "Conectar",
          qrcode: "Código QR",
          mobile: "Móvil",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          show_more: "Mostrar más",
          show_less: "Mostrar menos"
        };
        var fr = {
          choose_preferred_wallet: "Choisissez votre portefeuille préféré",
          connect_mobile_wallet: "Se connecter au portefeuille mobile",
          scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
          connect: "Se connecter",
          qrcode: "QR Code",
          mobile: "Mobile",
          copy_to_clipboard: "Copier",
          copied_to_clipboard: "Copié!",
          show_more: "Montre plus",
          show_less: "Montre moins"
        };
        var ko = {
          choose_preferred_wallet: "원하는 지갑을 선택하세요",
          connect_mobile_wallet: "모바일 지갑과 연결",
          scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
          connect: "연결",
          qrcode: "QR 코드",
          mobile: "모바일",
          copy_to_clipboard: "클립보드에 복사",
          copied_to_clipboard: "클립보드에 복사되었습니다!",
          show_more: "자세히 보기",
          show_less: "간략히 보기"
        };
        var pt = {
          choose_preferred_wallet: "Escolha sua carteira preferida",
          connect_mobile_wallet: "Conectar-se à carteira móvel",
          scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
          connect: "Conectar",
          qrcode: "Código QR",
          mobile: "Móvel",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          show_more: "Mostrar mais",
          show_less: "Mostrar menos"
        };
        var zh = {
          choose_preferred_wallet: "选择你的钱包",
          connect_mobile_wallet: "连接至移动端钱包",
          scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
          connect: "连接",
          qrcode: "二维码",
          mobile: "移动",
          copy_to_clipboard: "复制到剪贴板",
          copied_to_clipboard: "复制到剪贴板成功！",
          show_more: "显示更多",
          show_less: "显示较少"
        };
        var fa = {
          choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
          connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
          scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
          connect: "اتصال",
          qrcode: "کد QR",
          mobile: "سیار",
          copy_to_clipboard: "کپی به کلیپ بورد",
          copied_to_clipboard: "در کلیپ بورد کپی شد!",
          show_more: "بیشتر نشان بده، اطلاعات بیشتر",
          show_less: "نمایش کمتر"
        };
        var languages = {
          de: de,
          en: en,
          es: es,
          fr: fr,
          ko: ko,
          pt: pt,
          zh: zh,
          fa: fa
        };

        function injectStyleSheet() {
          var doc = utils.getDocumentOrThrow();
          var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);

          if (prev) {
            doc.head.removeChild(prev);
          }

          var style = doc.createElement("style");
          style.setAttribute("id", WALLETCONNECT_STYLE_ID);
          style.innerText = WALLETCONNECT_STYLE_SHEET;
          doc.head.appendChild(style);
        }

        function renderWrapper() {
          var doc = utils.getDocumentOrThrow();
          var wrapper = doc.createElement("div");
          wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
          doc.body.appendChild(wrapper);
          return wrapper;
        }

        function triggerCloseAnimation() {
          var doc = utils.getDocumentOrThrow();
          var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);

          if (modal) {
            modal.className = modal.className.replace("fadeIn", "fadeOut");
            setTimeout(function () {
              var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);

              if (wrapper) {
                doc.body.removeChild(wrapper);
              }
            }, ANIMATION_DURATION);
          }
        }

        function getWrappedCallback(cb) {
          return function () {
            triggerCloseAnimation();

            if (cb) {
              cb();
            }
          };
        }

        function getText() {
          var lang = utils.getNavigatorOrThrow().language.split("-")[0] || "en";
          return languages[lang] || languages["en"];
        }

        function open$1(uri, cb, qrcodeModalOptions) {
          injectStyleSheet();
          var wrapper = renderWrapper();
          React.render(React.createElement(Modal, {
            text: getText(),
            uri: uri,
            onClose: getWrappedCallback(cb),
            qrcodeModalOptions: qrcodeModalOptions
          }), wrapper);
        }

        function close$1() {
          triggerCloseAnimation();
        }

        var isNode = function isNode() {
          return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
        };

        function open$2(uri, cb, qrcodeModalOptions) {
          console.log(uri);

          if (isNode()) {
            open(uri);
          } else {
            open$1(uri, cb, qrcodeModalOptions);
          }
        }

        function close$2() {
          if (isNode()) ;else {
            close$1();
          }
        }

        var index = {
          open: open$2,
          close: close$2
        };
        module.exports = index; //# sourceMappingURL=index.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "e/Dd":
    /*!***********************************************!*\
      !*** ./node_modules/qrcode/lib/core/utils.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function eDd(module, exports) {
      var toSJISFunction;
      var CODEWORDS_COUNT = [0, // Not used
      26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
      /**
       * Returns the QR Code size for the specified version
       *
       * @param  {Number} version QR Code version
       * @return {Number}         size of QR code
       */

      exports.getSymbolSize = function getSymbolSize(version) {
        if (!version) throw new Error('"version" cannot be null or undefined');
        if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
        return version * 4 + 17;
      };
      /**
       * Returns the total number of codewords used to store data and EC information.
       *
       * @param  {Number} version QR Code version
       * @return {Number}         Data length in bits
       */


      exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
        return CODEWORDS_COUNT[version];
      };
      /**
       * Encode data with Bose-Chaudhuri-Hocquenghem
       *
       * @param  {Number} data Value to encode
       * @return {Number}      Encoded value
       */


      exports.getBCHDigit = function (data) {
        var digit = 0;

        while (data !== 0) {
          digit++;
          data >>>= 1;
        }

        return digit;
      };

      exports.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== 'function') {
          throw new Error('"toSJISFunc" is not a valid function.');
        }

        toSJISFunction = f;
      };

      exports.isKanjiModeEnabled = function () {
        return typeof toSJISFunction !== 'undefined';
      };

      exports.toSJIS = function toSJIS(kanji) {
        return toSJISFunction(kanji);
      };
      /***/

    },

    /***/
    "e6BP":
    /*!****************************************************!*\
      !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function e6BP(module, exports) {
      function BitBuffer() {
        this.buffer = [];
        this.length = 0;
      }

      BitBuffer.prototype = {
        get: function get(index) {
          var bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function put(num, length) {
          for (var i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function getLengthInBits() {
          return this.length;
        },
        putBit: function putBit(bit) {
          var bufIndex = Math.floor(this.length / 8);

          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }

          if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
          }

          this.length++;
        }
      };
      module.exports = BitBuffer;
      /***/
    },

    /***/
    "eQOe":
    /*!******************************************************!*\
      !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function eQOe(module, exports) {
      /**
       * Data mask pattern reference
       * @type {Object}
       */
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      /**
       * Weighted penalty scores for the undesirable features
       * @type {Object}
       */

      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      };
      /**
       * Check if mask pattern value is valid
       *
       * @param  {Number}  mask    Mask pattern
       * @return {Boolean}         true if valid, false otherwise
       */

      exports.isValid = function isValid(mask) {
        return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
      };
      /**
       * Returns mask pattern from a value.
       * If value is not valid, returns undefined
       *
       * @param  {Number|String} value        Mask pattern value
       * @return {Number}                     Valid mask pattern or undefined
       */


      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : undefined;
      };
      /**
      * Find adjacent modules in row/column with the same color
      * and assign a penalty value.
      *
      * Points: N1 + i
      * i is the amount by which the number of adjacent modules of the same color exceeds 5
      */


      exports.getPenaltyN1 = function getPenaltyN1(data) {
        var size = data.size;
        var points = 0;
        var sameCountCol = 0;
        var sameCountRow = 0;
        var lastCol = null;
        var lastRow = null;

        for (var row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;

          for (var col = 0; col < size; col++) {
            var module = data.get(row, col);

            if (module === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module;
              sameCountCol = 1;
            }

            module = data.get(col, row);

            if (module === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module;
              sameCountRow = 1;
            }
          }

          if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        }

        return points;
      };
      /**
       * Find 2x2 blocks with the same color and assign a penalty value
       *
       * Points: N2 * (m - 1) * (n - 1)
       */


      exports.getPenaltyN2 = function getPenaltyN2(data) {
        var size = data.size;
        var points = 0;

        for (var row = 0; row < size - 1; row++) {
          for (var col = 0; col < size - 1; col++) {
            var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
          }
        }

        return points * PenaltyScores.N2;
      };
      /**
       * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
       * preceded or followed by light area 4 modules wide
       *
       * Points: N3 * number of pattern found
       */


      exports.getPenaltyN3 = function getPenaltyN3(data) {
        var size = data.size;
        var points = 0;
        var bitsCol = 0;
        var bitsRow = 0;

        for (var row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;

          for (var col = 0; col < size; col++) {
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
          }
        }

        return points * PenaltyScores.N3;
      };
      /**
       * Calculate proportion of dark modules in entire symbol
       *
       * Points: N4 * k
       *
       * k is the rating of the deviation of the proportion of dark modules
       * in the symbol from 50% in steps of 5%
       */


      exports.getPenaltyN4 = function getPenaltyN4(data) {
        var darkCount = 0;
        var modulesCount = data.data.length;

        for (var i = 0; i < modulesCount; i++) {
          darkCount += data.data[i];
        }

        var k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
        return k * PenaltyScores.N4;
      };
      /**
       * Return mask value at given position
       *
       * @param  {Number} maskPattern Pattern reference value
       * @param  {Number} i           Row
       * @param  {Number} j           Column
       * @return {Boolean}            Mask value
       */


      function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;

          case exports.Patterns.PATTERN001:
            return i % 2 === 0;

          case exports.Patterns.PATTERN010:
            return j % 3 === 0;

          case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;

          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;

          case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;

          case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;

          case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;

          default:
            throw new Error('bad maskPattern:' + maskPattern);
        }
      }
      /**
       * Apply a mask pattern to a BitMatrix
       *
       * @param  {Number}    pattern Pattern reference number
       * @param  {BitMatrix} data    BitMatrix data
       */


      exports.applyMask = function applyMask(pattern, data) {
        var size = data.size;

        for (var col = 0; col < size; col++) {
          for (var row = 0; row < size; row++) {
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };
      /**
       * Returns the best mask pattern for data
       *
       * @param  {BitMatrix} data
       * @return {Number} Mask pattern reference number
       */


      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        var numPatterns = Object.keys(exports.Patterns).length;
        var bestPattern = 0;
        var lowerPenalty = Infinity;

        for (var p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data); // Calculate penalty

          var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data); // Undo previously applied mask

          exports.applyMask(p, data);

          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }

        return bestPattern;
      };
      /***/

    },

    /***/
    "ekOh":
    /*!****************************************************************!*\
      !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function ekOh(module, exports) {
      exports.L = {
        bit: 1
      };
      exports.M = {
        bit: 0
      };
      exports.Q = {
        bit: 3
      };
      exports.H = {
        bit: 2
      };

      function fromString(string) {
        if (typeof string !== 'string') {
          throw new Error('Param is not a string');
        }

        var lcStr = string.toLowerCase();

        switch (lcStr) {
          case 'l':
          case 'low':
            return exports.L;

          case 'm':
          case 'medium':
            return exports.M;

          case 'q':
          case 'quartile':
            return exports.Q;

          case 'h':
          case 'high':
            return exports.H;

          default:
            throw new Error('Unknown EC Level: ' + string);
        }
      }

      exports.isValid = function isValid(level) {
        return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
      };

      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }

        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
      /***/

    },

    /***/
    "ghe6":
    /*!************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/helpers/index.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function ghe6(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./encoding */
      "TRRE"));

      __export(__webpack_require__(
      /*! ./util */
      "adDM"));

      __export(__webpack_require__(
      /*! ./validators */
      "58VP")); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "i1L0":
    /*!****************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/encoding.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function i1L0(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var encUtils = tslib_1.__importStar(__webpack_require__(
      /*! enc-utils */
      "/jfU"));

      function convertArrayBufferToBuffer(arrBuf) {
        return encUtils.arrayToBuffer(new Uint8Array(arrBuf));
      }

      exports.convertArrayBufferToBuffer = convertArrayBufferToBuffer;

      function convertArrayBufferToUtf8(arrBuf) {
        return encUtils.arrayToUtf8(new Uint8Array(arrBuf));
      }

      exports.convertArrayBufferToUtf8 = convertArrayBufferToUtf8;

      function convertArrayBufferToHex(arrBuf, noPrefix) {
        return encUtils.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
      }

      exports.convertArrayBufferToHex = convertArrayBufferToHex;

      function convertArrayBufferToNumber(arrBuf) {
        return encUtils.arrayToNumber(new Uint8Array(arrBuf));
      }

      exports.convertArrayBufferToNumber = convertArrayBufferToNumber;

      function concatArrayBuffers() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key5 = 0; _key5 < _len3; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return encUtils.hexToArray(args.map(function (b) {
          return encUtils.arrayToHex(new Uint8Array(b));
        }).join("")).buffer;
      }

      exports.concatArrayBuffers = concatArrayBuffers;

      function convertBufferToArrayBuffer(buf) {
        return encUtils.bufferToArray(buf).buffer;
      }

      exports.convertBufferToArrayBuffer = convertBufferToArrayBuffer;

      function convertBufferToUtf8(buf) {
        return encUtils.bufferToUtf8(buf);
      }

      exports.convertBufferToUtf8 = convertBufferToUtf8;

      function convertBufferToHex(buf, noPrefix) {
        return encUtils.bufferToHex(buf, !noPrefix);
      }

      exports.convertBufferToHex = convertBufferToHex;

      function convertBufferToNumber(buf) {
        return encUtils.bufferToNumber(buf);
      }

      exports.convertBufferToNumber = convertBufferToNumber;

      function concatBuffers() {
        return encUtils.concatBuffers.apply(encUtils, arguments);
      }

      exports.concatBuffers = concatBuffers;

      function convertUtf8ToArrayBuffer(utf8) {
        return encUtils.utf8ToArray(utf8).buffer;
      }

      exports.convertUtf8ToArrayBuffer = convertUtf8ToArrayBuffer;

      function convertUtf8ToBuffer(utf8) {
        return encUtils.utf8ToBuffer(utf8);
      }

      exports.convertUtf8ToBuffer = convertUtf8ToBuffer;

      function convertUtf8ToHex(utf8, noPrefix) {
        return encUtils.utf8ToHex(utf8, !noPrefix);
      }

      exports.convertUtf8ToHex = convertUtf8ToHex;

      function convertUtf8ToNumber(utf8) {
        return encUtils.utf8ToNumber(utf8);
      }

      exports.convertUtf8ToNumber = convertUtf8ToNumber;

      function convertHexToBuffer(hex) {
        return encUtils.hexToBuffer(hex);
      }

      exports.convertHexToBuffer = convertHexToBuffer;

      function convertHexToArrayBuffer(hex) {
        return encUtils.hexToArray(hex).buffer;
      }

      exports.convertHexToArrayBuffer = convertHexToArrayBuffer;

      function convertHexToUtf8(hex) {
        return encUtils.hexToUtf8(hex);
      }

      exports.convertHexToUtf8 = convertHexToUtf8;

      function convertHexToNumber(hex) {
        return encUtils.hexToNumber(hex);
      }

      exports.convertHexToNumber = convertHexToNumber;

      function convertNumberToBuffer(num) {
        return encUtils.numberToBuffer(num);
      }

      exports.convertNumberToBuffer = convertNumberToBuffer;

      function convertNumberToArrayBuffer(num) {
        return encUtils.numberToArray(num).buffer;
      }

      exports.convertNumberToArrayBuffer = convertNumberToArrayBuffer;

      function convertNumberToUtf8(num) {
        return encUtils.numberToUtf8(num);
      }

      exports.convertNumberToUtf8 = convertNumberToUtf8;

      function convertNumberToHex(num, noPrefix) {
        return encUtils.numberToHex(num, !noPrefix);
      }

      exports.convertNumberToHex = convertNumberToHex; //# sourceMappingURL=encoding.js.map

      /***/
    },

    /***/
    "jSPq":
    /*!**************************************************************!*\
      !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function jSPq(module, exports, __webpack_require__) {
      var BufferUtil = __webpack_require__(
      /*! ../utils/buffer */
      "Wogr");

      var Polynomial = __webpack_require__(
      /*! ./polynomial */
      "JzKC");

      var Buffer = __webpack_require__(
      /*! buffer */
      "tjlA").Buffer;

      function ReedSolomonEncoder(degree) {
        this.genPoly = undefined;
        this.degree = degree;
        if (this.degree) this.initialize(this.degree);
      }
      /**
       * Initialize the encoder.
       * The input param should correspond to the number of error correction codewords.
       *
       * @param  {Number} degree
       */


      ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
        // create an irreducible generator polynomial
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      /**
       * Encodes a chunk of data
       *
       * @param  {Buffer} data Buffer containing input data
       * @return {Buffer}      Buffer containing encoded data
       */


      ReedSolomonEncoder.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error('Encoder not initialized');
        } // Calculate EC for this data block
        // extends data size to data+genPoly size


        var pad = BufferUtil.alloc(this.degree);
        var paddedData = Buffer.concat([data, pad], data.length + this.degree); // The error correction codewords are the remainder after dividing the data codewords
        // by a generator polynomial

        var remainder = Polynomial.mod(paddedData, this.genPoly); // return EC data blocks (last n byte, where n is the degree of genPoly)
        // If coefficients number in remainder are less than genPoly degree,
        // pad with 0s to the left to reach the needed number of coefficients

        var start = this.degree - remainder.length;

        if (start > 0) {
          var buff = BufferUtil.alloc(this.degree);
          remainder.copy(buff, start);
          return buff;
        }

        return remainder;
      };

      module.exports = ReedSolomonEncoder;
      /***/
    },

    /***/
    "kk9/":
    /*!********************************************************!*\
      !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function kk9(module, exports, __webpack_require__) {
      var getSymbolSize = __webpack_require__(
      /*! ./utils */
      "e/Dd").getSymbolSize;

      var FINDER_PATTERN_SIZE = 7;
      /**
       * Returns an array containing the positions of each finder pattern.
       * Each array's element represent the top-left point of the pattern as (x, y) coordinates
       *
       * @param  {Number} version QR Code version
       * @return {Array}          Array of coordinates
       */

      exports.getPositions = function getPositions(version) {
        var size = getSymbolSize(version);
        return [// top-left
        [0, 0], // top-right
        [size - FINDER_PATTERN_SIZE, 0], // bottom-left
        [0, size - FINDER_PATTERN_SIZE]];
      };
      /***/

    },

    /***/
    "lYJp":
    /*!*****************************************************!*\
      !*** ./node_modules/qrcode/lib/core/format-info.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function lYJp(module, exports, __webpack_require__) {
      var Utils = __webpack_require__(
      /*! ./utils */
      "e/Dd");

      var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      var G15_BCH = Utils.getBCHDigit(G15);
      /**
       * Returns format information with relative error correction bits
       *
       * The format information is a 15-bit sequence containing 5 data bits,
       * with 10 error correction bits calculated using the (15, 5) BCH code.
       *
       * @param  {Number} errorCorrectionLevel Error correction level
       * @param  {Number} mask                 Mask pattern
       * @return {Number}                      Encoded format information bits
       */

      exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
        var data = errorCorrectionLevel.bit << 3 | mask;
        var d = data << 10;

        while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
        } // xor final data with mask pattern in order to ensure that
        // no combination of Error Correction Level and data mask pattern
        // will result in an all-zero data string


        return (data << 10 | d) ^ G15_MASK;
      };
      /***/

    },

    /***/
    "nSd/":
    /*!*************************************************************!*\
      !*** ./node_modules/eth-json-rpc-middleware/block-cache.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function nSd(module, exports, __webpack_require__) {
      var cacheUtils = __webpack_require__(
      /*! ./cache-utils.js */
      "DeLK");

      var createAsyncMiddleware = __webpack_require__(
      /*! json-rpc-engine/src/createAsyncMiddleware */
      "w92A"); // `<nil>` comes from https://github.com/ethereum/go-ethereum/issues/16925


      var emptyValues = [undefined, null, "<nil>"];
      module.exports = createBlockCacheMiddleware;

      function createBlockCacheMiddleware() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // validate options
        var blockTracker = opts.blockTracker;
        if (!blockTracker) throw new Error('createBlockCacheMiddleware - No BlockTracker specified'); // create caching strategies

        var blockCache = new BlockCacheStrategy();
        var strategies = {
          perma: blockCache,
          block: blockCache,
          fork: blockCache
        };
        return createAsyncMiddleware( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55(req, res, next) {
            var type, strategy, blockTag, requestedBlockNumber, latestBlockNumber, cacheResult;
            return regeneratorRuntime.wrap(function _callee55$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    if (!req.skipCache) {
                      _context55.next = 2;
                      break;
                    }

                    return _context55.abrupt("return", next());

                  case 2:
                    // check type and matching strategy
                    type = cacheUtils.cacheTypeForPayload(req);
                    strategy = strategies[type]; // If there's no strategy in place, pass it down the chain.

                    if (strategy) {
                      _context55.next = 6;
                      break;
                    }

                    return _context55.abrupt("return", next());

                  case 6:
                    if (strategy.canCacheRequest(req)) {
                      _context55.next = 8;
                      break;
                    }

                    return _context55.abrupt("return", next());

                  case 8:
                    // get block reference (number or keyword)
                    blockTag = cacheUtils.blockTagForPayload(req);
                    if (!blockTag) blockTag = 'latest'; // get exact block number

                    if (!(blockTag === 'earliest')) {
                      _context55.next = 14;
                      break;
                    }

                    // this just exists for symmetry with "latest"
                    requestedBlockNumber = '0x00';
                    _context55.next = 23;
                    break;

                  case 14:
                    if (!(blockTag === 'latest')) {
                      _context55.next = 22;
                      break;
                    }

                    _context55.next = 17;
                    return blockTracker.getLatestBlock();

                  case 17:
                    latestBlockNumber = _context55.sent;
                    // clear all cache before latest block
                    blockCache.clearBefore(latestBlockNumber);
                    requestedBlockNumber = latestBlockNumber;
                    _context55.next = 23;
                    break;

                  case 22:
                    // We have a hex number
                    requestedBlockNumber = blockTag;

                  case 23:
                    _context55.next = 25;
                    return strategy.get(req, requestedBlockNumber);

                  case 25:
                    cacheResult = _context55.sent;

                    if (!(cacheResult === undefined)) {
                      _context55.next = 33;
                      break;
                    }

                    _context55.next = 29;
                    return next();

                  case 29:
                    _context55.next = 31;
                    return strategy.set(req, requestedBlockNumber, res.result);

                  case 31:
                    _context55.next = 34;
                    break;

                  case 33:
                    // fill in result from cache
                    res.result = cacheResult;

                  case 34:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee55);
          }));

          return function (_x, _x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }());
      } //
      // Cache Strategies
      //


      var BlockCacheStrategy = /*#__PURE__*/function () {
        function BlockCacheStrategy() {
          _classCallCheck2(this, BlockCacheStrategy);

          this.cache = {};
        }

        _createClass(BlockCacheStrategy, [{
          key: "getBlockCacheForPayload",
          value: function getBlockCacheForPayload(payload, blockNumberHex) {
            var blockNumber = Number.parseInt(blockNumberHex, 16);
            var blockCache = this.cache[blockNumber]; // create new cache if necesary

            if (!blockCache) {
              var newCache = {};
              this.cache[blockNumber] = newCache;
              blockCache = newCache;
            }

            return blockCache;
          }
        }, {
          key: "get",
          value: function () {
            var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56(payload, requestedBlockNumber) {
              var blockCache, identifier, cached;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      // lookup block cache
                      blockCache = this.getBlockCacheForPayload(payload, requestedBlockNumber);

                      if (blockCache) {
                        _context56.next = 3;
                        break;
                      }

                      return _context56.abrupt("return");

                    case 3:
                      // lookup payload in block cache
                      identifier = cacheUtils.cacheIdentifierForPayload(payload, true);
                      cached = blockCache[identifier]; // may be undefined

                      return _context56.abrupt("return", cached);

                    case 6:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));

            function get(_x4, _x5) {
              return _get.apply(this, arguments);
            }

            return get;
          }()
        }, {
          key: "set",
          value: function () {
            var _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57(payload, requestedBlockNumber, result) {
              var canCache, blockCache, identifier;
              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      // check if we can cached this result
                      canCache = this.canCacheResult(payload, result);

                      if (canCache) {
                        _context57.next = 3;
                        break;
                      }

                      return _context57.abrupt("return");

                    case 3:
                      // set the value in the cache
                      blockCache = this.getBlockCacheForPayload(payload, requestedBlockNumber);
                      identifier = cacheUtils.cacheIdentifierForPayload(payload, true);
                      blockCache[identifier] = result;

                    case 6:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this);
            }));

            function set(_x6, _x7, _x8) {
              return _set.apply(this, arguments);
            }

            return set;
          }()
        }, {
          key: "canCacheRequest",
          value: function canCacheRequest(payload) {
            // check request method
            if (!cacheUtils.canCache(payload)) {
              return false;
            } // check blockTag


            var blockTag = cacheUtils.blockTagForPayload(payload);

            if (blockTag === 'pending') {
              return false;
            } // can be cached


            return true;
          }
        }, {
          key: "canCacheResult",
          value: function canCacheResult(payload, result) {
            // never cache empty values (e.g. undefined)
            if (emptyValues.includes(result)) return; // check if transactions have block reference before caching

            if (['eth_getTransactionByHash', 'eth_getTransactionReceipt'].includes(payload.method)) {
              if (!result || !result.blockHash || result.blockHash === '0x0000000000000000000000000000000000000000000000000000000000000000') {
                return false;
              }
            } // otherwise true


            return true;
          } // removes all block caches with block number lower than `oldBlockHex`

        }, {
          key: "clearBefore",
          value: function clearBefore(oldBlockHex) {
            var self = this;
            var oldBlockNumber = Number.parseInt(oldBlockHex, 16); // clear old caches

            Object.keys(self.cache).map(Number).filter(function (num) {
              return num < oldBlockNumber;
            }).forEach(function (num) {
              return delete self.cache[num];
            });
          }
        }]);

        return BlockCacheStrategy;
      }();
      /***/

    },

    /***/
    "nZSm":
    /*!***********************************************************!*\
      !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function nZSm(module, exports, __webpack_require__) {
      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");
      /**
       * Array of characters available in alphanumeric mode
       *
       * As per QR Code specification, to each character
       * is assigned a value from 0 to 44 which in this case coincides
       * with the array index
       *
       * @type {Array}
       */


      var ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];

      function AlphanumericData(data) {
        this.mode = Mode.ALPHANUMERIC;
        this.data = data;
      }

      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };

      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };

      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };

      AlphanumericData.prototype.write = function write(bitBuffer) {
        var i; // Input data characters are divided into groups of two characters
        // and encoded as 11-bit binary codes.

        for (i = 0; i + 2 <= this.data.length; i += 2) {
          // The character value of the first character is multiplied by 45
          var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45; // The character value of the second digit is added to the product

          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]); // The sum is then stored as 11-bit binary number

          bitBuffer.put(value, 11);
        } // If the number of input data characters is not a multiple of two,
        // the character value of the final character is encoded as a 6-bit binary number.


        if (this.data.length % 2) {
          bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };

      module.exports = AlphanumericData;
      /***/
    },

    /***/
    "oQv1":
    /*!*************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/local.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function oQv1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var misc_1 = __webpack_require__(
      /*! ./misc */
      "9y2/");

      var browser_1 = __webpack_require__(
      /*! ./browser */
      "+7Xm");

      function setLocal(key, data) {
        var raw = misc_1.safeJsonStringify(data);
        var local = browser_1.getLocalStorage();

        if (local) {
          local.setItem(key, raw);
        }
      }

      exports.setLocal = setLocal;

      function getLocal(key) {
        var data = null;
        var raw = null;
        var local = browser_1.getLocalStorage();

        if (local) {
          raw = local.getItem(key);
        }

        data = misc_1.safeJsonParse(raw);
        return data;
      }

      exports.getLocal = getLocal;

      function removeLocal(key) {
        var local = browser_1.getLocalStorage();

        if (local) {
          local.removeItem(key);
        }
      }

      exports.removeLocal = removeLocal; //# sourceMappingURL=local.js.map

      /***/
    },

    /***/
    "ocbH":
    /*!****************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/ecdsa.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function ocbH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var env_1 = __webpack_require__(
      /*! ./lib/env */
      "9A97");

      var secp256k1_1 = __webpack_require__(
      /*! ./lib/secp256k1 */
      "tRZw");

      var elliptic_1 = __webpack_require__(
      /*! ./lib/elliptic */
      "DxSV");

      var constants_1 = __webpack_require__(
      /*! ./constants */
      "FEYL");

      var helpers_1 = __webpack_require__(
      /*! ./helpers */
      "ghe6");

      function generatePrivate() {
        return env_1.isNode() ? secp256k1_1.secp256k1GeneratePrivate() : elliptic_1.ellipticGeneratePrivate();
      }

      exports.generatePrivate = generatePrivate;

      function checkPrivateKey(privateKey) {
        helpers_1.assert(privateKey.length === constants_1.KEY_LENGTH, constants_1.ERROR_BAD_PRIVATE_KEY);
        helpers_1.assert(helpers_1.isValidPrivateKey(privateKey), constants_1.ERROR_BAD_PRIVATE_KEY);
      }

      exports.checkPrivateKey = checkPrivateKey;

      function checkPublicKey(publicKey) {
        helpers_1.assert(publicKey.length === constants_1.PREFIXED_DECOMPRESSED_LENGTH || publicKey.length === constants_1.PREFIXED_KEY_LENGTH, constants_1.ERROR_BAD_PUBLIC_KEY);

        if (publicKey.length === constants_1.PREFIXED_DECOMPRESSED_LENGTH) {
          helpers_1.assert(publicKey[0] === 4, constants_1.ERROR_BAD_PUBLIC_KEY);
        }

        if (publicKey.length === constants_1.PREFIXED_KEY_LENGTH) {
          helpers_1.assert(publicKey[0] === 2 || publicKey[0] === 3, constants_1.ERROR_BAD_PUBLIC_KEY);
        }
      }

      exports.checkPublicKey = checkPublicKey;

      function checkMessage(msg) {
        helpers_1.assert(msg.length > 0, constants_1.ERROR_EMPTY_MESSAGE);
        helpers_1.assert(msg.length <= constants_1.MAX_MSG_LENGTH, constants_1.ERROR_MESSAGE_TOO_LONG);
      }

      exports.checkMessage = checkMessage;

      function compress(publicKey) {
        if (helpers_1.isCompressed(publicKey)) {
          return publicKey;
        }

        return env_1.isNode() ? secp256k1_1.secp256k1Compress(publicKey) : elliptic_1.ellipticCompress(publicKey);
      }

      exports.compress = compress;

      function decompress(publicKey) {
        if (helpers_1.isDecompressed(publicKey)) {
          return publicKey;
        }

        return env_1.isNode() ? secp256k1_1.secp256k1Decompress(publicKey) : elliptic_1.ellipticDecompress(publicKey);
      }

      exports.decompress = decompress;

      function getPublic(privateKey) {
        checkPrivateKey(privateKey);
        return env_1.isNode() ? secp256k1_1.secp256k1GetPublic(privateKey) : elliptic_1.ellipticGetPublic(privateKey);
      }

      exports.getPublic = getPublic;

      function getPublicCompressed(privateKey) {
        checkPrivateKey(privateKey);
        return env_1.isNode() ? secp256k1_1.secp256k1GetPublicCompressed(privateKey) : elliptic_1.ellipticGetPublicCompressed(privateKey);
      }

      exports.getPublicCompressed = getPublicCompressed;

      function generateKeyPair() {
        var privateKey = generatePrivate();
        var publicKey = getPublic(privateKey);
        return {
          privateKey: privateKey,
          publicKey: publicKey
        };
      }

      exports.generateKeyPair = generateKeyPair;

      function signatureExport(sig) {
        return env_1.isNode() ? secp256k1_1.secp256k1SignatureExport(sig) : elliptic_1.ellipticSignatureExport(sig);
      }

      exports.signatureExport = signatureExport;

      function sign(privateKey, msg) {
        var rsvSig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        checkPrivateKey(privateKey);
        checkMessage(msg);
        return env_1.isNode() ? secp256k1_1.secp256k1Sign(msg, privateKey, rsvSig) : elliptic_1.ellipticSign(msg, privateKey, rsvSig);
      }

      exports.sign = sign;

      function recover(msg, sig) {
        var compressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        checkMessage(msg);
        return env_1.isNode() ? secp256k1_1.secp256k1Recover(sig, msg, compressed) : elliptic_1.ellipticRecover(sig, msg, compressed);
      }

      exports.recover = recover;

      function verify(publicKey, msg, sig) {
        checkPublicKey(publicKey);
        checkMessage(msg);
        var sigGood = env_1.isNode() ? secp256k1_1.secp256k1Verify(sig, msg, publicKey) : elliptic_1.ellipticVerify(sig, msg, publicKey);

        if (sigGood) {
          return null;
        } else {
          throw new Error('Bad signature');
        }
      }

      exports.verify = verify; //# sourceMappingURL=ecdsa.js.map

      /***/
    },

    /***/
    "qXd6":
    /*!*********************************************!*\
      !*** ./node_modules/is-typedarray/index.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function qXd6(module, exports) {
      module.exports = isTypedArray;
      isTypedArray.strict = isStrictTypedArray;
      isTypedArray.loose = isLooseTypedArray;
      var toString = Object.prototype.toString;
      var names = {
        '[object Int8Array]': true,
        '[object Int16Array]': true,
        '[object Int32Array]': true,
        '[object Uint8Array]': true,
        '[object Uint8ClampedArray]': true,
        '[object Uint16Array]': true,
        '[object Uint32Array]': true,
        '[object Float32Array]': true,
        '[object Float64Array]': true
      };

      function isTypedArray(arr) {
        return isStrictTypedArray(arr) || isLooseTypedArray(arr);
      }

      function isStrictTypedArray(arr) {
        return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
      }

      function isLooseTypedArray(arr) {
        return names[toString.call(arr)];
      }
      /***/

    },

    /***/
    "qmMu":
    /*!************************************************!*\
      !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function qmMu(module, exports, __webpack_require__) {
      var BufferUtil = __webpack_require__(
      /*! ../utils/buffer */
      "Wogr");

      var Utils = __webpack_require__(
      /*! ./utils */
      "e/Dd");

      var ECLevel = __webpack_require__(
      /*! ./error-correction-level */
      "ekOh");

      var BitBuffer = __webpack_require__(
      /*! ./bit-buffer */
      "e6BP");

      var BitMatrix = __webpack_require__(
      /*! ./bit-matrix */
      "V35J");

      var AlignmentPattern = __webpack_require__(
      /*! ./alignment-pattern */
      "1sBl");

      var FinderPattern = __webpack_require__(
      /*! ./finder-pattern */
      "kk9/");

      var MaskPattern = __webpack_require__(
      /*! ./mask-pattern */
      "eQOe");

      var ECCode = __webpack_require__(
      /*! ./error-correction-code */
      "NPxG");

      var ReedSolomonEncoder = __webpack_require__(
      /*! ./reed-solomon-encoder */
      "jSPq");

      var Version = __webpack_require__(
      /*! ./version */
      "yKow");

      var FormatInfo = __webpack_require__(
      /*! ./format-info */
      "lYJp");

      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");

      var Segments = __webpack_require__(
      /*! ./segments */
      "vvrf");

      var isArray = __webpack_require__(
      /*! isarray */
      "7uVY");
      /**
       * QRCode for JavaScript
       *
       * modified by Ryan Day for nodejs support
       * Copyright (c) 2011 Ryan Day
       *
       * Licensed under the MIT license:
       *   http://www.opensource.org/licenses/mit-license.php
       *
      //---------------------------------------------------------------------
      // QRCode for JavaScript
      //
      // Copyright (c) 2009 Kazuhiko Arase
      //
      // URL: http://www.d-project.com/
      //
      // Licensed under the MIT license:
      //   http://www.opensource.org/licenses/mit-license.php
      //
      // The word "QR Code" is registered trademark of
      // DENSO WAVE INCORPORATED
      //   http://www.denso-wave.com/qrcode/faqpatent-e.html
      //
      //---------------------------------------------------------------------
      */

      /**
       * Add finder patterns bits to matrix
       *
       * @param  {BitMatrix} matrix  Modules matrix
       * @param  {Number}    version QR Code version
       */


      function setupFinderPattern(matrix, version) {
        var size = matrix.size;
        var pos = FinderPattern.getPositions(version);

        for (var i = 0; i < pos.length; i++) {
          var row = pos[i][0];
          var col = pos[i][1];

          for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r) continue;

            for (var c = -1; c <= 7; c++) {
              if (col + c <= -1 || size <= col + c) continue;

              if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      /**
       * Add timing pattern bits to matrix
       *
       * Note: this function must be called before {@link setupAlignmentPattern}
       *
       * @param  {BitMatrix} matrix Modules matrix
       */


      function setupTimingPattern(matrix) {
        var size = matrix.size;

        for (var r = 8; r < size - 8; r++) {
          var value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      /**
       * Add alignment patterns bits to matrix
       *
       * Note: this function must be called after {@link setupTimingPattern}
       *
       * @param  {BitMatrix} matrix  Modules matrix
       * @param  {Number}    version QR Code version
       */


      function setupAlignmentPattern(matrix, version) {
        var pos = AlignmentPattern.getPositions(version);

        for (var i = 0; i < pos.length; i++) {
          var row = pos[i][0];
          var col = pos[i][1];

          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                matrix.set(row + r, col + c, true, true);
              } else {
                matrix.set(row + r, col + c, false, true);
              }
            }
          }
        }
      }
      /**
       * Add version info bits to matrix
       *
       * @param  {BitMatrix} matrix  Modules matrix
       * @param  {Number}    version QR Code version
       */


      function setupVersionInfo(matrix, version) {
        var size = matrix.size;
        var bits = Version.getEncodedBits(version);
        var row, col, mod;

        for (var i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      /**
       * Add format info bits to matrix
       *
       * @param  {BitMatrix} matrix               Modules matrix
       * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
       * @param  {Number}    maskPattern          Mask pattern reference value
       */


      function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
        var size = matrix.size;
        var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
        var i, mod;

        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1; // vertical

          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size - 15 + i, 8, mod, true);
          } // horizontal


          if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        } // fixed module


        matrix.set(size - 8, 8, 1, true);
      }
      /**
       * Add encoded data bits to matrix
       *
       * @param  {BitMatrix} matrix Modules matrix
       * @param  {Buffer}    data   Data codewords
       */


      function setupData(matrix, data) {
        var size = matrix.size;
        var inc = -1;
        var row = size - 1;
        var bitIndex = 7;
        var byteIndex = 0;

        for (var col = size - 1; col > 0; col -= 2) {
          if (col === 6) col--;

          while (true) {
            for (var c = 0; c < 2; c++) {
              if (!matrix.isReserved(row, col - c)) {
                var dark = false;

                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }

                matrix.set(row, col - c, dark);
                bitIndex--;

                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }

            row += inc;

            if (row < 0 || size <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      /**
       * Create encoded codewords from data input
       *
       * @param  {Number}   version              QR Code version
       * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
       * @param  {ByteData} data                 Data input
       * @return {Buffer}                        Buffer containing encoded codewords
       */


      function createData(version, errorCorrectionLevel, segments) {
        // Prepare data buffer
        var buffer = new BitBuffer();
        segments.forEach(function (data) {
          // prefix data with mode indicator (4 bits)
          buffer.put(data.mode.bit, 4); // Prefix data with character count indicator.
          // The character count indicator is a string of bits that represents the
          // number of characters that are being encoded.
          // The character count indicator must be placed after the mode indicator
          // and must be a certain number of bits long, depending on the QR version
          // and data mode
          // @see {@link Mode.getCharCountIndicator}.

          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version)); // add binary data sequence to buffer

          data.write(buffer);
        }); // Calculate required number of bits

        var totalCodewords = Utils.getSymbolTotalCodewords(version);
        var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8; // Add a terminator.
        // If the bit string is shorter than the total number of required bits,
        // a terminator of up to four 0s must be added to the right side of the string.
        // If the bit string is more than four bits shorter than the required number of bits,
        // add four 0s to the end.

        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        } // If the bit string is fewer than four bits shorter, add only the number of 0s that
        // are needed to reach the required number of bits.
        // After adding the terminator, if the number of bits in the string is not a multiple of 8,
        // pad the string on the right with 0s to make the string's length a multiple of 8.


        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        } // Add pad bytes if the string is still shorter than the total number of required bits.
        // Extend the buffer to fill the data capacity of the symbol corresponding to
        // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
        // and 00010001 (0x11) alternately.


        var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;

        for (var i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 0x11 : 0xEC, 8);
        }

        return createCodewords(buffer, version, errorCorrectionLevel);
      }
      /**
       * Encode input data with Reed-Solomon and return codewords with
       * relative error correction bits
       *
       * @param  {BitBuffer} bitBuffer            Data to encode
       * @param  {Number}    version              QR Code version
       * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
       * @return {Buffer}                         Buffer containing encoded codewords
       */


      function createCodewords(bitBuffer, version, errorCorrectionLevel) {
        // Total codewords for this QR code version (Data + Error correction)
        var totalCodewords = Utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

        var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

        var dataTotalCodewords = totalCodewords - ecTotalCodewords; // Total number of blocks

        var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel); // Calculate how many blocks each group should contain

        var blocksInGroup2 = totalCodewords % ecTotalBlocks;
        var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1; // Number of EC codewords is the same for both groups

        var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1; // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount

        var rs = new ReedSolomonEncoder(ecCount);
        var offset = 0;
        var dcData = new Array(ecTotalBlocks);
        var ecData = new Array(ecTotalBlocks);
        var maxDataSize = 0;
        var buffer = BufferUtil.from(bitBuffer.buffer); // Divide the buffer into the required number of blocks

        for (var b = 0; b < ecTotalBlocks; b++) {
          var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2; // extract a block of data from buffer

          dcData[b] = buffer.slice(offset, offset + dataSize); // Calculate EC codewords for this data block

          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        } // Create final data
        // Interleave the data and error correction codewords from each block


        var data = BufferUtil.alloc(totalCodewords);
        var index = 0;
        var i, r; // Add data codewords

        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        } // Apped EC codewords


        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }

        return data;
      }
      /**
       * Build QR Code symbol
       *
       * @param  {String} data                 Input string
       * @param  {Number} version              QR Code version
       * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
       * @param  {MaskPattern} maskPattern     Mask pattern
       * @return {Object}                      Object containing symbol data
       */


      function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
        var segments;

        if (isArray(data)) {
          segments = Segments.fromArray(data);
        } else if (typeof data === 'string') {
          var estimatedVersion = version;

          if (!estimatedVersion) {
            var rawSegments = Segments.rawSplit(data); // Estimate best version that can contain raw splitted segments

            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
          } // Build optimized segments
          // If estimated version is undefined, try with the highest version


          segments = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error('Invalid data');
        } // Get the min version that can contain data


        var bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel); // If no version is found, data cannot be stored

        if (!bestVersion) {
          throw new Error('The amount of data is too big to be stored in a QR Code');
        } // If not specified, use min version as default


        if (!version) {
          version = bestVersion; // Check if the specified version can contain the data
        } else if (version < bestVersion) {
          throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
        }

        var dataBits = createData(version, errorCorrectionLevel, segments); // Allocate matrix buffer

        var moduleCount = Utils.getSymbolSize(version);
        var modules = new BitMatrix(moduleCount); // Add function modules

        setupFinderPattern(modules, version);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version); // Add temporary dummy bits for format info just to set them as reserved.
        // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
        // since the masking operation must be performed only on the encoding region.
        // These blocks will be replaced with correct values later in code.

        setupFormatInfo(modules, errorCorrectionLevel, 0);

        if (version >= 7) {
          setupVersionInfo(modules, version);
        } // Add data codewords


        setupData(modules, dataBits);

        if (isNaN(maskPattern)) {
          // Find best mask pattern
          maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
        } // Apply mask pattern


        MaskPattern.applyMask(maskPattern, modules); // Replace format info bits with correct values

        setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
        return {
          modules: modules,
          version: version,
          errorCorrectionLevel: errorCorrectionLevel,
          maskPattern: maskPattern,
          segments: segments
        };
      }
      /**
       * QR Code
       *
       * @param {String | Array} data                 Input data
       * @param {Object} options                      Optional configurations
       * @param {Number} options.version              QR Code version
       * @param {String} options.errorCorrectionLevel Error correction level
       * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
       */


      exports.create = function create(data, options) {
        if (typeof data === 'undefined' || data === '') {
          throw new Error('No input text');
        }

        var errorCorrectionLevel = ECLevel.M;
        var version;
        var mask;

        if (typeof options !== 'undefined') {
          // Use higher error correction level as default
          errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);

          if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
          }
        }

        return createSymbol(data, version, errorCorrectionLevel, mask);
      };
      /***/

    },

    /***/
    "rDya":
    /*!***************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/payload.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function rDya(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      function promisify(originalFn, thisArg) {
        var _this21 = this;

        var promisifiedFunction = function promisifiedFunction() {
          for (var _len4 = arguments.length, callArgs = new Array(_len4), _key6 = 0; _key6 < _len4; _key6++) {
            callArgs[_key6] = arguments[_key6];
          }

          return tslib_1.__awaiter(_this21, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
            return regeneratorRuntime.wrap(function _callee58$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    return _context58.abrupt("return", new Promise(function (resolve, reject) {
                      var callback = function callback(err, data) {
                        if (err === null || typeof err === "undefined") {
                          reject(err);
                        }

                        resolve(data);
                      };

                      originalFn.apply(thisArg, [].concat(callArgs, [callback]));
                    }));

                  case 1:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee58);
          }));
        };

        return promisifiedFunction;
      }

      exports.promisify = promisify;

      function formatRpcError(error) {
        var message = error.message || "Failed or Rejected Request";
        var code = -32000;

        if (error && !error.code) {
          switch (message) {
            case "Parse error":
              code = -32700;
              break;

            case "Invalid request":
              code = -32600;
              break;

            case "Method not found":
              code = -32601;
              break;

            case "Invalid params":
              code = -32602;
              break;

            case "Internal error":
              code = -32603;
              break;

            default:
              code = -32000;
              break;
          }
        }

        var result = {
          code: code,
          message: message
        };
        return result;
      }

      exports.formatRpcError = formatRpcError; //# sourceMappingURL=payload.js.map

      /***/
    },

    /***/
    "tRZw":
    /*!******************************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/lib/secp256k1/index.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function tRZw(module, exports, __webpack_require__) {
      "use strict";

      var __importStar = this && this.__importStar || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _secp256k1 = __importStar(__webpack_require__(
      /*! secp256k1 */
      "26sY"));

      var random_1 = __webpack_require__(
      /*! ../../random */
      "Yp4/");

      var constants_1 = __webpack_require__(
      /*! ../../constants */
      "FEYL");

      var helpers_1 = __webpack_require__(
      /*! ../../helpers */
      "ghe6");

      exports.secp256k1 = _secp256k1;

      function secp256k1Compress(publicKey) {
        publicKey = helpers_1.sanitizePublicKey(publicKey);
        return exports.secp256k1.publicKeyConvert(publicKey, true);
      }

      exports.secp256k1Compress = secp256k1Compress;

      function secp256k1Decompress(publicKey) {
        publicKey = helpers_1.sanitizePublicKey(publicKey);
        return exports.secp256k1.publicKeyConvert(publicKey, false);
      }

      exports.secp256k1Decompress = secp256k1Decompress;

      function secp256k1GeneratePrivate() {
        var privateKey = random_1.randomBytes(constants_1.KEY_LENGTH);

        while (!secp256k1VerifyPrivateKey(privateKey)) {
          privateKey = random_1.randomBytes(constants_1.KEY_LENGTH);
        }

        return privateKey;
      }

      exports.secp256k1GeneratePrivate = secp256k1GeneratePrivate;

      function secp256k1VerifyPrivateKey(privateKey) {
        return exports.secp256k1.privateKeyVerify(privateKey);
      }

      exports.secp256k1VerifyPrivateKey = secp256k1VerifyPrivateKey;

      function secp256k1GetPublic(privateKey) {
        var result = exports.secp256k1.publicKeyCreate(privateKey, false);
        return result;
      }

      exports.secp256k1GetPublic = secp256k1GetPublic;

      function secp256k1GetPublicCompressed(privateKey) {
        var result = exports.secp256k1.publicKeyCreate(privateKey, true);
        return result;
      }

      exports.secp256k1GetPublicCompressed = secp256k1GetPublicCompressed;

      function secp256k1SignatureExport(sig) {
        return exports.secp256k1.signatureExport(sig);
      }

      exports.secp256k1SignatureExport = secp256k1SignatureExport;

      function secp256k1SignatureImport(sig) {
        return exports.secp256k1.signatureImport(sig);
      }

      exports.secp256k1SignatureImport = secp256k1SignatureImport;

      function secp256k1Sign(msg, privateKey) {
        var rsvSig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var _exports$secp256k1$si = exports.secp256k1.sign(msg, privateKey),
            signature = _exports$secp256k1$si.signature,
            recovery = _exports$secp256k1$si.recovery;

        return rsvSig ? helpers_1.concatBuffers(signature, helpers_1.exportRecoveryParam(recovery)) : secp256k1SignatureExport(signature);
      }

      exports.secp256k1Sign = secp256k1Sign;

      function secp256k1Recover(sig, msg) {
        var compressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (helpers_1.isValidDERSignature(sig)) {
          throw new Error('Cannot recover from DER signatures');
        }

        var _helpers_1$sanitizeRS = helpers_1.sanitizeRSVSignature(sig),
            signature = _helpers_1$sanitizeRS.signature,
            recovery = _helpers_1$sanitizeRS.recovery;

        return exports.secp256k1.recover(msg, signature, recovery, compressed);
      }

      exports.secp256k1Recover = secp256k1Recover;

      function secp256k1Verify(sig, msg, publicKey) {
        if (helpers_1.isValidDERSignature(sig)) {
          sig = secp256k1SignatureImport(sig);
        }

        sig = helpers_1.sanitizeRSVSignature(sig).signature;
        return exports.secp256k1.verify(msg, sig, publicKey);
      }

      exports.secp256k1Verify = secp256k1Verify;

      function secp256k1Derive(publicKey, privateKey, compressed) {
        var result = exports.secp256k1.ecdhUnsafe(publicKey, privateKey, compressed);
        return helpers_1.trimLeft(result, constants_1.KEY_LENGTH);
      }

      exports.secp256k1Derive = secp256k1Derive; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "u/Db":
    /*!**********************************************!*\
      !*** ./node_modules/qrcode/lib/core/mode.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function uDb(module, exports, __webpack_require__) {
      var VersionCheck = __webpack_require__(
      /*! ./version-check */
      "J6Nv");

      var Regex = __webpack_require__(
      /*! ./regex */
      "BCVQ");
      /**
       * Numeric mode encodes data from the decimal digit set (0 - 9)
       * (byte values 30HEX to 39HEX).
       * Normally, 3 data characters are represented by 10 bits.
       *
       * @type {Object}
       */


      exports.NUMERIC = {
        id: 'Numeric',
        bit: 1 << 0,
        ccBits: [10, 12, 14]
      };
      /**
       * Alphanumeric mode encodes data from a set of 45 characters,
       * i.e. 10 numeric digits (0 - 9),
       *      26 alphabetic characters (A - Z),
       *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
       * Normally, two input characters are represented by 11 bits.
       *
       * @type {Object}
       */

      exports.ALPHANUMERIC = {
        id: 'Alphanumeric',
        bit: 1 << 1,
        ccBits: [9, 11, 13]
      };
      /**
       * In byte mode, data is encoded at 8 bits per character.
       *
       * @type {Object}
       */

      exports.BYTE = {
        id: 'Byte',
        bit: 1 << 2,
        ccBits: [8, 16, 16]
      };
      /**
       * The Kanji mode efficiently encodes Kanji characters in accordance with
       * the Shift JIS system based on JIS X 0208.
       * The Shift JIS values are shifted from the JIS X 0208 values.
       * JIS X 0208 gives details of the shift coded representation.
       * Each two-byte character value is compacted to a 13-bit binary codeword.
       *
       * @type {Object}
       */

      exports.KANJI = {
        id: 'Kanji',
        bit: 1 << 3,
        ccBits: [8, 10, 12]
      };
      /**
       * Mixed mode will contain a sequences of data in a combination of any of
       * the modes described above
       *
       * @type {Object}
       */

      exports.MIXED = {
        bit: -1
      };
      /**
       * Returns the number of bits needed to store the data length
       * according to QR Code specifications.
       *
       * @param  {Mode}   mode    Data mode
       * @param  {Number} version QR Code version
       * @return {Number}         Number of bits
       */

      exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);

        if (!VersionCheck.isValid(version)) {
          throw new Error('Invalid version: ' + version);
        }

        if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
        return mode.ccBits[2];
      };
      /**
       * Returns the most efficient mode to store the specified data
       *
       * @param  {String} dataStr Input data string
       * @return {Mode}           Best mode
       */


      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (Regex.testNumeric(dataStr)) return exports.NUMERIC;else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (Regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
      };
      /**
       * Return mode name as string
       *
       * @param {Mode} mode Mode object
       * @returns {String}  Mode name
       */


      exports.toString = function toString(mode) {
        if (mode && mode.id) return mode.id;
        throw new Error('Invalid mode');
      };
      /**
       * Check if input param is a valid mode object
       *
       * @param   {Mode}    mode Mode object
       * @returns {Boolean} True if valid mode, false otherwise
       */


      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };
      /**
       * Get mode object from its name
       *
       * @param   {String} string Mode name
       * @returns {Mode}          Mode object
       */


      function fromString(string) {
        if (typeof string !== 'string') {
          throw new Error('Param is not a string');
        }

        var lcStr = string.toLowerCase();

        switch (lcStr) {
          case 'numeric':
            return exports.NUMERIC;

          case 'alphanumeric':
            return exports.ALPHANUMERIC;

          case 'kanji':
            return exports.KANJI;

          case 'byte':
            return exports.BYTE;

          default:
            throw new Error('Unknown mode: ' + string);
        }
      }
      /**
       * Returns mode from a value.
       * If value is not a valid mode, returns defaultValue
       *
       * @param  {Mode|String} value        Encoding mode
       * @param  {Mode}        defaultValue Fallback value
       * @return {Mode}                     Encoding mode
       */


      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }

        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
      /***/

    },

    /***/
    "vKgB":
    /*!******************************************************************!*\
      !*** ./node_modules/@walletconnect/iso-crypto/dist/cjs/index.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function vKgB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var eccryptoJS = tslib_1.__importStar(__webpack_require__(
      /*! eccrypto-js */
      "RMmr"));

      var utils_1 = __webpack_require__(
      /*! @walletconnect/utils */
      "xI+a");

      function generateKey(length) {
        return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
          var _length, buffer, result;

          return regeneratorRuntime.wrap(function _callee59$(_context59) {
            while (1) {
              switch (_context59.prev = _context59.next) {
                case 0:
                  _length = (length || 256) / 8;
                  buffer = eccryptoJS.randomBytes(_length);
                  result = utils_1.convertBufferToArrayBuffer(buffer);
                  return _context59.abrupt("return", result);

                case 4:
                case "end":
                  return _context59.stop();
              }
            }
          }, _callee59);
        }));
      }

      exports.generateKey = generateKey;

      function verifyHmac(payload, key) {
        return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
          var cipherText, iv, hmac, hmacHex, unsigned, chmac, chmacHex;
          return regeneratorRuntime.wrap(function _callee60$(_context60) {
            while (1) {
              switch (_context60.prev = _context60.next) {
                case 0:
                  cipherText = utils_1.convertHexToBuffer(payload.data);
                  iv = utils_1.convertHexToBuffer(payload.iv);
                  hmac = utils_1.convertHexToBuffer(payload.hmac);
                  hmacHex = utils_1.convertBufferToHex(hmac, true);
                  unsigned = utils_1.concatBuffers(cipherText, iv);
                  _context60.next = 7;
                  return eccryptoJS.hmacSha256Sign(key, unsigned);

                case 7:
                  chmac = _context60.sent;
                  chmacHex = utils_1.convertBufferToHex(chmac, true);

                  if (!(utils_1.removeHexPrefix(hmacHex) === utils_1.removeHexPrefix(chmacHex))) {
                    _context60.next = 11;
                    break;
                  }

                  return _context60.abrupt("return", true);

                case 11:
                  return _context60.abrupt("return", false);

                case 12:
                case "end":
                  return _context60.stop();
              }
            }
          }, _callee60);
        }));
      }

      exports.verifyHmac = verifyHmac;

      function encrypt(data, key, providedIv) {
        return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
          var _key, ivArrayBuffer, iv, ivHex, contentString, content, cipherText, cipherTextHex, unsigned, hmac, hmacHex;

          return regeneratorRuntime.wrap(function _callee61$(_context61) {
            while (1) {
              switch (_context61.prev = _context61.next) {
                case 0:
                  _key = utils_1.convertArrayBufferToBuffer(key);
                  _context61.t0 = providedIv;

                  if (_context61.t0) {
                    _context61.next = 6;
                    break;
                  }

                  _context61.next = 5;
                  return generateKey(128);

                case 5:
                  _context61.t0 = _context61.sent;

                case 6:
                  ivArrayBuffer = _context61.t0;
                  iv = utils_1.convertArrayBufferToBuffer(ivArrayBuffer);
                  ivHex = utils_1.convertBufferToHex(iv, true);
                  contentString = JSON.stringify(data);
                  content = utils_1.convertUtf8ToBuffer(contentString);
                  _context61.next = 13;
                  return eccryptoJS.aesCbcEncrypt(iv, _key, content);

                case 13:
                  cipherText = _context61.sent;
                  cipherTextHex = utils_1.convertBufferToHex(cipherText, true);
                  unsigned = utils_1.concatBuffers(cipherText, iv);
                  _context61.next = 18;
                  return eccryptoJS.hmacSha256Sign(_key, unsigned);

                case 18:
                  hmac = _context61.sent;
                  hmacHex = utils_1.convertBufferToHex(hmac, true);
                  return _context61.abrupt("return", {
                    data: cipherTextHex,
                    hmac: hmacHex,
                    iv: ivHex
                  });

                case 21:
                case "end":
                  return _context61.stop();
              }
            }
          }, _callee61);
        }));
      }

      exports.encrypt = encrypt;

      function decrypt(payload, key) {
        return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
          var _key, verified, cipherText, iv, buffer, utf8, data;

          return regeneratorRuntime.wrap(function _callee62$(_context62) {
            while (1) {
              switch (_context62.prev = _context62.next) {
                case 0:
                  _key = utils_1.convertArrayBufferToBuffer(key);

                  if (_key) {
                    _context62.next = 3;
                    break;
                  }

                  throw new Error("Missing key: required for decryption");

                case 3:
                  _context62.next = 5;
                  return verifyHmac(payload, _key);

                case 5:
                  verified = _context62.sent;

                  if (verified) {
                    _context62.next = 8;
                    break;
                  }

                  return _context62.abrupt("return", null);

                case 8:
                  cipherText = utils_1.convertHexToBuffer(payload.data);
                  iv = utils_1.convertHexToBuffer(payload.iv);
                  _context62.next = 12;
                  return eccryptoJS.aesCbcDecrypt(iv, _key, cipherText);

                case 12:
                  buffer = _context62.sent;
                  utf8 = utils_1.convertBufferToUtf8(buffer);
                  _context62.prev = 14;
                  data = JSON.parse(utf8);
                  _context62.next = 21;
                  break;

                case 18:
                  _context62.prev = 18;
                  _context62.t0 = _context62["catch"](14);
                  return _context62.abrupt("return", null);

                case 21:
                  return _context62.abrupt("return", data);

                case 22:
                case "end":
                  return _context62.stop();
              }
            }
          }, _callee62, null, [[14, 18]]);
        }));
      }

      exports.decrypt = decrypt; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "vvrf":
    /*!**************************************************!*\
      !*** ./node_modules/qrcode/lib/core/segments.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function vvrf(module, exports, __webpack_require__) {
      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");

      var NumericData = __webpack_require__(
      /*! ./numeric-data */
      "3X7Y");

      var AlphanumericData = __webpack_require__(
      /*! ./alphanumeric-data */
      "nZSm");

      var ByteData = __webpack_require__(
      /*! ./byte-data */
      "AZa5");

      var KanjiData = __webpack_require__(
      /*! ./kanji-data */
      "Lzq4");

      var Regex = __webpack_require__(
      /*! ./regex */
      "BCVQ");

      var Utils = __webpack_require__(
      /*! ./utils */
      "e/Dd");

      var dijkstra = __webpack_require__(
      /*! dijkstrajs */
      "ELBg");
      /**
       * Returns UTF8 byte length
       *
       * @param  {String} str Input string
       * @return {Number}     Number of byte
       */


      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }
      /**
       * Get a list of segments of the specified mode
       * from a string
       *
       * @param  {Mode}   mode Segment mode
       * @param  {String} str  String to process
       * @return {Array}       Array of object with segments data
       */


      function getSegments(regex, mode, str) {
        var segments = [];
        var result;

        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode: mode,
            length: result[0].length
          });
        }

        return segments;
      }
      /**
       * Extracts a series of segments with the appropriate
       * modes from a string
       *
       * @param  {String} dataStr Input string
       * @return {Array}          Array of object with segments data
       */


      function getSegmentsFromString(dataStr) {
        var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
        var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
        var byteSegs;
        var kanjiSegs;

        if (Utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
          kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
          kanjiSegs = [];
        }

        var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs.sort(function (s1, s2) {
          return s1.index - s2.index;
        }).map(function (obj) {
          return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
          };
        });
      }
      /**
       * Returns how many bits are needed to encode a string of
       * specified length with the specified mode
       *
       * @param  {Number} length String length
       * @param  {Mode} mode     Segment mode
       * @return {Number}        Bit length
       */


      function getSegmentBitsLength(length, mode) {
        switch (mode) {
          case Mode.NUMERIC:
            return NumericData.getBitsLength(length);

          case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);

          case Mode.KANJI:
            return KanjiData.getBitsLength(length);

          case Mode.BYTE:
            return ByteData.getBitsLength(length);
        }
      }
      /**
       * Merges adjacent segments which have the same mode
       *
       * @param  {Array} segs Array of object with segments data
       * @return {Array}      Array of object with segments data
       */


      function mergeSegments(segs) {
        return segs.reduce(function (acc, curr) {
          var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;

          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }

          acc.push(curr);
          return acc;
        }, []);
      }
      /**
       * Generates a list of all possible nodes combination which
       * will be used to build a segments graph.
       *
       * Nodes are divided by groups. Each group will contain a list of all the modes
       * in which is possible to encode the given text.
       *
       * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
       * The group for '12345' will contain then 3 objects, one for each
       * possible encoding mode.
       *
       * Each node represents a possible segment.
       *
       * @param  {Array} segs Array of object with segments data
       * @return {Array}      Array of object with segments data
       */


      function buildNodes(segs) {
        var nodes = [];

        for (var i = 0; i < segs.length; i++) {
          var seg = segs[i];

          switch (seg.mode) {
            case Mode.NUMERIC:
              nodes.push([seg, {
                data: seg.data,
                mode: Mode.ALPHANUMERIC,
                length: seg.length
              }, {
                data: seg.data,
                mode: Mode.BYTE,
                length: seg.length
              }]);
              break;

            case Mode.ALPHANUMERIC:
              nodes.push([seg, {
                data: seg.data,
                mode: Mode.BYTE,
                length: seg.length
              }]);
              break;

            case Mode.KANJI:
              nodes.push([seg, {
                data: seg.data,
                mode: Mode.BYTE,
                length: getStringByteLength(seg.data)
              }]);
              break;

            case Mode.BYTE:
              nodes.push([{
                data: seg.data,
                mode: Mode.BYTE,
                length: getStringByteLength(seg.data)
              }]);
          }
        }

        return nodes;
      }
      /**
       * Builds a graph from a list of nodes.
       * All segments in each node group will be connected with all the segments of
       * the next group and so on.
       *
       * At each connection will be assigned a weight depending on the
       * segment's byte length.
       *
       * @param  {Array} nodes    Array of object with segments data
       * @param  {Number} version QR Code version
       * @return {Object}         Graph of all possible segments
       */


      function buildGraph(nodes, version) {
        var table = {};
        var graph = {
          'start': {}
        };
        var prevNodeIds = ['start'];

        for (var i = 0; i < nodes.length; i++) {
          var nodeGroup = nodes[i];
          var currentNodeIds = [];

          for (var j = 0; j < nodeGroup.length; j++) {
            var node = nodeGroup[j];
            var key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
              node: node,
              lastCount: 0
            };
            graph[key] = {};

            for (var n = 0; n < prevNodeIds.length; n++) {
              var prevNodeId = prevNodeIds[n];

              if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
              }
            }
          }

          prevNodeIds = currentNodeIds;
        }

        for (n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]]['end'] = 0;
        }

        return {
          map: graph,
          table: table
        };
      }
      /**
       * Builds a segment from a specified data and mode.
       * If a mode is not specified, the more suitable will be used.
       *
       * @param  {String} data             Input data
       * @param  {Mode | String} modesHint Data mode
       * @return {Segment}                 Segment
       */


      function buildSingleSegment(data, modesHint) {
        var mode;
        var bestMode = Mode.getBestModeForData(data);
        mode = Mode.from(modesHint, bestMode); // Make sure data can be encoded

        if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
          throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
        } // Use Mode.BYTE if Kanji support is disabled


        if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
          mode = Mode.BYTE;
        }

        switch (mode) {
          case Mode.NUMERIC:
            return new NumericData(data);

          case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);

          case Mode.KANJI:
            return new KanjiData(data);

          case Mode.BYTE:
            return new ByteData(data);
        }
      }
      /**
       * Builds a list of segments from an array.
       * Array can contain Strings or Objects with segment's info.
       *
       * For each item which is a string, will be generated a segment with the given
       * string and the more appropriate encoding mode.
       *
       * For each item which is an object, will be generated a segment with the given
       * data and mode.
       * Objects must contain at least the property "data".
       * If property "mode" is not present, the more suitable mode will be used.
       *
       * @param  {Array} array Array of objects with segments data
       * @return {Array}       Array of Segments
       */


      exports.fromArray = function fromArray(array) {
        return array.reduce(function (acc, seg) {
          if (typeof seg === 'string') {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }

          return acc;
        }, []);
      };
      /**
       * Builds an optimized sequence of segments from a string,
       * which will produce the shortest possible bitstream.
       *
       * @param  {String} data    Input string
       * @param  {Number} version QR Code version
       * @return {Array}          Array of segments
       */


      exports.fromString = function fromString(data, version) {
        var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
        var nodes = buildNodes(segs);
        var graph = buildGraph(nodes, version);
        var path = dijkstra.find_path(graph.map, 'start', 'end');
        var optimizedSegs = [];

        for (var i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }

        return exports.fromArray(mergeSegments(optimizedSegs));
      };
      /**
       * Splits a string in various segments with the modes which
       * best represent their content.
       * The produced segments are far from being optimized.
       * The output of this function is only used to estimate a QR Code version
       * which may contain the data.
       *
       * @param  {string} data Input string
       * @return {Array}       Array of segments
       */


      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
      };
      /***/

    },

    /***/
    "wVYR":
    /*!**************************************************************!*\
      !*** ./node_modules/@walletconnect/client/dist/cjs/index.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function wVYR(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = tslib_1.__importDefault(__webpack_require__(
      /*! @walletconnect/core */
      "CotQ"));

      var cryptoLib = tslib_1.__importStar(__webpack_require__(
      /*! @walletconnect/iso-crypto */
      "vKgB"));

      var WalletConnect = /*#__PURE__*/function (_core_1$default) {
        _inherits(WalletConnect, _core_1$default);

        var _super4 = _createSuper(WalletConnect);

        function WalletConnect(connectorOpts, pushServerOpts) {
          _classCallCheck2(this, WalletConnect);

          return _super4.call(this, {
            cryptoLib: cryptoLib,
            connectorOpts: connectorOpts,
            pushServerOpts: pushServerOpts
          });
        }

        return WalletConnect;
      }(core_1["default"]);

      exports["default"] = WalletConnect; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "weYg":
    /*!****************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/ecies.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function weYg(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var aes_1 = __webpack_require__(
        /*! ./aes */
        "AwLY");

        var ecdh_1 = __webpack_require__(
        /*! ./ecdh */
        "ynIj");

        var ecdsa_1 = __webpack_require__(
        /*! ./ecdsa */
        "ocbH");

        var hmac_1 = __webpack_require__(
        /*! ./hmac */
        "YV8Y");

        var random_1 = __webpack_require__(
        /*! ./random */
        "Yp4/");

        var sha2_1 = __webpack_require__(
        /*! ./sha2 */
        "Iidz");

        var constants_1 = __webpack_require__(
        /*! ./constants */
        "FEYL");

        var helpers_1 = __webpack_require__(
        /*! ./helpers */
        "ghe6");

        function getSharedKey(privateKey, publicKey) {
          publicKey = ecdsa_1.decompress(publicKey);
          return ecdh_1.derive(privateKey, publicKey);
        }

        function getEncryptionKey(hash) {
          return Buffer.from(hash.slice(constants_1.LENGTH_0, constants_1.KEY_LENGTH));
        }

        function getMacKey(hash) {
          return Buffer.from(hash.slice(constants_1.KEY_LENGTH));
        }

        function getEciesKeys(privateKey, publicKey) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
            var sharedKey, hash;
            return regeneratorRuntime.wrap(function _callee63$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    sharedKey = getSharedKey(privateKey, publicKey);
                    _context63.next = 3;
                    return sha2_1.sha512(sharedKey);

                  case 3:
                    hash = _context63.sent;
                    return _context63.abrupt("return", {
                      encryptionKey: getEncryptionKey(hash),
                      macKey: getMacKey(hash)
                    });

                  case 5:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee63);
          }));
        }

        function getEciesKeysSync(privateKey, publicKey) {
          var sharedKey = getSharedKey(privateKey, publicKey);
          var hash = sha2_1.sha512Sync(sharedKey);
          return {
            encryptionKey: getEncryptionKey(hash),
            macKey: getMacKey(hash)
          };
        }

        function getEphemKeyPair(opts) {
          var _a, _b;

          var ephemPrivateKey = ((_a = opts) === null || _a === void 0 ? void 0 : _a.ephemPrivateKey) || random_1.randomBytes(constants_1.KEY_LENGTH);

          while (!helpers_1.isValidPrivateKey(ephemPrivateKey)) {
            ephemPrivateKey = ((_b = opts) === null || _b === void 0 ? void 0 : _b.ephemPrivateKey) || random_1.randomBytes(constants_1.KEY_LENGTH);
          }

          var ephemPublicKey = ecdsa_1.getPublic(ephemPrivateKey);
          return {
            ephemPrivateKey: ephemPrivateKey,
            ephemPublicKey: ephemPublicKey
          };
        }

        function encrypt(publicKeyTo, msg, opts) {
          var _a;

          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
            var _getEphemKeyPair, ephemPrivateKey, ephemPublicKey, _yield$getEciesKeys, encryptionKey, macKey, iv, ciphertext, dataToMac, mac;

            return regeneratorRuntime.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    _getEphemKeyPair = getEphemKeyPair(opts), ephemPrivateKey = _getEphemKeyPair.ephemPrivateKey, ephemPublicKey = _getEphemKeyPair.ephemPublicKey;
                    _context64.next = 3;
                    return getEciesKeys(ephemPrivateKey, publicKeyTo);

                  case 3:
                    _yield$getEciesKeys = _context64.sent;
                    encryptionKey = _yield$getEciesKeys.encryptionKey;
                    macKey = _yield$getEciesKeys.macKey;
                    iv = ((_a = opts) === null || _a === void 0 ? void 0 : _a.iv) || random_1.randomBytes(constants_1.IV_LENGTH);
                    _context64.next = 9;
                    return aes_1.aesCbcEncrypt(iv, encryptionKey, msg);

                  case 9:
                    ciphertext = _context64.sent;
                    dataToMac = helpers_1.concatBuffers(iv, ephemPublicKey, ciphertext);
                    _context64.next = 13;
                    return hmac_1.hmacSha256Sign(macKey, dataToMac);

                  case 13:
                    mac = _context64.sent;
                    return _context64.abrupt("return", {
                      iv: iv,
                      ephemPublicKey: ephemPublicKey,
                      ciphertext: ciphertext,
                      mac: mac
                    });

                  case 15:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64);
          }));
        }

        exports.encrypt = encrypt;

        function decrypt(privateKey, opts) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
            var ephemPublicKey, iv, mac, ciphertext, _yield$getEciesKeys2, encryptionKey, macKey, dataToMac, macTest, msg;

            return regeneratorRuntime.wrap(function _callee65$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    ephemPublicKey = opts.ephemPublicKey, iv = opts.iv, mac = opts.mac, ciphertext = opts.ciphertext;
                    _context65.next = 3;
                    return getEciesKeys(privateKey, ephemPublicKey);

                  case 3:
                    _yield$getEciesKeys2 = _context65.sent;
                    encryptionKey = _yield$getEciesKeys2.encryptionKey;
                    macKey = _yield$getEciesKeys2.macKey;
                    dataToMac = helpers_1.concatBuffers(iv, ephemPublicKey, ciphertext);
                    _context65.next = 9;
                    return hmac_1.hmacSha256Verify(macKey, dataToMac, mac);

                  case 9:
                    macTest = _context65.sent;
                    helpers_1.assert(macTest, constants_1.ERROR_BAD_MAC);
                    _context65.next = 13;
                    return aes_1.aesCbcDecrypt(opts.iv, encryptionKey, opts.ciphertext);

                  case 13:
                    msg = _context65.sent;
                    return _context65.abrupt("return", msg);

                  case 15:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee65);
          }));
        }

        exports.decrypt = decrypt;

        function encryptSync(publicKeyTo, msg, opts) {
          var _a;

          var _getEphemKeyPair2 = getEphemKeyPair(opts),
              ephemPrivateKey = _getEphemKeyPair2.ephemPrivateKey,
              ephemPublicKey = _getEphemKeyPair2.ephemPublicKey;

          var _getEciesKeysSync = getEciesKeysSync(ephemPrivateKey, publicKeyTo),
              encryptionKey = _getEciesKeysSync.encryptionKey,
              macKey = _getEciesKeysSync.macKey;

          var iv = ((_a = opts) === null || _a === void 0 ? void 0 : _a.iv) || random_1.randomBytes(constants_1.IV_LENGTH);
          var ciphertext = aes_1.aesCbcEncryptSync(iv, encryptionKey, msg);
          var dataToMac = helpers_1.concatBuffers(iv, ephemPublicKey, ciphertext);
          var mac = hmac_1.hmacSha256SignSync(macKey, dataToMac);
          return {
            iv: iv,
            ephemPublicKey: ephemPublicKey,
            ciphertext: ciphertext,
            mac: mac
          };
        }

        exports.encryptSync = encryptSync;

        function decryptSync(privateKey, opts) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
            var ephemPublicKey, iv, mac, ciphertext, _getEciesKeysSync2, encryptionKey, macKey, dataToMac, macTest, msg;

            return regeneratorRuntime.wrap(function _callee66$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    ephemPublicKey = opts.ephemPublicKey, iv = opts.iv, mac = opts.mac, ciphertext = opts.ciphertext;
                    _getEciesKeysSync2 = getEciesKeysSync(privateKey, ephemPublicKey), encryptionKey = _getEciesKeysSync2.encryptionKey, macKey = _getEciesKeysSync2.macKey;
                    dataToMac = helpers_1.concatBuffers(iv, ephemPublicKey, ciphertext);
                    macTest = hmac_1.hmacSha256VerifySync(macKey, dataToMac, mac);
                    helpers_1.assert(macTest, constants_1.ERROR_BAD_MAC);
                    msg = aes_1.aesCbcDecryptSync(opts.iv, encryptionKey, opts.ciphertext);
                    return _context66.abrupt("return", msg);

                  case 7:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee66);
          }));
        }

        exports.decryptSync = decryptSync;

        function serialize(opts) {
          var ephemPublicKey = ecdsa_1.compress(opts.ephemPublicKey);
          return helpers_1.concatBuffers(opts.iv, ephemPublicKey, opts.mac, opts.ciphertext);
        }

        exports.serialize = serialize;

        function deserialize(buf) {
          var slice0 = constants_1.LENGTH_0;
          var slice1 = slice0 + constants_1.IV_LENGTH;
          var slice2 = slice1 + constants_1.PREFIXED_KEY_LENGTH;
          var slice3 = slice2 + constants_1.MAC_LENGTH;
          var slice4 = buf.length;
          return {
            iv: buf.slice(slice0, slice1),
            ephemPublicKey: ecdsa_1.decompress(buf.slice(slice1, slice2)),
            mac: buf.slice(slice2, slice3),
            ciphertext: buf.slice(slice3, slice4)
          };
        }

        exports.deserialize = deserialize; //# sourceMappingURL=ecies.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "wkci":
    /*!********************************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/node_modules/detect-browser/index.js ***!
      \********************************************************************************/

    /*! no static exports found */

    /***/
    function wkci(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (process) {
        var __spreadArrays = this && this.__spreadArrays || function () {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
            s += arguments[i].length;
          }

          for (var r = Array(s), k = 0, i = 0; i < il; i++) {
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
              r[k] = a[j];
            }
          }

          return r;
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var BrowserInfo =
        /** @class */
        function () {
          function BrowserInfo(name, version, os) {
            this.name = name;
            this.version = version;
            this.os = os;
            this.type = 'browser';
          }

          return BrowserInfo;
        }();

        exports.BrowserInfo = BrowserInfo;

        var NodeInfo =
        /** @class */
        function () {
          function NodeInfo(version) {
            this.version = version;
            this.type = 'node';
            this.name = 'node';
            this.os = process.platform;
          }

          return NodeInfo;
        }();

        exports.NodeInfo = NodeInfo;

        var SearchBotDeviceInfo =
        /** @class */
        function () {
          function SearchBotDeviceInfo(name, version, os, bot) {
            this.name = name;
            this.version = version;
            this.os = os;
            this.bot = bot;
            this.type = 'bot-device';
          }

          return SearchBotDeviceInfo;
        }();

        exports.SearchBotDeviceInfo = SearchBotDeviceInfo;

        var BotInfo =
        /** @class */
        function () {
          function BotInfo() {
            this.type = 'bot';
            this.bot = true; // NOTE: deprecated test name instead

            this.name = 'bot';
            this.version = null;
            this.os = null;
          }

          return BotInfo;
        }();

        exports.BotInfo = BotInfo;

        var ReactNativeInfo =
        /** @class */
        function () {
          function ReactNativeInfo() {
            this.type = 'react-native';
            this.name = 'react-native';
            this.version = null;
            this.os = null;
          }

          return ReactNativeInfo;
        }();

        exports.ReactNativeInfo = ReactNativeInfo;
        ; // tslint:disable-next-line:max-line-length

        var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
        var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
        var REQUIRED_VERSION_PARTS = 3;
        var userAgentRules = [['aol', /AOLShield\/([0-9\._]+)/], ['edge', /Edge\/([0-9\._]+)/], ['edge-ios', /EdgiOS\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['samsung', /SamsungBrowser\/([0-9\.]+)/], ['silk', /\bSilk\/([0-9._-]+)\b/], ['miui', /MiuiBrowser\/([0-9\.]+)$/], ['beaker', /BeakerBrowser\/([0-9\.]+)/], ['edge-chromium', /Edg\/([0-9\.]+)/], ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/], ['facebook', /FBAV\/([0-9\.]+)/], ['instagram', /Instagram\s([0-9\.]+)/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ['searchbot', SEARCHBOX_UA_REGEX]];
        var operatingSystemRules = [['iOS', /iP(hone|od|ad)/], ['Android OS', /Android/], ['BlackBerry OS', /BlackBerry|BB10/], ['Windows Mobile', /IEMobile/], ['Amazon OS', /Kindle/], ['Windows 3.11', /Win16/], ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/], ['Windows 98', /(Windows 98)|(Win98)/], ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/], ['Windows XP', /(Windows NT 5.1)|(Windows XP)/], ['Windows Server 2003', /(Windows NT 5.2)/], ['Windows Vista', /(Windows NT 6.0)/], ['Windows 7', /(Windows NT 6.1)/], ['Windows 8', /(Windows NT 6.2)/], ['Windows 8.1', /(Windows NT 6.3)/], ['Windows 10', /(Windows NT 10.0)/], ['Windows ME', /Windows ME/], ['Open BSD', /OpenBSD/], ['Sun OS', /SunOS/], ['Chrome OS', /CrOS/], ['Linux', /(Linux)|(X11)/], ['Mac OS', /(Mac_PowerPC)|(Macintosh)/], ['QNX', /QNX/], ['BeOS', /BeOS/], ['OS/2', /OS\/2/]];

        function detect(userAgent) {
          if (!!userAgent) {
            return parseUserAgent(userAgent);
          }

          if (typeof document === 'undefined' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
            return new ReactNativeInfo();
          }

          if (typeof navigator !== 'undefined') {
            return parseUserAgent(navigator.userAgent);
          }

          return getNodeVersion();
        }

        exports.detect = detect;

        function matchUserAgent(ua) {
          // opted for using reduce here rather than Array#first with a regex.test call
          // this is primarily because using the reduce we only perform the regex
          // execution once rather than once for the test and for the exec again below
          // probably something that needs to be benchmarked though
          return ua !== '' && userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0],
                regex = _a[1];

            if (matched) {
              return matched;
            }

            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
          }, false);
        }

        function browserName(ua) {
          var data = matchUserAgent(ua);
          return data ? data[0] : null;
        }

        exports.browserName = browserName;

        function parseUserAgent(ua) {
          var matchedRule = matchUserAgent(ua);

          if (!matchedRule) {
            return null;
          }

          var name = matchedRule[0],
              match = matchedRule[1];

          if (name === 'searchbot') {
            return new BotInfo();
          }

          var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);

          if (versionParts) {
            if (versionParts.length < REQUIRED_VERSION_PARTS) {
              versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
            }
          } else {
            versionParts = [];
          }

          var version = versionParts.join('.');
          var os = detectOS(ua);
          var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);

          if (searchBotMatch && searchBotMatch[1]) {
            return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
          }

          return new BrowserInfo(name, versionParts.join('.'), os);
        }

        exports.parseUserAgent = parseUserAgent;

        function detectOS(ua) {
          for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
            var _a = operatingSystemRules[ii],
                os = _a[0],
                regex = _a[1];
            var match = regex.exec(ua);

            if (match) {
              return os;
            }
          }

          return null;
        }

        exports.detectOS = detectOS;

        function getNodeVersion() {
          var isNode = typeof process !== 'undefined' && process.version;
          return isNode ? new NodeInfo(process.version.slice(1)) : null;
        }

        exports.getNodeVersion = getNodeVersion;

        function createVersionParts(count) {
          var output = [];

          for (var ii = 0; ii < count; ii++) {
            output.push('0');
          }

          return output;
        }
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "xI+a":
    /*!*************************************************************!*\
      !*** ./node_modules/@walletconnect/utils/dist/cjs/index.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function xIA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      tslib_1.__exportStar(__webpack_require__(
      /*! ./browser */
      "+7Xm"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./constants */
      "621o"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./encoding */
      "i1L0"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./ethereum */
      "Wtwg"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./local */
      "oQv1"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./misc */
      "9y2/"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./payload */
      "rDya"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./session */
      "00uA"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./url */
      "bmOx"), exports);

      tslib_1.__exportStar(__webpack_require__(
      /*! ./validators */
      "0cyn"), exports); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "yKow":
    /*!*************************************************!*\
      !*** ./node_modules/qrcode/lib/core/version.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function yKow(module, exports, __webpack_require__) {
      var Utils = __webpack_require__(
      /*! ./utils */
      "e/Dd");

      var ECCode = __webpack_require__(
      /*! ./error-correction-code */
      "NPxG");

      var ECLevel = __webpack_require__(
      /*! ./error-correction-level */
      "ekOh");

      var Mode = __webpack_require__(
      /*! ./mode */
      "u/Db");

      var VersionCheck = __webpack_require__(
      /*! ./version-check */
      "J6Nv");

      var isArray = __webpack_require__(
      /*! isarray */
      "7uVY"); // Generator polynomial used to encode version information


      var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
      var G18_BCH = Utils.getBCHDigit(G18);

      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
          }
        }

        return undefined;
      }

      function getReservedBitsCount(mode, version) {
        // Character count indicator + mode indicator bits
        return Mode.getCharCountIndicator(mode, version) + 4;
      }

      function getTotalBitsFromDataArray(segments, version) {
        var totalBits = 0;
        segments.forEach(function (data) {
          var reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
      }

      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
          var length = getTotalBitsFromDataArray(segments, currentVersion);

          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
          }
        }

        return undefined;
      }
      /**
       * Returns version number from a value.
       * If value is not a valid version, returns defaultValue
       *
       * @param  {Number|String} value        QR Code version
       * @param  {Number}        defaultValue Fallback value
       * @return {Number}                     QR Code version number
       */


      exports.from = function from(value, defaultValue) {
        if (VersionCheck.isValid(value)) {
          return parseInt(value, 10);
        }

        return defaultValue;
      };
      /**
       * Returns how much data can be stored with the specified QR code version
       * and error correction level
       *
       * @param  {Number} version              QR Code version (1-40)
       * @param  {Number} errorCorrectionLevel Error correction level
       * @param  {Mode}   mode                 Data mode
       * @return {Number}                      Quantity of storable data
       */


      exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
        if (!VersionCheck.isValid(version)) {
          throw new Error('Invalid QR Code version');
        } // Use Byte mode as default


        if (typeof mode === 'undefined') mode = Mode.BYTE; // Total codewords for this QR code version (Data + Error correction)

        var totalCodewords = Utils.getSymbolTotalCodewords(version); // Total number of error correction codewords

        var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel); // Total number of data codewords

        var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode === Mode.MIXED) return dataTotalCodewordsBits;
        var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version); // Return max number of storable codewords

        switch (mode) {
          case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);

          case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);

          case Mode.KANJI:
            return Math.floor(usableBits / 13);

          case Mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };
      /**
       * Returns the minimum version needed to contain the amount of data
       *
       * @param  {Segment} data                    Segment of data
       * @param  {Number} [errorCorrectionLevel=H] Error correction level
       * @param  {Mode} mode                       Data mode
       * @return {Number}                          QR Code version
       */


      exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
        var seg;
        var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);

        if (isArray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }

          if (data.length === 0) {
            return 1;
          }

          seg = data[0];
        } else {
          seg = data;
        }

        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };
      /**
       * Returns version information with relative error correction bits
       *
       * The version information is included in QR Code symbols of version 7 or larger.
       * It consists of an 18-bit sequence containing 6 data bits,
       * with 12 error correction bits calculated using the (18, 6) Golay code.
       *
       * @param  {Number} version QR Code version
       * @return {Number}         Encoded version info bits
       */


      exports.getEncodedBits = function getEncodedBits(version) {
        if (!VersionCheck.isValid(version) || version < 7) {
          throw new Error('Invalid QR Code version');
        }

        var d = version << 12;

        while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
        }

        return version << 12 | d;
      };
      /***/

    },

    /***/
    "ynIj":
    /*!***************************************************!*\
      !*** ./node_modules/eccrypto-js/dist/cjs/ecdh.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function ynIj(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var env_1 = __webpack_require__(
      /*! ./lib/env */
      "9A97");

      var secp256k1_1 = __webpack_require__(
      /*! ./lib/secp256k1 */
      "tRZw");

      var elliptic_1 = __webpack_require__(
      /*! ./lib/elliptic */
      "DxSV");

      var ecdsa_1 = __webpack_require__(
      /*! ./ecdsa */
      "ocbH");

      function derive(privateKeyA, publicKeyB) {
        ecdsa_1.checkPrivateKey(privateKeyA);
        ecdsa_1.checkPublicKey(publicKeyB);
        return env_1.isNode() ? secp256k1_1.secp256k1Derive(publicKeyB, privateKeyA) : elliptic_1.ellipticDerive(publicKeyB, privateKeyA);
      }

      exports.derive = derive; //# sourceMappingURL=ecdh.js.map

      /***/
    },

    /***/
    "zACh":
    /*!********************************************************!*\
      !*** ./node_modules/safe-json-utils/dist/cjs/index.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function zACh(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function safeJsonParse(value) {
        try {
          return JSON.parse(value);
        } catch (_a) {
          return value;
        }
      }

      exports.safeJsonParse = safeJsonParse;

      function safeJsonStringify(value) {
        return typeof value === 'string' ? value : JSON.stringify(value, function (key, value) {
          return typeof value === 'undefined' ? null : value;
        });
      }

      exports.safeJsonStringify = safeJsonStringify; //# sourceMappingURL=index.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=walletconnect-web3-provider-es5.js.map