window.addEventListener("scroll",(function(){
    100<window.window.pageYOffset?document.getElementById("logo-dot").classList.add("is--visible"):document.getElementById("logo-dot").classList.remove("is--visible")
}));