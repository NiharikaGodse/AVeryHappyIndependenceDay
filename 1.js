function preload(){
    soldeirface= loadImage('soldeirface.png');
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
    image(soldeirface);
    image(soldeirface,0,0,700,500);
}

function take_snapshot(){
    save('MySoldierFilterPic.jpg');
}

function go_2(){
    window.location='2.html'
}