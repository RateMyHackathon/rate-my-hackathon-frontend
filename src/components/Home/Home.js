import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeHeader from "./HomeHeader";
import HomeCards from "./HomeCards";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      query: this.state.query,
    };

    // axios
    //   .post('http://localhost:8082/api/hackathons', data)
    //   .then(res => {
    //     this.setState({
    //       name: '',
    //       description: '',
    //       reviews: [],
    //       img: ''
    //     })
    //     this.props.history.push('/');
    //   })
    //   .catch(err => {
    //     console.log("Error in CreateHackathon!");
    //   })
  };

  render() {
    return (
      <div>
        <HomeHeader />
        <HomeCards />
      </div>
    );
  }
}

export default Home;