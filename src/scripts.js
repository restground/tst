import $ from 'jquery';

const step = {};
step.current=1;

$( document ).ready(function() {
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
    
    if(step.select === 1) {
      $('.btn_before').hide();
      $('.btn_after').css("padding", "14px 100px");
    } else if(step.select === 10) {
      $('.btn_after').hide();
      $('.btn_before').css("padding", "14px 100px");
    } else {
      $('.btn_before').show();
      $('.btn_after').show();
      $('.btn_before').css("padding","14px 50px");
      $('.btn_after').css("padding","14px 50px");
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
        $('.btn_after').css("padding", "14px 100px");
      } else if(step.select === 10) {
        $('.btn_after').hide();
        $('.btn_before').css("padding", "14px 100px");
      } else {
        $('.btn_before').show();
        $('.btn_after').show();
        $('.btn_before').css("padding","14px 50px");
        $('.btn_after').css("padding","14px 50px");
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
        $('.btn_after').css("padding", "14px 100px");
        
      } else if(step.select === 10) {
        $('.btn_after').hide();
        $('.btn_before').css("padding", "14px 100px");
      } else {
        $('.btn_before').show();
        $('.btn_after').show();
        $('.btn_before').css("padding","14px 50px");
        $('.btn_after').css("padding","14px 50px");
        
      }
      
      step.current = step.select;
    } 
  });
  
});
