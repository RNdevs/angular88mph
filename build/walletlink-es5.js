(function () {
  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walletlink"], {
    /***/
    "/1Jb":
    /*!************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/Spinner.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function Jb(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var preact_1 = __webpack_require__(
      /*! preact */
      "2mXy");

      var Spinner_css_1 = __importDefault(__webpack_require__(
      /*! ./Spinner-css */
      "u8Fu"));

      exports.Spinner = function (props) {
        var _a;

        var size = (_a = props.size) !== null && _a !== void 0 ? _a : 64;
        var color = props.color || "#000";
        return preact_1.h("div", {
          "class": "-walletlink-spinner"
        }, preact_1.h("style", null, Spinner_css_1["default"]), preact_1.h("svg", {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            width: size,
            height: size
          }
        }, preact_1.h("circle", {
          style: {
            cx: 50,
            cy: 50,
            r: 45,
            stroke: color
          }
        })));
      };
      /***/

    },

    /***/
    "/aAL":
    /*!***************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/LinkDialog.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function aAL(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var clsx_1 = __importDefault(__webpack_require__(
      /*! clsx */
      "iuhU"));

      var preact_1 = __webpack_require__(
      /*! preact */
      "2mXy");

      var hooks_1 = __webpack_require__(
      /*! preact/hooks */
      "MOxe");

      var LinkDialog_css_1 = __importDefault(__webpack_require__(
      /*! ./LinkDialog-css */
      "bFFw"));

      var QRCode_1 = __webpack_require__(
      /*! ./QRCode */
      "LMR0");

      var Spinner_1 = __webpack_require__(
      /*! ./Spinner */
      "/1Jb");

      exports.LinkDialog = function (props) {
        var _hooks_1$useState = hooks_1.useState(!props.isOpen),
            _hooks_1$useState2 = _slicedToArray(_hooks_1$useState, 2),
            isContainerHidden = _hooks_1$useState2[0],
            setContainerHidden = _hooks_1$useState2[1];

        var _hooks_1$useState3 = hooks_1.useState(!props.isOpen),
            _hooks_1$useState4 = _slicedToArray(_hooks_1$useState3, 2),
            isDialogHidden = _hooks_1$useState4[0],
            setDialogHidden = _hooks_1$useState4[1];

        hooks_1.useEffect(function () {
          var isOpen = props.isOpen;
          var timers = [window.setTimeout(function () {
            setDialogHidden(!isOpen);
          }, 10)];

          if (isOpen) {
            setContainerHidden(false);
          } else {
            timers.push(window.setTimeout(function () {
              setContainerHidden(true);
            }, 360));
          }

          return function () {
            timers.forEach(window.clearTimeout);
          };
        }, [props.isOpen]);
        return preact_1.h("div", {
          "class": clsx_1["default"]("-walletlink-link-dialog-container", props.darkMode && "-walletlink-link-dialog-container-dark", isContainerHidden && "-walletlink-link-dialog-container-hidden")
        }, preact_1.h("style", null, LinkDialog_css_1["default"]), preact_1.h("div", {
          "class": clsx_1["default"]("-walletlink-link-dialog-backdrop", isDialogHidden && "-walletlink-link-dialog-backdrop-hidden")
        }), preact_1.h("div", {
          "class": "-walletlink-link-dialog"
        }, preact_1.h("div", {
          "class": clsx_1["default"]("-walletlink-link-dialog-box", isDialogHidden && "-walletlink-link-dialog-box-hidden")
        }, preact_1.h(ScanQRCode, {
          darkMode: props.darkMode,
          version: props.version,
          sessionId: props.sessionId,
          sessionSecret: props.sessionSecret,
          walletLinkUrl: props.walletLinkUrl,
          isConnected: props.isConnected
        }), props.onCancel && preact_1.h(CancelButton, {
          onClick: props.onCancel
        }))));
      };

      var ScanQRCode = function ScanQRCode(props) {
        var serverUrl = window.encodeURIComponent(props.walletLinkUrl);
        var qrUrl = "".concat(props.walletLinkUrl, "/#/link?id=").concat(props.sessionId, "&secret=").concat(props.sessionSecret, "&server=").concat(serverUrl, "&v=1");
        return preact_1.h("div", {
          "class": "-walletlink-link-dialog-box-content"
        }, preact_1.h("h3", null, "Scan to", preact_1.h("br", null), " Connect"), preact_1.h("div", {
          "class": "-walletlink-link-dialog-box-content-qrcode"
        }, preact_1.h("div", {
          "class": "-walletlink-link-dialog-box-content-qrcode-wrapper"
        }, preact_1.h(QRCode_1.QRCode, {
          content: qrUrl,
          width: 224,
          height: 224,
          fgColor: "#000",
          bgColor: "transparent"
        })), preact_1.h("input", {
          type: "hidden",
          value: qrUrl
        }), !props.isConnected && preact_1.h("div", {
          "class": "-walletlink-link-dialog-box-content-qrcode-connecting"
        }, preact_1.h(Spinner_1.Spinner, {
          size: 128,
          color: props.darkMode ? "#fff" : "#000"
        }), preact_1.h("p", null, "Connecting...")), preact_1.h("p", {
          title: "WalletLink v".concat(props.version)
        }, "Powered by WalletLink")), preact_1.h("a", {
          href: "".concat(props.walletLinkUrl, "/#/wallets"),
          target: "_blank",
          rel: "noopener"
        }, "Don\u2019t have a wallet app?"));
      };

      var CancelButton = function CancelButton(props) {
        return preact_1.h("button", {
          "class": "-walletlink-link-dialog-box-cancel",
          onClick: props.onClick
        }, preact_1.h("div", {
          "class": "-walletlink-link-dialog-box-cancel-x"
        }));
      };
      /***/

    },

    /***/
    "0zMk":
    /*!*********************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/aes256gcm.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function zMk(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
        // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
        // Licensed under the Apache License, version 2.0
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

        function encrypt(plainText, secret) {
          var iv = crypto_1["default"].randomBytes(12);
          var cipher = crypto_1["default"].createCipheriv("aes-256-gcm", Buffer.from(secret, "hex"), iv);
          var encrypted = Buffer.concat([cipher.update(Buffer.from(plainText, "utf8")), cipher["final"]()]);
          return Buffer.concat([iv, cipher.getAuthTag(), encrypted]).toString("hex");
        }

        exports.encrypt = encrypt;

        function decrypt(cipherText, secret) {
          var buf = Buffer.from(cipherText, "hex");
          var iv = buf.slice(0, 12);
          var authTag = buf.slice(12, 28);
          var encrypted = buf.slice(28);
          var decipher = crypto_1["default"].createDecipheriv("aes-256-gcm", Buffer.from(secret, "hex"), iv);
          decipher.setAuthTag(authTag);
          return Buffer.concat([decipher.update(encrypted), decipher["final"]()]).toString("utf8");
        }

        exports.decrypt = decrypt;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "2XmR":
    /*!************************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/keccak/lib/api/index.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function XmR(module, exports, __webpack_require__) {
      var createKeccak = __webpack_require__(
      /*! ./keccak */
      "65HE");

      var createShake = __webpack_require__(
      /*! ./shake */
      "HJGG");

      module.exports = function (KeccakState) {
        var Keccak = createKeccak(KeccakState);
        var Shake = createShake(KeccakState);
        return function (algorithm, options) {
          var hash = typeof algorithm === 'string' ? algorithm.toLowerCase() : algorithm;

          switch (hash) {
            case 'keccak224':
              return new Keccak(1152, 448, null, 224, options);

            case 'keccak256':
              return new Keccak(1088, 512, null, 256, options);

            case 'keccak384':
              return new Keccak(832, 768, null, 384, options);

            case 'keccak512':
              return new Keccak(576, 1024, null, 512, options);

            case 'sha3-224':
              return new Keccak(1152, 448, 0x06, 224, options);

            case 'sha3-256':
              return new Keccak(1088, 512, 0x06, 256, options);

            case 'sha3-384':
              return new Keccak(832, 768, 0x06, 384, options);

            case 'sha3-512':
              return new Keccak(576, 1024, 0x06, 512, options);

            case 'shake128':
              return new Shake(1344, 256, 0x1f, options);

            case 'shake256':
              return new Shake(1088, 512, 0x1f, options);

            default:
              throw new Error('Invald algorithm: ' + algorithm);
          }
        };
      };
      /***/

    },

    /***/
    "4Mv7":
    /*!******************************************************************!*\
      !*** ./node_modules/walletlink/dist/connection/ServerMessage.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function Mv7(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isServerMessageFail(msg) {
        return msg && msg.type === "Fail" && typeof msg.id === "number" && typeof msg.sessionId === "string" && typeof msg.error === "string";
      }

      exports.isServerMessageFail = isServerMessageFail;
      /***/
    },

    /***/
    "5ELh":
    /*!*********************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/keccak/lib/keccak.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function ELh(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        var keccakState = __webpack_require__(
        /*! ./keccak-state-unroll */
        "t6Ey");

        function Keccak() {
          // much faster than `new Array(50)`
          this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.blockSize = null;
          this.count = 0;
          this.squeezing = false;
        }

        Keccak.prototype.initialize = function (rate, capacity) {
          for (var i = 0; i < 50; ++i) {
            this.state[i] = 0;
          }

          this.blockSize = rate / 8;
          this.count = 0;
          this.squeezing = false;
        };

        Keccak.prototype.absorb = function (data) {
          for (var i = 0; i < data.length; ++i) {
            this.state[~~(this.count / 4)] ^= data[i] << 8 * (this.count % 4);
            this.count += 1;

            if (this.count === this.blockSize) {
              keccakState.p1600(this.state);
              this.count = 0;
            }
          }
        };

        Keccak.prototype.absorbLastFewBits = function (bits) {
          this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
          if ((bits & 0x80) !== 0 && this.count === this.blockSize - 1) keccakState.p1600(this.state);
          this.state[~~((this.blockSize - 1) / 4)] ^= 0x80 << 8 * ((this.blockSize - 1) % 4);
          keccakState.p1600(this.state);
          this.count = 0;
          this.squeezing = true;
        };

        Keccak.prototype.squeeze = function (length) {
          if (!this.squeezing) this.absorbLastFewBits(0x01);
          var output = Buffer.alloc(length);

          for (var i = 0; i < length; ++i) {
            output[i] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 0xff;
            this.count += 1;

            if (this.count === this.blockSize) {
              keccakState.p1600(this.state);
              this.count = 0;
            }
          }

          return output;
        };

        Keccak.prototype.copy = function (dest) {
          for (var i = 0; i < 50; ++i) {
            dest.state[i] = this.state[i];
          }

          dest.blockSize = this.blockSize;
          dest.count = this.count;
          dest.squeezing = this.squeezing;
        };

        module.exports = Keccak;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "5jSq":
    /*!********************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/qrcode-svg/index.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function jSq(module, exports) {
      /**
       * @fileoverview
       * - modified davidshimjs/qrcodejs library for use in node.js
       * - Using the 'QRCode for Javascript library'
       * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
       * - this library has no dependencies.
       *
       * @version 0.9.1 (2016-02-12)
       * @author davidshimjs, papnkukn
       * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
       * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
       * @see <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">https://github.com/davidshimjs/qrcodejs</a>
       */
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
      function QR8bitByte(data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
        this.parsedData = []; // Added to support UTF-8 Characters

        for (var i = 0, l = this.data.length; i < l; i++) {
          var byteArray = [];
          var code = this.data.charCodeAt(i);

          if (code > 0x10000) {
            byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
            byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
            byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[3] = 0x80 | code & 0x3F;
          } else if (code > 0x800) {
            byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
            byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[2] = 0x80 | code & 0x3F;
          } else if (code > 0x80) {
            byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
            byteArray[1] = 0x80 | code & 0x3F;
          } else {
            byteArray[0] = code;
          }

          this.parsedData.push(byteArray);
        }

        this.parsedData = Array.prototype.concat.apply([], this.parsedData);

        if (this.parsedData.length != this.data.length) {
          this.parsedData.unshift(191);
          this.parsedData.unshift(187);
          this.parsedData.unshift(239);
        }
      }

      QR8bitByte.prototype = {
        getLength: function getLength(buffer) {
          return this.parsedData.length;
        },
        write: function write(buffer) {
          for (var i = 0, l = this.parsedData.length; i < l; i++) {
            buffer.put(this.parsedData[i], 8);
          }
        }
      };

      function QRCodeModel(typeNumber, errorCorrectLevel) {
        this.typeNumber = typeNumber;
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = [];
      }

      QRCodeModel.prototype = {
        addData: function addData(data) {
          var newData = new QR8bitByte(data);
          this.dataList.push(newData);
          this.dataCache = null;
        },
        isDark: function isDark(row, col) {
          if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
            throw new Error(row + "," + col);
          }

          return this.modules[row][col];
        },
        getModuleCount: function getModuleCount() {
          return this.moduleCount;
        },
        make: function make() {
          this.makeImpl(false, this.getBestMaskPattern());
        },
        makeImpl: function makeImpl(test, maskPattern) {
          this.moduleCount = this.typeNumber * 4 + 17;
          this.modules = new Array(this.moduleCount);

          for (var row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);

            for (var col = 0; col < this.moduleCount; col++) {
              this.modules[row][col] = null;
            }
          }

          this.setupPositionProbePattern(0, 0);
          this.setupPositionProbePattern(this.moduleCount - 7, 0);
          this.setupPositionProbePattern(0, this.moduleCount - 7);
          this.setupPositionAdjustPattern();
          this.setupTimingPattern();
          this.setupTypeInfo(test, maskPattern);

          if (this.typeNumber >= 7) {
            this.setupTypeNumber(test);
          }

          if (this.dataCache == null) {
            this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
          }

          this.mapData(this.dataCache, maskPattern);
        },
        setupPositionProbePattern: function setupPositionProbePattern(row, col) {
          for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r) continue;

            for (var c = -1; c <= 7; c++) {
              if (col + c <= -1 || this.moduleCount <= col + c) continue;

              if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        },
        getBestMaskPattern: function getBestMaskPattern() {
          var minLostPoint = 0;
          var pattern = 0;

          for (var i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(this);

            if (i == 0 || minLostPoint > lostPoint) {
              minLostPoint = lostPoint;
              pattern = i;
            }
          }

          return pattern;
        },
        createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
          var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
          var cs = 1;
          this.make();

          for (var row = 0; row < this.modules.length; row++) {
            var y = row * cs;

            for (var col = 0; col < this.modules[row].length; col++) {
              var x = col * cs;
              var dark = this.modules[row][col];

              if (dark) {
                qr_mc.beginFill(0, 100);
                qr_mc.moveTo(x, y);
                qr_mc.lineTo(x + cs, y);
                qr_mc.lineTo(x + cs, y + cs);
                qr_mc.lineTo(x, y + cs);
                qr_mc.endFill();
              }
            }
          }

          return qr_mc;
        },
        setupTimingPattern: function setupTimingPattern() {
          for (var r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
              continue;
            }

            this.modules[r][6] = r % 2 == 0;
          }

          for (var c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
              continue;
            }

            this.modules[6][c] = c % 2 == 0;
          }
        },
        setupPositionAdjustPattern: function setupPositionAdjustPattern() {
          var pos = QRUtil.getPatternPosition(this.typeNumber);

          for (var i = 0; i < pos.length; i++) {
            for (var j = 0; j < pos.length; j++) {
              var row = pos[i];
              var col = pos[j];

              if (this.modules[row][col] != null) {
                continue;
              }

              for (var r = -2; r <= 2; r++) {
                for (var c = -2; c <= 2; c++) {
                  if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                    this.modules[row + r][col + c] = true;
                  } else {
                    this.modules[row + r][col + c] = false;
                  }
                }
              }
            }
          }
        },
        setupTypeNumber: function setupTypeNumber(test) {
          var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

          for (var i = 0; i < 18; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
          }

          for (var i = 0; i < 18; i++) {
            var mod = !test && (bits >> i & 1) == 1;
            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
          }
        },
        setupTypeInfo: function setupTypeInfo(test, maskPattern) {
          var data = this.errorCorrectLevel << 3 | maskPattern;
          var bits = QRUtil.getBCHTypeInfo(data);

          for (var i = 0; i < 15; i++) {
            var mod = !test && (bits >> i & 1) == 1;

            if (i < 6) {
              this.modules[i][8] = mod;
            } else if (i < 8) {
              this.modules[i + 1][8] = mod;
            } else {
              this.modules[this.moduleCount - 15 + i][8] = mod;
            }
          }

          for (var i = 0; i < 15; i++) {
            var mod = !test && (bits >> i & 1) == 1;

            if (i < 8) {
              this.modules[8][this.moduleCount - i - 1] = mod;
            } else if (i < 9) {
              this.modules[8][15 - i - 1 + 1] = mod;
            } else {
              this.modules[8][15 - i - 1] = mod;
            }
          }

          this.modules[this.moduleCount - 8][8] = !test;
        },
        mapData: function mapData(data, maskPattern) {
          var inc = -1;
          var row = this.moduleCount - 1;
          var bitIndex = 7;
          var byteIndex = 0;

          for (var col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) col--;

            while (true) {
              for (var c = 0; c < 2; c++) {
                if (this.modules[row][col - c] == null) {
                  var dark = false;

                  if (byteIndex < data.length) {
                    dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                  }

                  var mask = QRUtil.getMask(maskPattern, row, col - c);

                  if (mask) {
                    dark = !dark;
                  }

                  this.modules[row][col - c] = dark;
                  bitIndex--;

                  if (bitIndex == -1) {
                    byteIndex++;
                    bitIndex = 7;
                  }
                }
              }

              row += inc;

              if (row < 0 || this.moduleCount <= row) {
                row -= inc;
                inc = -inc;
                break;
              }
            }
          }
        }
      };
      QRCodeModel.PAD0 = 0xEC;
      QRCodeModel.PAD1 = 0x11;

      QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        var buffer = new QRBitBuffer();

        for (var i = 0; i < dataList.length; i++) {
          var data = dataList[i];
          buffer.put(data.mode, 4);
          buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
          data.write(buffer);
        }

        var totalDataCount = 0;

        for (var i = 0; i < rsBlocks.length; i++) {
          totalDataCount += rsBlocks[i].dataCount;
        }

        if (buffer.getLengthInBits() > totalDataCount * 8) {
          throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
        }

        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
          buffer.put(0, 4);
        }

        while (buffer.getLengthInBits() % 8 != 0) {
          buffer.putBit(false);
        }

        while (true) {
          if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
          }

          buffer.put(QRCodeModel.PAD0, 8);

          if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
          }

          buffer.put(QRCodeModel.PAD1, 8);
        }

        return QRCodeModel.createBytes(buffer, rsBlocks);
      };

      QRCodeModel.createBytes = function (buffer, rsBlocks) {
        var offset = 0;
        var maxDcCount = 0;
        var maxEcCount = 0;
        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);

        for (var r = 0; r < rsBlocks.length; r++) {
          var dcCount = rsBlocks[r].dataCount;
          var ecCount = rsBlocks[r].totalCount - dcCount;
          maxDcCount = Math.max(maxDcCount, dcCount);
          maxEcCount = Math.max(maxEcCount, ecCount);
          dcdata[r] = new Array(dcCount);

          for (var i = 0; i < dcdata[r].length; i++) {
            dcdata[r][i] = 0xff & buffer.buffer[i + offset];
          }

          offset += dcCount;
          var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
          var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
          var modPoly = rawPoly.mod(rsPoly);
          ecdata[r] = new Array(rsPoly.getLength() - 1);

          for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
          }
        }

        var totalCodeCount = 0;

        for (var i = 0; i < rsBlocks.length; i++) {
          totalCodeCount += rsBlocks[i].totalCount;
        }

        var data = new Array(totalCodeCount);
        var index = 0;

        for (var i = 0; i < maxDcCount; i++) {
          for (var r = 0; r < rsBlocks.length; r++) {
            if (i < dcdata[r].length) {
              data[index++] = dcdata[r][i];
            }
          }
        }

        for (var i = 0; i < maxEcCount; i++) {
          for (var r = 0; r < rsBlocks.length; r++) {
            if (i < ecdata[r].length) {
              data[index++] = ecdata[r][i];
            }
          }
        }

        return data;
      };

      var QRMode = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
      };
      var QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      };
      var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var QRUtil = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
        G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
        getBCHTypeInfo: function getBCHTypeInfo(data) {
          var d = data << 10;

          while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
          }

          return (data << 10 | d) ^ QRUtil.G15_MASK;
        },
        getBCHTypeNumber: function getBCHTypeNumber(data) {
          var d = data << 12;

          while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
          }

          return data << 12 | d;
        },
        getBCHDigit: function getBCHDigit(data) {
          var digit = 0;

          while (data != 0) {
            digit++;
            data >>>= 1;
          }

          return digit;
        },
        getPatternPosition: function getPatternPosition(typeNumber) {
          return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        getMask: function getMask(maskPattern, i, j) {
          switch (maskPattern) {
            case QRMaskPattern.PATTERN000:
              return (i + j) % 2 == 0;

            case QRMaskPattern.PATTERN001:
              return i % 2 == 0;

            case QRMaskPattern.PATTERN010:
              return j % 3 == 0;

            case QRMaskPattern.PATTERN011:
              return (i + j) % 3 == 0;

            case QRMaskPattern.PATTERN100:
              return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

            case QRMaskPattern.PATTERN101:
              return i * j % 2 + i * j % 3 == 0;

            case QRMaskPattern.PATTERN110:
              return (i * j % 2 + i * j % 3) % 2 == 0;

            case QRMaskPattern.PATTERN111:
              return (i * j % 3 + (i + j) % 2) % 2 == 0;

            default:
              throw new Error("bad maskPattern:" + maskPattern);
          }
        },
        getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
          var a = new QRPolynomial([1], 0);

          for (var i = 0; i < errorCorrectLength; i++) {
            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
          }

          return a;
        },
        getLengthInBits: function getLengthInBits(mode, type) {
          if (1 <= type && type < 10) {
            switch (mode) {
              case QRMode.MODE_NUMBER:
                return 10;

              case QRMode.MODE_ALPHA_NUM:
                return 9;

              case QRMode.MODE_8BIT_BYTE:
                return 8;

              case QRMode.MODE_KANJI:
                return 8;

              default:
                throw new Error("mode:" + mode);
            }
          } else if (type < 27) {
            switch (mode) {
              case QRMode.MODE_NUMBER:
                return 12;

              case QRMode.MODE_ALPHA_NUM:
                return 11;

              case QRMode.MODE_8BIT_BYTE:
                return 16;

              case QRMode.MODE_KANJI:
                return 10;

              default:
                throw new Error("mode:" + mode);
            }
          } else if (type < 41) {
            switch (mode) {
              case QRMode.MODE_NUMBER:
                return 14;

              case QRMode.MODE_ALPHA_NUM:
                return 13;

              case QRMode.MODE_8BIT_BYTE:
                return 16;

              case QRMode.MODE_KANJI:
                return 12;

              default:
                throw new Error("mode:" + mode);
            }
          } else {
            throw new Error("type:" + type);
          }
        },
        getLostPoint: function getLostPoint(qrCode) {
          var moduleCount = qrCode.getModuleCount();
          var lostPoint = 0;

          for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount; col++) {
              var sameCount = 0;
              var dark = qrCode.isDark(row, col);

              for (var r = -1; r <= 1; r++) {
                if (row + r < 0 || moduleCount <= row + r) {
                  continue;
                }

                for (var c = -1; c <= 1; c++) {
                  if (col + c < 0 || moduleCount <= col + c) {
                    continue;
                  }

                  if (r == 0 && c == 0) {
                    continue;
                  }

                  if (dark == qrCode.isDark(row + r, col + c)) {
                    sameCount++;
                  }
                }
              }

              if (sameCount > 5) {
                lostPoint += 3 + sameCount - 5;
              }
            }
          }

          for (var row = 0; row < moduleCount - 1; row++) {
            for (var col = 0; col < moduleCount - 1; col++) {
              var count = 0;
              if (qrCode.isDark(row, col)) count++;
              if (qrCode.isDark(row + 1, col)) count++;
              if (qrCode.isDark(row, col + 1)) count++;
              if (qrCode.isDark(row + 1, col + 1)) count++;

              if (count == 0 || count == 4) {
                lostPoint += 3;
              }
            }
          }

          for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount - 6; col++) {
              if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
                lostPoint += 40;
              }
            }
          }

          for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount - 6; row++) {
              if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
                lostPoint += 40;
              }
            }
          }

          var darkCount = 0;

          for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount; row++) {
              if (qrCode.isDark(row, col)) {
                darkCount++;
              }
            }
          }

          var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
          lostPoint += ratio * 10;
          return lostPoint;
        }
      };
      var QRMath = {
        glog: function glog(n) {
          if (n < 1) {
            throw new Error("glog(" + n + ")");
          }

          return QRMath.LOG_TABLE[n];
        },
        gexp: function gexp(n) {
          while (n < 0) {
            n += 255;
          }

          while (n >= 256) {
            n -= 255;
          }

          return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
      };

      for (var i = 0; i < 8; i++) {
        QRMath.EXP_TABLE[i] = 1 << i;
      }

      for (var i = 8; i < 256; i++) {
        QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
      }

      for (var i = 0; i < 255; i++) {
        QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
      }

      function QRPolynomial(num, shift) {
        if (num.length == undefined) {
          throw new Error(num.length + "/" + shift);
        }

        var offset = 0;

        while (offset < num.length && num[offset] == 0) {
          offset++;
        }

        this.num = new Array(num.length - offset + shift);

        for (var i = 0; i < num.length - offset; i++) {
          this.num[i] = num[i + offset];
        }
      }

      QRPolynomial.prototype = {
        get: function get(index) {
          return this.num[index];
        },
        getLength: function getLength() {
          return this.num.length;
        },
        multiply: function multiply(e) {
          var num = new Array(this.getLength() + e.getLength() - 1);

          for (var i = 0; i < this.getLength(); i++) {
            for (var j = 0; j < e.getLength(); j++) {
              num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
            }
          }

          return new QRPolynomial(num, 0);
        },
        mod: function mod(e) {
          if (this.getLength() - e.getLength() < 0) {
            return this;
          }

          var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
          var num = new Array(this.getLength());

          for (var i = 0; i < this.getLength(); i++) {
            num[i] = this.get(i);
          }

          for (var i = 0; i < e.getLength(); i++) {
            num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
          }

          return new QRPolynomial(num, 0).mod(e);
        }
      };

      function QRRSBlock(totalCount, dataCount) {
        this.totalCount = totalCount;
        this.dataCount = dataCount;
      }

      QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

      QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
        var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

        if (rsBlock == undefined) {
          throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
        }

        var length = rsBlock.length / 3;
        var list = [];

        for (var i = 0; i < length; i++) {
          var count = rsBlock[i * 3 + 0];
          var totalCount = rsBlock[i * 3 + 1];
          var dataCount = rsBlock[i * 3 + 2];

          for (var j = 0; j < count; j++) {
            list.push(new QRRSBlock(totalCount, dataCount));
          }
        }

        return list;
      };

      QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
        switch (errorCorrectLevel) {
          case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

          case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

          case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

          case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

          default:
            return undefined;
        }
      };

      function QRBitBuffer() {
        this.buffer = [];
        this.length = 0;
      }

      QRBitBuffer.prototype = {
        get: function get(index) {
          var bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
        },
        put: function put(num, length) {
          for (var i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) == 1);
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
      var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
      /** Constructor */

      function QRCode(options) {
        var instance = this; //Default options

        this.options = {
          padding: 4,
          width: 256,
          height: 256,
          typeNumber: 4,
          color: "#000000",
          background: "#ffffff",
          ecl: "M"
        }; //In case the options is string

        if (typeof options === 'string') {
          options = {
            content: options
          };
        } //Merge options


        if (options) {
          for (var i in options) {
            this.options[i] = options[i];
          }
        }

        if (typeof this.options.content !== 'string') {
          throw new Error("Expected 'content' as string!");
        }

        if (this.options.content.length === 0
        /* || this.options.content.length > 7089 */
        ) {
            throw new Error("Expected 'content' to be non-empty!");
          }

        if (!(this.options.padding >= 0)) {
          throw new Error("Expected 'padding' value to be non-negative!");
        }

        if (!(this.options.width > 0) || !(this.options.height > 0)) {
          throw new Error("Expected 'width' or 'height' value to be higher than zero!");
        } //Gets the error correction level


        function _getErrorCorrectLevel(ecl) {
          switch (ecl) {
            case "L":
              return QRErrorCorrectLevel.L;

            case "M":
              return QRErrorCorrectLevel.M;

            case "Q":
              return QRErrorCorrectLevel.Q;

            case "H":
              return QRErrorCorrectLevel.H;

            default:
              throw new Error("Unknwon error correction level: " + ecl);
          }
        } //Get type number


        function _getTypeNumber(content, ecl) {
          var length = _getUTF8Length(content);

          var type = 1;
          var limit = 0;

          for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
            var table = QRCodeLimitLength[i];

            if (!table) {
              throw new Error("Content too long: expected " + limit + " but got " + length);
            }

            switch (ecl) {
              case "L":
                limit = table[0];
                break;

              case "M":
                limit = table[1];
                break;

              case "Q":
                limit = table[2];
                break;

              case "H":
                limit = table[3];
                break;

              default:
                throw new Error("Unknwon error correction level: " + ecl);
            }

            if (length <= limit) {
              break;
            }

            type++;
          }

          if (type > QRCodeLimitLength.length) {
            throw new Error("Content too long");
          }

          return type;
        } //Gets text length


        function _getUTF8Length(content) {
          var result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
          return result.length + (result.length != content ? 3 : 0);
        } //Generate QR Code matrix


        var content = this.options.content;

        var type = _getTypeNumber(content, this.options.ecl);

        var ecl = _getErrorCorrectLevel(this.options.ecl);

        this.qrcode = new QRCodeModel(type, ecl);
        this.qrcode.addData(content);
        this.qrcode.make();
      }
      /** Generates QR Code as SVG image */


      QRCode.prototype.svg = function (opt) {
        var options = this.options || {};
        var modules = this.qrcode.modules;

        if (typeof opt == "undefined") {
          opt = {
            container: options.container || "svg"
          };
        } //Apply new lines and indents in SVG?


        var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
        var indent = pretty ? '  ' : '';
        var EOL = pretty ? '\r\n' : '';
        var width = options.width;
        var height = options.height;
        var length = modules.length;
        var xsize = width / (length + 2 * options.padding);
        var ysize = height / (length + 2 * options.padding); //Join (union, merge) rectangles into one shape?

        var join = typeof options.join != "undefined" ? !!options.join : false; //Swap the X and Y modules, pull request #2

        var swap = typeof options.swap != "undefined" ? !!options.swap : false; //Apply <?xml...?> declaration in SVG?

        var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true; //Populate with predefined shape instead of "rect" elements, thanks to @kkocdko

        var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
        var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + ' v' + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : ''; //Background rectangle

        var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL; //Rectangles representing modules

        var modrect = '';
        var pathdata = '';

        for (var y = 0; y < length; y++) {
          for (var x = 0; x < length; x++) {
            var module = modules[x][y];

            if (module) {
              var px = x * xsize + options.padding * xsize;
              var py = y * ysize + options.padding * ysize; //Some users have had issues with the QR Code, thanks to @danioso for the solution

              if (swap) {
                var t = px;
                px = py;
                py = t;
              }

              if (join) {
                //Module as a part of svg path data, thanks to @danioso
                var w = xsize + px;
                var h = ysize + py;
                px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
                py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
                w = Number.isInteger(w) ? Number(w) : w.toFixed(2);
                h = Number.isInteger(h) ? Number(h) : h.toFixed(2);
                pathdata += 'M' + px + ',' + py + ' V' + h + ' H' + w + ' V' + py + ' H' + px + ' Z ';
              } else if (predefined) {
                //Module as a predefined shape, thanks to @kkocdko
                modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
              } else {
                //Module as rectangle element
                modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
              }
            }
          }
        }

        if (join) {
          modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
        }

        var svg = "";

        switch (opt.container) {
          //Wrapped in SVG document
          case "svg":
            if (xmlDeclaration) {
              svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
            }

            svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += '</svg>';
            break;
          //Viewbox for responsive use in a browser, thanks to @danioso

          case "svg-viewbox":
            if (xmlDeclaration) {
              svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
            }

            svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + ' ' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += '</svg>';
            break;
          //Wrapped in group element

          case "g":
            svg += '<g width="' + width + '" height="' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += '</g>';
            break;
          //Without a container

          default:
            svg += (defs + bgrect + modrect).replace(/^\s+/, ""); //Clear indents on each line

            break;
        }

        return svg;
      };

      module.exports = QRCode;
      /***/
    },

    /***/
    "65HE":
    /*!*************************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/keccak/lib/api/keccak.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function HE(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        var _webpack_require__ = __webpack_require__(
        /*! stream */
        "1IWx"),
            Transform = _webpack_require__.Transform;

        module.exports = function (KeccakState) {
          return /*#__PURE__*/function (_Transform) {
            _inherits(Keccak, _Transform);

            var _super = _createSuper(Keccak);

            function Keccak(rate, capacity, delimitedSuffix, hashBitLength, options) {
              var _this;

              _classCallCheck(this, Keccak);

              _this = _super.call(this, options);
              _this._rate = rate;
              _this._capacity = capacity;
              _this._delimitedSuffix = delimitedSuffix;
              _this._hashBitLength = hashBitLength;
              _this._options = options;
              _this._state = new KeccakState();

              _this._state.initialize(rate, capacity);

              _this._finalized = false;
              return _this;
            }

            _createClass(Keccak, [{
              key: "_transform",
              value: function _transform(chunk, encoding, callback) {
                var error = null;

                try {
                  this.update(chunk, encoding);
                } catch (err) {
                  error = err;
                }

                callback(error);
              }
            }, {
              key: "_flush",
              value: function _flush(callback) {
                var error = null;

                try {
                  this.push(this.digest());
                } catch (err) {
                  error = err;
                }

                callback(error);
              }
            }, {
              key: "update",
              value: function update(data, encoding) {
                if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
                if (this._finalized) throw new Error('Digest already called');
                if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);

                this._state.absorb(data);

                return this;
              }
            }, {
              key: "digest",
              value: function digest(encoding) {
                if (this._finalized) throw new Error('Digest already called');
                this._finalized = true;
                if (this._delimitedSuffix) this._state.absorbLastFewBits(this._delimitedSuffix);

                var digest = this._state.squeeze(this._hashBitLength / 8);

                if (encoding !== undefined) digest = digest.toString(encoding);

                this._resetState();

                return digest;
              } // remove result from memory

            }, {
              key: "_resetState",
              value: function _resetState() {
                this._state.initialize(this._rate, this._capacity);

                return this;
              } // because sometimes we need hash right now and little later

            }, {
              key: "_clone",
              value: function _clone() {
                var clone = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);

                this._state.copy(clone._state);

                clone._finalized = this._finalized;
                return clone;
              }
            }]);

            return Keccak;
          }(Transform);
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "6RcL":
    /*!******************************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/Web3RequestMessage.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function RcL(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var RelayMessage_1 = __webpack_require__(
      /*! ./RelayMessage */
      "obTc");

      function Web3RequestMessage(params) {
        return Object.assign({
          type: RelayMessage_1.RelayMessageType.WEB3_REQUEST
        }, params);
      }

      exports.Web3RequestMessage = Web3RequestMessage;
      /***/
    },

    /***/
    "7wIv":
    /*!**********************************************!*\
      !*** ./node_modules/bind-decorator/index.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function wIv(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var constants;

      (function (constants) {
        constants.typeOfFunction = 'function';
        constants.boolTrue = true;
      })(constants || (constants = {}));

      function bind(target, propertyKey, descriptor) {
        if (!descriptor || typeof descriptor.value !== constants.typeOfFunction) {
          throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
        }

        return {
          configurable: constants.boolTrue,
          get: function get() {
            var bound = descriptor.value.bind(this); // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.

            Object.defineProperty(this, propertyKey, {
              value: bound,
              configurable: constants.boolTrue,
              writable: constants.boolTrue
            });
            return bound;
          }
        };
      }

      exports.bind = bind;
      exports["default"] = bind;
      /***/
    },

    /***/
    "8YYL":
    /*!**********************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/Web3Method.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function YYL(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var Web3Method;

      (function (Web3Method) {
        Web3Method["requestEthereumAccounts"] = "requestEthereumAccounts";
        Web3Method["signEthereumMessage"] = "signEthereumMessage";
        Web3Method["signEthereumTransaction"] = "signEthereumTransaction";
        Web3Method["submitEthereumTransaction"] = "submitEthereumTransaction";
        Web3Method["ethereumAddressFromSignedMessage"] = "ethereumAddressFromSignedMessage";
        Web3Method["scanQRCode"] = "scanQRCode";
        Web3Method["arbitrary"] = "arbitrary";
      })(Web3Method = exports.Web3Method || (exports.Web3Method = {}));
      /***/

    },

    /***/
    "976o":
    /*!****************************************************************!*\
      !*** ./node_modules/walletlink/dist/connection/RxWebSocket.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function o(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ConnectionState;

      (function (ConnectionState) {
        ConnectionState[ConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
        ConnectionState[ConnectionState["CONNECTING"] = 1] = "CONNECTING";
        ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
      })(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
      /**
       * Rx-ified WebSocket
       */


      var RxWebSocket = /*#__PURE__*/function () {
        /**
         * Constructor
         * @param url WebSocket server URL
         * @param [WebSocketClass] Custom WebSocket implementation
         */
        function RxWebSocket(url) {
          var WebSocketClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebSocket;

          _classCallCheck(this, RxWebSocket);

          this.WebSocketClass = WebSocketClass;
          this.webSocket = null;
          this.connectionStateSubject = new rxjs_1.BehaviorSubject(ConnectionState.DISCONNECTED);
          this.incomingDataSubject = new rxjs_1.Subject();
          this.url = url.replace(/^http/, "ws");
        }
        /**
         * Make a websocket connection
         * @returns an Observable that completes when connected
         */


        _createClass(RxWebSocket, [{
          key: "connect",
          value: function connect() {
            var _this2 = this;

            if (this.webSocket) {
              return rxjs_1.throwError(new Error("webSocket object is not null"));
            }

            return new rxjs_1.Observable(function (obs) {
              var webSocket;

              try {
                _this2.webSocket = webSocket = new _this2.WebSocketClass(_this2.url);
              } catch (err) {
                obs.error(err);
                return;
              }

              _this2.connectionStateSubject.next(ConnectionState.CONNECTING);

              webSocket.onclose = function (evt) {
                _this2.clearWebSocket();

                obs.error(new Error("websocket error ".concat(evt.code, ": ").concat(evt.reason)));

                _this2.connectionStateSubject.next(ConnectionState.DISCONNECTED);
              };

              webSocket.onopen = function (_) {
                obs.next();
                obs.complete();

                _this2.connectionStateSubject.next(ConnectionState.CONNECTED);
              };

              webSocket.onmessage = function (evt) {
                _this2.incomingDataSubject.next(evt.data);
              };
            }).pipe(operators_1.take(1));
          }
          /**
           * Disconnect from server
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            var webSocket = this.webSocket;

            if (!webSocket) {
              return;
            }

            this.clearWebSocket();
            this.connectionStateSubject.next(ConnectionState.DISCONNECTED);

            try {
              webSocket.close();
            } catch (_a) {}
          }
          /**
           * Emit current connection state and subsequent changes
           * @returns an Observable for the connection state
           */

        }, {
          key: "sendData",

          /**
           * Send data to server
           * @param data text to send
           */
          value: function sendData(data) {
            var webSocket = this.webSocket;

            if (!webSocket) {
              throw new Error("websocket is not connected");
            }

            webSocket.send(data);
          }
        }, {
          key: "clearWebSocket",
          value: function clearWebSocket() {
            var webSocket = this.webSocket;

            if (!webSocket) {
              return;
            }

            this.webSocket = null;
            webSocket.onclose = null;
            webSocket.onerror = null;
            webSocket.onmessage = null;
            webSocket.onopen = null;
          }
        }, {
          key: "connectionState$",
          get: function get() {
            return this.connectionStateSubject.asObservable();
          }
          /**
           * Emit incoming data from server
           * @returns an Observable for the data received
           */

        }, {
          key: "incomingData$",
          get: function get() {
            return this.incomingDataSubject.asObservable();
          }
          /**
           * Emit incoming JSON data from server. non-JSON data are ignored
           * @returns an Observable for parsed JSON data
           */

        }, {
          key: "incomingJSONData$",
          get: function get() {
            return this.incomingData$.pipe(operators_1.flatMap(function (m) {
              var j;

              try {
                j = JSON.parse(m);
              } catch (err) {
                return rxjs_1.empty();
              }

              return rxjs_1.of(j);
            }));
          }
        }]);

        return RxWebSocket;
      }();

      exports.RxWebSocket = RxWebSocket;
      /***/
    },

    /***/
    "98+w":
    /*!*****************************************************************!*\
      !*** ./node_modules/walletlink/dist/provider/FilterPolyfill.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function w(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var types_1 = __webpack_require__(
      /*! ../types */
      "p7SB");

      var util_1 = __webpack_require__(
      /*! ../util */
      "oK5k");

      var TIMEOUT = 5 * 60 * 1000; // 5 minutes

      var JSONRPC_TEMPLATE = {
        jsonrpc: "2.0",
        id: 0
      };

      var FilterPolyfill = /*#__PURE__*/function () {
        function FilterPolyfill(provider) {
          _classCallCheck(this, FilterPolyfill);

          this.logFilters = new Map(); // <id, filter>

          this.blockFilters = new Set(); // <id>

          this.pendingTransactionFilters = new Set(); // <id, true>

          this.cursors = new Map(); // <id, cursor>

          this.timeouts = new Map(); // <id, setTimeout id>

          this.nextFilterId = types_1.IntNumber(1);
          this.provider = provider;
        }

        _createClass(FilterPolyfill, [{
          key: "newFilter",
          value: function () {
            var _newFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
              var filter, id, cursor;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      filter = filterFromParam(param);
                      id = this.makeFilterId();
                      _context.next = 4;
                      return this.setInitialCursorPosition(id, filter.fromBlock);

                    case 4:
                      cursor = _context.sent;
                      console.log("Installing new log filter(".concat(id, "):"), filter, "initial cursor position:", cursor);
                      this.logFilters.set(id, filter);
                      this.setFilterTimeout(id);
                      return _context.abrupt("return", util_1.hexStringFromIntNumber(id));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function newFilter(_x) {
              return _newFilter.apply(this, arguments);
            }

            return newFilter;
          }()
        }, {
          key: "newBlockFilter",
          value: function () {
            var _newBlockFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var id, cursor;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      id = this.makeFilterId();
                      _context2.next = 3;
                      return this.setInitialCursorPosition(id, "latest");

                    case 3:
                      cursor = _context2.sent;
                      console.log("Installing new block filter (".concat(id, ") with initial cursor position:"), cursor);
                      this.blockFilters.add(id);
                      this.setFilterTimeout(id);
                      return _context2.abrupt("return", util_1.hexStringFromIntNumber(id));

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function newBlockFilter() {
              return _newBlockFilter.apply(this, arguments);
            }

            return newBlockFilter;
          }()
        }, {
          key: "newPendingTransactionFilter",
          value: function () {
            var _newPendingTransactionFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var id, cursor;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      id = this.makeFilterId();
                      _context3.next = 3;
                      return this.setInitialCursorPosition(id, "latest");

                    case 3:
                      cursor = _context3.sent;
                      console.log("Installing new block filter (".concat(id, ") with initial cursor position:"), cursor);
                      this.pendingTransactionFilters.add(id);
                      this.setFilterTimeout(id);
                      return _context3.abrupt("return", util_1.hexStringFromIntNumber(id));

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function newPendingTransactionFilter() {
              return _newPendingTransactionFilter.apply(this, arguments);
            }

            return newPendingTransactionFilter;
          }()
        }, {
          key: "uninstallFilter",
          value: function uninstallFilter(filterId) {
            var id = util_1.intNumberFromHexString(filterId);
            console.log("Uninstalling filter (".concat(id, ")"));
            this.deleteFilter(id);
            return true;
          }
        }, {
          key: "getFilterChanges",
          value: function getFilterChanges(filterId) {
            var id = util_1.intNumberFromHexString(filterId);

            if (this.timeouts.has(id)) {
              // extend timeout
              this.setFilterTimeout(id);
            }

            if (this.logFilters.has(id)) {
              return this.getLogFilterChanges(id);
            } else if (this.blockFilters.has(id)) {
              return this.getBlockFilterChanges(id);
            } else if (this.pendingTransactionFilters.has(id)) {
              return this.getPendingTransactionFilterChanges(id);
            }

            return Promise.resolve(filterNotFoundError());
          }
        }, {
          key: "getFilterLogs",
          value: function () {
            var _getFilterLogs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(filterId) {
              var id, filter;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      id = util_1.intNumberFromHexString(filterId);
                      filter = this.logFilters.get(id);

                      if (filter) {
                        _context4.next = 4;
                        break;
                      }

                      return _context4.abrupt("return", filterNotFoundError());

                    case 4:
                      return _context4.abrupt("return", this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
                        method: "eth_getLogs",
                        params: [paramFromFilter(filter)]
                      })));

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function getFilterLogs(_x2) {
              return _getFilterLogs.apply(this, arguments);
            }

            return getFilterLogs;
          }()
        }, {
          key: "makeFilterId",
          value: function makeFilterId() {
            return types_1.IntNumber(++this.nextFilterId);
          }
        }, {
          key: "sendAsyncPromise",
          value: function sendAsyncPromise(request) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.provider.sendAsync(request, function (err, response) {
                if (err) {
                  return reject(err);
                }

                if (Array.isArray(response) || response == null) {
                  return reject(new Error("unexpected response received: ".concat(JSON.stringify(response))));
                }

                resolve(response);
              });
            });
          }
        }, {
          key: "deleteFilter",
          value: function deleteFilter(id) {
            console.log("Deleting filter (".concat(id, ")"));
            this.logFilters["delete"](id);
            this.blockFilters["delete"](id);
            this.pendingTransactionFilters["delete"](id);
            this.cursors["delete"](id);
            this.timeouts["delete"](id);
          }
        }, {
          key: "getLogFilterChanges",
          value: function () {
            var _getLogFilterChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
              var filter, cursorPosition, currentBlockHeight, toBlock, response, blocks, highestBlock, newCursorPosition;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      filter = this.logFilters.get(id);
                      cursorPosition = this.cursors.get(id);

                      if (!(!cursorPosition || !filter)) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", filterNotFoundError());

                    case 4:
                      _context5.next = 6;
                      return this.getCurrentBlockHeight();

                    case 6:
                      currentBlockHeight = _context5.sent;
                      toBlock = filter.toBlock === "latest" ? currentBlockHeight : filter.toBlock;

                      if (!(cursorPosition > currentBlockHeight)) {
                        _context5.next = 10;
                        break;
                      }

                      return _context5.abrupt("return", emptyResult());

                    case 10:
                      if (!(cursorPosition > filter.toBlock)) {
                        _context5.next = 12;
                        break;
                      }

                      return _context5.abrupt("return", emptyResult());

                    case 12:
                      console.log("Fetching logs from ".concat(cursorPosition, " to ").concat(toBlock, " for filter ").concat(id));
                      _context5.next = 15;
                      return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
                        method: "eth_getLogs",
                        params: [paramFromFilter(Object.assign(Object.assign({}, filter), {
                          fromBlock: cursorPosition,
                          toBlock: toBlock
                        }))]
                      }));

                    case 15:
                      response = _context5.sent;

                      if (Array.isArray(response.result)) {
                        blocks = response.result.map(function (log) {
                          return util_1.intNumberFromHexString(log.blockNumber || "0x0");
                        });
                        highestBlock = Math.max.apply(Math, _toConsumableArray(blocks));

                        if (highestBlock && highestBlock > cursorPosition) {
                          newCursorPosition = types_1.IntNumber(highestBlock + 1);
                          console.log("Moving cursor position for filter (".concat(id, ") from ").concat(cursorPosition, " to ").concat(newCursorPosition));
                          this.cursors.set(id, newCursorPosition);
                        }
                      }

                      return _context5.abrupt("return", response);

                    case 18:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function getLogFilterChanges(_x3) {
              return _getLogFilterChanges.apply(this, arguments);
            }

            return getLogFilterChanges;
          }()
        }, {
          key: "getBlockFilterChanges",
          value: function () {
            var _getBlockFilterChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
              var _this4 = this;

              var cursorPosition, currentBlockHeight, blocks, newCursorPosition;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      cursorPosition = this.cursors.get(id);

                      if (cursorPosition) {
                        _context6.next = 3;
                        break;
                      }

                      return _context6.abrupt("return", filterNotFoundError());

                    case 3:
                      _context6.next = 5;
                      return this.getCurrentBlockHeight();

                    case 5:
                      currentBlockHeight = _context6.sent;

                      if (!(cursorPosition > currentBlockHeight)) {
                        _context6.next = 8;
                        break;
                      }

                      return _context6.abrupt("return", emptyResult());

                    case 8:
                      console.log("Fetching blocks from ".concat(cursorPosition, " to ").concat(currentBlockHeight, " for filter (").concat(id, ")"));
                      _context6.next = 11;
                      return Promise.all(util_1.range(cursorPosition, currentBlockHeight + 1).map(function (i) {
                        return _this4.getBlockHashByNumber(types_1.IntNumber(i));
                      }));

                    case 11:
                      blocks = _context6.sent.filter(function (hash) {
                        return !!hash;
                      });
                      newCursorPosition = types_1.IntNumber(cursorPosition + blocks.length);
                      console.log("Moving cursor position for filter (".concat(id, ") from ").concat(cursorPosition, " to ").concat(newCursorPosition));
                      this.cursors.set(id, newCursorPosition);
                      return _context6.abrupt("return", Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
                        result: blocks
                      }));

                    case 16:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function getBlockFilterChanges(_x4) {
              return _getBlockFilterChanges.apply(this, arguments);
            }

            return getBlockFilterChanges;
          }()
        }, {
          key: "getPendingTransactionFilterChanges",
          value: function () {
            var _getPendingTransactionFilterChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_id) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", Promise.resolve(emptyResult()));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function getPendingTransactionFilterChanges(_x5) {
              return _getPendingTransactionFilterChanges.apply(this, arguments);
            }

            return getPendingTransactionFilterChanges;
          }()
        }, {
          key: "setInitialCursorPosition",
          value: function () {
            var _setInitialCursorPosition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id, startBlock) {
              var currentBlockHeight, initialCursorPosition;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.getCurrentBlockHeight();

                    case 2:
                      currentBlockHeight = _context8.sent;
                      initialCursorPosition = typeof startBlock === "number" && startBlock > currentBlockHeight ? startBlock : currentBlockHeight;
                      this.cursors.set(id, initialCursorPosition);
                      return _context8.abrupt("return", initialCursorPosition);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function setInitialCursorPosition(_x6, _x7) {
              return _setInitialCursorPosition.apply(this, arguments);
            }

            return setInitialCursorPosition;
          }()
        }, {
          key: "setFilterTimeout",
          value: function setFilterTimeout(id) {
            var _this5 = this;

            var existing = this.timeouts.get(id);

            if (existing) {
              window.clearTimeout(existing);
            }

            var timeout = window.setTimeout(function () {
              console.log("Filter (".concat(id, ") timed out"));

              _this5.deleteFilter(id);
            }, TIMEOUT);
            this.timeouts.set(id, timeout);
          }
        }, {
          key: "getCurrentBlockHeight",
          value: function () {
            var _getCurrentBlockHeight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _yield$this$sendAsync, result;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
                        method: "eth_blockNumber",
                        params: []
                      }));

                    case 2:
                      _yield$this$sendAsync = _context9.sent;
                      result = _yield$this$sendAsync.result;
                      return _context9.abrupt("return", util_1.intNumberFromHexString(util_1.ensureHexString(result)));

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function getCurrentBlockHeight() {
              return _getCurrentBlockHeight.apply(this, arguments);
            }

            return getCurrentBlockHeight;
          }()
        }, {
          key: "getBlockHashByNumber",
          value: function () {
            var _getBlockHashByNumber = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(blockNumber) {
              var response;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
                        method: "eth_getBlockByNumber",
                        params: [util_1.hexStringFromIntNumber(blockNumber), false]
                      }));

                    case 2:
                      response = _context10.sent;

                      if (!(response.result && typeof response.result.hash === "string")) {
                        _context10.next = 5;
                        break;
                      }

                      return _context10.abrupt("return", util_1.ensureHexString(response.result.hash));

                    case 5:
                      return _context10.abrupt("return", null);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function getBlockHashByNumber(_x8) {
              return _getBlockHashByNumber.apply(this, arguments);
            }

            return getBlockHashByNumber;
          }()
        }]);

        return FilterPolyfill;
      }();

      exports.FilterPolyfill = FilterPolyfill;

      function filterFromParam(param) {
        return {
          fromBlock: intBlockHeightFromHexBlockHeight(param.fromBlock),
          toBlock: intBlockHeightFromHexBlockHeight(param.toBlock),
          addresses: param.address === undefined ? null : Array.isArray(param.address) ? param.address : [param.address],
          topics: param.topics || []
        };
      }

      exports.filterFromParam = filterFromParam;

      function paramFromFilter(filter) {
        var param = {
          fromBlock: hexBlockHeightFromIntBlockHeight(filter.fromBlock),
          toBlock: hexBlockHeightFromIntBlockHeight(filter.toBlock),
          topics: filter.topics
        };

        if (filter.addresses !== null) {
          param.address = filter.addresses;
        }

        return param;
      }

      function intBlockHeightFromHexBlockHeight(value) {
        if (value === undefined || value === "latest" || value === "pending") {
          return "latest";
        } else if (value === "earliest") {
          return types_1.IntNumber(0);
        } else if (util_1.isHexString(value)) {
          return util_1.intNumberFromHexString(value);
        }

        throw new Error("Invalid block option: ".concat(value));
      }

      function hexBlockHeightFromIntBlockHeight(value) {
        if (value === "latest") {
          return value;
        }

        return util_1.hexStringFromIntNumber(value);
      }

      function filterNotFoundError() {
        return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
          error: {
            code: -32000,
            message: "filter not found"
          }
        });
      }

      function emptyResult() {
        return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
          result: []
        });
      }
      /***/

    },

    /***/
    "CkXD":
    /*!**********************************************************!*\
      !*** ./node_modules/walletlink/dist/provider/JSONRPC.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function CkXD(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var JSONRPCMethod;

      (function (JSONRPCMethod) {
        // synchronous or asynchronous
        JSONRPCMethod["eth_accounts"] = "eth_accounts";
        JSONRPCMethod["eth_coinbase"] = "eth_coinbase";
        JSONRPCMethod["net_version"] = "net_version";
        JSONRPCMethod["eth_uninstallFilter"] = "eth_uninstallFilter"; // asynchronous only

        JSONRPCMethod["eth_requestAccounts"] = "eth_requestAccounts";
        JSONRPCMethod["eth_sign"] = "eth_sign";
        JSONRPCMethod["eth_ecRecover"] = "eth_ecRecover";
        JSONRPCMethod["personal_sign"] = "personal_sign";
        JSONRPCMethod["personal_ecRecover"] = "personal_ecRecover";
        JSONRPCMethod["eth_signTransaction"] = "eth_signTransaction";
        JSONRPCMethod["eth_sendRawTransaction"] = "eth_sendRawTransaction";
        JSONRPCMethod["eth_sendTransaction"] = "eth_sendTransaction";
        JSONRPCMethod["eth_signTypedData_v1"] = "eth_signTypedData_v1";
        JSONRPCMethod["eth_signTypedData_v2"] = "eth_signTypedData_v2";
        JSONRPCMethod["eth_signTypedData_v3"] = "eth_signTypedData_v3";
        JSONRPCMethod["eth_signTypedData_v4"] = "eth_signTypedData_v4";
        JSONRPCMethod["eth_signTypedData"] = "eth_signTypedData";
        JSONRPCMethod["walletlink_arbitrary"] = "walletlink_arbitrary"; // asynchronous filter methods

        JSONRPCMethod["eth_newFilter"] = "eth_newFilter";
        JSONRPCMethod["eth_newBlockFilter"] = "eth_newBlockFilter";
        JSONRPCMethod["eth_newPendingTransactionFilter"] = "eth_newPendingTransactionFilter";
        JSONRPCMethod["eth_getFilterChanges"] = "eth_getFilterChanges";
        JSONRPCMethod["eth_getFilterLogs"] = "eth_getFilterLogs";
      })(JSONRPCMethod = exports.JSONRPCMethod || (exports.JSONRPCMethod = {}));
      /***/

    },

    /***/
    "HJGG":
    /*!************************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/keccak/lib/api/shake.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function HJGG(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        var _webpack_require__2 = __webpack_require__(
        /*! stream */
        "1IWx"),
            Transform = _webpack_require__2.Transform;

        module.exports = function (KeccakState) {
          return /*#__PURE__*/function (_Transform2) {
            _inherits(Shake, _Transform2);

            var _super2 = _createSuper(Shake);

            function Shake(rate, capacity, delimitedSuffix, options) {
              var _this6;

              _classCallCheck(this, Shake);

              _this6 = _super2.call(this, options);
              _this6._rate = rate;
              _this6._capacity = capacity;
              _this6._delimitedSuffix = delimitedSuffix;
              _this6._options = options;
              _this6._state = new KeccakState();

              _this6._state.initialize(rate, capacity);

              _this6._finalized = false;
              return _this6;
            }

            _createClass(Shake, [{
              key: "_transform",
              value: function _transform(chunk, encoding, callback) {
                var error = null;

                try {
                  this.update(chunk, encoding);
                } catch (err) {
                  error = err;
                }

                callback(error);
              }
            }, {
              key: "_flush",
              value: function _flush() {}
            }, {
              key: "_read",
              value: function _read(size) {
                this.push(this.squeeze(size));
              }
            }, {
              key: "update",
              value: function update(data, encoding) {
                if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
                if (this._finalized) throw new Error('Squeeze already called');
                if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);

                this._state.absorb(data);

                return this;
              }
            }, {
              key: "squeeze",
              value: function squeeze(dataByteLength, encoding) {
                if (!this._finalized) {
                  this._finalized = true;

                  this._state.absorbLastFewBits(this._delimitedSuffix);
                }

                var data = this._state.squeeze(dataByteLength);

                if (encoding !== undefined) data = data.toString(encoding);
                return data;
              }
            }, {
              key: "_resetState",
              value: function _resetState() {
                this._state.initialize(this._rate, this._capacity);

                return this;
              }
            }, {
              key: "_clone",
              value: function _clone() {
                var clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);

                this._state.copy(clone._state);

                clone._finalized = this._finalized;
                return clone;
              }
            }]);

            return Shake;
          }(Transform);
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "IBgt":
    /*!**************************************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/Web3RequestCanceledMessage.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function IBgt(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var RelayMessage_1 = __webpack_require__(
      /*! ./RelayMessage */
      "obTc");

      function Web3RequestCanceledMessage(id) {
        return {
          type: RelayMessage_1.RelayMessageType.WEB3_REQUEST_CANCELED,
          id: id
        };
      }

      exports.Web3RequestCanceledMessage = Web3RequestCanceledMessage;
      /***/
    },

    /***/
    "KU7o":
    /*!************************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/eth-eip712-util/util.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function KU7o(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        // Extracted from https://github.com/ethereumjs/ethereumjs-util and stripped out irrelevant code
        // Original code licensed under the Mozilla Public License Version 2.0
        var createKeccakHash = __webpack_require__(
        /*! ../keccak */
        "nRTT");

        var BN = __webpack_require__(
        /*! bn.js */
        "OZ/i");
        /**
         * Returns a buffer filled with 0s
         * @method zeros
         * @param {Number} bytes  the number of bytes the buffer should be
         * @return {Buffer}
         */


        function zeros(bytes) {
          return Buffer.allocUnsafe(bytes).fill(0);
        }
        /**
         * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
         * Or it truncates the beginning if it exceeds.
         * @method setLength
         * @param {Buffer|Array} msg the value to pad
         * @param {Number} length the number of bytes the output should be
         * @param {Boolean} [right=false] whether to start padding form the left or right
         * @return {Buffer|Array}
         */


        function setLength(msg, length, right) {
          var buf = zeros(length);
          msg = toBuffer(msg);

          if (right) {
            if (msg.length < length) {
              msg.copy(buf);
              return buf;
            }

            return msg.slice(0, length);
          } else {
            if (msg.length < length) {
              msg.copy(buf, length - msg.length);
              return buf;
            }

            return msg.slice(-length);
          }
        }
        /**
         * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
         * Or it truncates the beginning if it exceeds.
         * @param {Buffer|Array} msg the value to pad
         * @param {Number} length the number of bytes the output should be
         * @return {Buffer|Array}
         */


        function setLengthRight(msg, length) {
          return setLength(msg, length, true);
        }
        /**
         * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
         * @param {*} v the value
         */


        function toBuffer(v) {
          if (!Buffer.isBuffer(v)) {
            if (Array.isArray(v)) {
              v = Buffer.from(v);
            } else if (typeof v === 'string') {
              if (isHexString(v)) {
                v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex');
              } else {
                v = Buffer.from(v);
              }
            } else if (typeof v === 'number') {
              v = intToBuffer(v);
            } else if (v === null || v === undefined) {
              v = Buffer.allocUnsafe(0);
            } else if (BN.isBN(v)) {
              v = v.toArrayLike(Buffer);
            } else if (v.toArray) {
              // converts a BN to a Buffer
              v = Buffer.from(v.toArray());
            } else {
              throw new Error('invalid type');
            }
          }

          return v;
        }
        /**
         * Converts a `Buffer` into a hex `String`
         * @param {Buffer} buf
         * @return {String}
         */


        function bufferToHex(buf) {
          buf = toBuffer(buf);
          return '0x' + buf.toString('hex');
        }
        /**
         * Creates Keccak hash of the input
         * @param {Buffer|Array|String|Number} a the input data
         * @param {Number} [bits=256] the Keccak width
         * @return {Buffer}
         */


        function keccak(a, bits) {
          a = toBuffer(a);
          if (!bits) bits = 256;
          return createKeccakHash('keccak' + bits).update(a).digest();
        }

        function padToEven(str) {
          return str.length % 2 ? '0' + str : str;
        }

        function isHexString(str) {
          return typeof str === 'string' && str.match(/^0x[0-9A-Fa-f]*$/);
        }

        function stripHexPrefix(str) {
          if (typeof str === 'string' && str.startsWith('0x')) {
            return str.slice(2);
          }

          return str;
        }

        module.exports = {
          zeros: zeros,
          setLength: setLength,
          setLengthRight: setLengthRight,
          isHexString: isHexString,
          stripHexPrefix: stripHexPrefix,
          toBuffer: toBuffer,
          bufferToHex: bufferToHex,
          keccak: keccak
        };
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "LMR0":
    /*!***********************************************************!*\
      !*** ./node_modules/walletlink/dist/components/QRCode.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function LMR0(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
        // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
        // Licensed under the Apache License, version 2.0
        var __importDefault = this && this.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var preact_1 = __webpack_require__(
        /*! preact */
        "2mXy");

        var hooks_1 = __webpack_require__(
        /*! preact/hooks */
        "MOxe");

        var qrcode_svg_1 = __importDefault(__webpack_require__(
        /*! ../vendor-js/qrcode-svg */
        "5jSq"));

        exports.QRCode = function (props) {
          var _hooks_1$useState5 = hooks_1.useState(""),
              _hooks_1$useState6 = _slicedToArray(_hooks_1$useState5, 2),
              svg = _hooks_1$useState6[0],
              setSvg = _hooks_1$useState6[1];

          hooks_1.useEffect(function () {
            var _a, _b;

            var qrcode = new qrcode_svg_1["default"]({
              content: props.content,
              background: props.bgColor || "#ffffff",
              color: props.fgColor || "#000000",
              container: "svg",
              ecl: "M",
              width: (_a = props.width) !== null && _a !== void 0 ? _a : 256,
              height: (_b = props.height) !== null && _b !== void 0 ? _b : 256,
              padding: 0
            });
            var base64 = Buffer.from(qrcode.svg(), "utf8").toString("base64");
            setSvg("data:image/svg+xml;base64,".concat(base64));
          });
          return svg ? preact_1.h("img", {
            src: svg,
            alt: "QR Code"
          }) : null;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "MkKo":
    /*!*************************************************************************!*\
      !*** ./node_modules/walletlink/dist/connection/WalletLinkConnection.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function MkKo(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var types_1 = __webpack_require__(
      /*! ../types */
      "p7SB");

      var ClientMessage_1 = __webpack_require__(
      /*! ./ClientMessage */
      "jOtK");

      var RxWebSocket_1 = __webpack_require__(
      /*! ./RxWebSocket */
      "976o");

      var ServerMessage_1 = __webpack_require__(
      /*! ./ServerMessage */
      "4Mv7");

      var HEARTBEAT_INTERVAL = 10000;
      var REQUEST_TIMEOUT = 60000;
      /**
       * WalletLink Connection
       */

      var WalletLinkConnection = /*#__PURE__*/function () {
        /**
         * Constructor
         * @param sessionId Session ID
         * @param sessionKey Session Key
         * @param serverUrl Walletlinkd RPC URL
         * @param [WebSocketClass] Custom WebSocket implementation
         */
        function WalletLinkConnection(sessionId, sessionKey, serverUrl) {
          var _this7 = this;

          var WebSocketClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : WebSocket;

          _classCallCheck(this, WalletLinkConnection);

          this.sessionId = sessionId;
          this.sessionKey = sessionKey;
          this.subscriptions = new rxjs_1.Subscription();
          this.destroyed = false;
          this.lastHeartbeatResponse = 0;
          this.nextReqId = types_1.IntNumber(1);
          this.connectedSubject = new rxjs_1.BehaviorSubject(false);
          this.linkedSubject = new rxjs_1.BehaviorSubject(false);
          this.sessionConfigSubject = new rxjs_1.ReplaySubject(1);
          var ws = new RxWebSocket_1.RxWebSocket(serverUrl + "/rpc", WebSocketClass);
          this.ws = ws; // attempt to reconnect every 5 seconds when disconnected

          this.subscriptions.add(ws.connectionState$.pipe( // ignore initial DISCONNECTED state
          operators_1.skip(1), // if DISCONNECTED and not destroyed
          operators_1.filter(function (cs) {
            return cs === RxWebSocket_1.ConnectionState.DISCONNECTED && !_this7.destroyed;
          }), // wait 5 seconds
          operators_1.delay(5000), // check whether it's destroyed again
          operators_1.filter(function (_) {
            return !_this7.destroyed;
          }), // reconnect
          operators_1.flatMap(function (_) {
            return ws.connect();
          }), operators_1.retry()).subscribe()); // perform authentication upon connection

          this.subscriptions.add(ws.connectionState$.pipe( // ignore initial DISCONNECTED and CONNECTING states
          operators_1.skip(2), operators_1.switchMap(function (cs) {
            return rxjs_1.iif(function () {
              return cs === RxWebSocket_1.ConnectionState.CONNECTED;
            }, // if CONNECTED, authenticate, and then check link status
            _this7.authenticate().pipe(operators_1.tap(function (_) {
              return _this7.sendIsLinked();
            }), operators_1.tap(function (_) {
              return _this7.sendGetSessionConfig();
            }), operators_1.map(function (_) {
              return true;
            })), // if not CONNECTED, emit false immediately
            rxjs_1.of(false));
          }), operators_1.distinctUntilChanged(), operators_1.catchError(function (_) {
            return rxjs_1.of(false);
          })).subscribe(function (connected) {
            return _this7.connectedSubject.next(connected);
          })); // send heartbeat every n seconds while connected

          this.subscriptions.add(ws.connectionState$.pipe( // ignore initial DISCONNECTED state
          operators_1.skip(1), operators_1.switchMap(function (cs) {
            return rxjs_1.iif(function () {
              return cs === RxWebSocket_1.ConnectionState.CONNECTED;
            }, // if CONNECTED, start the heartbeat timer
            rxjs_1.timer(0, HEARTBEAT_INTERVAL));
          })).subscribe(function (i) {
            return (// first timer event updates lastHeartbeat timestamp
              // subsequent calls send heartbeat message
              i === 0 ? _this7.updateLastHeartbeat() : _this7.heartbeat()
            );
          })); // handle server's heartbeat responses

          this.subscriptions.add(ws.incomingData$.pipe(operators_1.filter(function (m) {
            return m === "h";
          })).subscribe(function (_) {
            return _this7.updateLastHeartbeat();
          })); // handle link status updates

          this.subscriptions.add(ws.incomingJSONData$.pipe(operators_1.filter(function (m) {
            return ["IsLinkedOK", "Linked"].includes(m.type);
          })).subscribe(function (m) {
            var msg = m;

            _this7.linkedSubject.next(msg.linked || msg.onlineGuests > 0);
          })); // handle session config updates

          this.subscriptions.add(ws.incomingJSONData$.pipe(operators_1.filter(function (m) {
            return ["GetSessionConfigOK", "SessionConfigUpdated"].includes(m.type);
          })).subscribe(function (m) {
            var msg = m;

            _this7.sessionConfigSubject.next({
              webhookId: msg.webhookId,
              webhookUrl: msg.webhookUrl,
              metadata: msg.metadata
            });
          }));
        }
        /**
         * Make a connection to the server
         */


        _createClass(WalletLinkConnection, [{
          key: "connect",
          value: function connect() {
            if (this.destroyed) {
              throw new Error("instance is destroyed");
            }

            this.ws.connect().subscribe();
          }
          /**
           * Terminate connection, and mark as destroyed. To reconnect, create a new
           * instance of WalletLinkConnection
           */

        }, {
          key: "destroy",
          value: function destroy() {
            this.subscriptions.unsubscribe();
            this.ws.disconnect();
            this.destroyed = true;
          }
          /**
           * Emit true if connected and authenticated, else false
           * @returns an Observable
           */

        }, {
          key: "setSessionMetadata",

          /**
           * Set session metadata in SessionConfig object
           * @param key
           * @param value
           * @returns an Observable that completes when successful
           */
          value: function setSessionMetadata(key, value) {
            var _this8 = this;

            var message = ClientMessage_1.ClientMessageSetSessionConfig({
              id: types_1.IntNumber(this.nextReqId++),
              sessionId: this.sessionId,
              metadata: _defineProperty({}, key, value)
            });
            return this.onceConnected$.pipe(operators_1.flatMap(function (_) {
              return _this8.makeRequest(message);
            }), operators_1.map(function (res) {
              if (ServerMessage_1.isServerMessageFail(res)) {
                throw new Error(res.error || "failed to set session metadata");
              }
            }));
          }
          /**
           * Publish an event and emit event ID when successful
           * @param event event name
           * @param data event data
           * @param callWebhook whether the webhook should be invoked
           * @returns an Observable that emits event ID when successful
           */

        }, {
          key: "publishEvent",
          value: function publishEvent(event, data) {
            var _this9 = this;

            var callWebhook = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var message = ClientMessage_1.ClientMessagePublishEvent({
              id: types_1.IntNumber(this.nextReqId++),
              sessionId: this.sessionId,
              event: event,
              data: data,
              callWebhook: callWebhook
            });
            return this.onceLinked$.pipe(operators_1.flatMap(function (_) {
              return _this9.makeRequest(message);
            }), operators_1.map(function (res) {
              if (ServerMessage_1.isServerMessageFail(res)) {
                throw new Error(res.error || "failed to publish event");
              }

              return res.eventId;
            }));
          }
        }, {
          key: "sendData",
          value: function sendData(message) {
            this.ws.sendData(JSON.stringify(message));
          }
        }, {
          key: "updateLastHeartbeat",
          value: function updateLastHeartbeat() {
            this.lastHeartbeatResponse = Date.now();
          }
        }, {
          key: "heartbeat",
          value: function heartbeat() {
            if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
              this.ws.disconnect();
              return;
            }

            try {
              this.ws.sendData("h");
            } catch (_a) {}
          }
        }, {
          key: "makeRequest",
          value: function makeRequest(message) {
            var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : REQUEST_TIMEOUT;
            var reqId = message.id;

            try {
              this.sendData(message);
            } catch (err) {
              return rxjs_1.throwError(err);
            } // await server message with corresponding id


            return this.ws.incomingJSONData$.pipe(operators_1.timeoutWith(timeout, rxjs_1.throwError(new Error("request ".concat(reqId, " timed out")))), operators_1.filter(function (m) {
              return m.id === reqId;
            }), operators_1.take(1));
          }
        }, {
          key: "authenticate",
          value: function authenticate() {
            var msg = ClientMessage_1.ClientMessageHostSession({
              id: types_1.IntNumber(this.nextReqId++),
              sessionId: this.sessionId,
              sessionKey: this.sessionKey
            });
            return this.makeRequest(msg).pipe(operators_1.map(function (res) {
              if (ServerMessage_1.isServerMessageFail(res)) {
                throw new Error(res.error || "failed to authentcate");
              }
            }));
          }
        }, {
          key: "sendIsLinked",
          value: function sendIsLinked() {
            var msg = ClientMessage_1.ClientMessageIsLinked({
              id: types_1.IntNumber(this.nextReqId++),
              sessionId: this.sessionId
            });
            this.sendData(msg);
          }
        }, {
          key: "sendGetSessionConfig",
          value: function sendGetSessionConfig() {
            var msg = ClientMessage_1.ClientMessageGetSessionConfig({
              id: types_1.IntNumber(this.nextReqId++),
              sessionId: this.sessionId
            });
            this.sendData(msg);
          }
        }, {
          key: "connected$",
          get: function get() {
            return this.connectedSubject.asObservable();
          }
          /**
           * Emit once connected
           * @returns an Observable
           */

        }, {
          key: "onceConnected$",
          get: function get() {
            return this.connected$.pipe(operators_1.filter(function (v) {
              return v;
            }), operators_1.take(1), operators_1.map(function () {
              return void 0;
            }));
          }
          /**
           * Emit true if linked (a guest has joined before)
           * @returns an Observable
           */

        }, {
          key: "linked$",
          get: function get() {
            return this.linkedSubject.asObservable();
          }
          /**
           * Emit once when linked
           * @returns an Observable
           */

        }, {
          key: "onceLinked$",
          get: function get() {
            return this.linked$.pipe(operators_1.filter(function (v) {
              return v;
            }), operators_1.take(1), operators_1.map(function () {
              return void 0;
            }));
          }
          /**
           * Emit current session config if available, and subsequent updates
           * @returns an Observable for the session config
           */

        }, {
          key: "sessionConfig$",
          get: function get() {
            return this.sessionConfigSubject.asObservable();
          }
          /**
           * Emit incoming Event messages
           * @returns an Observable for the messages
           */

        }, {
          key: "incomingEvent$",
          get: function get() {
            return this.ws.incomingJSONData$.pipe(operators_1.filter(function (m) {
              if (m.type !== "Event") {
                return false;
              }

              var sme = m;
              return typeof sme.sessionId === "string" && typeof sme.eventId === "string" && typeof sme.event === "string" && typeof sme.data === "string";
            }), operators_1.map(function (m) {
              return m;
            }));
          }
        }]);

        return WalletLinkConnection;
      }();

      exports.WalletLinkConnection = WalletLinkConnection;
      /***/
    },

    /***/
    "OoBR":
    /*!*******************************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/Web3ResponseMessage.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function OoBR(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var RelayMessage_1 = __webpack_require__(
      /*! ./RelayMessage */
      "obTc");

      function Web3ResponseMessage(params) {
        return Object.assign({
          type: RelayMessage_1.RelayMessageType.WEB3_RESPONSE
        }, params);
      }

      exports.Web3ResponseMessage = Web3ResponseMessage;

      function isWeb3ResponseMessage(msg) {
        return msg && msg.type === RelayMessage_1.RelayMessageType.WEB3_RESPONSE;
      }

      exports.isWeb3ResponseMessage = isWeb3ResponseMessage;
      /***/
    },

    /***/
    "PYje":
    /*!**********************************************************!*\
      !*** ./node_modules/walletlink/dist/lib/cssReset-css.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function PYje(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = ".-walletlink-css-reset,.-walletlink-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:block;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto;all:initial;all:unset}.-walletlink-css-reset *{box-sizing:border-box;display:initial;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;line-height:1}.-walletlink-css-reset [class*=container]{margin:0;padding:0}.-walletlink-css-reset style{display:none}";
      /***/
    },

    /***/
    "Ppv8":
    /*!******************************************************!*\
      !*** ./node_modules/walletlink/dist/lib/cssReset.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function Ppv8(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var cssReset_css_1 = __importDefault(__webpack_require__(
      /*! ./cssReset-css */
      "PYje"));

      function injectCssReset() {
        var styleEl = document.createElement("style");
        styleEl.type = "text/css";
        styleEl.appendChild(document.createTextNode(cssReset_css_1["default"]));
        document.documentElement.appendChild(styleEl);
      }

      exports.injectCssReset = injectCssReset;
      /***/
    },

    /***/
    "Py8h":
    /*!***********************************************!*\
      !*** ./node_modules/walletlink/dist/index.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function Py8h(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var WalletLinkProvider_1 = __webpack_require__(
      /*! ./provider/WalletLinkProvider */
      "e7sy");

      var WalletLink_1 = __webpack_require__(
      /*! ./WalletLink */
      "Yjll");

      var WalletLinkProvider_2 = __webpack_require__(
      /*! ./provider/WalletLinkProvider */
      "e7sy");

      exports.WalletLinkProvider = WalletLinkProvider_2.WalletLinkProvider;

      var WalletLink_2 = __webpack_require__(
      /*! ./WalletLink */
      "Yjll");

      exports.WalletLink = WalletLink_2.WalletLink;
      exports["default"] = WalletLink_1.WalletLink;

      if (typeof window !== "undefined") {
        window.WalletLink = WalletLink_1.WalletLink;
        window.WalletLinkProvider = WalletLinkProvider_1.WalletLinkProvider;
      }
      /***/

    },

    /***/
    "UTEl":
    /*!*************************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/eth-eip712-util/index.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function UTEl(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        var util = __webpack_require__(
        /*! ./util */
        "KU7o");

        var abi = __webpack_require__(
        /*! ./abi */
        "hLHX");

        var TYPED_MESSAGE_SCHEMA = {
          type: 'object',
          properties: {
            types: {
              type: 'object',
              additionalProperties: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string'
                    },
                    type: {
                      type: 'string'
                    }
                  },
                  required: ['name', 'type']
                }
              }
            },
            primaryType: {
              type: 'string'
            },
            domain: {
              type: 'object'
            },
            message: {
              type: 'object'
            }
          },
          required: ['types', 'primaryType', 'domain', 'message']
        };
        /**
         * A collection of utility functions used for signing typed data
         */

        var TypedDataUtils = {
          /**
           * Encodes an object by encoding and concatenating each of its members
           *
           * @param {string} primaryType - Root type
           * @param {Object} data - Object to encode
           * @param {Object} types - Type definitions
           * @returns {string} - Encoded representation of an object
           */
          encodeData: function encodeData(primaryType, data, types) {
            var _this10 = this;

            var useV4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            var encodedTypes = ['bytes32'];
            var encodedValues = [this.hashType(primaryType, types)];

            if (useV4) {
              var encodeField = function encodeField(name, type, value) {
                if (types[type] !== undefined) {
                  return ['bytes32', value == null ? '0x0000000000000000000000000000000000000000000000000000000000000000' : util.keccak(_this10.encodeData(type, value, types, useV4))];
                }

                if (value === undefined) throw new Error("missing value for field ".concat(name, " of type ").concat(type));

                if (type === 'bytes') {
                  return ['bytes32', util.keccak(value)];
                }

                if (type === 'string') {
                  // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
                  if (typeof value === 'string') {
                    value = Buffer.from(value, 'utf8');
                  }

                  return ['bytes32', util.keccak(value)];
                }

                if (type.lastIndexOf(']') === type.length - 1) {
                  var parsedType = type.slice(0, type.lastIndexOf('['));
                  var typeValuePairs = value.map(function (item) {
                    return encodeField(name, parsedType, item);
                  });
                  return ['bytes32', util.keccak(abi.rawEncode(typeValuePairs.map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 1),
                        type = _ref2[0];

                    return type;
                  }), typeValuePairs.map(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        value = _ref4[1];

                    return value;
                  })))];
                }

                return [type, value];
              };

              var _iterator = _createForOfIteratorHelper(types[primaryType]),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var field = _step.value;

                  var _encodeField = encodeField(field.name, field.type, data[field.name]),
                      _encodeField2 = _slicedToArray(_encodeField, 2),
                      type = _encodeField2[0],
                      value = _encodeField2[1];

                  encodedTypes.push(type);
                  encodedValues.push(value);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              var _iterator2 = _createForOfIteratorHelper(types[primaryType]),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _field = _step2.value;
                  var _value = data[_field.name];

                  if (_value !== undefined) {
                    if (_field.type === 'bytes') {
                      encodedTypes.push('bytes32');
                      _value = util.keccak(_value);
                      encodedValues.push(_value);
                    } else if (_field.type === 'string') {
                      encodedTypes.push('bytes32'); // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex

                      if (typeof _value === 'string') {
                        _value = Buffer.from(_value, 'utf8');
                      }

                      _value = util.keccak(_value);
                      encodedValues.push(_value);
                    } else if (types[_field.type] !== undefined) {
                      encodedTypes.push('bytes32');
                      _value = util.keccak(this.encodeData(_field.type, _value, types, useV4));
                      encodedValues.push(_value);
                    } else if (_field.type.lastIndexOf(']') === _field.type.length - 1) {
                      throw new Error('Arrays currently unimplemented in encodeData');
                    } else {
                      encodedTypes.push(_field.type);
                      encodedValues.push(_value);
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            return abi.rawEncode(encodedTypes, encodedValues);
          },

          /**
           * Encodes the type of an object by encoding a comma delimited list of its members
           *
           * @param {string} primaryType - Root type to encode
           * @param {Object} types - Type definitions
           * @returns {string} - Encoded representation of the type of an object
           */
          encodeType: function encodeType(primaryType, types) {
            var result = '';
            var deps = this.findTypeDependencies(primaryType, types).filter(function (dep) {
              return dep !== primaryType;
            });
            deps = [primaryType].concat(deps.sort());

            var _iterator3 = _createForOfIteratorHelper(deps),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var type = _step3.value;
                var children = types[type];

                if (!children) {
                  throw new Error('No type definition specified: ' + type);
                }

                result += type + '(' + types[type].map(function (_ref5) {
                  var name = _ref5.name,
                      type = _ref5.type;
                  return type + ' ' + name;
                }).join(',') + ')';
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return result;
          },

          /**
           * Finds all types within a type defintion object
           *
           * @param {string} primaryType - Root type
           * @param {Object} types - Type definitions
           * @param {Array} results - current set of accumulated types
           * @returns {Array} - Set of all types found in the type definition
           */
          findTypeDependencies: function findTypeDependencies(primaryType, types) {
            var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            primaryType = primaryType.match(/^\w*/)[0];

            if (results.includes(primaryType) || types[primaryType] === undefined) {
              return results;
            }

            results.push(primaryType);

            var _iterator4 = _createForOfIteratorHelper(types[primaryType]),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var field = _step4.value;

                var _iterator5 = _createForOfIteratorHelper(this.findTypeDependencies(field.type, types, results)),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var dep = _step5.value;
                    !results.includes(dep) && results.push(dep);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return results;
          },

          /**
           * Hashes an object
           *
           * @param {string} primaryType - Root type
           * @param {Object} data - Object to hash
           * @param {Object} types - Type definitions
           * @returns {string} - Hash of an object
           */
          hashStruct: function hashStruct(primaryType, data, types) {
            var useV4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
            return util.keccak(this.encodeData(primaryType, data, types, useV4));
          },

          /**
           * Hashes the type of an object
           *
           * @param {string} primaryType - Root type to hash
           * @param {Object} types - Type definitions
           * @returns {string} - Hash of an object
           */
          hashType: function hashType(primaryType, types) {
            return util.keccak(this.encodeType(primaryType, types));
          },

          /**
           * Removes properties from a message object that are not defined per EIP-712
           *
           * @param {Object} data - typed message object
           * @returns {Object} - typed message object with only allowed fields
           */
          sanitizeData: function sanitizeData(data) {
            var sanitizedData = {};

            for (var key in TYPED_MESSAGE_SCHEMA.properties) {
              data[key] && (sanitizedData[key] = data[key]);
            }

            if (sanitizedData.types) {
              sanitizedData.types = Object.assign({
                EIP712Domain: []
              }, sanitizedData.types);
            }

            return sanitizedData;
          },

          /**
           * Returns the hash of a typed message as per EIP-712 for signing
           *
           * @param {Object} typedData - Types message data to sign
           * @returns {string} - sha3 hash for signing
           */
          hash: function hash(typedData) {
            var useV4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var sanitizedData = this.sanitizeData(typedData);
            var parts = [Buffer.from('1901', 'hex')];
            parts.push(this.hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, useV4));

            if (sanitizedData.primaryType !== 'EIP712Domain') {
              parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
            }

            return util.keccak(Buffer.concat(parts));
          }
        };
        module.exports = {
          TYPED_MESSAGE_SCHEMA: TYPED_MESSAGE_SCHEMA,
          TypedDataUtils: TypedDataUtils,
          hashForSignTypedDataLegacy: function hashForSignTypedDataLegacy(msgParams) {
            return typedSignatureHashLegacy(msgParams.data);
          },
          hashForSignTypedData_v3: function hashForSignTypedData_v3(msgParams) {
            return TypedDataUtils.hash(msgParams.data, false);
          },
          hashForSignTypedData_v4: function hashForSignTypedData_v4(msgParams) {
            return TypedDataUtils.hash(msgParams.data);
          }
        };
        /**
         * @param typedData - Array of data along with types, as per EIP712.
         * @returns Buffer
         */

        function typedSignatureHashLegacy(typedData) {
          var error = new Error('Expect argument to be non-empty array');
          if (typeof typedData !== 'object' || !typedData.length) throw error;
          var data = typedData.map(function (e) {
            return e.type === 'bytes' ? util.toBuffer(e.value) : e.value;
          });
          var types = typedData.map(function (e) {
            return e.type;
          });
          var schema = typedData.map(function (e) {
            if (!e.name) throw error;
            return e.type + ' ' + e.name;
          });
          return abi.soliditySHA3(['bytes32', 'bytes32'], [abi.soliditySHA3(new Array(typedData.length).fill('string'), schema), abi.soliditySHA3(types, data)]);
        }
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "Xy71":
    /*!*************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/LinkFlow.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function Xy71(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var preact_1 = __webpack_require__(
      /*! preact */
      "2mXy");

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LinkDialog_1 = __webpack_require__(
      /*! ./LinkDialog */
      "/aAL");

      var LinkFlow = /*#__PURE__*/function () {
        function LinkFlow(options) {
          _classCallCheck(this, LinkFlow);

          this.subscriptions = new rxjs_1.Subscription();
          this.isConnected = false;
          this.isOpen = false;
          this.onCancel = null;
          this.root = null;
          this.darkMode = options.darkMode;
          this.version = options.version;
          this.sessionId = options.sessionId;
          this.sessionSecret = options.sessionSecret;
          this.walletLinkUrl = options.walletLinkUrl;
          this.connected$ = options.connected$;
        }

        _createClass(LinkFlow, [{
          key: "attach",
          value: function attach(el) {
            var _this11 = this;

            this.root = document.createElement("div");
            this.root.className = "-walletlink-link-flow-root";
            el.appendChild(this.root);
            this.render();
            this.subscriptions.add(this.connected$.subscribe(function (v) {
              if (_this11.isConnected !== v) {
                _this11.isConnected = v;

                _this11.render();
              }
            }));
          }
        }, {
          key: "detach",
          value: function detach() {
            var _a;

            if (!this.root) {
              return;
            }

            this.subscriptions.unsubscribe();
            preact_1.render(null, this.root);
            (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.root);
          }
        }, {
          key: "open",
          value: function open(options) {
            this.isOpen = true;
            this.onCancel = options.onCancel;
            this.render();
          }
        }, {
          key: "close",
          value: function close() {
            this.isOpen = false;
            this.onCancel = null;
            this.render();
          }
        }, {
          key: "render",
          value: function render() {
            if (!this.root) {
              return;
            }

            preact_1.render(preact_1.h(LinkDialog_1.LinkDialog, {
              darkMode: this.darkMode,
              version: this.version,
              sessionId: this.sessionId,
              sessionSecret: this.sessionSecret,
              walletLinkUrl: this.walletLinkUrl,
              isOpen: this.isOpen,
              isConnected: this.isConnected,
              onCancel: this.onCancel
            }), this.root);
          }
        }]);

        return LinkFlow;
      }();

      exports.LinkFlow = LinkFlow;
      /***/
    },

    /***/
    "Yjll":
    /*!****************************************************!*\
      !*** ./node_modules/walletlink/dist/WalletLink.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function Yjll(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (process) {
        // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
        // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
        // Licensed under the Apache License, version 2.0
        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var cssReset_1 = __webpack_require__(
        /*! ./lib/cssReset */
        "Ppv8");

        var WalletLinkProvider_1 = __webpack_require__(
        /*! ./provider/WalletLinkProvider */
        "e7sy");

        var WalletLinkRelay_1 = __webpack_require__(
        /*! ./relay/WalletLinkRelay */
        "ZmYy");

        var util_1 = __webpack_require__(
        /*! ./util */
        "oK5k");

        var WALLETLINK_URL = process.env.WALLETLINK_URL || "https://www.walletlink.org";
        var WALLETLINK_VERSION = process.env.WALLETLINK_VERSION || __webpack_require__(
        /*! ../package.json */
        "oY2H").version || "unknown";

        var WalletLink = /*#__PURE__*/function () {
          /**
           * Constructor
           * @param options WalletLink options object
           */
          function WalletLink(options) {
            _classCallCheck(this, WalletLink);

            this._appName = "";
            this._appLogoUrl = null;
            this._relay = new WalletLinkRelay_1.WalletLinkRelay({
              walletLinkUrl: options.walletLinkUrl || WALLETLINK_URL,
              version: WALLETLINK_VERSION,
              darkMode: !!options.darkMode
            });
            this.setAppInfo(options.appName, options.appLogoUrl);

            this._relay.attach(document.documentElement);

            cssReset_1.injectCssReset();
          }
          /**
           * Create a Web3 Provider object
           * @param jsonRpcUrl Ethereum JSON RPC URL
           * @param chainId Ethereum Chain ID (Default: 1)
           * @returns A Web3 Provider
           */


          _createClass(WalletLink, [{
            key: "makeWeb3Provider",
            value: function makeWeb3Provider(jsonRpcUrl) {
              var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              return new WalletLinkProvider_1.WalletLinkProvider({
                relay: this._relay,
                jsonRpcUrl: jsonRpcUrl,
                chainId: chainId
              });
            }
            /**
             * Set application information
             * @param appName Application name
             * @param appLogoUrl Application logo image URL
             */

          }, {
            key: "setAppInfo",
            value: function setAppInfo(appName, appLogoUrl) {
              this._appName = appName || "DApp";
              this._appLogoUrl = appLogoUrl || util_1.getFavicon();

              this._relay.setAppInfo(this._appName, this._appLogoUrl);
            }
            /**
             * Disconnect. After disconnecting, this will reload the web page to ensure
             * all potential stale state is cleared.
             */

          }, {
            key: "disconnect",
            value: function disconnect() {
              this._relay.resetAndReload();
            }
          }]);

          return WalletLink;
        }();

        exports.WalletLink = WalletLink;
        /**
         * WalletLink version
         */

        WalletLink.VERSION = WALLETLINK_VERSION;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "ZK22":
    /*!*******************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/Session.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function ZK22(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

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

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var STORAGE_KEY_SESSION_ID = "session:id";
      var STORAGE_KEY_SESSION_SECRET = "session:secret";
      var STORAGE_KEY_SESSION_LINKED = "session:linked";

      var Session = /*#__PURE__*/function () {
        function Session(storage, id, secret, linked) {
          _classCallCheck(this, Session);

          this._storage = storage;
          this._id = id || crypto_1["default"].randomBytes(16).toString("hex");
          this._secret = secret || crypto_1["default"].randomBytes(32).toString("hex");
          this._key = crypto_1["default"].createHash("sha256").update("".concat(this._id, ", ").concat(this._secret, " WalletLink"), "ascii").digest("hex");
          this._linked = !!linked;
        }

        _createClass(Session, [{
          key: "save",
          value: function save() {
            this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);

            this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);

            this.persistLinked();
            return this;
          }
        }, {
          key: "persistLinked",
          value: function persistLinked() {
            this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "secret",
          get: function get() {
            return this._secret;
          }
        }, {
          key: "key",
          get: function get() {
            return this._key;
          }
        }, {
          key: "linked",
          get: function get() {
            return this._linked;
          },
          set: function set(val) {
            this._linked = val;
            this.persistLinked();
          }
        }], [{
          key: "load",
          value: function load(storage) {
            var id = storage.getItem(STORAGE_KEY_SESSION_ID);
            var linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
            var secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);

            if (id && secret) {
              return new Session(storage, id, secret, linked === "1");
            }

            return null;
          }
        }, {
          key: "clear",
          value: function clear(storage) {
            storage.removeItem(STORAGE_KEY_SESSION_SECRET);
            storage.removeItem(STORAGE_KEY_SESSION_ID);
            storage.removeItem(STORAGE_KEY_SESSION_LINKED);
          }
        }, {
          key: "persistedSessionIdChange$",
          get: function get() {
            return rxjs_1.fromEvent(window, "storage").pipe(operators_1.filter(function (evt) {
              return evt.key === STORAGE_KEY_SESSION_ID;
            }), operators_1.map(function (evt) {
              return {
                oldValue: evt.oldValue || null,
                newValue: evt.newValue || null
              };
            }));
          }
        }]);

        return Session;
      }();

      exports.Session = Session;
      /***/
    },

    /***/
    "ZmYy":
    /*!***************************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/WalletLinkRelay.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function ZmYy(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

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

      var bind_decorator_1 = __importDefault(__webpack_require__(
      /*! bind-decorator */
      "7wIv"));

      var crypto_1 = __importDefault(__webpack_require__(
      /*! crypto */
      "HEbw"));

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var url_1 = __importDefault(__webpack_require__(
      /*! url */
      "CxY0"));

      var LinkFlow_1 = __webpack_require__(
      /*! ../components/LinkFlow */
      "Xy71");

      var Snackbar_1 = __webpack_require__(
      /*! ../components/Snackbar */
      "i6jr");

      var WalletLinkConnection_1 = __webpack_require__(
      /*! ../connection/WalletLinkConnection */
      "MkKo");

      var ScopedLocalStorage_1 = __webpack_require__(
      /*! ../lib/ScopedLocalStorage */
      "Zozw");

      var util_1 = __webpack_require__(
      /*! ../util */
      "oK5k");

      var aes256gcm = __importStar(__webpack_require__(
      /*! ./aes256gcm */
      "0zMk"));

      var Session_1 = __webpack_require__(
      /*! ./Session */
      "ZK22");

      var Web3Method_1 = __webpack_require__(
      /*! ./Web3Method */
      "8YYL");

      var Web3RequestCanceledMessage_1 = __webpack_require__(
      /*! ./Web3RequestCanceledMessage */
      "IBgt");

      var Web3RequestMessage_1 = __webpack_require__(
      /*! ./Web3RequestMessage */
      "6RcL");

      var Web3Response_1 = __webpack_require__(
      /*! ./Web3Response */
      "vFHP");

      var Web3ResponseMessage_1 = __webpack_require__(
      /*! ./Web3ResponseMessage */
      "OoBR");

      var WalletLinkRelay = /*#__PURE__*/function () {
        function WalletLinkRelay(options) {
          _classCallCheck(this, WalletLinkRelay);

          this.appName = "";
          this.appLogoUrl = null;
          this.attached = false;
          this.walletLinkUrl = options.walletLinkUrl;
          var u = url_1["default"].parse(this.walletLinkUrl);
          this.walletLinkOrigin = "".concat(u.protocol, "//").concat(u.host);
          this.storage = new ScopedLocalStorage_1.ScopedLocalStorage("-walletlink:".concat(this.walletLinkOrigin));
          this.session = Session_1.Session.load(this.storage) || new Session_1.Session(this.storage).save();
          this.connection = new WalletLinkConnection_1.WalletLinkConnection(this.session.id, this.session.key, this.walletLinkUrl);
          this.connection.incomingEvent$.pipe(operators_1.filter(function (m) {
            return m.event === "Web3Response";
          })).subscribe({
            next: this.handleIncomingEvent
          }); // if session is marked destroyed, reset and reload

          this.connection.sessionConfig$.pipe(operators_1.filter(function (c) {
            return !!c.metadata && c.metadata.__destroyed === "1";
          })).subscribe({
            next: this.resetAndReload
          });
          this.snackbar = new Snackbar_1.Snackbar({
            darkMode: options.darkMode
          });
          this.linkFlow = new LinkFlow_1.LinkFlow({
            darkMode: options.darkMode,
            version: options.version,
            sessionId: this.session.id,
            sessionSecret: this.session.secret,
            walletLinkUrl: this.walletLinkUrl,
            connected$: this.connection.connected$
          });
          this.connection.connect();
        }

        _createClass(WalletLinkRelay, [{
          key: "resetAndReload",
          value: function resetAndReload() {
            var _this12 = this;

            this.connection.setSessionMetadata("__destroyed", "1").pipe(operators_1.timeout(1000), operators_1.catchError(function (_) {
              return rxjs_1.of(null);
            })).subscribe(function (_) {
              _this12.connection.destroy();

              _this12.storage.clear();

              document.location.reload();
            });
          }
        }, {
          key: "setAppInfo",
          value: function setAppInfo(appName, appLogoUrl) {
            this.appName = appName;
            this.appLogoUrl = appLogoUrl;
          }
        }, {
          key: "attach",
          value: function attach(el) {
            if (this.attached) {
              throw new Error("WalletLinkRelay is already attached");
            }

            var container = document.createElement("div");
            container.className = "-walletlink-css-reset";
            el.appendChild(container);
            this.linkFlow.attach(container);
            this.snackbar.attach(container);
          }
        }, {
          key: "getStorageItem",
          value: function getStorageItem(key) {
            return this.storage.getItem(key);
          }
        }, {
          key: "setStorageItem",
          value: function setStorageItem(key, value) {
            this.storage.setItem(key, value);
          }
        }, {
          key: "requestEthereumAccounts",
          value: function requestEthereumAccounts() {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.requestEthereumAccounts,
              params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null
              }
            });
          }
        }, {
          key: "signEthereumMessage",
          value: function signEthereumMessage(message, address, addPrefix, typedDataJson) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.signEthereumMessage,
              params: {
                message: util_1.hexStringFromBuffer(message, true),
                address: address,
                addPrefix: addPrefix,
                typedDataJson: typedDataJson || null
              }
            });
          }
        }, {
          key: "ethereumAddressFromSignedMessage",
          value: function ethereumAddressFromSignedMessage(message, signature, addPrefix) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.ethereumAddressFromSignedMessage,
              params: {
                message: util_1.hexStringFromBuffer(message, true),
                signature: util_1.hexStringFromBuffer(signature, true),
                addPrefix: addPrefix
              }
            });
          }
        }, {
          key: "signEthereumTransaction",
          value: function signEthereumTransaction(params) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.signEthereumTransaction,
              params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: util_1.bigIntStringFromBN(params.weiValue),
                data: util_1.hexStringFromBuffer(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? util_1.bigIntStringFromBN(params.gasPriceInWei) : null,
                gasLimit: params.gasLimit ? util_1.bigIntStringFromBN(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: false
              }
            });
          }
        }, {
          key: "signAndSubmitEthereumTransaction",
          value: function signAndSubmitEthereumTransaction(params) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.signEthereumTransaction,
              params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: util_1.bigIntStringFromBN(params.weiValue),
                data: util_1.hexStringFromBuffer(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? util_1.bigIntStringFromBN(params.gasPriceInWei) : null,
                gasLimit: params.gasLimit ? util_1.bigIntStringFromBN(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: true
              }
            });
          }
        }, {
          key: "submitEthereumTransaction",
          value: function submitEthereumTransaction(signedTransaction, chainId) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.submitEthereumTransaction,
              params: {
                signedTransaction: util_1.hexStringFromBuffer(signedTransaction, true),
                chainId: chainId
              }
            });
          }
        }, {
          key: "scanQRCode",
          value: function scanQRCode(regExp) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.scanQRCode,
              params: {
                regExp: regExp
              }
            });
          }
        }, {
          key: "arbitraryRequest",
          value: function arbitraryRequest(data) {
            return this.sendRequest({
              method: Web3Method_1.Web3Method.arbitrary,
              params: {
                data: data
              }
            });
          }
        }, {
          key: "sendRequest",
          value: function sendRequest(request) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              var hideSnackbarItem = null;
              var id = crypto_1["default"].randomBytes(8).toString("hex");
              var isRequestAccounts = request.method === Web3Method_1.Web3Method.requestEthereumAccounts;

              var cancel = function cancel() {
                _this13.publishWeb3RequestCanceledEvent(id);

                _this13.handleWeb3ResponseMessage(Web3ResponseMessage_1.Web3ResponseMessage({
                  id: id,
                  response: Web3Response_1.ErrorResponse(request.method, "User rejected request")
                }));

                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
              };

              if (isRequestAccounts) {
                _this13.linkFlow.open({
                  onCancel: cancel
                });

                WalletLinkRelay.accountRequestCallbackIds.add(id);
              } else {
                var snackbarProps = {
                  message: "Pushed a request to your wallet...",
                  showProgressBar: true,
                  actions: [{
                    info: "Made a mistake?",
                    buttonLabel: "Cancel",
                    onClick: cancel
                  }, {
                    info: "Not receiving requests?",
                    buttonLabel: "Reset Connection",
                    onClick: _this13.resetAndReload
                  }]
                };
                hideSnackbarItem = _this13.snackbar.presentItem(snackbarProps);
              }

              WalletLinkRelay.callbacks.set(id, function (response) {
                _this13.linkFlow.close();

                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();

                if (response.errorMessage) {
                  return reject(new Error(response.errorMessage));
                }

                resolve(response);
              });

              _this13.publishWeb3RequestEvent(id, request);
            });
          }
        }, {
          key: "publishWeb3RequestEvent",
          value: function publishWeb3RequestEvent(id, request) {
            var _this14 = this;

            var message = Web3RequestMessage_1.Web3RequestMessage({
              id: id,
              request: request
            });
            this.publishEvent("Web3Request", message, true).subscribe({
              error: function error(err) {
                _this14.handleWeb3ResponseMessage(Web3ResponseMessage_1.Web3ResponseMessage({
                  id: message.id,
                  response: {
                    method: message.request.method,
                    errorMessage: err.message
                  }
                }));
              }
            });
          }
        }, {
          key: "publishWeb3RequestCanceledEvent",
          value: function publishWeb3RequestCanceledEvent(id) {
            var message = Web3RequestCanceledMessage_1.Web3RequestCanceledMessage(id);
            this.publishEvent("Web3RequestCanceled", message, false).subscribe();
          }
        }, {
          key: "publishEvent",
          value: function publishEvent(event, message, callWebhook) {
            var encrypted = aes256gcm.encrypt(JSON.stringify(Object.assign(Object.assign({}, message), {
              origin: location.origin
            })), this.session.secret);
            return this.connection.publishEvent(event, encrypted, callWebhook);
          }
        }, {
          key: "handleIncomingEvent",
          value: function handleIncomingEvent(event) {
            var json;

            try {
              json = JSON.parse(aes256gcm.decrypt(event.data, this.session.secret));
            } catch (_a) {
              return;
            }

            var message = Web3ResponseMessage_1.isWeb3ResponseMessage(json) ? json : null;

            if (!message) {
              return;
            }

            this.handleWeb3ResponseMessage(message);
          }
        }, {
          key: "handleWeb3ResponseMessage",
          value: function handleWeb3ResponseMessage(message) {
            var _this15 = this;

            var response = message.response;

            if (Web3Response_1.isRequestEthereumAccountsResponse(response)) {
              Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach(function (id) {
                return _this15.invokeCallback(Object.assign(Object.assign({}, message), {
                  id: id
                }));
              });
              WalletLinkRelay.accountRequestCallbackIds.clear();
              return;
            }

            this.invokeCallback(message);
          }
        }, {
          key: "invokeCallback",
          value: function invokeCallback(message) {
            var callback = WalletLinkRelay.callbacks.get(message.id);

            if (callback) {
              callback(message.response);
              WalletLinkRelay.callbacks["delete"](message.id);
            }
          }
        }]);

        return WalletLinkRelay;
      }();

      WalletLinkRelay.callbacks = new Map();
      WalletLinkRelay.accountRequestCallbackIds = new Set();

      __decorate([bind_decorator_1["default"]], WalletLinkRelay.prototype, "resetAndReload", null);

      __decorate([bind_decorator_1["default"]], WalletLinkRelay.prototype, "handleIncomingEvent", null);

      exports.WalletLinkRelay = WalletLinkRelay;
      /***/
    },

    /***/
    "Zozw":
    /*!****************************************************************!*\
      !*** ./node_modules/walletlink/dist/lib/ScopedLocalStorage.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function Zozw(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ScopedLocalStorage = /*#__PURE__*/function () {
        function ScopedLocalStorage(scope) {
          _classCallCheck(this, ScopedLocalStorage);

          this.scope = scope;
        }

        _createClass(ScopedLocalStorage, [{
          key: "setItem",
          value: function setItem(key, value) {
            localStorage.setItem(this.scopedKey(key), value);
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return localStorage.getItem(this.scopedKey(key));
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            localStorage.removeItem(this.scopedKey(key));
          }
        }, {
          key: "clear",
          value: function clear() {
            var prefix = this.scopedKey("");
            var keysToRemove = [];

            for (var i = 0; i < localStorage.length; i++) {
              var key = localStorage.key(i);

              if (typeof key === "string" && key.startsWith(prefix)) {
                keysToRemove.push(key);
              }
            }

            keysToRemove.forEach(function (key) {
              return localStorage.removeItem(key);
            });
          }
        }, {
          key: "scopedKey",
          value: function scopedKey(key) {
            return "".concat(this.scope, ":").concat(key);
          }
        }]);

        return ScopedLocalStorage;
      }();

      exports.ScopedLocalStorage = ScopedLocalStorage;
      /***/
    },

    /***/
    "bFFw":
    /*!*******************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/LinkDialog-css.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function bFFw(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = ".-walletlink-css-reset .-walletlink-link-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-link-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.33);transition:opacity .25s}.-walletlink-css-reset .-walletlink-link-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-link-dialog-box{display:flex;position:relative;flex-direction:column;background-color:#f6f6f6;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.1),0px 0px 8px rgba(0,0,0,.05);transform:scale(1);transition:opacity .25s,transform .25s;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-link-dialog-box-content{padding:24px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content h3{display:block;margin-bottom:24px;text-align:left;text-transform:uppercase;font-size:22px;font-weight:bold;line-height:1.2;color:#000}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode{position:relative;display:block;margin-bottom:24px;background-color:#f6f6f6;padding:16px;border-radius:16px;box-shadow:4px 4px 8px rgba(0,0,0,.15),-8px -8px 8px #fff;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper{display:block;width:232px;height:232px;padding:4px;border-radius:4px;background:#f4f4f4;margin-bottom:16px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper img{display:block;width:224px;height:224px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode>p{display:block;color:gray;font-weight:bold;font-size:12px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(246,246,246,.98)}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting p{margin-top:16px;color:#333;font-size:12px;font-weight:bold}.-walletlink-css-reset .-walletlink-link-dialog-box-content a{text-align:center;cursor:pointer;transition:color .1s;font-size:14px}.-walletlink-css-reset .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:visited{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:active{color:#666;text-decoration:underline}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:24px;right:24px;width:24px;height:24px;border-radius:12px;background-color:#e7e7e7;cursor:pointer}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x{position:relative;display:block}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{content:\"\";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:2px;background-color:#999;transition:background-color .2s}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-link-dialog-container{display:block}.-walletlink-css-reset .-walletlink-link-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content h3{color:#ccc}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode{background-color:#2a2a2a;box-shadow:4px 4px 8px rgba(0,0,0,.5),-8px -8px 8px #343434}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode>p{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting{background:rgba(42,42,42,.98)}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting p{color:#ddd}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:visited{color:#888}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:active{color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel{background-color:#333}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::after{background-color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::after{background-color:#eee}";
      /***/
    },

    /***/
    "e7sy":
    /*!*********************************************************************!*\
      !*** ./node_modules/walletlink/dist/provider/WalletLinkProvider.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function e7sy(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
        // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
        // Licensed under the Apache License, version 2.0
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
        "OZ/i"));

        var util_1 = __webpack_require__(
        /*! ../util */
        "oK5k");

        var eth_eip712_util_1 = __importDefault(__webpack_require__(
        /*! ../vendor-js/eth-eip712-util */
        "UTEl"));

        var FilterPolyfill_1 = __webpack_require__(
        /*! ./FilterPolyfill */
        "98+w");

        var JSONRPC_1 = __webpack_require__(
        /*! ./JSONRPC */
        "CkXD");

        var Web3Provider_1 = __webpack_require__(
        /*! ./Web3Provider */
        "rN33");

        var LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";

        var WalletLinkProvider = /*#__PURE__*/function () {
          function WalletLinkProvider(options) {
            _classCallCheck(this, WalletLinkProvider);

            this._filterPolyfill = new FilterPolyfill_1.FilterPolyfill(this);
            this._addresses = [];
            this._send = this.send;
            this._sendAsync = this.sendAsync;

            if (!options.relay) {
              throw new Error("realy must be provided");
            }

            if (!options.jsonRpcUrl) {
              throw new Error("jsonRpcUrl must be provided");
            }

            this._relay = options.relay;
            this._chainId = util_1.ensureIntNumber(options.chainId || 1);
            this._jsonRpcUrl = options.jsonRpcUrl;

            var cahedAddresses = this._relay.getStorageItem(LOCAL_STORAGE_ADDRESSES_KEY);

            if (cahedAddresses) {
              var addresses = cahedAddresses.split(" ");

              if (addresses[0] !== "") {
                this._addresses = addresses;
              }
            }
          }

          _createClass(WalletLinkProvider, [{
            key: "isConnected",
            value: function isConnected() {
              return true;
            }
          }, {
            key: "enable",
            value: function () {
              var _enable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!(this._addresses.length > 0)) {
                          _context11.next = 2;
                          break;
                        }

                        return _context11.abrupt("return", this._addresses);

                      case 2:
                        _context11.next = 4;
                        return this._send(JSONRPC_1.JSONRPCMethod.eth_requestAccounts);

                      case 4:
                        return _context11.abrupt("return", _context11.sent);

                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));

              function enable() {
                return _enable.apply(this, arguments);
              }

              return enable;
            }()
          }, {
            key: "close",
            value: function close() {
              this._relay.resetAndReload();
            }
          }, {
            key: "send",
            value: function send(requestOrMethod, callbackOrParams) {
              var _this16 = this;

              // send<T>(method, params): Promise<T>
              if (typeof requestOrMethod === "string") {
                var method = requestOrMethod;
                var params = Array.isArray(callbackOrParams) ? callbackOrParams : callbackOrParams !== undefined ? [callbackOrParams] : [];
                var request = {
                  jsonrpc: "2.0",
                  id: 0,
                  method: method,
                  params: params
                };
                return this._sendRequestAsync(request).then(function (res) {
                  return res.result;
                });
              } // send(JSONRPCRequest | JSONRPCRequest[], callback): void


              if (typeof callbackOrParams === "function") {
                var _request = requestOrMethod;
                var callback = callbackOrParams;
                return this._sendAsync(_request, callback);
              } // send(JSONRPCRequest[]): JSONRPCResponse[]


              if (Array.isArray(requestOrMethod)) {
                var requests = requestOrMethod;
                return requests.map(function (r) {
                  return _this16._sendRequest(r);
                });
              } // send(JSONRPCRequest): JSONRPCResponse


              var req = requestOrMethod;
              return this._sendRequest(req);
            }
          }, {
            key: "sendAsync",
            value: function sendAsync(request, callback) {
              if (typeof callback !== "function") {
                throw new Error("callback is required");
              } // send(JSONRPCRequest[], callback): void


              if (Array.isArray(request)) {
                var arrayCb = callback;

                this._sendMultipleRequestsAsync(request).then(function (responses) {
                  return arrayCb(null, responses);
                })["catch"](function (err) {
                  return arrayCb(err, null);
                });

                return;
              } // send(JSONRPCRequest, callback): void


              var cb = callback;

              this._sendRequestAsync(request).then(function (response) {
                return cb(null, response);
              })["catch"](function (err) {
                return cb(err, null);
              });
            }
          }, {
            key: "scanQRCode",
            value: function () {
              var _scanQRCode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(match) {
                var res;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return this._relay.scanQRCode(util_1.ensureRegExpString(match));

                      case 2:
                        res = _context12.sent;

                        if (!(typeof res.result !== "string")) {
                          _context12.next = 5;
                          break;
                        }

                        throw new Error("result was not a string");

                      case 5:
                        return _context12.abrupt("return", res.result);

                      case 6:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));

              function scanQRCode(_x9) {
                return _scanQRCode.apply(this, arguments);
              }

              return scanQRCode;
            }()
          }, {
            key: "arbitraryRequest",
            value: function () {
              var _arbitraryRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data) {
                var res;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return this._relay.arbitraryRequest(data);

                      case 2:
                        res = _context13.sent;

                        if (!(typeof res.result !== "string")) {
                          _context13.next = 5;
                          break;
                        }

                        throw new Error("result was not a string");

                      case 5:
                        return _context13.abrupt("return", res.result);

                      case 6:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));

              function arbitraryRequest(_x10) {
                return _arbitraryRequest.apply(this, arguments);
              }

              return arbitraryRequest;
            }()
          }, {
            key: "supportsSubscriptions",
            value: function supportsSubscriptions() {
              return false;
            }
          }, {
            key: "subscribe",
            value: function subscribe() {
              throw new Error("Subscriptions are not supported");
            }
          }, {
            key: "unsubscribe",
            value: function unsubscribe() {
              throw new Error("Subscriptions are not supported");
            }
          }, {
            key: "disconnect",
            value: function disconnect() {
              return true;
            }
          }, {
            key: "_sendRequest",
            value: function _sendRequest(request) {
              var response = {
                jsonrpc: "2.0",
                id: request.id
              };
              var method = request.method;
              response.result = this._handleSynchronousMethods(request);

              if (response.result === undefined) {
                throw new Error("WalletLink does not support calling ".concat(method, " synchronously without ") + "a callback. Please provide a callback parameter to call ".concat(method, " ") + "asynchronously.");
              }

              return response;
            }
          }, {
            key: "_setAddresses",
            value: function _setAddresses(addresses) {
              if (!Array.isArray(addresses)) {
                throw new Error("addresses is not an array");
              }

              this._addresses = addresses.map(function (address) {
                return util_1.ensureAddressString(address);
              });

              this._relay.setStorageItem(LOCAL_STORAGE_ADDRESSES_KEY, addresses.join(" "));

              window.dispatchEvent(new CustomEvent("walletlink:addresses", {
                detail: this._addresses
              }));
            }
          }, {
            key: "_sendRequestAsync",
            value: function _sendRequestAsync(request) {
              var _this17 = this;

              return new Promise(function (resolve, reject) {
                try {
                  var syncResult = _this17._handleSynchronousMethods(request);

                  if (syncResult !== undefined) {
                    return resolve({
                      jsonrpc: "2.0",
                      id: request.id,
                      result: syncResult
                    });
                  }

                  var filterPromise = _this17._handleAsynchronousFilterMethods(request);

                  if (filterPromise !== undefined) {
                    filterPromise.then(function (res) {
                      return resolve(Object.assign(Object.assign({}, res), {
                        id: request.id
                      }));
                    })["catch"](function (err) {
                      return reject(err);
                    });
                    return;
                  }
                } catch (err) {
                  return reject(err);
                }

                _this17._handleAsynchronousMethods(request).then(function (res) {
                  return resolve(Object.assign(Object.assign({}, res), {
                    id: request.id
                  }));
                })["catch"](function (err) {
                  return reject(err);
                });
              });
            }
          }, {
            key: "_sendMultipleRequestsAsync",
            value: function _sendMultipleRequestsAsync(requests) {
              var _this18 = this;

              return Promise.all(requests.map(function (r) {
                return _this18._sendRequestAsync(r);
              }));
            }
          }, {
            key: "_handleSynchronousMethods",
            value: function _handleSynchronousMethods(request) {
              var method = request.method;
              var params = request.params || [];

              switch (method) {
                case JSONRPC_1.JSONRPCMethod.eth_accounts:
                  return this._eth_accounts();

                case JSONRPC_1.JSONRPCMethod.eth_coinbase:
                  return this._eth_coinbase();

                case JSONRPC_1.JSONRPCMethod.eth_uninstallFilter:
                  return this._eth_uninstallFilter(params);

                case JSONRPC_1.JSONRPCMethod.net_version:
                  return this._net_version();

                default:
                  return undefined;
              }
            }
          }, {
            key: "_handleAsynchronousMethods",
            value: function _handleAsynchronousMethods(request) {
              var method = request.method;
              var params = request.params || [];

              switch (method) {
                case JSONRPC_1.JSONRPCMethod.eth_requestAccounts:
                  return this._eth_requestAccounts();

                case JSONRPC_1.JSONRPCMethod.eth_sign:
                  return this._eth_sign(params);

                case JSONRPC_1.JSONRPCMethod.eth_ecRecover:
                  return this._eth_ecRecover(params);

                case JSONRPC_1.JSONRPCMethod.personal_sign:
                  return this._personal_sign(params);

                case JSONRPC_1.JSONRPCMethod.personal_ecRecover:
                  return this._personal_ecRecover(params);

                case JSONRPC_1.JSONRPCMethod.eth_signTransaction:
                  return this._eth_signTransaction(params);

                case JSONRPC_1.JSONRPCMethod.eth_sendRawTransaction:
                  return this._eth_sendRawTransaction(params);

                case JSONRPC_1.JSONRPCMethod.eth_sendTransaction:
                  return this._eth_sendTransaction(params);

                case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v1:
                  return this._eth_signTypedData_v1(params);

                case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v2:
                  return this._throwUnsupportedMethodError();

                case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v3:
                  return this._eth_signTypedData_v3(params);

                case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v4:
                case JSONRPC_1.JSONRPCMethod.eth_signTypedData:
                  return this._eth_signTypedData_v4(params);

                case JSONRPC_1.JSONRPCMethod.walletlink_arbitrary:
                  return this._walletlink_arbitrary(params);
              }

              return window.fetch(this._jsonRpcUrl, {
                method: "POST",
                body: JSON.stringify(request),
                mode: "cors",
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(function (res) {
                return res.json();
              }).then(function (json) {
                if (!json) {
                  throw new Web3Provider_1.ProviderError("unexpected response");
                }

                var response = json;
                var error = response.error;

                if (error) {
                  throw new Web3Provider_1.ProviderError(error.message || "RPC Error", error.code, error.data);
                }

                return response;
              });
            }
          }, {
            key: "_handleAsynchronousFilterMethods",
            value: function _handleAsynchronousFilterMethods(request) {
              var method = request.method;
              var params = request.params || [];

              switch (method) {
                case JSONRPC_1.JSONRPCMethod.eth_newFilter:
                  return this._eth_newFilter(params);

                case JSONRPC_1.JSONRPCMethod.eth_newBlockFilter:
                  return this._eth_newBlockFilter();

                case JSONRPC_1.JSONRPCMethod.eth_newPendingTransactionFilter:
                  return this._eth_newPendingTransactionFilter();

                case JSONRPC_1.JSONRPCMethod.eth_getFilterChanges:
                  return this._eth_getFilterChanges(params);

                case JSONRPC_1.JSONRPCMethod.eth_getFilterLogs:
                  return this._eth_getFilterLogs(params);
              }

              return undefined;
            }
          }, {
            key: "_isKnownAddress",
            value: function _isKnownAddress(addressString) {
              try {
                var address = util_1.ensureAddressString(addressString);
                return this._addresses.includes(address);
              } catch (_a) {}

              return false;
            }
          }, {
            key: "_ensureKnownAddress",
            value: function _ensureKnownAddress(addressString) {
              if (!this._isKnownAddress(addressString)) {
                throw new Error("Unknown Ethereum address");
              }
            }
          }, {
            key: "_prepareTransactionParams",
            value: function _prepareTransactionParams(tx) {
              var fromAddress = tx.from ? util_1.ensureAddressString(tx.from) : this.selectedAddress;

              if (!fromAddress) {
                throw new Error("Ethereum address is unavailable");
              }

              this._ensureKnownAddress(fromAddress);

              var toAddress = tx.to ? util_1.ensureAddressString(tx.to) : null;
              var weiValue = tx.value != null ? util_1.ensureBN(tx.value) : new bn_js_1["default"](0);
              var data = tx.data ? util_1.ensureBuffer(tx.data) : Buffer.alloc(0);
              var nonce = tx.nonce != null ? util_1.ensureIntNumber(tx.nonce) : null;
              var gasPriceInWei = tx.gasPrice != null ? util_1.ensureBN(tx.gasPrice) : null;
              var gasLimit = tx.gas != null ? util_1.ensureBN(tx.gas) : null;
              var chainId = this._chainId;
              return {
                fromAddress: fromAddress,
                toAddress: toAddress,
                weiValue: weiValue,
                data: data,
                nonce: nonce,
                gasPriceInWei: gasPriceInWei,
                gasLimit: gasLimit,
                chainId: chainId
              };
            }
          }, {
            key: "_requireAuthorization",
            value: function _requireAuthorization() {
              if (this._addresses.length === 0) {
                throw new Web3Provider_1.ProviderError("Unauthorized", Web3Provider_1.ProviderErrorCode.UNAUTHORIZED);
              }
            }
          }, {
            key: "_throwUnsupportedMethodError",
            value: function _throwUnsupportedMethodError() {
              throw new Web3Provider_1.ProviderError("Unsupported method", Web3Provider_1.ProviderErrorCode.UNSUPPORTED_METHOD);
            }
          }, {
            key: "_signEthereumMessage",
            value: function () {
              var _signEthereumMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(message, address, addPrefix, typedDataJson) {
                var res;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        this._ensureKnownAddress(address);

                        _context14.prev = 1;
                        _context14.next = 4;
                        return this._relay.signEthereumMessage(message, address, addPrefix, typedDataJson);

                      case 4:
                        res = _context14.sent;
                        return _context14.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: res.result
                        });

                      case 8:
                        _context14.prev = 8;
                        _context14.t0 = _context14["catch"](1);

                        if (!(typeof _context14.t0.message === "string" && _context14.t0.message.match(/(denied|rejected)/i))) {
                          _context14.next = 12;
                          break;
                        }

                        throw new Web3Provider_1.ProviderError("User denied message signature", Web3Provider_1.ProviderErrorCode.USER_DENIED_REQUEST_SIGNATURE);

                      case 12:
                        throw _context14.t0;

                      case 13:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this, [[1, 8]]);
              }));

              function _signEthereumMessage(_x11, _x12, _x13, _x14) {
                return _signEthereumMessage2.apply(this, arguments);
              }

              return _signEthereumMessage;
            }()
          }, {
            key: "_ethereumAddressFromSignedMessage",
            value: function () {
              var _ethereumAddressFromSignedMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(message, signature, addPrefix) {
                var res;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return this._relay.ethereumAddressFromSignedMessage(message, signature, addPrefix);

                      case 2:
                        res = _context15.sent;
                        return _context15.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: res.result
                        });

                      case 4:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));

              function _ethereumAddressFromSignedMessage(_x15, _x16, _x17) {
                return _ethereumAddressFromSignedMessage2.apply(this, arguments);
              }

              return _ethereumAddressFromSignedMessage;
            }()
          }, {
            key: "_eth_accounts",
            value: function _eth_accounts() {
              return this._addresses;
            }
          }, {
            key: "_eth_coinbase",
            value: function _eth_coinbase() {
              return this.selectedAddress || null;
            }
          }, {
            key: "_net_version",
            value: function _net_version() {
              return this._chainId.toString(10);
            }
          }, {
            key: "_eth_requestAccounts",
            value: function () {
              var _eth_requestAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var res;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        if (!(this._addresses.length > 0)) {
                          _context16.next = 2;
                          break;
                        }

                        return _context16.abrupt("return", Promise.resolve({
                          jsonrpc: "2.0",
                          id: 0,
                          result: this._addresses
                        }));

                      case 2:
                        _context16.prev = 2;
                        _context16.next = 5;
                        return this._relay.requestEthereumAccounts();

                      case 5:
                        res = _context16.sent;
                        _context16.next = 13;
                        break;

                      case 8:
                        _context16.prev = 8;
                        _context16.t0 = _context16["catch"](2);

                        if (!(typeof _context16.t0.message === "string" && _context16.t0.message.match(/(denied|rejected)/i))) {
                          _context16.next = 12;
                          break;
                        }

                        throw new Web3Provider_1.ProviderError("User denied account authorization", Web3Provider_1.ProviderErrorCode.USER_DENIED_REQUEST_ACCOUNTS);

                      case 12:
                        throw _context16.t0;

                      case 13:
                        if (res.result) {
                          _context16.next = 15;
                          break;
                        }

                        throw new Error("accounts received is empty");

                      case 15:
                        this._setAddresses(res.result);

                        return _context16.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: this._addresses
                        });

                      case 17:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this, [[2, 8]]);
              }));

              function _eth_requestAccounts() {
                return _eth_requestAccounts2.apply(this, arguments);
              }

              return _eth_requestAccounts;
            }()
          }, {
            key: "_eth_sign",
            value: function _eth_sign(params) {
              this._requireAuthorization();

              var address = util_1.ensureAddressString(params[0]);
              var message = util_1.ensureBuffer(params[1]);
              return this._signEthereumMessage(message, address, false);
            }
          }, {
            key: "_eth_ecRecover",
            value: function _eth_ecRecover(params) {
              var message = util_1.ensureBuffer(params[0]);
              var signature = util_1.ensureBuffer(params[1]);
              return this._ethereumAddressFromSignedMessage(message, signature, false);
            }
          }, {
            key: "_personal_sign",
            value: function _personal_sign(params) {
              this._requireAuthorization();

              var message = util_1.ensureBuffer(params[0]);
              var address = util_1.ensureAddressString(params[1]);
              return this._signEthereumMessage(message, address, true);
            }
          }, {
            key: "_personal_ecRecover",
            value: function _personal_ecRecover(params) {
              var message = util_1.ensureBuffer(params[0]);
              var signature = util_1.ensureBuffer(params[1]);
              return this._ethereumAddressFromSignedMessage(message, signature, true);
            }
          }, {
            key: "_eth_signTransaction",
            value: function () {
              var _eth_signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(params) {
                var tx, res;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        this._requireAuthorization();

                        tx = this._prepareTransactionParams(params[0] || {});
                        _context17.prev = 2;
                        _context17.next = 5;
                        return this._relay.signEthereumTransaction(tx);

                      case 5:
                        res = _context17.sent;
                        return _context17.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: res.result
                        });

                      case 9:
                        _context17.prev = 9;
                        _context17.t0 = _context17["catch"](2);

                        if (!(typeof _context17.t0.message === "string" && _context17.t0.message.match(/(denied|rejected)/i))) {
                          _context17.next = 13;
                          break;
                        }

                        throw new Web3Provider_1.ProviderError("User denied transaction signature", Web3Provider_1.ProviderErrorCode.USER_DENIED_REQUEST_SIGNATURE);

                      case 13:
                        throw _context17.t0;

                      case 14:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this, [[2, 9]]);
              }));

              function _eth_signTransaction(_x18) {
                return _eth_signTransaction2.apply(this, arguments);
              }

              return _eth_signTransaction;
            }()
          }, {
            key: "_eth_sendRawTransaction",
            value: function () {
              var _eth_sendRawTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(params) {
                var signedTransaction, res;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        signedTransaction = util_1.ensureBuffer(params[0]);
                        _context18.next = 3;
                        return this._relay.submitEthereumTransaction(signedTransaction, this._chainId);

                      case 3:
                        res = _context18.sent;
                        return _context18.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: res.result
                        });

                      case 5:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));

              function _eth_sendRawTransaction(_x19) {
                return _eth_sendRawTransaction2.apply(this, arguments);
              }

              return _eth_sendRawTransaction;
            }()
          }, {
            key: "_eth_sendTransaction",
            value: function () {
              var _eth_sendTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(params) {
                var tx, res;
                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        this._requireAuthorization();

                        tx = this._prepareTransactionParams(params[0] || {});
                        _context19.prev = 2;
                        _context19.next = 5;
                        return this._relay.signAndSubmitEthereumTransaction(tx);

                      case 5:
                        res = _context19.sent;
                        return _context19.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: res.result
                        });

                      case 9:
                        _context19.prev = 9;
                        _context19.t0 = _context19["catch"](2);

                        if (!(typeof _context19.t0.message === "string" && _context19.t0.message.match(/(denied|rejected)/i))) {
                          _context19.next = 13;
                          break;
                        }

                        throw new Web3Provider_1.ProviderError("User denied transaction signature", Web3Provider_1.ProviderErrorCode.USER_DENIED_REQUEST_SIGNATURE);

                      case 13:
                        throw _context19.t0;

                      case 14:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, this, [[2, 9]]);
              }));

              function _eth_sendTransaction(_x20) {
                return _eth_sendTransaction2.apply(this, arguments);
              }

              return _eth_sendTransaction;
            }()
          }, {
            key: "_eth_signTypedData_v1",
            value: function () {
              var _eth_signTypedData_v = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(params) {
                var typedData, address, message, typedDataJson;
                return regeneratorRuntime.wrap(function _callee20$(_context20) {
                  while (1) {
                    switch (_context20.prev = _context20.next) {
                      case 0:
                        this._requireAuthorization();

                        typedData = params[0];
                        address = util_1.ensureAddressString(params[1]);

                        this._ensureKnownAddress(address);

                        message = eth_eip712_util_1["default"].hashForSignTypedDataLegacy({
                          data: typedData
                        });
                        typedDataJson = JSON.stringify(typedData, null, 2);
                        return _context20.abrupt("return", this._signEthereumMessage(message, address, false, typedDataJson));

                      case 7:
                      case "end":
                        return _context20.stop();
                    }
                  }
                }, _callee20, this);
              }));

              function _eth_signTypedData_v1(_x21) {
                return _eth_signTypedData_v.apply(this, arguments);
              }

              return _eth_signTypedData_v1;
            }()
          }, {
            key: "_eth_signTypedData_v3",
            value: function () {
              var _eth_signTypedData_v2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(params) {
                var address, typedData, message, typedDataJson;
                return regeneratorRuntime.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        this._requireAuthorization();

                        address = util_1.ensureAddressString(params[0]);
                        typedData = params[1];

                        this._ensureKnownAddress(address);

                        message = eth_eip712_util_1["default"].hashForSignTypedData_v3({
                          data: typedData
                        });
                        typedDataJson = JSON.stringify(typedData, null, 2);
                        return _context21.abrupt("return", this._signEthereumMessage(message, address, false, typedDataJson));

                      case 7:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21, this);
              }));

              function _eth_signTypedData_v3(_x22) {
                return _eth_signTypedData_v2.apply(this, arguments);
              }

              return _eth_signTypedData_v3;
            }()
          }, {
            key: "_eth_signTypedData_v4",
            value: function () {
              var _eth_signTypedData_v5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(params) {
                var address, typedData, message, typedDataJson;
                return regeneratorRuntime.wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        this._requireAuthorization();

                        address = util_1.ensureAddressString(params[0]);
                        typedData = params[1];

                        this._ensureKnownAddress(address);

                        message = eth_eip712_util_1["default"].hashForSignTypedData_v4({
                          data: typedData
                        });
                        typedDataJson = JSON.stringify(typedData, null, 2);
                        return _context22.abrupt("return", this._signEthereumMessage(message, address, false, typedDataJson));

                      case 7:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, this);
              }));

              function _eth_signTypedData_v4(_x23) {
                return _eth_signTypedData_v5.apply(this, arguments);
              }

              return _eth_signTypedData_v4;
            }()
          }, {
            key: "_walletlink_arbitrary",
            value: function () {
              var _walletlink_arbitrary2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(params) {
                var data, result;
                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        data = params[0];

                        if (!(typeof data !== "string")) {
                          _context23.next = 3;
                          break;
                        }

                        throw new Error("parameter must be a string");

                      case 3:
                        _context23.next = 5;
                        return this.arbitraryRequest(data);

                      case 5:
                        result = _context23.sent;
                        return _context23.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: result
                        });

                      case 7:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, this);
              }));

              function _walletlink_arbitrary(_x24) {
                return _walletlink_arbitrary2.apply(this, arguments);
              }

              return _walletlink_arbitrary;
            }()
          }, {
            key: "_eth_uninstallFilter",
            value: function _eth_uninstallFilter(params) {
              var filterId = util_1.ensureHexString(params[0]);
              return this._filterPolyfill.uninstallFilter(filterId);
            }
          }, {
            key: "_eth_newFilter",
            value: function () {
              var _eth_newFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(params) {
                var param, filterId;
                return regeneratorRuntime.wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        param = params[0];
                        _context24.next = 3;
                        return this._filterPolyfill.newFilter(param);

                      case 3:
                        filterId = _context24.sent;
                        return _context24.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: filterId
                        });

                      case 5:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24, this);
              }));

              function _eth_newFilter(_x25) {
                return _eth_newFilter2.apply(this, arguments);
              }

              return _eth_newFilter;
            }()
          }, {
            key: "_eth_newBlockFilter",
            value: function () {
              var _eth_newBlockFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                var filterId;
                return regeneratorRuntime.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        _context25.next = 2;
                        return this._filterPolyfill.newBlockFilter();

                      case 2:
                        filterId = _context25.sent;
                        return _context25.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: filterId
                        });

                      case 4:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25, this);
              }));

              function _eth_newBlockFilter() {
                return _eth_newBlockFilter2.apply(this, arguments);
              }

              return _eth_newBlockFilter;
            }()
          }, {
            key: "_eth_newPendingTransactionFilter",
            value: function () {
              var _eth_newPendingTransactionFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                var filterId;
                return regeneratorRuntime.wrap(function _callee26$(_context26) {
                  while (1) {
                    switch (_context26.prev = _context26.next) {
                      case 0:
                        _context26.next = 2;
                        return this._filterPolyfill.newPendingTransactionFilter();

                      case 2:
                        filterId = _context26.sent;
                        return _context26.abrupt("return", {
                          jsonrpc: "2.0",
                          id: 0,
                          result: filterId
                        });

                      case 4:
                      case "end":
                        return _context26.stop();
                    }
                  }
                }, _callee26, this);
              }));

              function _eth_newPendingTransactionFilter() {
                return _eth_newPendingTransactionFilter2.apply(this, arguments);
              }

              return _eth_newPendingTransactionFilter;
            }()
          }, {
            key: "_eth_getFilterChanges",
            value: function _eth_getFilterChanges(params) {
              var filterId = util_1.ensureHexString(params[0]);
              return this._filterPolyfill.getFilterChanges(filterId);
            }
          }, {
            key: "_eth_getFilterLogs",
            value: function _eth_getFilterLogs(params) {
              var filterId = util_1.ensureHexString(params[0]);
              return this._filterPolyfill.getFilterLogs(filterId);
            }
          }, {
            key: "selectedAddress",
            get: function get() {
              return this._addresses[0] || undefined;
            }
          }, {
            key: "networkVersion",
            get: function get() {
              return this._chainId.toString(10);
            }
          }, {
            key: "isWalletLink",
            get: function get() {
              return true;
            }
          }, {
            key: "host",
            get: function get() {
              return this._jsonRpcUrl;
            }
          }, {
            key: "connected",
            get: function get() {
              return true;
            }
          }]);

          return WalletLinkProvider;
        }();

        exports.WalletLinkProvider = WalletLinkProvider;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "hLHX":
    /*!***********************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/eth-eip712-util/abi.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function hLHX(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        // Extracted from https://github.com/ethereumjs/ethereumjs-abi and stripped out irrelevant code
        // Original code licensed under the MIT License - Copyright (c) 2015 Alex Beregszaszi
        var util = __webpack_require__(
        /*! ./util */
        "KU7o");

        var BN = __webpack_require__(
        /*! bn.js */
        "OZ/i"); // Convert from short to canonical names
        // FIXME: optimise or make this nicer?


        function elementaryName(name) {
          if (name.startsWith('int[')) {
            return 'int256' + name.slice(3);
          } else if (name === 'int') {
            return 'int256';
          } else if (name.startsWith('uint[')) {
            return 'uint256' + name.slice(4);
          } else if (name === 'uint') {
            return 'uint256';
          } else if (name.startsWith('fixed[')) {
            return 'fixed128x128' + name.slice(5);
          } else if (name === 'fixed') {
            return 'fixed128x128';
          } else if (name.startsWith('ufixed[')) {
            return 'ufixed128x128' + name.slice(6);
          } else if (name === 'ufixed') {
            return 'ufixed128x128';
          }

          return name;
        } // Parse N from type<N>


        function parseTypeN(type) {
          return parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
        } // Parse N,M from type<N>x<M>


        function parseTypeNxM(type) {
          var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
          return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
        } // Parse N in type[<N>] where "type" can itself be an array type.


        function parseTypeArray(type) {
          var tmp = type.match(/(.*)\[(.*?)\]$/);

          if (tmp) {
            return tmp[2] === '' ? 'dynamic' : parseInt(tmp[2], 10);
          }

          return null;
        }

        function parseNumber(arg) {
          var type = typeof arg;

          if (type === 'string') {
            if (util.isHexString(arg)) {
              return new BN(util.stripHexPrefix(arg), 16);
            } else {
              return new BN(arg, 10);
            }
          } else if (type === 'number') {
            return new BN(arg);
          } else if (arg.toArray) {
            // assume this is a BN for the moment, replace with BN.isBN soon
            return arg;
          } else {
            throw new Error('Argument is not a number');
          }
        } // Encodes a single item (can be dynamic array)
        // @returns: Buffer


        function encodeSingle(type, arg) {
          var size, num, ret, i;

          if (type === 'address') {
            return encodeSingle('uint160', parseNumber(arg));
          } else if (type === 'bool') {
            return encodeSingle('uint8', arg ? 1 : 0);
          } else if (type === 'string') {
            return encodeSingle('bytes', new Buffer(arg, 'utf8'));
          } else if (isArray(type)) {
            // this part handles fixed-length ([2]) and variable length ([]) arrays
            // NOTE: we catch here all calls to arrays, that simplifies the rest
            if (typeof arg.length === 'undefined') {
              throw new Error('Not an array?');
            }

            size = parseTypeArray(type);

            if (size !== 'dynamic' && size !== 0 && arg.length > size) {
              throw new Error('Elements exceed array size: ' + size);
            }

            ret = [];
            type = type.slice(0, type.lastIndexOf('['));

            if (typeof arg === 'string') {
              arg = JSON.parse(arg);
            }

            for (i in arg) {
              ret.push(encodeSingle(type, arg[i]));
            }

            if (size === 'dynamic') {
              var length = encodeSingle('uint256', arg.length);
              ret.unshift(length);
            }

            return Buffer.concat(ret);
          } else if (type === 'bytes') {
            arg = new Buffer(arg);
            ret = Buffer.concat([encodeSingle('uint256', arg.length), arg]);

            if (arg.length % 32 !== 0) {
              ret = Buffer.concat([ret, util.zeros(32 - arg.length % 32)]);
            }

            return ret;
          } else if (type.startsWith('bytes')) {
            size = parseTypeN(type);

            if (size < 1 || size > 32) {
              throw new Error('Invalid bytes<N> width: ' + size);
            }

            return util.setLengthRight(arg, 32);
          } else if (type.startsWith('uint')) {
            size = parseTypeN(type);

            if (size % 8 || size < 8 || size > 256) {
              throw new Error('Invalid uint<N> width: ' + size);
            }

            num = parseNumber(arg);

            if (num.bitLength() > size) {
              throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
            }

            if (num < 0) {
              throw new Error('Supplied uint is negative');
            }

            return num.toArrayLike(Buffer, 'be', 32);
          } else if (type.startsWith('int')) {
            size = parseTypeN(type);

            if (size % 8 || size < 8 || size > 256) {
              throw new Error('Invalid int<N> width: ' + size);
            }

            num = parseNumber(arg);

            if (num.bitLength() > size) {
              throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
            }

            return num.toTwos(256).toArrayLike(Buffer, 'be', 32);
          } else if (type.startsWith('ufixed')) {
            size = parseTypeNxM(type);
            num = parseNumber(arg);

            if (num < 0) {
              throw new Error('Supplied ufixed is negative');
            }

            return encodeSingle('uint256', num.mul(new BN(2).pow(new BN(size[1]))));
          } else if (type.startsWith('fixed')) {
            size = parseTypeNxM(type);
            return encodeSingle('int256', parseNumber(arg).mul(new BN(2).pow(new BN(size[1]))));
          }

          throw new Error('Unsupported or invalid type: ' + type);
        } // Is a type dynamic?


        function isDynamic(type) {
          // FIXME: handle all types? I don't think anything is missing now
          return type === 'string' || type === 'bytes' || parseTypeArray(type) === 'dynamic';
        } // Is a type an array?


        function isArray(type) {
          return type.lastIndexOf(']') === type.length - 1;
        } // Encode a method/event with arguments
        // @types an array of string type names
        // @args  an array of the appropriate values


        function rawEncode(types, values) {
          var output = [];
          var data = [];
          var headLength = 32 * types.length;

          for (var i in types) {
            var type = elementaryName(types[i]);
            var value = values[i];
            var cur = encodeSingle(type, value); // Use the head/tail method for storing dynamic data

            if (isDynamic(type)) {
              output.push(encodeSingle('uint256', headLength));
              data.push(cur);
              headLength += cur.length;
            } else {
              output.push(cur);
            }
          }

          return Buffer.concat(output.concat(data));
        }

        function solidityPack(types, values) {
          if (types.length !== values.length) {
            throw new Error('Number of types are not matching the values');
          }

          var size, num;
          var ret = [];

          for (var i = 0; i < types.length; i++) {
            var type = elementaryName(types[i]);
            var value = values[i];

            if (type === 'bytes') {
              ret.push(value);
            } else if (type === 'string') {
              ret.push(new Buffer(value, 'utf8'));
            } else if (type === 'bool') {
              ret.push(new Buffer(value ? '01' : '00', 'hex'));
            } else if (type === 'address') {
              ret.push(util.setLength(value, 20));
            } else if (type.startsWith('bytes')) {
              size = parseTypeN(type);

              if (size < 1 || size > 32) {
                throw new Error('Invalid bytes<N> width: ' + size);
              }

              ret.push(util.setLengthRight(value, size));
            } else if (type.startsWith('uint')) {
              size = parseTypeN(type);

              if (size % 8 || size < 8 || size > 256) {
                throw new Error('Invalid uint<N> width: ' + size);
              }

              num = parseNumber(value);

              if (num.bitLength() > size) {
                throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
              }

              ret.push(num.toArrayLike(Buffer, 'be', size / 8));
            } else if (type.startsWith('int')) {
              size = parseTypeN(type);

              if (size % 8 || size < 8 || size > 256) {
                throw new Error('Invalid int<N> width: ' + size);
              }

              num = parseNumber(value);

              if (num.bitLength() > size) {
                throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
              }

              ret.push(num.toTwos(size).toArrayLike(Buffer, 'be', size / 8));
            } else {
              // FIXME: support all other types
              throw new Error('Unsupported or invalid type: ' + type);
            }
          }

          return Buffer.concat(ret);
        }

        function soliditySHA3(types, values) {
          return util.keccak(solidityPack(types, values));
        }

        module.exports = {
          rawEncode: rawEncode,
          solidityPack: solidityPack,
          soliditySHA3: soliditySHA3
        };
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "i6jr":
    /*!*************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/Snackbar.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function i6jr(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var clsx_1 = __importDefault(__webpack_require__(
      /*! clsx */
      "iuhU"));

      var preact_1 = __webpack_require__(
      /*! preact */
      "2mXy");

      var hooks_1 = __webpack_require__(
      /*! preact/hooks */
      "MOxe");

      var Snackbar_css_1 = __importDefault(__webpack_require__(
      /*! ./Snackbar-css */
      "uc/Z"));

      var Snackbar = /*#__PURE__*/function () {
        function Snackbar(options) {
          _classCallCheck(this, Snackbar);

          this.items = new Map();
          this.nextItemKey = 0;
          this.root = null;
          this.darkMode = options.darkMode;
        }

        _createClass(Snackbar, [{
          key: "attach",
          value: function attach(el) {
            this.root = document.createElement("div");
            this.root.className = "-walletlink-snackbar-root";
            el.appendChild(this.root);
            this.render();
          }
        }, {
          key: "presentItem",
          value: function presentItem(itemProps) {
            var _this19 = this;

            var key = this.nextItemKey++;
            this.items.set(key, itemProps);
            this.render();
            return function () {
              _this19.items["delete"](key);

              _this19.render();
            };
          }
        }, {
          key: "clear",
          value: function clear() {
            this.items.clear();
            this.render();
          }
        }, {
          key: "render",
          value: function render() {
            if (!this.root) {
              return;
            }

            preact_1.render(preact_1.h(SnackbarContainer, {
              darkMode: this.darkMode
            }, Array.from(this.items.entries()).map(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  key = _ref7[0],
                  itemProps = _ref7[1];

              return preact_1.h(SnackbarItem, Object.assign({}, itemProps, {
                key: key
              }));
            })), this.root);
          }
        }]);

        return Snackbar;
      }();

      exports.Snackbar = Snackbar;

      var SnackbarContainer = function SnackbarContainer(props) {
        return preact_1.h("div", {
          "class": clsx_1["default"]("-walletlink-snackbar-container", props.darkMode && "-walletlink-snackbar-container-dark")
        }, preact_1.h("style", null, Snackbar_css_1["default"]), preact_1.h("div", {
          "class": "-walletlink-snackbar"
        }, props.children));
      };

      var SnackbarItem = function SnackbarItem(_ref8) {
        var message = _ref8.message,
            showProgressBar = _ref8.showProgressBar,
            actions = _ref8.actions;

        var _hooks_1$useState7 = hooks_1.useState(true),
            _hooks_1$useState8 = _slicedToArray(_hooks_1$useState7, 2),
            hidden = _hooks_1$useState8[0],
            setHidden = _hooks_1$useState8[1];

        var _hooks_1$useState9 = hooks_1.useState(false),
            _hooks_1$useState10 = _slicedToArray(_hooks_1$useState9, 2),
            expanded = _hooks_1$useState10[0],
            setExpanded = _hooks_1$useState10[1];

        hooks_1.useEffect(function () {
          var timers = [window.setTimeout(function () {
            setHidden(false);
          }, 1), window.setTimeout(function () {
            setExpanded(true);
          }, 10000)];
          return function () {
            timers.forEach(window.clearTimeout);
          };
        });

        var toggleExpanded = function toggleExpanded() {
          setExpanded(!expanded);
        };

        return preact_1.h("div", {
          "class": clsx_1["default"]("-walletlink-snackbar-item", hidden && "-walletlink-snackbar-item-hidden", expanded && "-walletlink-snackbar-item-expanded")
        }, preact_1.h("div", {
          "class": "-walletlink-snackbar-item-content",
          onClick: toggleExpanded
        }, preact_1.h("div", {
          "class": "-walletlink-snackbar-item-content-message"
        }, message), preact_1.h("div", {
          "class": "-walletlink-snackbar-item-content-chevron",
          title: "Expand"
        })), showProgressBar && preact_1.h("div", {
          "class": "-walletlink-snackbar-item-progress-bar"
        }), actions && actions.length > 0 && preact_1.h("div", {
          "class": "-walletlink-snackbar-item-actions"
        }, actions.map(function (action, i) {
          return preact_1.h("div", {
            "class": "-walletlink-snackbar-item-actions-item",
            key: i
          }, preact_1.h("span", {
            "class": "-walletlink-snackbar-item-actions-item-info"
          }, action.info), preact_1.h("button", {
            "class": "-walletlink-snackbar-item-actions-item-button",
            onClick: action.onClick
          }, action.buttonLabel));
        })));
      };
      /***/

    },

    /***/
    "iuhU":
    /*!******************************************!*\
      !*** ./node_modules/clsx/dist/clsx.m.js ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function iuhU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function toVal(mix) {
        var k,
            y,
            str = '';

        if (typeof mix === 'string' || typeof mix === 'number') {
          str += mix;
        } else if (typeof mix === 'object') {
          if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
              if (mix[k]) {
                if (y = toVal(mix[k])) {
                  str && (str += ' ');
                  str += y;
                }
              }
            }
          } else {
            for (k in mix) {
              if (mix[k]) {
                str && (str += ' ');
                str += k;
              }
            }
          }
        }

        return str;
      }
      /* harmony default export */


      __webpack_exports__["default"] = function () {
        var i = 0,
            tmp,
            x,
            str = '';

        while (i < arguments.length) {
          if (tmp = arguments[i++]) {
            if (x = toVal(tmp)) {
              str && (str += ' ');
              str += x;
            }
          }
        }

        return str;
      };
      /***/

    },

    /***/
    "jOtK":
    /*!******************************************************************!*\
      !*** ./node_modules/walletlink/dist/connection/ClientMessage.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function jOtK(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function ClientMessageHostSession(params) {
        return Object.assign({
          type: "HostSession"
        }, params);
      }

      exports.ClientMessageHostSession = ClientMessageHostSession;

      function ClientMessageIsLinked(params) {
        return Object.assign({
          type: "IsLinked"
        }, params);
      }

      exports.ClientMessageIsLinked = ClientMessageIsLinked;

      function ClientMessageGetSessionConfig(params) {
        return Object.assign({
          type: "GetSessionConfig"
        }, params);
      }

      exports.ClientMessageGetSessionConfig = ClientMessageGetSessionConfig;

      function ClientMessageSetSessionConfig(params) {
        return Object.assign({
          type: "SetSessionConfig"
        }, params);
      }

      exports.ClientMessageSetSessionConfig = ClientMessageSetSessionConfig;

      function ClientMessagePublishEvent(params) {
        return Object.assign({
          type: "PublishEvent"
        }, params);
      }

      exports.ClientMessagePublishEvent = ClientMessagePublishEvent;
      /***/
    },

    /***/
    "nRTT":
    /*!****************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/keccak/index.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function nRTT(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! ./lib/api */
      "2XmR")(__webpack_require__(
      /*! ./lib/keccak */
      "5ELh"));
      /***/
    },

    /***/
    "oK5k":
    /*!**********************************************!*\
      !*** ./node_modules/walletlink/dist/util.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function oK5k(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
        // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
        // Licensed under the Apache License, version 2.0
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
        "OZ/i"));

        var types_1 = __webpack_require__(
        /*! ./types */
        "p7SB");

        var INT_STRING_REGEX = /^[0-9]*$/;
        var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;

        function hexStringFromBuffer(buf) {
          var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var hex = buf.toString("hex");
          return types_1.HexString(includePrefix ? "0x" + hex : hex);
        }

        exports.hexStringFromBuffer = hexStringFromBuffer;

        function bigIntStringFromBN(bn) {
          return types_1.BigIntString(bn.toString(10));
        }

        exports.bigIntStringFromBN = bigIntStringFromBN;

        function intNumberFromHexString(hex) {
          return types_1.IntNumber(new bn_js_1["default"](ensureEvenLengthHexString(hex, false), 16).toNumber());
        }

        exports.intNumberFromHexString = intNumberFromHexString;

        function hexStringFromIntNumber(num) {
          return types_1.HexString("0x" + new bn_js_1["default"](num).toString(16));
        }

        exports.hexStringFromIntNumber = hexStringFromIntNumber;

        function has0xPrefix(str) {
          return str.startsWith("0x") || str.startsWith("0X");
        }

        exports.has0xPrefix = has0xPrefix;

        function strip0x(hex) {
          if (has0xPrefix(hex)) {
            return hex.slice(2);
          }

          return hex;
        }

        exports.strip0x = strip0x;

        function prepend0x(hex) {
          if (has0xPrefix(hex)) {
            return "0x" + hex.slice(2);
          }

          return "0x" + hex;
        }

        exports.prepend0x = prepend0x;

        function isHexString(hex) {
          if (typeof hex !== "string") {
            return false;
          }

          var s = strip0x(hex).toLowerCase();
          return HEXADECIMAL_STRING_REGEX.test(s);
        }

        exports.isHexString = isHexString;

        function ensureHexString(hex) {
          var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (typeof hex === "string") {
            var s = strip0x(hex).toLowerCase();

            if (HEXADECIMAL_STRING_REGEX.test(s)) {
              return types_1.HexString(includePrefix ? "0x" + s : s);
            }
          }

          throw new Error("\"".concat(hex, "\" is not a hexadecimal string"));
        }

        exports.ensureHexString = ensureHexString;

        function ensureEvenLengthHexString(hex) {
          var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var h = ensureHexString(hex, false);

          if (h.length % 2 === 1) {
            h = types_1.HexString("0" + h);
          }

          return includePrefix ? types_1.HexString("0x" + h) : h;
        }

        exports.ensureEvenLengthHexString = ensureEvenLengthHexString;

        function ensureAddressString(str) {
          if (typeof str === "string") {
            var s = strip0x(str).toLowerCase();

            if (isHexString(s) && s.length === 40) {
              return types_1.AddressString(prepend0x(s));
            }
          }

          throw new Error("Invalid Ethereum address: ".concat(str));
        }

        exports.ensureAddressString = ensureAddressString;

        function ensureBuffer(str) {
          if (Buffer.isBuffer(str)) {
            return str;
          }

          if (typeof str === "string") {
            if (isHexString(str)) {
              var s = ensureEvenLengthHexString(str, false);
              return Buffer.from(s, "hex");
            } else {
              return Buffer.from(str, "utf8");
            }
          }

          throw new Error("Not binary data: ".concat(str));
        }

        exports.ensureBuffer = ensureBuffer;

        function ensureIntNumber(num) {
          if (typeof num === "number" && Number.isInteger(num)) {
            return types_1.IntNumber(num);
          }

          if (typeof num === "string") {
            if (INT_STRING_REGEX.test(num)) {
              return types_1.IntNumber(Number(num));
            }

            if (isHexString(num)) {
              return types_1.IntNumber(new bn_js_1["default"](ensureEvenLengthHexString(num, false), 16).toNumber());
            }
          }

          throw new Error("Not an integer: ".concat(num));
        }

        exports.ensureIntNumber = ensureIntNumber;

        function ensureRegExpString(regExp) {
          if (regExp instanceof RegExp) {
            return types_1.RegExpString(regExp.toString());
          }

          throw new Error("Not a RegExp: ".concat(regExp));
        }

        exports.ensureRegExpString = ensureRegExpString;

        function ensureBN(val) {
          if (val != null && (bn_js_1["default"].isBN(val) || isBigNumber(val))) {
            return new bn_js_1["default"](val.toString(10), 10);
          }

          if (typeof val === "number") {
            return new bn_js_1["default"](ensureIntNumber(val));
          }

          if (typeof val === "string") {
            if (INT_STRING_REGEX.test(val)) {
              return new bn_js_1["default"](val, 10);
            }

            if (isHexString(val)) {
              return new bn_js_1["default"](ensureEvenLengthHexString(val, false), 16);
            }
          }

          throw new Error("Not an integer: ".concat(val));
        }

        exports.ensureBN = ensureBN;

        function isBigNumber(val) {
          if (val == null || typeof val.constructor !== "function") {
            return false;
          }

          var constructor = val.constructor;
          return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
        }

        exports.isBigNumber = isBigNumber;

        function range(start, stop) {
          return Array.from({
            length: stop - start
          }, function (_, i) {
            return start + i;
          });
        }

        exports.range = range;

        function getFavicon() {
          var el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
          var _document$location = document.location,
              protocol = _document$location.protocol,
              host = _document$location.host;
          var href = el ? el.getAttribute("href") : null;

          if (!href || href.startsWith("javascript:")) {
            return null;
          }

          if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
            return href;
          }

          if (href.startsWith("//")) {
            return protocol + href;
          }

          return "".concat(protocol, "//").concat(host).concat(href);
        }

        exports.getFavicon = getFavicon;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "oY2H":
    /*!**********************************************!*\
      !*** ./node_modules/walletlink/package.json ***!
      \**********************************************/

    /*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, dependencies, description, devDependencies, engines, homepage, jest, keywords, license, main, name, repository, scripts, types, version, default */

    /***/
    function oY2H(module) {
      module.exports = JSON.parse("{\"_args\":[[\"walletlink@2.0.2\",\"/Users/admin/ng88mph-frontend\"]],\"_from\":\"walletlink@2.0.2\",\"_id\":\"walletlink@2.0.2\",\"_inBundle\":false,\"_integrity\":\"sha512-4MIctCHAjcPHSQUHpHuU9leUAvYqRF+/4kCq7x9AngZQ2Jd74dbpC8dfZ55uOwW8TXc7z9XYeSyzRrGHbv5ZXg==\",\"_location\":\"/walletlink\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"walletlink@2.0.2\",\"name\":\"walletlink\",\"escapedName\":\"walletlink\",\"rawSpec\":\"2.0.2\",\"saveSpec\":null,\"fetchSpec\":\"2.0.2\"},\"_requiredBy\":[\"/bnc-onboard\"],\"_resolved\":\"https://registry.npmjs.org/walletlink/-/walletlink-2.0.2.tgz\",\"_spec\":\"2.0.2\",\"_where\":\"/Users/admin/ng88mph-frontend\",\"author\":{\"name\":\"Coinbase, Inc.\"},\"bugs\":{\"url\":\"https://github.com/walletlink/walletlink/issues\"},\"dependencies\":{\"bind-decorator\":\"^1.0.11\",\"bn.js\":\"^5.1.1\",\"clsx\":\"^1.1.0\",\"preact\":\"^10.3.3\",\"rxjs\":\"^6.5.4\"},\"description\":\"WalletLink JavaScript SDK\",\"devDependencies\":{\"@types/bn.js\":\"^4.11.6\",\"@types/jest\":\"^25.1.3\",\"@types/node\":\"^13.7.7\",\"copy-webpack-plugin\":\"^5.1.1\",\"core-js\":\"^3.6.4\",\"glob\":\"^7.1.6\",\"jest\":\"^25.1.0\",\"nodemon\":\"^2.0.2\",\"raw-loader\":\"^4.0.0\",\"regenerator-runtime\":\"^0.13.3\",\"rxjs-tslint\":\"^0.1.7\",\"sass\":\"^1.26.2\",\"svgo\":\"^1.3.2\",\"ts-jest\":\"^25.2.1\",\"ts-loader\":\"^6.2.1\",\"tslib\":\"^1.11.1\",\"tslint\":\"^6.0.0\",\"tslint-config-prettier\":\"^1.18.0\",\"tslint-config-security\":\"^1.16.0\",\"tslint-microsoft-contrib\":\"^6.2.0\",\"typescript\":\"^3.8.3\",\"webpack\":\"^4.42.0\",\"webpack-cli\":\"^3.3.11\",\"whatwg-fetch\":\"^3.0.0\"},\"engines\":{\"node\":\">= 10.0.0\"},\"homepage\":\"https://github.com/walletlink/walletlink#readme\",\"jest\":{\"transform\":{\"^.+\\\\.tsx?$\":\"ts-jest\"},\"testEnvironment\":\"node\",\"testPathIgnorePatterns\":[\"<rootDir>/dist/\",\"<rootDir>/node_modules/\"],\"testRegex\":\"(/__tests__/.*|\\\\.(test|spec))\\\\.(ts|tsx|js)$\",\"moduleFileExtensions\":[\"ts\",\"js\",\"json\"]},\"keywords\":[\"cipher\",\"cipherbrowser\",\"coinbase\",\"coinbasewallet\",\"eth\",\"ether\",\"ethereum\",\"etherium\",\"injection\",\"toshi\",\"wallet\",\"walletlink\",\"web3\"],\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"walletlink\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/walletlink/walletlink.git\"},\"scripts\":{\"build\":\"node compile-assets.js && webpack --config webpack.config.js\",\"build-chrome\":\"webpack --config webpack.config.chrome.js\",\"build-npm\":\"tsc -p ./tsconfig.build.json\",\"build:dev\":\"export WALLETLINK_URL='http://localhost:3000'; yarn build && yarn build-chrome\",\"build:dev:watch\":\"nodemon -e 'ts,tsx,js,json,css,scss,svg' --ignore 'src/**/*-css.ts' --ignore 'src/**/*-svg.ts' --watch src/ --watch chrome/ --exec 'yarn build:dev'\",\"build:prod\":\"yarn build && yarn build-chrome && yarn build-npm && cp ./package.json ../README.md ../LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i '' 's|  \\\"private\\\": true,||g' build/npm/package.json\",\"lint\":\"tslint -p . 'src/**/*.ts{,x}'\",\"lint:watch\":\"nodemon -e ts,tsx,js,json,css,scss,svg --watch src/ --exec 'yarn tsc && yarn lint'\",\"test\":\"jest\",\"test:watch\":\"jest --watch\",\"tsc\":\"tsc --noEmit --pretty\"},\"types\":\"dist/index.d.ts\",\"version\":\"2.0.2\"}");
      /***/
    },

    /***/
    "obTc":
    /*!************************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/RelayMessage.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function obTc(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RelayMessageType;

      (function (RelayMessageType) {
        RelayMessageType["SESSION_ID_REQUEST"] = "SESSION_ID_REQUEST";
        RelayMessageType["SESSION_ID_RESPONSE"] = "SESSION_ID_RESPONSE";
        RelayMessageType["LINKED"] = "LINKED";
        RelayMessageType["UNLINKED"] = "UNLINKED";
        RelayMessageType["WEB3_REQUEST"] = "WEB3_REQUEST";
        RelayMessageType["WEB3_REQUEST_CANCELED"] = "WEB3_REQUEST_CANCELED";
        RelayMessageType["WEB3_RESPONSE"] = "WEB3_RESPONSE";
      })(RelayMessageType = exports.RelayMessageType || (exports.RelayMessageType = {}));
      /***/

    },

    /***/
    "p7SB":
    /*!***********************************************!*\
      !*** ./node_modules/walletlink/dist/types.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function p7SB(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function OpaqueType() {
        return function (value) {
          return value;
        };
      }

      exports.OpaqueType = OpaqueType;
      exports.HexString = OpaqueType();
      exports.AddressString = OpaqueType();
      exports.BigIntString = OpaqueType();

      function IntNumber(num) {
        return Math.floor(num);
      }

      exports.IntNumber = IntNumber;
      exports.RegExpString = OpaqueType();
      /***/
    },

    /***/
    "rN33":
    /*!***************************************************************!*\
      !*** ./node_modules/walletlink/dist/provider/Web3Provider.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function rN33(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ProviderErrorCode;

      (function (ProviderErrorCode) {
        ProviderErrorCode[ProviderErrorCode["USER_DENIED_REQUEST_ACCOUNTS"] = 4001] = "USER_DENIED_REQUEST_ACCOUNTS";
        ProviderErrorCode[ProviderErrorCode["USER_DENIED_CREATE_ACCOUNT"] = 4010] = "USER_DENIED_CREATE_ACCOUNT";
        ProviderErrorCode[ProviderErrorCode["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
        ProviderErrorCode[ProviderErrorCode["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
        ProviderErrorCode[ProviderErrorCode["USER_DENIED_REQUEST_SIGNATURE"] = -32603] = "USER_DENIED_REQUEST_SIGNATURE";
      })(ProviderErrorCode = exports.ProviderErrorCode || (exports.ProviderErrorCode = {}));

      var ProviderError = /*#__PURE__*/function (_Error) {
        _inherits(ProviderError, _Error);

        var _super3 = _createSuper(ProviderError);

        function ProviderError(message, code, data) {
          var _this20;

          _classCallCheck(this, ProviderError);

          _this20 = _super3.call(this, message || "Provider Error");
          _this20.code = code;
          _this20.data = data;
          _this20.name = "ProviderError";
          Object.setPrototypeOf(_assertThisInitialized(_this20), ProviderError.prototype);
          return _this20;
        }

        return ProviderError;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      exports.ProviderError = ProviderError;
      /***/
    },

    /***/
    "t6Ey":
    /*!**********************************************************************************!*\
      !*** ./node_modules/walletlink/dist/vendor-js/keccak/lib/keccak-state-unroll.js ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function t6Ey(module, exports) {
      var P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

      exports.p1600 = function (s) {
        for (var round = 0; round < 24; ++round) {
          // theta
          var lo0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
          var hi0 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
          var lo1 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
          var hi1 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
          var lo2 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
          var hi2 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
          var lo3 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
          var hi3 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
          var lo4 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
          var hi4 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
          var lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
          var hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
          var t1slo0 = s[0] ^ lo;
          var t1shi0 = s[1] ^ hi;
          var t1slo5 = s[10] ^ lo;
          var t1shi5 = s[11] ^ hi;
          var t1slo10 = s[20] ^ lo;
          var t1shi10 = s[21] ^ hi;
          var t1slo15 = s[30] ^ lo;
          var t1shi15 = s[31] ^ hi;
          var t1slo20 = s[40] ^ lo;
          var t1shi20 = s[41] ^ hi;
          lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
          hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
          var t1slo1 = s[2] ^ lo;
          var t1shi1 = s[3] ^ hi;
          var t1slo6 = s[12] ^ lo;
          var t1shi6 = s[13] ^ hi;
          var t1slo11 = s[22] ^ lo;
          var t1shi11 = s[23] ^ hi;
          var t1slo16 = s[32] ^ lo;
          var t1shi16 = s[33] ^ hi;
          var t1slo21 = s[42] ^ lo;
          var t1shi21 = s[43] ^ hi;
          lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
          hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
          var t1slo2 = s[4] ^ lo;
          var t1shi2 = s[5] ^ hi;
          var t1slo7 = s[14] ^ lo;
          var t1shi7 = s[15] ^ hi;
          var t1slo12 = s[24] ^ lo;
          var t1shi12 = s[25] ^ hi;
          var t1slo17 = s[34] ^ lo;
          var t1shi17 = s[35] ^ hi;
          var t1slo22 = s[44] ^ lo;
          var t1shi22 = s[45] ^ hi;
          lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
          hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
          var t1slo3 = s[6] ^ lo;
          var t1shi3 = s[7] ^ hi;
          var t1slo8 = s[16] ^ lo;
          var t1shi8 = s[17] ^ hi;
          var t1slo13 = s[26] ^ lo;
          var t1shi13 = s[27] ^ hi;
          var t1slo18 = s[36] ^ lo;
          var t1shi18 = s[37] ^ hi;
          var t1slo23 = s[46] ^ lo;
          var t1shi23 = s[47] ^ hi;
          lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
          hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
          var t1slo4 = s[8] ^ lo;
          var t1shi4 = s[9] ^ hi;
          var t1slo9 = s[18] ^ lo;
          var t1shi9 = s[19] ^ hi;
          var t1slo14 = s[28] ^ lo;
          var t1shi14 = s[29] ^ hi;
          var t1slo19 = s[38] ^ lo;
          var t1shi19 = s[39] ^ hi;
          var t1slo24 = s[48] ^ lo;
          var t1shi24 = s[49] ^ hi; // rho & pi

          var t2slo0 = t1slo0;
          var t2shi0 = t1shi0;
          var t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
          var t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
          var t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
          var t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
          var t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
          var t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
          var t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
          var t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
          var t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
          var t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
          var t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
          var t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
          var t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
          var t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
          var t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
          var t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
          var t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
          var t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
          var t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
          var t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
          var t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
          var t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
          var t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
          var t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
          var t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
          var t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
          var t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
          var t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
          var t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
          var t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
          var t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
          var t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
          var t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
          var t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
          var t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
          var t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
          var t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
          var t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
          var t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
          var t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
          var t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
          var t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
          var t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
          var t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
          var t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
          var t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
          var t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
          var t2shi4 = t1shi24 << 14 | t1slo24 >>> 18; // chi

          s[0] = t2slo0 ^ ~t2slo1 & t2slo2;
          s[1] = t2shi0 ^ ~t2shi1 & t2shi2;
          s[10] = t2slo5 ^ ~t2slo6 & t2slo7;
          s[11] = t2shi5 ^ ~t2shi6 & t2shi7;
          s[20] = t2slo10 ^ ~t2slo11 & t2slo12;
          s[21] = t2shi10 ^ ~t2shi11 & t2shi12;
          s[30] = t2slo15 ^ ~t2slo16 & t2slo17;
          s[31] = t2shi15 ^ ~t2shi16 & t2shi17;
          s[40] = t2slo20 ^ ~t2slo21 & t2slo22;
          s[41] = t2shi20 ^ ~t2shi21 & t2shi22;
          s[2] = t2slo1 ^ ~t2slo2 & t2slo3;
          s[3] = t2shi1 ^ ~t2shi2 & t2shi3;
          s[12] = t2slo6 ^ ~t2slo7 & t2slo8;
          s[13] = t2shi6 ^ ~t2shi7 & t2shi8;
          s[22] = t2slo11 ^ ~t2slo12 & t2slo13;
          s[23] = t2shi11 ^ ~t2shi12 & t2shi13;
          s[32] = t2slo16 ^ ~t2slo17 & t2slo18;
          s[33] = t2shi16 ^ ~t2shi17 & t2shi18;
          s[42] = t2slo21 ^ ~t2slo22 & t2slo23;
          s[43] = t2shi21 ^ ~t2shi22 & t2shi23;
          s[4] = t2slo2 ^ ~t2slo3 & t2slo4;
          s[5] = t2shi2 ^ ~t2shi3 & t2shi4;
          s[14] = t2slo7 ^ ~t2slo8 & t2slo9;
          s[15] = t2shi7 ^ ~t2shi8 & t2shi9;
          s[24] = t2slo12 ^ ~t2slo13 & t2slo14;
          s[25] = t2shi12 ^ ~t2shi13 & t2shi14;
          s[34] = t2slo17 ^ ~t2slo18 & t2slo19;
          s[35] = t2shi17 ^ ~t2shi18 & t2shi19;
          s[44] = t2slo22 ^ ~t2slo23 & t2slo24;
          s[45] = t2shi22 ^ ~t2shi23 & t2shi24;
          s[6] = t2slo3 ^ ~t2slo4 & t2slo0;
          s[7] = t2shi3 ^ ~t2shi4 & t2shi0;
          s[16] = t2slo8 ^ ~t2slo9 & t2slo5;
          s[17] = t2shi8 ^ ~t2shi9 & t2shi5;
          s[26] = t2slo13 ^ ~t2slo14 & t2slo10;
          s[27] = t2shi13 ^ ~t2shi14 & t2shi10;
          s[36] = t2slo18 ^ ~t2slo19 & t2slo15;
          s[37] = t2shi18 ^ ~t2shi19 & t2shi15;
          s[46] = t2slo23 ^ ~t2slo24 & t2slo20;
          s[47] = t2shi23 ^ ~t2shi24 & t2shi20;
          s[8] = t2slo4 ^ ~t2slo0 & t2slo1;
          s[9] = t2shi4 ^ ~t2shi0 & t2shi1;
          s[18] = t2slo9 ^ ~t2slo5 & t2slo6;
          s[19] = t2shi9 ^ ~t2shi5 & t2shi6;
          s[28] = t2slo14 ^ ~t2slo10 & t2slo11;
          s[29] = t2shi14 ^ ~t2shi10 & t2shi11;
          s[38] = t2slo19 ^ ~t2slo15 & t2slo16;
          s[39] = t2shi19 ^ ~t2shi15 & t2shi16;
          s[48] = t2slo24 ^ ~t2slo20 & t2slo21;
          s[49] = t2shi24 ^ ~t2shi20 & t2shi21; // iota

          s[0] ^= P1600_ROUND_CONSTANTS[round * 2];
          s[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
        }
      };
      /***/

    },

    /***/
    "u8Fu":
    /*!****************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/Spinner-css.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function u8Fu(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = ".-walletlink-css-reset .-walletlink-spinner{display:inline-block}.-walletlink-css-reset .-walletlink-spinner svg{display:inline-block;animation:2s linear infinite -walletlink-spinner-svg}.-walletlink-css-reset .-walletlink-spinner svg circle{animation:1.9s ease-in-out infinite both -walletlink-spinner-circle;display:block;fill:transparent;stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -walletlink-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -walletlink-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
      /***/
    },

    /***/
    "uc/Z":
    /*!*****************************************************************!*\
      !*** ./node_modules/walletlink/dist/components/Snackbar-css.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function ucZ(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = ".-walletlink-css-reset .-walletlink-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-css-reset .-walletlink-snackbar-item{background-color:#fff;border-radius:8px;box-shadow:0px 16px 24px rgba(0,0,0,.06),0px 0px 8px rgba(0,0,0,.04);display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:hidden;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-snackbar-item-content{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;padding:8px 8px 8px 16px;user-select:none}.-walletlink-css-reset .-walletlink-snackbar-item-content-message{color:#000;font-size:14px;line-height:1.5}.-walletlink-css-reset .-walletlink-snackbar-item-content-chevron{position:relative;display:block;margin:0 8px;transition:transform .05s}.-walletlink-css-reset .-walletlink-snackbar-item-content-chevron::before{position:relative;top:-2px;content:\"\";display:block;border-top:2px solid #000;border-left:2px solid #000;width:8px;height:8px;transform:rotate(-135deg)}.-walletlink-css-reset .-walletlink-snackbar-item-progress-bar{display:block;height:2px;position:relative}.-walletlink-css-reset .-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar 2s linear infinite;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%);content:\"\";height:100%;left:-100%;position:absolute;width:100%}.-walletlink-css-reset .-walletlink-snackbar-item-actions{display:none;flex-direction:column;border-top:1px solid #f5f7f8;padding:2px 16px 8px}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item{margin:8px 0}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-info{color:#888;font-size:14px;margin:0 8px 0 0}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-button{-webkit-appearance:none;-webkit-text-fill-color:#1652f0;background:transparent;color:#1652f0;cursor:pointer;display:inline;font-size:14px;margin:0;padding:0;transition:opacity .25s}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-button:active{opacity:.6}.-walletlink-css-reset .-walletlink-snackbar-item-hidden{opacity:0;text-align:left;transform:translateX(25%)}.-walletlink-css-reset .-walletlink-snackbar-item-expanded .-walletlink-snackbar-item-content-chevron{transform:rotate(180deg)}.-walletlink-css-reset .-walletlink-snackbar-item-expanded .-walletlink-snackbar-item-actions{display:flex}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-content-message{color:#999}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-content-chevron::before{border-top:2px solid #ccc;border-left:2px solid #ccc}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar-dark 2s linear infinite;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-actions{border-top:1px solid #343434}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-actions-item-button{-webkit-text-fill-color:#ccc;color:#ccc}@keyframes -walletlink-snackbar-progressbar{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}50.01%{background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}}@keyframes -walletlink-snackbar-progressbar-dark{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}50.01%{background-image:linear-gradient(to left, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}}";
      /***/
    },

    /***/
    "vFHP":
    /*!************************************************************!*\
      !*** ./node_modules/walletlink/dist/relay/Web3Response.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function vFHP(module, exports, __webpack_require__) {
      "use strict"; // Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
      // Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
      // Licensed under the Apache License, version 2.0

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Web3Method_1 = __webpack_require__(
      /*! ./Web3Method */
      "8YYL");

      function ErrorResponse(method, errorMessage) {
        return {
          method: method,
          errorMessage: errorMessage
        };
      }

      exports.ErrorResponse = ErrorResponse;

      function RequestEthereumAccountsResponse(addresses) {
        return {
          method: Web3Method_1.Web3Method.requestEthereumAccounts,
          result: addresses
        };
      }

      exports.RequestEthereumAccountsResponse = RequestEthereumAccountsResponse;

      function isRequestEthereumAccountsResponse(res) {
        return res && res.method === Web3Method_1.Web3Method.requestEthereumAccounts;
      }

      exports.isRequestEthereumAccountsResponse = isRequestEthereumAccountsResponse;
      /***/
    }
  }]);
})();
//# sourceMappingURL=walletlink-es5.js.map