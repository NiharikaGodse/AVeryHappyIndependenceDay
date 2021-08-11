function preload(){
    img= loadImage('4.png');
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
    image(img,350,260,350,250);
}

function take_snapshot(){
    save('RaniLakshmiBaiFilterPic.jpg');
}

function  go_5(){
    window.location='5.html';
}