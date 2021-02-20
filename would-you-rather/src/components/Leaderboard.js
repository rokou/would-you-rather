import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardItem from './LeaderboardItem'

class Leaderboard extends Component {
  render () {
    return (
      <div className='leaderboard'>
          <h3 className='center'>Leaderboards</h3>
          <div>
            <ul className='leaderboard-list'>
              {Object.keys(this.props.sortedUsers).map((key) => {
                console.log('key', key)
                return <LeaderboardItem key={[key]}
                  user={this.props.users[key]}/>
              })}
            </ul>
          </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  // Sort Users by questions.length and then increment the value by number of answers
  let sortedUsers = {}
  for (const [key, value] of Object.entries(users)) {
    sortedUsers = Object.assign(sortedUsers, {[key]: Object.keys(value.answers).length + value.questions.length})
  }
  // From https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
  sortedUsers = Object.fromEntries(
    Object.entries(sortedUsers).sort(([,a],[,b]) => b-a)
  )

  console.log("sortedUsers", sortedUsers)

  return {
    users,
    sortedUsers
  }
}
export default connect(mapStateToProps)(Leaderboard)