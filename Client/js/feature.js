var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureLoadingDiv = document.getElementById("featureLoadingDiv");
var featureFrm = document.getElementById("featureFrm");

featureSubmitBtn.addEventListener('click', function () {
    // Make the loader div visible
    featureLoadingDiv.classList.remove("human-remove");
    // Hide the form from the user
    featureFrm.classList.add("human-remove");
});