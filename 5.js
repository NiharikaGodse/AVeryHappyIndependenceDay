function preload(){
    img= loadImage('5.png');
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
    image(img,10,5,200,200);
}

function take_snapshot(){
    save('ShivajiMaharajFilterPic.jpg');
}

function  go_6(){
    window.location='6.html';
}