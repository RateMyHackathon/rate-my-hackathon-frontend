import React from "react";
import { Card } from "semantic-ui-react";

const HackathonCard = (props) => {
  const hackathon = props.hackathon;

  return (
    <Card centered fluid href={`/hackathon/${hackathon._id}`}>
      <Card.Content header={hackathon.name} />
      <Card.Content description={hackathon.description} />
      <Card.Content extra>
        {/* <Icon name='user' /> */}# / 5 based on ## reviews
      </Card.Content>
    </Card>
  );
};

export default HackathonCard;
