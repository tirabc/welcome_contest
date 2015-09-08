// sounds here : http://themushroomkingdom.net/sounds/wav/mk64/mk64_finallap.wav
$(document).ready(function(){


  // initialize!
  var option = {
    speed : 20,
    duration : 2,
    stopImageNumber : -1,
    startCallback : function() {
      console.log("startcallback",window.started);
      if( window.started ) return false;
      window.started = true;
      console.log('start');
      window.play = new Audio('sounds/mk64_finallap.wav');
      window.play.play();
      window.setTimeout(
        function(){ $('div.roulette').roulette('stop') },
        1000
      );
    },
    slowDownCallback : function() {
      console.log('slowDown');
    },
    stopCallback : function($stopElm) {
      console.log('stop');
      window.play.pause();
      new Audio('sounds/win.mp3').play();
      window.started = false;
    }
  }
  $('div.roulette').roulette(option); 

  // START!
  $('.start').click(function(){

    console.log("startcallback",window.started);
    if( window.started ) return false;
    $('div.roulette').roulette('start');  
  });

  $("#popup").click(function(){
    $(this).hide();
  });
  

});