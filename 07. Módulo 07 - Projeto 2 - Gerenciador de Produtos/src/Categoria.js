import React, { Component } from 'react'

class Categoria extends Component {
    constructor(props) {
        super(props)

        this.state = {
            produtos: [],
            categoria: {},
            id: null
        }
        this.loadData = this.loadData.bind(this)
    }
    loadData(id) {
        this.setState({ id })
        this.props.loadProdutos(id)
        this.props.loadCategoria(id)
    }
    componentDidMount() {
        const id = this.props.match.params.catId
        this.loadData(id)
    }
    componentWillReceiveProps(newProps) {
        if (newProps.match.params.catId !== this.state.id)
            this.loadData(newProps.match.params.catId)
    }
    renderProduto(produto) {
        return (
            <div class='card' key={produto.id}>
                <div class='card-body'>
                    <p>{produto.produto}</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>{this.props.categoria.categoria}</h1>
                {
                    this.props.produtos.map(this.renderProduto)
                }
            </div>
        )
    }
}

export default Categoria