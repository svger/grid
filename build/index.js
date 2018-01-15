import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import './style/index.css';

var defaultPrefixCls = 'cefc-grid';

export default function Grid(_ref) {
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

    tmp.push(React.createElement(
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

    return React.createElement(
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

  return React.createElement(
    'div',
    { className: cns(prefixCls, className) },
    rows
  );
}

Grid.defaultProps = {
  prefixCls: defaultPrefixCls,
  cols: 4,
  renderItem: function renderItem(item) {
    return React.createElement(
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
  prefixCls: PropTypes.string,
  cols: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  space: PropTypes.string,
  renderItem: PropTypes.func,
  className: PropTypes.string,
  onClick: PropTypes.func
};