import React , { useState ,createContext,useEffect }from 'react';
import './visitorEdit.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import VisitorInfoEdit from '../../../../comment/visitorInfoEdit/visitorInfoEdit';
import Format  from '../../../../common/format';
import axios from 'axios';
import myContent  from '../../../../common/createContext';

export default function VisitorEdit() {

	const [ detail , setDetail ] = useState({
	  // address:"",
	  code:"",
	});
	useEffect(() => {	
	axios.get('/api/getVisitorDetail',{
	  params: {
		  visitorId: Format.getQueryVariable("visitorId")
	  }
	})
	.then(function (response) {
	  console.log(response)
		setDetail(response.data.data.data[0])
   
	})
	.catch(function (error) {
	  console.log(error);
	})
  }, []);
	return(
	  <div className="">
		<FrontHeader />
			 <myContent.Provider value={detail}> 
			  	<VisitorInfoEdit />
			 </myContent.Provider> 
		<Foot />
	  </div>
	)
  
  
  }
  