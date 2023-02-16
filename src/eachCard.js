import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Like from './Like';
import Button from 'react-bootstrap/Button';

function EachCard(props) {
    const [likeCount, setLikeCount] = useState(0)
    const [poopCount, setPoopCount] = useState(0) 

    return (
        <Card style={{ width: '18rem' }} key={props.userName}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.userName}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Like
                    setLikeCount={() => setLikeCount((prev) => prev + 1)}
                    setPoopCount={() => setPoopCount((prev) => prev + 1)}
                    likeCount={likeCount}
                    poopCount={poopCount}
                />


            </Card.Body>
        </Card>
  )
}

export default EachCard





{/* <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }><span className="likes-counter">{ `Like | ${likes}` }🔥</span></button> */ }