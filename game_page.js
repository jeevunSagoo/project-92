p1name = localStorage.getItem("player1_name");
p2name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = p1name;
document.getElementById("player2_name").innerHTML = p2name;
document.getElementById("question_turn").innerHTML = "Question Turn :" + p1name;
document.getElementById("answer_turn").innerHTML = "Answer Turn :" + p2name;
p1score = 0;
p2score = 0;
document.getElementById("player1_score").innerHTML = p1score;
document.getElementById("player2_score").innerHTML = p2score;
qturn = "p1";
aturn = "p2";


function send() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_answer = number1 * number2;
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>send</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(answer_turn==actual_answer){
        update_p1score=p1score+1;
        document.getElementById("player1_score").innerHTML = p1score;
    }
    else {
        update_p1score+=1;
        document.getElementById("player2_score").innerHTML = p2score;
    }
    if(qturn=="p1"){
        qturn="p2";
        document.getElementById("qturn").innerHTML="qturn-" +p2name;
    }
    else {
        qturn="p1";
        document.getElementById("qturn").innerHTML="qturn-" +p1name;
    }
}