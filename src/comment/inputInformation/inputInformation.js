import React from 'react';
import './inputInformation.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CanvasDraw from "react-canvas-draw";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minHeight:'781px'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
function getSteps() {
  return ['填写基本信息', '上传照片', '签字'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return '请填写完基本信息后点击下一步';
    case 1:
      return '请按规定上传护照后点击下一步';
    case 2:
        return '请在签字板内签字后提交';
    default:
      return 'Unknown stepIndex' ;
  }
}


export default function InputInformation() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    const hideEle={
        'zIndex':'-10'
    };
    const showEle={
        'zIndex':'10'
    };
    //加一个videolabel状态
    const [videoLabel,setVideoLabelType] = React.useState({type:true})


    //获得video摄像头区域
    let video = document.getElementById("video");
    function getMedia() {

        let constraints = {
            video: {width: 500, height: 500},
            audio: true
        };
        
        //label 隐藏
        setVideoLabelType((type) => false);

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
      let canvas = document.getElementById("passportCanvas");
      let ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 500, 500);
      
      let saveImage = canvas.toDataURL('image/png');
      let b64 = saveImage.substring(22);
      console.log(saveImage)
    // $('.pic').val(b64)
    }



  
    function takeHandKeepPhoto() {
      //获得Canvas对象
      let canvas = document.getElementById("handkeepPassport");
      let ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 500, 500);
      
      let saveImage = canvas.toDataURL('image/png');
      let b64 = saveImage.substring(22);
      console.log(saveImage)
    // $('.pic').val(b64)
    }

    const signCanvas= React.createRef();
    function takeSign(){
      let signImg = signCanvas.current.canvas.drawing.toDataURL('image/png');
    }
    function clear(){
      signCanvas.current.clear()
    }
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className = "baseInfoCon"  style={activeStep==0?showEle:hideEle}>
            <div className = "infoCon">
                <TextField className="consumerName" helperText="请输入姓名" defaultValue="姓名"/>
            </div>
            <div className = "infoCon">
                <TextField className="consumerProfession" helperText="请输入职业" defaultValue="职业"/>
            </div>
            <div className = "infoCon">
                <TextField className="consumerAddress" helperText="请输入地址" defaultValue="地址"/>
            </div>
        </div>
        <div className = "passportPicCon" style={activeStep==1?showEle:hideEle}>
          <div className="videoCon">
            <video id="video" width="400px" height="400px" ></video>
            <div className="videoConLabel" >摄像头</div>
          </div>
          <div className="videoCanvasCon">
            <canvas id="passportCanvas" width="400px" height="400px"></canvas>
          </div>
          <div className="handkeepPassportCanvasCon">
            <canvas id="handkeepPassport" width="400px" height="400px"></canvas>
          </div>
          <div className="btnCon">
              <div className="openCamera" onClick={getMedia}>开启摄像头</div>
              <div className="takephoto" onClick={takePhoto}>拍护照照片</div>
              <div className="takeHandKeepPhoto" onClick={takeHandKeepPhoto}>拍手持护照照片</div>
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
                canvasHeight={400}
            />
          </div>
          <div className = "signControl">
           <div className = "clearSign" onClick={clear}>清空</div><div className = "takeSign" onClick={takeSign}>生成签名</div>
          </div>
 
        </div>
        <div className="stepBtnCon">
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>提交成功</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }