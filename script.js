/* Quiz questions – IDATx1005 Systemutvikling
   topic values: 'mmi', 'personvern', 'metodikk', 'testing', 'arkitektur'
*/
const allQuestions = [
    {
        topic: 'mmi',
        question: "Hva handler interaksjonsdesign (IxD) om?",
        options: [
            "Å utvikle algoritmer og datastrukturer som optimaliserer ytelse og ressursbruk i digitale systemer og tjenester",
            "Å utforme hvordan brukere samhandler med digitale produkter og tjenester for å skape intuitive, effektive og meningsfulle brukeropplevelser",
            "Å lage visuell profil og grafiske elementer som kommuniserer merkevarens identitet til brukerne av nettsider og apper",
            "Å administrere databaser, dataflyt og integrasjoner mellom backend-systemer i en digital infrastruktur"
        ],
        correct: 1
    },
    {
        topic: 'mmi',
        question: "Kan IxD-prinsippene (synlighet, tilbakemelding, begrensninger, mapping, konsistens, tilbydelser) brukes som en ren sjekkliste for et godt grensesnitt?",
        options: [
            "Nei – prinsippene er et felles språk for å beskrive og diskutere brukskvalitet, ikke en sjekkliste; f.eks. kan «synlighet» både være bra og dårlig",
            "Ja – alle seks prinsippene skal alltid oppfylles fullt ut i hvert grensesnitt for å garantere et godt resultat for alle brukere",
            "Ja – sjekklisten er utviklet av Nielsen Norman Group og garanterer brukskvalitet dersom alle punktene gjennomgås systematisk",
            "Nei – prinsippene ble utviklet på 1990-tallet og er foreldet; de bør erstattes med moderne rammeverk som Material Design"
        ],
        correct: 0
    },
    {
        topic: 'mmi',
        question: "Forklar de seks IxD-prinsippene: synlighet, tilbakemelding, begrensninger, mapping, konsistens og tilbydelser.",
        options: [
            "Synlighet: alt innhold alltid synlig. Tilbakemelding: brukervurderinger i skjema. Begrensninger: begrenser innloggede. Mapping: kartlegging av brukerreiser. Konsistens: lik fargeprofil. Tilbydelser: produkttilbud til kunden",
            "Synlighet: tydelig kontrast og farger. Tilbakemelding: bekreftelsesmeldinger. Begrensninger: begrenset antall valg per side. Mapping: kart-funksjonalitet. Konsistens: felles fargepalett. Tilbydelser: rabatter og tilbud",
            "Synlighet: funksjoner og bruk fremgår av UI-et. Tilbakemelding: systemet signaliserer hva som skjer. Begrensninger: hindrer feil ved å begrense interaksjoner. Mapping: intuitiv sammenheng mellom kontroller og resultat. Konsistens: like ting gjøres likt. Tilbydelser: brukeren forstår hvilke handlinger som er mulige",
            "Synlighet, tilbakemelding og begrensninger er de tre kjerneprinsippene; mapping, konsistens og tilbydelser er kun valgfrie støtteretningslinjer for avanserte tilfeller"
        ],
        correct: 2
    },
    {
        topic: 'mmi',
        question: "Hvilke fire typiske trinn inngår i interaksjonsdesignprosessen, og hva kjennetegner prosessen?",
        options: [
            "1. Analysere konkurrenter, 2. Kode løsningen, 3. Markedsføre produktet, 4. Publisere og vedlikeholde – trinnene følges sekvensielt",
            "1. Skrive kravspesifikasjon, 2. Designe systemarkitektur, 3. Programmere løsningen, 4. Testing og godkjenning – prosessen er lineær",
            "1. Brukerundersøkelse, 2. Lage wireframes, 3. Lansere produktet, 4. Analysere brukerdata – prosessen avsluttes ved lansering",
            "1. Definere krav, 2. Designe alternativer, 3. Lage prototyper, 4. Evaluering – trinnene gjentas iterativt"
        ],
        correct: 3
    },
    {
        topic: 'mmi',
        question: "Hvorfor er prototyping nyttig ved utvikling av kompliserte applikasjoner?",
        options: [
            "Prototyping lar teamet teste ideer tidlig, få tilbakemelding fra brukere, skape felles forståelse og kommunisere designet enklere enn gjennom skriftlige beskrivelser",
            "Prototyping erstatter behovet for testing og QA i seinere faser, og gjør det mulig å levere fungerende kode direkte fra designfasen",
            "Prototyping dokumenterer koden automatisk via annotasjoner og kommentarer, og letter dermed fremtidig vedlikehold av systemet betraktelig",
            "Prototyping sikrer at all funksjonalitet er implementert teknisk korrekt allerede i første iterasjon, og reduserer behovet for refaktorering"
        ],
        correct: 0
    },
    {
        topic: 'mmi',
        question: "Bør man basere seg kun på klassiske brukertester ved evaluering av design?",
        options: [
            "Ja – brukertester er den eneste vitenskapelig anerkjente metoden for å avdekke alle typer brukskvalitetsproblemer i et system",
            "Nei – man kombinerer gjerne brukertester med heuristiske evalueringer, pluralistiske gjennomganger og prediktive metoder for et helhetlig bilde",
            "Ja – andre evalueringsmetoder er for kostbare og tidkrevende til å rettferdiggjøres i de aller fleste prosjekter med begrensede ressurser",
            "Nei – klassiske brukertester er unødvendige dersom teamet følger de seks etablerte IxD-prinsippene nøye gjennom hele designprosessen"
        ],
        correct: 1
    },
    {
        topic: 'mmi',
        question: "Nevn minst fem retningslinjer for mobilnettsteddesign.",
        options: [
            "Store animasjoner, parallax-scrolling, auto-play video, detaljerte hover-effekter og rike datatabeller gir best brukeropplevelse på mobile enheter",
            "Prioriter alltid skrivebordsversjonen; sørg for at mobilbrukere enkelt kan bytte til fullversjonen; bruk absolutte pikselverdier for konsistent layout",
            "Begrens funksjonalitet til det viktigste, flat navigasjon, fingervennlige menyer, begrenset tekstinnskriving, alt-tekst på bilder, relative størrelser og test på flere enheter",
            "Dype navigasjonshierarkier for full funksjonalitet, fast-posisjonert layout, og rike grafiske elementer øker engasjementet hos mobilbrukere"
        ],
        correct: 2
    },
    {
        topic: 'mmi',
        question: "Hva menes med universell utforming?",
        options: [
            "Å lage separate spesialtilpassede løsninger av produkter for brukere med ulike typer funksjonsnedsettelser som har søkt om tilrettelegging",
            "Å sørge for at alle produkter og tjenester fungerer teknisk identisk på alle enheter, operativsystemer og nettlesere som er i vanlig bruk",
            "Å standardisere brukergrensesnitt og interaksjonsmønstre slik at de ser og fungerer likt på tvers av alle plattformer og organisasjoner",
            "Å utforme produkter, tjenester og miljøer slik at de er tilgjengelige og brukbare for flest mulig, uavhengig av alder, evner eller funksjonsnedsettelser – uten behov for spesialtilpasninger"
        ],
        correct: 3
    },
    {
        topic: 'mmi',
        question: "Nevn de syv prinsippene for universell utforming (Center for Universal Design).",
        options: [
            "1. Like muligheter for alle. 2. Fleksibel i bruk. 3. Enkel og intuitiv i bruk. 4. Forståelig informasjon. 5. Toleranse for feil. 6. Lav fysisk anstrengelse. 7. Størrelse og plass for tilgang og bruk",
            "1. Likeverdig tilgang. 2. Konsistent utforming. 3. Enkel navigasjon. 4. Tydelig informasjon. 5. Forutsigbar atferd. 6. Feilforebygging. 7. Tilgjengelighet på tvers av kontekster",
            "1. Universell tilgang. 2. Enkel og oversiktlig navigasjon. 3. Høy fargekontrast. 4. Skalerbar skriftstørrelse. 5. Tastaturnavigering. 6. Teksting av lyd og video. 7. Alt-tekst på alle bilder",
            "1. Lik utforming for alle. 2. Enkel og effektiv bruk. 3. Forståelig informasjon. 4. Sikker og trygg interaksjon. 5. Fleksibel tilpasning. 6. Bærekraftig design. 7. Skalerbar løsning"
        ],
        correct: 0
    },
    {
        topic: 'mmi',
        question: "Hva er WCAG, og hva kreves i Norge?",
        options: [
            "WCAG er retningslinjer for tilgjengelig webinnhold. I Norge er det lovfestet at IKT-løsninger skal oppfylle 35 av 61 suksesskriterier i WCAG 2.0",
            "WCAG er en norsk nasjonal standard utviklet av Digitaliseringsdirektoratet som krever fullstendig tekstalternativ for alt innhold på nettet",
            "WCAG er en EU-regulering fra 2018 som krever at alle offentlige og private nettsteder i Europa oppnår 100 % tilgjengelighet for samtlige brukere",
            "WCAG er en internasjonal sertifiseringsordning der virksomheter søker om godkjentstempel for digital tilgjengelighet, med nivåene A, AA og AAA"
        ],
        correct: 0
    },
    {
        topic: 'mmi',
        question: "Hvilke argumenter kan brukes for å overbevise en motvillig utvikler om å lage universelt utformet design?",
        options: [
            "Universell utforming er kun lovpålagt for offentlige virksomheter; private aktører kan velge dette frivillig men har ingen plikt eller sanksjoner",
            "Datatilsynet anbefaler det, og manglende tilgjengelighet kan gi dårlig omdømme, men det er ingen juridiske eller økonomiske konsekvenser i praksis",
            "Lovpålagt (Diskriminerings- og tilgjengelighetsloven), mer inkluderende, enklere for alle, bedre mobiltilpasning, bedre søkemotorsynlighet og mer lønnsomt på sikt",
            "Universell utforming øker designkostnadene og gir ingen målbar brukernytte; det er primært et politisk krav som sjelden håndheves overfor private utviklere"
        ],
        correct: 2
    },
    {
        topic: 'personvern',
        question: "Hvilke rettigheter gir GDPR til enkeltpersoner?",
        options: [
            "Rett til anonym nettbruk, rett til å nekte profilering, rett til gratis datakopier, rett til å kreve sletting av alle cookies, rett til innsyn i algoritmer, rett til erstatning og rett til kryptert lagring",
            "Rett til innsyn og retting av egne opplysninger, men kun for sensitive kategorier som helse, politisk tilhørighet og fagforeningsmedlemskap",
            "Rett til å bli informert, rett til innsyn, rett til retting, rett til å bli glemt, rett til begrensning, rett til å protestere, og rett til dataportabilitet",
            "Rett til full anonymitet, rett til kryptert kommunikasjon, rett til å nekte all digital sporing, og rett til å kreve sletting av all netthistorikk"
        ],
        correct: 2
    },
    {
        topic: 'personvern',
        question: "Finnes det unntak fra GDPR-rettighetene? Gi eksempler.",
        options: [
            "Ja – unntak kan gjelde ved juridiske forpliktelser, beskyttelse av andres rettigheter, offentlig og nasjonal sikkerhet, eller forskning; databehandleren må dokumentere at unntaket gjelder",
            "Nei – GDPR er absolutt og gir ubetingede rettigheter uten noen form for unntak for alle privatpersoner bosatt i EU/EØS-området",
            "Ja – alle virksomheter kan selv fastsette unntak, forutsatt at de informerer tydelig om dette i sin offentlige personvernerklæring",
            "Ja – unntak gjelder automatisk for alle virksomheter med færre enn 50 ansatte eller under 10 millioner kroner i omsetning"
        ],
        correct: 0
    },
    {
        topic: 'personvern',
        question: "Hva er de viktigste GDPR-hensynene ved deling av sensitive brukerdata mellom to applikasjoner?",
        options: [
            "Det er tilstrekkelig å inkludere en standard personvernerklæring; øvrige GDPR-hensyn er ikke obligatoriske ved deling mellom egne tjenester i samme konsern",
            "Brukerne må informeres tydelig, data slettes ved avsluttet samarbeid, dataminimering, beredskapsplan for sikkerhetsbrudd, og særskilt policy for sensitiv data som lokasjon",
            "Data kan deles fritt mellom apper fra samme konsern uten ekstra tillatelser, så lenge begge tjenestene er registrert i Datatilsynets behandlingsprotokoll",
            "GDPR-kravene er automatisk oppfylt dersom dataoverføringen skjer via kryptert HTTPS og begge appene er registrert hos samme databehandler"
        ],
        correct: 1
    },
    {
        topic: 'personvern',
        question: "Beskriv Datatilsynets anbefalte prosess for å ivareta personvern gjennom systemutviklingens livssyklus.",
        options: [
            "1. Juridisk godkjenning. 2. Kryptering av all data. 3. Anonymisering av brukerprofiler. 4. Sletting av unødvendig data. 5. Publisering av personvernpolicy. 6. Inngå databehandleravtaler. 7. Årlig sikkerhetsrevisjon",
            "1. Registrere behandling hos Datatilsynet. 2. Innhente samtykke fra alle brukere. 3. Kryptere all lagret data. 4. Gjennomføre PIA. 5. Slette data etter bruk. 6. Varsle brudd innen 72 timer. 7. Fornye samtykke hvert år",
            "1. Opplæring. 2. Krav (personvern inn i kravspesifikasjonen). 3. Design. 4. Koding (sikker kode). 5. Testing. 6. Release (sikkerhetsvurdering og beredskapsplan). 7. Vedlikehold",
            "1. Kartlegge persondata. 2. Minimere datainnsamling. 3. Sikre lagringsløsning. 4. Etablere tilgangskontroll. 5. Dokumentere behandlingsgrunnlag. 6. Opprette klagekanal. 7. Rapportere til styre hvert kvartal"
        ],
        correct: 2
    },
    {
        topic: 'personvern',
        question: "Hva er ingeniøretikk, og hva regulerer programvareutviklerens etiske ansvar?",
        options: [
            "Ingeniøretikk gjelder utelukkende for fysiske ingeniørdisipliner; programvareutvikling reguleres av lisensavtaler og arbeidskontrakter, ikke av ingeniøretiske retningslinjer",
            "Etisk ansvar bestemmes av arbeidsgiver og kontrakt; utvikleren er ikke personlig ansvarlig for konsekvensene av produkter de har bygget på oppdrag",
            "Etisk ansvar reguleres kun av GDPR og NITO; det finnes ingen internasjonale standarder eller uskrevne faglige normer som påvirker programvareutvikleres handlingsrom",
            "Ingeniøretikk handler om moralske forventninger til yrket; reguleres av lovregulerte standarder, yrkesetiske retningslinjer (f.eks. NITO, IEEE) og uskrevne regler; ingeniører har ansvar for samfunnskonsekvensene av teknologien de utvikler"
        ],
        correct: 3
    },
    {
        topic: 'personvern',
        question: "Hva er kravene til gyldig samtykke under GDPR?",
        options: [
            "Samtykke er gyldig dersom det er innebygd i vilkår og betingelser som brukeren godtar ved installasjon; ingen ytterligere formaliteter er påkrevd",
            "Samtykke er gyldig dersom det er frivillig, spesifikt, informert og utvetydig; det skal gis aktivt (ikke forhåndsavkryssede bokser); brukeren kan trekke det tilbake når som helst",
            "Stilltiende aksept er tilstrekkelig; dersom brukeren ikke eksplisitt avviser datainnsamling innen 30 dager, regnes det som gyldig samtykke under GDPR",
            "Samtykke er kun nødvendig for sensitive kategorier; for vanlig brukeratferd og demografiske data er samtykke ikke påkrevd under GDPR"
        ],
        correct: 1
    },
    {
        topic: 'personvern',
        question: "Hva er prinsippet om dataminimering, og hvorfor er det viktig?",
        options: [
            "Dataminimering handler om å komprimere persondata for å redusere lagringskostnader; all data beholdes men lagres i komprimert og kryptert format",
            "Dataminimering betyr at data kun lagres lokalt på brukerens enhet, aldri sentralt på servere; dette gir brukeren full kontroll over egne opplysninger",
            "Kun personopplysninger som er nødvendige for det spesifikt angitte formålet samles inn og lagres; begrenser skadeomfang ved databrudd og reduserer juridisk risiko",
            "Dataminimering er et frivillig prinsipp anbefalt av bransjeorganisasjoner; det er ikke et eksplisitt juridisk krav under GDPR"
        ],
        correct: 2
    },
    {
        topic: 'personvern',
        question: "Hva menes med Privacy by Design?",
        options: [
            "Privacy by Design er et brukergrensesnittmønster der personverninnstillinger plasseres tydelig synlig på alle sider for enkel tilgang og brukerkontroll",
            "Privacy by Design er en GDPR-sertifiseringsordning der tredjeparter verifiserer at et system oppfyller personvernkravene ved lansering",
            "Privacy by Design betyr at personvern implementeres som kryptering i nettverkslaget; det er primært et drifts- og infrastrukturtiltak",
            "Personvern bygges inn som standardinnstilling i systemets arkitektur fra starten; tekniske og organisatoriske tiltak implementeres proaktivt, ikke som et etterpåklok tillegg"
        ],
        correct: 3
    },
    {
        topic: 'personvern',
        question: "Hvilke kategorier av personopplysninger regnes som sensitive under GDPR og krever ekstra beskyttelse?",
        options: [
            "Navn, e-postadresse og telefonnummer regnes som sensitive siden de direkte identifiserer enkeltpersoner og kan misbrukes til identitetstyveri",
            "Rase/etnisitet, politisk oppfatning, religiøs overbevisning, fagforeningsmedlemskap, genetiske og biometriske data, helsedata og data om seksuell orientering",
            "Alle personopplysninger er like sensitive under GDPR; det finnes ingen formell todeling mellom ordinære og sensitive kategorier i forordningen",
            "IP-adresser, nettleserhistorikk og GPS-lokasjon er de eneste kategoriene som er eksplisitt definert som sensitive i GDPR artikkel 9"
        ],
        correct: 1
    },
    {
        topic: 'personvern',
        question: "Hva er konsekvensene av å bryte GDPR?",
        options: [
            "GDPR-brudd medfører kun krav om offentlig unnskyldning og forpliktelse til å utbedre systemet; det er ingen direkte bøter eller strafferettslige sanksjoner",
            "Bøter kan være opp til 4 % av global årsomsetning eller 20 millioner euro; i tillegg kan det komme krav om skadeerstatning til berørte, og omdømmeskade er en alvorlig konsekvens",
            "GDPR-sanksjoner gjelder kun for virksomheter med mer enn 250 ansatte; mindre bedrifter er unntatt fra straffebestemmelsene i forordningen",
            "Konsekvensene er utelukkende av nasjonal karakter; Datatilsynet i hvert land fastsetter egne bøtesatser uten felles europeisk håndhevingsmekanisme"
        ],
        correct: 1
    },
    {
        topic: 'metodikk',
        question: "Hva er de fire verdiene i det Agile Manifesto?",
        options: [
            "1. Individer og interaksjoner fremfor prosesser og verktøy. 2. Fungerende programvare fremfor dokumentasjon. 3. Kundesamarbeid fremfor kontraktsforhandlinger. 4. Reagere på endring fremfor å følge en plan",
            "1. Effektivitet fremfor kodekvalitet. 2. Automatisering fremfor manuell testing. 3. Rask levering fremfor grundig planlegging. 4. Teknologivalg fremfor menneskelige ressurser",
            "1. Grundig dokumentasjon fremfor kode. 2. Detaljert planlegging fremfor eksperimentering. 3. Kontraktsfestede krav fremfor tett samarbeid. 4. Definerte prosesser fremfor individers vurdering",
            "1. Rask og hyppig levering av ny funksjonalitet. 2. Høy kodekvalitet og lav teknisk gjeld. 3. Lav utviklingskostnad per sprint. 4. Kontinuerlig unngåing av teknisk gjeld gjennom refaktorering"
        ],
        correct: 0
    },
    {
        topic: 'metodikk',
        question: "Hva menes med 'Reagere på endring fremfor å følge en plan' i smidig utvikling?",
        options: [
            "Smidige prosjekter opererer uten noen form for overordnet plan; alle beslutninger om prioritering og retning tas løpende og improvisert gjennom prosjektet",
            "Evnen til å respondere effektivt på endrede krav og forutsetninger er viktigere enn å slavisk følge en forhåndsbestemt plan – kravene utvikles og raffineres underveis",
            "Planer utarbeides grundig ved prosjektstart og følges nøye til mål; de oppdateres aldri underveis uansett hva som skjer i omgivelsene",
            "Smidige team kan kun avvike fra den opprinnelige planen dersom samtlige interessenter eksplisitt har godkjent endringen skriftlig"
        ],
        correct: 1
    },
    {
        topic: 'metodikk',
        question: "Hva betyr 'Think big, act small, fail fast, learn rapidly' (Poppendieck / Lean)?",
        options: [
            "Think big: planlegg alle detaljer fra start. Act small: begrens teamstørrelsen. Fail fast: ha en rask CI/CD-pipeline. Learn rapidly: bruk kun automatisert testing",
            "Prinsippet er et designmønster fra distribuerte systemer og handler om feiltoleransemekanismer i storskala mikroservice-arkitekturer",
            "Think big: tenk på helheten. Act small: korte iterasjoner med rask feedback. Fail fast: tidlige feil er billige og lette å rette. Learn rapidly: kontinuerlig tilbakemelding og læring gjennom hele prosessen",
            "Think big betyr at man alltid starter med fullstendig scope og komplett kravspesifikasjon; de øvrige delene handler om feilhåndtering og overvåking i produksjonsmiljøer"
        ],
        correct: 2
    },
    {
        topic: 'metodikk',
        question: "I hvilke faser av et prosjekt bør de ulike typene dokumentasjon skrives, og hva er fordeler/ulemper med tidlig vs. sen skriving?",
        options: [
            "All dokumentasjon skrives komplett i oppstartsfasen og godkjennes av alle interessenter før utvikling starter; dette sikrer at ingenting mangler underveis",
            "I smidig utvikling produseres aldri formell dokumentasjon; kildekoden og automatiske tester er den eneste autoritative kilden til sannhet om systemet",
            "All prosjektdokumentasjon skrives i etterkant, etter at systemet er ferdig utviklet og godkjent; da er informasjonen mest presis og komplett",
            "Visjonsdokument skrives tidlig, kravdokumentasjon løpende (spesielt tidlig), systemdokumentasjon ferdigstilles typisk sent; tidlig skriving gir retning men kan bli utdatert, sen skriving er mer presis men kan mangle underveis"
        ],
        correct: 3
    },
    {
        topic: 'metodikk',
        question: "Hvilke seremonier (møter) finnes i Scrum? Beskriv hvert møte og hvem som deltar.",
        options: [
            "Sprint Planning (PO + team planlegger sprinten), Daily Standup (15 min daglig), Sprint Review (demo for interessenter), Sprint Retrospective (teamet evaluerer prosessen)",
            "Ukentlig statusmøte med hele organisasjonen, månedlig designreview med designteam, kvartalsvis retrospektiv med ledelsen, og halvårlig demo for kunder og eiere",
            "Kickoff-møte ved prosjektstart, designreview etter hvert sprint, kodegjennomgang med arkitekt, og releasemøte med driftsavdelingen etter hvert kvartal",
            "Backlog Refinement med PO og arkitekt, Sprint Demo for sluttbrukere, ukentlig teambuilding, og en strategisk stakeholder-oppdatering for styret hvert kvartal"
        ],
        correct: 0
    },
    {
        topic: 'metodikk',
        question: "Hva er forskjellen på Sprint Review og Sprint Retrospective?",
        options: [
            "Sprint Review planlegger og estimerer oppgavene for neste sprint; Sprint Retrospective er møtet der teamet demonstrerer ferdig produkt for kunden",
            "Sprint Review evaluerer leveransen/produktet og involverer interessenter; Sprint Retrospective evaluerer teamprosessen, er kun for utviklingsteamet, og handler om å forbedre neste sprint",
            "Sprint Review og Sprint Retrospective er to alternative navn på det samme avsluttende møtet som holdes på slutten av hver sprint for hele teamet inkludert PO",
            "Sprint Review er et kort daglig statusmøte; Sprint Retrospective er et større møte som kun holdes ved slutten av hele prosjektet for å dokumentere erfaringer"
        ],
        correct: 1
    },
    {
        topic: 'metodikk',
        question: "Hva er forskjellen mellom Scrum og Kanban?",
        options: [
            "Scrum og Kanban følger de samme prinsippene, men med ulike navn og terminologi tilpasset ulike bransjer og virksomhetsstørrelser",
            "Kanban er en strengere og mer formalisert metodikk enn Scrum, med fler obligatoriske roller, seremonier og dokumentasjonskrav per iterasjon",
            "Scrum er tidsboksbasert med faste sprinter, roller og seremonier; Kanban er flytbasert uten faste iterasjoner, bruker WIP-grenser og fokuserer på kontinuerlig leveranse",
            "Scrum er utviklet utelukkende for programvareutvikling, mens Kanban er et logistikkverktøy som kun brukes i produksjon og varehandel"
        ],
        correct: 2
    },
    {
        topic: 'metodikk',
        question: "Hvordan utfyller Use Case-modellering og domenemodellering hverandre?",
        options: [
            "Use Case og domenemodell er to ulike navn på det samme UML-diagrammet; begge beskriver systemets funksjonelle krav fra brukerens perspektiv",
            "Use Case brukes utelukkende etter at systemet er implementert, som et dokumentasjonsverktøy for å beskrive eksisterende funksjonalitet",
            "I moderne smidig utvikling har domenemodellen erstattet Use Case som primær modelleringsteknikk; Use Case-diagrammer er ansett som foreldet",
            "Use Case viser dynamikken (hvem gjør hva), domenemodellen gir et statisk bilde av konsepter og sammenhenger; til sammen gir de dynamikk + struktur"
        ],
        correct: 3
    },
    {
        topic: 'metodikk',
        question: "Hva er hensikten med et visjonsdokument i et smidig prosjekt?",
        options: [
            "Visjonsdokumentet beskriver prosjektets formål, mål og omfang; gir felles forståelse blant interessenter og retning for arbeidet; kan oppdateres underveis",
            "Visjonsdokumentet er en juridisk bindende kontrakt som fastsetter ansvar, leveranser og tidsmessige forpliktelser mellom utvikler og oppdragsgiver",
            "Visjonsdokumentet er et detaljert teknisk design-dokument som beskriver systemarkitekturen, komponentstrukturen og databasedesignet i detalj",
            "Visjonsdokumentet erstatter kravspesifikasjonen i smidige prosjekter og er den eneste og fullstendige beskrivelsen av alle funksjonelle krav"
        ],
        correct: 0
    },
    {
        topic: 'metodikk',
        question: "Hva er hensikten med risikoanalyse i visjonsdokumentet?",
        options: [
            "Risikoanalyse brukes for å fastsette forsikringskrav, juridisk ansvarsfordeling og garantibestemmelser i kontrakten mellom oppdragsgiver og leverandør",
            "Risikoanalysen identifiserer potensielle risikoer, prioriterer dem, og bidrar til risikoreduserende tiltak; gir bedre beslutningsgrunnlag og øker prosjektets robusthet",
            "Risikoanalyse er en post-mortem-aktivitet som gjennomføres etter et prosjekt for å identifisere årsaker til forsinkelser og avvik fra plan",
            "Risikoanalyse er et verktøy for å estimere og budsjettere prosjektkostnader; den brukes primært som grunnlag for pristilbud og økonomirapportering"
        ],
        correct: 1
    },
    {
        topic: 'testing',
        question: "Hva er forskjellen mellom en stresstest og en spike-test?",
        options: [
            "Stresstest: avdekker sikkerhetssårbarheter i kryptering; spike-test: måler systemets cold-start-tid og oppstartstid under press",
            "Stresstest og spike-test er synonyme begreper som begge måler systemets absolutte maksimale kapasitetsgrense under vedvarende last",
            "Stresstest: tester jevn og vedvarende last over tid; spike-test: tester plutselig, kortvarig last – f.eks. ved påmelding til populære arrangementer",
            "Stresstest: tester enkeltkomponenter i isolasjon fra resten; spike-test: tester hele den integrerte løsningen fra ende til ende"
        ],
        correct: 2
    },
    {
        topic: 'testing',
        question: "Hva bør man gjøre for å forsikre seg om at systemet tåler forventet last?",
        options: [
            "Bruk elastisk skyinfrastruktur som automatisk skaleres; da kan man skalere opp umiddelbart hvis systemet svikter, uten behov for forhåndstesting",
            "Gjennomfør ytelsestesting og lastmålinger kun rett etter lansering i produksjon, basert på faktisk brukeratferd og virkelige trafikkdata",
            "Test utelukkende mot forventet gjennomsnittlig normalbelastning; ekstremtilfeller og plutselige topper er ikke representativt for reell systembruk",
            "Finn forventet last, test i produksjonslikt miljø, identifiser hva som feiler først, og vurder hva som kan skaleres opp; bruk stresstest for jevn last og spike-test for plutselig last"
        ],
        correct: 3
    },
    {
        topic: 'testing',
        question: "Hvordan henger kontinuerlig integrasjon (CI) og smidig utvikling sammen?",
        options: [
            "CI muliggjør hyppige releaser; hyppige releaser reduserer risikoen for store feil fordi endringene (deltaen) er liten og det er enkelt å rulle tilbake; uten CI er hyppige releaser nesten umulig",
            "CI er et verktøy som automatisk genererer dokumentasjon og erstatter behovet for manuell kodereview og dedikert QA-team i smidige prosjekter",
            "CI er et konsept fra tradisjonell fossefallsutvikling for å samle alle utviklernes endringer i én stor release-pakke ved prosjektslutt",
            "CI er et system som automatisk og uten menneskelig involvering deployer kode fra utviklermiljøet direkte videre til produksjonsmiljøet"
        ],
        correct: 0
    },
    {
        topic: 'testing',
        question: "Hvor mye testing er nok, og hvordan prioriterer man hva som skal testes?",
        options: [
            "100 % kodedekning er alltid det eneste akseptable kvalitetsmålet; alt annet er en kompromiss som ikke bør aksepteres i profesjonell systemutvikling",
            "Ingen fasit – risk-poker brukes til å prioritere testinnsats basert på risiko; i smidig utvikling med CI kan man teste mindre fordi endringene er små og rollback er enkelt",
            "Testomfanget bestemmes av prosjektets tidsbudsjett alene; det er alltid tilstrekkelig å teste den mest brukte funksjonaliteten ut ifra kjente brukerscenarioer",
            "Man bør alltid prioritere 80 % automatisert og 20 % manuell testing; dette er bransjestandarden som gjelder uavhengig av prosjektets risikoprofil"
        ],
        correct: 1
    },
    {
        topic: 'testing',
        question: "Hva er TDD (Test Driven Development), og hvordan fungerer det?",
        options: [
            "TDD er en praksis der dedikerte QA-ingeniører skriver alle tester etter at utviklerne har ferdigstilt og levert koden til testmiljøet",
            "TDD er en kategori av testverktøy som Selenium og JUnit; det er ikke en utviklingsmetodikk, men et sett med rammeverk for automatisert testing",
            "TDD er en test-first-tilnærming: skriv en test som feiler → skriv akkurat nok kode til at testen passerer → refaktorer; sikrer høy testdekning og at koden gjør det den skal",
            "TDD er en metodikk utelukkende beregnet på systemtesting og akseptansetesting; den er ikke egnet for enhetstesting av enkeltfunksjoner"
        ],
        correct: 2
    },
    {
        topic: 'testing',
        question: "Hva er BDD (Behavior Driven Development), og hvordan skiller det seg fra TDD?",
        options: [
            "BDD er identisk med TDD; begge bruker Gherkin-syntaks og feature-filer, involverer de samme rollene, og produserer de samme typene automatiserte tester",
            "BDD er en metode for ytelsestesting der atferd under belastning beskrives i naturlig språk; den brukes primært i kombinasjon med stresstesting",
            "BDD er en tilnærming der alle tester skrives av forretningsanalytikere alene, uten involvering fra utviklere; testene kjøres manuelt av QA-teamet etter leveranse",
            "BDD fokuserer på akseptansetester fra sluttbrukerens perspektiv, involverer utvikler, tester og PO, bruker Gherkin-språk i feature-filer, og tester oppførsel på et høyere nivå enn TDD"
        ],
        correct: 3
    },
    {
        topic: 'testing',
        question: "Hva er forskjellen mellom enhetstesting og integrasjonstesting, og hvordan utfyller de hverandre?",
        options: [
            "Enhetstesting tester individuelle komponenter isolert (f.eks. enkeltfunksjoner); integrasjonstesting tester samspillet mellom komponenter; de utfyller hverandre ved å finne feil på ulike nivåer",
            "Enhetstesting er en type ende-til-ende-test som dekker hele systemflyten; integrasjonstesting er en smalere test som kun verifiserer databasetilkobling og datalag",
            "Enhetstesting og integrasjonstesting er synonyme begreper som brukes om hverandre og dekker de samme aspektene av systemet",
            "Integrasjonstesting utføres alltid manuelt av et dedikert QA-team; enhetstesting er aldri automatisert og gjøres ad hoc av den enkelte utvikler"
        ],
        correct: 0
    },
    {
        topic: 'testing',
        question: "Nevn de viktigste testtypene innen systemutvikling.",
        options: [
            "Black box-, white box- og grey box-testing er de tre overordnede kategoriene; alle andre begreper er underkategorier og det er tilstrekkelig å kjenne til disse tre",
            "Enhetstesting, integrasjonstesting, systemtesting, akseptansetesting, regresjonstesting, smoke-testing, eksplorativ testing, destruktiv testing, usability-testing og ytelsestesting",
            "Alpha-testing og beta-testing, gjennomført henholdsvis internt og eksternt, er de to eneste testtypene man trenger for å validere et ferdig system",
            "Automatiserte tester og manuelle tester er de to fundamentale kategoriene; alle andre begreper er kun markedsføring fra testverktøyleverandørene"
        ],
        correct: 1
    },
    {
        topic: 'testing',
        question: "Hvilke testtyper passer best for automatisk testing, og hvilke for manuell testing?",
        options: [
            "All testing bør i dag automatiseres fullt ut; manuell testing er foreldet og systematisk upålitelig siden den introduserer menneskelige feil og inkonsistens",
            "Kun akseptansetester fra BDD-feature-filer kan kjøres automatisk; alle andre testtyper må alltid utføres manuelt av QA-teamet for å gi meningsfulle resultater",
            "Automatisk: enhetstester og regresjonstester (nøyaktige, raske, repeterbare); manuell: smoke-, eksplorativ- og destruktiv testing – krever menneskelig kreativitet",
            "Manuell testing av erfarne testere er alltid mer pålitelig og grundig enn automatiserte tester, og bør foretrekkes når ressurser tillater det"
        ],
        correct: 2
    },
    {
        topic: 'testing',
        question: "Nevn fordeler og utfordringer ved TDD.",
        options: [
            "Fordeler: eliminerer behovet for integrasjonstesting og akseptansetesting. Utfordringer: krever at hele teamet bruker samme programmeringsspråk og testrammeverk",
            "Fordeler: raskere utvikling etter innlæringsperioden. Utfordringer: TDD fungerer ikke med dynamiske språk; krever statisk typing og kompilering for pålitelige resultater",
            "Fordeler: gir høy testdekning av kritiske deler. Utfordringer: passer best for isolerte enheter; lite egnet for integrasjonsnivå der avhengigheter dominerer",
            "Fordeler: bedre kodekvalitet og struktur, høy testdekning, raskere feil-feedback, testene fungerer som dokumentasjon. Utfordringer: bratt lærekurve, økt tidsbruk initialt, testsuiten krever løpende vedlikehold"
        ],
        correct: 3
    },
    {
        topic: 'arkitektur',
        question: "Hva er programvarearkitektur, og nevn tre eksempler på vanlige arkitekturmønstre.",
        options: [
            "Programvarearkitektur er de grunnleggende strukturene og viktigste valgene i et system; eksempler: klient-tjener, tre-lags-arkitektur, Microservices (andre: MVC, SOA, Event-bus, Pipe-filter)",
            "Programvarearkitektur er den visuelle utformingen av brukergrensesnittet; eksempler: responsive design, dark mode og adaptiv layout for mobilenheter og nettbrett",
            "Programvarearkitektur bestemmes automatisk av rammeverket og programmeringsspråket; eksempler: React, Spring Boot og Node.js dikterer arkitekturmønsteret",
            "Programvarearkitektur er kun relevant for storskala systemer med svært høy trafikk; eksempler: Amazon, Netflix og Spotify er de eneste som trenger bevisst arkitekturdesign"
        ],
        correct: 0
    },
    {
        topic: 'arkitektur',
        question: "Hvorfor er det viktig å ta arkitekturvalg tidlig i et systemutviklingsprosjekt?",
        options: [
            "Arkitekturvalg bør alltid tas sent i prosjektet, etter at man har full oversikt over alle funksjonelle og ikke-funksjonelle krav til systemet",
            "Arkitektur handler om fundamentale valg som er vanskelige å endre sent – det kan kreve at store deler av koden skrives om og medføre store kostnader og forsinkelser",
            "Programvarearkitektur kan alltid endres enkelt og kostnadseffektivt underveis i prosjektet; det er en vanlig misforståelse at dette er særlig kostbart",
            "Arkitekturvalg er kun relevante for systemer designet for skyinfrastruktur; lokale systemer krever ingen arkitekturvurdering"
        ],
        correct: 1
    },
    {
        topic: 'arkitektur',
        question: "Hvordan påvirker SOA/Microservices organiseringen av utvikling og drift?",
        options: [
            "SOA og Microservices krever at alle tjenester implementeres i det samme programmeringsspråket og deployes på en felles, sentralisert plattform",
            "DevOps-team er primært et begrep fra tradisjonell monolittisk arkitektur; i Microservices-systemer er rene utviklingsteam uten driftsansvar normen",
            "Uavhengige tjenester kommuniserer via standardiserte protokoller; det har blitt vanlig med tverrfaglige DevOps-team som dekker utvikling, testing og drift for én tjeneste",
            "SOA er en arkitekturstil der én enkelt, sentralisert applikasjonstjener håndterer all forretningslogikk og alle tjenestekall for hele systemet"
        ],
        correct: 2
    },
    {
        topic: 'arkitektur',
        question: "Beskriv prinsippene i lagdelt arkitektur og hvilke lag man typisk deler en applikasjon inn i.",
        options: [
            "Alle lag kan kommunisere fritt med hverandre; typisk: sikkerhetslag → cachelag → prosesseringslag → optimaliseringslag → rapporteringslag",
            "Lagdelt arkitektur og Microservices er synonyme; begge beskriver systemet som separate vertikale tjenester der hvert lag eier sine egne data og deploy-pipelines",
            "Lagdelt arkitektur er eksklusivt for mobilapplikasjoner; typisk lagdeling: native iOS-lag → React Native-lag → JavaScript-lag → REST API-lag → databaselag",
            "Hvert lag har spesialiserte moduler (høy styrke) og kan kun be om tjenester fra laget under (lav kobling); typisk: presentasjonslag → applikasjonslag → forretningslag → databaselag"
        ],
        correct: 3
    },
    {
        topic: 'arkitektur',
        question: "Hva er Microservices-arkitektur?",
        options: [
            "Mange små, selvstendige tjenester der hver gjør én avgrenset oppgave og eier sine egne data; kommuniserer via standardiserte protokoller; kan deployes og skaleres uavhengig",
            "Applikasjonen deles i én frontend-tjeneste for brukergrensesnitt og én backend-tjeneste for forretningslogikk; alle data lagres i en felles relasjonsdatabase",
            "Alle tjenester deler én felles, sentralisert database for å forenkle datakonsistens; deploy skjer samlet for å sikre kompatibilitet mellom tjenestene",
            "Objektorientert programmering der klasser og objekter kapsler inn data og atferd i selvstendige enheter som kommuniserer via metodekall og arv"
        ],
        correct: 0
    },
    {
        topic: 'arkitektur',
        question: "Nevn fire fordeler med Microservices.",
        options: [
            "Enklere integrasjonstesting på tvers av tjenester, lavere infrastrukturkostnad, raskere kald oppstart av applikasjonen, og enklere feilsøking i distribuerte systemer",
            "Skalerbarhet (enkeltjenester skaleres opp ved behov), modularitet (uavhengige team), teknologimangfold (ulike teknologier per tjeneste), økt tilgjengelighet (resten kjører selv om én tjeneste er nede)",
            "Lavere nettverkslatens totalt, enklere administrasjon av delte databaser, redusert systemkompleksitet og bedre sikkerhetsisolasjon gjennom felles autentiseringstjeneste",
            "Lavere total utviklingskostnad enn monolitter, enklere felles kodebase og versjonering, og forbedret sikkerhet gjennom sentralisert autorisasjon og logging"
        ],
        correct: 1
    },
    {
        topic: 'arkitektur',
        question: "Nevn fire ulemper med Microservices.",
        options: [
            "Begrenset teknologivalgfrihet per tjeneste, dårlig verktøystøtte i moderne IDE-er, problemer med kodegjenkjenning på tvers av tjenester og mangel på industristandard for API-kommunikasjon",
            "Høy frontend-kompleksitet, vanskelig å bruke i cloud-miljøer, inkompatibelt med moderne CI/CD-pipelines og begrenset støtte fra containerteknologi som Docker",
            "Utfordrende testing av interaksjoner mellom tjenester, mer komplisert debugging, vanskelig å holde data konsistente på tvers av tjenester, og økt deployment-kompleksitet",
            "Lavere ytelse enn monolitter i alle situasjoner, mangel på støtte i alle større skymiljøer, og tvungen migrering til ny databaseteknologi ved innføring av Microservices"
        ],
        correct: 2
    },
    {
        topic: 'arkitektur',
        question: "Hva menes med 'høy styrke' (high cohesion) i programvaredesign?",
        options: [
            "En komponent har mange avhengigheter til andre moduler og tjenester, noe som gir rik og bred funksjonalitet samlet på ett sted i systemet",
            "En komponent eksekverer raskt og bruker minimalt med CPU og minne under kjøring, noe som gir høy ytelse og effektiv ressursutnyttelse",
            "En komponent er stor og inneholder mye variert funksjonalitet for å minimere totalt antall komponenter og forenkle arkitekturkart",
            "En komponent gjør én klart avgrenset ting og gjør den godt – ett eller få ansvarsområder; gjør komponenten enklere å forstå, endre, gjenbruke og bytte ut"
        ],
        correct: 3
    },
    {
        topic: 'arkitektur',
        question: "Hva menes med 'lave koblinger' (low coupling) i programvaredesign?",
        options: [
            "En komponent har få avhengigheter til andre komponenter; gjør det mulig å endre én uten å påvirke resten; enklere å teste og debugge isolert",
            "Komponentene er tett integrerte og deler intern tilstand for optimal ytelse; lav kobling betyr at overhead fra nettverkskall holdes til et minimum",
            "Lave koblinger er et uønsket designkjennetegn som indikerer dårlig arkitektur og manglende sammenheng; høy kobling er å foretrekke for effektivitet",
            "Lave koblinger refererer til lavt minne- og CPU-forbruk ved eksekvering, og er primært et ytelsesoptimaliseringsbegrep i lavnivåprogrammering"
        ],
        correct: 0
    },
    {
        topic: 'arkitektur',
        question: "Hvorfor er høy styrke og lave koblinger viktig for vedlikeholdbar programvare?",
        options: [
            "Høy styrke gjør det klart hva komponenten gjør og muliggjør gjenbruk; lave koblinger gjør at endringer ikke sprer seg ukontrollert; til sammen gir oversiktlig, testbar og vedlikeholdbar kode",
            "Høy styrke og lave koblinger er to motstridende designmål; man må alltid velge én av dem siden begge ikke kan oppnås i samme komponent",
            "Disse designprinsippene gjelder utelukkende for objektorientert programmering i Java og C#; de er ikke relevante for funksjonell programmering eller mikrotjenester",
            "Lave koblinger fører systematisk til dårligere ytelse og økt nettverkslatens, og bør derfor alltid balanseres mot ytelseskrav i arkitekturdesignet"
        ],
        correct: 0
    },
    {
        topic: 'arkitektur',
        question: "Nevn fordeler med Microservices illustrert med et konkret eksempel (f.eks. et handelssystem med Order-, Fee- og Market-tjeneste).",
        options: [
            "Alle tjenester deler en felles kodebase og versjoneres samlet, noe som gjør gjenbruk av kode og felles biblioteker svært enkelt og oversiktlig",
            "Microservices gir automatisk sterk datakonsistens på tvers av tjenestegrensene uten at utviklerne trenger å implementere ekstra synkroniseringslogikk",
            "Én felles deployment-pipeline håndterer samtlige tjenester simultant, noe som forenkler driftsoperasjoner og reduserer deployment-risiko",
            "Fee-tjenesten kan programmeres i et annet språk; Market-tjenesten kan oppdateres uten å påvirke de andre; én tjeneste kan holdes oppe selv om en annen er nede; enkeltjenester kan skaleres isolert"
        ],
        correct: 3
    },
    {
        topic: 'arkitektur',
        question: "Nevn ulemper med Microservices illustrert med et konkret eksempel.",
        options: [
            "Systemet kan ikke skaleres horisontalt ved hjelp av containerteknologi; dette er en fundamental arkitekturmessig svakhet som krever kompenserende tiltak",
            "Alle tjenester må bruke det samme programmeringsspråket og rammeverket; dette begrenser fleksibiliteten som Microservices ellers lover",
            "Systemet krever alltid ett monolittisk kode-repository; dette begrenser teamautonomi og gjør at endringer i én tjeneste kan blokkere releaser av andre",
            "Vanskelig å identifisere hvilken tjeneste en feil stammer fra; kaotisk med parallelle versjoner av samme tjeneste; testing av krav som spenner over flere tjenester er komplisert"
        ],
        correct: 3
    },
    {
        topic: 'metodikk',
        question: "Hva er de fire grunnleggende prinsippene i smidig (agil) utvikling?",
        options: [
            "1. Problem-based: del store problemer i prioriterte deler. 2. Collaborative: involver alle roller fra start. 3. Iterative: korte iterasjoner. 4. Adaptive progress: tilpass basert på tilbakemelding",
            "1. Grundig dokumentasjon av alle krav. 2. Detaljert planlegging av hele prosjektomfanget. 3. Systematisk testing av all funksjonalitet. 4. Strukturert og kontrollert deployment til produksjon",
            "1. Rask og hyppig leveranse av ny funksjonalitet. 2. Konstant høy kodekvalitet og lav teknisk gjeld. 3. Minimal total kostnad per sprint. 4. Kontinuerlig unngåing av all teknisk gjeld",
            "1. Fullstendig automatisering av repetitive oppgaver. 2. Standardisering av alle prosesser. 3. Spesialisering av roller i teamet. 4. Kontinuerlig optimalisering av systemytelse"
        ],
        correct: 0
    },
    {
        topic: 'testing',
        question: "Hvordan kan TDD og BDD brukes sammen i et utviklingsprosjekt?",
        options: [
            "TDD og BDD er inkompatible og kan ikke eksistere i det samme prosjektet; man må velge én av de to tilnærmingene",
            "TDD sikrer kodekvalitet på enhetsnivå; BDD sikrer at use cases fungerer som forventet fra sluttbrukerens perspektiv; de utfyller hverandre og kan ko-eksistere gjennom hele utviklingsløpet",
            "BDD er en mer moden metodikk som fullstendig erstatter TDD i moderne smidig utvikling; det gir ingen verdi å bruke begge parallelt",
            "TDD og BDD brukes utelukkende for rene backend-systemer; de egner seg ikke for frontend eller ende-til-ende-testing"
        ],
        correct: 1
    }
];
