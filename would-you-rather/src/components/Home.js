import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsContainer from './QuestionsContainer'


class Home extends Component {
  render () {
    return (
      <div className='home'>
        {this.props.loading === true
        ? <div>'Please login to view this page'</div>
        : <div>
            <h3>Home</h3>
            <QuestionsContainer />
          </div>
        }
      </div>
    )
  }
}
function mapStateToProp ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProp)(Home)