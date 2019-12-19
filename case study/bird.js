var Bird=function (game) {
    this.game=game;
    this.images=[];
    this.img1Loaded=false;
    this.img2Loaded=false;
    this.img3Loaded=false;
    this.currentImage=null;
    this.currentImageIndex=0;
    this.currentFrame=0;
    this.x=70;
    this.y=0;
    this.speedY=0;
    this.acceleration=2;
    this.direction='down';

    self=this;

    this.init=function () {
     this.loadImages();
    }
    this.loadImages=function () {
        var img1=new Image();
        var img2=new Image();
        var img3=new Image();


        img1.onload=function () {
            self.img1Loaded=true;
            self.currentImage=img1;
            self.images.push(img1);
        }

        img2.onload=function () {
            self.img2Loaded=true;
            self.images.push(img2);
        }
        img3.onload=function () {
            self.img3Loaded=true;
            self.images.push(img3);
        }

        img1.src='down.png';
        img2.src='mid.png';
        img3.src='up.png';

    }
    this.update=function () {
        if(!self.img1Loaded||!self.img2Loaded||!self.img3Loaded){
            return;
        }
        self.currentFrame++;
        if(self.currentFrame%5==0){
            self.changeImage();
        }
        if(this.y<=600){
            if(self.direction='down'){
                this.speedY+=this.acceleration;

            }
           else {
               this.speedY-=this.acceleration;

            }
           this.y+=this.speedY;
        }

       if(this.y>480){
           this.y=480;
       }

       if(this.y>=400){
           this.game.gameOver=true;
       }
       this.checkHit();


    }
    this.checkHit=function () {
        if((this.x+34>this.game.cot.x&&
             this.x<this.game.cot.x+54)&&
            (this.y<this.game.cot.y-150||
                this.y+24>this.game.cot.y
            )
        ){
            this.game.gameOver=true;
        }

    }

    this.flap=function () {
        if(this.game.gameOver){
            return;
        }
        this.speedY=-17;
    }


    this.changeImage=function(){
        if(this.game.gameOver){
            return;
        }
        if(this.currentImageIndex==2){
            this.currentImageIndex=0;
        }else {
            this.currentImageIndex++;
        }
        this.currentImage=this.images[this.currentImageIndex];
    }



    this.draw=function () {
         if(this.img1Loaded&&this.img2Loaded&&this.img3Loaded){
             self.game.context.drawImage(self.currentImage,this.x,this.y);
         }
    }
}