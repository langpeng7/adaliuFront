import React from 'react';
import './managerControl.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Category from '@material-ui/icons/Category';
 import Paper from '@material-ui/core/Paper';
 import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CustomerInfoTable  from '../../comment/customerInfoTable/customerInfoTable';
import CreateUrl  from '../../comment/createUrl/createUrl';
import intl from 'react-intl-universal';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 200,
    // backgroundColor: theme.palette.background.default,
  }

}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function managerControl() {
  const classes = useStyles();
  
  //右侧content 根据状态切换
  const [contentType, setContentType] = React.useState(0);
  const customerInfo = (e) => {
    setContentType((contentType)=>(0));
  }

  const houseManage = () => {
    setContentType((contentType)=>(1));
  }
  const createUrl = () => {
    setContentType((contentType)=>(2));
  }

  
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className={classes.root}>
       <Grid container>
        <Grid item xs={2} style={{ backgroundColor: '#eee', height: '100vh' }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={customerInfo} data-type="0">
            <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={intl.get('bac26')}   /> 
            </ListItem>
            <ListItem button onClick={houseManage}  data-type="1">
              <ListItemIcon>
                  <Category />
                </ListItemIcon>
              <ListItemText primary={intl.get('bac27')} /> 
            </ListItem>
            <ListItem button  onClick={createUrl} data-type="2">
            <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={intl.get('bac28')}/> 
            </ListItem>
          </List> 
        </Grid>
        <Grid item xs={10}>
          <div style={{ backgroundColor: '#FFF', height: '100vh',display:contentType==0?"block":"none"}} >

          <CustomerInfoTable />

          </div>
          <div style={{ backgroundColor: '#FFF', height: '100vh',display:contentType==1?"block":"none" }}>
            {intl.get('bac27')}
          </div>
          <div style={{ backgroundColor: '#FFF', height: '100vh',display:contentType==2?"block":"none" }}>
            <CreateUrl />
          </div>
        </Grid>
      </Grid> 
     

 
    </div>
  );
}