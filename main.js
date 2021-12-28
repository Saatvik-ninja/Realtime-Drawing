nose_x=0;
nose_y=0;
difference=0;
right_wrist_x=0;
left_wrist_x=0;
function preload(){

}



function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(570,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function draw(){
    background('white');
    document.getElementById("square_size").innerHTML="The width and height of the square will be= "+difference+"px";
    fill('turquoise');
    stroke('blue');
    square(nose_x,nose_y,difference);
}



function modelLoaded(){
    console.log('model');
}



function gotPoses(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose x= "+nose_x+"nose y= "+nose_y);
    right_wrist_x=results[0].pose.rightWrist.x;
    left_wrist_x=results[0].pose.leftWrist.x;
    difference=floor(left_wrist_x-right_wrist_x);
    console.log("left wrist x= "+left_wrist_x+"right wrist x= "+right_wrist_x+"difference= "+difference);
}
}