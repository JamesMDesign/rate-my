import { useState, useEffect } from "react";
import  toastr from "toastr";
import "toastr/build/toastr.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './addPost.scss';
import { Container } from "react-bootstrap";

function AddPost(props) {
    const [formValues, setFormValues] = useState({
        userName: "",
        title: "",
        image: "",
        description: "",
      });
      
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      
      const handleChange = (event) => {
        const newState = { ...formValues };
      
        newState[event.target.name] = event.target.value;
      
        if (event.target.name === 'image' && Math.random() < 0.2) {
          newState.image = `https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80${Math.floor(Math.random() * 100)}`;
        }
      
        setFormValues(newState);
      
    
};

const submitHandler = (event) => {
    event.preventDefault();
    // Check if any input field is empty
    if (Object.values(formValues).some(value => value === "")) {
        toastr["error"]("Please fill out all fields", "Error");
        return;
    }
    // Submit the form if all fields are filled out
    props.onSubmit(formValues);
    toastr["info"]("Your post has been added", "Success");
    setFormValues({
        userName: "",
        title: "",
        image: "",
        description: "",
    });
};
    


   

    return (
        <Container>
            <Form onSubmit={(event) => submitHandler(event)} className="inputForm">
                <Form.Group controlId="userName">
                    <Form.Label>
                        Username
                    </Form.Label>
                    <Form.Control 
                    name="userName"
                    type="text"
                    onChange={(event) => handleChange(event)}
                    />
                </Form.Group>

                <Form.Group controlId="title">
                    <Form.Label>
                        Title
                    </Form.Label>
                    <Form.Control 
                    name="title"
                    onChange={(event) => handleChange(event)}                    
                    />
                </Form.Group>

                <Form.Group controlId="image"> 
                    <Form.Label>
                        Enter img url
                    </Form.Label>
                    <Form.Control 
                    name="image"
                    type="text"
                    onChange={(event) => handleChange(event)}
                    />
                </Form.Group> 

                <Form.Group controlId="description">
                    <Form.Label>
                        Description
                    </Form.Label>
                    <Form.Control 
                    name="description"
                    type="text"
                    onChange={(event) => handleChange(event)}                    
                    />
                </Form.Group>
                <div className="text-center">
                <Button variant="primary mt-3 btn-lg" type="submit" className="my-2">
                    Submit
                </Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddPost;