import React, { Component } from 'react'

class Login extends Component{
    state = {
        email: '',
        passwd: ''
    }
    
    handleChange = field => event => {
        this.setState({ 
            [field]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Login</h4>
                <input type='text' onChange={this.handleChange('email')} placeholder='email' />
                <input type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
            </div>
        )
    }
}

export default Login