
   //Init ScrollMagic
    //var controller = new ScrollMagic.Controller();
                  
    // build a scene
    //var ourScene = new ScrollMagic.Scene({
        //triggerElement: '#animate01'
    //})
     //.setClassToggle('#animate01', 'fade-in') //add class to animate01             
   // .addIndicators({
        //name: 'fade header',
        //indent: 200
    //})
    //.addTo(controller);             
    
    // build a scene
  //  var ourScene = new ScrollMagic.Scene({
       // offset: 200,
        //triggerElement: '#animate02'
   // })
    // .setClassToggle('#animate02', 'fade-in') //add class to animate02             
    //.addIndicators({
        //name: 'fade subheader',
        //indent: 200
   // })
    //.addTo(controller);  

                  
//});



//start sign animation
$(document).ready(function(){   
TweenMax.from(".sign", 3, {rotation: -60, transformOrigin: '80% 100%'}, 2);
    });

//start largeTree animation  
TweenLite.to(".largeTree", 2.5, { ease: Power0.easeNone, x: "200" });

//start headline animation  
TweenLite.to(".headline", 3.5, { ease: Power0.easeNone, y: "-200" });

$('.owl-carousel').owlCarousel({
    margin: 10,
    items: 1,
    stagePadding: 100,
    nav: true,
    loop: true
  });
 