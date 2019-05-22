import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {
    state = {
        current: 'Opt1'
    }
    handlePress = opt => () => {
        this.setState({ current: opt })
        if (this.props.onSelect)
            this.props.onSelect(opt)
    }
    render() {
        const { options, label } = this.props
        const { current } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Text style={stylesSelect.label}>{label}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {
                        options.map(opt => {
                            return (
                                <TouchableOpacity
                                    key={opt}
                                    onPress={this.handlePress(opt)}
                                    style={[stylesSelect.opt, opt === current ? stylesSelect.optSelected : null]}
                                >
                                    <Text style={stylesSelect.optLabel}>{opt}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const stylesSelect = StyleSheet.create({
    label: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    opt: {
        padding: 8
    },
    optSelected: {
        backgroundColor: 'rgba(255,255,255,0.6)'
    },
    optLabel: {
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        opacity: 1
    }
})

const EMOMScreen = props => {
    return (
        <View style={styles.container}>
            <Text>EMONScreen</Text>
            <Select
                label='Alertas'
                options={['Off', '15s', '30s', '45s']}
                onSelect={opt => console.log(opt)}
            />
            <Select
                label='Contagem Regressiva'
                options={['Sim', 'Não']}
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