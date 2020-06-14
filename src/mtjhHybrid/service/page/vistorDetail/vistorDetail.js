import React from 'react';
import './vistorDetail.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import VisitorInfo  from '../../../../comment/visitorInfo/visitorInfo';
import Format  from '../../../../common/format';
import axios from 'axios';
class Welcome extends React.Component{
	constructor(props) {
        super(props);
		this.state = {}
    }
	componentDidMount(){
        console.log(1111111111111)
        axios.get('/api/getVisitorDetail',{
            params: {
                visitorId: Format.getQueryVariable("visitorId")
            }
          })
        .then(function (response) {
            console.log(response)
  
        })
        .catch(function (error) {
          console.log(error);
        })

	}
	componentWillUnmount(){
   
	}



	render(){
		return(
			<div className="">
				<FrontHeader />
                <VisitorInfo />
				<Foot />
			</div>
		)
	}
}

export { Welcome as default};