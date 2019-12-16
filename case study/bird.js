var Bird=function (game) {
    this.game=game;
    this.images=[];
    this.img1Loaded=false;
    this.img2Loaded=false;
    this.img3Loaded=false;
    this.currentImage=null;
    this.currentImageIndex=0;
    this.currentFrame=0;
    this.y=0;


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
    }

    this.changeImage=function(){
        if(this.currentImageIndex==2){
            this.currentImageIndex=0;
        }else {
            this.currentImageIndex++;
        }
        this.currentImage=this.images[this.currentImageIndex];
    }



    this.draw=function () {
         if(this.img1Loaded&&this.img2Loaded&&this.img3Loaded){
             self.game.context.drawImage(self.currentImage,100,this.y);
         }
    }
}