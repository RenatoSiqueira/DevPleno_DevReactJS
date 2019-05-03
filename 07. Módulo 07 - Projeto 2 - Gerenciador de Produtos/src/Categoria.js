import React, { Component } from 'react'

class Categoria extends Component{
    render() {
        return <h1>Categoria {this.props.match.params.catId}</h1>
    }
}

export default Categoria