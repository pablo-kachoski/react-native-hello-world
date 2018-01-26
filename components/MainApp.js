import React, { Component } from 'react';
import { 
  StatusBar,
  Text,
  AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import MovieScreen from './MovieScreen';
import MoviesScreen from './MoviesScreen';

export default class MainApp extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
  	const { navigation } = this.props;
  	return (
  		<MoviesScreen navigation={ navigation }/>
  	)
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: MainApp },
  Movie: { screen: MovieScreen },
  Movies: { screen: MoviesScreen },
});
AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);


