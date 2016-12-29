import React, { Component } from 'react';
import YoutubePlayer from 'react-youtube-player';

class AboutCompany extends Component {
  render () {
    return (
      <div className="page_about_company bg_ptrn">
		    <div className="jumbotron">
				  <div className="container"></div>
				</div>
				<div className="container">
          <div className="row">
				    <div className="col-md-10 col-md-offset-1">
              <div className="bg_white txt_basic">
						    <div className="up_mark"></div>
								  <p><strong>인성문화연구소</strong>는</p><br />
								  <p>척박한 현실의 교육과 삶 속에서</p><br /> 
								  <p>인문학의 가치와 이상을 실현하고자 노력하고 있습니다.</p><br />
								  <p>다양한 가치들이 충돌하는 현대 사회의 혼란 속에서</p><br />
								  <p>인간의 존재와 세상의 움직임과 삶의 궁극적 가치에 관한</p><br />
								  <p>답을 찾기 위해</p><br />
								  <p>실천적 지혜를 추구하고자 노력하고 있습니다.</p><br />
								  <p>이러한 성찰을 바탕으로 현대 사회의 가치 혼란 속에서</p><br />
								  <p>올바른 방향성을 제공하고 굳건한 내면의 바탕을 형성하고자 합니다.</p>
                  <br /><br />
								  <p><strong>인성문화연구소</strong>가</p><br />
								  <p>초점을 맞추는 교육과 삶은</p><br /> 
								  <p>인간과 세상의 궁극적 의미를 성찰하고,</p><br />
								  <p>그 의미와 가치를 깊이 내면화하여,</p><br />
								  <p>현대 사회 삶을 살아나갈 분명한 내면의 기준과 바탕을 갖추는</p><br /> 
								  <p>인성을 기르고자 하는 것입니다.</p><br /><br />
								<div className="down_mark"></div>
                <div className="video">
                  <YoutubePlayer 
                    videoId='MyC67-LBtO4' 
                    width='600'
                    height='400'
                    playbackState='unstarted'
                    configuration={
                      {
                        rel:0,
                        showinfo:1
                      }
                    }
                  />
                </div>
						  </div>    
            </div>
          </div>
        </div>
				<div className="jumbotron">
				  <div className="container"></div>
				</div>
				<div className="container">
          <div className="row">
				    <div className="col-md-10 col-md-offset-1">
              <div className="bg_white txt_basic">
						    <p><strong>1. 프로그램 연구·개발</strong></p><br />
								<p>▲ TST Program for Youth / Adult 개발</p><br /> 
								<p>▲ 자기주도학습코칭 프로그램 개발</p><br />
								<p>▲ ‘생활 속 인문학’ 교육을 위한 프로그램 개발</p><br />
								<p>▲  인문학에 기반 한 학교인성 프로그램 개발</p><br />
                <br />
								<p><strong>2. TST Program에 기반한 자기주도 학습코칭<br />Albatross 운영</strong></p>
								<button type="button" className="btn">카페 방문하기</button>    
								<button type="button" className="btn">블로그 방문하기</button><br />
                <br /><br />
								<p><strong>3. 인문학 북카페 &lt;서재&gt; 운영</strong></p>
                <button type="button" className="btn"><p>북카페 &lt;서재&gt; 방문하기</p></button>	
						  </div>    
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default AboutCompany;