import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import { Header, Container, Form, Button, Divider } from "semantic-ui-react";

class NewReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      reviews: [],
      reviewTitle: "",
      reviewDescription: "",
      reviewRating: 3,
      reviewTags: [],
    };
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/hackathons/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          description: res.data.description,
          reviews: res.data.reviews,
        });
      })
      .catch((err) => {
        console.log("Error from NewReview");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // selectedItem = (e, data) => {
  //   this.setState({
  //     reviewTags: data.value
  //   });
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = (e) => {
    e.preventDefault();

    const reviewTitle = this.state.reviewTitle;
    const reviewDescription = this.state.reviewDescription;
    const reviewRating = this.state.reviewRating;
    const reviewTags = this.state.reviewTags;

    const obj = {
      title: reviewTitle,
      description: reviewDescription,
      rating: reviewRating,
      tags: reviewTags,
    };

    const data = {
      name: this.state.name,
      description: this.state.description,
      reviews: [...this.state.reviews, obj],
    };

    axios
      .put(
        "http://localhost:8082/api/hackathons/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/hackathon/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in NewReview!");
      });
  };

  changeRating(val) {
    this.setState({
      reviewRating: val,
    });
  }

  render() {
    const tagOptions = [
      { key: "competitive", text: "Competitive", value: "Competitive" },
      { key: "diverse", text: "Diverse", value: "Diverse" },
      { key: "fun", text: "Fun", value: "Fun" },
      { key: "organized", text: "Well-organized", value: "Well-organized" },
      { key: "relaxed", text: "Relaxed", value: "Relaxed" },
      { key: "stressful", text: "Stressful", value: "Stressful" },
      { key: "judging", text: "Intense Judging", value: "Intense Judging" },
      { key: "mentors", text: "Amazing Mentors", value: "Amazing Mentors" },
      { key: "panels", text: "Interesting Panels", value: "Interesting Panels" },
      { key: "prizes", text: "Big Prizes", value: "Big Prizes" },
      { key: "recruiters", text: "Great Sponsors/Recruiters", value: "Great Sponsors/Recruiters" },
      { key: "resources", text: "Helpful Resources", value: "Helpful Resources" },
      { key: "swag", text: "Free Swag", value: "Free Swag" },
      { key: "workshops", text: "Informative Workshops", value: "Informative Workshops" },
    ];

    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" style={{ padding: "1.5em 0em 1.5em" }}>
            Add a Review - {this.state.name}
            <Header.Subheader>
              Before submitting your review, please remember:
              <br />
              <br />
              Be honest. This review should be based on <u>your</u> own
              experience.
              <br />
              Be respectful. Do not include profanity or derogatory names in
              your review.
              <br />
              When criticizing, be sure that it is <u>constructive</u>, not
              destructive.
              <br />
              <br />
              RMH reserves the right to remove any reviews that violate any of
              these terms.
            </Header.Subheader>
          </Header>
        </Container>

        <Container>
          <Form onSubmit={this.onSubmit}>
            <Header as="h3">Basic Info</Header>

            <Form.Input
              fluid
              required
              label={`Rating: ${this.state.reviewRating} / 5`}
              name="reviewRating"
              value={this.state.reviewRating}
              onChange={this.handleChange}
              min={1}
              max={5}
              step={1}
              type="range"
            />

            <Form.TextArea
              fluid
              required
              label="Experience Details"
              placeholder="Tell us more about your experience..."
              name="reviewDescription"
              value={this.state.reviewDescription}
              onChange={this.onChange}
            />

            <Header as="h3">Additional Info</Header>
            <Form.Select
              fluid
              multiple
              search
              label="Tags that would best describe this hackathon"
              placeholder="Tags"
              options={tagOptions}
              name="reviewTags"
              value={this.state.reviewTags}
              onChange={this.handleChange}
            />

            <Divider hidden />
            <Button fluid primary type="submit">
              Add Review
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewReview;
