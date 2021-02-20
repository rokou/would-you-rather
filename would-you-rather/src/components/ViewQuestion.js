import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViewQuestionAnswered from './ViewQuestionAnswered'
import ViewQuestionUnanswered from './ViewQuestionUnanswered'
// Check via AuthUser if the question.id is in Object.keys(users[authedUser].answers)
// YES -> Display ViewQuestionAnswered component
// NO  -> Display ViewQuestionUnanswered component
class ViewQuestion extends Component {
  render () {
    const { users, authedUser, questions } = this.props
    const { id } = this.props.match.params

    const question = questions[id]
    if (question === undefined || question === null) {
      return <p>This Question does not exist.</p>
    }

    return (
      <div className='view-question'>
        {users[authedUser].answers[id]
          ? <ViewQuestionAnswered id={id}/>
          : <ViewQuestionUnanswered id={id}/>}
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser, questions}) {
  return {
    users,
    authedUser,
    questions
  }
}
export default connect(mapStateToProps)(ViewQuestion)