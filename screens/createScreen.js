import React from 'react';
import {Text, View ,ScrollView,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Form from "../components/form"

export default function CreateScreen({ navigation }) {

 
    const AddTask = async(values) => {

      const response= await fetch('https://task-backend-7gl4.onrender.com/create', {
        method: 'POST',
        body: JSON.stringify({
          title:values.title,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result= await response.json();
    console.log(result);
    }

    return (
    <View >
      <Form AddTask={AddTask} navigation={navigation} />
    </View>
  )
}


