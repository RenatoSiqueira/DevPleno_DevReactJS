import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Select from '../components/Select'
import Title from '../components/Title'

const EMOMScreen = props => {
    return (
        <View style={styles.container}>
            <Title title='EMOM' subTitle='Every Minute On The Minute' />
            <Select
                label='Alertas'
                current={0}
                options={[{
                    id: 0,
                    label: 'Off'
                },
                {
                    id: 15,
                    label: '15s'
                },
                {
                    id: 30,
                    label: '30s'
                },
                {
                    id: 45,
                    label: '45s'
                }]}
                onSelect={opt => console.log(opt)}
            />
            <Select
                label='Contagem Regressiva'
                current={1}
                options={[
                    {
                        id: 0,
                        label: 'Sim'
                    }, {
                        id: 1,
                        label: 'Não'
                    }]}
                onSelect={opt => console.log(opt)}
            />
        </View>
    )
}

EMOMScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6304A',
        paddingTop: 100
    }
})

export default EMOMScreen