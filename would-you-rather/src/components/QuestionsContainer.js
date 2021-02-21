import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      showUnanswered: true
    }
  }

  filterAnswered = () => {
    let answered = []
    this.props.answeredQuestions.forEach(answeredQuestion => {
    answered.unshift(this.props.questionsIDs.filter(questionid => {
        return (answeredQuestion === questionid)
      })[0])
    })
    console.log('answered', answered)
    return answered
  }

  filterUnanswered = () => {
    const answered = this.filterAnswered()
    let unanswered = []
    unanswered = unanswered.concat(this.props.questionsIDs.filter(questionid => {
      if (answered.includes(questionid)) {
        return false
      }
      return true
    })).reverse()
    console.log('unanswered', unanswered)
   return unanswered
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
  let user = users[authedUser]
  return {
    answeredQuestions : Object.keys(user.answers),
    questionsIDs : Object.keys(questions),
    usersIDs : Object.keys(users)
  }
}
export default connect(mapStateToProps)(QuestionsContainer)