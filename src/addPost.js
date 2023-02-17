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
    const newState = {...formValues}
    console.log(event.target.name)
    console.log(event.target.value)
    console.log(newState)

    newState[event.target.name] = event.target.value

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
                <Button variant="primary" type="submit" className="my-2">
                    Submit
                </Button>
                </div>
            </Form>
        </Container>
    );
};

export default AddPost;