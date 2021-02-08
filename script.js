

function loadAboutFunction(){

jQuery.get("https://github.com/VForslund/webtxt/blob/main/TXT.txt", function(t){
  $('#abouttextid').text(t);
});
}
function viewResume(){
    document.getElementById("resumeid").style.display = "block";
}

function hideResume(){
    document.getElementById("resumeid").style.display = "none";
}

function showContact(){
  var x = document.getElementById("contactid");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function test(){
$( "#abouttextid" ).load( "TXT.txt" );
}
