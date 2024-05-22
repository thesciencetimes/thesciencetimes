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

if (window.innerWidth < 1000) {
    document.getElementById("container1").style.display="block";
    var elems = document.getElementsByClassName("topnav");
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
}