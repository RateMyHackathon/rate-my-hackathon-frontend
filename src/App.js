import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";

import CreateHackathon from "./pages/CreateHackathon";
import ShowHackathonList from "./pages/ShowHackathonList";
import ShowHackathonDetails from "./pages/ShowHackathonDetails";
import UpdateHackathonInfo from "./pages/UpdateHackathonInfo";
import CreateReview from "./pages/CreateReview";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/all-hackathons" component={ShowHackathonList} />
            <Route path="/new-hackathon" component={CreateHackathon} />
            <Route path="/hackathon/:id" component={ShowHackathonDetails} />
            <Route path='/new-review/:id' component={CreateReview} />
            {/* <Route path='/edit-hackathon/:id' component={UpdateHackathonInfo} /> */}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
