import React from 'react';
import './analysisCard.css';

class AnalysisCard extends React.Component{
	componentWillMount(){
   
    }
    callServicePeo(e){
        this.props.callSer({coverType:true,openSer:true,reportTitle:e.reportTitle,reportClickName:e.reportClickName})
    }
    downLoadPdf(e){
        this.props.downLoadPdf({reportClickName:e.reportClickName,pdf:e.pdf,des:e.des,address:e.address,hardware:e.hardware})
    }
    getCaption(obj){
        const pdfSrc = obj.substring( obj.indexOf("src")+5, obj.indexOf(".pdf") + 15);
        return pdfSrc;
    }
    clickMe(){

    }
    NumberList(props) {
        if(this.props.list){
            const reportList = this.props.list;
            const listItems = reportList.map((data)=>
                <div className="analysisCardCon" key={data.reportTitle} >
                    <div className="analysisPicCon">
                        <img className="analysisPic" src={data.reportCover} onClick={this.downLoadPdf.bind(this,{reportClickName:data.reportTitle,pdf:this.getCaption(data.reportAddress),des:data.reportInfo,address:data.reportAddress,hardware:"hardware"})} alt=""/>
                        {/* <div className="triangle"></div> */}
                        {/* <div className="sample">样刊</div> */}
                        <div className="triangle"><img src={require("../../asset/img/tag_demo@2x.png")} alt="" /></div>
                        <div className="sample"><img src={require("../../asset/img/tag_onlineread@2x.png")} onClick={this.downLoadPdf.bind(this,{reportClickName:data.reportTitle,pdf:this.getCaption(data.reportAddress),des:data.reportInfo,address:data.reportAddress,hardware:"hardware"})} alt="" /></div>
                    </div>
                    <div className="analysisCardBody" onClick={this.callServicePeo.bind(this,{reportTitle:data.reportTitle})}>
        <div className="analysisCardTitle">{data.reportTitle}</div>
                        <div className="analysisCardInfo" style={{
                            "overflow": "hidden",
                            "textOverflow": "ellipsis",
                            "display": "-webkit-box",
                            "WebkitLineClamp": "2",
                            "WebkitBoxOrient": "vertical"
                        }}>{data.reportInfo}</div>
                        <div className="analysisCardTime" style={data.reportTitle.length>15?{"marginTop": "1.6vw"}:{"marginTop": "6.4vw"}} >{data.reportTime}</div>
                        <div className="analysisCardPrice">{data.reportPrice}</div>
                        {/* <div className="analysisCardDisCount">
                            <span>{data.discountOne}</span>
                            <span>{data.discountTwo}</span>
                            <span>{data.discountThree}</span> 
                        </div> */}
                    </div>
                </div>
    
            )
            return (
                <div className="clearfix" style={{backgroundColor:"#FFF",borderBottom:"0.13vw solid #E3E3E3"}}>{listItems}</div>
            );
        }
        
    }
	render(){
        return(
            <div>
            {this.NumberList()}
            <div style={{width:"92vw",height:"11vw"}}></div>
   
            </div>
        );
    }
}
export { AnalysisCard as default};  