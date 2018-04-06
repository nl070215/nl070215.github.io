
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
    
    TweenMax.from(".sign", 3, {rotation: -50,   transformOrigin: '80% 100%'}, 2);

    //start largeTree animation  
    TweenLite.to(".largeTree", 2.5, { ease: Power0.easeNone, x: "100" });

    //start headline animation  
    TweenLite.to(".continue", 3, { ease: Power0.easeNone, y: "-200" });

    $('.owl-carousel').owlCarousel({
        margin: 10,
        items: 1,
        stagePadding: 100,
        nav: true,
        loop: true
    });
    
    
/* carousel-fill-background.js */

// data object for the gallery 
var gallery = {
  name: "Sobriety Point CH 2",
  photos: [
    {
      index: 0,
      url: '../img/Sample_SP_Castillo.jpg',
      caption: 'Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      index: 1,
      url: '../img/Sample_SP_Castillo.jpg',
      caption: 'Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      index: 2,
      url: '../img/Sample_SP_Castillo.jpg',
      caption: 'Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    }
  ]
};

// function to rE9turn HTML for each indicator
var newIndicator = function(i) {
  var active = '';
  if (i === 0) {
    active = ' active';
  }
  return '<li data-target="#myCarousel" data-slide-to="' + i + '" class="' + active + '"></li>';
};

// function to return HTML for each photo
var newPhoto = function(item) {
  var active = item.index === 0 ? ' active' : '';
  var html = '<div class="carousel-item' + active + '">' +
  '<div class="bg-cover" style="background: url(' + item.url + ') no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;" ></div>' +
  '<div class="container"><div class="carousel-caption">' + 
  '<p>' + item.caption + '</p>' +
  '</div></div></div>';
  return html;
};

// function to return HTML for a new data-driven gallery
var newGallery = function(data) {
  // new indicator HTML string
  var indicatorHtml = '';
  
  // new photos HTML string
  var photosHtml = '';
  
  // update gallery name
  $('#gallery-name').html(data.name);
  
  // loop through data objects
  for (var i = 0; i < data.photos.length; i++) {
    // add an indicator
    indicatorHtml += newIndicator(i);

    // add a photo
    photosHtml += newPhoto(data.photos[i]);
  }

  // use $ put new indicator HTML into page
  $('.carousel-indicators').html(indicatorHtml);

  // use $ to put new photos HTML into page
  $('.carousel-inner').html(photosHtml);
};

// call our new gallery function and pass in the data
newGallery(gallery);

    
    
    //add more here
        
});


 

