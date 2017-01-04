import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Form, FormGroup, FormControl} from 'react-bootstrap';

const normalTitle = (
  <div>
    <h3>Normal Pay</h3>
    <p>가장 기본적인 검사를 통해 학습 성향을 파악하실 수 있는 상품</p>
  </div>
);

const specialTitle = (
  <div>
    <h3>Special Pay</h3>
    <p>기본적인 검사와 더불어 좀 더 세부적인 학습 성향을 파악하실 수 있는 상품</p>
  </div>
);

const specialPlusTitle = (
  <div>
    <h3>Special Pay +</h3>
    <p>검사와 함께 전문가의 상담을 통해 테스트 결과를 면밀하게 분석할 수 있는 상품</p>
  </div>
);

class Payment extends Component {
  render() {
    return (
      <div className="page_payment noscroll">   
          <Grid>
            <Row>
              <Col xs={12} md={4} className="normal">
                <Panel header={normalTitle}>
                  <Row>
                    <Col xs={6} md={6}>
                      <p>Normal (1개)</p>
                      <br/>
                      <p>Package 1 (17개)</p>
                      <p>Package 2 (30개)</p>
                      <p>Package 3 (65개)</p>
                    </Col>
                    <Col xs={6} md={6} className="text_price">
                      
                    </Col>
                  </Row>
                </Panel>
                <Form>
                  <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="옵션 선택">
                    <option value="select">옵션 선택</option>
                    <option value="normal_basic">Normal (1개)</option>
                    <option value="normal_package_1">Package 1 (17개)</option>
                    <option value="normal_package_2">Package 2 (30개)</option>
                    <option value="normal_package_3">Package 3 (65개)</option>
                  </FormControl>
                  <FormControl type="text" placeholder="수량 입력"/>
                  <FormControl type="submit" className="btn_paid" value="결제하기" />
                </FormGroup>
                </Form>
              </Col>
              <Col xs={12} md={4} className="special">
                <Panel header={specialTitle}>
                  <Row>
                    <Col xs={6} md={6}>
                      <p className="has_small">Special (1개)</p>
                      <p className="text_small">(형제, 자매 패키지 10%할인)</p>
                      <p>Package 1 (12개)</p>
                      <p>Package 2 (21개)</p>
                      <p className="has_small">Package 3 (50개)</p>
                      <p className="text_small">(재계약 시 5% 할인)</p>
                    </Col>
                    <Col xs={6} md={6} className="text_price">
                      
                    </Col>
                  </Row>
                </Panel>
                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="옵션 선택">
                    <option value="select">옵션 선택</option>
                    <option value="normal_basic">Special (1개)</option>
                    <option value="normal_package_1">Package 1 (12개)</option>
                    <option value="normal_package_2">Package 2 (21개)</option>
                    <option value="normal_package_3">Package 3 (50개)</option>
                  </FormControl>
                  <FormControl type="text" placeholder="수량 입력"/>
                  <FormControl type="submit" className="btn_paid" value="결제하기" />
                </FormGroup>
              </Col> 
              <Col xs={12} md={4} className="special_plus">
                <Panel header={specialPlusTitle}>
                  <Row>
                    <Col xs={6} md={6}>
                      <p className="has_small">Special + Consulting</p>
                      <p className="text_small">(진단 및 상담 포함)</p>
                      <p className="has_small">부모 + 자녀 Package</p>
                      <p className="text_small">(부모님 50% 할인)</p>
                    </Col>
                    <Col xs={6} md={6} className="text_price">
                      
                    </Col>
                  </Row>
                </Panel>
                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="옵션 선택">
                    <option value="select">옵션 선택</option>
                    <option value="specialPlus_basic">Special + Consulting</option>
                    <option value="specialPlus_package">부모 + 자녀 Package</option>
                  </FormControl>
                  <FormControl type="text" placeholder="수량 입력"/>
                  <FormControl type="submit" className="btn_paid" value="결제하기" />
                </FormGroup>
              </Col> 
            </Row>
          </Grid>
      </div>
    );
  }
}

export default Payment;