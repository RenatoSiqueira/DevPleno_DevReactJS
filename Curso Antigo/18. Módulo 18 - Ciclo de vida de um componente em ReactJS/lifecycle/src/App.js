import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Componente from './Componente'
import Conta from './Conta'

class App extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.intervalo = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 100000)
  }
  componentWillMount() {
    clearInterval(this.intervalo)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {
              this.state.count % 2 === 0 &&
              <Componente val1={this.state.count} />
            }
            <Link to='/conta/1'>Conta 1</Link>
            <Link to='/conta/2'>Conta 2</Link>
            <Route path='/conta/:num' component={Conta} />
          </header>
        </div>
      </Router>
    )
  }
}

export default App;
