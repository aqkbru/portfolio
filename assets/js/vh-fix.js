// Fix for mobile browsers viewport height issues
// This solves the problem of inconsistent viewport heights on mobile browsers

// First we get the viewport height and multiply it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Fix for Safari and iOS to prevent elastic scrolling issues
document.addEventListener('touchmove', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

// Fix for handling orientation changes on mobile
window.addEventListener('orientationchange', function() {
  // Recalculate vh unit after orientation change
  setTimeout(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, 100);
});
