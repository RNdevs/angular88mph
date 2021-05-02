(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ledgerhq-hw-transport-u2f"], {
    /***/
    "1BiQ":
    /*!************************************************************************!*\
      !*** ./node_modules/@ledgerhq/hw-transport-u2f/lib-es/TransportU2F.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function BiQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
          return TransportU2F;
        });
        /* harmony import */


        var u2f_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! u2f-api */
        "1c9+");
        /* harmony import */


        var u2f_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(u2f_api__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @ledgerhq/hw-transport */
        "9oXm");
        /* harmony import */


        var _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @ledgerhq/logs */
        "vULT");
        /* harmony import */


        var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @ledgerhq/errors */
        "qPxQ");

        function wrapU2FTransportError(originalError, message, id) {
          var err = new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_3__["TransportError"](message, id); // $FlowFixMe

          err.originalError = originalError;
          return err;
        }

        function wrapApdu(apdu, key) {
          var result = Buffer.alloc(apdu.length);

          for (var i = 0; i < apdu.length; i++) {
            result[i] = apdu[i] ^ key[i % key.length];
          }

          return result;
        } // Convert from normal to web-safe, strip trailing "="s


        var webSafe64 = function webSafe64(base64) {
          return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        }; // Convert from web-safe to normal, add trailing "="s


        var normal64 = function normal64(base64) {
          return base64.replace(/-/g, "+").replace(/_/g, "/") + "==".substring(0, 3 * base64.length % 4);
        };

        function attemptExchange(apdu, timeoutMillis, scrambleKey, unwrap) {
          var keyHandle = wrapApdu(apdu, scrambleKey);
          var challenge = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex");
          var signRequest = {
            version: "U2F_V2",
            keyHandle: webSafe64(keyHandle.toString("base64")),
            challenge: webSafe64(challenge.toString("base64")),
            appId: location.origin
          };
          Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__["log"])("apdu", "=> " + apdu.toString("hex"));
          return Object(u2f_api__WEBPACK_IMPORTED_MODULE_0__["sign"])(signRequest, timeoutMillis / 1000).then(function (response) {
            var signatureData = response.signatureData;

            if (typeof signatureData === "string") {
              var data = Buffer.from(normal64(signatureData), "base64");
              var result;

              if (!unwrap) {
                result = data;
              } else {
                result = data.slice(5);
              }

              Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__["log"])("apdu", "<= " + result.toString("hex"));
              return result;
            } else {
              throw response;
            }
          });
        }

        var transportInstances = [];

        function emitDisconnect() {
          transportInstances.forEach(function (t) {
            return t.emit("disconnect");
          });
          transportInstances = [];
        }

        function isTimeoutU2FError(u2fError) {
          return u2fError.metaData.code === 5;
        }
        /**
         * U2F web Transport implementation
         * @example
         * import TransportU2F from "@ledgerhq/hw-transport-u2f";
         * ...
         * TransportU2F.create().then(transport => ...)
         */


        var TransportU2F = /*#__PURE__*/function (_ledgerhq_hw_transpor) {
          _inherits(TransportU2F, _ledgerhq_hw_transpor);

          var _super = _createSuper(TransportU2F);

          _createClass(TransportU2F, null, [{
            key: "open",

            /*
             */

            /*
             */

            /**
             * static function to create a new Transport from a connected Ledger device discoverable via U2F (browser support)
             */
            value: function () {
              var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_) {
                var _openTimeout,
                    _args = arguments;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _openTimeout = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5000;
                        return _context.abrupt("return", new TransportU2F());

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function open(_x) {
                return _open.apply(this, arguments);
              }

              return open;
            }()
          }]);

          function TransportU2F() {
            var _this;

            _classCallCheck(this, TransportU2F);

            _this = _super.call(this);
            _this.scrambleKey = void 0;
            _this.unwrap = true;
            transportInstances.push(_assertThisInitialized(_this));
            return _this;
          }
          /**
           * Exchange with the device using APDU protocol.
           * @param apdu
           * @returns a promise of apdu response
           */


          _createClass(TransportU2F, [{
            key: "exchange",
            value: function () {
              var _exchange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apdu) {
                var isU2FError;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return attemptExchange(apdu, this.exchangeTimeout, this.scrambleKey, this.unwrap);

                      case 3:
                        return _context2.abrupt("return", _context2.sent);

                      case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2["catch"](0);
                        isU2FError = typeof _context2.t0.metaData === "object";

                        if (!isU2FError) {
                          _context2.next = 14;
                          break;
                        }

                        if (isTimeoutU2FError(_context2.t0)) {
                          emitDisconnect();
                        } // the wrapping make error more usable and "printable" to the end user.


                        throw wrapU2FTransportError(_context2.t0, "Failed to sign with Ledger device: U2F " + _context2.t0.metaData.type, "U2F_" + _context2.t0.metaData.code);

                      case 14:
                        throw _context2.t0;

                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[0, 6]]);
              }));

              function exchange(_x2) {
                return _exchange.apply(this, arguments);
              }

              return exchange;
            }()
            /**
             */

          }, {
            key: "setScrambleKey",
            value: function setScrambleKey(scrambleKey) {
              this.scrambleKey = Buffer.from(scrambleKey, "ascii");
            }
            /**
             */

          }, {
            key: "setUnwrap",
            value: function setUnwrap(unwrap) {
              this.unwrap = unwrap;
            }
          }, {
            key: "close",
            value: function close() {
              // u2f have no way to clean things up
              return Promise.resolve();
            }
          }]);

          return TransportU2F;
        }(_ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_1__["default"]);

        TransportU2F.isSupported = u2f_api__WEBPACK_IMPORTED_MODULE_0__["isSupported"];

        TransportU2F.list = function () {
          return (// this transport is not discoverable but we are going to guess if it is here with isSupported()
            Object(u2f_api__WEBPACK_IMPORTED_MODULE_0__["isSupported"])().then(function (supported) {
              return supported ? [null] : [];
            })
          );
        };

        TransportU2F.listen = function (observer) {
          var unsubscribed = false;
          Object(u2f_api__WEBPACK_IMPORTED_MODULE_0__["isSupported"])().then(function (supported) {
            if (unsubscribed) return;

            if (supported) {
              observer.next({
                type: "add",
                descriptor: null
              });
              observer.complete();
            } else {
              observer.error(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_3__["TransportError"]("U2F browser support is needed for Ledger. " + "Please use Chrome, Opera or Firefox with a U2F extension. " + "Also make sure you're on an HTTPS connection", "U2FNotSupported"));
            }
          });
          return {
            unsubscribe: function unsubscribe() {
              unsubscribed = true;
            }
          };
        }; //# sourceMappingURL=TransportU2F.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "1c9+":
    /*!***************************************!*\
      !*** ./node_modules/u2f-api/index.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function c9(module, exports, __webpack_require__) {
      "use strict";

      module.exports = __webpack_require__(
      /*! ./lib/u2f-api */
      "d5mW");
      /***/
    },

    /***/
    "9oXm":
    /*!*****************************************************************!*\
      !*** ./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js ***!
      \*****************************************************************/

    /*! exports provided: TransportError, TransportStatusError, StatusCodes, getAltStatusMessage, default */

    /***/
    function oXm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
          return Transport;
        });
        /* harmony import */


        var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! events */
        "+qE3");
        /* harmony import */


        var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @ledgerhq/errors */
        "qPxQ");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "TransportError", function () {
          return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "TransportStatusError", function () {
          return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "StatusCodes", function () {
          return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function () {
          return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["getAltStatusMessage"];
        });
        /**
         */

        /**
         * Transport defines the generic interface to share between node/u2f impl
         * A **Descriptor** is a parametric type that is up to be determined for the implementation.
         * it can be for instance an ID, an file path, a URL,...
         */


        var Transport = /*#__PURE__*/function () {
          function Transport() {
            var _this2 = this;

            _classCallCheck(this, Transport);

            this.exchangeTimeout = 30000;
            this.unresponsiveTimeout = 15000;
            this.deviceModel = null;
            this._events = new events__WEBPACK_IMPORTED_MODULE_0___default.a();

            this.send = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(cla, ins, p1, p2) {
                var data,
                    statusList,
                    response,
                    sw,
                    _args3 = arguments;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        data = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : Buffer.alloc(0);
                        statusList = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : [_ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"].OK];

                        if (!(data.length >= 256)) {
                          _context3.next = 4;
                          break;
                        }

                        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");

                      case 4:
                        _context3.next = 6;
                        return _this2.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));

                      case 6:
                        response = _context3.sent;
                        sw = response.readUInt16BE(response.length - 2);

                        if (statusList.some(function (s) {
                          return s === sw;
                        })) {
                          _context3.next = 10;
                          break;
                        }

                        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"](sw);

                      case 10:
                        return _context3.abrupt("return", response);

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3, _x4, _x5, _x6) {
                return _ref.apply(this, arguments);
              };
            }();

            this.exchangeBusyPromise = void 0;

            this.exchangeAtomicImpl = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(f) {
                var resolveBusy, busyPromise, unresponsiveReached, timeout, res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!_this2.exchangeBusyPromise) {
                          _context4.next = 2;
                          break;
                        }

                        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportRaceCondition"]("An action was already pending on the Ledger device. Please deny or reconnect.");

                      case 2:
                        busyPromise = new Promise(function (r) {
                          resolveBusy = r;
                        });
                        _this2.exchangeBusyPromise = busyPromise;
                        unresponsiveReached = false;
                        timeout = setTimeout(function () {
                          unresponsiveReached = true;

                          _this2.emit("unresponsive");
                        }, _this2.unresponsiveTimeout);
                        _context4.prev = 6;
                        _context4.next = 9;
                        return f();

                      case 9:
                        res = _context4.sent;

                        if (unresponsiveReached) {
                          _this2.emit("responsive");
                        }

                        return _context4.abrupt("return", res);

                      case 12:
                        _context4.prev = 12;
                        clearTimeout(timeout);
                        if (resolveBusy) resolveBusy();
                        _this2.exchangeBusyPromise = null;
                        return _context4.finish(12);

                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[6,, 12, 17]]);
              }));

              return function (_x7) {
                return _ref2.apply(this, arguments);
              };
            }();

            this._appAPIlock = null;
          }
          /**
           * low level api to communicate with the device
           * This method is for implementations to implement but should not be directly called.
           * Instead, the recommanded way is to use send() method
           * @param apdu the data to send
           * @return a Promise of response data
           */


          _createClass(Transport, [{
            key: "exchange",
            value: function exchange(_apdu) {
              throw new Error("exchange not implemented");
            }
            /**
             * set the "scramble key" for the next exchanges with the device.
             * Each App can have a different scramble key and they internally will set it at instanciation.
             * @param key the scramble key
             */

          }, {
            key: "setScrambleKey",
            value: function setScrambleKey(_key) {}
            /**
             * close the exchange with the device.
             * @return a Promise that ends when the transport is closed.
             */

          }, {
            key: "close",
            value: function close() {
              return Promise.resolve();
            }
            /**
             * Listen to an event on an instance of transport.
             * Transport implementation can have specific events. Here is the common events:
             * * `"disconnect"` : triggered if Transport is disconnected
             */

          }, {
            key: "on",
            value: function on(eventName, cb) {
              this._events.on(eventName, cb);
            }
            /**
             * Stop listening to an event on an instance of transport.
             */

          }, {
            key: "off",
            value: function off(eventName, cb) {
              this._events.removeListener(eventName, cb);
            }
          }, {
            key: "emit",
            value: function emit(event) {
              var _this$_events;

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }

              (_this$_events = this._events).emit.apply(_this$_events, [event].concat(args));
            }
            /**
             * Enable or not logs of the binary exchange
             */

          }, {
            key: "setDebugMode",
            value: function setDebugMode() {
              console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
            }
            /**
             * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
             */

          }, {
            key: "setExchangeTimeout",
            value: function setExchangeTimeout(exchangeTimeout) {
              this.exchangeTimeout = exchangeTimeout;
            }
            /**
             * Define the delay before emitting "unresponsive" on an exchange that does not respond
             */

          }, {
            key: "setExchangeUnresponsiveTimeout",
            value: function setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
              this.unresponsiveTimeout = unresponsiveTimeout;
            }
            /**
             * wrapper on top of exchange to simplify work of the implementation.
             * @param cla
             * @param ins
             * @param p1
             * @param p2
             * @param data
             * @param statusList is a list of accepted status code (shorts). [0x9000] by default
             * @return a Promise of response buffer
             */

            /**
             * create() allows to open the first descriptor available or
             * throw if there is none or if timeout is reached.
             * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
             * @example
            TransportFoo.create().then(transport => ...)
             */

          }, {
            key: "decorateAppAPIMethods",
            value: function decorateAppAPIMethods(self, methods, scrambleKey) {
              var _iterator = _createForOfIteratorHelper(methods),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var methodName = _step.value;
                  self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }, {
            key: "decorateAppAPIMethod",
            value: function decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
              var _this3 = this;

              return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _appAPIlock,
                    _len2,
                    args,
                    _key3,
                    _args5 = arguments;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _appAPIlock = _this3._appAPIlock;

                        if (!_appAPIlock) {
                          _context5.next = 3;
                          break;
                        }

                        return _context5.abrupt("return", Promise.reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked")));

                      case 3:
                        _context5.prev = 3;
                        _this3._appAPIlock = methodName;

                        _this3.setScrambleKey(scrambleKey);

                        for (_len2 = _args5.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                          args[_key3] = _args5[_key3];
                        }

                        _context5.next = 9;
                        return f.apply(ctx, args);

                      case 9:
                        return _context5.abrupt("return", _context5.sent);

                      case 10:
                        _context5.prev = 10;
                        _this3._appAPIlock = null;
                        return _context5.finish(10);

                      case 13:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[3,, 10, 13]]);
              }));
            }
          }], [{
            key: "create",
            value: function create() {
              var _this4 = this;

              var openTimeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
              var listenTimeout = arguments.length > 1 ? arguments[1] : undefined;
              return new Promise(function (resolve, reject) {
                var found = false;

                var sub = _this4.listen({
                  next: function next(e) {
                    found = true;
                    if (sub) sub.unsubscribe();
                    if (listenTimeoutId) clearTimeout(listenTimeoutId);

                    _this4.open(e.descriptor, openTimeout).then(resolve, reject);
                  },
                  error: function error(e) {
                    if (listenTimeoutId) clearTimeout(listenTimeoutId);
                    reject(e);
                  },
                  complete: function complete() {
                    if (listenTimeoutId) clearTimeout(listenTimeoutId);

                    if (!found) {
                      reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](_this4.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
                    }
                  }
                });

                var listenTimeoutId = listenTimeout ? setTimeout(function () {
                  sub.unsubscribe();
                  reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](_this4.ErrorMessage_ListenTimeout, "ListenTimeout"));
                }, listenTimeout) : null;
              });
            }
          }]);

          return Transport;
        }();

        Transport.isSupported = void 0;
        Transport.list = void 0;
        Transport.listen = void 0;
        Transport.open = void 0;
        Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
        Transport.ErrorMessage_NoDeviceFound = "No Ledger device found"; //# sourceMappingURL=Transport.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "adUY":
    /*!****************************************************!*\
      !*** ./node_modules/u2f-api/lib/google-u2f-api.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function adUY(module, exports, __webpack_require__) {
      "use strict"; // Copyright 2014 Google Inc. All rights reserved
      //
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file or at
      // https://developers.google.com/open-source/licenses/bsd

      /**
       * @fileoverview The U2F api.
       */

      /** Namespace for the U2F api.
       * @type {Object}
       */

      var u2f = u2f || {};
      module.exports = u2f; // Adaptation for u2f-api package

      /**
       * The U2F extension id
       * @type {string}
       * @const
       */

      u2f.EXTENSION_ID = 'kmendfapggjehodndflmmgagdbamhnfd';
      /**
       * Message types for messsages to/from the extension
       * @const
       * @enum {string}
       */

      u2f.MessageTypes = {
        'U2F_REGISTER_REQUEST': 'u2f_register_request',
        'U2F_SIGN_REQUEST': 'u2f_sign_request',
        'U2F_REGISTER_RESPONSE': 'u2f_register_response',
        'U2F_SIGN_RESPONSE': 'u2f_sign_response'
      };
      /**
       * Response status codes
       * @const
       * @enum {number}
       */

      u2f.ErrorCodes = {
        'OK': 0,
        'OTHER_ERROR': 1,
        'BAD_REQUEST': 2,
        'CONFIGURATION_UNSUPPORTED': 3,
        'DEVICE_INELIGIBLE': 4,
        'TIMEOUT': 5
      };
      /**
       * A message type for registration requests
       * @typedef {{
       *   type: u2f.MessageTypes,
       *   signRequests: Array.<u2f.SignRequest>,
       *   registerRequests: ?Array.<u2f.RegisterRequest>,
       *   timeoutSeconds: ?number,
       *   requestId: ?number
       * }}
       */

      u2f.Request;
      /**
       * A message for registration responses
       * @typedef {{
       *   type: u2f.MessageTypes,
       *   responseData: (u2f.Error | u2f.RegisterResponse | u2f.SignResponse),
       *   requestId: ?number
       * }}
       */

      u2f.Response;
      /**
       * An error object for responses
       * @typedef {{
       *   errorCode: u2f.ErrorCodes,
       *   errorMessage: ?string
       * }}
       */

      u2f.Error;
      /**
       * Data object for a single sign request.
       * @typedef {{
       *   version: string,
       *   challenge: string,
       *   keyHandle: string,
       *   appId: string
       * }}
       */

      u2f.SignRequest;
      /**
       * Data object for a sign response.
       * @typedef {{
       *   keyHandle: string,
       *   signatureData: string,
       *   clientData: string
       * }}
       */

      u2f.SignResponse;
      /**
       * Data object for a registration request.
       * @typedef {{
       *   version: string,
       *   challenge: string,
       *   appId: string
       * }}
       */

      u2f.RegisterRequest;
      /**
       * Data object for a registration response.
       * @typedef {{
       *   registrationData: string,
       *   clientData: string
       * }}
       */

      u2f.RegisterResponse; // Low level MessagePort API support

      /**
       * Call MessagePort disconnect
       */

      u2f.disconnect = function () {
        if (u2f.port_ && u2f.port_.port_) {
          u2f.port_.port_.disconnect();
          u2f.port_ = null;
        }
      };
      /**
       * Sets up a MessagePort to the U2F extension using the
       * available mechanisms.
       * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
       */


      u2f.getMessagePort = function (callback) {
        if (typeof chrome != 'undefined' && chrome.runtime) {
          // The actual message here does not matter, but we need to get a reply
          // for the callback to run. Thus, send an empty signature request
          // in order to get a failure response.
          var msg = {
            type: u2f.MessageTypes.U2F_SIGN_REQUEST,
            signRequests: []
          };
          chrome.runtime.sendMessage(u2f.EXTENSION_ID, msg, function () {
            if (!chrome.runtime.lastError) {
              // We are on a whitelisted origin and can talk directly
              // with the extension.
              u2f.getChromeRuntimePort_(callback);
            } else {
              // chrome.runtime was available, but we couldn't message
              // the extension directly, use iframe
              u2f.getIframePort_(callback);
            }
          });
        } else {
          // chrome.runtime was not available at all, which is normal
          // when this origin doesn't have access to any extensions.
          u2f.getIframePort_(callback);
        }
      };
      /**
       * Connects directly to the extension via chrome.runtime.connect
       * @param {function(u2f.WrappedChromeRuntimePort_)} callback
       * @private
       */


      u2f.getChromeRuntimePort_ = function (callback) {
        var port = chrome.runtime.connect(u2f.EXTENSION_ID, {
          'includeTlsChannelId': true
        });
        setTimeout(function () {
          callback(null, new u2f.WrappedChromeRuntimePort_(port));
        }, 0);
      };
      /**
       * A wrapper for chrome.runtime.Port that is compatible with MessagePort.
       * @param {Port} port
       * @constructor
       * @private
       */


      u2f.WrappedChromeRuntimePort_ = function (port) {
        this.port_ = port;
      };
      /**
       * Posts a message on the underlying channel.
       * @param {Object} message
       */


      u2f.WrappedChromeRuntimePort_.prototype.postMessage = function (message) {
        this.port_.postMessage(message);
      };
      /**
       * Emulates the HTML 5 addEventListener interface. Works only for the
       * onmessage event, which is hooked up to the chrome.runtime.Port.onMessage.
       * @param {string} eventName
       * @param {function({data: Object})} handler
       */


      u2f.WrappedChromeRuntimePort_.prototype.addEventListener = function (eventName, handler) {
        var name = eventName.toLowerCase();

        if (name == 'message' || name == 'onmessage') {
          this.port_.onMessage.addListener(function (message) {
            // Emulate a minimal MessageEvent object
            handler({
              'data': message
            });
          });
        } else {
          console.error('WrappedChromeRuntimePort only supports onMessage');
        }
      };
      /**
       * Sets up an embedded trampoline iframe, sourced from the extension.
       * @param {function(MessagePort)} callback
       * @private
       */


      u2f.getIframePort_ = function (callback) {
        // Create the iframe
        var iframeOrigin = 'chrome-extension://' + u2f.EXTENSION_ID;
        var iframe = document.createElement('iframe');
        iframe.src = iframeOrigin + '/u2f-comms.html';
        iframe.setAttribute('style', 'display:none');
        document.body.appendChild(iframe);
        var hasCalledBack = false;
        var channel = new MessageChannel();

        var ready = function ready(message) {
          if (message.data == 'ready') {
            channel.port1.removeEventListener('message', ready);

            if (!hasCalledBack) {
              hasCalledBack = true;
              callback(null, channel.port1);
            }
          } else {
            console.error('First event on iframe port was not "ready"');
          }
        };

        channel.port1.addEventListener('message', ready);
        channel.port1.start();
        iframe.addEventListener('load', function () {
          // Deliver the port to the iframe and initialize
          iframe.contentWindow.postMessage('init', iframeOrigin, [channel.port2]);
        }); // Give this 200ms to initialize, after that, we treat this method as failed

        setTimeout(function () {
          if (!hasCalledBack) {
            hasCalledBack = true;
            callback(new Error("IFrame extension not supported"));
          }
        }, 200);
      }; // High-level JS API

      /**
       * Default extension response timeout in seconds.
       * @const
       */


      u2f.EXTENSION_TIMEOUT_SEC = 30;
      /**
       * A singleton instance for a MessagePort to the extension.
       * @type {MessagePort|u2f.WrappedChromeRuntimePort_}
       * @private
       */

      u2f.port_ = null;
      /**
       * Callbacks waiting for a port
       * @type {Array.<function((MessagePort|u2f.WrappedChromeRuntimePort_))>}
       * @private
       */

      u2f.waitingForPort_ = [];
      /**
       * A counter for requestIds.
       * @type {number}
       * @private
       */

      u2f.reqCounter_ = 0;
      /**
       * A map from requestIds to client callbacks
       * @type {Object.<number,(function((u2f.Error|u2f.RegisterResponse))
       *                       |function((u2f.Error|u2f.SignResponse)))>}
       * @private
       */

      u2f.callbackMap_ = {};
      /**
       * Creates or retrieves the MessagePort singleton to use.
       * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
       * @private
       */

      u2f.getPortSingleton_ = function (callback) {
        if (u2f.port_) {
          callback(null, u2f.port_);
        } else {
          if (u2f.waitingForPort_.length == 0) {
            u2f.getMessagePort(function (err, port) {
              if (!err) {
                u2f.port_ = port;
                u2f.port_.addEventListener('message',
                /** @type {function(Event)} */
                u2f.responseHandler_);
              } // Careful, here be async callbacks. Maybe.


              while (u2f.waitingForPort_.length) {
                u2f.waitingForPort_.shift()(err, port);
              }
            });
          }

          u2f.waitingForPort_.push(callback);
        }
      };
      /**
       * Handles response messages from the extension.
       * @param {MessageEvent.<u2f.Response>} message
       * @private
       */


      u2f.responseHandler_ = function (message) {
        var response = message.data;
        var reqId = response['requestId'];

        if (!reqId || !u2f.callbackMap_[reqId]) {
          console.error('Unknown or missing requestId in response.');
          return;
        }

        var cb = u2f.callbackMap_[reqId];
        delete u2f.callbackMap_[reqId];
        cb(null, response['responseData']);
      };
      /**
       * Calls the callback with true or false as first and only argument
       * @param {Function} callback
       */


      u2f.isSupported = function (callback) {
        u2f.getPortSingleton_(function (err, port) {
          callback(!err);
        });
      };
      /**
       * Dispatches an array of sign requests to available U2F tokens.
       * @param {Array.<u2f.SignRequest>} signRequests
       * @param {function((u2f.Error|u2f.SignResponse))} callback
       * @param {number=} opt_timeoutSeconds
       */


      u2f.sign = function (signRequests, callback, opt_timeoutSeconds) {
        u2f.getPortSingleton_(function (err, port) {
          if (err) return callback(err);
          var reqId = ++u2f.reqCounter_;
          u2f.callbackMap_[reqId] = callback;
          var req = {
            type: u2f.MessageTypes.U2F_SIGN_REQUEST,
            signRequests: signRequests,
            timeoutSeconds: typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC,
            requestId: reqId
          };
          port.postMessage(req);
        });
      };
      /**
       * Dispatches register requests to available U2F tokens. An array of sign
       * requests identifies already registered tokens.
       * @param {Array.<u2f.RegisterRequest>} registerRequests
       * @param {Array.<u2f.SignRequest>} signRequests
       * @param {function((u2f.Error|u2f.RegisterResponse))} callback
       * @param {number=} opt_timeoutSeconds
       */


      u2f.register = function (registerRequests, signRequests, callback, opt_timeoutSeconds) {
        u2f.getPortSingleton_(function (err, port) {
          if (err) return callback(err);
          var reqId = ++u2f.reqCounter_;
          u2f.callbackMap_[reqId] = callback;
          var req = {
            type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
            signRequests: signRequests,
            registerRequests: registerRequests,
            timeoutSeconds: typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC,
            requestId: reqId
          };
          port.postMessage(req);
        });
      };
      /***/

    },

    /***/
    "d5mW":
    /*!*********************************************!*\
      !*** ./node_modules/u2f-api/lib/u2f-api.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function d5mW(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (global) {
        module.exports = API;

        var chromeApi = __webpack_require__(
        /*! ./google-u2f-api */
        "adUY"); // Feature detection (yes really)


        var isBrowser = typeof navigator !== 'undefined' && !!navigator.userAgent;
        var isSafari = isBrowser && navigator.userAgent.match(/Safari\//) && !navigator.userAgent.match(/Chrome\//);
        var isEDGE = isBrowser && navigator.userAgent.match(/Edge\/1[2345]/);
        var _backend = null;

        function getBackend(Promise) {
          if (!_backend) _backend = new Promise(function (resolve, reject) {
            function notSupported() {
              // Note; {native: true} means *not* using Google's hack
              resolve({
                u2f: null,
                "native": true
              });
            }

            if (!isBrowser) return notSupported();
            if (isSafari) // Safari doesn't support U2F, and the Safari-FIDO-U2F
              // extension lacks full support (Multi-facet apps), so we
              // block it until proper support.
              return notSupported();
            var hasNativeSupport = typeof window.u2f !== 'undefined' && typeof window.u2f.sign === 'function';
            if (hasNativeSupport) resolve({
              u2f: window.u2f,
              "native": true
            });
            if (isEDGE) // We don't want to check for Google's extension hack on EDGE
              // as it'll cause trouble (popups, etc)
              return notSupported();
            if (location.protocol === 'http:') // U2F isn't supported over http, only https
              return notSupported();
            if (typeof MessageChannel === 'undefined') // Unsupported browser, the chrome hack would throw
              return notSupported(); // Test for google extension support

            chromeApi.isSupported(function (ok) {
              if (ok) resolve({
                u2f: chromeApi,
                "native": false
              });else notSupported();
            });
          });
          return _backend;
        }

        function API(Promise) {
          return {
            isSupported: isSupported.bind(Promise),
            ensureSupport: ensureSupport.bind(Promise),
            register: register.bind(Promise),
            sign: sign.bind(Promise),
            ErrorCodes: API.ErrorCodes,
            ErrorNames: API.ErrorNames
          };
        }

        API.ErrorCodes = {
          CANCELLED: -1,
          OK: 0,
          OTHER_ERROR: 1,
          BAD_REQUEST: 2,
          CONFIGURATION_UNSUPPORTED: 3,
          DEVICE_INELIGIBLE: 4,
          TIMEOUT: 5
        };
        API.ErrorNames = {
          "-1": "CANCELLED",
          "0": "OK",
          "1": "OTHER_ERROR",
          "2": "BAD_REQUEST",
          "3": "CONFIGURATION_UNSUPPORTED",
          "4": "DEVICE_INELIGIBLE",
          "5": "TIMEOUT"
        };

        function makeError(msg, err) {
          var code = err != null ? err.errorCode : 1; // Default to OTHER_ERROR

          var type = API.ErrorNames['' + code];
          var error = new Error(msg);
          error.metaData = {
            type: type,
            code: code
          };
          return error;
        }

        function deferPromise(Promise, promise) {
          var ret = {};
          ret.promise = new Promise(function (resolve, reject) {
            ret.resolve = resolve;
            ret.reject = reject;
            promise.then(resolve, reject);
          });
          /**
           * Reject request promise and disconnect port if 'disconnect' flag is true
           * @param {string} msg
           * @param {boolean} disconnect
           */

          ret.promise.cancel = function (msg, disconnect) {
            getBackend(Promise).then(function (backend) {
              if (disconnect && !backend["native"]) backend.u2f.disconnect();
              ret.reject(makeError(msg, {
                errorCode: -1
              }));
            });
          };

          return ret;
        }

        function defer(Promise, fun) {
          return deferPromise(Promise, new Promise(function (resolve, reject) {
            try {
              fun && fun(resolve, reject);
            } catch (err) {
              reject(err);
            }
          }));
        }

        function isSupported() {
          var Promise = this;
          return getBackend(Promise).then(function (backend) {
            return !!backend.u2f;
          });
        }

        function _ensureSupport(backend) {
          if (!backend.u2f) {
            if (location.protocol === 'http:') throw new Error("U2F isn't supported over http, only https");
            throw new Error("U2F not supported");
          }
        }

        function ensureSupport() {
          var Promise = this;
          return getBackend(Promise).then(_ensureSupport);
        }

        function register(registerRequests, signRequests
        /* = null */
        , timeout) {
          var Promise = this;
          if (!Array.isArray(registerRequests)) registerRequests = [registerRequests];

          if (typeof signRequests === 'number' && typeof timeout === 'undefined') {
            timeout = signRequests;
            signRequests = null;
          }

          if (!signRequests) signRequests = [];
          return deferPromise(Promise, getBackend(Promise).then(function (backend) {
            _ensureSupport(backend);

            var _native = backend["native"];
            var u2f = backend.u2f;
            return new Promise(function (resolve, reject) {
              function cbNative(response) {
                if (response.errorCode) reject(makeError("Registration failed", response));else {
                  delete response.errorCode;
                  resolve(response);
                }
              }

              function cbChrome(err, response) {
                if (err) reject(err);else if (response.errorCode) reject(makeError("Registration failed", response));else resolve(response);
              }

              if (_native) {
                var appId = registerRequests[0].appId;
                u2f.register(appId, registerRequests, signRequests, cbNative, timeout);
              } else {
                u2f.register(registerRequests, signRequests, cbChrome, timeout);
              }
            });
          })).promise;
        }

        function sign(signRequests, timeout) {
          var Promise = this;
          if (!Array.isArray(signRequests)) signRequests = [signRequests];
          return deferPromise(Promise, getBackend(Promise).then(function (backend) {
            _ensureSupport(backend);

            var _native2 = backend["native"];
            var u2f = backend.u2f;
            return new Promise(function (resolve, reject) {
              function cbNative(response) {
                if (response.errorCode) reject(makeError("Sign failed", response));else {
                  delete response.errorCode;
                  resolve(response);
                }
              }

              function cbChrome(err, response) {
                if (err) reject(err);else if (response.errorCode) reject(makeError("Sign failed", response));else resolve(response);
              }

              if (_native2) {
                var appId = signRequests[0].appId;
                var challenge = signRequests[0].challenge;
                u2f.sign(appId, challenge, signRequests, cbNative, timeout);
              } else {
                u2f.sign(signRequests, cbChrome, timeout);
              }
            });
          })).promise;
        }

        function makeDefault(func) {
          API[func] = function () {
            if (!global.Promise) // This is very unlikely to ever happen, since browsers
              // supporting U2F will most likely support Promises.
              throw new Error("The platform doesn't natively support promises");
            var args = [].slice.call(arguments);
            return API(global.Promise)[func].apply(null, args);
          };
        } // Provide default functions using the built-in Promise if available.


        makeDefault('isSupported');
        makeDefault('ensureSupport');
        makeDefault('register');
        makeDefault('sign');
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../webpack/buildin/global.js */
      "yLpj"));
      /***/
    },

    /***/
    "vULT":
    /*!*****************************************************!*\
      !*** ./node_modules/@ledgerhq/logs/lib-es/index.js ***!
      \*****************************************************/

    /*! exports provided: log, listen */

    /***/
    function vULT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "log", function () {
        return log;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listen", function () {
        return listen;
      });
      /**
       * A Log object
       */


      var id = 0;
      var subscribers = [];
      /**
       * log something
       * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
       * @param message a clear message of the log associated to the type
       */

      var log = function log(type, message, data) {
        var obj = {
          type: type,
          id: String(++id),
          date: new Date()
        };
        if (message) obj.message = message;
        if (data) obj.data = data;
        dispatch(obj);
      };
      /**
       * listen to logs.
       * @param cb that is called for each future log() with the Log object
       * @return a function that can be called to unsubscribe the listener
       */


      var listen = function listen(cb) {
        subscribers.push(cb);
        return function () {
          var i = subscribers.indexOf(cb);

          if (i !== -1) {
            // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
            subscribers[i] = subscribers[subscribers.length - 1];
            subscribers.pop();
          }
        };
      };

      function dispatch(log) {
        for (var i = 0; i < subscribers.length; i++) {
          try {
            subscribers[i](log);
          } catch (e) {
            console.error(e);
          }
        }
      } // for debug purpose


      if (typeof window !== "undefined") {
        window.__ledgerLogsListen = listen;
      } //# sourceMappingURL=index.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=ledgerhq-hw-transport-u2f-es5.js.map