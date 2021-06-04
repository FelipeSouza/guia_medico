import React from 'react';
import { View, Text,StyleSheet } from 'react-native';


const PeopleList = props =>{
    const { peoples } = props;
    const textElements  = peoples.map(people => {
        const { first }= people.name;
        return (
            <View  key={first} style={ style.line}>
                 <Text style={style.lineText}>
                     {first}
                 </Text>
            </View>
        );
      });  
    return(
        <View style={style.container}>
           { textElements }
        </View>
    )
};

/*StyleSheet*/
const style= StyleSheet.create({
   container:{
       backgroundColor:'#E2F9FF'
   },
  
   line:{
    height:60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
   },

   lineText:{
        fontSize: 20,
        paddingLeft: 15,
    
   }
});
export default PeopleList;