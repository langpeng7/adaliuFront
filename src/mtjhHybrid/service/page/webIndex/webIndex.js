import React from 'react';
import './webIndex.css';
import FrontHeader from '../../../../comment/frontheader/frontheader';
import Foot  from '../../../../comment/frontfoot/frontfoot';
import checkinBackground1 from '../../../../asset/img/checkinBackground1.png';
import housekey from '../../../../asset/img/key.png';
const topbackground1 = window.location.origin+'/public/headImage/topbackground1.jpg';
const image1 = window.location.origin+'/public/headImage/image1.png';
const image2 = window.location.origin+'/public/headImage/image2.png';
const image3 = window.location.origin+'/public/headImage/image3.png';
const image4 = window.location.origin+'/public/headImage/image4.png';
const image5 = window.location.origin+'/public/headImage/image5.png';
const image6 = window.location.origin+'/public/headImage/image6.png';
const image7 = window.location.origin+'/public/headImage/image7.png';
const indexImage1_1 =  window.location.origin+'/public/headImage/indexImage1_1.png';
const indexImage1_2 =  window.location.origin+'/public/headImage/indexImage1_2.png';
const indexImage1_3 =  window.location.origin+'/public/headImage/indexImage1_3.png';
const indexImage1_4 =  window.location.origin+'/public/headImage/indexImage1_4.png';
const indexImage1_5 =  window.location.origin+'/public/headImage/indexImage1_5.png';
const indexImage1_6 =  window.location.origin+'/public/headImage/indexImage1_6.png';
const indexImage1_7 =  window.location.origin+'/public/headImage/indexImage1_7.png';
const indexImage1_8 =  window.location.origin+'/public/headImage/indexImage1_8.png';
const indexImage1_9 =  window.location.origin+'/public/headImage/indexImage1_9.png';
const indexImage1_10 = window.location.origin+'/public/headImage/indexImage1_10.png';
const indexImage2_1 = window.location.origin+'/public/headImage/indexImage2_1.jpg';
const indexImage2_2 = window.location.origin+'/public/headImage/indexImage2_2.png';
const indexImage2_3 = window.location.origin+'/public/headImage/indexImage2_3.jpg';
const indexImage2_4 = window.location.origin+'/public/headImage/indexImage2_4.png';
class WebIndex extends React.Component{
	constructor(props) {
        super(props);
		this.state = {}
    }
	componentDidMount(){

	}
	componentWillUnmount(){

	}
	render(){
		return(
			<div className="serviceInhouse">
				<FrontHeader /> 
              	<div style={{width:'100%',height:'14px',background:'#FFF'}}></div>
				<div className="webCon" >
					<div className="topbackground1" style={{width:'100%',height:'43.6vw',background:"url("+topbackground1+") no-repeat center",backgroundSize:'100%'}}>
						<div><img style={{width:'43.7vw',height:'6.8vw',margin:'8.9vw 0 0 9.6vw'}} src={image1} /> </div>
						<div style={{position:'relative',width:'29.4vw',marginLeft:'9.6vw'}}>
							<img style={{width:'20.94vw',height:'5.104vw',margin:'2.29vw 0 0 0'}} src={image2} />
							<img style={{width:'14.43vw',height:'1.51vw',position:'absolute',left:'5.4vw',top:'4.2vw'}} src={image3} />
							<img style={{width:'4.84rem',height:'5.73rem',position:'absolute',left:'17vw',top:'6vw'}} src={image4} />
							
						</div>
						<img style={{width:'33.5vw',height:'3.125vw',margin:'4.48vw 0 0 9.6vw',float:'left'}} src={image5} />
					
						<img style={{width:'11.8vw',height:'2.5vw',margin:'7.48vw 0 0 23.5vw',float:'left'}} src={image6} />
						<img style={{width:'19.79vw',height:'1.82vw',margin:'1.48vw 0 0 61.5vw'}} src={image7} />
					</div>
					<div className="background2" style={{width:'100%',height:'46.6vw',background:'#fcf8fe',position:'relative'}}>
						<div className="palette" >
							<div style={{width:'100%',height:'16.2vw',display:'flex',justifyContent:'space-between'}}>

								<div style={{width:'20.2vw',height:'16vw',background:'#FFF',borderRadius:'10px',textAlign:'center'}}>
									<img style={{width:'6.66vw',height:'6.35vw',marginTop:'2.08vw'}} src={indexImage1_1} />
									<img style={{width:'16vw',height:'1.67vw',marginTop:'2.08vw'}} src={indexImage1_2} />
								</div>
								<div style={{width:'20.2vw',height:'16vw',background:'#FFF',borderRadius:'10px',textAlign:'center'}}>
									<img style={{width:'4.9vw',height:'6.25vw',marginTop:'2.08vw'}} src={indexImage1_3} />
									<img style={{width:'16vw',height:'1.67vw',marginTop:'2.08vw'}} src={indexImage1_4} />

								</div>
								<div style={{width:'20.2vw',height:'16vw',background:'#FFF',borderRadius:'10px',textAlign:'center'}}>
									<img style={{width:'11.7vw',height:'5.68vw',marginTop:'2.08vw'}} src={indexImage1_5} />
									<img style={{width:'11.7vw',height:'3.69vw',marginTop:'2.08vw'}} src={indexImage1_6} />

								</div>
							</div>
							<div style={{width:'100%',height:'2.4vw'}}	>

							</div>
							<div style={{width:'100%',height:'16.2vw',display:'flex',justifyContent:'space-between'}}	>
								<div style={{width:'31.4vw',height:'16vw',background:'#FFF',borderRadius:'10px',textAlign:'center'}}>
									<div style={{width:'100%'}}><img style={{width:'4.375vw',height:'5.89vw',marginTop:'2.08vw'}} src={indexImage1_7} /></div>
									<img style={{width:'17.8vw',height:'1.67vw',marginTop:'2.08vw'}} src={indexImage1_8} />
								</div>
								<div style={{width:'31.4vw',height:'16vw',background:'#FFF',borderRadius:'10px',textAlign:'center'}}>
									<div style={{width:'100%'}}><img style={{width:'9.06vw',height:'5.83vw',marginTop:'2.08vw'}} src={indexImage1_9} /></div>
									<img style={{width:'13.96vw',height:'1.67vw',marginTop:'2.08vw'}} src={indexImage1_10} />
								</div>
							</div>
						</div>

					</div>
					<div style={{width:'100%',height:'57.8vw'}}>
						<div style={{width:'100%',height:'5vw',textAlign:'center',marginTop:'4.8vw',float:'left'}}>
							<img src={indexImage2_1} ></img>
						</div>
						<div style={{width:'100%',height:'4.6vw',float:'left'}}>
							<div style={{width:'56vw',fontSize:'2.4vw',borderBottom:'0.2vw solid #000',marginLeft:'21vw'}}>宿泊者の氏名、住所、職業その他をご提出ください</div>
						</div>
						<div style={{width:'100%',height:'42vw',float:'left'}}>
							<div style={{width:'51.8vw',height:'42vw',float:'left'}}>
								<img style={{width:'45.8vw',height:'28.8vw',marginTop:'9.48vw',marginLeft:'5.4vw'}} src={indexImage2_2}></img>
							</div>
							<div style={{width:'34.6vw',float:'left',fontSize:'1.96vw',marginLeft:'1vw'}}>
								<div style={{float:'left',marginTop:'3vw'}}>パスポート呈示等のお願い</div>

	　　　　　　　　　　　　　　　<div style={{float:'right'}}>厚生労働省</div>
							   <div style={{float:'left',marginTop:'3vw'}}>
									日本政府は、法令に基づき、2005年
									4月1日から「日本国内に住所を持た
									ない外国人」の方の宿泊に際しては、
									＊氏名　＊住所　＊職業　等の記載
									に加えて＊国籍　及び　＊旅券番号
									　の記載とパスポートの呈示及びコ
									ピーを義務付けましたので、ご理解、
									ご協力をお願いいたします。
								</div>
							</div>
						</div>

					</div>
					<div style={{width:'100%',overflow:'hidden'}}>
						<img style={{width:'100%',height:'51.56vw'}} src={indexImage2_3}></img>
					</div>
					<div style={{width:'100%',overflow:'hidden'}}>
						<img style={{width:'100%',height:'13vw'}} src={indexImage2_4}></img>
					</div>				
				</div>
				<Foot />
			</div>
		)
	}
}

export { WebIndex as default};