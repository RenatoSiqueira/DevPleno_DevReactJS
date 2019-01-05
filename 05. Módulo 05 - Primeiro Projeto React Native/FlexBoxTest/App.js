import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} >
        <View style={styles.subbox} />
        <View style={styles.subbox} />
        <View style={styles.subbox} />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  box1: {
    // padding: 30,
    flex: 1,
    backgroundColor: 'steelblue',
    margin: 4
  },
  box2: {
    // padding: 30,
    flex: 2,
    backgroundColor: 'steelblue',
    margin: 4
  },
  box3: {
    // padding: 30,
    // flex: 1,
    height: 80,
    backgroundColor: 'steelblue',
    margin: 4,
    flexDirection: 'row'
  },
  subbox: {
    flex: 1,
    margin: 4,
    backgroundColor: 'red'
  }
})
