function preload(){
    img= loadImage('19.png');
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
    image(img,200,290,500,250);
}

function take_snapshot(){
    save('FlagFilterPic.jpg');
}

function  go_1(){
    window.location='1.html';
}