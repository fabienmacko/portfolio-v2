$(window).on('load', () => {
    $(".loader").fadeOut(400);
    $("html").css("height","auto");
    $('.carousel_loisirs').trigger('refresh.owl.carousel')
  var carousel = $(".carousel"),
      currdeg  = 0;
  $(".owl-carousel").owlCarousel({
    margin:80,
    loop: true,
    responsiveClass:true,
    autoHeight: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav: false,
    dots: false,
    responsive:{
      0:{
          items:1,
      }
    }
  });



  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e){
    if(e.data.d=="n"){
      currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
      currdeg = currdeg + 60;
    }
    carousel.css({
      "-webkit-transform": "rotateY("+currdeg+"deg)",
      "-moz-transform": "rotateY("+currdeg+"deg)",
      "-o-transform": "rotateY("+currdeg+"deg)",
      "transform": "rotateY("+currdeg+"deg)"
    });
  }

  $('#div-white-arrow').on('click', () => {

    var target = $("#row1");

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  // Parallax !
  $('.parallax-window').parallax({imageSrc: 'images/objectifs.jpg'});

  $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 1470) {
        $(".separation").addClass("separation_open");
    } else {
        $(".separation").removeClass("separation_open");
    }
  });

  $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 400) {
        $(".reset_arrow").removeClass("hidden");
    } else {
        $(".reset_arrow").addClass("hidden");
    }
  });

  $(".reset_arrow").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y) {
      console.log(y);
  }});

  function manageDiv(num) {
    var str = ".text_" + num;
    if ($(str).css("display") !== "none") {
      $(".all_texts").stop().delay(500).hide(0);
      $(".text_0").show(0);
    } else {
      $(".all_texts").stop().delay(500).hide(0);
      $(str).show(0);
    };
  };

  $(".icon_div").click(function () {
    $(".all_texts").stop();
    $(".text_container").addClass("text_container_changing");
    setTimeout(function () {
      $(".text_container").removeClass("text_container_changing");
    }, 1000)
    if (!$(this).hasClass("icon_div_clicked")) {
      $(".icon_div").removeClass("icon_div_clicked");
      $(".icons_about").removeClass("icon_svg_clicked")
      $(this).addClass("icon_div_clicked");
      $(this).find("svg").addClass("icon_svg_clicked");
    } else if ($(this).hasClass("icon_div_clicked")) {
      $(this).removeClass("icon_div_clicked");
        $(this).find("svg").removeClass("icon_svg_clicked");
    }
    var idElt = $(this).attr('id');
  manageDiv(idElt);
  });



}); // onReadyEnd
