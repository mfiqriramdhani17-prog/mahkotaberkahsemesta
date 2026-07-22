// script.js — CV Mahkota Berkah Semesta v2

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     NAVBAR SCROLL
     ========================================= */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const updateNav = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* =========================================
     MOBILE MENU
     ========================================= */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('mobile-open');
      document.body.style.overflow = navMenu.classList.contains('mobile-open') ? 'hidden' : '';
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* =========================================
     ACTIVE NAV LINK
     ========================================= */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* =========================================
     SCROLL REVEAL
     ========================================= */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }

  /* =========================================
     FLOATING WA
     ========================================= */
  const waFloat = document.getElementById('waFloat');
  if (waFloat) {
    waFloat.addEventListener('click', () => openWhatsAppGeneral && openWhatsAppGeneral());
  }

  /* =========================================
     HOME: FEATURED PRODUCTS
     ========================================= */
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid && typeof PRODUCTS !== 'undefined') {
    const featured = PRODUCTS.filter(p => p.best_seller).slice(0, 3);
    featuredGrid.innerHTML = featured.map(p => productCardHTML(p)).join('');
    triggerReveal(featuredGrid);
  }

  /* =========================================
     HOME: PORTFOLIO CAROUSEL
     ========================================= */
  const portfolioWrap = document.getElementById('portfolioWrap');
  if (portfolioWrap && typeof PORTFOLIO !== 'undefined') {
    initPortfolioCarousel();
  }

  /* =========================================
     KATALOG: FULL PRODUCT LIST
     ========================================= */
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid && typeof PRODUCTS !== 'undefined') {
    initKatalog();
  }

  /* =========================================
     SMOOTH SCROLL
     ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

}); // end DOMContentLoaded

/* =========================================
   PRODUCT CARD HTML
   ========================================= */
function productCardHTML(p) {
  const catLabel = { seragam:'Seragam', kaos:'Kaos', jaket:'Jaket', custom:'Custom' }[p.kategori] || p.kategori;
  // Show first photo or placeholder
  const firstFoto = p.foto && p.foto[0];
  const imgHTML = firstFoto && firstFoto.url
    ? `<img src="${firstFoto.url}" alt="${p.nama}" style="width:100%;height:100%;object-fit:cover;"/>`
    : `<div class="card-img-placeholder">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
           <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
         </svg>
         <span>Foto Produk</span>
         ${p.foto && p.foto.length > 1 ? `<span style="font-size:0.62rem;opacity:0.7;">${p.foto.length} foto tersedia</span>` : ''}
       </div>`;

  return `
    <div class="product-card reveal" data-id="${p.id}">
      <div class="card-image">
        ${imgHTML}
        ${p.best_seller ? '<span class="card-badge">⭐ Best Seller</span>' : ''}
      </div>
      <div class="card-body">
        <span class="card-cat">${catLabel}</span>
        <h3>${p.nama}</h3>
        <p>${p.deskripsi}</p>
        <div class="card-actions">
          <button class="btn btn-outline-gold btn-sm" onclick="openModal(${p.id})">Lihat Detail</button>
          <button class="btn btn-gold btn-sm" onclick="openWhatsApp('${p.nama.replace(/'/g,"\\'")}')">Pesan</button>
        </div>
      </div>
    </div>`;
}

function triggerReveal(container) {
  container.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 100);
  });
}

/* =========================================
   PORTFOLIO CAROUSEL
   ========================================= */
function initPortfolioCarousel() {
  const track    = document.getElementById('portfolioTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const btnPrev  = document.getElementById('carouselPrev');
  const btnNext  = document.getElementById('carouselNext');
  if (!track) return;

  track.innerHTML = PORTFOLIO.map(item => portfolioSlideHTML(item)).join('');

  const slides = track.querySelectorAll('.portfolio-slide');
  let current = 0;
  let visibleCount = getVisible();

  function getVisible() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function maxIndex() { return Math.max(0, PORTFOLIO.length - visibleCount); }

  function getSlideWidth() {
    if (!slides[0]) return 0;
    const gap = 24; // 1.5rem
    return slides[0].offsetWidth + gap;
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, maxIndex()));
    track.style.transform = `translateX(-${current * getSlideWidth()}px)`;
    updateDots();
    updateBtns();
  }

  function buildDots() {
    if (!dotsWrap) return;
    const total = maxIndex() + 1;
    dotsWrap.innerHTML = Array.from({ length: total }, (_, i) =>
      `<button class="carousel-dot${i === 0 ? ' active' : ''}" aria-label="Slide ${i+1}" data-idx="${i}"></button>`
    ).join('');
    dotsWrap.querySelectorAll('.carousel-dot').forEach(d =>
      d.addEventListener('click', () => goTo(+d.dataset.idx))
    );
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  function updateBtns() {
    if (btnPrev) btnPrev.disabled = current === 0;
    if (btnNext) btnNext.disabled = current >= maxIndex();
  }

  if (btnPrev) btnPrev.addEventListener('click', () => goTo(current - 1));
  if (btnNext) btnNext.addEventListener('click', () => goTo(current + 1));

  // Drag / swipe
  let startX = 0, isDragging = false;
  track.addEventListener('mousedown', e => { isDragging = true; startX = e.pageX; track.classList.add('dragging'); });
  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('dragging');
    const diff = startX - e.pageX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
  });
  track.addEventListener('touchstart', e => { startX = e.touches[0].pageX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].pageX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
  });

  // Resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newVis = getVisible();
      if (newVis !== visibleCount) {
        visibleCount = newVis;
        current = Math.min(current, maxIndex());
        buildDots();
        goTo(current);
      } else {
        goTo(current); // recalc offsets
      }
    }, 120);
  });

  buildDots();
  updateBtns();
}

function portfolioSlideHTML(item) {
  const imgHTML = item.foto
    ? `<img src="${item.foto}" alt="${item.judul}" style="width:100%;height:100%;object-fit:cover;"/>`
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
         <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9l4-4 4 4 4-6 4 6"/><circle cx="8.5" cy="8.5" r="1.5"/>
       </svg>
       <span>Foto Portofolio</span>`;

  return `
    <div class="portfolio-slide">
      <div class="portfolio-card">
        <div class="portfolio-img">
          ${imgHTML}
          <span class="portfolio-img-tag">${item.kategori}</span>
        </div>
        <div class="portfolio-body">
          <div class="portfolio-cat">${item.kategori}</div>
          <h3>${item.judul}</h3>
          <div class="portfolio-client">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${item.klien}
          </div>
          <p>${item.deskripsi}</p>
          <span class="portfolio-qty">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
            ${item.qty}
          </span>
        </div>
      </div>
    </div>`;
}

/* =========================================
   KATALOG LOGIC
   ========================================= */
function initKatalog() {
  const productsGrid = document.getElementById('productsGrid');
  const searchInput  = document.getElementById('searchInput');
  const filterTabs   = document.querySelectorAll('.filter-tab');
  const sortSelect   = document.getElementById('sortSelect');
  const resultsCount = document.getElementById('resultsCount');

  let currentFilter = 'all', currentSearch = '', currentSort = 'default';

  function render() {
    let list = [...PRODUCTS];
    if (currentFilter !== 'all') list = list.filter(p => p.kategori === currentFilter);
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      list = list.filter(p => p.nama.toLowerCase().includes(q) || p.deskripsi.toLowerCase().includes(q));
    }
    if (currentSort === 'name-az') list.sort((a,b) => a.nama.localeCompare(b.nama));

    if (resultsCount) resultsCount.textContent = `${list.length} produk ditemukan`;

    if (!list.length) {
      productsGrid.innerHTML = `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <h3>Produk tidak ditemukan</h3>
          <p>Coba kata kunci atau filter yang berbeda</p>
        </div>`;
      return;
    }

    productsGrid.innerHTML = list.map(p => productCardHTML(p)).join('');
    triggerReveal(productsGrid);
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      render();
    });
  });

  if (searchInput) {
    let t;
    searchInput.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => { currentSearch = searchInput.value; render(); }, 280);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => { currentSort = sortSelect.value; render(); });
  }

  render();
}

/* =========================================
   MODAL — with photo gallery
   ========================================= */
let activePhotoIdx = 0;

function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const overlay = document.getElementById('modalOverlay');
  const modal   = document.getElementById('modalContent');
  if (!overlay || !modal) return;

  activePhotoIdx = 0;

  modal.innerHTML = `
    <div class="modal-close">
      <button onclick="closeModal()" aria-label="Tutup">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="modal-inner">
      <div class="modal-gallery">
        <div class="gallery-main" id="galleryMain">
          ${buildMainPhoto(p.foto, 0)}
        </div>
        <div class="gallery-thumbs" id="galleryThumbs">
          ${(p.foto || []).map((f, i) => `
            <div class="gallery-thumb${i === 0 ? ' active' : ''}" onclick="switchPhoto(${productId}, ${i})" title="${f.label}">
              ${f.url
                ? `<img src="${f.url}" alt="${f.label}"/>`
                : `<span>${f.label}</span>`}
            </div>`).join('')}
        </div>
      </div>
      <div class="modal-info">
        ${p.best_seller ? '<span class="modal-badge">⭐ Best Seller</span>' : ''}
        <h2>${p.nama}</h2>
        <p>${p.deskripsi_lengkap}</p>
        <div class="modal-specs">
          <div class="spec-row"><span class="spec-label">Bahan</span><span class="spec-value">${p.bahan}</span></div>
          <div class="spec-row"><span class="spec-label">Ukuran</span><span class="spec-value">${p.ukuran}</span></div>
          <div class="spec-row"><span class="spec-label">Min. Order</span><span class="spec-value">${p.minimal_order}</span></div>
          <div class="spec-row"><span class="spec-label">Warna</span><span class="spec-value">${Array.isArray(p.warna) ? p.warna.join(', ') : p.warna}</span></div>
        </div>
        <button class="btn btn-gold" style="width:100%;justify-content:center;gap:0.5rem;"
          onclick="closeModal(); openWhatsApp('${p.nama.replace(/'/g,"\\'")}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.84L.057 23.8c-.07.263.166.499.43.43l6.02-1.47A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-4.979-1.352l-.356-.212-3.69.899.934-3.592-.232-.374A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
          Pesan via WhatsApp
        </button>
      </div>
    </div>`;

  // Store current product id for switchPhoto
  modal.dataset.productId = productId;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildMainPhoto(fotoArr, idx) {
  const f = fotoArr && fotoArr[idx];
  if (f && f.url) {
    return `<img src="${f.url}" alt="${f.label || 'Foto produk'}" style="width:100%;height:100%;object-fit:cover;"/>`;
  }
  return `<div class="gallery-main-placeholder">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
    </svg>
    <span>${f ? f.label : 'Foto Produk'}</span>
  </div>`;
}

function switchPhoto(productId, idx) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  activePhotoIdx = idx;

  const main   = document.getElementById('galleryMain');
  const thumbs = document.querySelectorAll('#galleryThumbs .gallery-thumb');
  if (main)   main.innerHTML = buildMainPhoto(p.foto, idx);
  thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
}

document.addEventListener('click', e => { if (e.target === document.getElementById('modalOverlay')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
