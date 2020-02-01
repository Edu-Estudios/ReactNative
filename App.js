import React, { Component } from 'react';
import {
  Text
} from 'react-native';


import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'

type Props = {};
export default class App extends Component<Props> {
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
        <SuggestionList />
      </Home>
    );
  }
};

