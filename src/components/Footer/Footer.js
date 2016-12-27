import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <Navbar inverse fixedBottom>
          <p>인성문화연구소 | 경기도 고양시 일산동구 경의로 333, 515-2 | 031-902-7773 | <span className="copyNum">저작물등록번호:제C-2016-023325호</span> </p>
          <p>사업자번호 122-86-31734 | 대표자 박재신 | COPYRIGHT &copy 2016 INSEONGCULTURE all rights reserved</p>
        </Navbar>
      </div> 
    );
  }
}

export default Footer;