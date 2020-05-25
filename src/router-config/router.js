import React from "react";

import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import ServiceCon from '../mtjhHybrid/service/serviceCon';



function Basic(e) {
  return (
    <Router >
        <Switch>
          <Route path="/" component={ServiceCon} exact  />
          {/* <Route path="/service/analysisReports"   component={AnalysisReports} /> */}
  
        </Switch>
    </Router>
  );
}


export default Basic;
