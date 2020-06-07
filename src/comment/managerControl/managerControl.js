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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: '200px',
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
  const customerInfo = () => {
    setContentType((contentType)=>(0));
    console.log(contentType)
  }

  const houseManage = () => {
    setContentType((contentType)=>(1));
    console.log(contentType)
  }
  const createUrl = () => {
    setContentType((contentType)=>(2));

    console.log(contentType)
  }
  return (
    <div className={classes.root}>
       <Grid container>
        <Grid item xs={2} style={{ backgroundColor: '#eee', height: '100vh' }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
            <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="顾客信息"  onClick={customerInfo} /> 
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                  <Category />
                </ListItemIcon>
              <ListItemText primary="设施管理" onClick={houseManage}/> 
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="生成链接" onClick={createUrl}/> 
            </ListItem>
          </List> 
        </Grid>
        <Grid item xs={10}>
          <div style={{ backgroundColor: '#FFF', height: '100vh',display:contentType==0?"block":"none"}} >
              顾客信息
          </div>
          <div style={{ backgroundColor: '#FFF', height: '100vh',display:contentType==1?"block":"none" }}>
            设施管理
          </div>
          <div style={{ backgroundColor: '#FFF', height: '100vh',display:contentType==2?"block":"none" }}>
            生成链接
          </div>
        </Grid>
      </Grid> 
     

 
    </div>
  );
}