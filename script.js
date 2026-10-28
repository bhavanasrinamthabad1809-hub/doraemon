function showresult() {
    var scores = {
        doraemon: 0, nobita: 0, dorami: 0, gian: 0,
        suneo: 0, shizuka: 0, dekisugi: 0, jaiko: 0
    };

    var answers = document.querySelectorAll("input:checked");

    if (answers.length < 6) {
        alert(" yahh please answer all 6 questions!");
        return;
    }

    for (var i = 0; i < answers.length; i++) {
        var name = answers[i].value;
        scores[name] = scores[name] + 1;
    }

    var winner = "doraemon";
    for (var character in scores) {
        if (scores[character] > scores[winner]) {
            winner = character;
        }    
    }
    document.getElementById("result").innerHTML = "You are <b>" + winner.toUpperCase() + "</b>!";
}
