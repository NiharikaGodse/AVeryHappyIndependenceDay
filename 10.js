function preload(){
    img= loadImage('10.png');
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
    image(img,400,220,350,300);
}

function take_snapshot(){
    save('DesertSoldiersFilterPic.jpg');
}

function  go_11(){
    window.location='11.html';
}