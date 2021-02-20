import React, { Component }from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' activeClassName='active'>
            {this.props.authedUser === null ? 'Login' : 'Logout'}
            </NavLink>
          </li>
          <li>
            Logged in as: {this.props.authedUser === null ? null : this.props.authedUser}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({authedUser}) {
  console.log('authedUser', authedUser)
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(Navigation)