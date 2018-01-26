import React, { Component } from 'react';

import List from './List';

export default class Movies extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <List navigation={ navigation }/>
    );
  }
}