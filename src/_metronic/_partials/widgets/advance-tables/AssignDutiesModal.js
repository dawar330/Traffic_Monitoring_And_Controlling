import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Modal , Button, InputGroup, FormControl} from "react-bootstrap";
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
export function AssignDutiesModal(props) {
    const classes = useStyles();
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
                <InputGroup.Text>First and last name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <FormControl />
            </InputGroup>
            <br />
            <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Start Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
            <br />
            <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="End Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button>Assign</Button>
        </Modal.Footer>
      </Modal>
    );
  }