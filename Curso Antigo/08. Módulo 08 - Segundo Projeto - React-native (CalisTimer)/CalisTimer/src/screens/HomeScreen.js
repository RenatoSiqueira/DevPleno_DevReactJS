import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from '../components/Button'

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>CalisTimer</Text>

            <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('AMRAP')}>AMRAP</Button>
            <Button style={styles.btn} onPress={() => props.navigation.navigate('Isometria')}>Isometria</Button>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6304A'
    },
    logo: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 48,
        textAlign: 'center',
        color: 'white',
        marginTop: 111,
        marginBottom: 111
    },
    btn: {
        padding: 20
    }
})

export default HomeScreen