import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateHackathon extends Component {
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
        console.log("Error in CreateHackathon!");
      })
  };

  render() {
    return (
      <div className="CreateHackathon">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Hackathon List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Hackathon</h1>
              <p className="lead text-center">
                  Create new hackathon
              </p>

              <form noValidate onSubmit={this.onSubmit}>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Hackathon Name'
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
                    placeholder='Hackathon Description'
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

export default CreateHackathon;