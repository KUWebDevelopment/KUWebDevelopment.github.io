
//Retrieved from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
//Modified by: Brandon Lammey
//Function adds smooth scroll to buttons on click. Modified to not include click of carousel buttons
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      // Does not scroll on click for Carousel
      if (this.hash !== "" && this.hash !== "#myCarousel") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    //Automatically change next meeting date
    // let nextMeeting = new Date(); //Starts as current date
    // let prevMeeting = $("#nextMeetingDate");

    if(nextMeeting.getDay() == 3){ //if date is Wednesday, change to next Tuesday
      nextMeeting.setDate(nextMeeting.getDate() + 6);
    }
    prevMeeting.html((nextMeeting.getMonth() + 1) + '/' + nextMeeting.getDate() + '/' + nextMeeting.getFullYear());

    var top = $('.infoBox1').offset().top;

    $(document).scroll(function(){
      if($(this).scrollTop() > top)
      {   
        $('.navbar-default').css({"background-color": "#fff"})
      }
      else
      {
          $('.navbar-default').css({"background": "none"})
      }
    });

  });


/*
Save Contact details to Firebase 
*/
function saveToFirebase(name, email, message) 
{
  var submissionObject = 
  {
      name: name,
      email: email,
      message: message
  };

  firebase.database().ref('subscription-entries').push().set(submissionObject).then(function(snapshot) 
    {
            success(); //success method
    }, 
  function(error) 
    {
            console.log('error' + error);
            error(); // some error method
    });
  }

function success()
{
  console.log("Succesfully added post to database.");
  alert("Post Sent!")
}

function error()
{
  console.log("Error Adding Message!");
}




//Close navbar when ancher tag is clicked
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a:not(".dropdown-toggle")') ) {
      $(this).collapse('hide');
  }
});




// //Modify Navbar on Scroll
// var mainbottom = $('#header').height();

// // on scroll, 
// $(window).on('scroll',function(){

//     // we round here to reduce a little workload
//     stop = Math.round($(window).scrollTop());
//     if (2 > 1) {
//         $('custom-bootstrap-menu.navbar-default').addClass('update-nav');
//     } else {
//         $('custom-bootstrap-menu.navbar-default').removeClass('update-nav');
//    }

// });

