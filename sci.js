function show(x) {
    x.classList.toggle("change");
    if (document.getElementById("list").style.display == "block") {
        document.getElementById("list").style.display = "none";
    }
    else {
        document.getElementById("list").style.display = "block";
    }
}

function open(x){
    x.classList.toggle("change");
}
