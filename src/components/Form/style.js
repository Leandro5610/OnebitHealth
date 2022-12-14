import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({
   formContext:{
      width:"100%",
      height:"100%",
      bottom:0,
      alignItems:"center",
      marginTop:30,
      backgroundColor:"#ffffff",
      borderTopLeftRadius:30,
      borderTopRightRadius:30
   },
   form:{
      width:"100%",
      height:"auto",
      marginTop:10,
      padding:10
   },
   formLabel:{
      color:"#000000",
      fontSize:18,
      paddingLeft:20
   },
   formInput:{
      width:"90%",
      borderRadius:10,
      backgroundColor:"#f6f6f6",
      height:40,
      margin:12,
      borderWidth:1,
      borderColor:" #4d4d4d",
      paddingLeft:10,
   },
   textButtonCalculator:{
      fontSize:20,
      color:"#ffffff"
   },
   buttonCalculator:{
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      width:"90%",
      backgroundColor:"#FF0043",
      padding:15,
      marginLeft:12 
   },
   errorMessage:{
      fontSize:12,
      color:"red",
      fontWeight:"bold",
      paddingLeft:20
   }
});

export default styles