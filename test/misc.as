// handle, full name, profile_url, submission_url -> score, total_time, problems[] 
// config=pages



Full name = class = no-color hover-link weight-600
Username = class = gray-text body-font-small hover-link

AJAX Request = https://hackerearth.com/AJAX/user-submissions/15646/633183/



Paging

paging = class = body-font dark-gray-text standard-margin bold align-center
each page = a = class = medium-margin-right link-2 


// To check jQuery version 

if (typeof jQuery != 'undefined') {
	alert(jQuery.fn.jquery); 
}

$('.hof-table').html();


// Store value in page details
$.each($('.medium-margin-right.link-2'), function(index, value) { 
    console.log(index + ':' + value); 
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


