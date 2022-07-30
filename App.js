import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider  } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import EditScreen from './src/screens/EditScreen';



export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <Provider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Blog"
        component={IndexScreen}
      />
      <Stack.Screen 
      name='show' 
      component={ShowScreen}/>

      <Stack.Screen
     name='create' 
     component={CreateScreen}/>

     <Stack.Screen name='Edit'
     component={EditScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
