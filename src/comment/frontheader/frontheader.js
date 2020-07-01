import React ,{ useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import './frontheader.css';
import routes from '../../router-config/routes';
import {Link} from 'react-router-dom';
import intl from 'react-intl-universal';

import jaJP from '../../asset/json/ja-JP';
import zhCN from '../../asset/json/zh-CN';
const SUPPOER_LOCALES = [
    {
      name: '日本語',
      value: 'ja-JP'
    },
    {
      name: '简体中文',
      value: 'zh-CN'
    }
  ];
  const locales = {
    'ja-JP': jaJP,
    'zh-CN': zhCN
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,

    },
    selectEmpty: {
       marginLeft: theme.spacing(2),
       color:theme.palette.common.black,
    },
    
  }));

  export default function FrontHeader() {
    const classes = useStyles();
    const [initDone,setInitDone] = React.useState(false)
    const [lang,setLang] = React.useState(localStorage.getItem('lang_type') || 'ja-JP') 
    const [isLogin,setIsLogin] = React.useState(getCookie('isLogin'))

    function renderLocaleSelector() {
        return (
        <div
    
        >
          <FormControl className={classes.formControl}>
            <Select
              value={lang}
              onChange={onSelectLocale}
              displayEmpty
               className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {SUPPOER_LOCALES.map(locale => (
              <MenuItem value={locale.value} key={locale.value}>{locale.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        );
    }


    const  onSelectLocale = ev => {
        localStorage.setItem('lang_type', ev.target.value);
        window.location.reload();
    };

    loadLocales();
    function loadLocales() {
        intl
          .init({
            // init method will load CLDR locale data according to currentLocale
            // react-intl-universal is singleton, so you should init it only once in your app
            currentLocale: lang, // TODO: determine locale here
            locales:locales
          })
          .then(() => {
            // After loading CLDR locale data, start to render
            setInitDone(true)
          });
    }
    function  getCookie (name) {
      let arr;
      let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
    };

    return(
     
        <div className="headerCon">
           <Grid container spacing={12}>
            <Grid item xs={10}>
              <div className="logoCon">测试</div>
              </Grid>
              <Grid item xs={1}>
            
              {renderLocaleSelector()}

              </Grid>
              <Grid item xs={1}>
          
                <div>
                { isLogin==1?(
                  <Link to= {routes.webLoginPath} >
                    <div className="loginCon" >{intl.get('bac2')}</div>
                  </Link>
                ):(
                  <Link to= {routes.webLoginPath} >
                    <div className="loginCon">{intl.get('bac1')}</div>
                  </Link>
                )
              
              }
                </div>
        
              </Grid>
            </Grid>
        </div>

    );
}
 