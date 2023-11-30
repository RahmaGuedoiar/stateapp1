
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  // la création d'un  champ qui affiche l'intervalle de temps du App.js  à l'aide du cycle de vie du composant.
  // et l'astuce : setInterval.

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  // création du state contient un objet jons et un booléen show
  state={
    Person:{
      fullName: 'Guedoiar Rahma',
      bio: ' html,css,javascript, react ',
      imgSrc: './me.jpg',
     profession: 'Full stack developer',
    },
    shows:false,
     time:0,
  }


 
  render() {
    return (
      <div className='con'>
        <div>
        {/* lorsque show est vrai le profil de la personne apparaîtra */}
          {(this.state.shows==true)?
         <div className='me'>
          
          <img src={this.state.Person.imgSrc}style={{width:'400px',height:'400px'}}/>
          <h1>{this.state.Person.fullName}</h1>
          <h2 id='stack'>{this.state.Person.profession}</h2>
          <h2 id='bi'>{this.state.Person.bio}</h2> 
          </div>
          :
         null }
        </div>
        {/* l'ajaute d'un bouton , la click sue ce bouton cange le show du false  a vrai et  vice versa */}
          <button onClick={()=>{(this.state.shows==false)? this.setState({shows:true}) :this.setState({shows:false});console.log(this.state.shows)}}>shows</button> 
          <p>Time interval since mount: {this.state.time} seconds</p>
        
         
      </div>

    )
  }
}

