
// keyRedirect.js

// Check if a key is already saved in localStorage
let redirectKey = localStorage.getItem('redirectKey') || '`'; // Default to backtick
document.addEventListener('keydown', function(event) {
  // If no key is saved yet (shouldn’t happen here because we defaulted)
  if (!redirectKey) {
    redirectKey = prompt("Press to panic").trim();
    if (redirectKey) {
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is set to "${redirectKey}". Press for clever`);
    }
    return;
  }

  // Redirect if the user presses the bound key
  if (event.key === redirectKey) {
    window.location.href = 'https://clever.com/login';
  }

  // Optional: Rebind if Shift is pressed with the current key
  if (event.key === redirectKey && event.shiftKey) {
    const newKey = prompt("Enter a key on your keyboard").trim();
    if (newKey) {
      redirectKey = newKey;
      localStorage.setItem('redirectKey', redirectKey);
      alert(`Your key is now set to "${redirectKey}"`);
    }
  }
});
