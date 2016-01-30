document.addEventListener("DOMContentLoaded", function() {
  var htmlValue = "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t</head>"
  var myCodeMirror = CodeMirror(document.body, {
    //value: "function myScript(){return 100;}\n",
    value: htmlValue,
    mode:  "html",
    readOnly: true,
    lineNumbers: true
  });

  //var editor = CodeMirror.fromTextArea(document.getElementById("editorTextArea"), {
  //  lineNumbers: true,
  //  mode: "text/htmlmixed",
  //  matchBrackets: true
  //});
});

