import React, { Component } from 'react';
import firebase from './fireconfig';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
    this.cadastrar = this.cadastrar.bind(this);

  }
  
  cadastrar(e){
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) => {
      if(error.code === 'auth/invalid-email'){
        alert('Email invalido')
      }
      if(error.code === 'auth/weak-password'){
        alert('Senha fraca!')
      } else{
        alert('Codigo de erro:' + error.code)
      }
    })

    e.preventDefault();

  }

  render(){
    return(
      <div>
        <form onSubmit={this.cadastrar}>

          <label>Email:</label> <br/>
          <input type="text" value={this.state.email} 
                 onChange={(e) => this.setState({email: e.target.value})} /> <br/>

          <label>Senha:</label> <br/>
          <input type="text" value={this.state.senha}
                 onChange={(e) => this.setState({senha: e.target.value})} /> <br/> <br/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}