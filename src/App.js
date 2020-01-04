import React, { Component } from 'react';
import firebase from './fireconfig';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);


    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        alert('Usuario logado com susseso!');
      }
    })

  }
  
  logar(e){
    console.log(firebase)
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {
      if(error.code === 'auth/wrong-password'){
        alert('Senha invalido')
      }else{
        alert('Codigo de erro:' + error.code)
      }
    })

    e.preventDefault();

  }

  sair(){
    firebase.auth().signOut();
    alert('Delogadocom sucesso!')
  }


  render(){
    return(
      <div>
        <h1>Entrar</h1>
        <form onSubmit={this.logar}>

          <label>Email:</label> <br/>
          <input type="text" value={this.state.email} 
                 onChange={(e) => this.setState({email: e.target.value})} /> <br/>

          <label>Senha:</label> <br/>
          <input type="password" value={this.state.senha} 
                 onChange={(e) => this.setState({senha: e.target.value})} /> <br/> <br/>
          <button type="submit">Entrar</button>

        </form>
        <button onClick={this.sair}>Sair</button>
      </div>
    );
  }
}