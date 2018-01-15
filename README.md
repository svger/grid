# Grid

网格组件



## Example

```react
const menus = [{
  id: 1,
  icon: require('xx.png'),
  text: '买入',
  link: '/buy'
}, {
  id: 2,
  icon: require('xx1.png'),
  text: '卖出',
  link: '/sell'
}, {
  id: 3,
  icon: require('xx2.png'),
  text: '撤单',
  link: '/withdraw'
}];

function GridItem({ icon, text }) {
  return (
  	<div>
   	  <ImgIcon img={icon} />
      <p>{text}</p>
    </div>
  );
}

function renderItem(item) {
  return <GridItem {...item} />
}

function handleGridItemClick(item) {
  history.push(item.link);
}

ReactDOM.render((
  <Grid
    className="menus"
    data={menus}
    renderItem={renderItem}
    onClick={handleGridItemClick}
    space="0.02rem"
  />
), $container);
```

## API

| 属性         | 说明                                   | 类型            | 默认值         |
| ---------- | ------------------------------------ | ------------- | ----------- |
| prefixCls  | 可选，样式前缀，如：`cefc-header`，可用于自定义样式     | String        | `cefc-grid` |
| className  | 可选，自定义 class                         | String        | 空字符         |
| cols       | 可选，列数                                | Number        | 4           |
| data       | 必选，网格项数据集合，项必须包含字段 `id`              | Array<Object> | 无           |
| space      | 可选，网格项之间的间距，如：`.02rem`               | String        | 0           |
| renderItem | 可选，网格项渲染函数，返回网格项 `PropTypes.element` | Function      | 默认div中展示id  |
| onClick    | 可选，网格项点击事件回调                         | Function      | 空函数         |









dd