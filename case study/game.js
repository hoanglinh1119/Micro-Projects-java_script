var Game=function () {
    this.canvas=null;
    this.context=null;
    this.width=288;
    this.height=512;
    this.bird=null;
    this.bg=null;
    this.base=null;
    this.cot=null;
    this.count=0;
    this.gameOver= false;

    var self=this;
    this.init=function () {
        this.canvas=document.createElement("canvas");
        this.context=this.canvas.getContext('2d');
        this.canvas.width=this.width;
        this.canvas.height=this.height;
         document.body.appendChild(this.canvas);

         this.bird=new Bird(this);
         this.bird.init();

         this.bg= new Bg(this);
         this.bg.init();

         this.base = new Base(this);
         this.base.init();

         this.cot= new Cot(this);
         this.cot.init();

         this.listenMouse();
         this.loop();
    }
    this.listenMouse=function () {
        this.canvas.addEventListener('click',function () {
            self.bird.flap();
        })
    }
    this.loop=function () {
        self.update();
        self.draw();
        setTimeout(self.loop,45);
    }
    this.update=function () {
        this.bird.update();
        this.bg.update();
        this.base.update();
        this.cot.update();
    }
    this.draw=function () {
        this.bg.draw();
        this.cot.draw();
        this.base.draw();
        this.bird.draw();


    }
};

var game=new Game();
game.init();