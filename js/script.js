var myFirebaseRef = new Firebase("https://winfoapp.firebaseio.com/");

document.addEventListener("DOMContentLoaded", function() {
	var div = document.getElementById('fill');
	div.innerHTML = "hello";
	addFile("greatCode", "html");
	addFile("greatCode1", "html");
	addFile("greatCode2", "html");
	addFile("greatCode3", "html");
	addFile("greatCode4", "html");
	console.log(getFiles());

});

function getFiles(){
	var files;
	myFirebaseRef.on("value", function(snapshot) {
	  console.log(snapshot.val());
	  files = snapshot.val();
	});
	return files;
}

function addFile(fileName, lang){
	myFirebaseRef.child(fileName).set({
		type: 'file',
		language: lang,
		content: ''
	});
}

function loadFiles(){
	// var i=0;
 //    var grid = document.createElement('table');
 //    grid.className = 'grid';
 //    for (var r=0;r<rows;++r){
 //        var tr = grid.appendChild(document.createElement('tr'));
 //        for (var c=0;c<cols;++c){
 //            var cell = tr.appendChild(document.createElement('td'));
 //            cell.innerHTML = ++i;
 //        }
 //    }
 //    return grid;
}

