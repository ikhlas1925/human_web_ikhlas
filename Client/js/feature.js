var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featureFrm");
var featureLoadingDiv = document.getElementById("featureLoadingDiv");

featureSubmitBtn.addEventListener("click", function() {
  // Make the loader div visible
  featureLoadingDiv.classList.remove("human-removed");
  // Hide the form from the user
  featureFrm.classList.add("human-removed");
});

async function onfeatureload() {
  var response = await fetch("http://localhost:3000/features");
  var result = await response.json();

  var featureList = document.getElementById("feature-list")

  for (var i = 0; i < result.length; i++){
    var lielement = document.createElement("li");
    lielement.className = "list-group-item";
    lielement.innerHTML =
    result[i].body + "<span class='badge badge-success'>" + result[i].author + "," + result[i].time + "</span>";
    featureList.appendChild(lielement);
  }

}
onfeatureload();

function onfeaturesubmit(){
  // Send a request to the server
  console.log("Sending POST request to the server...");
}


