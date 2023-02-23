const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
    a++
    num.textContent = a;
});


minus.addEventListener("click", () => {
    if(a > 0) {
        a--
        num.textContent = a;
    }

});
