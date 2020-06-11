import React, { Component } from 'react';
import Router from './router-config/router';
import intl from 'react-intl-universal';

import jaJP from './asset/json/ja-JP';
import zhCN from './asset/json/zh-CN';
import './App.css';


const SUPPOER_LOCALES = [
  {
    name: '日本語',
    value: 'ja-JP'
  },
  {
    name: '简体中文',
    value: 'zh-CN'
  }
];
const locales = {
  'ja-JP': jaJP,
  'zh-CN': zhCN
};
class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.state)

  // this.state = {oldtime:""}
  }

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
