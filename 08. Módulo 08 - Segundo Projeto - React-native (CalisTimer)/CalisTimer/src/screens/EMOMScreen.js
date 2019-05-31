import React, { Component } from 'react'
import { Keyboard, ScrollView, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'

import Select from '../components/Select'
import Title from '../components/Title'

class EMOMScreen extends Component {
    state = {
        keyboardIsVisible: false,
        alerts: 0,
        countdown: 0,
        time: '15'
    }
    componentDidMount() {
        this.kbShow = Keyboard.addListener('keyboardDidShow', () => this.setState({ keyboardIsVisible: true }))
        this.kbHide = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboardIsVisible: false }))
    }
    componentWillUnmount() {
        this.kbShow.remove()
        this.kbHide.remove()
    }
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                <ScrollView style={styles.container}>
                    <Title title='EMOM' subTitle='Every Minute On The Minute' style={{ paddingTop: this.state.keyboardIsVisible ? 10 : 20 }} />
                    <Image style={{ alignSelf: 'center', marginBottom: 17 }} source={require('../../assets/settings-cog.png')} />
                    {
                        !this.state.keyboardIsVisible &&
                        <Select
                            label='Alertas'
                            current={this.state.alerts}
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
                            onSelect={opt => this.setState({ alerts: opt })}
                        />
                    }
                    <Select
                        label='Contagem Regressiva'
                        current={this.state.countdown}
                        options={[
                            {
                                id: 0,
                                label: 'Sim'
                            }, {
                                id: 1,
                                label: 'Não'
                            }]}
                        onSelect={opt => this.setState({ countdown: opt })}
                    />
                    <Text style={styles.label}>Quantos Minutos:</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.time}
                        keyboardType='numeric'
                        onChangeText={text => this.setState({ time: text })}
                    />
                    <Text style={styles.label}>Minutos</Text>
                    <Image style={{ alignSelf: 'center' }} source={require('../../assets/btn-play.png')} />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

EMOMScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6304A',
        paddingTop: 50
    },
    label: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    input: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 48
    },
})

export default EMOMScreen