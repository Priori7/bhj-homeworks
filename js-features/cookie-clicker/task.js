let clickCount = 0; 
let isEnlarged = false;

function handleClick() {
    clickCount++;
    document.getElementById("clicker__counter").innerText = clickCount;

    const img = document.getElementById("cookie");
    if (isEnlarged) {
        img.style.width = "240px";
        img.style.height = "168px";
    } else {
        img.style.width = "200px";
        img.style.height = "128px";
    }
    isEnlarged = !isEnlarged;
}


document.getElementById("cookie").addEventListener("click", handleClick);