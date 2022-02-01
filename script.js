var x = 135;
var y = 80;

window.onload = init;

function init(){
  draw();
  document.body.onkeydown = update;
}


function draw(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0,122,122,1)";
  ctx.fillRect( x, y, 30, 30);

  /*ctx.fillStyle = "rgba(122,0,122,0.8)";
  ctx.fillRect( 10, 10, 700, 500 );

  ctx.fillStyle = "rgba(0,122,122,0.8)";
  ctx.fillRect( 20, 20, 350, 250 );

  ctx.fillStyle = "rgba(122,122,0,0.8)";
  ctx.fillRect( 30, 30, 350, 250 );

  ctx.fillStyle = "rgba(0,122,0,0.8)";
  ctx.fillRect( 40, 40, 350, 250 );

  ctx.fillStyle = "rgba(122,122,122,0.8)";
  ctx.fillRect( 50, 50, 350, 250 );

  ctx.fillStyle = "rgba(122,122,0.8)";

  //desenha um triangulo
  ctx.moveTo(200,200);
  ctx.lineTo(100,200);
  ctx.lineTo(200,100);
  ctx.fill(); */
  }
  
  function update(event){
    if(event.key == "ArrowDown"){
      y = y + 10;
    }
    if(event.key == "ArrowRight"){
      x = x + 10;
    }
    if(event.key == "ArrowUp"){
      y = y - 10;
    }
    if(event.key == "ArrowLeft"){
      x = x - 10;
    }
    draw();
  }