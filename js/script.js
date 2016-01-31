var myFirebaseRef = new Firebase("https://winfoapp.firebaseio.com/");

document.addEventListener("DOMContentLoaded", function() {
  "use strict"
  var div = document.getElementById('fill');
  //div.innerHTML = "hello";
  //addFile("greatCode", "html");
  //console.log(getFiles());

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
  showEditor(div, value);
});

function showEditor(divId, value) {
  CodeMirror(divId, {
    //value: "function myScript(){return 100;}\n",
    value: value,
    mode:  "text/html",
    readOnly: false,
    lineNumbers: true
  });
}


function getFiles(){
	myFirebaseRef.on("value", function(snapshot) {
	  return snapshot.val();
	});
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

