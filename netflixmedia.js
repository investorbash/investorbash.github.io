var a =document.getElementById("inp0").value;
var b =document.getElementById("span1");
var c = /^[0-9a-zA-Z]+$/;
if(a.value.includes(c)){
b.innerHTML="Valid Input";
b.style.outline="green";
return true;
}
else{
b.innerHTML="Invalid Input";
b.style.outline="red";
return false;
}