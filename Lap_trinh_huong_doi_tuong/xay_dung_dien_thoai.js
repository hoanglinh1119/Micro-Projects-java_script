let Mobile=function (name,power,battery,draftBox,inputBox,outBox) {
    this.name=name;
    this.power=power;
    this.battery=battery;
    this.draftBox=draftBox;
    this.inputBox=inputBox;
    this.outBox=outBox;

    this.getPower=function () {
        let powerMobile=document.getElementById("power" + this.name);
        if(this.power>0){document.getElementById(+this.name+"Turn on"+this.power)} else {
            document.getElementById(+this.name+"turn off"+this.power)
        };
    }
    this.getBatterry=function (this.power) {
        while(this.power <100){
            this.power++;
            document.getElementById(+this.name+this.power);
        };
    }
    this.getinputBox=function () {
        let storage=[];
            if(this.power>0){
                
            }
    }
}