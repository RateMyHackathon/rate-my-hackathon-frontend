import React from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

import teamImg from "../../assets/team.svg";
import shareImg from "../../assets/share.svg";
import upvoteImg from "../../assets/upvote.svg";

const HomeCards = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <Image src={teamImg} width="100%" height="375" alt="Team" />
            <Header
              as="h2"
              content="Search for hackathons"
              textAlign="center"
            />
          </Grid.Column>
          <Grid.Column>
            <Image src={shareImg} width="100%" height="375" alt="Share" />
            <Header
              as="h2"
              content="Share your experiences anonymously"
              textAlign="center"
            />
          </Grid.Column>
          <Grid.Column>
            <Image src={upvoteImg} width="100%" height="375" alt="Upvote" />
            <Header
              as="h2"
              content="Support others' reviews"
              textAlign="center"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default HomeCards;