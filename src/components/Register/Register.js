import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="page_register noscroll bg_ptrn">
        <div className="container">
				  <div className="bg_white col-md-6 col-md-offset-3">
            <div className="row">
						  <div className="img_logo"></div>
						</div>
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<form className="form-inline">
										<div className="form-group">
											<label className="sr-only" htmlFor="id">아이디</label>
											<input type="text" className="form-control" id="id" placeholder="아이디를 입력해주세요" />
										</div>
										<div className="form-group">
											<label className="sr-only" htmlFor="email">이메일</label>
											<input type="email" className="form-control" id="email" placeholder="이메일을 입력해주세요" />
										</div>
										<div className="form-group">
											<label className="sr-only" htmlFor="name">이름</label>
											<input type="text" className="form-control" id="name"placeholder="이름을 입력해주세요" />
										</div>
										<div className="form-group">
											<label className="sr-only" htmlFor="id">비밀번호</label>
											<input type="password" className="form-control" id="password" placeholder="비밀번호를 입력해주세요" />
										</div>
										<div className="form-group">
											<label className="sr-only" htmlFor="confirm">비밀번호 확인</label>
											<input type="text" className="form-control" id="confirm_password" placeholder="비밀번호를 다시 한번 입력해주세요" />
										</div>
										<div className="form-group form_last">
											<label className="sr-only" htmlFor="code">보안코드</label>
											<input type="password" className="form-control" id="code" placeholder="보안코드를 입력해주세요" />
										</div>
										<p><span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span> 
											보안코드는 테스트할 학생들이 입력하게 될 코드번호입니다. <br /> &nbsp;&nbsp;&nbsp;&nbsp;단,계정비밀번호와는 다르게 입력해주세요.</p>
										<div className="btn_signup">
											<button type="submit" className="btn btn-block" value="submit" >회원가입</button>
										</div>
									</form>
								</div>
							</div>
						</div>	
					</div>
      </div>
    );
  }
}

export default Register;