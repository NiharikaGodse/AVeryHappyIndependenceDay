function preload(){
    img= loadImage('3.png');
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
    image(img,0,-200,700,700);
}

function take_snapshot(){
    save('MyTricolrFilterPic.jpg');
}

function  go_4(){
    window.location='4.html';
}