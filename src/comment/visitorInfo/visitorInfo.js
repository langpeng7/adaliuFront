import React,{useState,useContext,useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Format  from '../../common/format';
import myContext from '../../common/createContext';
import Card from '@material-ui/core/Card';
import axios from 'axios';


const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
    width:'100%',
    minHeight:'150vh',
    padding:'2vh'

  },
  gridCss:{
 
    textAlign:'center',
   
  },
  cardCss:{
    minHeight:'150vh',
    padding:'2vh'
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

export default function VisitorInfo() {
    const classes = useStyles();
    const detailData = useContext(myContext); 

    const [appointCode, setAppointCode] = React.useState('');
    const [visitorName, setvisitorName] = React.useState('');
    const [visitorAddress, setvisitorAddress] = React.useState('');
     const [visitorJob, setvisitorJob] = React.useState('');
     const [visitNum, setvisitNum] = React.useState('');
     const [pic1, setPic1] = React.useState('');
     const [pic2, setPic2] = React.useState('');
     const [pic3, setPic3] = React.useState('');

     console.log(detailData)
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
      if(detailData.pic1RandomName){
        console.log(window.location.origin+detailData.pic1RandomName)
        setPic1(window.location.origin+detailData.pic1RandomName)
      }
      if(detailData.pic2RandomName){
        console.log(window.location.origin+detailData.pic2RandomName)
        setPic2(window.location.origin+detailData.pic2RandomName)
      }
      if(detailData.signPicRandomName){
        setPic3(window.location.origin+detailData.signPicRandomName)
      }  
    })


    return (

    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={6}  className={classes.gridCss}>
          <Card className={classes.cardCss} variant="outlined">
                 <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    预约码
                    </InputLabel>
                    <TextField
                      id="standard-read-only-input"
                      value={appointCode}
                      className={classes.selectEmpty}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    姓名
                    </InputLabel>                      
                    <TextField
                      id="standard-read-only-input"
                      value={visitorName}
                      className={classes.selectEmpty}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    工作
                    </InputLabel>                      
                    <TextField
                      id="standard-read-only-input"
                      value={visitorJob}
                      className={classes.selectEmpty}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    住址
                    </InputLabel>                      
                    <TextField
                      id="standard-read-only-input"
                      value={visitorAddress}
                      className={classes.selectEmpty}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    人数
                    </InputLabel>                      
                    <TextField
                      id="standard-read-only-input"
                      value={visitNum}
                      className={classes.selectEmpty}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>                                                                                 
        </Card>
      </Grid>
      <Grid item xs={4}  >
        <Card className={classes.cardCss} variant="outlined">
          <Grid item xs={12}  >
                <img src={pic1} style={{'width':'100%'}}></img>
                  <img src={pic2} style={{'width':'100%'}}></img>
                <img src={pic3} style={{'width':'100%'}}></img> 
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}  >
        <div className="" style={{'width':'90px','height':'34px',color:'#FFF',textAlign:'center',lineHeight:'34px',borderRadius:'5px',cursor:'pointer',background:'#7f4bf5'}}>添加照片</div>
      
      </Grid> 
    </Grid>
    );
}