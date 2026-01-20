

function updateclock() {
    const now = new Date();
    const hours = now.getHours(); 
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 

    const timestring = `${hours}:${minutes}:${seconds}` ;

    document.getElementById("clock").textContent = timestring;
}


setInterval(() => {
    updateclock();
    
}, 1000);