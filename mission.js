function toggleVision() {
    var visionContainer = document.getElementById("visionContainer");
    var visionContainer1 = document.getElementById("visionContainer1");
    var visionContainer2 = document.getElementById("visionContainer2");
    var vission = document.getElementById('vission')
    var mission = document.getElementById('mission')
    var values=document.getElementById('values')
    vission.style.backgroundColor = "orangered";
    mission.style.backgroundColor = "white";
    values.style.backgroundColor = "white";
    vission.style.color="white";
    mission.style.color="black";
    values.style.color="black";
    visionContainer.style.display = "block";
    visionContainer1.style.display = "none";
    visionContainer2.style.display = "none";
}

function toggleMission() {
    var visionContainer = document.getElementById("visionContainer");
    var visionContainer1 = document.getElementById("visionContainer1");
    var visionContainer2 = document.getElementById("visionContainer2");
    var vission = document.getElementById('vission')
    var mission = document.getElementById('mission')
    var values=document.getElementById('values')
    vission.style.backgroundColor = "white";
    mission.style.backgroundColor = "orangered";
    values.style.backgroundColor = "white";
    vission.style.color="black";
    mission.style.color="white";
    values.style.color="black";
    visionContainer.style.display = "none";
    visionContainer1.style.display = "block";
    visionContainer2.style.display = "none";
}

function toggleValues() {
    var visionContainer = document.getElementById("visionContainer");
    var visionContainer1 = document.getElementById("visionContainer1");
    var visionContainer2 = document.getElementById("visionContainer2");
    var vission = document.getElementById('vission')
    var mission = document.getElementById('mission')
    var values=document.getElementById('values')
    vission.style.backgroundColor = "white";
    mission.style.backgroundColor = "white";
    values.style.backgroundColor = "orangered";
    vission.style.color="black";
    mission.style.color="black";
    values.style.color="white";
    visionContainer.style.display = "none";
    visionContainer1.style.display = "none";
    visionContainer2.style.display = "block";
}