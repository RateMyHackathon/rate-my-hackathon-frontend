import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
// import { Link } from 'react-router-dom';
import HackathonCard from "./HackathonCard";
import { Container, Header } from "semantic-ui-react";

class AllHackathons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathons: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/hackathons")
      .then((res) => {
        this.setState({
          hackathons: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from AllHackathons");
      });
  }

  render() {
    const hackathons = this.state.hackathons;
    let hackathonList;

    if (!hackathons) {
      hackathonList = "there is no hackathon record!";
    } else {
      hackathonList = hackathons.map((hackathon, k) => (
        <HackathonCard hackathon={hackathon} key={k} />
      ));
    }

    return (
      <div>
      <Container textAlign="center">
        <Header 
        as="h1"
        style={{ padding: "1.5em 0em 1.5em" }}>
          All Hackathons
          <Header.Subheader>
            View all hackathons in our database. Don't see yours? 
            <a href="/new-hackathon"> Add it!</a>
          </Header.Subheader>
        </Header>
        </Container>
        <Container>
        {hackathonList}
        </Container>
        </div>
    );
  }
}

export default AllHackathons;
