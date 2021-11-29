import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Home from './screens/Home'
import Details from './screens/Details'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const appStackNavigator = createStackNavigator({
  Home:{screen:Home},
  Details:{screen:Details}
}, {
  initialRouteName:'Home'
})

const AppContainer = createAppContainer(appStackNavigator)