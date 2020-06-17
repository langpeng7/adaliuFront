import React , { useState ,createContext,useEffect }from 'react';
import './vistorDetail.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import VisitorInfo  from '../../../../comment/visitorInfo/visitorInfo';
import Format  from '../../../../common/format';
import myContent  from '../../../../common/createContext';
import axios from 'axios';

export default function VisitorDetail() {

  const [ detail , setDetail ] = useState();
  useEffect(() => {	
  axios.get('/api/getVisitorDetail',{
    params: {
        visitorId: Format.getQueryVariable("visitorId")
    }
  })
  .then(function (response) {
      setDetail(response.data.data.data[0].code)
 
  })
  .catch(function (error) {
    console.log(error);
  })
}, []);
  return(
    <div className="">
      <FrontHeader />
           <myContent.Provider value={detail}> 
            <VisitorInfo />
           </myContent.Provider> 
 
      <Foot />
    </div>
  )


}
