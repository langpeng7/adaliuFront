import React from "react";

import {BrowserRouter  as Router,Route,Switch} from 'react-router-dom';
import ServiceCon from '../mtjhHybrid/service/serviceCon';
// import ServiceCon from '../mtjhHybrid/service/serviceCon';
 import WebLogin from '../mtjhHybrid/service/page/webLogin/webLogin';
 import ManagerPage from '../mtjhHybrid/service/page/managerPage/managerPage';
function Basic(e) {
  return (
    <Router >
        <Switch>
        <Route path="/service/webLogin"   component={WebLogin} />
        <Route path="/service/welcome"    component={ServiceCon}   />
        <Route path="/service/managerPage"    component={ManagerPage}   />
  
        </Switch>
    </Router>
  );
}


export default Basic;
