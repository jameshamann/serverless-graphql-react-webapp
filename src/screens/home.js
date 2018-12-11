import React, { Component } from 'react';
import AppNavBar from '../components/appNavBar'
import ListItems from '../components/listItems'


class Home extends Component {
  render() {
    return (
     <div>
      <AppNavBar />
      <ListItems />
    </div>
    );
  }
}

export default Home;
