var Base=function (game) {
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

        }
        this.image.src='base.png';
    }
    this.update=function () {
        if(this.game.gameOver){
            return;
        }
        this.x-=2;
        if(this.x==-336){
            this.x=0;
        }
    }
    this.draw=function () {
        if(self.loaded==false){
            return;
        }
        self.game.context.drawImage(this.image,this.x,this.game.height-90);
        self.game.context.drawImage(this.image,this.x+288,this.game.height-90);

    }
}