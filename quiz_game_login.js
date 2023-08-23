function login() {

    p1name = document.getElementById("player1").value;
    p2name = document.getElementById("player2").value;
    localStorage.setItem("player1_name", p1name);
    localStorage.setItem("player2_name", p2name);
    window.location = "quiz_game.html"
}