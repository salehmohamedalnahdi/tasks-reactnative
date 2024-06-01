import React from 'react';
import {Text, View ,ScrollView,Button,TouchableOpacity, ViewComponent} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FetchAPI from "../utility/fetchApI"
import AddButton from "../components/addButton"
import DeleteButton from "../components/deleteButton"
import AddAsDoneButton from "../components/addAsDoneButton"


export default function HomeScreen({ navigation }) {

    const data=FetchAPI()
    return (
    <View >
      <ScrollView style={tw `mb-2`}>
         <View  style={tw `my-1 mx-3`} >
         <AddButton navigation={navigation}/>
         </View>
        {data && 
          (data.map(item=>
             <>
                <View style={tw `flex flex-row rounded-lg border bg-gray-200 border-white mx-1 mb-1 `}>
                   <View style={tw `flex-1  p-2`}>
                      <Text >{item.title}</Text>
                   </View>
                   <View style={tw ` p-2 `}>
                        <AddAsDoneButton navigation={navigation} data={item} />
                   </View>
                   <View style={tw ` p-2 `}>
                      <DeleteButton navigation={navigation} id={item.id} />
                   </View>
                 </View>  
             </>
            )
          )
        }  
      </ScrollView>
    </View>
  )
}

/*  <View style={tw `m-2`}>
      <ScrollView>
      <AddButton navigation={navigation}/>
       {data && (
        data.map(item=><>
        
         <View style={tw `border-4 bg-blue-300 border-blue-300 text-black font-bold px-2 mb-1`}>
            <Text style={tw `p-2 font-bold `}>{item.title} </Text>
            <View style={tw ` px-2 mb-2 `}>
              <DeleteButton navigation={navigation} id={item.id} />
            </View>
         </View>  
        </>
        )
       )}
      </ScrollView>
    </View>
    */


