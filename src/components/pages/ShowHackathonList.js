import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HackathonCard from '../HackathonCard';
import NavigationBar from '../NavigationBar'

class ShowHackathonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathons: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/hackathons')
      .then(res => {
        this.setState({
          hackathons: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowHackathonList');
      })
  };


  render() {
    const hackathons = this.state.hackathons;
    console.log("PrintHackathon: " + hackathons);
    let hackathonList;

    if(!hackathons) {
      hackathonList = "there is no hackathon record!";
    } else {
      hackathonList = hackathons.map((hackathon, k) =>
        <HackathonCard hackathon={hackathon} key={k} />
      );
    }

    return (
      <div>
      <NavigationBar/>
      <div className="ShowHackathonList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Hackathons List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-hackathon" className="btn btn-outline-warning float-right">
                + Add New Hackathon
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                { hackathonList }
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ShowHackathonList;