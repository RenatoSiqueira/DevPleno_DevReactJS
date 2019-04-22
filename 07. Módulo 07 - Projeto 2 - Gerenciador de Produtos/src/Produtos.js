import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './ProdutosHome'

class Produtos extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-2'>
                    <h3>Categorias</h3>
                    <Link to='categoria'>Categoria</Link>
                </div>
                <div className='col-md-10'>
                    <h1>Produtos</h1>
                    <Route exact path={this.props.match.url} component={ProdutosHome} />
                </div>
            </div>
        )
    }
}

export default Produtos