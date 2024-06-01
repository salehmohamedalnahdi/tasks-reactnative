import React from 'react';
import {Text, View ,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"

export default function Form({ AddTask, navigation}) {
    const validation =ValidationForm()
    return (
    <View style={tw `mx-2 mt-8 flex `}>
        <Formik
        initialValues={{ title: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          AddTask(values);
          navigation.navigate("HomeScreen")
          
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={tw ` border border-gray-500 h-12 px-2`}
              placeholder='Type Title Of Task'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <Text style={tw `text-sm`}>{props.errors.title}</Text>
             <Button color='#DD5746' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}

      </Formik>
    </View>
  )
}



