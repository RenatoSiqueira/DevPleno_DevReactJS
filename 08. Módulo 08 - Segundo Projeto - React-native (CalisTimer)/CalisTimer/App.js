import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import EMOMScreen from './src/screens/EMOMScreen'

const AppNavigatior = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigatior)

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
    fontFamily: 'Ubuntu-Regular'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
