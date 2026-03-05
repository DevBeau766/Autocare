══════════════════════════════════════════
  AutoCare Website — Instructies
══════════════════════════════════════════

MAPSTRUCTUUR:
  index.html          ← Hoofdpagina (open dit in je browser)
  style.css           ← Alle stijlen/kleuren
  script.js           ← JavaScript/functionaliteit
  images/
    hero-bg.svg       ← Achtergrond hero sectie
    about.svg         ← Over ons afbeelding
    dienst-spuiten.svg
    dienst-onderhoud.svg
    dienst-detailing.svg
    dienst-carrosserie.svg

NAAM AANPASSEN (1x):
  Open index.html en zoek het blok bovenaan:

    const BEDRIJF = {
      naam:    "AutoCare",        ← HIER aanpassen
      tagline: "...",
      telefoon: "...",
      email:   "...",
      adres:   "...",
      kvk:     "...",
      maps_embed: "..."           ← Google Maps embed URL
    };

  Sla op → naam verschijnt overal automatisch.

EIGEN FOTO'S TOEVOEGEN:
  Vervang de .svg bestanden in de images/ map door
  eigen .jpg of .png foto's en pas de bestandsnaam
  aan in index.html (zoek op background-image:url).

GOOGLE MAPS:
  1. Ga naar maps.google.com
  2. Zoek je adres
  3. Klik Delen → Kaart insluiten → Kopieer de src="..."
  4. Plak in BEDRIJF.maps_embed

ONLINE ZETTEN:
  Upload de volledige map naar een webhost naar keuze.
  Alle bestanden moeten bij elkaar blijven.

══════════════════════════════════════════
