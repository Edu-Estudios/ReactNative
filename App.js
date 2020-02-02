import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/player/containers/player'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  /* componenteDidMount() es necesario para poder recoger los datos de una petición API */
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categories = await API.getMovies()
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header>
          {/* Lo que haya aquí dentro es lo que se envía como 'props' (parámetro de entrada del Header.js) */}
          <Text>Mi logo</Text>
        </Header>
        <Player />
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categorías</Text>
        <CategoryList 
        list={this.state.categoryList}/>
        <SuggestionList 
          list={this.state.suggestionList}/>
      </Home>
    );
  }
};

