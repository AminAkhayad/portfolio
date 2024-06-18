import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pinAnimatie = () => {
    const $pinContainer = document.querySelector(".motivation-container");
    const $pinItem = document.querySelector("[data-animation='pin']");
    const $pinChild = $pinItem.querySelector("[data-element='pinChild']");

    const pinItemHeight = $pinContainer.offsetHeight - $pinItem.scrollHeight - 220;
    gsap.to($pinChild, {
        scrollTrigger: {
            trigger: $pinContainer,
            start: "top top",
            end: `+=500`,
            pin: $pinItem,
            pinSpacing: false,
            invalidateOnRefresh: true,

        }
    })
}

export default pinAnimatie;