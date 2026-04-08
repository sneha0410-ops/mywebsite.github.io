/* ===========================
   SNEHA YADAV PORTFOLIO JS
   =========================== */

// ---- Custom Cursor ----
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor hover effect
document.querySelectorAll('a, button, .project-card-preview, .award-item, .lang-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    cursor.style.background = 'var(--accent2)';
    cursorFollower.style.borderColor = 'rgba(180,79,232,0.6)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'var(--accent)';
    cursorFollower.style.borderColor = 'rgba(124,92,252,0.5)';
  });
});

// ---- Navbar Scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Mobile Menu ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// ---- Parallax Floating Cards ----
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.float-card[data-parallax]');
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  cards.forEach(card => {
    const speed = parseFloat(card.dataset.parallax) || 0.04;
    const dx = (e.clientX - cx) * speed;
    const dy = (e.clientY - cy) * speed;
    card.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});

// ---- Count-Up Animation ----
function countUp(el) {
  const target = parseInt(el.dataset.target);
  if (isNaN(target)) return;
  let current = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 40);
}

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');

        // Trigger count-up for stat nums on home page
        const statNum = entry.target.querySelector('.stat-num[data-target]');
        if (statNum) countUp(statNum);

        // Trigger lang bar animations
        const fills = entry.target.querySelectorAll('.lang-fill');
        fills.forEach(fill => {
          const w = fill.style.width;
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = w; }, 100);
        });

      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Stats Count-Up (Home) ----
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num[data-target]').forEach(el => countUp(el));
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

// ---- Contact Form ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');
    const btnText = btn.querySelector('.btn-text');

    btnText.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate send
    setTimeout(() => {
      btnText.textContent = 'Send Message';
      btn.disabled = false;
      success.style.display = 'block';
      contactForm.reset();

      setTimeout(() => {
        success.style.display = 'none';
      }, 4000);
    }, 1200);
  });
}

// ---- Page Load Animation ----
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ---- Smooth Link Transitions ----
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  }
});

// ---- Active Nav Highlighting ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});
