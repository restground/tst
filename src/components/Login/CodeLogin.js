import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="page_login noscroll">
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
										<label className="sr-only" htmlFor="id">코드번호</label>
										<input type="text" className="form-control" id="id" placeholder="코드번호" />
									</div>
									<div className="form-group">
										<label className="sr-only" htmlFor="password">비밀번호</label>
										<input type="password" className="form-control" id="password" placeholder="비밀번호" />
									</div>
									<div className="btn_login">
										<button type="button" className="btn btn-block">로그인</button>    
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