// JAVASCRIPT CODE 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('increment')) {
            count++;
        } 
        else if (styles.contains('decrement')) {
            count--;
        } 
        else {
            count = 0;
        }

        if (count < 0) {
            value.style.color = "red";
        } 
        else if (count > 0) {
            value.style.color = "green";
        } 
        else {
            value.style.color = "#000"; 
        }
        value.textContent = count;
    })
})