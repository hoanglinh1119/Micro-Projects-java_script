var Game=function () {
    this.canvas=null;
    this.context=null;
    this.width=1500;
    this.height=700;
    this.bird=null;
    this.bg=null;

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
         this.loop();
    }
    this.loop=function () {
        self.update();
        self.draw();
        console.log('loop');
        setTimeout(self.loop,33);
    }
    this.update=function () {
        this.bird.update();
        this.bg.update();
    }
    this.draw=function () {
        this.bg.draw();
        this.bird.draw();

    }
}
var game=new Game();
game.init();