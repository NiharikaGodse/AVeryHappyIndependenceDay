function preload(){
    img= loadImage('8.png');
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
    image(img,300,50,400,450);
}

function take_snapshot(){
    save('BhagatSinghFilterPic.jpg');
}

function  go_9(){
    window.location='9.html';
}