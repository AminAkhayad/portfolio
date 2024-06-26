import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const fadeUpProjects = () => {
    const $section = document.querySelector(".third-content");
    const $container = document.querySelectorAll('[data-component="data"]');


    gsap.from($container, {
        scrollTrigger: {
            trigger: $section,

            pinSpacing: false,
            toggleActions: "play none none reset",
            start: "top 80%",
            end: "bottom 20%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    }
    )

}

export default fadeUpProjects;