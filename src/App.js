import React, { Component } from 'react';
import Main from '../src/Main/Main';
import Nav from '../src/Nav/Nav';
import Footer from '../src/Footer/Footer';
import Position from '../src/Position/Position';

class App extends Component  {
  render(){
    return(
      <div className ="App_Column">
        <Nav/>
        <Main />
        <Position />
        <Footer />
      </div>
    )
  }
}

export default App;
