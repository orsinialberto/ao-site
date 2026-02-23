import { Trip, ItineraryDay } from '@/types';

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
      "Il mio viaggio in Cambogia è iniziato da Phnom Penh, una capitale caotica e piena di contrasti, per poi raggiungere Battambang, dove ho incontrato la Cambogia più autentica e rurale. Da lì, un lento viaggio in barca mi ha condotto fino a Siem Reap, porta d’ingresso agli straordinari templi di Angkor, silenziosa testimonianza di un passato grandioso.\n\nIl percorso è poi proseguito verso sud, tra le piantagioni di pepe di Kampot e il mercato del pesce di Kep, dove la vita quotidiana scorre semplice, scandita dal mare e dalle tradizioni.\n\nUn viaggio attraverso la storia, i paesaggi e le persone, che mi ha permesso di scoprire una Cambogia autentica e indimenticabile.",
    mapPoints: [
      { name: 'Phnom Penh', x: 220, y: 175, lat: 11.5564, lng: 104.9282 },
      { name: 'Battambang', x: 13, y: 103, lat: 13.1028, lng: 103.1982 },
      { name: 'Siem Reap', x: 103, y: 12, lat: 13.3633, lng: 103.8600 },
      { name: 'Kampot', x: 141, y: 260, lat: 10.5930, lng: 104.1640 },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrivo a Phnom Penh e Museo Nazione',
        locations: [
          {
            name: 'Museo Nazionale',
            lat: 11.566285656045393, 
            lng: 104.92911968017192,
            image: `${CLOUD}/v1771777099/IMG_0132_j11ky5.heic`,
            imageAlt: 'Museo Nazionale',
          },
          {
            name: 'Wat Phnom',
            lat: 11.576283426382695, 
            lng: 104.92300326510637,
            image: `${CLOUD}/v1771777134/IMG_0149_zyoxyi.heic`,
            imageAlt: 'Wat Phnom',
          },
          {
            name: 'Passeggiata lungo il fiume',
            lat: 11.573034035960719, 
            lng: 104.92924753173511,
            image: `${CLOUD}/v1771777107/IMG_0161_pmq2ke.heic`,
            imageAlt: 'Passeggiata lungo il fiume',
          }
        ],
      },
      {
        day: 2,
        title: 'Killing Field, Palazzo Reale e Silver Pagoda',
        locations: [
          {
            name: 'Killing Field - Choeung Ek',
            lat: 11.484465854350542, 
            lng: 104.90175543936641,
            image: `${CLOUD}/v1771778399/4-IMG_0190_uxiiht.heic`,
            imageAlt: 'Killing Field',
          },
          {
            name: 'Museo del Genocidio di Tuol Sleng',
            lat: 11.549071732662817, 
            lng: 104.91768582462478,
            image: `${CLOUD}/v1771778387/museo-tuol-sleng-phnom-penh-1_fjlpor.jpg`,
            imageAlt: 'Tuol Sleng',
          },
          {
            name: 'Palazzo Reale',
            lat: 11.564055676601367, 
            lng: 104.93182072406705,
            image: `${CLOUD}/v1763735057/photo-28_m2ekfl.jpg`,
            imageAlt: 'Palazzo Reale',
          },
          {
            name: 'Silver Pagoda',
            lat: 11.562542080823485, 
            lng: 104.9317992663962,
            image: `${CLOUD}/v1771778393/3-IMG_0215_qdnri4.heic`,
            imageAlt: 'Silver Pagoda',
          }
        ],
      },
      {
        day: 3,
        title: 'Viaggio verso Battambang, Street Art e Damrey Sor Pagoda',
        locations: [
          {
            name: 'Street Art',
            lat: 13.10038,
            lng: 103.19781,
            image: `${CLOUD}/v1763735049/2-IMG_0286_chnc7v.jpg`,
            imageAlt: 'Street Art',
          },
          {
            name: 'Damrey Sor Pagoda',
            lat: 13.09511,
            lng: 103.19748,
            image: `${CLOUD}/v1763735049/1-IMG_0293_utbprg.jpg`,
            imageAlt: 'Damrey Sor Pagoda',
          }
        ],
      },
      {
        day: 4,
        title: 'Vita Rurale, Ek Phnom Temple, Bamboo Train, Bat Cave e Somrong Knong Killing Field',
        locations: [
          {
            name: 'Produzione di carta di riso',
            lat: 13.14489,
            lng: 103.21352,
            image: `${CLOUD}/v1763735049/3-IMG_0333_adyi0l.jpg`,
            imageAlt: 'Produzione di carta di riso',
          },
          {
            name: 'Produzione di vino di riso',
            lat: 13.15482,
            lng: 103.21232,
            image: `${CLOUD}/v1763735049/2-IMG_0340_ceaoki.jpg`,
            imageAlt: 'Produzione di vino di riso',
          },
          {
            name: 'Wat Ek Phnom',
            lat: 13.16310,
            lng: 103.18837,
            image: `${CLOUD}/v1763735049/photo-23_ybu2fb.jpg`,
            imageAlt: 'Wat Ek Phnom',
          },
          {
            name: 'Vita rurale',
            lat: 13.12759,
            lng: 103.22056,
            image: `${CLOUD}/v1763735049/4-IMG_0322_kolvdm.jpg`,
            imageAlt: 'Vita rurale',
          },
          {
            name: 'Bamboo Train',
            lat: 13.06889,
            lng: 103.21730,
            image: `${CLOUD}/v1763735049/1-IMG_0431_bk4woz.jpg`,
            imageAlt: 'Bamboo Train',
          },
          {
            name: 'Bat Cave',
            lat: 13.02738,
            lng: 103.09956,
            image: `${CLOUD}/v1763735049/photo-20_igftfa.jpg`,
            imageAlt: 'Bat Cave',
          },
          {
            name: 'Somrong Knong Killing Field',
            lat: 13.02369,
            lng: 103.10033,
            image: `${CLOUD}/v1763735049/photo-21_rucq50.jpg`,
            imageAlt: 'Somrong Knong Killing Field',
          }
        ],
      },
      {
        day: 5,
        title: 'In barca verso Siem Reap e Pub Street',
        locations: [
          {
            name: 'Floating Village',
            lat: 13.31261,
            lng: 103.40187,
            image: `${CLOUD}/v1763735049/photo-19_oynzbt.jpg`,
            imageAlt: 'Floating Village',
          },
          {
            name: 'Immersi nei fiori di loto',
            lat: 13.21422,
            lng: 103.68250,
            image: `${CLOUD}/v1763735049/2-IMG_0653_uouiya.jpg`,
            imageAlt: 'Immersi nei fiori di loto',
          },
          {
            name: 'Lago Tonlé Sap',
            lat: 13.26166,
            lng: 103.70889,
            image: `${CLOUD}/v1763735049/1-IMG_0670_hqhw5g.jpg`,
            imageAlt: 'Lago Tonlé Sap',
          },
          {
            name: 'Siem Reap, Pub Street',
            lat: 13.35455,
            lng: 103.85422,
            image: `${CLOUD}/v1763735049/photo-17_bgww8h.jpg`,
            imageAlt: 'Siem Reap, Pub Street',
          }
        ],
      },
      {
        day: 6,
        title: 'Grande Circuito di Angkor',
        locations: [
          {
            name: 'Pre Rup Temple',
            lat: 13.43486,
            lng: 103.92146,
            image: `${CLOUD}/v1763735049/IMG_0696_gpztu6.jpg`,
            imageAlt: 'Pre Rup Temple',
          },
          {
            name: 'East Mebon Temple',
            lat: 13.44663,
            lng: 103.92120,
            image: `${CLOUD}/v1763735049/4-IMG_0780_afxacp.jpg`,
            imageAlt: 'East Mebon Temple',
          },
          {
            name: 'Ta Som Temple',
            lat: 13.46455,
            lng: 103.91177,
            image: `${CLOUD}/v1763735049/3-IMG_0816_qcvetw.jpg`,
            imageAlt: 'Ta Som Temple',
          },
          {
            name: 'Neak Poan Temple',
            lat: 13.46738,
            lng: 103.89480,
            image: `${CLOUD}/v1763735049/2-IMG_0878_revb3c.jpg`,
            imageAlt: 'Neak Poan Temple',
          },
          {
            name: 'Preah Khan Temple',
            lat: 13.46540,
            lng: 103.87142,
            image: `${CLOUD}/v1763735049/1-IMG_0930_yho4cy.jpg`,
            imageAlt: 'Preah Khan Temple',
          },
        ],
      },
      {
        day: 7,
        title: 'Piccolo Circuito di Angkor',
        locations: [
          {
            name: 'Alba ad Angkor Wat',
            lat: 13.41230,
            lng: 103.86736,
            image: `${CLOUD}/v1763735050/photo-14_plunxb.jpg`,
            imageAlt: 'Alba ad Angkor Wat',
          },
          {
            name: 'Porta di Angkor Thom',
            lat: 13.42645,
            lng: 103.85957,
            image: `${CLOUD}/v1763735050/photo-11_mbadbe.jpg`,
            imageAlt: 'Porta di Angkor Thom',
          },
          {
            name: 'Bayon Temple',
            lat: 13.44214,
            lng: 103.85918,
            image: `${CLOUD}/v1763735050/photo-10_bt20ut.jpg`,
            imageAlt: 'Bayon Temple',
          },
          {
            name: 'Baphuon Temple',
            lat: 13.44388,
            lng: 103.85686,
            image: `${CLOUD}/v1763735050/7-IMG_1374_is6cnc.jpg`,
            imageAlt: 'Baphuon Temple',
          },
          {
            name: 'Phimeanakas Temple',
            lat: 13.44567,
            lng: 103.85680,
            image: `${CLOUD}/v1763735050/6-IMG_1406_sex2tm.jpg`,
            imageAlt: 'Phimeanakas Temple',
          },
          {
            name: 'Preah Palilay Temple',
            lat: 13.44879,
            lng: 103.85524,
            image: `${CLOUD}/v1763735050/5-IMG_1422_f6ursa.jpg`,
            imageAlt: 'Preah Palilay Temple',
          },
          {
            name: 'Terrace of the Leper King',
            lat: 13.44740,
            lng: 103.85913,
            image: `${CLOUD}/v1763735050/4-IMG_1462_hzozf3.jpg`,
            imageAlt: 'Terrace of the Leper King',
          },
          {
            name: 'Ta Keo Temple',
            lat: 13.44476,
            lng: 103.88344,
            image: `${CLOUD}/v1763735050/3-IMG_1473_vaczxy.jpg`,
            imageAlt: 'Ta Keo Temple',
          },
          {
            name: 'Ta Prohm Temple',
            lat: 13.43504,
            lng: 103.88970,
            image: `${CLOUD}/v1763735050/2-IMG_1598_eiwxvh.jpg`,
            imageAlt: 'Ta Prohm Temple',
          },
          {
            name: 'Banteay Kdei Temple',
            lat: 13.43039,
            lng: 103.90338,
            image: `${CLOUD}/v1763735050/1-IMG_1666_zzwuml.jpg`,
            imageAlt: 'Banteay Kdei Temple',
          }
        ],
      },
      {
        day: 8,
        title: 'Grand Tour esteso di Angkor',
        locations: [
          {
            name: 'Banteay Srei Temple',
            lat: 13.59738,
            lng: 103.96571,
            image: `${CLOUD}/v1763735049/photo-05_qeom3w.jpg`,
            imageAlt: 'Banteay Srei Temple',
          },
          {
            name: 'Preah Ko Temple',
            lat: 13.34402,
            lng: 103.97391,
            image: `${CLOUD}/v1763735049/4-IMG_1805_qy6n5v.jpg`,
            imageAlt: 'Preah Ko Temple',
          },
          {
            name: 'Bakong Temple',
            lat: 13.33592,
            lng: 103.97628,
            image: `${CLOUD}/v1763735049/photo-04_vq986b.jpg`,
            imageAlt: 'Bakong Temple',
          },
          {
            name: 'Lolei Temple',
            lat: 13.35266,
            lng: 103.97456,
            image: `${CLOUD}/v1763735049/3-IMG_1892_pcrlpi.jpg`,
            imageAlt: 'Preah Ko Temple',
          },
          {
            name: 'La mia guida tuk tuk',
            lat: 13.36366,
            lng: 103.85211,
            image: `${CLOUD}/v1763735049/2-IMG_1898_tttidb.jpg`,
            imageAlt: 'La mia guida tuk tuk',
          },
          {
            name: 'Tamonto a Phnom Bakheng',
            lat: 13.42370,
            lng: 103.85597,
            image: `${CLOUD}/v1763735049/1-IMG_1979_gvpavu.jpg`,
            imageAlt: 'Tamonto a Phnom Bakheng',
          },
        ],
      },
      {
        day: 9,
        title: 'Koh Ker e Preah Vihear',
        locations: [
          {
            name: 'Koh Ker',
            lat: 13.78337,
            lng: 104.53788,
            image: `${CLOUD}/v1763735049/photo-02_euku4l.jpg`,
            imageAlt: 'Koh Ker',
          },
          {
            name: 'Preah Vihear',
            lat: 14.39086,
            lng: 104.68035,
            image: `${CLOUD}/v1763735049/IMG_2128_fekqyq.jpg`,
            imageAlt: 'Preah Vihear',
          },
        ],
      },
      {
        day: 10,
        title: 'Viaggio verso Kampot',
        locations: [
          {
            name: 'Kampot',
            lat: 10.60494,
            lng: 104.17976,
            image: `${CLOUD}/v1763735024/IMG_2199_xre6k0.jpg`,
            imageAlt: 'Kampot',
          },
        ],
      },
      {
        day: 11,
        title: 'Kampot e Piantagioni di pepe',
        locations: [
          {
            name: 'Piantagione di pepe',
            lat: 10.61336,
            lng: 104.17109,
            image: `${CLOUD}/v1763804680/3-IMG_2229_jyqzii.jpg`,
            imageAlt: 'piantagione di pepe',
          },
          {
            name: 'Mercato di Kampot',
            lat: 10.61601,
            lng: 104.18036,
            image: `${CLOUD}/v1763804680/4-IMG_2222_p7ou6m.jpg`,
            imageAlt: 'Mercato di Kampot',
          },
        ],
      },
      {
        day: 12,
        title: 'Kep e il mercato del granchio',
        locations: [
          {
            name: 'Mercato del granchio',
            lat: 10.48864,
            lng: 104.28876,
            image: `${CLOUD}/v1763804680/2-IMG_2259_ewrq5m.jpg`,
            imageAlt: 'Mercato del granchio',
          },
        ],
      },
      {
        day: 13,
        title: 'Rientro a Phnom Penh e mercato notturno',
        locations: [
          {
            name: 'Mercato notturno',
            lat: 11.57420,
            lng: 104.92779,
            image: `${CLOUD}/v1763735044/1-IMG_2286_vus5nh.jpg`,
            imageAlt: 'Mercato notturno',
          },
        ],
      },
      {
        day: 14,
        title: 'Mercato Russo e Partenza',
        locations: [
          {
            name: 'Mercato Russo',
            lat: 11.5411, 
            lng: 104.9143,
            image: `${CLOUD}/v1763735049/IMG_2281_jpg_mudfni.jpg`,
            imageAlt: 'Mercato Russo',
          },
        ],
      },
    ],
    narrativeBlocks: [
      {
        sectionTitle: 'Phnom Penh – Caos e mercati',
        narrative:
          "Phnom Penh è una città caotica e intensamente trafficata, dove il movimento è continuo e sembra non fermarsi mai. Le strade sono attraversate da un flusso costante di tuk tuk, remork moto e motorini che si intrecciano in ogni direzione, creando un equilibrio spontaneo che, nonostante l’apparente disordine, funziona perfettamente. Muoversi in tuk tuk è uno dei modi più autentici per vivere la città e osservare da vicino il ritmo della vita quotidiana.\n\nI mercati rappresentano l’espressione più genuina di Phnom Penh. Tra bancarelle fitte, strutture improvvisate e corridoi stretti, si svolge gran parte della vita locale. Qui si vende e si compra di tutto, soprattutto cibo, in un’atmosfera intensa e vivace.",
        image: `${CLOUD}/v1771064462/IMG_0124_ry9mbq.jpg`,
        imageAlt: 'Palazzo reale, Phnom Penh',
        side: 'right',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Phnom Penh – Storia e cibo',
        narrative:
          "Ho visitato alcune delle principali attrazioni di Phnom Penh, come il Museo Nazionale, il Palazzo Reale e la Pagoda d’Argento, luoghi che raccontano la storia e l’identità culturale del paese. Ma l’esperienza più intensa è stata la visita a un Killing Field appena fuori dalla città. È un luogo che trasmette una sensazione difficile da descrivere: l’aria sembra immobile, il silenzio è profondo e opprimente, e ogni cosa invita alla riflessione su ciò che è accaduto.\n\nPhnom Penh è anche una città in cui il cibo occupa un ruolo centrale nella vita quotidiana. Nei mercati e nei ristoranti locali si possono scoprire sapori autentici della tradizione cambogiana, come le rane fritte, il Lok Lak e l’Amok di pesce, preparato con spezie e latte di cocco. Piatti semplici ma ricchi di gusto, che raccontano la cultura e le abitudini del paese attraverso i suoi sapori.",
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
  {
    slug: 'dolomiti-2026',
    title: 'Dolomiti',
    subtitle: 'Settimana bianca tra Corvara, Sellaronda e le vette UNESCO',
    description:
      'Settimana bianca nelle Dolomiti: sci a Corvara, Sellaronda, Marmolada, 5 Torri, Cortina, Ortisei, Val di Fassa, Falzarego e Armentarola.',
    coverImage: `${CLOUD}/v1769031242/4-IMG_3652_ayzprm.jpg`,
    dates: { start: '2026-01-10', end: '2026-01-17' },
    location: 'Dolomiti',
    duration: '8 giorni',
    introductionText:
      "Le Dolomiti sono uno di quei posti che avevo sempre sognato di sciare. Questa volta base a Corvara, nel cuore del Sellaronda: un anello che collega quattro passi e quattro valli in un unico giro sugli sci. Oltre al Sellaronda ho esplorato la Marmolada, le 5 Torri, Cortina, e mi sono spinto fino a Ortisei, Santa Cristina e la Val di Fassa. Il Passo Falzarego e l'Armentarola hanno chiuso un viaggio indimenticabile tra le vette patrimonio UNESCO.",
    mapPoints: [
      { name: 'Corvara', x: 120, y: 100, lat: 46.5500, lng: 11.8740 },
      { name: 'Marmolada', x: 180, y: 140, lat: 46.4340, lng: 11.8600 },
      { name: 'Cortina', x: 200, y: 60, lat: 46.5405, lng: 12.1357 },
      { name: 'Ortisei', x: 50, y: 50, lat: 46.5743, lng: 11.6714 },
      { name: 'Val di Fassa', x: 130, y: 180, lat: 46.4650, lng: 11.7680 },
      { name: 'Armentarola', x: 80, y: 130, lat: 46.5630, lng: 11.9210 },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrivo a Corvara',
        locations: [
          { name: 'Corvara', lat: 46.5500, lng: 11.8740 },
        ],
      },
      {
        day: 2,
        title: 'Sellaronda',
        locations: [
          { name: 'Passo Campolongo', lat: 46.5290, lng: 11.8510 },
          { name: 'Passo Pordoi', lat: 46.4880, lng: 11.8140 },
          { name: 'Passo Sella', lat: 46.5090, lng: 11.7620 },
          { name: 'Passo Gardena', lat: 46.5530, lng: 11.8100 },
        ],
      },
      {
        day: 3,
        title: 'Giro Verde e Giro Arancio',
        locations: [
          { name: 'Arabba', lat: 46.4970, lng: 11.8730 },
          { name: 'Canazei', lat: 46.4767, lng: 11.7700 },
        ],
      },
      {
        day: 4,
        title: 'Marmolada',
        locations: [
          { name: 'Marmolada', lat: 46.4340, lng: 11.8600 },
        ],
      },
      {
        day: 5,
        title: '5 Torri e Cortina',
        locations: [
          { name: '5 Torri', lat: 46.5220, lng: 12.0700 },
          { name: 'Cortina', lat: 46.5405, lng: 12.1357 },
        ],
      },
      {
        day: 6,
        title: 'Ortisei e Seceda',
        locations: [
          { name: 'Ortisei', lat: 46.5743, lng: 11.6714 },
          { name: 'Seceda', lat: 46.5990, lng: 11.7270 },
        ],
      },
      {
        day: 7,
        title: 'Santa Cristina e Val di Fassa',
        locations: [
          { name: 'Santa Cristina', lat: 46.5580, lng: 11.7190 },
          { name: 'Val di Fassa', lat: 46.4650, lng: 11.7680 },
        ],
      },
      {
        day: 8,
        title: 'Passo Falzarego e Armentarola',
        locations: [
          { name: 'Passo Falzarego', lat: 46.5190, lng: 12.0090 },
          { name: 'Armentarola', lat: 46.5630, lng: 11.9210 },
        ],
      },
    ],
    narrativeBlocks: [
      {
        sectionTitle: 'Corvara e il Sellaronda',
        narrative:
          "Corvara è stata la mia base per tutta la settimana. Dal paese si accede direttamente al Sellaronda, il famoso giro che in un'unica giornata ti porta attraverso quattro passi – Campolongo, Pordoi, Sella e Gardena – collegando Corvara, Arabba, Canazei e Selva. È un'esperienza che ogni sciatore delle Dolomiti dovrebbe fare almeno una volta: piste ben preparate, panorami mozzafiato e la sensazione di aver percorso un anello intero attorno al massiccio dello Sella.",
        image: `${CLOUD}/v1769031248/10-IMG_3568_vmx1zc.jpg`,
        imageAlt: 'Corvara e le Dolomiti',
        side: 'right',
        imageSize: 'medium',
      },
      {
        sectionTitle: 'Giro Verde e Giro Arancio',
        narrative:
          "Oltre al Sellaronda classico ho provato anche il Giro Verde e il Giro Arancio, due varianti che permettono di esplorare zone diverse del comprensorio. Il Giro Verde segue un percorso più accessibile, ideale per godersi il paesaggio senza troppe piste impegnative. Il Giro Arancio aggiunge varietà e chilometri, regalando viste sempre diverse sulle cime dolomitiche che si tingono di rosa al tramonto.",
        image: `${CLOUD}/v1769031244/15-IMG_3485_ksjlk8.jpg`,
        imageAlt: 'Piste sulle Dolomiti',
        side: 'left',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Marmolada, 5 Torri e Cortina',
        narrative:
          "La Marmolada, la Regina delle Dolomiti, con il suo ghiacciaio e la sua forma inconfondibile, è stata una delle tappe più emozionanti. Da lì mi sono spostato verso le 5 Torri, uno dei gruppi più iconici, con quelle forme che sembrano uscite da un libro di fiabe. Cortina non poteva mancare: la perla delle Dolomiti, elegante e sempre suggestiva, incorniciata dalle montagne che hanno fatto da sfondo alle Olimpiadi.",
        image: `${CLOUD}/v1769031243/12-IMG_3537_trvy6m.jpg`,
        imageAlt: 'Marmolada e le Dolomiti',
        side: 'right',
        imageSize: 'large',
      },
      {
        sectionTitle: 'Ortisei e Seceda',
        narrative:
          "Ho raggiunto Ortisei e da lì sono salito in Seceda, la terrazza panoramica sopra la Val Gardena. La vista dalle seggiovie e dalle piste di Seceda è spettacolare: le vette si dispiegano a 360 gradi e quando il tempo è limpido si vedono le montagne fino all'orizzonte. Ortisei stesso è un borgo caratteristico, con le sue case in legno e l'atmosfera tirolese che si respira in ogni angolo.",
        image: `${CLOUD}/v1769031242/5-IMG_3639_csemol.jpg`,
        imageAlt: 'Seceda, Val Gardena',
        side: 'left',
        imageSize: 'medium',
      },
      {
        sectionTitle: 'Santa Cristina e Val di Fassa',
        narrative:
          "Santa Cristina, nel cuore della Val Gardena, è un altro dei paesi che ho visitato durante la settimana. Poi la Val di Fassa: una valle lunga e suggestiva che si estende verso il Trentino, con il Catinaccio e il gruppo del Sassolungo che dominano il panorama. Sciare qui significa immergersi in paesaggi che sembrano dipinti, con le creste dolomitiche che cambiano colore con la luce del sole.",
        image: `${CLOUD}/v1769031242/7-IMG_3596_icra3k.jpg`,
        imageAlt: 'Val di Fassa',
        side: 'right',
        imageSize: 'small',
      },
      {
        sectionTitle: 'Passo Falzarego e Armentarola',
        narrative:
          "Il Passo Falzarego collega la Val Badia con Cortina e offre piste panoramiche con vista sulla Tofana e sulle altre cime dell'Ampezzo. L'Armentarola, infine, è una delle piste più celebri delle Dolomiti: un lungo canalone che scende dalla Val di Fassa verso la Val Badia, spesso percorsa con l'ausilio del gatto delle nevi per la risalita. Un modo unico per chiudere una settimana tra le vette più belle del mondo.",
        image: `${CLOUD}/v1769031241/3-IMG_3661_qx3ucy.jpg`,
        imageAlt: 'Passo Falzarego',
        side: 'left',
        imageSize: 'medium',
      },
    ],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((v) => v.slug === slug);
}
