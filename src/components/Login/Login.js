import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="page_login bg_ptrn noscroll">
        <div className="content">
          <div className="container">
           <div className="row">
							<div className="col-md-12">
								<div className="img_logo"></div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-md-offset-4">
								<form className="form-inline">
									<div className="form-group">
										<label className="sr-only" htmlFor="id">아이디</label>
										<input type="text" className="form-control" id="id" placeholder="아이디" />
									</div>
									<div className="form-group">
										<label className="sr-only" htmlFor="password">비밀번호</label>
										<input type="password" className="form-control" id="password" placeholder="비밀번호" />
									</div>
									<div className="btn_login">
										<button type="button" className="btn btn-block">회원가입</button>
										<button type="button" className="btn btn-block">로그인</button>    
										<button type="button" className="btn-link btn-block">비밀번호를 잃어버리셨나요?</button>
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

export default Login;