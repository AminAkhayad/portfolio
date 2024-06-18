import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import introAnimation from './animations/introAnimation';
import boxFollowAnimation from './animations/boxFollowAnimation';
import dataController from './controllers/dataController';
import { dataControllerDetail } from './controllers/dataController';
import fadeUpProjects from './animations/fadeUpProjects';
import pinAnimatie from './animations/pinAnimatie';
import fadeUptext from './animations/fadeUptext';
if (document.querySelector('.box')) {
    boxFollowAnimation();

}
if (document.querySelector('.intro-container')) {
    introAnimation();

}
if (document.querySelector('.project-container')) {
    fadeUpProjects();

}
if (document.querySelector('.motivation-container')) {
    pinAnimatie();
}
if (document.querySelector('.motivation__item')) {
    fadeUptext();
}

dataController();
dataControllerDetail();