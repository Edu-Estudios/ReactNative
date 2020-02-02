import React, { Component } from 'react';
import {
  Text
} from 'react-native';


import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: []
  }
  /* componenteDidMount() es necesario para poder recoger los datos de una petición API */
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    this.setState({
      suggestionList: movies,
    })
  }
  render() {
    return (
      <Home>
        <Header>
          {/* Lo que haya aquí dentro es lo que se envía como 'props' (parámetro de entrada del Header.js) */}
          <Text>Mi logo</Text>
        </Header>
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList 
          list={this.state.suggestionList}/>
      </Home>
    );
  }
};

