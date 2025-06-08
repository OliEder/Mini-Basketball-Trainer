// App Data - Basierend auf den bereitgestellten JSON-Daten
const appData = {
  hallen: [
    {
      id: "halle_001",
      name: "Sporthalle Grundschule Musterstadt",
      verein: "Beispielverein Basketball",
      adresse: "Schulstraße 15, 12345 Musterstadt",
      ausstattung: {
        koerbe: 2,
        korbhoehe_verstellbar: true,
        ballgroessen: [3, 4, 5],
        huetchen: 20,
        reifen: 10,
        slalomstangen: 8,
        medizinbaelle: 5,
        sprungseile: 15,
        markierungswesten: 12
      }
    }
  ],
  uebungen: [
    {
      id: "ex_001",
      titel: "Easytown-Spiel",
      kategorie: "dribbeln",
      phase: "einfuehrung_easybasket",
      trainingsabschnitt: "auftakt",
      altersgruppen: ["U8", "U10"],
      dauer_min: 10,
      teilnehmer_min: 8,
      teilnehmer_max: 20,
      material: ["Bälle (ein Ball pro Kind)", "Reifen", "Hütchen"],
      aufbauzeit_min: 3,
      beschreibung: "Alle Kinder (Autos) dürfen sich dribbelnd in der Stadt (Spielfeld) bewegen. Ausnahmen sind zwei 'Fußgängerzonen' (Zone = Drei-Sekunden-Raum).",
      durchfuehrung: "Kinder dribbeln frei durch die Halle, können in Reifenparkplätzen parken, Kreisverkehre umfahren, Verkehrskontrollen durchführen.",
      variationen: ["VIP-Modus", "Rettungswagen", "Taxi", "Bus mit Haltestellen"],
      coaching_tipps: ["Ball liebevoll dribbeln", "Blick nach vorne", "Anderen ausweichen"],
      schwierigkeitsgrad: 1
    },
    {
      id: "ex_002",
      titel: "Power-Slalom",
      kategorie: "dribbeln",
      phase: "einfuehrung_easybasket",
      trainingsabschnitt: "mittelteil",
      altersgruppen: ["U8", "U10"],
      dauer_min: 15,
      teilnehmer_min: 4,
      teilnehmer_max: 12,
      material: ["Hütchen", "Bälle Größe 4"],
      aufbauzeit_min: 2,
      beschreibung: "Slalom-Parcours mit Power-Games Prinzip",
      durchfuehrung: "Kinder dribbeln durch Hütchen-Slalom, wer die 'Power' hat startet das Spiel",
      variationen: ["Position der Hütchen ändern", "Verschiedene Handwechsel"],
      coaching_tipps: ["Korrekte Fußstellung", "Blick nach vorne", "Ball kontrollieren"],
      schwierigkeitsgrad: 2
    },
    {
      id: "ex_003",
      titel: "Grundpassarten",
      kategorie: "passen_fangen",
      phase: "easybasket_zu_minibasketball",
      trainingsabschnitt: "mittelteil",
      altersgruppen: ["U10", "U12"],
      dauer_min: 15,
      teilnehmer_min: 2,
      teilnehmer_max: 20,
      material: ["Bälle"],
      aufbauzeit_min: 2,
      beschreibung: "Erlernen der Grundpassarten: Druckpass, Bodenpass, Überkopfpass",
      durchfuehrung: "Paarweise gegenüberstehen, verschiedene Passarten üben",
      variationen: ["Entfernung variieren", "In der Bewegung", "Mit Störer"],
      coaching_tipps: ["Zur Brust zielen", "Beide Hände verwenden", "Schritt zum Pass"],
      schwierigkeitsgrad: 2
    },
    {
      id: "ex_004",
      titel: "Korbleger beidseitig",
      kategorie: "werfen",
      phase: "easybasket_zu_minibasketball",
      trainingsabschnitt: "mittelteil",
      altersgruppen: ["U10", "U12"],
      dauer_min: 20,
      teilnehmer_min: 4,
      teilnehmer_max: 12,
      material: ["Bälle", "Körbe auf 2,60m"],
      aufbauzeit_min: 3,
      beschreibung: "Korbleger von rechts und links erlernen",
      durchfuehrung: "Systematisches Erlernen: rechts-links-Rhythmus, Absprung, weiches Auflegen",
      variationen: ["Aus dem Dribbeln", "Nach Pass", "Verschiedene Winkel"],
      coaching_tipps: ["Rechts-links-Rhythmus", "Knie hoch", "Sanft am Brett"],
      schwierigkeitsgrad: 3
    },
    {
      id: "ex_005",
      titel: "Tigerball",
      kategorie: "kleine_spiele",
      phase: "easybasket_zu_minibasketball",
      trainingsabschnitt: "schlussphase",
      altersgruppen: ["U10", "U12"],
      dauer_min: 15,
      teilnehmer_min: 6,
      teilnehmer_max: 12,
      material: ["1 Ball", "Markierungen"],
      aufbauzeit_min: 2,
      beschreibung: "Passsspiel in der Gruppe, ein Tiger versucht Ball zu erobern",
      durchfuehrung: "Kreis bilden, Ball zuspielen, Tiger in der Mitte versucht Ball zu berühren",
      variationen: ["Mehrere Tiger", "Verschiedene Passarten", "In Bewegung"],
      coaching_tipps: ["Schnelle Pässe", "Freilaufen", "Übersicht behalten"],
      schwierigkeitsgrad: 2
    }
  ],
  bbv_themen: [
    "Einführung des Dribblings",
    "Schulung des Dribblings", 
    "Schulung eines Dribbelhandwechsels",
    "Schulung des Ballhandlings",
    "Einführung Passen und Fangen",
    "Schulung Passen und Fangen",
    "Einführung Korbleger",
    "Schulung Korbleger",
    "Einführung Powershot",
    "Schulung Powershot",
    "Schulung von Korblegervarianten",
    "Einführung Standwurf",
    "Einführung Sprungwurf",
    "Schulung Sprungwurf",
    "Einführung Verteidigungsbeinarbeit",
    "Schulung Verteidigungsbeinarbeit",
    "Einführung Schnellangriff",
    "Schulung Schnellangriff bis 3-2",
    "Schulung der Unterzahlverteidigung",
    "Einführung Verteidigung 1-1 am Ball",
    "Schulung Verteidigung 1-1 am Ball",
    "Einführung Verteidigung 1-1 am Flügel o. Ball",
    "Schulung Verteidigung 1-1 am Flügel o. Ball",
    "Schulung des Give and Go",
    "Einführung von Befreiungsbewegungen auf der Flügelposition",
    "Schulung von Befreiungsbewegungen auf der Flügelposition",
    "Einführung eines einfachen Angriffskontinuums",
    "Einführung des Posting-up",
    "Schulung des Posting-up",
    "Durchführung eines Minitrainings mit drei Schwerpunkten"
  ],
  regeln: {
    U8: {
      spielerzahl: "4 gegen 4",
      korbhoehe: "2,60m oder niedriger", 
      ballgroesse: "3, 4 oder 5",
      freiwurf: "So nah wie nötig",
      verteidigung: "Mann-Mann, max 2m Abstand"
    },
    U10: {
      spielerzahl: "4 gegen 4",
      korbhoehe: "ca. 2,60m",
      ballgroesse: "5 oder 4", 
      freiwurf: "1m vorverlegt",
      verteidigung: "Mann-Mann, max 2m Abstand"
    },
    U12: {
      spielerzahl: "5 gegen 5",
      korbhoehe: "3,05m",
      ballgroesse: "5",
      freiwurf: "1m vorverlegt", 
      verteidigung: "Mann-Mann vorgeschrieben"
    }
  },
  spieler: [],
  trainingsplaene: []
};

// State Management
let currentView = 'dashboard';
let filteredUebungen = appData.uebungen;
let currentRegelTab = 'U8';

// Welcome Screen Funktionalität
function showDashboard() {
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainApp = document.getElementById('main-app');
  
  welcomeScreen.classList.add('fade-out');
  
  setTimeout(() => {
    welcomeScreen.classList.add('hidden');
    mainApp.classList.remove('hidden');
    initializeApp();
  }, 300);
}

// App Initialisierung
function initializeApp() {
  loadDataFromStorage();
  setupNavigation();
  setupEventListeners();
  updateDashboardStats();
  loadHallenListe();
  loadUebungsListe();
  loadSpielerListe();
  loadSavedPlans();
  showRegelTab('U8');
}

// Local Storage Management
function saveDataToStorage() {
  try {
    localStorage.setItem('minibasket-data', JSON.stringify(appData));
  } catch (e) {
    console.warn('LocalStorage nicht verfügbar');
  }
}

function loadDataFromStorage() {
  try {
    const stored = localStorage.getItem('minibasket-data');
    if (stored) {
      const data = JSON.parse(stored);
      Object.assign(appData, data);
    }
  } catch (e) {
    console.warn('Fehler beim Laden der gespeicherten Daten');
  }
}

// Navigation Setup
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const viewName = item.dataset.view;
      showView(viewName);
      
      // Update navigation state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// Event Listeners Setup
function setupEventListeners() {
  // Filter für Übungsdatenbank
  document.getElementById('kategorie-filter').addEventListener('change', filterUebungen);
  document.getElementById('altersgruppe-filter').addEventListener('change', filterUebungen);
  document.getElementById('phase-filter').addEventListener('change', filterUebungen);
  document.getElementById('übung-suche').addEventListener('input', filterUebungen);
  
  // Spieler Filter
  document.getElementById('spieler-gruppe-filter').addEventListener('change', loadSpielerListe);
}

// View Management
function showView(viewName) {
  // Hide all views
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.classList.remove('active'));
  
  // Show selected view
  const targetView = document.getElementById(viewName);
  if (targetView) {
    targetView.classList.add('active');
    currentView = viewName;
    
    // Update page title
    const pageTitle = document.getElementById('page-title');
    const titles = {
      'dashboard': 'Dashboard',
      'hallenmanagement': 'Hallenmanagement', 
      'übungsdatenbank': 'Übungsdatenbank',
      'trainingsplaner': 'Trainingsplaner',
      'spielerverwaltung': 'Spielerverwaltung',
      'regelwerk': 'Regelwerk'
    };
    pageTitle.textContent = titles[viewName] || 'MiniBasket Trainer';
  }
}

// Dashboard
function updateDashboardStats() {
  document.getElementById('total-halls').textContent = appData.hallen.length;
  document.getElementById('total-exercises').textContent = appData.uebungen.length;
  document.getElementById('total-players').textContent = appData.spieler.length;
  document.getElementById('total-plans').textContent = appData.trainingsplaene.length;
}

function createQuickTraining() {
  showView('trainingsplaner');
  // Automatisch Werte für schnelles Training setzen
  document.getElementById('plan-altersgruppe').value = 'U10';
  document.getElementById('plan-teilnehmer').value = '12';
  document.getElementById('plan-schwerpunkt1').value = 'dribbeln';
  document.getElementById('plan-schwerpunkt2').value = 'werfen';
}

function showRandomExercise() {
  const randomIndex = Math.floor(Math.random() * appData.uebungen.length);
  const exercise = appData.uebungen[randomIndex];
  showUebungDetails(exercise.id);
}

// Hallenmanagement
function loadHallenListe() {
  const hallenListe = document.getElementById('hallen-liste');
  
  if (appData.hallen.length === 0) {
    hallenListe.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <h3>Keine Hallen vorhanden</h3>
        <p>Fügen Sie Ihre erste Halle hinzu, um zu beginnen.</p>
      </div>
    `;
    return;
  }
  
  hallenListe.innerHTML = appData.hallen.map(halle => `
    <div class="card halle-card">
      <div class="halle-header">
        <div class="halle-info">
          <h3>${halle.name}</h3>
          <p>${halle.adresse || halle.verein}</p>
        </div>
        <button class="btn btn--outline btn--sm" onclick="editHalle('${halle.id}')">Bearbeiten</button>
      </div>
      
      <div class="halle-details">
        <div class="detail-section">
          <h4>Körbe</h4>
          <p>${halle.ausstattung.koerbe} Körbe ${halle.ausstattung.korbhoehe_verstellbar ? '(verstellbar)' : ''}</p>
          <p>Ballgrößen: ${halle.ausstattung.ballgroessen.join(', ')}</p>
        </div>
        
        <div class="detail-section">
          <h4>Inventar</h4>
          <div class="inventar-liste">
            <span class="inventar-item">${halle.ausstattung.huetchen}x Hütchen</span>
            <span class="inventar-item">${halle.ausstattung.reifen}x Reifen</span>
            <span class="inventar-item">${halle.ausstattung.slalomstangen}x Slalomstangen</span>
            <span class="inventar-item">${halle.ausstattung.medizinbaelle}x Medizinbälle</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function showHalleForm(halleId = null) {
  const isEdit = halleId !== null;
  const halle = isEdit ? appData.hallen.find(h => h.id === halleId) : null;
  
  showModal('Halle ' + (isEdit ? 'bearbeiten' : 'hinzufügen'), `
    <form id="halle-form" class="form-grid">
      <div class="form-group">
        <label class="form-label">Name der Halle</label>
        <input type="text" class="form-control" name="name" value="${halle?.name || ''}" required>
      </div>
      
      <div class="form-group">
        <label class="form-label">Adresse</label>
        <input type="text" class="form-control" name="adresse" value="${halle?.adresse || ''}" required>
      </div>
      
      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Anzahl Körbe</label>
          <input type="number" class="form-control" name="koerbe" value="${halle?.ausstattung.koerbe || 2}" min="1" required>
        </div>
        
        <div class="form-group">
          <label class="form-label">Verstellbare Körbe</label>
          <select class="form-control" name="korbhoehe_verstellbar">
            <option value="true" ${halle?.ausstattung.korbhoehe_verstellbar ? 'selected' : ''}>Ja</option>
            <option value="false" ${!halle?.ausstattung.korbhoehe_verstellbar ? 'selected' : ''}>Nein</option>
          </select>
        </div>
      </div>
      
      <div class="form-actions">
        <button type="button" class="btn btn--outline" onclick="closeModal()">Abbrechen</button>
        <button type="submit" class="btn btn--primary">${isEdit ? 'Speichern' : 'Hinzufügen'}</button>
      </div>
    </form>
  `);
  
  document.getElementById('halle-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const halleData = {
      id: isEdit ? halleId : 'halle_' + Date.now(),
      name: formData.get('name'),
      adresse: formData.get('adresse'),
      verein: formData.get('verein') || '',
      ausstattung: {
        koerbe: parseInt(formData.get('koerbe')),
        korbhoehe_verstellbar: formData.get('korbhoehe_verstellbar') === 'true',
        ballgroessen: [3, 4, 5],
        huetchen: 20,
        reifen: 10,
        slalomstangen: 8,
        medizinbaelle: 5,
        sprungseile: 15,
        markierungswesten: 12
      }
    };
    
    if (isEdit) {
      const index = appData.hallen.findIndex(h => h.id === halleId);
      appData.hallen[index] = halleData;
    } else {
      appData.hallen.push(halleData);
    }
    
    saveDataToStorage();
    loadHallenListe();
    updateDashboardStats();
    closeModal();
  });
}

function editHalle(halleId) {
  showHalleForm(halleId);
}

// Übungsdatenbank
function loadUebungsListe() {
  const uebungenListe = document.getElementById('übungen-liste');
  
  if (filteredUebungen.length === 0) {
    uebungenListe.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
        <h3>Keine Übungen gefunden</h3>
        <p>Versuchen Sie andere Suchkriterien.</p>
      </div>
    `;
    return;
  }
  
  uebungenListe.innerHTML = filteredUebungen.map(uebung => `
    <div class="card übung-card" onclick="showUebungDetails('${uebung.id}')">
      <div class="übung-header">
        <div class="übung-info">
          <h3>${uebung.titel}</h3>
          <p>${uebung.beschreibung}</p>
        </div>
        <span class="kategorie-badge">${formatKategorie(uebung.kategorie)}</span>
      </div>
      
      <div class="übung-meta">
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <span>${uebung.dauer_min} Min</span>
        </div>
        
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          <span>${uebung.teilnehmer_min}-${uebung.teilnehmer_max}</span>
        </div>
        
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
          <span>Level ${uebung.schwierigkeitsgrad}</span>
        </div>
      </div>
      
      <div class="altersgruppen">
        ${uebung.altersgruppen.map(gruppe => `
          <span class="altersgruppe-tag">${gruppe}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function filterUebungen() {
  const kategorieFilter = document.getElementById('kategorie-filter').value;
  const altersgruppeFilter = document.getElementById('altersgruppe-filter').value;
  const phaseFilter = document.getElementById('phase-filter').value;
  const suchbegriff = document.getElementById('übung-suche').value.toLowerCase();
  
  filteredUebungen = appData.uebungen.filter(uebung => {
    const matchesKategorie = !kategorieFilter || uebung.kategorie === kategorieFilter;
    const matchesAltersgruppe = !altersgruppeFilter || uebung.altersgruppen.includes(altersgruppeFilter);
    const matchesPhase = !phaseFilter || uebung.phase === phaseFilter;
    const matchesSuche = !suchbegriff || 
      uebung.titel.toLowerCase().includes(suchbegriff) ||
      uebung.beschreibung.toLowerCase().includes(suchbegriff);
    
    return matchesKategorie && matchesAltersgruppe && matchesPhase && matchesSuche;
  });
  
  loadUebungsListe();
}

function showUebungDetails(uebungId) {
  const uebung = appData.uebungen.find(u => u.id === uebungId);
  
  showModal(uebung.titel, `
    <div class="übung-details">
      <div class="form-group">
        <label class="form-label">Kategorie & Phase</label>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="kategorie-badge">${formatKategorie(uebung.kategorie)}</span>
          <span class="kategorie-badge">${formatPhase(uebung.phase)}</span>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Beschreibung</label>
        <p>${uebung.beschreibung}</p>
      </div>
      
      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Dauer</label>
          <p>${uebung.dauer_min} Minuten</p>
        </div>
        
        <div class="form-group">
          <label class="form-label">Teilnehmer</label>
          <p>${uebung.teilnehmer_min}-${uebung.teilnehmer_max} Spieler</p>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Material</label>
        <div class="inventar-liste">
          ${uebung.material.map(item => `<span class="inventar-item">${item}</span>`).join('')}
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Altersgruppen</label>
        <div class="altersgruppen">
          ${uebung.altersgruppen.map(gruppe => `<span class="altersgruppe-tag">${gruppe}</span>`).join('')}
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Durchführung</label>
        <p>${uebung.durchfuehrung}</p>
      </div>
      
      ${uebung.coaching_tipps ? `
        <div class="form-group">
          <label class="form-label">Coaching-Tipps</label>
          <ul style="margin: 0; padding-left: 20px;">
            ${uebung.coaching_tipps.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      <div class="form-actions">
        <button type="button" class="btn btn--outline" onclick="closeModal()">Schließen</button>
        <button type="button" class="btn btn--primary" onclick="addToCurrentPlan('${uebung.id}')">Zu aktuellem Plan hinzufügen</button>
      </div>
    </div>
  `);
}

function formatKategorie(kategorie) {
  const kategorien = {
    'dribbeln': 'Dribbeln',
    'passen_fangen': 'Passen & Fangen', 
    'werfen': 'Werfen',
    'kleine_spiele': 'Kleine Spiele',
    'koordination': 'Koordination'
  };
  return kategorien[kategorie] || kategorie;
}

function formatPhase(phase) {
  const phasen = {
    'einfuehrung_easybasket': 'Einführung Easybasket',
    'erfahrung_easybasket': 'Erfahrung Easybasket',
    'easybasket_zu_minibasketball': 'Easybasket zu Minibasketball'
  };
  return phasen[phase] || phase;
}

function showUebungForm() {
  showModal('Neue Übung hinzufügen', `
    <form id="uebung-form" class="form-grid">
      <div class="form-group">
        <label class="form-label">Titel</label>
        <input type="text" class="form-control" name="titel" required>
      </div>
      
      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Kategorie</label>
          <select class="form-control" name="kategorie" required>
            <option value="">Kategorie wählen</option>
            <option value="dribbeln">Dribbeln</option>
            <option value="passen_fangen">Passen & Fangen</option>
            <option value="werfen">Werfen</option>
            <option value="kleine_spiele">Kleine Spiele</option>
            <option value="koordination">Koordination</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Dauer (Min)</label>
          <input type="number" class="form-control" name="dauer_min" min="5" max="60" required>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Beschreibung</label>
        <textarea class="form-control" name="beschreibung" rows="3" required></textarea>
      </div>
      
      <div class="form-actions">
        <button type="button" class="btn btn--outline" onclick="closeModal()">Abbrechen</button>
        <button type="submit" class="btn btn--primary">Hinzufügen</button>
      </div>
    </form>
  `);
  
  document.getElementById('uebung-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const uebungData = {
      id: 'ex_' + Date.now(),
      titel: formData.get('titel'),
      kategorie: formData.get('kategorie'),
      phase: 'einfuehrung_easybasket',
      trainingsabschnitt: 'mittelteil',
      altersgruppen: ['U8', 'U10', 'U12'],
      dauer_min: parseInt(formData.get('dauer_min')),
      teilnehmer_min: 4,
      teilnehmer_max: 20,
      material: [],
      aufbauzeit_min: 2,
      beschreibung: formData.get('beschreibung'),
      durchfuehrung: formData.get('beschreibung'),
      variationen: [],
      coaching_tipps: [],
      schwierigkeitsgrad: 1
    };
    
    appData.uebungen.push(uebungData);
    saveDataToStorage();
    filterUebungen();
    updateDashboardStats();
    closeModal();
  });
}

// Trainingsplaner
function generateTrainingsPlan() {
  const altersgruppe = document.getElementById('plan-altersgruppe').value;
  const teilnehmer = document.getElementById('plan-teilnehmer').value;
  const schwerpunkt1 = document.getElementById('plan-schwerpunkt1').value;
  const schwerpunkt2 = document.getElementById('plan-schwerpunkt2').value;
  
  if (!altersgruppe || !teilnehmer || !schwerpunkt1 || !schwerpunkt2) {
    alert('Bitte alle Felder ausfüllen');
    return;
  }
  
  // Generiere 90-Minuten Plan nach BBV-Struktur
  const planStructure = [
    {
      phase: 'Aufwärmen',
      dauer: 15,
      kategorie: 'Auftakt',
      übung: findSuitableExercise('dribbeln', altersgruppe, 'auftakt')
    },
    {
      phase: 'Schwerpunkt 1',
      dauer: 20,
      kategorie: formatKategorie(schwerpunkt1),
      übung: findSuitableExercise(schwerpunkt1, altersgruppe, 'mittelteil')
    },
    {
      phase: 'Zwischenblock',
      dauer: 5,
      kategorie: 'Kleine Spiele',
      übung: findSuitableExercise('kleine_spiele', altersgruppe, 'mittelteil')
    },
    {
      phase: 'Schwerpunkt 2',
      dauer: 20,
      kategorie: formatKategorie(schwerpunkt2),
      übung: findSuitableExercise(schwerpunkt2, altersgruppe, 'mittelteil')
    },
    {
      phase: 'Zwischenblock 2',
      dauer: 5,
      kategorie: 'Kleine Spiele',
      übung: findSuitableExercise('kleine_spiele', altersgruppe, 'mittelteil')
    },
    {
      phase: 'Spiel',
      dauer: 20,
      kategorie: 'Spielform',
      übung: { titel: 'Freies Spiel 4 vs 4', beschreibung: 'Anwendung der gelernten Techniken im Spiel' }
    },
    {
      phase: 'Cool-down',
      dauer: 5,
      kategorie: 'Entspannung',
      übung: { titel: 'Entspannung & Dehnung', beschreibung: 'Ruhige Übungen zum Trainingsabschluss' }
    }
  ];
  
  displayGeneratedPlan(planStructure, altersgruppe, teilnehmer);
}

function findSuitableExercise(kategorie, altersgruppe, abschnitt) {
  const suitable = appData.uebungen.filter(u => 
    u.kategorie === kategorie && 
    u.altersgruppen.includes(altersgruppe) &&
    (u.trainingsabschnitt === abschnitt || !u.trainingsabschnitt)
  );
  
  if (suitable.length > 0) {
    return suitable[Math.floor(Math.random() * suitable.length)];
  }
  
  // Fallback wenn keine passende Übung gefunden
  return {
    titel: formatKategorie(kategorie) + ' Übung',
    beschreibung: 'Passende Übung für ' + altersgruppe + ' im Bereich ' + formatKategorie(kategorie)
  };
}

function displayGeneratedPlan(structure, altersgruppe, teilnehmer) {
  const generatedPlan = document.getElementById('generated-plan');
  const planTitle = document.getElementById('plan-title');
  const planStructure = document.getElementById('plan-structure');
  
  planTitle.textContent = `Trainingsplan ${altersgruppe} (${teilnehmer} Spieler)`;
  
  planStructure.innerHTML = structure.map((block, index) => `
    <div class="plan-block">
      <div class="block-info">
        <div class="block-title">${block.phase}</div>
        <div class="block-exercise">${block.übung.titel}</div>
      </div>
      <div class="block-duration">${block.dauer} Min</div>
    </div>
  `).join('');
  
  generatedPlan.classList.remove('hidden');
  
  // Plan temporär speichern für Export/Speichern
  window.currentGeneratedPlan = {
    id: 'plan_' + Date.now(),
    title: `Trainingsplan ${altersgruppe} (${teilnehmer} Spieler)`,
    altersgruppe,
    teilnehmer: parseInt(teilnehmer),
    structure,
    created: new Date().toISOString()
  };
}

function savePlan() {
  if (!window.currentGeneratedPlan) return;
  
  appData.trainingsplaene.push(window.currentGeneratedPlan);
  saveDataToStorage();
  loadSavedPlans();
  updateDashboardStats();
  alert('Trainingsplan gespeichert!');
}

function exportPlan() {
  if (!window.currentGeneratedPlan) return;
  
  // Simuliere PDF Export
  const planContent = window.currentGeneratedPlan.structure.map(block => 
    `${block.phase} (${block.dauer} Min): ${block.übung.titel}`
  ).join('\n');
  
  alert(`Plan wird exportiert:\n\n${planContent}`);
}

function loadSavedPlans() {
  const savedPlansList = document.getElementById('saved-plans-liste');
  
  if (appData.trainingsplaene.length === 0) {
    savedPlansList.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
        </svg>
        <h3>Keine gespeicherten Pläne</h3>
        <p>Erstellen Sie Ihren ersten Trainingsplan.</p>
      </div>
    `;
    return;
  }
  
  savedPlansList.innerHTML = appData.trainingsplaene.map(plan => `
    <div class="card">
      <div class="card__body">
        <div class="plan-header">
          <h4>${plan.title}</h4>
          <div class="plan-actions">
            <button class="btn btn--outline btn--sm" onclick="deletePlan('${plan.id}')">Löschen</button>
            <button class="btn btn--primary btn--sm" onclick="loadPlan('${plan.id}')">Laden</button>
          </div>
        </div>
        <p>Erstellt: ${new Date(plan.created).toLocaleDateString('de-DE')}</p>
      </div>
    </div>
  `).join('');
}

function loadPlan(planId) {
  const plan = appData.trainingsplaene.find(p => p.id === planId);
  if (plan) {
    displayGeneratedPlan(plan.structure, plan.altersgruppe, plan.teilnehmer);
    window.currentGeneratedPlan = plan;
  }
}

function deletePlan(planId) {
  if (confirm('Plan wirklich löschen?')) {
    appData.trainingsplaene = appData.trainingsplaene.filter(p => p.id !== planId);
    saveDataToStorage();
    loadSavedPlans();
    updateDashboardStats();
  }
}

// Spielerverwaltung
function loadSpielerListe() {
  const spielerListe = document.getElementById('spieler-liste');
  const gruppeFilter = document.getElementById('spieler-gruppe-filter').value;
  
  let filteredSpieler = appData.spieler;
  if (gruppeFilter) {
    filteredSpieler = appData.spieler.filter(s => s.gruppe === gruppeFilter);
  }
  
  if (filteredSpieler.length === 0) {
    spielerListe.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <h3>Keine Spieler vorhanden</h3>
        <p>Fügen Sie Ihren ersten Spieler hinzu.</p>
      </div>
    `;
    return;
  }
  
  spielerListe.innerHTML = filteredSpieler.map(spieler => `
    <div class="card spieler-card">
      <div class="spieler-header">
        <div class="spieler-info">
          <h3>${spieler.name}</h3>
          <p>Gruppe: ${spieler.gruppe} | Geboren: ${formatDatum(spieler.geburtsdatum)}</p>
          ${spieler.dbb_nummer ? `<p>DBB-Nr.: ${spieler.dbb_nummer}</p>` : ''}
        </div>
        <button class="btn btn--outline btn--sm" onclick="editSpieler('${spieler.id}')">Bearbeiten</button>
      </div>
      
      <div class="spieler-details">
        <div class="detail-section">
          <h4>Bewertungen</h4>
          <div class="bewertungen">
            ${Object.entries(spieler.bewertungen || {}).map(([fertigkeit, wert]) => `
              <div class="bewertung-item">
                <span>${fertigkeit}</span>
                <div class="sterne">
                  ${renderSterne(wert)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function showSpielerForm(spielerId = null) {
  const isEdit = spielerId !== null;
  const spieler = isEdit ? appData.spieler.find(s => s.id === spielerId) : null;
  
  showModal('Spieler ' + (isEdit ? 'bearbeiten' : 'hinzufügen'), `
    <form id="spieler-form" class="form-grid">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" name="name" value="${spieler?.name || ''}" required>
      </div>
      
      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Geburtsdatum</label>
          <input type="date" class="form-control" name="geburtsdatum" value="${spieler?.geburtsdatum || ''}" required>
        </div>
        
        <div class="form-group">
          <label class="form-label">Gruppe</label>
          <select class="form-control" name="gruppe" required>
            <option value="">Gruppe wählen</option>
            <option value="U8" ${spieler?.gruppe === 'U8' ? 'selected' : ''}>U8</option>
            <option value="U10" ${spieler?.gruppe === 'U10' ? 'selected' : ''}>U10</option>
            <option value="U12" ${spieler?.gruppe === 'U12' ? 'selected' : ''}>U12</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">DBB-Nummer (optional)</label>
        <input type="text" class="form-control" name="dbb_nummer" value="${spieler?.dbb_nummer || ''}" placeholder="z.B. DBB12345">
      </div>
      
      <div class="form-actions">
        <button type="button" class="btn btn--outline" onclick="closeModal()">Abbrechen</button>
        <button type="submit" class="btn btn--primary">${isEdit ? 'Speichern' : 'Hinzufügen'}</button>
      </div>
    </form>
  `);
  
  document.getElementById('spieler-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const spielerData = {
      id: isEdit ? spielerId : 'spieler_' + Date.now(),
      name: formData.get('name'),
      geburtsdatum: formData.get('geburtsdatum'),
      dbb_nummer: formData.get('dbb_nummer'),
      gruppe: formData.get('gruppe'),
      bewertungen: spieler?.bewertungen || {
        'Dribbeln': 1,
        'Passen': 1,
        'Werfen': 1,
        'Verteidigen': 1,
        'Koordination': 1
      }
    };
    
    if (isEdit) {
      const index = appData.spieler.findIndex(s => s.id === spielerId);
      appData.spieler[index] = spielerData;
    } else {
      appData.spieler.push(spielerData);
    }
    
    saveDataToStorage();
    loadSpielerListe();
    updateDashboardStats();
    closeModal();
  });
}

function editSpieler(spielerId) {
  showSpielerForm(spielerId);
}

function renderSterne(wert) {
  let sterne = '';
  for (let i = 1; i <= 5; i++) {
    const aktiv = i <= wert ? 'aktiv' : '';
    sterne += `<svg class="stern ${aktiv}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>`;
  }
  return sterne;
}

function formatDatum(datum) {
  return new Date(datum).toLocaleDateString('de-DE');
}

// Regelwerk
function showRegelTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const content = document.getElementById('regelwerk-content');
  
  if (tabName === 'bbv-themen') {
    content.innerHTML = `
      <h3>BBV Themen für Kurzlehrproben</h3>
      <div class="bbv-themen-liste">
        ${appData.bbv_themen.map((thema, index) => `
          <div class="bbv-thema">
            ${index + 1}. ${thema}
          </div>
        `).join('')}
      </div>
    `;
  } else {
    const regeln = appData.regeln[tabName];
    content.innerHTML = `
      <h3>${tabName} Regelwerk</h3>
      <div class="regel-grid">
        ${Object.entries(regeln).map(([regel, wert]) => `
          <div class="regel-item">
            <span class="regel-label">${formatRegelName(regel)}</span>
            <span>${wert}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  currentRegelTab = tabName;
}

function formatRegelName(regelKey) {
  const namen = {
    'spielerzahl': 'Spielerzahl',
    'korbhoehe': 'Korbhöhe',
    'ballgroesse': 'Ballgröße',
    'freiwurf': 'Freiwurf',
    'verteidigung': 'Verteidigung'
  };
  return namen[regelKey] || regelKey;
}

// Modal Management
function showModal(title, content) {
  const modal = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  
  modalTitle.textContent = title;
  modalContent.innerHTML = content;
  modal.classList.remove('hidden');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.add('hidden');
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Utility Functions
function addToCurrentPlan(uebungId) {
  // Placeholder für Training Plan Integration
  closeModal();
  showView('trainingsplaner');
  alert('Übung kann dem aktuellen Trainingsplan hinzugefügt werden wenn dieser erstellt wurde.');
}

// Service Worker Registration für PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('data:application/javascript,console.log("SW placeholder")')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Touch-optimierte Funktionen für mobile Geräte
function addTouchSupport() {
  const touchElements = document.querySelectorAll('.dashboard-card, .btn, .nav-item');
  
  touchElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
    
    element.addEventListener('touchcancel', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Initialize touch support when DOM is loaded
document.addEventListener('DOMContentLoaded', addTouchSupport);

// Offline Support
window.addEventListener('online', () => {
  console.log('App is online');
});

window.addEventListener('offline', () => {
  console.log('App is offline');
});