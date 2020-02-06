var canvas = document.getElementById("myCanvas");
var fond = canvas.getContext("2d");
fond.fillStyle = "black";
fond.fillRect(0,0,400,200);
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FFFFFF";
var hello = canvas.getContext("2d");
hello.fillStyle = "white";
hello.font = "40px Arial";
hello.fillText("Start a new game", 45, 100);

let r=0
function move(){
    document.getElementById('scr').textContent=score
    if (score==10){
        myB=[]
        score=0
        a_target = new Target
        score=0
        clearInterval(myTimer)  
    }else{
        if(clickR && clickL){
            r=r
        }else if(clickR && r<175){
            r+=1
        }else if(clickL && r>-175){
            r-=1
        }
        fond.fillStyle = "black";
        fond.fillRect(0,0,400,200); 
        var cible = canvas.getContext("2d");
        cible.fillStyle = "red";
        cible.fillRect(tgt[0].x,tgt[0].y,40,20);
        ctx.beginPath();
        ctx.moveTo(200+r, 175);
        ctx.lineTo(225+r,200);
        ctx.lineTo(175+r, 200);
        ctx.lineTo(200+r, 175);
        ctx.stroke();
        for(elem in myB){
            balle = canvas.getContext("2d");
            balle.fillStyle = "white";
            balle.fillRect(myB[elem].x,myB[elem].y,1,5);
            myB[elem].update()
            if((tgt[0].x<= myB[elem].x & myB[elem].x <= tgt[0].x+40) & (myB[elem].y == tgt[0].y)){
                tgt.pop()
                a_target = new Target
                tgt.push(a_target)
                score+=1
            }
            if(myB[elem].y<=0){
                myB.splice(elem, 1)
            }
        }
    }
}
class Bullet{
    constructor(){
        this.x=200+r
        this.y=175
    }
    update(){
        this.y-=1
    }
}
class Target{
    constructor(){
        this.y=10
        this.x=Math.floor(Math.random() * Math.floor(360));
    }
}

let myB=[]
let temp
let score=0
let tgt=[]
let a_target = new Target
tgt.push(a_target)
let clickR=false
let clickL=false
var myTimer


document.getElementById("load").addEventListener("click", () => {
    document.getElementById("load").blur()
    myB=[]
    clearInterval(myTimer)
    myTimer = setInterval(move,7)
 });


document.addEventListener('keydown', (event) => {
    let touche = event.code;
    if (touche == "ArrowRight") {
        clickR=true
    }
    if (touche == "ArrowLeft") {
        clickL=true
    }
    });
document.addEventListener('keyup', (event) => {
    let touche = event.code;
    if (touche == "ArrowRight") {
        clickR=false
    }
    if (touche == "ArrowLeft") {
        clickL=false
    }
    });

document.addEventListener('keydown', (event) => {
    let touche = event.code;
    if (touche == "Space") {
        temp = new Bullet()
        myB.push(temp)
    }
     
    });



   