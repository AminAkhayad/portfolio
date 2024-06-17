import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import introAnimation from './animations/introAnimation';
import boxFollowAnimation from './animations/boxFollowAnimation';
boxFollowAnimation();
introAnimation();