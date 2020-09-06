import React from 'react';
import './webIndex.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import checkinBackground1 from '../../../../asset/img/checkinBackground1.png';
import housekey from '../../../../asset/img/key.png';
const topbackground1 = window.location.origin+'/public/headImage/topbackground1.jpg';
const image1 = window.location.origin+'/public/headImage/image1.png';
const image2 = window.location.origin+'/public/headImage/image2.png';
const image3 = window.location.origin+'/public/headImage/image3.png';
const image4 = window.location.origin+'/public/headImage/image4.png';
const image5 = window.location.origin+'/public/headImage/image5.png';
const image6 = window.location.origin+'/public/headImage/image6.png';
const image7 = window.location.origin+'/public/headImage/image7.png';
class WebIndex extends React.Component{
	constructor(props) {
        super(props);
		this.state = {}
    }
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return(
			<div className="serviceInhouse">
				<FrontHeader /> 
              	<div style={{width:'100%',height:'14px',background:'#FFF'}}></div>
				<div className="webCon" >
					<div className="topbackground1" style={{width:'100%',height:'44vw',background:"url("+topbackground1+") no-repeat center",backgroundSize:'100%'}}>
						<div><img style={{width:'43.7vw',height:'6.8vw',margin:'8.9vw 0 0 9.6vw'}} src={image1} /> </div>
						<div style={{position:'relative',width:'29.4vw',marginLeft:'9.6vw'}}>
							<img style={{width:'20.94vw',height:'5.104vw',margin:'2.29vw 0 0 0'}} src={image2} />
							<img style={{width:'14.43vw',height:'1.51vw',position:'absolute',left:'5.4vw',top:'4.2vw'}} src={image3} />
							<img style={{width:'4.84rem',height:'5.73rem',position:'absolute',left:'17vw',top:'6vw'}} src={image4} />
							
						</div>
						<img style={{width:'33.5vw',height:'3.125vw',margin:'4.48vw 0 0 9.6vw',float:'left'}} src={image5} />
					
						<img style={{width:'11.8vw',height:'2.5vw',margin:'8.48vw 0 0 23.5vw',float:'left'}} src={image6} />
						<img style={{width:'19.79vw',height:'1.82vw',margin:'1.48vw 0 0 61.5vw'}} src={image7} />
					</div>
					<div className="background2" style={{width:'100%',height:'46.6vw',background:'#fcf8fe',position:'relative'}}>
					</div>
				</div>
				<Foot />
			</div>
		)
	}
}

export { WebIndex as default};