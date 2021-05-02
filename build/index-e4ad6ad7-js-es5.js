(function () {
  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-e4ad6ad7-js"], {
    /***/
    "+FMq":
    /*!*********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/or.js ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function FMq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the OR operation, expects two arrays of the same size and returns a new one.
       *
       * @example
       * or([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,1,0,1]
       *
       * @param {Array} bits1 input data
       * @param {Array} bits2 input data
       * @return {Array} [bits1 OR bits2]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits1, bits2) {
        var result = [];

        for (var i = 0; i < bits1.length; i++) {
          result[i] = bits1[i] | bits2[i];
        }

        return result;
      };
      /***/

    },

    /***/
    "+u1v":
    /*!***********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/nand.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function u1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the NAND operation, expects two arrays of the same size and returns a new one.
       *
       * @example
       * nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,1,1,0,1,1]
       *
       * @param {Array} bits1 input data
       * @param {Array} bits2 input data
       * @return {Array} [bits1 NAND bits2]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits1, bits2) {
        var result = [];

        for (var i = 0; i < bits1.length; i++) {
          result[i] = bits1[i] & bits2[i] ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "/yFf":
    /*!******************************************************!*\
      !*** ./node_modules/superagent/lib/response-base.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function yFf(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Module dependencies.
       */

      var utils = __webpack_require__(
      /*! ./utils */
      "oHnp");
      /**
       * Expose `ResponseBase`.
       */


      module.exports = ResponseBase;
      /**
       * Initialize a new `ResponseBase`.
       *
       * @api public
       */

      function ResponseBase(obj) {
        if (obj) return mixin(obj);
      }
      /**
       * Mixin the prototype properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */


      function mixin(obj) {
        for (var key in ResponseBase.prototype) {
          obj[key] = ResponseBase.prototype[key];
        }

        return obj;
      }
      /**
       * Get case-insensitive `field` value.
       *
       * @param {String} field
       * @return {String}
       * @api public
       */


      ResponseBase.prototype.get = function (field) {
        return this.header[field.toLowerCase()];
      };
      /**
       * Set header related properties:
       *
       *   - `.type` the content type without params
       *
       * A response of "Content-Type: text/plain; charset=utf-8"
       * will provide you with a `.type` of "text/plain".
       *
       * @param {Object} header
       * @api private
       */


      ResponseBase.prototype._setHeaderProperties = function (header) {
        // TODO: moar!
        // TODO: make this a util
        // content-type
        var ct = header['content-type'] || '';
        this.type = utils.type(ct); // params

        var params = utils.params(ct);

        for (var key in params) {
          this[key] = params[key];
        }

        this.links = {}; // links

        try {
          if (header.link) {
            this.links = utils.parseLinks(header.link);
          }
        } catch (err) {// ignore
        }
      };
      /**
       * Set flags such as `.ok` based on `status`.
       *
       * For example a 2xx response will give you a `.ok` of __true__
       * whereas 5xx will be __false__ and `.error` will be __true__. The
       * `.clientError` and `.serverError` are also available to be more
       * specific, and `.statusType` is the class of error ranging from 1..5
       * sometimes useful for mapping respond colors etc.
       *
       * "sugar" properties are also defined for common cases. Currently providing:
       *
       *   - .noContent
       *   - .badRequest
       *   - .unauthorized
       *   - .notAcceptable
       *   - .notFound
       *
       * @param {Number} status
       * @api private
       */


      ResponseBase.prototype._setStatusProperties = function (status) {
        var type = status / 100 | 0; // status / class

        this.status = this.statusCode = status;
        this.statusType = type; // basics

        this.info = 1 == type;
        this.ok = 2 == type;
        this.redirect = 3 == type;
        this.clientError = 4 == type;
        this.serverError = 5 == type;
        this.error = 4 == type || 5 == type ? this.toError() : false; // sugar

        this.created = 201 == status;
        this.accepted = 202 == status;
        this.noContent = 204 == status;
        this.badRequest = 400 == status;
        this.unauthorized = 401 == status;
        this.notAcceptable = 406 == status;
        this.forbidden = 403 == status;
        this.notFound = 404 == status;
        this.unprocessableEntity = 422 == status;
      };
      /***/

    },

    /***/
    "0d0U":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/reduce-nor.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function d0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the NOR operation on the given bits. Returns one bit.
       * Throws if less than 2 bits are given.
       *
       * @example
       * reduceNor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
       *
       * @param {Array} bits input data
       * @return {Integer} NOR bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        if (bits.length < 2) throw new RangeError('Not enough bits.');
        var result = bits[0];

        for (var i = 1; i < bits.length; i++) {
          result = (result | bits[i]) ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "24Ii":
    /*!***********************************************!*\
      !*** ./node_modules/superagent/lib/client.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function Ii(module, exports, __webpack_require__) {
      /**
       * Root reference for iframes.
       */
      var root;

      if (typeof window !== 'undefined') {
        // Browser window
        root = window;
      } else if (typeof self !== 'undefined') {
        // Web Worker
        root = self;
      } else {
        // Other environments
        console.warn("Using browser-only version of superagent in non-browser environment");
        root = this;
      }

      var Emitter = __webpack_require__(
      /*! component-emitter */
      "cpc2");

      var RequestBase = __webpack_require__(
      /*! ./request-base */
      "kMlx");

      var isObject = __webpack_require__(
      /*! ./is-object */
      "8zgK");

      var ResponseBase = __webpack_require__(
      /*! ./response-base */
      "/yFf");

      var Agent = __webpack_require__(
      /*! ./agent-base */
      "nZbv");
      /**
       * Noop.
       */


      function noop() {}

      ;
      /**
       * Expose `request`.
       */

      var request = exports = module.exports = function (method, url) {
        // callback
        if ('function' == typeof url) {
          return new exports.Request('GET', method).end(url);
        } // url first


        if (1 == arguments.length) {
          return new exports.Request('GET', method);
        }

        return new exports.Request(method, url);
      };

      exports.Request = Request;
      /**
       * Determine XHR.
       */

      request.getXHR = function () {
        if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
          return new XMLHttpRequest();
        } else {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {}

          try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
          } catch (e) {}

          try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0');
          } catch (e) {}

          try {
            return new ActiveXObject('Msxml2.XMLHTTP');
          } catch (e) {}
        }

        throw Error("Browser-only version of superagent could not find XHR");
      };
      /**
       * Removes leading and trailing whitespace, added to support IE.
       *
       * @param {String} s
       * @return {String}
       * @api private
       */


      var trim = ''.trim ? function (s) {
        return s.trim();
      } : function (s) {
        return s.replace(/(^\s*|\s*$)/g, '');
      };
      /**
       * Serialize the given `obj`.
       *
       * @param {Object} obj
       * @return {String}
       * @api private
       */

      function serialize(obj) {
        if (!isObject(obj)) return obj;
        var pairs = [];

        for (var key in obj) {
          pushEncodedKeyValuePair(pairs, key, obj[key]);
        }

        return pairs.join('&');
      }
      /**
       * Helps 'serialize' with serializing arrays.
       * Mutates the pairs array.
       *
       * @param {Array} pairs
       * @param {String} key
       * @param {Mixed} val
       */


      function pushEncodedKeyValuePair(pairs, key, val) {
        if (val != null) {
          if (Array.isArray(val)) {
            val.forEach(function (v) {
              pushEncodedKeyValuePair(pairs, key, v);
            });
          } else if (isObject(val)) {
            for (var subkey in val) {
              pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
            }
          } else {
            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
          }
        } else if (val === null) {
          pairs.push(encodeURIComponent(key));
        }
      }
      /**
       * Expose serialization method.
       */


      request.serializeObject = serialize;
      /**
        * Parse the given x-www-form-urlencoded `str`.
        *
        * @param {String} str
        * @return {Object}
        * @api private
        */

      function parseString(str) {
        var obj = {};
        var pairs = str.split('&');
        var pair;
        var pos;

        for (var i = 0, len = pairs.length; i < len; ++i) {
          pair = pairs[i];
          pos = pair.indexOf('=');

          if (pos == -1) {
            obj[decodeURIComponent(pair)] = '';
          } else {
            obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
          }
        }

        return obj;
      }
      /**
       * Expose parser.
       */


      request.parseString = parseString;
      /**
       * Default MIME type map.
       *
       *     superagent.types.xml = 'application/xml';
       *
       */

      request.types = {
        html: 'text/html',
        json: 'application/json',
        xml: 'text/xml',
        urlencoded: 'application/x-www-form-urlencoded',
        'form': 'application/x-www-form-urlencoded',
        'form-data': 'application/x-www-form-urlencoded'
      };
      /**
       * Default serialization map.
       *
       *     superagent.serialize['application/xml'] = function(obj){
       *       return 'generated xml here';
       *     };
       *
       */

      request.serialize = {
        'application/x-www-form-urlencoded': serialize,
        'application/json': JSON.stringify
      };
      /**
        * Default parsers.
        *
        *     superagent.parse['application/xml'] = function(str){
        *       return { object parsed from str };
        *     };
        *
        */

      request.parse = {
        'application/x-www-form-urlencoded': parseString,
        'application/json': JSON.parse
      };
      /**
       * Parse the given header `str` into
       * an object containing the mapped fields.
       *
       * @param {String} str
       * @return {Object}
       * @api private
       */

      function parseHeader(str) {
        var lines = str.split(/\r?\n/);
        var fields = {};
        var index;
        var line;
        var field;
        var val;

        for (var i = 0, len = lines.length; i < len; ++i) {
          line = lines[i];
          index = line.indexOf(':');

          if (index === -1) {
            // could be empty line, just skip it
            continue;
          }

          field = line.slice(0, index).toLowerCase();
          val = trim(line.slice(index + 1));
          fields[field] = val;
        }

        return fields;
      }
      /**
       * Check if `mime` is json or has +json structured syntax suffix.
       *
       * @param {String} mime
       * @return {Boolean}
       * @api private
       */


      function isJSON(mime) {
        // should match /json or +json
        // but not /json-seq
        return /[\/+]json($|[^-\w])/.test(mime);
      }
      /**
       * Initialize a new `Response` with the given `xhr`.
       *
       *  - set flags (.ok, .error, etc)
       *  - parse header
       *
       * Examples:
       *
       *  Aliasing `superagent` as `request` is nice:
       *
       *      request = superagent;
       *
       *  We can use the promise-like API, or pass callbacks:
       *
       *      request.get('/').end(function(res){});
       *      request.get('/', function(res){});
       *
       *  Sending data can be chained:
       *
       *      request
       *        .post('/user')
       *        .send({ name: 'tj' })
       *        .end(function(res){});
       *
       *  Or passed to `.send()`:
       *
       *      request
       *        .post('/user')
       *        .send({ name: 'tj' }, function(res){});
       *
       *  Or passed to `.post()`:
       *
       *      request
       *        .post('/user', { name: 'tj' })
       *        .end(function(res){});
       *
       * Or further reduced to a single call for simple cases:
       *
       *      request
       *        .post('/user', { name: 'tj' }, function(res){});
       *
       * @param {XMLHTTPRequest} xhr
       * @param {Object} options
       * @api private
       */


      function Response(req) {
        this.req = req;
        this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

        this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
        this.statusText = this.req.xhr.statusText;
        var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

        if (status === 1223) {
          status = 204;
        }

        this._setStatusProperties(status);

        this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders()); // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
        // getResponseHeader still works. so we get content-type even if getting
        // other headers fails.

        this.header['content-type'] = this.xhr.getResponseHeader('content-type');

        this._setHeaderProperties(this.header);

        if (null === this.text && req._responseType) {
          this.body = this.xhr.response;
        } else {
          this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
        }
      }

      ResponseBase(Response.prototype);
      /**
       * Parse the given body `str`.
       *
       * Used for auto-parsing of bodies. Parsers
       * are defined on the `superagent.parse` object.
       *
       * @param {String} str
       * @return {Mixed}
       * @api private
       */

      Response.prototype._parseBody = function (str) {
        var parse = request.parse[this.type];

        if (this.req._parser) {
          return this.req._parser(this, str);
        }

        if (!parse && isJSON(this.type)) {
          parse = request.parse['application/json'];
        }

        return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
      };
      /**
       * Return an `Error` representative of this response.
       *
       * @return {Error}
       * @api public
       */


      Response.prototype.toError = function () {
        var req = this.req;
        var method = req.method;
        var url = req.url;
        var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
        var err = new Error(msg);
        err.status = this.status;
        err.method = method;
        err.url = url;
        return err;
      };
      /**
       * Expose `Response`.
       */


      request.Response = Response;
      /**
       * Initialize a new `Request` with the given `method` and `url`.
       *
       * @param {String} method
       * @param {String} url
       * @api public
       */

      function Request(method, url) {
        var self = this;
        this._query = this._query || [];
        this.method = method;
        this.url = url;
        this.header = {}; // preserves header name case

        this._header = {}; // coerces header names to lowercase

        this.on('end', function () {
          var err = null;
          var res = null;

          try {
            res = new Response(self);
          } catch (e) {
            err = new Error('Parser is unable to parse the response');
            err.parse = true;
            err.original = e; // issue #675: return the raw response if the response parsing fails

            if (self.xhr) {
              // ie9 doesn't have 'response' property
              err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

              err.status = self.xhr.status ? self.xhr.status : null;
              err.statusCode = err.status; // backwards-compat only
            } else {
              err.rawResponse = null;
              err.status = null;
            }

            return self.callback(err);
          }

          self.emit('response', res);
          var new_err;

          try {
            if (!self._isResponseOK(res)) {
              new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
            }
          } catch (custom_err) {
            new_err = custom_err; // ok() callback can throw
          } // #1000 don't catch errors from the callback to avoid double calling it


          if (new_err) {
            new_err.original = err;
            new_err.response = res;
            new_err.status = res.status;
            self.callback(new_err, res);
          } else {
            self.callback(null, res);
          }
        });
      }
      /**
       * Mixin `Emitter` and `RequestBase`.
       */


      Emitter(Request.prototype);
      RequestBase(Request.prototype);
      /**
       * Set Content-Type to `type`, mapping values from `request.types`.
       *
       * Examples:
       *
       *      superagent.types.xml = 'application/xml';
       *
       *      request.post('/')
       *        .type('xml')
       *        .send(xmlstring)
       *        .end(callback);
       *
       *      request.post('/')
       *        .type('application/xml')
       *        .send(xmlstring)
       *        .end(callback);
       *
       * @param {String} type
       * @return {Request} for chaining
       * @api public
       */

      Request.prototype.type = function (type) {
        this.set('Content-Type', request.types[type] || type);
        return this;
      };
      /**
       * Set Accept to `type`, mapping values from `request.types`.
       *
       * Examples:
       *
       *      superagent.types.json = 'application/json';
       *
       *      request.get('/agent')
       *        .accept('json')
       *        .end(callback);
       *
       *      request.get('/agent')
       *        .accept('application/json')
       *        .end(callback);
       *
       * @param {String} accept
       * @return {Request} for chaining
       * @api public
       */


      Request.prototype.accept = function (type) {
        this.set('Accept', request.types[type] || type);
        return this;
      };
      /**
       * Set Authorization field value with `user` and `pass`.
       *
       * @param {String} user
       * @param {String} [pass] optional in case of using 'bearer' as type
       * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
       * @return {Request} for chaining
       * @api public
       */


      Request.prototype.auth = function (user, pass, options) {
        if (1 === arguments.length) pass = '';

        if (typeof pass === 'object' && pass !== null) {
          // pass is optional and can be replaced with options
          options = pass;
          pass = '';
        }

        if (!options) {
          options = {
            type: 'function' === typeof btoa ? 'basic' : 'auto'
          };
        }

        var encoder = function encoder(string) {
          if ('function' === typeof btoa) {
            return btoa(string);
          }

          throw new Error('Cannot use basic auth, btoa is not a function');
        };

        return this._auth(user, pass, options, encoder);
      };
      /**
       * Add query-string `val`.
       *
       * Examples:
       *
       *   request.get('/shoes')
       *     .query('size=10')
       *     .query({ color: 'blue' })
       *
       * @param {Object|String} val
       * @return {Request} for chaining
       * @api public
       */


      Request.prototype.query = function (val) {
        if ('string' != typeof val) val = serialize(val);
        if (val) this._query.push(val);
        return this;
      };
      /**
       * Queue the given `file` as an attachment to the specified `field`,
       * with optional `options` (or filename).
       *
       * ``` js
       * request.post('/upload')
       *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
       *   .end(callback);
       * ```
       *
       * @param {String} field
       * @param {Blob|File} file
       * @param {String|Object} options
       * @return {Request} for chaining
       * @api public
       */


      Request.prototype.attach = function (field, file, options) {
        if (file) {
          if (this._data) {
            throw Error("superagent can't mix .send() and .attach()");
          }

          this._getFormData().append(field, file, options || file.name);
        }

        return this;
      };

      Request.prototype._getFormData = function () {
        if (!this._formData) {
          this._formData = new root.FormData();
        }

        return this._formData;
      };
      /**
       * Invoke the callback with `err` and `res`
       * and handle arity check.
       *
       * @param {Error} err
       * @param {Response} res
       * @api private
       */


      Request.prototype.callback = function (err, res) {
        if (this._shouldRetry(err, res)) {
          return this._retry();
        }

        var fn = this._callback;
        this.clearTimeout();

        if (err) {
          if (this._maxRetries) err.retries = this._retries - 1;
          this.emit('error', err);
        }

        fn(err, res);
      };
      /**
       * Invoke callback with x-domain error.
       *
       * @api private
       */


      Request.prototype.crossDomainError = function () {
        var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
        err.crossDomain = true;
        err.status = this.status;
        err.method = this.method;
        err.url = this.url;
        this.callback(err);
      }; // This only warns, because the request is still likely to work


      Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
        console.warn("This is not supported in browser version of superagent");
        return this;
      }; // This throws, because it can't send/receive data as expected


      Request.prototype.pipe = Request.prototype.write = function () {
        throw Error("Streaming is not supported in browser version of superagent");
      };
      /**
       * Check if `obj` is a host object,
       * we don't want to serialize these :)
       *
       * @param {Object} obj
       * @return {Boolean}
       * @api private
       */


      Request.prototype._isHost = function _isHost(obj) {
        // Native objects stringify to [object File], [object Blob], [object FormData], etc.
        return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
      };
      /**
       * Initiate request, invoking callback `fn(res)`
       * with an instanceof `Response`.
       *
       * @param {Function} fn
       * @return {Request} for chaining
       * @api public
       */


      Request.prototype.end = function (fn) {
        if (this._endCalled) {
          console.warn("Warning: .end() was called twice. This is not supported in superagent");
        }

        this._endCalled = true; // store callback

        this._callback = fn || noop; // querystring

        this._finalizeQueryString();

        return this._end();
      };

      Request.prototype._end = function () {
        var self = this;
        var xhr = this.xhr = request.getXHR();
        var data = this._formData || this._data;

        this._setTimeouts(); // state change


        xhr.onreadystatechange = function () {
          var readyState = xhr.readyState;

          if (readyState >= 2 && self._responseTimeoutTimer) {
            clearTimeout(self._responseTimeoutTimer);
          }

          if (4 != readyState) {
            return;
          } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
          // result in the error "Could not complete the operation due to error c00c023f"


          var status;

          try {
            status = xhr.status;
          } catch (e) {
            status = 0;
          }

          if (!status) {
            if (self.timedout || self._aborted) return;
            return self.crossDomainError();
          }

          self.emit('end');
        }; // progress


        var handleProgress = function handleProgress(direction, e) {
          if (e.total > 0) {
            e.percent = e.loaded / e.total * 100;
          }

          e.direction = direction;
          self.emit('progress', e);
        };

        if (this.hasListeners('progress')) {
          try {
            xhr.onprogress = handleProgress.bind(null, 'download');

            if (xhr.upload) {
              xhr.upload.onprogress = handleProgress.bind(null, 'upload');
            }
          } catch (e) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
            // Reported here:
            // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
          }
        } // initiate request


        try {
          if (this.username && this.password) {
            xhr.open(this.method, this.url, true, this.username, this.password);
          } else {
            xhr.open(this.method, this.url, true);
          }
        } catch (err) {
          // see #1149
          return this.callback(err);
        } // CORS


        if (this._withCredentials) xhr.withCredentials = true; // body

        if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
          // serialize stuff
          var contentType = this._header['content-type'];
          var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

          if (!serialize && isJSON(contentType)) {
            serialize = request.serialize['application/json'];
          }

          if (serialize) data = serialize(data);
        } // set header fields


        for (var field in this.header) {
          if (null == this.header[field]) continue;
          if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
        }

        if (this._responseType) {
          xhr.responseType = this._responseType;
        } // send stuff


        this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
        // We need null here if data is undefined

        xhr.send(typeof data !== 'undefined' ? data : null);
        return this;
      };

      request.agent = function () {
        return new Agent();
      };

      ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
        Agent.prototype[method.toLowerCase()] = function (url, fn) {
          var req = new request.Request(method, url);

          this._setDefaults(req);

          if (fn) {
            req.end(fn);
          }

          return req;
        };
      });
      Agent.prototype.del = Agent.prototype['delete'];
      /**
       * GET `url` with optional callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed|Function} [data] or fn
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */

      request.get = function (url, data, fn) {
        var req = request('GET', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.query(data);
        if (fn) req.end(fn);
        return req;
      };
      /**
       * HEAD `url` with optional callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed|Function} [data] or fn
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */


      request.head = function (url, data, fn) {
        var req = request('HEAD', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.query(data);
        if (fn) req.end(fn);
        return req;
      };
      /**
       * OPTIONS query to `url` with optional callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed|Function} [data] or fn
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */


      request.options = function (url, data, fn) {
        var req = request('OPTIONS', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.send(data);
        if (fn) req.end(fn);
        return req;
      };
      /**
       * DELETE `url` with optional `data` and callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed} [data]
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */


      function del(url, data, fn) {
        var req = request('DELETE', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.send(data);
        if (fn) req.end(fn);
        return req;
      }

      request['del'] = del;
      request['delete'] = del;
      /**
       * PATCH `url` with optional `data` and callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed} [data]
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */

      request.patch = function (url, data, fn) {
        var req = request('PATCH', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.send(data);
        if (fn) req.end(fn);
        return req;
      };
      /**
       * POST `url` with optional `data` and callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed} [data]
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */


      request.post = function (url, data, fn) {
        var req = request('POST', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.send(data);
        if (fn) req.end(fn);
        return req;
      };
      /**
       * PUT `url` with optional `data` and callback `fn(res)`.
       *
       * @param {String} url
       * @param {Mixed|Function} [data] or fn
       * @param {Function} [fn]
       * @return {Request}
       * @api public
       */


      request.put = function (url, data, fn) {
        var req = request('PUT', url);
        if ('function' == typeof data) fn = data, data = null;
        if (data) req.send(data);
        if (fn) req.end(fn);
        return req;
      };
      /***/

    },

    /***/
    "2k3W":
    /*!*******************************************!*\
      !*** ./node_modules/bitwise/esm/index.js ***!
      \*******************************************/

    /*! exports provided: bits, buffer, byte, integer, nibble, string, default */

    /***/
    function k3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bits */
      "yoIl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "bits", function () {
        return _bits__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buffer */
      "HFhI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "buffer", function () {
        return _buffer__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _byte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./byte */
      "L1CG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "byte", function () {
        return _byte__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _integer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./integer */
      "n/ht");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "integer", function () {
        return _integer__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _nibble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nibble */
      "4++s");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nibble", function () {
        return _nibble__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./string */
      "GHyM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "string", function () {
        return _string__WEBPACK_IMPORTED_MODULE_5__["default"];
      });

      var bitwise = {
        bits: _bits__WEBPACK_IMPORTED_MODULE_0__["default"],
        buffer: _buffer__WEBPACK_IMPORTED_MODULE_1__["default"],
        "byte": _byte__WEBPACK_IMPORTED_MODULE_2__["default"],
        integer: _integer__WEBPACK_IMPORTED_MODULE_3__["default"],
        nibble: _nibble__WEBPACK_IMPORTED_MODULE_4__["default"],
        string: _string__WEBPACK_IMPORTED_MODULE_5__["default"]
      };
      /* harmony default export */

      __webpack_exports__["default"] = bitwise;
      /***/
    },

    /***/
    "2t92":
    /*!***************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/modify.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function t92(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _byte_write__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../byte/write */
      "G1u+");
      /* harmony import */


      var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./read */
      "UPHr");
      /**
       * Modifies the buffer's bits to equal newBits starting at bitOffset.
       *
       * @example
       * modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
       *
       * @param {Buffer} buffer the buffer to modify
       * @param {Array} bits the bits to insert
       * @param {Number} offset where to start (in bits)
       * @returns {undefined}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (buffer, bits, offset) {
        if (offset === void 0) {
          offset = 0;
        }

        var start = Math.floor(offset / 8);
        var end = Math.ceil((offset + bits.length) / 8);
        var subBuffer = buffer.slice(start, end);
        var byteData = Object(_read__WEBPACK_IMPORTED_MODULE_1__["default"])(subBuffer);
        var subOffset = offset % 8;

        for (var i = 0; i < bits.length; i++) {
          byteData[subOffset++] = bits[i];
        }

        var length = end - start;

        for (var i_1 = 0; i_1 < length; i_1++) {
          subBuffer[i_1] = Object(_byte_write__WEBPACK_IMPORTED_MODULE_0__["default"])(byteData.slice(i_1 * 8, (i_1 + 1) * 8));
        }
      };
      /***/

    },

    /***/
    "4++s":
    /*!**************************************************!*\
      !*** ./node_modules/bitwise/esm/nibble/index.js ***!
      \**************************************************/

    /*! exports provided: read, write, default */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./read */
      "jSm7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "read", function () {
        return _read__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./write */
      "Ez8P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "write", function () {
        return _write__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony default export */


      __webpack_exports__["default"] = {
        read: _read__WEBPACK_IMPORTED_MODULE_0__["default"],
        write: _write__WEBPACK_IMPORTED_MODULE_1__["default"]
      };
      /***/
    },

    /***/
    "4Mn8":
    /*!********************************************!*\
      !*** ./node_modules/gridplus-sdk/index.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function Mn8(module, exports, __webpack_require__) {
      var Client = __webpack_require__(
      /*! ./src/client */
      "pzNo");

      module.exports = {
        Client: Client
      };
      /***/
    },

    /***/
    "5tNv":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/xor.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function tNv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise XOR to the contents of two buffers. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.xor(a, b, false) => Buffer(a XOR b)
        *
        * @param {Buffer} a first buffer
        * @param {Buffer} b second buffer
        * @param {Boolean} isLooping loop through first buffer
        * @return {Buffer} a XOR b
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (a, b, isLooping) {
          if (isLooping === void 0) {
            isLooping = false;
          }

          var length = isLooping ? b.length : a.length;
          var result = Buffer.alloc(length);

          for (var i = 0; i < length; i++) {
            var j = isLooping ? i % a.length : i;
            result[i] = a[j] ^ b[i];
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "6WMX":
    /*!**************************************************!*\
      !*** ./node_modules/gridplus-sdk/src/bitcoin.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function WMX(module, exports, __webpack_require__) {
      // Util for Bitcoin-specific functionality
      var bs58 = __webpack_require__(
      /*! bs58 */
      "B3Rj");

      var bs58check = __webpack_require__(
      /*! bs58check */
      "b3gk");

      var Buffer = __webpack_require__(
      /*! buffer/ */
      "tjlA").Buffer;

      var constants = __webpack_require__(
      /*! ./constants */
      "L21C");

      var DEFAULT_SEQUENCE = 0xffffffff;
      var DEFAULT_SIGHASH_BUFFER = Buffer.from('01', 'hex'); // SIGHASH_ALL = 0x01

      var _webpack_require__ = __webpack_require__(
      /*! ./constants */
      "L21C"),
          HARDENED_OFFSET = _webpack_require__.HARDENED_OFFSET;

      var DEFAULT_CHANGE = [44 + HARDENED_OFFSET, HARDENED_OFFSET, HARDENED_OFFSET, 1, 0];
      var OP = {
        '0': 0x00,
        HASH160: 0xa9,
        DUP: 0x76,
        EQUAL: 0x87,
        EQUALVERIFY: 0x88,
        CHECKSIG: 0xac
      };
      var addressVersion = {
        'LEGACY': 0x00,
        'SEGWIT': 0x05,
        'TESTNET': 0x6F,
        'SEGWIT_TESTNET': 0xC4
      };
      exports.addressVersion = addressVersion; // Bitcoin script types -- defined by the Lattice protocol spec

      var scriptTypes = {
        P2PKH: 0x01,
        P2SH: 0x02,
        P2SH_P2WPKH: 0x03
      };
      exports.scriptTypes = scriptTypes; // We need to build two different objects here:
      // 1. bitcoinjs-lib TransactionBuilder object, which will be used in conjunction
      //    with the returned signatures to build and serialize the transaction before
      //    broadcasting it. We will replace `bitcoinjs-lib`'s signatures with the ones
      //    we get from the Lattice
      // 2. The serialized Lattice request, which includes data (outlined in the specification)
      //    that is needed to sign all of the inputs and build a change output. 
      // @inputs (contained in `data`)
      // `prevOuts`: an array of objects with the following properties:
      //           a. txHash
      //           b. value
      //           c. index          -- the index of the output in the transaction
      //           d. signerPath -- the path of the address in our wallet that is signing this input
      // `recipient`: Receiving address, which must be converted to a pubkeyhash
      // `value`:     Number of satoshis to send the recipient
      // `fee`:       Number of satoshis to use for a transaction fee (should have been calculated)
      //              already based on the number of inputs plus two outputs
      // `version`:   Transaction version of the inputs. All inputs must be of the same version! 
      // `isSegwit`: a boolean which determines how we serialize the data and parameterize txb

      exports.buildBitcoinTxRequest = function (data) {
        try {
          var prevOuts = data.prevOuts,
              recipient = data.recipient,
              value = data.value,
              _data$changePath = data.changePath,
              changePath = _data$changePath === void 0 ? DEFAULT_CHANGE : _data$changePath,
              fee = data.fee,
              isSegwit = data.isSegwit,
              _data$changeVersion = data.changeVersion,
              changeVersion = _data$changeVersion === void 0 ? 'SEGWIT' : _data$changeVersion;
          if (changePath.length !== 5) throw new Error('Please provide a full change path.'); // Serialize the request

          var payload = Buffer.alloc(59 + 69 * prevOuts.length);
          var off = 0; // Change version byte (a.k.a. address format byte)

          if (addressVersion[changeVersion] === undefined) throw new Error('Invalid change version specified.');
          payload.writeUInt8(addressVersion[changeVersion]);
          off++; // Build the change data

          payload.writeUInt32LE(changePath.length, off);
          off += 4;

          for (var i = 0; i < changePath.length; i++) {
            payload.writeUInt32LE(changePath[i], off);
            off += 4;
          } // Fee is a param


          payload.writeUInt32LE(fee, off);
          off += 4;
          var recipientVersionByte = bs58.decode(recipient)[0];
          var recipientPubkeyhash = bs58check.decode(recipient).slice(1); // Parameterize the recipient output

          payload.writeUInt8(recipientVersionByte, off);
          off++;
          recipientPubkeyhash.copy(payload, off);
          off += recipientPubkeyhash.length;
          writeUInt64LE(value, payload, off);
          off += 8; // Build the inputs from the previous outputs

          payload.writeUInt8(prevOuts.length, off);
          off++;
          var inputSum = 0;
          var scriptType = isSegwit === true ? scriptTypes.P2SH_P2WPKH : // Only support p2sh(p2wpkh) for segwit spends for now
          scriptTypes.P2PKH; // No support for multisig p2sh in v1 (p2sh == segwit here)

          prevOuts.forEach(function (input) {
            if (!input.signerPath || input.signerPath.length !== 5) {
              throw new Error('Full recipient path not specified ');
            }

            payload.writeUInt32LE(input.signerPath.length, off);
            off += 4;

            for (var _i = 0; _i < input.signerPath.length; _i++) {
              payload.writeUInt32LE(input.signerPath[_i], off);
              off += 4;
            }

            payload.writeUInt32LE(input.index, off);
            off += 4;
            writeUInt64LE(input.value, payload, off);
            off += 8;
            inputSum += input.value;
            payload.writeUInt8(scriptType, off);
            off++;
            if (!Buffer.isBuffer(input.txHash)) input.txHash = Buffer.from(input.txHash, 'hex');
            input.txHash.copy(payload, off);
            off += input.txHash.length;
          }); // Send them back!

          return {
            payload: payload,
            schema: constants.signingSchema.BTC_TRANSFER,
            origData: data,
            // We will need the original data for serializing the tx
            changeData: {
              // This data helps fill in the change output
              changeVersion: changeVersion,
              value: inputSum - (value + fee)
            }
          };
        } catch (err) {
          return {
            err: err
          };
        }
      }; // Serialize a transaction consisting of inputs, outputs, and some
      // metadata
      // -- inputs  = { hash, index, sig, pubkey }
      // -- outputs = { value, recipient }  // expects an address string for `recipient`
      // -- isSegwitSpend = true if the inputs are being spent using segwit
      //                    (NOTE: either ALL are being spent, or none are)
      // -- network = Name of network, used to determine transaction version
      // -- lockTime = Will probably always be 0


      exports.serializeTx = function (data) {
        var inputs = data.inputs,
            outputs = data.outputs,
            isSegwitSpend = data.isSegwitSpend,
            _data$lockTime = data.lockTime,
            lockTime = _data$lockTime === void 0 ? 0 : _data$lockTime,
            crypto = data.crypto;
        var payload = Buffer.alloc(4);
        var off = 0; // Always use version 2

        var version = 2;
        payload.writeUInt32LE(version, off);
        off += 4;

        if (isSegwitSpend === true) {
          payload = concat(payload, Buffer.from('00', 'hex')); // marker = 0x00

          payload = concat(payload, Buffer.from('01', 'hex')); // flag = 0x01
        } // Serialize signed inputs


        var numInputs = getVarInt(inputs.length);
        payload = concat(payload, numInputs);
        off += numInputs.length;
        inputs.forEach(function (input) {
          payload = concat(payload, input.hash.reverse());
          off += input.hash.length;
          var index = getU32LE(input.index);
          payload = concat(payload, index);
          off += index.length;

          if (isSegwitSpend === true) {
            // Build a vector (varSlice of varSlice) containing the redeemScript
            var redeemScript = buildRedeemScript(input.pubkey, crypto);
            var redeemScriptLen = getVarInt(redeemScript.length);
            var slice = Buffer.concat([redeemScriptLen, redeemScript]);
            var sliceLen = getVarInt(slice.length);
            payload = concat(payload, sliceLen);
            off += sliceLen.length;
            payload = concat(payload, slice);
            off += slice.length;
          } else {
            // Build the signature + pubkey script to spend this input
            var _slice = buildSig(input.sig, input.pubkey);

            payload = concat(payload, _slice);
            off += _slice.length;
          } // Use the default sequence for all transactions


          var sequence = getU32LE(DEFAULT_SEQUENCE);
          payload = concat(payload, sequence);
          off += sequence.length;
        }); // Serialize outputs

        var numOutputs = getVarInt(outputs.length);
        payload = concat(payload, numOutputs);
        off += numOutputs.length;
        outputs.forEach(function (output) {
          var value = getU64LE(output.value);
          payload = concat(payload, value);
          off += value.length; // Build the output locking script and write it as a var slice

          var script = buildLockingScript(output.recipient);
          var scriptLen = getVarInt(script.length);
          payload = concat(payload, scriptLen);
          off += scriptLen.length;
          payload = concat(payload, script);
          off += script.length;
        }); // Add witness data if needed

        if (isSegwitSpend === true) {
          var sigs = [];
          var pubkeys = [];

          for (var i = 0; i < inputs.length; i++) {
            sigs.push(inputs[i].sig);
            pubkeys.push(inputs[i].pubkey);
          }

          var witnessSlice = buildWitness(sigs, pubkeys);
          payload = concat(payload, witnessSlice);
          off += witnessSlice.length;
        } // Finish with locktime


        return Buffer.concat([payload, getU32LE(lockTime)]).toString('hex');
      }; // Convert a pubkeyhash to a bitcoin base58check address with a version byte


      exports.getBitcoinAddress = function (pubkeyhash, version) {
        return bs58check.encode(Buffer.concat([Buffer.from([version]), pubkeyhash]));
      }; // Builder utils
      //-----------------------


      function buildRedeemScript(pubkey, crypto) {
        var redeemScript = Buffer.alloc(22);
        var shaHash = crypto.createHash('sha256').update(pubkey).digest();
        var pubkeyhash = crypto.createHash('rmd160').update(shaHash).digest();
        redeemScript.writeUInt8(OP['0']);
        redeemScript.writeUInt8(pubkeyhash.length, 1);
        pubkeyhash.copy(redeemScript, 2);
        return redeemScript;
      } // Var slice of signature + var slice of pubkey


      function buildSig(sig, pubkey) {
        sig = Buffer.concat([sig, DEFAULT_SIGHASH_BUFFER]);
        var sigLen = getVarInt(sig.length);
        var pubkeyLen = getVarInt(pubkey.length);
        var slice = Buffer.concat([sigLen, sig, pubkeyLen, pubkey]);
        var len = getVarInt(slice.length);
        return Buffer.concat([len, slice]);
      } // Witness is written as a "vector", which is a list of varSlices
      // prefixed by the number of items


      function buildWitness(sigs, pubkeys) {
        var witness = Buffer.alloc(0); // Two items in each vector (sig, pubkey)

        var len = Buffer.alloc(1);
        len.writeUInt8(2);

        for (var i = 0; i < sigs.length; i++) {
          var sig = Buffer.concat([sigs[i], DEFAULT_SIGHASH_BUFFER]);
          var sigLen = getVarInt(sig.length);
          var pubkey = pubkeys[i];
          var pubkeyLen = getVarInt(pubkey.length);
          witness = Buffer.concat([witness, len, sigLen, sig, pubkeyLen, pubkey]);
        }

        return witness;
      } // Locking script buiders
      //-----------------------


      function buildLockingScript(address) {
        var versionByte = bs58.decode(address)[0];
        var pubkeyhash = bs58check.decode(address).slice(1);

        if (versionByte === addressVersion.SEGWIT || versionByte === addressVersion.SEGWIT_TESTNET) {
          // Also works for p2sh
          return buildP2shLockingScript(pubkeyhash);
        } else {
          // We assume testnet uses p2pkh
          return buildP2pkhLockingScript(pubkeyhash);
        }
      }

      function buildP2pkhLockingScript(pubkeyhash) {
        var out = Buffer.alloc(5 + pubkeyhash.length);
        var off = 0;
        out.writeUInt8(OP.DUP, off);
        off++;
        out.writeUInt8(OP.HASH160, off);
        off++;
        out.writeUInt8(pubkeyhash.length, off);
        off++;
        pubkeyhash.copy(out, off);
        off += pubkeyhash.length;
        out.writeUInt8(OP.EQUALVERIFY, off);
        off++;
        out.writeUInt8(OP.CHECKSIG, off);
        off++;
        return out;
      }

      function buildP2shLockingScript(pubkeyhash) {
        var out = Buffer.alloc(3 + pubkeyhash.length);
        var off = 0;
        out.writeUInt8(OP.HASH160, off);
        off++;
        out.writeUInt8(pubkeyhash.length, off);
        off++;
        pubkeyhash.copy(out, off);
        off += pubkeyhash.length;
        out.writeUInt8(OP.EQUAL, off);
        off++;
        return out;
      } // Static Utils
      //----------------------


      function concat(base, addition) {
        return Buffer.concat([base, addition]);
      }

      function getU64LE(x) {
        var buffer = Buffer.alloc(8);
        writeUInt64LE(x, buffer, 0);
        return buffer;
      }

      function getU32LE(x) {
        var buffer = Buffer.alloc(4);
        buffer.writeUInt32LE(x);
        return buffer;
      }

      function getVarInt(x) {
        var buffer;

        if (x < 0xfd) {
          buffer = Buffer.alloc(1);
          buffer.writeUInt8(x);
        } else if (x <= 0xffff) {
          buffer = Buffer.alloc(3);
          buffer.writeUInt8(0xfd, 0);
          buffer.writeUInt16LE(x, 1);
        } else if (x < 0xffffffff) {
          buffer = Buffer.alloc(5);
          buffer.writeUInt8(0xfe, 0);
          buffer.writeUInt32LE(x, 1);
        } else {
          buffer = Buffer.alloc(9);
          buffer.writeUInt8(0xff, 0);
          buffer.writeUInt32LE(x >>> 0, 1);
          buffer.writeUInt32LE(x / 0x100000000 | 0, 5);
        }

        return buffer;
      }

      function writeUInt64LE(n, buf, off) {
        if (typeof n === 'number') n = n.toString(16);
        var preBuf = Buffer.alloc(8);
        var nStr = n.length % 2 === 0 ? n.toString(16) : "0".concat(n.toString(16));
        var nBuf = Buffer.from(nStr, 'hex');
        nBuf.reverse().copy(preBuf, 0);
        preBuf.copy(buf, off);
        return preBuf;
      }
      /***/

    },

    /***/
    "8zgK":
    /*!**************************************************!*\
      !*** ./node_modules/superagent/lib/is-object.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function zgK(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Check if `obj` is an object.
       *
       * @param {Object} obj
       * @return {Boolean}
       * @api private
       */

      function isObject(obj) {
        return null !== obj && 'object' === typeof obj;
      }

      module.exports = isObject;
      /***/
    },

    /***/
    "AuWn":
    /*!****************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/reduce-or.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function AuWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the OR operation on the given bits. Returns one bit.
       * Throws if less than 2 bits are given.
       *
       * @example
       * reduceOr([1, 0, 0, 0, 1, 1, 0, 1]) => 1
       *
       * @param {Array} bits input data
       * @return {Integer} OR bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        if (bits.length < 2) throw new RangeError('Not enough bits.');
        var result = bits[0];

        for (var i = 1; i < bits.length; i++) {
          result |= bits[i];
        }

        return result;
      };
      /***/

    },

    /***/
    "Ez8P":
    /*!**************************************************!*\
      !*** ./node_modules/bitwise/esm/nibble/write.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Ez8P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Returns a Nibble (0-15) which equals the given bits.
       *
       * @example
       * byte.write([1,0,1,0]) => 10
       *
       * @param {Array} nibble 4-bit unsigned integer
       * @return {Number}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (nibble) {
        if (!Array.isArray(nibble) || nibble.length !== 4) throw new RangeError('invalid array length');
        var result = 0;

        for (var i = 0; i < 4; i++) {
          if (nibble[3 - i]) result |= 1 << i;
        }

        return result;
      };
      /***/

    },

    /***/
    "G1u+":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/byte/write.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function G1u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Returns a UInt8 (0-255) which equals the given bits.
       *
       * @example
       * byte.write([0,0,1,0,1,0,1,0]) => 42
       *
       * @param {Array} byte 8 bits
       * @return {Number} 8-bit unsigned integer
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (_byte) {
        if (!Array.isArray(_byte) || _byte.length !== 8) throw new RangeError('invalid array length');
        var data = 0;

        for (var i = 0; i < 8; i++) {
          if (_byte[7 - i]) data |= 1 << i;
        }

        return data;
      };
      /***/

    },

    /***/
    "GCxg":
    /*!***************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/create.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function GCxg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /* harmony import */
        var _byte_write__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../byte/write */
        "G1u+");
        /**
         * Creates a new buffer and writes the given bits.
         *
         * @example
         * createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) => buffer with data 1111 0001 1010 0000
         *
         * @param {Array} bits an array containing the bits to insert
         * @returns {Buffer}
         */

        /* harmony default export */


        __webpack_exports__["default"] = function (bits) {
          var data = [0, 0, 0, 0, 0, 0, 0, 0];
          var buffer = Buffer.alloc(Math.ceil(bits.length / 8));

          for (var i = 0; i < buffer.length; i++) {
            for (var j = 0; j < 8; j++) {
              if (bits[i * 8 + j]) data[j] = bits[i * 8 + j];else data[j] = 0;
            }

            buffer[i] = Object(_byte_write__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
          }

          return buffer;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "GHyM":
    /*!**************************************************!*\
      !*** ./node_modules/bitwise/esm/string/index.js ***!
      \**************************************************/

    /*! exports provided: toBits, default */

    /***/
    function GHyM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _to_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./to-bits */
      "oMMx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toBits", function () {
        return _to_bits__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony default export */


      __webpack_exports__["default"] = {
        toBits: _to_bits__WEBPACK_IMPORTED_MODULE_0__["default"]
      };
      /***/
    },

    /***/
    "HEpO":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/integer/get-bit.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function HEpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Gets the value of a specific bit.
       * @example bitwise.integer.getBit(128, 7) => 1
       * @param {Integer} int32 input number
       * @param {Integer} position bit's position
       * @returns {Integer} bit's value
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (int32, position) {
        return int32 >> position & 1;
      };
      /***/

    },

    /***/
    "HFhI":
    /*!**************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/index.js ***!
      \**************************************************/

    /*! exports provided: and, create, modify, nand, nor, not, or, read, readInt, readUInt, xnor, xor, default */

    /***/
    function HFhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _and__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./and */
      "XUzR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "and", function () {
        return _and__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create */
      "GCxg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "create", function () {
        return _create__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _modify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modify */
      "2t92");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "modify", function () {
        return _modify__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _nand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nand */
      "nMdu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nand", function () {
        return _nand__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _nor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nor */
      "ILq/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nor", function () {
        return _nor__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./not */
      "f7RY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "not", function () {
        return _not__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _or__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./or */
      "YnKP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "or", function () {
        return _or__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _read__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./read */
      "UPHr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "read", function () {
        return _read__WEBPACK_IMPORTED_MODULE_7__["default"];
      });
      /* harmony import */


      var _read_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./read-int */
      "MgST");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "readInt", function () {
        return _read_int__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /* harmony import */


      var _read_u_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./read-u-int */
      "ktnI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "readUInt", function () {
        return _read_u_int__WEBPACK_IMPORTED_MODULE_9__["default"];
      });
      /* harmony import */


      var _xnor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./xnor */
      "vGFC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "xnor", function () {
        return _xnor__WEBPACK_IMPORTED_MODULE_10__["default"];
      });
      /* harmony import */


      var _xor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./xor */
      "5tNv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "xor", function () {
        return _xor__WEBPACK_IMPORTED_MODULE_11__["default"];
      });
      /* harmony default export */


      __webpack_exports__["default"] = {
        and: _and__WEBPACK_IMPORTED_MODULE_0__["default"],
        create: _create__WEBPACK_IMPORTED_MODULE_1__["default"],
        modify: _modify__WEBPACK_IMPORTED_MODULE_2__["default"],
        nand: _nand__WEBPACK_IMPORTED_MODULE_3__["default"],
        nor: _nor__WEBPACK_IMPORTED_MODULE_4__["default"],
        not: _not__WEBPACK_IMPORTED_MODULE_5__["default"],
        or: _or__WEBPACK_IMPORTED_MODULE_6__["default"],
        read: _read__WEBPACK_IMPORTED_MODULE_7__["default"],
        readInt: _read_int__WEBPACK_IMPORTED_MODULE_8__["default"],
        readUInt: _read_u_int__WEBPACK_IMPORTED_MODULE_9__["default"],
        xnor: _xnor__WEBPACK_IMPORTED_MODULE_10__["default"],
        xor: _xor__WEBPACK_IMPORTED_MODULE_11__["default"]
      };
      /***/
    },

    /***/
    "ILq/":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/nor.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function ILq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise NOR to the contents of two buffers. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.nor(a, b, false) => Buffer(a NOR b)
        *
        * @param {Buffer} a first buffer
        * @param {Buffer} b second buffer
        * @param {Boolean} isLooping loop through first buffer
        * @return {Buffer} a NOR b
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (a, b, isLooping) {
          if (isLooping === void 0) {
            isLooping = false;
          }

          var length = isLooping ? b.length : a.length;
          var result = Buffer.alloc(length);

          for (var i = 0; i < length; i++) {
            var j = isLooping ? i % a.length : i;
            result[i] = ~(a[j] | b[i]);
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "IunX":
    /*!**********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/not.js ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function IunX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Flips all given bits and returns the flipped bits.
       *
       * @example
       * not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
       *
       * @param {Array} bits input data
       * @return {Array} [NOT bits]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        var result = [];

        for (var i = 0; i < bits.length; i++) {
          result[i] = bits[i] ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "Jtfa":
    /*!******************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/reduce-nand.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function Jtfa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the NAND operation on the given bits. Returns one bit.
       * Throws if less than 2 bits are given.
       *
       * @example
       * reduceNand([1, 0, 0, 0, 1, 1, 0, 1]) => 0
       *
       * @param {Array} bits input data
       * @return {Integer} NAND bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        if (bits.length < 2) throw new RangeError('Not enough bits.');
        var result = bits[0];

        for (var i = 1; i < bits.length; i++) {
          result = result & bits[i] ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "L1CG":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/byte/index.js ***!
      \************************************************/

    /*! exports provided: read, write, default */

    /***/
    function L1CG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./read */
      "gb0s");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "read", function () {
        return _read__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _write__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./write */
      "G1u+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "write", function () {
        return _write__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony default export */


      __webpack_exports__["default"] = {
        read: _read__WEBPACK_IMPORTED_MODULE_0__["default"],
        write: _write__WEBPACK_IMPORTED_MODULE_1__["default"]
      };
      /***/
    },

    /***/
    "L21C":
    /*!****************************************************!*\
      !*** ./node_modules/gridplus-sdk/src/constants.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function L21C(module, exports) {
      var _responseMsgs;

      // Consistent with Lattice's IV
      var AES_IV = [0x6d, 0x79, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64];
      var ADDR_STR_LEN = 129; // 128-char strings (null terminated)
      // Decrypted response lengths will be fixed for any given message type.
      // These are defined in the Lattice spec.
      // Every decrypted response should have a 65-byte pubkey prefixing it (and a 4-byte request ID)
      // These are NOT counted in `decResLengths`, meaning these values are 69-bytes smaller than the
      // corresponding structs in firmware.

      var decResLengths = {
        finalizePair: 0,
        // Only contains the pubkey
        getAddresses: 10 * ADDR_STR_LEN,
        // 10x 129 byte strings (128 bytes + null terminator)
        sign: 1090,
        // 1 DER signature for ETH, 10 for BTC + change pubkeyhash
        getWallets: 142,
        // 71 bytes per wallet record (response contains internal and external)
        addAbiDefs: 8,
        test: 1646 // Max size of test response payload

      }; // Every corresponding decrypted response struct in firmware has a pubkey
      // and checksum added. These are not included in `decResLengths`

      var DES_RES_EXTRADATA_LEN = 69; // Encrypted responses also have metadata
      // Prefix:
      // * protocol version (1 byte)
      // * response type, reserved (1 byte) -- not used
      // * response id (4 bytes) -- not used
      // * payload length (2 bytes)
      // * response code (1 byte)
      // Suffix:
      // * checksum (4 bytes) -- NOT the same checksum as inside the decrypted msg

      var ENC_MSG_METADATA_LEN = 13;
      var ENC_MSG_EXTRA_LEN = DES_RES_EXTRADATA_LEN + ENC_MSG_METADATA_LEN; // Per Lattice spec, all encrypted messages must fit in a buffer of this size.
      // The length comes from the largest request/response data type size
      // We also add the prefix length

      var ENC_MSG_LEN = 0;
      Object.keys(decResLengths).forEach(function (k) {
        if (decResLengths[k] + ENC_MSG_EXTRA_LEN > ENC_MSG_LEN) ENC_MSG_LEN = decResLengths[k] + ENC_MSG_EXTRA_LEN;
      });
      var deviceCodes = {
        'CONNECT': 1,
        'ENCRYPTED_REQUEST': 2
      };
      var encReqCodes = {
        'FINALIZE_PAIRING': 0x00,
        'GET_ADDRESSES': 0x01,
        'ADD_PERMISSION': 0x02,
        'SIGN_TRANSACTION': 0x03,
        'GET_WALLETS': 0x04,
        'ADD_PERMISSION_V0': 0x05,
        'ADD_ABI_DEFS': 0x06,
        'TEST': 0x07
      };
      var messageConstants = {
        'NOT_PAIRED': 0x00,
        'PAIRED': 0x01
      };
      var addressSizes = {
        'BTC': 20,
        // 20 byte pubkeyhash
        'ETH': 20 // 20 byte address not including 0x prefix

      };
      var responseCodes = {
        RESP_SUCCESS: 0x00,
        RESP_ERR_INVALID_MSG: 0x80,
        RESP_ERR_UNSUPPORTED_VER: 0x81,
        RESP_ERR_DEV_BUSY: 0x82,
        RESP_ERR_USER_TIMEOUT: 0x83,
        RESP_ERR_USER_DECLINED: 0x84,
        RESP_ERR_PAIR_FAIL: 0x85,
        RESP_ERR_PAIR_DISABLED: 0x86,
        RESP_ERR_PERMISSION_DISABLED: 0x87,
        RESP_ERR_INTERNAL: 0x88,
        RESP_ERR_GCE_TIMEOUT: 0x89,
        RESP_ERR_WALLET_NOT_PRESENT: 0x8a,
        RESP_ERR_DEV_LOCKED: 0x8b,
        RESP_ERR_DISABLED: 0x8c,
        RESP_ERR_ALREADY: 0x8d
      };
      var responseMsgs = (_responseMsgs = {}, _defineProperty(_responseMsgs, responseCodes.RESP_SUCCESS, 0x00), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_INVALID_MSG, 'Invalid Request'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_UNSUPPORTED_VER, 'Unsupported Version'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_DEV_BUSY, 'Device Busy'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_USER_TIMEOUT, 'Timeout Waiting for User'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_USER_DECLINED, 'Request Declined by User'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_PAIR_FAIL, 'Pairing Failed'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_PAIR_DISABLED, 'Pairing is Currently Disabled'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_PERMISSION_DISABLED, 'Automated Signing is Currently Disabled'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_INTERNAL, 'Device Error'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_GCE_TIMEOUT, 'Timeout'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_WALLET_NOT_PRESENT, 'Incorrect Wallet UID Provided'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_DEV_LOCKED, 'Device Locked'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_DISABLED, 'Disabled'), _defineProperty(_responseMsgs, responseCodes.RESP_ERR_ALREADY, 'Record already exists. You must first remove it on your device.'), _responseMsgs);
      var signingSchema = {
        BTC_TRANSFER: 0,
        ETH_TRANSFER: 1,
        ERC20_TRANSFER: 2,
        ETH_MSG: 3
      };
      var ethMsgProtocol = {
        SIGN_PERSONAL: 0
      };
      var REQUEST_TYPE_BYTE = 0x02; // For all HSM-bound requests

      var VERSION_BYTE = 1;
      var HARDENED_OFFSET = 0x80000000; // Hardened offset

      var HANDLE_LARGER_CHAIN_ID = 255; // ChainId value to signify larger chainID is in data buffer

      var MAX_CHAIN_ID_BYTES = 8; // Max number of bytes to contain larger chainID in data buffer

      var BASE_URL = 'https://signing.gridpl.us';
      var ETH_ABI_LATTICE_FW_TYPE_MAP = {
        'address': 1,
        'bool': 2,
        'uint8': 3,
        'uint16': 4,
        'uint32': 5,
        'uint64': 6,
        'uint128': 7,
        'uint256': 8,
        // 'int8': 9,      // We do not support signed integer types in v1 because we can't display them
        // 'int16': 10,
        // 'int24': 11,
        // 'int64': 12,
        // 'int128': 13,
        // 'int256': 14,
        'uint': 15,
        // 'int': 16,
        'bytes1': 17,
        'bytes2': 18,
        'bytes3': 19,
        'bytes4': 20,
        'bytes5': 21,
        'bytes6': 22,
        'bytes7': 23,
        'bytes8': 24,
        'bytes9': 25,
        'bytes10': 26,
        'bytes11': 27,
        'bytes12': 28,
        'bytes13': 29,
        'bytes14': 30,
        'bytes15': 31,
        'bytes16': 32,
        'bytes17': 33,
        'bytes18': 34,
        'bytes19': 35,
        'bytes20': 36,
        'bytes21': 37,
        'bytes22': 38,
        'bytes23': 39,
        'bytes24': 40,
        'bytes25': 41,
        'bytes26': 42,
        'bytes27': 43,
        'bytes28': 44,
        'bytes29': 45,
        'bytes30': 46,
        'bytes31': 47,
        'bytes32': 48,
        'bytes': 49,
        'string': 50
      };

      function getFwVersionConst(v) {
        var c = {
          reqMaxDataSz: 1152
        };

        if (v.length === 0 || v[1] < 10 && v[2] === 0) {
          c.ethMaxDataSz = c.reqMaxDataSz - 128;
          c.ethMaxMsgSz = c.ethMaxDataSz;
          c.ethMaxGasPrice = 500000000000; // 500 gwei

          c.addrFlagsAllowed = false;
        } else if (v[1] >= 10 && v[2] >= 0) {
          c.reqMaxDataSz = 1678;
          c.ethMaxDataSz = c.reqMaxDataSz - 128;
          c.ethMaxMsgSz = c.ethMaxDataSz;
          c.ethMaxGasPrice = 20000000000000; // 20000 gwei

          c.addrFlagsAllowed = true;
        }

        return c;
      }

      module.exports = {
        getFwVersionConst: getFwVersionConst,
        ADDR_STR_LEN: ADDR_STR_LEN,
        AES_IV: AES_IV,
        BASE_URL: BASE_URL,
        ENC_MSG_LEN: ENC_MSG_LEN,
        addressSizes: addressSizes,
        decResLengths: decResLengths,
        deviceCodes: deviceCodes,
        encReqCodes: encReqCodes,
        ethMsgProtocol: ethMsgProtocol,
        messageConstants: messageConstants,
        responseCodes: responseCodes,
        responseMsgs: responseMsgs,
        signingSchema: signingSchema,
        REQUEST_TYPE_BYTE: REQUEST_TYPE_BYTE,
        VERSION_BYTE: VERSION_BYTE,
        HARDENED_OFFSET: HARDENED_OFFSET,
        HANDLE_LARGER_CHAIN_ID: HANDLE_LARGER_CHAIN_ID,
        MAX_CHAIN_ID_BYTES: MAX_CHAIN_ID_BYTES,
        ETH_ABI_LATTICE_FW_TYPE_MAP: ETH_ABI_LATTICE_FW_TYPE_MAP
      };
      /***/
    },

    /***/
    "MgST":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/read-int.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function MgST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utilities */
      "yE/9");
      /* harmony import */


      var _bits_not__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../bits/not */
      "IunX");
      /* harmony import */


      var _read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./read */
      "UPHr");
      /**
       * Converts a section of a buffer to a signed integer.
       *
       * @example
       * // buffer 11110110
       * readUInt(buffer, 3, 5) => -10
       *
       * @param {Buffer} buffer the buffer to extract information from
       * @param {Number} length the length of the signed integer (in bits)
       * @param {Number} offset where to start (in bits)
       * @return {Number}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (buffer, offset, length) {
        if (offset === void 0) {
          offset = 0;
        }

        if (length === void 0) {
          length = 8;
        }

        var bits = Object(_read__WEBPACK_IMPORTED_MODULE_2__["default"])(buffer, offset, length);

        if (bits[0] === 0) {
          var result = 0;

          for (var i = 0; i < length; i++) {
            if (bits[i]) result += _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
          }

          return result;
        } else {
          var result = -1;
          var inverted = Object(_bits_not__WEBPACK_IMPORTED_MODULE_1__["default"])(bits);

          for (var i = 0; i < length; i++) {
            if (inverted[i]) result -= _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
          }

          return result;
        }
      };
      /***/

    },

    /***/
    "Mh05":
    /*!******************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/reduce-xnor.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function Mh05(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the XNOR operation on the given bits. Returns one bit.
       * Throws if less than 2 bits are given.
       *
       * @example
       * reduceXnor([1, 0, 0, 0, 1, 1, 0, 1]) => 1
       *
       * @param {Array} bits input data
       * @return {Integer} XNOR bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        if (bits.length < 2) throw new RangeError('Not enough bits.');
        var result = bits[0];

        for (var i = 1; i < bits.length; i++) {
          result ^= bits[i] ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "PLHu":
    /*!***********************************************!*\
      !*** ./node_modules/gridplus-sdk/src/util.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function PLHu(module, exports, __webpack_require__) {
      // Static utility functions
      var _webpack_require__2 = __webpack_require__(
      /*! ./bitcoin */
      "6WMX"),
          buildBitcoinTxRequest = _webpack_require__2.buildBitcoinTxRequest;

      var _webpack_require__3 = __webpack_require__(
      /*! ./ethereum */
      "xKF7"),
          buildEthereumTxRequest = _webpack_require__3.buildEthereumTxRequest,
          buildEthereumMsgRequest = _webpack_require__3.buildEthereumMsgRequest,
          ensureHexBuffer = _webpack_require__3.ensureHexBuffer;

      var Buffer = __webpack_require__(
      /*! buffer/ */
      "tjlA").Buffer;

      var aes = __webpack_require__(
      /*! aes-js */
      "cke4");

      var crc32 = __webpack_require__(
      /*! crc-32 */
      "cC09");

      var elliptic = __webpack_require__(
      /*! elliptic */
      "MzeL");

      var _webpack_require__4 = __webpack_require__(
      /*! ./constants */
      "L21C"),
          AES_IV = _webpack_require__4.AES_IV,
          responseCodes = _webpack_require__4.responseCodes,
          responseMsgs = _webpack_require__4.responseMsgs,
          VERSION_BYTE = _webpack_require__4.VERSION_BYTE;

      var EC = elliptic.ec;
      var ec = new EC('p256'); //--------------------------------------------------
      // LATTICE UTILS
      //--------------------------------------------------
      // Parse a response from the Lattice1

      function parseLattice1Response(r) {
        var parsed = {
          err: null,
          data: null
        };
        var b = Buffer.from(r, 'hex');
        var off = 0; // Get protocol version

        var protoVer = b.readUInt8(off);
        off++;

        if (protoVer !== VERSION_BYTE) {
          parsed.err = 'Incorrect protocol version. Please update your SDK';
          return parsed;
        } // Get the type of response
        // Should always be 0x00


        var msgType = b.readUInt8(off);
        off++;

        if (msgType !== 0x00) {
          parsed.err = 'Incorrect response from Lattice1';
          return parsed;
        } // Get the payload


        b.readUInt32BE(off);
        off += 4; // First 4 bytes is the id, but we don't need that anymore

        var len = b.readUInt16BE(off);
        off += 2;
        var payload = b.slice(off, off + len);
        off += len; // Get response code

        var responseCode = payload.readUInt8(0);

        if (responseCode !== responseCodes.RESP_SUCCESS) {
          parsed.err = "Error from device: ".concat(responseMsgs[responseCode] ? responseMsgs[responseCode] : 'Unknown Error');
          parsed.responseCode = responseCode;
          return parsed;
        } else {
          parsed.data = payload.slice(1, payload.length);
        } // Verify checksum


        var cs = b.readUInt32BE(off);
        var expectedCs = checksum(b.slice(0, b.length - 4));

        if (cs !== expectedCs) {
          parsed.err = 'Invalid checksum from device response';
          parsed.data = null;
          return parsed;
        }

        return parsed;
      }

      function checksum(x) {
        // crc32 returns a signed integer - need to cast it to unsigned
        // Note that this uses the default 0xedb88320 polynomial
        return crc32.buf(x) >>> 0; // Need this to be a uint, hence the bit shift
      } // Get a 74-byte padded DER-encoded signature buffer
      // `sig` must be the signature output from elliptic.js


      function toPaddedDER(sig) {
        // We use 74 as the maximum length of a DER signature. All sigs must
        // be right-padded with zeros so that this can be a fixed size field
        var b = Buffer.alloc(74);
        var ds = Buffer.from(sig.toDER());
        ds.copy(b);
        return b;
      } //--------------------------------------------------
      // TRANSACTION UTILS
      //--------------------------------------------------


      var signReqResolver = {
        'BTC': buildBitcoinTxRequest,
        'ETH': buildEthereumTxRequest,
        'ETH_MSG': buildEthereumMsgRequest
      }; // Temporary helper to determine if this is a supported BIP44 parent path

      function isValidAssetPath(path) {
        var HARDENED_OFFSET = 0x80000000;
        var allowedPurposes = [HARDENED_OFFSET + 49, HARDENED_OFFSET + 44];
        var allowedCoins = [HARDENED_OFFSET, HARDENED_OFFSET + 1, HARDENED_OFFSET + 60];
        var allowedAccounts = [HARDENED_OFFSET];
        var allowedChange = [0, 1];
        return allowedPurposes.indexOf(path[0]) >= 0 && allowedCoins.indexOf(path[1]) >= 0 && allowedAccounts.indexOf(path[2]) >= 0 && allowedChange.indexOf(path[3]) >= 0;
      } //--------------------------------------------------
      // CRYPTO UTILS
      //--------------------------------------------------


      function aes256_encrypt(data, key) {
        var iv = Buffer.from(AES_IV);
        var aesCbc = new aes.ModeOfOperation.cbc(key, iv);
        var paddedData = data.length % 16 === 0 ? data : aes.padding.pkcs7.pad(data);
        return Buffer.from(aesCbc.encrypt(paddedData));
      }

      function aes256_decrypt(data, key) {
        var iv = Buffer.from(AES_IV);
        var aesCbc = new aes.ModeOfOperation.cbc(key, iv);
        return Buffer.from(aesCbc.decrypt(data));
      } // Decode a DER signature. Returns signature object {r, s } or null if there is an error


      function parseDER(sigBuf) {
        if (sigBuf[0] !== 0x30 || sigBuf[2] !== 0x02) return null;
        var off = 3;
        var sig = {
          r: null,
          s: null
        };
        var rLen = sigBuf[off];
        off++;
        sig.r = sigBuf.slice(off, off + rLen);
        off += rLen;
        if (sigBuf[off] !== 0x02) return null;
        off++;
        var sLen = sigBuf[off];
        off++;
        sig.s = sigBuf.slice(off, off + sLen);
        return sig;
      }

      function getP256KeyPair(priv) {
        return ec.keyFromPrivate(priv, 'hex');
      }

      function getP256KeyPairFromPub(pub) {
        return ec.keyFromPublic(pub, 'hex');
      }

      module.exports = {
        isValidAssetPath: isValidAssetPath,
        ensureHexBuffer: ensureHexBuffer,
        signReqResolver: signReqResolver,
        aes256_decrypt: aes256_decrypt,
        aes256_encrypt: aes256_encrypt,
        parseDER: parseDER,
        checksum: checksum,
        parseLattice1Response: parseLattice1Response,
        getP256KeyPair: getP256KeyPair,
        getP256KeyPairFromPub: getP256KeyPairFromPub,
        toPaddedDER: toPaddedDER
      };
      /***/
    },

    /***/
    "Qhm4":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/reduce-and.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Qhm4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the AND operation on the given bits. Returns one bit.
       * Throws if less than 2 bits are given.
       *
       * @example
       * reduceAnd([1, 0, 0, 0, 1, 1, 0, 1]) => 0
       *
       * @param {Array} bits input data
       * @return {Integer} AND bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        if (bits.length < 2) throw new RangeError('Not enough bits.');
        var result = bits[0];

        for (var i = 1; i < bits.length; i++) {
          result &= bits[i];
        }

        return result;
      };
      /***/

    },

    /***/
    "RP9m":
    /*!*********************************************************************!*\
      !*** ./node_modules/gridplus-sdk/node_modules/rlp-browser/index.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function RP9m(module, exports, __webpack_require__) {
      var assert = __webpack_require__(
      /*! assert */
      "9lTW");

      var Buffer = __webpack_require__(
      /*! buffer/ */
      "tjlA").Buffer;
      /**
       * RLP Encoding based on: https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP
       * This function takes in a data, convert it to buffer if not, and a length for recursion
       *
       * @param {Buffer,String,Integer,Array} data - will be converted to buffer
       * @returns {Buffer} - returns buffer of encoded data
       **/


      exports.encode = function (input) {
        if (input instanceof Array) {
          var output = [];

          for (var i = 0; i < input.length; i++) {
            output.push(exports.encode(input[i]));
          }

          var buf = Buffer.concat(output);
          return Buffer.concat([encodeLength(buf.length, 192), buf]);
        } else {
          input = toBuffer(input);

          if (input.length === 1 && input[0] < 128) {
            return input;
          } else {
            return Buffer.concat([encodeLength(input.length, 128), input]);
          }
        }
      };

      function safeParseInt(v, base) {
        if (v.slice(0, 2) === '00') {
          throw new Error('invalid RLP: extra zeros');
        }

        return parseInt(v, base);
      }

      function encodeLength(len, offset) {
        if (len < 56) {
          return new Buffer([len + offset]);
        } else {
          var hexLength = intToHex(len);
          var lLength = hexLength.length / 2;
          var firstByte = intToHex(offset + 55 + lLength);
          return new Buffer(firstByte + hexLength, 'hex');
        }
      }
      /**
       * RLP Decoding based on: {@link https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP|RLP}
       * @param {Buffer,String,Integer,Array} data - will be converted to buffer
       * @returns {Array} - returns decode Array of Buffers containg the original message
       **/


      exports.decode = function (input, stream) {
        if (!input || input.length === 0) {
          return new Buffer([]);
        }

        input = toBuffer(input);

        var decoded = _decode(input);

        if (stream) {
          return decoded;
        }

        assert.equal(decoded.remainder.length, 0, 'invalid remainder');
        return decoded.data;
      };

      exports.getLength = function (input) {
        if (!input || input.length === 0) {
          return new Buffer([]);
        }

        input = toBuffer(input);
        var firstByte = input[0];

        if (firstByte <= 0x7f) {
          return input.length;
        } else if (firstByte <= 0xb7) {
          return firstByte - 0x7f;
        } else if (firstByte <= 0xbf) {
          return firstByte - 0xb6;
        } else if (firstByte <= 0xf7) {
          // a list between  0-55 bytes long
          return firstByte - 0xbf;
        } else {
          // a list  over 55 bytes long
          var llength = firstByte - 0xf6;
          var length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
          return llength + length;
        }
      };

      function _decode(input) {
        var length, llength, data, innerRemainder, d;
        var decoded = [];
        var firstByte = input[0];

        if (firstByte <= 0x7f) {
          // a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.
          return {
            data: input.slice(0, 1),
            remainder: input.slice(1)
          };
        } else if (firstByte <= 0xb7) {
          // string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string
          // The range of the first byte is [0x80, 0xb7]
          length = firstByte - 0x7f; // set 0x80 null to 0

          if (firstByte === 0x80) {
            data = new Buffer([]);
          } else {
            data = input.slice(1, length);
          }

          if (length === 2 && data[0] < 0x80) {
            throw new Error('invalid rlp encoding: byte must be less 0x80');
          }

          return {
            data: data,
            remainder: input.slice(length)
          };
        } else if (firstByte <= 0xbf) {
          llength = firstByte - 0xb6;
          length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
          data = input.slice(llength, length + llength);

          if (data.length < length) {
            throw new Error('invalid RLP');
          }

          return {
            data: data,
            remainder: input.slice(length + llength)
          };
        } else if (firstByte <= 0xf7) {
          // a list between  0-55 bytes long
          length = firstByte - 0xbf;
          innerRemainder = input.slice(1, length);

          while (innerRemainder.length) {
            d = _decode(innerRemainder);
            decoded.push(d.data);
            innerRemainder = d.remainder;
          }

          return {
            data: decoded,
            remainder: input.slice(length)
          };
        } else {
          // a list  over 55 bytes long
          llength = firstByte - 0xf6;
          length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
          var totalLength = llength + length;

          if (totalLength > input.length) {
            throw new Error('invalid rlp: total length is larger than the data');
          }

          innerRemainder = input.slice(llength, totalLength);

          if (innerRemainder.length === 0) {
            throw new Error('invalid rlp, List has a invalid length');
          }

          while (innerRemainder.length) {
            d = _decode(innerRemainder);
            decoded.push(d.data);
            innerRemainder = d.remainder;
          }

          return {
            data: decoded,
            remainder: input.slice(totalLength)
          };
        }
      }

      function isHexPrefixed(str) {
        return str.slice(0, 2) === '0x';
      } // Removes 0x from a given String


      function stripHexPrefix(str) {
        if (typeof str !== 'string') {
          return str;
        }

        return isHexPrefixed(str) ? str.slice(2) : str;
      }

      function intToHex(i) {
        var hex = i.toString(16);

        if (hex.length % 2) {
          hex = '0' + hex;
        }

        return hex;
      }

      function padToEven(a) {
        if (a.length % 2) a = '0' + a;
        return a;
      }

      function intToBuffer(i) {
        var hex = intToHex(i);
        return new Buffer(hex, 'hex');
      }

      function toBuffer(v) {
        if (!Buffer.isBuffer(v)) {
          if (typeof v === 'string') {
            if (isHexPrefixed(v)) {
              v = new Buffer(padToEven(stripHexPrefix(v)), 'hex');
            } else {
              v = new Buffer(v);
            }
          } else if (typeof v === 'number') {
            if (!v) {
              v = new Buffer([]);
            } else {
              v = intToBuffer(v);
            }
          } else if (v === null || v === undefined) {
            v = new Buffer([]);
          } else if (v.toArray) {
            // converts a BN to a Buffer
            v = new Buffer(v.toArray());
          } else {
            throw new Error('invalid type');
          }
        }

        return v;
      }
      /***/

    },

    /***/
    "SfLZ":
    /*!********************************************************!*\
      !*** ./node_modules/bitwise/esm/integer/toggle-bit.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function SfLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Toggles a specific bit.
       * @example bitwise.integer.getBit(128, 7) => 0
       * @param {Integer} int32 input number
       * @param {Integer} position bit’s position
       * @returns {Integer} updated number
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (int32, position) {
        return int32 ^ 1 << position;
      };
      /***/

    },

    /***/
    "T8MV":
    /*!*************************************************************!*\
      !*** ./node_modules/bnc-onboard/dist/esm/index-e4ad6ad7.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function T8MV(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (Buffer) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();

          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;

              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        var crypto = __webpack_require__(
        /*! crypto */
        "HEbw");

        var EventEmitter = __webpack_require__(
        /*! events */
        "+qE3").EventEmitter;

        var SDK = __webpack_require__(
        /*! gridplus-sdk */
        "4Mn8");

        var keyringType = 'Lattice Hardware';
        var HARDENED_OFFSET = 0x80000000;
        var PER_PAGE = 5;
        var CLOSE_CODE = -1000;

        var LatticeKeyring = /*#__PURE__*/function (_EventEmitter) {
          _inherits(LatticeKeyring, _EventEmitter);

          var _super = _createSuper(LatticeKeyring);

          function LatticeKeyring() {
            var _this;

            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, LatticeKeyring);

            _this = _super.call(this);
            _this.type = keyringType;

            _this._resetDefaults();

            _this.deserialize(opts);

            return _this;
          } //-------------------------------------------------------------------
          // Keyring API (per `https://github.com/MetaMask/eth-simple-keyring`)
          //-------------------------------------------------------------------


          _createClass(LatticeKeyring, [{
            key: "deserialize",
            value: function deserialize() {
              var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              if (opts.creds) this.creds = opts.creds;
              if (opts.accounts) this.accounts = opts.accounts;
              if (opts.walletUID) this.walletUID = opts.walletUID;
              if (opts.name) this.name = opts.name;
              if (opts.network) this.network = opts.network;
              return Promise.resolve();
            }
          }, {
            key: "serialize",
            value: function serialize() {
              return Promise.resolve({
                creds: this.creds,
                accounts: this.accounts,
                walletUID: this.walletUID,
                name: this.name,
                network: this.network
              });
            }
          }, {
            key: "isUnlocked",
            value: function isUnlocked() {
              return this._hasCreds() && this._hasSession();
            }
          }, {
            key: "setHdPath",
            value: function setHdPath() {
              console.warn("setHdPath not implemented.");
              return;
            } // Initialize a session with the Lattice1 device using the GridPlus SDK

          }, {
            key: "unlock",
            value: function unlock() {
              var _this2 = this;

              var updateData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
              return new Promise(function (resolve, reject) {
                _this2._getCreds().then(function (creds) {
                  if (creds) {
                    _this2.creds.deviceID = creds.deviceID;
                    _this2.creds.password = creds.password;
                  }

                  return _this2._initSession();
                }).then(function () {
                  return _this2._connect(updateData);
                }).then(function () {
                  return resolve('Unlocked');
                })["catch"](function (err) {
                  return reject(Error(err));
                });
              });
            } // Add addresses to the local store and return the full result

          }, {
            key: "addAccounts",
            value: function addAccounts() {
              var _this3 = this;

              var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return new Promise(function (resolve, reject) {
                if (n === CLOSE_CODE) {
                  // Special case: use a code to forget the device. 
                  // (This function is overloaded due to constraints upstream)
                  _this3.forgetDevice();

                  return resolve([]);
                } else if (n <= 0) {
                  // Avoid non-positive numbers.
                  return reject('Number of accounts to add must be a positive number.');
                } else {
                  // Normal behavior: establish the connection and fetch addresses.
                  _this3.unlock().then(function () {
                    return _this3._fetchAddresses(n, _this3.unlockedAccount);
                  }).then(function (addrs) {
                    var _this3$accounts; // Splice the new account(s) into `this.accounts`


                    _this3.accounts.splice(_this3.unlockedAccount, n);

                    (_this3$accounts = _this3.accounts).splice.apply(_this3$accounts, [_this3.unlockedAccount, 0].concat(_toConsumableArray(addrs)));

                    return resolve(_this3.accounts);
                  })["catch"](function (err) {
                    return reject(err);
                  });
                }
              });
            } // Return the local store of addresses

          }, {
            key: "getAccounts",
            value: function getAccounts() {
              return Promise.resolve(this.accounts ? this.accounts.slice() : [].slice());
            }
          }, {
            key: "signTransaction",
            value: function signTransaction(address, tx) {
              var _this4 = this;

              return new Promise(function (resolve, reject) {
                _this4._unlockAndFindAccount(address).then(function (addrIdx) {
                  // Build the Lattice request data and make request
                  var txData = {
                    chainId: tx.getChainId(),
                    nonce: Number("0x".concat(tx.nonce.toString('hex'))) || 0,
                    gasPrice: Number("0x".concat(tx.gasPrice.toString('hex'))),
                    gasLimit: Number("0x".concat(tx.gasLimit.toString('hex'))),
                    to: "0x".concat(tx.to.toString('hex')),
                    value: Number("0x".concat(tx.value.toString('hex'))),
                    data: tx.data.length === 0 ? null : "0x".concat(tx.data.toString('hex')),
                    signerPath: [HARDENED_OFFSET + 44, HARDENED_OFFSET + 60, HARDENED_OFFSET, 0, addrIdx]
                  };
                  return _this4._signTxData(txData);
                }).then(function (signedTx) {
                  // Add the sig params. `signedTx = { sig: { v, r, s }, tx, txHash}`
                  if (!signedTx.sig || !signedTx.sig.v || !signedTx.sig.r || !signedTx.sig.s) return reject(Error('No signature returned'));
                  tx.v = signedTx.sig.v;
                  tx.r = Buffer.from(signedTx.sig.r, 'hex');
                  tx.s = Buffer.from(signedTx.sig.s, 'hex');
                  return resolve(tx);
                })["catch"](function (err) {
                  return reject(Error(err));
                });
              });
            }
          }, {
            key: "signPersonalMessage",
            value: function signPersonalMessage(address, msg) {
              return this.signMessage(address, {
                payload: msg,
                protocol: 'signPersonal'
              });
            }
          }, {
            key: "signMessage",
            value: function signMessage(address, msg) {
              var _this5 = this;

              return new Promise(function (resolve, reject) {
                _this5._unlockAndFindAccount(address).then(function (addrIdx) {
                  var payload = msg.payload,
                      protocol = msg.protocol;
                  if (!payload || !protocol) return reject('`payload` and `protocol` fields must be included in the request');
                  var req = {
                    currency: 'ETH_MSG',
                    data: {
                      protocol: protocol,
                      payload: payload,
                      signerPath: [HARDENED_OFFSET + 44, HARDENED_OFFSET + 60, HARDENED_OFFSET, 0, addrIdx]
                    }
                  };
                  if (!_this5._hasSession()) return reject('No SDK session started. Cannot sign transaction.');

                  _this5.sdkSession.sign(req, function (err, res) {
                    if (err) return reject(err);
                    if (!res.sig) return reject('No signature returned');
                    var v = (res.sig.v - 27).toString(16);
                    if (v.length < 2) v = "0".concat(v);
                    return resolve("0x".concat(res.sig.r).concat(res.sig.s).concat(v));
                  });
                });
              });
            }
          }, {
            key: "exportAccount",
            value: function exportAccount(address) {
              return Promise.reject(Error('exportAccount not supported by this device'));
            }
          }, {
            key: "removeAccount",
            value: function removeAccount(address) {
              // We only allow one account at a time, so removing any account
              // should result in a state reset. The user will need to reconnect
              // to the Lattice
              this.forgetDevice();
            }
          }, {
            key: "getFirstPage",
            value: function getFirstPage() {
              this.page = 0;
              return this._getPage(1);
            }
          }, {
            key: "getNextPage",
            value: function getNextPage() {
              return this.getFirstPage();
            }
          }, {
            key: "getPreviousPage",
            value: function getPreviousPage() {
              return this.getFirstPage();
            }
          }, {
            key: "setAccountToUnlock",
            value: function setAccountToUnlock(index) {
              this.unlockedAccount = parseInt(index, 10);
            }
          }, {
            key: "forgetDevice",
            value: function forgetDevice() {
              this._resetDefaults();
            } //-------------------------------------------------------------------
            // Internal methods and interface to SDK
            //-------------------------------------------------------------------

          }, {
            key: "_unlockAndFindAccount",
            value: function _unlockAndFindAccount(address) {
              var _this6 = this;

              return new Promise(function (resolve, reject) {
                // NOTE: We are passing `false` here because we do NOT want
                // state data to be updated as a result of a transaction request.
                // It is possible the user inserted or removed a SafeCard and
                // will not be able to sign this transaction. If that is the
                // case, we just want to return an error message
                _this6.unlock(false).then(function () {
                  return _this6.getAccounts();
                }).then(function (addrs) {
                  // Find the signer in our current set of accounts
                  // If we can't find it, return an error
                  var addrIdx = null;
                  addrs.forEach(function (addr, i) {
                    if (address.toLowerCase() === addr.toLowerCase()) addrIdx = i;
                  });
                  if (addrIdx === null) return reject('Signer not present');
                  return resolve(addrIdx);
                })["catch"](function (err) {
                  return reject(err);
                });
              });
            }
          }, {
            key: "_resetDefaults",
            value: function _resetDefaults() {
              this.accounts = [];
              this.isLocked = true;
              this.creds = {
                deviceID: null,
                password: null
              };
              this.walletUID = null;
              this.sdkSession = null;
              this.page = 0;
              this.unlockedAccount = 0;
              this.network = null;
            }
          }, {
            key: "_getCreds",
            value: function _getCreds() {
              var _this7 = this;

              return new Promise(function (resolve, reject) {
                // We only need to setup if we don't have a deviceID
                if (_this7._hasCreds()) return resolve(); // If we are not aware of what Lattice we should be talking to,
                // we need to open a window that lets the user go through the
                // pairing or connection process.

                var name = _this7.name ? _this7.name : 'Unknown';
                var base = 'https://wallet.gridplus.io';
                if (_this7.network && _this7.network !== 'mainnet') base = 'https://gridplus-web-wallet-dev.herokuapp.com';
                var url = "".concat(base, "?keyring=").concat(name);
                if (_this7.network) url += "&network=".concat(_this7.network);
                var popup = window.open(url);
                popup.postMessage('GET_LATTICE_CREDS', base); // PostMessage handler

                function receiveMessage(event) {
                  // Ensure origin
                  if (event.origin !== base) return; // Parse response data

                  try {
                    var data = JSON.parse(event.data);
                    if (!data.deviceID || !data.password) return reject(Error('Invalid credentials returned from Lattice.'));
                    return resolve(data);
                  } catch (err) {
                    return reject(err);
                  }
                }

                window.addEventListener("message", receiveMessage, false);
              });
            } // [re]connect to the Lattice. This should be done frequently to ensure
            // the expected wallet UID is still the one active in the Lattice.
            // This will handle SafeCard insertion/removal events.
            // updateData - true if you want to overwrite walletUID and accounts in
            //              the event that we find we are not synced.
            //              If left false and we notice a new walletUID, we will
            //              return an error.

          }, {
            key: "_connect",
            value: function _connect(updateData) {
              var _this8 = this;

              return new Promise(function (resolve, reject) {
                _this8.sdkSession.connect(_this8.creds.deviceID, function (err) {
                  if (err) return reject(err); // Save the current wallet UID

                  var activeWallet = _this8.sdkSession.getActiveWallet();

                  if (!activeWallet || !activeWallet.uid) return reject("No active wallet");
                  var newUID = activeWallet.uid.toString('hex'); // If we fetched a walletUID that does not match our current one,
                  // reset accounts and update the known UID

                  if (newUID != _this8.walletUID) {
                    // If we don't want to update data, return an error
                    if (updateData === false) return reject('Wallet has changed! Please reconnect.'); // By default we should clear out accounts and update with
                    // the new walletUID. We should NOT fill in the accounts yet,
                    // as we reserve that functionality to `addAccounts`

                    _this8.accounts = [];
                    _this8.walletUID = newUID;
                  }

                  return resolve();
                });
              });
            }
          }, {
            key: "_initSession",
            value: function _initSession() {
              var _this9 = this;

              return new Promise(function (resolve, reject) {
                if (_this9._hasSession()) return resolve();

                try {
                  var url = 'https://signing.gridpl.us';
                  if (_this9.network && _this9.network !== 'mainnet') url = 'https://signing.staging-gridpl.us';
                  var setupData = {
                    name: _this9.name,
                    baseUrl: url,
                    crypto: crypto,
                    timeout: 120000,
                    privKey: _this9._genSessionKey(),
                    network: _this9.network
                  };
                  _this9.sdkSession = new SDK.Client(setupData);
                  return resolve();
                } catch (err) {
                  return reject(err);
                }
              });
            }
          }, {
            key: "_fetchAddresses",
            value: function _fetchAddresses() {
              var _this10 = this;

              var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              return new Promise(function (resolve, reject) {
                if (!_this10._hasSession()) return reject('No SDK session started. Cannot fetch addresses.'); // The Lattice does not allow for us to skip indices.

                if (i > _this10.accounts.length) return reject("Requested address is out of bounds. You may only request index <".concat(_this10.accounts.length)); // If we have already cached the address(es), we don't need to do it again

                if (_this10.accounts.length > i) return resolve(_this10.accounts.slice(i, n)); // Make the request to get the requested address

                var addrData = {
                  currency: 'ETH',
                  startPath: [HARDENED_OFFSET + 44, HARDENED_OFFSET + 60, HARDENED_OFFSET, 0, i],
                  n: n // Only request one at a time. This module only supports ETH, so no gap limits

                };

                _this10.sdkSession.getAddresses(addrData, function (err, addrs) {
                  if (err) return reject(Error("Error getting addresses: ".concat(err))); // Sanity check -- if this returned 0 addresses, handle the error

                  if (addrs.length < 1) return reject('No addresses returned'); // Return the addresses we fetched *without* updating state

                  return resolve(addrs);
                });
              });
            }
          }, {
            key: "_signTxData",
            value: function _signTxData(txData) {
              var _this11 = this;

              return new Promise(function (resolve, reject) {
                if (!_this11._hasSession()) return reject('No SDK session started. Cannot sign transaction.');

                _this11.sdkSession.sign({
                  currency: 'ETH',
                  data: txData
                }, function (err, res) {
                  if (err) return reject(err);
                  if (!res.tx) return reject('No transaction payload returned.');
                  return resolve(res);
                });
              });
            }
          }, {
            key: "_getPage",
            value: function _getPage() {
              var _this12 = this;

              var increment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return new Promise(function (resolve, reject) {
                _this12.page += increment;
                if (_this12.page <= 0) _this12.page = 1;
                var start = PER_PAGE * (_this12.page - 1);
                var to = PER_PAGE * _this12.page;

                _this12.unlock().then(function () {
                  // V1: We will only support export of one (the first) address
                  return _this12._fetchAddresses(1, 0); //-----------
                }).then(function (addrs) {
                  // Build some account objects from the addresses
                  var localAccounts = [];
                  addrs.forEach(function (addr, i) {
                    localAccounts.push({
                      address: addr,
                      balance: null,
                      index: start + i
                    });
                  });
                  return resolve(localAccounts);
                })["catch"](function (err) {
                  return reject(err);
                });
              });
            }
          }, {
            key: "_hasCreds",
            value: function _hasCreds() {
              return this.creds.deviceID !== null && this.creds.password !== null && this.name;
            }
          }, {
            key: "_hasSession",
            value: function _hasSession() {
              return this.sdkSession && this.walletUID;
            }
          }, {
            key: "_genSessionKey",
            value: function _genSessionKey() {
              if (!this._hasCreds()) throw new Error('No credentials -- cannot create session key!');
              var buf = Buffer.concat([Buffer.from(this.creds.password), Buffer.from(this.creds.deviceID), Buffer.from(this.name)]);
              return crypto.createHash('sha256').update(buf).digest();
            }
          }]);

          return LatticeKeyring;
        }(EventEmitter);

        LatticeKeyring.type = keyringType;
        module.exports = LatticeKeyring;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "UBEi":
    /*!**********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/and.js ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function UBEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the AND operation, expects two arrays of the same size and returns a new one.
       *
       * @example
       * and([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,0,0,1,0,0]
       *
       * @param {Array} bits1 input data
       * @param {Array} bits2 input data
       * @return {Array} [bits1 AND bits2]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits1, bits2) {
        var result = [];

        for (var i = 0; i < bits1.length; i++) {
          result[i] = bits1[i] & bits2[i];
        }

        return result;
      };
      /***/

    },

    /***/
    "UPHr":
    /*!*************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/read.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function UPHr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _byte_read__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../byte/read */
      "gb0s");
      /**
       * Returns an Array containing bitLength bits starting at bitOffset.
       *
       * @example
       * readBuffer(buffer, 2, 4) => [0,0,1,0]
       *
       * @param {Buffer} buffer the buffer to read
       * @param {Number} offset where to start (in bits)
       * @param {Number} length how many bits to read
       * @returns {Array}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (buffer, offset, length) {
        if (offset === void 0) {
          offset = 0;
        }

        if (!length) length = buffer.length * 8 - offset;
        var start = Math.floor(offset / 8);
        var bytesToRead = Math.floor(length / 8) + 2;
        var arr = [];
        arr.length = bytesToRead * 8;

        for (var i = 0; i < bytesToRead; i++) {
          var toRead = buffer[start + i];
          if (toRead === undefined) continue;
          var bits = Object(_byte_read__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer[start + i]);
          arr[i * 8] = bits[0];
          arr[i * 8 + 1] = bits[1];
          arr[i * 8 + 2] = bits[2];
          arr[i * 8 + 3] = bits[3];
          arr[i * 8 + 4] = bits[4];
          arr[i * 8 + 5] = bits[5];
          arr[i * 8 + 6] = bits[6];
          arr[i * 8 + 7] = bits[7];
        }

        var subOffset = offset % 8;
        return arr.slice(subOffset, subOffset + length);
      };
      /***/

    },

    /***/
    "WtjK":
    /*!**********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/xor.js ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function WtjK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the exclusive or operation, expects two arrays of the same size and returns a new one.
       *
       * @example
       * xor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,0,0,1]
       *
       * @param {Array} bits1 input data
       * @param {Array} bits2 input data
       * @return {Array} [bits1 XOR bits2]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits1, bits2) {
        var result = [];

        for (var i = 0; i < bits1.length; i++) {
          result[i] = bits1[i] ^ bits2[i];
        }

        return result;
      };
      /***/

    },

    /***/
    "XUzR":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/and.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function XUzR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise AND to the contents of two buffers. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.and(a, b, false) => Buffer(a AND b)
        *
        * @param {Buffer} a first buffer
        * @param {Buffer} b second buffer
        * @param {Boolean} isLooping loop through first buffer
        * @return {Buffer} a AND b
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (a, b, isLooping) {
          if (isLooping === void 0) {
            isLooping = false;
          }

          var length = isLooping ? b.length : a.length;
          var result = Buffer.alloc(length);

          for (var i = 0; i < length; i++) {
            var j = isLooping ? i % a.length : i;
            result[i] = a[j] & b[i];
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "XYxn":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/to-boolean.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XYxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Converts a bit array to a boolean array.
       *
       * @example toBoolean([0, 1]) => [false, true]
       * @param {Array} bits input data
       * @returns {Array} boolean bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        var result = [];

        for (var i = 0; i < bits.length; i++) {
          result[i] = bits[i] === 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "YnKP":
    /*!***********************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/or.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function YnKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise OR to the contents of two buffers. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.or(a, b, false) => Buffer(a OR b)
        *
        * @param {Buffer} a first buffer
        * @param {Buffer} b second buffer
        * @param {Boolean} isLooping loop through first buffer
        * @return {Buffer} a OR b
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (a, b, isLooping) {
          if (isLooping === void 0) {
            isLooping = false;
          }

          var length = isLooping ? b.length : a.length;
          var result = Buffer.alloc(length);

          for (var i = 0; i < length; i++) {
            var j = isLooping ? i % a.length : i;
            result[i] = a[j] | b[i];
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "cC09":
    /*!**************************************!*\
      !*** ./node_modules/crc-32/crc32.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function cC09(module, exports, __webpack_require__) {
      /* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */

      /* vim: set ts=2: */

      /*exported CRC32 */
      var CRC32;

      (function (factory) {
        /*jshint ignore:start */

        /*eslint-disable */
        if (typeof DO_NOT_EXPORT_CRC === 'undefined') {
          if (true) {
            factory(exports);
          } else {}
        } else {
          factory(CRC32 = {});
        }
        /*eslint-enable */

        /*jshint ignore:end */

      })(function (CRC32) {
        CRC32.version = '1.2.0';
        /* see perf/crc32table.js */

        /*global Int32Array */

        function signed_crc_table() {
          var c = 0,
              table = new Array(256);

          for (var n = 0; n != 256; ++n) {
            c = n;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            table[n] = c;
          }

          return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
        }

        var T = signed_crc_table();

        function crc32_bstr(bstr, seed) {
          var C = seed ^ -1,
              L = bstr.length - 1;

          for (var i = 0; i < L;) {
            C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
            C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
          }

          if (i === L) C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i)) & 0xFF];
          return C ^ -1;
        }

        function crc32_buf(buf, seed) {
          if (buf.length > 10000) return crc32_buf_8(buf, seed);
          var C = seed ^ -1,
              L = buf.length - 3;

          for (var i = 0; i < L;) {
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          }

          while (i < L + 3) {
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          }

          return C ^ -1;
        }

        function crc32_buf_8(buf, seed) {
          var C = seed ^ -1,
              L = buf.length - 7;

          for (var i = 0; i < L;) {
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          }

          while (i < L + 7) {
            C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
          }

          return C ^ -1;
        }

        function crc32_str(str, seed) {
          var C = seed ^ -1;

          for (var i = 0, L = str.length, c, d; i < L;) {
            c = str.charCodeAt(i++);

            if (c < 0x80) {
              C = C >>> 8 ^ T[(C ^ c) & 0xFF];
            } else if (c < 0x800) {
              C = C >>> 8 ^ T[(C ^ (192 | c >> 6 & 31)) & 0xFF];
              C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
            } else if (c >= 0xD800 && c < 0xE000) {
              c = (c & 1023) + 64;
              d = str.charCodeAt(i++) & 1023;
              C = C >>> 8 ^ T[(C ^ (240 | c >> 8 & 7)) & 0xFF];
              C = C >>> 8 ^ T[(C ^ (128 | c >> 2 & 63)) & 0xFF];
              C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 0xFF];
              C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 0xFF];
            } else {
              C = C >>> 8 ^ T[(C ^ (224 | c >> 12 & 15)) & 0xFF];
              C = C >>> 8 ^ T[(C ^ (128 | c >> 6 & 63)) & 0xFF];
              C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
            }
          }

          return C ^ -1;
        }

        CRC32.table = T; // $FlowIgnore

        CRC32.bstr = crc32_bstr; // $FlowIgnore

        CRC32.buf = crc32_buf; // $FlowIgnore

        CRC32.str = crc32_str;
      });
      /***/

    },

    /***/
    "cpc2":
    /*!*************************************************!*\
      !*** ./node_modules/component-emitter/index.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function cpc2(module, exports, __webpack_require__) {
      /**
       * Expose `Emitter`.
       */
      if (true) {
        module.exports = Emitter;
      }
      /**
       * Initialize a new `Emitter`.
       *
       * @api public
       */


      function Emitter(obj) {
        if (obj) return mixin(obj);
      }

      ;
      /**
       * Mixin the emitter properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */

      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }

        return obj;
      }
      /**
       * Listen on the given `event` with `fn`.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */


      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };
      /**
       * Adds an `event` listener that will be invoked a single
       * time then automatically removed.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */


      Emitter.prototype.once = function (event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
      };
      /**
       * Remove the given callback for `event` or all
       * registered callbacks.
       *
       * @param {String} event
       * @param {Function} fn
       * @return {Emitter}
       * @api public
       */


      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {}; // all

        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        } // specific event


        var callbacks = this._callbacks['$' + event];
        if (!callbacks) return this; // remove all handlers

        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        } // remove specific handler


        var cb;

        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];

          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        } // Remove event specific arrays for event types that no
        // one is subscribed for to avoid memory leak.


        if (callbacks.length === 0) {
          delete this._callbacks['$' + event];
        }

        return this;
      };
      /**
       * Emit `event` with the given args.
       *
       * @param {String} event
       * @param {Mixed} ...
       * @return {Emitter}
       */


      Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1),
            callbacks = this._callbacks['$' + event];

        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }

        if (callbacks) {
          callbacks = callbacks.slice(0);

          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }

        return this;
      };
      /**
       * Return array of callbacks for `event`.
       *
       * @param {String} event
       * @return {Array}
       * @api public
       */


      Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };
      /**
       * Check if this emitter has `event` handlers.
       *
       * @param {String} event
       * @return {Boolean}
       * @api public
       */


      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
      /***/

    },

    /***/
    "evRY":
    /*!****************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/to-string.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function evRY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
       *
       * @example
       * toString([1,0,1,0,1,0], 2, '_') => '10_10_10'
       *
       * @param {Array} bits the bits to convert
       * @param {Number} spacing where to place the spacers
       * @param {Number} spacer the string used as a spacer
       * @return {String}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits, spacing, spacer) {
        if (spacing === void 0) {
          spacing = 0;
        }

        if (spacer === void 0) {
          spacer = ' ';
        }

        if (!spacing) return bits.join('');
        var result = '';

        for (var i = 0; i < bits.length; i++) {
          result += "" + bits[i];
          if (i % spacing === spacing - 1 && i !== bits.length - 1) result += spacer;
        }

        return result;
      };
      /***/

    },

    /***/
    "f7RY":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/not.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function f7RY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise NOT to the contents of a buffer. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.not(buffer) => Buffer(NOT buffer)
        *
        * @param {Buffer} buffer input data
        * @return {Buffer} Buffer(NOT buffer)
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (buffer) {
          var result = Buffer.alloc(buffer.length);

          for (var i = 0; i < buffer.length; i++) {
            result[i] = ~buffer[i];
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "fxaz":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/reduce-xor.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function fxaz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the XOR operation on the given bits. Returns one bit.
       * Throws if less than 2 bits are given.
       *
       * @example
       * reduceXor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
       *
       * @param {Array} bits input data
       * @return {Integer} XOR bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits) {
        if (bits.length < 2) throw new RangeError('Not enough bits.');
        var result = bits[0];

        for (var i = 1; i < bits.length; i++) {
          result ^= bits[i];
        }

        return result;
      };
      /***/

    },

    /***/
    "gb0s":
    /*!***********************************************!*\
      !*** ./node_modules/bitwise/esm/byte/read.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function gb0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Returns an Array of length 8 containing the read bits.
       *
       * @example
       * byte.read(42) => [0,0,1,0,1,0,1,0]
       *
       * @param {Number} byte one byte
       * @return {Array}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (_byte2) {
        if (_byte2 > 255 || _byte2 < 0 || ~~_byte2 !== _byte2) throw new RangeError('invalid byte');
        var result = [0, 0, 0, 0, 0, 0, 0, 0];

        for (var i = 0; i < 8; i++) {
          result[7 - i] = _byte2 >> i & 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "jSm7":
    /*!*************************************************!*\
      !*** ./node_modules/bitwise/esm/nibble/read.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function jSm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Returns an Array of length 8 containing the read bits.
       *
       * @example
       * nibble.read(15) => [1,1,1,1]
       *
       * @param {Number} nibble one nibble
       * @return {Array}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (nibble) {
        if (nibble < 16 && nibble >= 0 && Math.floor(nibble) === nibble) {
          var result = [0, 0, 0, 0];

          for (var i = 0; i < 4; i++) {
            result[3 - i] = nibble >> i & 1;
          }

          return result;
        } else throw new RangeError('invalid array length');
      };
      /***/

    },

    /***/
    "kMlx":
    /*!*****************************************************!*\
      !*** ./node_modules/superagent/lib/request-base.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function kMlx(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Module of mixed-in functions shared between node and client code
       */

      var isObject = __webpack_require__(
      /*! ./is-object */
      "8zgK");
      /**
       * Expose `RequestBase`.
       */


      module.exports = RequestBase;
      /**
       * Initialize a new `RequestBase`.
       *
       * @api public
       */

      function RequestBase(obj) {
        if (obj) return mixin(obj);
      }
      /**
       * Mixin the prototype properties.
       *
       * @param {Object} obj
       * @return {Object}
       * @api private
       */


      function mixin(obj) {
        for (var key in RequestBase.prototype) {
          obj[key] = RequestBase.prototype[key];
        }

        return obj;
      }
      /**
       * Clear previous timeout.
       *
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.clearTimeout = function _clearTimeout() {
        clearTimeout(this._timer);
        clearTimeout(this._responseTimeoutTimer);
        delete this._timer;
        delete this._responseTimeoutTimer;
        return this;
      };
      /**
       * Override default response body parser
       *
       * This function will be called to convert incoming data into request.body
       *
       * @param {Function}
       * @api public
       */


      RequestBase.prototype.parse = function parse(fn) {
        this._parser = fn;
        return this;
      };
      /**
       * Set format of binary response body.
       * In browser valid formats are 'blob' and 'arraybuffer',
       * which return Blob and ArrayBuffer, respectively.
       *
       * In Node all values result in Buffer.
       *
       * Examples:
       *
       *      req.get('/')
       *        .responseType('blob')
       *        .end(callback);
       *
       * @param {String} val
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.responseType = function (val) {
        this._responseType = val;
        return this;
      };
      /**
       * Override default request body serializer
       *
       * This function will be called to convert data set via .send or .attach into payload to send
       *
       * @param {Function}
       * @api public
       */


      RequestBase.prototype.serialize = function serialize(fn) {
        this._serializer = fn;
        return this;
      };
      /**
       * Set timeouts.
       *
       * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
       * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
       *
       * Value of 0 or false means no timeout.
       *
       * @param {Number|Object} ms or {response, deadline}
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.timeout = function timeout(options) {
        if (!options || 'object' !== typeof options) {
          this._timeout = options;
          this._responseTimeout = 0;
          return this;
        }

        for (var option in options) {
          switch (option) {
            case 'deadline':
              this._timeout = options.deadline;
              break;

            case 'response':
              this._responseTimeout = options.response;
              break;

            default:
              console.warn("Unknown timeout option", option);
          }
        }

        return this;
      };
      /**
       * Set number of retry attempts on error.
       *
       * Failed requests will be retried 'count' times if timeout or err.code >= 500.
       *
       * @param {Number} count
       * @param {Function} [fn]
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.retry = function retry(count, fn) {
        // Default to 1 if no count passed or true
        if (arguments.length === 0 || count === true) count = 1;
        if (count <= 0) count = 0;
        this._maxRetries = count;
        this._retries = 0;
        this._retryCallback = fn;
        return this;
      };

      var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
      /**
       * Determine if a request should be retried.
       * (Borrowed from segmentio/superagent-retry)
       *
       * @param {Error} err
       * @param {Response} [res]
       * @returns {Boolean}
       */

      RequestBase.prototype._shouldRetry = function (err, res) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) {
          return false;
        }

        if (this._retryCallback) {
          try {
            var override = this._retryCallback(err, res);

            if (override === true) return true;
            if (override === false) return false; // undefined falls back to defaults
          } catch (e) {
            console.error(e);
          }
        }

        if (res && res.status && res.status >= 500 && res.status != 501) return true;

        if (err) {
          if (err.code && ~ERROR_CODES.indexOf(err.code)) return true; // Superagent timeout

          if (err.timeout && err.code == 'ECONNABORTED') return true;
          if (err.crossDomain) return true;
        }

        return false;
      };
      /**
       * Retry request
       *
       * @return {Request} for chaining
       * @api private
       */


      RequestBase.prototype._retry = function () {
        this.clearTimeout(); // node

        if (this.req) {
          this.req = null;
          this.req = this.request();
        }

        this._aborted = false;
        this.timedout = false;
        return this._end();
      };
      /**
       * Promise support
       *
       * @param {Function} resolve
       * @param {Function} [reject]
       * @return {Request}
       */


      RequestBase.prototype.then = function then(resolve, reject) {
        if (!this._fullfilledPromise) {
          var self = this;

          if (this._endCalled) {
            console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
          }

          this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
            self.end(function (err, res) {
              if (err) innerReject(err);else innerResolve(res);
            });
          });
        }

        return this._fullfilledPromise.then(resolve, reject);
      };

      RequestBase.prototype['catch'] = function (cb) {
        return this.then(undefined, cb);
      };
      /**
       * Allow for extension
       */


      RequestBase.prototype.use = function use(fn) {
        fn(this);
        return this;
      };

      RequestBase.prototype.ok = function (cb) {
        if ('function' !== typeof cb) throw Error("Callback required");
        this._okCallback = cb;
        return this;
      };

      RequestBase.prototype._isResponseOK = function (res) {
        if (!res) {
          return false;
        }

        if (this._okCallback) {
          return this._okCallback(res);
        }

        return res.status >= 200 && res.status < 300;
      };
      /**
       * Get request header `field`.
       * Case-insensitive.
       *
       * @param {String} field
       * @return {String}
       * @api public
       */


      RequestBase.prototype.get = function (field) {
        return this._header[field.toLowerCase()];
      };
      /**
       * Get case-insensitive header `field` value.
       * This is a deprecated internal API. Use `.get(field)` instead.
       *
       * (getHeader is no longer used internally by the superagent code base)
       *
       * @param {String} field
       * @return {String}
       * @api private
       * @deprecated
       */


      RequestBase.prototype.getHeader = RequestBase.prototype.get;
      /**
       * Set header `field` to `val`, or multiple fields with one object.
       * Case-insensitive.
       *
       * Examples:
       *
       *      req.get('/')
       *        .set('Accept', 'application/json')
       *        .set('X-API-Key', 'foobar')
       *        .end(callback);
       *
       *      req.get('/')
       *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
       *        .end(callback);
       *
       * @param {String|Object} field
       * @param {String} val
       * @return {Request} for chaining
       * @api public
       */

      RequestBase.prototype.set = function (field, val) {
        if (isObject(field)) {
          for (var key in field) {
            this.set(key, field[key]);
          }

          return this;
        }

        this._header[field.toLowerCase()] = val;
        this.header[field] = val;
        return this;
      };
      /**
       * Remove header `field`.
       * Case-insensitive.
       *
       * Example:
       *
       *      req.get('/')
       *        .unset('User-Agent')
       *        .end(callback);
       *
       * @param {String} field
       */


      RequestBase.prototype.unset = function (field) {
        delete this._header[field.toLowerCase()];
        delete this.header[field];
        return this;
      };
      /**
       * Write the field `name` and `val`, or multiple fields with one object
       * for "multipart/form-data" request bodies.
       *
       * ``` js
       * request.post('/upload')
       *   .field('foo', 'bar')
       *   .end(callback);
       *
       * request.post('/upload')
       *   .field({ foo: 'bar', baz: 'qux' })
       *   .end(callback);
       * ```
       *
       * @param {String|Object} name
       * @param {String|Blob|File|Buffer|fs.ReadStream} val
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.field = function (name, val) {
        // name should be either a string or an object.
        if (null === name || undefined === name) {
          throw new Error('.field(name, val) name can not be empty');
        }

        if (this._data) {
          console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        }

        if (isObject(name)) {
          for (var key in name) {
            this.field(key, name[key]);
          }

          return this;
        }

        if (Array.isArray(val)) {
          for (var i in val) {
            this.field(name, val[i]);
          }

          return this;
        } // val should be defined now


        if (null === val || undefined === val) {
          throw new Error('.field(name, val) val can not be empty');
        }

        if ('boolean' === typeof val) {
          val = '' + val;
        }

        this._getFormData().append(name, val);

        return this;
      };
      /**
       * Abort the request, and clear potential timeout.
       *
       * @return {Request}
       * @api public
       */


      RequestBase.prototype.abort = function () {
        if (this._aborted) {
          return this;
        }

        this._aborted = true;
        this.xhr && this.xhr.abort(); // browser

        this.req && this.req.abort(); // node

        this.clearTimeout();
        this.emit('abort');
        return this;
      };

      RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
        switch (options.type) {
          case 'basic':
            this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
            break;

          case 'auto':
            this.username = user;
            this.password = pass;
            break;

          case 'bearer':
            // usage would be .auth(accessToken, { type: 'bearer' })
            this.set('Authorization', 'Bearer ' + user);
            break;
        }

        return this;
      };
      /**
       * Enable transmission of cookies with x-domain requests.
       *
       * Note that for this to work the origin must not be
       * using "Access-Control-Allow-Origin" with a wildcard,
       * and also must set "Access-Control-Allow-Credentials"
       * to "true".
       *
       * @api public
       */


      RequestBase.prototype.withCredentials = function (on) {
        // This is browser-only functionality. Node side is no-op.
        if (on == undefined) on = true;
        this._withCredentials = on;
        return this;
      };
      /**
       * Set the max redirects to `n`. Does noting in browser XHR implementation.
       *
       * @param {Number} n
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.redirects = function (n) {
        this._maxRedirects = n;
        return this;
      };
      /**
       * Maximum size of buffered response body, in bytes. Counts uncompressed size.
       * Default 200MB.
       *
       * @param {Number} n
       * @return {Request} for chaining
       */


      RequestBase.prototype.maxResponseSize = function (n) {
        if ('number' !== typeof n) {
          throw TypeError("Invalid argument");
        }

        this._maxResponseSize = n;
        return this;
      };
      /**
       * Convert to a plain javascript object (not JSON string) of scalar properties.
       * Note as this method is designed to return a useful non-this value,
       * it cannot be chained.
       *
       * @return {Object} describing method, url, and data of this request
       * @api public
       */


      RequestBase.prototype.toJSON = function () {
        return {
          method: this.method,
          url: this.url,
          data: this._data,
          headers: this._header
        };
      };
      /**
       * Send `data` as the request body, defaulting the `.type()` to "json" when
       * an object is given.
       *
       * Examples:
       *
       *       // manual json
       *       request.post('/user')
       *         .type('json')
       *         .send('{"name":"tj"}')
       *         .end(callback)
       *
       *       // auto json
       *       request.post('/user')
       *         .send({ name: 'tj' })
       *         .end(callback)
       *
       *       // manual x-www-form-urlencoded
       *       request.post('/user')
       *         .type('form')
       *         .send('name=tj')
       *         .end(callback)
       *
       *       // auto x-www-form-urlencoded
       *       request.post('/user')
       *         .type('form')
       *         .send({ name: 'tj' })
       *         .end(callback)
       *
       *       // defaults to x-www-form-urlencoded
       *      request.post('/user')
       *        .send('name=tobi')
       *        .send('species=ferret')
       *        .end(callback)
       *
       * @param {String|Object} data
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.send = function (data) {
        var isObj = isObject(data);
        var type = this._header['content-type'];

        if (this._formData) {
          console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        }

        if (isObj && !this._data) {
          if (Array.isArray(data)) {
            this._data = [];
          } else if (!this._isHost(data)) {
            this._data = {};
          }
        } else if (data && this._data && this._isHost(this._data)) {
          throw Error("Can't merge these send calls");
        } // merge


        if (isObj && isObject(this._data)) {
          for (var key in data) {
            this._data[key] = data[key];
          }
        } else if ('string' == typeof data) {
          // default to x-www-form-urlencoded
          if (!type) this.type('form');
          type = this._header['content-type'];

          if ('application/x-www-form-urlencoded' == type) {
            this._data = this._data ? this._data + '&' + data : data;
          } else {
            this._data = (this._data || '') + data;
          }
        } else {
          this._data = data;
        }

        if (!isObj || this._isHost(data)) {
          return this;
        } // default to json


        if (!type) this.type('json');
        return this;
      };
      /**
       * Sort `querystring` by the sort function
       *
       *
       * Examples:
       *
       *       // default order
       *       request.get('/user')
       *         .query('name=Nick')
       *         .query('search=Manny')
       *         .sortQuery()
       *         .end(callback)
       *
       *       // customized sort function
       *       request.get('/user')
       *         .query('name=Nick')
       *         .query('search=Manny')
       *         .sortQuery(function(a, b){
       *           return a.length - b.length;
       *         })
       *         .end(callback)
       *
       *
       * @param {Function} sort
       * @return {Request} for chaining
       * @api public
       */


      RequestBase.prototype.sortQuery = function (sort) {
        // _sort default to true but otherwise can be a function or boolean
        this._sort = typeof sort === 'undefined' ? true : sort;
        return this;
      };
      /**
       * Compose querystring to append to req.url
       *
       * @api private
       */


      RequestBase.prototype._finalizeQueryString = function () {
        var query = this._query.join('&');

        if (query) {
          this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
        }

        this._query.length = 0; // Makes the call idempotent

        if (this._sort) {
          var index = this.url.indexOf('?');

          if (index >= 0) {
            var queryArr = this.url.substring(index + 1).split('&');

            if ('function' === typeof this._sort) {
              queryArr.sort(this._sort);
            } else {
              queryArr.sort();
            }

            this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
          }
        }
      }; // For backwards compat only


      RequestBase.prototype._appendQueryString = function () {
        console.trace("Unsupported");
      };
      /**
       * Invoke callback with timeout error.
       *
       * @api private
       */


      RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
        if (this._aborted) {
          return;
        }

        var err = new Error(reason + timeout + 'ms exceeded');
        err.timeout = timeout;
        err.code = 'ECONNABORTED';
        err.errno = errno;
        this.timedout = true;
        this.abort();
        this.callback(err);
      };

      RequestBase.prototype._setTimeouts = function () {
        var self = this; // deadline

        if (this._timeout && !this._timer) {
          this._timer = setTimeout(function () {
            self._timeoutError('Timeout of ', self._timeout, 'ETIME');
          }, this._timeout);
        } // response timeout


        if (this._responseTimeout && !this._responseTimeoutTimer) {
          this._responseTimeoutTimer = setTimeout(function () {
            self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
          }, this._responseTimeout);
        }
      };
      /***/

    },

    /***/
    "ktnI":
    /*!*******************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/read-u-int.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function ktnI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utilities */
      "yE/9");
      /* harmony import */


      var _read__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./read */
      "UPHr");
      /**
       * Converts a section of a buffer to an unsigned integer.
       *
       * @example
       * // buffer 11110110
       * readUInt(buffer, 3, 5) => 22
       *
       * @param {Buffer} buffer the buffer to extract information from
       * @param {Number} length the length of the unsigned integer (in bits)
       * @param {Number} offset where to start (in bits)
       * @returns {Number}
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (buffer, offset, length) {
        if (offset === void 0) {
          offset = 0;
        }

        if (length === void 0) {
          length = 8;
        }

        var arr = Object(_read__WEBPACK_IMPORTED_MODULE_1__["default"])(buffer, offset, length);
        var result = 0;

        for (var i = 0; i < length; i++) {
          result += arr[i] * _utilities__WEBPACK_IMPORTED_MODULE_0__["p2"][length - i - 1];
        }

        return result;
      };
      /***/

    },

    /***/
    "lhXf":
    /*!*****************************************************!*\
      !*** ./node_modules/bitwise/esm/integer/set-bit.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function lhXf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Sets the value of a specific bit.
       * @example bitwise.integer.set(128, 7, 0) => 0
       * @param {Integer} int32 input number
       * @param {Integer} position bit’s position
       * @param {Integer} value bit’s new value
       * @returns {Integer} resulting number
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (int32, position, value) {
        return value === 1 ? int32 | 1 << position : int32 & ~(1 << position);
      };
      /***/

    },

    /***/
    "n/ht":
    /*!***************************************************!*\
      !*** ./node_modules/bitwise/esm/integer/index.js ***!
      \***************************************************/

    /*! exports provided: getBit, setBit, toggleBit, default */

    /***/
    function nHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _get_bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./get-bit */
      "HEpO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getBit", function () {
        return _get_bit__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _set_bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./set-bit */
      "lhXf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setBit", function () {
        return _set_bit__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _toggle_bit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toggle-bit */
      "SfLZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toggleBit", function () {
        return _toggle_bit__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony default export */


      __webpack_exports__["default"] = {
        getBit: _get_bit__WEBPACK_IMPORTED_MODULE_0__["default"],
        setBit: _set_bit__WEBPACK_IMPORTED_MODULE_1__["default"],
        toggleBit: _toggle_bit__WEBPACK_IMPORTED_MODULE_2__["default"]
      };
      /***/
    },

    /***/
    "nMdu":
    /*!*************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/nand.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function nMdu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise NAND to the contents of two buffers. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.nand(a, b, false) => Buffer(a NAND b)
        *
        * @param {Buffer} a first buffer
        * @param {Buffer} b second buffer
        * @param {Boolean} isLooping loop through first buffer
        * @return {Buffer} a NAND b
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (a, b, isLooping) {
          if (isLooping === void 0) {
            isLooping = false;
          }

          var length = isLooping ? b.length : a.length;
          var result = Buffer.alloc(length);

          for (var i = 0; i < length; i++) {
            var j = isLooping ? i % a.length : i;
            result[i] = ~(a[j] & b[i]);
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "nZbv":
    /*!***************************************************!*\
      !*** ./node_modules/superagent/lib/agent-base.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function nZbv(module, exports) {
      function Agent() {
        this._defaults = [];
      }

      ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
        /** Default setting for all requests from this agent */
        Agent.prototype[fn] = function ()
        /*varargs*/
        {
          this._defaults.push({
            fn: fn,
            arguments: arguments
          });

          return this;
        };
      });

      Agent.prototype._setDefaults = function (req) {
        this._defaults.forEach(function (def) {
          req[def.fn].apply(req, def.arguments);
        });
      };

      module.exports = Agent;
      /***/
    },

    /***/
    "oHnp":
    /*!**********************************************!*\
      !*** ./node_modules/superagent/lib/utils.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function oHnp(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Return the mime type for the given `str`.
       *
       * @param {String} str
       * @return {String}
       * @api private
       */

      exports.type = function (str) {
        return str.split(/ *; */).shift();
      };
      /**
       * Return header field parameters.
       *
       * @param {String} str
       * @return {Object}
       * @api private
       */


      exports.params = function (str) {
        return str.split(/ *; */).reduce(function (obj, str) {
          var parts = str.split(/ *= */);
          var key = parts.shift();
          var val = parts.shift();
          if (key && val) obj[key] = val;
          return obj;
        }, {});
      };
      /**
       * Parse Link header fields.
       *
       * @param {String} str
       * @return {Object}
       * @api private
       */


      exports.parseLinks = function (str) {
        return str.split(/ *, */).reduce(function (obj, str) {
          var parts = str.split(/ *; */);
          var url = parts[0].slice(1, -1);
          var rel = parts[1].split(/ *= */)[1].slice(1, -1);
          obj[rel] = url;
          return obj;
        }, {});
      };
      /**
       * Strip content related fields from `header`.
       *
       * @param {Object} header
       * @return {Object} header
       * @api private
       */


      exports.cleanHeader = function (header, changesOrigin) {
        delete header['content-type'];
        delete header['content-length'];
        delete header['transfer-encoding'];
        delete header['host']; // secuirty

        if (changesOrigin) {
          delete header['authorization'];
          delete header['cookie'];
        }

        return header;
      };
      /***/

    },

    /***/
    "oMMx":
    /*!****************************************************!*\
      !*** ./node_modules/bitwise/esm/string/to-bits.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function oMMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Converts a string into an array of bits. Ignores all characters except 1 and 0.
       *
       * @example
       * toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
       *
       * @param {String} string the string to convert
       * @returns {Array} resulting array of bits
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (string) {
        var result = [];

        for (var i = 0; i < string.length; i++) {
          if (string[i] === '1') result.push(1);else if (string[i] === '0') result.push(0);
        }

        return result;
      };
      /***/

    },

    /***/
    "pzNo":
    /*!*************************************************!*\
      !*** ./node_modules/gridplus-sdk/src/client.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function pzNo(module, exports, __webpack_require__) {
      var bitwise = __webpack_require__(
      /*! bitwise */
      "2k3W");

      var superagent = __webpack_require__(
      /*! superagent */
      "24Ii");

      var bitcoin = __webpack_require__(
      /*! ./bitcoin */
      "6WMX");

      var ethereum = __webpack_require__(
      /*! ./ethereum */
      "xKF7");

      var _webpack_require__5 = __webpack_require__(
      /*! ./ethereumAbi */
      "u0zn"),
          buildAddAbiPayload = _webpack_require__5.buildAddAbiPayload,
          abiParsers = _webpack_require__5.abiParsers,
          MAX_ABI_DEFS = _webpack_require__5.MAX_ABI_DEFS;

      var _webpack_require__6 = __webpack_require__(
      /*! ./util */
      "PLHu"),
          isValidAssetPath = _webpack_require__6.isValidAssetPath,
          signReqResolver = _webpack_require__6.signReqResolver,
          aes256_decrypt = _webpack_require__6.aes256_decrypt,
          aes256_encrypt = _webpack_require__6.aes256_encrypt,
          parseDER = _webpack_require__6.parseDER,
          checksum = _webpack_require__6.checksum,
          ensureHexBuffer = _webpack_require__6.ensureHexBuffer,
          getP256KeyPair = _webpack_require__6.getP256KeyPair,
          getP256KeyPairFromPub = _webpack_require__6.getP256KeyPairFromPub,
          parseLattice1Response = _webpack_require__6.parseLattice1Response,
          toPaddedDER = _webpack_require__6.toPaddedDER;

      var _webpack_require__7 = __webpack_require__(
      /*! ./constants */
      "L21C"),
          getFwVersionConst = _webpack_require__7.getFwVersionConst,
          ADDR_STR_LEN = _webpack_require__7.ADDR_STR_LEN,
          ENC_MSG_LEN = _webpack_require__7.ENC_MSG_LEN,
          decResLengths = _webpack_require__7.decResLengths,
          deviceCodes = _webpack_require__7.deviceCodes,
          encReqCodes = _webpack_require__7.encReqCodes,
          responseCodes = _webpack_require__7.responseCodes,
          REQUEST_TYPE_BYTE = _webpack_require__7.REQUEST_TYPE_BYTE,
          VERSION_BYTE = _webpack_require__7.VERSION_BYTE,
          messageConstants = _webpack_require__7.messageConstants,
          BASE_URL = _webpack_require__7.BASE_URL;

      var Buffer = __webpack_require__(
      /*! buffer/ */
      "tjlA").Buffer;

      var EMPTY_WALLET_UID = Buffer.alloc(32);

      var Client = /*#__PURE__*/function () {
        function Client() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              baseUrl = _ref.baseUrl,
              crypto = _ref.crypto,
              name = _ref.name,
              privKey = _ref.privKey,
              timeout = _ref.timeout,
              retryCount = _ref.retryCount;

          _classCallCheck2(this, Client);

          // Definitions
          // if (!baseUrl) throw new Error('baseUrl is required');
          if (name && name.length > 24) throw new Error('name must be less than 24 characters');
          if (!crypto) throw new Error('crypto provider is required');
          this.baseUrl = baseUrl || BASE_URL;
          this.crypto = crypto;
          this.name = name || 'Unknown'; // Derive an ECDSA keypair using the p256 curve. The public key will
          // be used as an identifier

          this.privKey = privKey || this.crypto.randomBytes(32);
          this.key = getP256KeyPair(this.privKey); //.encode('hex');
          // Stateful params

          this.ephemeralPub = null;
          this.sharedSecret = null;
          this.timeout = timeout || 60000;
          this.deviceId = null;
          this.isPaired = false;
          this.retryCount = retryCount || 3; // Information about the current wallet. Should be null unless we know a wallet is present

          this.activeWallets = {
            internal: {
              uid: EMPTY_WALLET_UID,
              // 32 byte id
              name: null,
              // 20 char (max) string
              capabilities: null,
              // 4 byte flag
              external: false
            },
            external: {
              uid: EMPTY_WALLET_UID,
              // 32 byte id
              name: null,
              // 20 char (max) string
              capabilities: null,
              // 4 byte flag
              external: true
            }
          };
        } //=======================================================================
        // LATTICE FUNCTIONS
        //=======================================================================
        // `Connect` will attempt to contact a device based on its deviceId.
        // The response should include an ephemeral public key, which is used to
        // pair with the device in a later request


        _createClass2(Client, [{
          key: "connect",
          value: function connect(deviceId, cb) {
            var _this13 = this;

            // User may "re-connect" if a device ID has previously been stored
            if (typeof deviceId === 'function') {
              if (!this.deviceId) return cb('No device ID has been stored. Please connect with your device ID first.');
              cb = deviceId;
            } else {
              // If the user passes in a device ID, connect to that device and save
              // the new ID for future use.
              this.deviceId = deviceId;
            }

            var param = this._buildRequest(deviceCodes.CONNECT, this.pubKeyBytes());

            this._request(param, function (err, res) {
              if (err) return cb(err);
              _this13.isPaired = _this13._handleConnect(res); // Check for an active wallet. This will get bypassed if we are not paired.

              if (_this13.isPaired) {
                _this13._getActiveWallet(function (err) {
                  return cb(err, _this13.isPaired);
                }, true);
              } else {
                return cb(null);
              }
            });
          }
        }, {
          key: "pair",
          value: function pair(pairingSecret, cb) {
            var _this14 = this;

            // Build the secret hash from the salt
            var pubKey = this.pubKeyBytes();
            var nameBuf = Buffer.alloc(25);

            if (this.name.length > 24) {
              return cb('Name is too many characters. Please change it to <25 characters.');
            }

            nameBuf.write(this.name); // Make sure we add a null termination byte to the pairing secret

            var preImage = Buffer.concat([pubKey, nameBuf, Buffer.from(pairingSecret)]);
            var hash = this.crypto.createHash('sha256').update(preImage).digest();
            var sig = this.key.sign(hash); // returns an array, not a buffer

            var derSig = toPaddedDER(sig);
            var payload = Buffer.concat([nameBuf, derSig]); // Build the request

            var param = this._buildEncRequest(encReqCodes.FINALIZE_PAIRING, payload);

            this._request(param, function (err, res) {
              if (err) return cb(err); // Recover the ephemeral key

              var errStr = _this14._handlePair(res);

              if (errStr) return cb(errStr); // Try to get the active wallet once pairing is successful

              _this14._getActiveWallet(function (err) {
                if (err) return cb(err);
                return cb(null, _this14.hasActiveWallet());
              }, true);
            });
          }
        }, {
          key: "test",
          value: function test(data, cb) {
            var _this15 = this;

            if (!data.payload) return cb('First argument must contain `testID` and `payload` fields.');
            var TEST_DATA_SZ = 500;
            var payload = Buffer.alloc(TEST_DATA_SZ + 6);
            payload.writeUInt32BE(data.testID, 0);
            payload.writeUInt16BE(data.payload.length, 4);
            data.payload.copy(payload, 6);

            var param = this._buildEncRequest(encReqCodes.TEST, payload);

            this._request(param, function (err, res) {
              if (err) return cb(err);

              var decrypted = _this15._handleEncResponse(res, decResLengths.test);

              if (decrypted.err !== null) return cb(decrypted.err);
              return cb(null, decrypted.data.slice(65)); // remove ephem pub
            });
          }
        }, {
          key: "getAddresses",
          value: function getAddresses(opts, cb) {
            var _this16 = this;

            var SKIP_CACHE_FLAG = 1;
            var MAX_ADDR = 10;
            var startPath = opts.startPath,
                n = opts.n,
                _opts$skipCache = opts.skipCache,
                skipCache = _opts$skipCache === void 0 ? true : _opts$skipCache;

            if (startPath === undefined || n === undefined || startPath.length !== 5) {
              return cb('Please provide `startPath` and `n` options');
            } else if (n > MAX_ADDR) {
              return cb("You may only request ".concat(MAX_ADDR, " addresses at once."));
            }

            if (skipCache === true && false === isValidAssetPath(startPath)) return cb('Parent path is not supported');
            var payload = Buffer.alloc(1 + 32 + startPath.length * 4);
            var off = 0; // WalletUID

            var wallet = this.getActiveWallet();
            if (wallet === null) return cb('No active wallet.');
            wallet.uid.copy(payload, off);
            off += 32; // Build the start path (5x u32 indices)

            for (var i = 0; i < startPath.length; i++) {
              payload.writeUInt32BE(startPath[i], off);
              off += 4;
            } // Specify the number of subsequent addresses to request.
            // We also allow the user to skip the cache and request any address related to the asset
            // in the wallet.


            var val;
            var fwConstants = getFwVersionConst(this.fwVersion);

            if (true === fwConstants.addrFlagsAllowed) {
              var flag = skipCache === true ? bitwise.nibble.read(SKIP_CACHE_FLAG) : bitwise.nibble.read(0);
              var count = bitwise.nibble.read(n);
              val = bitwise["byte"].write(flag.concat(count));
            } else {
              val = n;
            }

            payload.writeUInt8(val, off);
            off++;

            var param = this._buildEncRequest(encReqCodes.GET_ADDRESSES, payload);

            return this._request(param, function (err, res) {
              if (err) return cb(err);

              var parsedRes = _this16._handleGetAddresses(res);

              if (parsedRes.err) return cb(parsedRes.err);
              return cb(null, parsedRes.data);
            });
          }
        }, {
          key: "sign",
          value: function sign(opts, cb) {
            var _this17 = this;

            var currency = opts.currency,
                data = opts.data;

            if (currency === undefined || data === undefined) {
              return cb('Please provide `currency` and `data` options');
            } else if (signReqResolver[currency] === undefined) {
              return cb('Unsupported currency');
            } // All transaction requests must be put into the same sized buffer.
            // This comes from sizeof(GpTransactionRequest_t), but note we remove
            // the 2-byte schemaId since it is not returned from our resolver.
            // Note that different firmware versions may have different data sizes.


            var fwConstants = getFwVersionConst(this.fwVersion); // Build the signing request payload to send to the device. If we catch
            // bad params, return an error instead

            data.ethMaxDataSz = fwConstants.ethMaxDataSz;
            data.ethMaxMsgSz = fwConstants.ethMaxMsgSz;
            var req = signReqResolver[currency](data);
            if (req.err !== undefined) return cb({
              err: req.err
            });
            if (req.payload.length > fwConstants.reqMaxDataSz) return cb('Transaction is too large'); // Build the payload

            var payload = Buffer.alloc(2 + fwConstants.reqMaxDataSz);
            var off = 0; // Copy request schema (e.g. ETH or BTC transfer)

            payload.writeUInt16BE(req.schema, off);
            off += 2; // Copy the wallet UID

            var wallet = this.getActiveWallet();
            if (wallet === null) return cb('No active wallet.');
            wallet.uid.copy(payload, off);
            off += wallet.uid.length; // Build data based on the type of request
            // Copy the payload of the request

            req.payload.copy(payload, off); // Construct the encrypted request and send it

            var param = this._buildEncRequest(encReqCodes.SIGN_TRANSACTION, payload);

            return this._request(param, function (err, res, responseCode) {
              if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
                // If we catch a case where the wallet has changed, try getting the new active wallet
                // and recursively make the original request.
                _this17._getActiveWallet(function (err) {
                  if (err) return cb(err);else return _this17.sign(opts, cb);
                });
              } else if (err) {
                // If there was another error caught, return it
                if (err) return cb(err);
              } else {
                // Correct wallet and no errors -- handle the response
                var parsedRes = _this17._handleSign(res, currency, req);

                return cb(parsedRes.err, parsedRes.data);
              }
            });
          }
        }, {
          key: "addAbiDefs",
          value: function addAbiDefs(defs, cb) {
            var _this18 = this;

            var nextCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var defsToAdd = defs.slice(0, MAX_ABI_DEFS);
            defs = defs.slice(MAX_ABI_DEFS);
            var abiPayload;

            try {
              abiPayload = buildAddAbiPayload(defsToAdd);
            } catch (err) {
              return cb(err);
            }

            var payload = Buffer.alloc(abiPayload.length + 10); // Let the firmware know how many defs are remaining *after this one*.
            // If this is a positive number, firmware will send us a temporary code
            // to bypass user authorization if the user has configured easy ABI loading.

            payload.writeUInt16LE(defs.length); // If this is a follow-up request, we don't need to ask for user authorization
            // if we use the correct temporary u64

            if (nextCode !== null) nextCode.copy(payload, 2);
            abiPayload.copy(payload, 10);

            var param = this._buildEncRequest(encReqCodes.ADD_ABI_DEFS, payload);

            return this._request(param, function (err, res, responseCode) {
              if (responseCode && responseCode !== responseCodes.RESP_SUCCESS) return cb('Error making request.');else if (err) return cb(err);

              var decrypted = _this18._handleEncResponse(res, decResLengths.addAbiDefs); // Grab the 8 byte code to fast track our next request, if needed


              nextCode = decrypted.data.slice(65, 73); // No defs left? Return success

              if (defs.length === 0) return cb(null); // Add the next set

              _this18.addAbiDefs(defs, cb, nextCode, defs);
            });
          }
        }, {
          key: "addPermissionV0",
          value: function addPermissionV0(opts, cb) {
            var _this19 = this;

            var currency = opts.currency,
                timeWindow = opts.timeWindow,
                limit = opts.limit,
                decimals = opts.decimals,
                asset = opts.asset;
            if (!currency || timeWindow === undefined || limit === undefined || decimals === undefined || timeWindow === null || limit === null || decimals === null) return cb('currency, timeWindow, decimals, and limit are all required options.');else if (timeWindow === 0 || limit === 0) return cb('Time window and spending limit must be positive.'); // Build the name of the permission

            var name = currency;
            if (asset) name += "_".concat(asset); // Start building the payload

            var payload = Buffer.alloc(293); // Copy the name

            if (Buffer.from(name).length > 255) return cb('Asset name too long.');
            Buffer.from(name).copy(payload, 0); // Convert the limit to a 32 byte hex buffer and copy it in

            var limitBuf = ensureHexBuffer(limit);
            if (limitBuf.length > 32) return cb('Limit too large.');
            limitBuf.copy(payload, 256 + (32 - limitBuf.length)); // Copy the time window (seconds)

            payload.writeUInt32BE(timeWindow, 288);
            payload.writeUInt8(decimals, 292); // Encrypt the request and send it to the Lattice.

            var param = this._buildEncRequest(encReqCodes.ADD_PERMISSION_V0, payload);

            return this._request(param, function (err, res, responseCode) {
              if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
                // If we catch a case where the wallet has changed, try getting the new active wallet
                // and recursively make the original request.
                _this19._getActiveWallet(function (err) {
                  if (err) return cb(err);else return _this19.addPermissionV0(opts, cb);
                });
              } else if (err) {
                // If there was another error caught, return it
                if (err) return cb(err);
              } else {
                // Correct wallet and no errors -- handle the response
                var d = _this19._handleEncResponse(res, decResLengths.finalizePair);

                if (d.err) return cb(d.err);
                return cb(null);
              }
            });
          } //=======================================================================
          // INTERNAL FUNCTIONS
          // These handle the logic around building requests and consuming
          // responses. They take into account the Lattice's serialization scheme
          // among other protocols.
          //=======================================================================
          // Get the active wallet in the device. If we already have one recorded,
          // we don't need to do anything
          // returns cb(err) -- err is a string

        }, {
          key: "_getActiveWallet",
          value: function _getActiveWallet(cb) {
            var _this20 = this;

            var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (forceRefresh !== true && (this.hasActiveWallet() === true || this.isPaired !== true)) {
              // If the active wallet already exists, or if we are not paired, skip the request
              return cb(null);
            } else {
              // No active wallet? Get it from the device
              var payload = Buffer.alloc(0);

              var param = this._buildEncRequest(encReqCodes.GET_WALLETS, payload);

              return this._request(param, function (err, res) {
                if (err) {
                  _this20._resetActiveWallets();

                  return cb(err);
                }

                return cb(_this20._handleGetWallets(res));
              });
            }
          } // Get the shared secret, derived via ECDH from the local private key
          // and the ephemeral public key
          // @returns Buffer

        }, {
          key: "_getSharedSecret",
          value: function _getSharedSecret() {
            // Once every ~256 attempts, we will get a key that starts with a `00` byte, which
            // can lead to problems initializing AES if we don't force a 32 byte BE buffer.
            return Buffer.from(this.key.derive(this.ephemeralPub.getPublic()).toArray('be', 32));
          } // Get the ephemeral id, which is the first 4 bytes of the shared secret
          // generated from the local private key and the ephemeral public key from
          // the device.
          // @returns Buffer

        }, {
          key: "_getEphemId",
          value: function _getEphemId() {
            if (this.ephemeralPub === null) return null; // EphemId is the first 4 bytes of the hash of the shared secret

            var secret = this._getSharedSecret();

            var hash = this.crypto.createHash('sha256').update(secret).digest();
            return hash.slice(0, 4);
          }
        }, {
          key: "_buildEncRequest",
          value: function _buildEncRequest(enc_request_code, payload) {
            // Get the ephemeral id - all encrypted requests require there to be an
            // epehemeral public key in order to send
            var ephemId = parseInt(this._getEphemId().toString('hex'), 16); // Build the payload and checksum

            var payloadPreCs = Buffer.concat([Buffer.from([enc_request_code]), payload]);
            var cs = checksum(payloadPreCs);
            var payloadBuf = Buffer.alloc(payloadPreCs.length + 4); // Lattice validates checksums in little endian

            payloadPreCs.copy(payloadBuf, 0);
            payloadBuf.writeUInt32LE(cs, payloadPreCs.length); // Encrypt this payload

            var secret = this._getSharedSecret();

            var newEncPayload = aes256_encrypt(payloadBuf, secret); // Write to the overall payload. We must use the same length
            // for every encrypted request and must include a 32-bit ephemId
            // along with the encrypted data

            var newPayload = Buffer.alloc(ENC_MSG_LEN + 4); // First 4 bytes are the ephemeral id (in little endian)

            newPayload.writeUInt32LE(ephemId, 0); // Next N bytes

            newEncPayload.copy(newPayload, 4);
            return this._buildRequest(deviceCodes.ENCRYPTED_REQUEST, newPayload);
          } // Build a request to send to the device.
          // @param [request_code] {uint8}  - 8-bit unsigned integer representing the message request code
          // @param [id] {buffer} - 4 byte identifier (comes from HSM for subsequent encrypted reqs)
          // @param [payload] {buffer} - serialized payload
          // @returns {buffer}

        }, {
          key: "_buildRequest",
          value: function _buildRequest(request_code, payload) {
            // Length of payload;
            // we add 1 to the payload length to account for the request_code byte
            var L = payload && Buffer.isBuffer(payload) ? payload.length + 1 : 1;

            if (request_code === deviceCodes.ENCRYPTED_REQUEST) {
              L = 1 + payload.length;
            }

            var i = 0;
            var preReq = Buffer.alloc(L + 8); // Build the header

            i = preReq.writeUInt8(VERSION_BYTE, i);
            i = preReq.writeUInt8(REQUEST_TYPE_BYTE, i);
            var id = this.crypto.randomBytes(4);
            i = preReq.writeUInt32BE(parseInt("0x".concat(id.toString('hex'))), i);
            i = preReq.writeUInt16BE(L, i); // Build the payload

            i = preReq.writeUInt8(request_code, i);
            if (L > 1) i = payload.copy(preReq, i); // Add the checksum

            var cs = checksum(preReq);
            var req = Buffer.alloc(preReq.length + 4); // 4-byte checksum

            i = preReq.copy(req);
            req.writeUInt32BE(cs, i);
            return req;
          }
        }, {
          key: "_request",
          value: function _request(data, cb) {
            var _this21 = this;

            var retryCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.retryCount;
            if (!this.deviceId) return cb('Serial is not set. Please set it and try again.');
            var url = "".concat(this.baseUrl, "/").concat(this.deviceId);
            superagent.post(url).timeout(this.timeout).send({
              data: data
            }).then(function (res) {
              if (!res || !res.body) return cb("Invalid response: ".concat(res));else if (res.body.status !== 200) return cb("Error code ".concat(res.body.status, ": ").concat(res.body.message));
              var parsed = parseLattice1Response(res.body.message); // If the device is busy, retry if we can

              if ((parsed.responseCode === responseCodes.RESP_ERR_DEV_BUSY || parsed.responseCode === responseCodes.RESP_ERR_GCE_TIMEOUT) && retryCount > 0) {
                return setTimeout(function () {
                  _this21._request(data, cb, retryCount - 1);
                }, 3000);
              } // If we caugh a `ErrWalletNotPresent` make sure we aren't caching an old ative walletUID


              if (parsed.responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) _this21._resetActiveWallets(); // If there was an error in the response, return it

              if (parsed.err) return cb(parsed.err);
              return cb(null, parsed.data, parsed.responseCode);
            })["catch"](function (err) {
              var isTimeout = err.code === 'ECONNABORTED' && err.errno === 'ETIME';
              if (isTimeout) return cb('Timeout waiting for device. Please ensure it is connected to the internet and try again in a minute.');else return cb('Failed to make request to device.');
            });
          } // ----- Device response handlers -----
          // Connect will call `StartPairingMode` on the device, which gives the
          // user 60 seconds to finalize the pairing
          // This will return an ephemeral public key, which is needed for the next
          // request. If the device is already paired, this ephemPub is simply used
          // to encrypt the next request. If the device is not paired, it is needed
          // to pair the device within 60 seconds.
          // @returns true if we are paired to the device already

        }, {
          key: "_handleConnect",
          value: function _handleConnect(res) {
            var off = 0;
            var pairingStatus = res.readUInt8(off);
            off++; // If we are already paired, we get the next ephemeral key

            var pub = res.slice(off, off + 65).toString('hex');
            off += 65; // Grab the firmware version (will be 0-length for older fw versions)
            // It is of format |fix|minor|major|reserved|

            this.fwVersion = res.slice(off, off + 4); // Set the public key

            this.ephemeralPub = getP256KeyPairFromPub(pub); // return the state of our pairing

            return pairingStatus === messageConstants.PAIRED;
          } // All encrypted responses must be decrypted with the previous shared secret. Per specification,
          // decrypted responses will all contain a 65-byte public key as the prefix, which becomes the 
          // new ephemeralPub.

        }, {
          key: "_handleEncResponse",
          value: function _handleEncResponse(encRes, len) {
            // Decrypt response
            var secret = this._getSharedSecret();

            var encData = encRes.slice(0, ENC_MSG_LEN);
            var res = aes256_decrypt(encData, secret); // len does not include a 65-byte pubkey that prefies each encResponse

            len += 65; // Validate checksum. It will be the last 4 bytes of the decrypted payload.
            // The length of the decrypted payload will be fixed for each given message type.

            var toCheck = res.slice(0, len);
            var cs = parseInt("0x".concat(res.slice(len, len + 4).toString('hex')));
            var csCheck = checksum(toCheck);
            if (cs !== csCheck) return {
              err: "Checksum mismatch in response from Lattice (calculated ".concat(csCheck, ", wanted ").concat(cs, ")")
            }; // First 65 bytes is the next ephemeral pubkey

            var pub = res.slice(0, 65).toString('hex');

            try {
              this.ephemeralPub = getP256KeyPairFromPub(pub);
              return {
                err: null,
                data: res
              };
            } catch (e) {
              return {
                err: "Error handling getAddresses response: ".concat(e.toString())
              };
            }
          } // Pair will create a new pairing if the user successfully enters the secret
          // into the device in time. If successful (status=0), the device will return
          // a new ephemeral public key, which is used to derive a shared secret
          // for the next request
          // @returns error (or null)

        }, {
          key: "_handlePair",
          value: function _handlePair(encRes) {
            var d = this._handleEncResponse(encRes, decResLengths.finalizePair);

            if (d.err) return d.err; // Remove the pairing salt - we're paired!

            this.pairingSalt = null;
            this.isPaired = true;
            return null;
          } // GetAddresses will return an array of address strings

        }, {
          key: "_handleGetAddresses",
          value: function _handleGetAddresses(encRes) {
            // Handle the encrypted response
            var decrypted = this._handleEncResponse(encRes, decResLengths.getAddresses);

            if (decrypted.err !== null) return decrypted;
            var addrData = decrypted.data;
            var off = 65; // Skip 65 byte pubkey prefix
            // Look for addresses until we reach the end (a 4 byte checksum)

            var addrs = [];

            while (off + 4 < decResLengths.getAddresses) {
              var addrBytes = addrData.slice(off, off + ADDR_STR_LEN);
              off += ADDR_STR_LEN; // Return the UTF-8 representation

              var len = addrBytes.indexOf(0); // First 0 is the null terminator

              if (len > 0) addrs.push(addrBytes.slice(0, len).toString());
            }

            return {
              data: addrs,
              err: null
            };
          }
        }, {
          key: "_handleGetWallets",
          value: function _handleGetWallets(encRes) {
            var decrypted = this._handleEncResponse(encRes, decResLengths.getWallets);

            if (decrypted.err !== null) return decrypted;
            var res = decrypted.data;
            var walletUID; // Read the external wallet data first. If it is non-null, the external wallet will
            // be the active wallet of the device and we should save it.
            // If the external wallet is blank, it means there is no card present and we should 
            // save and use the interal wallet.
            // If both wallets are empty, it means the device still needs to be set up.

            var walletDescriptorLen = 71; // Skip 65byte pubkey prefix. WalletDescriptor contains 32byte id + 4byte flag + 35byte name

            var off = 65; // Internal first

            var hasActiveWallet = false;
            walletUID = res.slice(off, off + 32);
            this.activeWallets.internal.uid = walletUID;
            this.activeWallets.internal.capabilities = res.readUInt32BE(off + 32);
            this.activeWallets.internal.name = res.slice(off + 36, off + walletDescriptorLen);
            if (!walletUID.equals(EMPTY_WALLET_UID)) hasActiveWallet = true; // Offset the first item

            off += walletDescriptorLen; // External

            walletUID = res.slice(off, off + 32);
            this.activeWallets.external.uid = walletUID;
            this.activeWallets.external.capabilities = res.readUInt32BE(off + 32);
            this.activeWallets.external.name = res.slice(off + 36, off + walletDescriptorLen);
            if (!walletUID.equals(EMPTY_WALLET_UID)) hasActiveWallet = true;
            if (hasActiveWallet === true) return null;else return 'No active wallet.';
          }
        }, {
          key: "_handleSign",
          value: function _handleSign(encRes, currencyType) {
            var req = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            // Handle the encrypted response
            var decrypted = this._handleEncResponse(encRes, decResLengths.sign);

            if (decrypted.err !== null) return {
              err: decrypted.err
            };
            var PUBKEY_PREFIX_LEN = 65;
            var PKH_PREFIX_LEN = 20;
            var off = PUBKEY_PREFIX_LEN; // Skip past pubkey prefix

            var res = decrypted.data; // Get the change data if we are making a BTC transaction

            var changeRecipient;

            if (currencyType === 'BTC') {
              var changeVersion = bitcoin.addressVersion[req.changeData.changeVersion];
              var changePubkeyhash = res.slice(off, off + PKH_PREFIX_LEN);
              off += PKH_PREFIX_LEN;
              changeRecipient = bitcoin.getBitcoinAddress(changePubkeyhash, changeVersion);
            } // Start building return data


            var returnData = {
              err: null,
              data: null
            };
            var DERLength = 74; // max size of a DER signature -- all Lattice sigs are this long

            var SIGS_OFFSET = 10 * DERLength; // 10 signature slots precede 10 pubkey slots

            var PUBKEYS_OFFSET = PUBKEY_PREFIX_LEN + PKH_PREFIX_LEN + SIGS_OFFSET;

            if (currencyType === 'BTC') {
              var compressedPubLength = 33; // Size of compressed public key

              var pubkeys = [];
              var sigs = [];
              var n = 0; // Parse the signature for each output -- they are returned
              // in the serialized payload in form [pubkey, sig]
              // There is one signature per output

              while (off < res.length) {
                // Exit out if we have seen all the returned sigs and pubkeys
                if (res[off] !== 0x30) break; // Otherwise grab another set
                // Note that all DER sigs returned fill the maximum 74 byte buffer, but also
                // contain a length at off+1, which we use to parse the non-zero data.
                // First get the signature from its slot

                var sigStart = off;
                var sigEnd = off + 2 + res[off + 1];
                sigs.push(res.slice(sigStart, sigEnd)); // Next, shift by the full set of signatures to hit the respective pubkey
                // NOTE: The data returned is: [<sig0>, <sig1>, ... <sig9>][<pubkey0>, <pubkey1>, ... <pubkey9>]

                var pubStart = n * compressedPubLength + PUBKEYS_OFFSET;
                var pubEnd = (n + 1) * compressedPubLength + PUBKEYS_OFFSET;
                pubkeys.push(res.slice(pubStart, pubEnd)); // Update offset to hit the next signature slot

                off += DERLength;
                n += 1;
              } // Build the transaction data to be serialized


              var preSerializedData = {
                inputs: [],
                outputs: [],
                isSegwitSpend: req.origData.isSegwit,
                network: req.origData.network,
                crypto: this.crypto
              }; // First output comes from request dta

              preSerializedData.outputs.push({
                value: req.origData.value,
                recipient: req.origData.recipient
              });

              if (req.changeData.value > 0) {
                // Second output comes from change data
                preSerializedData.outputs.push({
                  value: req.changeData.value,
                  recipient: changeRecipient
                });
              } // Add the inputs


              for (var i = 0; i < sigs.length; i++) {
                preSerializedData.inputs.push({
                  hash: req.origData.prevOuts[i].txHash,
                  index: req.origData.prevOuts[i].index,
                  sig: sigs[i],
                  pubkey: pubkeys[i]
                });
              } // Finally, serialize the transaction


              var serializedTx = bitcoin.serializeTx(preSerializedData); // Generate the transaction hash so the user can look this transaction up later

              var preImageTxHash = serializedTx;

              if (preSerializedData.isSegwitSpend === true) {
                // Segwit transactions need to be re-serialized using legacy serialization
                // before the transaction hash is calculated. This allows legacy clients
                // to validate the transactions.
                preSerializedData.isSegwitSpend = false;
                preImageTxHash = bitcoin.serializeTx(preSerializedData);
              }

              var txHash = this.crypto.createHash('sha256').update(Buffer.from(preImageTxHash, 'hex')).digest();
              txHash = this.crypto.createHash('sha256').update(txHash).digest().reverse().toString('hex'); // Add extra data for debugging/lookup purposes

              returnData.data = {
                tx: serializedTx,
                txHash: txHash,
                changeRecipient: changeRecipient,
                sigs: sigs
              };
            } else if (currencyType === 'ETH') {
              var sig = parseDER(res.slice(off, off + 2 + res[off + 1]));
              off += DERLength;
              var ethAddr = res.slice(off, off + 20); // Determine the `v` param and add it to the sig before returning

              var rawTx = ethereum.buildEthRawTx(req, sig, ethAddr, req.useEIP155);
              returnData.data = {
                tx: "0x".concat(rawTx),
                txHash: "0x".concat(ethereum.hashTransaction(rawTx)),
                sig: {
                  v: sig.v,
                  r: sig.r.toString('hex'),
                  s: sig.s.toString('hex')
                },
                signer: ethAddr
              };
            } else if (currencyType === 'ETH_MSG') {
              var _sig = parseDER(res.slice(off, off + 2 + res[off + 1]));

              off += DERLength;
              var signer = res.slice(off, off + 20);
              var validatedSig = ethereum.validateEthereumMsgResponse({
                signer: signer,
                sig: _sig
              }, req);
              returnData.data = {
                sig: {
                  v: validatedSig.v,
                  r: validatedSig.r.toString('hex'),
                  s: validatedSig.s.toString('hex')
                },
                signer: signer
              };
            }

            return returnData;
          }
        }, {
          key: "_resetActiveWallets",
          value: function _resetActiveWallets() {
            this.activeWallets.internal.uid = EMPTY_WALLET_UID;
            this.activeWallets.internal.name = null;
            this.activeWallets.internal.capabilities = null;
            this.activeWallets.external.uid = EMPTY_WALLET_UID;
            this.activeWallets.external.name = null;
            this.activeWallets.external.capabilities = null;
            return;
          }
        }, {
          key: "getActiveWallet",
          value: function getActiveWallet() {
            if (!EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)) {
              return this.activeWallets.external;
            } else if (!EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)) {
              return this.activeWallets.internal;
            } else {
              return null;
            }
          }
        }, {
          key: "hasActiveWallet",
          value: function hasActiveWallet() {
            return this.getActiveWallet() !== null;
          } // Get 64 bytes representing the public key
          // This is the uncompressed key without the leading 04 byte

        }, {
          key: "pubKeyBytes",
          value: function pubKeyBytes() {
            var LE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var k = this.key.getPublic();
            var p = k.encode('hex');
            var pb = Buffer.from(p, 'hex');

            if (LE === true) {
              // Need to flip X and Y components to little endian
              var x = pb.slice(1, 33).reverse();
              var y = pb.slice(33, 65).reverse();
              return Buffer.concat([pb[0], x, y]);
            } else {
              return pb;
            }
          } // TODO: Find a better way to export this.

        }, {
          key: "parseAbi",
          value: function parseAbi(source, data) {
            switch (source) {
              case 'etherscan':
                return abiParsers[source](data);

              default:
                return {
                  err: "No ".concat(source, " parser available.")
                };
            }
          }
        }]);

        return Client;
      }();

      module.exports = Client;
      /***/
    },

    /***/
    "qVBC":
    /*!***********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/xnor.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function qVBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.
       *
       * @example
       * xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,1,1,0]
       *
       * @param {Array} bits1 input data
       * @param {Array} bits2 input data
       * @return {Array} [bits1 XNOR bits2]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits1, bits2) {
        var result = [];

        for (var i = 0; i < bits1.length; i++) {
          result[i] = bits1[i] ^ bits2[i] ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "u0zn":
    /*!******************************************************!*\
      !*** ./node_modules/gridplus-sdk/src/ethereumAbi.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function u0zn(module, exports, __webpack_require__) {
      var Buffer = __webpack_require__(
      /*! buffer/ */
      "tjlA").Buffer;

      var keccak256 = __webpack_require__(
      /*! js-sha3 */
      "HFX+").keccak256;

      var _webpack_require__8 = __webpack_require__(
      /*! ./constants */
      "L21C"),
          ETH_ABI_LATTICE_FW_TYPE_MAP = _webpack_require__8.ETH_ABI_LATTICE_FW_TYPE_MAP;

      var NAME_MAX_SZ = 100;
      var HEADER_SZ = 5 + NAME_MAX_SZ; // 4 byte sig + name + 1 byte param count

      var PARAM_SZ = 26; // 20 byte name + 6 byte def

      var MAX_PARAMS = 18;
      var MAX_ABI_DEFS = 2;
      exports.MAX_ABI_DEFS = MAX_ABI_DEFS; // Build a request to add ABI data

      exports.buildAddAbiPayload = function (defs) {
        if (!defs || !Array.isArray(defs)) throw new Error('Missing definitions.');
        if (defs.length > exports.MAX_ABI_DEFS) throw new Error("You may only add ".concat(MAX_ABI_DEFS, " ABI definitions per request."));
        var b = Buffer.alloc(1 + MAX_ABI_DEFS * (HEADER_SZ + PARAM_SZ * MAX_PARAMS));
        var off = 0;
        b.writeUInt8(defs.length, off);
        off++;
        defs.forEach(function (def) {
          if (!def.sig || !def.name || !def.params) throw new Error('name, sig, and params must be present for every ABI definition.'); // Header data

          var sig = Buffer.from(def.sig, 'hex');
          if (sig.length !== 4) throw new Error('Function signatures must always be four bytes.');
          sig.copy(b, off);
          off += sig.length;
          var name = Buffer.from(def.name);
          if (name.length > NAME_MAX_SZ - 1) // The -1 accounts for the null terminator
            throw new Error("Only function names shorter than ".concat(NAME_MAX_SZ, " characters are supported."));
          Buffer.from(def.name).slice(0, NAME_MAX_SZ).copy(b, off);
          off += NAME_MAX_SZ; // Number of parameters

          var numParams = Array.isArray(def.params) ? def.params.length : 0;
          b.writeUInt8(numParams, off);
          off++; // Don't overflow the buffer

          if (numParams > MAX_PARAMS) throw new Error('Currently only ABI defintions with <=10 parameters are supported.'); // Copy the params if needed

          if (numParams > 0) {
            // First copy param names (first 20 bytes)
            def.params.forEach(function (param) {
              if (!param.name || !param.latticeTypeIdx || param.isArray === undefined || param.arraySz === undefined) throw new Error('name, latticeTypeIdx, isArray, and arraySz must be defined for all ABI params.');
              Buffer.from(param.name).slice(0, 20).copy(b, off);
              off += 20;
            }); // Bump offset to account for blank param slots

            off += 20 * (MAX_PARAMS - numParams); // Next copy the definitions

            def.params.forEach(function (param) {
              b.writeUInt8(param.latticeTypeIdx, off);
              off++;
              b.writeUInt8(param.isArray === true, off);
              off++;
              b.writeUInt32LE(param.arraySz, off);
              off += 4;
            }); // Bump offset again

            off += 6 * (MAX_PARAMS - numParams);
          } else {
            // If there are no params, just bump the offset
            off += PARAM_SZ * MAX_PARAMS;
          }
        });
        return b;
      }; //--------------------------------------
      // PARSERS
      //--------------------------------------


      function parseEtherscanAbiDefs(_defs) {
        // `_defs` are `result` of the parsed response
        var defs = [];

        _defs.forEach(function (d) {
          if (d.name && d.inputs && d.type === 'function' && d.stateMutability !== 'view') {
            var sig = getFuncSig(d);
            var params = parseEtherscanAbiInputs(d.inputs);
            defs.push({
              name: d.name,
              sig: sig,
              params: params
            });
          }
        });

        return defs;
      }

      exports.abiParsers = {
        etherscan: parseEtherscanAbiDefs
      }; //--------------------------------------
      // HELPERS
      //--------------------------------------
      // Get the 4-byte function identifier based on the canonical name

      function getFuncSig(f) {
        // Canonical name is:
        // funcName(paramType0, ..., paramTypeN)
        var canonicalName = "".concat(f.name, "(");
        f.inputs.forEach(function (input) {
          canonicalName += "".concat(input.type, ",");
        });
        if (f.inputs.length > 0) canonicalName = canonicalName.slice(0, canonicalName.length - 1);
        canonicalName += ')';
        return keccak256(canonicalName).slice(0, 8);
      } // Parse the ABI param data into structs Lattice firmware will recognize.


      function parseEtherscanAbiInputs(inputs) {
        var data = [];
        inputs.forEach(function (input) {
          var typeName = input.type;
          var d = {
            isArray: false,
            arraySz: 0,
            name: input.name
          };
          var openBracketIdx = typeName.indexOf('[');
          var closeBracketIdx = typeName.indexOf(']');

          if (openBracketIdx > -1 && closeBracketIdx > -1) {
            if (openBracketIdx >= closeBracketIdx) {
              ; // not a valid param -- skip it
            } else if (openBracketIdx + 1 === closeBracketIdx) {
              d.isArray = true;
            } else {
              // Parse the array size if applicable
              var number = parseInt(typeName.slice(openBracketIdx, closeBracketIdx));

              if (isNaN(number)) {
                return d;
              }

              d.isArray = true;
              d.arraySz = number;
            }
          }

          var singularTypeName = openBracketIdx > -1 ? typeName.slice(0, openBracketIdx) : typeName;
          d.latticeTypeIdx = getTypeIdxLatticeFw(singularTypeName);
          if (!d.latticeTypeIdx) throw new Error("Unsupported type: ".concat(typeName));
          data.push(d);
        });
        return data;
      } // Enum values from inside Lattice firmware


      function getTypeIdxLatticeFw(type) {
        return ETH_ABI_LATTICE_FW_TYPE_MAP[type];
      }
      /***/

    },

    /***/
    "vGFC":
    /*!*************************************************!*\
      !*** ./node_modules/bitwise/esm/buffer/xnor.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function vGFC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (Buffer) {
        /**
        * Applies a bitwise XNOR to the contents of two buffers. Returns a new buffer.
        *
        * @example
        * bitwise.buffer.xnor(a, b, false) => Buffer(a XNOR b)
        *
        * @param {Buffer} a first buffer
        * @param {Buffer} b second buffer
        * @param {Boolean} isLooping loop through first buffer
        * @return {Buffer} a XNOR b
        */

        /* harmony default export */
        __webpack_exports__["default"] = function (a, b, isLooping) {
          if (isLooping === void 0) {
            isLooping = false;
          }

          var length = isLooping ? b.length : a.length;
          var result = Buffer.alloc(length);

          for (var i = 0; i < length; i++) {
            var j = isLooping ? i % a.length : i;
            result[i] = ~(a[j] ^ b[i]);
          }

          return result;
        };
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../../../buffer/index.js */
      "tjlA").Buffer);
      /***/
    },

    /***/
    "xKF7":
    /*!***************************************************!*\
      !*** ./node_modules/gridplus-sdk/src/ethereum.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function xKF7(module, exports, __webpack_require__) {
      // Utils for Ethereum transactions. This is effecitvely a shim of ethereumjs-util, which
      // does not have browser (or, by proxy, React-Native) support.
      var BN = __webpack_require__(
      /*! bignumber.js */
      "kB5k");

      var Buffer = __webpack_require__(
      /*! buffer/ */
      "tjlA").Buffer;

      var constants = __webpack_require__(
      /*! ./constants */
      "L21C");

      var keccak256 = __webpack_require__(
      /*! js-sha3 */
      "HFX+").keccak256;

      var rlp = __webpack_require__(
      /*! rlp-browser */
      "RP9m");

      var secp256k1 = __webpack_require__(
      /*! secp256k1 */
      "IzB8");

      exports.buildEthereumMsgRequest = function (input) {
        if (!input.payload || !input.protocol || !input.signerPath) throw new Error('You must provide `payload`, `signerPath`, and `protocol` arguments in the messsage request');
        var req = {
          schema: constants.signingSchema.ETH_MSG,
          payload: null,
          input: input,
          // Save the input for later
          msg: null // Save the buffered message for later

        };

        if (input.protocol === 'signPersonal') {
          var L = (input.signerPath.length + 1) * 4 + input.ethMaxMsgSz + 4;
          var off = 0;
          req.payload = Buffer.alloc(L);
          req.payload.writeUInt8(constants.ethMsgProtocol.SIGN_PERSONAL, 0);
          off += 1;
          req.payload.writeUInt32LE(input.signerPath.length, off);
          off += 4;

          for (var i = 0; i < input.signerPath.length; i++) {
            req.payload.writeUInt32LE(input.signerPath[i], off);
            off += 4;
          } // Write the payload buffer. The payload can come in either as a buffer or as a string


          var payload = input.payload; // Determine if this is a hex string

          var displayHex = false;

          if (typeof input.payload === 'string') {
            if (input.payload.slice(0, 2) === '0x') {
              payload = ensureHexBuffer(input.payload);
              displayHex = true === isHexStr(input.payload.slice(2));
            } else {
              if (false === latticeCanDisplayStr(input.payload)) throw new Error('Currently, the Lattice can only display ASCII strings.');
              payload = Buffer.from(input.payload);
            }
          } else if (typeof input.displayHex === 'boolean') {
            // If this is a buffer and the user has specified whether or not this
            // is a hex buffer with the optional argument, write that
            displayHex = input.displayHex;
          } // Write the payload and metadata into our buffer


          req.msg = payload;
          req.payload.writeUInt8(displayHex, off);
          off += 1;
          req.payload.writeUInt16LE(payload.length, off);
          off += 2; // Make sure we didn't run past the max size

          if (payload.length > input.ethMaxMsgSz) throw new Error("Your message is ".concat(payload.length, " bytes, but can only be a maximum of ").concat(input.ethMaxMsgSz));
          payload.copy(req.payload, off);
          return req;
        } else {
          throw new Error('Unsupported protocol');
        }
      };

      exports.validateEthereumMsgResponse = function (res, req) {
        var signer = res.signer,
            sig = res.sig;
        var input = req.input,
            msg = req.msg;

        if (input.protocol === 'signPersonal') {
          var prefix = Buffer.from("\x19Ethereum Signed Message:\n".concat(msg.length.toString()), 'utf-8');
          return addRecoveryParam(Buffer.concat([prefix, msg]), sig, signer);
        } else {
          throw new Error('Unsupported protocol');
        }
      };

      exports.buildEthereumTxRequest = function (data) {
        try {
          var _data$chainId = data.chainId,
              chainId = _data$chainId === void 0 ? 1 : _data$chainId;
          var signerPath = data.signerPath,
              _data$eip = data.eip155,
              eip155 = _data$eip === void 0 ? null : _data$eip,
              ethMaxDataSz = data.ethMaxDataSz; // Sanity checks:
          // There are a handful of named chains we allow the user to reference (`chainIds`)
          // Custom chainIDs should be either numerical or hex strings

          if (typeof chainId !== 'number' && isValidChainIdHexNumStr(chainId) === false) chainId = chainIds[chainId]; // If this was not a custom chainID and we cannot find the name of it, exit

          if (!chainId) throw new Error('Unsupported chain ID or name'); // Sanity check on signePath

          if (!signerPath || signerPath.length !== 5) throw new Error('Please provider full signer path (`signerPath`)'); // Determine if we should use EIP155 given the chainID.
          // If we are explicitly told to use eip155, we will use it. Otherwise,
          // we will look up if the specified chainId is associated with a chain
          // that does not use EIP155 by default. Note that most do use EIP155.

          var useEIP155 = chainUsesEIP155(chainId);
          if (eip155 !== null && typeof eip155 === 'boolean') useEIP155 = eip155; // Hack for metamask, which sends value=null for 0 ETH transactions

          if (!data.value) data.value = 0; //--------------
          // 1. BUILD THE RAW TX FOR FUTURE RLP ENCODING
          //--------------
          // Ensure all fields are 0x-prefixed hex strings

          var rawTx = []; // Build the transaction buffer array

          var nonceBytes = ensureHexBuffer(data.nonce);
          var gasPriceBytes = ensureHexBuffer(data.gasPrice);
          var gasLimitBytes = ensureHexBuffer(data.gasLimit);
          var toBytes = ensureHexBuffer(data.to);
          var valueBytes = ensureHexBuffer(data.value);
          var dataBytes = ensureHexBuffer(data.data);
          rawTx.push(nonceBytes);
          rawTx.push(gasPriceBytes);
          rawTx.push(gasLimitBytes);
          rawTx.push(toBytes);
          rawTx.push(valueBytes);
          rawTx.push(dataBytes); // Add empty v,r,s values

          if (useEIP155 === true) {
            rawTx.push(ensureHexBuffer(chainId)); // v

            rawTx.push(ensureHexBuffer(null)); // r

            rawTx.push(ensureHexBuffer(null)); // s
          } //--------------
          // 2. BUILD THE LATTICE REQUEST PAYLOAD
          //--------------


          var ETH_TX_NON_DATA_SZ = 122; // Accounts for metadata and non-data params

          var txReqPayload = Buffer.alloc(ethMaxDataSz + ETH_TX_NON_DATA_SZ);
          var off = 0; // 1. EIP155 switch and chainID
          //------------------

          txReqPayload.writeUInt8(Number(useEIP155), off);
          off++; // NOTE: Originally we designed for a 1-byte chainID, but modern rollup chains use much larger
          // chainID values. To account for these, we will put the chainID into the `data` buffer if it
          // is >=255. Values up to UINT64_MAX will be allowed.

          var chainIdBuf;
          var chainIdBufSz = 0;

          if (useChainIdBuffer(chainId) === true) {
            chainIdBuf = getChainIdBuf(chainId);
            chainIdBufSz = chainIdBuf.length;
            if (chainIdBufSz > constants.MAX_CHAIN_ID_BYTES) throw new Error('ChainID provided is too large.'); // Signal to Lattice firmware that it needs to read the chainId from the tx.data buffer

            txReqPayload.writeUInt8(constants.HANDLE_LARGER_CHAIN_ID, off);
            off++;
          } else {
            // For chainIDs <255, write it to the chainId u8 slot in the main tx buffer
            chainIdBuf = ensureHexBuffer(chainId);
            if (chainIdBuf.length !== 1) throw new Error('Error parsing chainID');
            chainIdBuf.copy(txReqPayload, off);
            off += chainIdBuf.length;
          } // 2. BIP44 Path
          //------------------
          // First write the number of indices in this path (will probably always be 5, but
          // we want to keep this extensible)


          txReqPayload.writeUInt32LE(signerPath.length, off);
          off += 4;

          for (var i = 0; i < signerPath.length; i++) {
            txReqPayload.writeUInt32LE(signerPath[i], off);
            off += 4;
          } // 3. ETH TX request data
          //------------------


          txReqPayload.writeUInt32BE(data.nonce, off);
          off += 4;
          writeUInt64BE(data.gasPrice, txReqPayload, off);
          off += 8;
          txReqPayload.writeUInt32BE(data.gasLimit, off);
          off += 4;
          toBytes.copy(txReqPayload, off);
          off += 20; // Place the value (a BE number) in an offset such that it
          // can be interpreted as a number

          var valueOff = off + 32 - valueBytes.length;
          valueBytes.copy(txReqPayload, valueOff);
          off += 32; // Ensure data field isn't too long

          if (dataBytes && dataBytes.length > ethMaxDataSz) {
            return {
              err: "Data field too large (must be <=".concat(ethMaxDataSz, " bytes)")
            };
          } // Write the data size (does *NOT* include the chainId buffer, if that exists)


          txReqPayload.writeUInt16BE(dataBytes.length, off);
          off += 2;
          if (dataBytes.length + chainIdBufSz > ethMaxDataSz) throw new Error('Payload too large.'); // Copy in the chainId buffer if needed

          if (chainIdBufSz > 0) {
            txReqPayload.writeUInt8(chainIdBufSz, off);
            off++;
            chainIdBuf.copy(txReqPayload, off);
            off += chainIdBufSz;
          } // Copy the data itself


          dataBytes.copy(txReqPayload, off);
          off += ethMaxDataSz;
          return {
            rawTx: rawTx,
            payload: txReqPayload,
            schema: constants.signingSchema.ETH_TRANSFER,
            // We will use eth transfer for all ETH txs for v1 
            chainId: chainId,
            useEIP155: useEIP155,
            signerPath: signerPath
          };
        } catch (err) {
          return {
            err: err.message
          };
        }
      }; // From ethereumjs-util


      function stripZeros(a) {
        var first = a[0];

        while (a.length > 0 && first.toString() === '0') {
          a = a.slice(1);
          first = a[0];
        }

        return a;
      } // Given a 64-byte signature [r,s] we need to figure out the v value
      // and attah the full signature to the end of the transaction payload


      exports.buildEthRawTx = function (tx, sig, address) {
        var useEIP155 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        // RLP-encode the data we sent to the lattice
        var rlpEncoded = rlp.encode(tx.rawTx);
        var newSig = addRecoveryParam(rlpEncoded, sig, address, tx.chainId, useEIP155); // Use the signature to generate a new raw transaction payload

        var newRawTx = tx.rawTx.slice(0, 6);
        newRawTx.push(newSig.v); // Per `ethereumjs-tx`, RLP encoding should include signature components w/ stripped zeros
        // See: https://github.com/ethereumjs/ethereumjs-tx/blob/master/src/transaction.ts#L187

        newRawTx.push(stripZeros(newSig.r));
        newRawTx.push(stripZeros(newSig.s));
        return rlp.encode(newRawTx).toString('hex');
      }; // Attach a recovery parameter to a signature by brute-forcing ECRecover


      function addRecoveryParam(payload, sig, address, chainId, useEIP155) {
        try {
          // Rebuild the keccak256 hash here so we can `ecrecover`
          var hash = new Uint8Array(Buffer.from(keccak256(payload), 'hex'));
          var v = 0; // Fix signature componenet lengths to 32 bytes each

          var r = fixLen(sig.r, 32);
          sig.r = r;
          var s = fixLen(sig.s, 32);
          sig.s = s; // Calculate the recovery param

          var rs = new Uint8Array(Buffer.concat([r, s]));
          var pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1); // If the first `v` value is a match, return the sig!

          if (pubToAddrStr(pubkey) === address.toString('hex')) {
            sig.v = getRecoveryParam(v, useEIP155, chainId);
            return sig;
          } // Otherwise, try the other `v` value


          v = 1;
          pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1);

          if (pubToAddrStr(pubkey) === address.toString('hex')) {
            sig.v = getRecoveryParam(v, useEIP155, chainId);
            return sig;
          } else {
            // If neither is a match, we should return an error
            throw new Error('Invalid Ethereum signature returned.');
          }
        } catch (err) {
          throw new Error(err);
        }
      }

      exports.addRecoveryParam = addRecoveryParam; // Convert an RLP-serialized transaction (plus signature) into a transaction hash

      exports.hashTransaction = function (serializedTx) {
        return keccak256(Buffer.from(serializedTx, 'hex'));
      }; // Returns address string given public key buffer


      function pubToAddrStr(pub) {
        return keccak256(pub).slice(-40);
      }

      function fixLen(msg, length) {
        var buf = Buffer.alloc(length);

        if (msg.length < length) {
          msg.copy(buf, length - msg.length);
          return buf;
        }

        return msg.slice(-length);
      } // Convert a 0/1 `v` into a recovery param:
      // * For non-EIP155 transactions, return `27 + v`
      // * For EIP155 transactions, return `(CHAIN_ID*2) + 35 + v`


      function getRecoveryParam(v, useEIP155, chainId) {
        // If we are not using EIP155, convert v directly to a buffer and return it
        if (false === useEIP155) return Buffer.from(new BN(v).plus(27).toString(16), 'hex'); // We will use EIP155 in most cases. Convert v to a bignum and operate on it.
        // Note that the protocol calls for v = (CHAIN_ID*2) + 35/36, where 35 or 36
        // is decided on based on the ecrecover result. `v` is passed in as either 0 or 1
        // so we add 35 to that.

        var chainIdBuf = getChainIdBuf(chainId);
        var chainIdBN = new BN(chainIdBuf.toString('hex'), 16);
        return ensureHexBuffer(chainIdBN.times(2).plus(35).plus(v).toString(16));
      }

      function writeUInt64BE(n, buf, off) {
        if (typeof n === 'number') n = n.toString(16);
        var preBuf = Buffer.alloc(8);
        var nStr = n.length % 2 === 0 ? n.toString(16) : "0".concat(n.toString(16));
        var nBuf = Buffer.from(nStr, 'hex');
        nBuf.copy(preBuf, preBuf.length - nBuf.length);
        preBuf.copy(buf, off);
        return preBuf;
      }

      function isHexStr(str) {
        return /^[0-9a-fA-F]+$/.test(str);
      } // Determine if the Lattice can display a string we give it. Currently, the Lattice can only
      // display ASCII strings, so we will reject other UTF8 codes.
      // In the future we may add a mechanism to display certain UTF8 codes such as popular emojis.


      function latticeCanDisplayStr(str) {
        for (var i = 0; i < str.length; i++) {
          if (str.charCodeAt(i) < 0x0020 || str.charCodeAt(i) > 0x007f) return false;
        }

        return true;
      }

      var chainIds = {
        mainnet: 1,
        roptsten: 3,
        rinkeby: 4,
        kovan: 42,
        goerli: 5
      }; // Get a buffer containing the chainId value.
      // Returns a 1, 2, 4, or 8 byte buffer with the chainId encoded in big endian

      function getChainIdBuf(chainId) {
        var b; // If our chainID is a hex string, we can convert it to a hex
        // buffer directly

        if (true === isValidChainIdHexNumStr(chainId)) b = ensureHexBuffer(chainId); // If our chainID is a base-10 number, parse with bignumber.js and convert to hex buffer
        else b = ensureHexBuffer(new BN(chainId).toString(16)); // Make sure the buffer is an allowed size

        if (b.length > 8) throw new Error('ChainID provided is too large.'); // If this matches a u16, u32, or u64 size, return it now

        if (b.length <= 2 || b.length === 4 || b.length === 8) return b; // For other size buffers, we need to pack into u32 or u64 before returning;

        var buf;

        if (b.length === 3) {
          buf = Buffer.alloc(4);
          buf.writeUInt32BE(chainId);
        } else if (b.length <= 8) {
          buf = Buffer.alloc(8);
          b.copy(buf, 8 - b.length);
        }

        return buf;
      } // Determine if the chain uses EIP155 by default, based on the chainID


      function chainUsesEIP155(chainID) {
        switch (chainID) {
          case 3: // ropsten

          case 4:
            // rinkeby
            return false;

          case 1: // mainnet

          case 42: // kovan

          case 5: // goerli

          default:
            // all others should use eip155
            return true;
        }
      } // Determine if a valid number was passed in as a hex string


      function isValidChainIdHexNumStr(s) {
        return new BN(s, 16).isNaN() === false;
      } // If this is a nubmer that fits in one byte, we don't need to add it
      // to the `data` buffer of the main transaction. 
      // Note the one edge case: we still need to use the `data` field for chainID=255.


      function useChainIdBuffer(id) {
        var buf = getChainIdBuf(id);
        if (buf.length === 1) return buf.readUInt8(0) === 255;
        return true;
      }

      exports.chainIds = chainIds; // Ensure a param is represented by a buffer
      // TODO: Remove circular dependency in util.js so that we can put this function there

      function ensureHexBuffer(x) {
        if (x === null || x === 0) return Buffer.alloc(0);else if (Buffer.isBuffer(x)) x = x.toString('hex');
        if (typeof x === 'number') x = "".concat(x.toString(16));else if (typeof x === 'string' && x.slice(0, 2) === '0x') x = x.slice(2);
        if (x.length % 2 > 0) x = "0".concat(x);
        return Buffer.from(x, 'hex');
      }

      exports.ensureHexBuffer = ensureHexBuffer;
      /***/
    },

    /***/
    "xvdF":
    /*!**********************************************!*\
      !*** ./node_modules/bitwise/esm/bits/nor.js ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function xvdF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Applies the NOR operation, expects two arrays of the same size and returns a new one.
       *
       * @example
       * nor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,0,1,0]
       *
       * @param {Array} bits1 input data
       * @param {Array} bits2 input data
       * @return {Array} [bits1 NOR bits2]
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (bits1, bits2) {
        var result = [];

        for (var i = 0; i < bits1.length; i++) {
          result[i] = (bits1[i] | bits2[i]) ^ 1;
        }

        return result;
      };
      /***/

    },

    /***/
    "yE/9":
    /*!***********************************************!*\
      !*** ./node_modules/bitwise/esm/utilities.js ***!
      \***********************************************/

    /*! exports provided: p2 */

    /***/
    function yE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p2", function () {
        return p2;
      }); // 32-bit powers of two wouldn't be possible with <<


      var p2 = [];

      for (var i = 0; i < 32; i++) {
        p2[i] = Math.pow(2, i);
      }
      /***/

    },

    /***/
    "yoIl":
    /*!************************************************!*\
      !*** ./node_modules/bitwise/esm/bits/index.js ***!
      \************************************************/

    /*! exports provided: and, nand, nor, not, or, reduceAnd, reduceNand, reduceNor, reduceOr, reduceXnor, reduceXor, toBoolean, toString, xnor, xor, default */

    /***/
    function yoIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _and__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./and */
      "UBEi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "and", function () {
        return _and__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _nand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nand */
      "+u1v");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nand", function () {
        return _nand__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _nor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nor */
      "xvdF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nor", function () {
        return _nor__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _not__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./not */
      "IunX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "not", function () {
        return _not__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _or__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./or */
      "+FMq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "or", function () {
        return _or__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _reduce_and__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reduce-and */
      "Qhm4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reduceAnd", function () {
        return _reduce_and__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _reduce_nand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reduce-nand */
      "Jtfa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reduceNand", function () {
        return _reduce_nand__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _reduce_nor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./reduce-nor */
      "0d0U");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reduceNor", function () {
        return _reduce_nor__WEBPACK_IMPORTED_MODULE_7__["default"];
      });
      /* harmony import */


      var _reduce_or__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./reduce-or */
      "AuWn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reduceOr", function () {
        return _reduce_or__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /* harmony import */


      var _reduce_xnor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./reduce-xnor */
      "Mh05");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reduceXnor", function () {
        return _reduce_xnor__WEBPACK_IMPORTED_MODULE_9__["default"];
      });
      /* harmony import */


      var _reduce_xor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./reduce-xor */
      "fxaz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reduceXor", function () {
        return _reduce_xor__WEBPACK_IMPORTED_MODULE_10__["default"];
      });
      /* harmony import */


      var _to_boolean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./to-boolean */
      "XYxn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
        return _to_boolean__WEBPACK_IMPORTED_MODULE_11__["default"];
      });
      /* harmony import */


      var _to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./to-string */
      "evRY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "toString", function () {
        return _to_string__WEBPACK_IMPORTED_MODULE_12__["default"];
      });
      /* harmony import */


      var _xnor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./xnor */
      "qVBC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "xnor", function () {
        return _xnor__WEBPACK_IMPORTED_MODULE_13__["default"];
      });
      /* harmony import */


      var _xor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./xor */
      "WtjK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "xor", function () {
        return _xor__WEBPACK_IMPORTED_MODULE_14__["default"];
      });
      /* harmony default export */


      __webpack_exports__["default"] = {
        and: _and__WEBPACK_IMPORTED_MODULE_0__["default"],
        nand: _nand__WEBPACK_IMPORTED_MODULE_1__["default"],
        nor: _nor__WEBPACK_IMPORTED_MODULE_2__["default"],
        not: _not__WEBPACK_IMPORTED_MODULE_3__["default"],
        or: _or__WEBPACK_IMPORTED_MODULE_4__["default"],
        reduceAnd: _reduce_and__WEBPACK_IMPORTED_MODULE_5__["default"],
        reduceNand: _reduce_nand__WEBPACK_IMPORTED_MODULE_6__["default"],
        reduceNor: _reduce_nor__WEBPACK_IMPORTED_MODULE_7__["default"],
        reduceOr: _reduce_or__WEBPACK_IMPORTED_MODULE_8__["default"],
        reduceXnor: _reduce_xnor__WEBPACK_IMPORTED_MODULE_9__["default"],
        reduceXor: _reduce_xor__WEBPACK_IMPORTED_MODULE_10__["default"],
        toBoolean: _to_boolean__WEBPACK_IMPORTED_MODULE_11__["default"],
        toString: _to_string__WEBPACK_IMPORTED_MODULE_12__["default"],
        xnor: _xnor__WEBPACK_IMPORTED_MODULE_13__["default"],
        xor: _xor__WEBPACK_IMPORTED_MODULE_14__["default"]
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=index-e4ad6ad7-js-es5.js.map