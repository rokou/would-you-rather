import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import './App.css';
import Home from './Home'
import Navigation from './Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import ViewQuestion from './ViewQuestion'
import ChangeAuthedUser from './ChangeAuthedUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return(
      <Router>
        <Fragment>
          <div className='container'>
            <Navigation />
            {this.props.loading === true
              ? <div className='home'>
                  Please log in to view the requested page.
                  <Route path='/login' component={ChangeAuthedUser}/>
                </div>
              : <div className='home'>
                  <Route path='/' exact component={Home} />
                  <Route path='/question/:id' component={ViewQuestion}/>
                  <Route path='/new' component={AddQuestion}/>
                  <Route path='/leaderboard' component={Leaderboard}/>
                  <Route path='/login' component={ChangeAuthedUser}/>
                </div>

            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProp ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProp)(App)
