Webcam.attach( '#camera' ); 
camera = document.getElementById("camera");

Webcam.set({
width:350,
height:300
image_format:'png',
png_quality:98
});

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ueLb5vTky/model.json', modelLoaded);

function take_snapshot(){
    Werbcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
camera=document.getElementById("camera");
Webcam.attach("#camera")

function modelLoaded() 
{ 
    console.log('Model Loaded!'); 
}
