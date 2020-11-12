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

export default function VisitorInfoEdit() {
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
    const [faccommodation, setFaccommodation] = React.useState('');
    const [destination, setDestination] = React.useState('');
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
        setPic1(window.location.origin+detailData.pic1RandomName)
      }
      if(detailData.pic2RandomName){
        setPic2(window.location.origin+detailData.pic2RandomName)
      }
      if(detailData.signPicRandomName){
        setPic3(detailData.visitorNum)
      }  
      if(detailData.faccommodation){
        setFaccommodation(detailData.faccommodation)
      }  
      if(detailData.destination){
        setDestination(detailData.destination)
      }  
    },[detailData])

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
    return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={6}  className={classes.gridCss}>
          <Card className={classes.cardCss} variant="outlined">
                 <Grid item xs={12}  >
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
        </Card>
      </Grid>
      <Grid item xs={4}  >
        <Card className={classes.cardCss} variant="outlined">
          <Grid item xs={12}  >
                <div style={{width:'500px',height:'300px'}}>
                  <div className="picCon1">
                    <img src={pic1} style={{'width':'300px'}}></img>
                  </div>
                  <div className="changeBtn">编辑</div>
                </div>
                <div style={{width:'500px',height:'300px',marginTop:'10px'}}>
                  <div className="picCon1">
                    <img src={pic2} style={{'width':'300px'}}></img>
                  </div>
                  <div className="changeBtn">编辑</div>
                </div>
                <div style={{width:'500px',height:'300px',marginTop:'10px'}}>
                  <div className="picCon1">
                    <img src={pic3} style={{'width':'300px'}}></img>
                  </div>
                </div>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
      {'1231313213'}
      </Grid>
    </Grid>
    );
}