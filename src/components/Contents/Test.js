import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Test extends Component {
  render() {
    return (
      <div className="page_test component_container bg_ptrn">
        <div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<p><strong>TST 테스트</strong></p>
							<p>학습자 자신의 현재 학습 방법 및 성향에 관해 깊게 생각한 후, 자신에게 해당되는 문항을 선택하세요</p><br /> 
							<button type="button" className="btn-link" name='1'>STEP 1</button>
							<button type="button" className="btn-link" name="2">STEP 2</button>
							<button type="button" className="btn-link" name="3">STEP 3</button>
							<button type="button" className="btn-link" name="4">STEP 4</button>
							<button type="button" className="btn-link" name="5">STEP 5</button>
							<button type="button" className="btn-link" name="6">STEP 6</button>
							<button type="button" className="btn-link" name="7">STEP 7</button>
							<button type="button" className="btn-link" name="8">STEP 8</button>
              <button type="button" className="btn-link" name="9">STEP 9</button>
              <button type="button" className="btn-link" name="10">FINAL</button>
							<ProgressBar striped bsStyle="danger" now={10} />
						</div>
					</div>
				</div> 
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="page_test_body">
								<form>
										<div className="step1 row" style={{display:"block"}}>
											<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_1" />
																나는 친구들에 비해 비교적 머리가 좋다고 생각된다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_2" />
																장기간 지속적인 학습방법 보다는 단기간 집중적인 학습방법이 잘 맞는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_3" />
																철저한 시간 관리에 따른 계획적 학습방법보다는, 대략 해야 할 분량을 나눈 후 포괄적으로 학습하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_4" />
																암기식 학습법보다는 이해식 학습법이 잘 맞다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_5" />
																과목 마다 선호도 차이는 있지만, 이와 상관없이 모든 과목을 잘하기 위해 애쓰는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_6" />
																학습시간 외에 특별한 취미활동을 하기보다는 편하게 쉬는 편이다.
														</label>
													</div>
												</div>
											<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_7" />
																학습목표가 미래 지향적이기 보다는 현재 주어진 시험과 목표에 최선을 다하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_8" />
																주어진 상황을 긍정적이고 단순하게 받아들이는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_9" />
																타인의 충고는 별로 신경 쓰지 않는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_10" />
																타인의 입장보다는 나의 입장을 먼저 생각하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step1_11" />
																자존감은 높은 편이나, 경쟁적인 상황에서 내면적으로 분노나 불안감을 느낀다.
														</label>
													</div>
												</div>
										</div>
										<div className="step2 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_1" />
																노력한 양에 비해, 결과는 비교적 좋은 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_2" />
																부모님이나 선생님들로부터 조금만 더 공부하면 잘 할 것이라는 말을 항상 들어왔다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_3" />
																하고 싶은 일이 있으면 끝을 볼 때까지 몰입 한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_4" />
																누군가 더 잘 할 수 있는 새로운 방법을 가르쳐 준다고 해도, 지금 내 방법대로 하는 것이 더 좋다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_5" />
																손으로 쓰면서 외우는 방법보다 눈으로 보면서 이해하는 방법이 편하다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_6" />
																계획을 세워 공부하기보다는 그날 상황에 따라 공부한다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_7" />
																주위 사람들 기대에 부응하지 못할 때에는 좌절하기보다는 나하기에 달렸다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_8" />
																안 해서 그렇지 열심히 하면 잘 할 수 있다는 긍정적인 생각을 갖고 있다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_9" />
																성공을 위해 힘들게 노력하기 보다는, 내가 할 수 있는 만큼만 잘 하고 싶다. 
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_10" />
																모든 과목을 잘하기 위해 노력하기 보다는 잘하는 과목만 집중하고 싶다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step2_11" />
																과목 선호도에 따라 성적차이도 크다.
														</label>
													</div>
												</div>
											</div>
										<div className="step3 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_1" />
																초등학교 때까지만 해도 공부를 잘 했는데, 학년이 올라갈수록 성적이 떨어지고 있다 .
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_2" />
																성실하지 못하거나 노력하지 않는다는 말을 자주 듣는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_3" />
																오랜 시간 앉아 있어도 공부에 집중하는 시간은 늘 똑같다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_4" />
																장시간 반복적으로 공부하는 것이 힘들고, 짧게 집중해서 공부하는 것이 잘 맞다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_5" />
																기분에 따라 공부양이 들쑥날쑥 하지만, 세밀하게 계획을 세워하는 것보다 잘 맞는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_6" />
																실제 내 모습을 인정하기 두려워, 나 자신을 포장해서 표현하는 경우가 있다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_7" />
																장시간 앉아있으면 극도로 피로해지고, 어느 순간부터 집중이 잘 되지 않는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_8" />
																공부를 잘하고 싶지만, 열심히 하는 것이 힘들다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_9" />
																억지로 공부하기 보다는 하고 싶은 일을 하는 것이 더 낫다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_10" />
																타인에게 인정받고 싶은 욕구가 강하며, 그렇지 못할 때에는 좌절감을 느낀다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step3_11" />
																무례한 사람들을 보면 필요 이상으로 화가 나서 참을 수 없다.
														</label>
													</div>
												</div>
											</div>
										<div className="step4 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_1" />
																부모님과 선생님을 포함 주변의 기대를 많이 생각하며 공부한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_2" />
																공부를 할 때 현실적인 시험, 목표 보다는 미래의 꿈과 비전을 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_3" />
																공부를 시작할 때에는 계획을 세워 진행하지만, 여러 가지 상황에 따라 수정되는 경우가 많다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_4" />
																공부를 잘 하기위해 나만의 방법을 고집하기 보다는 다양한 방법을 배우며 바꾸려고 노력한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_5" />
																내가 해야 할 일에 대해서는 책임감을 갖고 최선을 다하기 위해 노력한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_6" />
																부모님이나 선생님께서 화낼 때 보다 속상해하실 때 더 견디기 힘들다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_7" />
																열심히 공부하고 싶은 마음과 놀고 싶은 마음 사이에서 갈등을 느끼는 경우가 많다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_8" />
																타인의 시선에 신경을 많이 쓰는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_9" />
																나 자신보다는 주위 사람들을 많이 배려하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_10" />
																나 자신의 현재 모습에 대해 만족하기 보다는, 더 발전하기 위해 노력한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step4_11" />
																멋지고 성공한 사람이 되고 싶은 욕구가 많다.
														</label>
													</div>
												</div>
											</div>
										<div className="step5 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_1" />
																좋은 대학에 가서, 멋지게 성공하고 싶지만, 이 과정은 겪고 싶지 않다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_2" />
																주변 친구들에게 인기가 많은 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_3" />
																계획적으로 공부하는 편이나, 하고 싶은 일이 생기면 우선순위에서 공부가 밀리는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_4" />
																집중이 잘 될 때에는 장시간 앉아 공부하지만, 자주 있는 경우는 아니다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_5" />
																세상에는 공부 외에도 멋지고 재미있는 일로 가득 차있다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_6" />
																나 혼자 잘 살기보다는 좋은 사람들과 함께 행복하게 사는 꿈을 꾼다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_7" />
																모범적인 삶 보다는 멋지고 자유로운 삶을 살고 싶다. 
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_8" />
																목표가 있을 때는 열심히 공부하지만, 공부를 좋아하는 것은 아니다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_9" />
																놀 땐 놀고, 공부할 때는 공부하자 라는 생각이 강하다. 
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_10" />
																모든 일에 긍정적이며, 다 잘될 거라는 생각을 갖고 산다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step5_11" />
																가끔은 날 이해하지 못하는 부모님이나 선생님의 모습에 서운할 때가 많다.
														</label>
													</div>
												</div>
											</div>
										<div className="step6 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_1" />
																공부 할 때 미루다가 급하게 몰아서 하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_2" />
																못하고 싫어하는 과목에 대해서는 포기하고 자신있는 과목만 집중한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_3" />
																공부에 집중하고 싶지만, 주변에 공부를 방해하는 요소들이 너무 많다 
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_4" />
																시험 때 항상 실수가 많고, 결과가 좋지 않으면 억울하고 답답하다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_5" />
																나 스스로 의지가 약한 편이라고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_6" />
																공부할 때 선생님의 성향에 좌우되는 편이며, 싫어하는 선생님 과목은 절대 공부하고 싶지 않다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_7" />
																좋은 결과가 나왔을 때 기뻐하실 부모님과 선생님을 생각하면 동기유발이 된다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_8" />
																막연하게 열심히 하면 다 잘 될 것이라고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_9" />
																남들에게 인정받고 멋지게 보이는 것이 중요하다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_10" />
																함께 어울리기 보다는 혼자 시간을 보내는 것을 좋아한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step6_11" />
																비록 내가 잘못했지만,  나를 이해하지 못하는 사람들을 생각하면 화가 난다.
														</label>
													</div>
												</div>
											</div>
										<div className="step7 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_1" />
																공부를 할 때에는 완벽하게 암기하기 위해 노력하지만, 그것에 비해 결과는 2% 부족하다는 생각이 든다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_2" />
																구체적인 목표를 세우고, 계획적으로 실천하기위해 노력한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_3" />
																공부 방법을 바꾸는 것이 필요하다고 생각하지만, 새로운 방법에 적응하는 것이 어렵다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_4" />
																공부는 학생으로서 당연히 해야 할 일이라고 생각하며 열심히 하기위해 노력한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_5" />
																주변사람들에게 모범생이라는 말을 자주 듣는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_6" />
																시험 때 열심히 공부하지 않는 친구들을 보면 이해할 수 없다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_7" />
																열심히 안해도 성적이 잘 나오는 친구들을 보면, 화가 나고 속상하다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_8" />
																하고 싶은 일도 많이 있지만 학생은 공부를 열심히 하는 것이 가장 중요하다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_9" />
																열심히 공부하는 것이 중요하다고 생각하지만, 가끔 나만 열심히 사는 것 같아 답답하다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_10" />
																다른 사람들에게 인정받고 싶은 욕구가 많고, 사람들에게 인정받는 대학이나 직업을 갖는 것이 중요하다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step7_11" />
																내가 힘들어도 소중한 사람들을 위해서라면, 어떠한 일도 할 수 있다는 책임감을 갖고 있다.
														</label>
													</div>
												</div>
											</div>
										<div className="step8 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_1" />
																공부를 할 때, 내가 할 수 있는 정도까지 딱 그 정도만 한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_2" />
																하기 힘든 일을 해야 하는 경우, 포기하고 다른 대안을 찾는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_3" />
																한 번에 꼼꼼하게 공부하기 보다는 대략적으로 훑어보며 공부하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_4" />
																시험을 보고 나면 “이 정도면 됐어” 라고 생각하는 편이고, 결과가 좋지 않을 때 “그럴 수도 있지” 하고 긍정적으로 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_5" />
																시험을 볼 때 실수가 많고, 두 번째 풀면 대부분 맞는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_6" />
																타인보다는 나를 먼저 생각하는 것이 솔직한 모습이며, 그렇지 않는 사람들을 위선이라고 생각한다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_7" />
																힘들게 열심히 노력하기 보다는, 스트레스를 안 받도록 편하게 하는 것이 낫다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_8" />
																매사에 심각하기 보다는 단순하고 명쾌하게 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_9" />
																성격이 무난하다 혹은 좋다 라는 말을 자주 듣는다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_10" />
																타인이나 주변 상황에 좌우되지 않는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step8_11" />
																현재의 내 모습에 만족하지만, 문득 잘못 될 경우를 생각하면 무섭고 겁이 난다.
														</label>
													</div>
												</div>
											</div>
										<div className="step9 row">
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_1" />
																평상시 다른 일이 생기면, 공부가 우선순위에서 밀리는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_2" />
																집중력이 떨어져서 장시간 몰입하기 힘들기 때문에, 짧게 끊어서 공부하는 편이다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_3" />
																혼자서 공부하기 보다는 마음에 맞는 친구들과 함께 공부하는 것이 더 효율적이다. 
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_4" />
																공부말고 내가 잘 할 수 있는 일이 많이 있다고 생각한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_5" />
																긍정적인 생각과 밝은 분위기로 주위 사람들에게 인기가 많다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_6" />
																한계를 넘어서야 하는 상황이 오면, 감당하기 보다는 포기하고 싶다.
														</label>
													</div>
												</div>
												<div className="col-md-6">
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_7" />
																열심히 했지만, 인정을 받지 못하거나 결과가 좋지 않으면 화가 난다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_8" />
																타인의 충고보다는 내 의지대로 행동한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_9" />
																꾸중을 들으면 반성하고 열심히 해야겠다고 생각하지만, 다시 제자리인 내 모습을 발견한다. 
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_10" />
																한 가지에 집중하기 보다는 다양한 분야에 관심과 호기심을 갖고 도전한다.
														</label>
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" name="step9_11" />
																힘든 상황에서도 좌절하지 않고 상황에 맞게 잘 해결해 나간다.
														</label>
													</div>
												</div>
											</div>
									</form>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="btn_test">
							<button type="button" className="btn btn_before" style={{display:"none"}}>뒤로</button>    
							<button type="button" className="btn btn_after" style={{padding:"14px 100px"}}>다음</button>
						</div>

						<div className="btn_test btn_test_last">
							<button type="button" className="btn">뒤로</button>    
							<input type="submit" className="btn" name="submit" />
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default Test;