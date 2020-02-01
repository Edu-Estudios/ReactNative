import React, { Component } from 'react';
import {
    FlatList /* Sirve para generar listas */,
    Text
} from 'react-native'

import SuggestionListLayout from '../components/suggestion-list-layout';

/* Se crea una clase de javascript porque es un container */
class SuggestionList extends Component {
    render() {
        const list = [
            {
                title: 'edu',
                key: '1'
            },
            {
                title: 'martin',
                key: '2'
            }
        ]
        return (
            <SuggestionListLayout title="Recomendado para ti">
                {/* Lo que aparece a partir de aquí son los props.children de  SuggestionListLayout*/}
                <FlatList
                    /* Sirve para coger la variable o constante que almacena los elementos de la lista */
                    data={list}
                    /* Sirve para ir mostrando los elementos de la lista, en orden gracias al campo 'key' */
                    renderItem={({item}) => <Text>{item.title}</Text>}/>
            </SuggestionListLayout>
        )
    }
}

export default SuggestionList