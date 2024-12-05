
// 1 ) : click - Triggered when a user clicks on an element (e.g., button, link).
addEventListener('click', () => {
  console.log('Button clicked!');
});

// 2)  : keydown / keyup - Triggered when a key is pressed or released on the keyboard.
window.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
});

// 3)  : change - Triggered when the value of an input element changes (e.g., a form field).
addEventListener('change', () => {
  console.log('Input value changed!');
});

// 4) : submit - Fired when a form is submitted.
addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form submission
  console.log('Form submitted!');
});

// 5) : load - Fired when a page or an element (like an image) has finished loading.
window.addEventListener('load', () => {
  console.log('Page loaded!');
});
