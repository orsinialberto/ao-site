import { Trip } from '@/types';

const CLOUD = 'https://res.cloudinary.com/dx6hrvg6l/image/upload';

export const trips: Trip[] = [
  {
    slug: 'cambogia-2025',
    title: 'Cambogia',
    subtitle: 'Sulle tracce di una civiltà antica e leggendaria',
    description:
      'Viaggio in Cambogia sulle tracce di una civiltà antica e leggendaria. Phnom Penh, Battambang, Siem Reap, Angkor Wat, Kampot e Kep.',
    coverImage: `${CLOUD}/v1763735049/photo-14_plunxb.jpg`,
    dates: { start: '2025-06-02', end: '2025-06-15' },
    location: 'Cambogia',
    duration: '14 giorni',
    introductionText:
      "La Cambogia è uno di quei paesi che ti sorprendono appena metti piede fuori dall'aeroporto. Prima di partire conoscevo poco della sua storia, ma una volta lì ho scoperto un mondo ricco, intenso, a tratti luminoso e a tratti doloroso. Qui è fiorita la più grande civiltà del Sud-Est asiatico, la civiltà di Angkor; è stata colonia francese, lasciando in eredità angoli dall'insolito fascino europeo; e purtroppo ha vissuto una delle tragedie più terribili del Novecento con il regime dei Khmer Rossi.",
    mapPoints: [
      { name: 'Phnom Penh', x: 220, y: 175 },
      { name: 'Battambang', x: 24, y: 36 },
      { name: 'Siem Reap', x: 103, y: 12 },
      { name: 'Kampot', x: 141, y: 260 },
    ],
    narrativeBlocks: [
      {
        sectionTitle: 'Phnom Penh – Caos e mercati',
        narrative:
          "Phnom Penh, la capitale della Cambogia, è una città fatta di contrasti così forti da lasciarti disorientato fin dal primo istante. Il mio primo impatto è stato quasi traumatico: prendo il primo tuk tuk della mia vita e ancora oggi non so spiegarmi come siamo riusciti ad arrivare sani e salvi all'ostello. Il traffico è puro caos, un'entropia totale in cui sembra non esistere alcuna regola… eppure tutto scorre, tutto funziona. Le strade sono invase da tuk tuk e remork moto, con motorini che si infilano in ogni spazio possibile.\n\nSono soprattutto i mercati ad avermi colpito: rappresentano la vera Asia, quella che immaginavo prima di partire. Gente seduta a terra che vende qualunque tipo di cibo, bancarelle coperte da lamiere, vicoli talmente stretti da farti perdere l'orientamento. Per i cambogiani è normalità; per me è stato uno shock culturale affascinante.",
        image: `${CLOUD}/v1771064462/IMG_0124_ry9mbq.jpg`,
        imageAlt: 'Palazzo reale, Phnom Penh',
        side: 'right',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Phnom Penh – Storia e cibo',
        narrative:
          "Ho visitato le principali attrazioni della città: il Museo Nazionale, il Palazzo Reale e la Pagoda d'Argento. Ma nulla mi ha colpito quanto un Killing Field appena fuori Phnom Penh. Ne sono uscito scosso. La sensazione era la stessa che avevo provato visitando un campo di concentramento nazista: un'aria pesante, un silenzio che ti schiaccia. Eppure ho avuto la sensazione che i cambogiani stiano vivendo una fase nuova, più serena.\n\nPhnom Penh non è solo storia e caos: è anche il luogo dove ho mangiato il miglior cibo di tutta la Cambogia. Ho provato le rane fritte, il Lok Lak e l'Amok di pesce, una vera delizia che ancora oggi mi fa venire l'acquolina in bocca. A distanza di tempo non so ancora dire con certezza se Phnom Penh mi sia piaciuta oppure no. Forse è proprio per questo che mi è rimasta dentro: perché non ti lascia indifferente.",
        image: `${CLOUD}/v1763735049/photo-28_m2ekfl.jpg`,
        imageAlt: 'Phnom Penh',
        side: 'left',
        imageSize: 'large',
      },
      {
        sectionTitle: 'Battambang – Campagna e bamboo train',
        narrative:
          "Battambang conserva un affascinante stile coloniale francese. Grazie a un tour organizzato dall'ostello ho avuto l'occasione di immergermi nella quotidianità della Cambogia più autentica: una famiglia che produce la carta di riso, un'altra che distilla il vino di riso. Ho assaggiato il bamboo sticky rice, un dolce tipico fatto di riso cotto dentro una canna di bambù.\n\nA Battambang ho provato la famosa esperienza del bamboo train: una piattaforma montata su binari reali che sfreccia tra i campi cambogiani. Un'attrazione divertente… finché non ci hanno fermato annunciando che stava arrivando il treno vero. Pura follia cambogiana.",
        image: `${CLOUD}/v1763735049/photo-26_igraty.jpg`,
        imageAlt: 'Campagna di Battambang',
        side: 'right',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Battambang – Le grotte e la barca',
        narrative:
          "Ho visitato Phnom Sampeau, dove si trovano la Killing Cave e la Bat Cave. Sotto l'altura, al tramonto, ho assistito a uno spettacolo impressionante: milioni di pipistrelli escono dalla caverna e volano verso il lago Tonlé Sap. Per più di un'ora ho guardato questo fiume nero animato scorrere nel cielo.\n\nUna menzione speciale va al viaggio da Battambang a Siem Reap. Ho percorso il tragitto su una piccola barca che risale il fiume fino al Tonlé Sap. Durante la navigazione ho potuto ammirare i famosi floating villages, villaggi costruiti su palafitte dove la vita si svolge interamente sull'acqua. A un certo punto la barca si è persino incagliata in mezzo a un tappeto di fiori di loto, riuscendo a liberarsi solo grazie all'abilità del barcaiolo cambogiano.",
        image: `${CLOUD}/v1763735049/photo-19_oynzbt.jpg`,
        imageAlt: 'Floating Village sul lago Tonlé Sap',
        side: 'left',
        imageSize: 'medium',
      },
      {
        sectionTitle: 'Siem Reap',
        narrative:
          "Arrivare a Siem Reap è stato come cambiare atmosfera con un clic. Dopo il traffico di Phnom Penh e il fascino rurale di Battambang, Siem Reap mi è sembrata quasi un'altra Cambogia: ordinata, moderna, con un tocco sorprendentemente europeo.\n\nLa prima cosa che ho fatto è stata andare al mercato notturno lungo il fiume. Poi, quasi per sbaglio, mi sono ritrovato in Pub Street: bar e pub ovunque, luci sgargianti, musica assordante. Un angolo di Cambogia che non mi aspettavo di trovare, ma che – nel suo essere così fuori contesto – ha un fascino tutto suo.",
        image: `${CLOUD}/v1763735050/photo-17_bgww8h.jpg`,
        imageAlt: 'Siem Reap',
        side: 'right',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Angkor – I templi',
        narrative:
          "Camminare tra le rovine di Angkor è un viaggio nel tempo: ti ritrovi catapultato in un'epoca in cui i sovrani erano considerati divinità. Ad Angkor Wat mi sono sentito un archeologo, intento a leggere i bassorilievi. A Ta Prohm la natura ha vinto, ha stritolato i muri e abbracciato le torri con radici gigantesche. Il Bayon, però, è il tempio che più mi ha messo i brividi: camminare tra centinaia di volti scolpiti nella pietra, che ti osservano da ogni direzione, è un'esperienza quasi ipnotica. Visitare i templi di Angkor è stata un'esperienza che, da sola, vale un viaggio in Cambogia.",
        image: `${CLOUD}/v1763735049/photo-10_bt20ut.jpg`,
        imageAlt: 'Tempio di Bayon, Angkor',
        side: 'left',
        imageSize: 'medium',
      },
      {
        sectionTitle: 'Angkor – Alba e tramonto',
        narrative:
          "Una delle cose più belle è stata vedere l'alba ad Angkor Wat: il cielo si è acceso d'arancione e il sole è spuntato dietro una delle meraviglie del mondo moderno. Il tramonto dalla cima di Phnom Bakheng mi ha regalato un'emozione diversa. Aveva piovuto tutto il giorno, e non ho visto il sole scendere dietro la foresta. Ma la pioggia aveva lasciato un silenzio quasi sacro: eravamo in pochi, il vento leggero, la vista su un mare di alberi dove spuntava imponente Angkor Wat. È stato un momento di pace totale.",
        image: `${CLOUD}/v1763735049/photo-13_w2kmag.jpg`,
        imageAlt: 'Alba ad Angkor Wat',
        side: 'right',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Koh Ker e Preah Vihear',
        narrative:
          "Il quarto giorno ho deciso di spingermi oltre e visitare Koh Ker e il tempio di Preah Vihear, quasi al confine con la Thailandia. A Koh Ker ho trovato uno dei templi più alti che abbia mai visto, una piramide che sale verso il cielo. Preah Vihear domina un altopiano con una vista che spazia tra Cambogia e Thailandia. In cima, le scimmie che si aggirano tra le rovine rendono la scena surreale. Lungo la strada ho notato posti militari e carri armati: qui la tensione tra i due paesi è ancora alta. Eppure, nonostante tutto, la bellezza di Preah Vihear resta qualcosa di difficile da dimenticare.",
        image: `${CLOUD}/v1763735024/photo-02_euku4l.jpg`,
        imageAlt: 'Tempio di Preah Vihear',
        side: 'left',
        imageSize: 'medium',
      },
      {
        sectionTitle: 'Kampot',
        narrative:
          "L'ultima tappa del mio viaggio è stata Kampot. Per raggiungerla ho attraversato praticamente tutta la Cambogia: quasi dieci ore su un pulmino condiviso con la popolazione locale. Sul mio viaggiavano sacchi enormi di riso e persino un motorino. Kampot è famosa per il pepe, considerato uno dei migliori al mondo. Ho visitato una piccola azienda agricola dove i lavoratori selezionavano a mano, uno per uno, i chicchi destinati all'esportazione. Un lavoro meticoloso che rivela quanto questo prodotto sia prezioso per la regione.",
        image: `${CLOUD}/v1763804680/photo-01_e5fklu.jpg`,
        imageAlt: 'Raccolta del pepe a Kampot',
        side: 'right',
        imageSize: 'medium',
      },
      {
        sectionTitle: 'Kep e conclusioni',
        narrative:
          "A poca distanza si trova Kep, famosa per il suo mercato del granchio. Dopo averlo visto non potevo certo andarmene senza assaggiare il celebre granchio al pepe di Kampot: dopo l'Amok, una delle cose più buone che abbia mangiato in tutto il viaggio.\n\nHo sempre sognato di fare un viaggio in Asia e quando ho scelto la Cambogia l'ho fatto con un desiderio preciso: trovare quell'autenticità che i Paesi più turistici spesso perdono. E alla fine posso dire di aver trovato esattamente ciò che cercavo. La Cambogia mi ha mostrato un mondo lontanissimo dal mio, fatto di contrasti forti. Un viaggio autentico, duro e bellissimo. Uno di quelli che ti rimangono dentro.",
        image: `${CLOUD}/v1763735044/photo-03_oabvtl.jpg`,
        imageAlt: 'Kep',
        side: 'left',
        imageSize: 'small',
      },
    ],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((v) => v.slug === slug);
}
