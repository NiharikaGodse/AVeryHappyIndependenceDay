function preload(){
    img= loadImage('2.png');
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
    image(img,0,-130,700,650);
}

function take_snapshot(){
    save('ILoveMyIndiaFilterPic.jpg');
}

function  go_3(){
    window.location='3.html';
}