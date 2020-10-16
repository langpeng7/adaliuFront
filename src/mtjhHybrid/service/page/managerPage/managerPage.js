import React from 'react';
import './managerPage.css';
import axios from 'axios';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import ManagerControl  from '../../../../comment/managerControl/managerControl';
import TextField from '@material-ui/core/TextField';
import intl from 'react-intl-universal';
import Format  from '../../../../common/format';
class ManagePage extends React.Component{
	constructor(props) {
        super(props);
		this.state = {}
	
    }
	componentDidMount(){
		if(Format.getCookie('isLogin')=='0'){
			window.location.href="/#/webIndex/"
		}
	}
	componentWillUnmount(){

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