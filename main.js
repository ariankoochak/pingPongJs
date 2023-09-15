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
    console.log(ballPosition.x, "+", changeX);
    console.log(ballPosition.x + changeX);
    ball.style.transform = `translate(${ballPosition.x + changeX}px,${ballPosition.y + changeY}px)`;
    if(ballPosition.y > screenHeight-100){
        changeY = -40;
    }
    if(ballPosition.x > screenWidth){
        changeX = -100;
    }
    if(ballPosition.y < 30){
        changeY = 40;
    }
    if(ballPosition.x < 10){
        changeX = -10;
    }
}
setInterval(moveBall,80)