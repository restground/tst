import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <Navbar inverse fixedBottom>
          <p>인성문화연구소 | 서울사무소 : 서울시 도봉구 노해로 397-14, 11층 | 02-992-8264 | 02-992-8266</p>
          <p>사업자번호 122-86-31734 | 대표자 박재신 | COPYRIGHT &copy 2016 INSEONGCULTURE all rights reserved</p>
        </Navbar>
      </div> 
    );
  }
}

export default Footer;