(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "36aJ":
    /*!***************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
      \***************************************************************/

    /*! exports provided: e, m */

    /***/
    function aJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return extensionInstallMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return mobileWalletInstallMessage;
      });

      var extensionInstallMessage = function extensionInstallMessage(helpers) {
        var currentWallet = helpers.currentWallet,
            selectedWallet = helpers.selectedWallet;

        if (currentWallet) {
          return "\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    We have detected that you already have\n    <b>".concat(currentWallet, "</b>\n    installed. If you would prefer to use\n    <b>").concat(selectedWallet, "</b>\n    instead, then click below to install.\n    </p>\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    <b>Tip:</b>\n    If you already have ").concat(selectedWallet, " installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\"\n      onclick=\"window.location.reload();\">\n      Then refresh the page.\n    </span>\n    </p>\n    ");
        } else {
          return "\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Once you have it installed, go ahead and\n    <span\n    class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>' : '', "\n    </p>\n    ");
        }
      };

      var mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {
        var selectedWallet = helpers.selectedWallet;
        return "\n  <p style=\"font-size: 0.889rem;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Click below to install and then load this Dapp with <b>").concat(selectedWallet, "</b>.\n  </p>\n  ");
      };
      /***/

    },

    /***/
    "B3Rj":
    /*!************************************!*\
      !*** ./node_modules/bs58/index.js ***!
      \************************************/

    /*! no static exports found */

    /***/
    function B3Rj(module, exports, __webpack_require__) {
      var basex = __webpack_require__(
      /*! base-x */
      "QqcV");

      var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      module.exports = basex(ALPHABET);
      /***/
    },

    /***/
    "BumV":
    /*!****************************************!*\
      !*** ./node_modules/bs58check/base.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function BumV(module, exports, __webpack_require__) {
      "use strict";

      var base58 = __webpack_require__(
      /*! bs58 */
      "B3Rj");

      var Buffer = __webpack_require__(
      /*! safe-buffer */
      "hwdV").Buffer;

      module.exports = function (checksumFn) {
        // Encode a buffer as a base58-check encoded string
        function encode(payload) {
          var checksum = checksumFn(payload);
          return base58.encode(Buffer.concat([payload, checksum], payload.length + 4));
        }

        function decodeRaw(buffer) {
          var payload = buffer.slice(0, -4);
          var checksum = buffer.slice(-4);
          var newChecksum = checksumFn(payload);
          if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3]) return;
          return payload;
        } // Decode a base58-check encoded string to a buffer, no result if checksum is wrong


        function decodeUnsafe(string) {
          var buffer = base58.decodeUnsafe(string);
          if (!buffer) return;
          return decodeRaw(buffer);
        }

        function decode(string) {
          var buffer = base58.decode(string);
          var payload = decodeRaw(buffer, checksumFn);
          if (!payload) throw new Error('Invalid checksum');
          return payload;
        }

        return {
          encode: encode,
          decode: decode,
          decodeUnsafe: decodeUnsafe
        };
      };
      /***/

    },

    /***/
    "N1pS":
    /*!***************************************************!*\
      !*** ./node_modules/fast-safe-stringify/index.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function N1pS(module, exports) {
      module.exports = stringify;
      stringify["default"] = stringify;
      stringify.stable = deterministicStringify;
      stringify.stableStringify = deterministicStringify;
      var arr = [];
      var replacerStack = []; // Regular stringify

      function stringify(obj, replacer, spacer) {
        decirc(obj, '', [], undefined);
        var res;

        if (replacerStack.length === 0) {
          res = JSON.stringify(obj, replacer, spacer);
        } else {
          res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
        }

        while (arr.length !== 0) {
          var part = arr.pop();

          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }

        return res;
      }

      function decirc(val, k, stack, parent) {
        var i;

        if (typeof val === 'object' && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

              if (propertyDescriptor.get !== undefined) {
                if (propertyDescriptor.configurable) {
                  Object.defineProperty(parent, k, {
                    value: '[Circular]'
                  });
                  arr.push([parent, k, val, propertyDescriptor]);
                } else {
                  replacerStack.push([val, k]);
                }
              } else {
                parent[k] = '[Circular]';
                arr.push([parent, k, val]);
              }

              return;
            }
          }

          stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              decirc(val[i], i, stack, val);
            }
          } else {
            var keys = Object.keys(val);

            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              decirc(val[key], key, stack, val);
            }
          }

          stack.pop();
        }
      } // Stable-stringify


      function compareFunction(a, b) {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      }

      function deterministicStringify(obj, replacer, spacer) {
        var tmp = deterministicDecirc(obj, '', [], undefined) || obj;
        var res;

        if (replacerStack.length === 0) {
          res = JSON.stringify(tmp, replacer, spacer);
        } else {
          res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
        }

        while (arr.length !== 0) {
          var part = arr.pop();

          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }

        return res;
      }

      function deterministicDecirc(val, k, stack, parent) {
        var i;

        if (typeof val === 'object' && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

              if (propertyDescriptor.get !== undefined) {
                if (propertyDescriptor.configurable) {
                  Object.defineProperty(parent, k, {
                    value: '[Circular]'
                  });
                  arr.push([parent, k, val, propertyDescriptor]);
                } else {
                  replacerStack.push([val, k]);
                }
              } else {
                parent[k] = '[Circular]';
                arr.push([parent, k, val]);
              }

              return;
            }
          }

          if (typeof val.toJSON === 'function') {
            return;
          }

          stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              deterministicDecirc(val[i], i, stack, val);
            }
          } else {
            // Create a temporary object in the required way
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);

            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              deterministicDecirc(val[key], key, stack, val);
              tmp[key] = val[key];
            }

            if (parent !== undefined) {
              arr.push([parent, k, val]);
              parent[k] = tmp;
            } else {
              return tmp;
            }
          }

          stack.pop();
        }
      } // wraps replacer function to handle values we couldn't replace
      // and mark them as [Circular]


      function replaceGetterValues(replacer) {
        replacer = replacer !== undefined ? replacer : function (k, v) {
          return v;
        };
        return function (key, val) {
          if (replacerStack.length > 0) {
            for (var i = 0; i < replacerStack.length; i++) {
              var part = replacerStack[i];

              if (part[1] === key && part[0] === val) {
                val = '[Circular]';
                replacerStack.splice(i, 1);
                break;
              }
            }
          }

          return replacer.call(this, key, val);
        };
      }
      /***/

    },

    /***/
    "b3gk":
    /*!*****************************************!*\
      !*** ./node_modules/bs58check/index.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function b3gk(module, exports, __webpack_require__) {
      "use strict";

      var createHash = __webpack_require__(
      /*! create-hash */
      "mObS");

      var bs58checkBase = __webpack_require__(
      /*! ./base */
      "BumV"); // SHA256(SHA256(buffer))


      function sha256x2(buffer) {
        var tmp = createHash('sha256').update(buffer).digest();
        return createHash('sha256').update(tmp).digest();
      }

      module.exports = bs58checkBase(sha256x2);
      /***/
    },

    /***/
    "kl0C":
    /*!*********************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/icon-coinbase-9c595a2f.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function kl0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return coinbaseIcon;
      });

      var coinbaseIcon = "\n\t<svg width=\"40\" height=\"40\" viewBox=\"0 0 383 383\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g clip-path=\"url(#clip0)\">\n\t\t<g filter=\"url(#filter0_dd)\">\n\t\t\t<path d=\"M0.998047 0.572266L382.78 0.572266V382.354H0.998047L0.998047 0.572266Z\" fill=\"url(#paint0_linear)\"/>\n\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.1074 191.572C59.1074 264.966 118.605 324.463 191.998 324.463C265.392 324.463 324.889 264.966 324.889 191.572C324.889 118.179 265.392 58.6816 191.998 58.6816C118.605 58.6816 59.1074 118.179 59.1074 191.572ZM158.037 148.752C153.144 148.752 149.178 152.718 149.178 157.611V225.533C149.178 230.426 153.144 234.393 158.037 234.393H225.959C230.852 234.393 234.818 230.426 234.818 225.533V157.611C234.818 152.718 230.852 148.752 225.959 148.752H158.037Z\" fill=\"white\"/>\n\t\t</g>\n\t\t</g>\n\t\t<defs>\n\t\t\t<filter id=\"filter0_dd\" x=\"-23.002\" y=\"-7.42773\" width=\"429.782\" height=\"429.782\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n\t\t\t\t<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n\t\t\t\t<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n\t\t\t\t<feOffset dy=\"16\"/>\n\t\t\t\t<feGaussianBlur stdDeviation=\"12\"/>\n\t\t\t\t<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0\"/>\n\t\t\t\t<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n\t\t\t\t<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n\t\t\t\t<feOffset/>\n\t\t\t\t<feGaussianBlur stdDeviation=\"4\"/>\n\t\t\t\t<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0\"/>\n\t\t\t\t<feBlend mode=\"normal\" in2=\"effect1_dropShadow\" result=\"effect2_dropShadow\"/>\n\t\t\t\t<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow\" result=\"shape\"/>\n\t\t\t</filter>\n\t\t\t<linearGradient id=\"paint0_linear\" x1=\"191.889\" y1=\"0.572266\" x2=\"191.889\" y2=\"382.354\" gradientUnits=\"userSpaceOnUse\">\n\t\t\t\t<stop stop-color=\"#2E66F8\"/>\n\t\t\t\t<stop offset=\"1\" stop-color=\"#124ADB\"/>\n\t\t\t</linearGradient>\n\t\t\t<clipPath id=\"clip0\">\n\t\t\t\t<rect width=\"381.782\" height=\"381.782\" fill=\"white\" transform=\"translate(0.998047 0.572266)\"/>\n\t\t\t</clipPath>\n\t\t</defs>\n\t</svg>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map