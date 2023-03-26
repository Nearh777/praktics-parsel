import { Spinner } from 'spin.js';

const opts = {
    lines: 5, // The number of lines to draw
    length: 79, // The length of each line
    width: 12, // The line thickness
    radius: 63, // The radius of the inner circle
    scale: 0.7, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    speed: 0.8, // Rounds per second
    rotate: 22, // The rotation offset
    animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#6aa5d2', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    top: '50%', // Top position relative to parent
    left: '50%', // Left position relative to parent
    shadow: '0 0 1px transparent', // Box-shadow for the lines
    zIndex: 2000000000, // The z-index (defaults to 2e9)
    className: 'spinner', // The CSS class to assign to the spinner
    position: 'absolute', // Element positioning
};
const backdrop = document.querySelector('.backdrop');
const target = document.querySelector('.spinner');
const spinner = new Spinner(opts);

export const spinnerPlay = () => {
    backdrop.classList.remove('is-hidden')
    spinner.spin(target)
};

export const spinnerStop = () => {
    backdrop.classList.add('is-hidden')
    spinner.stop();
};
