import React from 'react';
import './frontheader.css';

class FrontHeader extends React.Component{
	componentWillMount(){
   
    }
	render(){
        return(
            <div className="headerCon">
                    <div className="logoCon">logo</div>
                    <div className="loginCon">登陆</div>
            </div>
        );
    }
}
export { FrontHeader as default};  