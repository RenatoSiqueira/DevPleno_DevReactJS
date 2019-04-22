import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
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
            <Route path='/produtos' component={Produtos} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App