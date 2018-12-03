import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div key={this.props.c}>{this.props.c}</div>
        )
    }
}

export default Comment