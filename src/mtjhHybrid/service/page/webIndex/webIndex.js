import React from 'react';
import './webIndex.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
class WebIndex extends React.Component{
	constructor(props) {
        super(props);
		this.state = {username:"",password:""}
    }
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return(
			<div className="serviceInhouse">
				<FrontHeader /> 
				<div className="loginService">
			
                    
					
				</div>
				<Foot />
			</div>
		)
	}
}

export { WebIndex as default};