import React, { Component } from 'react';

/* Se crea una clase de javascript porque es un container */
class Home extends Component {
    // Método principal OBLIGATORIO de Reac
    render() {
        // Es necesario para poder mostrar el código que va a tener la Interfaz de este componente
        return this.props.children // Permitirá mostrar el contenido (los hijos) que se añadan al importar este componente en el App.js
    }
}

export default Home; // Obligatorio para poder usar el componente en el App.js