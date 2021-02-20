import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ADD_ANSWER } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :
      const { question } = action
      const author = question.author
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([action.question.id])
        }
      }
    case ADD_ANSWER:
      const { answer } = action
      console.log('state', state)
      return {
      ...state,
        [answer.authedUser]: {
          ...state[answer.authedUser],
          answers : {
            ...state[answer.authedUser].answers,
            [answer.qid]: answer.answer
          }
        }
      }
    default :
      return state
  }
}