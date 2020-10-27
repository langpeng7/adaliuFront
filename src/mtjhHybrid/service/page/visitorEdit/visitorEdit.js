import React , { useState ,createContext,useEffect }from 'react';
import './visitorEdit.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import VisitorInfoEdit  from '../../../../comment/visitorInfoEdit/visitorInfoEdit';
import Format  from '../../../../common/format';
import myContent  from '../../../../common/createContext';
import axios from 'axios';

export default function VisitorDetail() {

  const [ detail , setDetail ] = useState({
    // address:"",
    code:"",
    // constructionId:"",
    // id:"",
    // job:"",
    // name:"",
    // pic1RandomName:"",
    // pic2RandomName:"",
    // signPicRandomName:"",
    // visitorNum:"",
    // visitorTime:""

  });
  useEffect(() => {	
  axios.get('/api/getVisitorDetail',{
    params: {
        visitorId: Format.getQueryVariable("visitorId")
    }
  })
  .then(function (response) {
  
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
