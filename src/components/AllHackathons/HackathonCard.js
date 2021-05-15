import React from "react";
import { Card } from "semantic-ui-react";

function calculateAvgRating(ratings) {
  var sum = 0;
  for (var i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  var avg = sum / ratings.length;
  avg = Math.round(avg * 10) / 10; // round to nearest decimal
  return avg;
}

const HackathonCard = (props) => {
  const hackathon = props.hackathon;

  var ratings = [];
  const reviews = hackathon.reviews;
  const numReviews = reviews.length;
  for (var i = 0; i < reviews.length; i++) {
    ratings.push(reviews[i].rating);
  }

  const avgRating = calculateAvgRating(ratings);

  return (
    <Card centered fluid href={`/hackathon/${hackathon._id}`}>
      <Card.Content header={hackathon.name}/>
      <Card.Content description={hackathon.description} />
      <Card.Content extra>
      {avgRating} / 5 based on {numReviews} reviews
      </Card.Content>
    </Card>
  );
};

export default HackathonCard;
