import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import "../App.css";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import MultiSelect from "react-multi-select-component";

class CreateHackathon extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      reviews: [],
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
      reviews: this.state.reviews,
    };

    axios
      .post("http://localhost:8082/api/hackathons", data)
      .then((res) => {
        this.setState({
          name: "",
          description: "",
          reviews: [],
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateHackathon!");
      });
  };

  render() {
    const options = [
      { label: "AR/VR", value: "ar_vr" },
      { label: "Beginner Friendly", value: "beginner_friendly" },
      { label: "Blockchain", value: "blockchain" },
      { label: "Communication", value: "communication" },
      { label: "Cybersecurity", value: "cybersecurity" },
      { label: "Design", value: "design" },
      { label: "DevOps", value: "devops" },
      { label: "E-commerce", value: "e_commerce" },
      { label: "Education", value: "education" },
      { label: "Enterprise", value: "enterprise" },
      { label: "Finance", value: "finance" },
      { label: "Gaming", value: "gaming" },
      { label: "Health", value: "health" },
      { label: "Internet of Things (IoT)", value: "iot" },
      { label: "Machine Learning / AI", value: "ml_ai" },
      { label: "Mobile", value: "mobile" },
      { label: "Art/Music", value: "art_music" },
      { label: "Open Ended", value: "open_ended" },
      { label: "Productivity", value: "productivity" },
      { label: "Social Good", value: "social_good" },
      { label: "Web", value: "web" },
    ];

    return (
      <div>
        <Header />

        <div className="container">
          <main>
            <div className="py-5 text-center">
              <h2>Add a Hackathon</h2>
              <p className="lead">
                Add a new hackathon to our database to start recieving reviews.
              </p>
            </div>

            <div className="row g-5">
              <div className="col-md-7 col-lg">
                <h4 className="mb-3">Basic info</h4>
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={this.onSubmit}
                >
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="hackathonName" className="form-label">
                        Hackathon name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        required
                      />

                      <div className="invalid-feedback">
                        Valid hackathon name is required.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="description" className="form-label">
                        Hackathon description
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        required
                      />

                      <div className="invalid-feedback">
                        Please enter a few words about this hackathon.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">Additional info</h4>

                  <div className="row g-3">
                    <div className="col-12">
                      <label for="cc-name" className="form-label">
                        Website URL
                        <span className="text-muted"> (Optional)</span>
                      </label>
                      <input type="text" className="form-control" id="url" />
                    </div>

                    <div className="col-12">
                      <label for="cc-name" className="form-label">
                        Theme tags
                        <span className="text-muted"> (Optional)</span>
                      </label>
                      {/* <MultiSelect
                        options={options}
                        labelledBy="Select"
                        hasSelectAll={false}
                      /> */}
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-primary btn-lg"
                    type="submit"
                  >
                    Add Hackathon
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}

export default CreateHackathon;
