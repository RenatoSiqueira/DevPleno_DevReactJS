import React, { Component } from 'react'
import axios from 'axios'

class Conta extends Component {
    async loadData(id) {
        const data = await axios.get('http://httpbin.org/ip?id=' + id)
        console.log(data)
    }
    componentDidMount() {
        console.log('Component Did Mount')
        this.loadData(this.props.match.params.num)
    }
    componentDidUpdate(prevProps) {
        console.log('Component Did Update')
        if (this.props.match.params.num != prevProps.match.params.num)
            this.loadData(this.props.match.params.num)
    }
    render() {
        return (
            <div>
                <h1>Conta</h1>
                {JSON.stringify(this.props)}
            </div>
        )
    }
}

export default Conta