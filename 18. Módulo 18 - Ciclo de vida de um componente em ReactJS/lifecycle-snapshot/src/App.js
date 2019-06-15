import React, { Component } from 'react';
import './App.css';

class ScrollList extends Component {
  constructor(props) {
    super(props)
    this.listRef = React.createRef()
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.items.length < this.props.items.length) {
      const list = this.listRef.current
      console.log(list.scrollTop)
      return list.scrollHeight
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current
      list.scrollTop = snapshot
    }
  }
  render() {
    return (
      <ul className='list' ref={this.listRef}>
        {this.props.items.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    )
  }
}

class App extends Component {
  state = {
    items: [1, 2, 3, 4, 5]
  }
  add = () => {
    this.setState({
      items: [...this.state.items, new Date().getTime()]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ScrollList items={this.state.items} />
          <button onClick={this.add}>Add</button>
        </header>
      </div>
    )
  }
}

export default App;
