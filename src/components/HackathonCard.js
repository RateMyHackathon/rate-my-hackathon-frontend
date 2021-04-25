import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HackathonCard = (props) => {
    const hackathon = props.hackathon;

    return(
        <div className="card-container">
            <img src={ hackathon.img } alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-hackathon/${hackathon._id}`}>
                        { hackathon.name }
                    </Link>
                </h2>
                <p>{hackathon.description}</p>
            </div>
        </div>
    )
};

export default HackathonCard;