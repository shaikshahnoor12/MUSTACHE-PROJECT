nosex=0;
nosey=0;
mustache="";
function preload(){
   mustache=loadImage("mustache.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
load = ml5.poseNet(video,modelLoaded);
load.on("pose",got_results);
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(mustache,nosex-15,nosey,30,30);
}
function snapshot(){
save("myimage.png");
}
function modelLoaded(){
console.log("Intialize the pose net");
 }
function got_results(results){
    if(results.length>0)
     {
    console.log(results)
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
     nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    }
    }