import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TasksInProgress = (props) => {
    return(
        <TouchableOpacity   
         style={styles.item}
         onPress={()=>console.log(props)}>
        <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
            backgroundColor: '#FFF',
            padding: 15,
            justifyContent: 'space-between',
            marginBottom: 10,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center'
    },
})

export default TasksInProgress;