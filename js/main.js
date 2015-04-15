$(document).ready(function(){

    $(".home").backstretch(
        //[
      "img/sandwich.jpg"
    //, "img/burger.jpg"
    //, "img/duck.jpg"
    //, "img/soup.jpg"
    //], {duration: 3000, fade: 750}
    );

    $('#fullpage').fullpage( {
      scrollOverflow: true,
    });

    $(".drawer").drawer();

    $(".starters").backstretch(
      "img/starters.jpg"
    );

    $(".mains").backstretch(
      "img/mains.jpg"
    );

    $(".dessert").backstretch(
      "img/dessert.jpg"
    );

    $(".drinks").backstretch(
      "img/drinks.jpg"
    );

    $(".footer-bg").backstretch(
      "img/london.jpg"
    );

});