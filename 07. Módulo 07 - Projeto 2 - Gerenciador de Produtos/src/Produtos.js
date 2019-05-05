import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import axios from 'axios'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

class Produtos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categorias: []
    }

    this.loadCategorias = this.loadCategorias.bind(this)
    this.handleNewCategoria = this.handleNewCategoria.bind(this)
  }
  loadCategorias() {
    axios.get('http://localhost:3001/categorias').then(res => {
      this.setState({ categorias: res.data })
    })
  }
  componentDidMount() {
    this.loadCategorias()
  }
  renderCategoria(cat) {
    return (
      <li key={cat.id}>
        <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
      </li>
    )
  }
  handleNewCategoria(key) {
    if (key.keyCode === 13) {
      axios.post('http://localhost:3001/categorias', {
        categoria: this.refs.categoria.value
      }).then(res => {
        this.refs.categoria.value = ''
        this.loadCategorias()
      })
    }
  }

  render() {
    const { match } = this.props
    const { categorias } = this.state
    return (
      <div className='row'>
        <div className='col-md-2'>
          <h3>Categorias</h3>
          <ul>{categorias.map(this.renderCategoria)}</ul>
          <div className='card'>
            <input
              onKeyUp={this.handleNewCategoria}
              type='text'
              ref='categoria'
              placeholder='Nova Categoria'
            />
          </div>
        </div>
        <div className='col-md-10'>
          <h1>Produtos</h1>
          <Route exact path={match.url} component={ProdutosHome} />
          <Route
            exact
            path={match.url + '/categoria/:catId'}
            component={Categoria}
          />
        </div>
      </div>
    )
  }
}

export default Produtos
