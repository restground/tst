import $ from 'jquery';

const step = {};
step.current=1;

$( document ).ready(function() {
  
  //테스트 페이지 - 버튼 네비게이션 시작
  
  $('.btn-link').click(function(){
    
    let name = this.name;
            
    step.select = parseInt(name, 10);
    step.progress = step.select*10;
    step.formOn = '.step'+step.select;
    step.formOff = '.step'+step.current;
    console.log(step);
    
    $('.progress-bar').css('width', step.progress+'%');
    $(step.formOff).hide();
    $(step.formOn).toggle();
    
    if(step.select===1 && step.current ===10){
      $('.btn_before').hide();
      $('.btn_after').show();
      $('.btn_after').css({"padding" : "14px 100px",
                            "margin-left": "0"});
    } else if(step.select===10 && step.current ===1){
      $('.btn_after').hide();
      $('.btn_before').show();
      $('.btn_before').css("padding", "14px 100px");
    } else if(step.select === 1) {
      $('.btn_before').hide();
      $('.btn_after').css({"padding" : "14px 100px",
                            "margin-left": "0"});
    } else if(step.select === 10) {
      $('.btn_after').hide();
      $('.btn_before').css({"padding" : "14px 100px"});
    } else {
      $('.btn_before').show();
      $('.btn_after').show();
      $('.btn_before').css("padding","14px 50px");
      $('.btn_after').css({"padding" : "14px 50px",
                            "margin-left": "30px"});
    }
    
    step.current = step.select;
  });
  
  $('.btn_before').click(function(){
    if(step.current !== 1) {
      step.select = step.current - 1;
      step.progress = step.select*10;
      
      step.formOn = '.step'+step.select;
      step.formOff = '.step'+step.current;
                
      $('.progress-bar').css('width', step.progress+'%');
      $(step.formOff).hide();
      $(step.formOn).toggle();
      
      if(step.select === 1) {
        $('.btn_before').hide();
        $('.btn_after').css({"padding" : "14px 100px",
                            "margin-left": "0"});
      } else if(step.select === 10) {
        $('.btn_after').hide();
        $('.btn_before').css("padding", "14px 100px");
      } else {
        $('.btn_before').show();
        $('.btn_after').show();
        $('.btn_before').css("padding","14px 50px");
        $('.btn_after').css({"padding" : "14px 50px",
                            "margin-left": "30px"});
      }
      
      step.current = step.select;
    } 
  });
  
  $('.btn_after').click(function(){
    if(step.current !== 10) {
      step.select = step.current + 1;
      step.progress = step.select*10;
      
      step.formOn = '.step'+step.select;
      step.formOff = '.step'+step.current;
                
      $('.progress-bar').css('width', step.progress+'%');
      $(step.formOff).hide();
      $(step.formOn).toggle();
      
      if(step.select === 1) {
        $('.btn_before').hide();
        $('.btn_after').css({"padding" : "14px 100px",
                            "margin-left": "0"});
        
      } else if(step.select === 10) {
        $('.btn_after').hide();
        $('.btn_before').css("padding", "14px 100px");
      } else {
        $('.btn_before').show();
        $('.btn_after').show();
        $('.btn_before').css("padding","14px 50px");
        $('.btn_after').css({"padding" : "14px 50px",
                            "margin-left": "30px"});
        
      }
      
      step.current = step.select;
    } 
  });
  
  //테스트 페이지 - 버튼 네비게이션 종료
  
  //결제하기 페이지 - css 효과 적용

  $(".normal .form-group").click(function() {    
    if($(".special").hasClass("selected")){
      $(".special").removeClass("selected");
      $(".normal").addClass("selected");
    }else if($(".special_plus").hasClass("selected")){
      $(".special_plus").removeClass("selected");
      $(".normal").addClass("selected");
    }else {
      $(".normal").addClass("selected");
    }
  });
  
  $(".special .form-group").click(function() {    
    if($(".normal").hasClass("selected")){
      $(".normal").removeClass("selected");
      $(".special").addClass("selected");
    }else if($(".special_plus").hasClass("selected")){
      $(".special_plus").removeClass("selected");
      $(".special").addClass("selected");
    }else {
      $(".special").addClass("selected");
    }
  });
  
  $(".special_plus .form-group").click(function() {    
    if($(".special").hasClass("selected")){
      $(".special").removeClass("selected");
      $(".special_plus").addClass("selected");
    }else if($(".normal").hasClass("selected")){
      $(".normal").removeClass("selected");
      $(".special_plus").addClass("selected");
    }else {
      $(".special_plus").addClass("selected");
    }
  });
  
  //결제하기 페이지 - css 효과 종료
  
});
