import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function addAnswer (answer) {
  return {
    type: ADD_ANSWER,
    answer
  }
}

export function handleAddAnswer (question, choice) {
  return (dispatch, getState) =>{
    const { authedUser } = getState()
    const qid = question.id
    const answer = {authedUser, qid, answer: choice}
    console.log('answer', answer)
    dispatch(addAnswer(answer))
    return _saveQuestionAnswer(answer)
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const question = {
      optionOneText, 
      optionTwoText, 
      author: authedUser}
    console.log('question', question)
    return _saveQuestion(question)
    .then((question) => dispatch(addQuestion(question)))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
