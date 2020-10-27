import React,{ useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Format  from '../../common/format';
import Card from '@material-ui/core/Card';
import copy from  'copy-to-clipboard';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import intl from 'react-intl-universal';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme)=>({
  root: {
    height:'96vh',
    padding:'2vh'
  },
  gridCss:{
    // flexGrow: 1
    textAlign:'center',
   
  },
  cardCss:{
    height:'70vh',
    padding:'2vh'
  },
  container: {
    maxHeight: 640,
  },
  urlCon:{
    flexGrow: 1, 
  },
  formControl: {
    margin: theme.spacing(2),
    width: 380,
    

  },
  buttonControl:{
    width: '100px',
    margin: theme.spacing(3),
    marginLeft: theme.spacing(5),
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function CreateUrl() {
    const classes = useStyles();

    //设施下拉
    const [construct, setConstruct] = React.useState('');
    const handleChangeConstruction = (event) => {
        setConstruct(event.target.value);
    };

    //到访人数
    const [vistNum, setvistNum] = React.useState('');
    const handleChangeVistNum= (event) => {
        setvistNum(event.target.value);
    };


    //预约码
    const [appointCode, setAppointCode] = React.useState('');
    const handleChangeAppointCode= (event) => {
        setAppointCode(event.target.value);
    };

      //时间限制下拉
    const [selectedDate, setSelectedDate] = React.useState(new Date().getTime());
    const handleDateChange = (date) => {
      console.log(date)
      const  temDate = new Date(date).getTime()
      console.log(temDate)
      setSelectedDate(temDate);
    };
    
    const [beautifulHref, setBeautifulHref] = React.useState('');

    const createIt = (event) => {


        let href = 'https://'+window.location.host+'/#/welcome?cn='+construct+'&vn='+vistNum+'&cd='+appointCode+'&sd='+selectedDate
        setBeautifulHref(href)
    };

    const copyUrl =() =>{
        copy(beautifulHref);
        setOpen(true);
    }


    //消息条
    const [open, setOpen] = React.useState(false);


  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return (
    <Paper className={classes.root}>
          <Card className={classes.cardCss} variant="outlined">
                <Grid item xs={4}  style={{marginLeft:'20vw'}}>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        {intl.get('bac31')}
                        </InputLabel>
                        <Select
                        labelId="construction-label"
                        id="construction-label"
                        value={construct}
                        onChange={handleChangeConstruction}
                        displayEmpty
                        className={classes.selectEmpty}
                        >
                        <MenuItem value="">
                            <em>{intl.get('bac32')}</em>
                        </MenuItem>
                        <MenuItem value={1}>ABC Guest House 1F</MenuItem>
                        <MenuItem value={2}>ABC Guest House 2F</MenuItem>
                        <MenuItem value={3}>A&Z Guest House</MenuItem>
                        <MenuItem value={4}>JIYUKA Guest House</MenuItem>
                        <MenuItem value={5}>PLUS 9 Guest House</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        {intl.get('bac34')}
                        </InputLabel>
                        <Select
                        labelId="visitorNum-label"
                        id="visitorNum-label"
                        value={vistNum}
                        onChange={handleChangeVistNum}
                        displayEmpty
                        className={classes.selectEmpty}
                        >
                        <MenuItem value="">
                            <em>{intl.get('bac34')}</em>
                        </MenuItem>
                        <MenuItem value={1}>1人</MenuItem>
                        <MenuItem value={2}>2人</MenuItem>
                        <MenuItem value={3}>3人</MenuItem>
                        <MenuItem value={4}>4人</MenuItem>
                        <MenuItem value={5}>5人</MenuItem>
                        <MenuItem value={6}>6人</MenuItem>
                        <MenuItem value={7}>7人</MenuItem>
                        <MenuItem value={8}>8人</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} >
                        <TextField id="appointmentCode" label={intl.get('bac33')} variant="outlined" onChange={handleChangeAppointCode}/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label={intl.get('bac49')}
                          format="MM/dd/yyyy"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                    <FormControl className={classes.formControl} >
                    <Button variant="contained" color="primary"   onClick={createIt}>
                    {intl.get('bac35')}
                    </Button>
                    </FormControl>                    
                </Grid>
        </Card>
        <Grid  container   className={classes.urlCon}>
            <Grid item   xs={10}>
                <TextField
                id="standard-full-width"
                label="customer url"
                placeholder="url"
                helperText={intl.get('bac37')}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                value={beautifulHref}
                variant="filled"
                />
            </Grid>
            <Grid item   xs={2}>
                <FormControl className={classes.buttonControl}>
                <Button variant="contained" color="primary" onClick={copyUrl}>
                  {intl.get('bac36')}
                </Button>
                </FormControl>
            </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          复制成功!
        </Alert>
      </Snackbar>
    </Paper>
    );
}