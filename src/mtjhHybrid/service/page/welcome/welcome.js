import React from 'react';
import './welcome.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import 	InputInformation from '../../../../comment/inputInformation/inputInformation';

class Welcome extends React.Component{
	constructor(props) {
        super(props);
		this.state = {trainList:[]}
    }
	componentDidMount(){


	}
	componentWillUnmount(){

	}



	render(){
		return(
			<div className="">
				<FrontHeader />
				 <InputInformation /> 
				<Foot />
			</div>
		)
	}
}

export { Welcome as default};