document.addEventListener('DOMContentLoaded', () => {

  // Navbar Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => nav.classList.toggle('active'));
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));

  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold:0.3, rootMargin:"0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Animate skill bars
  const skillFills = document.querySelectorAll('.skill-fill');
  skillFills.forEach(fill => {
    const percent = fill.getAttribute('data-percent');
    setTimeout(()=>{ fill.style.width = percent; }, 500);
  });

});
