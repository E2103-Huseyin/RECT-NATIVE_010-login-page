import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput,Dimensions , FlatList, TouchableOpacity, Image,StyleSheet, Alert} from 'react-native';
import  Video from "react-native-video";
import auth from '@react-native-firebase/auth';


const LogIn = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function login(){
        try{
            if (email ===' ' || password=== ''){
                Alert.alert('UYARI,', 'kontrol et')
            }else{
                await auth().signInWithEmailAndPassword(email,password);
                alert('ok')            
            }
            
        }catch(error){
             Alert.alert('uyarı', resolveAuthError(error.code));  
        }

    }
    


    return (
        <SafeAreaView>
            
            <Video
                source={require("./video6.mp4")}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
            />

            <Text style={styles.text0}>
                healthy nutrition
            </Text>
            
            <TextInput
            placeholder="enter your e-mail"
            placeholderTextColor="white" 
            onChange={text=>setEmail(text)}
            style={styles.input}            
            />
            <TextInput
            placeholder="enter your Password"
            placeholderTextColor="white" 
            onChange={text=>setPassword(text)}
            style={styles.input}            
            />
                

            
            <TouchableOpacity onPress={login}>
                <Text style={styles.text3}>
                    LOGIN
                </Text>              
            </TouchableOpacity>

            

        </SafeAreaView>
    );
}

export default LogIn;

const styles = StyleSheet.create({
    backgroundVideo: {
        height: Dimensions.get('window').height*1,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0,
        
        // zIndex:6,
      },
    container: {
        flex: 1,
        flexDirection:'column',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#0f0',
        margin:10,
    },
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
    
    input: {
        borderColor:'#0f0',
        borderRadius:30,
        borderStyle:'solid',
        borderWidth:2,
        width:300,
        padding:8,
        margin:10,
        color:'white',

    },
    
   
    text3: {
        color:'white',
        fontSize:20,
        borderColor:'white',
        borderRadius:30,
        borderStyle:'solid',
        borderWidth:2,
        width:300,
        padding:10,
        // fontFamily:'arial',
        
        letterSpacing:6,
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'center',
        marginVertical:30,
        
    }
})