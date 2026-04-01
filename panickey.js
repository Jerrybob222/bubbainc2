// keyRedirect.js

// Get saved key from localStorage
let redirectKey = localStorage.getItem('redirectKey');

document.addEventListener('keydown', function(event) {
  // First time: prompt the user to set a key
  if (!redirectKey) {
    redirectKey = prompt("Press the key you want to use as a panic button").trim();
    if (redirectKey) {
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is set to "${redirectKey}". Press to leave!`);
    }
    return; // Don't redirect on this first key press
  }

  // If user presses the bound key normally, redirect
  if (event.key === redirectKey) {
    window.location.href = 'https://clever.com/login';
  }

  // If user presses the bound key while holding Shift, allow rebinding
  if (event.key === redirectKey && event.shiftKey) {
    const newKey = prompt("Enter a new key to use:").trim();
    if (newKey) {
      redirectKey = newKey;
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is now set to "${redirectKey}"`);
    }
