/*----------  Chaning the panel-body inner-text  ----------*/
  // $("#panel1").fadeOut(500, function(){
  // alert("Panel Fadeout!");
  // });
  // $("#panel1 .panel-body").css("color", "red");
  // $("#panel1 .panel-body").text("Text Change");

/*----------  On click toffel the panels  ----------*/
  // $("#btn1").on("click", function(){
  //   $("#panel1").toggle();
  // });
  // $("#btn2").on("click", function(){
  //   $("#panel2").toggle();
  // });
  // $("#btn3").on("click", function(){
  //   $("#panel3").toggle();
  // });
  // $("#btn4").on("click", function(){
  //   $("#panel4").toggle();
  // });

/*----------  Using $(this) usign (DRY) to get the data-panel  ----------*/
  $(".panel-button").on("click", function(){
    var panelid = $(this).attr("data-panel");
    console.log(panelid);
    $(panelid).toggle();
  });

  $(".panel-heading").on('click', function() {
    /* Act on the event */
    var panelHeading = $(this).text();
    $(this).text("Hello!");
  });

/*----------  Make panne Fade by Defult  ----------*/
  $("#btn2").hover(function(){
    // $("#panel2").fadeToggle('slow');
  });

  $("#btn4").on("click", function(){
    // $("#panel4 .panel-body").text("Something else!");
  });
