import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

export default class Home extends Component {
  componentDidMount() {
    console.log('Home render')
  }
  render() {
    console.log('render return')
    return(
      <View style={styles.container}>
        <Text>
          Home
        </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}