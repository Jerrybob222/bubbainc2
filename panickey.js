// keyRedirect.js

// Get saved key from localStorage (null if not set yet)
let redirectKey = localStorage.getItem('redirectKey');

document.addEventListener('keydown', function(event) {
  // First time: prompt the user to set a key
  if (!redirectKey) {
    redirectKey = prompt("Press the key you want to use to go to Google:").trim();
    if (redirectKey) {
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is set to "${redirectKey}". Press it to go to Google!`);
    }
    return; // Don’t redirect on this first key press
  }

  // Redirect if the saved key is pressed
  if (event.key === redirectKey) {
    window.location.href = 'https://www.google.com';
  }

  // Optional: Rebind if Shift + key
  if (event.key === redirectKey && event.shiftKey) {
    const newKey = prompt("Enter a new key to use:").trim();
    if (newKey) {
      redirectKey = newKey;
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is now set to "${redirectKey}"`);
    }
  }
});
