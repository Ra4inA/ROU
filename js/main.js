const animItems = document.querySelectorAll("._anim-items");

if(animItems.length > 0) {


	window.addEventListener('scroll', animOnScroll);


	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 3;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;


			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollteft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}












function Spoiler1() {
	var ele = document.getElementById("contentSpoiler1");
	var text = document.getElementById("linkSpoiler1");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";
	}
}


function Spoiler2() {
	var ele = document.getElementById("contentSpoiler2");
	var text = document.getElementById("linkSpoiler2");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";
	}
}


function Spoiler3() {
	var ele = document.getElementById("contentSpoiler3");
	var text = document.getElementById("linkSpoiler3");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "block";
	}
}