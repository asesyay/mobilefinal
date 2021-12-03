import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Project from './Project';

const MainScreen = () => {
    
return(
    <View style={styles.projectsWrapper}>
        <Text style={styles.sectionTitle}>My Projects</Text>
        <View style={styles.items}>
            <Project number={1}></Project>
            <Project number={2}></Project>
            <Project number={3}></Project>
            <Project number={4}></Project>
            {/*<Tasks/>*/}
        </View>
    </View>
);
}
const styles = StyleSheet.create({
    projectsWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    items: {},
});

export default MainScreen;