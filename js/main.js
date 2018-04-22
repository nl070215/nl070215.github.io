$(function () { // wait for document ready
    
    
    
    
    // build scene Chapter 1 Block Text
		var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger0",
            triggerHook: 0,
            duration: 900
        })
				.setPin("#pin0")
				.addIndicators({name: "parallax0 (duration: 900)"}) // add indicators (requires plugin)
				.addTo(controller);
    
    
    
		// build scene Chapter 2 Block Text
		var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            triggerHook: 0,
            duration: 900
        })
				.setPin("#pin1")
				.addIndicators({name: "parallax1 (duration: 900)"}) // add indicators (requires plugin)
				.addTo(controller);
    
    
    
        // build scene Chapter 3 Block Text
		var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            triggerHook: 0,
            duration: 900
        })
				.setPin("#pin2")
				.addIndicators({name: "parallax2 (duration: 900)"}) // add indicators (requires plugin)
				.addTo(controller);
    

    
    var scene = new ScrollMagic.Scene({triggerElement: "#uke", duration: 200})
    
    .on("enter", function () {
          ukeVid.play();
        })
    
    .on("leave", function () {
          ukeVid.pause();
        })
  

});
                    

    






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
// $(document).ready(function(){   
    
 //   TweenMax.from(".sign", 3, {rotation: -50,   transformOrigin: '80% 100%'}, 2);

    //start largeTree animation  
//    TweenLite.to(".largeTree", 2.5, { ease: Power0.easeNone, x: "100" });

    //start headline animation  
//    TweenLite.to(".continue", 3, { ease: Power0.easeNone, y: "-200" });

    //$('.owl-carousel').owlCarousel({
        //margin: 10,
        //items: 1,
        //stagePadding: 100,
        //nav: true,
        //loop: true
   // });
    
   
 
    
    //add more here
        
// });


 

