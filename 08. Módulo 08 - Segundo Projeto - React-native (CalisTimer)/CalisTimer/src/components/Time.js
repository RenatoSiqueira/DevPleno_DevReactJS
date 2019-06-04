import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Timer = props => {
    const minutes = parseInt(props.time / 60)
    const seconds = props.time % 60
    const format = num => num < 10 ? '0' + num : num
    return (
        <Text style={styles[props.type ? props.type : 'text']}>{format(minutes)}:{format(seconds)} {props.appendedText}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 96,
        color: 'white',
        textAlign: 'center'
    },
    text2: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    }
})

export default Timer