import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateHackathon from './pages/CreateHackathon';
import ShowHackathonList from './pages/ShowHackathonList';
import ShowHackathonDetails from './pages/ShowHackathonDetails';
import UpdateHackathonInfo from './pages/UpdateHackathonInfo';
import CreateReview from './pages/CreateReview';
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* <Route exact path='/' component={ShowHackathonList} /> */}
          <Route exact path='/' component={Home} />
          <Route path='/new-hackathon' component={CreateHackathon} />
          <Route path='/edit-hackathon/:id' component={UpdateHackathonInfo} />
          <Route path='/hackathon/:id' component={ShowHackathonDetails} />
          <Route path='/new-review/:id' component={CreateReview} />
        </div>
      </Router>
    );
  }
}

export default App;