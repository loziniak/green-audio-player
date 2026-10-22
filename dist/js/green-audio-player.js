(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GreenAudioPlayer = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = require('./src/js/main').default;

},{"./src/js/main":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GreenAudioPlayer = /*#__PURE__*/function () {
  function GreenAudioPlayer(player, options) {
    _classCallCheck(this, GreenAudioPlayer);
    this.audioPlayer = typeof player === 'string' ? document.querySelector(player) : player;
    var opts = options || {};
    this.audioPlayer.classList.add('green-audio-player');
    this.audioPlayer.insertAdjacentHTML("afterbegin", GreenAudioPlayer.getTemplate());
    this.isDevice = /ipad|iphone|ipod|android/i.test(window.navigator.userAgent.toLowerCase()) && !window.MSStream;
    this.playPauseBtn = this.audioPlayer.querySelector('.play-pause-btn');
    this.loading = this.audioPlayer.querySelector('.loading');
    this.sliders = this.audioPlayer.querySelectorAll('.slider');
    this.progress = this.audioPlayer.querySelector('.controls__progress');
    this.volumeBtn = this.audioPlayer.querySelector('.volume__button');
    this.volumeControls = this.audioPlayer.querySelector('.volume__controls');
    this.volumeProgress = this.volumeControls.querySelector('.volume__progress');
    this.player = opts.altAudioBackend || this.audioPlayer.querySelector('audio');
    this.currentTime = this.audioPlayer.querySelector('.controls__current-time');
    this.totalTime = this.audioPlayer.querySelector('.controls__total-time');
    this.speaker = this.audioPlayer.querySelector('.volume__speaker');
    this.download = this.audioPlayer.querySelector('.download');
    this.downloadLink = this.audioPlayer.querySelector('.download__link');
    this.span = this.audioPlayer.querySelectorAll('.message__offscreen');
    this.svg = this.audioPlayer.getElementsByTagName('svg');
    this.img = this.audioPlayer.getElementsByTagName('img');
    this.draggableClasses = ['pin'];
    this.currentlyDragged = null;
    this.paused = true;
    this.stopOthersOnPlay = opts.stopOthersOnPlay || false;
    this.enableKeystrokes = opts.enableKeystrokes || false;
    this.showTooltips = opts.showTooltips || false;
    var self = this;
    this.labels = {
      volume: {
        open: 'Open Volume Controls',
        close: 'Close Volume Controls'
      },
      pause: 'Pause',
      play: 'Play',
      download: 'Download'
    };
    if (!this.enableKeystrokes) {
      for (var i = 0; i < this.span.length; i++) {
        this.span[i].outerHTML = '';
      }
    } else {
      window.addEventListener('keydown', this.pressKb.bind(self), false);
      window.addEventListener('keyup', this.unPressKb.bind(self), false);
      this.sliders[0].setAttribute('tabindex', 0);
      this.sliders[1].setAttribute('tabindex', 0);
      this.download.setAttribute('tabindex', -1);
      this.downloadLink.setAttribute('tabindex', -1);
      for (var j = 0; j < this.svg.length; j++) {
        this.svg[j].setAttribute('tabindex', 0);
        this.svg[j].setAttribute('focusable', true);
      }
      for (var k = 0; k < this.img.length; k++) {
        this.img[k].setAttribute('tabindex', 0);
      }
    }
    if (this.showTooltips) {
      this.playPauseBtn.setAttribute('title', this.labels.play);
      this.volumeBtn.setAttribute('title', this.labels.volume.open);
      this.downloadLink.setAttribute('title', this.labels.download);
    }
    if (opts.outlineControls || false) {
      this.audioPlayer.classList.add('player-accessible');
    }
    if (opts.showDownloadButton || false) {
      this.showDownload();
    }
    this.initEvents();
    this.directionAware();
    this.overcomeIosLimitations();
    if ('autoplay' in this.player.attributes) {
      var promise = this.player.play();
      if (promise !== undefined) {
        promise.then(function () {
          self.paused = false;
          self.playPauseBtnPlaying(true, self.playPauseBtn);
        }).catch(function () {
          console.error('Green Audio Player Error: Autoplay has been prevented, because it is not allowed by this browser.');
        });
      }
    }
    if ('preload' in this.player.attributes && this.player.attributes.preload.value === 'none') {
      this.hideLoadingIndicator();
    }
  }
  return _createClass(GreenAudioPlayer, [{
    key: "initEvents",
    value: function initEvents() {
      var self = this;
      self.audioPlayer.addEventListener('mousedown', function (event) {
        if (self.isDraggable(event.target)) {
          self.currentlyDragged = event.target;
          var handleMethod = self.currentlyDragged.dataset.method;
          var listener = self[handleMethod].bind(self);
          window.addEventListener('mousemove', listener, false);
          if (self.currentlyDragged.parentElement.parentElement === self.sliders[0]) {
            self.paused = self.player.paused;
            if (self.paused === false) self.togglePlay();
          }
          window.addEventListener('mouseup', function () {
            if (self.currentlyDragged !== false && self.currentlyDragged.parentElement.parentElement === self.sliders[0] && self.paused !== self.player.paused) {
              self.togglePlay();
            }
            self.currentlyDragged = false;
            window.removeEventListener('mousemove', listener, false);
          }, false);
        }
      });

      // for mobile touches
      self.audioPlayer.addEventListener('touchstart', function (event) {
        if (self.isDraggable(event.target)) {
          var _self$currentlyDragge;
          var _event$targetTouches = _slicedToArray(event.targetTouches, 1);
          self.currentlyDragged = _event$targetTouches[0];
          var handleMethod = self.currentlyDragged.target.dataset.method;
          var listener = self[handleMethod].bind(self);
          window.addEventListener('touchmove', listener, false);
          if (((_self$currentlyDragge = self.currentlyDragged) === null || _self$currentlyDragge === void 0 || (_self$currentlyDragge = _self$currentlyDragge.parentElement) === null || _self$currentlyDragge === void 0 ? void 0 : _self$currentlyDragge.parentElement) === self.sliders[0]) {
            self.paused = self.player.paused;
            if (self.paused === false) self.togglePlay();
          }
          window.addEventListener('touchend', function () {
            var _self$currentlyDragge2;
            if (self.currentlyDragged !== false && ((_self$currentlyDragge2 = self.currentlyDragged) === null || _self$currentlyDragge2 === void 0 || (_self$currentlyDragge2 = _self$currentlyDragge2.parentElement) === null || _self$currentlyDragge2 === void 0 ? void 0 : _self$currentlyDragge2.parentElement) === self.sliders[0] && self.paused !== self.player.paused) {
              self.togglePlay();
            }
            self.currentlyDragged = false;
            window.removeEventListener('touchmove', listener, false);
          }, false);
          event.preventDefault();
        }
      });
      this.playPauseBtn.addEventListener('click', this.togglePlay.bind(self));
      this.player.addEventListener('timeupdate', this.updateProgress.bind(self)); // currentTime changes
      this.player.addEventListener('volumechange', this.updateVolume.bind(self)); // volume changes
      if (typeof this.player.volume !== 'undefined') this.player.volume = 0.81;
      if (typeof this.player.setVolume !== 'undefined') this.player.setVolume(0.81);
      this.player.addEventListener('loadedmetadata', function () {
        // metadata loaded: duration
        self.totalTime.textContent = GreenAudioPlayer.formatTime(self.player.duration);
      });
      this.player.addEventListener('seeking', this.showLoadingIndicator.bind(self));
      this.player.addEventListener('seeked', this.hideLoadingIndicator.bind(self));
      this.player.addEventListener('canplay', this.hideLoadingIndicator.bind(self));
      this.player.addEventListener('play', function () {
        self.hideLoadingIndicator();
        self.playPauseBtnPlaying(true, self.playPauseBtn);
      });
      this.player.addEventListener('ended', function () {
        self.player.pause();
        if (typeof self.player.currentTime !== 'undefined') self.player.currentTime = 0;
        if (typeof self.player.setCurrentTime !== 'undefined') self.player.setCurrentTime(0);
        self.playPauseBtnPlaying(false, self.playPauseBtn);
      });
      this.volumeBtn.addEventListener('click', this.showHideVolume.bind(self));
      window.addEventListener('resize', self.directionAware.bind(self));
      window.addEventListener('scroll', self.directionAware.bind(self));
      for (var i = 0; i < this.sliders.length; i++) {
        var pin = this.sliders[i].querySelector('.pin');
        this.sliders[i].addEventListener('click', self[pin.dataset.method].bind(self));
      }
      this.downloadLink.addEventListener('click', this.downloadAudio.bind(self));
    }
  }, {
    key: "overcomeIosLimitations",
    value: function overcomeIosLimitations() {
      var self = this;
      if (this.isDevice) {
        // iOS does not support "canplay" event
        this.player.addEventListener('loadedmetadata', this.hideLoadingIndicator.bind(self));
        // iOS does not let "volume" property to be set programmatically
        this.audioPlayer.querySelector('.volume').style.display = 'none';
        this.audioPlayer.querySelector('.controls').style.marginRight = '0';
      }
    }
  }, {
    key: "isDraggable",
    value: function isDraggable(el) {
      var canDrag = false;
      if (typeof el.classList === 'undefined') return false; // fix for IE 11 not supporting classList on SVG elements

      for (var i = 0; i < this.draggableClasses.length; i++) {
        if (el.classList.contains(this.draggableClasses[i])) {
          canDrag = true;
        }
      }
      return canDrag;
    }
  }, {
    key: "inRange",
    value: function inRange(event) {
      var touch = 'touches' in event; // instanceof TouchEvent may also be used
      var rangeBox = this.getRangeBox(event);
      var sliderPositionAndDimensions = rangeBox.getBoundingClientRect();
      var direction = rangeBox.dataset.direction;
      var min = null;
      var max = null;
      if (direction === 'horizontal') {
        min = sliderPositionAndDimensions.x;
        max = min + sliderPositionAndDimensions.width;
        var clientX = touch ? event.touches[0].clientX : event.clientX;
        if (clientX < min || clientX > max) return false;
      } else {
        min = sliderPositionAndDimensions.top;
        max = min + sliderPositionAndDimensions.height;
        var clientY = touch ? event.touches[0].clientY : event.clientY;
        if (clientY < min || clientY > max) return false;
      }
      return true;
    }
  }, {
    key: "updateProgress",
    value: function updateProgress() {
      var current = this.player.currentTime;
      var percent = current / this.player.duration * 100;
      this.progress.setAttribute('aria-valuenow', percent);
      this.progress.style.width = "".concat(percent, "%");
      this.currentTime.textContent = GreenAudioPlayer.formatTime(current);
    }
  }, {
    key: "updateVolume",
    value: function updateVolume() {
      this.volumeProgress.setAttribute('aria-valuenow', this.player.volume * 100);
      this.volumeProgress.style.height = "".concat(this.player.volume * 100, "%");
      if (this.player.volume >= 0.5) {
        this.speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
      } else if (this.player.volume < 0.5 && this.player.volume > 0.05) {
        this.speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
      } else if (this.player.volume <= 0.05) {
        this.speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
      }
    }
  }, {
    key: "getRangeBox",
    value: function getRangeBox(event) {
      var rangeBox = event.target;
      var el = this.currentlyDragged;
      if (event.type === 'click' && this.isDraggable(event.target)) {
        rangeBox = event.target.parentElement.parentElement;
      }
      if (event.type === 'mousemove') {
        rangeBox = el.parentElement.parentElement;
      }
      if (event.type === 'touchmove') {
        rangeBox = el.target.parentElement.parentElement;
      }
      return rangeBox;
    }
  }, {
    key: "getCoefficient",
    value: function getCoefficient(event) {
      var touch = 'touches' in event; // instanceof TouchEvent may also be used

      var slider = this.getRangeBox(event);
      var sliderPositionAndDimensions = slider.getBoundingClientRect();
      var K = 0;
      if (slider.dataset.direction === 'horizontal') {
        // if event is touch
        var clientX = touch ? event.touches[0].clientX : event.clientX;
        var offsetX = clientX - sliderPositionAndDimensions.left;
        var width = sliderPositionAndDimensions.width;
        K = offsetX / width;
      } else if (slider.dataset.direction === 'vertical') {
        var height = sliderPositionAndDimensions.height;
        var clientY = touch ? event.touches[0].clientY : event.clientY;
        var offsetY = clientY - sliderPositionAndDimensions.top;
        K = 1 - offsetY / height;
      }
      return K;
    }
  }, {
    key: "rewind",
    value: function rewind(event) {
      if (this.player.seekable && this.player.seekable.length) {
        // no seek if not (pre)loaded
        if (this.inRange(event)) {
          var newTime = this.player.duration * this.getCoefficient(event);
          if (typeof this.player.currentTime !== 'undefined') this.player.currentTime = newTime;
          if (typeof this.player.setCurrentTime !== 'undefined') this.player.setCurrentTime(newTime);
        }
      }
    }
  }, {
    key: "showVolume",
    value: function showVolume() {
      if (this.volumeBtn.getAttribute('aria-attribute') === this.labels.volume.open) {
        this.volumeControls.classList.remove('hidden');
        this.volumeBtn.classList.add('open');
        this.volumeBtn.setAttribute('aria-label', this.labels.volume.close);
        this.hasSetAttribute(this.volumeBtn, 'title', this.labels.volume.close);
      }
    }
  }, {
    key: "showHideVolume",
    value: function showHideVolume() {
      this.volumeControls.classList.toggle('hidden');
      if (this.volumeBtn.getAttribute('aria-label') === this.labels.volume.open) {
        this.volumeBtn.setAttribute('aria-label', this.labels.volume.close);
        this.hasSetAttribute(this.volumeBtn, 'title', this.labels.volume.close);
        this.volumeBtn.classList.add('open');
      } else {
        this.volumeBtn.setAttribute('aria-label', this.labels.volume.open);
        this.hasSetAttribute(this.volumeBtn, 'title', this.labels.volume.open);
        this.volumeBtn.classList.remove('open');
      }
    }
  }, {
    key: "changeVolume",
    value: function changeVolume(event) {
      if (this.inRange(event)) {
        var newVolume = Math.round(this.getCoefficient(event) * 50) / 50;
        if (typeof this.player.volume !== 'undefined') this.player.volume = newVolume;
        if (typeof this.player.setVolume !== 'undefined') this.player.setVolume(newVolume);
      }
    }
  }, {
    key: "preloadNone",
    value: function preloadNone() {
      if (!this.player.duration) {
        this.showLoadingIndicator();
      }
    }
  }, {
    key: "togglePlay",
    value: function togglePlay() {
      this.preloadNone();
      if (this.player.paused) {
        if (this.stopOthersOnPlay && this.player instanceof HTMLElement) {
          this.stopOtherPlayers();
        }
        this.player.play();
        this.playPauseBtnPlaying(true, this.playPauseBtn);
      } else {
        this.player.pause();
        this.playPauseBtnPlaying(false, this.playPauseBtn);
      }
    }
  }, {
    key: "hasSetAttribute",
    value: function hasSetAttribute(el, a, v) {
      if (this.showTooltips) {
        if (el.hasAttribute(a)) {
          el.setAttribute(a, v);
        }
      }
    }
  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(time) {
      var pos = this.player.currentTime;
      var end = Math.floor(this.player.duration);
      var newTime = 0;
      if (pos + time < 0 && pos === 0) {
        newTime = this.player.currentTime;
      } else if (pos + time < 0) {
        newTime = 0;
      } else if (pos + time > end) {
        newTime = end;
      } else {
        newTime = this.player.currentTime + time;
      }
      if (typeof this.player.currentTime !== 'undefined') this.player.currentTime = newTime;
      if (typeof this.player.setCurrentTime !== 'undefined') this.player.setCurrentTime(newTime);
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      if (this.isDevice) return;
      var vol = this.player.volume;
      var newVolume = 0;
      if (vol + volume >= 0 && vol + volume < 1) {
        newVolume = this.player.volume + volume;
      } else if (vol + volume <= 0) {
        newVolume = 0;
      } else {
        newVolume = 1;
      }
      if (typeof this.player.volume !== 'undefined') this.player.volume = newVolume;
      if (typeof this.player.setVolume !== 'undefined') this.player.setVolume(newVolume);
    }
  }, {
    key: "unPressKb",
    value: function unPressKb(event) {
      var evt = event || window.event;
      if (this.seeking && (evt.keyCode === 37 || evt.keyCode === 39)) {
        this.togglePlay();
        this.seeking = false;
      }
    }
  }, {
    key: "pressKb",
    value: function pressKb(event) {
      var evt = event || window.event;
      switch (evt.keyCode) {
        case 13: // Enter
        case 32:
          // Spacebar
          if (document.activeElement.parentNode === this.playPauseBtn) {
            this.togglePlay();
          } else if (document.activeElement.parentNode === this.volumeBtn || document.activeElement === this.sliders[1]) {
            if (document.activeElement === this.sliders[1]) {
              try {
                // IE 11 not supporting programmatic focus on svg elements
                this.volumeBtn.children[0].focus();
              } catch (error) {
                this.volumeBtn.focus();
              }
            }
            this.showHideVolume();
          }
          if (evt.keyCode === 13 && this.showDownload && document.activeElement.parentNode === this.downloadLink) {
            this.downloadLink.focus();
          }
          break;
        case 37:
        case 39:
          // horizontal Arrows
          if (document.activeElement === this.sliders[0]) {
            if (evt.keyCode === 37) {
              this.setCurrentTime(-5);
            } else {
              this.setCurrentTime(+5);
            }
            if (!this.player.paused && this.player.seeking) {
              this.togglePlay();
              this.seeking = true;
            }
          }
          break;
        case 38:
        case 40:
          // vertical Arrows
          if (document.activeElement.parentNode === this.volumeBtn || document.activeElement === this.sliders[1]) {
            if (evt.keyCode === 38) {
              this.setVolume(0.05);
            } else {
              this.setVolume(-0.05);
            }
          }
          if (document.activeElement.parentNode === this.volumeBtn) {
            this.showVolume();
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: "stopOtherPlayers",
    value: function stopOtherPlayers() {
      var players = document.querySelectorAll('.green-audio-player');
      for (var i = 0; i < players.length; i++) {
        var _players$i$querySelec;
        (_players$i$querySelec = players[i].querySelector('audio')) === null || _players$i$querySelec === void 0 || _players$i$querySelec.pause();
        this.playPauseBtnPlaying(false, players[i].querySelector('.play-pause-btn'));
      }
    }
  }, {
    key: "playPauseBtnPlaying",
    value: function playPauseBtnPlaying(playing, btn) {
      var icon = btn.firstElementChild.firstElementChild;
      if (playing) {
        icon.attributes.d.value = 'M0 0h6v24H0zM12 0h6v24h-6z';
        btn.setAttribute('aria-label', this.labels.pause);
        this.hasSetAttribute(btn, 'title', this.labels.pause);
      } else {
        icon.attributes.d.value = 'M18 12L0 24V0';
        btn.setAttribute('aria-label', this.labels.play);
        this.hasSetAttribute(btn, 'title', this.labels.play);
      }
    }
  }, {
    key: "showLoadingIndicator",
    value: function showLoadingIndicator() {
      this.playPauseBtn.style.visibility = 'hidden';
      this.loading.style.visibility = 'visible';
    }
  }, {
    key: "hideLoadingIndicator",
    value: function hideLoadingIndicator() {
      this.playPauseBtn.style.visibility = 'visible';
      this.loading.style.visibility = 'hidden';
    }
  }, {
    key: "showDownload",
    value: function showDownload() {
      this.download.style.display = 'block';
    }
  }, {
    key: "downloadAudio",
    value: function downloadAudio() {
      var src = this.player.currentSrc;
      var name = src.split('/').reverse()[0];
      this.downloadLink.setAttribute('href', src);
      this.downloadLink.setAttribute('download', name);
    }
  }, {
    key: "directionAware",
    value: function directionAware() {
      this.volumeControls.classList.remove('top', 'middle', 'bottom');
      if (window.innerHeight < 250) {
        this.volumeControls.classList.add('middle');
      } else if (this.audioPlayer.getBoundingClientRect().top < 180) {
        this.volumeControls.classList.add('bottom');
      } else {
        this.volumeControls.classList.add('top');
      }
    }
  }], [{
    key: "init",
    value: function init(options) {
      var players = document.querySelectorAll(options.selector);
      if (options.altAudioBackend && players.length > 1) throw new Error('Custom Audio backend only allowed for single player setup.');
      players.forEach(function (player) {
        new GreenAudioPlayer(player, options);
      });
    }
  }, {
    key: "createAltBackend",
    value: function createAltBackend(
    // audio tag attributes equivalents:
    autoplay,
    // boolean
    preload,
    // 'none' | 'metadata' | 'auto' | ''

    // functions GreenAudioPlayer will call to play/pause:
    play,
    // () => Promise<void>
    pause,
    // () => void

    // functions GreenAudioPlayer will call to seek and set volume:
    setCurrentTime,
    // (number) => void
    setVolume,
    // (number) => void

    // GreenAudioPlayer will call these to supply listeners, that have to be called, whenever sound engine's state changes:
    addPositionListener,
    // ((number) => void) => void:  current time/position changes ('timeupdate', currentTime)
    addVolumeListener,
    // ((number) => void) => void:  volume changes ('volumechange', volume)
    addSeekingListener,
    // ((boolean) => void) => void: time/position starts/stops to change ('seeking', 'seeked', seeking)
    addDurationListener,
    // ((number) => void) => void:  file is loaded and/or duration changes ('loadedmetadata', 'canplay', duration)
    addEndedListener,
    // (() => void) => void:        file has ended, or no more data is available ('ended')
    addSeekableListener,
    // ((bolean) => void) => void:  backend can or cannot be seeked, eg. when loaded/unloaded new file (seekable)
    addPausedListener,
    // ((bolean) => void) => void:  audio gets (un)paused (paused)
    addSrcListener // ((string) => void) => void:  file download url changes, eg. ne file is loaded (currentSrc)
    ) {
      var altAudioBackend = {
        attributes: {},
        currentTime: 0,
        volume: 0,
        seeking: false,
        duration: 0,
        seekable: false,
        paused: true,
        currentSrc: ''
      };
      if (typeof autoplay === 'boolean') altAudioBackend.attributes.autoplay = {
        value: autoplay
      };
      if (typeof preload === 'string') altAudioBackend.attributes.preload = {
        value: preload
      };
      altAudioBackend.play = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              altAudioBackend.paused = false;
              _context.next = 3;
              return play();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      altAudioBackend.pause = function () {
        pause();
        altAudioBackend.paused = true;
      };
      altAudioBackend.setCurrentTime = setCurrentTime;
      altAudioBackend.setVolume = setVolume;
      altAudioBackend.addEventListener = function (type, listener) {
        switch (type) {
          case 'timeupdate':
            addPositionListener(function (currentTime) {
              listener();
            });
            break;
          case 'volumechange':
            addVolumeListener(function (volume) {
              listener();
            });
            break;
          case 'seeking':
            addSeekingListener(function (seeking) {
              if (seeking) listener();
            });
            break;
          case 'seeked':
            addSeekingListener(function (seeking) {
              if (!seeking) listener();
            });
            break;
          case 'play':
            addPausedListener(function (paused) {
              if (!paused) listener();
            });
            break;
          case 'loadedmetadata':
          case 'canplay':
            addDurationListener(function (duration) {
              if (duration) listener();
            });
            break;
          case 'ended':
            addEndedListener(listener);
            break;
          default:
            throw new Error("Unknown event type: \"".concat(type, "\""));
        }
      };
      addPositionListener(function (currentTime) {
        altAudioBackend.currentTime = currentTime;
      });
      addVolumeListener(function (volume) {
        altAudioBackend.volume = volume;
      });
      addSeekingListener(function (seeking) {
        altAudioBackend.seeking = seeking;
      });
      addDurationListener(function (duration) {
        altAudioBackend.duration = duration;
      });
      addSeekableListener(function (seekable) {
        altAudioBackend.seekable = seekable ? [true] : false;
      });
      addPausedListener(function (paused) {
        altAudioBackend.paused = paused;
      });
      addSrcListener(function (currentSrc) {
        altAudioBackend.currentSrc = currentSrc;
      });
      return altAudioBackend;
    }
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return "\n            <div class=\"holder\">\n                <div class=\"loading\">\n                    <div class=\"loading__spinner\"></div>\n                </div>\n\n                <div class=\"play-pause-btn\" aria-label=\"Play\" role=\"button\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"24\" viewBox=\"0 0 18 24\">\n                        <path fill=\"#566574\" fill-rule=\"evenodd\" d=\"M18 12L0 24V0\" class=\"play-pause-btn__icon\"/>\n                    </svg>\n                </div>\n            </div>\n\n            <div class=\"controls\">\n                <span class=\"controls__current-time\" aria-live=\"off\" role=\"timer\">00:00</span>\n                <div class=\"controls__slider slider\" data-direction=\"horizontal\">\n                    <div class=\"controls__progress gap-progress\" aria-label=\"Time Slider\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\" role=\"slider\">\n                        <div class=\"pin progress__pin\" data-method=\"rewind\"></div>\n                    </div>\n                </div>\n                <span class=\"controls__total-time\">00:00</span>\n            </div>\n\n            <div class=\"volume\">\n                <div class=\"volume__button\" aria-label=\"Open Volume Controls\" role=\"button\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                        <path class=\"volume__speaker\" fill=\"#566574\" fill-rule=\"evenodd\" d=\"M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z\"/>\n                    </svg>\n                    <span class=\"message__offscreen\">Press Enter or Space to show volume slider.</span>\n                </div>\n                <div class=\"volume__controls hidden\">\n                    <div class=\"volume__slider slider\" data-direction=\"vertical\">\n                        <div class=\"volume__progress gap-progress\" aria-label=\"Volume Slider\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"81\" role=\"slider\">\n                            <div class=\"pin volume__pin\" data-method=\"changeVolume\"></div>\n                        </div>\n                        <span class=\"message__offscreen\">Use Up/Down Arrow keys to increase or decrease volume.</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"download\">\n                <a class=\"download__link\" href=\"\" download=\"\" aria-label=\"Download\" role=\"button\">\n                    <svg width=\"24\" height=\"24\" fill=\"#566574\" enable-background=\"new 0 0 29.978 29.978\" version=\"1.1\" viewBox=\"0 0 29.978 29.978\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"m25.462 19.105v6.848h-20.947v-6.848h-4.026v8.861c0 1.111 0.9 2.012 2.016 2.012h24.967c1.115 0 2.016-0.9 2.016-2.012v-8.861h-4.026z\"/>\n                        <path d=\"m14.62 18.426l-5.764-6.965s-0.877-0.828 0.074-0.828 3.248 0 3.248 0 0-0.557 0-1.416v-8.723s-0.129-0.494 0.615-0.494h4.572c0.536 0 0.524 0.416 0.524 0.416v8.742 1.266s1.842 0 2.998 0c1.154 0 0.285 0.867 0.285 0.867s-4.904 6.51-5.588 7.193c-0.492 0.495-0.964-0.058-0.964-0.058z\"/>\n                    </svg>\n                </a>\n            </div>\n        ";
    }
  }, {
    key: "formatTime",
    value: function formatTime(time) {
      var min = Math.floor(time / 60);
      var sec = Math.floor(time % 60);
      return "".concat(min < 10 ? "0".concat(min) : min, ":").concat(sec < 10 ? "0".concat(sec) : sec);
    }
  }]);
}();
var _default = exports.default = GreenAudioPlayer;

},{}]},{},[1])(1)
});
