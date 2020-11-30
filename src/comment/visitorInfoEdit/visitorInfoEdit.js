import React,{useState,useContext,useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './visitorInfoEdit.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Format  from '../../common/format';
import myContext from '../../common/createContext';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import intl from 'react-intl-universal';

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
    width:'100%',
    padding:'2vh'

  },
  gridCss:{
    textAlign:'center',
  },
  cardCss:{
    padding:'2vh',
    textAlign:'center'
  },
  container: {
    maxHeight: 640,
  },

  formControl: {
    margin: theme.spacing(2),
    width: 380,
    

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function VisitorInfoEdit() {
    const classes = useStyles();
    const detailData = useContext(myContext); 
    const [visitorId, setVisitorId] = React.useState(Format.getQueryVariable('visitorId'));
    const [appointCode, setAppointCode] = React.useState('');
    const [visitorName, setvisitorName] = React.useState('');
    const [visitorAddress, setvisitorAddress] = React.useState('');
    const [visitorJob, setvisitorJob] = React.useState('');
    const [visitNum, setvisitNum] = React.useState('');
    const [constructionId,setConstructionId] = React.useState('');
    const [pic1, setPic1] = React.useState('');
    const [pic2, setPic2] = React.useState('');
    const [pic3, setPic3] = React.useState('');
    const [csDsPic1, setDisplayPic1] = React.useState('');
    const [csDsPic2, setDisplayPic2] = React.useState('');
    const [faccommodation, setFaccommodation] = React.useState('');
    const [destination, setDestination] = React.useState('');

    useEffect(() => {
      if(detailData.code){
        setAppointCode(detailData.code)
      }
      if(detailData.name){
        setvisitorName(detailData.name)
      }
      if(detailData.address){
        setvisitorAddress(detailData.address)
      }
      if(detailData.job){
        setvisitorJob(detailData.job)
      }
      if(detailData.visitorNum){
        setvisitNum(detailData.visitorNum)
      }
      if(detailData.constructionId){
        setConstructionId(detailData.constructionId)
      }
      if(detailData.pic1RandomName){
        Format.startTrans(window.location.origin+detailData.pic1RandomName).then(function(value){
          let bas64;
          if(value.indexOf('image/png')!=-1){
            bas64 = value.substring(22);
            setPic1(value)
          }else if(value.indexOf('image/jpeg')!=-1){
            bas64 = value.substring(23);
            setPic1(value)
          }

   
        })
    
   
       
        
      }
      if(detailData.pic2RandomName){
        Format.startTrans(window.location.origin+detailData.pic2RandomName).then(function(value){
          let bas64;
          if(value.indexOf('image/png')!=-1){
            bas64 = value.substring(22);
            setPic2(value)
          }else if(value.indexOf('image/jpeg')!=-1){
            bas64 = value.substring(23);
            setPic2(value)
          }
        })
      }

      if(detailData.pic1RandomName){
        setDisplayPic1(window.location.origin+detailData.pic1RandomName)
      }
      if(detailData.pic2RandomName){
        setDisplayPic2(window.location.origin+detailData.pic2RandomName)
      }
      if(detailData.signPicRandomName){
        setPic3(window.location.origin+detailData.signPicRandomName)
      }  
      if(detailData.faccommodation){
        setFaccommodation(detailData.faccommodation)
      }  
      if(detailData.destination){
        setDestination(detailData.destination)
      }  
    },[detailData])

    //设施
    const consId= (e) => {
      setConstructionId(e.target.value);
    }
    //姓名
    const iptName = (e) => {
      setvisitorName(e.target.value);
    }
    //职业

    const iptJob = (e) => {
      setvisitorJob(e.target.value);
    }

    const iptAddress = (e) => {
      setvisitorAddress(e.target.value);
    }  

    const visitorNumIpt = (e) => {
      setvisitNum(e.target.value);
    }  

    const iptFaccommodation = (e) => {
      setFaccommodation(e.target.value);
    }  

    const iptDestination = (e) => {
      setDestination(e.target.value);
    }

    function clickOnChangePic1(e){
      document.getElementById("profilePic1").click(); 
     
    }
    function onChangePicture1(e){
      let pic = document.getElementById("profilePic1").files[0];
      let imgFile = new FileReader();
      let b64
      if(pic){
        imgFile.readAsDataURL(pic);
        imgFile.onload = function () {
        const imgData = this.result; //base64数据 
        setDisplayPic1(imgData)
        if(pic.type=="image/jpeg"){
          b64 = imgData.substring(23);
        }else{
          b64 = imgData.substring(22);
        }
        setPic1(b64)
        }
      }
    }

    function clickOnChangePic2(e){
      document.getElementById("profilePic2").click(); 
    }


    function onChangePicture2(e){
      let pic = document.getElementById("profilePic2").files[0];
      console.log(pic)
      let imgFile = new FileReader();
      let b64
      if(pic){
        imgFile.readAsDataURL(pic);
        imgFile.onload = function () {
        console.log(this.result)
        const imgData = this.result; //base64数据 
        setDisplayPic2(imgData)
        if(pic.type=="image/jpeg"){
          b64 = imgData.substring(23);
        }else{
          b64 = imgData.substring(22);
        }
        setPic2(b64)
        }
      }
    }


    function submitEdit(e){
          let peoInfo ={};
          peoInfo.visitorId = visitorId
          peoInfo.csName = visitorName
          peoInfo.csJob = visitorJob
          peoInfo.csAddress = visitorAddress
          peoInfo.csPic1 = pic1
          peoInfo.csPic2 = pic2
          peoInfo.visitorNum = visitNum
          peoInfo.constructionId = constructionId
          peoInfo.code = appointCode
          peoInfo.faccommodation = faccommodation
          peoInfo.destination = destination
          console.log(peoInfo)
          axios({
            method: 'post',
            url: '/api/update',
            headers: {
              'Content-Type':'application/json'
            },          
            data: JSON.stringify(peoInfo)
          })
          .then(function (response) {
              alert("保存成功")
              window.close();
          })
    }
    return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={6}  className={classes.gridCss}>
          <Grid className={classes.cardCss} >
                 <Grid item xs={12}>
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac33')}
                    </InputLabel>
                    <TextField
                      value={appointCode}
                      className={classes.selectEmpty}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac31')}
                    </InputLabel>
                    <TextField
                      className={classes.selectEmpty}
                      value={constructionId}
                      onChange={consId}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac9')}
                    </InputLabel>                      
                    <TextField
                      className={classes.selectEmpty} 
                      value={visitorName}
                      onChange={iptName}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac11')}
                    </InputLabel>                      
                    <TextField
                      value={visitorJob}
                      className={classes.selectEmpty}
                      onChange={iptJob}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac13')}
                    </InputLabel>                      
                    <TextField
                      value={visitorAddress}
                      className={classes.selectEmpty}
                      onChange={iptAddress}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac34')}
                    </InputLabel>                      
                    <TextField
                      value={visitNum}
                      className={classes.selectEmpty}
                      onChange={visitorNumIpt}

                    />
                    </FormControl>
                </Grid>   
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac50')}
                    </InputLabel>                      
                    <TextField
                      value={faccommodation}
                      className={classes.selectEmpty}
                      onChange={iptFaccommodation}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {intl.get('bac51')}
                    </InputLabel>                      
                    <TextField
                      value={destination}
                      className={classes.selectEmpty}
                      onChange={iptDestination}
                    />
                    </FormControl>
                </Grid>                                                                                     
        </Grid>
      </Grid>
      <Grid item xs={4}  >
        <Grid className={classes.cardCss} >
          <Grid item xs={12}  >
                <div >
                  <div className="picCon1">
                    <img src={csDsPic1} style={{'width':'68%'}}></img>
                    <input id={'profilePic1'} style={{'display':'none'}} type="file" onChange={()=>onChangePicture1(this)} />
                  </div>
                  <div className="changeBtn" onClick={clickOnChangePic1}>编辑</div>
                </div>
                <div style={{marginTop:'10px'}}>
                  <div className="picCon1">
                    <img src={csDsPic2} style={{'width':'68%'}}></img>
                    <input id={'profilePic2'} style={{'display':'none'}} type="file" onChange={()=>onChangePicture2(this)} />
                  </div>
                  <div className="changeBtn" onClick={clickOnChangePic2}>编辑</div>
                </div>
                <div style={{marginTop:'10px'}}>
                  <div className="picCon1">
                    <img src={pic3} style={{'width':'68%'}}></img>
                  </div>
                </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <div className="submit"  onClick={submitEdit}>提交</div>
      </Grid>
    </Grid>
    );
}