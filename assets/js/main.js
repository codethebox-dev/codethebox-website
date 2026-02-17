/* CodeTheBox — main.js */

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-item').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.split('?')[0] === currentPage) {
    link.classList.add('active');
  } else if (currentPage === '' && href === 'index.html') {
    link.classList.add('active');
  }
});

// Filter buttons (courses page)
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const track = btn.dataset.track;
    filterCourses(track);
  });
});

function filterCourses(track) {
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    if (!track || track === 'all') {
      card.style.display = '';
    } else {
      card.style.display = card.dataset.track === track ? '' : 'none';
    }
  });
}

// Roadmap track switcher
const rmBtns = document.querySelectorAll('.rm-track-btn');
rmBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    rmBtns.forEach(b => {
      b.className = 'rm-track-btn';
    });
    const t = btn.dataset.rm;
    btn.classList.add('active-' + t);
    const sections = document.querySelectorAll('.rm-content');
    sections.forEach(s => {
      s.style.display = s.dataset.rm === t ? '' : 'none';
    });
  });
});

// URL param: auto-select track on page load
const urlParams = new URLSearchParams(window.location.search);
const trackParam = urlParams.get('track');
if (trackParam) {
  const targetBtn = document.querySelector(`[data-track="${trackParam}"]`);
  if (targetBtn && targetBtn.classList.contains('filter-btn')) {
    targetBtn.click();
  }
  const rmTarget = document.querySelector(`[data-rm="${trackParam}"]`);
  if (rmTarget) {
    rmTarget.click();
  }
}

// Typing effect for hero tag
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const text = heroTag.textContent;
  heroTag.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      heroTag.textContent += text[i++];
      setTimeout(type, 40);
    }
  };
  setTimeout(type, 300);
}

// Animate progress bars on load
const fills = document.querySelectorAll('.progress-fill');
fills.forEach(fill => {
  const width = fill.style.width;
  fill.style.width = '0';
  setTimeout(() => {
    fill.style.transition = 'width 1s ease';
    fill.style.width = width;
  }, 400);
});

// Animate cert progress bars
const certFills = document.querySelectorAll('.cert-prog-fill');
certFills.forEach(fill => {
  const w = fill.style.width;
  fill.style.width = '0';
  setTimeout(() => {
    fill.style.transition = 'width 1.2s ease';
    fill.style.width = w;
  }, 500);
});
