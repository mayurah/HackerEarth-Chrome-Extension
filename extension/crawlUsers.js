
if (typeof jQuery != 'undefined') {
 	console.log(jQuery.fn.jquery);
 	$.fn.jquery;

				var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;

				db.transaction(function (tx) {
					var tblPrefix = $('.event-id.hidden').text();
					var query = 'CREATE TABLE IF NOT EXISTS user_'+ tblPrefix +'  ( name, handle, score, score_url);';
				   tx.executeSql(query);
				});

				db.transaction(function (tx) {
					var tblPrefix = $('.event-id.hidden').text();
					var query = 'CREATE TABLE IF NOT EXISTS problem_'+ tblPrefix +'  ( title, score);'
				   tx.executeSql(query);

				});


				function _DB_users(_name,_handle,_score,_score_url){
									db.transaction(function(tx) {
											var tblPrefix = $('.event-id.hidden').text();
											var _query = 'INSERT INTO user_'+ tblPrefix +' ( name, handle, score, score_url) VALUES ("' + _name + '" , "' + _handle + '" , "' + _score + '" , "' + _score_url + '")';
											tx.executeSql(_query) ;
								}) ;
				}

				function _DB_problems(_title,_score){
									db.transaction(function(tx) {
											var tblPrefix = $('.event-id.hidden').text();
											var _query = 'INSERT INTO problem_'+ tblPrefix +' ( title, score) VALUES ("' + _title  + '" , "' + _score + '")';
											tx.executeSql(_query) ;
								}) ;
				}


				var stop = $('.small.body-font.light.tool-tip.less-margin').text().replace( /[\(\)]/g, '');
				var myList = document.getElementsByClassName("small light");
				// to extract the name of the problems with scores
				for(var i = 9 ; i <= 9 + 2 * stop - 1 ; i += 2)
				{
				    var _name = myList[i] ;
				    var _score = myList[i + 1] ;
				    _DB_problems( $(_name).text().trim() , $(_score).text().replace( /[\(\)]/g, '').trim() ) ;
				}





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


			while(i < rawUserData.length){
				var _name 		= rawUserData[i].split('no-color hover-link weight-600">')[1].split('</div>')[0];
				var _handle 	= rawUserData[i].split('gray-text body-font-small hover-link">')[1].split('</div>')[0];

				var _score_rawData = rawUserData[i].split('dark ajax-modal weight-600 block');
				var _score  	= _score_rawData[1].split('</a>')[0].split(">")[1];
				var _score_url 	= _score_rawData[1].split('</a>')[0].split(">")[0].split('"')[4];

				item = {}
				item["name"] 		= _name.trim();
				item["handle"]		= _handle.trim();
				item["score"] 		= _score.trim();
				item["score_url"]	= _score_url.trim();

				//var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;
				 _DB_users(item["name"] ,item["handle"] ,item["score"] ,item["score_url"] );
				_user.push(item);
				//_user['handle'] = _handle;
				// _user['score'] 	= _score;
				// _user['score_url'] 	= "https://www.hackerearth.com" +_score_url;

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



