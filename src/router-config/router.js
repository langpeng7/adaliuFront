import React from "react";

import {HashRouter  as Router,Route,Switch} from 'react-router-dom';
import ServiceCon from '../mtjhHybrid/service/serviceCon';
import Welcome from '../mtjhHybrid/service/page/welcome/welcome';
import WebLogin from '../mtjhHybrid/service/page/webLogin/webLogin';
import ManagerPage from '../mtjhHybrid/service/page/managerPage/managerPage';
import VistorDetail from '../mtjhHybrid/service/page/vistorDetail/vistorDetail';
import WebIndex from '../mtjhHybrid/service/page/webIndex/webIndex';
import InfoFinish from '../mtjhHybrid/service/page/infoFinish/infoFinish';
function Basic(e) {
  return (
    <Router >
        <Switch>
        <Route path="/" exact  component={WebIndex} />
        <Route path="/webIndex"  exact   component={WebIndex} />
        <Route path="/webLogin"  exact   component={WebLogin} />
        <Route path="/welcome"   exact  component={Welcome}   />
        <Route path="/managerPage"    exact component={ManagerPage}   />
        <Route path="/vistorDetail"    exact  component={VistorDetail}   />
        <Route path="/infoFinish"    exact  component={InfoFinish}   />
        </Switch>
    </Router>
  );
}


export default Basic;
