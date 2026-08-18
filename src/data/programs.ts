// Center copy is taken from official Teen Challenge sources:
// Europe Teen Challenge Lithuania page and publicly confirmed Pikeliai location.

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
    "Teen Challenge Lietuva įkurta 2001 m. kaip tarnystė priklausomiems ir socialiai pažeistiems žmonėms. Pikeluose veikia vyrų savarankiško gyvenimo centras – Krikščioniški savarankiškumo namai. Programa padeda studentams išsilaisvinti iš alkoholio, narkotikų ir kitų psichotropinių medžiagų.",
};

export const programs: Program[] = [
  {
    id: "pikeliai",
    number: "01",
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
