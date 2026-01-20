    const btn = document.getElementById("searchbtn");
    const input = document.getElementById("searchinput").value;


    if (input.trim() === "") {
        btn.style.display = "none";
    }
    
    else{
        btn.style.display = "inline-block";
    }