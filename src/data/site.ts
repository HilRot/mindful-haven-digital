// Centralne dane treści — łatwa podmiana.
import heroPortrait from "@/assets/hero-portrait.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import contactStill from "@/assets/contact-still.jpg";
import leafMark from "@/assets/leaf-mark.png";

export const ASSETS = {
  heroPortrait,
  aboutPortrait: heroPortrait,
  gabinet1: officeInterior,
  gabinet2: officeInterior,
  officeInterior,
  contactStill,
  leafMark,
};

export const PERSON = {
  name: "Lorem Ipsum",
  title: "psycholog · psychoterapeuta · psychoonkolog",
};

export const CONTACT = {
  phone: "+48 000 000 000",
  phoneHref: "tel:+48000000000",
  email: "kontakt@example.com",
  emailHref: "mailto:kontakt@example.com",
};

export const OBSZARY = [
  {
    title: "Psychoterapia indywidualna",
    short: "Praca nad emocjami, relacjami i wewnętrznym poczuciem spójności.",
    long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Wsparcie psychoonkologiczne",
    short: "Towarzyszenie pacjentom i bliskim w doświadczeniu choroby.",
    long: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    title: "Kryzys i trauma",
    short: "Pomoc w sytuacjach przeciążenia, straty i nagłych zmian.",
    long: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    title: "Lęk i depresja",
    short: "Praca z objawami, rozumienie ich źródeł, odzyskiwanie energii.",
    long: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
  },
  {
    title: "Konsultacje psychologiczne",
    short: "Pojedyncze spotkania diagnostyczne i porady.",
    long: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  },
];

export const GABINETY = [
  {
    image: ASSETS.gabinet1,
    city: "Warszawa",
    address: "ul. Przykładowa 12 / 4, 00-000 Warszawa",
    note: "Wejście od podwórza · parter",
  },
  {
    image: ASSETS.gabinet2,
    city: "Kraków",
    address: "ul. Spokojna 5, 30-000 Kraków",
    note: "II piętro · winda",
  },
];

export const CENNIK = [
  { name: "Konsultacja psychologiczna", price: "200 zł" },
  { name: "Sesja psychoterapii indywidualnej (50 min)", price: "220 zł" },
  { name: "Sesja psychoonkologiczna", price: "200 zł" },
  { name: "Sesja online", price: "200 zł" },
  { name: "Sesja dla par (80 min)", price: "320 zł" },
  { name: "Konsultacja telefoniczna", price: "150 zł" },
];

export const EDUKACJA = [
  "Uniwersytet — magister psychologii (kierunek: psychologia kliniczna)",
  "Szkoła Psychoterapii — całościowe szkolenie w nurcie integracyjnym",
  "Studia podyplomowe z psychoonkologii",
  "Kurs interwencji kryzysowej",
];

// Maks. 850 znaków
export const EDUKACJA_INTRO =
  "Praca z drugim człowiekiem wymaga nie tylko wiedzy, ale i ciągłego zgłębiania siebie. Regularnie uczestniczę w szkoleniach, konferencjach i superwizji, by łączyć rzetelność kliniczną z uważnością na to, co indywidualne.";
