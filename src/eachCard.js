import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Like from './Like';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function EachCard(props) {
    const [likeCount, setLikeCount] = useState(0)
    const [poopCount, setPoopCount] = useState(0) 

    return (
        <Card className="postCard" key={props.userName}>
            <Container className="imageContainer">
                <Card.Img className="cardImage" variant="top" src={props.image} />
            </Container>
                <Card.Body>
                    <Card.Title className="cardTitle">{props.title}</Card.Title>
                    <Card.Subtitle className="cardUserName mb-2 text-center text-muted">{props.userName}</Card.Subtitle>
                    <Card.Text className="cardText">{props.description}</Card.Text>
                    <Like
                    setLikeCount={() => setLikeCount((prev) => prev + 1)}
                    setPoopCount={() => setPoopCount((prev) => prev + 1)}
                    likeCount={likeCount}
                    poopCount={poopCount}
                    />
                </Card.Body>
        </Card>
  )
};

export default EachCard;