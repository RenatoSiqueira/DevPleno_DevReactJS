import React from 'react'

const Comment = ({c}) => {
    let comment = 'vazio'
    if(c && comment){
        comment = c.comment
    }
    return (
        <div>Comentário: {comment}</div>
    )
}

export default Comment