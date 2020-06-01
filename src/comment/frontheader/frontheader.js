import React from 'react';
import './frontheader.css';
import routes from '../../router-config/routes';
import {Link} from 'react-router-dom';
class FrontHeader extends React.Component{
	componentWillMount(){
   
    }
	render(){
        return(
            <div className="headerCon">
                    <div className="logoCon">logo</div>
                    <Link to= {routes.webLoginPath} >
                        <div className="loginCon">登陆</div>
                    </Link>
            </div>
        );
    }
}
export { FrontHeader as default};  