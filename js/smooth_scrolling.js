//JQuery that takes care of the smooth scrolling once the any link with tag a is clicked on the website
//link (#XXXX) must be inserted under the href attribute
// Used to be $(document).ready(function(){})
$(window).ready(function(){
  $("#loading_div").hide();
  $("#loading_div").fadeIn(1500); 
  if ($("#information").text().length == 0){
    setTimeout(function(){
      get_inner();
    }, 3000);
      
  }
  // Add smooth scrolling to all links with tag a
  $("a").on('click', function(event) {
    //will be using the hash in order to scroll with animation until the top of thediv with id #XXXXX

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);

    } // End if
  });
});

function get_inner(){
/* Function that animates the loading of the page
*/  
  $.ajax({
      method: 'GET',
      url: 'body.html',
      dataType: 'html',
      success : function(html_div){

        $("#loading_div").fadeOut(200);
        setTimeout(function(){
          $("#information").html(html_div);
        },700);
      }
   });
}

var inpage_lock = false;

window.onscroll = function() {makeNavVisible()};

// change style of navbar as going through different sections of the website
function makeNavVisible() {
  var navbar = document.getElementById("myNavbar");
  var navbar_container = document.getElementById("navbar-container");
  
  if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && inpage_lock==false) { //after passing 100px in terms of scroll
    navbar_container.classList.remove('w3-white');
    navbar_container.classList.remove('w3-opacity');  
    navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    setTimeout(function(){
      navbar.classList.remove('w3-animate-top');
    },1000);
    inpage_lock = true;
  } 
  else if ( $(document).scrollTop()  == 0) {
    navbar.className = navbar.className.replace(" w3-card-2 w3-white", "");
    navbar_container.classList.add('w3-white');
    navbar_container.classList.add('w3-opacity');
    inpage_lock = false;
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Scrolling to about section for a tags that were not binded to event at load time
function async_scroll_about(){
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 700);
}