import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

export default props => {
    
        return (
            <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>

                <View style={styles.container}>
                    <Text style={styles.title}>Sobre !</Text>
                    <Text style={styles.p}>Mine e um clone do jogo Mines</Text>
                    <Text style={styles.p}>Foi desenvolvido por DevRangel</Text>
                    <Text style={styles.p}>Versão 1.0</Text>
                    <Text style={styles.p}>Contato:</Text>
                    <Text style={styles.p}>Git Hub: https://github.com/correiarangel</Text>
                    <Text style={styles.p}>Linkdin: https://www.linkedin.com/in/marcos-fabiano-correia-rangel/</Text>
                    <Text style={styles.p}>E-mail: correiarangel@bol.com.br </Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => {} }>
                        <Text style={styles.buttonLabel}>OK</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        </Modal>
        )
    
}
const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    p:{
        fontSize: 28,
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },

})