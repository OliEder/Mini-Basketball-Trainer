// Vollständige Datenbank mit allen 30 BBV-Schwerpunkten und zugeordneten Übungen
const appData = {
  bbv_schwerpunkte: [
    // Dribbling (1-4)
    {
      id: 1,
      titel: "Einführung des Dribblings",
      kategorie: "Technik",
      zielgruppe: ["U8", "U10", "U12"],
      phase: "Einführung",
      beschreibung: "Erstes Kennenlernen des Dribblings mit einfachen Übungen"
    },
    {
      id: 2,
      titel: "Schulung des Dribblings",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Schulung",
      beschreibung: "Verbesserung der Dribbeltechnik in verschiedenen Situationen"
    },
    {
      id: 3,
      titel: "Schulung eines Dribbelhandwechsels",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Schulung",
      beschreibung: "Erlernen von Handwechseltechniken im Dribbling"
    },
    {
      id: 4,
      titel: "Schulung des Ballhandlings",
      kategorie: "Technik",
      zielgruppe: ["U8", "U10", "U12"],
      phase: "Schulung",
      beschreibung: "Vielseitige Ballgewöhnung und Ballkoordination"
    },
    // Passen und Fangen (5-6)
    {
      id: 5,
      titel: "Einführung Passen und Fangen",
      kategorie: "Technik",
      zielgruppe: ["U8", "U10", "U12"],
      phase: "Einführung",
      beschreibung: "Grundlagen des Passens und Fangens"
    },
    {
      id: 6,
      titel: "Schulung Passen und Fangen",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung verschiedener Passtechniken"
    },
    // Würfe (7-14)
    {
      id: 7,
      titel: "Einführung Korbleger",
      kategorie: "Technik",
      zielgruppe: ["U8", "U10", "U12"],
      phase: "Einführung",
      beschreibung: "Erstes Erlernen des Korblegers"
    },
    {
      id: 8,
      titel: "Schulung Korbleger",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Schulung",
      beschreibung: "Verbesserung und Variation des Korblegers"
    },
    {
      id: 9,
      titel: "Einführung Powershot",
      kategorie: "Technik",
      zielgruppe: ["U8", "U10"],
      phase: "Einführung",
      beschreibung: "Grundlagen des Powershuts unter dem Korb"
    },
    {
      id: 10,
      titel: "Schulung Powershot",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung des Powershuts in verschiedenen Situationen"
    },
    {
      id: 11,
      titel: "Schulung von Korblegervarianten",
      kategorie: "Technik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Verschiedene Korblegerarten und Finten"
    },
    {
      id: 12,
      titel: "Einführung Standwurf",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Einführung",
      beschreibung: "Grundlagen des Standwurfs"
    },
    {
      id: 13,
      titel: "Einführung Sprungwurf",
      kategorie: "Technik",
      zielgruppe: ["U12"],
      phase: "Einführung",
      beschreibung: "Erstes Erlernen des Sprungwurfs"
    },
    {
      id: 14,
      titel: "Schulung Sprungwurf",
      kategorie: "Technik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Verbesserung der Sprungwurftechnik"
    },
    // Verteidigung (15-16)
    {
      id: 15,
      titel: "Einführung Verteidigungsbeinarbeit",
      kategorie: "Technik",
      zielgruppe: ["U10", "U12"],
      phase: "Einführung",
      beschreibung: "Grundlagen der defensiven Beinarbeit"
    },
    {
      id: 16,
      titel: "Schulung Verteidigungsbeinarbeit",
      kategorie: "Technik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung der Verteidigungstechnik"
    },
    // Taktik Schnellangriff (17-19)
    {
      id: 17,
      titel: "Einführung Schnellangriff",
      kategorie: "Taktik",
      zielgruppe: ["U10", "U12"],
      phase: "Einführung",
      beschreibung: "Grundlagen des schnellen Gegenangriffs"
    },
    {
      id: 18,
      titel: "Schulung Schnellangriff bis 3-2",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Systematischer Aufbau von Überzahlsituationen"
    },
    {
      id: 19,
      titel: "Schulung der Unterzahlverteidigung",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Verhalten in der Unterzahl"
    },
    // 1-gegen-1 (20-23)
    {
      id: 20,
      titel: "Einführung Verteidigung 1-1 am Ball",
      kategorie: "Taktik",
      zielgruppe: ["U10", "U12"],
      phase: "Einführung",
      beschreibung: "Verteidigung gegen den Ballführer"
    },
    {
      id: 21,
      titel: "Schulung Verteidigung 1-1 am Ball",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung der 1-gegen-1 Verteidigung"
    },
    {
      id: 22,
      titel: "Einführung Verteidigung 1-1 am Flügel o. Ball",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Einführung",
      beschreibung: "Verteidigung ohne Ball am Flügel"
    },
    {
      id: 23,
      titel: "Schulung Verteidigung 1-1 am Flügel o. Ball",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung der Flügelverteidigung"
    },
    // Angriffstaktik (24-29)
    {
      id: 24,
      titel: "Schulung des Give and Go",
      kategorie: "Taktik",
      zielgruppe: ["U10", "U12"],
      phase: "Schulung",
      beschreibung: "Pass und Geh-Bewegung"
    },
    {
      id: 25,
      titel: "Einführung von Befreiungsbewegungen auf der Flügelposition",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Einführung",
      beschreibung: "Freilaufen am Flügel"
    },
    {
      id: 26,
      titel: "Schulung von Befreiungsbewegungen auf der Flügelposition",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung der Flügelbewegungen"
    },
    {
      id: 27,
      titel: "Einführung eines einfachen Angriffskontinuums",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Einführung",
      beschreibung: "Einfache Angriffszüge"
    },
    {
      id: 28,
      titel: "Einführung des Posting-up",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Einführung",
      beschreibung: "Spiel mit dem Rücken zum Korb"
    },
    {
      id: 29,
      titel: "Schulung des Posting-up",
      kategorie: "Taktik",
      zielgruppe: ["U12"],
      phase: "Schulung",
      beschreibung: "Vertiefung des Post-Spiels"
    },
    // Komplextraining (30)
    {
      id: 30,
      titel: "Durchführung eines Minitrainings mit drei Schwerpunkten",
      kategorie: "Komplex",
      zielgruppe: ["U8", "U10", "U12"],
      phase: "Anwendung",
      beschreibung: "Kombination mehrerer Trainingselemente"
    }
  ],

  // Erweiterte Übungsdatenbank mit Schwerpunkt-Zuordnung
  uebungen: {
    // Lockere Spiele für Aufwärmen
    lockere_spiele: [
      {
        id: "warm001",
        titel: "Farben laufen",
        schwerpunkt_ids: "alle",
        beschreibung: "Laufen zu verschiedenen Farben auf Zuruf",
        material: ["Hütchen"],
        teilnehmer: "8-16",
        dauer: 8,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "warm002",
        titel: "Ballgewöhnung im Kreis",
        schwerpunkt_ids: [1, 4, 5],
        beschreibung: "Kinder stehen im Kreis und rollen sich Bälle zu",
        material: ["Bälle"],
        teilnehmer: "8-16",
        dauer: 10,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "warm003",
        titel: "Viereck-Lauf mit Ball",
        schwerpunkt_ids: [1, 2],
        beschreibung: "Laufen um Hütchen mit Ball tragen oder dribbeln",
        material: ["Hütchen", "Bälle"],
        teilnehmer: "8-16",
        dauer: 10,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "warm004",
        titel: "Ampelspiel",
        schwerpunkt_ids: [1, 2, 15],
        beschreibung: "Bei Rot stoppen, Gelb defensive Haltung, Grün laufen",
        material: ["Farbkarten"],
        teilnehmer: "8-16",
        dauer: 8,
        altersgruppen: ["U8", "U10"]
      }
    ],

    // Technik-Übungen nach Schwerpunkten
    technik: [
      // Dribbling (1-4)
      {
        id: "tech001",
        titel: "Ball 'liebevoll' dribbeln",
        schwerpunkt_ids: [1, 4],
        beschreibung: "Dribbeln im Stehen, Knien, Sitzen, verschiedene Höhen",
        material: ["Bälle"],
        teilnehmer: "beliebig",
        dauer: 10,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "tech002",
        titel: "Dribbling-Parcours",
        schwerpunkt_ids: [1, 2],
        beschreibung: "Slalom dribbeln zwischen Hütchen",
        material: ["Bälle", "Hütchen"],
        teilnehmer: "8-16",
        dauer: 12,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "tech003",
        titel: "Crossover-Übung",
        schwerpunkt_ids: [3],
        beschreibung: "Handwechsel vor Hütchen",
        material: ["Bälle", "Hütchen"],
        teilnehmer: "8-16",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      },
      {
        id: "tech004",
        titel: "Ballhandling-Kreis",
        schwerpunkt_ids: [4],
        beschreibung: "Ball um Körper, Beine, Achter",
        material: ["Bälle"],
        teilnehmer: "beliebig",
        dauer: 10,
        altersgruppen: ["U8", "U10", "U12"]
      },

      // Passen (5-6)
      {
        id: "tech005",
        titel: "Partner-Pass im Stand",
        schwerpunkt_ids: [5],
        beschreibung: "Druckpass und Bodenpass zwischen Partnern",
        material: ["Bälle"],
        teilnehmer: "8-16",
        dauer: 12,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "tech006",
        titel: "Pass-Variationen",
        schwerpunkt_ids: [6],
        beschreibung: "Überkopfpass, Seitenpass, Pass in Bewegung",
        material: ["Bälle", "Hütchen"],
        teilnehmer: "8-16",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      },

      // Würfe (7-14)
      {
        id: "tech007",
        titel: "Korbleger ohne Ball",
        schwerpunkt_ids: [7],
        beschreibung: "Schrittfolge und Sprung ohne Ball",
        material: ["Hütchen"],
        teilnehmer: "8-16",
        dauer: 10,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "tech008",
        titel: "Korbleger-Stationen",
        schwerpunkt_ids: [8],
        beschreibung: "Verschiedene Winkel und Distanzen",
        material: ["Bälle", "Körbe"],
        teilnehmer: "8-16",
        dauer: 18,
        altersgruppen: ["U10", "U12"]
      },
      {
        id: "tech009",
        titel: "Powershot unter dem Korb",
        schwerpunkt_ids: [9, 10],
        beschreibung: "Starker Wurf aus kurzer Distanz",
        material: ["Bälle", "Körbe"],
        teilnehmer: "6-12",
        dauer: 15,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "tech010",
        titel: "Standwurf-Technik",
        schwerpunkt_ids: [12],
        beschreibung: "Grundlagen des Standwurfs",
        material: ["Bälle", "Körbe"],
        teilnehmer: "8-16",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      },

      // Verteidigung (15-16)
      {
        id: "tech011",
        titel: "Defensive Haltung",
        schwerpunkt_ids: [15, 16],
        beschreibung: "Grundstellung und Seitschritte",
        material: ["Hütchen"],
        teilnehmer: "8-16",
        dauer: 12,
        altersgruppen: ["U10", "U12"]
      },
      {
        id: "tech012",
        titel: "Spiegelübung",
        schwerpunkt_ids: [15, 16, 20, 21],
        beschreibung: "Partner imitiert Bewegungen des anderen",
        material: [],
        teilnehmer: "8-16",
        dauer: 10,
        altersgruppen: ["U10", "U12"]
      }
    ],

    // Einspiel-Übungen (Anwendung der Technik)
    einspiel: [
      {
        id: "game001",
        titel: "1-gegen-1 Dribbling",
        schwerpunkt_ids: [1, 2, 3],
        beschreibung: "Verteidiger versucht Ball zu erobern",
        material: ["Bälle", "Hütchen"],
        teilnehmer: "8-16",
        dauer: 12,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "game002",
        titel: "Pass-Spiel 3-gegen-1",
        schwerpunkt_ids: [5, 6, 24],
        beschreibung: "Drei Angreifer gegen einen Verteidiger",
        material: ["Bälle", "Hütchen"],
        teilnehmer: "8-16",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      },
      {
        id: "game003",
        titel: "Korbleger-Wettbewerb",
        schwerpunkt_ids: [7, 8, 11],
        beschreibung: "Wer schafft mehr Korbleger in Zeit X",
        material: ["Bälle", "Körbe"],
        teilnehmer: "6-16",
        dauer: 12,
        altersgruppen: ["U8", "U10", "U12"]
      },
      {
        id: "game004",
        titel: "Schnellangriff 2-gegen-1",
        schwerpunkt_ids: [17, 18],
        beschreibung: "Überzahl-Situationen schnell ausspielen",
        material: ["Bälle", "Körbe"],
        teilnehmer: "6-12",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      },
      {
        id: "game005",
        titel: "Give and Go Spiel",
        schwerpunkt_ids: [24],
        beschreibung: "Pass und Geh in Spielsituationen",
        material: ["Bälle", "Hütchen"],
        teilnehmer: "8-12",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      },
      {
        id: "game006",
        titel: "3-gegen-3 mit Regeln",
        schwerpunkt_ids: "alle_taktik",
        beschreibung: "Kleinfeldspiel mit speziellen Regeln je nach Schwerpunkt",
        material: ["Bälle", "Körbe", "Hütchen"],
        teilnehmer: "6-12",
        dauer: 15,
        altersgruppen: ["U10", "U12"]
      }
    ]
  },

  training_structure: {
    duration: 90,
    blocks: [
      {
        name: "Aufwärmen",
        duration: 20,
        type: "warm_up",
        description: "Lockere Spiele und allgemeine Aktivierung",
        content_type: "lockere_spiele"
      },
      {
        name: "Schwerpunkt-Technik",
        duration: 25,
        type: "main_focus",
        description: "Methodische Übungsreihe zum gewählten Schwerpunkt",
        content_type: "technik"
      },
      {
        name: "Zwischenblock",
        duration: 5,
        type: "break",
        description: "Freiwürfe, kurze Erholung"
      },
      {
        name: "Einspiel",
        duration: 20,
        type: "application",
        description: "Anwendung der gelernten Technik in Spielsituationen",
        content_type: "einspiel"
      },
      {
        name: "Freispiel",
        duration: 15,
        type: "free_play",
        description: "3 gegen 3 oder 4 gegen 4 mit Schwerpunkt-Regeln"
      },
      {
        name: "Cool-down",
        duration: 5,
        type: "cool_down",
        description: "Entspannung, Reflexion, Dehnung"
      }
    ]
  },

  halls: [
    {
      id: "hall-001",
      name: "Beispiel Sporthalle",
      equipment: {
        basketballs_size_3: 12,
        basketballs_size_4: 8,
        basketballs_size_5: 6,
        cones: 20,
        hoops: 15,
        adjustable_baskets: true,
        basket_height: "2.60m"
      }
    }
  ]
};

// Application State
let currentSection = 'dashboard';
let currentTrainingPlan = null;

// DOM Elements
const navItems = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('.section');
const dashboardCards = document.querySelectorAll('.dashboard__card');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeDashboard();
  initializePlanner();
  initializeExercises();
  initializeHalls();
  loadInitialData();
});

// Navigation System
function initializeNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSection = item.dataset.section;
      switchSection(targetSection);
    });
  });
}

function switchSection(sectionName) {
  // Update navigation
  navItems.forEach(item => {
    item.classList.toggle('nav__item--active', item.dataset.section === sectionName);
  });
  
  // Update sections
  sections.forEach(section => {
    section.classList.toggle('section--active', section.id === sectionName);
  });
  
  currentSection = sectionName;
}

// Dashboard functionality
function initializeDashboard() {
  dashboardCards.forEach(card => {
    card.addEventListener('click', () => {
      const action = card.dataset.action;
      if (action) {
        switchSection(action);
      }
    });
  });
}

// Training Planner
function initializePlanner() {
  const schwerpunktSelect = document.getElementById('schwerpunkt');
  const generateBtn = document.getElementById('generatePlan');
  const exportBtn = document.getElementById('exportPlan');
  const newPlanBtn = document.getElementById('newPlan');
  
  // Populate schwerpunkt dropdown
  appData.bbv_schwerpunkte.forEach(schwerpunkt => {
    const option = document.createElement('option');
    option.value = schwerpunkt.id;
    option.textContent = `${schwerpunkt.id}. ${schwerpunkt.titel} (${schwerpunkt.kategorie})`;
    schwerpunktSelect.appendChild(option);
  });
  
  generateBtn.addEventListener('click', generateTrainingPlan);
  exportBtn.addEventListener('click', exportTrainingPlan);
  newPlanBtn.addEventListener('click', resetPlanner);
}

function generateTrainingPlan() {
  const schwerpunktId = parseInt(document.getElementById('schwerpunkt').value);
  const altersgruppe = document.getElementById('altersgruppe').value;
  const teilnehmer = document.getElementById('teilnehmer').value;
  const halle = document.getElementById('halle').value;
  
  if (!schwerpunktId) {
    alert('Bitte wählen Sie einen Trainingsschwerpunkt aus.');
    return;
  }
  
  const selectedSchwerpunkt = appData.bbv_schwerpunkte.find(s => s.id === schwerpunktId);
  
  // Check if schwerpunkt is suitable for age group
  if (!selectedSchwerpunkt.zielgruppe.includes(altersgruppe)) {
    alert(`Dieser Schwerpunkt ist nicht für ${altersgruppe} geeignet. Geeignete Altersgruppen: ${selectedSchwerpunkt.zielgruppe.join(', ')}`);
    return;
  }
  
  currentTrainingPlan = {
    schwerpunkt: selectedSchwerpunkt,
    altersgruppe,
    teilnehmer,
    halle,
    blocks: createTrainingBlocks(selectedSchwerpunkt, altersgruppe)
  };
  
  displayTrainingPlan();
}

function createTrainingBlocks(schwerpunkt, altersgruppe) {
  return appData.training_structure.blocks.map(block => {
    const exercises = getExercisesForBlock(block, schwerpunkt.id, altersgruppe);
    return {
      ...block,
      exercises
    };
  });
}

function getExercisesForBlock(block, schwerpunktId, altersgruppe) {
  switch (block.type) {
    case 'warm_up':
      // Lockere Spiele für Aufwärmen
      return appData.uebungen.lockere_spiele
        .filter(ex => 
          ex.altersgruppen.includes(altersgruppe) && 
          (ex.schwerpunkt_ids === "alle" || ex.schwerpunkt_ids.includes(schwerpunktId))
        )
        .slice(0, 2);
        
    case 'main_focus':
      // Technik-Übungen für den gewählten Schwerpunkt
      return appData.uebungen.technik
        .filter(ex => 
          ex.schwerpunkt_ids.includes(schwerpunktId) && 
          ex.altersgruppen.includes(altersgruppe)
        )
        .slice(0, 3);
        
    case 'application':
      // Einspiel-Übungen für Anwendung
      return appData.uebungen.einspiel
        .filter(ex => 
          ex.altersgruppen.includes(altersgruppe) && 
          (ex.schwerpunkt_ids.includes(schwerpunktId) || 
           ex.schwerpunkt_ids === "alle_taktik" && schwerpunkt.kategorie === "Taktik")
        )
        .slice(0, 2);
        
    case 'free_play':
      return [{
        titel: "3 gegen 3 Spiel",
        beschreibung: `Kleinfeldspiel mit Fokus auf ${appData.bbv_schwerpunkte.find(s => s.id === schwerpunktId).titel}`,
        dauer: 15
      }];
      
    case 'break':
      return [{
        titel: "Freiwürfe",
        beschreibung: "Freie Würfe zur Erholung",
        dauer: 5
      }];
      
    case 'cool_down':
      return [{
        titel: "Abschlusskreis",
        beschreibung: "Reflexion und leichtes Stretching",
        dauer: 5
      }];
      
    default:
      return [];
  }
}

function displayTrainingPlan() {
  const planContainer = document.getElementById('trainingPlan');
  const blocksContainer = document.getElementById('trainingBlocks');
  const schwerpunktSpan = document.getElementById('planSchwerpunkt');
  const altersgruppeSpan = document.getElementById('planAltersgruppe');
  
  // Update header info
  schwerpunktSpan.textContent = currentTrainingPlan.schwerpunkt.titel;
  altersgruppeSpan.textContent = currentTrainingPlan.altersgruppe;
  
  // Clear previous blocks
  blocksContainer.innerHTML = '';
  
  // Create training blocks
  currentTrainingPlan.blocks.forEach(block => {
    const blockElement = createTrainingBlockElement(block);
    blocksContainer.appendChild(blockElement);
  });
  
  // Show the plan
  planContainer.classList.remove('hidden');
}

function createTrainingBlockElement(block) {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'training-block';
  
  const exerciseTags = block.exercises.map(ex => 
    `<span class="exercise-tag" title="${ex.beschreibung || ''}">${ex.titel}</span>`
  ).join('');
  
  blockDiv.innerHTML = `
    <div class="training-block__time">${block.duration} Min</div>
    <div class="training-block__content">
      <div class="training-block__title">${block.name}</div>
      <div class="training-block__description">${block.description}</div>
      <div class="training-block__exercises">${exerciseTags}</div>
    </div>
  `;
  
  return blockDiv;
}

function exportTrainingPlan() {
  if (!currentTrainingPlan) return;
  
  const planText = generateExportText();
  const blob = new Blob([planText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `Trainingsplan_${currentTrainingPlan.schwerpunkt.titel.replace(/\s+/g, '_')}_${new Date().toLocaleDateString('de-DE')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generateExportText() {
  let text = `TRAININGSPLAN - 90 MINUTEN\n`;
  text += `${'='.repeat(50)}\n\n`;
  text += `Schwerpunkt: ${currentTrainingPlan.schwerpunkt.titel}\n`;
  text += `Kategorie: ${currentTrainingPlan.schwerpunkt.kategorie}\n`;
  text += `Altersgruppe: ${currentTrainingPlan.altersgruppe}\n`;
  text += `Teilnehmer: ${currentTrainingPlan.teilnehmer}\n`;
  text += `Datum: ${new Date().toLocaleDateString('de-DE')}\n\n`;
  
  currentTrainingPlan.blocks.forEach(block => {
    text += `${block.name} (${block.duration} Min)\n`;
    text += `${'-'.repeat(block.name.length + 10)}\n`;
    text += `${block.description}\n`;
    if (block.exercises && block.exercises.length > 0) {
      text += `Übungen:\n`;
      block.exercises.forEach(ex => {
        text += `  • ${ex.titel}`;
        if (ex.beschreibung) text += ` - ${ex.beschreibung}`;
        if (ex.material) text += ` (Material: ${ex.material.join(', ')})`;
        text += '\n';
      });
    }
    text += '\n';
  });
  
  text += `\nHinweise:\n`;
  text += `- Schema: Lockeres Spiel → Technik → Einspiel\n`;
  text += `- Schwerpunkt durchgehend beachten\n`;
  text += `- An Leistungsstand der Gruppe anpassen\n`;
  
  return text;
}

function resetPlanner() {
  document.getElementById('schwerpunkt').value = '';
  document.getElementById('trainingPlan').classList.add('hidden');
  currentTrainingPlan = null;
}

// Exercises Database
function initializeExercises() {
  const categoryFilter = document.getElementById('filterCategory');
  const ageFilter = document.getElementById('filterAge');
  const schwerpunktFilter = document.getElementById('filterSchwerpunkt');
  
  // Populate schwerpunkt filter
  if (schwerpunktFilter) {
    appData.bbv_schwerpunkte.forEach(schwerpunkt => {
      const option = document.createElement('option');
      option.value = schwerpunkt.id;
      option.textContent = schwerpunkt.titel;
      schwerpunktFilter.appendChild(option);
    });
  }
  
  categoryFilter.addEventListener('change', filterExercises);
  ageFilter.addEventListener('change', filterExercises);
  if (schwerpunktFilter) schwerpunktFilter.addEventListener('change', filterExercises);
  
  displayAllExercises();
}

function filterExercises() {
  const categoryFilter = document.getElementById('filterCategory').value;
  const ageFilter = document.getElementById('filterAge').value;
  const schwerpunktFilter = document.getElementById('filterSchwerpunkt');
  const schwerpunktValue = schwerpunktFilter ? schwerpunktFilter.value : '';
  
  let allExercises = [
    ...appData.uebungen.lockere_spiele.map(ex => ({...ex, kategorie: 'Lockeres Spiel'})),
    ...appData.uebungen.technik.map(ex => ({...ex, kategorie: 'Technik'})),
    ...appData.uebungen.einspiel.map(ex => ({...ex, kategorie: 'Einspiel'}))
  ];
  
  let filteredExercises = allExercises;
  
  if (categoryFilter) {
    filteredExercises = filteredExercises.filter(ex => ex.kategorie === categoryFilter);
  }
  
  if (ageFilter) {
    filteredExercises = filteredExercises.filter(ex => ex.altersgruppen.includes(ageFilter));
  }
  
  if (schwerpunktValue) {
    const schwerpunktId = parseInt(schwerpunktValue);
    filteredExercises = filteredExercises.filter(ex => 
      ex.schwerpunkt_ids === "alle" || 
      ex.schwerpunkt_ids === "alle_taktik" ||
      ex.schwerpunkt_ids.includes(schwerpunktId)
    );
  }
  
  displayExercises(filteredExercises);
}

function displayAllExercises() {
  let allExercises = [
    ...appData.uebungen.lockere_spiele.map(ex => ({...ex, kategorie: 'Lockeres Spiel'})),
    ...appData.uebungen.technik.map(ex => ({...ex, kategorie: 'Technik'})),
    ...appData.uebungen.einspiel.map(ex => ({...ex, kategorie: 'Einspiel'}))
  ];
  
  displayExercises(allExercises);
}

function displayExercises(exercises) {
  const container = document.getElementById('exercisesList');
  container.innerHTML = '';
  
  if (exercises.length === 0) {
    container.innerHTML = '<p class="text-center">Keine Übungen für die gewählten Filter gefunden.</p>';
    return;
  }
  
  exercises.forEach(exercise => {
    const exerciseCard = createExerciseCard(exercise);
    container.appendChild(exerciseCard);
  });
}

function createExerciseCard(exercise) {
  const card = document.createElement('div');
  card.className = 'exercise-card';
  
  const ageTags = exercise.altersgruppen.map(age => `<span class="age-tag">${age}</span>`).join('');
  const materialText = exercise.material ? exercise.material.join(', ') : 'Kein Material';
  
  // Get schwerpunkt names
  let schwerpunktText = '';
  if (exercise.schwerpunkt_ids === "alle") {
    schwerpunktText = 'Alle Schwerpunkte';
  } else if (exercise.schwerpunkt_ids === "alle_taktik") {
    schwerpunktText = 'Alle Taktik-Schwerpunkte';
  } else if (Array.isArray(exercise.schwerpunkt_ids)) {
    const schwerpunkte = exercise.schwerpunkt_ids.map(id => {
      const sp = appData.bbv_schwerpunkte.find(s => s.id === id);
      return sp ? sp.titel : `SP${id}`;
    });
    schwerpunktText = schwerpunkte.join(', ');
  }
  
  card.innerHTML = `
    <div class="exercise-card__header">
      <h3 class="exercise-card__title">${exercise.titel}</h3>
      <span class="exercise-card__duration">${exercise.dauer} Min</span>
    </div>
    <div class="exercise-card__category">${exercise.kategorie}</div>
    <div class="exercise-card__description">${exercise.beschreibung}</div>
    <div class="exercise-card__schwerpunkte">${schwerpunktText}</div>
    <div class="exercise-card__meta">
      <div class="exercise-card__ages">${ageTags}</div>
      <div class="exercise-card__material">Material: ${materialText}</div>
    </div>
  `;
  
  return card;
}

// Hall Management - Fixed modal handling
function initializeHalls() {
  const addHallBtn = document.getElementById('addHall');
  
  if (addHallBtn) {
    addHallBtn.addEventListener('click', () => {
      const modal = document.getElementById('hallModal');
      if (modal) {
        showModal(modal);
      }
    });
  }
  
  // Initialize modal event listeners when modal exists
  const modal = document.getElementById('hallModal');
  if (modal) {
    const closeBtn = modal.querySelector('.modal__close');
    const cancelBtn = document.getElementById('cancelHall');
    const saveBtn = document.getElementById('saveHall');
    const backdrop = modal.querySelector('.modal__backdrop');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideModal(modal);
      });
    }
    
    if (cancelBtn) {
      cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideModal(modal);
      });
    }
    
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideModal(modal);
      });
    }
    
    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        saveNewHall();
      });
    }
    
    // Escape key handler
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        hideModal(modal);
      }
    });
  }
  
  displayHalls();
}

function showModal(modal) {
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modal) {
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    clearHallForm();
  }
}

function clearHallForm() {
  const hallName = document.getElementById('hallName');
  const basketballs3 = document.getElementById('basketballs3');
  const basketballs4 = document.getElementById('basketballs4');
  const cones = document.getElementById('cones');
  const hoops = document.getElementById('hoops');
  
  if (hallName) hallName.value = '';
  if (basketballs3) basketballs3.value = '0';
  if (basketballs4) basketballs4.value = '0';
  if (cones) cones.value = '0';
  if (hoops) hoops.value = '0';
}

function saveNewHall() {
  const hallName = document.getElementById('hallName');
  const name = hallName ? hallName.value.trim() : '';
  
  if (!name) {
    alert('Bitte geben Sie einen Hallennamen ein.');
    return;
  }
  
  const basketballs3 = document.getElementById('basketballs3');
  const basketballs4 = document.getElementById('basketballs4');
  const cones = document.getElementById('cones');
  const hoops = document.getElementById('hoops');
  
  const newHall = {
    id: `hall-${Date.now()}`,
    name: name,
    equipment: {
      basketballs_size_3: basketballs3 ? parseInt(basketballs3.value) || 0 : 0,
      basketballs_size_4: basketballs4 ? parseInt(basketballs4.value) || 0 : 0,
      cones: cones ? parseInt(cones.value) || 0 : 0,
      hoops: hoops ? parseInt(hoops.value) || 0 : 0,
      adjustable_baskets: true,
      basket_height: "2.60m"
    }
  };
  
  appData.halls.push(newHall);
  displayHalls();
  populateHallSelect();
  
  const modal = document.getElementById('hallModal');
  hideModal(modal);
}

function displayHalls() {
  const container = document.getElementById('hallsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.halls.forEach(hall => {
    const hallCard = createHallCard(hall);
    container.appendChild(hallCard);
  });
}

function createHallCard(hall) {
  const card = document.createElement('div');
  card.className = 'hall-card';
  
  card.innerHTML = `
    <h3 class="hall-card__title">${hall.name}</h3>
    <div class="equipment-list">
      <div class="equipment-item">
        <span>Basketbälle Gr. 3</span>
        <span class="equipment-item__count">${hall.equipment.basketballs_size_3}</span>
      </div>
      <div class="equipment-item">
        <span>Basketbälle Gr. 4</span>
        <span class="equipment-item__count">${hall.equipment.basketballs_size_4}</span>
      </div>
      <div class="equipment-item">
        <span>Hütchen</span>
        <span class="equipment-item__count">${hall.equipment.cones}</span>
      </div>
      <div class="equipment-item">
        <span>Reifen</span>
        <span class="equipment-item__count">${hall.equipment.hoops}</span>
      </div>
      <div class="equipment-item">
        <span>Korbhöhe</span>
        <span class="equipment-item__count">${hall.equipment.basket_height}</span>
      </div>
    </div>
  `;
  
  return card;
}

function populateHallSelect() {
  const hallSelect = document.getElementById('halle');
  if (!hallSelect) return;
  
  hallSelect.innerHTML = '<option value="">Halle wählen...</option>';
  
  appData.halls.forEach(hall => {
    const option = document.createElement('option');
    option.value = hall.id;
    option.textContent = hall.name;
    hallSelect.appendChild(option);
  });
}

function loadInitialData() {
  populateHallSelect();
}