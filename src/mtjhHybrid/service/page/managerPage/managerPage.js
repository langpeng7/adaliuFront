import React from 'react';
import './managerPage.css';
import axios from 'axios';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import ManagerControl  from '../../../../comment/managerControl/managerControl';
import TextField from '@material-ui/core/TextField';
class ManagePage extends React.Component{
	constructor(props) {
        super(props);
		this.state = {customer:[],password:""}
    }
	componentDidMount(){
		let that = this
		axios({
			method: 'get',
			url: '/api/list',
		  })
		  .then(function (response) {
		
			that.setState({customer:response.data.data})
		  })
		
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
					<div className="leftCon">
					<ManagerControl />
					</div>
				</div>
				<Foot />
			</div>
		)
	}
}

export { ManagePage as default};