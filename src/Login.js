import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';


const Login = (props) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 400 }}>

                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>
                    Login
                </Text>
                <View style={{
                    backgroundColor: "white",
                    height: 700,
                    width: 460,
                    borderTopLeftRadius: 130,
                    paddingTop: 100,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 40,
                        color: darkGreen,
                        fontWeight: "bold"
                    }}
                    >Welcome Babe</Text>
                    <Text style={{
                        color: "gery",
                        fontSize: 19,
                        fontWeight: "bold",
                        marginBottom: 20,
                    }}>Login to Your Account</Text>

                    <Field placeholder="Email / Username" keyboardType={"email-address"} />
                    <Field placeholder="Password" secureTextEntry={true} />

                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom:200 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={()=>alert("Logged In")} />
                    <View style={{display:'flex',flexDirection:'row',justifyContent:"center"}}>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>Don't have an account ?</Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")}>
                            <Text style={{color: darkGreen, fontWeight:'bold', fontSize:16}}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};


const styles = StyleSheet.create({

});


export default Login;
