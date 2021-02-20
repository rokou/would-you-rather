import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/questions'

// NO -> Display ViewQuestionUnanswered component
//  L---> Display Info about the question (users[question.author].name,
//        question[optionOne].text
//        option to vote for one
//        question[optionOne].votes.length ?
//        question[optionTwo].text
//        option to vote for two
//        question[optionTwo].votes.length ?
class ViewQuestionUnanswered extends Component {
  handleOptionOneClick = e => {
    const OPTION_ONE = 'optionOne'
    const { dispatch, question } = this.props
    dispatch(handleAddAnswer(question, OPTION_ONE))
  }

  handleOptionTwoClick = e => {
    const OPTION_TWO = 'optionTwo'
    const { dispatch, question } = this.props
    dispatch(handleAddAnswer(question, OPTION_TWO))
  }

  render () {

    const { users, question} = this.props
    return (
      <div className='view-question-unanswered'>
        <p>{users[question.author].name} asks:</p>
        <p>Would you rather...</p>
        <button className= 'btn'
                onClick= {this.handleOptionOneClick}>
          {question.optionOne.text}
        </button>
        <p>or...</p>
        <button className= 'btn'
                onClick= {this.handleOptionTwoClick}>
          {question.optionTwo.text}
        </button>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }, {id}) {
  const question = questions[id]
  return {
    users,
    question,
    id
  }
}
export default connect(mapStateToProps)(ViewQuestionUnanswered)