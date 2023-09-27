const leftBilBilak = document.getElementById("left-bilbilak");
const rightBilBilak = document.getElementById("right-bilbilak");
const ball = document.getElementById("ball");
const rightScoreDOM = document.getElementById("right-score");
const leftScoreDOM = document.getElementById("left-score");
const resultDOM = document.getElementById("result");
const newGameBtn = document.getElementById("new-game-btn");
const newGameContainer = document.getElementById("new-game");
let changeX = -10;
let changeY = 50;
const screenHeight = innerHeight;
const screenWidth = innerWidth;
let sit = "start-left";
let leftScore = 0;
let rightScore = 0;
let isStop = false;
addEventListener("keydown", function (e) {
    const keyDown = e.key;

    const positionLeft = leftBilBilak.getBoundingClientRect();
    const positionRight = rightBilBilak.getBoundingClientRect();
    if (keyDown == "w" && positionLeft.y >= 20) {
        leftBilBilak.style.transform = `translate(0,${positionLeft.y - 25}px)`;
    } else if (keyDown == "s" && positionLeft.y <= screenHeight - 220) {
        leftBilBilak.style.transform = `translate(0,${positionLeft.y + 25}px)`;
    } else if (keyDown == "ArrowUp" && positionRight.y >= 20) {
        console.log("up click");
        rightBilBilak.style.transform = `translate(0,${
            positionRight.y - 25
        }px)`;
    } else if (
        keyDown == "ArrowDown" &&
        positionRight.y <= screenHeight - 220
    ) {
        console.log("down click");
        rightBilBilak.style.transform = `translate(0,${
            positionRight.y + 25
        }px)`;
    }
});

rightBilBilak.style.transform = `translate(0,300px)`;
leftBilBilak.style.transform = `translate(0,300px)`;

function moveBall() {
    if (isStop == false) {
        if (sit == "start-left") {
            console.log("test");
            ball.style.transform = `translate(300px,300px)`;
            sit = "ingame";
            changeX = -10;
            changeY = 40;
        } else if (sit == "start-right") {
            ball.style.transform = `translate(1300px,300px)`;
            sit = "ingame";
            changeX = -100;
            changeY = -40;
        }
        const ballPosition = ball.getBoundingClientRect();
        const positionLeft = leftBilBilak.getBoundingClientRect();
        const positionRight = rightBilBilak.getBoundingClientRect();
        ball.style.transform = `translate(${ballPosition.x + changeX}px,${
            ballPosition.y + changeY
        }px)`;
        if (
            Math.abs(ballPosition.x - positionLeft.x) < 90 &&
            ballPosition.y > positionLeft.y &&
            ballPosition.y < positionLeft.y + 200
        ) {
            changeX = -10;
        }
        if (
            Math.abs(ballPosition.x - positionRight.x) < 130 &&
            ballPosition.y > positionRight.y &&
            ballPosition.y < positionRight.y + 200
        ) {
            changeX = -100;
        }
        if (ballPosition.y > screenHeight - 100) {
            changeY = -40;
        }
        if (ballPosition.x > screenWidth) {
            sit = "start-right";
            leftScore++;
            leftScoreDOM.innerText = leftScore;
        }
        if (ballPosition.y < 30) {
            changeY = 40;
        }
        if (ballPosition.x < 10) {
            sit = "start-left";
            rightScore++;
            rightScoreDOM.innerText = rightScore;
        }
        if (rightScore == 10 || leftScore == 10) {
            gameResult();
        }
    }
}
alert("start game?");
setInterval(moveBall, 80);

function gameResult() {
    isStop = true
    leftBilBilak.style.display = "none";
    rightBilBilak.style.display = "none";
    document.getElementById("ball-container").style.display = "none";
    resultDOM.style.display = "block";
    newGameContainer.style.display = "block";
    resultDOM.innerHTML = `${leftScore}&nbsp;-&nbsp;${rightScore}`;
}

newGameBtn.addEventListener("click", function () {
    leftBilBilak.style.display = "inline-block";
    rightBilBilak.style.display = "inline-block";
    document.getElementById("ball-container").style.display = "inline-block";
    resultDOM.style.display = "none";
    newGameContainer.style.display = "none";
    leftScore = 0;
    rightScore = 0;
    rightScoreDOM.innerText = "0";
    leftScoreDOM.innerText = "0";
    sit = "start-left";
    ball.style.transform = "none";
    rightBilBilak.style.transform = `translate(0,300px)`;
    leftBilBilak.style.transform = `translate(0,300px)`;
    isStop = false
});

// console.log('dont use bilbilak');
