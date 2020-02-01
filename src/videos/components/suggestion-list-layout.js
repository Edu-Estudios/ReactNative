import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

/* Se crea una clase de javascript porque es un container */
function SuggestionListLayout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1 /* Hace que ocupe todo el espacio disponible (como fxFill en HTML) */,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8
    }
})

export default SuggestionListLayout