// handle, full name, profile_url, submission_url -> score, total_time, problems[] 
// config=pages

// Load jQuery in console
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();



Full name = class = no-color hover-link weight-600
Username = class = gray-text body-font-small hover-link

AJAX Request = https://hackerearth.com/AJAX/user-submissions/15646/633183/



Paging

paging = class = body-font dark-gray-text standard-margin bold align-center
each page = a = class = medium-margin-right link-2 


// AJAX Request Structure: https://www.hackerearth.com/AJAX/feed/newsfeed/icpc-leaderboard/event/15646/2/

// To check jQuery version 

if (typeof jQuery != 'undefined') {
	alert(jQuery.fn.jquery); 
}

$('.hof-table').html();


// Store value in page details
$.each($('.event-id.hidden'), function(index) { 
    console.log(index + ": " + $('.event-id.hidden').text()); 
});

// AJAX Paging Url
$.each($('.medium-margin-right.link-2'), function(index) { 
    var  ajaxUrl = "https://www.hackerearth.com/AJAX/feed/newsfeed/icpc-leaderboard/event/" + $('.event-id.hidden').text() + "/" + eval(index+1) + "/";
    console.log(ajaxUrl); 
});

// Full-names
$.each($('.no-color.hover-link.weight-600'), function(index) { 
    console.log(index + ": " + $(this).text()); 
});

// Handle
$.each($('.gray-text.body-font-small.hover-link'), function(index) { 
    console.log(index + ": " + $(this).text()); 
});



// AJAX to fetch page details
$.ajax({
  url: "test.html",
  cache: false,
  success: function(html){
    $("#results").append(html);
  }
});

// AJAX to fetch individual submission details
$.ajax({
  url: "https://www.hackerearth.com/AJAX/user-submissions/15646/633183/",
  cache: false,
  success: function(html){
    $("body").append(html);
    	var response = html;
    	var obj = JSON.stringify(response); 
    	// var finalData = obj.replace(/\\/g, ""); 
    	//console.log(response);
    	var obj1 = $.parseJSON(obj);
    	console.log(obj1.data);
  }
  });



