import React from 'react';
import './inputInformation.css';
import {  makeStyles, withStyles,createMuiTheme,createStyles, Theme ,ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CanvasDraw from "react-canvas-draw";
import axios from 'axios';
import Format  from '../../common/format';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import intl from 'react-intl-universal';

  const isPcCon =    function isPC() {
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
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minHeight:isPcCon?'100px':'781px'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#7f4bf5',
      },
    },
  });
  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,#7f4bf5 0%,#7f4bf5 50%,#7f4bf5 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,#7f4bf5 0%,#7f4bf5 50%,#7f4bf5 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);
  
const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});



  
function isPC() {
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

export default function InputInformation() {
    //默认样式
    const classes = useStyles();

    //客人数目
    const peoCount = Format.getQueryVariable('vn')

    const [peoNumAllInfo,setPeoNumAllInfo] = React.useState(peoUnitPrepare)

    function submitPeoInfomation(e){
      console.log(peoNumAllInfo)
      const allInfoLength = peoNumAllInfo.length;
      let isCpLength = 0;
    
      for(let i=0;i<peoNumAllInfo.length;i++){
        if(peoNumAllInfo[i].isComplete){
          isCpLength++
        }

      }
      if(isCpLength ==allInfoLength){
        axios({
          method: 'post',
          url: '/api/savePic',
          headers: {
            'Content-Type':'application/json'
          },          
          data: JSON.stringify(peoNumAllInfo)
        })
        .then(function (response) {
          console.log(response);
          window.location.href="/#/infoFinish/"
        })


      }else{
        alert(intl.get('bac45'))
      }
    }



    //根据浏览器vn 设置人数对应得默认值
    function peoUnitPrepare(){
      
      const peoUnit =[]
      for(let i=0;i<peoCount;i++){
        peoUnit.push({num:i+1,isInputing:i==0?true:false,isComplete:false,csName:'',csJob:'',csAddress:'',csPic1:'',csPic2:'',csSignPic:'',imgType1:1,imgType2:1,visitorNum:'',constructionId:'',code:''})
      }
      return peoUnit
      
    }

    let peoUnitList = peoNumAllInfo.map(function (value, key) {
      console.log(isPC())
      if(value.isComplete){
        return (<div className={isPC()?"peoUnit":"peoUnitMb"}  style={{background:'green'}} key={value.num} cusnum={value.num} onClick={()=>choosePeoInput(value)}></div>)
      }else{
        return (<div className={isPC()?"peoUnit":"peoUnitMb"}  style={{background:value.isInputing?'#faf703':'#666'}} key={value.num} cusnum={value.num} onClick={()=>choosePeoInput(value)}></div>)
      }
      
    })

    function choosePeoInput(e){
      const peoInfo = peoNumAllInfo
      for(let i=0;i<peoNumAllInfo.length;i++){
          if(e.num == peoNumAllInfo[i].num){
            peoInfo[i].isInputing = true
    
          }else{
            peoInfo[i].isInputing = false
          }
      }
      setPeoNumAllInfo(peoInfo.slice())
 
      
    }



    let eachPeoInfo =peoNumAllInfo.map(function(value,key){
      console.log(value)
      console.log(key)
      //步揍状态
      const [activeStep, setActiveStep] = React.useState(0);
      //步揍值
      const steps = getSteps();
      //下一步的动作
      const handleNext = () => {
      
      const visitorNum = Format.getQueryVariable("vn")
      const constructionId = Format.getQueryVariable("cn")
      const code= Format.getQueryVariable("cd")

        if(activeStep == 2){
      
          
          if(csName&&csJob&&csAddress&&csPic1&&csPic2&&csSignPic&&visitorNum&&constructionId&&code){
            const peoInfo = peoNumAllInfo;
            for(let i=0;i<peoNumAllInfo.length;i++){
              if(value.num == peoNumAllInfo[i].num){
                peoInfo[i].csName = csName
                peoInfo[i].csJob = csJob
                peoInfo[i].csAddress = csAddress
                peoInfo[i].csPic1 = csPic1
                peoInfo[i].csPic2 = csPic2
                peoInfo[i].csSignPic = csSignPic
                peoInfo[i].visitorNum = visitorNum
                peoInfo[i].constructionId = constructionId
                peoInfo[i].code = code
                peoInfo[i].isComplete = true
                setPeoNumAllInfo(peoInfo.slice())
              }
            }
     
          }else{
            alert(intl.get('bac45'))
            return false
          }
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
      
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };

      function getSteps() {
        return [intl.get('bac6'), intl.get('bac7'), intl.get('bac8')];
      }
      
      function getStepContent(stepIndex) {
        console.log(stepIndex)
        switch (stepIndex) {
          case 0:
            return intl.get('bac15');
          case 1:
            return intl.get('bac39');
          case 2:
            return intl.get('bac22');
          default:
            return 'Unknown stepIndex' ;
        }
      }
      function QontoStepIcon(props) {
        const classes = useQontoStepIconStyles();
        const { active, completed } = props;
      
        return (
          <div
            className={clsx(classes.root, {
              [classes.active]: active,
            })}
          >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
          </div>
        );
      }
      
      QontoStepIcon.propTypes = {
        /**
         * Whether this step is active.
         */
        active: PropTypes.bool,
        /**
         * Mark the step as completed. Is passed to child components.
         */
        completed: PropTypes.bool,
      };
          //姓名
    const [csName, setName] = React.useState(intl.get('bac9'));
    const iptName = (e) => {
      setName(e.target.value);
    }
    //职业
    const [csJob, setJob] = React.useState(intl.get('bac11'));
    const iptJob = (e) => {
      setJob(e.target.value);
    }
    //住址
    const [csAddress, setAddress] = React.useState(intl.get('bac13'));
    const iptAddress = (e) => {
      setAddress(e.target.value);
    }  
   //护照
   const [csPic1, setPic1] = React.useState();
   //手持护照
   const [csPic2, setPic2] = React.useState();  

   const [csDsPic1, setDisplayPic1] = React.useState();

   const [csDsPic2, setDisplayPic2] = React.useState();

   const [imgType1, setImgType1] = React.useState();

   const [imgType2, setImgType2] = React.useState();
   //签名
   const [csSignPic, setSignPic] = React.useState();  


    function clickOnChangePic1(e){
      document.getElementById("profilePic"+value.num).click(); 
     
    }
    function onChangePicture1(e){
        let pic = document.getElementById("profilePic"+value.num).files[0];
        let imgFile = new FileReader();
        let b64
        if(pic){
          imgFile.readAsDataURL(pic);
          imgFile.onload = function () {
          const imgData = this.result; //base64数据 
          setImgType1("0")
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
      document.getElementById("profileHandPic"+value.num).click(); 
     
    }
    function onChangePicture2(e){
       let pic = document.getElementById("profileHandPic"+value.num).files[0];
       console.log(pic)
       let b64
       var imgFile = new FileReader();
       if(pic){
        imgFile.readAsDataURL(pic);
        imgFile.onload = function () {
         var imgData = this.result; //base64数据  
         setImgType2("0")
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

    //显示隐藏style 状态
    const hideEle = {
        'zIndex':'-10'
    };
    const showEle = {
        'zIndex':'10'
    };

    const showPeoInput = {
      'zIndex':'5'
    };
  
    const hidePeoInput = {
      'zIndex':'-5'
    };
    //加一个videolabel状态
    // const [videoLabel,setVideoLabelType] = React.useState({type:true})


    //获得video摄像头区域
    let video = document.getElementById("video"+value.num);
    function getMedia() {

        let constraints = {
            video: {width: 500, height: 500},
            audio: false
        };
        
        //label 隐藏
        // setVideoLabelType((type) => false);

        let promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then(function (MediaStream) {
            video.srcObject = MediaStream;
            video.play();
          
        }).catch(function (PermissionDeniedError) {
            console.log(PermissionDeniedError);
        })
    }

    function takePhoto() {
      //获得Canvas对象
      let canvas = document.getElementById("passportCanvas"+value.num);
      let ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 500, 500);
      console.log(video)
      setImgType1("1")
      let saveImage = canvas.toDataURL('image/png');
      let b64 = saveImage.substring(22);
      setPic1(b64)
    // $('.pic').val(b64)
    }
  
  
  
    
      function takeHandKeepPhoto() {
        //获得Canvas对象
        let canvas = document.getElementById("handkeepPassport"+value.num);
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, 500, 500);
        setImgType2("1")
        let saveImage = canvas.toDataURL('image/png');
        let b64 = saveImage.substring(22);
        console.log(b64)
        setPic2(b64)
      // $('.pic').val(b64)
      }

      let signCanvas = React.createRef();
      const inputing = value.isInputing
      function takeSign(){
        let signImg = signCanvas.current.canvas.drawing.toDataURL('image/png');
        console.log(signImg)
        setSignPic(signImg)
        alert("生成签名成功，请点击下一步")
        
      }
      function clear(){
        // signCanvaName.current.clear()
      }

      const screenWidth = document.body.clientWidth-16
      if(isPC()){
        return(
          <div key={value.num}  style={{"zIndex":inputing?'15':-15,"position":'absolute',width:'96vw'}} >
            <Stepper activeStep={activeStep}  alternativeLabel connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label} >
                  <StepLabel    StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className = "baseInfoCon"  style={activeStep==0?showEle:hideEle}>
                <div className = "consumerInfoCon">
                    <TextField className="consumerName consumerIptText" helperText={intl.get('bac10')}   value={csName} onChange={iptName}/>
                </div>
                <div className = "consumerInfoCon">
                    <TextField className="consumerProfession consumerIptText" helperText={intl.get('bac40')}  value={csJob} onChange={iptJob}/>
                </div>
                <div className = "consumerInfoCon">
                    <TextField className="consumerAddress consumerIptText" helperText={intl.get('bac14')}  value={csAddress} onChange={iptAddress}/>
                </div>
            </div>
            <div className = "passportPicCon" style={activeStep==1?showEle:hideEle}>
              <div className="videoCon">
                <video id={'video'+value.num} width="300px" height="300px" ></video>
                <div className="videoConLabel" >{intl.get('bac16')}</div>
              </div>
              <div style={{'float':'left',width:'300px',height:'300px',margin:'3vw 0 0 3vw'}}>
                <div className="videoCanvasCon">
                  <canvas id={'passportCanvas'+value.num} style={{display:imgType1==1?'block':'none'}} width="300px" height="300px"></canvas>
                  <img style={{width:'300px',display:imgType1==0?'block':'none'}} src={csDsPic1}/>
                </div>
                <input id={'profilePic'+value.num} style={{'display':'none'}} type="file" onChange={()=>onChangePicture1(this)} />
                <div style={{display:activeStep==1?"block":"none",float:'left',margin:'20px 0 0 123px',padding:'5px',height:'26px',background:'#7f4bf5',color:'#FFF',textAlign:'center',lineHeight:'26px',cursor:'pointer',borderRadius:'3px'}} onClick={clickOnChangePic1}>{intl.get('bac41')}</div>
              </div>
              <div style={{'float':'left',width:'300px',height:'300px',margin:'3vw 0 0 3vw'}}>
                <div className="handkeepPassportCanvasCon">
                  <canvas id={'handkeepPassport'+value.num} width="300px" height="300px"  style={{display:imgType2==1?'block':'none'}}></canvas>
                  <img style={{width:'300px',display:imgType2==0?'block':'none'}} src={csDsPic2}/>
                </div>
                <input id={'profileHandPic'+value.num} style={{'display':'none'}} type="file" onChange={()=>onChangePicture2(this)} />
                <div style={{display:activeStep==1?"block":"none",float:'left',margin:'20px 0 0 106px',padding:'5px',height:'26px',background:'#7f4bf5',color:'#FFF',textAlign:'center',lineHeight:'26px',cursor:'pointer',borderRadius:'3px'}} onClick={clickOnChangePic2}>{intl.get('bac42')}</div>
              </div>
              <div className="btnCon">
              <div className="openCamera" onClick={getMedia}>{intl.get('bac17')}</div>
                  <div className="takephoto" onClick={takePhoto}>{intl.get('bac18')}</div>
                  <div className="takeHandKeepPhoto" onClick={takeHandKeepPhoto}>{intl.get('bac19')}</div>
              </div>
            </div>
            <div className = "signCon"  style={activeStep==2?showEle:hideEle}>
              <div className = "signRegion">
                <CanvasDraw
                    ref={signCanvas}
                    brushColor="#000"
                    brushRadius={3}
                    lazyRadius={10}
                    canvasWidth={600}
                    canvasHeight={240}
                />
              </div>
              <div className = "signControl">
                <div className = "clearSign" onClick={clear}>{intl.get('bac20')}</div>
                <div className = "takeSign" onClick={takeSign}>{intl.get('bac21')}</div>
              </div>
    
            </div>
            <div className = "completeCon"  style={activeStep==3?showEle:hideEle}>

                  完成

            </div>
            <div className="stepBtnCon" style={{"display":inputing?'block':'none'}} >
      
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>{intl.get('bac25')}</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div >
                  <Typography  className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      }else{
        return(
          <div key={value.num}  style={{"zIndex":inputing?'15':-15,"position":'absolute',width:'96vw',paddingBottom:'5vw'}} >
            <Stepper activeStep={activeStep}  alternativeLabel connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label} >
                  <StepLabel    StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className = "baseInfoConMb"  style={activeStep==0?showEle:hideEle}>
                <div className = "consumerInfoConMb">
                    <TextField className="consumerNameMb consumerIptText" helperText={intl.get('bac10')}   value={csName} onChange={iptName}/>
                </div>
                <div className = "consumerInfoConMb">
                    <TextField className="consumerProfessionMb consumerIptText" helperText={intl.get('bac40')}  value={csJob} onChange={iptJob}/>
                </div>
                <div className = "consumerInfoConMb">
                    <TextField className="consumerAddressMb consumerIptText" helperText={intl.get('bac14')}  value={csAddress} onChange={iptAddress}/>
                </div>
            </div>
            <div className = "passportPicConMb" style={activeStep==1?showEle:hideEle}>

              <div style={{'float':'left',width:'96vw',height:'45vw',margin:'3vw 0 0 0'}}>
                <div className="videoCanvasConMb">
                  <canvas id={'passportCanvas'+value.num} style={{display:'none'}} width="150px" height="150px"></canvas>
                  <img style={{width:'150px',display:imgType1==0?'block':'none'}} src={csDsPic1}/>
                </div>
                <input id={'profilePic'+value.num} style={{'display':'none'}} type="file" onChange={()=>onChangePicture1(this)} />
                <div style={{display:activeStep==1?"block":"none",float:'left',margin:'9vw 0 0 10vw',padding:'5px',width:'30vw',background:'#7f4bf5',color:'#FFF',textAlign:'center',lineHeight:'26px',cursor:'pointer',borderRadius:'3px'}} onClick={clickOnChangePic1}>{intl.get('bac41')}</div>
              </div>
              <div style={{'float':'left',width:'96vw',height:'45vw',margin:'3vw 0 0 0'}}>
                <div className="handkeepPassportCanvasConMb">
                  <canvas id={'handkeepPassport'+value.num} width="150px" height="150px"  style={{display:'none'}}></canvas>
                  <img style={{width:'150px',display:imgType2==0?'block':'none'}} src={csDsPic2}/>
                </div>
                <input id={'profileHandPic'+value.num} style={{'display':'none'}} type="file" onChange={()=>onChangePicture2(this)} />
                <div style={{display:activeStep==1?"block":"none",float:'left',margin:'9vw 0 0 10vw',padding:'5px',width:'30vw',background:'#7f4bf5',color:'#FFF',textAlign:'center',lineHeight:'26px',cursor:'pointer',borderRadius:'3px'}} onClick={clickOnChangePic2}>{intl.get('bac42')}</div>
              </div>
          
            </div>
            <div className = "signConMb"  style={activeStep==2?showEle:hideEle}>
              <div className = "signRegionMb">
                <CanvasDraw
                    ref={signCanvas}
                    brushColor="#000"
                    brushRadius={3}
                    lazyRadius={10}
                    canvasWidth={window.innerWidth}
                    canvasHeight={240}
                />
              </div>
              <div className = "signControlMb">
                <div className = "clearSignMb" onClick={clear}>{intl.get('bac20')}</div>
                <div className = "takeSignMb" onClick={takeSign}>{intl.get('bac21')}</div>
              </div>
    
            </div>
            <div className = "completeConMb"  style={activeStep==3?showEle:hideEle}>

            {intl.get('bac25')}

            </div>
            <div className="stepBtnConMb" style={{"display":inputing?'block':'none'}} >
      
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>{intl.get('bac25')}</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div >
                  <Typography  className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="completeInfomationMb" onClick={submitPeoInfomation}>{intl.get('bac47')}</div> 
          </div>
        )
      }
    })
    if(isPC()){
      return (
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <div  className="progress">
             <div> {peoUnitList}</div>
             <div className="completeInfomation" onClick={submitPeoInfomation}>{intl.get('bac47')}</div> 
            </div>
            {eachPeoInfo}
          </ThemeProvider>
        </div>
      );
    }else{
      return (
        <div className={classes.root}>
         <ThemeProvider theme={theme}>
            <div  className="progressMb">
             <div> {peoUnitList}</div>
            </div>
            {eachPeoInfo}
          </ThemeProvider>
   
        </div>
      );

    }

  }