import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categorias: [],
      produtos: [],
      categoria: null
    }

    this.loadCategorias = this.loadCategorias.bind(this)
    this.removeCategoria = this.removeCategoria.bind(this)
    this.createCategoria = this.createCategoria.bind(this)
    this.editCategoria = this.editCategoria.bind(this)
    this.createProduto = this.createProduto.bind(this)
    this.loadProdutos = this.loadProdutos.bind(this)
    this.loadCategoria = this.loadCategoria.bind(this)
  }
  loadCategorias() {
    this.props.api.loadCategorias()
      .then(res => {
        this.setState({ categorias: res.data })
      })
  }

  removeCategoria(categoria) {
    this.props.api.deleteCategoria(categoria.id)
      .then(res => {
        this.loadCategorias()
      })
  }

  createCategoria(categoria) {
    this.props.api.createCategoria(categoria)
      .then(res =>
        this.loadCategorias()
      )
  }

  editCategoria(categoria) {
    this.props.api.editCategoria(categoria)
      .then(res =>
        this.loadCategorias()
      )
  }

  createProduto(produto) {
    return this.props.api.createProduto(produto)
  }

  loadProdutos(categoria) {
    this.props.api.loadProdutos(categoria)
      .then((res) => this.setState({
        produtos: res.data
      }))
  }

  loadCategoria(categoria) {
    this.props.api.readCategoria(categoria)
      .then((res) => {
        this.setState({
          categoria: res.data
        })
      })
  }

  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
              <div className='navbar-header'>
                <Link className='navbar-brand' to='/'>Gerenciador de Produtos</Link>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className='nav-item active'>
                  <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/produtos'>Produtos</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/sobre'>Sobre</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/sobre' component={Sobre} />
            <Route path='/produtos' render={(props) => {
              return (<Produtos
                {...props}
                loadCategorias={this.loadCategorias}
                categorias={this.state.categorias}
                removeCategoria={this.removeCategoria}
                createCategoria={this.createCategoria}
                editCategoria={this.editCategoria}
                createProduto={this.createProduto}
                loadProdutos={this.loadProdutos}
                loadCategoria={this.loadCategoria}
                produtos={this.state.produtos}
                categoria={this.state.categoria}
              />)
            }}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App