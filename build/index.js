'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPrefixCls = 'cefc-grid';

function Grid(_ref) {
  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      space = _ref.space,
      cols = _ref.cols,
      data = _ref.data,
      renderItem = _ref.renderItem,
      onClick = _ref.onClick;

  var ret = [];
  var tmp = [];

  data.forEach(function (item, index) {
    var _onClick = function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();

      onClick(item);
    };
    var n = index + 1;
    var last = n % cols === 0;

    tmp.push(_react2.default.createElement(
      'div',
      {
        className: prefixCls + '-item',
        key: item.id,
        onClick: _onClick,
        style: {
          marginRight: last ? 0 : space
        }
      },
      renderItem(item)
    ));

    if (last || n === data.length) {
      ret.push(tmp);
      tmp = [];
    }
  });
  var rowCount = ret.length;
  var rows = ret.map(function (row, index) {
    var last = index + 1 === rowCount;

    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: prefixCls + '-row',
        style: {
          marginBottom: last ? 0 : space
        }
      },
      row
    );
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(prefixCls, className) },
    rows
  );
}

Grid.defaultProps = {
  prefixCls: defaultPrefixCls,
  cols: 4,
  renderItem: function renderItem(item) {
    return _react2.default.createElement(
      'div',
      { className: defaultPrefixCls + '-item', key: item.id },
      item.id
    );
  },

  className: '',
  space: '0',
  onClick: function onClick() {}
};
Grid.propTypes = {
  prefixCls: _propTypes2.default.string,
  cols: _propTypes2.default.number,
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })).isRequired,
  space: _propTypes2.default.string,
  renderItem: _propTypes2.default.func,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};