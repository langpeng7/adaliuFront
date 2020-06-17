import React,{useState,useContext}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    minHeight:'96vh',
    padding:'2vh'

  },
  gridCss:{
 
    textAlign:'center',
   
  },
  cardCss:{
    minHeight:'80vh',
    padding:'2vh'
  },
  container: {
    maxHeight: 640,
  },

  formControl: {
    margin: theme.spacing(2),
    width: 380,
    

  },

}));

export default function VisitorInfo() {
    const classes = useStyles();
    const detailData = useContext(myContext); 

    
    const [appointCode, setAppointCode] = React.useState('');
 

    const [vistNum, setvistNum] = React.useState('');
    const handleChangeVistNum= (event) => {
        setvistNum(event.target.value);
    };

    const [beautifulHref, setBeautifulHref] = React.useState('');

    //消息条
    const [open, setOpen] = React.useState(false);

    return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={6}  className={classes.gridCss}>
          <Card className={classes.cardCss} variant="outlined">
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="预约码"
                      defaultValue={"appointCode"}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="姓名"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="职业"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="住址"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="入住人数"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>     
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="设施"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl className={classes.formControl} style={{'marginTop':50}}>
                    <TextField
                      id="standard-read-only-input"
                      label="确认日期"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    </FormControl>
                </Grid>                                                                                   
        </Card>
      </Grid>
      <Grid item xs={5}  >
          <Card className={classes.cardCss} variant="outlined">
                <Grid item xs={6}  >
                      
                </Grid>
                                                               
        </Card>
      </Grid>
    </Grid>
    );
}