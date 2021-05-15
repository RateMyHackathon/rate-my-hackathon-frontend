import React from "react";
import "../../App.css";
import { Card, Label } from "semantic-ui-react";

const ReviewCard = (props) => {
  const review = props.review;

  var dateString = new Date(review.date_updated).toDateString(); // turn date into readable string (MMM DD YYYY)
  dateString = dateString.substr(dateString.indexOf(" ") + 1); // remove day of week from date

  const tags = review.tags;
    let tagList;

    if (!tags) {
      tagList = "No tags!";
    } else {
      tagList = tags.map((tag, k) => (
        <Label hackathon={tag} key={k} />
      ));
    }

  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header>
          <span className="left">
            <h1>{review.rating} / 5</h1>
          </span>
        </Card.Header>
        <br />
        <Card.Description>{review.description}</Card.Description>
        <br />
        <Card.Meta>
          <span className="left">
            {tagList}
            {/* <Label>Tag 1</Label>
            <Label>Tag 2</Label>
            <Label>Tag 3</Label> */}
          </span>
          <span className="right">
            {dateString}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <span className="left">
          <i class="arrow up icon"></i> 0 &emsp;
          <i class="arrow down icon"></i> 0
        </span>
        <span className="right">
          <i class="flag outline icon"></i>
        </span>
      </Card.Content>
    </Card>
  );
};

export default ReviewCard;
