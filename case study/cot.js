var Cot= function (game) {
    this.game=game;
    this.image=null;
    this.loaded=false;
    this.x=0;


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
        this.x--;
        if(this.x==0){
            this.x=320;
        }
    }
    this.draw=function () {
        if(self.loaded==false){
            return;
        }
        self.game.context.drawImage(this.image,this.x+160,0);
        self.game.context.drawImage(this.image,this.x+320,400);
        self.game.context.drawImage(this.image,this.x+480,0);
    }
};