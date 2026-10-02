/* ==========================================================================
   QuicTax.ca V2 — Vanilla JavaScript Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('mobile-open');
    });

    // Close mobile nav when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('mobile-open');
      });
    });
  }

  // 2. Income Bracket Visualizer Slider (CRA Hub Section)
  const incomeSlider = document.getElementById('income-slider');
  const incomeVal = document.getElementById('income-val');
  const taxEstVal = document.getElementById('tax-est-val');

  if (incomeSlider) {
    incomeSlider.addEventListener('input', function() {
      const val = parseInt(this.value);
      if (incomeVal) incomeVal.innerText = '$' + val.toLocaleString();
      const estTax = Math.round(val * 0.185);
      if (taxEstVal) taxEstVal.innerText = '~$ ' + estTax.toLocaleString();
    });
  }

});
