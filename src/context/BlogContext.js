import React, { useReducer, useState } from 'react'
import createDataContext from './createDataContext';

// const BlogContext = React.createContext();


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, 
                { id: Math.floor(Math.random()*99999),
                title: action.payload.title,
                content:action.payload.content
                }]


                case 'delete_post':
                    return state.filter((blogPost)=>blogPost.id!==action.payload)

                case 'edit_post':
                    return state.map(blogPost=>{
                        return blogPost.id===action.payload.id? action.payload:blogPost})
          default:
            return state;
    }
}


// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = dispatch => {
        return(title,content,callback)=>{
            dispatch({type:'add_blogpost', payload:{title, content}})
            if(callback){

                callback()
            }
        }
    }

    const deleteBlogPost = dispatch =>{
        return (id)=>{
            dispatch({type:'delete_post',payload:id})
        }
    }

    const editBlogPost = dispatch=>{
        return(id,title,content,callback)=>{
            dispatch({
                type:'edit_post',
                payload:{id, title,content}
            })
            if(callback){

                callback()
            }
        }
    }
    // const blogPosts = [{title:'Blog Post #1'},{title:'Blog Post #2'}]
    // return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>{children}</BlogContext.Provider>
// }
// export default BlogContext

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost,editBlogPost},
    
    []
)