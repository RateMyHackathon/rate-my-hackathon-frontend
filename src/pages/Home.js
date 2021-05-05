import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar'
// import {
//     Jumbotron,
//     Button,
//     Container,
//     Row,
//     Col
//  } from 'react-bootstrap'

 import teamImg from '../assets/team.svg'
import shareImg from '../assets/share.svg'
import upvoteImg from '../assets/upvote.svg'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      query: this.state.query
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
          <NavigationBar/>

          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal">Rate My Hackathon</h1>
              <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>

          <div className="container py-5" id="featured-3">
            <div className="row g-5 py-5">
              <div className="feature col-md-4">
                <div className="feature-icon">
                    <img
                      src={teamImg}
                      width="100%" 
                      height="300"
                      alt="Team"
                    />
                </div>
                <h2 className="text-center">Find hackathons</h2>
              </div>
              <div className="feature col-md-4">
                <div className="feature-icon">
                  <img
                    src={shareImg}
                    width="100%" 
                    height="300"
                    alt="Share"
                  />
                </div>
                <h2 className="text-center">Share your experiences anonymously</h2>
              </div>
              <div className="feature col-md-4">
                <div className="feature-icon">
                  <img
                    src={upvoteImg}
                    width="100%" 
                    height="300"
                    alt="Upvote"
                  />
                </div>
                <div className="center">
                <h2 className="text-center">Support others' reviews</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;