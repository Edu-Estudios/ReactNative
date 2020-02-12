import React, { Component } from 'react';
import {
    FlatList /* Sirve para generar listas */,
    Text
} from 'react-native'

import SuggestionListLayout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator'
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        list: state.suggestionList
    }
}

/* Se crea una clase de javascript porque es un container */
class SuggestionList extends Component {
    /* Función de flecha Javascript en la que no recibe parámetros y devuelve el componente Empty con un texto */
    renderEmpty = () => <Empty text="No hay sugerencias"/>
    itemSeparator = () => <Separator />
    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        })
    }
    renderItem = ({item}) => {
        return (
            /* Se le envían al componente Suggestion todos los parámetros de entrada de la función (...item) */
            <Suggestion {...item} onPress={() => {this.viewMovie(item)}}/>
        )
    }
    keyExtractor = (item) => item.id.toString()
    render() {
        
        return (
            <SuggestionListLayout title="Recomendado para ti">
                {/* Lo que aparece a partir de aquí son los props.children de  SuggestionListLayout*/}
                <FlatList
                    /* Sirve para darle a cada elemento de la lista una Key */
                    keyExtractor={this.keyExtractor}
                    /* Sirve para coger la variable o constante que almacena los elementos de la lista */
                    data={this.props.list}
                    /* Sirve para indicar lo que se va a mostrar cuando el array de la lista esté vacío */
                    ListEmptyComponent={this.renderEmpty}
                    /* Sirve para crear un separador entre cada elemento de la lista */
                    ItemSeparatorComponent={this.itemSeparator}
                    /* Sirve para ir mostrando los elementos de la lista, en orden gracias al campo 'key' */
                    renderItem={this.renderItem}/>
            </SuggestionListLayout>
        )
    }
}

export default connect(mapStateToProps)(SuggestionList);