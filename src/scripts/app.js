import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import introAnimation from './animations/introAnimation';
import boxFollowAnimation from './animations/boxFollowAnimation';
import dataController from './controllers/dataController';
import { dataControllerDetail } from './controllers/dataController';
import fadeUpProjects from './animations/fadeUpProjects';
if (document.querySelector('.box')) {
    boxFollowAnimation();

}
if (document.querySelector('.intro-container')) {
    introAnimation();

}
if (document.querySelector('.project-container')) {
    fadeUpProjects();

}


dataController();
dataControllerDetail();