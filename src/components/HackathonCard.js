import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from 'react-bootstrap/Card'

const HackathonCard = (props) => {
    const hackathon = props.hackathon;

    return(
        // <div className="card-container">
        //     <img src={ hackathon.img } alt="" />
        //     <div className="desc">
        //         <h2>
        //             <Link to={`/hackathon/${hackathon._id}`} color="white">
        //                 { hackathon.name }
        //             </Link>
        //         </h2>
        //         <p>{hackathon.description}</p>
        //     </div>
        // </div>
        <Card className="HackathonCard">
            <Card.Body>
                <Card.Title>
                    <Link to={`/hackathon/${hackathon._id}`}>
                        { hackathon.name }
                    </Link>
                </Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Rating: </Card.Subtitle> */}
                <Card.Text>
                { hackathon.description }
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default HackathonCard;