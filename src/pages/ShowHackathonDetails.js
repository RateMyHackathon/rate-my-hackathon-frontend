import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard'
import NavigationBar from '../components/NavigationBar'

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

    // get list of reviews, if any
    let reviewList;
    if(hackathon.reviews === undefined) {
      reviewList = "There are no reviews!";
    } else {
      reviewList = hackathon.reviews.map((review, k) =>
        <ReviewCard review={review} key={k} />
      );
    }

    // let HackathonItem = <div>
    //   <table className="table table-hover table-dark">
    //     <tbody>
    //       <tr>
    //         <th scope="row">1</th>
    //         <td>Name</td>
    //         <td>{ hackathon.name }</td>
    //       </tr>
      
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Description</td>
    //         <td>{ hackathon.description }</td>
    //       </tr>

    //       <tr>
    //         <th scope="row">3</th>
    //         <td>Last Updated</td>
    //         <td>{ hackathon.date_updated }</td>
    //       </tr>

    //     </tbody>
    //   </table>
    // </div>

    return (
      <div>
      <NavigationBar />
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
                { hackathon.name }
              </h1>
              <hr /> <br />
            </div>
          </div>

          <p className="text-center">
                { hackathon.description }
          </p>

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

          <h1 className="display-4 text-center">
            Reviews
          </h1>

          <div>
            { reviewList }
          </div>

          
          <Link to={`/new-review/${hackathon._id}`} className="btn btn-outline-warning btn-lg btn-block">
            Add a Review
          </Link>

        </div>
      </div>
      </div>
    );
  }
}

export default showHackathonDetails;