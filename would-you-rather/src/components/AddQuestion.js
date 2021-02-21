import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleOptionOneTextChange = (e) => {
    const optionOneText = e.target.value
    this.setState(() => ({
      optionOneText
    })
  )}

  handleOptionTwoTextChange = (e) => {
    const optionTwoText = e.target.value
    this.setState(() => ({
      optionTwoText
    })
  )}


  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props
    dispatch(handleAddQuestion(optionOneText,optionTwoText))
    this.setState(() => ({
      optionOneText : '',
      optionTwoText : ''
    }))
    console.log('this.props', this.props)
    this.props.history.push(`/`)
  }

  render () {
    return (
      <div className='new-question-container'>
          <h3 className='center'>Ask a New Question</h3>
          <form className='new-question'
                onSubmit={this.handleSubmit}>
            <h3>Would you Rather...</h3>
            <input
              placeholder='First Option'
              value={this.state.optionOneText}
              onChange={this.handleOptionOneTextChange}
              className='optionOneTextArea'
            />
            <h3>or...</h3>
            <input
              placeholder='Second Option'
              value={this.state.optionTwoText}
              onChange={this.handleOptionTwoTextChange}
              className='optionTwoTextArea'
            />
            <br></br>
            <button
              className='btn'
              type='submit'
              disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}>
              Submit
            </button>
          </form>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  const user = users[authedUser]
  console.log('user', user)
  return {
    authedUser,
    user
  }
}
export default connect(mapStateToProps)(AddQuestion)