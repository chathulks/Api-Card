function gesNumber() {
    let userNumber = document.getElementById("userNumber").value;
    let randomNumber = Math.random() * 10 + 1;
    let number = Math.floor(randomNumber);

    console.log(number);
    
    if (userNumber == "") {
        alert("Please enter Your number..!");
    } else if (userNumber > number) {
        alert("Your Number Greater than in Genarate number.");
    } else if (userNumber < number) {
        alert("Your Number Less than in Genarate number.");
    } else if (userNumber == number) {
        alert("Success Full Your Number Gesing.!");
    } else {
        alert("Try Again..");
    }
}