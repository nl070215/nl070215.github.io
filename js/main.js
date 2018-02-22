$(document).ready(function(){
   //Init ScrollMagic
    var controller = new ScrollMagic.Controller();
                  
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#animate01'
    })
     .setClassToggle('#animate01', 'fade-in') //add class to animate01             
    .addIndicators({
        name: 'fade header',
        indent: 200
    })
    .addTo(controller);             
    
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        offset: 200,
        triggerElement: '#animate02'
    })
     .setClassToggle('#animate02', 'fade-in') //add class to animate02             
    .addIndicators({
        name: 'fade subheader',
        indent: 200
    })
    .addTo(controller);  

                  
});