function Apple(pin,gui_tin, hop_thu_den, tin_da_gui, trang_thai) {

    this.Pin = pin;
    this.Gui_Tin = gui_tin;
    this.Hop_Thu_Den = hop_thu_den;
    this.Tin_Da_Gui = tin_da_gui;
    this.Trang_Thai = trang_thai;

    //SET
    this.setPin = function (pin) {
        this.Pin = pin;
    }
    this.setGui_Tin = function (gui_tin) {
        this.Gui_Tin = gui_tin;
    }
    this.setHop_Thu_Den = function (Hop_Thu_Den) {
        this.Hop_Thu_Den = Hop_Thu_Den;
    }
    this.setTin_Da_Gui = function (Tin_Da_Gui) {
        this.Tin_Da_Gui = Tin_Da_Gui;
    }
    this.setTrang_Thai = function (Trang_Thai) {
        this.Trang_Thai = Trang_Thai;
    }


    //Get
    this.getPin = function (pin) {
        return this.Pin;
    }
    this.getGui_Tin = function () {
        this.Gui_Tin;
    }
    this.getHop_Thu_Den = function () {
        return this.Hop_Thu_Den;
    }
    this.getTin_Da_Gui = function () {
        return this.Tin_Da_Gui;
    }
    this.getTrang_Thai = function () {
        return this.Trang_Thai;
    }

    this.kiem_tra_trang_thai = function () {
        if (this.Trang_Thai) {
            alert("máy đang bật");
        } else
            alert("máy đang tắt");
    }

    this.bat_tat = function () {
        if (this.Trang_Thai == true) {
            this.Trang_Thai == false;
            alert("máy đã được tắt")
        }
        this.Trang_Thai == true;
        alert("máy đã được bật")
    }
    this.hoat_dong = function () {
        if (this.Trang_Thai == false) {
            alert("máy đang được tắt");
            return false;
        }
    }

    this.guitinnhan = function (id_dienthoai1,dienthoai,id_dienthoai2) {
        let tinnhan = document.getElementById(id_dienthoai).value;
        dienthoai.setHop_Thu_Den(tinnhan);
        document.getElementById(id_dienthoai2).value = "bạn có 1 tin nhắn";
        let pindienthoai = dienthoai.getPin();
        pindienthoai --;
        dienthoai.setPin(pindienthoai);
    }

    this.xemtinnhan = function (dienthoai,id_dienthoai) {
        let xemtin = dienthoai.getHop_Thu_Den();
        document.getElementById(id_dienthoai).value = xemtin;
        let pindienthoai = dienthoai.getPin();
        pindienthoai --;
        dienthoai.setPin(pindienthoai);
    }

    this.xempin = function (id_dienthoai,dienthoai) {
        let pindienthoai = dienthoai.getPin();
        document.getElementById(id_dienthoai).value = pindienthoai ;
    }

    this.xacpin = function (dienthoai) {
        this.pin ++;
        dienthoai.setPin(this.pin);
    }

}