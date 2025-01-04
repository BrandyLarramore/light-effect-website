const overlay = document.getElementById('overlay');
const toggleButton = document.getElementById('toggle-effect');

let lightEffectEnabled = true; // Effect starts enabled

// Update the overlay dynamically when the mouse moves
document.addEventListener('mousemove', (e) => {
  if (lightEffectEnabled) {
    const x = e.clientX;
    const y = e.clientY;
    overlay.style.background = 
      `radial-gradient(circle at ${x}px ${y}px, 
        rgba(255, 255, 220, 0.4) 20px, 
        rgba(255, 255, 200, 0.3) 50px, 
        rgba(255, 255, 180, 0.2) 100px, 
        rgba(0, 0, 0, 0.6) 200px, 
        black 300px)`;
  } else {
    overlay.style.background = 'none'; // Turn off the effect
  }
});

// Toggle the light effect on or off
toggleButton.addEventListener('click', () => {
  lightEffectEnabled = !lightEffectEnabled; // Toggle state
  toggleButton.textContent = lightEffectEnabled ? 'Dark' : 'Light'; // Update button text
  overlay.style.background = lightEffectEnabled
    ? 'radial-gradient(circle, rgba(255, 255, 220, 0.4) 20px, rgba(255, 255, 200, 0.3) 50px, rgba(255, 255, 180, 0.2) 100px, rgba(0, 0, 0, 0.6) 200px, black 300px)'
    : 'none'; // Reset overlay
});