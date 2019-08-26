import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Flag from './Flag'



export default props => {
    return (
        <View style={styles.container}>
            
            <View style={styles.flagContainer}>

                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                        <Flag bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity 
                onPress={props.onNewGame}>
               <Icon name="plus-circle" size={32} color="#000" />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8FBC8F',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        
        backgroundColor: '#999',
        padding:5,
        paddingBottom:2,
        paddingTop:2
    },
    buttonLabel: {
        fontSize: 20,
        color:'#363636',
        fontWeight: 'bold'
    }
})