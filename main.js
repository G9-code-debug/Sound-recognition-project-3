Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    image_quality: 90
});
camera = document.getElementById("webcam");
Webcam.attach(camera);
function click_img() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src='" + data_uri + "'/>"
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TDUdEpmlg/model.json" , modelLoaded);
function modelLoaded() {
    console.log(ml5.version);
    console.log("The model has loaded");
}