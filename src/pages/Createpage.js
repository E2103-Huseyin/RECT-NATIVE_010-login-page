import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput,Dimensions , FlatList, TouchableOpacity, Image,StyleSheet,KeyboardAvoidingView} from 'react-native';
import  Video from "react-native-video";
import auth from '@react-native-firebase/auth';


const LogIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");

//     const [age, setAge] = useState("");
//    const [sex, setSex] = useState("");
//     const [oku, setOku] = useState(false);

    const signUp = (props) => {
        if (password!=password2){
            alert('chack password')
        }
        
        auth()
            
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                response.user.sendEmailVerification({
                    handleCodeInApp: true,
                 });
                //uniqe id
                alert(response.user.email)
                console.log(response);
            })
            .catch(error => {
                // console.log(error);
                alert(error)
            });
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>

            
            
            

            
            <Image
                source={require("./image1.jpg")}
                style={styles.Image}
            />
           
           <TextInput
            placeholder="enter your name"
            placeholderTextColor="white" 
            onChange={text=>setName(text)}
            style={styles.input}            
            />

            <TextInput
            placeholder="enter your e-mail"
            placeholderTextColor="white" 
            onChange={text=>setEmail(text)}
            style={styles.input} 
            keyboardType='email-address' 
                   
            />
            <TextInput
            placeholder="enter your Password"
            placeholderTextColor="white" 
            onChange={text=>setPassword(text)}
            style={styles.input}            
            secureTextEntry={true}           
            />
            <TextInput
            placeholder="enter your Password again"
            placeholderTextColor="white" 
            onChange={text=>setPassword2(text)}
            style={styles.input}            
            secureTextEntry={true}           
            />
            

          
                

            <TouchableOpacity onPress={signUp}>
                <Text style={styles.text2}>
                    CREATE ACCOUNT
                </Text>              
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Text style={styles.text3}>
                    Cancel
                </Text>              
            </TouchableOpacity>
            

            
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    container: {
        // height: Dimensions.get('window').height*1,
        flex:1,
        // backgroundColor:'black',
        
        
        
    },
      input: {
        
        width:Dimensions.get('window').width*0.6 ,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#0f0',
        margin:10,
        color:'white',
        
        
    },
    // container: {
    //     flex: 1,
    //     flexDirection:'column',
    //     borderWidth: 1,
    //     padding: 10,
    //     margin: 5,
    //     borderRadius: 10,
    //     borderColor: '#0f0',
    //     margin:10,
    // },
    text0: {
        color:'white',
        fontSize:40,
        fontFamily:'sans-serif-thin',
        textAlign:'center',
        padding:5,
        letterSpacing:6,
        // textDecorationStyle:'double',
        textShadowColor:'red',
        textShadowRadius:30,

        
        
    },
    Image: {
        
        
        position:'absolute',
        width:Dimensions.get('window').width*1 ,
        height:Dimensions.get('window').height*1 ,
               
        
    },
    text1: {
        color:'#eef',
        fontSize:18,
        fontFamily:'sans-serif-thin',
        textAlign:'center',
        fontWeight:'bold',
        padding:10,
        letterSpacing:2,
        
        // textDecorationStyle:'double',
        // textShadowColor:'blue',
        // textShadowRadius:30,
        marginTop:250,

        
        
    },
    
    text2: {
        color:'#123',
        fontSize:20,
        backgroundColor:'white',
        width:300,
        padding:10,
        borderRadius:20,
        letterSpacing:6,
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'center',
        marginTop:90,
        textShadowColor:'blue',
        textShadowRadius:30,
        borderColor:'rgba(0,0,255,0.6)',
        borderWidth:1,
        
    },
    text3: {
        color:'white',
        fontSize:20,
        backgroundColor:'rgba(0,0,0,0.6)',
        width:300,
        padding:10,
        borderRadius:20,
        letterSpacing:6,
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'center',
        marginTop:30,
        
       
        borderColor:'rgba(0,0,255,0.6)',
        borderWidth:1,
        
    },
   
})