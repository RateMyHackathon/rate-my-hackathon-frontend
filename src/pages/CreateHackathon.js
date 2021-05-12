import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Header, Container, Form, Button } from "semantic-ui-react";

class CreateHackathon extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      url: "",
      themes: []
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      description: this.state.description,
      url: this.state.url,
      themes: this.state.themes
    };

    axios
      .post("http://localhost:8082/api/hackathons", data)
      .then((res) => {
        this.setState({
          name: "",
          description: "",
          url: "",
          themes: []
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateHackathon!");
      });
  };

  render() {
    const themeOptions = [
      { key: "ar", text: "AR/VR", value: "ar" },
      { key: "beginner", text: "Beginner Friendly", value: "beginner" },
      { key: "blockchain", text: "Blockchain", value: "blockchain" },
      { key: "communication", text: "Communication", value: "communication" },
      { key: "cybersecurity", text: "Cybersecurity", value: "cybersecurity" },
      { key: "design", text: "Design", value: "design" },
      { key: "devops", text: "DevOps", value: "devops" },
      { key: "ecommerce", text: "E-commerce", value: "ecommerce" },
      { key: "education", text: "Education", value: "education" },
      { key: "enterprise", text: "Enterprise", value: "enterprise" },
      { key: "finance", text: "Finance", value: "finance" },
      { key: "gaming", text: "Gaming", value: "gaming" },
      { key: "health", text: "Health", value: "health" },
      { key: "iot", text: "Internet of Things (IoT)", value: "iot" },
      { key: "ml", text: "Machine Learning / AI", value: "ml" },
      { key: "mobile", text: "Mobile", value: "mobile" },
      { key: "art", text: "Art/Music", value: "art" },
      { key: "open", text: "Open Ended", value: "open" },
      { key: "productivity", text: "Productivity", value: "productivity" },
      { key: "good", text: "Social Good", value: "good" },
      { key: "web", text: "Web", value: "web" },
    ];

    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" style={{ padding: "1.5em 0em 1.5em" }}>
            Add a Hackathon
            <Header.Subheader>
              Add a new hackathon to our database to start recieving reviews.
            </Header.Subheader>
          </Header>
        </Container>

        <Container>
          <Form>
            <Header as="h3">Basic Info</Header>
          
            <Form.Input
              fluid
              required
              label="Hackathon name"
              placeholder="Hackathon name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.TextArea
              fluid
              required
              label="Hackathon description"
              placeholder="Tell us more about this hackathon..."
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />

            <Header as="h3">Additional Info</Header>
            <Form.Input
              fluid
              label="Website URL"
              placeholder="https://www.ratemyhackathon.online"
              name="url"
              value={this.state.url}
              onChange={this.onChange}
            />

            <Form.Select
              fluid
              multiple
              search
              label="Themes"
              placeholder="Themes"
              options={themeOptions}
              name="themes"
              value={this.state.themes}
              onChange={this.onChange}
            />

            <Button type="submit">Add Hackathon</Button>

          </Form>
        </Container>

        
      </div>
    );
  }
}

export default CreateHackathon;
