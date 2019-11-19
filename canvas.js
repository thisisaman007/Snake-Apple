addEventListener('resize', function() {
  canvas.width = Math.floor(window.innerWidth-4);
  canvas.height = Math.floor(window.innerHeight-4);
  document.location.reload();  
});
    var canvas =document.querySelector('canvas');
    canvas.width= Math.floor(window.innerWidth-4);
    canvas.height= Math.floor(window.innerHeight-4);
    var c = canvas.getContext('2d');

document.addEventListener("keydown",keypush);
setInterval(game, 1000/15);

var px=10,py=10,gs=20,ax=15,ay=15,w= Math.floor(canvas.width/gs),h= Math.floor(canvas.height/gs),xv=0,yv=0,trail=[],tail=4;

function game(){
    px+=xv;
    py+=yv;
    if(px<0){
        px=w-1;
    }
    if(px>w-1){
        px=0;
    }
    if(py<0){
        py=h-1;
    }
    if(py>h-1){
        py=0;
    }
    c.fillStyle="black";
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle="lime";
    for(var i=0;i< trail.length;i++){
        c.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x== px && trail[i].y == py)
            tail=4;
    }
    trail.push({x: px, y: py});
    while(trail.length>tail){
        trail.shift();
    }
    if(ax==px && ay==py){
        tail++;
        ax=Math.floor(Math.random()*w);
        ay=Math.floor(Math.random()*h);
    }
    c.fillStyle="red";
    c.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

function keypush(evt){
    switch(evt.keyCode){
        case 37:
            xv=-1;yv=0;break;
        case 38:
            xv=0;yv=-1;break;
        case 39:
            xv=1;yv=0;break;
        case 40:
            xv=0;yv=1;break;
            
    }
}
init();