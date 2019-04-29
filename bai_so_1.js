let num=0, total=num;
while(num!=-1){
    total+=num;
    num=parseFloat(prompt("Nhap vao 1 so: "));
    alert(num);
    console.log(total);
}
alert("total= " +total);