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
    { name: "copyrobot",  img: "gadgets/copyrobot.png" },
    { name: "bamboocapter", img: "gadgets/bamboocapter.png" },
    { name: "carpet", img: "gadgets/carpet.png" },
    { name: "telephone", img: "gadgets/telephone.png" },
    { name: "timemachine", img: "gadgets/time machine.jpg" },
    { name: "timestoper", img: "gadgets/time stoper.png" },
    { name: "television", img: "gadgets/Time Television.png" },
    { name: "tunnel", img: "gadgets/tunnel.png" },
    { name: "obtainingbag", img: "gadgets/ObtainingBag.jpg" },
    { name: "sparepocket", img: "gadgets/sparepocket.png" },
    { name: "carpet", img: "gadgets/timetravelcarpet.png" },
    { name: "flyingstick", img: "gadgets/flyingstick.png" },
    { name: "gloves", img: "gadgets/gloves.png" },
    { name: "smalllight", img: "gadgets/small light.jpg" },
    { name: "biglight", img: "gadgets/small light.jpg" }
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
        '<div class="item"><img src="' + gadgets[i].img
        '<p>' + gadgets[i].name + '</p></div>';
}
function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            document.getElementById("cam").srcObject = stream;
        })
        .catch(function () {
            alert("Please allow camera access to take a photo!");
        });
}

function takePhoto() {
    var video  = document.getElementById("cam");
    var dora   = document.getElementById("dora");
    var canvas = document.getElementById("photo");

    var w = video.videoWidth;
    var h = video.videoHeight;
    if (!w) { alert("Open the camera first!"); return; }

    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");

    
    ctx.save();
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, w, h);
    ctx.restore();

    
    var dh = h * 0.6;
    var dw = dora.naturalWidth / dora.naturalHeight * dh;
    ctx.drawImage(dora, w - dw - 10, h - dh, dw, dh);

    canvas.hidden = false;
    document.getElementById("download").href = canvas.toDataURL("image/png");
}