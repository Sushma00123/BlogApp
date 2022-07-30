import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

  const { state, addBlogPost, deleteBlogPost } = useContext(Context)
  return (
    <View>
     

      <View style={styles.plus}>
      <Text>Add post</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('create')}>
      <Feather name='plus' size={30} />
      </TouchableOpacity>
      </View>
  
   
      {/* <Button title='Add Post' onPress={addBlogPost} /> */}

      <FlatList data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('show', { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name='trash' style={styles.icon} />
                {/* <Feather name='edit' style={styles.icon}/> */}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        }}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray'

  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  plus:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

})

export default IndexScreen