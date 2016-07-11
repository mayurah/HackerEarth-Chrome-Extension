
// To check jQuery version
// $('table').html().split('tbody class="align-top')[49].split('no-color hover-link weight-600">')[1].split('</div>')[0];

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024) ;

db.transaction(function (tx) {
	var tblPrefix = $('.event-id.hidden').text();
	var dropTbl = 'DROP TABLE user_' + tblPrefix + ';';
   tx.executeSql(dropTbl);
});

db.transaction(function (tx) {
	var tblPrefix = $('.event-id.hidden').text();
	var dropTbl = 'DROP TABLE problem_' + tblPrefix + ';';

  // tx.executeSql(dropTbl);
   tx.executeSql(dropTbl);
});
