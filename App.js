import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

import axios  from 'axios';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      peoples:[]
    };
  }
   
  componentDidMount(){
     //requisição assincrona
       /*Promise*/
       axios
        .get('https://randomuser.me/api/?nat=br&results=5')
        .then(response=>{   
            const { results } = response.data;
            //para atualizar um estado se usa o this.setState
            this.setState({
              peoples: results
            });
         }) 
  }
  render(){
    return (
      <View >
          <Header title="Guia Médico"/>
          <PeopleList peoples= { this.state.peoples } />
      </View>
    );
  }
}