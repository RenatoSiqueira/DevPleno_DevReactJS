import React from 'react'

const User = (props) => {
    return (
        <div>
            Logado como: {props.email}
            <button onClick={props.logout}>Sair</button>
        </div>
    )
}

export default User