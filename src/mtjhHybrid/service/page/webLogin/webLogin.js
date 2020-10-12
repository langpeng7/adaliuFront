import React from 'react';
import './webLogin.css';
import axios from 'axios';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import TextField from '@material-ui/core/TextField';
class WebLogin extends React.Component{
	constructor(props) {
        super(props);
		this.state = {username:"",password:"",loginType:true}
    }
	componentDidMount(){


	}
	componentWillUnmount(){

	}
	setUserName(data) {
		this.setState({username: data.target.value}, () => {
		})
	}
	setPassword(data){
		this.setState({password: data.target.value}, () => {
		})
	}
    setCookie(name, value, day) {
       if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
		let expires = day * 24 * 60 * 60 * 1000;
		let date = new Date(+new Date()+expires);
		document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
		}else{
			document.cookie = name + "=" + escape(value);
		}
	};
	getCookie (name) {
		let arr;
		let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
	};
    delCookie (name) {
       this.setCookie(name, ' ', -1);
    };
	inSystem(){
		let that = this
		axios({
			method: 'post',
			url: '/api/user/login',
			headers: {
			  'Content-Type':'application/json'
			},          
			data: JSON.stringify({
				username:this.state.username,
				password:this.state.password
			})
		  })
		  .then(function (response) {
			if(response.data.errno==0){
				window.location.href="/service/#/managerPage/"
			}else{
				alert('登陆失败')
			}
		  })
	}
	render(){


		return(
			<div className="serviceInhouse">
				<FrontHeader /> 
				<div className="loginService" >
					<div className="loginLeftPicCon">
						{/* <img style={{"margin":"100px 0 0 150px"}} src={require("../../../../asset/img/fujiyama.jpg")} alt="" /> */}
					</div>
					<div className="loginRightCon">
						<div className = "infoCon">
							<TextField className="usernameText iptText" helperText="请输入账号"   value={this.username} onChange={(e)=>this.setUserName(e)}/>
						</div>
						<div className = "infoCon">
							<TextField className="passwordText iptText" helperText="请输入密码" value={this.password} onChange={(e)=>this.setPassword(e)}/>
						</div>
						<div className="registerBtnCon" onClick={this.inSystem.bind(this)}>
							登录
						</div>
	
					</div>
					
				</div>
				<Foot />
			</div>
		)
	}
}

export { WebLogin as default};