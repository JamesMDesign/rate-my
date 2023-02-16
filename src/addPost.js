import { useState, useEffect } from "react";
import  toastr from "toastr";
import "toastr/build/toastr.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddPost(props) {
    const [formValues, setFormValues] = useState({
       //Add placeholder posts
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
    event.preventDefault()
    props.onSubmit(formValues)
    console.log(formValues)
    toastr["info"]("Your post has been added", "Success")
    setFormValues({
        userName: "",
        title: "",
        image: "",
        description: "",
    });
    
}

    return (
        <div>
            <Form onSubmit={(event) => submitHandler(event)}>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

        </div>
    );
}

export default AddPost;

// function Add(props){
// 	const [formValues, setFormValues] = useState({
// 		id: 0,
// 		description: "",
// 	});



// const handleChange = (event) => {
//     const newState = {...formValues}

//     if (event.target.name === "completed") {
//         newState[event.target.name] = !formValues.completed
//     } else {
//         newState[event.target.name] = event.target.value;
//     }



// const submitHandler = (event) => {
//     event.preventDefault()
//     props.onSubmit(formValues)
//     toastr["success"]("Todo added", "Success")
//     setFormValues({
//         id: 0,
//         description: "",
//         completed: false,
//     })
// };



// return (
//     <div>
//         <Form onSubmit={(event) => submitHandler(event)}>
//             <Form.Group controlId="taskID">
//                 <Form.Label> Task ID</Form.Label>
//                 <Form.Control 
//                 name="id" 
//                 type="number" 
//                 onChange={(event) => handleChange(event)}
//                 />
//             </Form.Group>

//             <Form.Group controlId="taskDescription">
//                 <Form.Label> Description</Form.Label>
//                 <Form.Control 
//                 name="description" 
//                 type="text" 
//                 onChange={(event) => handleChange(event)}
//                 />
//             </Form.Group>

//             <Form.Group controlId="complete">
//                 <Form.Check 
//                 type="checkbox"
//                 id="complete"
//                 label="Completed?"
//                 name="completed"
//                 onChange={(event) => handleChange(event)}
//                 />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     </div>
// );