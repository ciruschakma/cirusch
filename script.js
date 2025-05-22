/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() { headerMainShadow(); };
function headerMainShadow() {
  const navheaderMain = document.getElementById("headerMain");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navheaderMain.style.boxShadow    = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navheaderMain.style.height       = "70px";
    navheaderMain.style.lineHeight   = "70px";
  } else {
    navheaderMain.style.boxShadow    = "none";
    navheaderMain.style.height       = "90px";
    navheaderMain.style.lineHeight   = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings    : ["Student Engineer","Designer","Developer","Learner"],
  loop       : true,
  typeSpeed  : 100,
  backSpeed  : 80,
  backDelay  : 4000
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin   : 'top',
  distance : '80px',
  duration : 2000,
  reset    : true     
});

// HOME
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name',       { delay: 100 });
sr.reveal('.featured-text-info',  { delay: 200 });
sr.reveal('.featured-text-btn',   { delay: 200 });
sr.reveal('.social_icons',        { delay: 200 });
sr.reveal('.featured-image',      { delay: 300 });

// PROJECT BOX
sr.reveal('.project-box',         { interval: 200 });

// HEADINGS
sr.reveal('.top-headerMain',      {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// ABOUT INFO & CONTACT INFO
const srLeft = ScrollReveal({
  origin   : 'left',
  distance : '80px',
  duration : 2000,
  reset    : true
});
srLeft.reveal('.about-info',   { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

// ABOUT SKILLS & FORM BOX
const srRight = ScrollReveal({
  origin   : 'right',
  distance : '80px',
  duration : 2000,
  reset    : true
});
srRight.reveal('.skills-box',  { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop    = current.offsetTop - 50,
          sectionId     = current.getAttribute('id'),
          linkSelector  = '.nav-menu a[href*=' + sectionId + ']',
          linkEl        = document.querySelector(linkSelector);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      linkEl.classList.add('active-link');
    } else {
      linkEl.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ----- carousel ----- */
 $('#myCarousel').carousel({
    interval: 3000,   // 3 seconds
    pause: 'hover'    // optional: pauses on mouse-over
  })


  
