window.onload = function() {
    canv = document.getElementById("gc")
    ctx = canv.getContext("2d")
    document.addEventListener("keydown", keyPush)
    setInterval(game, 1000 / 10)
}


px = py = 10
gs = tc = 20
ax = Math.floor(Math.random() * tc)
ay = Math.floor(Math.random() * tc)
xv = yv = 0
trail = []
tail = 5
score = 0

var myElement = document.getElementById('gc');
var mc = new Hammer(myElement);

mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

function game() {

    px += xv
    py += yv
    if (px < 0) {
        px = tc - 1
    }
    if (px > tc - 1) {
        px = 0
    }
    if (py < 0) {
        py = tc - 1
    }
    if (py > tc - 1) {
        py = 0
    }
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canv.width, canv.height)

    ctx.fillStyle = "green"
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            if (score != 0) {
                var audio = new Audio('audios/Sad-Trombone.mp3')
                audio.play()
                window.alert("GAME OVER!!\nYour Score: " + score)
                history.go(0)
            }
            score = 0
            tail = 5
        }
    }
    const img = new Image()
    img.src = 'images/apple.png';
    ctx.drawImage(img, ax * gs, ay * gs, gs - 2, gs - 2);

    trail.push({
        x: px,
        y: py
    })
    while (trail.length > tail) {
        trail.shift()
    }
    if (ax == px && ay == py) {
        tail++
        var audio = new Audio('audios/done-for-you.mp3')
        audio.play()
        ax = Math.floor(Math.random() * tc)
        ay = Math.floor(Math.random() * tc)
        score++
    }
    document.getElementById("score").innerHTML = "SCORE: " + score
}


mc.on("panleft panright panup pandown tap press", function(ev) {
    console.log(ev.type + " gesture detected.");
    switch (ev.type) {
        case "panleft":
            if (xv == 1) {
                break;
            }
            xv = -1;
            yv = 0;
            break;
        case "panup":
            if (yv == 1) {
                break;
            }
            xv = 0;
            yv = -1;
            break;
        case "panright":
            if (xv == -1) {
                break;
            }
            xv = 1;
            yv = 0;
            break;
        case "pandown":
            if (yv == -1) {
                break;
            }
            xv = 0;
            yv = 1;
            break;
    }
});

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            if (xv == 1) {
                break;
            }
            xv = -1;
            yv = 0;
            break;
        case 38:
            if (yv == 1) {
                break;
            }
            xv = 0;
            yv = -1;
            break;
        case 39:
            if (xv == -1) {
                break;
            }
            xv = 1;
            yv = 0;
            break;
        case 40:
            if (yv == -1) {
                break;
            }
            xv = 0;
            yv = 1;
            break;
        case 65:
            if (xv == 1) {
                break;
            }
            xv = -1;
            yv = 0;
            break;
        case 87:
            if (yv == 1) {
                break;
            }
            xv = 0;
            yv = -1;
            break;
        case 68:
            if (xv == -1) {
                break;
            }
            xv = 1;
            yv = 0;
            break;
        case 83:
            if (yv == -1) {
                break;
            }
            xv = 0;
            yv = 1;
            break;
    }
}