import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import './style/index.less';

const defaultPrefixCls = 'cefc-grid';

export default function Grid({
  prefixCls, className, space, cols, data, renderItem, onClick
}) {
  let ret = [];
  let tmp = [];

  data.forEach((item, index) => {
    const _onClick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      onClick(item);
    }
    const n = index + 1;
    const last = n % cols === 0;

    tmp.push((
      <div
        className={`${prefixCls}-item`}
        key={item.id}
        onClick={_onClick}
        style={{
          marginRight: last ? 0 : space
        }}
      >
        {renderItem(item)}
      </div>
    ));

    if (last || n === data.length) {
      ret.push(tmp);
      tmp = [];
    }
  });
  const rowCount = ret.length;
  const rows = ret.map((row, index) => {
    const last = (index + 1) === rowCount;

    return (
      <div
        key={index}
        className={`${prefixCls}-row`}
        style={{
          marginBottom: last ? 0 : space
        }}
      >
        {row}
      </div>
    );
  })

  return (
    <div className={cns(prefixCls, className)}>{rows}</div>
  );
}

Grid.defaultProps = {
  prefixCls: defaultPrefixCls,
  cols: 4,
  renderItem(item) {
    return <div className={`${defaultPrefixCls}-item`} key={item.id}>{item.id}</div>;
  },
  className: '',
  space: '0',
  onClick() {}
}
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