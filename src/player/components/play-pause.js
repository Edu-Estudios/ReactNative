import React from 'react'

import {
    Text,
    StyleSheet,
    // Estos 3 componentes sirven para detectar gestos con el dedo en la pantalla
    TouchableHighlight /*Permite realizar una acción mientras se tenga el dedo sobre el elemento de la pantalla */,
    TouchableOpacity /*Hace como un destello cuando se pulsa sobre el elemento en la pantalla*/,
    TouchableWithoutFeedback /* */
} from 'react-native'

function PlayPause(props) {
    return (
        /* El 'onPress' permite indicar la acción que se va a realizar al presionar en la pantalla sobre este elemento */
        /* El 'underlayColor' permite indicar el color al pulsar sobre el elemento */
        /* El 'hitSlop' permite darle un margen al elemento para que al presionar en ese margen siga actuando el elemento */
        <TouchableHighlight onPress={props.onPress} style={styles.container} underlayColor="red" hitSlop={{left:5, top:5, bottom:5, right:5}}>
            {
                props.paused ? <Text style={styles.button}>PLAY</Text> : <Text style={styles.button}>PAUSE</Text>
            }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
})

export default PlayPause