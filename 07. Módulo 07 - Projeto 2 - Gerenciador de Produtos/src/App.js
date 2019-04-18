import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='/'>Gerenciador de Produtos</a>
            </div>
            <ul className="navbar-nav mr-auto">
              <li className='nav-item active'>
                <a className='nav-link' href='/'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/produtos'>Produtos</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/sobre'>Sobre</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          Gerenciador de Produtos
        </div>
      </div>
    )
  }
}

export default App