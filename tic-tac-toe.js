window.onload = function(){


    var board = document.getElementById("board");
    var child = this.board.children;
    for (const i in child) {
        child[i].classList.add("square")
        }
    
}

