const panels = gsap.utils.toArray(".MainContent .itm");


const H = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".MainContent",
        pin: true,
        start: "top top",
        scrub: 2, // 숫자에따라 변함이 있음
        markers: true
        // snap: {
        //     snapTo: 1 / (panels.length - 1),
        //     inertia: false,
        //     duration: { min: 0.1, max: 0.1 }
        // },
        //end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
    }
});


const T = document.querySelector('#to_top');
T.addEventListener('click', () => {
    gsap.to(window, { scrollTo: 0, duration: 1 })
})