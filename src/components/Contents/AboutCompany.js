import React, { Component } from 'react';
import Program1 from '../../images/img_program1.png';
import Program2 from '../../images/img_program2.png';
import Program3 from '../../images/img_program3.png';
import Program4 from '../../images/img_program4.png';
import Program5 from '../../images/img_program5.png';
import Program6 from '../../images/img_program6.png';
import Program7 from '../../images/img_program7.png';

class AboutCompany extends Component {
  render () {
    return (
      <div className="page_about_company bg_ptrn component_container">
		    <div className="jumbotron">
				  <div className="container"></div>
				</div>
				<div className="container">
          <div className="row">
				    <div className="col-md-10 col-md-offset-1 bg_white">
              <div className="txt_basic">
								<div className="col-md-6">
									<div className="company_img"></div>
								</div>
								<div className="col-md-6">
						    <div className="up_mark"></div>
									<p><strong>인성문화연구소</strong>는</p>
								  <p>척박한 현실의 교육과 삶 속에서</p> 
								  <p>인문학의 가치와 이상을 실현하고자 노력하고 있습니다.</p>
								  <p>다양한 가치들이 충돌하는 현대 사회의 혼란 속에서</p>
								  <p>인간의 존재와 세상의 움직임과 삶의 궁극적 가치에 관한</p>
								  <p>답을 찾기 위해</p>
								  <p>실천적 지혜를 추구하고자 노력하고 있습니다.</p>
								  <p>이러한 성찰을 바탕으로 현대 사회의 가치 혼란 속에서</p>
								  <p>올바른 방향성을 제공하고 </p>
									<p>굳건한 내면의 바탕을 형성하고자 합니다.</p>
                  <br  />
									<p><strong>인성문화연구소</strong>가</p>
								  <p>초점을 맞추는 교육과 삶은</p> 
								  <p>인간과 세상의 궁극적 의미를 성찰하고,</p>
								  <p>그 의미와 가치를 깊이 내면화하여,</p>
									<p>현대 사회 삶을 살아나갈 분명한 내면의 기준과 </p>
									<p>바탕을 갖추는 인성을 기르고자 하는 것입니다.</p><br />
								<div className="down_mark"></div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="bg_sub"><strong>프로그램 연구·개발</strong></div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 line_right">
										<img src={ Program1 } alt="program1" className="img_program" />
										<p>1. TST Program for Youth / Adult 개발<br />
										<h6>저작권 등록번호 제C-2016-023325호</h6></p>
									</div>
									<div className="col-md-6">	
										<img src={ Program2 } alt="program2" className="img_program" />
										<p>2. 자기주도학습코칭 프로그램 개발</p><br />
									</div>
								</div>
								<div className="line_center"></div>
								<div className="row">
									<div className="col-md-6 line_right">
										<img src={ Program3 } alt="program3" className="img_program" />
										<p>3. ‘생활 속 인문학’ 교육을 위한 프로그램 개발</p><br />
									</div>
									<div className="col-md-6">	
										<img src={ Program4 } alt="program4" className="img_program" />
										<p>4.  인문학에 기반 한 학교인성 프로그램 개발</p><br />
										<br />
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="bg_sub"><strong>자기주도학습코칭 &lt;Albatross&gt; 운영 </strong></div>
										<p>TST 프로그램에 기반한 자기주도학습코칭센터 알바트로스 운영</p>
											<div className="row">
												<div className="col-md-6">
													<img src={ Program5 } alt="program5" className="img_program" />
													<a href="http://cafe.naver.com/albatross2016" target="_blank">
														<button type="button" className="btn">카페 방문하기</button>
													</a> 
												</div>
												<div className="col-md-6">	
													<img src={ Program6 } alt="program6" className="img_program" />
													<a href="http://blog.naver.com/albatross_edu" target="_blank">
														<button type="button" className="btn">블로그 방문하기</button>
													</a>
												</div>
											</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="bg_sub"><strong>인문학 북카페 &lt;서재&gt; 운영</strong></div>
										<p> &lt;일상의 인문학&gt;이란 모토아래 동서양 고전 강독을 비롯한 다양한 인문강좌 운영 </p>
										<div className="row">
											<div className="col-md-12">
												<img src={ Program7 } alt="program7" className="img_program" />
										<a href="http://blog.naver.com/ojs303" target="_blank">
											<button type="button" className="btn"><p>북카페 &lt;서재&gt; 방문하기</p></button>
										</a></div>
										</div>
									</div>	
								</div>
						  </div>    
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default AboutCompany;