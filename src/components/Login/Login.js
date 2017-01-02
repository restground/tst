import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="page_login bg_ptrn noscroll">
        <div className="content">
          <div className="container">
           <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-6 col-md-offset-4 col-sm-offset-3 col-xs-offset-3">
                    <div className="img_logo"></div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="아이디" />
                    <input type="password" className="form-control" placeholder="비밀번호" />
                </div>
                <div className="btn_group_login">
                <button type="button" className="btn btn_login btn-block">로그인</button>    
                <button type="button" className="btn btn_signup btn-block">회원가입</button>
                <button type="button" className="btn-link">비밀번호를 잃어버리셨나요?</button>
                </div>
                </div>
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default Login;