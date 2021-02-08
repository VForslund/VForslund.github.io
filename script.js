

function loadAboutFunction(){

$( "#abouttextid" ).load( "TXT.txt" );
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
