var Cot= function (game) {
    this.game=game;
    this.image=null;
    this.loaded=false;
    this.x=300;
    this.y=320;


    var self=this;
    this.init=function () {
        this.loadImage();

    }
    this.loadImage=function () {
        this.image=new Image();
        this.image.onload=function () {
            self.loaded=true;
            console.log('image loaded');
        }
        this.image.src='cot.png';
    }
    this.update=function () {
        if(this.game.gameOver){
            return;
        }
        this.x-=2;
        if(this.x==-50){
            this.x=300;
            this.y=Math.floor(200+(Math.random()*200))
        }


    }
    this.draw=function () {
        if(self.loaded==false){
            return;
        }
        self.game.context.drawImage(this.image,this.x,this.y-150-320);
        self.game.context.drawImage(this.image,this.x,this.y);



    }
};