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

var gadgets = [
    { name: "anywheredoor", img: "gadgets/anywheredoor.png" },
    { name: "timemachine",  img: "gadgets/copyrobot.png" },
    { name: "bamboocapter", img: "gadgets/bamboocapter.png" },
    { name: "carpet", img: "gadgets/carpet.png" },
    { name: "telephone", img: "gadgets/telephone.png" },
    { name: "timemachine", img: "gadgets/time machine.jpg" },
    { name: "timestoper", img: "gadgets/time stoper.png" },
    { name: "television", img: "gadgets/Time Television.png" },
    { name: "tunnel", img: "gadgets/tunnel.png" },
    { name: "obtainingbag", img: "gadgets/ObtainingBag.jpg" },
    { name: "sparepocket", img: "gadgets/sparepocket.png" },
    { name: "timetravel", img: "gadgets/timetravelcarpet.png" },
    { name: "flyingstick", img: "gadgets/flyingstick.png" },
    { name: "gloves", img: "gadgets/gloves.png" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" }
];

function showList() {
    var text = document.getElementById("search").value.toLowerCase();
    var html = "";


    if (text === "") {
        document.getElementById("list").innerHTML = "";
        return;
    }

    
    for (var i = 0; i < gadgets.length; i++) {
        if (gadgets[i].name.includes(text)) {
            html += '<div class="item" onclick="pick(' + i + ')">' +
                    '<img src="' + gadgets[i].img + '" width="150">' +
                    '<p>' + gadgets[i].name + '</p></div>';
        }
    }

    
    if (html === "") {
        html = "<p>NOBITHA SPOILED THAT GADGET!</p>";
    }

    document.getElementById("list").innerHTML = html;
}

function pick(i) {
    document.getElementById("board").innerHTML +=
        '<div class="item"><img src="' + gadgets[i].img + '" width="150">' +
        '<p>' + gadgets[i].name + '</p></div>';
}
