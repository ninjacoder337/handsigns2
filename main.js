Webcam.set({
    width:350,
    height:300,
    image_format : "png",
    png_quality:90
})

camera = document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);

}

function draw() {
    image(video,0,0,300,300);
    
}

function setup()  {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}