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
      nomeInput: '',
      idadeInput: '',
      nome: '',
      idade: '',
    }

    this.cadastrar = this.cadastrar.bind(this);

    
   /* firebase.database().ref('token').on('value', (snapshot) =>{
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });*/

    firebase.database().ref('token').on('value', (snapshot) => {
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

  cadastrar(e){
    // Inserindo un novo dado!
    //firebase.database().ref('token').set(this.state.tokenInput);
    //firebase.database().ref('usuarios').child(1).child('nome').set(this.state.nomeInput);
    //firebase.database().ref('usuarios').child(1).child('idade').set(this.state.idadeInput);
    //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.cargoInput);

    // Excluindo dados
    //firebase.database().ref('usuarios').child(1).child('cargo').remove();
    let usuarios = firebase.database().ref('usuarios');
    let chave = usuarios.push().key;

    usuarios.child(chave).set({
      nome: this.state.nomeInput,
      idade: this.state.idadeInput
    });

    e.preventDefault();
  }
  render(){
    const { token, nome, idade } = this.state;
    return(

      
      <div>
        <form onSubmit={this.cadastrar} >
        <label>Nome:</label> <br/>
        <input type="text" value={this.state.nomeInput}
                onChange={(e)=> this.setState({nomeInput: e.target.value})} placeholder="Digite seu nome" /> <br/>
        <label>Idade:</label> <br/>
        <input type="text" value={this.state.idadeInput}
                onChange={(e)=> this.setState({idadeInput: e.target.value})} placeholder="Digite sua idade"/> <br/> <br/>
        <button type="submit">Cadastrar</button>
      </form>

        <h1>Token: {token} </h1>
        <h1>Nome: {nome} </h1>
        <h1>Idade: {idade} </h1>
      </div>
    );
  }
}