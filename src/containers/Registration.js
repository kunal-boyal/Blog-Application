import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Form from '../components/Form'
import Modal from '../components/Modal'
import Navbar from '../components/NavBar'
import * as actions from '../store/actions'

const Registration = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(props.authSuccess)
    const [modalType, setModalType] = useState('')

    useEffect(() => {
        setShowModal(props.authSuccess)
    }, [props.authSuccess]);

    const eventChangeHandler = (e, type) => {
        if (type === "name") setName(e.target.value)
        if (type === "email") setEmail(e.target.value)
        if (type === "password") setPassword(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        setModalType('register')
        if (name.length !== 0 || email.length !== 0 || password.length !== 0) {
            props.userRegistrationHandler({ name, email, password })
            
        }
    }

    const onModalHide = () => {
        props.modalHandler()
    }

    const onLogin = (e) => {
        e.preventDefault()
        setModalType('login')
        if (email.length !== 0 || password.length !== 0) {
            props.userLoginHandler({ email, password }, () => props.history.replace('/dashboard'))
        }
    }

    const googleLoginResponse = (response) => {
        console.log(response)
    }

    return (
        <div>
            <Modal show={showModal} onHide={onModalHide} type={modalType} />
            <Navbar click={onLogin} change={eventChangeHandler} type="registration" />
            <div style={{ margin: 'auto', marginTop: '5rem', width: '60%' }}>
                <h1 style={{ marginBottom: '2rem' }}>Welcome to our application, Signup to continue !</h1>
                <Form change={eventChangeHandler} submit={formSubmitHandler} google={googleLoginResponse}/>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authSuccess: state.authSuccess,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userRegistrationHandler: (data) => dispatch(actions.userRegistration(data)),
        userLoginHandler: (data, toDashboard) => dispatch(actions.userLogin(data, toDashboard)),
        modalHandler: () => dispatch(actions.modalHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)