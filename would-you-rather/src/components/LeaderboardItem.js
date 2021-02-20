import React, { Component } from 'react'

class LeaderboardItem extends Component {
  render () {
    return (
      <div className='leaderboard-item'>
        <li>
          {console.log('this.props.user', this.props.user)}
          <p>Name: {this.props.user.name}</p>
          <p>Avatar: {this.props.user.avatarURL}</p>
          <p>Asked: {Object.keys(this.props.user.answers).length}</p>
          <p>Answered: {this.props.user.questions.length}</p>
          <p>Score: {Object.keys(this.props.user.answers).length + this.props.user.questions.length}</p>
        </li>
      </div>
    )
  }
}

export default LeaderboardItem