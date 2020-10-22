import React ,{ useState, useEffect }from 'react';
import { makeStyles, withStyles,createMuiTheme,createStyles, Theme ,ThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import './frontheader.css';
import PropTypes from 'prop-types';
import routes from '../../router-config/routes';
import {Link} from 'react-router-dom';
import intl from 'react-intl-universal';
import axios from 'axios';
import jaJP from '../../asset/json/ja-JP';
import zhCN from '../../asset/json/zh-CN';
import enUS from '../../asset/json/en-US';
import Format  from '../../common/format';


const SUPPOER_LOCALES = [
    {
      name: '日本語',
      value: 'ja-JP'
    },
    {
      name: '简体中文',
      value: 'zh-CN'
    },
    {
      name: 'English',
      value: 'en-US'
    }
  ];
  const locales = {
    'ja-JP': jaJP,
    'zh-CN': zhCN,
    'en-US': enUS,
  };
  const styles = theme => ({
    root:{
      color:"#FFF",
      // "& .MuiSelect-icon": {
      //   color: "#FFF"
      // },
      // "& .MuiInput-underline:before": {
      //   borderBottom:'1px solid #FFF'
      // },
    },
 
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,

    },
    select: {
      "&:before": {
        // normal
        borderBottom: "1px solid #fff"
      },
      "&:after": {
        // focused
        borderBottom: `1px solid #fff`
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
        // hover
        borderBottom: `1px solid #FFF`
      }
    }
  });
 
  const MySelect = withStyles({
    root: {
      color:"#FFF",
    },
    icon: {
      color:"#FFF"
    },
  })(Select)

  class FrontHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        lang: localStorage.getItem('lang_type')?localStorage.getItem('lang_type'):'ja-JP',
        initDone: false,
        isLogin: this.getCookie('isLogin'),
 
      }
      this.loadLocales()
    }
    
    componentDidMount() {

    }
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    onSelectLocale = ev => {
      if(ev){
        localStorage.setItem('lang_type', ev.target.value);
        window.location.reload();
      }

    };
    getCookie (name) {
      let arr;
      let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg)){
        return unescape(arr[2]);
      }else{
        return null;
      }
    };
     loadLocales() {
        intl
          .init({
            // init method will load CLDR locale data according to currentLocale
            // react-intl-universal is singleton, so you should init it only once in your app
            currentLocale: this.state.lang, // TODO: determine locale here
            locales:locales
          })
          .then(() => {
            // After loading CLDR locale data, start to render
            this.setState({
              initDone:true
            })
          });
    }
    loginOut = e => {
      axios({
        method: 'GET',
        url: '/api/user/loginOut',
        
        })
        .then(function (response) {
          if(response.data.errno==0&&response.data.data.type==0){
            window.location.href="/#/webIndex/"
          }
        })
    }
    renderLocaleSelector(props) {
      const  {classes} = this.props;
        return ( 
        <div style={{'float':'right'}}>
          <FormControl className={classes.formControl}>

            <MySelect
              value={this.state.lang}
              onChange={this.onSelectLocale}
              displayEmpty
              className={classes.select}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {SUPPOER_LOCALES.map(locale => (
              <MenuItem value={locale.value} key={locale.value}>{locale.name}</MenuItem>
              ))}
            </MySelect>
          </FormControl>
        </div>
        );

    }
 
    render() {
      return (<div className="headerCon">
          <Grid container >
            <Grid item xs={Format.isPc()?9:10}>
              <div className="logoCon"></div>
            </Grid>
            <Grid item xs={2}>
              {this.renderLocaleSelector()}


            </Grid>
              <Grid item xs={1} style={{display:Format.isPc()&&this.props.routerPath!='/welcome'?'block':'none'}}>
                <div>
                { this.state.isLogin==1?(
                    // <Link to= {routes.webLoginPath} >
                <div className="loginCon" onClick={this.loginOut} >{intl.get('bac2')}</div>
                    // </Link>
                  ):(
                  <Link to= {routes.webLoginPath} >
                      <div className="loginCon" >{intl.get('bac1')}</div>
                  </Link>
                  )
                }
                </div>
              </Grid>
          </Grid>
      </div>)
    }
  
  }
  FrontHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(FrontHeader);

 