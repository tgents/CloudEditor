"use strict"

var myFirebaseRef = new Firebase("https://winfoapp.firebaseio.com/");

document.addEventListener("DOMContentLoaded", function() {
	var div = document.getElementById('fill');
	div.innerHTML = "hello";
	addFile("greatCode", "html");
	addFile("greatCode1", "html");
	addFile("greatCode2", "html");
	addFile("greatCode3", "html");
	addFile("greatCode4", "html");
	//console.log(getFiles());

	//div.innerHTML = "hello";
 	//addFile("greatCode", "html");
 	getFiles();

  var value = "Type your code here";
  //showEditor(textEditor, value);
  //requirejs(["helper/util"], function(util) {
  //  //This function is called when scripts/helper/util.js is loaded.
  //  //If util.js calls define(), then this function is not fired until
  //  //util's dependencies have loaded, and the util argument will hold
  //  //the module value for "helper/util".
  //});

  //requirejs([
  //  "codemirror/lib/codemirror", "codemirror/mode/htmlmixed/htmlmixed"
  //], function(CodeMirror) {
  //  CodeMirror.fromTextArea(textEditor, {
  //    lineNumbers: true,
  //    mode: "htmlmixed",
  //    value: value
  //  });
  //});
  //showEditor(div, value);
});

function showEditor(name, lang, value) {
	console.log("boo");
  CodeMirror(document.getElementById('fill'), {
    value: value,
    mode:  "text/html",
    readOnly: false,
    lineNumbers: true
  });
}


function getFiles(){
	myFirebaseRef.on("value", function(snapshot) {
	  loadFiles(snapshot.val());
	});
}

function updateFile(code){
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
	console.log(typeof files);
	var list = document.createElement('ul');
	list.className = 'files';
	var keys = Object.keys(files);
	console.log(files[keys[0]]);
	for (var i = 0; i < keys.length; i++){
		console.log();
		var text = keys[i] +"."+ files[keys[i]].language;
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(text));
		item.style.padding = "10px";
		item.addEventListener("click", (showEditor(keys[i], files[keys[i]].language, files[keys[i]].content)), false);
		list.appendChild(item);
	}
	document.getElementById('fill').innerHTML = "";
	document.getElementById('fill').appendChild(list);
}

