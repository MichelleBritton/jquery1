$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

   // or another way to do this would be to use the .click function
    $("#stream1_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });

    // Trigger events when the mouse is hovered over using .mouseenter or mouseleave
    $("#stream1_btn").mouseenter(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });

    // jQuery Animation
    $("#stream1_btn").on(function() {
        $(".stream1").fadeTo(1000, 0.5);

        $(".stream1").fadeToggle();
        $(".stream1").fadeToggle(1000);
        
        $(".stream1").fadeOut();
        $(".stream1").fadeOut(1000);

        $(".stream1").fadeIn();
        $(".stream1").fadeIn(1000);
        
        $(".stream1").slideToggle();
        $(".stream1").slideToggle(1000);

        $(".stream1").slideUp();
        $(".stream1").slideUp(1000);

        $(".stream1").slideDown();
        $(".stream1").slideDown(1000);

        $(".stream1").toggle();
        $(".stream1").toggle(1000);
        
        $(".stream1").hide();
        $(".stream1").hide('slow');
        $(".stream1").hide('medium');
        $(".stream1").hide('fast');
        $(".stream1").hide(1000);
        
        $(".stream1").show('');
        $(".stream1").show('slow');
        $(".stream1").show('medium');
        $(".stream1").show('fast');
        $(".stream1").show(1000);
    });

    // Method chaining
    $("#myButton").removeClass("blueBox");
    $("#myButton").addClass("border");

    // Using method chaning this would become:
    $("#myButton").removeClass("blueBox").addClass("border");

    // You can also do this with events
    $("p").css("color", "blue").slideUp(2000).slideDown(20000);

    // An element's attributes can contain useful information so it's important to be able to access and manipulate them
    // The attr() function act both as a getter and a setter, here we can with one parameter, here we are looking for an href
    // and update the attribute for the second parameter, in this case example.com
    $("a").attr("href", "http://www.example.com");
}); 