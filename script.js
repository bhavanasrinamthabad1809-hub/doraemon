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






/* ---------- CAMERA ---------- */
document.getElementById("stamp").textContent =
    new Date().toLocaleDateString("en-GB").replaceAll("/", "-");

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

    if (!video.videoWidth) { alert("Open the camera first!"); return; }

    // flash effect
    var flash = document.getElementById("flash");
    flash.style.transition = "none";
    flash.style.opacity = 1;
    setTimeout(function () {
        flash.style.transition = "opacity 0.4s";
        flash.style.opacity = 0;
    }, 50);

    // canvas is 4:3, same shape as the camera screen
    var cw = 960, ch = 720;
    canvas.width = cw;
    canvas.height = ch;
    var ctx = canvas.getContext("2d");

    // crop the video to 4:3 (same as object-fit: cover)
    var vw = video.videoWidth, vh = video.videoHeight;
    var s  = Math.max(cw / vw, ch / vh);
    var sw = cw / s, sh = ch / s;
    var sx = (vw - sw) / 2, sy = (vh - sh) / 2;

    // draw the video, mirrored
    ctx.save();
    ctx.translate(cw, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, cw, ch);
    ctx.restore();

    // draw Doraemon at the bottom right
    var dh = ch * 0.6;
    var dw = dora.naturalWidth / dora.naturalHeight * dh;
    ctx.drawImage(dora, cw - dw - 17, ch - dh, dw, dh);

    // orange date stamp
    ctx.font = Math.round(ch * 0.05) + "px monospace";
    ctx.fillStyle = "#ffb347";
    ctx.fillText(document.getElementById("stamp").textContent, 20, ch - 20);

    canvas.hidden = false;
    document.getElementById("download").href = canvas.toDataURL("image/png");
}



