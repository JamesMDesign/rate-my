import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import AddPost from './addPost';
import './App.scss';

function View(props) {


    const buildRows = () => {
        return props.addpost.map((current) => (
            <tr key={current.userName}>
                <td>
                    {current.userName}
                </td>
                <td>
                    {current.description}
                </td>
            </tr>
        ))
    };

    return (
        <>
        <AddPost onSubmit={(addPost) => props.updateListItems(addPost)} />
        
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {buildRows()}
                </tbody>
            </Table>

            

        </>

    );
}

export default View;