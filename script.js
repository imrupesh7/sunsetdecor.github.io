const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

	let i;
	for (i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if (n > myslide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

$(document).ready(function () {

	$("#form-submit").click(5000, function () {
		alert("Thanks, Soon Our Team Contect You");
	});
});






$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$('.scroll').fadeIn();
		}
		else {
			$('.scroll').fadeOut();
		}
	})
});

$('.scroll').click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, 10);
	return false;
});

$(document).ready(function () {
	$("a[href^='#']").click(function (e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;
		var mypos = position - 100;

		$("body,html").animate({
			scrollTop: mypos
		}, 400);
	});

});







var menu = document.querySelector("#fa-bars");
var header = document.querySelector("header nav ul");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("menujs");
}



