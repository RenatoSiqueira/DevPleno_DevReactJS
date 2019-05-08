import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'

class Produtos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editingCategoria: ''
    }

    this.editCategoria = this.editCategoria.bind(this)
    this.cancelEditing = this.cancelEditing.bind(this)
    this.renderCategoria = this.renderCategoria.bind(this)
    this.handleNewCategoria = this.handleNewCategoria.bind(this)
    this.handleEditCategoria = this.handleEditCategoria.bind(this)
  }

  componentDidMount() {
    this.props.loadCategorias()
  }

  editCategoria(categoria) {
    this.setState({ editingCategoria: categoria.id })
  }

  cancelEditing() {
    this.setState({
      editingCategoria: ''
    })
  }

  renderCategoria(cat) {
    return (
      <li key={cat.id}>
        {
          this.state.editingCategoria === cat.id &&
          <div className='input-group'>
            <div className='input-group-btn'>
              <input className='form-control' ref={'cat-' + cat.id} onKeyUp={this.handleEditCategoria} type="text" defaultValue={cat.categoria} />
              <button className='btn' onClick={this.cancelEditing}> Cancel</button>
            </div>
          </div>
        }
        {
          this.state.editingCategoria !== cat.id &&
          <div>
            <button className='btn btn-small btn-danger' onClick={() => this.props.removeCategoria(cat)}>X</button>
            <button className='btn btn-small btn-info' onClick={() => this.editCategoria(cat)}>E</button>
            <Link to={`/produtos/categoria/${cat.id}`}>{cat.categoria}</Link>
          </div>
        }
      </li>
    )
  }

  handleNewCategoria(key) {
    if (key.keyCode === 13) {
      this.props.createCategoria({ categoria: this.refs.categoria.value })
      this.refs.categoria.value = ''
    }
  }

  handleEditCategoria(key) {
    if (key.keyCode === 13) {
      this.props.editCategoria({
        id: this.state.editingCategoria,
        categoria: this.refs['cat-' + this.state.editingCategoria].value
      })

      this.setState({
        editingCategoria: ''
      })
    }
  }


  render() {
    const { match, categorias } = this.props
    return (
      <div className='row'>
        <div className='col-md-2'>
          <h3>Categorias</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>{categorias.map(this.renderCategoria)}</ul>
          <div className='well'>
            <input
              onKeyUp={this.handleNewCategoria}
              className='form-control'
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
