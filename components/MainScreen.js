import { signOut } from 'firebase/auth';
import React, {useState} from 'react';
import { Alert, ScrollView, TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import { auth } from '../firebase';

import Project from './Project';



const MainScreen = ({ navigation }) => {
    
    
    const [project, setProject]=useState();
    const [projectItems, setProjectItems]=useState(['First project', 'Second project']);
    const logout = async () => {
        await signOut(auth);
        navigation.navigate('Login')
    }
    

    const handleAddProject =()=>{
        console.log(project);
        Keyboard.dismiss();
        if (projectItems.length <= 7){
            setProjectItems([...projectItems, project])
            setProject(null);
        }else{
            Alert.alert('Maximum amount of Projects', 'You cannot add more')
            setProject(null);
        }
        
        
    }

    
return(
    <View style={styles.container}>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.projectsWrapper}>
            <View style={styles.headerWrapper}>
            <Text style={styles.sectionTitle}>My Projects</Text>
            <TouchableOpacity onPress={logout} style={styles.logOut}>
                <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.items}>
                {
            projectItems.map((item, index) => {
              return (
                
                  <Project text={item} index={index}/> 
                
              )
            })
          }
            </View>
        </View>
        </ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" }
        style={styles.writeNewProjectWrapper}
        keyboardVerticalOffset={75}>
            <TextInput style={styles.input} placeholder='Name of a new Project' value={project} onChangeText={text=>setProject(text)}/>        
        <TouchableOpacity onPress={()=>handleAddProject()}>
            <View style={styles.addWraper}>
            <Text style={styles.PlusFont}>+</Text>
            </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>

);
}
const styles = StyleSheet.create({
    headerWrapper:{
        flexDirection: 'row',
        flexGrow: 1,
    },
    logOut: {
        marginLeft: 89,
        backgroundColor: '#55BCF6',
        opacity: 1,
        width: '35%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    logOutText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 16

    },
    container: {
        flex: 1,
        backgroundColor: '#e4eaf5',
    },
    projectsWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#e4eaf5'
        
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 20,
    },
    writeNewProjectWrapper:{
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    input: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWraper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    PlusFont: {
        fontSize: 24,
        fontWeight: 'bold'
    },
});

export default MainScreen;