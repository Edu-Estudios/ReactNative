import React, {Component} from 'react';

import {
    Text
} from 'react-native';

import {connect} from 'react-redux';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import API from '../utils/api';
import Movie from './screens/containers/movie';


class AppLayout extends Component {
    /* componenteDidMount() es necesario para poder recoger los datos de una petición API */
    async componentDidMount() {
        const categoryList = await API.getMovies()
        /* Envia los datos al reducer */
        this.props.dispatch({
            type: 'SET_SEGGESTION_LIST',
            payload: {
                suggestionList
            }
        })

        const suggestionList = await API.getSuggestion(10)
        this.props.dispatch({
        type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        })

    }
    render() {
        if (this.props.selectedMovie) {
            return (
                <Movie />
            )
        }
        return (
            <Home>
                <Header />
                <Text>buscador</Text>
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(AppLayout);