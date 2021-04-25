import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import UpdateHackathonInfo from './UpdateHackathonInfo';

class showHackathonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathon: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/hackathons/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showHackathonDetails-API-response: " + res.data);
        this.setState({
          hackathon: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowHackathonDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/hackathons/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowHackathonDetails_deleteClick");
      })
  };


  render() {

    const hackathon = this.state.hackathon;
    let HackathonItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ hackathon.name }</td>
          </tr>
      
          <tr>
            <th scope="row">2</th>
            <td>Description</td>
            <td>{ hackathon.description }</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Last Updated</td>
            <td>{ hackathon.date_updated }</td>
          </tr>

        </tbody>
      </table>
    </div>

    return (
      <div className="ShowHackathonDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Hackathon List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                { hackathon.name } Details
              </h1>
              <hr /> <br />
            </div>
          </div>
          <div>
            { HackathonItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,hackathon._id)}>Delete Hackathon</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-hackathon/${hackathon._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Hackathon
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Hackathon</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Hackathon</button> */}

        </div>
      </div>
    );
  }
}

export default showHackathonDetails;