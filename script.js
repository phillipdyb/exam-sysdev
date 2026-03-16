const allQuestions = [
    {
        // Q1 – MMI
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
        // Q2 – MMI
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
        // Q3 – MMI
        question: "Forklar de seks IxD-prinsippene: synlighet, tilbakemelding, begrensninger, mapping, konsistens og tilbydelser.",
        options: [
            "Synlighet: alt innhold alltid synlig. Tilbakemelding: brukervurderinger i skjema. Begrensninger: begrenser antall innloggede. Mapping: kartlegging av brukerreiser. Konsistens: lik fargeprofil overalt. Tilbydelser: produkttilbud til kunden",
            "Prinsippene stammer fra Norman Doors og handler utelukkende om fysisk produktdesign; de gjelder ikke for digitale brukergrensesnitt eller interaktive systemer",
            "Synlighet: funksjoner og bruk fremgår av UI-et. Tilbakemelding: systemet signaliserer hva som skjer. Begrensninger: hindrer feil ved å begrense interaksjoner. Mapping: intuitiv sammenheng mellom kontroller og resultat. Konsistens: like ting gjøres likt. Tilbydelser: brukeren forstår hvilke handlinger som er mulige",
            "Synlighet, tilbakemelding og begrensninger er de tre kjerneprinsippene; mapping, konsistens og tilbydelser er kun valgfrie støtteretningslinjer for avanserte tilfeller"
        ],
        correct: 2
    },
    {
        // Q4 – MMI
        question: "Hvilke fire typiske trinn inngår i interaksjonsdesignprosessen, og hva kjennetegner prosessen?",
        options: [
            "1. Analysere konkurrenter og marked, 2. Kode løsningen, 3. Markedsføre produktet til brukere, 4. Publisere og vedlikeholde resultatet",
            "1. Skrive detaljert kravspesifikasjon, 2. Designe systemarkitektur, 3. Programmere løsningen ferdig, 4. Gjennomføre testing og godkjenning",
            "1. Gjennomføre brukerundersøkelse, 2. Lage wireframes og mockups, 3. Lansere produktet til markedet, 4. Analysere brukerdata og markedsresultater",
            "1. Definere krav, 2. Designe alternativer, 3. Lage prototyper, 4. Evaluering – trinnene gjentas iterativt"
        ],
        correct: 3
    },
    {
        // Q5 – MMI
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
        // Q6 – MMI
        question: "Bør man basere seg kun på klassiske brukertester ved evaluering av design?",
        options: [
            "Ja – brukertester er den eneste vitenskapelig anerkjente og pålitelige metoden for å avdekke alle typer brukskvalitetsproblemer i et system",
            "Nei – man kombinerer gjerne brukertester med heuristiske evalueringer, pluralistiske gjennomganger og prediktive metoder for et helhetlig bilde",
            "Ja – andre evalueringsmetoder er for kostbare og tidkrevende til å rettferdiggjøres i de aller fleste prosjekter med begrensede ressurser",
            "Nei – klassiske brukertester er unødvendige dersom teamet følger de seks etablerte IxD-prinsippene nøye gjennom hele designprosessen"
        ],
        correct: 1
    },
    {
        // Q7 – MMI
        question: "Nevn minst fem retningslinjer for mobilnettsteddesign.",
        options: [
            "Bruk store animasjoner, parallax-scrolling, auto-play video, komplekse hover-effekter og rike grafiske elementer for å øke brukerengasjement",
            "Prioriter alltid skrivebordsversjonen som primærprodukt, og sørg for at mobilbrukere enkelt kan bytte til den fullstendige versjonen",
            "Begrens funksjonalitet til det viktigste, flat navigasjon, fingervennlige menyer, begrenset tekstinnskriving, alt-tekst på bilder, relative størrelser, unngå unødig grafikk og test på flere enheter",
            "Bruk absolutte pikselverdier for konsistent layout, dype navigasjonshierarkier for full funksjonalitet, og unngå å begrense innholdet"
        ],
        correct: 2
    },
    {
        // Q8 – Universell utforming
        question: "Hva menes med universell utforming?",
        options: [
            "Å lage separate tilleggsversjoner og spesialtilpassede løsninger av produkter for brukere med ulike typer funksjonsnedsettelser og spesielle behov",
            "Å sørge for at alle produkter og tjenester kan brukes på alle typer enheter, operativsystemer og nettlesere uavhengig av produsent",
            "Å standardisere brukergrensesnitt og interaksjonsmønstre slik at de ser og fungerer identisk på tvers av alle digitale plattformer og kontekster",
            "Å utforme produkter, tjenester og miljøer slik at de er tilgjengelige og brukbare for flest mulig, uavhengig av alder, evner eller funksjonsnedsettelser – uten behov for spesialtilpasninger"
        ],
        correct: 3
    },
    {
        // Q9 – Universell utforming
        question: "Nevn de syv prinsippene for universell utforming (Center for Universal Design).",
        options: [
            "1. Like muligheter for alle. 2. Fleksibel i bruk. 3. Enkel og intuitiv i bruk. 4. Forståelig informasjon. 5. Toleranse for feil. 6. Lav fysisk anstrengelse. 7. Størrelse og plass for tilgang og bruk",
            "1. Likestilling og rettferdighet. 2. Sikkerhet for alle grupper. 3. Effektivitet i bruk. 4. Estetisk utforming. 5. Bærekraft og miljøhensyn. 6. Innovasjon og fremtidssikring. 7. Universell tilgjengelighet",
            "1. Universell tilgang for alle. 2. Enkel navigasjon og struktur. 3. Høy fargekontrast. 4. Skalerbar skriftstørrelse. 5. Tastaturnavigering. 6. Teksting av lyd og video. 7. Alt-tekst på alle bilder",
            "1. Lik utforming for alle brukere. 2. Enkel og effektiv bruk. 3. Forståelig informasjon. 4. Sikker og trygg interaksjon. 5. Fleksibel tilpasning. 6. Bærekraftig design. 7. Skalerbar løsning"
        ],
        correct: 0
    },
    {
        // Q10 – Universell utforming
        question: "Hva er WCAG, og hva kreves i Norge?",
        options: [
            "WCAG er retningslinjer for tilgjengelig webinnhold. I Norge er det lovfestet at IKT-løsninger skal oppfylle 35 av 61 suksesskriterier i WCAG 2.0",
            "WCAG er en norsk nasjonal standard utviklet av Digitaliseringsdirektoratet som krever fullstendig tekstalternativ for alt innhold på nettet",
            "WCAG er en EU-regulering fra 2018 som krever at alle offentlige og private nettsteder i Europa oppnår 100 % tilgjengelighet for samtlige brukere",
            "WCAG er en internasjonal sertifiseringsordning administrert av ISO der virksomheter søker om et godkjentstempel for digital tilgjengelighet"
        ],
        correct: 0
    },
    {
        // Q11 – Universell utforming
        question: "Hvilke argumenter kan brukes for å overbevise en motvillig utvikler om å lage universelt utformet design?",
        options: [
            "Universell utforming er kun lovpålagt for offentlige virksomheter som NAV og kommuner; private selskaper kan velge bort dette uten juridiske konsekvenser",
            "Det er primært en etisk anbefaling fra Datatilsynet uten bindende juridiske konsekvenser for de fleste norske virksomheter i privat sektor",
            "Lovpålagt (Diskriminerings- og tilgjengelighetsloven §9 og §11), mer inkluderende, enklere for alle, bedre mobiltilpasning, bedre søkemotorsynlighet, og mer lønnsomt på sikt",
            "Universell utforming reduserer designfriheten, øker utviklingskostnaden og gjør produkter generelt mindre attraktive for primærmålgruppen"
        ],
        correct: 2
    },
    {
        // Q12 – GDPR
        question: "Hvilke rettigheter gir GDPR til enkeltpersoner?",
        options: [
            "Rett til gratis datatjenester, rett til full anonymitet på internett, rett til å nekte alle cookies, og automatisk rett til erstatning ved alle typer personvernsbrudd",
            "Rett til innsyn og retting av egne opplysninger, men kun begrenset til sensitive kategorier som helseopplysninger og politisk tilhørighet",
            "GDPR gir utelukkende virksomheter rettigheter og plikter knyttet til behandling av personopplysninger, ikke rettigheter til enkeltpersoner",
            "Rett til å bli informert, rett til innsyn, rett til retting, rett til å bli glemt, rett til begrensning, rett til å protestere, og rett til dataportabilitet"
        ],
        correct: 3
    },
    {
        // Q13 – GDPR
        question: "Finnes det unntak fra GDPR-rettighetene? Gi eksempler.",
        options: [
            "Ja – unntak kan gjelde ved juridiske forpliktelser, beskyttelse av andres rettigheter, offentlig og nasjonal sikkerhet, eller forskning; databehandleren må dokumentere at unntaket gjelder",
            "Nei – GDPR er absolutt og gir ubetingede rettigheter uten noen form for unntak for alle privatpersoner bosatt i EU/EØS-området",
            "Ja – alle virksomheter kan selv fastsette unntak fra GDPR-rettighetene, forutsatt at de informerer tydelig om dette i sin offentlige personvernerklæring",
            "Ja – unntak gjelder automatisk og uten søknadsprosess for alle virksomheter med færre enn 50 ansatte eller under 10 millioner kroner i omsetning"
        ],
        correct: 0
    },
    {
        // Q14 – GDPR
        question: "Hva er de viktigste GDPR-hensynene ved deling av sensitive brukerdata mellom to applikasjoner?",
        options: [
            "Det er tilstrekkelig å inkludere en standard personvernerklæring i appens vilkår og betingelser som begge parter aksepterer ved installasjon",
            "Brukerne må informeres tydelig, data slettes ved avsluttet samarbeid, dataminimering, beredskapsplan for sikkerhetsbrudd, og særskilt policy for sensitiv data som lokasjon",
            "Data kan deles fritt mellom apper og tredjeparter så lenge begge appene er registrert og opererer innenfor det samme landet i EU/EØS",
            "GDPR gjelder kun for opplysninger som er eksplisitt klassifisert og merket som sensitive av databehandleren, ikke for generell brukeratferd og loggdata"
        ],
        correct: 1
    },
    {
        // Q15 – GDPR
        question: "Beskriv Datatilsynets anbefalte prosess for å ivareta personvern gjennom systemutviklingens livssyklus.",
        options: [
            "Personvern håndteres utelukkende i release-fasen ved å gjennomføre en formell Privacy Impact Assessment og innhente juridisk godkjenning",
            "1. Juridisk godkjenning, 2. Kryptering av all data, 3. Anonymisering av brukerprofiler, 4. Sletting av unødvendig data, 5. Publisering av personvernpolicy",
            "1. Opplæring, 2. Krav (personvern inn i kravspesifikasjonen), 3. Design, 4. Koding (sikker kode), 5. Testing, 6. Release (sikkerhetsvurdering og beredskapsplan), 7. Vedlikehold",
            "Personvern er utelukkende IT-sikkerhetsavdelingens ansvar og håndteres som en separat prosess helt uavhengig av systemutviklingsprosessen"
        ],
        correct: 2
    },
    {
        // Q16 – Etikk
        question: "Hva er ingeniøretikk, og hva regulerer programvareutviklerens etiske ansvar?",
        options: [
            "Ingeniøretikk gjelder utelukkende for fysiske ingeniørdisipliner som bygg og maskin; programvareutvikling har egne etiske rammer som ikke overlapper med tradisjonell ingeniøretikk",
            "Programvareutviklere har kun etisk og juridisk ansvar overfor sin egen arbeidsgiver og betalende kunder; samfunnet generelt er ikke en del av ansvarsforholdet",
            "Etisk ansvar i programvareutvikling er utelukkende regulert av GDPR, personvernlovgivning og kontrakter; det finnes ingen bransjeorganisasjon som setter bindende etiske standarder",
            "Ingeniøretikk handler om moralske forventninger til ingeniøryrket; reguleres av lovregulerte standarder, yrkesetiske retningslinjer (f.eks. NITO) og uskrevne regler; ingeniører har ansvar for samfunnskonsekvensene av teknologien de utvikler"
        ],
        correct: 3
    },
    {
        // Q17 – Smidig
        question: "Hva er de fire verdiene i det Agile Manifesto?",
        options: [
            "1. Individer og interaksjoner fremfor prosesser og verktøy. 2. Fungerende programvare fremfor dokumentasjon. 3. Kundesamarbeid fremfor kontraktsforhandlinger. 4. Reagere på endring fremfor å følge en plan",
            "1. Effektivitet fremfor kodekvalitet. 2. Automatisering fremfor manuell testing. 3. Rask levering fremfor grundig planlegging. 4. Teknologivalg fremfor menneskelige ressurser og samarbeid",
            "1. Grundig dokumentasjon fremfor kode. 2. Detaljert planlegging fremfor eksperimentering. 3. Kontraktsfestede krav fremfor tett samarbeid. 4. Definerte prosesser fremfor individers vurdering",
            "1. Rask og hyppig levering av ny funksjonalitet til kunder. 2. Høy kodekvalitet og lav teknisk gjeld. 3. Lav utviklingskostnad per sprint. 4. Kontinuerlig unngåing av teknisk gjeld gjennom refaktorering"
        ],
        correct: 0
    },
    {
        // Q18 – Smidig
        question: "Hva menes med 'Reagere på endring fremfor å følge en plan' i smidig utvikling?",
        options: [
            "Smidige prosjekter opererer uten noen form for overordnet plan; alle beslutninger om prioritering og retning tas løpende og improvisert gjennom prosjektet",
            "Evnen til å respondere effektivt på endrede krav og forutsetninger er viktigere enn å slavisk følge en forhåndsbestemt plan – kravene utvikles og raffineres underveis",
            "Planer utarbeides grundig ved prosjektstart og følges nøye til mål; de oppdateres aldri underveis uansett hva som skjer i omgivelsene",
            "Smidige team kan kun avvike fra den opprinnelige planen dersom samtlige interessenter og sponsor eksplisitt har godkjent endringen skriftlig"
        ],
        correct: 1
    },
    {
        // Q19 – Smidig
        question: "Hva betyr 'Think big, act small, fail fast, learn rapidly' (Poppendieck / Lean)?",
        options: [
            "Think big: planlegg alle detaljer fra start og dokumenter grundig. Act small: begrens teamstørrelsen for å øke effektiviteten. Fail fast: ha en rask CI/CD-pipeline. Learn rapidly: bruk kun automatisert testing",
            "Prinsippet er et designmønster fra distribuerte systemer og handler utelukkende om feiltoleransemekanismer i storskala mikroservice-arkitekturer",
            "Think big: tenk på helheten. Act small: korte iterasjoner med rask feedback. Fail fast: tidlige feil er billige og lette å rette. Learn rapidly: kontinuerlig tilbakemelding og læring gjennom hele prosessen",
            "Think big betyr at man alltid starter med fullstendig scope og komplett kravspesifikasjon; de øvrige delene handler om feilhåndtering og overvåking i produksjon"
        ],
        correct: 2
    },
    {
        // Q20 – Smidig
        question: "I hvilke faser av et prosjekt bør de ulike typene dokumentasjon skrives, og hva er fordeler/ulemper med tidlig vs. sen skriving?",
        options: [
            "All dokumentasjon, inkludert krav, arkitektur og brukerveiledninger, skrives grundig i oppstartsfasen og oppdateres ikke underveis i prosjektet",
            "I smidig utvikling produseres aldri formell dokumentasjon utover kode og kommentarer; kildekoden er alltid den eneste autoritative kilden til sannhet",
            "All prosjektdokumentasjon, inkludert kravspesifikasjon og arkitekturbeskrivelse, skrives kun etter at systemet er ferdig og godkjent for produksjon",
            "Visjonsdokument skrives tidlig, kravdokumentasjon løpende (spesielt tidlig), systemdokumentasjon ferdigstilles typisk sent; tidlig skriving gir retning men kan bli utdatert, sen skriving er mer presis men kan mangle underveis"
        ],
        correct: 3
    },
    {
        // Q21 – Scrum
        question: "Hvilke seremonier (møter) finnes i Scrum? Beskriv hvert møte og hvem som deltar.",
        options: [
            "Sprint Planning (PO + team planlegger sprinten), Daily Standup (15 min daglig), Sprint Review (demo for interessenter), Sprint Retrospective (teamet evaluerer prosessen)",
            "Sprint Planning med hele organisasjonen, Weekly Review med ledelsen, Monthly Retrospective for styret, og Quarterly Demo for kunder og investorer",
            "Kickoff-møte ved prosjektstart, Design Review med designteam, Code Review med utviklere, og Release Meeting med driftsavdelingen",
            "Backlog Refinement med PO og arkitekt, Sprint Demo for sluttbrukere, Team Building på månedsbasis, og Stakeholder Update for styret og eiere"
        ],
        correct: 0
    },
    {
        // Q22 – Scrum
        question: "Hva er forskjellen på Sprint Review og Sprint Retrospective?",
        options: [
            "Sprint Review brukes til å planlegge og estimere oppgavene i neste sprint, mens Sprint Retrospective er møtet der teamet demonstrerer ferdig produkt for kunden og interessentene",
            "Sprint Review evaluerer leveransen/produktet og involverer interessenter; Sprint Retrospective evaluerer teamprosessen, er kun for utviklingsteamet, og handler om å forbedre neste sprint",
            "Sprint Review og Sprint Retrospective er to alternative navn på det samme avsluttende møtet som holdes på slutten av hver sprint for hele teamet",
            "Sprint Review gjennomføres som et kort daglig statusmøte, mens Sprint Retrospective er et større møte som kun holdes ved slutten av hele prosjektet"
        ],
        correct: 1
    },
    {
        // Q23 – Scrum/Kanban
        question: "Hva er forskjellen mellom Scrum og Kanban?",
        options: [
            "Scrum og Kanban er praktisk talt identiske smidigmetodikker som følger de samme prinsippene, men med ulike navn og litt ulik terminologi",
            "Kanban er en langt strengere og mer formalisert metodikk enn Scrum, med fler obligatoriske roller, seremonier og dokumentasjonskrav per sprint",
            "Scrum er tidsboksbasert med faste sprinter, roller og seremonier; Kanban er flytbasert uten faste iterasjoner, bruker WIP-grenser og fokuserer på kontinuerlig leveranse",
            "Scrum er en metodikk utviklet utelukkende for programvareutvikling, mens Kanban er et logistikkverktøy som kun brukes i produksjon og varehandel"
        ],
        correct: 2
    },
    {
        // Q24 – Metodikk
        question: "Hvordan utfyller Use Case-modellering og domenemodellering hverandre?",
        options: [
            "Use Case og domenemodell er to ulike navn på det samme UML-diagrammet; begge beskriver systemets funksjonelle krav fra brukerens perspektiv",
            "Use Case brukes utelukkende etter at systemet er implementert, som et dokumentasjonsverktøy for å beskrive eksisterende funksjonalitet",
            "I moderne smidig utvikling har domenemodellen blitt den foretrukne modellen og har erstattet Use Case-diagrammer som primær kravmodelleringsteknikk",
            "Use Case viser dynamikken (hvem gjør hva), domenemodellen gir et statisk bilde av konsepter og sammenhenger; til sammen gir de dynamikk + struktur"
        ],
        correct: 3
    },
    {
        // Q25 – Metodikk
        question: "Hva er hensikten med et visjonsdokument i et smidig prosjekt?",
        options: [
            "Visjonsdokumentet beskriver prosjektets formål, mål og omfang; gir felles forståelse blant interessenter og retning for arbeidet; kan oppdateres underveis",
            "Visjonsdokumentet er en juridisk bindende kontrakt som fastsetter ansvar, leveranser og tidsmessige forpliktelser mellom utvikler og oppdragsgiver",
            "Visjonsdokumentet er et detaljert teknisk designdokument som beskriver systemarkitekturen, komponentstrukturen og databasedesignet i detalj",
            "Visjonsdokumentet skrives utelukkende av kunden og overleveres til utviklingsteamet som en komplett og endelig kravspesifikasjon for prosjektet"
        ],
        correct: 0
    },
    {
        // Q26 – Metodikk
        question: "Hva er hensikten med risikoanalyse i visjonsdokumentet?",
        options: [
            "Risikoanalyse brukes utelukkende for å fastsette forsikringskrav, ansvarsfordeling og garantibestemmelser i kontrakten mellom oppdragsgiver og leverandør",
            "Risikoanalysen identifiserer potensielle risikoer, prioriterer dem, og bidrar til risikoreduserende tiltak; gir bedre beslutningsgrunnlag og øker prosjektets robusthet",
            "Risikoanalyse er en post-mortem-aktivitet som gjennomføres utelukkende etter at et prosjekt har mislyktes, for å identifisere og dokumentere årsaker",
            "Risikoanalyse er kun relevant og lovpålagt for store offentlige anskaffelsesprosjekter over terskelbeløpet; private prosjekter er unntatt"
        ],
        correct: 1
    },
    {
        // Q27 – Testing
        question: "Hva er forskjellen mellom en stresstest og en spike-test?",
        options: [
            "Stresstest: avdekker sikkerhetssårbarheter og svakheter i kryptering; spike-test: måler systemets cold-start-tid og oppstartstid under press",
            "Stresstest og spike-test er to synonyme begreper for den samme typen ytelsestest som begge måler systemets absolutte maksimale kapasitetsgrense",
            "Stresstest: tester jevn og vedvarende last over tid; spike-test: tester plutselig, kortvarig last – f.eks. ved påmelding til populære arrangementer",
            "Stresstest: tester enkeltkomponenter i fullstendig isolasjon fra resten; spike-test: tester hele den integrerte løsningen fra ende til ende"
        ],
        correct: 2
    },
    {
        // Q28 – Testing
        question: "Hva bør man gjøre for å forsikre seg om at systemet tåler forventet last?",
        options: [
            "Kjøp alltid den kraftigste og mest skalerbare infrastrukturen som er tilgjengelig; dedikerte ytelsestester er da unødvendige og kostnadsineffektive",
            "Ytelsestesting og lasttesting er kun nødvendig å gjennomføre etter at systemet er lansert i produksjon, ikke under utvikling eller QA-fasen",
            "Test alltid kun mot forventet gjennomsnittlig normalbelastning; edge cases, ekstrembelastning og spike-scenarier er ikke nødvendig å dekke",
            "Finn forventet last, test i produksjonslikt miljø, identifiser hva som feiler først, og vurder hva som kan skaleres opp; bruk stresstest for jevn last og spike-test for plutselig last"
        ],
        correct: 3
    },
    {
        // Q29 – Testing / CI
        question: "Hvordan henger kontinuerlig integrasjon (CI) og smidig utvikling sammen?",
        options: [
            "CI muliggjør hyppige releaser; hyppige releaser reduserer risikoen for store feil fordi endringene (deltaen) er liten og det er enkelt å rulle tilbake; uten CI er hyppige releaser nesten umulig",
            "CI er et verktøy som automatisk genererer dokumentasjon og erstatter behovet for manuell kodereview og dedikert QA-team i smidige prosjekter",
            "CI er et konsept fra tradisjonell fossefallsutvikling som brukes for å samle alle utviklernes endringer i én stor release-pakke ved prosjektslutt",
            "CI er et system som automatisk og uten menneskelig involvering deployer kode fra utviklermiljøet direkte videre til produksjonsmiljøet"
        ],
        correct: 0
    },
    {
        // Q30 – Testing
        question: "Hvor mye testing er nok, og hvordan prioriterer man hva som skal testes?",
        options: [
            "100 % kodedekning er alltid det eneste akseptable og pålitelige kvalitetsmålet og bør settes som minimumskrav i alle systemutviklingsprosjekter",
            "Ingen fasit – risk-poker brukes til å prioritere testinnsats basert på risiko; i smidig utvikling med CI kan man teste mindre fordi endringene er små og rollback er enkelt",
            "Man bør alltid prioritere full manuell testing av alle funksjoner; automatiserte tester er upålitelige og bør aldri brukes som eneste kvalitetsgate",
            "Testomfanget bestemmes utelukkende av prosjektets tidsbudsjett og tilgjengelige ressurser; risikovurdering er ikke et relevant kriterium"
        ],
        correct: 1
    },
    {
        // Q31 – TDD
        question: "Hva er TDD (Test Driven Development), og hvordan fungerer det?",
        options: [
            "TDD er en praksis der dedikerte QA-ingeniører skriver alle tester etter at utviklerne har ferdigstilt og levert koden til testmiljøet",
            "TDD er en kategori av testverktøy som Selenium og JUnit; det er ikke en utviklingsmetodikk, men et sett med rammeverk for automatisert testing",
            "TDD er en test-first-tilnærming: skriv en test som feiler → skriv akkurat nok kode til at testen passerer → refaktorer; sikrer høy testdekning og at koden gjør det den skal",
            "TDD er en metodikk utelukkende beregnet på systemtesting og akseptansetesting på høyt nivå; det er ikke egnet for enhetstesting av enkeltfunksjoner"
        ],
        correct: 2
    },
    {
        // Q32 – BDD
        question: "Hva er BDD (Behavior Driven Development), og hvordan skiller det seg fra TDD?",
        options: [
            "BDD er et fullstendig synonym for TDD; begge metodikkene bruker de identiske verktøyene, prosessene og teststrukturene for å sikre kodekvalitet",
            "BDD er en spesialisert testmetodikk utelukkende for brukergrensesnitt og frontend; den er ikke relevant for testing av backend-systemer eller API-er",
            "BDD er en tilnærming der alle tester utformes og skrives av forretningsanalytikere og domeneeksperter, helt uten involvering fra utviklere eller testere",
            "BDD fokuserer på akseptansetester fra sluttbrukerens perspektiv, involverer utvikler, tester og PO, bruker Gherkin-språk i feature-filer, og tester oppførsel på et høyere nivå enn TDD"
        ],
        correct: 3
    },
    {
        // Q33 – Testing
        question: "Hva er forskjellen mellom enhetstesting og integrasjonstesting, og hvordan utfyller de hverandre?",
        options: [
            "Enhetstesting tester individuelle komponenter isolert (f.eks. enkeltfunksjoner); integrasjonstesting tester samspillet mellom komponenter; de utfyller hverandre ved å finne feil på ulike nivåer",
            "Enhetstesting er en type ende-til-ende-test som dekker hele systemflyten; integrasjonstesting er en smalere test som kun verifiserer databasetilkobling og datalag",
            "Enhetstesting og integrasjonstesting er to synonyme begreper i moderne testkjeding; de kan brukes om hverandre og dekker de samme aspektene av systemet",
            "Integrasjonstesting utføres alltid manuelt av et dedikert QA-team utenfor utviklingsavdelingen; enhetstesting er aldri automatisert og gjøres ad hoc"
        ],
        correct: 0
    },
    {
        // Q34 – Testing
        question: "Nevn de viktigste testtypene innen systemutvikling.",
        options: [
            "Black box-, white box- og grey box-testing er de tre overordnede kategoriene; alle andre testtyper er kun underkategorier og spesialiseringer av disse tre",
            "Enhetstesting, integrasjonstesting, systemtesting, akseptansetesting, regresjonstesting, smoke-testing, eksplorativ testing, destruktiv testing, usability-testing og ytelsestesting",
            "Alpha-testing og beta-testing, gjennomført henholdsvis internt og eksternt, er de eneste testtypene som er meningsfulle og nødvendige i moderne systemutvikling",
            "Det finnes kun to fundamentale kategorier av tester i systemutvikling: automatiserte tester som kjøres i CI og manuelle tester som utføres av QA-teamet"
        ],
        correct: 1
    },
    {
        // Q35 – Testing
        question: "Hvilke testtyper passer best for automatisk testing, og hvilke for manuell testing?",
        options: [
            "All testing, inkludert eksplorativ, destruktiv og usability-testing, bør i dag automatiseres fullt ut; manuell testing er foreldet og systematisk upålitelig",
            "Kun akseptansetester fra BDD-feature-filer kan kjøres automatisk; alle andre testtyper, inkludert enhetstester, må alltid utføres manuelt av QA-teamet",
            "Automatisk: enhetstester og regresjonstester (nøyaktige, raske, repeterbare); manuell: smoke-, eksplorativ- og destruktiv testing – krever menneskelig kreativitet",
            "Manuell testing, gjennomført av erfarne testere med domeneforståelse, er alltid mer pålitelig og grundig enn tilsvarende automatiserte tester"
        ],
        correct: 2
    },
    {
        // Q36 – TDD
        question: "Nevn fordeler og utfordringer ved TDD.",
        options: [
            "TDD har ingen reelle ulemper; det er den eneste metodikken som gir riktig kodekvalitet og er anbefalt av industrien som standardtilnærming for alle prosjekter",
            "TDD er primært nyttig og kostnadseffektivt i meget store enterprise-prosjekter; for mindre prosjekter under en viss kompleksitet har det ingen vesentlig verdi",
            "Den klart største fordelen med TDD er at det fullstendig eliminerer behovet for alle andre testtyper, inkludert integrasjons- og akseptansetester",
            "Fordeler: bedre kodekvalitet og struktur, høy testdekning, raskere feil-feedback, testene fungerer som dokumentasjon. Utfordringer: bratt lærekurve, økt tidsbruk initialt, testsuiten krever løpende vedlikehold"
        ],
        correct: 3
    },
    {
        // Q37 – Arkitektur
        question: "Hva er programvarearkitektur, og nevn tre eksempler på vanlige arkitekturmønstre.",
        options: [
            "Programvarearkitektur er de grunnleggende strukturene og viktigste valgene i et system; eksempler: klient-tjener, tre-lags-arkitektur, Microservices (andre: MVC, SOA, Event-bus, Pipe-filter)",
            "Programvarearkitektur er den grafiske og visuelle utformingen av brukergrensesnittet; god arkitektur handler om fargebruk, layout og navigasjonsstruktur",
            "Arkitekturmønsteret bestemmes alltid automatisk av programmeringsspråket og rammeverket man velger; det er ikke en separat og bevisst designbeslutning",
            "Programvarearkitektur er kun et relevant begrep for storskala systemer med svært høy trafikk; for normal bedriftsprogramvare er begrepet irrelevant"
        ],
        correct: 0
    },
    {
        // Q38 – Arkitektur
        question: "Hvorfor er det viktig å ta arkitekturvalg tidlig i et systemutviklingsprosjekt?",
        options: [
            "Arkitekturvalg bør alltid tas sent i prosjektet, etter at man har full oversikt over alle funksjonelle og ikke-funksjonelle krav til systemet",
            "Arkitektur handler om fundamentale valg som er vanskelige å endre sent – det kan kreve at store deler av koden skrives om og medføre store kostnader og forsinkelser",
            "Programvarearkitektur kan alltid endres enkelt og kostnadseffektivt underveis i prosjektet; det er en vanlig misforståelse at dette er særlig kostbart",
            "Arkitekturvalg er kun relevante og nødvendige for systemer som er designet for å kjøre i skyinfrastruktur; lokale systemer krever ingen arkitekturvurdering"
        ],
        correct: 1
    },
    {
        // Q39 – Arkitektur / DevOps
        question: "Hvordan påvirker SOA/Microservices organiseringen av utvikling og drift?",
        options: [
            "SOA og Microservices krever at alle tjenester er implementert i det samme programmeringsspråket og deployes på en felles, sentralisert plattform",
            "DevOps-team er primært et begrep fra tradisjonell monolittisk arkitektur; i Microservices-systemer er rene utviklingsteam uten driftsansvar normen",
            "Uavhengige tjenester kommuniserer via standardiserte protokoller; ulike plattformer og team; det har blitt vanlig med tverrfaglige DevOps-team som dekker utvikling, testing og drift for én tjeneste",
            "SOA er en arkitekturstil der én enkelt, sentralisert applikasjonstjener håndterer all forretningslogikk og alle tjenestekall for hele systemet"
        ],
        correct: 2
    },
    {
        // Q40 – Arkitektur
        question: "Beskriv prinsippene i lagdelt arkitektur og hvilke lag man typisk deler en applikasjon inn i.",
        options: [
            "Lagdelt arkitektur er kjennetegnet ved at alle lag har direkte tilgang til og kan kommunisere fritt med samtlige andre lag i systemet uten restriksjoner",
            "Lagdelt arkitektur og Microservices er synonyme og ekvivalente begreper i moderne distribuert systemutvikling; begge beskriver de samme prinsippene",
            "Lagdelt arkitektur er et designmønster som er eksklusivt egnet for native mobilapplikasjoner; for web-applikasjoner og API-er anbefales andre mønstre",
            "Hvert lag har spesialiserte moduler (høy styrke) og kan kun be om tjenester fra laget under (lav kobling); typisk: presentasjonslag → applikasjonslag → forretningslag → databaselag"
        ],
        correct: 3
    },
    {
        // Q41 – Arkitektur
        question: "Hva er Microservices-arkitektur?",
        options: [
            "Mange små, selvstendige tjenester der hver gjør én avgrenset oppgave og eier sine egne data; kommuniserer via standardiserte protokoller; kan deployes og skaleres uavhengig",
            "Microservices er en arkitekturstil der applikasjonen deles i nøyaktig to hoveddeler: en frontend-tjeneste for brukergrensesnitt og en backend-tjeneste for logikk",
            "I Microservices-arkitektur deler alle tjenester én felles, sentralisert database for å forenkle datakonsistens og unngå distribuerte transaksjoner",
            "Microservices er et annet navn for objektorientert programmering der klasser og objekter kapsler inn data og atferd i selvstendige og gjenbrukbare enheter"
        ],
        correct: 0
    },
    {
        // Q42 – Arkitektur
        question: "Nevn fire fordeler med Microservices.",
        options: [
            "Enklere integrasjonstesting på tvers av tjenester, lavere total infrastrukturkostnad, raskere kald oppstart av applikasjonen, og enklere feilsøking i produksjon",
            "Skalerbarhet (enkeltjenester skaleres opp ved behov), modularitet (uavhengige team), teknologimangfold (ulike teknologier per tjeneste), økt tilgjengelighet (resten kjører selv om én tjeneste er nede)",
            "Bedre generell systemytelse og lavere nettverkslatens, enklere administrasjon av delte databaser, redusert total systemkompleksitet og bedre sikkerhetsisolasjon",
            "Lavere total utviklingskostnad og kortere time-to-market enn monolitter, enklere felles kodebase, og forbedret sikkerhet gjennom sentralisert autorisasjon"
        ],
        correct: 1
    },
    {
        // Q43 – Arkitektur
        question: "Nevn fire ulemper med Microservices.",
        options: [
            "Microservices har ingen reelle tekniske ulemper sammenlignet med monolittiske systemer; eventuelle utfordringer skyldes uerfarne team og dårlig planlegging",
            "Ulempene ved Microservices er utelukkende av økonomisk karakter – høyere lisens- og infrastrukturkostnader; det finnes ingen tekniske eller arkitekturmessige ulemper",
            "Utfordrende testing av interaksjoner mellom tjenester, mer komplisert debugging, vanskelig å holde data konsistente på tvers av tjenester, og økt deployment-kompleksitet",
            "Microservices kan ikke deployes i skyplattformer som AWS eller Azure, og er teknisk inkompetibelt med moderne CI/CD-pipelines og containerteknologi"
        ],
        correct: 2
    },
    {
        // Q44 – Arkitektur / design
        question: "Hva menes med 'høy styrke' (high cohesion) i programvaredesign?",
        options: [
            "Høy styrke betyr at en komponent har mange og varierte avhengigheter til andre moduler og tjenester i systemet, noe som gir rik og bred funksjonalitet",
            "Høy styrke er et begrep fra ytelsesoptimalisering og refererer til at en komponent eksekverer raskt og bruker minimalt med CPU og minne under kjøring",
            "Høy styrke betyr at en komponent er stor, inneholder mye funksjonalitet og håndterer mange ulike ansvarsområder for å minimere totalt antall komponenter",
            "En komponent gjør én klart avgrenset ting og gjør den godt – ett eller få ansvarsområder; gjør komponenten enklere å forstå, endre, gjenbruke og bytte ut"
        ],
        correct: 3
    },
    {
        // Q45 – Arkitektur / design
        question: "Hva menes med 'lave koblinger' (low coupling) i programvaredesign?",
        options: [
            "En komponent har få avhengigheter til andre komponenter; gjør det mulig å endre én uten å påvirke resten; enklere å teste og debugge isolert",
            "Lave koblinger betyr at komponentene er tett integrert, effektivt deler intern tilstand og kommuniserer direkte for optimal ytelse og minimal overhead",
            "Lave koblinger er et uønsket designkjennetegn i moderne systemutvikling og indikerer dårlig arkitektur; høy kobling er å foretrekke for effektivitet",
            "Lave koblinger refererer til lavt minne- og CPU-forbruk ved eksekvering av komponentens operasjoner, og er primært et ytelsesoptimaliseringsbegrep"
        ],
        correct: 0
    },
    {
        // Q46 – Arkitektur / design
        question: "Hvorfor er høy styrke og lave koblinger viktig for vedlikeholdbar programvare?",
        options: [
            "Høy styrke gjør det klart hva komponenten gjør og muliggjør gjenbruk; lave koblinger gjør at endringer ikke sprer seg ukontrollert; til sammen gir oversiktlig, testbar og vedlikeholdbar kode",
            "Høy styrke og lave koblinger er to grunnleggende motsigende designmål som ikke kan oppnås i samme komponent; man må alltid prioritere ett av dem",
            "Disse designprinsippene er eksklusive for objektorientert programmering i Java og C#; de er ikke relevante for funksjonell programmering eller skripting",
            "Lave koblinger fører systematisk til dårligere systemytelse og økt nettverkslatens, og bør derfor alltid balanseres og avveies mot performanshensyn"
        ],
        correct: 0
    },
    {
        // Q47 – Arkitektur
        question: "Nevn fordeler med Microservices illustrert med et konkret eksempel (f.eks. et handelssystem med Order-, Fee- og Market-tjeneste).",
        options: [
            "Alle tjenester i systemet deler en felles kodebase og er versjonert samlet, noe som gjør gjenbruk av kode og felles biblioteker svært enkelt og oversiktlig",
            "Microservices gir automatisk sterk datakonsistens på tvers av tjenestegrensene uten at utviklerne trenger å implementere ekstra synkroniseringslogikk",
            "Én felles og sentralisert deployment-pipeline håndterer samtlige tjenester simultant, noe som forenkler driftsoperasjoner og reduserer deployment-risiko",
            "Fee-tjenesten kan programmeres i et annet språk; Market-tjenesten kan oppdateres uten å påvirke de andre; én tjeneste kan holdes oppe selv om en annen er nede; enkeltjenester kan skaleres isolert"
        ],
        correct: 3
    },
    {
        // Q48 – Arkitektur
        question: "Nevn ulemper med Microservices illustrert med et konkret eksempel.",
        options: [
            "Microservices kan per definisjon ikke skaleres horisontalt ved hjelp av containerteknologi, noe som er en fundamental og alvorlig arkitekturmessig svakhet",
            "Den eneste dokumenterte og praktiske ulempen med Microservices er høyere lisens- og driftskostnader for skyinfrastruktur; teknisk er arkitekturen problemfri",
            "Microservices-arkitektur krever alltid at all kode lagres i ett monolittisk kode-repository, noe som fundamentalt begrenser team-autonomi og uavhengig deployment",
            "Vanskelig å identifisere hvilken tjeneste en feil stammer fra; kaotisk med parallelle versjoner av samme tjeneste; testing av krav som spenner over flere tjenester er komplisert"
        ],
        correct: 3
    },
    {
        // Q49 – Smidig
        question: "Hva er de fire grunnleggende prinsippene i smidig (agil) utvikling?",
        options: [
            "1. Problem-based: del store problemer i prioriterte deler. 2. Collaborative: involver alle roller fra start. 3. Iterative: korte iterasjoner. 4. Adaptive progress: tilpass basert på tilbakemelding",
            "1. Grundig dokumentasjon av alle krav. 2. Detaljert planlegging av hele prosjektomfanget. 3. Systematisk testing av all funksjonalitet. 4. Strukturert og kontrollert deployment til produksjon",
            "1. Rask og hyppig leveranse av ny funksjonalitet. 2. Konstant høy kodekvalitet og lav teknisk gjeld. 3. Minimal total kostnad per sprint og iterasjon. 4. Kontinuerlig unngåing av all teknisk gjeld",
            "1. Fullstendig automatisering av repetitive oppgaver. 2. Standardisering av alle prosesser og arbeidsflyter. 3. Spesialisering av roller i teamet. 4. Kontinuerlig optimalisering av systemytelse"
        ],
        correct: 0
    },
    {
        // Q50 – TDD/BDD
        question: "Hvordan kan TDD og BDD brukes sammen i et utviklingsprosjekt?",
        options: [
            "TDD og BDD er fundamentalt inkompatible og kan ikke eksistere i det samme prosjektet; man må velge én av de to tilnærmingene og holde seg til den",
            "TDD sikrer kodekvalitet på enhetsnivå; BDD sikrer at use cases fungerer som forventet fra sluttbrukerens perspektiv; de utfyller hverandre og kan ko-eksistere gjennom hele utviklingsløpet",
            "BDD er en mer moden og komplett metodikk som fullstendig erstatter TDD i moderne smidig utvikling; det er ingen grunn til å bruke begge parallelt",
            "TDD og BDD er begge utelukkende relevante for rene backend-systemer og server-side logikk; de kan ikke brukes for frontend, UI-testing eller integrasjonstesting"
        ],
        correct: 1
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let answeredQuestions = []; // Track which questions have been checked
let score = 0;

function shuffleOptions(question) {
    const indices = question.options.map((_, i) => i);
    indices.sort(() => Math.random() - 0.5);
    return {
        ...question,
        options: indices.map(i => question.options[i]),
        correct: indices.indexOf(question.correct)
    };
}

function startQuiz(mode) {
    let selected;
    if (mode === 'all') {
        selected = [...allQuestions].sort(() => Math.random() - 0.5);
    } else if (mode === 'random20') {
        selected = getRandomQuestions(20);
    } else if (mode === 'random10') {
        selected = getRandomQuestions(10);
    }

    currentQuestions = selected.map(shuffleOptions);

    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredQuestions = new Array(currentQuestions.length).fill(false);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');

    showQuestion();
}

function getRandomQuestions(count) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const isAnswered = answeredQuestions[currentQuestionIndex];
    
    document.getElementById('questionNumber').textContent = 
        `Spørsmål ${currentQuestionIndex + 1} av ${currentQuestions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        // If this question has been answered, show the results and disable clicking
        if (isAnswered) {
            optionDiv.classList.add('disabled');
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            }
            if (userAnswers[currentQuestionIndex] === index && index !== question.correct) {
                optionDiv.classList.add('incorrect');
            }
        } else {
            optionDiv.onclick = () => selectOption(index);
        }
        
        optionDiv.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)})</span>
            <span>${option}</span>
        `;
        optionsContainer.appendChild(optionDiv);
    });

    // Show feedback if question was already answered
    const feedback = document.getElementById('feedback');
    if (isAnswered) {
        const userAnswer = userAnswers[currentQuestionIndex];
        if (userAnswer === question.correct) {
            feedback.textContent = '✓ Riktig!';
            feedback.className = 'feedback correct';
        } else {
            feedback.textContent = `✗ Feil. Riktig svar er: ${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}`;
            feedback.className = 'feedback incorrect';
        }
        feedback.classList.remove('hidden');
    } else {
        feedback.classList.add('hidden');
    }

    updateProgress();
    updateButtons();
}

function selectOption(index) {
    // Don't allow changing answer after checking
    if (answeredQuestions[currentQuestionIndex]) {
        return;
    }
    
    userAnswers[currentQuestionIndex] = index;
    
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
        }
    });
    
    updateButtons();
}

function checkAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    if (userAnswer === null) return;
    
    // Mark this question as answered
    answeredQuestions[currentQuestionIndex] = true;
    
    const options = document.querySelectorAll('.option');
    const feedback = document.getElementById('feedback');
    
    // Disable all options
    options.forEach(opt => {
        opt.classList.add('disabled');
        opt.onclick = null;
    });
    
    options[question.correct].classList.add('correct');
    
    if (userAnswer === question.correct) {
        feedback.textContent = '✓ Riktig!';
        feedback.className = 'feedback correct';
        score++;
    } else {
        options[userAnswer].classList.add('incorrect');
        feedback.textContent = `✗ Feil. Riktig svar er: ${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}`;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    document.getElementById('checkBtn').disabled = true;
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function updateButtons() {
    const isAnswered = answeredQuestions[currentQuestionIndex];
    
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('checkBtn').disabled = userAnswers[currentQuestionIndex] === null || isAnswered;
    document.getElementById('nextBtn').disabled = !isAnswered;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

function showResults() {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    
    document.getElementById('finalScore').textContent = `${score}/${currentQuestions.length}`;
    document.getElementById('scoreDetails').textContent = `${percentage}% riktig`;
    
    const emoji = document.getElementById('resultEmoji');
    if (percentage >= 90) {
        emoji.textContent = '🏆';
    } else if (percentage >= 70) {
        emoji.textContent = '🎉';
    } else if (percentage >= 50) {
        emoji.textContent = '👍';
    } else {
        emoji.textContent = '📚';
    }
}
