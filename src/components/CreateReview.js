import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateReview extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      reviews: [],
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      description: this.state.description,
      reviews: this.state.reviews,
    };

    axios
      .post('http://localhost:8082/api/hackathons', data)
      .then(res => {
        this.setState({
          name: '',
          description: '',
          reviews: [],
        })
        this.props.history.push('/');
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
                  Show Review List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Review</h1>
              <p className="lead text-center">
                  Create new review
              </p>

              <form noValidate onSubmit={this.onSubmit}>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Review Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Review Description'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateReview;