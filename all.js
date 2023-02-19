function topFunction() {
  document.body.scrollTop;
  document.documentElement.scrollTop = 0;
}

var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("prvi");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "inline-flex";
}

function enlargeImg(imgs) {
  imgs.style.transform = "scale(1.5)";
  imgs.style.transition = "150ms linear";
  imgs.style.zIndex = "1";
}

function resetImg(imgs) {
  imgs.style.transform = "scale(1.0)";
  imgs.style.transition = " 150ms linear ";
  imgs.style.zIndex = "0";
}
