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
  }

  // 2. Hero Interactive Workspace Preview Tabs
  const workspaceTabs = document.querySelectorAll('.workspace-tab');
  const workspacePanels = document.querySelectorAll('.workspace-panel');

  workspaceTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      
      workspaceTabs.forEach(t => t.classList.remove('active'));
      workspacePanels.forEach(p => p.style.display = 'none');

      this.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });

  // 3. AI Assistant OCR Simulation
  const scanBtn = document.getElementById('simulate-ocr-btn');
  const ocrStatusText = document.getElementById('ocr-status-text');
  const ocrRows = document.querySelectorAll('.ocr-data-row');

  if (scanBtn) {
    scanBtn.addEventListener('click', function() {
      scanBtn.innerText = 'Scanning...';
      if (ocrStatusText) ocrStatusText.innerText = '⚡ AI Neural Engine scanning document coordinates & verifying SIN checksum...';

      setTimeout(function() {
        scanBtn.innerText = 'Scan Sample Slip';
        if (ocrStatusText) ocrStatusText.innerText = '✅ Extracted T4 Slips Verified with 99.8% Accuracy';
        ocrRows.forEach(row => row.style.display = 'table-row');
      }, 1000);
    });
  }

  // 4. Volume Cost Per Return Calculator Slider
  const volumeSlider = document.getElementById('volume-slider');
  const volumeValLabel = document.getElementById('volume-val-label');
  const costPerReturnLabel = document.getElementById('cost-per-return-label');

  if (volumeSlider && costPerReturnLabel) {
    volumeSlider.addEventListener('input', function() {
      const volume = parseInt(this.value);
      if (volumeValLabel) volumeValLabel.innerText = volume + ' Returns';
      const cost = (149 / volume).toFixed(2);
      costPerReturnLabel.innerText = '$' + cost;
    });
  }

  // 5. Interactive Canadian Tax Estimator
  const personaBtns = document.querySelectorAll('.persona-btn');
  const t4Slider = document.getElementById('t4-slider');
  const t4CountLabel = document.getElementById('t4-count-label');
  const calcTitle = document.getElementById('calc-title');
  const calcTurnaround = document.getElementById('calc-turnaround');
  const calcDocsList = document.getElementById('calc-docs-list');
  const calcWaBtn = document.getElementById('calc-whatsapp-btn');

  let currentPersona = 'personal';

  personaBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      personaBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentPersona = this.getAttribute('data-type');
      updateEstimator();
    });
  });

  if (t4Slider) {
    t4Slider.addEventListener('input', function() {
      if (t4CountLabel) t4CountLabel.innerText = this.value + (this.value === '1' ? ' Slip' : ' Slips');
      updateEstimator();
    });
  }

  function updateEstimator() {
    const count = t4Slider ? t4Slider.value : 1;
    
    if (currentPersona === 'personal') {
      if (calcTitle) calcTitle.innerText = 'Personal Tax Return (T1)';
      if (calcTurnaround) calcTurnaround.innerText = '24 – 48 Hours';
      if (calcDocsList) {
        calcDocsList.innerHTML = `
          <li><span style="color:#0284c7; font-weight:900;">✓</span> ${count} × T4 / T4A Income Slip(s)</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> RRSP Contribution Receipts</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Medical & Donation Receipts</li>
        `;
      }
    } else if (currentPersona === 'freelance') {
      if (calcTitle) calcTitle.innerText = 'Freelancer & Self-Employed Filing';
      if (calcTurnaround) calcTurnaround.innerText = '48 Hours';
      if (calcDocsList) {
        calcDocsList.innerHTML = `
          <li><span style="color:#0284c7; font-weight:900;">✓</span> T2125 Statement of Business Activities</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Vehicle Mileage Log & Gas Receipts</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Home Office Workspace Details</li>
        `;
      }
    } else if (currentPersona === 'smb') {
      if (calcTitle) calcTitle.innerText = 'Small Business Tax Package';
      if (calcTurnaround) calcTurnaround.innerText = '48 – 72 Hours';
      if (calcDocsList) {
        calcDocsList.innerHTML = `
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Year-End Bookkeeping Summary</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> GST/HST Return Reconciliation</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Payroll Slips & Subcontractor Fees</li>
        `;
      }
    } else if (currentPersona === 'corporate') {
      if (calcTitle) calcTitle.innerText = 'Corporate Tax Return (T2)';
      if (calcTurnaround) calcTurnaround.innerText = '3 – 5 Business Days';
      if (calcDocsList) {
        calcDocsList.innerHTML = `
          <li><span style="color:#0284c7; font-weight:900;">✓</span> GIFI Trial Balance & Financial Statements</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Shareholder Dividend / Salary Records</li>
          <li><span style="color:#0284c7; font-weight:900;">✓</span> Prior Year T2 Return & CRA Assessment</li>
        `;
      }
    }
  }

  if (calcWaBtn) {
    calcWaBtn.addEventListener('click', function() {
      const title = calcTitle ? calcTitle.innerText : 'Tax Return';
      const text = `Hi QuicTax! I used your Tax Estimator for: ${title}. Please provide an exact upfront filing quote!`;
      window.open(`https://wa.me/12895275237?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // 6. Demo Center Modal Open / Close
  const demoModal = document.getElementById('demo-modal');
  const demoTriggers = document.querySelectorAll('.trigger-demo-modal');
  const demoCloseBtns = document.querySelectorAll('.close-demo-modal');

  demoTriggers.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (demoModal) demoModal.classList.add('open');
    });
  });

  demoCloseBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (demoModal) demoModal.classList.remove('open');
    });
  });

  if (demoModal) {
    demoModal.addEventListener('click', function(e) {
      if (e.target === demoModal) {
        demoModal.classList.remove('open');
      }
    });
  }

  // 7. Income Bracket Visualizer Slider
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
