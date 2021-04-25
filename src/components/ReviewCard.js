import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ReviewCard = (props) => {
    const review = props.review;

    return(
        
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{ review.title }</h1>
                <p class="col-md-8 fs-4"> { review.description } </p>
                <p class="col-md-8 fs-4"> Rating: { review.rating } </p>
            </div>

    )
};

export default ReviewCard;