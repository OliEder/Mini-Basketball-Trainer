// Real data with YouTube videos integration
const EXERCISES = [
    {
        "id": "ballhandling_basics",
        "title": "Ball Handling Basics",
        "description": "Grundlegende Ballhandling-Übungen für alle Altersgruppen. Steffen Hamann zeigt verschiedene Ballführungsformen.",
        "ageGroups": ["U8", "U10", "U12"],
        "bbvFocus": [4],
        "equipment": [{"name": "Basketbälle", "minAmount": 1, "perPlayer": true}],
        "video": "https://www.youtube.com/watch?v=8qN3_7GQd6w",
        "source": "FC Bayern Basketball",
        "phase": "technique",
        "setupTime": 2,
        "helpersNeeded": 0
    },
    {
        "id": "spielfaehigkeit_anfaenger",
        "title": "Spielfähigkeit Anfänger",
        "description": "Einführung in Basketball für Anfänger mit spielerischen Formen und ersten Techniken.",
        "ageGroups": ["U8", "U10"],
        "bbvFocus": [1, 5],
        "equipment": [{"name": "Basketbälle", "minAmount": 10, "perPlayer": false}, {"name": "Hütchen", "minAmount": 12, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=cEEmkMUco1M",
        "source": "DBB Mini-Trainer Offensive",
        "phase": "warmup",
        "setupTime": 5,
        "helpersNeeded": 1
    },
    {
        "id": "stern_fitness",
        "title": "Stern-Fitness", 
        "description": "Koordination und Fitness in Sternform. Im Herzen Koordination, in den Zacken Fitness-Aufgaben.",
        "ageGroups": ["U8", "U10", "U12"],
        "bbvFocus": [15],
        "equipment": [{"name": "Hütchen", "minAmount": 6, "perPlayer": false}, {"name": "Seile", "minAmount": 2, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=n-kDT29HtoU",
        "source": "ALBAthek",
        "phase": "warmup",
        "setupTime": 8,
        "helpersNeeded": 1
    },
    {
        "id": "dribbelstopp_sternschritt",
        "title": "Dribbelstopp und Sternschritt",
        "description": "Sprung- und Schrittstopp im Reifen, Dribbelstopp mit Sternschritt für bessere Ballkontrolle.",
        "ageGroups": ["U10", "U12"],
        "bbvFocus": [2, 3],
        "equipment": [{"name": "Basketbälle", "minAmount": 8, "perPlayer": false}, {"name": "Reifen", "minAmount": 8, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=9a7G0FAPUlA",
        "source": "DBB Mini-Trainer Offensive",
        "phase": "technique",
        "setupTime": 6,
        "helpersNeeded": 0
    },
    {
        "id": "spiele_schulstunde",
        "title": "Spiele für die Schulstunde",
        "description": "Vielfältige Basketball-Spiele für den Schulsport mit verschiedenen Schwierigkeitsgraden.",
        "ageGroups": ["U8", "U10"],
        "bbvFocus": [1, 5, 6],
        "equipment": [{"name": "Basketbälle", "minAmount": 12, "perPlayer": false}, {"name": "Leibchen", "minAmount": 10, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=qs2a-XklrTA",
        "source": "DBB Mini-Trainer Offensive", 
        "phase": "application",
        "setupTime": 3,
        "helpersNeeded": 1
    },
    {
        "id": "big_men_training",
        "title": "Big Men Training",
        "description": "Spezielle Moves und Techniken für große Spieler unter dem Korb mit Steffen Hamann.",
        "ageGroups": ["U12"],
        "bbvFocus": [7, 8, 11],
        "equipment": [{"name": "Basketbälle", "minAmount": 4, "perPlayer": false}, {"name": "Körbe", "minAmount": 2, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=MHw-XWNSSJ0",
        "source": "FC Bayern Basketball",
        "phase": "technique",
        "setupTime": 5,
        "helpersNeeded": 1
    },
    {
        "id": "zahlenfitness",
        "title": "Zahlenfitness",
        "description": "Zufallszahlen bestimmen Wiederholungen - mal wenig schwitzen, mal richtig anstrengend!",
        "ageGroups": ["U8", "U10", "U12"],
        "bbvFocus": [15],
        "equipment": [{"name": "Würfel", "minAmount": 2, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=QHiTaOcATPM",
        "source": "ALBAthek",
        "phase": "warmup",
        "setupTime": 2,
        "helpersNeeded": 0
    },
    {
        "id": "maedchenbasketball_warmup",
        "title": "Mädchenbasketball Warm-Up",
        "description": "Hundehütte, Fischerspiel und Ballhandling-Übungen speziell für Mädchen-Teams.",
        "ageGroups": ["U8", "U10", "U12"],
        "bbvFocus": [1, 4],
        "equipment": [{"name": "Basketbälle", "minAmount": 10, "perPlayer": false}, {"name": "Hütchen", "minAmount": 8, "perPlayer": false}],
        "video": "https://www.youtube.com/watch?v=5ccGtkCcG98",
        "source": "DBB Mini-Trainer Offensive",
        "phase": "warmup",
        "setupTime": 4,
        "helpersNeeded": 0
    }
];

const BBV_FOCI = [
    {"id": 1, "title": "Einführung des Dribblings", "category": "Technik"},
    {"id": 2, "title": "Schulung des Dribblings", "category": "Technik"},
    {"id": 3, "title": "Schulung eines Dribbelhandwechsels", "category": "Technik"},
    {"id": 4, "title": "Schulung des Ballhandlings", "category": "Technik"},
    {"id": 5, "title": "Einführung Passen und Fangen", "category": "Technik"},
    {"id": 6, "title": "Schulung Passen und Fangen", "category": "Technik"},
    {"id": 7, "title": "Einführung des Korblegers beidhändig", "category": "Technik"},
    {"id": 8, "title": "Schulung des Korblegers beidhändig", "category": "Technik"},
    {"id": 9, "title": "Einführung des Powershots", "category": "Technik"},
    {"id": 10, "title": "Schulung des Powershots", "category": "Technik"},
    {"id": 11, "title": "Schulung des Korblegers einhändig", "category": "Technik"},
    {"id": 12, "title": "Einführung des Standwurfs", "category": "Technik"},
    {"id": 13, "title": "Schulung des Standwurfs", "category": "Technik"},
    {"id": 14, "title": "Einführung des Sprungwurfs", "category": "Technik"},
    {"id": 15, "title": "Einführung der Verteidigungsbeinarbeit", "category": "Technik"},
    {"id": 16, "title": "Schulung der Verteidigungsbeinarbeit", "category": "Technik"},
    {"id": 17, "title": "Einführung des Schnellangriffs", "category": "Taktik"},
    {"id": 18, "title": "Schulung des Schnellangriffs", "category": "Taktik"},
    {"id": 19, "title": "Verteidigung gegen den Schnellangriff", "category": "Taktik"},
    {"id": 20, "title": "1-1 offensiv am Ball", "category": "Taktik"},
    {"id": 21, "title": "1-1 defensiv am Ball", "category": "Taktik"},
    {"id": 22, "title": "1-1 offensiv ohne Ball", "category": "Taktik"},
    {"id": 23, "title": "1-1 defensiv ohne Ball", "category": "Taktik"},
    {"id": 24, "title": "Give and Go", "category": "Taktik"},
    {"id": 25, "title": "Befreiungsbewegungen zum Ball", "category": "Taktik"},
    {"id": 26, "title": "Befreiungsbewegungen vom Ball weg", "category": "Taktik"},
    {"id": 27, "title": "Posting-up für Guards", "category": "Taktik"},
    {"id": 28, "title": "Posting-up für Center", "category": "Taktik"},
    {"id": 29, "title": "Angriff mit Kontinuität", "category": "Taktik"},
    {"id": 30, "title": "Minitraining mit drei Schwerpunkten", "category": "Komplex"}
];

const EQUIPMENT_TEMPLATES = {
    "small": {
        "name": "Kleine Halle",
        "basketballs": 15,
        "cones": 20,
        "hoops": 12,
        "pylons": 8,
        "baskets": 2
    },
    "medium": {
        "name": "Mittlere Halle",
        "basketballs": 20,
        "cones": 30,
        "hoops": 20,
        "pylons": 12,
        "baskets": 4
    },
    "large": {
        "name": "Große Halle",
        "basketballs": 25,
        "cones": 40,
        "hoops": 30,
        "pylons": 16,
        "baskets": 6
    }
};

const TRAININGSSTRUKTUR = {
    "aufwaermen": {"dauer": 20, "beschreibung": "Aufwärmen - Lockere Spiele zur allgemeinen Aktivierung"},
    "schwerpunkt1": {"dauer": 20, "beschreibung": "Schwerpunkt 1 - Haupttechnik-Einheit"},
    "zwischenblock1": {"dauer": 5, "beschreibung": "Zwischenblock - Freiwürfe oder ruhige Ballführung"},
    "schwerpunkt2": {"dauer": 20, "beschreibung": "Schwerpunkt 2 - Vertiefung oder zweiter Schwerpunkt"},
    "zwischenblock2": {"dauer": 5, "beschreibung": "Zwischenblock - Regeneration vor der Spielphase"},
    "spiel": {"dauer": 15, "beschreibung": "Spiel - Anwendung der gelernten Technik"},
    "cooldown": {"dauer": 5, "beschreibung": "Cool-down - Entspannung und Reflexion"}
};

// YouTube helper functions
function getYouTubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function createYouTubeEmbed(videoUrl) {
    const videoId = getYouTubeVideoId(videoUrl);
    if (!videoId) return '';
    
    return `
        <div class="video-container">
            <iframe 
                src="https://www.youtube.com/embed/${videoId}" 
                title="YouTube video" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
}

// Application state
class AppState {
    constructor() {
        this.currentSection = 'dashboard';
        this.halls = JSON.parse(localStorage.getItem('minibasketball_halls') || '[]');
        this.players = JSON.parse(localStorage.getItem('minibasketball_players') || '[]');
        this.exercises = EXERCISES;
        this.schwerpunkte = BBV_FOCI;
        this.filteredExercises = [...this.exercises];
    }

    saveHalls() {
        localStorage.setItem('minibasketball_halls', JSON.stringify(this.halls));
    }

    savePlayers() {
        localStorage.setItem('minibasketball_players', JSON.stringify(this.players));
    }

    addHall(hall) {
        hall.id = Date.now().toString();
        this.halls.push(hall);
        this.saveHalls();
    }

    deleteHall(id) {
        this.halls = this.halls.filter(hall => hall.id !== id);
        this.saveHalls();
    }

    addPlayer(player) {
        player.id = Date.now().toString();
        this.players.push(player);
        this.savePlayers();
    }

    deletePlayer(id) {
        this.players = this.players.filter(player => player.id !== id);
        this.savePlayers();
    }

    applyEquipmentTemplate(template) {
        return EQUIPMENT_TEMPLATES[template] || null;
    }
}

// Application instance
const app = new AppState();

// Modal management
class ModalManager {
    static openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('modal--active');
            document.body.style.overflow = 'hidden';
            
            // Focus management
            const firstFocusable = modal.querySelector('input, select, textarea, button');
            if (firstFocusable) {
                firstFocusable.focus();
            }
        }
    }

    static closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('modal--active');
            document.body.style.overflow = '';
            
            // Reset form if present
            const form = modal.querySelector('form');
            if (form) {
                form.reset();
            }
        }
    }

    static closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.remove('modal--active');
        });
        document.body.style.overflow = '';
    }

    static setupModalHandlers(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Close button
        const closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal(modalId));
        }

        // Cancel button
        const cancelBtn = modal.querySelector(`#${modalId}Cancel`);
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeModal(modalId));
        }

        // Overlay click
        const overlay = modal.querySelector('.modal__overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closeModal(modalId));
        }

        // Escape key
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal(modalId);
            }
        });
    }
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('section--active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('section--active');
        app.currentSection = sectionId;
    }

    // Close any open modals when navigating
    ModalManager.closeAllModals();
}

// Hall management
function renderHalls() {
    const container = document.getElementById('hallsList');
    
    if (app.halls.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state__icon">🏟️</div>
                <h3 class="empty-state__title">Keine Hallen vorhanden</h3>
                <p class="empty-state__description">Fügen Sie Ihre erste Trainingshalle hinzu</p>
            </div>
        `;
        return;
    }

    container.innerHTML = app.halls.map(hall => `
        <div class="hall-item">
            <div class="hall-item__header">
                <h3 class="hall-item__name">${hall.name}</h3>
                <div class="item-actions">
                    <button class="btn btn--danger btn--sm" onclick="deleteHall('${hall.id}')">Löschen</button>
                </div>
            </div>
            ${hall.address ? `<p class="hall-item__address">${hall.address}</p>` : ''}
            ${hall.inventory ? `<div class="hall-item__inventory">${hall.inventory}</div>` : ''}
            ${hall.template ? `<div class="hall-item__template">Template: ${hall.template}</div>` : ''}
        </div>
    `).join('');
}

function deleteHall(id) {
    if (confirm('Möchten Sie diese Halle wirklich löschen?')) {
        app.deleteHall(id);
        renderHalls();
    }
}

// Exercise management
function renderExercises() {
    const container = document.getElementById('exercisesList');
    
    if (app.filteredExercises.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state__icon">📚</div>
                <h3 class="empty-state__title">Keine Übungen gefunden</h3>
                <p class="empty-state__description">Versuchen Sie andere Filtereinstellungen</p>
            </div>
        `;
        return;
    }

    container.innerHTML = app.filteredExercises.map(exercise => `
        <div class="exercise-item" onclick="showExerciseDetail('${exercise.id}')">
            <div class="exercise-item__header">
                <h3 class="exercise-item__title">${exercise.title}</h3>
                <div class="exercise-item__meta-badges">
                    <span class="exercise-item__source">${exercise.source}</span>
                    <span class="exercise-item__category">${getSchwerpunktKategorie(exercise.bbvFocus[0])}</span>
                </div>
            </div>
            <p class="exercise-item__description">${exercise.description}</p>
            <div class="exercise-item__meta">
                <span>⏱️ ${exercise.setupTime} Min Setup</span>
                <span>👥 ${exercise.helpersNeeded} Helfer</span>
                <div class="exercise-item__ages">
                    ${exercise.ageGroups.map(age => `<span class="exercise-item__age">${age}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function getSchwerpunktKategorie(schwerpunktId) {
    const schwerpunkt = app.schwerpunkte.find(s => s.id === schwerpunktId);
    return schwerpunkt ? schwerpunkt.category : 'Unbekannt';
}

function filterExercises() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;
    const sourceFilter = document.getElementById('sourceFilter')?.value || '';

    app.filteredExercises = app.exercises.filter(exercise => {
        const matchesCategory = !categoryFilter || getSchwerpunktKategorie(exercise.bbvFocus[0]) === categoryFilter;
        const matchesAge = !ageFilter || exercise.ageGroups.includes(ageFilter);
        const matchesSource = !sourceFilter || exercise.source === sourceFilter;
        return matchesCategory && matchesAge && matchesSource;
    });

    renderExercises();
}

function showExerciseDetail(exerciseId) {
    const exercise = app.exercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    const modal = document.getElementById('exerciseModal');
    const title = document.getElementById('exerciseModalTitle');
    const body = document.getElementById('exerciseModalBody');

    title.textContent = exercise.title;
    
    const schwerpunkteTitles = exercise.bbvFocus
        .map(id => app.schwerpunkte.find(s => s.id === id))
        .filter(s => s)
        .map(s => s.title);

    const videoEmbed = exercise.video ? createYouTubeEmbed(exercise.video) : '';

    body.innerHTML = `
        ${videoEmbed}
        
        <div class="exercise-detail__meta">
            <div class="exercise-detail__meta-item">
                <div class="exercise-detail__meta-label">Setup-Zeit</div>
                <div class="exercise-detail__meta-value">${exercise.setupTime} Min</div>
            </div>
            <div class="exercise-detail__meta-item">
                <div class="exercise-detail__meta-label">Phase</div>
                <div class="exercise-detail__meta-value">${exercise.phase}</div>
            </div>
            <div class="exercise-detail__meta-item">
                <div class="exercise-detail__meta-label">Helfer</div>
                <div class="exercise-detail__meta-value">${exercise.helpersNeeded}</div>
            </div>
            <div class="exercise-detail__meta-item">
                <div class="exercise-detail__meta-label">Quelle</div>
                <div class="exercise-detail__meta-value">${exercise.source}</div>
            </div>
        </div>
        
        <div class="exercise-detail__ages">
            <h4>Altersgruppen</h4>
            <div class="exercise-detail__age-list">
                ${exercise.ageGroups.map(age => `<span class="exercise-detail__age">${age}</span>`).join('')}
            </div>
        </div>
        
        <div class="exercise-detail__description">
            <h4>Beschreibung</h4>
            <p>${exercise.description}</p>
        </div>
        
        <div class="exercise-detail__schwerpunkte">
            <h4>BBV-Schwerpunkte</h4>
            <ul>
                ${schwerpunkteTitles.map(titel => `<li>${titel}</li>`).join('')}
            </ul>
        </div>
        
        <div class="exercise-detail__equipment">
            <h4>Benötigtes Equipment</h4>
            <ul>
                ${exercise.equipment.map(item => `
                    <li>${item.name}: ${item.minAmount} ${item.perPlayer ? 'pro Spieler' : 'insgesamt'}</li>
                `).join('')}
            </ul>
        </div>
    `;

    ModalManager.openModal('exerciseModal');
}

// Training planner
function updatePlannerFocus() {
    const ageSelect = document.getElementById('plannerAge');
    const focusSelect = document.getElementById('plannerFocus');
    const selectedAge = ageSelect.value;

    // Clear focus options
    focusSelect.innerHTML = '<option value="">Schwerpunkt wählen</option>';

    if (selectedAge) {
        // Filter exercises that have this age group and get their BBV foci
        const relevantExercises = app.exercises.filter(ex => ex.ageGroups.includes(selectedAge));
        const availableFociIds = [...new Set(relevantExercises.flatMap(ex => ex.bbvFocus))];
        
        const availableFoci = app.schwerpunkte.filter(s => availableFociIds.includes(s.id));

        availableFoci.forEach(focus => {
            const option = document.createElement('option');
            option.value = focus.id;
            option.textContent = `${focus.title} (${focus.category})`;
            focusSelect.appendChild(option);
        });
    }
}

function generateTrainingPlan() {
    const age = document.getElementById('plannerAge').value;
    const focusId = parseInt(document.getElementById('plannerFocus').value);

    if (!age || !focusId) {
        alert('Bitte wählen Sie Altersgruppe und Schwerpunkt aus.');
        return;
    }

    const focus = app.schwerpunkte.find(s => s.id === focusId);
    const suitableExercises = app.exercises.filter(ex => 
        ex.ageGroups.includes(age) && 
        ex.bbvFocus.includes(focusId)
    );

    const plan = generatePlanStructure(focus, suitableExercises, age);
    renderTrainingPlan(plan);
}

function generatePlanStructure(focus, exercises, age) {
    const phases = Object.keys(TRAININGSSTRUKTUR);
    const plan = {
        title: `Trainingsplan ${age} - ${focus.title}`,
        phases: phases.map(phase => {
            const phaseConfig = TRAININGSSTRUKTUR[phase];
            const phaseExercises = getExercisesForPhase(phase, exercises, age);
            
            return {
                name: phase,
                title: getPhaseTitle(phase),
                duration: phaseConfig.dauer,
                description: phaseConfig.beschreibung,
                exercises: phaseExercises
            };
        })
    };

    return plan;
}

function getPhaseTitle(phase) {
    const titles = {
        'aufwaermen': 'Aufwärmen',
        'schwerpunkt1': 'Schwerpunkt 1',
        'zwischenblock1': 'Zwischenblock 1',
        'schwerpunkt2': 'Schwerpunkt 2',
        'zwischenblock2': 'Zwischenblock 2',
        'spiel': 'Spiel',
        'cooldown': 'Cool-down'
    };
    return titles[phase] || phase;
}

function getExercisesForPhase(phase, exercises, age) {
    if (phase === 'aufwaermen') {
        return app.exercises.filter(ex => 
            ex.phase === 'warmup' && ex.ageGroups.includes(age)
        ).slice(0, 2);
    }
    
    if (phase === 'schwerpunkt1' || phase === 'schwerpunkt2') {
        return exercises.filter(ex => ex.phase === 'technique').slice(0, 2);
    }
    
    if (phase === 'spiel') {
        return app.exercises.filter(ex => 
            ex.phase === 'application' && ex.ageGroups.includes(age)
        ).slice(0, 1);
    }
    
    return [];
}

function renderTrainingPlan(plan) {
    const container = document.getElementById('generatedPlan');
    
    container.innerHTML = `
        <div class="training-plan__header">
            <h3>${plan.title}</h3>
            <p>Gesamtdauer: 90 Minuten (BBV-konforme Struktur)</p>
            <button class="btn btn--outline btn--sm" onclick="exportPlan()">Plan exportieren</button>
        </div>
        ${plan.phases.map(phase => `
            <div class="training-plan__phase">
                <div class="training-plan__phase-header">
                    <h4 class="training-plan__phase-title">${phase.title}</h4>
                    <span class="training-plan__phase-duration">${phase.duration} Min</span>
                </div>
                <p class="training-plan__phase-description">${phase.description}</p>
                ${phase.exercises.length > 0 ? `
                    <ul class="training-plan__exercises">
                        ${phase.exercises.map(ex => `
                            <li class="training-plan__exercise" onclick="showExerciseDetail('${ex.id}')">
                                <div class="training-plan__exercise-info">
                                    <span class="training-plan__exercise-title">${ex.title}</span>
                                    <span class="training-plan__exercise-source">${ex.source}</span>
                                </div>
                                <span class="training-plan__exercise-time">${ex.setupTime} Min Setup</span>
                            </li>
                        `).join('')}
                    </ul>
                ` : '<p class="training-plan__no-exercises">Freie Gestaltung oder Pausen</p>'}
            </div>
        `).join('')}
    `;
    
    container.style.display = 'block';
}

function exportPlan() {
    alert('Export-Funktion wird implementiert (PDF-Generation)');
}

// Player management
function renderPlayers() {
    const container = document.getElementById('playersList');
    
    if (app.players.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state__icon">👥</div>
                <h3 class="empty-state__title">Keine Spieler vorhanden</h3>
                <p class="empty-state__description">Fügen Sie Ihren ersten Spieler hinzu</p>
            </div>
        `;
        return;
    }

    container.innerHTML = app.players.map(player => `
        <div class="player-item">
            <div class="player-item__header">
                <h3 class="player-item__name">${player.firstName} ${player.lastName}</h3>
                <div class="item-actions">
                    <span class="player-item__age">${player.age}</span>
                    <button class="btn btn--danger btn--sm" onclick="deletePlayer('${player.id}')">Löschen</button>
                </div>
            </div>
            ${player.notes ? `<p class="player-item__notes">${player.notes}</p>` : ''}
        </div>
    `).join('');
}

function deletePlayer(id) {
    if (confirm('Möchten Sie diesen Spieler wirklich löschen?')) {
        app.deletePlayer(id);
        renderPlayers();
    }
}

// Equipment template functions
function loadEquipmentTemplate() {
    const templateSelect = document.getElementById('hallTemplate');
    const inventoryTextarea = document.getElementById('hallInventory');
    
    if (templateSelect && inventoryTextarea) {
        const template = app.applyEquipmentTemplate(templateSelect.value);
        if (template) {
            const inventory = Object.entries(template)
                .filter(([key]) => key !== 'name')
                .map(([key, value]) => `${value} ${key}`)
                .join('\n');
            inventoryTextarea.value = inventory;
        }
    }
}

// Event handlers
function setupEventHandlers() {
    // Dashboard navigation
    document.querySelectorAll('.dashboard__card').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.dataset.section;
            showSection(section);
            
            // Load section-specific data
            if (section === 'halls') renderHalls();
            if (section === 'exercises') renderExercises();
            if (section === 'players') renderPlayers();
        });
    });

    // Back buttons
    document.getElementById('backToHalls').addEventListener('click', () => showSection('dashboard'));
    document.getElementById('backToExercises').addEventListener('click', () => showSection('dashboard'));
    document.getElementById('backToPlanner').addEventListener('click', () => showSection('dashboard'));
    document.getElementById('backToPlayers').addEventListener('click', () => showSection('dashboard'));

    // Hall management
    document.getElementById('addHallBtn').addEventListener('click', () => {
        ModalManager.openModal('hallModal');
    });

    document.getElementById('hallModalSave').addEventListener('click', () => {
        const form = document.getElementById('hallForm');
        if (form.checkValidity()) {
            const hallData = {
                name: document.getElementById('hallName').value,
                address: document.getElementById('hallAddress').value,
                inventory: document.getElementById('hallInventory').value,
                template: document.getElementById('hallTemplate')?.value || ''
            };
            
            app.addHall(hallData);
            renderHalls();
            ModalManager.closeModal('hallModal');
        } else {
            form.reportValidity();
        }
    });

    // Player management
    document.getElementById('addPlayerBtn').addEventListener('click', () => {
        ModalManager.openModal('playerModal');
    });

    document.getElementById('playerModalSave').addEventListener('click', () => {
        const form = document.getElementById('playerForm');
        if (form.checkValidity()) {
            const playerData = {
                firstName: document.getElementById('playerFirstName').value,
                lastName: document.getElementById('playerLastName').value,
                age: document.getElementById('playerAge').value,
                notes: document.getElementById('playerNotes').value
            };
            
            app.addPlayer(playerData);
            renderPlayers();
            ModalManager.closeModal('playerModal');
        } else {
            form.reportValidity();
        }
    });

    // Exercise filters
    document.getElementById('categoryFilter').addEventListener('change', filterExercises);
    document.getElementById('ageFilter').addEventListener('change', filterExercises);
    
    // Check if source filter exists
    const sourceFilter = document.getElementById('sourceFilter');
    if (sourceFilter) {
        sourceFilter.addEventListener('change', filterExercises);
    }

    // Training planner
    document.getElementById('plannerAge').addEventListener('change', updatePlannerFocus);
    document.getElementById('generatePlanBtn').addEventListener('click', generateTrainingPlan);

    // Equipment template handler
    const hallTemplateSelect = document.getElementById('hallTemplate');
    if (hallTemplateSelect) {
        hallTemplateSelect.addEventListener('change', loadEquipmentTemplate);
    }

    // Global escape key handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            ModalManager.closeAllModals();
        }
    });
}

// Initialize application
function initApp() {
    console.log('🏀 Minibasketball Trainer App wird initialisiert...');
    
    // Setup modal handlers for all modals
    ModalManager.setupModalHandlers('hallModal');
    ModalManager.setupModalHandlers('playerModal');
    ModalManager.setupModalHandlers('exerciseModal');
    
    // Setup event handlers
    setupEventHandlers();
    
    // CRITICAL: Ensure we start with dashboard and NO modals open
    showSection('dashboard');
    ModalManager.closeAllModals();
    
    console.log('✅ App erfolgreich initialisiert - Dashboard ist aktiv');
    console.log(`📊 ${app.exercises.length} Übungen mit YouTube-Videos verfügbar`);
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);