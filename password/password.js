function password(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const length = Math.floor(Math.random()*(8-4+1))+4;
    let password="";

    for(let i=0;i<length;i++){
        let randomIndex=Math.floor(Math.random()*chars.length);
        password+=chars[randomIndex]
    }
    document.getElementById("result").innerHTML= "Password : "+password;
}