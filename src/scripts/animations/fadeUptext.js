import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const fadeUptext = () => {
    const $container = document.querySelector('.motivation__item');
    console.log($container);
    const $text = $container.querySelectorAll('[data-element="text"]');
   gsap.from($text, {
        scrollTrigger : {
            trigger: $container,
            start: 'top 80%',
            bottom: 'bottom 20%',
            toggleActions: 'play none none reverse',
        },
        
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    });
}

export default fadeUptext;