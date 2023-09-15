$(document).ready(function() {
    //This would add the css inline
    $("h2").css("text-decoration", "underline"); // underlines all <h2> elements
    $("ul").css("border", "solid 1px #ccc");  // adds a border to all lists

    //This is a better way of doing it by adding a class
    $("h2").addClass("underline");
    $("ul").addClass("border"); 
    
    // Remove class
    $("h2").removeClass("underline");
    $("ul").removeClass("border"); 

    
});