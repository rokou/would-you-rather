import React, { Component } from 'react'
import { connect } from 'react-redux'

// YES -> Display ViewQuestionAnswered component
//  L---> Display Info about the question (users[question.author].name,
//        question[optionOne].text
//        question[optionOne].votes.length ?
//        question[optionTwo].text
//        question[optionTwo].votes.length ?
class ViewQuestionAnswered extends Component {
  render () {
    const { users, question } = this.props
    const total = question.optionOne.votes.length + question.optionTwo.votes.length
    return (
      <div className='view-question-answered'>
        <p>{users[question.author].name} asks:</p>
        <p>Would you rather...</p>
        <p>{question.optionOne.text}</p>
        <p>{question.optionOne.votes.length} of {total}</p>
        <p>or...</p>
        <p>{question.optionTwo.text}</p>
        <p>{question.optionTwo.votes.length} of {total}</p>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, {id}) {
  const question = questions[id]
  return {
    users,
    question
  }
}
export default connect(mapStateToProps)(ViewQuestionAnswered)