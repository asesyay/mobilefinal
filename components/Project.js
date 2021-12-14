import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Project = (props) => {
    const navigation = useNavigation();
    
    
    
    return(
        <TouchableOpacity style={styles.item}
        onPress={()=>navigation.navigate('Project', { props } )}
        >
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
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
        itemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        square: {
            width:15,
            height:15,
            backgroundColor: '#55BCF6',
            borderRadius: 10,
            marginRight: 10,
            opacity: 0.4,
        },
        itemText: {
            maxWidth: '85%',


        },
        circular: {
            width: 12,
            height: 12,
            borderColor: '#55BCf6',
            borderWidth: 2,
            borderRadius: 5,

        },
        

})

export default Project;