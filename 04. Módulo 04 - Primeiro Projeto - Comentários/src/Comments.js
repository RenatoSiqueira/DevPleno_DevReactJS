import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
    render() {
        return (
            <div>
                { this.props.comments.map( c => <Comment c={c} /> ) }
            </div>
        )
    }
}

export default Comments