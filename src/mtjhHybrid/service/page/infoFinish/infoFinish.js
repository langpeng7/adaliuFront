import React from 'react';
import axios from 'axios';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
class InfoFinish extends React.Component{
	constructor(props) {
        super(props);
		this.state = {}
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
				<div className="finished" >
                    欢迎光临
				</div>
				<Foot />
			</div>
		)
	}
}

export { InfoFinish as default};