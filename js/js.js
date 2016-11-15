$(document).ready(function(){
  $('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
    
  $('#header').scroolly([
      {
          to: 'con-top + 100el',
          direction: 1,
          css: {
              '-transition': 'none',
              position: 'absolute',
              top: ''
          }
      },
      {
          direction: 1,
          from: 'con-top + 100el',
          css: {
  //                        '-transition': 'all .2s',
              '-transition': 'none',
              position: 'fixed',
              top: '-100px'
          }
      },
      {
          to: 'con-top',
          direction: -1,
          css: {
              '-transition': 'none',
              position: 'absolute',
              top: ''
          }
      },
      {
          direction: -1,
          from: 'con-top',
          css: {
              '-transition': 'all .2s',
              position: 'fixed',
              top: '0'
          }
      }
  ], 
  $('.cover'));  


  $(".location1").click(function(){
    $(".locations .active").removeClass('active');
    $(this).addClass('active');
       $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2540.794664974341!2d30.410203054118828!3d50.44492523374597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1462473536747");
  });

  $(".location2").click(function(){
      $(".locations .active").removeClass('active');
      $(this).addClass('active');
      $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1578.5755160505937!2d25.92948995681408!3d48.286751934530194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1462396556911");
  });

  $(".location3").click(function(){
      $(".locations .active").removeClass('active');
      $(this).addClass('active');
      $("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2620.9302454238536!2d24.72867888546279!3d48.93577040370481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1462494872628");
  });

  var touch = $('#touch_menu');
  var menu = $('.my');
  var screenWidth = screen.width; 
  $(touch).on('click', function (e) {
      e.preventDefault();
      menu.slideToggle();
  });
  $(window).resize(function () {
    var wid = $(window).width();
      if (wid > 760 && menu.is(':hidden')) {
          menu.removeAttr('style');
      }
  });

   $('a[href*=#]').on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      if (screenWidth<993) {
        $(menu).slideUp();
      }
      e.preventDefault();
    });
});
