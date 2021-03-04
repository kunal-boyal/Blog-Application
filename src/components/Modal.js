import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const VerticallyCenteredModal = (props) => {

    let title = "User registration successfull, Please login to continue !"

    if(props.type === 'login') title = "Invalid Credentials, Please try again !"

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>User registration successfull, Please login to continue !</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>
                    Okay
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VerticallyCenteredModal