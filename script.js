$(".aa").on('click',function(){ 
    $.ajax("https://ademolabakare.github.io/homepage/")
    .done(function(data){
        $(".seconed_side").html(data);
    });
  });
  $(".bb").on('click',function(){
    $.ajax("https://ademolabakare.github.io/french/")
    .done(function(data){
        $(".seconed_side").html(data);
    });
  });
  $(".cc").on('click',function(){
    $.ajax("https://ademolabakare.github.io/german/")
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
