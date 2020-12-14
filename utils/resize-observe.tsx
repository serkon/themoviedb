import ResizeObserver from 'resize-observer-polyfill';

export const myObserver = ((callback: Function) => new ResizeObserver((entry) => callback(entry[0].contentRect.width));

// const someEl = document.querySelector('body');
// myObserver.observe(someEl);
