import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateHackathon from './components/CreateHackathon';
import ShowHackathonList from './components/ShowHackathonList';
import ShowHackathonDetails from './components/ShowHackathonDetails';
import UpdateHackathonInfo from './components/UpdateHackathonInfo';
import CreateReview from './components/CreateReview';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowHackathonList} />
          <Route path='/create-hackathon' component={CreateHackathon} />
          <Route path='/edit-hackathon/:id' component={UpdateHackathonInfo} />
          <Route path='/show-hackathon/:id' component={ShowHackathonDetails} />
          <Route path='/add-review/:id' component={CreateReview} />
        </div>
      </Router>
    );
  }
}

export default App;