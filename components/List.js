import React, { Component } from 'react';
import {
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import ListItem from './ListItem';
import DemoData from './ListDemoData';

export default class List extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isRefreshing: false,
    }
  }
  componentDidMount() {
    this._fetchData();
  }
  
  _fetchData = () => {
    this.setState({ isRefreshing: true });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(DemoData),
      isRefreshing: false,
    });
  }
 
  _renderRow = (movie) => {
    const { navigate } = this.props.navigation;
    return (
      <ListItem
        movie={movie}
        onPress={ () => {
          // Navigate to a separate movie detail screen
          navigate('Movie', {
            name: 'movie',
            movie: movie,
          });
        }}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        refreshControl={
          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this._fetchData}/>
        }
      />
    );
  }
}

