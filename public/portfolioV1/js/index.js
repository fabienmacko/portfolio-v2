var chaine = "Welcome to Fabien website";
var nb_car = chaine.length;
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
txt = texte[i];
}



actual_texte = 0;
function changeMessage()
{
document.getElementById("contenuabout").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
};
function fadeBarre() {
  $("#barre").fadeTo(1000,0, function() {
    $("#barre").css("opacity", "1");
  });

};
var interval = setInterval(fadeBarre, 600);
var intervalBarre = setInterval(changeMessage,150);

function stopInterval() {
  clearInterval(intervalBarre);
  clearInterval(interval);
}


$(".open").delay(4300).fadeOut(700);
$("#header").delay(4300).animate({
  height: "600px"
}, 1000, function(){
  stopInterval();
  $("body").css("height","auto");
  $("#guillemet, #contenuheader, #devantpc, #textepresentation, #blocportfolio, #stats").delay(300).fadeIn(500);
});

$(".imagesport").hover(
    function() {
    $( this ).stop().animate({
      width: "210px"
    }, 150);
  }, function() {
    $( this ).stop().animate({
      width: "190px"
    }, 70);
  }
);

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1080) {
    $(".logotechno").fadeIn(300);
}
});

$("#rondtest").hover(
    function() {
    $( this ).animate({
      backgroundColor: "rgb(153, 214, 255, 0.7)"
    }, 50);
  }, function() {
    $( this ).animate({
      backgroundColor: "rgb(153, 214, 255, 0.2)"
    }, 50);
  }
);
$(".logotechno").hover(
    function() {
    $( this ).animate({
      opacity: "1"
    }, 100);
  }, function() {
    $( this ).animate({
      opacity: "0.6"
    }, 100);
  }
);

$("#rondtest").click(function(){
 $("#h2calcul, #rondtest").fadeOut(100);
 $("#h2techno").animate({
   opacity: "1"
 }, 200);
 $("#html").animate({
   marginLeft: "50px"
 }, 800);
 $("#css").animate({
   marginRight: "50px"
 }, 800, () => {
   $(".texttechno, .barretechno").animate({
     opacity: "1"
   }, 1000);
   $(".skilltechno").animate({
    opacity: "1",
    marginRight: "0px"
  }, 1000);
 });
 $(".divtechno").animate({
   marginTop: "50px",
   width: "250px"
 }, 800);
});


$('.menulink').on('click', function(e){

       e.preventDefault();

    var target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top-100
    }, 1000 );

});

$("#flechebas").click(function(){
  $('html, body').stop().animate({
      scrollTop: $("#stats").offset().top-100
    }, 1000 );
})


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 480) {
    $("#menu").stop().fadeIn(200)
} else if (y < 480) {
  $("#menu").stop().fadeOut(100)
}
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 480 && y < 1385) {
    $("#barre1").stop().animate({
      opacity: "1"
    }, 300);
} else {
  $("#barre1").stop().animate({
    opacity: "0"
  }, 300);
}
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1385 && y < 2150) {
    $("#barre2").stop().animate({
      opacity: "1"
    }, 300);
} else {
  $("#barre2").stop().animate({
    opacity: "0"
  }, 300);
}
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2485 && y < 3285) {
    $("#barre3").stop().animate({
      opacity: "1"
    }, 300);
} else {
  $("#barre3").stop().animate({
    opacity: "0"
  }, 300);
}
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3285 && y < 6000) {
    $("#barre4").stop().animate({
      opacity: "1"
    }, 300);
} else {
  $("#barre4").stop().animate({
    opacity: "0"
  }, 300);
}
});



var parallax = document.querySelector("#contenupage")


$("#gestion").hover(
    function() {
    $("#laptop").attr("src", "images/laptop2.png" )
  }, function() {
    $("#laptop").attr("src", "images/laptop.png" )
  }
);
$("#doc").hover(
    function() {
    $("#document").attr("src", "images/document2.png" )
  }, function() {
    $("#document").attr("src", "images/document.png" )
  }
);
$("#codage").hover(
    function() {
    $("#code").attr("src", "images/code2.png" )
  }, function() {
    $("#code").attr("src", "images/code.png" )
  }
);

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1080) {
    window.addEventListener('scroll', () => {
  parallax.style.backgroundPositionY = 300 + -y / 5  + "px";
  console.log(y)
});
}
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y) {
    console.log(y)}
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 350) {
    $("#doc").animate({
      opacity: "1"
    }, 500);
    $("#codage").delay(500).animate({
      opacity: "1"
    }, 500);
    $("#gestion").delay(1000).animate({
      opacity: "1"
    }, 500);
}});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3285) {
    $("#barrecontact").animate({
      height: "400px"
    }, 800);
}
});
