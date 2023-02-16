import React, { useState } from 'react';
import AddPost from './addPost';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Like from './Like';
import EachCard from './eachCard';

function View(props) {


    const buildCards = () => {
        return props.addPost.map(post => {
            return <EachCard 
                {
                    ...post
                }
            />
        })
    };



    return (
        <>
        <AddPost onSubmit={(addPost) => props.updateListItems(addPost)} />

        <Container>
        
            {buildCards()}

        </Container>

           
                
                
        </>    
    );
} 
            
export default View;



        //--- This is a copy of our CARD code --- //

// function BasicExample() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>User Name</Card.Title>
//           <Card.Text>
//             this is where the post's description will go!
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     );
//   }



        // --- This is out OLD table building function --- //

// const buildCards = () => {
//     return props.addpost.map((current) => (
//         <tr key={current.userName}>
//             <td>
//                 {current.userName}
//             </td>
//             <td>
//                 {current.description}
//             </td>
//         </tr>
//     ))
// };



        // --- This is our OLD table structure code --- //

            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {buildCards()}
                </tbody>
            </Table>   
        </>
    );
} */}


// function App() {
//     // this adds a new counter instance
  
//     const addCounter = () => {
//       changeCounters((prev) => [...prev, { id: counters.length + 1, count: 0 }]);
//     };
  
//     const removeCounter = () => {
//       changeCounters((prev) => prev.slice(0, prev.length - 1));
//     };
  
//     const [counters, changeCounters] = useState([]);
  
//     const generateCounters = () => {
//       return counters.map((counter) => {
//         return (
//           <TallyCounter id={counter.id} count={counter.count} key={counter.id} 
//             increaseLikes={() => increaseLikes(counter.id, true)}
//             resetCounter={() => increaseLikes(counter.id, false)}
//           />
//         );
//       });
//     };