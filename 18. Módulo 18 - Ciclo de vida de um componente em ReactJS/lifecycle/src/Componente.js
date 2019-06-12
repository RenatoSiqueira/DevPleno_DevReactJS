import React, { Component } from 'react'

class Componente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val1: 1
        }

        console.log('Constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Get Derived State From Props')
        console.log(props, state)
        //return { val1: props.val1 * 2 }
        return { val1: props.val1 }
        //return null
    }
    render() {
        console.log('Render')
        return (
            <h1>Teste {JSON.stringify(this.state)}</h1>
        )
    }

    componentDidMount() {
        console.log('Component Did Mount')

    }

    /*
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component State')
        console.log(nextProps, nextState)
        return nextProps.val1 % 2 === 0
        //return false
    }
    */

    componentDidUpdate(prevProps) {
        console.log('Component Did Update')
        if (this.props.val1 !== prevProps.val1) {
            console.log('Mudou')
        }
    }

    componentWillUnmount() {
        console.log('Component Will unMount')
    }
}

export default Componente