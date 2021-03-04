import axios from 'axios'

import * as actionTypes from "./actionTypes"

export const userRegistrationStart = () => {
    return {
        type: actionTypes.USER_REGISTRATION_START
    }
}


export const userRegistrationSuccess = (data) => {
    return {
        type: actionTypes.USER_REGISTRATION_SUCCESS
    }
}

export const userRegistrationFail = () => {
    return {
        type: actionTypes.USER_REGISTRATION_FAIL
    }
}

export const userRegistration = (data) => {
    return async dispatch => {
        dispatch(userRegistrationStart());
        try {
            await axios.post('http://localhost:5000/register', data)
            dispatch(userRegistrationSuccess());
        } catch (error) {
            dispatch(userRegistrationFail())
            console.log(error.message)
        }
    }
}

export const userLoginStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START
    }
}


export const userLoginSuccess = (data, token) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        data: data,
        token: token
    }
}

export const userLoginFail = () => {
    return {
        type: actionTypes.USER_LOGIN_FAIL
    }
}

export const userLogin = (data, toDashboard) => {
    return async dispatch => {
        dispatch(userLoginStart());
        try {
            const response = await axios.post('http://localhost:5000/login', data)
            dispatch(userLoginSuccess(response.data.user, response.data.token))
            toDashboard()
        } catch (error) {
            dispatch(userLoginFail())
            console.log(error.message)
        }
    }
}

export const userLogout = () => {
    return {
        type: actionTypes.USER_LOGOUT
    }
}


export const blogPostStart = () => {
    return {
        type: actionTypes.BLOG_POST_START
    }
}


export const blogPostSuccess = (data) => {
    return {
        type: actionTypes.BLOG_POST_SUCCESS,
        data: data
    }
}

export const blogPostFail = () => {
    return {
        type: actionTypes.BLOG_POST_FAIL
    }
}

export const blogPost = (data, token) => {
    console.log(token)
    return async dispatch => {
        dispatch(blogPostStart());
        try {
            const response = await axios.post('http://localhost:5000/createBlog', data, {
                headers: {
                    'Authorization': token
                }
            })
            dispatch(blogPostSuccess(response.data.data));
        } catch (error) {
            dispatch(blogPostFail())
            console.log(error.message)
        }
    }
}








export const getBlogsStart = () => {
    return {
        type: actionTypes.GET_BLOGS_START
    }
}


export const getBlogsSuccess = (data) => {
    return {
        type: actionTypes.GET_BLOGS_SUCCESS,
        data: data
    }
}

export const getBlogsFail = () => {
    return {
        type: actionTypes.GET_BLOGS_FAIL
    }
}

export const getBlogs = (token) => {
    return async dispatch => {
        dispatch(getBlogsStart());
        try {
            const response = await axios.get('http://localhost:5000/getBlogs', {
                headers: {
                    'Authorization': token
                }
            })
            dispatch(getBlogsSuccess(response.data.data));
        } catch (error) {
            dispatch(getBlogsFail())
            console.log(error.message)
        }
    }
}

export const postCommentStart = () => {
    return {
        type: actionTypes.POST_COMMENT_START
    }
}


export const postCommentSuccess = (id,data) => {
    return {
        type: actionTypes.POST_COMMENT_SUCCESS,
        id,
        data
    }
}

export const postCommentFail = () => {
    return {
        type: actionTypes.POST_COMMENT_FAIL
    }
}

export const postComment = (id, data,token) => {
    return async dispatch => {
        dispatch(postCommentStart());
        try {
            const response = await axios.post(`http://localhost:5000/postComment/${id}`,data ,{
                headers: {
                    'Authorization': token
                }
            })
            dispatch(postCommentSuccess(id,response.data.data));
        } catch (error) {
            dispatch(postCommentFail())
            console.log(error.message)
        }
    }
}

export const modalHandler = () => {
    return {
        type: actionTypes.MODAL_HANDLER
    }
}