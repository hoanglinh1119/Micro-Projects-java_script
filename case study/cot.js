var Cot= function (game) {
    this.game=game;
    this.image1=null;
    this.loaded=false;
    this.x=300;
    this.y=320;
    let n=0;


    var self=this;
    this.init=function () {
        this.loadImage();

    }
    this.loadImage=function () {
        this.image1=new Image();
        this.image1.onload=function () {
            self.loaded=true;

        }
        this.image1.src='cot.png';
    }
    this.update=function () {
        if(this.game.gameOver){
            alert('Game Over!!!!! \n\n\n Điểm của bạn là:' +n);
            return ;
        }
        this.x-=5;
        if(this.x==-50){
            n=n+1;
            this.x=300;
            this.y=Math.floor(200+(Math.random()*200))
        }


    }

    this.draw=function () {
        if(self.loaded==false){
            return;
        }
        self.game.context.drawImage(this.image1,this.x,this.y-150-320);
        self.game.context.drawImage(this.image1,this.x,this.y);
    }


};