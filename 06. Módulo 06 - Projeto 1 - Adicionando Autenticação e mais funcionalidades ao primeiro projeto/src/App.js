import React, { Component } from 'react'

import Comments from './Comments'
import NewComment from './NewComment'

import Login from './Login'

class App extends Component {
  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: ''
  }

  sendComment = comment => {
    const { database } = this.props
    const id = database.ref().child('comments').push().key
    const comments = {}

    comments['comments/'+id] = {  comment }
    database.ref().update(comments)

    /*
    this.setState({
      comments: [...this.state.comments, comment],
      newComment: ''
    })
    */
  }

  login = async (email, passwd) => {
    const { auth } = this.props
    this.setState({ isAuthError: false, authError: '' })
    try {
      await auth.signInWithEmailAndPassword(email, passwd)
    } catch(err){
      this.setState({ authError: err.code, isAuthError: true })
    }
  }

  componentDidMount() {
    const { database, auth } = this.props
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({ comments: snapshot.val(), isLoading: false })
    })

    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({ isAuth: true, user })
      }
    })
  }

  render() {
    return (
      <div>
        { !this.state.isAuth && <Login login={this.login} /> }
        { 
          this.state.isAuth &&
          <NewComment sendComment={this.sendComment} />
        }

        <Comments comments={this.state.comments}/>
        {
          this.state.isLoading && <p>Carregando...</p>
        }
      </div>
    )
  }
}

export default App
