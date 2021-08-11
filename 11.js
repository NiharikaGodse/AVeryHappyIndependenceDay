function preload(){
    img= loadImage('11.png');
}

function setup(){
    canvas=createCanvas(700,500);
    canvas.position(380,280);    
    video=createCapture(VIDEO);
    video.size(850,500);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 500);
    image(img);
    image(img,350,150,350,350);
}

function take_snapshot(){
    save('NetajiFilterPic.jpg');
}

function  go_12(){
    window.location='12.html';
}