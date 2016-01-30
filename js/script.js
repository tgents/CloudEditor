document.addEventListener("DOMContentLoaded", function() {
  var myCodeMirror = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode:  "javascript"
  });

  var editor = CodeMirror.fromTextArea(document.getElementById("demotext"), {
    lineNumbers: true,
    mode: "text/htmlmixed",
    matchBrackets: true
  });
});

