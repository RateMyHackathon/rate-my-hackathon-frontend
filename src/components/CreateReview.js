import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      reviews: [],
      reviewTitle: '',
      reviewDescription: '',
      reviewRating: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/hackathons/'+this.props.match.params.id)
      .then(res => {
        this.setState({
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

    // this.setState({
    //     buyItems: [...this.state.buyItems, obj]
    // });

    const data = {
      name: this.state.name,
      description: this.state.description,
      reviews: [...this.state.reviews, obj]
    };

    axios
      .put('http://localhost:8082/api/hackathons/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-hackathon/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in CreateReview!");
      })
  };


  render() {
    return (
      <div className="CreateReview">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Hackathon List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Review</h1>
              {/* <p className="lead text-center">
                  Update Review
              </p> */}
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

            <div className='form-group'>
            <label htmlFor="description">Rating</label>
              <input
                type='text'
                placeholder='Rating'
                name='reviewRating'
                className='form-control'
                value={this.state.reviewRating}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Add Review</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateReview;