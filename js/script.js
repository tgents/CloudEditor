document.addEventListener("DOMContentLoaded", function() {
  "use strict"
  var textEditor = document.getElementById("fill");
  var value = "Type your code here";
  //showEditor(textEditor, value);

  requirejs([
    "codemirror/lib/codemirror", "codemirror/mode/htmlmixed/htmlmixed"
  ], function(CodeMirror) {
    CodeMirror.fromTextArea(textEditor, {
      lineNumbers: true,
      mode: "htmlmixed",
      value: value
    });
  });

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