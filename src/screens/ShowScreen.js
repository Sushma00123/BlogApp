import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const ShowScreen =({route,navigation})=>{
    console.log(route.params)
    const {state} = useContext(Context);
   const {id} = route.params;
   console.log(id)

    const blogPost = state.find(
        blogPost=>blogPost.id === id
    )
    return(
        <View style={style.row}>
            <Text >Title: {blogPost.title}</Text>
            <Text> Content: {blogPost.content}</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('Edit',{ id:id })}>
            <Feather name='edit-2'  style={style.icon}/>
           </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    
      },
      icon: {
        fontSize: 24
      }

})

export default ShowScreen