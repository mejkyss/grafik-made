export interface Project {
  slug: string
  title: string
  tags: string[]
  summary: string
  intro: string
  zadani: string
  coHrozilo: string
  reseni: string
  vystup: string
  checklist: string[]
  typZakazky: string
  vystupMeta: string
  rok: string
  gallery: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: "katalog-sazba-a-export",
    title: "Katalog: sazba, návaznosti, export",
    tags: ["Katalogy", "Tisková data"],
    summary: "Konzistence, kontrola detailů a bezchybný výstup pro tisk.",
    intro: "Komplexní katalogová zakázka vyžadující precizní sazbu a kontrolu návazností mezi stránkami.",
    zadani: "Klient potřeboval připravit rozsáhlý produktový katalog s důrazem na konzistentní vizuální styl a bezchybné tiskové výstupy.",
    coHrozilo: "Nekonzistence mezi stránkami, chybné odkazy a problémy s barevností při tisku.",
    reseni: "Zavedení systematické kontroly návazností, vytvoření šablon a důsledná kontrola před exportem.",
    vystup: "Tiskový PDF soubor připravený pro ofsetový tisk, včetně kontrolního náhledu.",
    checklist: ["Kontrola spadávek", "Ověření fontů", "Barevné profily", "Návaznosti stránek", "Finální kontrola"],
    typZakazky: "Katalog",
    vystupMeta: "Tiskové PDF",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Rozložení dvoustránky" },
      { src: "/placeholder-2.jpg", caption: "Detail produktové stránky" },
      { src: "/placeholder-3.jpg", caption: "Finální tiskový výstup" }
    ]
  },
  {
    slug: "kalendare-varianty",
    title: "Kalendáře: varianty, kontrola a produkce",
    tags: ["Kalendáře", "Předtisk"],
    summary: "Správné spadávky, přetisky, rozpis a kontrola.",
    intro: "Výroba několika variant kalendářů s různými formáty a způsoby vazby.",
    zadani: "Připravit tiskové podklady pro tři varianty stolních kalendářů a jeden nástěnný kalendář.",
    coHrozilo: "Chyby v datech svátků, špatné spadávky u spirálové vazby, nesprávné pořadí stránek.",
    reseni: "Vytvoření automatizovaného workflow pro kontrolu dat a generování variant.",
    vystup: "Kompletní sada tiskových PDF souborů pro všechny varianty.",
    checklist: ["Kontrola svátků", "Spadávky pro vazbu", "Pořadí stránek", "Barevnost", "Kontrola textů"],
    typZakazky: "Kalendáře",
    vystupMeta: "Tiskové PDF",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Stolní kalendář" },
      { src: "/placeholder-2.jpg", caption: "Nástěnný kalendář" },
      { src: "/placeholder-3.jpg", caption: "Detail měsíční stránky" }
    ]
  },
  {
    slug: "etikety-a-obaly",
    title: "Etikety a obaly: technologie a přesnost",
    tags: ["Obaly", "Etikety"],
    summary: "Příprava dat pro různé materiály a technologie tisku.",
    intro: "Příprava tiskových dat pro etikety na různé materiály a technologie tisku.",
    zadani: "Vytvořit tiskové podklady pro produktové etikety s různými výseky a materiály.",
    coHrozilo: "Nesprávné výseky, problémy s bílým podtiskem, špatná registrace barev.",
    reseni: "Přesná specifikace výseků, správné nastavení přetisků a kontrola separací.",
    vystup: "Tisková data připravená pro flexotisk a digitální tisk.",
    checklist: ["Výseky a kontura", "Bílý podtisk", "Přetisky", "Separace", "Kontrolní výtisk"],
    typZakazky: "Etikety",
    vystupMeta: "Tisková data",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Náhled etikety" },
      { src: "/placeholder-2.jpg", caption: "Detail výseku" },
      { src: "/placeholder-3.jpg", caption: "Tisková separace" }
    ]
  },
  {
    slug: "personifikace-databaze",
    title: "Personifikované tiskoviny: data a automatizace",
    tags: ["Personifikace", "Tisk"],
    summary: "Číslování, databáze jmen, kontrola výstupu.",
    intro: "Automatizované generování personifikovaných materiálů z databáze.",
    zadani: "Připravit systém pro generování jmenovek a identifikačních karet z databáze zaměstnanců.",
    coHrozilo: "Chyby v datech, špatné kódování diakritiky, nekonzistentní formátování.",
    reseni: "Vytvoření automatizovaného workflow s kontrolou dat a validací výstupů.",
    vystup: "Sada personifikovaných PDF souborů připravených pro tisk.",
    checklist: ["Validace databáze", "Kontrola diakritiky", "Formátování", "Číslování", "Kontrolní tisk"],
    typZakazky: "Personifikace",
    vystupMeta: "PDF soubory",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Databázové rozhraní" },
      { src: "/placeholder-2.jpg", caption: "Ukázka jmenovky" },
      { src: "/placeholder-3.jpg", caption: "Kontrolní sestava" }
    ]
  },
  {
    slug: "technicke-podklady-realizace",
    title: "Technické podklady pro realizaci",
    tags: ["Technická grafika", "Výroba"],
    summary: "Srozumitelné podklady, značení, specifikace.",
    intro: "Příprava technických podkladů pro výrobní a montážní procesy.",
    zadani: "Vytvořit sadu technických výkresů a specifikací pro výrobu reklamních stojanů.",
    coHrozilo: "Nejasné značení, chybějící kóty, nesprávné materiálové specifikace.",
    reseni: "Zavedení standardizovaného systému značení a kontrolních bodů.",
    vystup: "Kompletní technická dokumentace pro výrobu.",
    checklist: ["Kótování", "Materiály", "Značení", "Montážní postup", "Kontrola rozměrů"],
    typZakazky: "Technická grafika",
    vystupMeta: "Technická dokumentace",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Technický výkres" },
      { src: "/placeholder-2.jpg", caption: "Detail specifikace" },
      { src: "/placeholder-3.jpg", caption: "Montážní schéma" }
    ]
  },
  {
    slug: "produktove-foto-video",
    title: "Produktová prezentace: foto a střih videa",
    tags: ["Foto", "Video"],
    summary: "Čisté výstupy pro web, katalog a obchod.",
    intro: "Komplexní produktová prezentace zahrnující fotografii a video.",
    zadani: "Vytvořit sadu produktových fotografií a krátké prezentační video.",
    coHrozilo: "Nekonzistentní světlo, špatné ořezy, nekvalitní střih videa.",
    reseni: "Standardizovaný workflow pro focení a postprodukci.",
    vystup: "Sada produktových fotografií a prezentační video.",
    checklist: ["Nasvícení", "Ořezy", "Retuš", "Barevná korekce", "Export formátů"],
    typZakazky: "Foto a video",
    vystupMeta: "Fotografie a video",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Produktová fotografie" },
      { src: "/placeholder-2.jpg", caption: "Detail produktu" },
      { src: "/placeholder-3.jpg", caption: "Záběr z videa" }
    ]
  },
  {
    slug: "brozura-firemni-profil",
    title: "Firemní brožura: profil a služby",
    tags: ["Katalogy", "Tisková data"],
    summary: "Reprezentativní materiál pro obchodní jednání.",
    intro: "Příprava firemní brožury prezentující služby a reference.",
    zadani: "Vytvořit reprezentativní brožuru pro obchodní účely s důrazem na kvalitu tisku.",
    coHrozilo: "Nekonzistentní vizuální styl, problémy s barvami při tisku.",
    reseni: "Důsledná práce s firemní identitou a kontrola barevnosti.",
    vystup: "Tisková data pro digitální a ofsetový tisk.",
    checklist: ["Firemní identita", "Barevnost", "Papír", "Vazba", "Kontrolní tisk"],
    typZakazky: "Brožura",
    vystupMeta: "Tiskové PDF",
    rok: "2023",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Obálka brožury" },
      { src: "/placeholder-2.jpg", caption: "Vnitřní stránky" },
      { src: "/placeholder-3.jpg", caption: "Tištěný výsledek" }
    ]
  },
  {
    slug: "vizitky-serie",
    title: "Série vizitek: více variant, jeden systém",
    tags: ["Tisková data", "Personifikace"],
    summary: "Jednotný vizuální styl pro celou firmu.",
    intro: "Příprava vizitek pro všechny zaměstnance s automatizovaným workflow.",
    zadani: "Vytvořit systém pro generování vizitek z databáze kontaktů.",
    coHrozilo: "Chyby v kontaktech, nekonzistentní formátování, problémy s diakritkou.",
    reseni: "Automatizace s kontrolou dat a validací výstupů.",
    vystup: "Tisková data pro všechny varianty vizitek.",
    checklist: ["Databáze kontaktů", "Formátování", "Diakritika", "Spadávky", "Kontrola"],
    typZakazky: "Vizitky",
    vystupMeta: "Tisková data",
    rok: "2023",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Náhled vizitky" },
      { src: "/placeholder-2.jpg", caption: "Varianty" },
      { src: "/placeholder-3.jpg", caption: "Tiskový arch" }
    ]
  },
  {
    slug: "roll-up-a-bannery",
    title: "Roll-up a bannery: velkoformát",
    tags: ["Technická grafika", "Výroba"],
    summary: "Příprava dat pro velkoformátový tisk.",
    intro: "Velkoformátová grafika pro veletrhy a prezentace.",
    zadani: "Připravit sadu roll-upů a bannerů pro firemní prezentaci.",
    coHrozilo: "Nízké rozlišení, špatné barvy pro solventní tisk.",
    reseni: "Správná příprava dat s ohledem na technologii tisku.",
    vystup: "Tisková data pro velkoformátový tisk.",
    checklist: ["Rozlišení", "Barevný profil", "Rozměry", "Ořezové značky", "Kontrola"],
    typZakazky: "Velkoformát",
    vystupMeta: "Tisková data",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Roll-up design" },
      { src: "/placeholder-2.jpg", caption: "Banner" },
      { src: "/placeholder-3.jpg", caption: "Realizace" }
    ]
  },
  {
    slug: "letaky-akce",
    title: "Akční letáky: rychlost a přesnost",
    tags: ["Tisková data", "Předtisk"],
    summary: "Opakovaná příprava materiálů pro akční nabídky.",
    intro: "Pravidelná příprava akčních letáků s krátkými termíny.",
    zadani: "Připravovat tiskové podklady pro týdenní akční letáky.",
    coHrozilo: "Chyby v cenách, špatné produktové fotografie, termínové problémy.",
    reseni: "Zavedení efektivního workflow s kontrolními body.",
    vystup: "Tisková data dodávaná v pravidelných intervalech.",
    checklist: ["Ceny", "Produkty", "Texty", "Termíny", "Kontrola"],
    typZakazky: "Letáky",
    vystupMeta: "Tiskové PDF",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Akční leták" },
      { src: "/placeholder-2.jpg", caption: "Detail nabídky" },
      { src: "/placeholder-3.jpg", caption: "Tisk" }
    ]
  },
  {
    slug: "obalovy-design",
    title: "Obalový design: od návrhu k výrobě",
    tags: ["Obaly", "Technická grafika"],
    summary: "Kompletní příprava podkladů pro výrobu obalů.",
    intro: "Technická příprava obalového designu pro sériovou výrobu.",
    zadani: "Připravit technické podklady pro výrobu produktových obalů.",
    coHrozilo: "Nesprávné rillery, problémy s lepením, chybné rozměry.",
    reseni: "Spolupráce s výrobou a testování prototypů.",
    vystup: "Technická dokumentace a tisková data.",
    checklist: ["Rozměry", "Rillery", "Lepení", "Tisk", "Prototyp"],
    typZakazky: "Obaly",
    vystupMeta: "Technická data",
    rok: "2023",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Rozložení obalu" },
      { src: "/placeholder-2.jpg", caption: "Prototyp" },
      { src: "/placeholder-3.jpg", caption: "Finální výrobek" }
    ]
  },
  {
    slug: "fotomontaz-produkty",
    title: "Fotomontáž: produkty v kontextu",
    tags: ["Foto", "Video"],
    summary: "Zasazení produktů do lifestyle prostředí.",
    intro: "Vytváření fotomontáží pro prezentaci produktů.",
    zadani: "Zasadit produktové fotografie do lifestyle prostředí pro katalog.",
    coHrozilo: "Nerealistické stíny, špatná perspektiva, nekonzistentní světlo.",
    reseni: "Precizní práce s perspektivou a osvětlením.",
    vystup: "Sada fotomontáží připravených pro tisk i web.",
    checklist: ["Perspektiva", "Stíny", "Světlo", "Barvy", "Export"],
    typZakazky: "Fotomontáž",
    vystupMeta: "Fotografie",
    rok: "2024",
    gallery: [
      { src: "/placeholder-1.jpg", caption: "Původní fotografie" },
      { src: "/placeholder-2.jpg", caption: "Výsledná montáž" },
      { src: "/placeholder-3.jpg", caption: "Použití v katalogu" }
    ]
  }
]

// Prefix any leading-slash asset paths with the runtime base path
const __BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

function prefixPaths(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(prefixPaths)
  }
  if (obj && typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      const v = obj[k]
      if (typeof v === 'string' && v.startsWith('/')) {
        obj[k] = __BASE_PATH + v
      } else if (typeof v === 'object' && v !== null) {
        prefixPaths(v)
      }
    }
  }
  return obj
}

prefixPaths(projects)

export interface Product {
  id: string
  title: string
  price: string
  description: string
  features: string[]
  turnaround: string
  subject: string
  badges?: string[]
  note?: string
}

export const products: Product[] = [
  {
    id: "kontrola-tiskovych-dat",
    title: "Kontrola tiskových dat",
    price: "od 1 500 Kč",
    description: "Důkladná kontrola vašich tiskových podkladů před odesláním do tiskárny.",
    features: [
      "Kontrola rozlišení a barevnosti",
      "Ověření spadávek a ořezových značek",
      "Písemný report s nálezy"
    ],
    turnaround: "1-2 pracovní dny",
    subject: "Poptávka: Kontrola tiskových dat",
    badges: ["Rychle", "Nejčastější"]
  },
  {
    id: "priprava-pdf-pro-tisk",
    title: "Příprava PDF pro tisk",
    price: "od 2 500 Kč",
    description: "Kompletní příprava tiskového PDF ze zdrojových souborů.",
    features: [
      "Export z InDesign, Illustrator, Photoshop",
      "Správné barevné profily a nastavení",
      "Připraveno pro konkrétní tiskovou technologii"
    ],
    turnaround: "1-3 pracovní dny",
    subject: "Poptávka: Příprava PDF pro tisk",
    badges: ["Tisková data", "Nejčastější"]
  },
  {
    id: "personifikovane-tiskoviny",
    title: "Personifikované tiskoviny",
    price: "od 4 900 Kč",
    description: "Automatizované generování personifikovaných materiálů z vaší databáze.",
    features: [
      "Zpracování databáze (Excel, CSV)",
      "Generování variant s proměnnými daty",
      "Kontrola a validace výstupů"
    ],
    turnaround: "3-5 pracovních dnů",
    subject: "Poptávka: Personifikované tiskoviny",
    badges: ["Personifikace"]
  },
  {
    id: "produktova-prezentace",
    title: "Produktová prezentace: foto nebo střih",
    price: "od 3 900 Kč",
    description: "Profesionální produktová fotografie nebo střih prezentačního videa.",
    features: [
      "Focení na bílém pozadí nebo v kontextu",
      "Základní retuš a úpravy",
      "Export pro web i tisk"
    ],
    turnaround: "3-5 pracovních dnů",
    subject: "Poptávka: Produktová prezentace",
    badges: ["Rychle"]
  },
  {
    id: "stitky",
    title: "Štítky",
    price: "od 1 500 Kč",
    description: "Štítky na produkty, obaly nebo značení. Připravím tisková data podle technologie a materiálu.",
    features: [
      "Příprava dat podle technologie",
      "Kontrola výseků a rozměrů",
      "Správné barevné profily"
    ],
    turnaround: "1-2 pracovní dny",
    subject: "Poptávka: Štítky",
    badges: ["Rychle", "Tisková data"]
  },
  {
    id: "vizitky",
    title: "Vizitky",
    price: "od 900 Kč",
    description: "Čistý návrh nebo úprava podkladů, kontrola pro tisk a bezchybný výstup.",
    features: [
      "Návrh nebo úprava designu",
      "Kontrola tiskových dat",
      "Export pro konkrétní tiskárnu"
    ],
    turnaround: "1-2 pracovní dny",
    subject: "Poptávka: Vizitky",
    badges: ["Rychle", "Nejčastější"]
  },
  {
    id: "dl",
    title: "DL",
    price: "od 1 200 Kč",
    description: "DL letáky, poukazy nebo informační kartičky. Správná sazba, export a kontrola detailů.",
    features: [
      "Sazba podle podkladů",
      "Kontrola rozměrů DL formátu",
      "Tisková data připravená pro výrobu"
    ],
    turnaround: "1-3 pracovní dny",
    subject: "Poptávka: DL",
    badges: ["Tisková data"]
  },
  {
    id: "vstupenky",
    title: "Vstupenky",
    price: "od 2 500 Kč",
    description: "Vstupenky včetně číslování nebo personifikace. Databáze, kontrola výstupu, připraveno pro tisk.",
    features: [
      "Personifikace z databáze",
      "Číslování podle požadavků",
      "Kontrolní sestava a tiskové PDF"
    ],
    turnaround: "2-4 pracovní dny",
    subject: "Poptávka: Vstupenky",
    badges: ["Personifikace", "Tisková data"]
  },
  {
    id: "kalendare",
    title: "Kalendáře",
    price: "od 3 500 Kč",
    description: "Kompletní příprava kalendářů všech typů pro tisk.",
    features: [
      "Všechny formáty kalendářů",
      "Kontrola svátků a dat",
      "Tisková data s kontrolou vazby"
    ],
    turnaround: "3-5 pracovních dnů",
    subject: "Poptávka: Kalendáře",
    badges: ["Tisková data"],
    note: "Kalendária pro aktuální a následující rok!\nTýdenní, měsíční, tříměsíční, roční, dvouleté, plánovací a diář."
  }
]

export const filterTags = [
  "Vše",
  "Tisková data",
  "Katalogy",
  "Kalendáře",
  "Personifikace",
  "Obaly",
  "Technická grafika",
  "Foto",
  "Video"
]

export const services = [
  {
    title: "Tisková data a předtisk",
    description: "Kontrola, opravy a příprava PDF pro různé tiskové technologie.",
    deliverables: [
      "Kontrola tiskových dat",
      "Opravy a úpravy podkladů",
      "Export PDF pro konkrétní technologii",
      "Preflight report"
    ]
  },
  {
    title: "Tiskoviny: katalogy, kalendáře, personifikace",
    description: "Sazba a příprava složitějších tiskových materiálů.",
    deliverables: [
      "Sazba katalogů a brožur",
      "Příprava kalendářů všech typů",
      "Personifikované materiály z databáze",
      "Číslované a variabilní tiskoviny"
    ]
  },
  {
    title: "Technické podklady pro výrobu a realizaci",
    description: "Srozumitelné podklady pro výrobní a montážní procesy.",
    deliverables: [
      "Technické výkresy a specifikace",
      "Podklady pro řezání a frézování",
      "Montážní schémata",
      "Materiálové rozpisy"
    ]
  },
  {
    title: "Řešení problematických zakázek",
    description: "Když standardní postup nestačí a je potřeba najít řešení.",
    deliverables: [
      "Analýza problému",
      "Návrh řešení",
      "Realizace oprav",
      "Kontrola výsledku"
    ]
  },
  {
    title: "Produktová prezentace: foto, video, střih",
    description: "Vizuální prezentace produktů pro různá média.",
    deliverables: [
      "Produktová fotografie",
      "Střih prezentačního videa",
      "Retuš a postprodukce",
      "Export pro web, katalog, e-shop"
    ]
  },
  {
    title: "Tvorba webu na míru",
    description: "Vytvořím vám moderní web, který vypadá skvěle a zároveň funguje. Firemní web, portfolio, landing page nebo jednoduchý katalog služeb.",
    deliverables: [
      "web na míru podle vašeho oboru a cíle",
      "portfolio nebo ukázky realizací",
      "základní SEO nastavení",
      "indexaci a napojení na Google (Search Console)",
      "rychlost, responzivitu, moderní vzhled",
      "možnost doplnit články a sekci ke stažení"
    ],
    price: "8 000 Kč",
    note: "Úplná webová stránka s veškerými SEO optimalizacemi, funkcionalitou, indexací a optimalizací."
  }
]

export const collaborationSteps = [
  {
    number: "1",
    title: "zadání od klienta"
  },
  {
    number: "2",
    title: "návrh řešení"
  },
  {
    number: "3",
    title: "potvrzení rozsahu a ceny"
  },
  {
    number: "4",
    title: "realizace"
  }
]

export const realizaceGallery = [
  {
    id: "etikety-vzory",
    title: "Etikety - vzory",
    src: "/Realizace_2000-2026/ETIKETY_VZORY.jpg",
    category: "Etikety"
  },
  {
    id: "kalendaria",
    title: "Kalendária",
    src: "/Realizace_2000-2026/KALENDARIA.jpg",
    category: "Kalendáře"
  },
  {
    id: "komiks",
    title: "Komiks",
    src: "/Realizace_2000-2026/KOMIKS.jpg",
    category: "Ilustrace"
  },
  {
    id: "nabidkove-listy",
    title: "Nabídkové listy",
    src: "/Realizace_2000-2026/NABIDKOVE_LISTY.jpg",
    category: "Tiskoviny"
  },
  {
    id: "etikety-1",
    title: "Etikety - kolekce 1",
    src: "/Realizace_2000-2026/ETIKETY_1.jpg",
    category: "Etikety"
  },
  {
    id: "etikety-2",
    title: "Etikety - kolekce 2",
    src: "/Realizace_2000-2026/ETIKETY_2.jpg",
    category: "Etikety"
  },
  {
    id: "ilustrace-2",
    title: "Produktové ilustrace",
    src: "/Realizace_2000-2026/ILUSTRACE_2.jpg",
    category: "Ilustrace"
  },
  {
    id: "fotoobrazy",
    title: "Fotoobrazy",
    src: "/Realizace_2000-2026/FOTOOBRAZY.jpg",
    category: "Foto"
  },
  {
    id: "logotypy",
    title: "Logotypy",
    src: "/Realizace_2000-2026/LOGOTYPY.jpg",
    category: "Grafika"
  },
  {
    id: "pred-ai",
    title: "Před AI",
    src: "/Realizace_2000-2026/PRED_AI.jpg",
    category: "Ilustrace"
  },
  {
    id: "ilustrace-1",
    title: "Technické ilustrace",
    src: "/Realizace_2000-2026/ILUSTRACE_1.jpg",
    category: "Ilustrace"
  },
  {
    id: "poukazy",
    title: "Poukazy",
    src: "/Realizace_2000-2026/POUKAZY.jpg",
    category: "Tiskoviny"
  },
  {
    id: "tabule-projektu",
    title: "Tabule projektů",
    src: "/Realizace_2000-2026/TABULE_PROJEKTU.jpg",
    category: "Grafika"
  },
  {
    id: "tiskoviny-ostatni",
    title: "Tiskoviny ostatní",
    src: "/Realizace_2000-2026/TISKOVINY_OSTATNI.jpg",
    category: "Tiskoviny"
  }
]

export const quickPrintCatalog = [
  {
    id: "stitky-1",
    title: "Vzory štítků - květinové",
    src: "/Rychle-tiskoviny/VZORY_STITKY_1.jpg",
    type: "image",
    pdf: "/Rychle-tiskoviny/VZORY_STITKY.pdf"
  },
  {
    id: "stitky-2",
    title: "Vzory štítků - abstraktní",
    src: "/Rychle-tiskoviny/VZORY_STITKY_2.jpg",
    type: "image",
    pdf: "/Rychle-tiskoviny/VZORY_STITKY.pdf"
  },
  {
    id: "poukazy",
    title: "Náhledy poukazů",
    src: "/Rychle-tiskoviny/NAHLED_POUKAZY.jpg",
    type: "image",
    pdf: "/Rychle-tiskoviny/VZORY_POUKAZY.pdf"
  },
  {
    id: "vizitky",
    title: "Náhledy vizitek",
    src: "/Rychle-tiskoviny/NAHLED_VIZITKY.jpg",
    type: "image",
    pdf: "/Rychle-tiskoviny/VZORY_VIZITKY.pdf"
  },
  {
    id: "vstupenky",
    title: "Náhledy vstupenek",
    src: "/Rychle-tiskoviny/NAHLED_VSTUPENKY.jpg",
    type: "image",
    pdf: "/Rychle-tiskoviny/VZORY_VSTUPENKY.pdf"
  }
]
