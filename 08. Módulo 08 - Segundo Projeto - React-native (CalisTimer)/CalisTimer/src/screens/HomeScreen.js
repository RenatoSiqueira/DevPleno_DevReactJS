import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const HomeScreen = props => {
    return (
        <View>
            <TouchableHighlight onPress={() => props.navigation.navigate('EMOM')}>
                <Text>HomeScreen</Text>
            </TouchableHighlight>
        </View>
    )
}

export default HomeScreen