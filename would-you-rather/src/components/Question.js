import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Question extends Component {
  getAuthorName = (authorId) => {
    let authorsName = 'Anonymous User'
    for (const user in this.props.users) {
      console.log('user.id: ', user.id)
      if (user.id === authorId) {
        authorsName = user.name
      }
    }
    return authorsName
  }

  render () {
    const { question } = this.props
    if(question === null) {
      return <p>This Question doesn't exist.</p>
    }

    const {
      author, optionOne, optionTwo
    } = question

    return (
      <Link to={`/question/${question.id}`}>
        <button className='question'>
          <p>{this.props.users[author].name} asks: </p>
          <p>Would you rather...</p>
          <p>{optionOne.text} or {optionTwo.text}</p>
        </button>
      </Link>
    )
  }
}

function mapStateToProps ({ users, questions }, {id}) {
  const question = questions[id]
  return {
    users,
    question
  }
}
export default connect(mapStateToProps)(Question)