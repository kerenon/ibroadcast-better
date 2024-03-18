// Dynamically load an external script
let script = document.createElement('script');
script.src = chrome.runtime.getURL('script.js'); // For Chrome Extensions
// script.src = 'script.js'; // For web applications
document.head.appendChild(script);