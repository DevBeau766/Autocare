/* ═══════════════════════════════════════════
   AutoCare — JavaScript
   ═══════════════════════════════════════════ */

/* ── Inject bedrijfsnaam overal ── */
function injectBedrijf() {
  const B = BEDRIJF;

  document.getElementById('site-title').textContent = B.naam + ' — Premium Autoservice';

  /* Nav logo */
  ['nav-naam', 'nav-naam2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = B.naam.slice(0, -4) + '<span>' + B.naam.slice(-4) + '</span>';
  });

  /* Hero */
  const heroSub = document.getElementById('hero-sub');
  if (heroSub) heroSub.textContent =
    B.tagline + '. Bij ' + B.naam + ' draait alles om uw auto — van een kleine onderhoudsbeurt tot een complete transformatie.';

  /* Footers */
  [
    ['footer-naam',  'footer-tagline',  'footer-tel',  'footer-mail',  'footer-adres',  'footer-kvk',  'footer-copy'],
    ['footer-naam2', 'footer-tagline2', 'footer-tel2', 'footer-mail2', null,            'footer-kvk2', 'footer-copy2'],
    ['footer-naam3', 'footer-tagline3', 'footer-tel3', 'footer-mail3', null,            'footer-kvk3', 'footer-copy3'],
  ].forEach(([naam, tag, tel, mail, adres, kvk, copy]) => {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
    set(naam, B.naam.slice(0,-4) + '<span>' + B.naam.slice(-4) + '</span>');
    set(tag,  B.tagline + '.');
    set(tel,  B.telefoon);
    set(mail, B.email);
    if (adres) set(adres, B.adres);
    set(kvk,  B.kvk);
    set(copy, '© ' + new Date().getFullYear() + ' ' + B.naam + '. Alle rechten voorbehouden.');
  });

  /* Contact pagina */
  const ca = document.getElementById('contact-adres');
  const ct = document.getElementById('contact-tel');
  const cm = document.getElementById('contact-mail');
  if (ca) ca.textContent = B.adres;
  if (ct) ct.textContent = B.telefoon;
  if (cm) cm.textContent = B.email;

  /* Google Maps */
  const mf = document.getElementById('mapsFrame');
  if (mf) mf.src = B.maps_embed;

  /* Alle .bedrijf-naam spans */
  document.querySelectorAll('.bedrijf-naam').forEach(el => el.textContent = B.naam);
}

/* ── Paginanavigatie ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const map = { home: 'nav-home', diensten: 'nav-diensten', afspraak: 'nav-contact' };
  if (map[id]) {
    ['', '2', '3'].forEach(suffix => {
      const el = document.getElementById(map[id] + suffix);
      if (el) el.classList.add('active');
    });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

/* ── Hamburger menu ── */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* ── Sticky nav ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Afspraak formulier ── */
function verstuurAfspraak() {
  const naam    = document.getElementById('f-naam').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const dienst  = document.getElementById('f-dienst').value;
  const akkoord = document.getElementById('f-akkoord').checked;

  if (!naam || !email || !dienst) {
    alert('Vul alstublieft uw naam, e-mailadres en gewenste dienst in.');
    return;
  }
  if (!akkoord) {
    alert('Ga akkoord met de privacyverklaring om door te gaan.');
    return;
  }

  document.getElementById('afspraakForm').style.display = 'none';
  document.getElementById('succesBericht').classList.add('show');
}

/* ── Minimum datum vandaag ── */
const today = new Date().toISOString().split('T')[0];
const datumField = document.getElementById('f-datum');
if (datumField) {
  datumField.min = today;
  datumField.value = today;
}

/* ── Init ── */
injectBedrijf();
