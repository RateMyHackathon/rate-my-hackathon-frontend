import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateReview from './components/CreateReview';
import ShowReviewList from './components/ShowReviewList';
import ShowReviewDetails from './components/ShowReviewDetails';
import UpdateReviewInfo from './components/UpdateReviewInfo';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowReviewList} />
          <Route path='/create-review' component={CreateReview} />
          <Route path='/edit-review/:id' component={UpdateReviewInfo} />
          <Route path='/show-review/:id' component={ShowReviewDetails} />
        </div>
      </Router>
    );
  }
}

export default App;