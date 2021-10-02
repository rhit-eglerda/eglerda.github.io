var rhit = rhit || {};
rhit.variableName = "";

    const mybutton = document.getElementById("myBtn");
    const headers = document.getElementsByClassName("myHeader");

    
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    for (const header of headers) {
        header.classList.add("sticky");
    }
  } else {
    mybutton.style.display = "none";
    for (const header of headers) {
        header.classList.remove("sticky");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}