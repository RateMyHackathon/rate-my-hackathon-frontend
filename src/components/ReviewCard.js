import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

import Card from 'react-bootstrap/Card';

const ReviewCard = (props) => {
    const review = props.review;

    return(
        <Card bg={'dark'} style={{ width: '18rem' }}>
            <Card.Header>{ review.title }</Card.Header>
                <Card.Body>
                    <Card.Title>{ review.rating }</Card.Title>
                    <Card.Text>{ review.description }</Card.Text>
                </Card.Body>
        </Card>
    )
};

export default ReviewCard;