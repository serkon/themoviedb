import ResizeObserver from 'resize-observer-polyfill';

export const myObserver = (callback: (entry) => void): ResizeObserver => new ResizeObserver((entry: ResizeObserverEntry[]) => callback(entry))
