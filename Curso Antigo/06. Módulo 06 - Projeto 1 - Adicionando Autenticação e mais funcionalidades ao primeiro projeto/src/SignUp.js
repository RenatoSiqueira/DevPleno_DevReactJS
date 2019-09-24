import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }

    render() {
        const errorMessages = {
            'auth/weak-password': 'Senha Sem Segurança',
            'auth/email-already-in-use': 'Usuário já cadastrado',
            'auth/invalid-email': 'Email inválido'
        }
        return (
            <div>
                <h4>Criar Conta</h4>
                <form className='form-inline'>
                    <input className='form-control mr-1' type='text' onChange={this.handleChange('email')} placeholder='email' />
                    <input className='form-control mr-1' type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button className='btn btn-primary' type='button' onClick={this.createAccount}>Criar Conta</button>
                    <button className='btn' onClick={() => this.props.changeScreen('login')}>Já tenho uma conta</button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div className='card text-white bg-danger mt-3'>
                        <div className='card-header'> Erro ao Cadastrar</div>
                        <div className='card-body'>
                            {errorMessages[this.props.signUpError]}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SignUp