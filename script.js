$(".aa").on('click',function(){ 
    $.ajax("http://localhost/travel_files/homepage.html")
    .done(function(data){
        $(".seconed_side").html(data);
    });
  });
  $(".bb").on('click',function(){
    $.ajax("http://localhost/travel_files/francePhrase.html")
    .done(function(data){
        $(".seconed_side").html(data);
    });
  });
  $(".cc").on('click',function(){
    $.ajax("http://localhost/travel_files/germanphrases.html")
    .done(function(data){
        $(".seconed_side").html(data);
    });
  });
  $(".dd").on('click',function(){
    var side_text = $("#d").text();
    $('.seconed_side').html(side_text);
  });
  $(".ee").on('click',function(){
    var side_text = $("#e").text();
    $('.seconed_side').html(side_text);
  });
