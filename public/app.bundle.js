/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ObjectGroup = __webpack_require__(3);\n\nvar _ObjectGroup2 = _interopRequireDefault(_ObjectGroup);\n\nvar _SocketManager = __webpack_require__(4);\n\nvar _SocketManager2 = _interopRequireDefault(_SocketManager);\n\nvar _InputManager = __webpack_require__(2);\n\nvar _InputManager2 = _interopRequireDefault(_InputManager);\n\nvar _config = __webpack_require__(1);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n    function Game(mountPoint) {\n        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;\n        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 600;\n        var bgColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#000';\n\n        _classCallCheck(this, Game);\n\n        this.canvas = document.createElement('canvas');\n        this.canvas.width = width;\n        this.canvas.height = height;\n        this.context = this.canvas.getContext('2d');\n        this.bgColor = bgColor;\n        this.objects = [];\n        this.start = null;\n        this.id = null;\n        this.socketManager = new _SocketManager2.default(_config2.default.serverAddress, this);\n        this.inputManager = new _InputManager2.default();\n        this.run = this.run.bind(this); // without binding, function loses 'this' context when passed to rAF.\n\n        document.getElementById(mountPoint).appendChild(this.canvas);\n    }\n\n    _createClass(Game, [{\n        key: 'clearCanvas',\n        value: function clearCanvas() {\n            this.context.fillStyle = this.bgColor;\n            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            this.clearCanvas();\n            this.objects.forEach(function (object) {\n                object.render();\n            });\n        }\n    }, {\n        key: 'registerObject',\n        value: function registerObject(object) {\n            this.objects.push(object);\n        }\n    }, {\n        key: 'registerObjectGroup',\n        value: function registerObjectGroup(name) {\n            this.objects.push(new _ObjectGroup2.default(name));\n        }\n    }, {\n        key: 'run',\n        value: function run(timestamp) {\n            if (!this.start) {\n                this.start = timestamp;\n            }\n            if (timestamp - this.start >= 16) {\n                var commands = this.inputManager.convertKeysToCommands(window.pressedKeys);\n                this.sendInput(commands);\n                this.render();\n                this.start = timestamp;\n            }\n            requestAnimationFrame(this.run);\n        }\n    }, {\n        key: 'sendInput',\n        value: function sendInput(commands) {\n            this.socketManager.sendInput(commands, this.id);\n        }\n    }]);\n\n    return Game;\n}();\n\nexports.default = Game;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS5qcz82ZjI0Il0sIm5hbWVzIjpbIkdhbWUiLCJtb3VudFBvaW50Iiwid2lkdGgiLCJoZWlnaHQiLCJiZ0NvbG9yIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJvYmplY3RzIiwic3RhcnQiLCJpZCIsInNvY2tldE1hbmFnZXIiLCJzZXJ2ZXJBZGRyZXNzIiwiaW5wdXRNYW5hZ2VyIiwicnVuIiwiYmluZCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsZWFyQ2FudmFzIiwiZm9yRWFjaCIsIm9iamVjdCIsInJlbmRlciIsInB1c2giLCJuYW1lIiwidGltZXN0YW1wIiwiY29tbWFuZHMiLCJjb252ZXJ0S2V5c1RvQ29tbWFuZHMiLCJ3aW5kb3ciLCJwcmVzc2VkS2V5cyIsInNlbmRJbnB1dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLEk7QUFDakIsa0JBQVlDLFVBQVosRUFBb0U7QUFBQSxZQUE1Q0MsS0FBNEMsdUVBQXBDLEdBQW9DO0FBQUEsWUFBL0JDLE1BQStCLHVFQUF0QixHQUFzQjtBQUFBLFlBQWpCQyxPQUFpQix1RUFBUCxNQUFPOztBQUFBOztBQUNoRSxhQUFLQyxNQUFMLEdBQWNDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLGFBQUtGLE1BQUwsQ0FBWUgsS0FBWixHQUFvQkEsS0FBcEI7QUFDQSxhQUFLRyxNQUFMLENBQVlGLE1BQVosR0FBcUJBLE1BQXJCO0FBQ0EsYUFBS0ssT0FBTCxHQUFlLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFmO0FBQ0EsYUFBS0wsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsYUFBS00sT0FBTCxHQUFlLEVBQWY7QUFDQSxhQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxJQUFWO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQiw0QkFBa0IsaUJBQU9DLGFBQXpCLEVBQXdDLElBQXhDLENBQXJCO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQiw0QkFBcEI7QUFDQSxhQUFLQyxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTQyxJQUFULENBQWMsSUFBZCxDQUFYLENBWGdFLENBV2hDOztBQUVoQ1gsaUJBQVNZLGNBQVQsQ0FBd0JqQixVQUF4QixFQUFvQ2tCLFdBQXBDLENBQWdELEtBQUtkLE1BQXJEO0FBQ0g7Ozs7c0NBRVk7QUFDVCxpQkFBS0csT0FBTCxDQUFhWSxTQUFiLEdBQXlCLEtBQUtoQixPQUE5QjtBQUNBLGlCQUFLSSxPQUFMLENBQWFhLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsS0FBS2hCLE1BQUwsQ0FBWUgsS0FBeEMsRUFBK0MsS0FBS0csTUFBTCxDQUFZRixNQUEzRDtBQUNIOzs7aUNBRU87QUFDSixpQkFBS21CLFdBQUw7QUFDQSxpQkFBS1osT0FBTCxDQUFhYSxPQUFiLENBQXFCLFVBQUNDLE1BQUQsRUFBWTtBQUM3QkEsdUJBQU9DLE1BQVA7QUFDSCxhQUZEO0FBR0g7Ozt1Q0FDY0QsTSxFQUFPO0FBQ2xCLGlCQUFLZCxPQUFMLENBQWFnQixJQUFiLENBQWtCRixNQUFsQjtBQUNIOzs7NENBQ21CRyxJLEVBQUs7QUFDckIsaUJBQUtqQixPQUFMLENBQWFnQixJQUFiLENBQWtCLDBCQUFnQkMsSUFBaEIsQ0FBbEI7QUFDSDs7OzRCQUNHQyxTLEVBQVU7QUFDVixnQkFBRyxDQUFDLEtBQUtqQixLQUFULEVBQWU7QUFDWCxxQkFBS0EsS0FBTCxHQUFhaUIsU0FBYjtBQUNIO0FBQ0QsZ0JBQUlBLFlBQVksS0FBS2pCLEtBQWxCLElBQTRCLEVBQS9CLEVBQWtDO0FBQzlCLG9CQUFJa0IsV0FBVyxLQUFLZCxZQUFMLENBQWtCZSxxQkFBbEIsQ0FBd0NDLE9BQU9DLFdBQS9DLENBQWY7QUFDQSxxQkFBS0MsU0FBTCxDQUFlSixRQUFmO0FBQ0EscUJBQUtKLE1BQUw7QUFDQSxxQkFBS2QsS0FBTCxHQUFhaUIsU0FBYjtBQUNIO0FBQ0RNLGtDQUFzQixLQUFLbEIsR0FBM0I7QUFDSDs7O2tDQUNTYSxRLEVBQVM7QUFDZixpQkFBS2hCLGFBQUwsQ0FBbUJvQixTQUFuQixDQUE2QkosUUFBN0IsRUFBdUMsS0FBS2pCLEVBQTVDO0FBQ0g7Ozs7OztrQkFoRGdCWixJIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2JqZWN0R3JvdXAgZnJvbSAnLi9PYmplY3RHcm91cCc7XHJcbmltcG9ydCBTb2NrZXRNYW5hZ2VyIGZyb20gJy4vU29ja2V0TWFuYWdlcic7XHJcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnLi9JbnB1dE1hbmFnZXInO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xyXG4gICAgY29uc3RydWN0b3IobW91bnRQb2ludCwgd2lkdGggPSA4MDAsIGhlaWdodCA9IDYwMCwgYmdDb2xvciA9ICcjMDAwJyl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuYmdDb2xvciA9IGJnQ29sb3I7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRNYW5hZ2VyID0gbmV3IFNvY2tldE1hbmFnZXIoY29uZmlnLnNlcnZlckFkZHJlc3MsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucnVuID0gdGhpcy5ydW4uYmluZCh0aGlzKTsgLy8gd2l0aG91dCBiaW5kaW5nLCBmdW5jdGlvbiBsb3NlcyAndGhpcycgY29udGV4dCB3aGVuIHBhc3NlZCB0byByQUYuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW91bnRQb2ludCkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYmdDb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgb2JqZWN0LnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJPYmplY3Qob2JqZWN0KXtcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpXHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9iamVjdEdyb3VwKG5hbWUpe1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyBPYmplY3RHcm91cChuYW1lKSk7XHJcbiAgICB9XHJcbiAgICBydW4odGltZXN0YW1wKXtcclxuICAgICAgICBpZighdGhpcy5zdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCh0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0KSA+PSAxNil7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kcyA9IHRoaXMuaW5wdXRNYW5hZ2VyLmNvbnZlcnRLZXlzVG9Db21tYW5kcyh3aW5kb3cucHJlc3NlZEtleXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRJbnB1dChjb21tYW5kcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bik7XHJcbiAgICB9XHJcbiAgICBzZW5kSW5wdXQoY29tbWFuZHMpe1xyXG4gICAgICAgIHRoaXMuc29ja2V0TWFuYWdlci5zZW5kSW5wdXQoY29tbWFuZHMsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dhbWUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    serverAddress: 'ws://localhost:3000'\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/NjkyNiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VydmVyQWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNiQyxtQkFBZTtBQURGLENBQWpCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlcnZlckFkZHJlc3M6ICd3czovL2xvY2FsaG9zdDozMDAwJ1xyXG59IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _inputTypes = __webpack_require__(5);\n\nvar _inputTypes2 = _interopRequireDefault(_inputTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar InputManager = function () {\n    function InputManager() {\n        _classCallCheck(this, InputManager);\n\n        this.commands = {\n            \"up\": null,\n            \"down\": null,\n            \"left\": null,\n            \"right\": null,\n            \"primary\": null,\n            \"secondary\": null,\n            \"target\": null\n        };\n\n        window.pressedKeys = [];\n        window.addEventListener('keydown', function (event) {\n            if (window.pressedKeys.indexOf(event.key.toLowerCase()) < 0) {\n                window.pressedKeys.push(event.key.toLowerCase());\n            }\n            event.preventdefault();\n        });\n        window.addEventListener('keyup', function (event) {\n            window.pressedKeys.splice(window.pressedKeys.indexOf(event.key.toLowerCase()), 1);\n        });\n    }\n\n    _createClass(InputManager, [{\n        key: \"bindKeys\",\n        value: function bindKeys() {\n            var up = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"w\";\n            var down = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"s\";\n            var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"a\";\n            var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"d\";\n            var primary = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \" \";\n            var secondary = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"shift\";\n            var target = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : \"`\";\n\n            this.commands.up = up;\n            this.commands.down = down;\n            this.commands.left = left;\n            this.commands.right = right;\n            this.commands.primary = primary;\n            this.commands.secondary = secondary;\n            this.commands.target = target;\n        }\n    }, {\n        key: \"convertKeysToCommands\",\n        value: function convertKeysToCommands(keys) {\n            var _this = this;\n\n            var commands = [];\n            keys.forEach(function (key) {\n                if (key === _this.commands.up) {\n                    commands.push(_inputTypes2.default.UP);\n                }\n                if (key === _this.commands.down) {\n                    commands.push(_inputTypes2.default.DOWN);\n                }\n                if (key === _this.commands.left) {\n                    commands.push(_inputTypes2.default.LEFT);\n                }\n                if (key === _this.commands.right) {\n                    commands.push(_inputTypes2.default.RIGHT);\n                }\n                if (key === _this.commands.primary) {\n                    commands.push(_inputTypes2.default.BUTTON_1);\n                }\n                if (key === _this.commands.secondary) {\n                    commands.push(_inputTypes2.default.BUTTON_2);\n                }\n                if (key === _this.commands.target) {\n                    commands.push(_inputTypes2.default.BUTTON_3);\n                }\n            });\n            return commands;\n        }\n    }]);\n\n    return InputManager;\n}();\n\nmodule.exports = InputManager;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXRNYW5hZ2VyLmpzPzNlZGEiXSwibmFtZXMiOlsiSW5wdXRNYW5hZ2VyIiwiY29tbWFuZHMiLCJ3aW5kb3ciLCJwcmVzc2VkS2V5cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImluZGV4T2YiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJwcmV2ZW50ZGVmYXVsdCIsInNwbGljZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0YXJnZXQiLCJrZXlzIiwiZm9yRWFjaCIsIlVQIiwiRE9XTiIsIkxFRlQiLCJSSUdIVCIsIkJVVFRPTl8xIiwiQlVUVE9OXzIiLCJCVVRUT05fMyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsWTtBQUNGLDRCQUFhO0FBQUE7O0FBQ1QsYUFBS0MsUUFBTCxHQUFnQjtBQUNaLGtCQUFNLElBRE07QUFFWixvQkFBUSxJQUZJO0FBR1osb0JBQVEsSUFISTtBQUlaLHFCQUFTLElBSkc7QUFLWix1QkFBVyxJQUxDO0FBTVoseUJBQWEsSUFORDtBQU9aLHNCQUFVO0FBUEUsU0FBaEI7O0FBVUFDLGVBQU9DLFdBQVAsR0FBcUIsRUFBckI7QUFDQUQsZUFBT0UsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDLGdCQUFHSCxPQUFPQyxXQUFQLENBQW1CRyxPQUFuQixDQUEyQkQsTUFBTUUsR0FBTixDQUFVQyxXQUFWLEVBQTNCLElBQXNELENBQXpELEVBQTJEO0FBQ3hETix1QkFBT0MsV0FBUCxDQUFtQk0sSUFBbkIsQ0FBd0JKLE1BQU1FLEdBQU4sQ0FBVUMsV0FBVixFQUF4QjtBQUNGO0FBQ0RILGtCQUFNSyxjQUFOO0FBQ0gsU0FMRDtBQU1BUixlQUFPRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDQyxLQUFELEVBQVc7QUFDeENILG1CQUFPQyxXQUFQLENBQW1CUSxNQUFuQixDQUEwQlQsT0FBT0MsV0FBUCxDQUFtQkcsT0FBbkIsQ0FBMkJELE1BQU1FLEdBQU4sQ0FBVUMsV0FBVixFQUEzQixDQUExQixFQUErRSxDQUEvRTtBQUNILFNBRkQ7QUFHSDs7OzttQ0FFMEY7QUFBQSxnQkFBbEZJLEVBQWtGLHVFQUEvRSxHQUErRTtBQUFBLGdCQUExRUMsSUFBMEUsdUVBQXJFLEdBQXFFO0FBQUEsZ0JBQWhFQyxJQUFnRSx1RUFBM0QsR0FBMkQ7QUFBQSxnQkFBdERDLEtBQXNELHVFQUFoRCxHQUFnRDtBQUFBLGdCQUEzQ0MsT0FBMkMsdUVBQW5DLEdBQW1DO0FBQUEsZ0JBQTlCQyxTQUE4Qix1RUFBcEIsT0FBb0I7QUFBQSxnQkFBWEMsTUFBVyx1RUFBSixHQUFJOztBQUN2RixpQkFBS2pCLFFBQUwsQ0FBY1csRUFBZCxHQUFtQkEsRUFBbkI7QUFDQSxpQkFBS1gsUUFBTCxDQUFjWSxJQUFkLEdBQXFCQSxJQUFyQjtBQUNBLGlCQUFLWixRQUFMLENBQWNhLElBQWQsR0FBcUJBLElBQXJCO0FBQ0EsaUJBQUtiLFFBQUwsQ0FBY2MsS0FBZCxHQUFzQkEsS0FBdEI7QUFDQSxpQkFBS2QsUUFBTCxDQUFjZSxPQUFkLEdBQXdCQSxPQUF4QjtBQUNBLGlCQUFLZixRQUFMLENBQWNnQixTQUFkLEdBQTBCQSxTQUExQjtBQUNBLGlCQUFLaEIsUUFBTCxDQUFjaUIsTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDs7OzhDQUVxQkMsSSxFQUFLO0FBQUE7O0FBQ3ZCLGdCQUFJbEIsV0FBVyxFQUFmO0FBQ0FrQixpQkFBS0MsT0FBTCxDQUFhLFVBQUNiLEdBQUQsRUFBUztBQUNsQixvQkFBR0EsUUFBUSxNQUFLTixRQUFMLENBQWNXLEVBQXpCLEVBQTRCO0FBQ3hCWCw2QkFBU1EsSUFBVCxDQUFjLHFCQUFXWSxFQUF6QjtBQUNIO0FBQ0Qsb0JBQUdkLFFBQVEsTUFBS04sUUFBTCxDQUFjWSxJQUF6QixFQUE4QjtBQUMxQlosNkJBQVNRLElBQVQsQ0FBYyxxQkFBV2EsSUFBekI7QUFDSDtBQUNELG9CQUFHZixRQUFRLE1BQUtOLFFBQUwsQ0FBY2EsSUFBekIsRUFBOEI7QUFDMUJiLDZCQUFTUSxJQUFULENBQWMscUJBQVdjLElBQXpCO0FBQ0g7QUFDRCxvQkFBR2hCLFFBQVEsTUFBS04sUUFBTCxDQUFjYyxLQUF6QixFQUErQjtBQUMzQmQsNkJBQVNRLElBQVQsQ0FBYyxxQkFBV2UsS0FBekI7QUFDSDtBQUNELG9CQUFHakIsUUFBUSxNQUFLTixRQUFMLENBQWNlLE9BQXpCLEVBQWlDO0FBQzdCZiw2QkFBU1EsSUFBVCxDQUFjLHFCQUFXZ0IsUUFBekI7QUFDSDtBQUNELG9CQUFHbEIsUUFBUSxNQUFLTixRQUFMLENBQWNnQixTQUF6QixFQUFtQztBQUMvQmhCLDZCQUFTUSxJQUFULENBQWMscUJBQVdpQixRQUF6QjtBQUNIO0FBQ0Qsb0JBQUduQixRQUFRLE1BQUtOLFFBQUwsQ0FBY2lCLE1BQXpCLEVBQWdDO0FBQzVCakIsNkJBQVNRLElBQVQsQ0FBYyxxQkFBV2tCLFFBQXpCO0FBQ0g7QUFDSixhQXRCRDtBQXVCQSxtQkFBTzFCLFFBQVA7QUFDSDs7Ozs7O0FBSUwyQixPQUFPQyxPQUFQLEdBQWlCN0IsWUFBakIiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnB1dFR5cGVzIGZyb20gJy4uLy4uL2NvbW1vbi9pbnB1dC10eXBlcyc7XHJcblxyXG5jbGFzcyBJbnB1dE1hbmFnZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuY29tbWFuZHMgPSB7XHJcbiAgICAgICAgICAgIFwidXBcIjogbnVsbCxcclxuICAgICAgICAgICAgXCJkb3duXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwibGVmdFwiOiBudWxsLFxyXG4gICAgICAgICAgICBcInJpZ2h0XCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwicHJpbWFyeVwiOiBudWxsLFxyXG4gICAgICAgICAgICBcInNlY29uZGFyeVwiOiBudWxsLFxyXG4gICAgICAgICAgICBcInRhcmdldFwiOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5wcmVzc2VkS2V5cyA9IFtdO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wcmVzc2VkS2V5cy5pbmRleE9mKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpKSA8IDApe1xyXG4gICAgICAgICAgICAgICB3aW5kb3cucHJlc3NlZEtleXMucHVzaChldmVudC5rZXkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudGRlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnByZXNzZWRLZXlzLnNwbGljZSh3aW5kb3cucHJlc3NlZEtleXMuaW5kZXhPZihldmVudC5rZXkudG9Mb3dlckNhc2UoKSksIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRLZXlzKHVwPVwid1wiLCBkb3duPVwic1wiLCBsZWZ0PVwiYVwiLCByaWdodD1cImRcIiwgcHJpbWFyeT1cIiBcIiwgc2Vjb25kYXJ5PVwic2hpZnRcIiwgdGFyZ2V0PVwiYFwiKXtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzLnVwID0gdXA7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kcy5kb3duID0gZG93bjtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMuY29tbWFuZHMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzLnByaW1hcnkgPSBwcmltYXJ5O1xyXG4gICAgICAgIHRoaXMuY29tbWFuZHMuc2Vjb25kYXJ5ID0gc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRoaXMuY29tbWFuZHMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRLZXlzVG9Db21tYW5kcyhrZXlzKXtcclxuICAgICAgICBsZXQgY29tbWFuZHMgPSBbXTtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZihrZXkgPT09IHRoaXMuY29tbWFuZHMudXApe1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChpbnB1dFR5cGVzLlVQKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihrZXkgPT09IHRoaXMuY29tbWFuZHMuZG93bil7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kcy5wdXNoKGlucHV0VHlwZXMuRE9XTik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoa2V5ID09PSB0aGlzLmNvbW1hbmRzLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChpbnB1dFR5cGVzLkxFRlQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdGhpcy5jb21tYW5kcy5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kcy5wdXNoKGlucHV0VHlwZXMuUklHSFQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdGhpcy5jb21tYW5kcy5wcmltYXJ5KXtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goaW5wdXRUeXBlcy5CVVRUT05fMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoa2V5ID09PSB0aGlzLmNvbW1hbmRzLnNlY29uZGFyeSl7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kcy5wdXNoKGlucHV0VHlwZXMuQlVUVE9OXzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdGhpcy5jb21tYW5kcy50YXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChpbnB1dFR5cGVzLkJVVFRPTl8zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb21tYW5kcztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW5wdXRNYW5hZ2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnB1dE1hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ObjectGroup = function () {\n    function ObjectGroup(name) {\n        _classCallCheck(this, ObjectGroup);\n\n        this.name = name;\n        this.objects = [];\n    }\n\n    _createClass(ObjectGroup, [{\n        key: \"registerObject\",\n        value: function registerObject(object) {\n            this.objects.push(object);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            this.objects.forEach(function (object) {\n                object.render();\n            });\n        }\n    }]);\n\n    return ObjectGroup;\n}();\n\nexports.default = ObjectGroup;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT2JqZWN0R3JvdXAuanM/YWQ3NCJdLCJuYW1lcyI6WyJPYmplY3RHcm91cCIsIm5hbWUiLCJvYmplY3RzIiwib2JqZWN0IiwicHVzaCIsImZvckVhY2giLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLFc7QUFDakIseUJBQVlDLElBQVosRUFBaUI7QUFBQTs7QUFDYixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNIOzs7O3VDQUNjQyxNLEVBQU87QUFDbEIsaUJBQUtELE9BQUwsQ0FBYUUsSUFBYixDQUFrQkQsTUFBbEI7QUFDSDs7O2lDQUNPO0FBQ0osaUJBQUtELE9BQUwsQ0FBYUcsT0FBYixDQUFxQixVQUFDRixNQUFELEVBQVk7QUFDN0JBLHVCQUFPRyxNQUFQO0FBQ0gsYUFGRDtBQUdIOzs7Ozs7a0JBWmdCTixXIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RHcm91cHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlck9iamVjdChvYmplY3Qpe1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09iamVjdEdyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _messageTypes = __webpack_require__(6);\n\nvar _messageTypes2 = _interopRequireDefault(_messageTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SocketManager = function () {\n    function SocketManager(serverAddress, game) {\n        var _this = this;\n\n        _classCallCheck(this, SocketManager);\n\n        this.game = game;\n        this.socket = new WebSocket(serverAddress);\n        this.socket.addEventListener('open', function () {\n            console.log('Client connected to ' + serverAddress + '.');\n            _this.socket.send(JSON.stringify({\n                type: _messageTypes2.default.client.HELLO,\n                data: 'Hello'\n            }));\n        });\n        this.socket.addEventListener('message', function (event) {\n            console.log(event.data);\n            var response = JSON.parse(event.data);\n            if (response.type === _messageTypes2.default.server.WELCOME) {\n                _this.game.id = response.id;\n            }\n        });\n    }\n\n    _createClass(SocketManager, [{\n        key: 'sendInput',\n        value: function sendInput(commands, id) {\n            this.socket.send(JSON.stringify({\n                type: _messageTypes2.default.client.INPUT,\n                client: id,\n                data: commands\n            }));\n        }\n    }]);\n\n    return SocketManager;\n}();\n\nexports.default = SocketManager;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU29ja2V0TWFuYWdlci5qcz85ODU0Il0sIm5hbWVzIjpbIlNvY2tldE1hbmFnZXIiLCJzZXJ2ZXJBZGRyZXNzIiwiZ2FtZSIsInNvY2tldCIsIldlYlNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiY2xpZW50IiwiSEVMTE8iLCJkYXRhIiwiZXZlbnQiLCJyZXNwb25zZSIsInBhcnNlIiwic2VydmVyIiwiV0VMQ09NRSIsImlkIiwiY29tbWFuZHMiLCJJTlBVVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLGE7QUFDakIsMkJBQVlDLGFBQVosRUFBMkJDLElBQTNCLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzVCLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxJQUFJQyxTQUFKLENBQWNILGFBQWQsQ0FBZDtBQUNBLGFBQUtFLE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsTUFBN0IsRUFBcUMsWUFBSztBQUN0Q0Msb0JBQVFDLEdBQVIsMEJBQW1DTixhQUFuQztBQUNBLGtCQUFLRSxNQUFMLENBQVlLLElBQVosQ0FBaUJDLEtBQUtDLFNBQUwsQ0FBZTtBQUM1QkMsc0JBQU0sdUJBQVNDLE1BQVQsQ0FBZ0JDLEtBRE07QUFFNUJDLHNCQUFNO0FBRnNCLGFBQWYsQ0FBakI7QUFJSCxTQU5EO0FBT0EsYUFBS1gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixTQUE3QixFQUF3QyxVQUFDVSxLQUFELEVBQVc7QUFDL0NULG9CQUFRQyxHQUFSLENBQVlRLE1BQU1ELElBQWxCO0FBQ0EsZ0JBQUlFLFdBQVdQLEtBQUtRLEtBQUwsQ0FBV0YsTUFBTUQsSUFBakIsQ0FBZjtBQUNBLGdCQUFHRSxTQUFTTCxJQUFULEtBQWtCLHVCQUFTTyxNQUFULENBQWdCQyxPQUFyQyxFQUE2QztBQUN6QyxzQkFBS2pCLElBQUwsQ0FBVWtCLEVBQVYsR0FBZUosU0FBU0ksRUFBeEI7QUFDSDtBQUNKLFNBTkQ7QUFPSDs7OztrQ0FDU0MsUSxFQUFVRCxFLEVBQUc7QUFDbkIsaUJBQUtqQixNQUFMLENBQVlLLElBQVosQ0FBaUJDLEtBQUtDLFNBQUwsQ0FBZTtBQUM1QkMsc0JBQU0sdUJBQVNDLE1BQVQsQ0FBZ0JVLEtBRE07QUFFNUJWLHdCQUFRUSxFQUZvQjtBQUc1Qk4sc0JBQU1PO0FBSHNCLGFBQWYsQ0FBakI7QUFLSDs7Ozs7O2tCQXpCZ0JyQixhIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXNnVHlwZXMgZnJvbSAnLi4vLi4vY29tbW9uL21lc3NhZ2UtdHlwZXMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXRNYW5hZ2Vye1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmVyQWRkcmVzcywgZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoc2VydmVyQWRkcmVzcyk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2xpZW50IGNvbm5lY3RlZCB0byAke3NlcnZlckFkZHJlc3N9LmApO1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG1zZ1R5cGVzLmNsaWVudC5IRUxMTyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdIZWxsbydcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnR5cGUgPT09IG1zZ1R5cGVzLnNlcnZlci5XRUxDT01FKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5pZCA9IHJlc3BvbnNlLmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNlbmRJbnB1dChjb21tYW5kcywgaWQpe1xyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiBtc2dUeXBlcy5jbGllbnQuSU5QVVQsXHJcbiAgICAgICAgICAgIGNsaWVudDogaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IGNvbW1hbmRzXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Tb2NrZXRNYW5hZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = {\n    UP: 1,\n    DOWN: 2,\n    LEFT: 3,\n    RIGHT: 4,\n    BUTTON_1: 5,\n    BUTTON_2: 6,\n    BUTTON_3: 7,\n    BUTTON_4: 8,\n    BUTTON_5: 9,\n    BUTTON_6: 10,\n    BUTTON_7: 11,\n    BUTTON_8: 12,\n    BUTTON_9: 13,\n    BUTTON_10: 14\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi8uLi9jb21tb24vaW5wdXQtdHlwZXMuanM/Yjg3NSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiVVAiLCJET1dOIiwiTEVGVCIsIlJJR0hUIiwiQlVUVE9OXzEiLCJCVVRUT05fMiIsIkJVVFRPTl8zIiwiQlVUVE9OXzQiLCJCVVRUT05fNSIsIkJVVFRPTl82IiwiQlVUVE9OXzciLCJCVVRUT05fOCIsIkJVVFRPTl85IiwiQlVUVE9OXzEwIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNiQyxRQUFJLENBRFM7QUFFYkMsVUFBTSxDQUZPO0FBR2JDLFVBQU0sQ0FITztBQUliQyxXQUFPLENBSk07QUFLYkMsY0FBVSxDQUxHO0FBTWJDLGNBQVUsQ0FORztBQU9iQyxjQUFVLENBUEc7QUFRYkMsY0FBVSxDQVJHO0FBU2JDLGNBQVUsQ0FURztBQVViQyxjQUFVLEVBVkc7QUFXYkMsY0FBVSxFQVhHO0FBWWJDLGNBQVUsRUFaRztBQWFiQyxjQUFVLEVBYkc7QUFjYkMsZUFBVztBQWRFLENBQWpCIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFVQOiAxLFxyXG4gICAgRE9XTjogMixcclxuICAgIExFRlQ6IDMsXHJcbiAgICBSSUdIVDogNCxcclxuICAgIEJVVFRPTl8xOiA1LFxyXG4gICAgQlVUVE9OXzI6IDYsXHJcbiAgICBCVVRUT05fMzogNyxcclxuICAgIEJVVFRPTl80OiA4LFxyXG4gICAgQlVUVE9OXzU6IDksXHJcbiAgICBCVVRUT05fNjogMTAsXHJcbiAgICBCVVRUT05fNzogMTEsXHJcbiAgICBCVVRUT05fODogMTIsXHJcbiAgICBCVVRUT05fOTogMTMsXHJcbiAgICBCVVRUT05fMTA6IDE0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9jb21tb24vaW5wdXQtdHlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = {\n    server: {\n        WELCOME: 1,\n        UPDATE: 2,\n        NEWPLAYER: 3,\n        PLAYERLEFT: 4,\n        ROUNDBEGIN: 5,\n        ROUNDEND: 6\n    },\n    client: {\n        HELLO: 1,\n        GOODBYE: 2,\n        INPUT: 3,\n        PLAYERREADY: 4,\n        SHIPCONFIG: 5\n    }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi8uLi9jb21tb24vbWVzc2FnZS10eXBlcy5qcz8yNjk1Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZXJ2ZXIiLCJXRUxDT01FIiwiVVBEQVRFIiwiTkVXUExBWUVSIiwiUExBWUVSTEVGVCIsIlJPVU5EQkVHSU4iLCJST1VOREVORCIsImNsaWVudCIsIkhFTExPIiwiR09PREJZRSIsIklOUFVUIiwiUExBWUVSUkVBRFkiLCJTSElQQ09ORklHIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNiQyxZQUFRO0FBQ0pDLGlCQUFTLENBREw7QUFFSkMsZ0JBQVEsQ0FGSjtBQUdKQyxtQkFBVyxDQUhQO0FBSUpDLG9CQUFZLENBSlI7QUFLSkMsb0JBQVksQ0FMUjtBQU1KQyxrQkFBVTtBQU5OLEtBREs7QUFTYkMsWUFBUTtBQUNKQyxlQUFPLENBREg7QUFFSkMsaUJBQVMsQ0FGTDtBQUdKQyxlQUFPLENBSEg7QUFJSkMscUJBQWEsQ0FKVDtBQUtKQyxvQkFBWTtBQUxSO0FBVEssQ0FBakIiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgV0VMQ09NRTogMSxcclxuICAgICAgICBVUERBVEU6IDIsXHJcbiAgICAgICAgTkVXUExBWUVSOiAzLFxyXG4gICAgICAgIFBMQVlFUkxFRlQ6IDQsXHJcbiAgICAgICAgUk9VTkRCRUdJTjogNSxcclxuICAgICAgICBST1VOREVORDogNlxyXG4gICAgfSxcclxuICAgIGNsaWVudDoge1xyXG4gICAgICAgIEhFTExPOiAxLFxyXG4gICAgICAgIEdPT0RCWUU6IDIsXHJcbiAgICAgICAgSU5QVVQ6IDMsXHJcbiAgICAgICAgUExBWUVSUkVBRFk6IDQsXHJcbiAgICAgICAgU0hJUENPTkZJRzogNVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vY29tbW9uL21lc3NhZ2UtdHlwZXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Game = __webpack_require__(0);\n\nvar _Game2 = _interopRequireDefault(_Game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar game = new _Game2.default('mount', 800, 600, '#000');\ngame.inputManager.bindKeys();\ngame.run();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsiZ2FtZSIsImlucHV0TWFuYWdlciIsImJpbmRLZXlzIiwicnVuIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFDQSxJQUFJQSxPQUFPLG1CQUFTLE9BQVQsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsTUFBNUIsQ0FBWDtBQUNBQSxLQUFLQyxZQUFMLENBQWtCQyxRQUFsQjtBQUNBRixLQUFLRyxHQUFMIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKCdtb3VudCcsIDgwMCwgNjAwLCAnIzAwMCcpO1xyXG5nYW1lLmlucHV0TWFuYWdlci5iaW5kS2V5cygpO1xyXG5nYW1lLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);