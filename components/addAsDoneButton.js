import {Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';



export default AddAsDoneButton = ({navigation,data}) => {
  const HandleButton= async(data,navigation) => {;
    const response= await fetch('https://task-backend-7gl4.onrender.com/update/'+(data.id), {
      method: 'PATCH',
      body: JSON.stringify({
        title: data.title,
        isDone:true
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result= await response.json();
    console.log("Done",result);
    navigation.navigate("HomeScreen")
  };
    return ( 
      <View >
        {data.isDone ? <Icon name="check-circle" size={24} color="#48bb78" style={tw `mr-2`}/> : 
           <>
              <TouchableOpacity onPress={()=>HandleButton(data,navigation)}>
                 <Icon name="circle-o" size={24} color="#a0aec0" style={tw `mr-2`} />
              </TouchableOpacity>
           </>
        } 
       </View>
     );
  }
