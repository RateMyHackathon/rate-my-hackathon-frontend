import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar'
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col
 } from 'react-bootstrap'

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
          <main class="px-3">
          <h1>Cover your page.</h1>
          <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p class="lead">
            Learn More
          </p>
        </main>

          <Jumbotron>
          <div className='center'>
              <div style={{minHeight: 500}}>
              <h1>Hello, world!</h1>
              <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>
              <p>
                  <Button variant="primary">Learn more</Button>
              </p>
              </div>
              </div>
          </Jumbotron>

          <Container>
            <div className='center'>
              <Row>
                  <Col>
                    <img
                      src={teamImg}
                      // className="d-inline-block align-top"
                      alt="Team"
                    />
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                  </Col>

                  <Col>
                    <img
                      src={shareImg}
                      // className="d-inline-block align-top"
                      alt="Share"
                    />
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                  </Col>

                  <Col>
                    <img
                      src={upvoteImg}
                      // className="d-inline-block align-top"
                      alt="Upvote"
                    />
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                  </Col>
              </Row>
            </div>
          </Container>
        </div>
    );
  }
}

export default Home;