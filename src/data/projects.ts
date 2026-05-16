export interface Project {
  slug: string
  name: string
  category: string
  tags: string[]
  intro: string
  description: string
  what: string
  result: string
  url: string
  image: string
  metaDescription: string
}

export const projects: Project[] = [
  {
    slug: 'noctis',
    name: 'Noctis',
    category: 'E-commerce & Webdesign',
    tags: ['Webshop', 'E-commerce', 'Lifestyle'],
    intro: 'Noctis is een jong merk uit Amsterdam dat stijlvolle keukenproducten verkoopt.',
    description:
      'Noctis is een jong merk uit Amsterdam dat stijlvolle keukenproducten verkoopt. Het merk heeft een duidelijke identiteit: minimalistisch, hoogwaardig en gericht op een jonge, designbewuste doelgroep.',
    what:
      'Wij bouwden hun volledige webshop van A tot Z — van productpagina\'s en categorieën tot meertalige ondersteuning en een soepele checkout. Elk detail is afgestemd op de merkidentiteit van Noctis: strak, donker en impactvol.',
    result:
      'Het resultaat: een webshop die de uitstraling van het merk versterkt en inmiddels meer dan 5.000 klanten bedient. De conversieratio steeg direct na de lancering.',
    url: 'https://noctisessentials.com/nl',
    image: '/portfolio/noctis.webp',
    metaDescription:
      'Graphic Vision bouwde de volledige webshop voor Noctis — een Amsterdams lifestyle merk met meer dan 5.000 tevreden klanten.',
  },
  {
    slug: 'sequenceflow',
    name: 'SequenceFlow',
    category: 'Webdesign & Webdevelopment',
    tags: ['Webdesign', 'Tech', 'AI'],
    intro: 'SequenceFlow is een Nederlands AI-automatiseringsbedrijf dat intelligente workflows bouwt voor groeiende bedrijven.',
    description:
      'SequenceFlow helpt groeiende bedrijven met slimme AI-workflows die repetitieve taken automatiseren. Een sterk product, maar complex om uit te leggen aan nieuwe bezoekers.',
    what:
      'Wij ontwikkelden hun volledige website, strak, modern en technisch overtuigend. Van productpagina\'s per flow-categorie tot een uitgebreide FAQ en overtuigende case studies. De navigatie en structuur zijn zo opgebouwd dat bezoekers in één oogopslag begrijpen wat SequenceFlow doet.',
    result:
      'De site vertaalt een complex AI-product naar een helder en vertrouwenwekkend verhaal. SequenceFlow staat nu professioneel online en trekt kwalitatieve leads aan.',
    url: 'https://www.sequenceflow.io/',
    image: '/portfolio/sequenceflow.webp',
    metaDescription:
      'Graphic Vision ontwikkelde de website voor SequenceFlow — een AI automation platform dat complexe technologie helder en overtuigend presenteert.',
  },
  {
    slug: 'batavia-wonen',
    name: 'Batavia Wonen',
    category: 'Webdesign & Webdevelopment',
    tags: ['Webdesign', 'Vastgoed'],
    intro:
      'Batavia Wonen is een exclusief woonproject in hartje Lelystad — een voormalig bankgebouw getransformeerd naar 12 luxe, instapklare woningen.',
    description:
      'Batavia Wonen is een exclusief vastgoedproject in Lelystad. Een voormalig bankgebouw werd omgebouwd tot 12 luxe, instapklare appartementen. Het project vraagt om een website die de uitstraling en exclusiviteit van het project perfect weergeeft.',
    what:
      'Wij bouwden een stijlvolle projectwebsite die de uitstraling van het project weerspiegelt. Van individuele woningpagina\'s en liggingsinformatie tot een meertalige opzet en een directe contactkoppeling met de makelaar. Alles is gericht op het wekken van vertrouwen en het genereren van interesse.',
    result:
      'Een representatieve website die potentiële kopers direct aanspreekt en hen begeleidt naar een bezichtiging of contact met de makelaar.',
    url: 'https://batavia-wonen.nl/',
    image: '/portfolio/batavia-wonen.webp',
    metaDescription:
      'Graphic Vision ontwierp de projectwebsite voor Batavia Wonen — een exclusief woonproject in Lelystad met 12 luxe appartementen.',
  },
  {
    slug: 'regillio-simons',
    name: 'Regillio Simons',
    category: 'Webdesign',
    tags: ['Webdesign', 'Personal Brand'],
    intro: 'Regillio Simons is een professionele voetballer met een sterk persoonlijk merk.',
    description:
      'Regillio Simons is een professionele voetballer met een uitgesproken persoonlijke identiteit. Hij wilde een online aanwezigheid die zijn verhaal, carrière en persoonlijkheid krachtig en stijlvol presenteert.',
    what:
      'Wij bouwden zijn persoonlijke website — een strak, donker en krachtig digitaal visitekaartje dat zijn verhaal, expertise en carrière centraal zet. Met video-integratie, social media koppelingen en een design dat bij zijn merkidentiteit past: professioneel, ambitieus en authentiek.',
    result:
      'Een persoonlijke website die indruk maakt en Regillio als merk positioneert. Maximale impact met minimale afleidingen.',
    url: 'https://regilliosimons.com/',
    image: '/portfolio/regillio-simons.webp',
    metaDescription:
      'Graphic Vision ontwierp de persoonlijke website voor Regillio Simons — een professionele voetballer met een sterk persoonlijk merk.',
  },
  {
    slug: 'sustana',
    name: 'Sustana',
    category: 'Webdesign & Webdevelopment',
    tags: ['Webdesign', 'Energie', 'Duurzaamheid'],
    intro:
      'Sustana is een onafhankelijke energie- en verduurzamingsadviseur die zowel particulieren als bedrijven helpt met slimme energiekeuzes.',
    description:
      'Sustana helpt particulieren en bedrijven met energielevering, zonnepanelen, laadpalen en warmtepompen. Ze opereren als onafhankelijk adviseur in een markt waar vertrouwen cruciaal is.',
    what:
      'Wij ontwierpen en bouwden een heldere, professionele website die vertrouwen uitstraalt en bezoekers direct naar het juiste adviesgesprek leidt. De navigatiestructuur en teksten zijn bewust opgebouwd om twijfels weg te nemen en de drempel naar contact zo laag mogelijk te maken.',
    result:
      'Een professionele online aanwezigheid die aansluit bij de positionering van Sustana als betrouwbare en deskundige adviseur in de energiesector.',
    url: 'https://sustana.nl/',
    image: '/portfolio/sustana.webp',
    metaDescription:
      'Graphic Vision ontwierp de website voor Sustana — een duurzaamheidsadviseur die particulieren en bedrijven helpt met slimme energiekeuzes.',
  },
  {
    slug: 'almere-poort-run',
    name: 'Almere Poort Run',
    category: 'Webdesign & Webdevelopment',
    tags: ['Webdesign', 'Events', 'Sport'],
    intro: 'De Almere PoortRun is een hardloopevenement in Almere waar sport, food en verbinding samenkomen.',
    description:
      'De Almere PoortRun is een populair hardloopevenement in Almere dat atleten, foodliefhebbers en de lokale community samenbrengt. Het evenement heeft een sterke identiteit nodig die online energie uitstraalt.',
    what:
      'Wij bouwden de volledige evenementenwebsite van ticketverkoop en parcoursinformatie tot sponsorpagina\'s en een registratieformulier voor vrijwilligers. De website moest de energie en beleving van het evenement direct overbrengen op elke bezoeker.',
    result:
      'Een dynamische evenementenwebsite die bezoekers enthousiasmeert en aanzet tot actie — tickets kopen, vrijwilliger worden of sponsor worden.',
    url: 'https://almerepoortrun.nl/',
    image: '/portfolio/almere-poort-run.webp',
    metaDescription:
      'Graphic Vision bouwde de evenementenwebsite voor Almere Poort Run — met ticketverkoop, parcoursinformatie en vrijwilligersregistratie.',
  },
]
