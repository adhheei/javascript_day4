function tocelsius(){
    let n;
    let val;

    n=parseFloat(document.getElementById("temp").value);
    val=parseFloat((n*9/5)+32);
    console.log(val);
    document.getElementById("display").innerHTML="To fahrenheit :" +val;
}

function tofahrenheit(){
 
    n=parseFloat(document.getElementById("temp").value);
    val=parseFloat((n-32)*5/9);
    console.log(val);
    document.getElementById("display").innerHTML="To celsius :" +val;
}