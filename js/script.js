

document.querySelector("#share").addEventListener("click", function(){
    var x = document.getElementById("socials");
    var y = document.getElementById("share");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
});