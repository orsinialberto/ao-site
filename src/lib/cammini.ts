import { Trail } from '@/types';

export const trails: Trail[] = [
  {
    slug: 'cammino-dei-borghi-silenti',
    title: 'Cammino dei Borghi Silenti',
    subtitle: 'Tenaglie → Tenaglie',
    description:
      'Novanta chilometri ad anello nel cuore dell\'Umbria, tra borghi silenziosi, colline di ulivi e incontri che scaldano il cuore. Un cammino che non fa solo camminare, ma rallentare.',
    coverImage:
      'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-02_igqu4p.jpg',
    dates: { start: '2025-09-16', end: '2025-09-20' },
    stats: {
      distanceKm: 90,
      stages: 5,
      days: 5,
      elevationGain: 2200,
      maxAltitude: 900,
    },
    status: 'completed',

    // Circular route calculated from real GPS coordinates
    trailPoints: [
      { name: 'Tenaglie', x: 146, y: 221 },
      { name: 'Guardea', x: 173, y: 280 },
      { name: 'Santa Restituta', x: 261, y: 234 },
      { name: 'Melezzole', x: 250, y: 173 },
      { name: 'Morre', x: 263, y: 66 },
      { name: 'Acqualoreto', x: 244, y: 20 },
      { name: 'Civitella del Lago', x: 143, y: 66 },
      { name: 'Baschi', x: 20, y: 168 },
      { name: 'Montecchio', x: 112, y: 153 },
      { name: 'Tenaglie', x: 146, y: 221 },
    ],

    narrativeBlocks: [
      {
        stageNumber: 1,
        stageTitle: 'Tenaglie → Melezzole',
        distanceKm: 29,
        elevationGain: 800,
        duration: '8h',
        narrative:
          'La prima giornata parte con la sveglia all\'alba. In pochi minuti l\'asfalto sparisce e mi ritrovo immerso nei campi di lenticchie, avvolti da nuvole basse. Il primo vero borgo è Santa Restituta: minuscolo, incantevole. Un abitante ci accoglie con un po\' di ristoro, come se ci stesse aspettando. Poi compare un signore anziano che, dopo essersi misurato i battiti — la scalinata è un test di sopravvivenza — inizia a raccontarci storie del paese. Uno di quei piccoli incontri che rendono un cammino più ricco di qualsiasi cartolina.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-01_q8trbr.jpg',
        imageAlt: 'Il borgo di Santa Restituta',
        side: 'right',
        imageSize: 'large',
      },
      {
        stageNumber: 2,
        stageTitle: 'Melezzole → Morre',
        distanceKm: 17,
        elevationGain: 650,
        duration: '6h',
        narrative:
          'Le gambe protestano nella salita verso Monte Croce di Serra. In cima il cielo è coperto e ci perdiamo quella che dicono sia la vista più bella dell\'intero cammino. A Morre dormo nella mia prima struttura donativa: una signora del paese mette a disposizione la stanza di uno dei figli ormai lontani. È gentilissima, accogliente, felice di conoscere camminatori. Con lei mi sento subito in famiglia. La sera, dall\'agriturismo, un tramonto mozzafiato tinge il cielo di rosa velato e per un attimo sembra che il tempo si fermi.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-04_xpisb5.jpg',
        imageAlt: 'Alba a Melezzole',
        side: 'left',
        imageSize: 'medium',
      },
      {
        stageNumber: 3,
        stageTitle: 'Morre → Civitella del Lago',
        distanceKm: 15,
        elevationGain: 480,
        duration: '5h',
        narrative:
          'Mentre attraversiamo una sterrata veniamo assaliti da un gatto sbucato dall\'erba. Salta fuori, si struscia, ci segue per qualche metro — un nuovo amico lungo il sentiero. Più avanti una salita breve ma intensa ci porta davanti al Santuario della Madonna della Pasquarella, incastonato sotto una roccia: sperduto nella natura eppure perfettamente conservato. Civitella del Lago ci accoglie arroccata in alto, con una vista sul lago di Corbara semplicemente spettacolare.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-09_e6kow7.jpg',
        imageAlt: 'Tramonto su Civitella del Lago',
        side: 'right',
        imageSize: 'small',
      },
      {
        stageNumber: 4,
        stageTitle: 'Civitella del Lago → Baschi',
        distanceKm: 13,
        elevationGain: 350,
        duration: '4h 30min',
        narrative:
          'Ci distraiamo chiacchierando e sbagliamo strada. Ridiamo della distrazione e torniamo indietro. Alla cantina i proprietari ci accolgono calorosamente e ci fanno scoprire vini realizzati con uve ammuffite. A Baschi le vie si chiamano "buchi" perché strette e labirintiche, certi muri e balconi sembrano sfidare la gravità. La sera è l\'ultima cena insieme: quando arrivano i saluti un po\' di tristezza si fa sentire. Ma poi nel parco suonano gli Sciroccati, e la notte si anima tra canti e balli.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734564/photo-11_aqhtkv.jpg',
        imageAlt: 'Tramonto aBaschi',
        side: 'left',
        imageSize: 'small',
      },
      {
        stageNumber: 5,
        stageTitle: 'Baschi → Tenaglie',
        distanceKm: 16,
        elevationGain: 420,
        duration: '5h',
        narrative:
          'È l\'ultimo giorno e nella testa scorrono tanti pensieri. Mi colpisce la semplicità delle persone in queste terre: tutto è genuino, autentico. Passiamo per una necropoli etrusca, un piccolo tuffo nella storia più antica. A Montecchio un\'anziana signora intreccia cesti di vimini e ci racconta la sua storia. Il rientro a Tenaglie lo festeggiamo con il panino con la porchetta più buono che abbia mai mangiato. Il cammino è completato.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763734562/photo-13_aoiaxh.jpg',
        imageAlt: 'Necropoli etrusca lungo il sentiero',
        side: 'right',
        imageSize: 'medium',
      },
    ],
  },
  {
    slug: 'fishermens-trail-2024',
    title: "Fishermen's Trail",
    subtitle: 'Porto Covo → Lagos',
    description:
      'Un cammino di 226 km che attraversa scogliere, spiagge e dune, offrendo panorami spettacolari lungo la costa sud-occidentale del Portogallo.',
    coverImage:
      'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1771009364/IMG_8381_ygfirg.jpg',
    dates: { start: '2024-09-13', end: '2024-09-24' },
    stats: {
      distanceKm: 226.5,
      stages: 11,
      days: 11,
      elevationGain: 3200,
      maxAltitude: 150,
    },
    status: 'completed',

    // Coastal route: from Porto Covo southward, then east to Lagos
    trailPoints: [
      { name: 'Porto Covo', x: 140, y: 20 },
      { name: 'Vila Nova de Milfontes', x: 145, y: 68 },
      { name: 'Almograve', x: 138, y: 98 },
      { name: 'Zambujeira do Mar', x: 142, y: 142 },
      { name: 'Odeceixe', x: 150, y: 178 },
      { name: 'Aljezur', x: 135, y: 215 },
      { name: 'Arrifana', x: 80, y: 222 },
      { name: 'Carrapateira', x: 65, y: 252 },
      { name: 'Vila do Bispo', x: 48, y: 282 },
      { name: 'Sagres', x: 20, y: 310 },
      { name: 'Luz', x: 140, y: 298 },
      { name: 'Lagos', x: 200, y: 292 },
    ],

    narrativeBlocks: [
      {
        stageTitle: 'Porto Covo → Vila Nova de Milfontes',
        distanceKm: 19.6,
        narrative:
          'Prima di partire mi ero informato su lunghezze e dislivelli e il pensiero era stato: "Facile, dai. Una passeggiata rilassante vista oceano." Mai mi sono sbagliato di più. Il mio viaggio inizia a Porto Covo, un piccolo paese di pescatori affacciato sull\'oceano. Il tramonto del primo giorno è un assaggio perfetto di ciò che mi aspetta: il sole che sprofonda nel mare e un cielo infuocato che sembra voler inaugurare l\'avventura.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763735141/photo-01_zrs1jh.jpg',
        imageAlt: 'Costa atlantica al tramonto vicino Porto Covo',
        side: 'right',
        imageSize: 'large',
      },
      {
        stageTitle: 'Vila Nova de Milfontes → Zambujeira do Mar',
        distanceKm: 36.2,
        narrative:
          'Il sentiero si tiene alto su una scogliera frastagliata, con l\'oceano sempre alla mia sinistra. Sabbia ovunque: rossa, dorata, sabbia che inghiotte i piedi a ogni passo. Capisco subito che qui non sono i dislivelli il problema: è il terreno. Cammino, mi fermo, svuoto le scarpe. Ripeti. Tutto il giorno. Ma basta alzare lo sguardo e la fatica svanisce: il blu dell\'oceano, il verde brillante delle piante grasse che esplodono tra la sabbia, il vento salato che arriva forte dal mare… uno spettacolo continuo.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763847376/photo-12_h53lth.jpg',
        imageAlt: 'Scogliera sulla costa portoghese',
        side: 'left',
        imageSize: 'small',
      },
      {
        stageTitle: 'Zambujeira do Mar → Aljezur',
        distanceKm: 41.3,
        narrative:
          'Tra le onde spuntano pescatori che nuotano con un cesto in spalla. Raggiungono scogli isolati per pescare il pesce che — guarda caso — mi ritrovo ogni sera nel piatto. Una vita semplice e coraggiosa, fatta di mare e sale. Non mancano surfisti in cerca dell\'onda perfetta e camperisti parcheggiati in cima alle scogliere, con vista privilegiata sul tramonto. È impossibile non fantasticare: ti viene voglia di mollare tutto, comprare un van e trasferirti qui, dove la vita sembra più leggera e tutto profuma di libertà.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763847376/photo-13_cirz5d.jpg',
        imageAlt: 'Vita costiera lungo la Rota Vicentina',
        side: 'right',
        imageSize: 'medium',
      },
      {
        stageTitle: 'Aljezur → Carrapateira',
        distanceKm: 36.5,
        narrative:
          'Una delle cose più belle di questo cammino è la fine della giornata: dopo chilometri nella sabbia e qualche imprecazione a denti stretti, arrivi al villaggio e… vai in spiaggia. Scalzi, finalmente. Un tuffo nell\'acqua gelida dell\'oceano e i piedi tornano nuovi. La sensazione di pace è indescrivibile. Poi arriva il tramonto. Di quelli che si imprimono addosso e ti ricordano perché cammini: il rumore delle onde, il vento in faccia, il cielo che si accende e tu che respiri più lento.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763847375/photo-09_cfto5p.jpg',
        imageAlt: 'Tramonto in spiaggia sulla costa atlantica',
        side: 'left',
        imageSize: 'small',
      },
      {
        stageTitle: 'Carrapateira → Sagres',
        distanceKm: 35.5,
        narrative:
          'Fino a Cabo de São Vicente è pura poesia: natura selvaggia, pochissima gente, ritmi lenti. Il sentiero si arrampica tra scogliere drammatiche, il vento soffia forte dal mare aperto, e il paesaggio diventa sempre più aspro e solitario. È qui che il Cammino dei Pescatori raggiunge il suo apice: la punta più a sud-ovest d\'Europa, dove il mondo sembra finire e ricominciare allo stesso tempo.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763847376/photo-14_ypmlg1.jpg',
        imageAlt: 'Scogliere selvagge vicino a Cabo de São Vicente',
        side: 'right',
        imageSize: 'large',
      },
      {
        stageTitle: 'Sagres → Lagos',
        distanceKm: 41.4,
        narrative:
          'Poi la costa cambia: appaiono spiagge affollate, ombrelloni colorati, traffico. Si entra nella zona più turistica dell\'Algarve e un po\' di quella magia si perde per strada. Il cammino si conclude a Lagos, città giovane e festosa. Ma ciò che resta davvero sono gli scogli che sfidano il mare, i piedi stanchi e felici, e quel pensiero silenzioso che ti dice: "Vorrei non finisse mai." Come scrive Bill Bryson: «La vita assume una drastica semplicità quando si cammina. Il tempo perde il suo consueto significato.» La Rota Vicentina è così: selvaggia, dura, meravigliosa.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1763847377/photo-20_trxzig.jpg',
        imageAlt: 'L\'arrivo a Lagos e la fine del cammino',
        side: 'left',
        imageSize: 'medium',
      },
    ],
  },
  {
    slug: 'cammino-inglese-e-finisterre-2023',
    title: 'Cammino di Santiago Inglese',
    subtitle: 'Ferrol → Finisterre',
    description:
      'Dal porto di Ferrol fino a Santiago, per poi spingermi fino alla "fine del mondo": un cammino breve ma intenso, fatto di incontri, buon cibo e tante risate.',
    coverImage:
      'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883559/olveiroa-02_tc3xj8.jpg',
    dates: { start: '2023-09-06', end: '2023-09-15' },
    stats: {
      distanceKm: 202,
      stages: 9,
      days: 10,
      elevationGain: 3500,
      maxAltitude: 500,
    },
    status: 'completed',

    // Route: from Ferrol (NE) to Santiago (SW), then west to Finisterre
    trailPoints: [
      { name: 'Ferrol', x: 255, y: 30 },
      { name: 'Neda', x: 278, y: 20 },
      { name: 'Pontedeume', x: 270, y: 55 },
      { name: 'Betanzos', x: 262, y: 95 },
      { name: 'Hospital de Bruma', x: 228, y: 135 },
      { name: 'Sigüeiro', x: 210, y: 190 },
      { name: 'Santiago', x: 185, y: 220 },
      { name: 'Negreira', x: 142, y: 210 },
      { name: 'Olveiroa', x: 72, y: 192 },
      { name: 'Finisterre', x: 20, y: 220 },
    ],

    narrativeBlocks: [
      {
        stageTitle: 'Ferrol → Pontedeume',
        distanceKm: 31,
        narrative:
          'Il cammino inizia a Ferrol, una città portuale nel nord della Spagna. Parto da solo, il sentiero costeggia il mare e Ferrol sembra ancora addormentata. Dopo una prima tappa breve per scaldare le gambe, il secondo giorno sbaglio strada. Per fortuna incontro Sara e Arantxa, due ragazze spagnole. Poi José, che mi invita a bere una birra con loro. Da quel momento non resto più solo. Finiamo a mangiare pesce freschissimo al mercato: canolicchi, percebes, capesante. Quattro birre sul tavolo, piattini condivisi e tante risate. È in momenti come questo che mi sento davvero felice.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883560/pontedeume-01_ogihv5.jpg',
        imageAlt: 'Pranzo al mercato di Pontedeume',
        side: 'right',
        imageSize: 'large',
      },
      {
        stageTitle: 'Pontedeume → Betanzos',
        distanceKm: 21,
        narrative:
          'Il terzo giorno vola. Di questa giornata ricordo soprattutto le conversazioni: un continuo mescolare spagnolo e italiano. A volte ci si inceppa, ma alla fine ci si capisce sempre. A metà mattinata incontriamo John, un signore americano che ha perso la moglie da poco e ha deciso di partire per Santiago. Beviamo una birra insieme. Ci ringrazia dicendoci che l\'incontro con noi rappresentava ciò di cui aveva sentito parlare del Cammino. Ci commuoviamo un po\'. Un altro momento che porterò sempre con me.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883558/betanzos-01_gz3bzm.jpg',
        imageAlt: 'Betanzos, la Roma galiziana',
        side: 'left',
        imageSize: 'medium',
      },
      {
        stageTitle: 'Betanzos → Sigüeiro',
        distanceKm: 42,
        narrative:
          'La quarta tappa inizia sotto la pioggia e si rivela la più lunga: 28 km. In compagnia scorrono via senza accorgersene. Il momento più divertente arriva a 200 metri dall\'albergue: scoppia un acquazzone improvviso. Corriamo, ma arriviamo fradici. E appena entriamo smette di piovere. Il giorno dopo il cielo regala uno spettacolo: il sole sorge dietro una collina, tra campi di granoturco, e il mais riflette la luce creando un panorama da cartolina. Arrivati a Sigüeiro il gruppo è ormai numeroso. Decidiamo di arrivare a Santiago il giorno dopo, uniti.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883558/bruma-01_pwfubo.jpg',
        imageAlt: 'Alba tra i campi di granoturco a Bruma',
        side: 'right',
        imageSize: 'small',
      },
      {
        stageTitle: 'Sigüeiro → Santiago de Compostela',
        distanceKm: 16,
        narrative:
          'L\'ultima tappa è la più leggera. Le gambe vanno avanti quasi per inerzia. Le colonnine con la conchiglia segnano ormai meno di 20 km. Arriviamo a Santiago de Compostela e ci dirigiamo subito verso la cattedrale. Le emozioni sono forti. Non c\'è solo soddisfazione: c\'è anche malinconia. La consapevolezza che tutto sta finendo e che dovrò salutare persone con cui ho condiviso giorni intensi, senza conoscerle prima. Ci sdraiamo per terra sull\'asfalto, stanchi e felici. Alla fine un sorriso mi si disegna sul volto. E ancora oggi, se ripenso a quel momento, è lo stesso sorriso che ritorna.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883560/santiago-01_muxnwb.jpg',
        imageAlt: 'Arrivo a Santiago de Compostela',
        side: 'left',
        imageSize: 'small',
      },
      {
        stageTitle: 'Santiago → Olveiroa',
        distanceKm: 54,
        narrative:
          'Salutati gli amici spagnoli è tempo di ripartire. La destinazione finale è il faro di Finisterre, la fine del mondo. Parto che è ancora buio, cammino in silenzio attraverso un bosco fitto illuminato solo dalla torcia del telefono. A Negreira scopro che nel letto accanto al mio dorme un ragazzo tedesco che ha percorso più di 1000 km. La sera ci ritroviamo nella cucina dell\'albergue: un signore italiano cucina la pasta, il tedesco prepara pollo al curry. Mangiamo tutti insieme. Persone diverse, eppure incredibilmente unite.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883559/olveiroa-01_yls74a.jpg',
        imageAlt: 'Il cammino verso Olveiroa nella campagna galiziana',
        side: 'right',
        imageSize: 'medium',
      },
      {
        stageTitle: 'Olveiroa → Cabo Finisterre',
        distanceKm: 34,
        narrative:
          'L\'ultima tappa è la più suggestiva. All\'improvviso il mare appare all\'orizzonte. Prima di arrivare ci fermiamo su una spiaggia per un bagno rigenerante. Raggiungiamo finalmente il faro di Finisterre. Davanti a me c\'è la colonnina finale: km 0. Sono arrivato. La sera torno al faro per il tramonto. Il sole scende, il cielo si tinge di arancione, l\'animo è in pace. Quando il sole scompare, le persone iniziano ad applaudire. Un applauso spontaneo, come per ringraziare lo spettacolo appena vissuto. Il sole è tramontato. E il mio cammino, finalmente, è completo.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1764883558/finisterre-02_aua5pr.jpg',
        imageAlt: 'Tramonto al faro di Finisterre',
        side: 'left',
        imageSize: 'small',
      },
    ],
  },
  {
    slug: 'via-degli-dei-2022',
    title: 'Via degli Dei',
    subtitle: 'Bologna → Firenze',
    description:
      'Attraverso l\'Appennino tosco-emiliano, uno sfiancante saliscendi tra boschi e strade storiche. Centoventicinque chilometri sull\'antico tracciato della Flaminia Militare.',
    coverImage:
      'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1767650892/sedie-con-vista_q5bw3u.jpg',
    dates: { start: '2022-09-18', end: '2022-09-23' },
    stats: {
      distanceKm: 125,
      stages: 6,
      days: 6,
      elevationGain: 3800,
      maxAltitude: 1200,
    },
    status: 'completed',

    trailPoints: [
      { name: 'Bologna', x: 200, y: 20 },
      { name: 'Badolo', x: 80, y: 60 },
      { name: 'Madonna dei Fornelli', x: 60, y: 110 },
      { name: 'Passo della Futa', x: 80, y: 155 },
      { name: 'San Piero a Sieve', x: 140, y: 195 },
      { name: 'Bivigliano', x: 145, y: 225 },
      { name: 'Firenze', x: 100, y: 270 },
    ],

    narrativeBlocks: [
      {
        stageTitle: 'Bologna → Badolo',
        distanceKm: 29,
        narrative:
          'Si parte da Bologna sotto i portici e in pochi chilometri la città scompare dietro le colline. La prima tappa è un assaggio di Appennino: boschi di castagni, sterrati rossi e il silenzio che prende il posto del rumore. La salita verso Badolo fa capire che qui il dislivello non perdona: gambe e fiato si mettono subito alla prova.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1767650892/san-luca_zhariv.jpg',
        imageAlt: 'San Luca e i colli bolognesi',
        side: 'right',
        imageSize: 'large',
      },
      {
        stageTitle: 'Badolo → Madonna dei Fornelli',
        distanceKm: 28,
        narrative:
          'Si cammina sulla Flaminia Militare, l\'antica strada romana ancora visibile nei lastroni di pietra. Il bosco è fitto, l\'aria fresca, e ogni tanto si sbuca in radure dove il panorama si apre sull\'Appennino. I castagneti e le stradine sterrate regalano quella sensazione di viaggio nel tempo che rende la Via degli Dei unica.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1767650895/strada-romana_gohogb.jpg',
        imageAlt: 'La strada romana della Flaminia Militare',
        side: 'left',
        imageSize: 'medium',
      },
      {
        stageTitle: 'Madonna dei Fornelli → Passo della Futa',
        distanceKm: 17,
        narrative:
          'Il cuore selvaggio del percorso. Le Banditacce segnano il punto più alto: da lassù la vista spazia su crinali e valli. Poi il Passo della Futa, il vento forte e il memoriale che invita a una sosta silenziosa. È il tratto in cui si sente davvero di stare su una strada di confine, tra Emilia e Toscana.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1767650880/banditacce-punto-pi%C3%B9-alto_erl3ce.jpg',
        imageAlt: 'Le Banditacce, punto più alto della Via degli Dei',
        side: 'right',
        imageSize: 'small',
      },
      {
        stageTitle: 'Passo della Futa → San Piero a Sieve',
        distanceKm: 21,
        narrative:
          'Dopo la Futa la discesa verso la Toscana si fa sentire. Sterrati, frantoi e colline che preannunciano Firenze. Ci si avvicina al Mugello e il paesaggio cambia: meno aspro, più verde, con quei poggi e quelle strade bianche che sembrano uscire da una cartolina.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1767650885/frantoio_igjfqe.jpg',
        imageAlt: 'Vista dal Passo della Futa verso la Toscana',
        side: 'left',
        imageSize: 'medium',
      },
      {
        stageTitle: 'San Piero a Sieve → Firenze',
        distanceKm: 36,
        narrative:
          'L\'ultima tappa è una discesa verso la bellezza. Da Bivigliano in poi si vede Firenze distesa nella valle dell\'Arno, con il Duomo che domina tutto. Le gambe ormai vanno da sole. L\'arrivo in Piazza della Signoria, con lo zaino sulle spalle e sei giorni di cammino addosso, è un momento di gratitudine pura: la Via degli Dei è completata.',
        image:
          'https://res.cloudinary.com/dx6hrvg6l/image/upload/v1767650887/palazzo-vecchio_wctdnm.jpg',
        imageAlt: 'Arrivo a Firenze, Palazzo Vecchio',
        side: 'right',
        imageSize: 'small',
      },
    ],
  },
];

export function getTrailBySlug(slug: string): Trail | undefined {
  return trails.find((c) => c.slug === slug);
}
