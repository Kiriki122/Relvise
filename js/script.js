

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;
const menuLink = document.querySelectorAll('.menu__link');

if ((getComputedStyle(burger).display != 'none') && burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
		body.classList.toggle('_lock');
    })

	menuLink.forEach(element => {
		element.addEventListener('click', () => {
			burger.classList.toggle('_active');
			menu.classList.toggle('_active');
			body.classList.toggle('_lock');
		});
	});

}

//---Swiper

const popularSlider = new Swiper('.clients-slider', {
	spaceBetween: 30,
	slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
      },
	breakpoints: {
		992: {
			slidesPerView: 6,
		},
		660: {
			slidesPerView: 3,
		}
	}
});


//----Uppearing

// const uppearing = document.querySelector('.uppearing');

// window.onscroll = () => {
// 	let scroll = window.scrollY;
// 	let offset = uppearing.offsetTop;
// 	let height = uppearing.ofsetHeight;

// 	if(scroll >= offset && scroll <= offset + height){
// 		uppearing.classList.remove('.uppearing');
// 	}
// }