function gesNumber() {
    let userNumber = document.getElementById("userNumber").value;
    let randomNumber = Math.random() * 10 + 1;
    let number = Math.floor(randomNumber);

    console.log(number);

    if (userNumber == "") {
        Swal.fire({
            title: "Please enter Your number..!",
            icon: "warning",
            draggable: true
        });
    } else if (userNumber > number) {
        Swal.fire({
            title: "Your Number Greater than in Genarate number.",
            icon: "warning",
            draggable: true
        });
    } else if (userNumber < number) {
        Swal.fire({
            title: "Your Number Less than in Genarate number.",
            icon: "warning",
            draggable: true
        });
    } else if (userNumber == number) {
        Swal.fire({
            title: "Success Full Your Number Gesing.!",
            icon: "success",
            draggable: true
        });
    } else {
        Swal.fire({
            title: "Try Again..",
            icon: "cancel",
            draggable: true
        });
    }
}