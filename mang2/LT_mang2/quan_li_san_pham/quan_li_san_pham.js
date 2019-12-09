let mang=[];
function vebang() {
    bang="<table border='1' width='30%'>";
    bang+="<caption> Danh sách sản phẩm</caption>";
    for (let i=0;i<mang.length;i++){
        bang+="<tr>";
        bang+="<td>"+mang[i]+"</td>";
        bang+="<td><input type='button' value='Edit' onclick='editSp("+i+")'></td>";
        bang+="<td><input type='button' value='Delete'onclick='deleteSp("+i+")'></td>";
        bang+="</tr>";

    }
    bang+="</table>";
    document.getElementById("bang").innerHTML=bang;
}
function addProduct() {
    name=document.getElementById("nameProduct").value;
    mang.push(name);
    vebang();
}
function editSp(i) {
    newName=prompt("new name of product:");
    mang[i]=newName;
    vebang();
}
function deleteSp(i) {
    if(confirm("Bạn muốn xóa sản phẩm khỏi danh sách")){
        mang.splice(i,1);
        vebang();
    }

}