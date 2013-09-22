$(document).ready(function() {
    $('#roll').click(function(event){
        //   1- intercept the form submission event using jQuery
        //   2- prevent the default action for that event from happening
        event.preventDefault();
        //   3- generate a random number between 1 and 6 using JavaScript
        var roll = Math.floor(Math.random() * 6) + 1
        //   4- use jQuery to submit an AJAX post to the form's action
        $.post('/rolls', function(data){
                $('#die').html(data);
                console.log(data);

        });
               
    });
});

  // PSEUDO-CODE:


  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery


