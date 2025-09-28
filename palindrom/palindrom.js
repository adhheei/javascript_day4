function ispalindrome(word){
    let cleaned=word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed=cleaned.split("").reverse().join("");
    return cleaned===reversed;
}

function palindrome(){
    let input=document.getElementById("word").value;
    let result=ispalindrome(input)?`${input} is a palindrome`:`${input} is not a palindrome`;
    document.getElementById("result").innerHTML=result;
}