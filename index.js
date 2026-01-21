const openbtn = document.getElementById("openbtn");

openbtn.onclick  =  function () {
    const mobilenavbar = document.getElementById("mobilenavbar");
    mobilenavbar.style.display = "flex"
}

const closebtn = document.getElementById("closebtn");

closebtn.onclick  =  function () {
    const mobilenavbar = document.getElementById("mobilenavbar");
    mobilenavbar.style.display = "none"
}