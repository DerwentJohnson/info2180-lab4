let counter = 1;
let boxes = ["", "", "", "", "", "", "", "", ""];
let win = false;
function init() {
  var board = document.getElementById("board");
  var child = board.children;
  for (var i = 0; i <= child.length - 1; i++) {
    child[i].classList.add("square");
    child[i].setAttribute("id", "box" + i);
    child[i].addEventListener("click", e => {
      let clicked = e.target.id;
      let box = document.getElementById(clicked);
      if (box.innerHTML.trim() == "") {
        decide(box, clicked, i);
        counter++;
      }
    });
   
  }
}


function decide(box, id) {
  let i = id[3];
  if(win == false){
  if (counter % 2 == 0) {
    box.innerHTML = "O";
    box.classList.add("O");
    boxes[i] = "O";
  } else {
    box.innerHTML = "X";
    box.classList.add("X");
    boxes[i] = "X";
  }
}
  tester();
}
function tester() {
  const status = document.getElementById("status");
  let row1 = [boxes[0], boxes[1], boxes[2]];
  let row2 = [boxes[3], boxes[4], boxes[5]];
  let row3 = [boxes[6], boxes[7], boxes[8]];
  let col1 = [boxes[0], boxes[3], boxes[6]];
  let col2 = [boxes[1], boxes[4], boxes[7]];
  let col3 = [boxes[2], boxes[5], boxes[8]];
  let diag1 = [boxes[0], boxes[4], boxes[8]];
  let diag2 = [boxes[2], boxes[4], boxes[6]];
  let lines = [row1, row2, row3, col1, col2, col3, diag1, diag2];
  lines.forEach((item) => {
    if (item[0] + item[1] + item[2] == "XXX") {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.setAttribute("class","you-won");
        win = true;
    } else if (item[0] + item[1] + item[2] == "OOO") {
      status.innerHTML =  "Congratulations! O is the Winner!";
      status.setAttribute("class","you-won");
      win = true;
    }
  });
}
function Reset(){
    var board = document.querySelector("#board");
    var child = board.querySelectorAll("div");
    var botton = document.querySelector("button");
    const status = document.getElementById("status");
    botton.addEventListener("click",() => {
        counter = 1;
        boxes = ["", "", "", "", "", "", "", "", ""];
        for (var i = 0; i <= child.length - 1; i++) {
            child[i].innerHTML = "";
            child[i].classList.remove("O");
            child[i].classList.remove("X");
        }
        status.innerHTML = "Move your mouse over a square and click to play an X or an O";
        status.removeAttribute("class","you-won")
        win = false;       
    })
}
window.onload = function() {
  init();
  Reset();
};
