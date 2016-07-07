// To check jQuery version

if (typeof jQuery != 'undefined') {
 console.log(jQuery.fn.jquery); 

$.each($('.medium-margin-right.link-2'), function(index, value) { 
    console.log(index + ':' + value); 

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


});

 }

 
