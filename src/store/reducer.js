import * as actionTypes from './actionTypes'

const initialState = {
    blogs:[],
    authSuccess: false,
    loading: false,
    userData: null,
    token:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.USER_REGISTRATION_START):
            return {
                ...state,
                loading:true,
            }
        case (actionTypes.USER_REGISTRATION_SUCCESS):
            return {
                ...state,
                loading: false,
                authSuccess:true
            }
        case (actionTypes.USER_REGISTRATION_FAIL):
            return {
                ...state,
                loading:false
            }
        case (actionTypes.USER_LOGIN_START):
            return {
                ...state,
                loading: true,
            }
        case (actionTypes.USER_LOGIN_SUCCESS):
            return {
                ...state,
                loading: false,
                userData: action.data,
                token:action.token
            }
        case (actionTypes.USER_LOGIN_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.MODAL_HANDLER):
            return {
                ...state,
                authSuccess: false
            }
        case (actionTypes.USER_LOGOUT):
            return {
                ...state,
                token: null,
                userData: null,
                blogs:null
            }
        case (actionTypes.BLOG_POST_START):
            return {
                ...state,
                loading: true,
            }
        case (actionTypes.BLOG_POST_SUCCESS):
            let userData = { ...state.userData, blogs: [action.data,...state.userData.blogs] }
            return {
                ...state,
                userData: userData,
                loading:false,
                blogs: [action.data,...state.blogs]
            }
        case (actionTypes.BLOG_POST_FAIL):
            return {
                ...state,
                loading: false
            }
        
        case (actionTypes.GET_BLOGS_START):
            return {
                ...state,
                loading: true,
            }
        case (actionTypes.GET_BLOGS_SUCCESS):
            const reversedBlogs = action.data.reverse()
            return {
                ...state,
                blogs: reversedBlogs,
                loading: false
            }
        case (actionTypes.GET_BLOGS_FAIL):
            return {
                ...state,
                loading: false
            }
        
        case (actionTypes.POST_COMMENT_START):
            return {
                ...state,
                loading: true,
            }
        case (actionTypes.POST_COMMENT_SUCCESS):
            let blogs = [...state.blogs]
            for (let i = 0; i < blogs.length; i++){
                if (blogs[i]._id === action.id) {
                    blogs[i].comments.push(action.data)
                }
            }
            return {
                ...state,
                loading: false,
                blogs: blogs
            }
        case (actionTypes.POST_COMMENT_FAIL):
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default reducer 