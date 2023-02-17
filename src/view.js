import React, { useState } from 'react';
import AddPost from './addPost';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Like from './Like';
import EachCard from './eachCard';
import { Row } from 'react-bootstrap';
import { reverse } from 'lodash';
function View(props) {
    const buildCards = () => {
        const reversedPosts = [...props.addPost].reverse();
        return (
            <Row className='view-row'>
                {reversedPosts.map(post => (
                    <EachCard {...post} />
                ))}
            </Row>
        );
    };
    return (
        <>
            <AddPost onSubmit={(addPost) => props.updateListItems(addPost)} />
            <Container className="cardContainer container-fluid">
                {reverse(buildCards())}
            </Container>
        </>
    );
};
export default View;