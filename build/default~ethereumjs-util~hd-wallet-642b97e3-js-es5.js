(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ethereumjs-util~hd-wallet-642b97e3-js"], {
    /***/
    "+0CH":
    /*!*******************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/helpers.js ***!
      \*******************************************************************************/

    /*! no static exports found */

    /***/
    function CH(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.assertIsString = exports.assertIsArray = exports.assertIsBuffer = exports.assertIsHexString = void 0;

        var ethjs_util_1 = __webpack_require__(
        /*! ethjs-util */
        "mhLr");
        /**
         * Throws if a string is not hex prefixed
         * @param {string} input string to check hex prefix of
         */


        exports.assertIsHexString = function (input) {
          if (!ethjs_util_1.isHexString(input)) {
            var msg = "This method only supports 0x-prefixed hex strings but input was: " + input;
            throw new Error(msg);
          }
        };
        /**
         * Throws if input is not a buffer
         * @param {Buffer} input value to check
         */


        exports.assertIsBuffer = function (input) {
          if (!Buffer.isBuffer(input)) {
            var msg = "This method only supports Buffer but input was: " + input;
            throw new Error(msg);
          }
        };
        /**
         * Throws if input is not an array
         * @param {number[]} input value to check
         */


        exports.assertIsArray = function (input) {
          if (!Array.isArray(input)) {
            var msg = "This method only supports number arrays but input was: " + input;
            throw new Error(msg);
          }
        };
        /**
         * Throws if input is not a string
         * @param {string} input value to check
         */


        exports.assertIsString = function (input) {
          if (typeof input !== 'string') {
            var msg = "This method only supports strings but input was: " + input;
            throw new Error(msg);
          }
        }; //# sourceMappingURL=helpers.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "0xaF":
    /*!*****************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/bytes.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function xaF(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.baToJSON = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToHex = exports.bufferToInt = exports.toBuffer = exports.unpadHexString = exports.unpadArray = exports.unpadBuffer = exports.setLengthRight = exports.setLengthLeft = exports.zeros = void 0;

        var BN = __webpack_require__(
        /*! bn.js */
        "OZ/i");

        var ethjs_util_1 = __webpack_require__(
        /*! ethjs-util */
        "mhLr");

        var helpers_1 = __webpack_require__(
        /*! ./helpers */
        "+0CH");
        /**
         * Returns a buffer filled with 0s.
         * @param bytes the number of bytes the buffer should be
         */


        exports.zeros = function (bytes) {
          return Buffer.allocUnsafe(bytes).fill(0);
        };
        /**
         * Left Pads a `Buffer` with leading zeros till it has `length` bytes.
         * Or it truncates the beginning if it exceeds.
         * @param msg the value to pad (Buffer)
         * @param length the number of bytes the output should be
         * @return (Buffer)
         */


        exports.setLengthLeft = function (msg, length) {
          helpers_1.assertIsBuffer(msg);
          return setLength(msg, length, false);
        };
        /**
         * Right Pads a `Buffer` with trailing zeros till it has `length` bytes.
         * it truncates the end if it exceeds.
         * @param msg the value to pad (Buffer)
         * @param length the number of bytes the output should be
         * @return (Buffer)
         */


        exports.setLengthRight = function (msg, length) {
          helpers_1.assertIsBuffer(msg);
          return setLength(msg, length, true);
        };
        /**
         * Pads a `Buffer` with zeros till it has `length` bytes.
         * Truncates the beginning or end of input if its length exceeds `length`.
         * @param msg the value to pad (Buffer)
         * @param length the number of bytes the output should be
         * @param right whether to start padding form the left or right
         * @return (Buffer)
         */


        var setLength = function setLength(msg, length, right) {
          var buf = exports.zeros(length);

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
         * Trims leading zeros from a `Buffer`.
         * @param a (Buffer)
         * @return (Buffer)
         */


        exports.unpadBuffer = function (a) {
          helpers_1.assertIsBuffer(a);
          return stripZeros(a);
        };
        /**
         * Trims leading zeros from an `Array` (of numbers).
         * @param a (number[])
         * @return (number[])
         */


        exports.unpadArray = function (a) {
          helpers_1.assertIsArray(a);
          return stripZeros(a);
        };
        /**
         * Trims leading zeros from a hex-prefixed `String`.
         * @param a (String)
         * @return (String)
         */


        exports.unpadHexString = function (a) {
          helpers_1.assertIsHexString(a);
          a = ethjs_util_1.stripHexPrefix(a);
          return stripZeros(a);
        };
        /**
         * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
         * @param a (Buffer|Array|String)
         * @return (Buffer|Array|String)
         */


        var stripZeros = function stripZeros(a) {
          var first = a[0];

          while (a.length > 0 && first.toString() === '0') {
            a = a.slice(1);
            first = a[0];
          }

          return a;
        };
        /**
         * Attempts to turn a value into a `Buffer`.
         * Inputs supported: `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` or `toBuffer()` method.
         * @param v the value
         */


        exports.toBuffer = function (v) {
          if (v === null || v === undefined) {
            return Buffer.allocUnsafe(0);
          }

          if (Buffer.isBuffer(v)) {
            return Buffer.from(v);
          }

          if (Array.isArray(v) || v instanceof Uint8Array) {
            return Buffer.from(v);
          }

          if (typeof v === 'string') {
            if (!ethjs_util_1.isHexString(v)) {
              throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + v);
            }

            return Buffer.from(ethjs_util_1.padToEven(ethjs_util_1.stripHexPrefix(v)), 'hex');
          }

          if (typeof v === 'number') {
            return ethjs_util_1.intToBuffer(v);
          }

          if (BN.isBN(v)) {
            return v.toArrayLike(Buffer);
          }

          if (v.toArray) {
            // converts a BN to a Buffer
            return Buffer.from(v.toArray());
          }

          if (v.toBuffer) {
            return Buffer.from(v.toBuffer());
          }

          throw new Error('invalid type');
        };
        /**
         * Converts a `Buffer` to a `Number`.
         * @param buf `Buffer` object to convert
         * @throws If the input number exceeds 53 bits.
         */


        exports.bufferToInt = function (buf) {
          return new BN(exports.toBuffer(buf)).toNumber();
        };
        /**
         * Converts a `Buffer` into a `0x`-prefixed hex `String`.
         * @param buf `Buffer` object to convert
         */


        exports.bufferToHex = function (buf) {
          buf = exports.toBuffer(buf);
          return '0x' + buf.toString('hex');
        };
        /**
         * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
         * @param num Signed integer value
         */


        exports.fromSigned = function (num) {
          return new BN(num).fromTwos(256);
        };
        /**
         * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
         * @param num
         */


        exports.toUnsigned = function (num) {
          return Buffer.from(num.toTwos(256).toArray());
        };
        /**
         * Adds "0x" to a given `String` if it does not already start with "0x".
         */


        exports.addHexPrefix = function (str) {
          if (typeof str !== 'string') {
            return str;
          }

          return ethjs_util_1.isHexPrefixed(str) ? str : '0x' + str;
        };
        /**
         * Converts a `Buffer` or `Array` to JSON.
         * @param ba (Buffer|Array)
         * @return (Array|String|null)
         */


        exports.baToJSON = function (ba) {
          if (Buffer.isBuffer(ba)) {
            return "0x" + ba.toString('hex');
          } else if (ba instanceof Array) {
            var array = [];

            for (var i = 0; i < ba.length; i++) {
              array.push(exports.baToJSON(ba[i]));
            }

            return array;
          }
        }; //# sourceMappingURL=bytes.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "47gy":
    /*!*********************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/constants.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function gy(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.MAX_INTEGER = void 0;

      var Buffer = __webpack_require__(
      /*! buffer */
      "tjlA").Buffer;

      var BN = __webpack_require__(
      /*! bn.js */
      "OZ/i");
      /**
       * The max integer that this VM can handle
       */


      exports.MAX_INTEGER = new BN('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
      /**
       * 2^256
       */

      exports.TWO_POW256 = new BN('10000000000000000000000000000000000000000000000000000000000000000', 16);
      /**
       * Keccak-256 hash of null
       */

      exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
      /**
       * Keccak-256 hash of null
       */

      exports.KECCAK256_NULL = Buffer.from(exports.KECCAK256_NULL_S, 'hex');
      /**
       * Keccak-256 of an RLP of an empty array
       */

      exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
      /**
       * Keccak-256 of an RLP of an empty array
       */

      exports.KECCAK256_RLP_ARRAY = Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
      /**
       * Keccak-256 hash of the RLP of null
       */

      exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
      /**
       * Keccak-256 hash of the RLP of null
       */

      exports.KECCAK256_RLP = Buffer.from(exports.KECCAK256_RLP_S, 'hex'); //# sourceMappingURL=constants.js.map

      /***/
    },

    /***/
    "4PoC":
    /*!*******************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/account.js ***!
      \*******************************************************************************/

    /*! no static exports found */

    /***/
    function PoC(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.isZeroAddress = exports.zeroAddress = exports.importPublic = exports.privateToPublic = exports.privateToAddress = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isValidAddress = exports.Account = void 0;

        var assert = __webpack_require__(
        /*! assert */
        "9lTW");

        var BN = __webpack_require__(
        /*! bn.js */
        "OZ/i");

        var rlp = __webpack_require__(
        /*! rlp */
        "o8pB");

        var ethjs_util_1 = __webpack_require__(
        /*! ethjs-util */
        "mhLr");

        var constants_1 = __webpack_require__(
        /*! ./constants */
        "47gy");

        var bytes_1 = __webpack_require__(
        /*! ./bytes */
        "0xaF");

        var hash_1 = __webpack_require__(
        /*! ./hash */
        "niIc");

        var helpers_1 = __webpack_require__(
        /*! ./helpers */
        "+0CH");

        var types_1 = __webpack_require__(
        /*! ./types */
        "57w6");

        var _a = __webpack_require__(
        /*! ethereum-cryptography/secp256k1 */
        "IhPl"),
            privateKeyVerify = _a.privateKeyVerify,
            publicKeyCreate = _a.publicKeyCreate,
            publicKeyVerify = _a.publicKeyVerify,
            publicKeyConvert = _a.publicKeyConvert;

        var Account =
        /** @class */
        function () {
          /**
           * This constructor assigns and validates the values.
           * Use the static factory methods to assist in creating an Account from varying data types.
           */
          function Account(nonce, balance, stateRoot, codeHash) {
            if (nonce === void 0) {
              nonce = new BN(0);
            }

            if (balance === void 0) {
              balance = new BN(0);
            }

            if (stateRoot === void 0) {
              stateRoot = constants_1.KECCAK256_RLP;
            }

            if (codeHash === void 0) {
              codeHash = constants_1.KECCAK256_NULL;
            }

            this.nonce = nonce;
            this.balance = balance;
            this.stateRoot = stateRoot;
            this.codeHash = codeHash;

            this._validate();
          }

          Account.fromAccountData = function (accountData) {
            var nonce = accountData.nonce,
                balance = accountData.balance,
                stateRoot = accountData.stateRoot,
                codeHash = accountData.codeHash;
            return new Account(nonce ? new BN(bytes_1.toBuffer(nonce)) : undefined, balance ? new BN(bytes_1.toBuffer(balance)) : undefined, stateRoot ? bytes_1.toBuffer(stateRoot) : undefined, codeHash ? bytes_1.toBuffer(codeHash) : undefined);
          };

          Account.fromRlpSerializedAccount = function (serialized) {
            var values = rlp.decode(serialized);

            if (!Array.isArray(values)) {
              throw new Error('Invalid serialized account input. Must be array');
            }

            return this.fromValuesArray(values);
          };

          Account.fromValuesArray = function (values) {
            var nonce = values[0],
                balance = values[1],
                stateRoot = values[2],
                codeHash = values[3];
            return new Account(nonce ? new BN(nonce) : undefined, balance ? new BN(balance) : undefined, stateRoot, codeHash);
          };

          Account.prototype._validate = function () {
            if (this.nonce.lt(new BN(0))) {
              throw new Error('nonce must be greater than zero');
            }

            if (this.balance.lt(new BN(0))) {
              throw new Error('balance must be greater than zero');
            }

            if (this.stateRoot.length !== 32) {
              throw new Error('stateRoot must have a length of 32');
            }

            if (this.codeHash.length !== 32) {
              throw new Error('codeHash must have a length of 32');
            }
          };
          /**
           * Returns a Buffer Array of the raw Buffers for the account, in order.
           */


          Account.prototype.raw = function () {
            return [types_1.bnToRlp(this.nonce), types_1.bnToRlp(this.balance), this.stateRoot, this.codeHash];
          };
          /**
           * Returns the RLP serialization of the account as a `Buffer`.
           */


          Account.prototype.serialize = function () {
            return rlp.encode(this.raw());
          };
          /**
           * Returns a `Boolean` determining if the account is a contract.
           */


          Account.prototype.isContract = function () {
            return !this.codeHash.equals(constants_1.KECCAK256_NULL);
          };
          /**
           * Returns a `Boolean` determining if the account is empty complying to the definition of
           * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
           * "An account is considered empty when it has no code and zero nonce and zero balance."
           */


          Account.prototype.isEmpty = function () {
            return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(constants_1.KECCAK256_NULL);
          };

          return Account;
        }();

        exports.Account = Account;
        /**
         * Checks if the address is a valid. Accepts checksummed addresses too.
         */

        exports.isValidAddress = function (hexAddress) {
          helpers_1.assertIsHexString(hexAddress);
          return /^0x[0-9a-fA-F]{40}$/.test(hexAddress);
        };
        /**
         * Returns a checksummed address.
         *
         * If a eip1191ChainId is provided, the chainId will be included in the checksum calculation. This
         * has the effect of checksummed addresses for one chain having invalid checksums for others.
         * For more details see [EIP-1191](https://eips.ethereum.org/EIPS/eip-1191).
         *
         * WARNING: Checksums with and without the chainId will differ. As of 2019-06-26, the most commonly
         * used variation in Ethereum was without the chainId. This may change in the future.
         */


        exports.toChecksumAddress = function (hexAddress, eip1191ChainId) {
          helpers_1.assertIsHexString(hexAddress);
          var address = ethjs_util_1.stripHexPrefix(hexAddress).toLowerCase();
          var prefix = eip1191ChainId !== undefined ? eip1191ChainId.toString() + '0x' : '';
          var hash = hash_1.keccakFromString(prefix + address).toString('hex');
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
         * Checks if the address is a valid checksummed address.
         *
         * See toChecksumAddress' documentation for details about the eip1191ChainId parameter.
         */


        exports.isValidChecksumAddress = function (hexAddress, eip1191ChainId) {
          return exports.isValidAddress(hexAddress) && exports.toChecksumAddress(hexAddress, eip1191ChainId) === hexAddress;
        };
        /**
         * Generates an address of a newly created contract.
         * @param from The address which is creating this new address
         * @param nonce The nonce of the from account
         */


        exports.generateAddress = function (from, nonce) {
          helpers_1.assertIsBuffer(from);
          helpers_1.assertIsBuffer(nonce);
          var nonceBN = new BN(nonce);

          if (nonceBN.isZero()) {
            // in RLP we want to encode null in the case of zero nonce
            // read the RLP documentation for an answer if you dare
            return hash_1.rlphash([from, null]).slice(-20);
          } // Only take the lower 160bits of the hash


          return hash_1.rlphash([from, Buffer.from(nonceBN.toArray())]).slice(-20);
        };
        /**
         * Generates an address for a contract created using CREATE2.
         * @param from The address which is creating this new address
         * @param salt A salt
         * @param initCode The init code of the contract being created
         */


        exports.generateAddress2 = function (from, salt, initCode) {
          helpers_1.assertIsBuffer(from);
          helpers_1.assertIsBuffer(salt);
          helpers_1.assertIsBuffer(initCode);
          assert(from.length === 20);
          assert(salt.length === 32);
          var address = hash_1.keccak256(Buffer.concat([Buffer.from('ff', 'hex'), from, salt, hash_1.keccak256(initCode)]));
          return address.slice(-20);
        };
        /**
         * Checks if the private key satisfies the rules of the curve secp256k1.
         */


        exports.isValidPrivate = function (privateKey) {
          return privateKeyVerify(privateKey);
        };
        /**
         * Checks if the public key satisfies the rules of the curve secp256k1
         * and the requirements of Ethereum.
         * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
         * @param sanitize Accept public keys in other formats
         */


        exports.isValidPublic = function (publicKey, sanitize) {
          if (sanitize === void 0) {
            sanitize = false;
          }

          helpers_1.assertIsBuffer(publicKey);

          if (publicKey.length === 64) {
            // Convert to SEC1 for secp256k1
            return publicKeyVerify(Buffer.concat([Buffer.from([4]), publicKey]));
          }

          if (!sanitize) {
            return false;
          }

          return publicKeyVerify(publicKey);
        };
        /**
         * Returns the ethereum address of a given public key.
         * Accepts "Ethereum public keys" and SEC1 encoded keys.
         * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
         * @param sanitize Accept public keys in other formats
         */


        exports.pubToAddress = function (pubKey, sanitize) {
          if (sanitize === void 0) {
            sanitize = false;
          }

          helpers_1.assertIsBuffer(pubKey);

          if (sanitize && pubKey.length !== 64) {
            pubKey = Buffer.from(publicKeyConvert(pubKey, false).slice(1));
          }

          assert(pubKey.length === 64); // Only take the lower 160bits of the hash

          return hash_1.keccak(pubKey).slice(-20);
        };

        exports.publicToAddress = exports.pubToAddress;
        /**
         * Returns the ethereum address of a given private key.
         * @param privateKey A private key must be 256 bits wide
         */

        exports.privateToAddress = function (privateKey) {
          return exports.publicToAddress(exports.privateToPublic(privateKey));
        };
        /**
         * Returns the ethereum public key of a given private key.
         * @param privateKey A private key must be 256 bits wide
         */


        exports.privateToPublic = function (privateKey) {
          helpers_1.assertIsBuffer(privateKey); // skip the type flag and use the X, Y points

          return Buffer.from(publicKeyCreate(privateKey, false)).slice(1);
        };
        /**
         * Converts a public key to the Ethereum format.
         */


        exports.importPublic = function (publicKey) {
          helpers_1.assertIsBuffer(publicKey);

          if (publicKey.length !== 64) {
            publicKey = Buffer.from(publicKeyConvert(publicKey, false).slice(1));
          }

          return publicKey;
        };
        /**
         * Returns the zero address.
         */


        exports.zeroAddress = function () {
          var addressLength = 20;
          var addr = bytes_1.zeros(addressLength);
          return bytes_1.bufferToHex(addr);
        };
        /**
         * Checks if a given address is the zero address.
         */


        exports.isZeroAddress = function (hexAddress) {
          helpers_1.assertIsHexString(hexAddress);
          var zeroAddr = exports.zeroAddress();
          return zeroAddr === hexAddress;
        }; //# sourceMappingURL=account.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "57w6":
    /*!*****************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/types.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function w6(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.bnToRlp = exports.bnToHex = void 0;

        var bytes_1 = __webpack_require__(
        /*! ./bytes */
        "0xaF");
        /**
         * Convert BN to 0x-prefixed hex string.
         */


        function bnToHex(value) {
          return "0x" + value.toString(16);
        }

        exports.bnToHex = bnToHex;
        /**
         * Convert value from BN to RLP (unpadded buffer)
         * @param value value to convert
         */

        function bnToRlp(value) {
          // Using `bn.toArrayLike(Buffer)` instead of `bn.toBuffer()`
          // for compatibility with browserify and similar tools
          return bytes_1.unpadBuffer(value.toArrayLike(Buffer));
        }

        exports.bnToRlp = bnToRlp; //# sourceMappingURL=types.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "OiUL":
    /*!******************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/object.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function OiUL(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.defineProperties = void 0;

        var ethjsUtil = __webpack_require__(
        /*! ethjs-util */
        "mhLr");

        var assert = __webpack_require__(
        /*! assert */
        "9lTW");

        var rlp = __webpack_require__(
        /*! rlp */
        "o8pB");

        var bytes_1 = __webpack_require__(
        /*! ./bytes */
        "0xaF");
        /**
         * Defines properties on a `Object`. It make the assumption that underlying data is binary.
         * @param self the `Object` to define properties on
         * @param fields an array fields to define. Fields can contain:
         * * `name` - the name of the properties
         * * `length` - the number of bytes the field can have
         * * `allowLess` - if the field can be less than the length
         * * `allowEmpty`
         * @param data data to be validated against the definitions
         * @deprecated
         */


        exports.defineProperties = function (self, fields, data) {
          self.raw = [];
          self._fields = []; // attach the `toJSON`

          self.toJSON = function (label) {
            if (label === void 0) {
              label = false;
            }

            if (label) {
              var obj_1 = {};

              self._fields.forEach(function (field) {
                obj_1[field] = "0x" + self[field].toString('hex');
              });

              return obj_1;
            }

            return bytes_1.baToJSON(self.raw);
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
              v = bytes_1.toBuffer(v);

              if (v.toString('hex') === '00' && !field.allowZero) {
                v = Buffer.allocUnsafe(0);
              }

              if (field.allowLess && field.length) {
                v = bytes_1.unpadBuffer(v);
                assert(field.length >= v.length, "The field " + field.name + " must not have more " + field.length + " bytes");
              } else if (!(field.allowZero && v.length === 0) && field.length) {
                assert(field.length === v.length, "The field " + field.name + " must have byte length of " + field.length);
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
              data = Buffer.from(ethjsUtil.stripHexPrefix(data), 'hex');
            }

            if (Buffer.isBuffer(data)) {
              data = rlp.decode(data);
            }

            if (Array.isArray(data)) {
              if (data.length > self._fields.length) {
                throw new Error('wrong number of fields in data');
              } // make sure all the items are buffers


              data.forEach(function (d, i) {
                self[self._fields[i]] = bytes_1.toBuffer(d);
              });
            } else if (typeof data === 'object') {
              var keys_1 = Object.keys(data);
              fields.forEach(function (field) {
                if (keys_1.indexOf(field.name) !== -1) self[field.name] = data[field.name];
                if (keys_1.indexOf(field.alias) !== -1) self[field.alias] = data[field.alias];
              });
            } else {
              throw new Error('invalid data');
            }
          }
        }; //# sourceMappingURL=object.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "YPRe":
    /*!*********************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/signature.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function YPRe(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.hashPersonalMessage = exports.isValidSignature = exports.fromRpcSig = exports.toRpcSig = exports.ecrecover = exports.ecsign = void 0;

        var _a = __webpack_require__(
        /*! ethereum-cryptography/secp256k1 */
        "IhPl"),
            ecdsaSign = _a.ecdsaSign,
            ecdsaRecover = _a.ecdsaRecover,
            publicKeyConvert = _a.publicKeyConvert;

        var BN = __webpack_require__(
        /*! bn.js */
        "OZ/i");

        var bytes_1 = __webpack_require__(
        /*! ./bytes */
        "0xaF");

        var hash_1 = __webpack_require__(
        /*! ./hash */
        "niIc");

        var helpers_1 = __webpack_require__(
        /*! ./helpers */
        "+0CH");
        /**
         * Returns the ECDSA signature of a message hash.
         */


        exports.ecsign = function (msgHash, privateKey, chainId) {
          var sig = ecdsaSign(msgHash, privateKey);
          var recovery = sig.recid;
          var ret = {
            r: Buffer.from(sig.signature.slice(0, 32)),
            s: Buffer.from(sig.signature.slice(32, 64)),
            v: chainId ? recovery + (chainId * 2 + 35) : recovery + 27
          };
          return ret;
        };
        /**
         * ECDSA public key recovery from signature.
         * @returns Recovered public key
         */


        exports.ecrecover = function (msgHash, v, r, s, chainId) {
          var signature = Buffer.concat([bytes_1.setLengthLeft(r, 32), bytes_1.setLengthLeft(s, 32)], 64);
          var recovery = calculateSigRecovery(v, chainId);

          if (!isValidSigRecovery(recovery)) {
            throw new Error('Invalid signature v value');
          }

          var senderPubKey = ecdsaRecover(signature, recovery, msgHash);
          return Buffer.from(publicKeyConvert(senderPubKey, false).slice(1));
        };
        /**
         * Convert signature parameters into the format of `eth_sign` RPC method.
         * @returns Signature
         */


        exports.toRpcSig = function (v, r, s, chainId) {
          var recovery = calculateSigRecovery(v, chainId);

          if (!isValidSigRecovery(recovery)) {
            throw new Error('Invalid signature v value');
          } // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin


          return bytes_1.bufferToHex(Buffer.concat([bytes_1.setLengthLeft(r, 32), bytes_1.setLengthLeft(s, 32), bytes_1.toBuffer(v)]));
        };
        /**
         * Convert signature format of the `eth_sign` RPC method to signature parameters
         * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
         */


        exports.fromRpcSig = function (sig) {
          var buf = bytes_1.toBuffer(sig); // NOTE: with potential introduction of chainId this might need to be updated

          if (buf.length !== 65) {
            throw new Error('Invalid signature length');
          }

          var v = buf[64]; // support both versions of `eth_sign` responses

          if (v < 27) {
            v += 27;
          }

          return {
            v: v,
            r: buf.slice(0, 32),
            s: buf.slice(32, 64)
          };
        };
        /**
         * Validate a ECDSA signature.
         * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
         */


        exports.isValidSignature = function (v, r, s, homesteadOrLater, chainId) {
          if (homesteadOrLater === void 0) {
            homesteadOrLater = true;
          }

          var SECP256K1_N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
          var SECP256K1_N = new BN('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);

          if (r.length !== 32 || s.length !== 32) {
            return false;
          }

          if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
            return false;
          }

          var rBN = new BN(r);
          var sBN = new BN(s);

          if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
            return false;
          }

          if (homesteadOrLater && sBN.cmp(SECP256K1_N_DIV_2) === 1) {
            return false;
          }

          return true;
        };
        /**
         * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
         * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
         * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
         * used to produce the signature.
         */


        exports.hashPersonalMessage = function (message) {
          helpers_1.assertIsBuffer(message);
          var prefix = Buffer.from("\x19Ethereum Signed Message:\n" + message.length.toString(), 'utf-8');
          return hash_1.keccak(Buffer.concat([prefix, message]));
        };

        function calculateSigRecovery(v, chainId) {
          return chainId ? v - (2 * chainId + 35) : v - 27;
        }

        function isValidSigRecovery(recovery) {
          return recovery === 0 || recovery === 1;
        } //# sourceMappingURL=signature.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "ZDeM":
    /*!*****************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/index.js ***!
      \*****************************************************************************/

    /*! no static exports found */

    /***/
    function ZDeM(module, exports, __webpack_require__) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); /// <reference path="./@types/ethjs-util/index.ts"/>

      /**
       * Constants
       */

      __exportStar(__webpack_require__(
      /*! ./constants */
      "47gy"), exports);
      /**
       * Account class and helper functions
       */


      __exportStar(__webpack_require__(
      /*! ./account */
      "4PoC"), exports);
      /**
       * Address type
       */


      __exportStar(__webpack_require__(
      /*! ./address */
      "n6jU"), exports);
      /**
       * Hash functions
       */


      __exportStar(__webpack_require__(
      /*! ./hash */
      "niIc"), exports);
      /**
       * ECDSA signature
       */


      __exportStar(__webpack_require__(
      /*! ./signature */
      "YPRe"), exports);
      /**
       * Utilities for manipulating Buffers, byte arrays, etc.
       */


      __exportStar(__webpack_require__(
      /*! ./bytes */
      "0xaF"), exports);
      /**
       * Function for definining properties on an object
       */


      __exportStar(__webpack_require__(
      /*! ./object */
      "OiUL"), exports);
      /**
       * External exports (BN, rlp, secp256k1)
       */


      __exportStar(__webpack_require__(
      /*! ./externals */
      "w0G5"), exports);
      /**
       * Helpful TypeScript types
       */


      __exportStar(__webpack_require__(
      /*! ./types */
      "57w6"), exports);
      /**
       * Export ethjs-util methods
       */


      __exportStar(__webpack_require__(
      /*! ethjs-util */
      "mhLr"), exports); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "n6jU":
    /*!*******************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/address.js ***!
      \*******************************************************************************/

    /*! no static exports found */

    /***/
    function n6jU(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Address = void 0;

        var assert = __webpack_require__(
        /*! assert */
        "9lTW");

        var BN = __webpack_require__(
        /*! bn.js */
        "OZ/i");

        var bytes_1 = __webpack_require__(
        /*! ./bytes */
        "0xaF");

        var account_1 = __webpack_require__(
        /*! ./account */
        "4PoC");

        var Address =
        /** @class */
        function () {
          function Address(buf) {
            assert(buf.length === 20, 'Invalid address length');
            this.buf = buf;
          }
          /**
           * Returns the zero address.
           */


          Address.zero = function () {
            return new Address(bytes_1.zeros(20));
          };
          /**
           * Returns an Address object from a hex-encoded string.
           * @param str - Hex-encoded address
           */


          Address.fromString = function (str) {
            assert(account_1.isValidAddress(str), 'Invalid address');
            return new Address(bytes_1.toBuffer(str));
          };
          /**
           * Returns an address for a given public key.
           * @param pubKey The two points of an uncompressed key
           */


          Address.fromPublicKey = function (pubKey) {
            assert(Buffer.isBuffer(pubKey), 'Public key should be Buffer');
            var buf = account_1.pubToAddress(pubKey);
            return new Address(buf);
          };
          /**
           * Returns an address for a given private key.
           * @param privateKey A private key must be 256 bits wide
           */


          Address.fromPrivateKey = function (privateKey) {
            assert(Buffer.isBuffer(privateKey), 'Private key should be Buffer');
            var buf = account_1.privateToAddress(privateKey);
            return new Address(buf);
          };
          /**
           * Generates an address for a newly created contract.
           * @param from The address which is creating this new address
           * @param nonce The nonce of the from account
           */


          Address.generate = function (from, nonce) {
            assert(BN.isBN(nonce));
            return new Address(account_1.generateAddress(from.buf, nonce.toArrayLike(Buffer)));
          };
          /**
           * Generates an address for a contract created using CREATE2.
           * @param from The address which is creating this new address
           * @param salt A salt
           * @param initCode The init code of the contract being created
           */


          Address.generate2 = function (from, salt, initCode) {
            assert(Buffer.isBuffer(salt));
            assert(Buffer.isBuffer(initCode));
            return new Address(account_1.generateAddress2(from.buf, salt, initCode));
          };
          /**
           * Is address zero.
           */


          Address.prototype.isZero = function () {
            return this.buf.equals(Address.zero().buf);
          };
          /**
           * Returns hex encoding of address.
           */


          Address.prototype.toString = function () {
            return '0x' + this.buf.toString('hex');
          };
          /**
           * Returns Buffer representation of address.
           */


          Address.prototype.toBuffer = function () {
            return Buffer.from(this.buf);
          };

          return Address;
        }();

        exports.Address = Address; //# sourceMappingURL=address.js.map

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "niIc":
    /*!****************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/hash.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function niIc(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */

      (function (Buffer) {
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.rlphash = exports.ripemd160FromArray = exports.ripemd160FromString = exports.ripemd160 = exports.sha256FromArray = exports.sha256FromString = exports.sha256 = exports.keccakFromArray = exports.keccakFromHexString = exports.keccakFromString = exports.keccak256 = exports.keccak = void 0;

        var _a = __webpack_require__(
        /*! ethereum-cryptography/keccak */
        "wzGL"),
            keccak224 = _a.keccak224,
            keccak384 = _a.keccak384,
            k256 = _a.keccak256,
            keccak512 = _a.keccak512;

        var createHash = __webpack_require__(
        /*! create-hash */
        "mObS");

        var rlp = __webpack_require__(
        /*! rlp */
        "o8pB");

        var bytes_1 = __webpack_require__(
        /*! ./bytes */
        "0xaF");

        var helpers_1 = __webpack_require__(
        /*! ./helpers */
        "+0CH");
        /**
         * Creates Keccak hash of a Buffer input
         * @param a The input data (Buffer)
         * @param bits (number = 256) The Keccak width
         */


        exports.keccak = function (a, bits) {
          if (bits === void 0) {
            bits = 256;
          }

          helpers_1.assertIsBuffer(a);

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
                throw new Error("Invald algorithm: keccak" + bits);
              }
          }
        };
        /**
         * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
         * @param a The input data (Buffer)
         */


        exports.keccak256 = function (a) {
          return exports.keccak(a);
        };
        /**
         * Creates Keccak hash of a utf-8 string input
         * @param a The input data (String)
         * @param bits (number = 256) The Keccak width
         */


        exports.keccakFromString = function (a, bits) {
          if (bits === void 0) {
            bits = 256;
          }

          helpers_1.assertIsString(a);
          var buf = Buffer.from(a, 'utf8');
          return exports.keccak(buf, bits);
        };
        /**
         * Creates Keccak hash of an 0x-prefixed string input
         * @param a The input data (String)
         * @param bits (number = 256) The Keccak width
         */


        exports.keccakFromHexString = function (a, bits) {
          if (bits === void 0) {
            bits = 256;
          }

          helpers_1.assertIsHexString(a);
          return exports.keccak(bytes_1.toBuffer(a), bits);
        };
        /**
         * Creates Keccak hash of a number array input
         * @param a The input data (number[])
         * @param bits (number = 256) The Keccak width
         */


        exports.keccakFromArray = function (a, bits) {
          if (bits === void 0) {
            bits = 256;
          }

          helpers_1.assertIsArray(a);
          return exports.keccak(bytes_1.toBuffer(a), bits);
        };
        /**
         * Creates SHA256 hash of a Buffer input.
         * @param a The input data (Buffer)
         */


        exports.sha256 = function (a) {
          helpers_1.assertIsBuffer(a);
          return _sha256(a);
        };
        /**
         * Creates SHA256 hash of a string input.
         * @param a The input data (string)
         */


        exports.sha256FromString = function (a) {
          helpers_1.assertIsString(a);
          return _sha256(a);
        };
        /**
         * Creates SHA256 hash of a number[] input.
         * @param a The input data (number[])
         */


        exports.sha256FromArray = function (a) {
          helpers_1.assertIsArray(a);
          return _sha256(a);
        };
        /**
         * Creates SHA256 hash of an input.
         * @param  a The input data (Buffer|Array|String)
         */


        var _sha256 = function _sha256(a) {
          a = bytes_1.toBuffer(a);
          return createHash('sha256').update(a).digest();
        };
        /**
         * Creates RIPEMD160 hash of a Buffer input.
         * @param a The input data (Buffer)
         * @param padded Whether it should be padded to 256 bits or not
         */


        exports.ripemd160 = function (a, padded) {
          helpers_1.assertIsBuffer(a);
          return _ripemd160(a, padded);
        };
        /**
         * Creates RIPEMD160 hash of a string input.
         * @param a The input data (String)
         * @param padded Whether it should be padded to 256 bits or not
         */


        exports.ripemd160FromString = function (a, padded) {
          helpers_1.assertIsString(a);
          return _ripemd160(a, padded);
        };
        /**
         * Creates RIPEMD160 hash of a number[] input.
         * @param a The input data (number[])
         * @param padded Whether it should be padded to 256 bits or not
         */


        exports.ripemd160FromArray = function (a, padded) {
          helpers_1.assertIsArray(a);
          return _ripemd160(a, padded);
        };
        /**
         * Creates RIPEMD160 hash of the input.
         * @param a The input data (Buffer|Array|String|Number)
         * @param padded Whether it should be padded to 256 bits or not
         */


        var _ripemd160 = function _ripemd160(a, padded) {
          a = bytes_1.toBuffer(a);
          var hash = createHash('rmd160').update(a).digest();

          if (padded === true) {
            return bytes_1.setLengthLeft(hash, 32);
          } else {
            return hash;
          }
        };
        /**
         * Creates SHA-3 hash of the RLP encoded version of the input.
         * @param a The input data
         */


        exports.rlphash = function (a) {
          return exports.keccak(rlp.encode(a));
        }; //# sourceMappingURL=hash.js.map

        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "w0G5":
    /*!*********************************************************************************!*\
      !*** ./node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/externals.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function w0G5(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Re-exports commonly used modules:
       * * Exports [`BN`](https://github.com/indutny/bn.js), [`rlp`](https://github.com/ethereumjs/rlp).
       * @packageDocumentation
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rlp = exports.BN = void 0; // TODO: This can be replaced with a normal ESM import once
      // the new major version of the typescript config package
      // is released and adopted here.

      var BN = __webpack_require__(
      /*! bn.js */
      "OZ/i");

      exports.BN = BN;

      var rlp = __webpack_require__(
      /*! rlp */
      "o8pB");

      exports.rlp = rlp; //# sourceMappingURL=externals.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~ethereumjs-util~hd-wallet-642b97e3-js-es5.js.map