import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput,Dimensions , FlatList, TouchableOpacity, Image,StyleSheet} from 'react-native';
import  Video from "react-native-video";
import auth from '@react-native-firebase/auth';


const LogIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                // alert(response)
            })
            .catch((error) => {
                // console.log(error.code);
                alert(error)
            })
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
            <Image
                source={require("./images.png")}
                style={styles.Image}
            />
           
                

            <TouchableOpacity>
                <Text style={styles.text2}>
                    CREATE ACCOUNT
                </Text>              
            </TouchableOpacity>
            <TouchableOpacity onPress={signIn}>
                <Text style={styles.text3}>
                    LOGIN
                </Text>              
            </TouchableOpacity>

            <Text style={styles.text1}>
            İki niyetim vardır ki insanların çoğu onların kıymetini hakkıyla takdir edemezler. Onlardan biri sıhhat diğeri de boş vakittir.
            </Text>

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
    Image: {
        width:40,
        height:40,
        alignSelf:'center',
        marginBottom:35,
               
        
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
        marginVertical:30,
        textShadowColor:'blue',
        textShadowRadius:30,
        borderColor:'rgba(0,0,255,0.6)',
        borderWidth:1,
        


        
        
        
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
        // marginVertical:30,
        
    }
})