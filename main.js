const leftBilBilak = document.getElementById("left-bilbilak");
const rightBilBilak = document.getElementById("right-bilbilak");

const screenHeight = innerHeight;
addEventListener("keydown", function (e) {
    const keyDown = e.key;

    const positionLeft = leftBilBilak.getBoundingClientRect();
    const positionRight = rightBilBilak.getBoundingClientRect();
    console.log(positionRight);
    if (keyDown == "w" && positionLeft.y >= 20) {
        leftBilBilak.style.transform = `translate(0,${positionLeft.y - 15}px)`;
    } else if (keyDown == "s" && positionLeft.y <= screenHeight - 220) {
        leftBilBilak.style.transform = `translate(0,${positionLeft.y + 15}px)`;
    }
    else if (keyDown == "ArrowUp" && positionRight.y >= 20) {
        console.log('up click');
        rightBilBilak.style.transform = `translate(0,${positionRight.y - 15}px)`;
    } else if (keyDown == "ArrowDown" && positionRight.y <= screenHeight - 220) {
        console.log('down click');
        rightBilBilak.style.transform = `translate(0,${positionRight.y + 15}px)`;
    }
});
