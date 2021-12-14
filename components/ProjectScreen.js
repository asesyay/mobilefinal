import React, {useState, useEffect} from 'react';
import { Keyboard, TouchableOpacity, StyleSheet, Button, Text, View, KeyboardAvoidingView, TextInput} from 'react-native';
import Project from './Project';
import TasksInProgress from './TasksInProgress';
import FinishedTasks from './FinishedTasks';
import {collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { db } from '../firebase';

   

const ProjectScreen=({ route, navigation })=>{
    const [k, setK] = useState(0);
    const GetData = async () => {
    const projectCol = collection(db, 'project'+taskID);
    const projectSnapshot = await getDocs(projectCol);
    const projectList = projectSnapshot.docs.map(doc => doc.data());

        console.log(projectList);

    }

    
    const[taskID, setTaskID]=useState(route.params.props.index);
    
    const[task, setTask]=useState('');
    const[taskArray, setTaskArray]=useState([]);
    

    useEffect(()=>{
        GetData()

    });
    
    const handleAddTask = async ()=>{
        Keyboard.dismiss();
        setK(k+1);                  
        console.log(taskArray);
        await setDoc(doc(db, 'project'+taskID, 'Id0000'+k), {
        task: task,
        });
        
        setTask(null);
        
        
        
    }

    

    return(
        <View style={styles.container}>

            <View style={styles.tasksWraper}>
                <Text style={styles.textTitle}>{route.params.props.text}</Text>
                <View style={styles.items}>
                    {
                        taskArray.map((item)=>{
                            return <TasksInProgress text={item}></TasksInProgress>
                        })
                    }

                </View>
                
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" }
                style={styles.writeNewTaskWrapper}
                keyboardVerticalOffset={75}>
                <TextInput style={styles.input} placeholder='Name of a new Task' value={task} onChangeText={text=>setTask(text)}/>        
                <TouchableOpacity onPress={handleAddTask}>
                    <View style={styles.addWraper}>
                        <Text style={styles.PlusFont}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#e4eaf5',
    },
    tasksWraper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#e4eaf5'
    },
    writeNewTaskWrapper: {
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


})

export default ProjectScreen;