import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {
    state = {
        current: ''
    }
    componentDidMount() {
        this.setState({
            current: this.props.current
        })
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
            <View>
                <Text style={stylesSelect.label}>{label}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {
                        options.map(opt => {
                            let id = ''
                            let label = ''
                            if (typeof opt === 'string') {
                                id = opt
                                label = opt
                            }
                            if (typeof opt === 'object') {
                                id = opt.id
                                label = opt.label
                            }
                            return (
                                <TouchableOpacity
                                    key={id}
                                    onPress={this.handlePress(id)}
                                    style={[stylesSelect.opt, id === current ? stylesSelect.optSelected : null]}
                                >
                                    <Text style={stylesSelect.optLabel}>{label}</Text>
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

export default Select