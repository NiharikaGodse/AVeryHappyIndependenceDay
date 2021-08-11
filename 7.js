function preload(){
    img= loadImage('7.png');
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
    image(img,500,280,160,250);
}

function take_snapshot(){
    save('PanditNehruFilterPic.jpg');
}

function  go_8(){
    window.location='8.html';
}