// Thanks to http://webdesign.tutsplus.com/tutorials/complete-websites/create-a-parallax-scrolling-website-using-stellar-js/
jQuery(document).ready(function ($) {
  var ua = navigator.userAgent, isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
  if (isMobileWebkit) {
    $('html').addClass('mobile');
  }
  
  var resizeElements = function() {
      var windowHeight = $(window).height();
      
      $('#introForeground').css("height", windowHeight + 'px');
      $('#introBackground').css("height", windowHeight + 'px');
      $('#slideIntro').css("height", windowHeight + 'px');
      
      var farkRight = $('#farkasBus').offset().left + $('#farkasBus').outerWidth();
      var maliaLeft = $('#maliaBus').offset().left;
      $('#introBox').css("left", (farkRight + ((maliaLeft - farkRight) / 2) - ($('#introBox').outerWidth() / 2)) + 'px');
      
      var maliaStoryRight = $('#maliaStoryBox').offset().left + $('#maliaStoryBox').outerWidth();
      var farkasStoryLeft = $('#jacobStoryBox').offset().left;
      var dinoOverlap = $('#maliaStoryBox').outerWidth() * 0.2;
      var prevHeight = $('#dinoAttack').outerHeight();
      $('#dinoAttack').css("width", farkasStoryLeft - maliaStoryRight + dinoOverlap + 'px');
      $('#dinoAttack').css("left", maliaStoryRight - (dinoOverlap / 2) + 'px');
      var curHeight = $('#dinoAttack').outerHeight();
      $('#dinoAttack').css("bottom", parseInt($('#dinoAttack').css("bottom"), 10) + Math.sqrt(prevHeight - curHeight) + 'px');
      
      $('#usStoryBox').css("left", ($('#slideStory').outerWidth() - $('#usStoryBox').outerWidth()) / 2);

      if (!isMobileWebkit) {
        $.stellar({
          horizontalScrolling: false,
        });
      }
  };
  
  // Resize all foreground elements to fit the window
  $(window).resize(function() {resizeElements();});
  $(window).ready(function() {resizeElements();});
  resizeElements();
  
  $('#usStoryBox').load(function() {
    $('#dinoAttack').css("bottom", $('#slideStory').outerHeight() - $('#usStoryBox').position().top - ($('#dinoAttack').outerHeight() * .15) + 'px');
  });

  $(function(){
     var iScrollInstance;

     if (isMobileWebkit) {
       // iScrollInstance = new iScroll('iScrollWrapper');
       // 
       // $('#iScrollScroller').stellar({
       //   scrollProperty: 'transform',
       //   positionProperty: 'transform',
       //   horizontalScrolling: false,
       // });
     } else {
       $.stellar({
         horizontalScrolling: false,
       });
     }
  });
   
  var links = $('.navItems').find('li');
      slide = $('.slide');
      mywindow = $(window);
      htmlbody = $('html,body');
      
    // waypoints
    slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down') {
            $('.navItems li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else {
            $('.navItems li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });
    
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navItems li[data-slide="1"]').addClass('active');
            $('.navItems li[data-slide="2"]').removeClass('active');
        }
    });
    
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
});