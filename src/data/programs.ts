// Center copy is taken from official Teen Challenge sources:
// Europe Teen Challenge Lithuania page, VšĮ „TC Laisva valia“ site,
// and publicly confirmed center locations.

export type Program = {
  id: string;
  number: string;
  slug: string;
  title: string;
  location: string;
  audience: string;
  established: string;
  duration?: string;
  description: string;
  longDescription: string[];
  image: string;
  imageAlt: string;
  href: string;
};

export const programsIntro = {
  title: "Mūsų veikla",
  description:
    "Teen Challenge Lietuva įkurta 2001 m. kaip tarnystė priklausomiems ir socialiai pažeistiems žmonėms. Pagrindinė veikla vyksta reabilitacijos centruose – padedant paaugliams ir suaugusiesiems įveikti gyvenimą valdančias problemas pagal Kristaus centro perspektyvą. Šiuo metu Lietuvoje veikia trys pelno nesiekiantys reabilitacijos centrai. Jie teikia pagalbą visą parą ir siūlo programas, padedančias studentams išsilaisvinti iš alkoholio, narkotikų ir kitų psichotropinių medžiagų.",
};

export const programs: Program[] = [
  {
    id: "verzuva",
    number: "01",
    slug: "tc-verzuva",
    title: "TC Veržuva",
    location: "Veržuvos g. 32, Vilnius",
    audience: "Vyrų bendruomenė",
    established: "2002 m.",
    duration: "6–12 mėn.",
    description:
      "Reabilitacijos centras Vilniuje. Tolesnės priežiūros programa trunka nuo 6 iki 12 mėnesių ir padeda grįžti į savarankišką gyvenimą.",
    longDescription: [
      "Reabilitacijos centras „TC Veržuva“ oficialiai įkurtas 2002 m. Tai vyrų reabilitacijos bendruomenė, įsikūrusi Veržuvos g. 32, Vilniuje.",
      "Mūsų tolesnės priežiūros programa trunka nuo 6 iki 12 mėnesių. Ji padeda programą baigusiems žmonėms visavertiškai įsilieti į visuomenę ir palydi asmenis pereinant iš izoliacijos į savo namų bendruomenes.",
      "Pagrindinis mūsų tikslas – apsaugoti studentus nuo grįžimo į seną gyvenimą: įtraukti juos į tarnystę, Biblijos studijas ir stiprinti savarankiško gyvenimo įgūdžius.",
    ],
    image: "images/program-rehab.jpg",
    imageAlt: "Ramus rytas gamtoje. Iliustracinė nuotrauka apie vidinį atsinaujinimą.",
    href: "/musu-veikla/tc-verzuva",
  },
  {
    id: "laisva-valia",
    number: "02",
    slug: "tc-laisva-valia",
    title: "TC Laisva valia",
    location: "Pamiškės g. 12, Šlienava, Kauno r.",
    audience: "Moterys ir mamos su vaikais",
    established: "2011 m.",
    duration: "12–14 mėn.",
    description:
      "Moterų reabilitacijos centras Šlienavoje. Socialinė ir psichologinė pagalba moterims, taip pat mamoms su mažamečiais vaikais.",
    longDescription: [
      "Viešoji įstaiga „TC Laisva valia“ yra pelno nesiekianti organizacija, kuri savo veiklą pradėjo 2011 m. balandžio 28 d. Įstaigos steigėjas yra Labdaros ir paramos fondas „Teen Challenge“. Įstaigos veikla yra siejama su Lietuvos evangelinio tikėjimo krikščionių sąjunga.",
      "Mes teikiame socialines ir psichologines reabilitacijos paslaugas moterims, priklausomoms nuo psichoaktyviųjų medžiagų. Esame įsikūrę Kauno marių pusiasalyje į rytus nuo Kauno miesto, Šlienavos gyvenvietėje. Mūsų įstaigoje nuolat gyvena nuo 7 iki 13 darbingo amžiaus moterų, turinčių priklausomybę nuo narkotikų, alkoholio ar vaistų. Dalis centro darbuotojų taip pat turėję priklausomybę žmonės, baigę reabilitacijos kursą ir turintys blaivaus gyvenimo patirtį.",
      "Centro privalumas – galimybė priimti moteris su vaikais ir sudaryti sąlygas sveikiems mamos ir vaiko santykiams.",
      "Asmenys, priklausomi nuo psichoaktyviųjų medžiagų, yra praradę svajones, tikėjimą savimi, galimybę kontroliuoti savo gyvenimą. Svaigalus jie dažniausiai pasirenka kaip psichologinės gynybos būdą apsiginti nuo „neteisingo“ pasaulio, kuriame neįmanoma būti laimingam. Šiuo atveju veikia standartinė vidinė programa: „Manęs negerbia, manęs nepripažįsta, aš esu niekas, aš nežinau, ką veikti, aš negaunu, ko noriu. Todėl pasitraukiu iš šio žiauraus pasaulio į iliuzinį, kuriame viskas gerai“.",
      "Mes siekiame, kad moterys pačios dalyvautų savo įgalinime, t. y. kad suprastų, jog turi nepanaudotų energijos ir varomosios jėgos išteklių, kad atsikratytų aukos mąstysenos bei matytų aplinką kaip esančią pilną išteklių. Pilnas reabilitacijos kursas trunka nuo 12 iki 14 mėnesių.",
      "Beveik visi žmonės, priklausomi nuo psichoaktyviųjų medžiagų, išgyvena pridėtinį bejėgiškumą ir netikėjimą pokyčiais, o to rezultatas – apatija, noro kovoti dėl daugiau galių stoka. Todėl, jei norime XXI amžiuje gyventi be narkotikų, turime susimąstyti – kuo juos galima pakeisti, kad žemės gyventojai patirtų kuo mažiau kančių, skausmo arba mokėtų kitaip su kylančiomis problemomis bei jausmais susitvarkyti. Todėl stenkimės visuomenėje įtvirtinti tokias žinias ir nuostatas, kurios palengvintų žmonių gyvenimą, kad jiems lengviau būtų kovoti su savo trūkumais bei problemomis ir šitas jų kančios kelias trumpėtų. Siekime, kad gyvenimas taptų kupinas Išminties, Teisingumo, Tikėjimo ir Meilės.",
    ],
    image: "images/program-community.jpg",
    imageAlt: "Žmonių grupė, susėdusi kartu. Iliustracinė nuotrauka.",
    href: "/musu-veikla/tc-laisva-valia",
  },
  {
    id: "pikeliai",
    number: "03",
    slug: "pikeliai",
    title: "Pikeliai",
    location: "Pikeliai, Kėdainių r.",
    audience: "Vyrų savarankiško gyvenimo centras",
    established: "2003 m.",
    description:
      "Krikščioniški savarankiškumo namai Pikeliuose. Pagalba vyrams, siekiantiems įveikti priklausomybes ir mokytis gyventi savarankiškai.",
    longDescription: [
      "Teen Challenge savarankiško gyvenimo centras vyrams veikia nuo 2003 m. Jis įsikūręs Pikeliuose, Kėdainių rajone, ir žinomas kaip Krikščioniški savarankiškumo namai.",
      "Centre gali gyventi iki 18 studentų, kovojančių su priklausomybėmis. Programa grindžiama „Teen Challenge“ studentų knygomis, asmeniniu konsultavimu ir pastoracine globa.",
      "Dažnai mus lanko svečiai iš bažnyčių, kurie dalijasi Dievo Žodžiu ir meldžiasi už reikmes.",
    ],
    image: "images/program-after.jpg",
    imageAlt: "Žalias takas, vedantis į šviesą. Iliustracinė nuotrauka apie naują kryptį.",
    href: "/musu-veikla/pikeliai",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
