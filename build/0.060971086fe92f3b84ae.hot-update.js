webpackHotUpdate(0,{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GifCreator = function (_Component) {
  _inherits(GifCreator, _Component);

  function GifCreator(props) {
    _classCallCheck(this, GifCreator);

    var _this = _possibleConstructorReturn(this, (GifCreator.__proto__ || Object.getPrototypeOf(GifCreator)).call(this, props));

    _this.state = { title: '', gifURL: '', sound: '' };
    return _this;
  }

  _createClass(GifCreator, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { id: 'GifCreator_container' },
        _react2.default.createElement(
          'div',
          { id: 'GifCreator_gif_container' },
          _react2.default.createElement('img', { src: this.state.gifURL })
        ),
        _react2.default.createElement(
          'span',
          null,
          'Instructions go here!'
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'GifCreator_inline' },
          _react2.default.createElement(
            'label',
            null,
            'Title:'
          ),
          ' ',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            null,
            '.gif URL:'
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'GifCreator_inline' },
          _react2.default.createElement('input', { type: 'text', value: this.state.title }),
          _react2.default.createElement('input', { type: 'text', value: this.state.gifURL })
        )
      );
    }
  }]);

  return GifCreator;
}(_react.Component);

exports.default = GifCreator;

/***/ })

})