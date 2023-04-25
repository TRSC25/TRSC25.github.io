const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var file = urlParams.get('file')
var type = urlParams.get('type')
var ftype = document.getElementById("filetype");
var fname = document.getElementById("filename");
var fsize = document.getElementById("filesize");

if (type == "small") {
    ftype.innerHTML = "Small";
  } else {
    ftype.innerHTML = "This filetype is not yet implemented";
  }