(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authereum~providerEngine-8b8d4e67-js~walletconnect-web3-provider"], {
    /***/
    "/oFA":
    /*!***************************************************!*\
      !*** ./node_modules/async/internal/doParallel.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function oFA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = doParallel;

      var _eachOf = __webpack_require__(
      /*! ../eachOf */
      "abV/");

      var _eachOf2 = _interopRequireDefault(_eachOf);

      var _wrapAsync = __webpack_require__(
      /*! ./wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function doParallel(fn) {
        return function (obj, iteratee, callback) {
          return fn(_eachOf2["default"], obj, (0, _wrapAsync2["default"])(iteratee), callback);
        };
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "/u+i":
    /*!****************************************************!*\
      !*** ./node_modules/eth-block-tracker/src/base.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function uI(module, exports, __webpack_require__) {
      var EthQuery = __webpack_require__(
      /*! eth-query */
      "QXrW");

      var pify = __webpack_require__(
      /*! pify */
      "4CaD");

      var SafeEventEmitter = __webpack_require__(
      /*! safe-event-emitter */
      "y2lW");

      var sec = 1000;

      var calculateSum = function calculateSum(accumulator, currentValue) {
        return accumulator + currentValue;
      };

      var blockTrackerEvents = ['sync', 'latest'];

      var BaseBlockTracker = /*#__PURE__*/function (_SafeEventEmitter) {
        _inherits(BaseBlockTracker, _SafeEventEmitter);

        var _super = _createSuper(BaseBlockTracker);

        //
        // public
        //
        function BaseBlockTracker() {
          var _this;

          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, BaseBlockTracker);

          _this = _super.call(this); // config

          _this._blockResetDuration = opts.blockResetDuration || 20 * sec; // state

          _this._blockResetTimeout;
          _this._currentBlock = null;
          _this._isRunning = false; // bind functions for internal use

          _this._onNewListener = _this._onNewListener.bind(_assertThisInitialized(_this));
          _this._onRemoveListener = _this._onRemoveListener.bind(_assertThisInitialized(_this));
          _this._resetCurrentBlock = _this._resetCurrentBlock.bind(_assertThisInitialized(_this)); // listen for handler changes

          _this._setupInternalEvents();

          return _this;
        }

        _createClass(BaseBlockTracker, [{
          key: "isRunning",
          value: function isRunning() {
            return this._isRunning;
          }
        }, {
          key: "getCurrentBlock",
          value: function getCurrentBlock() {
            return this._currentBlock;
          }
        }, {
          key: "getLatestBlock",
          value: function () {
            var _getLatestBlock = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var latestBlock;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this._currentBlock) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", this._currentBlock);

                    case 2:
                      _context.next = 4;
                      return new Promise(function (resolve) {
                        return _this2.once('latest', resolve);
                      });

                    case 4:
                      latestBlock = _context.sent;
                      return _context.abrupt("return", latestBlock);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getLatestBlock() {
              return _getLatestBlock.apply(this, arguments);
            }

            return getLatestBlock;
          }() // dont allow module consumer to remove our internal event listeners

        }, {
          key: "removeAllListeners",
          value: function removeAllListeners(eventName) {
            // perform default behavior, preserve fn arity
            if (eventName) {
              _get(_getPrototypeOf(BaseBlockTracker.prototype), "removeAllListeners", this).call(this, eventName);
            } else {
              _get(_getPrototypeOf(BaseBlockTracker.prototype), "removeAllListeners", this).call(this);
            } // re-add internal events


            this._setupInternalEvents(); // trigger stop check just in case


            this._onRemoveListener();
          } //
          // to be implemented in subclass
          //

        }, {
          key: "_start",
          value: function _start() {// default behavior is noop
          }
        }, {
          key: "_end",
          value: function _end() {// default behavior is noop
          } //
          // private
          //

        }, {
          key: "_setupInternalEvents",
          value: function _setupInternalEvents() {
            // first remove listeners for idempotence
            this.removeListener('newListener', this._onNewListener);
            this.removeListener('removeListener', this._onRemoveListener); // then add them

            this.on('newListener', this._onNewListener);
            this.on('removeListener', this._onRemoveListener);
          }
        }, {
          key: "_onNewListener",
          value: function _onNewListener(eventName, handler) {
            // `newListener` is called *before* the listener is added
            if (!blockTrackerEvents.includes(eventName)) return;

            this._maybeStart();
          }
        }, {
          key: "_onRemoveListener",
          value: function _onRemoveListener(eventName, handler) {
            // `removeListener` is called *after* the listener is removed
            if (this._getBlockTrackerEventCount() > 0) return;

            this._maybeEnd();
          }
        }, {
          key: "_maybeStart",
          value: function _maybeStart() {
            if (this._isRunning) return;
            this._isRunning = true; // cancel setting latest block to stale

            this._cancelBlockResetTimeout();

            this._start();
          }
        }, {
          key: "_maybeEnd",
          value: function _maybeEnd() {
            if (!this._isRunning) return;
            this._isRunning = false;

            this._setupBlockResetTimeout();

            this._end();
          }
        }, {
          key: "_getBlockTrackerEventCount",
          value: function _getBlockTrackerEventCount() {
            var _this3 = this;

            return blockTrackerEvents.map(function (eventName) {
              return _this3.listenerCount(eventName);
            }).reduce(calculateSum);
          }
        }, {
          key: "_newPotentialLatest",
          value: function _newPotentialLatest(newBlock) {
            var currentBlock = this._currentBlock; // only update if blok number is higher

            if (currentBlock && hexToInt(newBlock) <= hexToInt(currentBlock)) return;

            this._setCurrentBlock(newBlock);
          }
        }, {
          key: "_setCurrentBlock",
          value: function _setCurrentBlock(newBlock) {
            var oldBlock = this._currentBlock;
            this._currentBlock = newBlock;
            this.emit('latest', newBlock);
            this.emit('sync', {
              oldBlock: oldBlock,
              newBlock: newBlock
            });
          }
        }, {
          key: "_setupBlockResetTimeout",
          value: function _setupBlockResetTimeout() {
            // clear any existing timeout
            this._cancelBlockResetTimeout(); // clear latest block when stale


            this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration); // nodejs - dont hold process open

            if (this._blockResetTimeout.unref) {
              this._blockResetTimeout.unref();
            }
          }
        }, {
          key: "_cancelBlockResetTimeout",
          value: function _cancelBlockResetTimeout() {
            clearTimeout(this._blockResetTimeout);
          }
        }, {
          key: "_resetCurrentBlock",
          value: function _resetCurrentBlock() {
            this._currentBlock = null;
          }
        }]);

        return BaseBlockTracker;
      }(SafeEventEmitter);

      module.exports = BaseBlockTracker;

      function hexToInt(hexInt) {
        return Number.parseInt(hexInt, 16);
      }
      /***/

    },

    /***/
    "03A+":
    /*!********************************************!*\
      !*** ./node_modules/lodash/isArguments.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function A(module, exports, __webpack_require__) {
      var baseIsArguments = __webpack_require__(
      /*! ./_baseIsArguments */
      "JTzB"),
          isObjectLike = __webpack_require__(
      /*! ./isObjectLike */
      "ExA7");
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /** Built-in value references. */

      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      /**
       * Checks if `value` is likely an `arguments` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       *  else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */

      var isArguments = baseIsArguments(function () {
        return arguments;
      }()) ? baseIsArguments : function (value) {
        return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
      };
      module.exports = isArguments;
      /***/
    },

    /***/
    "0QlC":
    /*!****************************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/getBlocksForRange.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function QlC(module, exports) {
      module.exports = getBlocksForRange;

      function getBlocksForRange(_x) {
        return _getBlocksForRange.apply(this, arguments);
      }

      function _getBlocksForRange() {
        _getBlocksForRange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
          var provider, fromBlock, toBlock, fromBlockNumber, toBlockNumber, blockCountToQuery, missingBlockNumbers, blockBodies;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  provider = _ref.provider, fromBlock = _ref.fromBlock, toBlock = _ref.toBlock;
                  if (!fromBlock) fromBlock = toBlock;
                  fromBlockNumber = hexToInt(fromBlock);
                  toBlockNumber = hexToInt(toBlock);
                  blockCountToQuery = toBlockNumber - fromBlockNumber + 1; // load all blocks from old to new (inclusive)

                  missingBlockNumbers = Array(blockCountToQuery).fill().map(function (_, index) {
                    return fromBlockNumber + index;
                  }).map(intToHex);
                  _context2.next = 8;
                  return Promise.all(missingBlockNumbers.map(function (blockNum) {
                    return query(provider, 'eth_getBlockByNumber', [blockNum, false]);
                  }));

                case 8:
                  blockBodies = _context2.sent;
                  return _context2.abrupt("return", blockBodies);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _getBlocksForRange.apply(this, arguments);
      }

      function hexToInt(hexString) {
        if (hexString === undefined || hexString === null) return hexString;
        return Number.parseInt(hexString, 16);
      }

      function incrementHexInt(hexString) {
        if (hexString === undefined || hexString === null) return hexString;
        var value = hexToInt(hexString);
        return intToHex(value + 1);
      }

      function intToHex(_int) {
        if (_int === undefined || _int === null) return _int;

        var hexString = _int.toString(16);

        return '0x' + hexString;
      }

      function query(provider, method, params) {
        return new Promise(function (resolve, reject) {
          provider.sendAsync({
            id: 1,
            jsonrpc: '2.0',
            method: method,
            params: params
          }, function (err, res) {
            if (err) return reject(err);
            resolve(res.result);
          });
        });
      }
      /***/

    },

    /***/
    "1aEN":
    /*!**********************************************************************!*\
      !*** ./node_modules/json-rpc-engine/src/createScaffoldMiddleware.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function aEN(module, exports) {
      module.exports = function createScaffoldMiddleware(handlers) {
        return function (req, res, next, end) {
          var handler = handlers[req.method]; // if no handler, return

          if (handler === undefined) {
            return next();
          } // if handler is fn, call as middleware


          if (typeof handler === 'function') {
            return handler(req, res, next, end);
          } // if handler is some other value, use as result


          res.result = handler;
          return end();
        };
      };
      /***/

    },

    /***/
    "2J3U":
    /*!**************************************************!*\
      !*** ./node_modules/json-rpc-random-id/index.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function J3U(module, exports) {
      module.exports = IdIterator;

      function IdIterator(opts) {
        opts = opts || {};
        var max = opts.max || Number.MAX_SAFE_INTEGER;
        var idCounter = typeof opts.start !== 'undefined' ? opts.start : Math.floor(Math.random() * max);
        return function createRandomId() {
          idCounter = idCounter % max;
          return idCounter++;
        };
      }
      /***/

    },

    /***/
    "2nhq":
    /*!****************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function nhq(module, exports, __webpack_require__) {
      var Mutex = __webpack_require__(
      /*! await-semaphore */
      "rdBT").Mutex;

      var createAsyncMiddleware = __webpack_require__(
      /*! json-rpc-engine/src/createAsyncMiddleware */
      "w92A");

      var createJsonRpcMiddleware = __webpack_require__(
      /*! eth-json-rpc-middleware/scaffold */
      "VJGR");

      var LogFilter = __webpack_require__(
      /*! ./log-filter.js */
      "FqFB");

      var BlockFilter = __webpack_require__(
      /*! ./block-filter.js */
      "rW7p");

      var TxFilter = __webpack_require__(
      /*! ./tx-filter.js */
      "hyCD");

      var _webpack_require__ = __webpack_require__(
      /*! ./hexUtils */
      "UJ2e"),
          intToHex = _webpack_require__.intToHex,
          hexToInt = _webpack_require__.hexToInt;

      module.exports = createEthFilterMiddleware;

      function createEthFilterMiddleware(_ref2) {
        var blockTracker = _ref2.blockTracker,
            provider = _ref2.provider;
        // create filter collection
        var filterIndex = 0;
        var filters = {}; // create update mutex

        var mutex = new Mutex();
        var waitForFree = mutexMiddlewareWrapper({
          mutex: mutex
        });
        var middleware = createJsonRpcMiddleware({
          // install filters
          eth_newFilter: waitForFree(toFilterCreationMiddleware(newLogFilter)),
          eth_newBlockFilter: waitForFree(toFilterCreationMiddleware(newBlockFilter)),
          eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
          // uninstall filters
          eth_uninstallFilter: waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
          // checking filter changes
          eth_getFilterChanges: waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
          eth_getFilterLogs: waitForFree(toAsyncRpcMiddleware(getFilterLogs))
        }); // setup filter updating and destroy handler

        var filterUpdater = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref3) {
            var oldBlock, newBlock, releaseLock;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    oldBlock = _ref3.oldBlock, newBlock = _ref3.newBlock;

                    if (!(filters.length === 0)) {
                      _context4.next = 3;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 3:
                    _context4.next = 5;
                    return mutex.acquire();

                  case 5:
                    releaseLock = _context4.sent;
                    _context4.prev = 6;
                    _context4.next = 9;
                    return Promise.all(objValues(filters).map( /*#__PURE__*/function () {
                      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(filter) {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return filter.update({
                                  oldBlock: oldBlock,
                                  newBlock: newBlock
                                });

                              case 3:
                                _context3.next = 8;
                                break;

                              case 5:
                                _context3.prev = 5;
                                _context3.t0 = _context3["catch"](0);
                                // handle each error individually so filter update errors don't affect other filters
                                console.error(_context3.t0);

                              case 8:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, null, [[0, 5]]);
                      }));

                      return function (_x3) {
                        return _ref5.apply(this, arguments);
                      };
                    }()));

                  case 9:
                    _context4.next = 14;
                    break;

                  case 11:
                    _context4.prev = 11;
                    _context4.t0 = _context4["catch"](6);
                    // log error so we don't skip the releaseLock
                    console.error(_context4.t0);

                  case 14:
                    // unlock update reads
                    releaseLock();

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[6, 11]]);
          }));

          return function filterUpdater(_x2) {
            return _ref4.apply(this, arguments);
          };
        }(); // expose filter methods directly


        middleware.newLogFilter = newLogFilter;
        middleware.newBlockFilter = newBlockFilter;
        middleware.newPendingTransactionFilter = newPendingTransactionFilter;
        middleware.uninstallFilter = uninstallFilterHandler;
        middleware.getFilterChanges = getFilterChanges;
        middleware.getFilterLogs = getFilterLogs; // expose destroy method for cleanup

        middleware.destroy = function () {
          uninstallAllFilters();
        };

        return middleware; //
        // new filters
        //

        function newLogFilter(_x4) {
          return _newLogFilter.apply(this, arguments);
        }

        function _newLogFilter() {
          _newLogFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
            var filter, filterIndex;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    filter = new LogFilter({
                      provider: provider,
                      params: params
                    });
                    _context5.next = 3;
                    return installFilter(filter);

                  case 3:
                    filterIndex = _context5.sent;
                    return _context5.abrupt("return", filter);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
          return _newLogFilter.apply(this, arguments);
        }

        function newBlockFilter() {
          return _newBlockFilter.apply(this, arguments);
        }

        function _newBlockFilter() {
          _newBlockFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var filter, filterIndex;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    filter = new BlockFilter({
                      provider: provider
                    });
                    _context6.next = 3;
                    return installFilter(filter);

                  case 3:
                    filterIndex = _context6.sent;
                    return _context6.abrupt("return", filter);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
          return _newBlockFilter.apply(this, arguments);
        }

        function newPendingTransactionFilter() {
          return _newPendingTransactionFilter.apply(this, arguments);
        } //
        // get filter changes
        //


        function _newPendingTransactionFilter() {
          _newPendingTransactionFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var filter, filterIndex;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    filter = new TxFilter({
                      provider: provider
                    });
                    _context7.next = 3;
                    return installFilter(filter);

                  case 3:
                    filterIndex = _context7.sent;
                    return _context7.abrupt("return", filter);

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
          return _newPendingTransactionFilter.apply(this, arguments);
        }

        function getFilterChanges(_x5) {
          return _getFilterChanges.apply(this, arguments);
        }

        function _getFilterChanges() {
          _getFilterChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(filterIndexHex) {
            var filterIndex, filter, results;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    filterIndex = hexToInt(filterIndexHex);
                    filter = filters[filterIndex];

                    if (filter) {
                      _context8.next = 4;
                      break;
                    }

                    throw new Error("No filter for index \"".concat(filterIndex, "\""));

                  case 4:
                    results = filter.getChangesAndClear();
                    return _context8.abrupt("return", results);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
          return _getFilterChanges.apply(this, arguments);
        }

        function getFilterLogs(_x6) {
          return _getFilterLogs.apply(this, arguments);
        } //
        // remove filters
        //


        function _getFilterLogs() {
          _getFilterLogs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(filterIndexHex) {
            var filterIndex, filter;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    filterIndex = hexToInt(filterIndexHex);
                    filter = filters[filterIndex];

                    if (filter) {
                      _context9.next = 4;
                      break;
                    }

                    throw new Error("No filter for index \"".concat(filterIndex, "\""));

                  case 4:
                    // only return results for log filters
                    if (filter.type === 'log') {
                      results = filter.getAllResults();
                    } else {
                      results = [];
                    }

                    return _context9.abrupt("return", results);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
          return _getFilterLogs.apply(this, arguments);
        }

        function uninstallFilterHandler(_x7) {
          return _uninstallFilterHandler.apply(this, arguments);
        } //
        // utils
        //


        function _uninstallFilterHandler() {
          _uninstallFilterHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(filterIndexHex) {
            var filterIndex, filter, result;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    // check filter exists
                    filterIndex = hexToInt(filterIndexHex);
                    filter = filters[filterIndex];
                    result = Boolean(filter); // uninstall filter

                    if (!result) {
                      _context10.next = 6;
                      break;
                    }

                    _context10.next = 6;
                    return uninstallFilter(filterIndex);

                  case 6:
                    return _context10.abrupt("return", result);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
          return _uninstallFilterHandler.apply(this, arguments);
        }

        function installFilter(_x8) {
          return _installFilter.apply(this, arguments);
        }

        function _installFilter() {
          _installFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(filter) {
            var prevFilterCount, currentBlock, newFilterCount;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    prevFilterCount = objValues(filters).length; // install filter

                    _context11.next = 3;
                    return blockTracker.getLatestBlock();

                  case 3:
                    currentBlock = _context11.sent;
                    _context11.next = 6;
                    return filter.initialize({
                      currentBlock: currentBlock
                    });

                  case 6:
                    filterIndex++;
                    filters[filterIndex] = filter;
                    filter.id = filterIndex;
                    filter.idHex = intToHex(filterIndex); // update block tracker subs

                    newFilterCount = objValues(filters).length;
                    updateBlockTrackerSubs({
                      prevFilterCount: prevFilterCount,
                      newFilterCount: newFilterCount
                    });
                    return _context11.abrupt("return", filterIndex);

                  case 13:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));
          return _installFilter.apply(this, arguments);
        }

        function uninstallFilter(_x9) {
          return _uninstallFilter.apply(this, arguments);
        }

        function _uninstallFilter() {
          _uninstallFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(filterIndex) {
            var prevFilterCount, newFilterCount;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    prevFilterCount = objValues(filters).length;
                    delete filters[filterIndex]; // update block tracker subs

                    newFilterCount = objValues(filters).length;
                    updateBlockTrackerSubs({
                      prevFilterCount: prevFilterCount,
                      newFilterCount: newFilterCount
                    });

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
          return _uninstallFilter.apply(this, arguments);
        }

        function uninstallAllFilters() {
          return _uninstallAllFilters.apply(this, arguments);
        }

        function _uninstallAllFilters() {
          _uninstallAllFilters = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var prevFilterCount;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    prevFilterCount = objValues(filters).length;
                    filters = {}; // update block tracker subs

                    updateBlockTrackerSubs({
                      prevFilterCount: prevFilterCount,
                      newFilterCount: 0
                    });

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
          return _uninstallAllFilters.apply(this, arguments);
        }

        function updateBlockTrackerSubs(_ref6) {
          var prevFilterCount = _ref6.prevFilterCount,
              newFilterCount = _ref6.newFilterCount;

          // subscribe
          if (prevFilterCount === 0 && newFilterCount > 0) {
            blockTracker.on('sync', filterUpdater);
            return;
          } // unsubscribe


          if (prevFilterCount > 0 && newFilterCount === 0) {
            blockTracker.removeListener('sync', filterUpdater);
            return;
          }
        }
      } // helper for turning filter constructors into rpc middleware


      function toFilterCreationMiddleware(createFilterFn) {
        return toAsyncRpcMiddleware( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
          var filter,
              result,
              _args14 = arguments;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return createFilterFn.apply(void 0, _args14);

                case 2:
                  filter = _context14.sent;
                  result = intToHex(filter.id);
                  return _context14.abrupt("return", result);

                case 5:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        })));
      } // helper for pulling out req.params and setting res.result


      function toAsyncRpcMiddleware(asyncFn) {
        return createAsyncMiddleware( /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(req, res) {
            var result;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return asyncFn.apply(null, req.params);

                  case 2:
                    result = _context15.sent;
                    res.result = result;

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));

          return function (_x10, _x11) {
            return _ref8.apply(this, arguments);
          };
        }());
      }

      function mutexMiddlewareWrapper(_ref9) {
        var mutex = _ref9.mutex;
        return function (middleware) {
          return /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(req, res, next, end) {
              var releaseLock;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return mutex.acquire();

                    case 2:
                      releaseLock = _context16.sent;
                      releaseLock();
                      middleware(req, res, next, end);

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));

            return function (_x12, _x13, _x14, _x15) {
              return _ref10.apply(this, arguments);
            };
          }();
        };
      }

      function objValues(obj, fn) {
        var values = [];

        for (var key in obj) {
          values.push(obj[key]);
        }

        return values;
      }
      /***/

    },

    /***/
    "2sf1":
    /*!*********************************************!*\
      !*** ./node_modules/async/internal/once.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function sf1(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = once;

      function once(fn) {
        return function () {
          if (fn === null) return;
          var callFn = fn;
          fn = null;
          callFn.apply(this, arguments);
        };
      }

      module.exports = exports["default"];
      /***/
    },

    /***/
    "3qT5":
    /*!**********************************************!*\
      !*** ./node_modules/async/internal/slice.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function qT5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = slice;

      function slice(arrayLike, start) {
        start = start | 0;
        var newLen = Math.max(arrayLike.length - start, 0);
        var newArr = Array(newLen);

        for (var idx = 0; idx < newLen; idx++) {
          newArr[idx] = arrayLike[start + idx];
        }

        return newArr;
      }

      module.exports = exports["default"];
      /***/
    },

    /***/
    "4CaD":
    /*!*******************************************************************!*\
      !*** ./node_modules/eth-block-tracker/node_modules/pify/index.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function CaD(module, exports, __webpack_require__) {
      "use strict";

      var processFn = function processFn(fn, opts) {
        return function () {
          var _this4 = this;

          var P = opts.promiseModule;
          var args = new Array(arguments.length);

          for (var i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
          }

          return new P(function (resolve, reject) {
            if (opts.errorFirst) {
              args.push(function (err, result) {
                if (opts.multiArgs) {
                  var _results = new Array(arguments.length - 1);

                  for (var _i = 1; _i < arguments.length; _i++) {
                    _results[_i - 1] = arguments[_i];
                  }

                  if (err) {
                    _results.unshift(err);

                    reject(_results);
                  } else {
                    resolve(_results);
                  }
                } else if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              });
            } else {
              args.push(function (result) {
                if (opts.multiArgs) {
                  var _results2 = new Array(arguments.length - 1);

                  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                    _results2[_i2] = arguments[_i2];
                  }

                  resolve(_results2);
                } else {
                  resolve(result);
                }
              });
            }

            fn.apply(_this4, args);
          });
        };
      };

      module.exports = function (obj, opts) {
        opts = Object.assign({
          exclude: [/.+(Sync|Stream)$/],
          errorFirst: true,
          promiseModule: Promise
        }, opts);

        var filter = function filter(key) {
          var match = function match(pattern) {
            return typeof pattern === 'string' ? key === pattern : pattern.test(key);
          };

          return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
        };

        var ret;

        if (typeof obj === 'function') {
          ret = function ret() {
            if (opts.excludeMain) {
              return obj.apply(this, arguments);
            }

            return processFn(obj, opts).apply(this, arguments);
          };
        } else {
          ret = Object.create(Object.getPrototypeOf(obj));
        }

        for (var key in obj) {
          // eslint-disable-line guard-for-in
          var x = obj[key];
          ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
        }

        return ret;
      };
      /***/

    },

    /***/
    "56vw":
    /*!****************************************!*\
      !*** ./node_modules/async/asyncify.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function vw(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = asyncify;

      var _isObject = __webpack_require__(
      /*! lodash/isObject */
      "GoyQ");

      var _isObject2 = _interopRequireDefault(_isObject);

      var _initialParams = __webpack_require__(
      /*! ./internal/initialParams */
      "hGab");

      var _initialParams2 = _interopRequireDefault(_initialParams);

      var _setImmediate = __webpack_require__(
      /*! ./internal/setImmediate */
      "LgDX");

      var _setImmediate2 = _interopRequireDefault(_setImmediate);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Take a sync function and make it async, passing its return value to a
       * callback. This is useful for plugging sync functions into a waterfall,
       * series, or other async functions. Any arguments passed to the generated
       * function will be passed to the wrapped function (except for the final
       * callback argument). Errors thrown will be passed to the callback.
       *
       * If the function passed to `asyncify` returns a Promise, that promises's
       * resolved/rejected state will be used to call the callback, rather than simply
       * the synchronous return value.
       *
       * This also means you can asyncify ES2017 `async` functions.
       *
       * @name asyncify
       * @static
       * @memberOf module:Utils
       * @method
       * @alias wrapSync
       * @category Util
       * @param {Function} func - The synchronous function, or Promise-returning
       * function to convert to an {@link AsyncFunction}.
       * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
       * invoked with `(args..., callback)`.
       * @example
       *
       * // passing a regular synchronous function
       * async.waterfall([
       *     async.apply(fs.readFile, filename, "utf8"),
       *     async.asyncify(JSON.parse),
       *     function (data, next) {
       *         // data is the result of parsing the text.
       *         // If there was a parsing error, it would have been caught.
       *     }
       * ], callback);
       *
       * // passing a function returning a promise
       * async.waterfall([
       *     async.apply(fs.readFile, filename, "utf8"),
       *     async.asyncify(function (contents) {
       *         return db.model.create(contents);
       *     }),
       *     function (model, next) {
       *         // `model` is the instantiated model object.
       *         // If there was an error, this function would be skipped.
       *     }
       * ], callback);
       *
       * // es2017 example, though `asyncify` is not needed if your JS environment
       * // supports async functions out of the box
       * var q = async.queue(async.asyncify(async function(file) {
       *     var intermediateStep = await processFile(file);
       *     return await somePromise(intermediateStep)
       * }));
       *
       * q.push(files);
       */


      function asyncify(func) {
        return (0, _initialParams2["default"])(function (args, callback) {
          var result;

          try {
            result = func.apply(this, args);
          } catch (e) {
            return callback(e);
          } // if result is Promise object


          if ((0, _isObject2["default"])(result) && typeof result.then === 'function') {
            result.then(function (value) {
              invokeCallback(callback, null, value);
            }, function (err) {
              invokeCallback(callback, err.message ? err : new Error(err));
            });
          } else {
            callback(null, result);
          }
        });
      }

      function invokeCallback(callback, error, value) {
        try {
          callback(error, value);
        } catch (e) {
          (0, _setImmediate2["default"])(rethrow, e);
        }
      }

      function rethrow(error) {
        throw error;
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "6oS5":
    /*!*************************************************!*\
      !*** ./node_modules/async/internal/parallel.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function oS5(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = _parallel;

      var _noop = __webpack_require__(
      /*! lodash/noop */
      "vN+2");

      var _noop2 = _interopRequireDefault(_noop);

      var _isArrayLike = __webpack_require__(
      /*! lodash/isArrayLike */
      "MMmD");

      var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

      var _slice = __webpack_require__(
      /*! ./slice */
      "3qT5");

      var _slice2 = _interopRequireDefault(_slice);

      var _wrapAsync = __webpack_require__(
      /*! ./wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _parallel(eachfn, tasks, callback) {
        callback = callback || _noop2["default"];
        var results = (0, _isArrayLike2["default"])(tasks) ? [] : {};
        eachfn(tasks, function (task, key, callback) {
          (0, _wrapAsync2["default"])(task)(function (err, result) {
            if (arguments.length > 2) {
              result = (0, _slice2["default"])(arguments, 1);
            }

            results[key] = result;
            callback(err);
          });
        }, function (err) {
          callback(err, results);
        });
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "6sVZ":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/_isPrototype.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function sVZ(module, exports) {
      /** Used for built-in method references. */
      var objectProto = Object.prototype;
      /**
       * Checks if `value` is likely a prototype object.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
       */

      function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
        return value === proto;
      }

      module.exports = isPrototype;
      /***/
    },

    /***/
    "6vPO":
    /*!**************************************************!*\
      !*** ./node_modules/ethereumjs-abi/lib/index.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function vPO(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        /* eslint-disable no-useless-escape */
        var utils = __webpack_require__(
        /*! ethereumjs-util */
        "kX2E");

        var BN = __webpack_require__(
        /*! bn.js */
        "9gnv");

        var ABI = function ABI() {}; // Convert from short to canonical names
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
        }

        ABI.eventID = function (name, types) {
          // FIXME: use node.js util.format?
          var sig = name + '(' + types.map(elementaryName).join(',') + ')';
          return utils.keccak256(Buffer.from(sig));
        };

        ABI.methodID = function (name, types) {
          return ABI.eventID(name, types).slice(0, 4);
        }; // Parse N from type<N>


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
            if (utils.isHexPrefixed(arg)) {
              return new BN(utils.stripHexPrefix(arg), 16);
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
        } // someMethod(bytes,uint)
        // someMethod(bytes,uint):(boolean)


        function parseSignature(sig) {
          var tmp = /^(\w+)\((.*)\)$/.exec(sig);

          if (tmp.length !== 3) {
            throw new Error('Invalid method signature');
          }

          var args = /^(.+)\):\((.+)$/.exec(tmp[2]);

          if (args !== null && args.length === 3) {
            return {
              method: tmp[1],
              args: args[1].split(','),
              retargs: args[2].split(',')
            };
          } else {
            var params = tmp[2].split(',');

            if (params.length === 1 && params[0] === '') {
              // Special-case (possibly naive) fixup for functions that take no arguments.
              // TODO: special cases are always bad, but this makes the function return
              // match what the calling functions expect
              params = [];
            }

            return {
              method: tmp[1],
              args: params
            };
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
            return encodeSingle('bytes', Buffer.from(arg, 'utf8'));
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
            arg = Buffer.from(arg);
            ret = Buffer.concat([encodeSingle('uint256', arg.length), arg]);

            if (arg.length % 32 !== 0) {
              ret = Buffer.concat([ret, utils.zeros(32 - arg.length % 32)]);
            }

            return ret;
          } else if (type.startsWith('bytes')) {
            size = parseTypeN(type);

            if (size < 1 || size > 32) {
              throw new Error('Invalid bytes<N> width: ' + size);
            }

            return utils.setLengthRight(arg, 32);
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
        } // Decodes a single item (can be dynamic array)
        // @returns: array
        // FIXME: this method will need a lot of attention at checking limits and validation


        function decodeSingle(parsedType, data, offset) {
          if (typeof parsedType === 'string') {
            parsedType = parseType(parsedType);
          }

          var size, num, ret, i;

          if (parsedType.name === 'address') {
            return decodeSingle(parsedType.rawType, data, offset).toArrayLike(Buffer, 'be', 20).toString('hex');
          } else if (parsedType.name === 'bool') {
            return decodeSingle(parsedType.rawType, data, offset).toString() === new BN(1).toString();
          } else if (parsedType.name === 'string') {
            var bytes = decodeSingle(parsedType.rawType, data, offset);
            return Buffer.from(bytes, 'utf8').toString();
          } else if (parsedType.isArray) {
            // this part handles fixed-length arrays ([2]) and variable length ([]) arrays
            // NOTE: we catch here all calls to arrays, that simplifies the rest
            ret = [];
            size = parsedType.size;

            if (parsedType.size === 'dynamic') {
              offset = decodeSingle('uint256', data, offset).toNumber();
              size = decodeSingle('uint256', data, offset).toNumber();
              offset = offset + 32;
            }

            for (i = 0; i < size; i++) {
              var decoded = decodeSingle(parsedType.subArray, data, offset);
              ret.push(decoded);
              offset += parsedType.subArray.memoryUsage;
            }

            return ret;
          } else if (parsedType.name === 'bytes') {
            offset = decodeSingle('uint256', data, offset).toNumber();
            size = decodeSingle('uint256', data, offset).toNumber();
            return data.slice(offset + 32, offset + 32 + size);
          } else if (parsedType.name.startsWith('bytes')) {
            return data.slice(offset, offset + parsedType.size);
          } else if (parsedType.name.startsWith('uint')) {
            num = new BN(data.slice(offset, offset + 32), 16, 'be');

            if (num.bitLength() > parsedType.size) {
              throw new Error('Decoded int exceeds width: ' + parsedType.size + ' vs ' + num.bitLength());
            }

            return num;
          } else if (parsedType.name.startsWith('int')) {
            num = new BN(data.slice(offset, offset + 32), 16, 'be').fromTwos(256);

            if (num.bitLength() > parsedType.size) {
              throw new Error('Decoded uint exceeds width: ' + parsedType.size + ' vs ' + num.bitLength());
            }

            return num;
          } else if (parsedType.name.startsWith('ufixed')) {
            size = new BN(2).pow(new BN(parsedType.size[1]));
            num = decodeSingle('uint256', data, offset);

            if (!num.mod(size).isZero()) {
              throw new Error('Decimals not supported yet');
            }

            return num.div(size);
          } else if (parsedType.name.startsWith('fixed')) {
            size = new BN(2).pow(new BN(parsedType.size[1]));
            num = decodeSingle('int256', data, offset);

            if (!num.mod(size).isZero()) {
              throw new Error('Decimals not supported yet');
            }

            return num.div(size);
          }

          throw new Error('Unsupported or invalid type: ' + parsedType.name);
        } // Parse the given type
        // @returns: {} containing the type itself, memory usage and (including size and subArray if applicable)


        function parseType(type) {
          var size;
          var ret;

          if (isArray(type)) {
            size = parseTypeArray(type);
            var subArray = type.slice(0, type.lastIndexOf('['));
            subArray = parseType(subArray);
            ret = {
              isArray: true,
              name: type,
              size: size,
              memoryUsage: size === 'dynamic' ? 32 : subArray.memoryUsage * size,
              subArray: subArray
            };
            return ret;
          } else {
            var rawType;

            switch (type) {
              case 'address':
                rawType = 'uint160';
                break;

              case 'bool':
                rawType = 'uint8';
                break;

              case 'string':
                rawType = 'bytes';
                break;
            }

            ret = {
              rawType: rawType,
              name: type,
              memoryUsage: 32
            };

            if (type.startsWith('bytes') && type !== 'bytes' || type.startsWith('uint') || type.startsWith('int')) {
              ret.size = parseTypeN(type);
            } else if (type.startsWith('ufixed') || type.startsWith('fixed')) {
              ret.size = parseTypeNxM(type);
            }

            if (type.startsWith('bytes') && type !== 'bytes' && (ret.size < 1 || ret.size > 32)) {
              throw new Error('Invalid bytes<N> width: ' + ret.size);
            }

            if ((type.startsWith('uint') || type.startsWith('int')) && (ret.size % 8 || ret.size < 8 || ret.size > 256)) {
              throw new Error('Invalid int/uint<N> width: ' + ret.size);
            }

            return ret;
          }
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


        ABI.rawEncode = function (types, values) {
          var output = [];
          var data = [];
          var headLength = 0;
          types.forEach(function (type) {
            if (isArray(type)) {
              var size = parseTypeArray(type);

              if (size !== 'dynamic') {
                headLength += 32 * size;
              } else {
                headLength += 32;
              }
            } else {
              headLength += 32;
            }
          });

          for (var i = 0; i < types.length; i++) {
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
        };

        ABI.rawDecode = function (types, data) {
          var ret = [];
          data = Buffer.from(data);
          var offset = 0;

          for (var i = 0; i < types.length; i++) {
            var type = elementaryName(types[i]);
            var parsed = parseType(type, data, offset);
            var decoded = decodeSingle(parsed, data, offset);
            offset += parsed.memoryUsage;
            ret.push(decoded);
          }

          return ret;
        };

        ABI.simpleEncode = function (method) {
          var args = Array.prototype.slice.call(arguments).slice(1);
          var sig = parseSignature(method); // FIXME: validate/convert arguments

          if (args.length !== sig.args.length) {
            throw new Error('Argument count mismatch');
          }

          return Buffer.concat([ABI.methodID(sig.method, sig.args), ABI.rawEncode(sig.args, args)]);
        };

        ABI.simpleDecode = function (method, data) {
          var sig = parseSignature(method); // FIXME: validate/convert arguments

          if (!sig.retargs) {
            throw new Error('No return values in method');
          }

          return ABI.rawDecode(sig.retargs, data);
        };

        function stringify(type, value) {
          if (type.startsWith('address') || type.startsWith('bytes')) {
            return '0x' + value.toString('hex');
          } else {
            return value.toString();
          }
        }

        ABI.stringify = function (types, values) {
          var ret = [];

          for (var i in types) {
            var type = types[i];
            var value = values[i]; // if it is an array type, concat the items

            if (/^[^\[]+\[.*\]$/.test(type)) {
              value = value.map(function (item) {
                return stringify(type, item);
              }).join(', ');
            } else {
              value = stringify(type, value);
            }

            ret.push(value);
          }

          return ret;
        };

        ABI.solidityHexValue = function (type, value, bitsize) {
          // pass in bitsize = null if use default bitsize
          var size, num;

          if (isArray(type)) {
            var subType = type.replace(/\[.*?\]/, '');

            if (!isArray(subType)) {
              var arraySize = parseTypeArray(type);

              if (arraySize !== 'dynamic' && arraySize !== 0 && value.length > arraySize) {
                throw new Error('Elements exceed array size: ' + arraySize);
              }
            }

            var arrayValues = value.map(function (v) {
              return ABI.solidityHexValue(subType, v, 256);
            });
            return Buffer.concat(arrayValues);
          } else if (type === 'bytes') {
            return value;
          } else if (type === 'string') {
            return Buffer.from(value, 'utf8');
          } else if (type === 'bool') {
            bitsize = bitsize || 8;
            var padding = Array(bitsize / 4).join('0');
            return Buffer.from(value ? padding + '1' : padding + '0', 'hex');
          } else if (type === 'address') {
            var bytesize = 20;

            if (bitsize) {
              bytesize = bitsize / 8;
            }

            return utils.setLengthLeft(value, bytesize);
          } else if (type.startsWith('bytes')) {
            size = parseTypeN(type);

            if (size < 1 || size > 32) {
              throw new Error('Invalid bytes<N> width: ' + size);
            }

            return utils.setLengthRight(value, size);
          } else if (type.startsWith('uint')) {
            size = parseTypeN(type);

            if (size % 8 || size < 8 || size > 256) {
              throw new Error('Invalid uint<N> width: ' + size);
            }

            num = parseNumber(value);

            if (num.bitLength() > size) {
              throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
            }

            bitsize = bitsize || size;
            return num.toArrayLike(Buffer, 'be', bitsize / 8);
          } else if (type.startsWith('int')) {
            size = parseTypeN(type);

            if (size % 8 || size < 8 || size > 256) {
              throw new Error('Invalid int<N> width: ' + size);
            }

            num = parseNumber(value);

            if (num.bitLength() > size) {
              throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
            }

            bitsize = bitsize || size;
            return num.toTwos(size).toArrayLike(Buffer, 'be', bitsize / 8);
          } else {
            // FIXME: support all other types
            throw new Error('Unsupported or invalid type: ' + type);
          }
        };

        ABI.solidityPack = function (types, values) {
          if (types.length !== values.length) {
            throw new Error('Number of types are not matching the values');
          }

          var ret = [];

          for (var i = 0; i < types.length; i++) {
            var type = elementaryName(types[i]);
            var value = values[i];
            ret.push(ABI.solidityHexValue(type, value, null));
          }

          return Buffer.concat(ret);
        };

        ABI.soliditySHA3 = function (types, values) {
          return utils.keccak256(ABI.solidityPack(types, values));
        };

        ABI.soliditySHA256 = function (types, values) {
          return utils.sha256(ABI.solidityPack(types, values));
        };

        ABI.solidityRIPEMD160 = function (types, values) {
          return utils.ripemd160(ABI.solidityPack(types, values), true);
        }; // Serpent's users are familiar with this encoding
        // - s: string
        // - b: bytes
        // - b<N>: bytes<N>
        // - i: int256
        // - a: int256[]


        function isNumeric(c) {
          // FIXME: is this correct? Seems to work
          return c >= '0' && c <= '9';
        } // For a "documentation" refer to https://github.com/ethereum/serpent/blob/develop/preprocess.cpp


        ABI.fromSerpent = function (sig) {
          var ret = [];

          for (var i = 0; i < sig.length; i++) {
            var type = sig[i];

            if (type === 's') {
              ret.push('bytes');
            } else if (type === 'b') {
              var tmp = 'bytes';
              var j = i + 1;

              while (j < sig.length && isNumeric(sig[j])) {
                tmp += sig[j] - '0';
                j++;
              }

              i = j - 1;
              ret.push(tmp);
            } else if (type === 'i') {
              ret.push('int256');
            } else if (type === 'a') {
              ret.push('int256[]');
            } else {
              throw new Error('Unsupported or invalid type: ' + type);
            }
          }

          return ret;
        };

        ABI.toSerpent = function (types) {
          var ret = [];

          for (var i = 0; i < types.length; i++) {
            var type = types[i];

            if (type === 'bytes') {
              ret.push('s');
            } else if (type.startsWith('bytes')) {
              ret.push('b' + parseTypeN(type));
            } else if (type === 'int256') {
              ret.push('i');
            } else if (type === 'int256[]') {
              ret.push('a');
            } else {
              throw new Error('Unsupported or invalid type: ' + type);
            }
          }

          return ret.join('');
        };

        module.exports = ABI;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "7GkX":
    /*!*************************************!*\
      !*** ./node_modules/lodash/keys.js ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function GkX(module, exports, __webpack_require__) {
      var arrayLikeKeys = __webpack_require__(
      /*! ./_arrayLikeKeys */
      "b80T"),
          baseKeys = __webpack_require__(
      /*! ./_baseKeys */
      "A90E"),
          isArrayLike = __webpack_require__(
      /*! ./isArrayLike */
      "MMmD");
      /**
       * Creates an array of the own enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects. See the
       * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * for more details.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keys(new Foo);
       * // => ['a', 'b'] (iteration order is not guaranteed)
       *
       * _.keys('hi');
       * // => ['0', '1']
       */


      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }

      module.exports = keys;
      /***/
    },

    /***/
    "8Pg7":
    /*!******************************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/base-filter-history.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function Pg7(module, exports, __webpack_require__) {
      var BaseFilter = __webpack_require__(
      /*! ./base-filter */
      "zvTS"); // tracks all results ever recorded


      var BaseFilterWithHistory = /*#__PURE__*/function (_BaseFilter) {
        _inherits(BaseFilterWithHistory, _BaseFilter);

        var _super2 = _createSuper(BaseFilterWithHistory);

        function BaseFilterWithHistory() {
          var _this5;

          _classCallCheck(this, BaseFilterWithHistory);

          _this5 = _super2.call(this);
          _this5.allResults = [];
          return _this5;
        }

        _createClass(BaseFilterWithHistory, [{
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      throw new Error('BaseFilterWithHistory - no update method specified');

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));

            function update() {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "addResults",
          value: function addResults(newResults) {
            this.allResults = this.allResults.concat(newResults);

            _get(_getPrototypeOf(BaseFilterWithHistory.prototype), "addResults", this).call(this, newResults);
          }
        }, {
          key: "addInitialResults",
          value: function addInitialResults(newResults) {
            this.allResults = this.allResults.concat(newResults);

            _get(_getPrototypeOf(BaseFilterWithHistory.prototype), "addInitialResults", this).call(this, newResults);
          }
        }, {
          key: "getAllResults",
          value: function getAllResults() {
            return this.allResults;
          }
        }]);

        return BaseFilterWithHistory;
      }(BaseFilter);

      module.exports = BaseFilterWithHistory;
      /***/
    },

    /***/
    "9SRK":
    /*!********************************************!*\
      !*** ./node_modules/async/internal/map.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function SRK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = _asyncMap;

      var _noop = __webpack_require__(
      /*! lodash/noop */
      "vN+2");

      var _noop2 = _interopRequireDefault(_noop);

      var _wrapAsync = __webpack_require__(
      /*! ./wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _asyncMap(eachfn, arr, iteratee, callback) {
        callback = callback || _noop2["default"];
        arr = arr || [];
        var results = [];
        var counter = 0;

        var _iteratee = (0, _wrapAsync2["default"])(iteratee);

        eachfn(arr, function (value, _, callback) {
          var index = counter++;

          _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
          });
        }, function (err) {
          callback(err, results);
        });
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "A90E":
    /*!******************************************!*\
      !*** ./node_modules/lodash/_baseKeys.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function A90E(module, exports, __webpack_require__) {
      var isPrototype = __webpack_require__(
      /*! ./_isPrototype */
      "6sVZ"),
          nativeKeys = __webpack_require__(
      /*! ./_nativeKeys */
      "V6Ve");
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */

      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }

        var result = [];

        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = baseKeys;
      /***/
    },

    /***/
    "AP2z":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_getRawTag.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function AP2z(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(
      /*! ./_Symbol */
      "nmnc");
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      var nativeObjectToString = objectProto.toString;
      /** Built-in value references. */

      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */

      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);

        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }

        return result;
      }

      module.exports = getRawTag;
      /***/
    },

    /***/
    "B8du":
    /*!******************************************!*\
      !*** ./node_modules/lodash/stubFalse.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function B8du(module, exports) {
      /**
       * This method returns `false`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `false`.
       * @example
       *
       * _.times(2, _.stubFalse);
       * // => [false, false]
       */
      function stubFalse() {
        return false;
      }

      module.exports = stubFalse;
      /***/
    },

    /***/
    "BMM2":
    /*!*************************************************!*\
      !*** ./node_modules/async/internal/iterator.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function BMM2(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = iterator;

      var _isArrayLike = __webpack_require__(
      /*! lodash/isArrayLike */
      "MMmD");

      var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

      var _getIterator = __webpack_require__(
      /*! ./getIterator */
      "oEkW");

      var _getIterator2 = _interopRequireDefault(_getIterator);

      var _keys = __webpack_require__(
      /*! lodash/keys */
      "7GkX");

      var _keys2 = _interopRequireDefault(_keys);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function createArrayIterator(coll) {
        var i = -1;
        var len = coll.length;
        return function next() {
          return ++i < len ? {
            value: coll[i],
            key: i
          } : null;
        };
      }

      function createES2015Iterator(iterator) {
        var i = -1;
        return function next() {
          var item = iterator.next();
          if (item.done) return null;
          i++;
          return {
            value: item.value,
            key: i
          };
        };
      }

      function createObjectIterator(obj) {
        var okeys = (0, _keys2["default"])(obj);
        var i = -1;
        var len = okeys.length;
        return function next() {
          var key = okeys[++i];
          return i < len ? {
            value: obj[key],
            key: key
          } : null;
        };
      }

      function iterator(coll) {
        if ((0, _isArrayLike2["default"])(coll)) {
          return createArrayIterator(coll);
        }

        var iterator = (0, _getIterator2["default"])(coll);
        return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "DSRE":
    /*!*****************************************!*\
      !*** ./node_modules/lodash/isBuffer.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function DSRE(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (module) {
        var root = __webpack_require__(
        /*! ./_root */
        "Kz5y"),
            stubFalse = __webpack_require__(
        /*! ./stubFalse */
        "B8du");
        /** Detect free variable `exports`. */


        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */

        var Buffer = moduleExports ? root.Buffer : undefined;
        /* Built-in method references for those with the same name as other `lodash` methods. */

        var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */

        var isBuffer = nativeIsBuffer || stubFalse;
        module.exports = isBuffer;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../webpack/buildin/module.js */
      "YuTi")(module));
      /***/
    },

    /***/
    "ExA7":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/isObjectLike.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function ExA7(module, exports) {
      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }

      module.exports = isObjectLike;
      /***/
    },

    /***/
    "FLwF":
    /*!****************************************************************!*\
      !*** ./node_modules/ethereumjs-util/dist/secp256k1-adapter.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function FLwF(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        var secp256k1 = __webpack_require__(
        /*! ethereum-cryptography/secp256k1 */
        "IhPl");

        var secp256k1v3 = __webpack_require__(
        /*! ./secp256k1-lib/index */
        "Pnug");

        var der = __webpack_require__(
        /*! ./secp256k1-lib/der */
        "Unkg");
        /**
         * Verify an ECDSA privateKey
         * @method privateKeyVerify
         * @param {Buffer} privateKey
         * @return {boolean}
         */


        var privateKeyVerify = function privateKeyVerify(privateKey) {
          // secp256k1 v4 version throws when privateKey length is not 32
          if (privateKey.length !== 32) {
            return false;
          }

          return secp256k1.privateKeyVerify(Uint8Array.from(privateKey));
        };
        /**
         * Export a privateKey in DER format
         * @method privateKeyExport
         * @param {Buffer} privateKey
         * @param {boolean} compressed
         * @return {boolean}
         */


        var privateKeyExport = function privateKeyExport(privateKey, compressed) {
          // privateKeyExport method is not part of secp256k1 v4 package
          // this implementation is based on v3
          if (privateKey.length !== 32) {
            throw new RangeError('private key length is invalid');
          }

          var publicKey = secp256k1v3.privateKeyExport(privateKey, compressed);
          return der.privateKeyExport(privateKey, publicKey, compressed);
        };
        /**
         * Import a privateKey in DER format
         * @method privateKeyImport
         * @param {Buffer} privateKey
         * @return {Buffer}
         */


        var privateKeyImport = function privateKeyImport(privateKey) {
          // privateKeyImport method is not part of secp256k1 v4 package
          // this implementation is based on v3
          privateKey = der.privateKeyImport(privateKey);

          if (privateKey !== null && privateKey.length === 32 && privateKeyVerify(privateKey)) {
            return privateKey;
          }

          throw new Error("couldn't import from DER format");
        };
        /**
         * Negate a privateKey by subtracting it from the order of the curve's base point
         * @method privateKeyNegate
         * @param {Buffer} privateKey
         * @return {Buffer}
         */


        var privateKeyNegate = function privateKeyNegate(privateKey) {
          return Buffer.from(secp256k1.privateKeyNegate(Uint8Array.from(privateKey)));
        };
        /**
         * Compute the inverse of a privateKey (modulo the order of the curve's base point).
         * @method privateKeyModInverse
         * @param {Buffer} privateKey
         * @return {Buffer}
         */


        var privateKeyModInverse = function privateKeyModInverse(privateKey) {
          if (privateKey.length !== 32) {
            throw new Error('private key length is invalid');
          }

          return Buffer.from(secp256k1v3.privateKeyModInverse(Uint8Array.from(privateKey)));
        };
        /**
         * Tweak a privateKey by adding tweak to it.
         * @method privateKeyTweakAdd
         * @param {Buffer} privateKey
         * @param {Buffer} tweak
         * @return {Buffer}
         */


        var privateKeyTweakAdd = function privateKeyTweakAdd(privateKey, tweak) {
          return Buffer.from(secp256k1.privateKeyTweakAdd(Uint8Array.from(privateKey), tweak));
        };
        /**
         * Tweak a privateKey by multiplying it by a tweak.
         * @method privateKeyTweakMul
         * @param {Buffer} privateKey
         * @param {Buffer} tweak
         * @return {Buffer}
         */


        var privateKeyTweakMul = function privateKeyTweakMul(privateKey, tweak) {
          return Buffer.from(secp256k1.privateKeyTweakMul(Uint8Array.from(privateKey), Uint8Array.from(tweak)));
        };
        /**
         * Compute the public key for a privateKey.
         * @method publicKeyCreate
         * @param {Buffer} privateKey
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var publicKeyCreate = function publicKeyCreate(privateKey, compressed) {
          return Buffer.from(secp256k1.publicKeyCreate(Uint8Array.from(privateKey), compressed));
        };
        /**
         * Convert a publicKey to compressed or uncompressed form.
         * @method publicKeyConvert
         * @param {Buffer} publicKey
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var publicKeyConvert = function publicKeyConvert(publicKey, compressed) {
          return Buffer.from(secp256k1.publicKeyConvert(Uint8Array.from(publicKey), compressed));
        };
        /**
         * Verify an ECDSA publicKey.
         * @method publicKeyVerify
         * @param {Buffer} publicKey
         * @return {boolean}
         */


        var publicKeyVerify = function publicKeyVerify(publicKey) {
          // secp256k1 v4 version throws when publicKey length is not 33 or 65
          if (publicKey.length !== 33 && publicKey.length !== 65) {
            return false;
          }

          return secp256k1.publicKeyVerify(Uint8Array.from(publicKey));
        };
        /**
         * Tweak a publicKey by adding tweak times the generator to it.
         * @method publicKeyTweakAdd
         * @param {Buffer} publicKey
         * @param {Buffer} tweak
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var publicKeyTweakAdd = function publicKeyTweakAdd(publicKey, tweak, compressed) {
          return Buffer.from(secp256k1.publicKeyTweakAdd(Uint8Array.from(publicKey), Uint8Array.from(tweak), compressed));
        };
        /**
         * Tweak a publicKey by multiplying it by a tweak value
         * @method publicKeyTweakMul
         * @param {Buffer} publicKey
         * @param {Buffer} tweak
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var publicKeyTweakMul = function publicKeyTweakMul(publicKey, tweak, compressed) {
          return Buffer.from(secp256k1.publicKeyTweakMul(Uint8Array.from(publicKey), Uint8Array.from(tweak), compressed));
        };
        /**
         * Add a given publicKeys together.
         * @method publicKeyCombine
         * @param {Array<Buffer>} publicKeys
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var publicKeyCombine = function publicKeyCombine(publicKeys, compressed) {
          var keys = [];
          publicKeys.forEach(function (publicKey) {
            keys.push(Uint8Array.from(publicKey));
          });
          return Buffer.from(secp256k1.publicKeyCombine(keys, compressed));
        };
        /**
         * Convert a signature to a normalized lower-S form.
         * @method signatureNormalize
         * @param {Buffer} signature
         * @return {Buffer}
         */


        var signatureNormalize = function signatureNormalize(signature) {
          return Buffer.from(secp256k1.signatureNormalize(Uint8Array.from(signature)));
        };
        /**
         * Serialize an ECDSA signature in DER format.
         * @method signatureExport
         * @param {Buffer} signature
         * @return {Buffer}
         */


        var signatureExport = function signatureExport(signature) {
          return Buffer.from(secp256k1.signatureExport(Uint8Array.from(signature)));
        };
        /**
         * Parse a DER ECDSA signature (follow by [BIP66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)).
         * @method signatureImport
         * @param {Buffer} signature
         * @return {Buffer}
         */


        var signatureImport = function signatureImport(signature) {
          return Buffer.from(secp256k1.signatureImport(Uint8Array.from(signature)));
        };
        /**
         * Parse a DER ECDSA signature (not follow by [BIP66](https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)).
         * @method signatureImportLax
         * @param {Buffer} signature
         * @return {Buffer}
         */


        var signatureImportLax = function signatureImportLax(signature) {
          // signatureImportLax method is not part of secp256k1 v4 package
          // this implementation is based on v3
          // ensure that signature is greater than 0
          if (signature.length === 0) {
            throw new RangeError('signature length is invalid');
          }

          var sigObj = der.signatureImportLax(signature);

          if (sigObj === null) {
            throw new Error("couldn't parse DER signature");
          }

          return secp256k1v3.signatureImport(sigObj);
        };
        /**
         * Create an ECDSA signature. Always return low-S signature.
         * @method sign
         * @param {Buffer} message
         * @param {Buffer} privateKey
         * @param {Object} options
         * @return {Buffer}
         */


        var sign = function sign(message, privateKey, options) {
          if (options === null) {
            throw new TypeError('options should be an Object');
          }

          var signOptions = void 0;

          if (options) {
            signOptions = {};

            if (options.data === null) {
              throw new TypeError('options.data should be a Buffer');
            }

            if (options.data) {
              // validate option.data length
              if (options.data.length !== 32) {
                throw new RangeError('options.data length is invalid');
              }

              signOptions.data = new Uint8Array(options.data);
            }

            if (options.noncefn === null) {
              throw new TypeError('options.noncefn should be a Function');
            }

            if (options.noncefn) {
              //  convert option.noncefn function signature
              signOptions.noncefn = function (message, privateKey, algo, data, attempt) {
                var bufferAlgo = algo != null ? Buffer.from(algo) : null;
                var bufferData = data != null ? Buffer.from(data) : null;
                var buffer = Buffer.from('');

                if (options.noncefn) {
                  buffer = options.noncefn(Buffer.from(message), Buffer.from(privateKey), bufferAlgo, bufferData, attempt);
                }

                return Uint8Array.from(buffer);
              };
            }
          }

          var sig = secp256k1.ecdsaSign(Uint8Array.from(message), Uint8Array.from(privateKey), signOptions);
          return {
            signature: Buffer.from(sig.signature),
            recovery: sig.recid
          };
        };
        /**
         * Verify an ECDSA signature.
         * @method verify
         * @param {Buffer} message
         * @param {Buffer} signature
         * @param {Buffer} publicKey
         * @return {boolean}
         */


        var verify = function verify(message, signature, publicKey) {
          // note: secp256k1 v4 verify method has a different argument order
          return secp256k1.ecdsaVerify(Uint8Array.from(signature), Uint8Array.from(message), publicKey);
        };
        /**
         * Recover an ECDSA public key from a signature.
         * @method recover
         * @param {Buffer} message
         * @param {Buffer} signature
         * @param {Number} recid
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var recover = function recover(message, signature, recid, compressed) {
          // note: secp256k1 v4 recover method has a different argument order
          return Buffer.from(secp256k1.ecdsaRecover(Uint8Array.from(signature), recid, Uint8Array.from(message), compressed));
        };
        /**
         * Compute an EC Diffie-Hellman secret and applied sha256 to compressed public key.
         * @method ecdh
         * @param {Buffer} publicKey
         * @param {Buffer} privateKey
         * @return {Buffer}
         */


        var ecdh = function ecdh(publicKey, privateKey) {
          // note: secp256k1 v3 doesn't allow optional parameter
          return Buffer.from(secp256k1.ecdh(Uint8Array.from(publicKey), Uint8Array.from(privateKey), {}));
        };
        /**
         * Compute an EC Diffie-Hellman secret and return public key as result
         * @method ecdhUnsafe
         * @param {Buffer} publicKey
         * @param {Buffer} privateKey
         * @param {boolean} compressed
         * @return {Buffer}
         */


        var ecdhUnsafe = function ecdhUnsafe(publicKey, privateKey, compressed) {
          // ecdhUnsafe method is not part of secp256k1 v4 package
          // this implementation is based on v3
          // ensure valid publicKey length
          if (publicKey.length !== 33 && publicKey.length !== 65) {
            throw new RangeError('public key length is invalid');
          } // ensure valid privateKey length


          if (privateKey.length !== 32) {
            throw new RangeError('private key length is invalid');
          }

          return Buffer.from(secp256k1v3.ecdhUnsafe(Uint8Array.from(publicKey), Uint8Array.from(privateKey), compressed));
        };

        module.exports = {
          privateKeyVerify: privateKeyVerify,
          privateKeyExport: privateKeyExport,
          privateKeyImport: privateKeyImport,
          privateKeyNegate: privateKeyNegate,
          privateKeyModInverse: privateKeyModInverse,
          privateKeyTweakAdd: privateKeyTweakAdd,
          privateKeyTweakMul: privateKeyTweakMul,
          publicKeyCreate: publicKeyCreate,
          publicKeyConvert: publicKeyConvert,
          publicKeyVerify: publicKeyVerify,
          publicKeyTweakAdd: publicKeyTweakAdd,
          publicKeyTweakMul: publicKeyTweakMul,
          publicKeyCombine: publicKeyCombine,
          signatureNormalize: signatureNormalize,
          signatureExport: signatureExport,
          signatureImport: signatureImport,
          signatureImportLax: signatureImportLax,
          sign: sign,
          verify: verify,
          recover: recover,
          ecdh: ecdh,
          ecdhUnsafe: ecdhUnsafe
        };
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "FqFB":
    /*!*********************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/log-filter.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function FqFB(module, exports, __webpack_require__) {
      var EthQuery = __webpack_require__(
      /*! eth-query */
      "QXrW");

      var pify = __webpack_require__(
      /*! pify */
      "4CaD");

      var BaseFilterWithHistory = __webpack_require__(
      /*! ./base-filter-history */
      "8Pg7");

      var _webpack_require__2 = __webpack_require__(
      /*! ./hexUtils */
      "UJ2e"),
          bnToHex = _webpack_require__2.bnToHex,
          hexToInt = _webpack_require__2.hexToInt,
          incrementHexInt = _webpack_require__2.incrementHexInt,
          minBlockRef = _webpack_require__2.minBlockRef,
          blockRefIsNumber = _webpack_require__2.blockRefIsNumber;

      var LogFilter = /*#__PURE__*/function (_BaseFilterWithHistor) {
        _inherits(LogFilter, _BaseFilterWithHistor);

        var _super3 = _createSuper(LogFilter);

        function LogFilter(_ref11) {
          var _this6;

          var provider = _ref11.provider,
              params = _ref11.params;

          _classCallCheck(this, LogFilter);

          _this6 = _super3.call(this);
          _this6.type = 'log';
          _this6.ethQuery = new EthQuery(provider);
          _this6.params = Object.assign({
            fromBlock: 'latest',
            toBlock: 'latest',
            address: undefined,
            topics: []
          }, params); // normalize address parameter

          if (_this6.params.address) {
            // ensure array
            if (!Array.isArray(_this6.params.address)) {
              _this6.params.address = [_this6.params.address];
            } // ensure lowercase


            _this6.params.address = _this6.params.address.map(function (address) {
              return address.toLowerCase();
            });
          }

          return _this6;
        }

        _createClass(LogFilter, [{
          key: "initialize",
          value: function () {
            var _initialize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(_ref12) {
              var currentBlock, fromBlock, toBlock, params, newLogs;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      currentBlock = _ref12.currentBlock;
                      // resolve params.fromBlock
                      fromBlock = this.params.fromBlock;
                      if (['latest', 'pending'].includes(fromBlock)) fromBlock = currentBlock;
                      if ('earliest' === fromBlock) fromBlock = '0x0';
                      this.params.fromBlock = fromBlock; // set toBlock for initial lookup

                      toBlock = minBlockRef(this.params.toBlock, currentBlock);
                      params = Object.assign({}, this.params, {
                        toBlock: toBlock
                      }); // fetch logs and add to results

                      _context18.next = 9;
                      return this._fetchLogs(params);

                    case 9:
                      newLogs = _context18.sent;
                      this.addInitialResults(newLogs);

                    case 11:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function initialize(_x16) {
              return _initialize.apply(this, arguments);
            }

            return initialize;
          }()
        }, {
          key: "update",
          value: function () {
            var _update2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(_ref13) {
              var _this7 = this;

              var oldBlock, newBlock, toBlock, fromBlock, params, newLogs, matchingLogs;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      oldBlock = _ref13.oldBlock, newBlock = _ref13.newBlock;
                      // configure params for this update
                      toBlock = newBlock;

                      // oldBlock is empty on first sync
                      if (oldBlock) {
                        fromBlock = incrementHexInt(oldBlock);
                      } else {
                        fromBlock = newBlock;
                      } // fetch logs


                      params = Object.assign({}, this.params, {
                        fromBlock: fromBlock,
                        toBlock: toBlock
                      });
                      _context19.next = 6;
                      return this._fetchLogs(params);

                    case 6:
                      newLogs = _context19.sent;
                      matchingLogs = newLogs.filter(function (log) {
                        return _this7.matchLog(log);
                      }); // add to results

                      this.addResults(matchingLogs);

                    case 9:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function update(_x17) {
              return _update2.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "_fetchLogs",
          value: function () {
            var _fetchLogs2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(params) {
              var _this8 = this;

              var newLogs;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return pify(function (cb) {
                        return _this8.ethQuery.getLogs(params, cb);
                      })();

                    case 2:
                      newLogs = _context20.sent;
                      return _context20.abrupt("return", newLogs);

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));

            function _fetchLogs(_x18) {
              return _fetchLogs2.apply(this, arguments);
            }

            return _fetchLogs;
          }()
        }, {
          key: "matchLog",
          value: function matchLog(log) {
            // check if block number in bounds:
            if (hexToInt(this.params.fromBlock) >= hexToInt(log.blockNumber)) return false;
            if (blockRefIsNumber(this.params.toBlock) && hexToInt(this.params.toBlock) <= hexToInt(log.blockNumber)) return false; // address is correct:

            var normalizedLogAddress = log.address && log.address.toLowerCase();
            if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress)) return false; // topics match:
            // topics are position-dependant
            // topics can be nested to represent `or` [[a || b], c]
            // topics can be null, representing a wild card for that position

            var topicsMatch = this.params.topics.every(function (topicPattern, index) {
              // pattern is longer than actual topics
              var logTopic = log.topics[index];
              if (!logTopic) return false;
              logTopic = logTopic.toLowerCase(); // normalize subTopics

              var subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern]; // check for wild card

              var subtopicsIncludeWildcard = subtopicsToMatch.includes(null);
              if (subtopicsIncludeWildcard) return true;
              subtopicsToMatch = subtopicsToMatch.map(function (topic) {
                return topic.toLowerCase();
              }); // check each possible matching topic

              var topicDoesMatch = subtopicsToMatch.includes(logTopic);
              return topicDoesMatch;
            });
            return topicsMatch;
          }
        }]);

        return LogFilter;
      }(BaseFilterWithHistory);

      module.exports = LogFilter;
      /***/
    },

    /***/
    "GoyQ":
    /*!*****************************************!*\
      !*** ./node_modules/lodash/isObject.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function GoyQ(module, exports) {
      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      module.exports = isObject;
      /***/
    },

    /***/
    "HtlB":
    /*!********************************************!*\
      !*** ./node_modules/eth-sig-util/index.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function HtlB(module, exports, __webpack_require__) {
      var ethUtil = __webpack_require__(
      /*! ethereumjs-util */
      "tnHP");

      var ethAbi = __webpack_require__(
      /*! ethereumjs-abi */
      "ga3E");

      module.exports = {
        concatSig: function concatSig(v, r, s) {
          var rSig = ethUtil.fromSigned(r);
          var sSig = ethUtil.fromSigned(s);
          var vSig = ethUtil.bufferToInt(v);
          var rStr = padWithZeroes(ethUtil.toUnsigned(rSig).toString('hex'), 64);
          var sStr = padWithZeroes(ethUtil.toUnsigned(sSig).toString('hex'), 64);
          var vStr = ethUtil.stripHexPrefix(ethUtil.intToHex(vSig));
          return ethUtil.addHexPrefix(rStr.concat(sStr, vStr)).toString('hex');
        },
        normalize: function normalize(input) {
          if (!input) return;

          if (typeof input === 'number') {
            var buffer = ethUtil.toBuffer(input);
            input = ethUtil.bufferToHex(buffer);
          }

          if (typeof input !== 'string') {
            var msg = 'eth-sig-util.normalize() requires hex string or integer input.';
            msg += ' received ' + typeof input + ': ' + input;
            throw new Error(msg);
          }

          return ethUtil.addHexPrefix(input.toLowerCase());
        },
        personalSign: function personalSign(privateKey, msgParams) {
          var message = ethUtil.toBuffer(msgParams.data);
          var msgHash = ethUtil.hashPersonalMessage(message);
          var sig = ethUtil.ecsign(msgHash, privateKey);
          var serialized = ethUtil.bufferToHex(this.concatSig(sig.v, sig.r, sig.s));
          return serialized;
        },
        recoverPersonalSignature: function recoverPersonalSignature(msgParams) {
          var publicKey = getPublicKeyFor(msgParams);
          var sender = ethUtil.publicToAddress(publicKey);
          var senderHex = ethUtil.bufferToHex(sender);
          return senderHex;
        },
        extractPublicKey: function extractPublicKey(msgParams) {
          var publicKey = getPublicKeyFor(msgParams);
          return '0x' + publicKey.toString('hex');
        },
        typedSignatureHash: function typedSignatureHash(typedData) {
          var hashBuffer = _typedSignatureHash(typedData);

          return ethUtil.bufferToHex(hashBuffer);
        },
        signTypedData: function signTypedData(privateKey, msgParams) {
          var msgHash = _typedSignatureHash(msgParams.data);

          var sig = ethUtil.ecsign(msgHash, privateKey);
          return ethUtil.bufferToHex(this.concatSig(sig.v, sig.r, sig.s));
        },
        recoverTypedSignature: function recoverTypedSignature(msgParams) {
          var msgHash = _typedSignatureHash(msgParams.data);

          var publicKey = recoverPublicKey(msgHash, msgParams.sig);
          var sender = ethUtil.publicToAddress(publicKey);
          return ethUtil.bufferToHex(sender);
        }
      };
      /**
       * @param typedData - Array of data along with types, as per EIP712.
       * @returns Buffer
       */

      function _typedSignatureHash(typedData) {
        var error = new Error('Expect argument to be non-empty array');
        if (typeof typedData !== 'object' || !typedData.length) throw error;
        var data = typedData.map(function (e) {
          return e.type === 'bytes' ? ethUtil.toBuffer(e.value) : e.value;
        });
        var types = typedData.map(function (e) {
          return e.type;
        });
        var schema = typedData.map(function (e) {
          if (!e.name) throw error;
          return e.type + ' ' + e.name;
        });
        return ethAbi.soliditySHA3(['bytes32', 'bytes32'], [ethAbi.soliditySHA3(new Array(typedData.length).fill('string'), schema), ethAbi.soliditySHA3(types, data)]);
      }

      function recoverPublicKey(hash, sig) {
        var signature = ethUtil.toBuffer(sig);
        var sigParams = ethUtil.fromRpcSig(signature);
        return ethUtil.ecrecover(hash, sigParams.v, sigParams.r, sigParams.s);
      }

      function getPublicKeyFor(msgParams) {
        var message = ethUtil.toBuffer(msgParams.data);
        var msgHash = ethUtil.hashPersonalMessage(message);
        return recoverPublicKey(msgHash, msgParams.sig);
      }

      function padWithZeroes(number, length) {
        var myString = '' + number;

        while (myString.length < length) {
          myString = '0' + myString;
        }

        return myString;
      }
      /***/

    },

    /***/
    "JTzB":
    /*!*************************************************!*\
      !*** ./node_modules/lodash/_baseIsArguments.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function JTzB(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(
      /*! ./_baseGetTag */
      "NykK"),
          isObjectLike = __webpack_require__(
      /*! ./isObjectLike */
      "ExA7");
      /** `Object#toString` result references. */


      var argsTag = '[object Arguments]';
      /**
       * The base implementation of `_.isArguments`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       */

      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }

      module.exports = baseIsArguments;
      /***/
    },

    /***/
    "KWkM":
    /*!****************************************!*\
      !*** ./node_modules/async/parallel.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function KWkM(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = parallelLimit;

      var _eachOf = __webpack_require__(
      /*! ./eachOf */
      "abV/");

      var _eachOf2 = _interopRequireDefault(_eachOf);

      var _parallel = __webpack_require__(
      /*! ./internal/parallel */
      "6oS5");

      var _parallel2 = _interopRequireDefault(_parallel);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Run the `tasks` collection of functions in parallel, without waiting until
       * the previous function has completed. If any of the functions pass an error to
       * its callback, the main `callback` is immediately called with the value of the
       * error. Once the `tasks` have completed, the results are passed to the final
       * `callback` as an array.
       *
       * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
       * parallel execution of code.  If your tasks do not use any timers or perform
       * any I/O, they will actually be executed in series.  Any synchronous setup
       * sections for each task will happen one after the other.  JavaScript remains
       * single-threaded.
       *
       * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
       * execution of other tasks when a task fails.
       *
       * It is also possible to use an object instead of an array. Each property will
       * be run as a function and the results will be passed to the final `callback`
       * as an object instead of an array. This can be a more readable way of handling
       * results from {@link async.parallel}.
       *
       * @name parallel
       * @static
       * @memberOf module:ControlFlow
       * @method
       * @category Control Flow
       * @param {Array|Iterable|Object} tasks - A collection of
       * [async functions]{@link AsyncFunction} to run.
       * Each async function can complete with any number of optional `result` values.
       * @param {Function} [callback] - An optional callback to run once all the
       * functions have completed successfully. This function gets a results array
       * (or object) containing all the result arguments passed to the task callbacks.
       * Invoked with (err, results).
       *
       * @example
       * async.parallel([
       *     function(callback) {
       *         setTimeout(function() {
       *             callback(null, 'one');
       *         }, 200);
       *     },
       *     function(callback) {
       *         setTimeout(function() {
       *             callback(null, 'two');
       *         }, 100);
       *     }
       * ],
       * // optional callback
       * function(err, results) {
       *     // the results array will equal ['one','two'] even though
       *     // the second function had a shorter timeout.
       * });
       *
       * // an example using an object instead of an array
       * async.parallel({
       *     one: function(callback) {
       *         setTimeout(function() {
       *             callback(null, 1);
       *         }, 200);
       *     },
       *     two: function(callback) {
       *         setTimeout(function() {
       *             callback(null, 2);
       *         }, 100);
       *     }
       * }, function(err, results) {
       *     // results is now equals to: {one: 1, two: 2}
       * });
       */


      function parallelLimit(tasks, callback) {
        (0, _parallel2["default"])(_eachOf2["default"], tasks, callback);
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "KfNM":
    /*!************************************************!*\
      !*** ./node_modules/lodash/_objectToString.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function KfNM(module, exports) {
      /** Used for built-in method references. */
      var objectProto = Object.prototype;
      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */

      var nativeObjectToString = objectProto.toString;
      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */

      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;
      /***/
    },

    /***/
    "KwLt":
    /*!**************************************************!*\
      !*** ./node_modules/async/internal/breakLoop.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function KwLt(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); // A temporary value used to identify if the loop should be broken.
      // See #1064, #1293

      exports["default"] = {};
      module.exports = exports["default"];
      /***/
    },

    /***/
    "Kz5y":
    /*!**************************************!*\
      !*** ./node_modules/lodash/_root.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function Kz5y(module, exports, __webpack_require__) {
      var freeGlobal = __webpack_require__(
      /*! ./_freeGlobal */
      "WFqU");
      /** Detect free variable `self`. */


      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      /** Used as a reference to the global object. */

      var root = freeGlobal || freeSelf || Function('return this')();
      module.exports = root;
      /***/
    },

    /***/
    "LCem":
    /*!***********************************!*\
      !*** ./node_modules/async/map.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function LCem(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _doParallel = __webpack_require__(
      /*! ./internal/doParallel */
      "/oFA");

      var _doParallel2 = _interopRequireDefault(_doParallel);

      var _map = __webpack_require__(
      /*! ./internal/map */
      "9SRK");

      var _map2 = _interopRequireDefault(_map);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Produces a new collection of values by mapping each value in `coll` through
       * the `iteratee` function. The `iteratee` is called with an item from `coll`
       * and a callback for when it has finished processing. Each of these callback
       * takes 2 arguments: an `error`, and the transformed item from `coll`. If
       * `iteratee` passes an error to its callback, the main `callback` (for the
       * `map` function) is immediately called with the error.
       *
       * Note, that since this function applies the `iteratee` to each item in
       * parallel, there is no guarantee that the `iteratee` functions will complete
       * in order. However, the results array will be in the same order as the
       * original `coll`.
       *
       * If `map` is passed an Object, the results will be an Array.  The results
       * will roughly be in the order of the original Objects' keys (but this can
       * vary across JavaScript engines).
       *
       * @name map
       * @static
       * @memberOf module:Collections
       * @method
       * @category Collection
       * @param {Array|Iterable|Object} coll - A collection to iterate over.
       * @param {AsyncFunction} iteratee - An async function to apply to each item in
       * `coll`.
       * The iteratee should complete with the transformed item.
       * Invoked with (item, callback).
       * @param {Function} [callback] - A callback which is called when all `iteratee`
       * functions have finished, or an error occurs. Results is an Array of the
       * transformed items from the `coll`. Invoked with (err, results).
       * @example
       *
       * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
       *     // results is now an array of stats for each file
       * });
       */


      exports["default"] = (0, _doParallel2["default"])(_map2["default"]);
      module.exports = exports['default'];
      /***/
    },

    /***/
    "LgDX":
    /*!*****************************************************!*\
      !*** ./node_modules/async/internal/setImmediate.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function LgDX(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (setImmediate, process) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.hasNextTick = exports.hasSetImmediate = undefined;
        exports.fallback = fallback;
        exports.wrap = wrap;

        var _slice = __webpack_require__(
        /*! ./slice */
        "3qT5");

        var _slice2 = _interopRequireDefault(_slice);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
        var hasNextTick = exports.hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

        function fallback(fn) {
          setTimeout(fn, 0);
        }

        function wrap(defer) {
          return function (fn
          /*, ...args*/
          ) {
            var args = (0, _slice2["default"])(arguments, 1);
            defer(function () {
              fn.apply(null, args);
            });
          };
        }

        var _defer;

        if (hasSetImmediate) {
          _defer = setImmediate;
        } else if (hasNextTick) {
          _defer = process.nextTick;
        } else {
          _defer = fallback;
        }

        exports["default"] = wrap(_defer);
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../timers-browserify/main.js */
      "URgk").setImmediate, __webpack_require__(
      /*! ./../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "MMmD":
    /*!********************************************!*\
      !*** ./node_modules/lodash/isArrayLike.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function MMmD(module, exports, __webpack_require__) {
      var isFunction = __webpack_require__(
      /*! ./isFunction */
      "lSCD"),
          isLength = __webpack_require__(
      /*! ./isLength */
      "shjB");
      /**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */


      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      module.exports = isArrayLike;
      /***/
    },

    /***/
    "NDoG":
    /*!****************************************************!*\
      !*** ./node_modules/async/internal/eachOfLimit.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function NDoG(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = _eachOfLimit;

      var _noop = __webpack_require__(
      /*! lodash/noop */
      "vN+2");

      var _noop2 = _interopRequireDefault(_noop);

      var _once = __webpack_require__(
      /*! ./once */
      "2sf1");

      var _once2 = _interopRequireDefault(_once);

      var _iterator = __webpack_require__(
      /*! ./iterator */
      "BMM2");

      var _iterator2 = _interopRequireDefault(_iterator);

      var _onlyOnce = __webpack_require__(
      /*! ./onlyOnce */
      "rH6r");

      var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

      var _breakLoop = __webpack_require__(
      /*! ./breakLoop */
      "KwLt");

      var _breakLoop2 = _interopRequireDefault(_breakLoop);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _eachOfLimit(limit) {
        return function (obj, iteratee, callback) {
          callback = (0, _once2["default"])(callback || _noop2["default"]);

          if (limit <= 0 || !obj) {
            return callback(null);
          }

          var nextElem = (0, _iterator2["default"])(obj);
          var done = false;
          var running = 0;
          var looping = false;

          function iterateeCallback(err, value) {
            running -= 1;

            if (err) {
              done = true;
              callback(err);
            } else if (value === _breakLoop2["default"] || done && running <= 0) {
              done = true;
              return callback(null);
            } else if (!looping) {
              replenish();
            }
          }

          function replenish() {
            looping = true;

            while (running < limit && !done) {
              var elem = nextElem();

              if (elem === null) {
                done = true;

                if (running <= 0) {
                  callback(null);
                }

                return;
              }

              running += 1;
              iteratee(elem.value, elem.key, (0, _onlyOnce2["default"])(iterateeCallback));
            }

            looping = false;
          }

          replenish();
        };
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "NykK":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_baseGetTag.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function NykK(module, exports, __webpack_require__) {
      var Symbol = __webpack_require__(
      /*! ./_Symbol */
      "nmnc"),
          getRawTag = __webpack_require__(
      /*! ./_getRawTag */
      "AP2z"),
          objectToString = __webpack_require__(
      /*! ./_objectToString */
      "KfNM");
      /** `Object#toString` result references. */


      var nullTag = '[object Null]',
          undefinedTag = '[object Undefined]';
      /** Built-in value references. */

      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */

      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }

        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }

      module.exports = baseGetTag;
      /***/
    },

    /***/
    "Pnug":
    /*!******************************************************************!*\
      !*** ./node_modules/ethereumjs-util/dist/secp256k1-lib/index.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function Pnug(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        // This file is imported from secp256k1 v3
        // https://github.com/cryptocoinjs/secp256k1-node/blob/master/LICENSE
        var BN = __webpack_require__(
        /*! bn.js */
        "9gnv");

        var EC = __webpack_require__(
        /*! elliptic */
        "MzeL").ec;

        var ec = new EC('secp256k1');
        var ecparams = ec.curve;

        exports.privateKeyExport = function (privateKey, compressed) {
          var d = new BN(privateKey);

          if (d.ucmp(ecparams.n) >= 0) {
            throw new Error('couldn\'t export to DER format');
          }

          var point = ec.g.mul(d);
          return toPublicKey(point.getX(), point.getY(), compressed);
        };

        exports.privateKeyModInverse = function (privateKey) {
          var bn = new BN(privateKey);

          if (bn.ucmp(ecparams.n) >= 0 || bn.isZero()) {
            throw new Error('private key range is invalid');
          }

          return bn.invm(ecparams.n).toArrayLike(Buffer, 'be', 32);
        };

        exports.signatureImport = function (sigObj) {
          var r = new BN(sigObj.r);

          if (r.ucmp(ecparams.n) >= 0) {
            r = new BN(0);
          }

          var s = new BN(sigObj.s);

          if (s.ucmp(ecparams.n) >= 0) {
            s = new BN(0);
          }

          return Buffer.concat([r.toArrayLike(Buffer, 'be', 32), s.toArrayLike(Buffer, 'be', 32)]);
        };

        exports.ecdhUnsafe = function (publicKey, privateKey, compressed) {
          var point = ec.keyFromPublic(publicKey);
          var scalar = new BN(privateKey);

          if (scalar.ucmp(ecparams.n) >= 0 || scalar.isZero()) {
            throw new Error('scalar was invalid (zero or overflow)');
          }

          var shared = point.pub.mul(scalar);
          return toPublicKey(shared.getX(), shared.getY(), compressed);
        };

        var toPublicKey = function toPublicKey(x, y, compressed) {
          var publicKey = void 0;

          if (compressed) {
            publicKey = Buffer.alloc(33);
            publicKey[0] = y.isOdd() ? 0x03 : 0x02;
            x.toArrayLike(Buffer, 'be', 32).copy(publicKey, 1);
          } else {
            publicKey = Buffer.alloc(65);
            publicKey[0] = 0x04;
            x.toArrayLike(Buffer, 'be', 32).copy(publicKey, 1);
            y.toArrayLike(Buffer, 'be', 32).copy(publicKey, 33);
          }

          return publicKey;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "PpH3":
    /*!************************************************!*\
      !*** ./node_modules/async/internal/doLimit.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function PpH3(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = doLimit;

      function doLimit(fn, limit) {
        return function (iterable, iteratee, callback) {
          return fn(iterable, limit, iteratee, callback);
        };
      }

      module.exports = exports["default"];
      /***/
    },

    /***/
    "QXrW":
    /*!*****************************************!*\
      !*** ./node_modules/eth-query/index.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function QXrW(module, exports, __webpack_require__) {
      var extend = __webpack_require__(
      /*! xtend */
      "U6jy");

      var createRandomId = __webpack_require__(
      /*! json-rpc-random-id */
      "2J3U")();

      module.exports = EthQuery;

      function EthQuery(provider) {
        var self = this;
        self.currentProvider = provider;
      } //
      // base queries
      //
      // default block


      EthQuery.prototype.getBalance = generateFnWithDefaultBlockFor(2, 'eth_getBalance');
      EthQuery.prototype.getCode = generateFnWithDefaultBlockFor(2, 'eth_getCode');
      EthQuery.prototype.getTransactionCount = generateFnWithDefaultBlockFor(2, 'eth_getTransactionCount');
      EthQuery.prototype.getStorageAt = generateFnWithDefaultBlockFor(3, 'eth_getStorageAt');
      EthQuery.prototype.call = generateFnWithDefaultBlockFor(2, 'eth_call'); // standard

      EthQuery.prototype.protocolVersion = generateFnFor('eth_protocolVersion');
      EthQuery.prototype.syncing = generateFnFor('eth_syncing');
      EthQuery.prototype.coinbase = generateFnFor('eth_coinbase');
      EthQuery.prototype.mining = generateFnFor('eth_mining');
      EthQuery.prototype.hashrate = generateFnFor('eth_hashrate');
      EthQuery.prototype.gasPrice = generateFnFor('eth_gasPrice');
      EthQuery.prototype.accounts = generateFnFor('eth_accounts');
      EthQuery.prototype.blockNumber = generateFnFor('eth_blockNumber');
      EthQuery.prototype.getBlockTransactionCountByHash = generateFnFor('eth_getBlockTransactionCountByHash');
      EthQuery.prototype.getBlockTransactionCountByNumber = generateFnFor('eth_getBlockTransactionCountByNumber');
      EthQuery.prototype.getUncleCountByBlockHash = generateFnFor('eth_getUncleCountByBlockHash');
      EthQuery.prototype.getUncleCountByBlockNumber = generateFnFor('eth_getUncleCountByBlockNumber');
      EthQuery.prototype.sign = generateFnFor('eth_sign');
      EthQuery.prototype.sendTransaction = generateFnFor('eth_sendTransaction');
      EthQuery.prototype.sendRawTransaction = generateFnFor('eth_sendRawTransaction');
      EthQuery.prototype.estimateGas = generateFnFor('eth_estimateGas');
      EthQuery.prototype.getBlockByHash = generateFnFor('eth_getBlockByHash');
      EthQuery.prototype.getBlockByNumber = generateFnFor('eth_getBlockByNumber');
      EthQuery.prototype.getTransactionByHash = generateFnFor('eth_getTransactionByHash');
      EthQuery.prototype.getTransactionByBlockHashAndIndex = generateFnFor('eth_getTransactionByBlockHashAndIndex');
      EthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor('eth_getTransactionByBlockNumberAndIndex');
      EthQuery.prototype.getTransactionReceipt = generateFnFor('eth_getTransactionReceipt');
      EthQuery.prototype.getUncleByBlockHashAndIndex = generateFnFor('eth_getUncleByBlockHashAndIndex');
      EthQuery.prototype.getUncleByBlockNumberAndIndex = generateFnFor('eth_getUncleByBlockNumberAndIndex');
      EthQuery.prototype.getCompilers = generateFnFor('eth_getCompilers');
      EthQuery.prototype.compileLLL = generateFnFor('eth_compileLLL');
      EthQuery.prototype.compileSolidity = generateFnFor('eth_compileSolidity');
      EthQuery.prototype.compileSerpent = generateFnFor('eth_compileSerpent');
      EthQuery.prototype.newFilter = generateFnFor('eth_newFilter');
      EthQuery.prototype.newBlockFilter = generateFnFor('eth_newBlockFilter');
      EthQuery.prototype.newPendingTransactionFilter = generateFnFor('eth_newPendingTransactionFilter');
      EthQuery.prototype.uninstallFilter = generateFnFor('eth_uninstallFilter');
      EthQuery.prototype.getFilterChanges = generateFnFor('eth_getFilterChanges');
      EthQuery.prototype.getFilterLogs = generateFnFor('eth_getFilterLogs');
      EthQuery.prototype.getLogs = generateFnFor('eth_getLogs');
      EthQuery.prototype.getWork = generateFnFor('eth_getWork');
      EthQuery.prototype.submitWork = generateFnFor('eth_submitWork');
      EthQuery.prototype.submitHashrate = generateFnFor('eth_submitHashrate'); // network level

      EthQuery.prototype.sendAsync = function (opts, cb) {
        var self = this;
        self.currentProvider.sendAsync(createPayload(opts), function (err, response) {
          if (!err && response.error) err = new Error('EthQuery - RPC Error - ' + response.error.message);
          if (err) return cb(err);
          cb(null, response.result);
        });
      }; // util


      function generateFnFor(methodName) {
        return function () {
          var self = this;
          var args = [].slice.call(arguments);
          var cb = args.pop();
          self.sendAsync({
            method: methodName,
            params: args
          }, cb);
        };
      }

      function generateFnWithDefaultBlockFor(argCount, methodName) {
        return function () {
          var self = this;
          var args = [].slice.call(arguments);
          var cb = args.pop(); // set optional default block param

          if (args.length < argCount) args.push('latest');
          self.sendAsync({
            method: methodName,
            params: args
          }, cb);
        };
      }

      function createPayload(data) {
        return extend({
          // defaults
          id: createRandomId(),
          jsonrpc: '2.0',
          params: [] // user-specified

        }, data);
      }
      /***/

    },

    /***/
    "RGXH":
    /*!*******************************************!*\
      !*** ./node_modules/jsonify/lib/parse.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function RGXH(module, exports) {
      var at,
          // The index of the current character
      ch,
          // The current character
      escapee = {
        '"': '"',
        '\\': '\\',
        '/': '/',
        b: '\b',
        f: '\f',
        n: '\n',
        r: '\r',
        t: '\t'
      },
          text,
          error = function error(m) {
        // Call error when something is wrong.
        throw {
          name: 'SyntaxError',
          message: m,
          at: at,
          text: text
        };
      },
          next = function next(c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
          error("Expected '" + c + "' instead of '" + ch + "'");
        } // Get the next character. When there are no more characters,
        // return the empty string.


        ch = text.charAt(at);
        at += 1;
        return ch;
      },
          number = function number() {
        // Parse a number value.
        var number,
            string = '';

        if (ch === '-') {
          string = '-';
          next('-');
        }

        while (ch >= '0' && ch <= '9') {
          string += ch;
          next();
        }

        if (ch === '.') {
          string += '.';

          while (next() && ch >= '0' && ch <= '9') {
            string += ch;
          }
        }

        if (ch === 'e' || ch === 'E') {
          string += ch;
          next();

          if (ch === '-' || ch === '+') {
            string += ch;
            next();
          }

          while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
          }
        }

        number = +string;

        if (!isFinite(number)) {
          error("Bad number");
        } else {
          return number;
        }
      },
          string = function string() {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff; // When parsing for string values, we must look for " and \ characters.

        if (ch === '"') {
          while (next()) {
            if (ch === '"') {
              next();
              return string;
            } else if (ch === '\\') {
              next();

              if (ch === 'u') {
                uffff = 0;

                for (i = 0; i < 4; i += 1) {
                  hex = parseInt(next(), 16);

                  if (!isFinite(hex)) {
                    break;
                  }

                  uffff = uffff * 16 + hex;
                }

                string += String.fromCharCode(uffff);
              } else if (typeof escapee[ch] === 'string') {
                string += escapee[ch];
              } else {
                break;
              }
            } else {
              string += ch;
            }
          }
        }

        error("Bad string");
      },
          white = function white() {
        // Skip whitespace.
        while (ch && ch <= ' ') {
          next();
        }
      },
          word = function word() {
        // true, false, or null.
        switch (ch) {
          case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;

          case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;

          case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }

        error("Unexpected '" + ch + "'");
      },
          value,
          // Place holder for the value function.
      array = function array() {
        // Parse an array value.
        var array = [];

        if (ch === '[') {
          next('[');
          white();

          if (ch === ']') {
            next(']');
            return array; // empty array
          }

          while (ch) {
            array.push(value());
            white();

            if (ch === ']') {
              next(']');
              return array;
            }

            next(',');
            white();
          }
        }

        error("Bad array");
      },
          object = function object() {
        // Parse an object value.
        var key,
            object = {};

        if (ch === '{') {
          next('{');
          white();

          if (ch === '}') {
            next('}');
            return object; // empty object
          }

          while (ch) {
            key = string();
            white();
            next(':');

            if (Object.hasOwnProperty.call(object, key)) {
              error('Duplicate key "' + key + '"');
            }

            object[key] = value();
            white();

            if (ch === '}') {
              next('}');
              return object;
            }

            next(',');
            white();
          }
        }

        error("Bad object");
      };

      value = function value() {
        // Parse a JSON value. It could be an object, an array, a string, a number,
        // or a word.
        white();

        switch (ch) {
          case '{':
            return object();

          case '[':
            return array();

          case '"':
            return string();

          case '-':
            return number();

          default:
            return ch >= '0' && ch <= '9' ? number() : word();
        }
      }; // Return the json_parse function. It will have access to all of the above
      // functions and variables.


      module.exports = function (source, reviver) {
        var result;
        text = source;
        at = 0;
        ch = ' ';
        result = value();
        white();

        if (ch) {
          error("Syntax error");
        } // If there is a reviver function, we recursively walk the new structure,
        // passing each name/value pair to the reviver function for possible
        // transformation, starting with a temporary root object that holds the result
        // in an empty key. If there is not a reviver function, we simply return the
        // result.


        return typeof reviver === 'function' ? function walk(holder, key) {
          var k,
              v,
              value = holder[key];

          if (value && typeof value === 'object') {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(value, k)) {
                v = walk(value, k);

                if (v !== undefined) {
                  value[k] = v;
                } else {
                  delete value[k];
                }
              }
            }
          }

          return reviver.call(holder, key, value);
        }({
          '': result
        }, '') : result;
      };
      /***/

    },

    /***/
    "UJ2e":
    /*!*******************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/hexUtils.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function UJ2e(module, exports) {
      module.exports = {
        minBlockRef: minBlockRef,
        maxBlockRef: maxBlockRef,
        sortBlockRefs: sortBlockRefs,
        bnToHex: bnToHex,
        blockRefIsNumber: blockRefIsNumber,
        hexToInt: hexToInt,
        incrementHexInt: incrementHexInt,
        intToHex: intToHex,
        unsafeRandomBytes: unsafeRandomBytes
      };

      function minBlockRef() {
        for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
          refs[_key] = arguments[_key];
        }

        var sortedRefs = sortBlockRefs(refs);
        return sortedRefs[0];
      }

      function maxBlockRef() {
        for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          refs[_key2] = arguments[_key2];
        }

        var sortedRefs = sortBlockRefs(refs);
        return sortedRefs[sortedRefs.length - 1];
      }

      function sortBlockRefs(refs) {
        return refs.sort(function (refA, refB) {
          if (refA === 'latest' || refB === 'earliest') return 1;
          if (refB === 'latest' || refA === 'earliest') return -1;
          return hexToInt(refA) - hexToInt(refB);
        });
      }

      function bnToHex(bn) {
        return '0x' + bn.toString(16);
      }

      function blockRefIsNumber(blockRef) {
        return blockRef && !['earliest', 'latest', 'pending'].includes(blockRef);
      }

      function hexToInt(hexString) {
        if (hexString === undefined || hexString === null) return hexString;
        return Number.parseInt(hexString, 16);
      }

      function incrementHexInt(hexString) {
        if (hexString === undefined || hexString === null) return hexString;
        var value = hexToInt(hexString);
        return intToHex(value + 1);
      }

      function intToHex(_int2) {
        if (_int2 === undefined || _int2 === null) return _int2;

        var hexString = _int2.toString(16);

        var needsLeftPad = hexString.length % 2;
        if (needsLeftPad) hexString = '0' + hexString;
        return '0x' + hexString;
      }

      function unsafeRandomBytes(byteCount) {
        var result = '0x';

        for (var i = 0; i < byteCount; i++) {
          result += unsafeRandomNibble();
          result += unsafeRandomNibble();
        }

        return result;
      }

      function unsafeRandomNibble() {
        return Math.floor(Math.random() * 16).toString(16);
      }
      /***/

    },

    /***/
    "UNi/":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_baseTimes.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function UNi(module, exports) {
      /**
       * The base implementation of `_.times` without support for iteratee shorthands
       * or max array length checks.
       *
       * @private
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the array of results.
       */
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }

        return result;
      }

      module.exports = baseTimes;
      /***/
    },

    /***/
    "Unkg":
    /*!****************************************************************!*\
      !*** ./node_modules/ethereumjs-util/dist/secp256k1-lib/der.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function Unkg(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        // This file is imported from secp256k1 v3
        // https://github.com/cryptocoinjs/secp256k1-node/blob/master/LICENSE
        var EC_PRIVKEY_EXPORT_DER_COMPRESSED = Buffer.from([// begin
        0x30, 0x81, 0xd3, 0x02, 0x01, 0x01, 0x04, 0x20, // private key
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // middle
        0xa0, 0x81, 0x85, 0x30, 0x81, 0x82, 0x02, 0x01, 0x01, 0x30, 0x2c, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x01, 0x01, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xfc, 0x2f, 0x30, 0x06, 0x04, 0x01, 0x00, 0x04, 0x01, 0x07, 0x04, 0x21, 0x02, 0x79, 0xbe, 0x66, 0x7e, 0xf9, 0xdc, 0xbb, 0xac, 0x55, 0xa0, 0x62, 0x95, 0xce, 0x87, 0x0b, 0x07, 0x02, 0x9b, 0xfc, 0xdb, 0x2d, 0xce, 0x28, 0xd9, 0x59, 0xf2, 0x81, 0x5b, 0x16, 0xf8, 0x17, 0x98, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xba, 0xae, 0xdc, 0xe6, 0xaf, 0x48, 0xa0, 0x3b, 0xbf, 0xd2, 0x5e, 0x8c, 0xd0, 0x36, 0x41, 0x41, 0x02, 0x01, 0x01, 0xa1, 0x24, 0x03, 0x22, 0x00, // public key
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
        var EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED = Buffer.from([// begin
        0x30, 0x82, 0x01, 0x13, 0x02, 0x01, 0x01, 0x04, 0x20, // private key
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // middle
        0xa0, 0x81, 0xa5, 0x30, 0x81, 0xa2, 0x02, 0x01, 0x01, 0x30, 0x2c, 0x06, 0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x01, 0x01, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xff, 0xff, 0xfc, 0x2f, 0x30, 0x06, 0x04, 0x01, 0x00, 0x04, 0x01, 0x07, 0x04, 0x41, 0x04, 0x79, 0xbe, 0x66, 0x7e, 0xf9, 0xdc, 0xbb, 0xac, 0x55, 0xa0, 0x62, 0x95, 0xce, 0x87, 0x0b, 0x07, 0x02, 0x9b, 0xfc, 0xdb, 0x2d, 0xce, 0x28, 0xd9, 0x59, 0xf2, 0x81, 0x5b, 0x16, 0xf8, 0x17, 0x98, 0x48, 0x3a, 0xda, 0x77, 0x26, 0xa3, 0xc4, 0x65, 0x5d, 0xa4, 0xfb, 0xfc, 0x0e, 0x11, 0x08, 0xa8, 0xfd, 0x17, 0xb4, 0x48, 0xa6, 0x85, 0x54, 0x19, 0x9c, 0x47, 0xd0, 0x8f, 0xfb, 0x10, 0xd4, 0xb8, 0x02, 0x21, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 0xba, 0xae, 0xdc, 0xe6, 0xaf, 0x48, 0xa0, 0x3b, 0xbf, 0xd2, 0x5e, 0x8c, 0xd0, 0x36, 0x41, 0x41, 0x02, 0x01, 0x01, 0xa1, 0x44, 0x03, 0x42, 0x00, // public key
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

        exports.privateKeyExport = function (privateKey, publicKey, compressed) {
          var result = Buffer.from(compressed ? EC_PRIVKEY_EXPORT_DER_COMPRESSED : EC_PRIVKEY_EXPORT_DER_UNCOMPRESSED);
          privateKey.copy(result, compressed ? 8 : 9);
          publicKey.copy(result, compressed ? 181 : 214);
          return result;
        };

        exports.privateKeyImport = function (privateKey) {
          var length = privateKey.length; // sequence header

          var index = 0;
          if (length < index + 1 || privateKey[index] !== 0x30) return null;
          index += 1; // sequence length constructor

          if (length < index + 1 || !(privateKey[index] & 0x80)) return null;
          var lenb = privateKey[index] & 0x7f;
          index += 1;
          if (lenb < 1 || lenb > 2) return null;
          if (length < index + lenb) return null; // sequence length

          var len = privateKey[index + lenb - 1] | (lenb > 1 ? privateKey[index + lenb - 2] << 8 : 0);
          index += lenb;
          if (length < index + len) return null; // sequence element 0: version number (=1)

          if (length < index + 3 || privateKey[index] !== 0x02 || privateKey[index + 1] !== 0x01 || privateKey[index + 2] !== 0x01) {
            return null;
          }

          index += 3; // sequence element 1: octet string, up to 32 bytes

          if (length < index + 2 || privateKey[index] !== 0x04 || privateKey[index + 1] > 0x20 || length < index + 2 + privateKey[index + 1]) {
            return null;
          }

          return privateKey.slice(index + 2, index + 2 + privateKey[index + 1]);
        };

        exports.signatureImportLax = function (signature) {
          var r = Buffer.alloc(32, 0);
          var s = Buffer.alloc(32, 0);
          var length = signature.length;
          var index = 0; // sequence tag byte

          if (signature[index++] !== 0x30) {
            return null;
          } // sequence length byte


          var lenbyte = signature[index++];

          if (lenbyte & 0x80) {
            index += lenbyte - 0x80;

            if (index > length) {
              return null;
            }
          } // sequence tag byte for r


          if (signature[index++] !== 0x02) {
            return null;
          } // length for r


          var rlen = signature[index++];

          if (rlen & 0x80) {
            lenbyte = rlen - 0x80;

            if (index + lenbyte > length) {
              return null;
            }

            for (; lenbyte > 0 && signature[index] === 0x00; index += 1, lenbyte -= 1) {}

            for (rlen = 0; lenbyte > 0; index += 1, lenbyte -= 1) {
              rlen = (rlen << 8) + signature[index];
            }
          }

          if (rlen > length - index) {
            return null;
          }

          var rindex = index;
          index += rlen; // sequence tag byte for s

          if (signature[index++] !== 0x02) {
            return null;
          } // length for s


          var slen = signature[index++];

          if (slen & 0x80) {
            lenbyte = slen - 0x80;

            if (index + lenbyte > length) {
              return null;
            }

            for (; lenbyte > 0 && signature[index] === 0x00; index += 1, lenbyte -= 1) {}

            for (slen = 0; lenbyte > 0; index += 1, lenbyte -= 1) {
              slen = (slen << 8) + signature[index];
            }
          }

          if (slen > length - index) {
            return null;
          }

          var sindex = index;
          index += slen; // ignore leading zeros in r

          for (; rlen > 0 && signature[rindex] === 0x00; rlen -= 1, rindex += 1) {} // copy r value


          if (rlen > 32) {
            return null;
          }

          var rvalue = signature.slice(rindex, rindex + rlen);
          rvalue.copy(r, 32 - rvalue.length); // ignore leading zeros in s

          for (; slen > 0 && signature[sindex] === 0x00; slen -= 1, sindex += 1) {} // copy s value


          if (slen > 32) {
            return null;
          }

          var svalue = signature.slice(sindex, sindex + slen);
          svalue.copy(s, 32 - svalue.length);
          return {
            r: r,
            s: s
          };
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "V5x4":
    /*!*******************************************************!*\
      !*** ./node_modules/eth-block-tracker/src/polling.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function V5x4(module, exports, __webpack_require__) {
      var pify = __webpack_require__(
      /*! pify */
      "4CaD");

      var BaseBlockTracker = __webpack_require__(
      /*! ./base */
      "/u+i");

      var sec = 1000;

      var PollingBlockTracker = /*#__PURE__*/function (_BaseBlockTracker) {
        _inherits(PollingBlockTracker, _BaseBlockTracker);

        var _super4 = _createSuper(PollingBlockTracker);

        function PollingBlockTracker() {
          var _this9;

          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, PollingBlockTracker);

          // parse + validate args
          if (!opts.provider) throw new Error('PollingBlockTracker - no provider specified.');
          var pollingInterval = opts.pollingInterval || 20 * sec;
          var retryTimeout = opts.retryTimeout || pollingInterval / 10;
          var keepEventLoopActive = opts.keepEventLoopActive !== undefined ? opts.keepEventLoopActive : true;
          var setSkipCacheFlag = opts.setSkipCacheFlag || false; // BaseBlockTracker constructor

          _this9 = _super4.call(this, Object.assign({
            blockResetDuration: pollingInterval
          }, opts)); // config

          _this9._provider = opts.provider;
          _this9._pollingInterval = pollingInterval;
          _this9._retryTimeout = retryTimeout;
          _this9._keepEventLoopActive = keepEventLoopActive;
          _this9._setSkipCacheFlag = setSkipCacheFlag;
          return _this9;
        } //
        // public
        //
        // trigger block polling


        _createClass(PollingBlockTracker, [{
          key: "checkForLatestBlock",
          value: function () {
            var _checkForLatestBlock = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this._updateLatestBlock();

                    case 2:
                      _context21.next = 4;
                      return this.getLatestBlock();

                    case 4:
                      return _context21.abrupt("return", _context21.sent);

                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function checkForLatestBlock() {
              return _checkForLatestBlock.apply(this, arguments);
            }

            return checkForLatestBlock;
          }() //
          // private
          //

        }, {
          key: "_start",
          value: function _start() {
            var _this10 = this;

            this._performSync()["catch"](function (err) {
              return _this10.emit('error', err);
            });
          }
        }, {
          key: "_performSync",
          value: function () {
            var _performSync2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var newErr;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      if (!this._isRunning) {
                        _context22.next = 16;
                        break;
                      }

                      _context22.prev = 1;
                      _context22.next = 4;
                      return this._updateLatestBlock();

                    case 4:
                      _context22.next = 6;
                      return timeout(this._pollingInterval, !this._keepEventLoopActive);

                    case 6:
                      _context22.next = 14;
                      break;

                    case 8:
                      _context22.prev = 8;
                      _context22.t0 = _context22["catch"](1);
                      newErr = new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(_context22.t0.stack));

                      try {
                        this.emit('error', newErr);
                      } catch (emitErr) {
                        console.error(newErr);
                      }

                      _context22.next = 14;
                      return timeout(this._retryTimeout, !this._keepEventLoopActive);

                    case 14:
                      _context22.next = 0;
                      break;

                    case 16:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this, [[1, 8]]);
            }));

            function _performSync() {
              return _performSync2.apply(this, arguments);
            }

            return _performSync;
          }()
        }, {
          key: "_updateLatestBlock",
          value: function () {
            var _updateLatestBlock2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var latestBlock;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this._fetchLatestBlock();

                    case 2:
                      latestBlock = _context23.sent;

                      this._newPotentialLatest(latestBlock);

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function _updateLatestBlock() {
              return _updateLatestBlock2.apply(this, arguments);
            }

            return _updateLatestBlock;
          }()
        }, {
          key: "_fetchLatestBlock",
          value: function () {
            var _fetchLatestBlock2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this11 = this;

              var req, res;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      req = {
                        jsonrpc: "2.0",
                        id: 1,
                        method: 'eth_blockNumber',
                        params: []
                      };
                      if (this._setSkipCacheFlag) req.skipCache = true;
                      _context24.next = 4;
                      return pify(function (cb) {
                        return _this11._provider.sendAsync(req, cb);
                      })();

                    case 4:
                      res = _context24.sent;

                      if (!res.error) {
                        _context24.next = 7;
                        break;
                      }

                      throw new Error("PollingBlockTracker - encountered error fetching block:\n".concat(res.error));

                    case 7:
                      return _context24.abrupt("return", res.result);

                    case 8:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function _fetchLatestBlock() {
              return _fetchLatestBlock2.apply(this, arguments);
            }

            return _fetchLatestBlock;
          }()
        }]);

        return PollingBlockTracker;
      }(BaseBlockTracker);

      module.exports = PollingBlockTracker;

      function timeout(duration, unref) {
        return new Promise(function (resolve) {
          var timoutRef = setTimeout(resolve, duration); // don't keep process open

          if (timoutRef.unref && unref) {
            timoutRef.unref();
          }
        });
      }
      /***/

    },

    /***/
    "V6Ve":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_nativeKeys.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function V6Ve(module, exports, __webpack_require__) {
      var overArg = __webpack_require__(
      /*! ./_overArg */
      "kekF");
      /* Built-in method references for those with the same name as other `lodash` methods. */


      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
      /***/
    },

    /***/
    "VJGR":
    /*!********************************************************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/node_modules/eth-json-rpc-middleware/scaffold.js ***!
      \********************************************************************************************/

    /*! no static exports found */

    /***/
    function VJGR(module, exports, __webpack_require__) {
      // for backwards compat
      module.exports = __webpack_require__(
      /*! json-rpc-engine/src/createScaffoldMiddleware */
      "1aEN");
      /***/
    },

    /***/
    "WFqU":
    /*!********************************************!*\
      !*** ./node_modules/lodash/_freeGlobal.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function WFqU(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /** Detect free variable `global` from Node.js. */
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
        module.exports = freeGlobal;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../webpack/buildin/global.js */
      "yLpj"));
      /***/
    },

    /***/
    "YOJA":
    /*!******************************************!*\
      !*** ./node_modules/async/eachSeries.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function YOJA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _eachLimit = __webpack_require__(
      /*! ./eachLimit */
      "tMv7");

      var _eachLimit2 = _interopRequireDefault(_eachLimit);

      var _doLimit = __webpack_require__(
      /*! ./internal/doLimit */
      "PpH3");

      var _doLimit2 = _interopRequireDefault(_doLimit);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
       *
       * @name eachSeries
       * @static
       * @memberOf module:Collections
       * @method
       * @see [async.each]{@link module:Collections.each}
       * @alias forEachSeries
       * @category Collection
       * @param {Array|Iterable|Object} coll - A collection to iterate over.
       * @param {AsyncFunction} iteratee - An async function to apply to each
       * item in `coll`.
       * The array index is not passed to the iteratee.
       * If you need the index, use `eachOfSeries`.
       * Invoked with (item, callback).
       * @param {Function} [callback] - A callback which is called when all
       * `iteratee` functions have finished, or an error occurs. Invoked with (err).
       */


      exports["default"] = (0, _doLimit2["default"])(_eachLimit2["default"], 1);
      module.exports = exports['default'];
      /***/
    },

    /***/
    "Z0cm":
    /*!****************************************!*\
      !*** ./node_modules/lodash/isArray.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function Z0cm(module, exports) {
      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      var isArray = Array.isArray;
      module.exports = isArray;
      /***/
    },

    /***/
    "aR5N":
    /*!**************************************************!*\
      !*** ./node_modules/async/internal/wrapAsync.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function aR5N(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isAsync = undefined;

      var _asyncify = __webpack_require__(
      /*! ../asyncify */
      "56vw");

      var _asyncify2 = _interopRequireDefault(_asyncify);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var supportsSymbol = typeof Symbol === 'function';

      function isAsync(fn) {
        return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
      }

      function wrapAsync(asyncFn) {
        return isAsync(asyncFn) ? (0, _asyncify2["default"])(asyncFn) : asyncFn;
      }

      exports["default"] = wrapAsync;
      exports.isAsync = isAsync;
      /***/
    },

    /***/
    "abV/":
    /*!**************************************!*\
      !*** ./node_modules/async/eachOf.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function abV(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports["default"] = function (coll, iteratee, callback) {
        var eachOfImplementation = (0, _isArrayLike2["default"])(coll) ? eachOfArrayLike : eachOfGeneric;
        eachOfImplementation(coll, (0, _wrapAsync2["default"])(iteratee), callback);
      };

      var _isArrayLike = __webpack_require__(
      /*! lodash/isArrayLike */
      "MMmD");

      var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

      var _breakLoop = __webpack_require__(
      /*! ./internal/breakLoop */
      "KwLt");

      var _breakLoop2 = _interopRequireDefault(_breakLoop);

      var _eachOfLimit = __webpack_require__(
      /*! ./eachOfLimit */
      "k2x9");

      var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

      var _doLimit = __webpack_require__(
      /*! ./internal/doLimit */
      "PpH3");

      var _doLimit2 = _interopRequireDefault(_doLimit);

      var _noop = __webpack_require__(
      /*! lodash/noop */
      "vN+2");

      var _noop2 = _interopRequireDefault(_noop);

      var _once = __webpack_require__(
      /*! ./internal/once */
      "2sf1");

      var _once2 = _interopRequireDefault(_once);

      var _onlyOnce = __webpack_require__(
      /*! ./internal/onlyOnce */
      "rH6r");

      var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

      var _wrapAsync = __webpack_require__(
      /*! ./internal/wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // eachOf implementation optimized for array-likes


      function eachOfArrayLike(coll, iteratee, callback) {
        callback = (0, _once2["default"])(callback || _noop2["default"]);
        var index = 0,
            completed = 0,
            length = coll.length;

        if (length === 0) {
          callback(null);
        }

        function iteratorCallback(err, value) {
          if (err) {
            callback(err);
          } else if (++completed === length || value === _breakLoop2["default"]) {
            callback(null);
          }
        }

        for (; index < length; index++) {
          iteratee(coll[index], index, (0, _onlyOnce2["default"])(iteratorCallback));
        }
      } // a generic version of eachOf which can handle array, object, and iterator cases.


      var eachOfGeneric = (0, _doLimit2["default"])(_eachOfLimit2["default"], Infinity);
      /**
       * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
       * to the iteratee.
       *
       * @name eachOf
       * @static
       * @memberOf module:Collections
       * @method
       * @alias forEachOf
       * @category Collection
       * @see [async.each]{@link module:Collections.each}
       * @param {Array|Iterable|Object} coll - A collection to iterate over.
       * @param {AsyncFunction} iteratee - A function to apply to each
       * item in `coll`.
       * The `key` is the item's key, or index in the case of an array.
       * Invoked with (item, key, callback).
       * @param {Function} [callback] - A callback which is called when all
       * `iteratee` functions have finished, or an error occurs. Invoked with (err).
       * @example
       *
       * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
       * var configs = {};
       *
       * async.forEachOf(obj, function (value, key, callback) {
       *     fs.readFile(__dirname + value, "utf8", function (err, data) {
       *         if (err) return callback(err);
       *         try {
       *             configs[key] = JSON.parse(data);
       *         } catch (e) {
       *             return callback(e);
       *         }
       *         callback();
       *     });
       * }, function (err) {
       *     if (err) console.error(err.message);
       *     // configs is now a map of JSON data
       *     doSomethingWith(configs);
       * });
       */

      module.exports = exports['default'];
      /***/
    },

    /***/
    "b80T":
    /*!***********************************************!*\
      !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function b80T(module, exports, __webpack_require__) {
      var baseTimes = __webpack_require__(
      /*! ./_baseTimes */
      "UNi/"),
          isArguments = __webpack_require__(
      /*! ./isArguments */
      "03A+"),
          isArray = __webpack_require__(
      /*! ./isArray */
      "Z0cm"),
          isBuffer = __webpack_require__(
      /*! ./isBuffer */
      "DSRE"),
          isIndex = __webpack_require__(
      /*! ./_isIndex */
      "wJg7"),
          isTypedArray = __webpack_require__(
      /*! ./isTypedArray */
      "c6wG");
      /** Used for built-in method references. */


      var objectProto = Object.prototype;
      /** Used to check objects for own properties. */

      var hasOwnProperty = objectProto.hasOwnProperty;
      /**
       * Creates an array of the enumerable property names of the array-like `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @param {boolean} inherited Specify returning inherited property names.
       * @returns {Array} Returns the array of property names.
       */

      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;

        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
          key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }

        return result;
      }

      module.exports = arrayLikeKeys;
      /***/
    },

    /***/
    "c6wG":
    /*!*********************************************!*\
      !*** ./node_modules/lodash/isTypedArray.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function c6wG(module, exports, __webpack_require__) {
      var baseIsTypedArray = __webpack_require__(
      /*! ./_baseIsTypedArray */
      "dD9F"),
          baseUnary = __webpack_require__(
      /*! ./_baseUnary */
      "sEf8"),
          nodeUtil = __webpack_require__(
      /*! ./_nodeUtil */
      "mdPL");
      /* Node.js helper references. */


      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */

      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
      /***/
    },

    /***/
    "dAl+":
    /*!**********************************************!*\
      !*** ./node_modules/lodash.flatmap/index.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function dAl(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (global, module) {
        /**
        * lodash (Custom Build) <https://lodash.com/>
        * Build: `lodash modularize exports="npm" -o ./`
        * Copyright jQuery Foundation and other contributors <https://jquery.org/>
        * Released under MIT license <https://lodash.com/license>
        * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
        * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        */

        /** Used as the size to enable large array optimizations. */
        var LARGE_ARRAY_SIZE = 200;
        /** Used as the `TypeError` message for "Functions" methods. */

        var FUNC_ERROR_TEXT = 'Expected a function';
        /** Used to stand-in for `undefined` hash values. */

        var HASH_UNDEFINED = '__lodash_hash_undefined__';
        /** Used to compose bitmasks for comparison styles. */

        var UNORDERED_COMPARE_FLAG = 1,
            PARTIAL_COMPARE_FLAG = 2;
        /** Used as references for various `Number` constants. */

        var INFINITY = 1 / 0,
            MAX_SAFE_INTEGER = 9007199254740991;
        /** `Object#toString` result references. */

        var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            objectTag = '[object Object]',
            promiseTag = '[object Promise]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            symbolTag = '[object Symbol]',
            weakMapTag = '[object WeakMap]';
        var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]',
            float32Tag = '[object Float32Array]',
            float64Tag = '[object Float64Array]',
            int8Tag = '[object Int8Array]',
            int16Tag = '[object Int16Array]',
            int32Tag = '[object Int32Array]',
            uint8Tag = '[object Uint8Array]',
            uint8ClampedTag = '[object Uint8ClampedArray]',
            uint16Tag = '[object Uint16Array]',
            uint32Tag = '[object Uint32Array]';
        /** Used to match property names within property paths. */

        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/,
            reLeadingDot = /^\./,
            rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */

        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        /** Used to match backslashes in property paths. */

        var reEscapeChar = /\\(\\)?/g;
        /** Used to detect host constructors (Safari). */

        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        /** Used to detect unsigned integer values. */

        var reIsUint = /^(?:0|[1-9]\d*)$/;
        /** Used to identify `toStringTag` values of typed arrays. */

        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        /** Detect free variable `global` from Node.js. */

        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
        /** Detect free variable `self`. */

        var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
        /** Used as a reference to the global object. */

        var root = freeGlobal || freeSelf || Function('return this')();
        /** Detect free variable `exports`. */

        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Detect free variable `process` from Node.js. */

        var freeProcess = moduleExports && freeGlobal.process;
        /** Used to access faster Node.js helpers. */

        var nodeUtil = function () {
          try {
            return freeProcess && freeProcess.binding('util');
          } catch (e) {}
        }();
        /* Node.js helper references. */


        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        /**
         * A specialized version of `_.map` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */

        function arrayMap(array, iteratee) {
          var index = -1,
              length = array ? array.length : 0,
              result = Array(length);

          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }

          return result;
        }
        /**
         * Appends the elements of `values` to `array`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to append.
         * @returns {Array} Returns `array`.
         */


        function arrayPush(array, values) {
          var index = -1,
              length = values.length,
              offset = array.length;

          while (++index < length) {
            array[offset + index] = values[index];
          }

          return array;
        }
        /**
         * A specialized version of `_.some` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         */


        function arraySome(array, predicate) {
          var index = -1,
              length = array ? array.length : 0;

          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }

          return false;
        }
        /**
         * The base implementation of `_.property` without support for deep paths.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @returns {Function} Returns the new accessor function.
         */


        function baseProperty(key) {
          return function (object) {
            return object == null ? undefined : object[key];
          };
        }
        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */


        function baseTimes(n, iteratee) {
          var index = -1,
              result = Array(n);

          while (++index < n) {
            result[index] = iteratee(index);
          }

          return result;
        }
        /**
         * The base implementation of `_.unary` without support for storing metadata.
         *
         * @private
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new capped function.
         */


        function baseUnary(func) {
          return function (value) {
            return func(value);
          };
        }
        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */


        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }
        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */


        function isHostObject(value) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var result = false;

          if (value != null && typeof value.toString != 'function') {
            try {
              result = !!(value + '');
            } catch (e) {}
          }

          return result;
        }
        /**
         * Converts `map` to its key-value pairs.
         *
         * @private
         * @param {Object} map The map to convert.
         * @returns {Array} Returns the key-value pairs.
         */


        function mapToArray(map) {
          var index = -1,
              result = Array(map.size);
          map.forEach(function (value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */


        function overArg(func, transform) {
          return function (arg) {
            return func(transform(arg));
          };
        }
        /**
         * Converts `set` to an array of its values.
         *
         * @private
         * @param {Object} set The set to convert.
         * @returns {Array} Returns the values.
         */


        function setToArray(set) {
          var index = -1,
              result = Array(set.size);
          set.forEach(function (value) {
            result[++index] = value;
          });
          return result;
        }
        /** Used for built-in method references. */


        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;
        /** Used to detect overreaching core-js shims. */

        var coreJsData = root['__core-js_shared__'];
        /** Used to detect methods masquerading as native. */

        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();
        /** Used to resolve the decompiled source of functions. */


        var funcToString = funcProto.toString;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */

        var objectToString = objectProto.toString;
        /** Used to detect if a method is native. */

        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        /** Built-in value references. */

        var Symbol = root.Symbol,
            Uint8Array = root.Uint8Array,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
        /* Built-in method references for those with the same name as other `lodash` methods. */

        var nativeKeys = overArg(Object.keys, Object);
        /* Built-in method references that are verified to be native. */

        var DataView = getNative(root, 'DataView'),
            Map = getNative(root, 'Map'),
            Promise = getNative(root, 'Promise'),
            Set = getNative(root, 'Set'),
            WeakMap = getNative(root, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');
        /** Used to detect maps, sets, and weakmaps. */

        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        /** Used to convert symbols to primitives and strings. */

        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */

        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();

          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */


        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }
        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */


        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }
        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */


        function hashGet(key) {
          var data = this.__data__;

          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }

          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */


        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */


        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        } // Add methods to `Hash`.


        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */

        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();

          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */


        function listCacheClear() {
          this.__data__ = [];
        }
        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */


        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }

          var lastIndex = data.length - 1;

          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }

          return true;
        }
        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */


        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }
        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */


        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */


        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }

          return this;
        } // Add methods to `ListCache`.


        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */

        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;
          this.clear();

          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */


        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }
        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */


        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }
        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */


        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */


        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */


        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        } // Add methods to `MapCache`.


        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        /**
         *
         * Creates an array cache object to store unique values.
         *
         * @private
         * @constructor
         * @param {Array} [values] The values to cache.
         */

        function SetCache(values) {
          var index = -1,
              length = values ? values.length : 0;
          this.__data__ = new MapCache();

          while (++index < length) {
            this.add(values[index]);
          }
        }
        /**
         * Adds `value` to the array cache.
         *
         * @private
         * @name add
         * @memberOf SetCache
         * @alias push
         * @param {*} value The value to cache.
         * @returns {Object} Returns the cache instance.
         */


        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);

          return this;
        }
        /**
         * Checks if `value` is in the array cache.
         *
         * @private
         * @name has
         * @memberOf SetCache
         * @param {*} value The value to search for.
         * @returns {number} Returns `true` if `value` is found, else `false`.
         */


        function setCacheHas(value) {
          return this.__data__.has(value);
        } // Add methods to `SetCache`.


        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */

        function Stack(entries) {
          this.__data__ = new ListCache(entries);
        }
        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */


        function stackClear() {
          this.__data__ = new ListCache();
        }
        /**
         * Removes `key` and its value from the stack.
         *
         * @private
         * @name delete
         * @memberOf Stack
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */


        function stackDelete(key) {
          return this.__data__['delete'](key);
        }
        /**
         * Gets the stack value for `key`.
         *
         * @private
         * @name get
         * @memberOf Stack
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */


        function stackGet(key) {
          return this.__data__.get(key);
        }
        /**
         * Checks if a stack value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Stack
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */


        function stackHas(key) {
          return this.__data__.has(key);
        }
        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */


        function stackSet(key, value) {
          var cache = this.__data__;

          if (cache instanceof ListCache) {
            var pairs = cache.__data__;

            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              return this;
            }

            cache = this.__data__ = new MapCache(pairs);
          }

          cache.set(key, value);
          return this;
        } // Add methods to `Stack`.


        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */

        function arrayLikeKeys(value, inherited) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          // Safari 9 makes `arguments.length` enumerable in strict mode.
          var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
          var length = result.length,
              skipIndexes = !!length;

          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
              result.push(key);
            }
          }

          return result;
        }
        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */


        function assocIndexOf(array, key) {
          var length = array.length;

          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }

          return -1;
        }
        /**
         * The base implementation of `_.forEach` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         */


        var baseEach = createBaseEach(baseForOwn);
        /**
         * The base implementation of `_.flatten` with support for restricting flattening.
         *
         * @private
         * @param {Array} array The array to flatten.
         * @param {number} depth The maximum recursion depth.
         * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
         * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
         * @param {Array} [result=[]] The initial result value.
         * @returns {Array} Returns the new flattened array.
         */

        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
              length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);

          while (++index < length) {
            var value = array[index];

            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }

          return result;
        }
        /**
         * The base implementation of `baseForOwn` which iterates over `object`
         * properties returned by `keysFunc` and invokes `iteratee` for each property.
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */


        var baseFor = createBaseFor();
        /**
         * The base implementation of `_.forOwn` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */

        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        /**
         * The base implementation of `_.get` without support for default values.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @returns {*} Returns the resolved value.
         */


        function baseGet(object, path) {
          path = isKey(path, object) ? [path] : castPath(path);
          var index = 0,
              length = path.length;

          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }

          return index && index == length ? object : undefined;
        }
        /**
         * The base implementation of `getTag`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */


        function baseGetTag(value) {
          return objectToString.call(value);
        }
        /**
         * The base implementation of `_.hasIn` without support for deep paths.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {Array|string} key The key to check.
         * @returns {boolean} Returns `true` if `key` exists, else `false`.
         */


        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        /**
         * The base implementation of `_.isEqual` which supports partial comparisons
         * and tracks traversed objects.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize comparisons.
         * @param {boolean} [bitmask] The bitmask of comparison flags.
         *  The bitmask may be composed of the following flags:
         *     1 - Unordered comparison
         *     2 - Partial comparison
         * @param {Object} [stack] Tracks traversed `value` and `other` objects.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         */


        function baseIsEqual(value, other, customizer, bitmask, stack) {
          if (value === other) {
            return true;
          }

          if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }

          return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
        }
        /**
         * A specialized version of `baseIsEqual` for arrays and objects which performs
         * deep comparisons and tracks traversed objects enabling objects with circular
         * references to be compared.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} [customizer] The function to customize comparisons.
         * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} [stack] Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */


        function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = arrayTag,
              othTag = arrayTag;

          if (!objIsArr) {
            objTag = getTag(object);
            objTag = objTag == argsTag ? objectTag : objTag;
          }

          if (!othIsArr) {
            othTag = getTag(other);
            othTag = othTag == argsTag ? objectTag : othTag;
          }

          var objIsObj = objTag == objectTag && !isHostObject(object),
              othIsObj = othTag == objectTag && !isHostObject(other),
              isSameTag = objTag == othTag;

          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
          }

          if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                  othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
            }
          }

          if (!isSameTag) {
            return false;
          }

          stack || (stack = new Stack());
          return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
        }
        /**
         * The base implementation of `_.isMatch` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Array} matchData The property names, values, and compare flags to match.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         */


        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;

          if (object == null) {
            return !length;
          }

          object = Object(object);

          while (index--) {
            var data = matchData[index];

            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }

          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];

            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();

              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }

              if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                return false;
              }
            }
          }

          return true;
        }
        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */


        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }

          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        /**
         * The base implementation of `_.isTypedArray` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         */


        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
        }
        /**
         * The base implementation of `_.iteratee`.
         *
         * @private
         * @param {*} [value=_.identity] The value to convert to an iteratee.
         * @returns {Function} Returns the iteratee.
         */


        function baseIteratee(value) {
          // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
          // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
          if (typeof value == 'function') {
            return value;
          }

          if (value == null) {
            return identity;
          }

          if (typeof value == 'object') {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }

          return property(value);
        }
        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */


        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }

          var result = [];

          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
              result.push(key);
            }
          }

          return result;
        }
        /**
         * The base implementation of `_.map` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */


        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function (value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        /**
         * The base implementation of `_.matches` which doesn't clone `source`.
         *
         * @private
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new spec function.
         */


        function baseMatches(source) {
          var matchData = getMatchData(source);

          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }

          return function (object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        /**
         * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
         *
         * @private
         * @param {string} path The path of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         */


        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }

          return function (object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
          };
        }
        /**
         * A specialized version of `baseProperty` which supports deep paths.
         *
         * @private
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new accessor function.
         */


        function basePropertyDeep(path) {
          return function (object) {
            return baseGet(object, path);
          };
        }
        /**
         * The base implementation of `_.toString` which doesn't convert nullish
         * values to empty strings.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         */


        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == 'string') {
            return value;
          }

          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }

          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        /**
         * Casts `value` to a path array if it's not one.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {Array} Returns the cast property path array.
         */


        function castPath(value) {
          return isArray(value) ? value : stringToPath(value);
        }
        /**
         * Creates a `baseEach` or `baseEachRight` function.
         *
         * @private
         * @param {Function} eachFunc The function to iterate over a collection.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */


        function createBaseEach(eachFunc, fromRight) {
          return function (collection, iteratee) {
            if (collection == null) {
              return collection;
            }

            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }

            var length = collection.length,
                index = fromRight ? length : -1,
                iterable = Object(collection);

            while (fromRight ? index-- : ++index < length) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }

            return collection;
          };
        }
        /**
         * Creates a base function for methods like `_.forIn` and `_.forOwn`.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */


        function createBaseFor(fromRight) {
          return function (object, iteratee, keysFunc) {
            var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;

            while (length--) {
              var key = props[fromRight ? length : ++index];

              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }

            return object;
          };
        }
        /**
         * A specialized version of `baseIsEqualDeep` for arrays with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Array} array The array to compare.
         * @param {Array} other The other array to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} customizer The function to customize comparisons.
         * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} stack Tracks traversed `array` and `other` objects.
         * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
         */


        function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              arrLength = array.length,
              othLength = other.length;

          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          } // Assume cyclic values are equal.


          var stacked = stack.get(array);

          if (stacked && stack.get(other)) {
            return stacked == other;
          }

          var index = -1,
              result = true,
              seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;
          stack.set(array, other);
          stack.set(other, array); // Ignore non-index properties.

          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];

            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }

            if (compared !== undefined) {
              if (compared) {
                continue;
              }

              result = false;
              break;
            } // Recursively compare arrays (susceptible to call stack limits).


            if (seen) {
              if (!arraySome(other, function (othValue, othIndex) {
                if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                  return seen.add(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              result = false;
              break;
            }
          }

          stack['delete'](array);
          stack['delete'](other);
          return result;
        }
        /**
         * A specialized version of `baseIsEqualDeep` for comparing objects of
         * the same `toStringTag`.
         *
         * **Note:** This function only supports comparing values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {string} tag The `toStringTag` of the objects to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} customizer The function to customize comparisons.
         * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */


        function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }

              object = object.buffer;
              other = other.buffer;

            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }

              return true;

            case boolTag:
            case dateTag:
            case numberTag:
              // Coerce booleans to `1` or `0` and dates to milliseconds.
              // Invalid dates are coerced to `NaN`.
              return eq(+object, +other);

            case errorTag:
              return object.name == other.name && object.message == other.message;

            case regexpTag:
            case stringTag:
              // Coerce regexes to strings and treat strings, primitives and objects,
              // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
              // for more details.
              return object == other + '';

            case mapTag:
              var convert = mapToArray;

            case setTag:
              var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
              convert || (convert = setToArray);

              if (object.size != other.size && !isPartial) {
                return false;
              } // Assume cyclic values are equal.


              var stacked = stack.get(object);

              if (stacked) {
                return stacked == other;
              }

              bitmask |= UNORDERED_COMPARE_FLAG; // Recursively compare objects (susceptible to call stack limits).

              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
              stack['delete'](object);
              return result;

            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }

          }

          return false;
        }
        /**
         * A specialized version of `baseIsEqualDeep` for objects with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Function} customizer The function to customize comparisons.
         * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
         *  for more details.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */


        function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
              objProps = keys(object),
              objLength = objProps.length,
              othProps = keys(other),
              othLength = othProps.length;

          if (objLength != othLength && !isPartial) {
            return false;
          }

          var index = objLength;

          while (index--) {
            var key = objProps[index];

            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          } // Assume cyclic values are equal.


          var stacked = stack.get(object);

          if (stacked && stack.get(other)) {
            return stacked == other;
          }

          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;

          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];

            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            } // Recursively compare objects (susceptible to call stack limits).


            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
              result = false;
              break;
            }

            skipCtor || (skipCtor = key == 'constructor');
          }

          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

            if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }

          stack['delete'](object);
          stack['delete'](other);
          return result;
        }
        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */


        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }
        /**
         * Gets the property names, values, and compare flags of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the match data of `object`.
         */


        function getMatchData(object) {
          var result = keys(object),
              length = result.length;

          while (length--) {
            var key = result[length],
                value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }

          return result;
        }
        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */


        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }
        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */


        var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11,
        // for data views in Edge < 14, and promises in Node.js.

        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function getTag(value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : undefined;

            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;

                case mapCtorString:
                  return mapTag;

                case promiseCtorString:
                  return promiseTag;

                case setCtorString:
                  return setTag;

                case weakMapCtorString:
                  return weakMapTag;
              }
            }

            return result;
          };
        }
        /**
         * Checks if `path` exists on `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @param {Function} hasFunc The function to check properties.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         */


        function hasPath(object, path, hasFunc) {
          path = isKey(path, object) ? [path] : castPath(path);
          var result,
              index = -1,
              length = path.length;

          while (++index < length) {
            var key = toKey(path[index]);

            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }

            object = object[key];
          }

          if (result) {
            return result;
          }

          var length = object ? object.length : 0;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        /**
         * Checks if `value` is a flattenable `arguments` object or array.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
         */


        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */


        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        /**
         * Checks if `value` is a property name and not a property path.
         *
         * @private
         * @param {*} value The value to check.
         * @param {Object} [object] The object to query keys on.
         * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
         */


        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }

          var type = typeof value;

          if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
          }

          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */


        function isKeyable(value) {
          var type = typeof value;
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }
        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */


        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */


        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
          return value === proto;
        }
        /**
         * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` if suitable for strict
         *  equality comparisons, else `false`.
         */


        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        /**
         * A specialized version of `matchesProperty` for source values suitable
         * for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         */


        function matchesStrictComparable(key, srcValue) {
          return function (object) {
            if (object == null) {
              return false;
            }

            return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
          };
        }
        /**
         * Converts `string` to a property path array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the property path array.
         */


        var stringToPath = memoize(function (string) {
          string = toString(string);
          var result = [];

          if (reLeadingDot.test(string)) {
            result.push('');
          }

          string.replace(rePropName, function (match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
          });
          return result;
        });
        /**
         * Converts `value` to a string key if it's not a string or symbol.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {string|symbol} Returns the key.
         */

        function toKey(value) {
          if (typeof value == 'string' || isSymbol(value)) {
            return value;
          }

          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }
        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */


        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}

            try {
              return func + '';
            } catch (e) {}
          }

          return '';
        }
        /**
         * Creates a flattened array of values by running each element in `collection`
         * thru `iteratee` and flattening the mapped results. The iteratee is invoked
         * with three arguments: (value, index|key, collection).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity]
         *  The function invoked per iteration.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [n, n];
         * }
         *
         * _.flatMap([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */


        function flatMap(collection, iteratee) {
          return baseFlatten(map(collection, iteratee), 1);
        }
        /**
         * Creates an array of values by running each element in `collection` thru
         * `iteratee`. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * Many lodash methods are guarded to work as iteratees for methods like
         * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
         *
         * The guarded methods are:
         * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
         * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
         * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
         * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         * @example
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * _.map([4, 8], square);
         * // => [16, 64]
         *
         * _.map({ 'a': 4, 'b': 8 }, square);
         * // => [16, 64] (iteration order is not guaranteed)
         *
         * var users = [
         *   { 'user': 'barney' },
         *   { 'user': 'fred' }
         * ];
         *
         * // The `_.property` iteratee shorthand.
         * _.map(users, 'user');
         * // => ['barney', 'fred']
         */


        function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, baseIteratee(iteratee, 3));
        }
        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoized function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */


        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }

          var memoized = function memoized() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
              return cache.get(key);
            }

            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };

          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        } // Assign cache to `_.memoize`.


        memoize.Cache = MapCache;
        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */

        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */


        function isArguments(value) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }
        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */


        var isArray = Array.isArray;
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */

        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */


        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */


        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }
        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */


        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */


        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */


        function isObjectLike(value) {
          return !!value && typeof value == 'object';
        }
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */


        function isSymbol(value) {
          return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }
        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */


        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        /**
         * Converts `value` to a string. An empty string is returned for `null`
         * and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */

        function toString(value) {
          return value == null ? '' : baseToString(value);
        }
        /**
         * Gets the value at `path` of `object`. If the resolved value is
         * `undefined`, the `defaultValue` is returned in its place.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @param {*} [defaultValue] The value returned for `undefined` resolved values.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.get(object, 'a[0].b.c');
         * // => 3
         *
         * _.get(object, ['a', '0', 'b', 'c']);
         * // => 3
         *
         * _.get(object, 'a.b.c', 'default');
         * // => 'default'
         */


        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': 2 }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b');
         * // => true
         *
         * _.hasIn(object, ['a', 'b']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */


        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */


        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        /**
         * This method returns the first argument it receives.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'a': 1 };
         *
         * console.log(_.identity(object) === object);
         * // => true
         */


        function identity(value) {
          return value;
        }
        /**
         * Creates a function that returns the value at `path` of a given object.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new accessor function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': 2 } },
         *   { 'a': { 'b': 1 } }
         * ];
         *
         * _.map(objects, _.property('a.b'));
         * // => [2, 1]
         *
         * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
         * // => [1, 2]
         */


        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }

        module.exports = flatMap;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../webpack/buildin/global.js */
      "yLpj"), __webpack_require__(
      /*! ./../webpack/buildin/module.js */
      "YuTi")(module));
      /***/
    },

    /***/
    "dD9F":
    /*!**************************************************!*\
      !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function dD9F(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(
      /*! ./_baseGetTag */
      "NykK"),
          isLength = __webpack_require__(
      /*! ./isLength */
      "shjB"),
          isObjectLike = __webpack_require__(
      /*! ./isObjectLike */
      "ExA7");
      /** `Object#toString` result references. */


      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          weakMapTag = '[object WeakMap]';
      var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      /** Used to identify `toStringTag` values of typed arrays. */

      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      /**
       * The base implementation of `_.isTypedArray` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       */

      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }

      module.exports = baseIsTypedArray;
      /***/
    },

    /***/
    "dsut":
    /*!***************************************!*\
      !*** ./node_modules/jsonify/index.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function dsut(module, exports, __webpack_require__) {
      exports.parse = __webpack_require__(
      /*! ./lib/parse */
      "RGXH");
      exports.stringify = __webpack_require__(
      /*! ./lib/stringify */
      "uPSP");
      /***/
    },

    /***/
    "ga3E":
    /*!**********************************************!*\
      !*** ./node_modules/ethereumjs-abi/index.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function ga3E(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! ./lib/index.js */
      "6vPO");
      /***/
    },

    /***/
    "hGab":
    /*!******************************************************!*\
      !*** ./node_modules/async/internal/initialParams.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function hGab(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports["default"] = function (fn) {
        return function ()
        /*...args, callback*/
        {
          var args = (0, _slice2["default"])(arguments);
          var callback = args.pop();
          fn.call(this, args, callback);
        };
      };

      var _slice = __webpack_require__(
      /*! ./slice */
      "3qT5");

      var _slice2 = _interopRequireDefault(_slice);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "hyCD":
    /*!********************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/tx-filter.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function hyCD(module, exports, __webpack_require__) {
      var flatMap = __webpack_require__(
      /*! lodash.flatmap */
      "dAl+");

      var BaseFilter = __webpack_require__(
      /*! ./base-filter */
      "zvTS");

      var getBlocksForRange = __webpack_require__(
      /*! ./getBlocksForRange */
      "0QlC");

      var _webpack_require__3 = __webpack_require__(
      /*! ./hexUtils */
      "UJ2e"),
          incrementHexInt = _webpack_require__3.incrementHexInt;

      var TxFilter = /*#__PURE__*/function (_BaseFilter2) {
        _inherits(TxFilter, _BaseFilter2);

        var _super5 = _createSuper(TxFilter);

        function TxFilter(_ref14) {
          var _this12;

          var provider = _ref14.provider;

          _classCallCheck(this, TxFilter);

          _this12 = _super5.call(this);
          _this12.type = 'tx';
          _this12.provider = provider;
          return _this12;
        }

        _createClass(TxFilter, [{
          key: "update",
          value: function () {
            var _update3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(_ref15) {
              var oldBlock, toBlock, fromBlock, blocks, blockTxHashes;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      oldBlock = _ref15.oldBlock;
                      toBlock = oldBlock;
                      fromBlock = incrementHexInt(oldBlock);
                      _context25.next = 5;
                      return getBlocksForRange({
                        provider: this.provider,
                        fromBlock: fromBlock,
                        toBlock: toBlock
                      });

                    case 5:
                      blocks = _context25.sent;
                      blockTxHashes = flatMap(blocks, function (block) {
                        return block.transactions;
                      }); // add to results

                      this.addResults(blockTxHashes);

                    case 8:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function update(_x19) {
              return _update3.apply(this, arguments);
            }

            return update;
          }()
        }]);

        return TxFilter;
      }(BaseFilter);

      module.exports = TxFilter;
      /***/
    },

    /***/
    "j6BP":
    /*!*****************************************************!*\
      !*** ./node_modules/async/internal/withoutIndex.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function j6BP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = _withoutIndex;

      function _withoutIndex(iteratee) {
        return function (value, index, callback) {
          return iteratee(value, callback);
        };
      }

      module.exports = exports["default"];
      /***/
    },

    /***/
    "k2x9":
    /*!*******************************************!*\
      !*** ./node_modules/async/eachOfLimit.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function k2x9(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = eachOfLimit;

      var _eachOfLimit2 = __webpack_require__(
      /*! ./internal/eachOfLimit */
      "NDoG");

      var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);

      var _wrapAsync = __webpack_require__(
      /*! ./internal/wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
       * time.
       *
       * @name eachOfLimit
       * @static
       * @memberOf module:Collections
       * @method
       * @see [async.eachOf]{@link module:Collections.eachOf}
       * @alias forEachOfLimit
       * @category Collection
       * @param {Array|Iterable|Object} coll - A collection to iterate over.
       * @param {number} limit - The maximum number of async operations at a time.
       * @param {AsyncFunction} iteratee - An async function to apply to each
       * item in `coll`. The `key` is the item's key, or index in the case of an
       * array.
       * Invoked with (item, key, callback).
       * @param {Function} [callback] - A callback which is called when all
       * `iteratee` functions have finished, or an error occurs. Invoked with (err).
       */


      function eachOfLimit(coll, limit, iteratee, callback) {
        (0, _eachOfLimit3["default"])(limit)(coll, (0, _wrapAsync2["default"])(iteratee), callback);
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "kekF":
    /*!*****************************************!*\
      !*** ./node_modules/lodash/_overArg.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function kekF(module, exports) {
      /**
       * Creates a unary function that invokes `func` with its argument transformed.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {Function} transform The argument transform.
       * @returns {Function} Returns the new function.
       */
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }

      module.exports = overArg;
      /***/
    },

    /***/
    "l1gh":
    /*!*****************************************!*\
      !*** ./node_modules/async/waterfall.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function l1gh(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports["default"] = function (tasks, callback) {
        callback = (0, _once2["default"])(callback || _noop2["default"]);
        if (!(0, _isArray2["default"])(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
        if (!tasks.length) return callback();
        var taskIndex = 0;

        function nextTask(args) {
          var task = (0, _wrapAsync2["default"])(tasks[taskIndex++]);
          args.push((0, _onlyOnce2["default"])(next));
          task.apply(null, args);
        }

        function next(err
        /*, ...args*/
        ) {
          if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
          }

          nextTask((0, _slice2["default"])(arguments, 1));
        }

        nextTask([]);
      };

      var _isArray = __webpack_require__(
      /*! lodash/isArray */
      "Z0cm");

      var _isArray2 = _interopRequireDefault(_isArray);

      var _noop = __webpack_require__(
      /*! lodash/noop */
      "vN+2");

      var _noop2 = _interopRequireDefault(_noop);

      var _once = __webpack_require__(
      /*! ./internal/once */
      "2sf1");

      var _once2 = _interopRequireDefault(_once);

      var _slice = __webpack_require__(
      /*! ./internal/slice */
      "3qT5");

      var _slice2 = _interopRequireDefault(_slice);

      var _onlyOnce = __webpack_require__(
      /*! ./internal/onlyOnce */
      "rH6r");

      var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

      var _wrapAsync = __webpack_require__(
      /*! ./internal/wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      module.exports = exports['default'];
      /**
       * Runs the `tasks` array of functions in series, each passing their results to
       * the next in the array. However, if any of the `tasks` pass an error to their
       * own callback, the next function is not executed, and the main `callback` is
       * immediately called with the error.
       *
       * @name waterfall
       * @static
       * @memberOf module:ControlFlow
       * @method
       * @category Control Flow
       * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
       * to run.
       * Each function should complete with any number of `result` values.
       * The `result` values will be passed as arguments, in order, to the next task.
       * @param {Function} [callback] - An optional callback to run once all the
       * functions have completed. This will be passed the results of the last task's
       * callback. Invoked with (err, [results]).
       * @returns undefined
       * @example
       *
       * async.waterfall([
       *     function(callback) {
       *         callback(null, 'one', 'two');
       *     },
       *     function(arg1, arg2, callback) {
       *         // arg1 now equals 'one' and arg2 now equals 'two'
       *         callback(null, 'three');
       *     },
       *     function(arg1, callback) {
       *         // arg1 now equals 'three'
       *         callback(null, 'done');
       *     }
       * ], function (err, result) {
       *     // result now equals 'done'
       * });
       *
       * // Or, with named functions:
       * async.waterfall([
       *     myFirstFunction,
       *     mySecondFunction,
       *     myLastFunction,
       * ], function (err, result) {
       *     // result now equals 'done'
       * });
       * function myFirstFunction(callback) {
       *     callback(null, 'one', 'two');
       * }
       * function mySecondFunction(arg1, arg2, callback) {
       *     // arg1 now equals 'one' and arg2 now equals 'two'
       *     callback(null, 'three');
       * }
       * function myLastFunction(arg1, callback) {
       *     // arg1 now equals 'three'
       *     callback(null, 'done');
       * }
       */

      /***/
    },

    /***/
    "lSCD":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/isFunction.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function lSCD(module, exports, __webpack_require__) {
      var baseGetTag = __webpack_require__(
      /*! ./_baseGetTag */
      "NykK"),
          isObject = __webpack_require__(
      /*! ./isObject */
      "GoyQ");
      /** `Object#toString` result references. */


      var asyncTag = '[object AsyncFunction]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          proxyTag = '[object Proxy]';
      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */

      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        } // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.


        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }

      module.exports = isFunction;
      /***/
    },

    /***/
    "mdPL":
    /*!******************************************!*\
      !*** ./node_modules/lodash/_nodeUtil.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function mdPL(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (module) {
        var freeGlobal = __webpack_require__(
        /*! ./_freeGlobal */
        "WFqU");
        /** Detect free variable `exports`. */


        var freeExports = true && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Detect free variable `process` from Node.js. */

        var freeProcess = moduleExports && freeGlobal.process;
        /** Used to access faster Node.js helpers. */

        var nodeUtil = function () {
          try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule && freeModule.require && freeModule.require('util').types;

            if (types) {
              return types;
            } // Legacy `process.binding('util')` for Node.js < 10.


            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          } catch (e) {}
        }();

        module.exports = nodeUtil;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../webpack/buildin/module.js */
      "YuTi")(module));
      /***/
    },

    /***/
    "nmnc":
    /*!****************************************!*\
      !*** ./node_modules/lodash/_Symbol.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function nmnc(module, exports, __webpack_require__) {
      var root = __webpack_require__(
      /*! ./_root */
      "Kz5y");
      /** Built-in value references. */


      var Symbol = root.Symbol;
      module.exports = Symbol;
      /***/
    },

    /***/
    "oEkW":
    /*!****************************************************!*\
      !*** ./node_modules/async/internal/getIterator.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function oEkW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports["default"] = function (coll) {
        return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
      };

      var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;
      module.exports = exports['default'];
      /***/
    },

    /***/
    "odnP":
    /*!*************************************************!*\
      !*** ./node_modules/semaphore/lib/semaphore.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function odnP(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (process) {
        ;

        (function (global) {
          'use strict';

          var nextTick = function nextTick(fn) {
            setTimeout(fn, 0);
          };

          if (typeof process != 'undefined' && process && typeof process.nextTick == 'function') {
            // node.js and the like
            nextTick = process.nextTick;
          }

          function semaphore(capacity) {
            var semaphore = {
              capacity: capacity || 1,
              current: 0,
              queue: [],
              firstHere: false,
              take: function take() {
                if (semaphore.firstHere === false) {
                  semaphore.current++;
                  semaphore.firstHere = true;
                  var isFirst = 1;
                } else {
                  var isFirst = 0;
                }

                var item = {
                  n: 1
                };

                if (typeof arguments[0] == 'function') {
                  item.task = arguments[0];
                } else {
                  item.n = arguments[0];
                }

                if (arguments.length >= 2) {
                  if (typeof arguments[1] == 'function') item.task = arguments[1];else item.n = arguments[1];
                }

                var task = item.task;

                item.task = function () {
                  task(semaphore.leave);
                };

                if (semaphore.current + item.n - isFirst > semaphore.capacity) {
                  if (isFirst === 1) {
                    semaphore.current--;
                    semaphore.firstHere = false;
                  }

                  return semaphore.queue.push(item);
                }

                semaphore.current += item.n - isFirst;
                item.task(semaphore.leave);
                if (isFirst === 1) semaphore.firstHere = false;
              },
              leave: function leave(n) {
                n = n || 1;
                semaphore.current -= n;

                if (!semaphore.queue.length) {
                  if (semaphore.current < 0) {
                    throw new Error('leave called too many times.');
                  }

                  return;
                }

                var item = semaphore.queue[0];

                if (item.n + semaphore.current > semaphore.capacity) {
                  return;
                }

                semaphore.queue.shift();
                semaphore.current += item.n;
                nextTick(item.task);
              },
              available: function available(n) {
                n = n || 1;
                return semaphore.current + n <= semaphore.capacity;
              }
            };
            return semaphore;
          }

          ;

          if (true) {
            // node export
            module.exports = semaphore;
          } else {}
        })(this);
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../process/browser.js */
      "8oxB"));
      /***/
    },

    /***/
    "rE/H":
    /*!*****************************************************!*\
      !*** ./node_modules/json-stable-stringify/index.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function rEH(module, exports, __webpack_require__) {
      var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(
      /*! jsonify */
      "dsut");

      module.exports = function (obj, opts) {
        if (!opts) opts = {};
        if (typeof opts === 'function') opts = {
          cmp: opts
        };
        var space = opts.space || '';
        if (typeof space === 'number') space = Array(space + 1).join(' ');
        var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;

        var replacer = opts.replacer || function (key, value) {
          return value;
        };

        var cmp = opts.cmp && function (f) {
          return function (node) {
            return function (a, b) {
              var aobj = {
                key: a,
                value: node[a]
              };
              var bobj = {
                key: b,
                value: node[b]
              };
              return f(aobj, bobj);
            };
          };
        }(opts.cmp);

        var seen = [];
        return function stringify(parent, key, node, level) {
          var indent = space ? '\n' + new Array(level + 1).join(space) : '';
          var colonSeparator = space ? ': ' : ':';

          if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
          }

          node = replacer.call(parent, key, node);

          if (node === undefined) {
            return;
          }

          if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
          }

          if (isArray(node)) {
            var out = [];

            for (var i = 0; i < node.length; i++) {
              var item = stringify(node, i, node[i], level + 1) || json.stringify(null);
              out.push(indent + space + item);
            }

            return '[' + out.join(',') + indent + ']';
          } else {
            if (seen.indexOf(node) !== -1) {
              if (cycles) return json.stringify('__cycle__');
              throw new TypeError('Converting circular structure to JSON');
            } else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var value = stringify(node, key, node[key], level + 1);
              if (!value) continue;
              var keyValue = json.stringify(key) + colonSeparator + value;
              ;
              out.push(indent + space + keyValue);
            }

            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
          }
        }({
          '': obj
        }, '', obj, 0);
      };

      var isArray = Array.isArray || function (x) {
        return {}.toString.call(x) === '[object Array]';
      };

      var objectKeys = Object.keys || function (obj) {
        var has = Object.prototype.hasOwnProperty || function () {
          return true;
        };

        var keys = [];

        for (var key in obj) {
          if (has.call(obj, key)) keys.push(key);
        }

        return keys;
      };
      /***/

    },

    /***/
    "rH6r":
    /*!*************************************************!*\
      !*** ./node_modules/async/internal/onlyOnce.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function rH6r(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = onlyOnce;

      function onlyOnce(fn) {
        return function () {
          if (fn === null) throw new Error("Callback was already called.");
          var callFn = fn;
          fn = null;
          callFn.apply(this, arguments);
        };
      }

      module.exports = exports["default"];
      /***/
    },

    /***/
    "rW7p":
    /*!***********************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/block-filter.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function rW7p(module, exports, __webpack_require__) {
      var BaseFilter = __webpack_require__(
      /*! ./base-filter */
      "zvTS");

      var getBlocksForRange = __webpack_require__(
      /*! ./getBlocksForRange */
      "0QlC");

      var _webpack_require__4 = __webpack_require__(
      /*! ./hexUtils */
      "UJ2e"),
          incrementHexInt = _webpack_require__4.incrementHexInt;

      var BlockFilter = /*#__PURE__*/function (_BaseFilter3) {
        _inherits(BlockFilter, _BaseFilter3);

        var _super6 = _createSuper(BlockFilter);

        function BlockFilter(_ref16) {
          var _this13;

          var provider = _ref16.provider,
              params = _ref16.params;

          _classCallCheck(this, BlockFilter);

          _this13 = _super6.call(this);
          _this13.type = 'block';
          _this13.provider = provider;
          return _this13;
        }

        _createClass(BlockFilter, [{
          key: "update",
          value: function () {
            var _update4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(_ref17) {
              var oldBlock, newBlock, toBlock, fromBlock, blockBodies, blockHashes;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      oldBlock = _ref17.oldBlock, newBlock = _ref17.newBlock;
                      toBlock = newBlock;
                      fromBlock = incrementHexInt(oldBlock);
                      _context26.next = 5;
                      return getBlocksForRange({
                        provider: this.provider,
                        fromBlock: fromBlock,
                        toBlock: toBlock
                      });

                    case 5:
                      blockBodies = _context26.sent;
                      blockHashes = blockBodies.map(function (block) {
                        return block.hash;
                      });
                      this.addResults(blockHashes);

                    case 8:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function update(_x20) {
              return _update4.apply(this, arguments);
            }

            return update;
          }()
        }]);

        return BlockFilter;
      }(BaseFilter);

      module.exports = BlockFilter;
      /***/
    },

    /***/
    "rdBT":
    /*!***********************************************!*\
      !*** ./node_modules/await-semaphore/index.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function rdBT(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (process, setImmediate) {
        var Semaphore = /*#__PURE__*/function () {
          function Semaphore(count) {
            _classCallCheck(this, Semaphore);

            this.tasks = [];
            this.count = count;
          }

          _createClass(Semaphore, [{
            key: "sched",
            value: function sched() {
              if (this.count > 0 && this.tasks.length > 0) {
                this.count--;
                var next = this.tasks.shift();

                if (next === undefined) {
                  throw "Unexpected undefined value in tasks list";
                }

                next();
              }
            }
          }, {
            key: "acquire",
            value: function acquire() {
              var _this14 = this;

              return new Promise(function (res, rej) {
                var task = function task() {
                  var released = false;
                  res(function () {
                    if (!released) {
                      released = true;
                      _this14.count++;

                      _this14.sched();
                    }
                  });
                };

                _this14.tasks.push(task);

                if (process && process.nextTick) {
                  process.nextTick(_this14.sched.bind(_this14));
                } else {
                  setImmediate(_this14.sched.bind(_this14));
                }
              });
            }
          }, {
            key: "use",
            value: function use(f) {
              return this.acquire().then(function (release) {
                return f().then(function (res) {
                  release();
                  return res;
                })["catch"](function (err) {
                  release();
                  throw err;
                });
              });
            }
          }]);

          return Semaphore;
        }();

        exports.Semaphore = Semaphore;

        var Mutex = /*#__PURE__*/function (_Semaphore) {
          _inherits(Mutex, _Semaphore);

          var _super7 = _createSuper(Mutex);

          function Mutex() {
            _classCallCheck(this, Mutex);

            return _super7.call(this, 1);
          }

          return Mutex;
        }(Semaphore);

        exports.Mutex = Mutex; //# sourceMappingURL=index.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../process/browser.js */
      "8oxB"), __webpack_require__(
      /*! ./../timers-browserify/main.js */
      "URgk").setImmediate);
      /***/
    },

    /***/
    "sEf8":
    /*!*******************************************!*\
      !*** ./node_modules/lodash/_baseUnary.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function sEf8(module, exports) {
      /**
       * The base implementation of `_.unary` without support for storing metadata.
       *
       * @private
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       */
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }

      module.exports = baseUnary;
      /***/
    },

    /***/
    "shjB":
    /*!*****************************************!*\
      !*** ./node_modules/lodash/isLength.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function shjB(module, exports) {
      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;
      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */

      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }

      module.exports = isLength;
      /***/
    },

    /***/
    "t7TP":
    /*!******************************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/subscriptionManager.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function t7TP(module, exports, __webpack_require__) {
      var SafeEventEmitter = __webpack_require__(
      /*! safe-event-emitter */
      "y2lW");

      var createScaffoldMiddleware = __webpack_require__(
      /*! eth-json-rpc-middleware/scaffold */
      "VJGR");

      var createAsyncMiddleware = __webpack_require__(
      /*! json-rpc-engine/src/createAsyncMiddleware */
      "w92A");

      var createFilterMiddleware = __webpack_require__(
      /*! ./index.js */
      "2nhq");

      var _webpack_require__5 = __webpack_require__(
      /*! ./hexUtils.js */
      "UJ2e"),
          unsafeRandomBytes = _webpack_require__5.unsafeRandomBytes,
          incrementHexInt = _webpack_require__5.incrementHexInt;

      var getBlocksForRange = __webpack_require__(
      /*! ./getBlocksForRange.js */
      "0QlC");

      module.exports = createSubscriptionMiddleware;

      function createSubscriptionMiddleware(_ref18) {
        var blockTracker = _ref18.blockTracker,
            provider = _ref18.provider;
        // state and utilities for handling subscriptions
        var subscriptions = {};
        var filterManager = createFilterMiddleware({
          blockTracker: blockTracker,
          provider: provider
        }); // internal flag

        var isDestroyed = false; // create subscriptionManager api object

        var events = new SafeEventEmitter();
        var middleware = createScaffoldMiddleware({
          eth_subscribe: createAsyncMiddleware(subscribe),
          eth_unsubscribe: createAsyncMiddleware(unsubscribe)
        });
        middleware.destroy = destroy;
        return {
          events: events,
          middleware: middleware
        };

        function subscribe(_x21, _x22) {
          return _subscribe.apply(this, arguments);
        }

        function _subscribe() {
          _subscribe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(req, res) {
            var subscriptionType, subId, sub, filterParams, filter, createSubNewHeads, createSubFromFilter;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    createSubFromFilter = function _createSubFromFilter(_ref21) {
                      var subId = _ref21.subId,
                          filter = _ref21.filter;
                      filter.on('update', function (result) {
                        return _emitSubscriptionResult(subId, result);
                      });
                      var sub = {
                        type: subscriptionType,
                        destroy: function () {
                          var _destroy2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                            return regeneratorRuntime.wrap(function _callee29$(_context29) {
                              while (1) {
                                switch (_context29.prev = _context29.next) {
                                  case 0:
                                    _context29.next = 2;
                                    return filterManager.uninstallFilter(filter.idHex);

                                  case 2:
                                    return _context29.abrupt("return", _context29.sent);

                                  case 3:
                                  case "end":
                                    return _context29.stop();
                                }
                              }
                            }, _callee29);
                          }));

                          function destroy() {
                            return _destroy2.apply(this, arguments);
                          }

                          return destroy;
                        }()
                      };
                      return sub;
                    };

                    createSubNewHeads = function _createSubNewHeads(_ref19) {
                      var subId = _ref19.subId;
                      var sub = {
                        type: subscriptionType,
                        destroy: function () {
                          var _destroy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                            return regeneratorRuntime.wrap(function _callee27$(_context27) {
                              while (1) {
                                switch (_context27.prev = _context27.next) {
                                  case 0:
                                    blockTracker.removeListener('sync', sub.update);

                                  case 1:
                                  case "end":
                                    return _context27.stop();
                                }
                              }
                            }, _callee27);
                          }));

                          function destroy() {
                            return _destroy.apply(this, arguments);
                          }

                          return destroy;
                        }(),
                        update: function () {
                          var _update5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(_ref20) {
                            var oldBlock, newBlock, toBlock, fromBlock, rawBlocks, results;
                            return regeneratorRuntime.wrap(function _callee28$(_context28) {
                              while (1) {
                                switch (_context28.prev = _context28.next) {
                                  case 0:
                                    oldBlock = _ref20.oldBlock, newBlock = _ref20.newBlock;
                                    // for newHeads
                                    toBlock = newBlock;
                                    fromBlock = incrementHexInt(oldBlock);
                                    _context28.next = 5;
                                    return getBlocksForRange({
                                      provider: provider,
                                      fromBlock: fromBlock,
                                      toBlock: toBlock
                                    });

                                  case 5:
                                    rawBlocks = _context28.sent;
                                    results = rawBlocks.map(normalizeBlock);
                                    results.forEach(function (value) {
                                      _emitSubscriptionResult(subId, value);
                                    });

                                  case 8:
                                  case "end":
                                    return _context28.stop();
                                }
                              }
                            }, _callee28);
                          }));

                          function update(_x25) {
                            return _update5.apply(this, arguments);
                          }

                          return update;
                        }()
                      }; // check for subscription updates on new block

                      blockTracker.on('sync', sub.update);
                      return sub;
                    };

                    if (!isDestroyed) {
                      _context30.next = 4;
                      break;
                    }

                    throw new Error('SubscriptionManager - attempting to use after destroying');

                  case 4:
                    subscriptionType = req.params[0]; // subId is 16 byte hex string

                    subId = unsafeRandomBytes(16); // create sub

                    _context30.t0 = subscriptionType;
                    _context30.next = _context30.t0 === 'newHeads' ? 9 : _context30.t0 === 'logs' ? 11 : 17;
                    break;

                  case 9:
                    sub = createSubNewHeads({
                      subId: subId
                    });
                    return _context30.abrupt("break", 18);

                  case 11:
                    filterParams = req.params[1];
                    _context30.next = 14;
                    return filterManager.newLogFilter(filterParams);

                  case 14:
                    filter = _context30.sent;
                    sub = createSubFromFilter({
                      subId: subId,
                      filter: filter
                    });
                    return _context30.abrupt("break", 18);

                  case 17:
                    throw new Error("SubscriptionManager - unsupported subscription type \"".concat(subscriptionType, "\""));

                  case 18:
                    subscriptions[subId] = sub;
                    res.result = subId;
                    return _context30.abrupt("return");

                  case 21:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30);
          }));
          return _subscribe.apply(this, arguments);
        }

        function unsubscribe(_x23, _x24) {
          return _unsubscribe.apply(this, arguments);
        }

        function _unsubscribe() {
          _unsubscribe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(req, res) {
            var id, subscription;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    if (!isDestroyed) {
                      _context31.next = 2;
                      break;
                    }

                    throw new Error('SubscriptionManager - attempting to use after destroying');

                  case 2:
                    id = req.params[0];
                    subscription = subscriptions[id]; // if missing, return "false" to indicate it was not removed

                    if (subscription) {
                      _context31.next = 7;
                      break;
                    }

                    res.result = false;
                    return _context31.abrupt("return");

                  case 7:
                    // cleanup subscription
                    delete subscriptions[id];
                    _context31.next = 10;
                    return subscription.destroy();

                  case 10:
                    res.result = true;

                  case 11:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31);
          }));
          return _unsubscribe.apply(this, arguments);
        }

        function _emitSubscriptionResult(filterIdHex, value) {
          events.emit('notification', {
            jsonrpc: '2.0',
            method: 'eth_subscription',
            params: {
              subscription: filterIdHex,
              result: value
            }
          });
        }

        function destroy() {
          events.removeAllListeners();

          for (var id in subscriptions) {
            subscriptions[id].destroy();
            delete subscriptions[id];
          }

          isDestroyed = true;
        }
      }

      function normalizeBlock(block) {
        return {
          hash: block.hash,
          parentHash: block.parentHash,
          sha3Uncles: block.sha3Uncles,
          miner: block.miner,
          stateRoot: block.stateRoot,
          transactionsRoot: block.transactionsRoot,
          receiptsRoot: block.receiptsRoot,
          logsBloom: block.logsBloom,
          difficulty: block.difficulty,
          number: block.number,
          gasLimit: block.gasLimit,
          gasUsed: block.gasUsed,
          nonce: block.nonce,
          mixHash: block.mixHash,
          timestamp: block.timestamp,
          extraData: block.extraData
        };
      }
      /***/

    },

    /***/
    "tMv7":
    /*!*****************************************!*\
      !*** ./node_modules/async/eachLimit.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function tMv7(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = eachLimit;

      var _eachOfLimit = __webpack_require__(
      /*! ./internal/eachOfLimit */
      "NDoG");

      var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

      var _withoutIndex = __webpack_require__(
      /*! ./internal/withoutIndex */
      "j6BP");

      var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

      var _wrapAsync = __webpack_require__(
      /*! ./internal/wrapAsync */
      "aR5N");

      var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
       *
       * @name eachLimit
       * @static
       * @memberOf module:Collections
       * @method
       * @see [async.each]{@link module:Collections.each}
       * @alias forEachLimit
       * @category Collection
       * @param {Array|Iterable|Object} coll - A collection to iterate over.
       * @param {number} limit - The maximum number of async operations at a time.
       * @param {AsyncFunction} iteratee - An async function to apply to each item in
       * `coll`.
       * The array index is not passed to the iteratee.
       * If you need the index, use `eachOfLimit`.
       * Invoked with (item, callback).
       * @param {Function} [callback] - A callback which is called when all
       * `iteratee` functions have finished, or an error occurs. Invoked with (err).
       */


      function eachLimit(coll, limit, iteratee, callback) {
        (0, _eachOfLimit2["default"])(limit)(coll, (0, _withoutIndex2["default"])((0, _wrapAsync2["default"])(iteratee)), callback);
      }

      module.exports = exports['default'];
      /***/
    },

    /***/
    "tnHP":
    /*!****************************************************!*\
      !*** ./node_modules/ethereumjs-util/dist/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function tnHP(module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      var _require = __webpack_require__(
      /*! ethereum-cryptography/keccak */
      "wzGL"),
          keccak224 = _require.keccak224,
          keccak384 = _require.keccak384,
          k256 = _require.keccak256,
          keccak512 = _require.keccak512;

      var secp256k1 = __webpack_require__(
      /*! ./secp256k1-adapter */
      "FLwF");

      var assert = __webpack_require__(
      /*! assert */
      "9lTW");

      var rlp = __webpack_require__(
      /*! rlp */
      "o8pB");

      var BN = __webpack_require__(
      /*! bn.js */
      "9gnv");

      var createHash = __webpack_require__(
      /*! create-hash */
      "mObS");

      var Buffer = __webpack_require__(
      /*! safe-buffer */
      "hwdV").Buffer;

      Object.assign(exports, __webpack_require__(
      /*! ethjs-util */
      "mhLr"));
      /**
       * the max integer that this VM can handle (a ```BN```)
       * @var {BN} MAX_INTEGER
       */

      exports.MAX_INTEGER = new BN('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
      /**
       * 2^256 (a ```BN```)
       * @var {BN} TWO_POW256
       */

      exports.TWO_POW256 = new BN('10000000000000000000000000000000000000000000000000000000000000000', 16);
      /**
       * Keccak-256 hash of null (a ```String```)
       * @var {String} KECCAK256_NULL_S
       */

      exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
      exports.SHA3_NULL_S = exports.KECCAK256_NULL_S;
      /**
       * Keccak-256 hash of null (a ```Buffer```)
       * @var {Buffer} KECCAK256_NULL
       */

      exports.KECCAK256_NULL = Buffer.from(exports.KECCAK256_NULL_S, 'hex');
      exports.SHA3_NULL = exports.KECCAK256_NULL;
      /**
       * Keccak-256 of an RLP of an empty array (a ```String```)
       * @var {String} KECCAK256_RLP_ARRAY_S
       */

      exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
      exports.SHA3_RLP_ARRAY_S = exports.KECCAK256_RLP_ARRAY_S;
      /**
       * Keccak-256 of an RLP of an empty array (a ```Buffer```)
       * @var {Buffer} KECCAK256_RLP_ARRAY
       */

      exports.KECCAK256_RLP_ARRAY = Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
      exports.SHA3_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY;
      /**
       * Keccak-256 hash of the RLP of null  (a ```String```)
       * @var {String} KECCAK256_RLP_S
       */

      exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
      exports.SHA3_RLP_S = exports.KECCAK256_RLP_S;
      /**
       * Keccak-256 hash of the RLP of null (a ```Buffer```)
       * @var {Buffer} KECCAK256_RLP
       */

      exports.KECCAK256_RLP = Buffer.from(exports.KECCAK256_RLP_S, 'hex');
      exports.SHA3_RLP = exports.KECCAK256_RLP;
      /**
       * [`BN`](https://github.com/indutny/bn.js)
       * @var {Function}
       */

      exports.BN = BN;
      /**
       * [`rlp`](https://github.com/ethereumjs/rlp)
       * @var {Function}
       */

      exports.rlp = rlp;
      /**
       * [`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)
       * @var {Object}
       */

      exports.secp256k1 = secp256k1;
      /**
       * Returns a buffer filled with 0s
       * @method zeros
       * @param {Number} bytes  the number of bytes the buffer should be
       * @return {Buffer}
       */

      exports.zeros = function (bytes) {
        return Buffer.allocUnsafe(bytes).fill(0);
      };
      /**
        * Returns a zero address
        * @method zeroAddress
        * @return {String}
        */


      exports.zeroAddress = function () {
        var addressLength = 20;
        var zeroAddress = exports.zeros(addressLength);
        return exports.bufferToHex(zeroAddress);
      };
      /**
       * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
       * Or it truncates the beginning if it exceeds.
       * @method lsetLength
       * @param {Buffer|Array} msg the value to pad
       * @param {Number} length the number of bytes the output should be
       * @param {Boolean} [right=false] whether to start padding form the left or right
       * @return {Buffer|Array}
       */


      exports.setLengthLeft = exports.setLength = function (msg, length, right) {
        var buf = exports.zeros(length);
        msg = exports.toBuffer(msg);

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
      };
      /**
       * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
       * Or it truncates the beginning if it exceeds.
       * @param {Buffer|Array} msg the value to pad
       * @param {Number} length the number of bytes the output should be
       * @return {Buffer|Array}
       */


      exports.setLengthRight = function (msg, length) {
        return exports.setLength(msg, length, true);
      };
      /**
       * Trims leading zeros from a `Buffer` or an `Array`
       * @param {Buffer|Array|String} a
       * @return {Buffer|Array|String}
       */


      exports.unpad = exports.stripZeros = function (a) {
        a = exports.stripHexPrefix(a);
        var first = a[0];

        while (a.length > 0 && first.toString() === '0') {
          a = a.slice(1);
          first = a[0];
        }

        return a;
      };
      /**
       * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
       * @param {*} v the value
       */


      exports.toBuffer = function (v) {
        if (!Buffer.isBuffer(v)) {
          if (Array.isArray(v)) {
            v = Buffer.from(v);
          } else if (typeof v === 'string') {
            if (exports.isHexString(v)) {
              v = Buffer.from(exports.padToEven(exports.stripHexPrefix(v)), 'hex');
            } else {
              v = Buffer.from(v);
            }
          } else if (typeof v === 'number') {
            v = exports.intToBuffer(v);
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
      };
      /**
       * Converts a `Buffer` to a `Number`
       * @param {Buffer} buf
       * @return {Number}
       * @throws If the input number exceeds 53 bits.
       */


      exports.bufferToInt = function (buf) {
        return new BN(exports.toBuffer(buf)).toNumber();
      };
      /**
       * Converts a `Buffer` into a hex `String`
       * @param {Buffer} buf
       * @return {String}
       */


      exports.bufferToHex = function (buf) {
        buf = exports.toBuffer(buf);
        return '0x' + buf.toString('hex');
      };
      /**
       * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
       * @param {Buffer} num
       * @return {BN}
       */


      exports.fromSigned = function (num) {
        return new BN(num).fromTwos(256);
      };
      /**
       * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
       * @param {BN} num
       * @return {Buffer}
       */


      exports.toUnsigned = function (num) {
        return Buffer.from(num.toTwos(256).toArray());
      };
      /**
       * Creates Keccak hash of the input
       * @param {Buffer|Array|String|Number} a the input data
       * @param {Number} [bits=256] the Keccak width
       * @return {Buffer}
       */


      exports.keccak = function (a, bits) {
        a = exports.toBuffer(a);
        if (!bits) bits = 256;

        switch (bits) {
          case 224:
            {
              return keccak224(a);
            }

          case 256:
            {
              return k256(a);
            }

          case 384:
            {
              return keccak384(a);
            }

          case 512:
            {
              return keccak512(a);
            }

          default:
            {
              throw new Error('Invald algorithm: keccak' + bits);
            }
        }
      };
      /**
       * Creates Keccak-256 hash of the input, alias for keccak(a, 256)
       * @param {Buffer|Array|String|Number} a the input data
       * @return {Buffer}
       */


      exports.keccak256 = function (a) {
        return exports.keccak(a);
      };
      /**
       * Creates SHA-3 (Keccak) hash of the input [OBSOLETE]
       * @param {Buffer|Array|String|Number} a the input data
       * @param {Number} [bits=256] the SHA-3 width
       * @return {Buffer}
       */


      exports.sha3 = exports.keccak;
      /**
       * Creates SHA256 hash of the input
       * @param {Buffer|Array|String|Number} a the input data
       * @return {Buffer}
       */

      exports.sha256 = function (a) {
        a = exports.toBuffer(a);
        return createHash('sha256').update(a).digest();
      };
      /**
       * Creates RIPEMD160 hash of the input
       * @param {Buffer|Array|String|Number} a the input data
       * @param {Boolean} padded whether it should be padded to 256 bits or not
       * @return {Buffer}
       */


      exports.ripemd160 = function (a, padded) {
        a = exports.toBuffer(a);
        var hash = createHash('rmd160').update(a).digest();

        if (padded === true) {
          return exports.setLength(hash, 32);
        } else {
          return hash;
        }
      };
      /**
       * Creates SHA-3 hash of the RLP encoded version of the input
       * @param {Buffer|Array|String|Number} a the input data
       * @return {Buffer}
       */


      exports.rlphash = function (a) {
        return exports.keccak(rlp.encode(a));
      };
      /**
       * Checks if the private key satisfies the rules of the curve secp256k1.
       * @param {Buffer} privateKey
       * @return {Boolean}
       */


      exports.isValidPrivate = function (privateKey) {
        return secp256k1.privateKeyVerify(privateKey);
      };
      /**
       * Checks if the public key satisfies the rules of the curve secp256k1
       * and the requirements of Ethereum.
       * @param {Buffer} publicKey The two points of an uncompressed key, unless sanitize is enabled
       * @param {Boolean} [sanitize=false] Accept public keys in other formats
       * @return {Boolean}
       */


      exports.isValidPublic = function (publicKey, sanitize) {
        if (publicKey.length === 64) {
          // Convert to SEC1 for secp256k1
          return secp256k1.publicKeyVerify(Buffer.concat([Buffer.from([4]), publicKey]));
        }

        if (!sanitize) {
          return false;
        }

        return secp256k1.publicKeyVerify(publicKey);
      };
      /**
       * Returns the ethereum address of a given public key.
       * Accepts "Ethereum public keys" and SEC1 encoded keys.
       * @param {Buffer} pubKey The two points of an uncompressed key, unless sanitize is enabled
       * @param {Boolean} [sanitize=false] Accept public keys in other formats
       * @return {Buffer}
       */


      exports.pubToAddress = exports.publicToAddress = function (pubKey, sanitize) {
        pubKey = exports.toBuffer(pubKey);

        if (sanitize && pubKey.length !== 64) {
          pubKey = secp256k1.publicKeyConvert(pubKey, false).slice(1);
        }

        assert(pubKey.length === 64); // Only take the lower 160bits of the hash

        return exports.keccak(pubKey).slice(-20);
      };
      /**
       * Returns the ethereum public key of a given private key
       * @param {Buffer} privateKey A private key must be 256 bits wide
       * @return {Buffer}
       */


      var privateToPublic = exports.privateToPublic = function (privateKey) {
        privateKey = exports.toBuffer(privateKey); // skip the type flag and use the X, Y points

        return secp256k1.publicKeyCreate(privateKey, false).slice(1);
      };
      /**
       * Converts a public key to the Ethereum format.
       * @param {Buffer} publicKey
       * @return {Buffer}
       */


      exports.importPublic = function (publicKey) {
        publicKey = exports.toBuffer(publicKey);

        if (publicKey.length !== 64) {
          publicKey = secp256k1.publicKeyConvert(publicKey, false).slice(1);
        }

        return publicKey;
      };
      /**
       * ECDSA sign
       * @param {Buffer} msgHash
       * @param {Buffer} privateKey
       * @return {Object}
       */


      exports.ecsign = function (msgHash, privateKey) {
        var sig = secp256k1.sign(msgHash, privateKey);
        var ret = {};
        ret.r = sig.signature.slice(0, 32);
        ret.s = sig.signature.slice(32, 64);
        ret.v = sig.recovery + 27;
        return ret;
      };
      /**
       * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
       * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
       * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
       * used to produce the signature.
       * @param message
       * @returns {Buffer} hash
       */


      exports.hashPersonalMessage = function (message) {
        var prefix = exports.toBuffer('\x19Ethereum Signed Message:\n' + message.length.toString());
        return exports.keccak(Buffer.concat([prefix, message]));
      };
      /**
       * ECDSA public key recovery from signature
       * @param {Buffer} msgHash
       * @param {Number} v
       * @param {Buffer} r
       * @param {Buffer} s
       * @return {Buffer} publicKey
       */


      exports.ecrecover = function (msgHash, v, r, s) {
        var signature = Buffer.concat([exports.setLength(r, 32), exports.setLength(s, 32)], 64);
        var recovery = v - 27;

        if (recovery !== 0 && recovery !== 1) {
          throw new Error('Invalid signature v value');
        }

        var senderPubKey = secp256k1.recover(msgHash, signature, recovery);
        return secp256k1.publicKeyConvert(senderPubKey, false).slice(1);
      };
      /**
       * Convert signature parameters into the format of `eth_sign` RPC method
       * @param {Number} v
       * @param {Buffer} r
       * @param {Buffer} s
       * @return {String} sig
       */


      exports.toRpcSig = function (v, r, s) {
        // NOTE: with potential introduction of chainId this might need to be updated
        if (v !== 27 && v !== 28) {
          throw new Error('Invalid recovery id');
        } // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin
        // FIXME: this might change in the future - https://github.com/ethereum/go-ethereum/issues/2053


        return exports.bufferToHex(Buffer.concat([exports.setLengthLeft(r, 32), exports.setLengthLeft(s, 32), exports.toBuffer(v - 27)]));
      };
      /**
       * Convert signature format of the `eth_sign` RPC method to signature parameters
       * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
       * @param {String} sig
       * @return {Object}
       */


      exports.fromRpcSig = function (sig) {
        sig = exports.toBuffer(sig); // NOTE: with potential introduction of chainId this might need to be updated

        if (sig.length !== 65) {
          throw new Error('Invalid signature length');
        }

        var v = sig[64]; // support both versions of `eth_sign` responses

        if (v < 27) {
          v += 27;
        }

        return {
          v: v,
          r: sig.slice(0, 32),
          s: sig.slice(32, 64)
        };
      };
      /**
       * Returns the ethereum address of a given private key
       * @param {Buffer} privateKey A private key must be 256 bits wide
       * @return {Buffer}
       */


      exports.privateToAddress = function (privateKey) {
        return exports.publicToAddress(privateToPublic(privateKey));
      };
      /**
       * Checks if the address is a valid. Accepts checksummed addresses too
       * @param {String} address
       * @return {Boolean}
       */


      exports.isValidAddress = function (address) {
        return /^0x[0-9a-fA-F]{40}$/.test(address);
      };
      /**
        * Checks if a given address is a zero address
        * @method isZeroAddress
        * @param {String} address
        * @return {Boolean}
        */


      exports.isZeroAddress = function (address) {
        var zeroAddress = exports.zeroAddress();
        return zeroAddress === exports.addHexPrefix(address);
      };
      /**
       * Returns a checksummed address
       * @param {String} address
       * @return {String}
       */


      exports.toChecksumAddress = function (address) {
        address = exports.stripHexPrefix(address).toLowerCase();
        var hash = exports.keccak(address).toString('hex');
        var ret = '0x';

        for (var i = 0; i < address.length; i++) {
          if (parseInt(hash[i], 16) >= 8) {
            ret += address[i].toUpperCase();
          } else {
            ret += address[i];
          }
        }

        return ret;
      };
      /**
       * Checks if the address is a valid checksummed address
       * @param {Buffer} address
       * @return {Boolean}
       */


      exports.isValidChecksumAddress = function (address) {
        return exports.isValidAddress(address) && exports.toChecksumAddress(address) === address;
      };
      /**
       * Generates an address of a newly created contract
       * @param {Buffer} from the address which is creating this new address
       * @param {Buffer} nonce the nonce of the from account
       * @return {Buffer}
       */


      exports.generateAddress = function (from, nonce) {
        from = exports.toBuffer(from);
        nonce = new BN(nonce);

        if (nonce.isZero()) {
          // in RLP we want to encode null in the case of zero nonce
          // read the RLP documentation for an answer if you dare
          nonce = null;
        } else {
          nonce = Buffer.from(nonce.toArray());
        } // Only take the lower 160bits of the hash


        return exports.rlphash([from, nonce]).slice(-20);
      };
      /**
       * Returns true if the supplied address belongs to a precompiled account (Byzantium)
       * @param {Buffer|String} address
       * @return {Boolean}
       */


      exports.isPrecompiled = function (address) {
        var a = exports.unpad(address);
        return a.length === 1 && a[0] >= 1 && a[0] <= 8;
      };
      /**
       * Adds "0x" to a given `String` if it does not already start with "0x"
       * @param {String} str
       * @return {String}
       */


      exports.addHexPrefix = function (str) {
        if (typeof str !== 'string') {
          return str;
        }

        return exports.isHexPrefixed(str) ? str : '0x' + str;
      };
      /**
       * Validate ECDSA signature
       * @method isValidSignature
       * @param {Buffer} v
       * @param {Buffer} r
       * @param {Buffer} s
       * @param {Boolean} [homestead=true]
       * @return {Boolean}
       */


      exports.isValidSignature = function (v, r, s, homestead) {
        var SECP256K1_N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
        var SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);

        if (r.length !== 32 || s.length !== 32) {
          return false;
        }

        if (v !== 27 && v !== 28) {
          return false;
        }

        r = new BN(r);
        s = new BN(s);

        if (r.isZero() || r.gt(SECP256K1_N) || s.isZero() || s.gt(SECP256K1_N)) {
          return false;
        }

        if (homestead === false && new BN(s).cmp(SECP256K1_N_DIV_2) === 1) {
          return false;
        }

        return true;
      };
      /**
       * Converts a `Buffer` or `Array` to JSON
       * @param {Buffer|Array} ba
       * @return {Array|String|null}
       */


      exports.baToJSON = function (ba) {
        if (Buffer.isBuffer(ba)) {
          return '0x' + ba.toString('hex');
        } else if (ba instanceof Array) {
          var array = [];

          for (var i = 0; i < ba.length; i++) {
            array.push(exports.baToJSON(ba[i]));
          }

          return array;
        }
      };
      /**
       * Defines properties on a `Object`. It make the assumption that underlying data is binary.
       * @param {Object} self the `Object` to define properties on
       * @param {Array} fields an array fields to define. Fields can contain:
       * * `name` - the name of the properties
       * * `length` - the number of bytes the field can have
       * * `allowLess` - if the field can be less than the length
       * * `allowEmpty`
       * @param {*} data data to be validated against the definitions
       */


      exports.defineProperties = function (self, fields, data) {
        self.raw = [];
        self._fields = []; // attach the `toJSON`

        self.toJSON = function (label) {
          if (label) {
            var obj = {};

            self._fields.forEach(function (field) {
              obj[field] = '0x' + self[field].toString('hex');
            });

            return obj;
          }

          return exports.baToJSON(this.raw);
        };

        self.serialize = function serialize() {
          return rlp.encode(self.raw);
        };

        fields.forEach(function (field, i) {
          self._fields.push(field.name);

          function getter() {
            return self.raw[i];
          }

          function setter(v) {
            v = exports.toBuffer(v);

            if (v.toString('hex') === '00' && !field.allowZero) {
              v = Buffer.allocUnsafe(0);
            }

            if (field.allowLess && field.length) {
              v = exports.stripZeros(v);
              assert(field.length >= v.length, 'The field ' + field.name + ' must not have more ' + field.length + ' bytes');
            } else if (!(field.allowZero && v.length === 0) && field.length) {
              assert(field.length === v.length, 'The field ' + field.name + ' must have byte length of ' + field.length);
            }

            self.raw[i] = v;
          }

          Object.defineProperty(self, field.name, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter
          });

          if (field["default"]) {
            self[field.name] = field["default"];
          } // attach alias


          if (field.alias) {
            Object.defineProperty(self, field.alias, {
              enumerable: false,
              configurable: true,
              set: setter,
              get: getter
            });
          }
        }); // if the constuctor is passed data

        if (data) {
          if (typeof data === 'string') {
            data = Buffer.from(exports.stripHexPrefix(data), 'hex');
          }

          if (Buffer.isBuffer(data)) {
            data = rlp.decode(data);
          }

          if (Array.isArray(data)) {
            if (data.length > self._fields.length) {
              throw new Error('wrong number of fields in data');
            } // make sure all the items are buffers


            data.forEach(function (d, i) {
              self[self._fields[i]] = exports.toBuffer(d);
            });
          } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            var keys = Object.keys(data);
            fields.forEach(function (field) {
              if (keys.indexOf(field.name) !== -1) self[field.name] = data[field.name];
              if (keys.indexOf(field.alias) !== -1) self[field.alias] = data[field.alias];
            });
          } else {
            throw new Error('invalid data');
          }
        }
      };
      /***/

    },

    /***/
    "uPSP":
    /*!***********************************************!*\
      !*** ./node_modules/jsonify/lib/stringify.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function uPSP(module, exports) {
      var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          gap,
          indent,
          meta = {
        // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
      },
          rep;

      function quote(string) {
        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
          var c = meta[a];
          return typeof c === 'string' ? c : "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
      }

      function str(key, holder) {
        // Produce a string from holder[key].
        var i,
            // The loop counter.
        k,
            // The member key.
        v,
            // The member value.
        length,
            mind = gap,
            partial,
            value = holder[key]; // If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
          value = value.toJSON(key);
        } // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.


        if (typeof rep === 'function') {
          value = rep.call(holder, key, value);
        } // What happens next depends on the value's type.


        switch (typeof value) {
          case 'string':
            return quote(value);

          case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';

          case 'boolean':
          case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);

          case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = []; // Array.isArray

            if (Object.prototype.toString.apply(value) === '[object Array]') {
              length = value.length;

              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || 'null';
              } // Join all of the elements together, separated with commas, and
              // wrap them in brackets.


              v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
              gap = mind;
              return v;
            } // If the replacer is an array, use it to select the members to be
            // stringified.


            if (rep && typeof rep === 'object') {
              length = rep.length;

              for (i = 0; i < length; i += 1) {
                k = rep[i];

                if (typeof k === 'string') {
                  v = str(k, value);

                  if (v) {
                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                  }
                }
              }
            } else {
              // Otherwise, iterate through all of the keys in the object.
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = str(k, value);

                  if (v) {
                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                  }
                }
              }
            } // Join all of the member texts together, separated with commas,
            // and wrap them in braces.


            v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
      }

      module.exports = function (value, replacer, space) {
        var i;
        gap = '';
        indent = ''; // If the space parameter is a number, make an indent string containing that
        // many spaces.

        if (typeof space === 'number') {
          for (i = 0; i < space; i += 1) {
            indent += ' ';
          }
        } // If the space parameter is a string, it will be used as the indent string.
        else if (typeof space === 'string') {
            indent = space;
          } // If there is a replacer, it must be a function or an array.
        // Otherwise, throw an error.


        rep = replacer;

        if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
          throw new Error('JSON.stringify');
        } // Make a fake root object containing our value under the key of ''.
        // Return the result of stringifying the value.


        return str('', {
          '': value
        });
      };
      /***/

    },

    /***/
    "vN+2":
    /*!*************************************!*\
      !*** ./node_modules/lodash/noop.js ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function vN2(module, exports) {
      /**
       * This method returns `undefined`.
       *
       * @static
       * @memberOf _
       * @since 2.3.0
       * @category Util
       * @example
       *
       * _.times(2, _.noop);
       * // => [undefined, undefined]
       */
      function noop() {// No operation performed.
      }

      module.exports = noop;
      /***/
    },

    /***/
    "w92A":
    /*!*******************************************************************!*\
      !*** ./node_modules/json-rpc-engine/src/createAsyncMiddleware.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function w92A(module, exports) {
      /**
       * JsonRpcEngine only accepts callback-based middleware directly.
       * createAsyncMiddleware exists to enable consumers to pass in async middleware
       * functions.
       *
       * Async middleware have no "end" function. Instead, they "end" if they return
       * without calling "next". Rather than passing in explicit return handlers,
       * async middleware can simply await "next", and perform operations on the
       * response object when execution resumes.
       *
       * To accomplish this, createAsyncMiddleware passes the async middleware a
       * wrapped "next" function. That function calls the internal JsonRpcEngine
       * "next" function with a return handler that resolves a promise when called.
       *
       * The return handler will always be called. Its resolution of the promise
       * enables the control flow described above.
       */
      module.exports = function createAsyncMiddleware(asyncMiddleware) {
        return function (req, res, next, end) {
          // nextPromise is the key to the implementation
          // it is resolved by the return handler passed to the
          // "next" function
          var resolveNextPromise;
          var nextPromise = new Promise(function (resolve) {
            resolveNextPromise = resolve;
          });
          var returnHandlerCallback, nextWasCalled;

          var asyncNext = /*#__PURE__*/function () {
            var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      nextWasCalled = true;
                      next(function (callback) {
                        // eslint-disable-line callback-return
                        returnHandlerCallback = callback;
                        resolveNextPromise();
                      });
                      _context32.next = 4;
                      return nextPromise;

                    case 4:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }));

            return function asyncNext() {
              return _ref22.apply(this, arguments);
            };
          }();

          asyncMiddleware(req, res, asyncNext).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    if (!nextWasCalled) {
                      _context33.next = 6;
                      break;
                    }

                    _context33.next = 3;
                    return nextPromise;

                  case 3:
                    // we must wait until the return handler is called
                    returnHandlerCallback(null);
                    _context33.next = 7;
                    break;

                  case 6:
                    end(null);

                  case 7:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33);
          })))["catch"](function (error) {
            if (returnHandlerCallback) {
              returnHandlerCallback(error);
            } else {
              end(error);
            }
          });
        };
      };
      /***/

    },

    /***/
    "wJg7":
    /*!*****************************************!*\
      !*** ./node_modules/lodash/_isIndex.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function wJg7(module, exports) {
      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;
      /** Used to detect unsigned integer values. */

      var reIsUint = /^(?:0|[1-9]\d*)$/;
      /**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */

      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
      }

      module.exports = isIndex;
      /***/
    },

    /***/
    "y2lW":
    /*!**************************************************!*\
      !*** ./node_modules/safe-event-emitter/index.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function y2lW(module, exports, __webpack_require__) {
      var util = __webpack_require__(
      /*! util */
      "MCLT");

      var EventEmitter = __webpack_require__(
      /*! events/ */
      "+qE3");

      var R = typeof Reflect === 'object' ? Reflect : null;
      var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      module.exports = SafeEventEmitter;

      function SafeEventEmitter() {
        EventEmitter.call(this);
      }

      util.inherits(SafeEventEmitter, EventEmitter);

      SafeEventEmitter.prototype.emit = function (type) {
        // copied from https://github.com/Gozala/events/blob/master/events.js
        // modified lines are commented with "edited:"
        var args = [];

        for (var i = 1; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        var doError = type === 'error';
        var events = this._events;
        if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

        if (doError) {
          var er;
          if (args.length > 0) er = args[0];

          if (er instanceof Error) {
            // Note: The comments on the `throw` lines are intentional, they show
            // up in Node's output if this results in an unhandled exception.
            throw er; // Unhandled 'error' event
          } // At least give some kind of context to the user


          var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
          err.context = er;
          throw err; // Unhandled 'error' event
        }

        var handler = events[type];
        if (handler === undefined) return false;

        if (typeof handler === 'function') {
          // edited: using safeApply
          safeApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);

          for (var i = 0; i < len; ++i) {
            // edited: using safeApply
            safeApply(listeners[i], this, args);
          }
        }

        return true;
      };

      function safeApply(handler, context, args) {
        try {
          ReflectApply(handler, context, args);
        } catch (err) {
          // throw error after timeout so as not to interupt the stack
          setTimeout(function () {
            throw err;
          });
        }
      }

      function arrayClone(arr, n) {
        var copy = new Array(n);

        for (var i = 0; i < n; ++i) {
          copy[i] = arr[i];
        }

        return copy;
      }
      /***/

    },

    /***/
    "zvTS":
    /*!**********************************************************!*\
      !*** ./node_modules/eth-json-rpc-filters/base-filter.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function zvTS(module, exports, __webpack_require__) {
      var SafeEventEmitter = __webpack_require__(
      /*! safe-event-emitter */
      "y2lW");

      var BaseFilter = /*#__PURE__*/function (_SafeEventEmitter2) {
        _inherits(BaseFilter, _SafeEventEmitter2);

        var _super8 = _createSuper(BaseFilter);

        function BaseFilter() {
          var _this15;

          _classCallCheck(this, BaseFilter);

          _this15 = _super8.call(this);
          _this15.updates = [];
          return _this15;
        }

        _createClass(BaseFilter, [{
          key: "initialize",
          value: function () {
            var _initialize2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34);
            }));

            function initialize() {
              return _initialize2.apply(this, arguments);
            }

            return initialize;
          }()
        }, {
          key: "update",
          value: function () {
            var _update6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      throw new Error('BaseFilter - no update method specified');

                    case 1:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35);
            }));

            function update() {
              return _update6.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "addResults",
          value: function addResults(newResults) {
            var _this16 = this;

            this.updates = this.updates.concat(newResults);
            newResults.forEach(function (result) {
              return _this16.emit('update', result);
            });
          }
        }, {
          key: "addInitialResults",
          value: function addInitialResults(newResults) {}
        }, {
          key: "getChangesAndClear",
          value: function getChangesAndClear() {
            var updates = this.updates;
            this.updates = [];
            return updates;
          }
        }]);

        return BaseFilter;
      }(SafeEventEmitter);

      module.exports = BaseFilter;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~authereum~providerEngine-8b8d4e67-js~walletconnect-web3-provider-es5.js.map