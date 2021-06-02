import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

export default class App extends React.Component {
    renderList() {
          const names = [
            'Steve vai',
            'Jimi Hendrix',
            'Chimbinha',
            'Van Halen'
          ];
      const textElements = names.map(name =>{
        return <Text>{name}</Text>

      })
      return textElements;
    }
  render(){
    return (
      <View >
          <Header title="Guia Médico!"/>
          {this.renderList()}
      </View>
    );
  }
};