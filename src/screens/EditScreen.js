import React, { useContext, useState } from "react";
import {View,Text,StyleSheet,TextInput, Button} from 'react-native'
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({route,navigation})=>{
    const {state,editBlogPost} = useContext(Context);
  
    const {id} = route.params
    console.log('edit',id)


    const blogPost = state.find(
        blogPost=>blogPost.id === id
    )
console.log('////', blogPost)
    return (<BlogPostForm 
    initialValues = {{title:blogPost.title, content:blogPost.content}}
    onSubmit={(title,content)=>{
        editBlogPost(id,title,content,()=>navigation.pop())
    }}
    />
    )
}



export default EditScreen