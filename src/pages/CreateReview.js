import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import NavigationBar from '../components/NavigationBar'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      reviews: [],
      reviewTitle: '',
      reviewDescription: '',
      reviewRating: 3
    };
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/hackathons/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          description: res.data.description,
          reviews: res.data.reviews
        })
      })
      .catch(err => {
        console.log("Error from CreateReview");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const reviewTitle = this.state.reviewTitle;
    const reviewDescription = this.state.reviewDescription;
    const reviewRating = this.state.reviewRating;

    const obj = {
      title: reviewTitle,
      description: reviewDescription,
      rating: reviewRating
    };

    const data = {
      name: this.state.name,
      description: this.state.description,
      reviews: [...this.state.reviews, obj]
    };

    axios
      .put('http://localhost:8082/api/hackathons/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/hackathon/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in CreateReview!");
      })
  };

  changeRating(val) {
    this.setState({
        reviewRating: val
    });
  }

  render() {
    return (
      <div>
      <NavigationBar/>
      <div className="CreateHackathon">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to={`/hackathon/${this.props.match.params.id}`} className="btn btn-outline-warning float-left">
                  Back to {this.state.name}
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add a Review</h1>
              <p className="lead text-center">
                  Write a review for {this.state.name}! Remember:
              </p>
              <ul><ul><ul><ul><ul>
                <li>Please be respectful.</li>
                <li>Only provide constructive critism.</li>
                <li>Any hate comments will be taken down.</li>
              </ul></ul></ul></ul></ul>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of Review'
                name='reviewTitle'
                className='form-control'
                value={this.state.reviewTitle}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Description of Review'
                name='reviewDescription'
                className='form-control'
                value={this.state.reviewDescription}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="reviewRating">Rating</label>
            
              <br></br>
              <ToggleButtonGroup 
                type="radio" 
                name="reviewRating" 
                onChange={this.changeRating}
                defaultValue={3}
              >
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value={3}>3</ToggleButton>
                <ToggleButton value={4}>4</ToggleButton>
                <ToggleButton value={5}>5</ToggleButton>
              </ToggleButtonGroup>
            </div>

            <br />

            <button type="submit" className="btn btn-primary btn-lg btn-block">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CreateReview;