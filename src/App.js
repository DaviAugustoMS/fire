import React, { Component } from 'react';
import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyDoBI-CiQqK7jZ350rMM2KfDLMqzy5thyA",
  authDomain: "react-fire-aa9ec.firebaseapp.com",
  databaseURL: "https://react-fire-aa9ec.firebaseio.com",
  projectId: "react-fire-aa9ec",
  storageBucket: "react-fire-aa9ec.appspot.com",
  messagingSenderId: "827806798151",
  appId: "1:827806798151:web:99851289061c6c3fb03c62",
  measurementId: "G-9YEQLZTYXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      token: 'Carregando...',
      nome: '',
      idade: ''
    }

    
    
   /* firebase.database().ref('token').on('value', (snapshot) =>{
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });*/

    firebase.database().ref('token').once('value')
    .then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    })
    firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    })
  
  };

  
  render(){
    const { token, nome, idade } = this.state;
    return(
      <div>
        <h1>Token: {token} </h1>
        <h1>Nome: {nome} </h1>
        <h1>Idade: {idade} </h1>
      </div>
    );
  }
}