////////// JAVASCRIPT SCRIPTS //////////

///// NAVBAR SCRIPTS /////

function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}

function toggleMenu() {
  let menu = document.getElementById("mobile-menu");
  if (menu.style.right === "0px") {
      menu.style.right = "-250px";
  } else {
      menu.style.right = "0px";
  }
}

///// HOME SCRIPTS /////

// ---SCRIPT FOR HERO CARRUSEL--- //

	const images = [
	  "media/hero.jpg",
	  "media/hero2.jpg",
	  "media/hero3.jpg"
	];
	
	let currentIndex = 0;
	
	const hero = document.getElementById("hero");
	
	const gradient = "linear-gradient(#2b2b2bb3, #2b2b2bb3)";
	
	hero.style.backgroundImage = `${gradient}, url(${images[0]})`;
	
	function changeBackground() {
	  currentIndex = (currentIndex + 1) % images.length;
	
	  const newImage = new Image();
	  newImage.src = `${images[currentIndex]}`;
	
	  newImage.onload = () => {
		hero.style.backgroundImage = `${gradient}, url(${newImage.src})`;
	  };
	}

	setInterval(changeBackground, 5000);

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR HERO TEXT ANIMATION--- //

	document.addEventListener("DOMContentLoaded", function () {
    const textANI1 = document.querySelectorAll(".text-animate1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    textANI1.forEach(text => observer.observe(text));
});

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR SECTION 1 IMAGE--- //

	document.addEventListener("DOMContentLoaded", function () {
    const imageANI1 = document.querySelectorAll(".image-animated1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    imageANI1.forEach(text => observer.observe(text));
});

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR SECTION 1 H2--- //

// 	document.addEventListener("DOMContentLoaded", function () {
//     const textANI2 = document.querySelectorAll(".h2effect1, .h2effect2");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("active");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });

//     textANI2.forEach(element => observer.observe(element));
// });

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR INFINITE STRIPE 1--- //

document.addEventListener("DOMContentLoaded", function () {
    const sentences = [
      "Thousands of unique styles possible",
      "More than 10,000 pots created!",
      "New designs every month"
    ];
  
    let index = 0;
    const textContainer = document.getElementById("text-container");
  
    if (!textContainer) {
      console.warn("El elemento #text-container no existe.");
      return;
    }
  
    function showSentence() {
      textContainer.style.opacity = 0;
      setTimeout(() => {
        textContainer.textContent = sentences[index];
        textContainer.style.opacity = 1;
        index = (index + 1) % sentences.length;
      }, 500);
    }
  
    showSentence();
    setInterval(showSentence, 3000);
  });
  

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR INFINITE STRIPE 2--- //

	const sentences2 = [
	  "Thousands of recycled plastic",
	  "Removed more than 40 kilos of garbage",
	  "A team of 200 people helping"
	];
  
	let index2 = 0;
	const textContainer2 = document.getElementById("text-container2");
  
	function showSentence2() {
	  textContainer2.style.opacity = 0;
	  setTimeout(() => {
		textContainer2.textContent = sentences2[index2];
		textContainer2.style.opacity = 1;
		index2 = (index2 + 1) % sentences2.length;
	  }, 500);
	}
  
	showSentence2();
	setInterval(showSentence2, 3000);

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR CLICK BUTTONS--- //

   const squareElement = document.getElementById('elementToChange');
   
   const buttons = [
	 { id: 'buttonA', image: 'media/redpot.jpg' },
	 { id: 'buttonB', image: 'media/bluepot.jpg' },
	 { id: 'buttonC', image: 'media/yellowpot.jpg' },
	 { id: 'buttonD', image: 'media/orangepot.jpg' },
	 { id: 'buttonE', image: 'media/whitepot.jpg' },
	 { id: 'buttonF', image: 'media/purplepot.jpg' },
	 { id: 'buttonG', image: 'media/skypot.jpg' },
	 { id: 'buttonH', image: 'media/pinkpot.jpg' }
   ];
   
   function initializePage() {
	 const firstButton = document.getElementById(buttons[0].id);
	 firstButton.classList.add('active');
	 squareElement.style.backgroundImage = `url(${buttons[0].image})`;
   }
   
   buttons.forEach(button => {
	 const buttonElement = document.getElementById(button.id);
   
	 buttonElement.addEventListener('click', () => {

	   clearActiveButtons();
   
	   buttonElement.classList.add('active');
   
	   squareElement.style.backgroundImage = `url(${button.image})`;
	 });
   });
   
   function clearActiveButtons() {
	 document.querySelectorAll('.button-color').forEach(button => {
	   button.classList.remove('active');
	 });
   }
   
   initializePage();

///////////////////////////////////////////////////////////////////////////////////

// ---SCRIPT FOR SECTION 5 H2--- //

const sectionText = document.querySelector(".section5-text");

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

if (sectionText) {
    observer.observe(sectionText);
}

///////////////////////////////////////////////////////////////////////////////////
