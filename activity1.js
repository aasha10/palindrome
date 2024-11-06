function palindrome(myString){
    var input = myString.toLowerCase();
    var reverseInput = myString.split('').reverse().join('');
    if(myString == reverseInput){
        document.write(myString + " is a palindrome")
    }
    else{
        document.write(myString + " is not a palindrome")
    }
}

palindrome("mada");