// ===========================slider===========================
// ===========================slider===========================

document.addEventListener("DOMContentLoaded", function(event){
        // ===============on scrol=====================
	let header=document.querySelector(".header");
	let headHeigth=header.clientHeight;
	
	window.onscroll=function(){
		if(window.pageYOffset > headHeigth){
			header.classList.add("fixed");
		}else{
			header.classList.remove("fixed")
		}
	}

	// ================burger menu==================
	let headerBurger=document.querySelector(".header-burger");
	let menu=document.querySelector(".menu")
	let body=document.querySelector("body")
	
	headerBurger.onclick=function(){
		headerBurger.classList.toggle("active")
		menu.classList.toggle("active");
		body.classList.toggle("no-scroll");
	}





        //  ==========slider==============
	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	
		speed:2500,

	});
});

// hiden-btn============x
const moreDiv = document.getElementById("moreBtn");
const btn = document.getElementById("learnMore");
let businessBtn=document.getElementById("bussBtn");

btn.onclick = function () {
  if (moreDiv.style.display == "none" ){
    moreDiv.style.display = "block";
	businessBtn.innerText = "more less";

  } else {
    moreDiv.style.display = "none";
	businessBtn.innerText = " learn more";
  }

};




