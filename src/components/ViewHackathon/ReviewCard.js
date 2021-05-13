import React from "react";
import "../../App.css";
import { Card } from "semantic-ui-react";

const ReviewCard = (props) => {
  const review = props.review;

  return (
    <Card centered fluid>
      <Card.Content header={review.description} />
      <Card.Content description={review.description} />
      <Card.Content extra>
        {/* <Icon name='user' /> */}# / 5
      </Card.Content>
    </Card>
  );
};

export default ReviewCard;
