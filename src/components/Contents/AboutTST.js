import React, { Component } from 'react';

class AboutTST extends Component {
  render() {
    return (
      <div className="page_about_tst bg_ptrn component_container">
        <div className="jumbotron">
          <div className="container">
            
          </div>
        </div>
        <div className="container about_tst_main">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        1. TST PROGRAM이 의미하는 것은 무엇입니까?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                      TST Program은 Triangle Structured Test Program,<br/>
                      즉 삼각형 구조를 가진 학습(업무)성향 테스트 프로그램을 의미합니다.<br/>
                      청소년들을 위한 TST Program for Youth와 TST Program for Adult 두 종류가 있습니다.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2. TST PROGRAM 구성하는 에너지요인(ENERGY FACTOR)
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                      학습(업무)을 수행할 때, 집중적으로 사용하는 힘의 중심에 따라 지적, 정서적, 행동적 세 가지 유형으로 분류<br />
                      <br />
                      ① 지적요인  (intellectual factor)<br />
                      학습(업무)을 수행할 때, 머리의 힘을 집중적으로 사용하는 유형으로,<br />
                      자신의 지능이 중심이 되어 학습(업무)을 진행하는 경우<br />
                      <br />
                      ② 정서적요인 (emotional factor)<br />
                      학습(업무)을 수행할 때, 감정의 힘을 집중적으로 사용하는 유형으로,<br />
                      자신의 감정이 중심이 되어 학습(업무)을 진행하는 경우<br />
                      <br />
                      ③ 행동적요인 (behavioral factor)<br />
                      학습(업무)을 수행할 때, 행동의 힘을 집중적으로 사용하는 유형으로,<br />
                      자신의 행동이 중심이 되어 학습(업무)을 진행하는 경우
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        3. TST PROGRAM 구성하는 선호도요인(PREFERENCE FACTOR)
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                      학습(업무)을 수행할 때, 태도 및 성향에 따라 성실형, 의존형, 무기력형 세 가지 유형으로 분류<br />
                      <br />      
                      ① 성실형  (integrity)<br />
                      자신이 가지고 있는 기본적인 힘을 이용하여, 학습(업무)동기, 자기효능감, 실천력을 가지고 <br />
                      적극적으로 학습(업무)에 임하는 유형<br />
                      <br />
                      ② 만족형  (Satisfied)<br />
                      자신이 가지고 있는 기본적인 힘에 만족하면서, 학습(업무)동기, 자기효능감,<br />
                      실천력을 발휘하지 못한 채, 소극적으로 학습(업무)에 임하는 유형<br />
                      <br />
                      ③ 무기력형  (negligence)<br />
                      자신이 가지고 있는 기본적인 힘도 발휘하지 못하고 학습(업무)동기, 자기효능감,<br />
                      실천력 모든 면에서 무기력하게 학습(업무)에 임하는 유형
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        4. TST PROGRAM의 두 가지 요인에 따른 9가지 유형
                      </a>
                    </h4>
                  </div>
                  <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="panel-body">
                      9가지 유형의 각 각의 성향과 특성에 따라 가장 적합한 학습(업무) 방법에 대한 솔루션 제시<br />
                      <br />
                      ① I-I (머리 성실형)  ② I-D (머리 의존형)  ③ I-N (머리 무기력형)<br />
                      ④ E-I (정서 성실형)  ⑤ E-D (정서 의존형) ⑥ E-N (정서 무기력형)<br />
                      ⑦ B-I (행동 성실형)  ⑧ B-D (행동 의존형) ⑨ B-N (행동 무기력형)
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        5. TST PROGRAM은 누구에게 무엇때문에 필요한가?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                    <div className="panel-body">
                      ① 학습자(업무자) 자신<br />
                      <br />
                           검사를 통해, 현재 학습자(업무자)가 처해있는 정서적, 물리적 학습(업무) 환경을<br />
                           명확하게 분석한 후, 이를 통해 자신의 성향에 따른 최적의 학습(업무) 방법을<br />
                           찾는데 도움이 되는 학습 성향검사입니다.<br />
                      <br />
                      ② 학습자와 - 부모님, 학교선생님, 학원선생님<br />
                           검사를 통해, 현재 학습자가 처해있는 정서적, 물리적 학습 환경을 명확하게<br />
                           안 후, 부모님과 선생님의 입장에서 모범답안적인 방법을 요구하고, 가르치기보다<br />
                           는 학습자의 성향에 따른 최적의 학습방법을 함께 찾아내며 이를 통해 학습자가<br />
                           성장, 발전할 수 있도록 도움을 주는 학습 성향검사입니다.<br />
                      <br />
                      ③ 업무자와 관계하는 - 직장 동료 및 상사<br />
                           검사를 통해, 현재 업무자가 처해있는 정서적, 물리적 학습 환경을 명확하게<br />
                           안 후, 상사나 각자의 입장에 따른 모범답안적인 방법을 요구하고, 지시하기보다<br />
                           는 업무자의 성향에 따른 최적의 업무방법을 함께 찾아내며 이를 통해 업무자가<br />
                           성장, 발전할 수 있도록 도움을 주는 업무 성향검사입니다.<br />
                      <br />
                      ④ 학습(업무)성향에 관해 관심을 갖고 전문가가 되고 싶은 분들<br />
                           학교, 학원, 직장에서 가장 중요한 핵심이 되는 학습( 업무) 성향을 바로 알고,<br />
                           이것을 통해 효율적인 학습(업무) 결과를 가져올 수 있도록, 직접적인 상담이<br />
                           가능한 학습(업무) 성향 전문가로서의 길을 가고 싶거나, 실무 담당은 아니지만<br />
                           전문적으로 이 과정을 배우고 싶은 분들을 위한 과정
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingSix">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        6. TST PROGRAM은 어떤 효과가 있는가?
                      </a>
                    </h4>
                  </div>
                  <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                    <div className="panel-body">
                      ① 학습자(업무자) 자신<br />
                      <br />
                            열심히 노력했으나 학습(업무) 결과가 좋지 않을 때,<br />
                            누군가의 모범적인 방법을 배우고 따라했지만 효과가 나지 않을 때,<br />
                            검사를 통해 자신의 성향을 알고, 장.단점을 파악한 후<br />
                            이에 따른 자신만의 방법을 발전시켜 나감에 따라 효율적이고 효과적인 결과를<br />
                            얻을 수 있다.<br />
                      <br />
                      ② 학습자와 관계하는 - 부모님, 학교선생님, 학원선생님<br />
                      <br />
                           부모님:<br />
                             아이가 열심히 하지 않거나, 혹은 열심히 해도 안 되는 경우 그 원인을 몰라<br />
                             낙담하고, 부모님이 생각하기에 좋은 방법으로 아이들 다그침에 따라<br />
                             점점 아이와의 관계가 힘들어 지는 경우, 검사를 통해 “우리 아이가 도대체<br />
                             왜 이런가?“ 라는 생각에서 ”우리 아이가 이래서 이랬구나“ 라는 변화를 통해<br />
                             아이의 성향을 좀 더 이해하고, 관심을 갖고, 아이와의 교감을 통해 함께 노력하며
                             발전할 수 있는 과정이 마련됨.<br />
                      <br />
                           선생님:<br />
                             학생의 성향을 정확하게 알게 되면서, 성적이 나오지 않는 학생들에게 무조건<br />
                             선생님의 성향에 따라 모범적인 방법으로 가르치고, 정형화된 학습방법을 제시하기<br />
                             보다는 아이의 성향에 따라 단계적으로 적합한 방법을 제시해 줌으로써,<br />
                             효과적인 결과를 얻을 수 있다.<br />
                      <br />
                      ③ 업무자와 관계하는 - 직장 동료 및 상사<br />
                             업무자의 성향을 정확하게 알게 되면서, 업무가 진행되는 과정에서 무조건 각자<br />
                             의 성향이나 정형화된 방법에 따른 해결책을 제시하기 보다는 각자의 성향에<br />
                             따른 업무 스타일을 이해하고 존중해 줌으로써, 효율적인 결과를 얻을 수 있다.<br />
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

export default AboutTST;