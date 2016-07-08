// To check jQuery version
// $('table').html().split('tbody class="align-top')[49].split('no-color hover-link weight-600">')[1].split('</div>')[0];

if (typeof jQuery != 'undefined') {
 	console.log(jQuery.fn.jquery); 
	function retrievePage(_url){
		  $.ajax({
	  url: _url,
	  cache: false,
	  success: function(html){
	    // $("body").append(html);
	    	// var response = html;
	    	// var obj = JSON.stringify(response); 
	    	// var obj1 = $.parseJSON(obj);
	    	// console.log(obj1.da 
			var _user = [];
			var rawUserData = html.split('tbody class="align-top"');

			i=1;
			
			console.log(rawUserData.length);
			// console.log ( rawUserData[49].split('no-color hover-link weight-600">')[1].split('</div>')[0]);
			
			
			while(i<rawUserData.length){
				var _name 		= rawUserData[i].split('no-color hover-link weight-600">')[1].split('</div>')[0];
				var _handle 	= rawUserData[i].split('gray-text body-font-small hover-link">')[1].split('</div>')[0];
				var _score  	= rawUserData[i].split('dark ajax-modal weight-600 block')[1].split('</a>')[0].split(">")[1];
				var _score_url 	= rawUserData[i].split('dark ajax-modal weight-600 block')[1].split('</a>')[0].split(">")[0].split('"')[4];

				if(_score>100){
				item = {}
				item["name"] 		= _name;
				item["handle"]		= _handle;
				item["score"] 		= _score;
				item["score_url"]	= _score_url;


				_user.push(item);
				//_user['handle'] = _handle;
				// _user['score'] 	= _score;
				// _user['score_url'] 	= "https://www.hackerearth.com" +_score_url;
				}
				i++;
			}
			
			console.log(_user);
	  }
	  });
	}

	$.each($('.medium-margin-right.link-2'), function(index) { 
	    var  ajaxUrl = "https://www.hackerearth.com/AJAX/feed/newsfeed/icpc-leaderboard/event/" + $('.event-id.hidden').text() + "/" + eval(index+1) + "/";
	    console.log(ajaxUrl);  
	    retrievePage(ajaxUrl);
	});
 }
 