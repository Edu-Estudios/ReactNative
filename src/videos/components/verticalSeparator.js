import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

function VerticalSeparator(props) {
    return (
        <View style={[
            styles.separator,
            {
                /* Se quiere que cada separador pueda tener un color distinto. Aquí se dice que si en las propiedades se recibe el color entonces pone ese color, sino pone #eaeaea */
                borderTopColor: (props.color) ? props.color : '#eaeaea'
            }
            ]}>
        </View>

    )
}

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    }
})

export default VerticalSeparator