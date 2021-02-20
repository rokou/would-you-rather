import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsContainer extends Component {
  state = {
    showUnanswered: true
  }

  filterAnswered = () => {
    let answered = []
    this.props.answeredQuestions.forEach(answeredQuestion => {
    answered = answered.concat(this.props.questionsIDs.filter(questionid => {
        return (answeredQuestion === questionid)
      }))
    })
    return answered
  }

  filterUnanswered = () => {
    let unanswered = []
    this.props.answeredQuestions.forEach(answeredQuestion => {
    unanswered = unanswered.concat(this.props.questionsIDs.filter(questionid => {
        return (answeredQuestion !== questionid)
      }))
    })
    return [...new Set(unanswered)]
  }

  handleClick = (e, button) => {
    e.preventDefault()
    if (button === 'answered') {
      this.setState({
        showUnanswered: false
      })
    } else if (button === 'unanswered') {
      this.setState({
        showUnanswered: true
      })
    }
    console.log('showUnanswered', this.state.showUnanswered)
  }

  render () {
    return (
      <div>
        <ul className='question-list'>
          <button onClick={e => this.handleClick(e, 'answered')}
                  disabled={this.state.showUnanswered === false}>Answered Questions</button>
          <button onClick={e => this.handleClick(e, 'unanswered')}
                  disabled={this.state.showUnanswered === true}>Unanswered Questions</button>
          {(this.state.showUnanswered === true) && (this.filterUnanswered()
            .map((id)=> (
              <li key={id}>
                <Question id={id}/>
              </li>
            )
          ))}
          {(this.state.showUnanswered === false) && (this.filterAnswered()
            .map((id)=> (
              <li key={id}>
                <Question id={id}/>
              </li>
            )
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  const user = users[authedUser]
  console.log('questions', questions)
  console.log('users.answers', user.answers)
  return {
    answeredQuestions : Object.keys(user.answers),
    questionsIDs : Object.keys(questions),
    usersIDs : Object.keys(users)
  }
}
export default connect(mapStateToProps)(QuestionsContainer)