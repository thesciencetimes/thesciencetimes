function show(x) {
    x.classList.toggle("change");
    if (document.getElementById("list").style.display == "block") {
        document.getElementById("list").style.display = "none";
    }
    else {
        document.getElementById("list").style.display = "block";
    }
}

function my_menu(x) {
    x.classList.toggle("change");
    if (document.getElementById("myTopnav2").style.display == "flex") {
        document.getElementById("myTopnav2").style.display = "none";
    }
    else {
        document.getElementById("myTopnav2").style.display = "flex";
    }
}

