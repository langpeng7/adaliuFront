import React from 'react';
import './managerPage.css';
import axios from 'axios';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import TextField from '@material-ui/core/TextField';
class ManagePage extends React.Component{
	constructor(props) {
        super(props);
		this.state = {username:"",password:""}
    }
	componentDidMount(){


	}
	componentWillUnmount(){

	}
	inSystem(){

	}
	render(){
		return(
			<div className="serviceInhouse">
				<FrontHeader /> 
				<div className="managerPageCon">
					1111111111111111111111111111111
					
				</div>
				<Foot />
			</div>
		)
	}
}

export { ManagePage as default};