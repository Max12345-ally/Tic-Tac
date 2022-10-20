const container = document.querySelector(".container")
const cell1 = document.querySelector(".first")
const cell2 = document.querySelector(".second")
const cell3 = document.querySelector(".third")
const cell4 = document.querySelector(".four")
const cell5 = document.querySelector(".five")
const cell6 = document.querySelector(".six")
const cell7 = document.querySelector(".seven")
const cell8 = document.querySelector(".eight")
const cell9 = document.querySelector(".nine")
let turn = document.querySelector(".turn");

cell1.addEventListener("click", e => {
e.preventDefault();
cell1.innerHTML = turn.innerHTML;
if (turn.innerHTML = "O"){
    turn.innerHTML = "X";

}else{
    turn.innerHTML = "O";

}

});