const leftBilBilak = document.getElementById("left-bilbilak");
const rightBilBilak = document.getElementById("right-bilbilak");
const ball = document.getElementById('ball')
let changeX = -10;
let changeY = 50;
const screenHeight = innerHeight;
const screenWidth = innerWidth;
addEventListener("keydown", function (e) {
    const keyDown = e.key;

    const positionLeft = leftBilBilak.getBoundingClientRect();
    const positionRight = rightBilBilak.getBoundingClientRect();
    if (keyDown == "w" && positionLeft.y >= 20) {
        leftBilBilak.style.transform = `translate(0,${positionLeft.y - 25}px)`;
    } else if (keyDown == "s" && positionLeft.y <= screenHeight - 220) {
        leftBilBilak.style.transform = `translate(0,${positionLeft.y + 25}px)`;
    }
    else if (keyDown == "ArrowUp" && positionRight.y >= 20) {
        console.log('up click');
        rightBilBilak.style.transform = `translate(0,${positionRight.y - 25}px)`;
    } else if (keyDown == "ArrowDown" && positionRight.y <= screenHeight - 220) {
        console.log('down click');
        rightBilBilak.style.transform = `translate(0,${positionRight.y + 25}px)`;
    }
});

function moveBall(){
    const ballPosition = ball.getBoundingClientRect();
    const positionLeft = leftBilBilak.getBoundingClientRect();
    const positionRight = rightBilBilak.getBoundingClientRect();
    ball.style.transform = `translate(${ballPosition.x + changeX}px,${
        ballPosition.y + changeY
    }px)`;
    if(Math.abs(ballPosition.x - positionLeft.x) < 90 && (ballPosition.y > positionLeft.y && ballPosition.y < positionLeft.y + 200)){
        changeX = -10;
    }
    if(Math.abs(ballPosition.x - positionRight.x) < 130 && (ballPosition.y > positionRight.y && ballPosition.y < positionRight.y + 200)){
        changeX = -100;
    }
    if(ballPosition.y > screenHeight-100){
        changeY = -40;
    }
    if(ballPosition.x > screenWidth){
        ball.style.transform = 'none';
    }
    if(ballPosition.y < 30){
        changeY = 40;
    }
    if(ballPosition.x < 10){
        ball.style.transform = "none";
    }
}
setInterval(moveBall,80)