import React from 'react';
import Grid from '../src';

class App extends React.Component {
  state = {
    gridData: [{
      id: 1,
      text: '买入',
      icon: require('./img/black/buy.png'),
      link: '/transaction/deal/buy'
    }, {
      id: 2,
      text: '卖出',
      icon: require('./img/black/sell.png'),
      link: '/transaction/deal/sell'
    }, {
      id: 3,
      text: '撤单',
      icon: require('./img/black/withdraw.png'),
      link: '/transaction/withdraw'
    }, {
      id: 4,
      text: '持仓',
      icon: require('./img/black/home-position.png'),
      link: '/openInterest'
    }, {
      id: 5,
      text: '随心借',
      icon: require('./img/black/home-pledged.png'),
      link: '/pledged'
    }, {
      id: 6,
      text: '新股申购',
      icon: require('./img/black/newStock.png'),
      link: '/newStock'
    }, {
      id: 7,
      text: '银证转账',
      icon: require('./img/black/bankStock.png'),
      link: '/bankAccount'
    }, {
      id: 8,
      text: '更多',
      icon: require('./img/black/more.png'),
      link: '/more'
    }]
  };

  handleGridItemClick = (item) => {
    console.log(item);
  }

  // renderItem = (item) => {
  //   return <GridItem {...item} />;
  // }

  render() {
    const { gridData } = this.state;

    return (
      <div>
        <h2>Grid</h2>
        <Grid
          className="home-grid-menu"
          data={gridData}
          // renderItem={this.renderItem}
          onClick={this.handleGridItemClick}
          space="0.02rem"
        />
      </div>
    );
  }
}

export default App;
