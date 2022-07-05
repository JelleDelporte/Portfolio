const pagesL = gsap.utils.toArray('.left');
const pagesR = gsap.utils.toArray('.right');

// function buildConditionalTween(mediaQuery) {
//   if (mediaQuery.matches) {
pagesL.forEach(page => {
  gsap.from(page, {
    opacity: 0,
    x: -300,
    ease: "power2.out",
    duration: 1.3,
    scrollTrigger: {
      trigger: page,
      toggleActions: "restart complete restart complete",
    }
  })
})

pagesR.forEach(page => {
  gsap.from(page, {
    opacity: 0,
    x: 300,
    ease: "power2.out",
    duration: 1.3,
    scrollTrigger: {
      trigger: page,
      toggleActions: "restart complete restart complete",
    }
  })
})
//   }
//   else{
//     console.log("test")
//     pagesL.forEach(page => {
//       gsap.from(page, {
//         opacity: 0,
//         ease: "power2.out",
//         duration: 1.3,
//         scrollTrigger: {
//           trigger: page,
//           toggleActions: "restart complete restart complete",
//         }
//       })
//     })

//     pagesR.forEach(page => {
//       gsap.from(page, {
//         opacity: 0,
//         ease: "power2.out",
//         duration: 1.3,
//         scrollTrigger: {
//           trigger: page,
//           toggleActions: "restart complete restart complete",
//         }
//       })
//     })
//   }

// }

// const mediaQuery = window.matchMedia("(min-width: 1060px)");

// buildConditionalTween(mediaQuery);

// mediaQuery.addListener(buildConditionalTween);


// https://www.youtube.com/watch?v=X7IBa7vZjmo

// https://codepen.io/GreenSock/pen/bGexQpq

// https://greensock.com/docs/v3/GSAP/Timeline