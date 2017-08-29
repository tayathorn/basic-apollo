import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

import { GRAPHQL_ENDPOINT } from './app/config'


const networkInterface = createNetworkInterface({
  uri: GRAPHQL_ENDPOINT
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

import App from './app'

export default class BasicApollo extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <App/>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BasicApollo', () => BasicApollo);
