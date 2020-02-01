import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

/* Se crea una funcion de javascript porque es un componente */
function Header(props) {
    return (
        // Al ser un componente reutilizable, escribimos aquí el código que va a llevar en la interfaz
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                source={require('../../../assets/logo.png')}
                style={styles.logo}/>
                <View style={styles.hijo}>
                    {/* permite que se muestren el contenido que se haya indicado dentro de <Header></Header> en el App.js o en los demás componentes en los que se use este componente */}
                    {props.children}
                </View>
                </View>

            </SafeAreaView>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10, // Mete padding arriba y abajo
        paddingHorizontal: 10, // Mete padding a la izquierda y a la derecha
        flexDirection: 'row', // Las apps utilizan flexBox, y por defecto van con una orientación en columnas
    },
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain' // Mantiene la relación original de la imagen,
    },
    hijo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default Header;