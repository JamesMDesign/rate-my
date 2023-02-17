import React, { useState } from 'react';
import AddPost from './addPost';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Like from './Like';
import EachCard from './eachCard';
import { Row } from 'react-bootstrap';

function View(props) {

    const buildCards = () => {
        return <Row className='view-row'>
            {
                props.addPost.map(post => 
                <EachCard 
                    {
                        ...post
                    }
                />)
            }
        </Row>
    };

    return (
        <>
            <AddPost onSubmit={(addPost) => props.updateListItems(addPost)} />
            <Container className="cardContainer container-fluid">        
                {buildCards()}
            </Container>
        </>    
    );
};
            
export default View;