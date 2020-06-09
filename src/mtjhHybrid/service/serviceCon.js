import React from 'react';
import './serviceCon.css';
import axios from 'axios';
import FrontHeader from '../../comment/frontheader/frontheader';
import Foot  from '../../comment/frontfoot/frontfoot';
import 	InputInformation from '../../comment/inputInformation/inputInformation';
class ServiceCon extends React.Component{
	constructor(props) {
        super(props);
		this.state = {trainList:[],trainListFive:[],trainsListRendering:false}
    }
	componentDidMount(){


	}
	componentWillUnmount(){

	}



	render(){
		return(
			<div className="serviceInhouse">
				<FrontHeader />
				<Foot />
			</div>
		)
	}
}

export { ServiceCon as default};