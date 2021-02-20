import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class ChangeAuthedUser extends Component {
  state = {
    authedUser: undefined
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.setState({
      authedUser: null
    })
    dispatch(setAuthedUser(null))
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      authedUser: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.authedUser))
    this.props.history.push(`/`)
  }

  render () {
    const { users } = this.props
    return (
      <div className='changed-authedUser-container'>
          <h3 className='center'>Welcome to the Would You Rather App!</h3>
          <form className='authedusers-form'onSubmit={this.handleSubmit}>
            <select value={this.state.authedUser} onChange={this.handleChange}>
              <option value='Please select a user' selected disabled/>
              {Object.keys(users).map((user) => (
                <option key={user} 
                        value={user}
                        disabled={this.state.authedUser === user}>{users[user].name}</option>
              ))}
            </select>
            <button className='btn' 
                    type='submit'
                    disabled={this.state.authedUser === null}>
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
    users
  }
}
export default connect(mapStateToProps)(ChangeAuthedUser)