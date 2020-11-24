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
  const getCookie =(name)=> {
    let arr;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)){
      return unescape(arr[2]);
    }else{
      return null;
    }
  };
const getBase64Image = (img) => {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  var dataURL = canvas.toDataURL("image/png");  // 可选其他值 image/jpeg
  return dataURL
}
const startTrans = (src) => {
  return new Promise((resolve,reject)=>{
    let image =  new Image();
    var base64Data
    image.src = src + '?v=' + Math.random(); // 处理缓存
    image.crossOrigin = "*";  // 支持跨域图片
    image.onload = function(){
      base64Data = getBase64Image(image);
      if(base64Data){
        resolve(base64Data)
      }
    }
    
  })
}




module.exports = {
    dateFormat,
    getQueryVariable,
    isPc,
    getCookie,
    getBase64Image,
    startTrans
}