// Jugaad
if(location.hostname == "www.hackerearth.com"){
 console.log("Started on HENetwork" );
}



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

// Load Auto-complete JS
loadScript("https://goodies.pixabay.com/javascript/auto-complete/auto-complete.js");





// Checking Tables 
var _tblFlag = true;
function checkTable(){

   var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;
   db.transaction(function (tx)
   {
		 var tblPrefix = $('.event-id.hidden').text();
		 var _firstName =  $('.no-color.hover-link.weight-600').html().trim();
		 
     tx.executeSql('SELECT name, handle FROM user_'+ tblPrefix +' WHERE name="' + _firstName + '";', [], function (tx, results)
     {
        var len = results.rows.length;
		for(var i = 0 ; i < results.rows.length ; i++)
		{
			var row = results.rows.item(i) ;
			console.log(row.name.trim());
			_tblFlag = false;
		}
		console.log(_tblFlag);
		if(_tblFlag == true) 
			crawlPages();   // Function call isn't working
		else
			console.log('Not crawling :)');
	}, null);
   });
   console.log('checking previous Data');
   return _tblFlag;
}




function crawlPages(){
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
 console.log('crawlPages');
}







//Inject Search HTML
function injectSearchHTML(){

// Injecting the Search-Bar
 $('.content.large.dark.bold.less-margin-2.less-margin-2-bottom.wide-title').append('<div class="injected">Search:   <input type="text" id="name_2" name="search" placeholder="Search.." class="_search">  </div><span> vs </span> ');

 $('.injected').css({"display": "inline", "margin-left": "1%", "font-size": "0.99em", "color": "gray"});
 $('.pipe').css({"color": "rgba(128, 128, 128, 0.47)", "font-size": "200%"});
 $('._search').css({"border-radius": "5px", "padding": "6px"});

 $('.content.large.dark.bold.less-margin-2.less-margin-2-bottom.wide-title').append('<div class="injected"><input type="text" id="name_1" name="search" placeholder="Search.." class="_search">  </div>');

 $('.injected').css({"display": "inline", "margin-left": "4%", "font-size": "0.99em", "color": "gray"});
 $('.pipe').css({"color": "rgba(128, 128, 128, 0.47)", "font-size": "200%"});
 $('._search').css({"border-radius": "5px", "padding": "6px"});

 $('.content.large.dark.bold.less-margin-2.less-margin-2-bottom.wide-title').append('<div class="injected"></a><button class="_compare" type = "button">Compare</button>  </div>');
 $('.injected').css({"display": "inline", "margin-left": "6%", "font-size": "0.99em", "color": "green"});
 $('.pipe').css({"color": "rgba(128, 128, 128, 0.47)", "font-size": "200%"});
 $('._search').css({"border-radius": "5px", "padding": "6px"});
}



// Query Auto-Complete 
	
var allFields = [] ;
function _autoComplete(){
 	allFields = [] ;
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
				// console.log(row.name.trim());
			}
	     }, null);
	   });
	   console.log('autoCompleteFetch');
	 }
	autoCompleteFetch();

	console.log('_autoComplete');
	console.log(allFields);
	add_ac_lr(allFields);
}


function add_ac_lr(allFields){

// Add auto-complete data / names in both the textboxes
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

	console.log('add l r');
	fetchlrAJAX();

}





//jugad
var _left = [];
var _right = [];
	 
	 var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;

	 function fetchLeft() {

	 	_left = [];
		var leftName  = $("#name_2").attr('value');
		console.log(leftName);

	  db.transaction(function (tx)
	  {
	 	 var tblPrefix = $('.event-id.hidden').text();

	 	if(leftName == "") { alert('left side is empty'); return 0;}
	    tx.executeSql('SELECT score_url FROM user_'+ tblPrefix +' WHERE name="' + leftName + '" ', [], function (tx, results)
	    {
	        var row = results.rows.item(0);
	     	_left.push(row.score_url);
	     	console.log(row.score_url);

	 	 }, null);
	  });
	 }

	 function fetchRight() {
	 	_right = [];
	 	 var rightName = $("#name_1").attr('value');

	  db.transaction(function (tx)
	  {
	 	 var tblPrefix = $('.event-id.hidden').text();

	 	if(rightName == "") { alert('right side is empty'); return 0;}
	    tx.executeSql('SELECT score_url FROM user_'+ tblPrefix +' WHERE name="' + rightName + '" ', [], function (tx, results)
	    {
			var row = results.rows.item(0);
			_right.push(row.score_url);
			console.log(row.score_url);
	 	 }, null);
	  });
	 }

	function compare(lUrl,rUrl){
		$.ajax({
		  url: lUrl,
		  cache: false,
		  success: function(html){
		     	var lHtml = html['data'];
		     	// $("._left").append(lHtml);
		     	$("._left").html(lHtml);
		  }
		});

	 	$.ajax({
		  url: rUrl,
		  cache: false,
		  success: function(html){
		     	var rHtml = html['data'];
		     	// $("._right").append(rHtml);
		     	$("._right").html(rHtml);
		  }
		});
		console.log('compare');

			$("._close").click(function(){
				$(".compare").hide();
			});


		_left = [];
		_right = [];

		setTimeout( function() { fixWhite(); }, 1000);

	}




function fixWhite()
{
		$('.compare').find('a').each(function () {
		  $(this).css({"color": "white", "text-shadow": "1px 1px 1px gray"});
		 console.log( $(this).attr("class"));
		  $(this ).removeClass( "no-color hover-link" ).addClass( "hover-link" );

		});
		console.log('fixing Black colored content');
}

// fetchlrAJAX
function fetchlrAJAX(){


	// After Search  "Match" button trigger
	// On clicking Compare
	$("._compare").click(function(){
	 

		fetchLeft();
		fetchRight();
		console.log(_left + _right);

		var _centerDiv = unescape('%3Cdiv+class%3D%22compare%22+style%3D%22%0A++++position%3A+fixed%3B%0A++++background-color%3A+%2346535e%3B%0A++++min-height%3A+400px%3B%0A++++height%3A+200px%3B%0A++++min-width%3A+45%25%3B%0A++++border-radius%3A+10px%3B%0A++++border%3A+4px+solid+rgba%280%2C+0%2C+0%2C+0.23%29%3B%0A++++margin%3A+auto%3B%0A++++top%3A+29%25%3B%0A++++left%3A+5%25%3B%0A++++z-index%3A+1%3B%0A++++opacity%3A+0.95%3B%0A++++display%3A+inline%3B%0A++++padding%3A+10px+10px+10px+10px%3B%0A++++font-size%3A+13px%3B%0A++++text-align%3A+center%3B%0A++++color%3A+white%3B%0A++++overflow-y%3A+scroll%3B%0A++++overflow-x%3A+scroll%3B%0A%22%3E%0A++++%3Cdiv+class%3D%22_close%22+style%3D%22%0A++++height%3A+23px%3B%0A++++width%3A+31px%3B%0A++++background-color%3A+green%3B%0A++++text-align%3A+center%3B%0A++++color%3A+white%3B%0A++++font-size%3A+15px%3B%0A++++border-radius%3A+44px%3B%0A%22%3EX%3C/div%3E%0A++++%3Cdiv+class%3D%22_left%22+style%3D%22%0A+++++display%3A+inline%3B%0A++++position%3A+relative%3B%0A++++float%3A+left%3B%0A++++border-right%3A+1px+solid+black%3B%0A++++width%3A+50%25%3B%0A++++height%3A+100%25%3B%0A++++color%3A+white%3B%0A%22%3EL%3C/div%3E%0A%0A++++%3Cdiv+class%3D%22_right%22+style%3D%22%0A++++position%3A+absolute%3B%0A++++display%3A+inline%3B%0A++++width%3A+50%25%3B%0A++++height%3A+100%25%3B%0A++++left%3A+58%25%3B%0A++++text-align%3A+left%3B%22%3E%0A++++R%0A+%3C/div%3E%0A++++%0A%3C/div%3E').replace(new RegExp('\\+','g'),' ');
		$("body").prepend(_centerDiv);
	
       	setTimeout( function() {compare(_left[0], _right[0]); }, 500);
		// Change CSS of Link

		$(".compare").show();

	});

	// Close Comparison

		console.log('fetch LR Ajax');

}



// Main Function
window.onload = function() {
    //run js code here
    console.log(jQuery.fn.jquery);
	// Loading auto-complete JavaScript and CSS Module
	// CSS
	if (!$("link[href='https://goodies.pixabay.com/javascript/auto-complete/auto-complete.css']").length)
	   $('<link href="https://goodies.pixabay.com/javascript/auto-complete/auto-complete.css" rel="stylesheet">').appendTo("head");
	
	// JS
 	if(window.location.href.indexOf("leaderboard") > -1) {
       // alert("your url contains the name leaderboard");
       // loadScript("deleteTables.js"); loading hackerearth.com/deleteTable.js // Fix this later
       // deleteTable();
       checkTable();
       //       if(_tblFlag == true) crawlPages();  // This is executed within checkTable()

       setTimeout( function(){	if(_tblFlag == true)  crawlPages();}, 1000);
       injectSearchHTML();
       	if (!$("link[href='https://goodies.pixabay.com/javascript/auto-complete/auto-complete.css']").length)
	   		$('<link href="https://goodies.pixabay.com/javascript/auto-complete/auto-complete.css" rel="stylesheet">').appendTo("head");
       
       setTimeout( function() {_autoComplete(); }, 5000);
    } // end of If (leaderboard)
}
 


 

 

	

 

