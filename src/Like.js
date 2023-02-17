import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const LikeButton = (props) => {
    const handleClick = (typeCount) => {
        if (typeCount === "like") {
            props.setLikeCount()
        } else {
            props.setPoopCount()
        }
    };

    return (
        <>  
        <div className="text-center">      
            <Button className="likeButton" variant="outline-primary" onClick={() => handleClick("like")}>🔥{props.likeCount}</Button>
            <Button className="likeButton" variant="outline-primary" onClick={() => handleClick()}>💩{props.poopCount}</Button>
        </div>
        </>
    );
};

export default LikeButton;