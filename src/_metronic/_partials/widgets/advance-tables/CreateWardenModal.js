import React from "react";
import {Modal , Button, InputGroup, FormControl} from "react-bootstrap";
import { connect } from "react-redux";
import  {createvarden}  from "../../../../redux/actions/VardenActions"


export function CreateWardenModal(props) {
  const handlechange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  const handlesubmit = (e) =>{
   e.preventDefault();
   props.createvarden(state);
   console.log(state)
   
  }
   const state = {
   Name: 'hi',
   Rank:'',
   Designation: '',
   Age: ''

 }
 

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Warden
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text  onChange={handlechange} id="Name">First and last name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
            </InputGroup>
                        <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text  onChange={handlechange} id="Rank">Rank</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text onChange={handlechange} id="Designation">Designation</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text onChange={handlechange} id="Age">Age</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br/>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handlesubmit}>ADD</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const mapdispatchtoprops =(dispatch) => {
    return {
      createvarden: (Varden) => dispatch(createvarden(Varden))
    }
  }
  export default connect(null, mapdispatchtoprops)(CreateWardenModal)