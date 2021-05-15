import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Header, Container, Button } from "semantic-ui-react";

function calculateAvgRating(ratings) {
  var sum = 0;
  for (var i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  var avg = sum / ratings.length;
  avg = Math.round(avg * 10) / 10; // round to nearest decimal
  return avg;
}
class ViewHackathon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathon: {},
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/hackathons/" + this.props.match.params.id)
      .then((res) => {
        // console.log("Print-ViewHackathon-API-response: " + res.data);
        this.setState({
          hackathon: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ViewHackathon");
      });
  }

  // For delete hackathon button:
  // onClick={this.onDeleteClick.bind(this, hackathon._id)}
  onDeleteClick(id) {
    axios
      .delete("http://localhost:8082/api/hackathons/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form ViewHackathon_deleteClick");
      });
  }

  // To edit hackathon:
  // <Link to={`/edit-hackathon/${hackathon._id}`} />

  render() {
    const hackathon = this.state.hackathon;

    // get list of reviews, if any
    let reviewList;
    if (hackathon.reviews === undefined) {
      reviewList = "There are no reviews!";
    } else {
      reviewList = hackathon.reviews.map((review, k) => (
        <ReviewCard review={review} key={k} />
      ));
    }

    // calculate avg rating
    let avgRating;
    let numReviews;
    console.log(hackathon.reviews)
    if (hackathon.reviews) {
      var ratings = [];
      const reviews = hackathon.reviews;
      numReviews = reviews.length;
      for (var i = 0; i < reviews.length; i++) {
        ratings.push(reviews[i].rating);
      }
      avgRating = calculateAvgRating(ratings);
      if (isNaN(avgRating)) {
        avgRating = 0;
      }
    } else {
      avgRating = 0;
      numReviews = 0;
    }

    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" style={{ padding: "1.5em 0em 1.5em" }}>
            {hackathon.name}
            <Header.Subheader>{hackathon.description}</Header.Subheader>
            <Link to={`/new-review/${hackathon._id}`}>
              <br />
              <Button primary>Add a Review</Button>
            </Link>
          </Header>
          Average Rating: {avgRating} / 5
          <br/>
          based on {numReviews} reviews
        </Container>

        <Container>
          <Header as="h3">Reviews</Header>
          {reviewList}
        </Container>
      </div>
    );
  }
}

export default ViewHackathon;
