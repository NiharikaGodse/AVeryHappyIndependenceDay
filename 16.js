function preload(){
    img= loadImage('16.png');
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
    image(img,0,0,250,250);
}

function take_snapshot(){
    save('FlagFilterPic.jpg');
}

function  go_17(){
    window.location='17.html';
}