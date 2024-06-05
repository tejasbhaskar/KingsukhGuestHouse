//alert("Welcome Guest");
function data(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    var d=document.getElementById("d").value;
    var e=document.getElementById("e").value;
    if(a==""||b=="" ||c=="" ||d=="" ||e==""){
        alert("All fields are mandatory");
        return false;
    }
    else{
        return true;
    }
    
}