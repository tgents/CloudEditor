"use strict"

var myFirebaseRef = new Firebase("https://winfoapp.firebaseio.com/");

document.addEventListener("DOMContentLoaded", function() {

	var div = document.getElementById('fill');
	div.innerHTML = "hello";
	// addFile("greatCode", "html");
	// addFile("greatCode1", "html");
	// addFile("greatCode2", "html");
	// addFile("greatCode3", "html");
	// addFile("greatCode4", "html");
 	getFiles();

});

function showEditor(name, lang, value) {
	console.log(name);
	var div = document.getElementById('fill')
	div.innerHTML = "";
	var codem = CodeMirror(div, {
		value: value,
		mode:  "text/html",
		readOnly: false,
		lineNumbers: true
	});

	var save = document.createElement('button');
	var back = document.createElement('button');
	save.innerHTML = "save";
	back.innerHTML = "back";

	save.onclick = function(){
		updateFile(name, codem.getValue());
	};

	back.onclick = function(){
		getFiles();
	};

	div.appendChild(save);
	div.appendChild(back);

}


function getFiles(){
	myFirebaseRef.on("value", function(snapshot) {
	  loadFiles(snapshot.val());
	});
}

function updateFile(fileName, code){
	myFirebaseRef.child(fileName).update({
		content: code
	});
}

function addFile(fileName, lang){
	myFirebaseRef.child(fileName).set({
		type: 'file',
		language: lang,
		content: ''
	});
}

function loadFiles(files){
	var list = document.createElement('ul');
	list.className = 'files';
	var keys = Object.keys(files);

	var type;
	var val;
	var key;
	for (var i = 0; i < keys.length; i++){
		type = files[keys[i]].language;
		val = files[keys[i]].content;
		key = keys[i];

		var text = key +"."+ type;
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(text));
		item.style.padding = "10px";
		item.onclick = function(){
				showEditor(key, type, val);
			};
		list.appendChild(item);
	}
	document.getElementById('fill').innerHTML = "";
	document.getElementById('fill').appendChild(list);
}

