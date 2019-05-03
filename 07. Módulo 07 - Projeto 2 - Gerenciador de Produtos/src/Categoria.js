import React, { Component } from 'react'
import axios from 'axios'

class Categoria extends Component{
    constructor(props){
        super(props)

        this.state = {
            produtos: [],
            categoria: []
        }
        this.loadData = this.loadData.bind(this)
    }
    loadData(id){
        axios
        .get('http://localhost:3001/produtos?categoria=' + id)
        .then( res => this.setState({ produtos: res.data }))

        axios
        .get('http://localhost:3001/categorias/' + id)
        .then( res => this.setState({ categoria: res.data }))
    }
    componentDidMount() {
        const id = this.props.match.params.catId
        this.loadData(id)
    }
    componentWillReceiveProps(newProps) {
        this.loadData(newProps.match.params.catId)
    }
    renderProduto(produto){
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
                <h1>{this.state.categoria.categoria}</h1>
                {
                    this.state.produtos.map(this.renderProduto)
                }
            </div>
        )
    }
}

export default Categoria