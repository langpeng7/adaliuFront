let dateFormat = (data) => {
 
    var y = data.getFullYear();  
    var m = data.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = data.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    return y + '-' + m + '-' + d;  
}
let  getQueryVariable =(variable) =>
{

    var query=  window.location.hash.substring(1)
       var queryDo = query.substring(query.indexOf('?')+1);
       var vars = queryDo.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return("");
}

const isPc =()=> {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
module.exports = {
    dateFormat,
    getQueryVariable,
    isPc
}