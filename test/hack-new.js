
// Load JS
 function loadScript(url, callback)
 {
     // adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // then bind the event to the callback function
    // there are several events for cross browser compatibility
    script.onreadystatechange = callback;
    script.onload = callback;

    // fire the loading
    head.appendChild(script);
 }



// To check jQuery version
// $('table').html().split('tbody class="align-top')[49].split('no-color hover-link weight-600">')[1].split('</div>')[0];

if (typeof jQuery != 'undefined') {
 	console.log(jQuery.fn.jquery);


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



// Injecting the Search-Bar
 $('.content.large.dark.bold.less-margin-2.less-margin-2-bottom.wide-title').append('<div class="injected">Search:   <input type="text" id="name_2" name="search" placeholder="Search.." class="_search">  </div><span> vs </span> ');

 $('.injected').css({"display": "inline", "margin-left": "1%", "font-size": "0.99em", "color": "gray"});
 $('.pipe').css({"color": "rgba(128, 128, 128, 0.47)", "font-size": "200%"});
 $('._search').css({"border-radius": "5px", "padding": "6px"});

 $('.content.large.dark.bold.less-margin-2.less-margin-2-bottom.wide-title').append('<div class="injected"><input type="text" id="name_1" name="search" placeholder="Search.." class="_search">  </div>');

 $('.injected').css({"display": "inline", "margin-left": "4%", "font-size": "0.99em", "color": "gray"});
 $('.pipe').css({"color": "rgba(128, 128, 128, 0.47)", "font-size": "200%"});
 $('._search').css({"border-radius": "5px", "padding": "6px"});

 $('.content.large.dark.bold.less-margin-2.less-margin-2-bottom.wide-title').append('<div class="injected"></a><button type = "button">Compare</button>  </div>');
 $('.injected').css({"display": "inline", "margin-left": "6%", "font-size": "0.99em", "color": "green"});
 $('.pipe').css({"color": "rgba(128, 128, 128, 0.47)", "font-size": "200%"});
 $('._search').css({"border-radius": "5px", "padding": "6px"});

 // Auto-Complete Jquery

 var allFields = [] ;
 var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;

 function autoCompleteFetch() {
   db.transaction(function (tx)
   {
		 var tblPrefix = $('.event-id.hidden').text();

     tx.executeSql('SELECT name, handle FROM user_'+ tblPrefix +' ', [], function (tx, results)
     {
        var len = results.rows.length;


									for(var i = 0 ; i < results.rows.length ; i++)
									{
										var row = results.rows.item(i) ;
										allFields.push(row.name.trim() ) ;
									}
     }, null);
   });
 }

autoCompleteFetch();






// Loading auto-complete JavaScript and CSS Module
// CSS
if (!$("link[href='https://goodies.pixabay.com/javascript/auto-complete/auto-complete.css']").length)
   $('<link href="https://goodies.pixabay.com/javascript/auto-complete/auto-complete.css" rel="stylesheet">').appendTo("head");
// JS
loadScript("https://goodies.pixabay.com/javascript/auto-complete/auto-complete.js");

// Add names in both the textboxes

 var left_name = new autoComplete({
			selector: '#name_1',
			minChars: 2,
			source: function(term, suggest){
					term = term.toLowerCase();
					var choices = allFields;
					var suggestions = [];
					for (i=0;i<choices.length;i++)
							if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
					suggest(suggestions);
			}
	});

	var right_name = new autoComplete({
			 selector: '#name_2',
			 minChars: 2,
			 source: function(term, suggest){
					 term = term.toLowerCase();
					 var choices = allFields;
					 var suggestions = [];
					 for (i=0;i<choices.length;i++)
							 if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
					 suggest(suggestions);
			 }
	 });












	 // After Search  "Match" button trigger

	 var rightName = $("#name_1").attr('value');
	 var leftName  = $("#name_2").attr('value');

	 var _left = [] ;
	 var _right = [] ;
	 var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;

	 function fetchLeft() {
	  db.transaction(function (tx)
	  {
	 	 var tblPrefix = $('.event-id.hidden').text();

	 	if(leftName == "") { alert('left side is empty'); return 0;}
	    tx.executeSql('SELECT score_url FROM user_'+ tblPrefix +' WHERE name="' + leftName + '" ', [], function (tx, results)
	    {
	                   var row = results.rows.item(0)
	     							_left.push(row.score_url ) ;
	 	 }, null);
	  });
	 }

	 function fetchRight() {
	  db.transaction(function (tx)
	  {
	 	 var tblPrefix = $('.event-id.hidden').text();

	 	if(rightName == "") { alert('right side is empty'); return 0;}
	    tx.executeSql('SELECT score_url FROM user_'+ tblPrefix +' WHERE name="' + rightName + '" ', [], function (tx, results)
	    {
	                   var row = results.rows.item(0)
	     							_right.push(row.score_url ) ;
	 	 }, null);
	  });
	 }


	 fetchLeft();
	 fetchRight();
	 console.log(_left + _right);




compare(_left[0], _right[0]);

function compare(lUrl,rUrl){
	$.ajax({
	  url: lUrl,
	  cache: false,
	  success: function(html){
	     	var lHtml = html['data'];
	     	$("._left").append(lHtml);
	  }
	});

 	$.ajax({
	  url: rUrl,
	  cache: false,
	  success: function(html){
	     	var rHtml = html['data'];
	     	$("._right").append(rHtml);
	  }
	});
}

