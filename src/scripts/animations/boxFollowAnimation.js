import gsap from "gsap";

const boxFollowAnimation = () => {

    const $mainContainer = document.querySelector('main');
    const $box = $mainContainer.querySelector('.box');
    const animationX = gsap.quickTo($box, 'x', {
        delay: 0.5,
        duration: .4,
        transformOrigin: 'center center',
    })
    const animationY = gsap.quickTo($box, 'y', {
        delay: 0.5,
        duration: .4,
        transformOrigin: 'center center',
    })
    $mainContainer.addEventListener('mouseenter', (e) => {
        gsap.to($box, {
            opacity: 1,
            scale: 1,
            display: 'block',
            zIndex: 5,
        })
        $mainContainer.addEventListener('mousemove', (e) => {
            animationX(e.clientX + 10);
            animationY(e.clientY + 10);
        })
    })
    $mainContainer.addEventListener('mouseleave', (e) => {
        gsap.to($box, {
            opacity: 0,
            scale: 0,
            display: 'none',
        })
    })
}

export default boxFollowAnimation;