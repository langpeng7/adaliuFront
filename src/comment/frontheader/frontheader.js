import React from 'react';
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
class FrontHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          initDone: false
        };
        this.onSelectLocale = this.onSelectLocale.bind(this);
        this.state = { lang: localStorage.getItem('lang_type') || 'ja-JP' };
        console.log(this.state)
    
    
    
      // this.state = {oldtime:""}
    }

    renderLocaleSelector() {
        return (
        <div
            style={{ position: 'absolute', zIndex: '9999', right: 100, top:12 }}
        >
            <select onChange={this.onSelectLocale} defaultValue={this.state.lang} className="languageSelect">
            {SUPPOER_LOCALES.map(locale => (
                <option key={locale.value} value={locale.value} className="languageOption">
                {locale.name}
                </option>
            ))}
            </select>
        </div>
        );
    }


    onSelectLocale = ev => {

        console.log(ev)
        localStorage.setItem('lang_type', ev.target.value);
        console.log(localStorage.getItem('lang_type'))
        window.location.reload();
    };

    componentDidMount() {
        this.loadLocales();
    }
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
            this.setState({ initDone: true });
          });
      }
	render(){
        return(
            <div className="headerCon">
                    <div className="logoCon">logo</div>
                    {/* <div> {intl.get('key1')}</div>  */}
                    {this.renderLocaleSelector()}
        
                    <Link to= {routes.webLoginPath} >
                        <div className="loginCon">登陆</div>
                    </Link>
            </div>
        );
    }
}
export { FrontHeader as default};  