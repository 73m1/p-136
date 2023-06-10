status = ""
whatToFind =""

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting The Objects";
    whatToFind = document.getElementById("objectToFind").value
}

function modelLoaded() {
    console.log("MODEL is LOADED");
    status = true;
}

function draw() {
    image(video,0,0,480,380);
}