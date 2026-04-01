// keyRedirect.js

// Get saved key from localStorage
let redirectKey = localStorage.getItem('redirectKey');

// Default key to trigger rebinding
const rebindTriggerKey = '`';

document.addEventListener('keydown', function(event) {
  // If user presses the backtick (`), allow rebinding
  if (event.key === rebindTriggerKey) {
    const newKey = prompt("Press the key you want to use").trim();
    if (newKey) {
      redirectKey = newKey;
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is now set to "${redirectKey}"`);
    }
    return; // Don't redirect on this press
  }

  // If user presses the bound key, redirect
  if (redirectKey && event.key === redirectKey) {
    window.location.href = 'https://clever.com/login';
  }
});
