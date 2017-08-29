import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux'

import Home from './component/Home'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: '#e15245'
  },
  navbarTitle: {
    color: 'white',
  }
}

const scenes = Actions.create(
  <Scene key='root' navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} >
    <Scene key='home' component={Home} title='Home' initial={true} type={ActionConst.REPLACE}/>
  </Scene>
)

export default class App extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   navbar: {
//     backgroundColor: '#212121'
//   }
// });





