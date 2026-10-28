// IMPORTANT: Replace these values with RLV's real business contact information.
const BUSINESS_EMAIL = ""; // e.g. estimates@yourbusiness.com
const BUSINESS_PHONE = ""; // e.g. +12145551234 (digits and + only)
const nav = document.querySelector('#nav');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
const links = document.querySelector('#contact-links');
const notice = document.querySelector('#contact-message');
const phone = BUSINESS_PHONE.replace(/[^\d+]/g,'');
if (BUSINESS_EMAIL || phone) { notice.textContent = 'Reach out to discuss your next project.'; }
if (phone) { const a = document.createElement('a'); a.href = `tel:${phone}`; a.textContent = 'Call Us'; links.appendChild(a); const sms = document.createElement('a'); sms.href = `sms:${phone}`; sms.textContent = 'Text Us'; links.appendChild(sms); }
if (BUSINESS_EMAIL) { const a = document.createElement('a'); a.href = `mailto:${BUSINESS_EMAIL}`; a.textContent = BUSINESS_EMAIL; links.appendChild(a); }
document.querySelector('#estimate-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.querySelector('#form-notice');
  if (!BUSINESS_EMAIL) { status.textContent = 'The business email has not been configured yet. Please contact RLV directly.'; return; }
  const data = new FormData(e.currentTarget);
  const body = [...data.entries()].map(([k,v]) => `${k.toUpperCase()}: ${v}`).join('\n\n');
  const subject = 'New Project Estimate Request - RLV General Contractor';
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Your email app should open with a prepared message. Please press Send there to submit your request.';
});
