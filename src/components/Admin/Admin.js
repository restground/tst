import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <div className="page_home noscroll">
        <Jumbotron className="home_main">
          <Grid>
            <div className="home_main_text">
              <h3>TST PROGRAM</h3>
              <h3>학습 성향 및 방법에 관한 검사</h3>
              <p>
                <Button
                  className="btn_red" 
                  bsStyle="default"
                  bsSize="large"
                  href="/test"
                  target="_blank">
                  테스트 시작하기
                </Button>
              </p>
            </div>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default Admin;