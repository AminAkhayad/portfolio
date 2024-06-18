import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const introAnimation = () => {
    const $introContainer = document.querySelector("[data-animation='intro']");
    const $introItems = $introContainer.querySelectorAll("[data-animation='intro'] > * >*");
    console.log($introItems);
    const introAnimationTimeLine = gsap.timeline({
        defaults: {
            duration: 1.8,
            ease: "power2.out",
        }
    });
    introAnimationTimeLine
        .from($introItems, { yPercent: 100, stagger: 0.4})
        .to($introContainer, { x: "100%", display: "none" , pinspacing: false})

}

export default introAnimation;