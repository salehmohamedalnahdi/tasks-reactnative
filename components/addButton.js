import {Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';


export default AddButton = ({navigation}) => {
    return ( 
      <View style={tw `items-center `}>
       <TouchableOpacity onPress={() =>navigation.navigate("CreateScreen")}>
         <Icon name="plus-circle" size={24} color="#006769" style={tw `mr-2`} />
       </TouchableOpacity>
       </View>
     );
  }
