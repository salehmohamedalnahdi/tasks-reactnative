import {Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';



export default DeleteButton = ({navigation,id}) => {
  const DeleteBlog= async(id,navigation) => {;
    const response= await fetch('https://task-backend-7gl4.onrender.com/delete/'+id, {
        method: 'DELETE',
      });
    const result= await response.json();
    console.log("Done",result);
    navigation.navigate("HomeScreen")
  };
    return ( 
      <View >
       <TouchableOpacity onPress={()=>DeleteBlog(id,navigation)}>
            <Icon name="trash" size={24} color="#e53e3e" style={tw `mr-2`} />
       </TouchableOpacity>
       </View>
     );
  }
