// function gesNumber() {
//     let userNumber = document.getElementById("userNumber").value;
//     let randomNumber = Math.random() * 10 + 1;
//     let number = Math.floor(randomNumber);

//     console.log(number);

//     if (userNumber == "") {
//         Swal.fire({
//             title: "Please enter Your number..!",
//             icon: "warning",
//             draggable: true
//         });
//     } else if (userNumber > number) {
//         Swal.fire({
//             title: "Your Number Greater than in Genarate number.",
//             icon: "warning",
//             draggable: true
//         });
//     } else if (userNumber < number) {
//         Swal.fire({
//             title: "Your Number Less than in Genarate number.",
//             icon: "warning",
//             draggable: true
//         });
//     } else if (userNumber == number) {
//         Swal.fire({
//             title: "Success Full Your Number Gesing.!",
//             icon: "success",
//             draggable: true
//         });
//     } else {
//         Swal.fire({
//             title: "Try Again..",
//             icon: "cancel",
//             draggable: true
//         });
//     }
// }




// ------------------------------------------------------------------

// const customerList = [];
// customerList.push(1);
// customerList.push(2);
// customerList.push(3);
// customerList.push(4);
// customerList.push(5);

// console.log(customerList);

// let customerListReverse = customerList.reverse();
// console.log(customerListReverse);

// ------------------------------------------------------------------


//-------------------------------------------------------------------
const product = [
    {
        name: "Suger Bun",
        inStock: true,
    },
    {
        name: "Crocadile Bun",
        inStock: true,
    },
    {
        name: "Vegitable Bun",
        inStock: false,
    },
    {
        name: "Piza",
        inStock: false,
    },
    {
        name: "Rotie",
        inStock: false,
    }
];

// let inStock = product.filter(product => product.inStock == true);
// let outOfStock = product.filter(product => product.inStock == false);
// console.log(outOfStock);

let inStock = product.filter(
    function (product) {
        return productFilter(product);
    }
)

function productFilter(product) {
    return product.inStock == true;
}

console.log(inStock);

//-------------------------------------------------------------------

//-------------------------------------------------------------------

//---step 01---

function numberSum(num1, num2) {
    return num1 + num2
}

console.log(numberSum(5, 8));

//---step 02---

let sum = function numberSum(num1, num2) {
    return num1 + num2
}

console.log(sum(8, 8));

//---step 03---

let sum2 = (num1, num2) => {
    return num1 + num2
}

console.log(sum2(10, 10));

//---step 04---

let sum3 = (num1, num2) => num1 + num2;

console.log(sum3(20, 20));

//---singale value step 01---

let text = textValue => {
    return textValue;
}

console.log(text("Hi Bunjo.."));

//---singale value step 02---

let text2 = textValue => textValue;


console.log(text2("Hi Sadeesha.."));

//-------------------------------------------------------------------