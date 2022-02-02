function preload() {
    
    }
    
    function setup() {
    canvas = createCanvas(640,480);
    canvas.position(120,250);
    video=createCapture(VIDEO);
    video.hide();
    Tint_colour="";
    }
    
    function draw() {
    image(video, 0, 0, 640, 480);
    tint(Tint_colour);
    }

    function take_snapshot(){
        save('mypic.png');
    }

    function filter_tint(){
        Tint_colour=document.getElementById("colour_name").value;
    }