import React from 'react';
import './webLogin.css';
import axios from 'axios';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import TextField from '@material-ui/core/TextField';
class WebLogin extends React.Component{
	constructor(props) {
        super(props);
		this.state = {username:"",password:""}
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

	inSystem(){
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
			console.log(response);
		  })
	}
	render(){


		return(
			<div className="serviceInhouse">
				<FrontHeader /> 
				<div className="loginService">
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