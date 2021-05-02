(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~providerEngine-8b8d4e67-js~walletconnect-web3-provider"], {
    /***/
    "/uSP":
    /*!*************************************************************!*\
      !*** ./node_modules/web3-provider-engine/util/stoplight.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function uSP(module, exports, __webpack_require__) {
      var EventEmitter = __webpack_require__(
      /*! events */
      "+qE3").EventEmitter;

      var inherits = __webpack_require__(
      /*! util */
      "MCLT").inherits;

      module.exports = Stoplight;
      inherits(Stoplight, EventEmitter);

      function Stoplight() {
        var self = this;
        EventEmitter.call(self);
        self.isLocked = true;
      }

      Stoplight.prototype.go = function () {
        var self = this;
        self.isLocked = false;
        self.emit('unlock');
      };

      Stoplight.prototype.stop = function () {
        var self = this;
        self.isLocked = true;
        self.emit('lock');
      };

      Stoplight.prototype["await"] = function (fn) {
        var self = this;

        if (self.isLocked) {
          self.once('unlock', fn);
        } else {
          setTimeout(fn);
        }
      };
      /***/

    },

    /***/
    "EqmL":
    /*!*************************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/subscriptions.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function EqmL(module, exports, __webpack_require__) {
      var ProviderSubprovider = __webpack_require__(
      /*! ./json-rpc-engine-middleware */
      "ja2i");

      var createSubscriptionManager = __webpack_require__(
      /*! eth-json-rpc-filters/subscriptionManager */
      "t7TP");

      var SubscriptionsSubprovider = /*#__PURE__*/function (_ProviderSubprovider) {
        _inherits(SubscriptionsSubprovider, _ProviderSubprovider);

        var _super = _createSuper(SubscriptionsSubprovider);

        function SubscriptionsSubprovider() {
          _classCallCheck(this, SubscriptionsSubprovider);

          return _super.call(this, function (_ref) {
            var blockTracker = _ref.blockTracker,
                provider = _ref.provider,
                engine = _ref.engine;

            var _createSubscriptionMa = createSubscriptionManager({
              blockTracker: blockTracker,
              provider: provider
            }),
                events = _createSubscriptionMa.events,
                middleware = _createSubscriptionMa.middleware; // forward subscription events on the engine


            events.on('notification', function (data) {
              return engine.emit('data', null, data);
            }); // return the subscription install/remove middleware

            return middleware;
          });
        }

        return SubscriptionsSubprovider;
      }(ProviderSubprovider);

      module.exports = SubscriptionsSubprovider;
      /***/
    },

    /***/
    "Rlsf":
    /*!*************************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/hooked-wallet.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function Rlsf(module, exports, __webpack_require__) {
      /*
       * Emulate 'eth_accounts' / 'eth_sendTransaction' using 'eth_sendRawTransaction'
       *
       * The two callbacks a user needs to implement are:
       * - getAccounts() -- array of addresses supported
       * - signTransaction(tx) -- sign a raw transaction object
       */
      var waterfall = __webpack_require__(
      /*! async/waterfall */
      "l1gh");

      var parallel = __webpack_require__(
      /*! async/parallel */
      "KWkM");

      var inherits = __webpack_require__(
      /*! util */
      "MCLT").inherits;

      var ethUtil = __webpack_require__(
      /*! ethereumjs-util */
      "tnHP");

      var sigUtil = __webpack_require__(
      /*! eth-sig-util */
      "HtlB");

      var extend = __webpack_require__(
      /*! xtend */
      "U6jy");

      var Semaphore = __webpack_require__(
      /*! semaphore */
      "odnP");

      var Subprovider = __webpack_require__(
      /*! ./subprovider.js */
      "Uu7K");

      var estimateGas = __webpack_require__(
      /*! ../util/estimate-gas.js */
      "a5O3");

      var hexRegex = /^[0-9A-Fa-f]+$/g;
      module.exports = HookedWalletSubprovider; // handles the following RPC methods:
      //   eth_coinbase
      //   eth_accounts
      //   eth_sendTransaction
      //   eth_sign
      //   eth_signTypedData
      //   eth_signTypedData_v3
      //   eth_signTypedData_v4
      //   personal_sign
      //   eth_decryptMessage
      //   encryption_public_key
      //   personal_ecRecover
      //   parity_postTransaction
      //   parity_checkRequest
      //   parity_defaultAccount
      //
      // Tx Signature Flow
      //
      // handleRequest: eth_sendTransaction
      //   validateTransaction (basic validity check)
      //     validateSender (checks that sender is in accounts)
      //   processTransaction (sign tx and submit to network)
      //     approveTransaction (UI approval hook)
      //     checkApproval
      //     finalizeAndSubmitTx (tx signing)
      //       nonceLock.take (bottle neck to ensure atomic nonce)
      //         fillInTxExtras (set fallback gasPrice, nonce, etc)
      //         signTransaction (perform the signature)
      //         publishTransaction (publish signed tx to network)
      //

      inherits(HookedWalletSubprovider, Subprovider);

      function HookedWalletSubprovider(opts) {
        var self = this; // control flow

        self.nonceLock = Semaphore(1); // data lookup

        if (opts.getAccounts) self.getAccounts = opts.getAccounts; // high level override

        if (opts.processTransaction) self.processTransaction = opts.processTransaction;
        if (opts.processMessage) self.processMessage = opts.processMessage;
        if (opts.processPersonalMessage) self.processPersonalMessage = opts.processPersonalMessage;
        if (opts.processTypedMessage) self.processTypedMessage = opts.processTypedMessage; // approval hooks

        self.approveTransaction = opts.approveTransaction || self.autoApprove;
        self.approveMessage = opts.approveMessage || self.autoApprove;
        self.approvePersonalMessage = opts.approvePersonalMessage || self.autoApprove;
        self.approveDecryptMessage = opts.approveDecryptMessage || self.autoApprove;
        self.approveEncryptionPublicKey = opts.approveEncryptionPublicKey || self.autoApprove;
        self.approveTypedMessage = opts.approveTypedMessage || self.autoApprove; // actually perform the signature

        if (opts.signTransaction) self.signTransaction = opts.signTransaction || mustProvideInConstructor('signTransaction');
        if (opts.signMessage) self.signMessage = opts.signMessage || mustProvideInConstructor('signMessage');
        if (opts.signPersonalMessage) self.signPersonalMessage = opts.signPersonalMessage || mustProvideInConstructor('signPersonalMessage');
        if (opts.decryptMessage) self.decryptMessage = opts.decryptMessage || mustProvideInConstructor('decryptMessage');
        if (opts.encryptionPublicKey) self.encryptionPublicKey = opts.encryptionPublicKey || mustProvideInConstructor('encryptionPublicKey');
        if (opts.signTypedMessage) self.signTypedMessage = opts.signTypedMessage || mustProvideInConstructor('signTypedMessage');
        if (opts.recoverPersonalSignature) self.recoverPersonalSignature = opts.recoverPersonalSignature; // publish to network

        if (opts.publishTransaction) self.publishTransaction = opts.publishTransaction; // gas options

        self.estimateGas = opts.estimateGas || self.estimateGas;
        self.getGasPrice = opts.getGasPrice || self.getGasPrice;
      }

      HookedWalletSubprovider.prototype.handleRequest = function (payload, next, end) {
        var self = this;
        self._parityRequests = {};
        self._parityRequestCount = 0; // switch statement is not block scoped
        // sp we cant repeat var declarations

        var txParams, msgParams, extraParams;
        var message, address;

        switch (payload.method) {
          case 'eth_coinbase':
            // process normally
            self.getAccounts(function (err, accounts) {
              if (err) return end(err);
              var result = accounts[0] || null;
              end(null, result);
            });
            return;

          case 'eth_accounts':
            // process normally
            self.getAccounts(function (err, accounts) {
              if (err) return end(err);
              end(null, accounts);
            });
            return;

          case 'eth_sendTransaction':
            txParams = payload.params[0];
            waterfall([function (cb) {
              return self.validateTransaction(txParams, cb);
            }, function (cb) {
              return self.processTransaction(txParams, cb);
            }], end);
            return;

          case 'eth_signTransaction':
            txParams = payload.params[0];
            waterfall([function (cb) {
              return self.validateTransaction(txParams, cb);
            }, function (cb) {
              return self.processSignTransaction(txParams, cb);
            }], end);
            return;

          case 'eth_sign':
            // process normally
            address = payload.params[0];
            message = payload.params[1]; // non-standard "extraParams" to be appended to our "msgParams" obj
            // good place for metadata

            extraParams = payload.params[2] || {};
            msgParams = extend(extraParams, {
              from: address,
              data: message
            });
            waterfall([function (cb) {
              return self.validateMessage(msgParams, cb);
            }, function (cb) {
              return self.processMessage(msgParams, cb);
            }], end);
            return;

          case 'personal_sign':
            return function () {
              // process normally
              var first = payload.params[0];
              var second = payload.params[1]; // We initially incorrectly ordered these parameters.
              // To gracefully respect users who adopted this API early,
              // we are currently gracefully recovering from the wrong param order
              // when it is clearly identifiable.
              //
              // That means when the first param is definitely an address,
              // and the second param is definitely not, but is hex.

              if (resemblesData(second) && resemblesAddress(first)) {
                var warning = "The eth_personalSign method requires params ordered ";
                warning += "[message, address]. This was previously handled incorrectly, ";
                warning += "and has been corrected automatically. ";
                warning += "Please switch this param order for smooth behavior in the future.";
                console.warn(warning);
                address = payload.params[0];
                message = payload.params[1];
              } else {
                message = payload.params[0];
                address = payload.params[1];
              } // non-standard "extraParams" to be appended to our "msgParams" obj
              // good place for metadata


              extraParams = payload.params[2] || {};
              msgParams = extend(extraParams, {
                from: address,
                data: message
              });
              waterfall([function (cb) {
                return self.validatePersonalMessage(msgParams, cb);
              }, function (cb) {
                return self.processPersonalMessage(msgParams, cb);
              }], end);
            }();

          case 'eth_decryptMessage':
            return function () {
              // process normally
              var first = payload.params[0];
              var second = payload.params[1]; // We initially incorrectly ordered these parameters.
              // To gracefully respect users who adopted this API early,
              // we are currently gracefully recovering from the wrong param order
              // when it is clearly identifiable.
              //
              // That means when the first param is definitely an address,
              // and the second param is definitely not, but is hex.

              if (resemblesData(second) && resemblesAddress(first)) {
                var warning = "The eth_decryptMessage method requires params ordered ";
                warning += "[message, address]. This was previously handled incorrectly, ";
                warning += "and has been corrected automatically. ";
                warning += "Please switch this param order for smooth behavior in the future.";
                console.warn(warning);
                address = payload.params[0];
                message = payload.params[1];
              } else {
                message = payload.params[0];
                address = payload.params[1];
              } // non-standard "extraParams" to be appended to our "msgParams" obj
              // good place for metadata


              extraParams = payload.params[2] || {};
              msgParams = extend(extraParams, {
                from: address,
                data: message
              });
              waterfall([function (cb) {
                return self.validateDecryptMessage(msgParams, cb);
              }, function (cb) {
                return self.processDecryptMessage(msgParams, cb);
              }], end);
            }();

          case 'encryption_public_key':
            return function () {
              var address = payload.params[0];
              waterfall([function (cb) {
                return self.validateEncryptionPublicKey(address, cb);
              }, function (cb) {
                return self.processEncryptionPublicKey(address, cb);
              }], end);
            }();

          case 'personal_ecRecover':
            return function () {
              message = payload.params[0];
              var signature = payload.params[1]; // non-standard "extraParams" to be appended to our "msgParams" obj
              // good place for metadata

              extraParams = payload.params[2] || {};
              msgParams = extend(extraParams, {
                sig: signature,
                data: message
              });
              self.recoverPersonalSignature(msgParams, end);
            }();

          case 'eth_signTypedData':
          case 'eth_signTypedData_v3':
          case 'eth_signTypedData_v4':
            return function () {
              // process normally
              var first = payload.params[0];
              var second = payload.params[1];

              if (resemblesAddress(first)) {
                address = first;
                message = second;
              } else {
                message = first;
                address = second;
              }

              extraParams = payload.params[2] || {};
              msgParams = extend(extraParams, {
                from: address,
                data: message
              });
              waterfall([function (cb) {
                return self.validateTypedMessage(msgParams, cb);
              }, function (cb) {
                return self.processTypedMessage(msgParams, cb);
              }], end);
            }();

          case 'parity_postTransaction':
            txParams = payload.params[0];
            self.parityPostTransaction(txParams, end);
            return;

          case 'parity_postSign':
            address = payload.params[0];
            message = payload.params[1];
            self.parityPostSign(address, message, end);
            return;

          case 'parity_checkRequest':
            return function () {
              var requestId = payload.params[0];
              self.parityCheckRequest(requestId, end);
            }();

          case 'parity_defaultAccount':
            self.getAccounts(function (err, accounts) {
              if (err) return end(err);
              var account = accounts[0] || null;
              end(null, account);
            });
            return;

          default:
            next();
            return;
        }
      }; //
      // data lookup
      //


      HookedWalletSubprovider.prototype.getAccounts = function (cb) {
        cb(null, []);
      }; //
      // "process" high level flow
      //


      HookedWalletSubprovider.prototype.processTransaction = function (txParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approveTransaction(txParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('transaction', didApprove, cb);
        }, function (cb) {
          return self.finalizeAndSubmitTx(txParams, cb);
        }], cb);
      };

      HookedWalletSubprovider.prototype.processSignTransaction = function (txParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approveTransaction(txParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('transaction', didApprove, cb);
        }, function (cb) {
          return self.finalizeTx(txParams, cb);
        }], cb);
      };

      HookedWalletSubprovider.prototype.processMessage = function (msgParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approveMessage(msgParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('message', didApprove, cb);
        }, function (cb) {
          return self.signMessage(msgParams, cb);
        }], cb);
      };

      HookedWalletSubprovider.prototype.processPersonalMessage = function (msgParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approvePersonalMessage(msgParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('message', didApprove, cb);
        }, function (cb) {
          return self.signPersonalMessage(msgParams, cb);
        }], cb);
      };

      HookedWalletSubprovider.prototype.processDecryptMessage = function (msgParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approveDecryptMessage(msgParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('decryptMessage', didApprove, cb);
        }, function (cb) {
          return self.decryptMessage(msgParams, cb);
        }], cb);
      };

      HookedWalletSubprovider.prototype.processEncryptionPublicKey = function (msgParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approveEncryptionPublicKey(msgParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('encryptionPublicKey', didApprove, cb);
        }, function (cb) {
          return self.encryptionPublicKey(msgParams, cb);
        }], cb);
      };

      HookedWalletSubprovider.prototype.processTypedMessage = function (msgParams, cb) {
        var self = this;
        waterfall([function (cb) {
          return self.approveTypedMessage(msgParams, cb);
        }, function (didApprove, cb) {
          return self.checkApproval('message', didApprove, cb);
        }, function (cb) {
          return self.signTypedMessage(msgParams, cb);
        }], cb);
      }; //
      // approval
      //


      HookedWalletSubprovider.prototype.autoApprove = function (txParams, cb) {
        cb(null, true);
      };

      HookedWalletSubprovider.prototype.checkApproval = function (type, didApprove, cb) {
        cb(didApprove ? null : new Error('User denied ' + type + ' signature.'));
      }; //
      // parity
      //


      HookedWalletSubprovider.prototype.parityPostTransaction = function (txParams, cb) {
        var self = this; // get next id

        var count = self._parityRequestCount;
        var reqId = "0x".concat(count.toString(16));
        self._parityRequestCount++;
        self.emitPayload({
          method: 'eth_sendTransaction',
          params: [txParams]
        }, function (error, res) {
          if (error) {
            self._parityRequests[reqId] = {
              error: error
            };
            return;
          }

          var txHash = res.result;
          self._parityRequests[reqId] = txHash;
        });
        cb(null, reqId);
      };

      HookedWalletSubprovider.prototype.parityPostSign = function (address, message, cb) {
        var self = this; // get next id

        var count = self._parityRequestCount;
        var reqId = "0x".concat(count.toString(16));
        self._parityRequestCount++;
        self.emitPayload({
          method: 'eth_sign',
          params: [address, message]
        }, function (error, res) {
          if (error) {
            self._parityRequests[reqId] = {
              error: error
            };
            return;
          }

          var result = res.result;
          self._parityRequests[reqId] = result;
        });
        cb(null, reqId);
      };

      HookedWalletSubprovider.prototype.parityCheckRequest = function (reqId, cb) {
        var self = this;
        var result = self._parityRequests[reqId] || null; // tx not handled yet

        if (!result) return cb(null, null); // tx was rejected (or other error)

        if (result.error) return cb(result.error); // tx sent

        cb(null, result);
      }; //
      // signature and recovery
      //


      HookedWalletSubprovider.prototype.recoverPersonalSignature = function (msgParams, cb) {
        var senderHex;

        try {
          senderHex = sigUtil.recoverPersonalSignature(msgParams);
        } catch (err) {
          return cb(err);
        }

        cb(null, senderHex);
      }; //
      // validation
      //


      HookedWalletSubprovider.prototype.validateTransaction = function (txParams, cb) {
        var self = this; // shortcut: undefined sender is invalid

        if (txParams.from === undefined) return cb(new Error("Undefined address - from address required to sign transaction."));
        self.validateSender(txParams.from, function (err, senderIsValid) {
          if (err) return cb(err);
          if (!senderIsValid) return cb(new Error("Unknown address - unable to sign transaction for this address: \"".concat(txParams.from, "\"")));
          cb();
        });
      };

      HookedWalletSubprovider.prototype.validateMessage = function (msgParams, cb) {
        var self = this;
        if (msgParams.from === undefined) return cb(new Error("Undefined address - from address required to sign message."));
        self.validateSender(msgParams.from, function (err, senderIsValid) {
          if (err) return cb(err);
          if (!senderIsValid) return cb(new Error("Unknown address - unable to sign message for this address: \"".concat(msgParams.from, "\"")));
          cb();
        });
      };

      HookedWalletSubprovider.prototype.validatePersonalMessage = function (msgParams, cb) {
        var self = this;
        if (msgParams.from === undefined) return cb(new Error("Undefined address - from address required to sign personal message."));
        if (msgParams.data === undefined) return cb(new Error("Undefined message - message required to sign personal message."));
        if (!isValidHex(msgParams.data)) return cb(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
        self.validateSender(msgParams.from, function (err, senderIsValid) {
          if (err) return cb(err);
          if (!senderIsValid) return cb(new Error("Unknown address - unable to sign message for this address: \"".concat(msgParams.from, "\"")));
          cb();
        });
      };

      HookedWalletSubprovider.prototype.validateDecryptMessage = function (msgParams, cb) {
        var self = this;
        if (msgParams.from === undefined) return cb(new Error("Undefined address - from address required to decrypt message."));
        if (msgParams.data === undefined) return cb(new Error("Undefined message - message required to decrypt message."));
        if (!isValidHex(msgParams.data)) return cb(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."));
        self.validateSender(msgParams.from, function (err, senderIsValid) {
          if (err) return cb(err);
          if (!senderIsValid) return cb(new Error("Unknown address - unable to decrypt message for this address: \"".concat(msgParams.from, "\"")));
          cb();
        });
      };

      HookedWalletSubprovider.prototype.validateEncryptionPublicKey = function (address, cb) {
        var self = this;
        self.validateSender(address, function (err, senderIsValid) {
          if (err) return cb(err);
          if (!senderIsValid) return cb(new Error("Unknown address - unable to obtain encryption public key for this address: \"".concat(address, "\"")));
          cb();
        });
      };

      HookedWalletSubprovider.prototype.validateTypedMessage = function (msgParams, cb) {
        if (msgParams.from === undefined) return cb(new Error("Undefined address - from address required to sign typed data."));
        if (msgParams.data === undefined) return cb(new Error("Undefined data - message required to sign typed data."));
        this.validateSender(msgParams.from, function (err, senderIsValid) {
          if (err) return cb(err);
          if (!senderIsValid) return cb(new Error("Unknown address - unable to sign message for this address: \"".concat(msgParams.from, "\"")));
          cb();
        });
      };

      HookedWalletSubprovider.prototype.validateSender = function (senderAddress, cb) {
        var self = this; // shortcut: undefined sender is invalid

        if (!senderAddress) return cb(null, false);
        self.getAccounts(function (err, accounts) {
          if (err) return cb(err);
          var senderIsValid = accounts.map(toLowerCase).indexOf(senderAddress.toLowerCase()) !== -1;
          cb(null, senderIsValid);
        });
      }; //
      // tx helpers
      //


      HookedWalletSubprovider.prototype.finalizeAndSubmitTx = function (txParams, cb) {
        var self = this; // can only allow one tx to pass through this flow at a time
        // so we can atomically consume a nonce

        self.nonceLock.take(function () {
          waterfall([self.fillInTxExtras.bind(self, txParams), self.signTransaction.bind(self), self.publishTransaction.bind(self)], function (err, txHash) {
            self.nonceLock.leave();
            if (err) return cb(err);
            cb(null, txHash);
          });
        });
      };

      HookedWalletSubprovider.prototype.finalizeTx = function (txParams, cb) {
        var self = this; // can only allow one tx to pass through this flow at a time
        // so we can atomically consume a nonce

        self.nonceLock.take(function () {
          waterfall([self.fillInTxExtras.bind(self, txParams), self.signTransaction.bind(self)], function (err, signedTx) {
            self.nonceLock.leave();
            if (err) return cb(err);
            cb(null, {
              raw: signedTx,
              tx: txParams
            });
          });
        });
      };

      HookedWalletSubprovider.prototype.publishTransaction = function (rawTx, cb) {
        var self = this;
        self.emitPayload({
          method: 'eth_sendRawTransaction',
          params: [rawTx]
        }, function (err, res) {
          if (err) return cb(err);
          cb(null, res.result);
        });
      };

      HookedWalletSubprovider.prototype.estimateGas = function (txParams, cb) {
        var self = this;
        estimateGas(self.engine, txParams, cb);
      };

      HookedWalletSubprovider.prototype.getGasPrice = function (cb) {
        var self = this;
        self.emitPayload({
          method: 'eth_gasPrice',
          params: []
        }, function (err, res) {
          if (err) return cb(err);
          cb(null, res.result);
        });
      };

      HookedWalletSubprovider.prototype.fillInTxExtras = function (txParams, cb) {
        var self = this;
        var address = txParams.from; // console.log('fillInTxExtras - address:', address)

        var tasks = {};

        if (txParams.gasPrice === undefined) {
          // console.log("need to get gasprice")
          tasks.gasPrice = self.getGasPrice.bind(self);
        }

        if (txParams.nonce === undefined) {
          // console.log("need to get nonce")
          tasks.nonce = self.emitPayload.bind(self, {
            method: 'eth_getTransactionCount',
            params: [address, 'pending']
          });
        }

        if (txParams.gas === undefined) {
          // console.log("need to get gas")
          tasks.gas = self.estimateGas.bind(self, cloneTxParams(txParams));
        }

        parallel(tasks, function (err, taskResults) {
          if (err) return cb(err);
          var result = {};
          if (taskResults.gasPrice) result.gasPrice = taskResults.gasPrice;
          if (taskResults.nonce) result.nonce = taskResults.nonce.result;
          if (taskResults.gas) result.gas = taskResults.gas;
          cb(null, extend(txParams, result));
        });
      }; // util
      // we use this to clean any custom params from the txParams


      function cloneTxParams(txParams) {
        return {
          from: txParams.from,
          to: txParams.to,
          value: txParams.value,
          data: txParams.data,
          gas: txParams.gas,
          gasPrice: txParams.gasPrice,
          nonce: txParams.nonce
        };
      }

      function toLowerCase(string) {
        return string.toLowerCase();
      }

      function resemblesAddress(string) {
        var fixed = ethUtil.addHexPrefix(string);
        var isValid = ethUtil.isValidAddress(fixed);
        return isValid;
      } // Returns true if resembles hex data
      // but definitely not a valid address.


      function resemblesData(string) {
        var fixed = ethUtil.addHexPrefix(string);
        var isValidAddress = ethUtil.isValidAddress(fixed);
        return !isValidAddress && isValidHex(string);
      }

      function isValidHex(data) {
        var isString = typeof data === 'string';
        if (!isString) return false;
        var isHexPrefixed = data.slice(0, 2) === '0x';
        if (!isHexPrefixed) return false;
        var nonPrefixed = data.slice(2);
        var isValid = nonPrefixed.match(hexRegex);
        return isValid;
      }

      function mustProvideInConstructor(methodName) {
        return function (params, cb) {
          cb(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + methodName + '" fn in constructor options'));
        };
      }
      /***/

    },

    /***/
    "Uu7K":
    /*!***********************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/subprovider.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function Uu7K(module, exports, __webpack_require__) {
      var createPayload = __webpack_require__(
      /*! ../util/create-payload.js */
      "xQaN");

      module.exports = SubProvider; // this is the base class for a subprovider -- mostly helpers

      function SubProvider() {}

      SubProvider.prototype.setEngine = function (engine) {
        var self = this;
        if (self.engine) return;
        self.engine = engine;
        engine.on('block', function (block) {
          self.currentBlock = block;
        });
        engine.on('start', function () {
          self.start();
        });
        engine.on('stop', function () {
          self.stop();
        });
      };

      SubProvider.prototype.handleRequest = function (payload, next, end) {
        throw new Error('Subproviders should override `handleRequest`.');
      };

      SubProvider.prototype.emitPayload = function (payload, cb) {
        var self = this;
        self.engine.sendAsync(createPayload(payload), cb);
      }; // dummies for overriding


      SubProvider.prototype.stop = function () {};

      SubProvider.prototype.start = function () {};
      /***/

    },

    /***/
    "a5O3":
    /*!****************************************************************!*\
      !*** ./node_modules/web3-provider-engine/util/estimate-gas.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function a5O3(module, exports, __webpack_require__) {
      var createPayload = __webpack_require__(
      /*! ./create-payload.js */
      "xQaN");

      module.exports = estimateGas;
      /*
      
      This is a work around for https://github.com/ethereum/go-ethereum/issues/2577
      
      */

      function estimateGas(provider, txParams, cb) {
        provider.sendAsync(createPayload({
          method: 'eth_estimateGas',
          params: [txParams]
        }), function (err, res) {
          if (err) {
            // handle simple value transfer case
            if (err.message === 'no contract code at given address') {
              return cb(null, '0xcf08');
            } else {
              return cb(err);
            }
          }

          cb(null, res.result);
        });
      }
      /***/

    },

    /***/
    "cC/c":
    /*!*******************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/filters.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function cCC(module, exports, __webpack_require__) {
      var ProviderSubprovider = __webpack_require__(
      /*! ./json-rpc-engine-middleware */
      "ja2i");

      var createFilterMiddleware = __webpack_require__(
      /*! eth-json-rpc-filters */
      "2nhq");

      var SubscriptionsSubprovider = /*#__PURE__*/function (_ProviderSubprovider2) {
        _inherits(SubscriptionsSubprovider, _ProviderSubprovider2);

        var _super2 = _createSuper(SubscriptionsSubprovider);

        function SubscriptionsSubprovider() {
          _classCallCheck(this, SubscriptionsSubprovider);

          return _super2.call(this, function (_ref2) {
            var blockTracker = _ref2.blockTracker,
                provider = _ref2.provider,
                engine = _ref2.engine;
            return createFilterMiddleware({
              blockTracker: blockTracker,
              provider: provider
            });
          });
        }

        return SubscriptionsSubprovider;
      }(ProviderSubprovider);

      module.exports = SubscriptionsSubprovider;
      /***/
    },

    /***/
    "f4g2":
    /*!****************************************************!*\
      !*** ./node_modules/web3-provider-engine/index.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function f4g2(module, exports, __webpack_require__) {
      var EventEmitter = __webpack_require__(
      /*! events */
      "+qE3").EventEmitter;

      var inherits = __webpack_require__(
      /*! util */
      "MCLT").inherits;

      var ethUtil = __webpack_require__(
      /*! ethereumjs-util */
      "tnHP");

      var EthBlockTracker = __webpack_require__(
      /*! eth-block-tracker */
      "V5x4");

      var map = __webpack_require__(
      /*! async/map */
      "LCem");

      var eachSeries = __webpack_require__(
      /*! async/eachSeries */
      "YOJA");

      var Stoplight = __webpack_require__(
      /*! ./util/stoplight.js */
      "/uSP");

      var cacheUtils = __webpack_require__(
      /*! ./util/rpc-cache-utils.js */
      "gO+T");

      var createPayload = __webpack_require__(
      /*! ./util/create-payload.js */
      "xQaN");

      var noop = function noop() {};

      module.exports = Web3ProviderEngine;
      inherits(Web3ProviderEngine, EventEmitter);

      function Web3ProviderEngine(opts) {
        var self = this;
        EventEmitter.call(self);
        self.setMaxListeners(30); // parse options

        opts = opts || {}; // block polling

        var directProvider = {
          sendAsync: self._handleAsync.bind(self)
        };
        var blockTrackerProvider = opts.blockTrackerProvider || directProvider;
        self._blockTracker = opts.blockTracker || new EthBlockTracker({
          provider: blockTrackerProvider,
          pollingInterval: opts.pollingInterval || 4000,
          setSkipCacheFlag: true
        }); // set initialization blocker

        self._ready = new Stoplight(); // local state

        self.currentBlock = null;
        self._providers = [];
      } // public


      Web3ProviderEngine.prototype.start = function () {
        var _this = this;

        var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
        var self = this; // trigger start

        self._ready.go(); // on new block, request block body and emit as events


        self._blockTracker.on('latest', function (blockNumber) {
          // get block body
          self._getBlockByNumberWithRetry(blockNumber, function (err, block) {
            if (err) {
              _this.emit('error', err);

              return;
            }

            if (!block) {
              console.log(block);

              _this.emit('error', new Error("Could not find block"));

              return;
            }

            var bufferBlock = toBufferBlock(block); // set current + emit "block" event

            self._setCurrentBlock(bufferBlock); // emit other events


            self.emit('rawBlock', block);
            self.emit('latest', block);
          });
        }); // forward other events


        self._blockTracker.on('sync', self.emit.bind(self, 'sync'));

        self._blockTracker.on('error', self.emit.bind(self, 'error')); // update state


        self._running = true; // signal that we started

        self.emit('start');
      };

      Web3ProviderEngine.prototype.stop = function () {
        var self = this; // stop block polling by removing event listeners

        self._blockTracker.removeAllListeners(); // update state


        self._running = false; // signal that we stopped

        self.emit('stop');
      };

      Web3ProviderEngine.prototype.isRunning = function () {
        var self = this;
        return self._running;
      };

      Web3ProviderEngine.prototype.addProvider = function (source, index) {
        var self = this;

        if (typeof index === 'number') {
          self._providers.splice(index, 0, source);
        } else {
          self._providers.push(source);
        }

        source.setEngine(this);
      };

      Web3ProviderEngine.prototype.removeProvider = function (source) {
        var self = this;

        var index = self._providers.indexOf(source);

        if (index < 0) throw new Error('Provider not found.');

        self._providers.splice(index, 1);
      };

      Web3ProviderEngine.prototype.send = function (payload) {
        throw new Error('Web3ProviderEngine does not support synchronous requests.');
      };

      Web3ProviderEngine.prototype.sendAsync = function (payload, cb) {
        var self = this;

        self._ready["await"](function () {
          if (Array.isArray(payload)) {
            // handle batch
            map(payload, self._handleAsync.bind(self), cb);
          } else {
            // handle single
            self._handleAsync(payload, cb);
          }
        });
      }; // private


      Web3ProviderEngine.prototype._getBlockByNumberWithRetry = function (blockNumber, cb) {
        var self = this;
        var retriesRemaining = 5;
        attemptRequest();
        return;

        function attemptRequest() {
          self._getBlockByNumber(blockNumber, afterRequest);
        }

        function afterRequest(err, block) {
          // anomalous error occurred
          if (err) return cb(err); // block not ready yet

          if (!block) {
            if (retriesRemaining > 0) {
              // wait 1s then try again
              retriesRemaining--;
              setTimeout(function () {
                attemptRequest();
              }, 1000);
              return;
            } else {
              // give up, return a null block
              cb(null, null);
              return;
            }
          } // otherwise return result


          cb(null, block);
          return;
        }
      };

      Web3ProviderEngine.prototype._getBlockByNumber = function (blockNumber, cb) {
        var req = createPayload({
          method: 'eth_getBlockByNumber',
          params: [blockNumber, false],
          skipCache: true
        });

        this._handleAsync(req, function (err, res) {
          if (err) return cb(err);
          return cb(null, res.result);
        });
      };

      Web3ProviderEngine.prototype._handleAsync = function (payload, finished) {
        var self = this;
        var currentProvider = -1;
        var result = null;
        var error = null;
        var stack = [];
        next();

        function next(after) {
          currentProvider += 1;
          stack.unshift(after); // Bubbled down as far as we could go, and the request wasn't
          // handled. Return an error.

          if (currentProvider >= self._providers.length) {
            end(new Error('Request for method "' + payload.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
          } else {
            try {
              var provider = self._providers[currentProvider];
              provider.handleRequest(payload, next, end);
            } catch (e) {
              end(e);
            }
          }
        }

        function end(_error, _result) {
          error = _error;
          result = _result;
          eachSeries(stack, function (fn, callback) {
            if (fn) {
              fn(error, result, callback);
            } else {
              callback();
            }
          }, function () {
            var resultObj = {
              id: payload.id,
              jsonrpc: payload.jsonrpc,
              result: result
            };

            if (error != null) {
              resultObj.error = {
                message: error.stack || error.message || error,
                code: -32000
              }; // respond with both error formats

              finished(error, resultObj);
            } else {
              finished(null, resultObj);
            }
          });
        }
      }; //
      // from remote-data
      //


      Web3ProviderEngine.prototype._setCurrentBlock = function (block) {
        var self = this;
        self.currentBlock = block;
        self.emit('block', block);
      }; // util


      function toBufferBlock(jsonBlock) {
        return {
          number: ethUtil.toBuffer(jsonBlock.number),
          hash: ethUtil.toBuffer(jsonBlock.hash),
          parentHash: ethUtil.toBuffer(jsonBlock.parentHash),
          nonce: ethUtil.toBuffer(jsonBlock.nonce),
          mixHash: ethUtil.toBuffer(jsonBlock.mixHash),
          sha3Uncles: ethUtil.toBuffer(jsonBlock.sha3Uncles),
          logsBloom: ethUtil.toBuffer(jsonBlock.logsBloom),
          transactionsRoot: ethUtil.toBuffer(jsonBlock.transactionsRoot),
          stateRoot: ethUtil.toBuffer(jsonBlock.stateRoot),
          receiptsRoot: ethUtil.toBuffer(jsonBlock.receiptRoot || jsonBlock.receiptsRoot),
          miner: ethUtil.toBuffer(jsonBlock.miner),
          difficulty: ethUtil.toBuffer(jsonBlock.difficulty),
          totalDifficulty: ethUtil.toBuffer(jsonBlock.totalDifficulty),
          size: ethUtil.toBuffer(jsonBlock.size),
          extraData: ethUtil.toBuffer(jsonBlock.extraData),
          gasLimit: ethUtil.toBuffer(jsonBlock.gasLimit),
          gasUsed: ethUtil.toBuffer(jsonBlock.gasUsed),
          timestamp: ethUtil.toBuffer(jsonBlock.timestamp),
          transactions: jsonBlock.transactions
        };
      }
      /***/

    },

    /***/
    "gO+T":
    /*!*******************************************************************!*\
      !*** ./node_modules/web3-provider-engine/util/rpc-cache-utils.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function gOT(module, exports, __webpack_require__) {
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

      function cacheIdentifierForPayload(payload) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!canCache(payload)) return null;
        var includeBlockRef = opts.includeBlockRef;
        var params = includeBlockRef ? payload.params : paramsWithoutBlockTag(payload);
        return payload.method + ':' + stringify(params);
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
          // blockTag is third param
          case 'eth_getStorageAt':
            return 2;
          // blockTag is second param

          case 'eth_getBalance':
          case 'eth_getCode':
          case 'eth_getTransactionCount':
          case 'eth_call':
          case 'eth_estimateGas':
            return 1;
          // blockTag is first param

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
            return 'perma';
          // cache until fork

          case 'eth_getBlockByNumber':
          case 'eth_getBlockTransactionCountByNumber':
          case 'eth_getUncleCountByBlockNumber':
          case 'eth_getTransactionByBlockNumberAndIndex':
          case 'eth_getUncleByBlockNumberAndIndex':
            return 'fork';
          // cache for block

          case 'eth_gasPrice':
          case 'eth_getBalance':
          case 'eth_getStorageAt':
          case 'eth_getTransactionCount':
          case 'eth_call':
          case 'eth_estimateGas':
          case 'eth_getFilterLogs':
          case 'eth_getLogs':
          case 'eth_blockNumber':
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
            return 'never';
        }
      }
      /***/

    },

    /***/
    "ja2i":
    /*!**************************************************************************************!*\
      !*** ./node_modules/web3-provider-engine/subproviders/json-rpc-engine-middleware.js ***!
      \**************************************************************************************/

    /*! no static exports found */

    /***/
    function ja2i(module, exports, __webpack_require__) {
      var Subprovider = __webpack_require__(
      /*! ./subprovider.js */
      "Uu7K"); // wraps a json-rpc-engine middleware in a subprovider interface


      var JsonRpcEngineMiddlewareSubprovider = /*#__PURE__*/function (_Subprovider) {
        _inherits(JsonRpcEngineMiddlewareSubprovider, _Subprovider);

        var _super3 = _createSuper(JsonRpcEngineMiddlewareSubprovider);

        // take a constructorFn to call once we have a reference to the engine
        function JsonRpcEngineMiddlewareSubprovider(constructorFn) {
          var _this2;

          _classCallCheck(this, JsonRpcEngineMiddlewareSubprovider);

          _this2 = _super3.call(this);
          if (!constructorFn) throw new Error('JsonRpcEngineMiddlewareSubprovider - no constructorFn specified');
          _this2._constructorFn = constructorFn;
          return _this2;
        } // this is called once the subprovider has been added to the provider engine


        _createClass(JsonRpcEngineMiddlewareSubprovider, [{
          key: "setEngine",
          value: function setEngine(engine) {
            if (this.middleware) throw new Error('JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice');
            var blockTracker = engine._blockTracker;

            var middleware = this._constructorFn({
              engine: engine,
              provider: engine,
              blockTracker: blockTracker
            });

            if (!middleware) throw new Error('JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware');
            if (typeof middleware !== 'function') throw new Error('JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function');
            this.middleware = middleware;
          }
        }, {
          key: "handleRequest",
          value: function handleRequest(req, provEngNext, provEngEnd) {
            var res = {
              id: req.id
            };
            this.middleware(req, res, middlewareNext, middlewareEnd);

            function middlewareNext(handler) {
              provEngNext(function (err, result, cb) {
                // update response object with result or error
                if (err) {
                  delete res.result;
                  res.error = {
                    message: err.message || err
                  };
                } else {
                  res.result = result;
                } // call middleware's next handler (even if error)


                if (handler) {
                  handler(cb);
                } else {
                  cb();
                }
              });
            }

            function middlewareEnd(err) {
              if (err) return provEngEnd(err);
              provEngEnd(null, res.result);
            }
          }
        }]);

        return JsonRpcEngineMiddlewareSubprovider;
      }(Subprovider);

      module.exports = JsonRpcEngineMiddlewareSubprovider;
      /***/
    },

    /***/
    "kzD/":
    /*!*************************************************************!*\
      !*** ./node_modules/web3-provider-engine/util/random-id.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function kzD(module, exports) {
      module.exports = createRandomId;

      function createRandomId() {
        // random id
        return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
      }
      /***/

    },

    /***/
    "xQaN":
    /*!******************************************************************!*\
      !*** ./node_modules/web3-provider-engine/util/create-payload.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function xQaN(module, exports, __webpack_require__) {
      var getRandomId = __webpack_require__(
      /*! ./random-id.js */
      "kzD/");

      var extend = __webpack_require__(
      /*! xtend */
      "U6jy");

      module.exports = createPayload;

      function createPayload(data) {
        return extend({
          // defaults
          id: getRandomId(),
          jsonrpc: '2.0',
          params: [] // user-specified

        }, data);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~providerEngine-8b8d4e67-js~walletconnect-web3-provider-es5.js.map