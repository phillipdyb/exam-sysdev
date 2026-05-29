/* Flashkort – IDATx1005 */

const allFlashCards = [
  // MMI & IxD
  { front: 'Affordanse', back: 'Egenskap ved et objekt som antyder hvordan det skal brukes', topic: 'mmi' },
  { front: 'Mental modell', back: 'Brukerens forståelse av hvordan et system fungerer', topic: 'mmi' },
  { front: 'Brukersentrert design', back: 'Designprosess der brukernes behov er i fokus gjennom hele prosessen', topic: 'mmi' },
  { front: 'Heuristisk evaluering', back: 'Ekspertevaluering av grensesnitt mot Nielsens 10 usability-prinsipper', topic: 'mmi' },
  { front: 'Prototype', back: 'Tidlig, testbar versjon av et system eller grensesnitt', topic: 'mmi' },
  { front: 'Usability', back: 'Mål på hvor enkelt og effektivt brukere kan nå sine mål i et system', topic: 'mmi' },
  { front: 'Wireframe', back: 'Enkel skisse av grensesnittets layout uten visuell design', topic: 'mmi' },
  { front: 'Persona', back: 'Fiktiv brukerrepresentasjon basert på reell brukerdata', topic: 'mmi' },
  { front: 'Brukertesting', back: 'Testing der faktiske brukere løser oppgaver for å avdekke problemer', topic: 'mmi' },
  { front: 'Feedback (IxD)', back: 'Systemrespons som forteller brukeren hva som skjedde etter en handling', topic: 'mmi' },
  { front: 'Mapping', back: 'Forholdet mellom kontroller og effekten de produserer', topic: 'mmi' },
  { front: 'Synlighet', back: 'Prinsipp om at systemets status og muligheter er klart kommunisert', topic: 'mmi' },
  { front: 'Feiltoleranse', back: 'Systemets evne til å forebygge og la brukere rette opp feil', topic: 'mmi' },
  { front: 'Brukskontekst', back: 'De fysiske, sosiale og tekniske omgivelsene systemet brukes i', topic: 'mmi' },
  { front: 'Iterativ design', back: 'Gjentatte sykluser med design, prototyping og evaluering', topic: 'mmi' },

  // Personvern & Etikk
  { front: 'GDPR', back: 'EUs personvernforordning (2018) som regulerer behandling av personopplysninger', topic: 'personvern' },
  { front: 'Personopplysning', back: 'Enhver opplysning som kan knyttes til en identifiserbar fysisk person', topic: 'personvern' },
  { front: 'Samtykke', back: 'Frivillig, spesifikk, informert og utvetydig godkjenning fra den registrerte', topic: 'personvern' },
  { front: 'Dataminimering', back: 'Prinsipp om å kun samle inn opplysninger som er nødvendige for formålet', topic: 'personvern' },
  { front: 'Privacy by Design', back: 'Personvern integreres aktivt i systemet fra start, ikke etterpå', topic: 'personvern' },
  { front: 'Behandlingsansvarlig', back: 'Den som bestemmer formål og midler for behandlingen av personopplysninger', topic: 'personvern' },
  { front: 'Databehandler', back: 'Den som behandler personopplysninger på vegne av behandlingsansvarlig', topic: 'personvern' },
  { front: 'Rett til innsyn', back: 'Registrertes rett til å se hvilke opplysninger som er lagret om dem', topic: 'personvern' },
  { front: 'Rett til sletting', back: 'Registrertes rett til å få personopplysninger slettet ("retten til å bli glemt")', topic: 'personvern' },
  { front: 'Anonymisering', back: 'Fjerne all identifiserende informasjon slik data ikke kan knyttes til en person', topic: 'personvern' },
  { front: 'Pseudonymisering', back: 'Erstatte identifikatorer med kunstige nøkler; kan reverseres med ekstra informasjon', topic: 'personvern' },
  { front: 'Sensitive kategorier', back: 'Særlig beskyttede data: helse, politikk, religion, fagforeningsmedlemskap, biometri', topic: 'personvern' },
  { front: 'Formålsbegrensning', back: 'Personopplysninger kan kun brukes til det formålet de ble samlet inn for', topic: 'personvern' },
  { front: 'Lagringsbegrensning', back: 'Personopplysninger skal ikke lagres lenger enn nødvendig', topic: 'personvern' },
  { front: 'Databruddsvarsel', back: 'Plikt til å varsle Datatilsynet innen 72 timer ved sikkerhetsbrudd', topic: 'personvern' },

  // Metodikk
  { front: 'Scrum', back: 'Agilt rammeverk med sprinter, faste roller og seremonier', topic: 'metodikk' },
  { front: 'Sprint', back: 'Tidsavgrenset iterasjon i Scrum, typisk 1–4 uker', topic: 'metodikk' },
  { front: 'Product Backlog', back: 'Prioritert liste over all ønsket funksjonalitet i produktet', topic: 'metodikk' },
  { front: 'Sprint Backlog', back: 'Oppgaver valgt fra Product Backlog som skal løses i gjeldende sprint', topic: 'metodikk' },
  { front: 'Daily Scrum', back: 'Daglig 15-minutters synkroniseringsmøte i utviklingsteamet', topic: 'metodikk' },
  { front: 'Kanban', back: 'Visuell arbeidsflytmetode med WIP-grenser og fokus på kontinuerlig flyt', topic: 'metodikk' },
  { front: 'WIP-grense', back: 'Maks antall oppgaver som kan være i arbeid i samme fase i Kanban', topic: 'metodikk' },
  { front: 'Velocity', back: 'Teamets gjennomsnittlige kapasitet målt i story points per sprint', topic: 'metodikk' },
  { front: 'User Story', back: 'Kort beskrivelse av funksjonalitet fra sluttbrukerens perspektiv', topic: 'metodikk' },
  { front: 'Definition of Done', back: 'Felles kriterier for hva som kreves for at en oppgave regnes som ferdig', topic: 'metodikk' },
  { front: 'Retrospektiv', back: 'Scrum-seremoni for å reflektere over prosessen og identifisere forbedringer', topic: 'metodikk' },
  { front: 'Sprint Review', back: 'Gjennomgang av ferdig arbeid med interessenter ved sprintens slutt', topic: 'metodikk' },
  { front: 'Product Owner', back: 'Scrum-rolle ansvarlig for å prioritere backlog og representere interessenter', topic: 'metodikk' },
  { front: 'Scrum Master', back: 'Fasilitator som sikrer at Scrum-prosessen følges og fjerner hindringer', topic: 'metodikk' },
  { front: 'Kontinuerlig integrasjon (CI)', back: 'Automatisk bygg og test av kode ved hver innsjekking til versjonskontroll', topic: 'metodikk' },

  // Testing
  { front: 'Enhetstesting', back: 'Testing av isolerte kodeenheter som funksjoner og klasser', topic: 'testing' },
  { front: 'Integrasjonstesting', back: 'Testing av samspillet mellom to eller flere komponenter', topic: 'testing' },
  { front: 'Systemtesting', back: 'Testing av hele systemet mot kravspesifikasjonen', topic: 'testing' },
  { front: 'Akseptansetesting', back: 'Testing utført av kunde eller bruker for å godkjenne systemet', topic: 'testing' },
  { front: 'Regresjonstesting', back: 'Verifisere at eksisterende funksjonalitet ikke er ødelagt etter endringer', topic: 'testing' },
  { front: 'TDD', back: 'Test-Driven Development: skriv testen før koden, la testen styre designet', topic: 'testing' },
  { front: 'Black-box testing', back: 'Testing uten kjennskap til intern implementasjon; kun inn/ut-perspektiv', topic: 'testing' },
  { front: 'White-box testing', back: 'Testing med full kjennskap til kildekoden og intern struktur', topic: 'testing' },
  { front: 'Testdekning', back: 'Andel av kildekoden som kjøres av testsuiten (code coverage)', topic: 'testing' },
  { front: 'Mock', back: 'Simulert objekt som erstatter en ekte avhengighet i isolerte tester', topic: 'testing' },
  { front: 'Smoke test', back: 'Rask grunntest for å sjekke at systemet starter og viktigste funksjoner virker', topic: 'testing' },
  { front: 'Statisk testing', back: 'Gjennomgang av kode uten å kjøre den (code review, linting)', topic: 'testing' },
  { front: 'Dynamisk testing', back: 'Testing ved faktisk kjøring av programvaren med testdata', topic: 'testing' },
  { front: 'Testplan', back: 'Dokument som beskriver testomfang, strategi, ressurser og tidsplan', topic: 'testing' },
  { front: 'Feilrapport', back: 'Dokumentasjon av et avvik mellom faktisk og forventet oppførsel', topic: 'testing' },

  // Arkitektur
  { front: 'MVC', back: 'Model-View-Controller: separerer data, presentasjon og forretningslogikk', topic: 'arkitektur' },
  { front: 'Microservices', back: 'Arkitektur der systemet deles i mange små, uavhengige tjenester', topic: 'arkitektur' },
  { front: 'Monolitt', back: 'Arkitektur der all funksjonalitet er samlet i én deploybar enhet', topic: 'arkitektur' },
  { front: 'REST', back: 'Arkitekturstil for nett-API-er basert på HTTP-metoder og ressursrepresentasjoner', topic: 'arkitektur' },
  { front: 'API', back: 'Grensesnitt som definerer hvordan programmer kommuniserer med hverandre', topic: 'arkitektur' },
  { front: 'Lav kobling', back: 'Lite avhengighet mellom moduler; endringer i én påvirker ikke andre', topic: 'arkitektur' },
  { front: 'Høy kohesjon', back: 'Elementer innad i en modul henger naturlig sammen og har ett tydelig ansvar', topic: 'arkitektur' },
  { front: 'Design Pattern', back: 'Gjenbrukbar, navngitt løsning på et vanlig og gjentakende designproblem', topic: 'arkitektur' },
  { front: 'Skalerbarhet', back: 'Systemets evne til å håndtere økt belastning uten ytelsesfall', topic: 'arkitektur' },
  { front: 'SOLID', back: 'Fem prinsipper for god OO-design (bl.a. Single Responsibility, Open/Closed)', topic: 'arkitektur' },
  { front: 'Singleton', back: 'Designmønster som sikrer at en klasse kun har én instans i hele applikasjonen', topic: 'arkitektur' },
  { front: 'Observer', back: 'Designmønster der objekter abonnerer på og reagerer på hendelser fra et annet objekt', topic: 'arkitektur' },
  { front: 'Lagdelt arkitektur', back: 'System strukturert i horisontale lag: presentasjon, forretningslogikk og datahåndtering', topic: 'arkitektur' },
  { front: 'Dependency Injection', back: 'Avhengigheter sendes inn utenfra fremfor å opprettes internt i klassen', topic: 'arkitektur' },
  { front: 'Teknisk gjeld', back: 'Kostnadene ved å velge en rask løsning fremfor en bedre, men mer tidkrevende løsning', topic: 'arkitektur' },
];

let activeTopic = 'all';
let currentCards = [];
let currentIndex = 0;
let knownIndices = new Set();
let isFlipped = false;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTopic = btn.dataset.topic;
      startSession();
    });
  });

  startSession();
});

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startSession() {
  const filtered = activeTopic === 'all'
    ? allFlashCards
    : allFlashCards.filter(c => c.topic === activeTopic);
  currentCards = shuffleArray(filtered);
  knownIndices.clear();
  currentIndex = 0;
  isFlipped = false;

  document.getElementById('flashcardArea').classList.remove('hidden');
  document.getElementById('fcDoneScreen').classList.add('hidden');
  showCard();
}

function showCard() {
  const card = currentCards[currentIndex];
  document.getElementById('fcFront').textContent = card.front;
  document.getElementById('fcBack').textContent = card.back;

  const fcCard = document.getElementById('fcCard');
  fcCard.classList.remove('flipped');
  isFlipped = false;
  document.getElementById('fcStatusBtns').style.display = 'none';

  updateProgress();
  document.getElementById('fcPrevBtn').disabled = currentIndex === 0;
}

function flipCard() {
  isFlipped = !isFlipped;
  document.getElementById('fcCard').classList.toggle('flipped', isFlipped);
  document.getElementById('fcStatusBtns').style.display = isFlipped ? 'flex' : 'none';
}

function markCard(status) {
  if (status === 'known') {
    knownIndices.add(currentIndex);
  } else {
    knownIndices.delete(currentIndex);
  }
  fcNext();
}

function fcNext() {
  if (currentIndex < currentCards.length - 1) {
    currentIndex++;
    showCard();
  } else {
    showDone();
  }
}

function fcPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard();
  }
}

function shuffleFlashcards() {
  currentCards = shuffleArray(currentCards);
  knownIndices.clear();
  currentIndex = 0;
  showCard();
}

function updateProgress() {
  const total = currentCards.length;
  document.getElementById('fcProgressLabel').textContent = `Kort ${currentIndex + 1} av ${total}`;
  document.getElementById('fcKnownLabel').textContent =
    knownIndices.size > 0 ? `${knownIndices.size} kan dette` : '';
  document.getElementById('fcProgressFill').style.width = ((currentIndex + 1) / total * 100) + '%';
}

function showDone() {
  document.getElementById('flashcardArea').classList.add('hidden');
  document.getElementById('fcDoneScreen').classList.remove('hidden');
  document.getElementById('fcKnownCount').textContent = `${knownIndices.size}/${currentCards.length}`;
}

function resetFlashcards() {
  startSession();
}

function reviewOnlyUnknown() {
  const unknown = currentCards.filter((_, i) => !knownIndices.has(i));
  if (unknown.length === 0) { startSession(); return; }
  currentCards = shuffleArray(unknown);
  knownIndices.clear();
  currentIndex = 0;
  isFlipped = false;
  document.getElementById('flashcardArea').classList.remove('hidden');
  document.getElementById('fcDoneScreen').classList.add('hidden');
  showCard();
}
