function preload(){
    img= loadImage('12.png');
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
    image(img,450,150,250,350);
}

function take_snapshot(){
    save('EmblemFilterPic.jpg');
}

function  go_13(){
    window.location='13.html';
}