import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigation = useNavigation()

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.navigate('Main')
            }
        })

        return unsubscribe
    }, [])

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)
        }catch (error){
            console.log(error.message)
        }
        
    };
    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user)
        }catch (error){
            console.log(error.message)
        }

    }
    
    
    
    return (
        <KeyboardAvoidingView style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={75}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' 
                value={email} onChangeText={text => setEmail(text)} 
                style={styles.input}></TextInput>
                <TextInput placeholder='Password' 
                value={password} onChangeText={text => setPassword(text)} 
                style={styles.input}
                secureTextEntry>
                
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={register} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    inputContainer:{
        width: '80%'

    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
        
    },
    button:{
        backgroundColor: '#6c9af0',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#6c9af0',
        borderWidth: 3

        
    },
    buttonText:{
        color: 'white',
        fontWeight: '800',
        fontSize: 16,

    },
    buttonOutlineText:{
        color: '#6c9af0',
        fontWeight: '800',
        fontSize: 16,
    },
})
