import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import BlogForm from '../components/BlogForm'
import Navbar from '../components/NavBar'
import BlogCard from '../components/Card'
import Spinner from '../components/Spinner'
import * as actions from '../store/actions'

const Dashboard = (props) => {

    const [blogPicture, setBlogPicture] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
        props.getBlogs(props.token)
    }, [])

    const onLogout = () => {
        props.userLogout()
        props.history.replace('/')
    }

    const eventChangeHandler = (e, type) => {
        if (type === "blogPicture") {
            let img = e.target.files[0]
            setBlogPicture(img)
        }
        if (type === "title") setTitle(e.target.value)
        if (type === "body") setBody(e.target.value)
        if (type === "comment") setComment(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData()
        if (title.length > 0 && body.length > 0) {
            formData.append("fileName", blogPicture)
            formData.append("title", title)
            formData.append("body", body)
            props.onBlogPost(formData, props.token)
            setBlogPicture('')
            setTitle('')
            setBody('')
        }
    }

    const commentSubmitHandler = (e, id) => {
        e.preventDefault()
        if (comment.length > 0) {
            props.commentHandler(id, { comment }, props.token)
            setComment('')
        }
    }

    let blogs = <h1>Loading</h1>
    if (props.blogs) {
        blogs = props.blogs.map((blog) => (
            <BlogCard
                submit={commentSubmitHandler}
                key={blog._id}
                blogId={blog._id}
                title={blog.title}
                body={blog.body}
                img={blog.blogPicture}
                comments={blog.comments}
                commentValue={comment}
                change={eventChangeHandler} />
        ))
    }
    let spinner = props.loading ? <Spinner/> : null
    return (
        <div>
            <Navbar type="dashboard" click={onLogout} />
            <div style={{ margin: 'auto', marginTop: '5rem', width: '60%' }}>
                <h1 style={{ marginBottom: '2rem' }}>Welcome {props.userData.name}</h1>
                <BlogForm change={eventChangeHandler} submit={submitHandler} title={title} body={body} />
                {spinner}
            </div>
            {blogs}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.token,
        blogs: state.blogs,
        userData: state.userData,
        loading:state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: (toRegistrationPage) => dispatch(actions.userLogout(toRegistrationPage)),
        onBlogPost: (data, token) => dispatch(actions.blogPost(data, token)),
        getBlogs: (token) => dispatch(actions.getBlogs(token)),
        commentHandler: (blogId, comment, token) => dispatch(actions.postComment(blogId, comment, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)