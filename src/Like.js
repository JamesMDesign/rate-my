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
            <Button variant="outline-primary" onClick={() => handleClick("like")}>🔥{props.likeCount}</Button>
            <Button variant="outline-primary" onClick={() => handleClick()}>💩{props.poopCount}</Button>
        </>
    )


};

export default LikeButton;





    // const increaseLikes = (userName, increment) => {
    //     const updated = counters.map((counter) => {
    //     if (counter.userName === userName) {
    //         if (increment) {
    //         return { userName, count: counter.count + 1 };
    //         } else {
    //         return { userName, count: 0 };
    //         }
    //     }
    //     return counter;
    //     });
    //     changeCounters(updated);
    // };


//   export default Like;
//   const resetCounters = () => {
//     const reset = counters.map(counter => {
//       return { id: counter.id, count: 0}
//     })
//     changeCounters(reset)
//   };