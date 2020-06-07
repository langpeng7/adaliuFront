import React, { Component } from 'react';
import Router from './router-config/router';
import './App.css';
class App extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {oldtime:""}
  // }
  // testpreventclick(msc){
  //   if(this.state.oldtime==''){
  //     this.state.oldtime = new Date().getTime();
  //     return true;
  //   }else{
  //     const newtime = new Date().getTime();
  //     if(newtime - this.state.oldtime > 1000){
  //       this.state.oldtime = new Date().getTime();
  //       return true;
  //     }else{
  //       return false;
  //     }
  //   }
  // }
  
  render() {
    return (
      <div className="App clearfix">
        <Router   />
      </div>
    );
  }
}

export default App;
