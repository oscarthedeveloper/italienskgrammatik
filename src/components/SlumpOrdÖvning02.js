import React, { useState, useEffect } from "react";
import './SlumpOrdÖvning.css'; // Extern CSS

// Ordlista: svenska -> italienska
const ordlista = [
  // --- Substantiv (100) ---
  { sv: "vänskap", it: "l’amicizia" },
  { sv: "semester", it: "le vacanze" },
  { sv: "stadion", it: "lo stadio" },
  { sv: "cykeltur", it: "il giro in bicicletta" },
  { sv: "museum", it: "il museo" },
  { sv: "konst", it: "l’arte" },
  { sv: "målning", it: "il dipinto" },
  { sv: "skulptur", it: "la scultura" },
  { sv: "teaterföreställning", it: "lo spettacolo teatrale" },
  { sv: "musik", it: "la musica" },
  { sv: "sång", it: "la canzone" },
  { sv: "dans", it: "la danza" },
  { sv: "instrument", it: "lo strumento" },
  { sv: "gitarr", it: "la chitarra" },
  { sv: "piano", it: "il pianoforte" },
  { sv: "trumma", it: "la batteria" },
  { sv: "film", it: "il film" },
  { sv: "biograf", it: "la biografia" },
  { sv: "novell", it: "il racconto" },
  { sv: "bokhandel", it: "la libreria" },
  { sv: "tidning", it: "il giornale" },
  { sv: "magasin", it: "la rivista" },
  { sv: "brev", it: "la lettera" },
  { sv: "kort", it: "il biglietto" },
  { sv: "paket", it: "il pacco" },
  { sv: "present", it: "il regalo" },
  { sv: "föremål", it: "l’oggetto" },
  { sv: "verktyg", it: "lo strumento" },
  { sv: "nyckel", it: "la chiave" },
  { sv: "plånbok", it: "il portafoglio" },
  { sv: "mobil", it: "il cellulare" },
  { sv: "kamera", it: "la fotocamera" },
  { sv: "lampa", it: "la lampada" },
  { sv: "soffa", it: "il divano" },
  { sv: "fåtölj", it: "la poltrona" },
  { sv: "hylla", it: "lo scaffale" },
  { sv: "klocka", it: "l’orologio" },
  { sv: "spegel", it: "lo specchio" },
  { sv: "matta", it: "il tappeto" },
  { sv: "gardin", it: "la tenda" },
  { sv: "skor", it: "le scarpe" },
  { sv: "sockor", it: "i calzini" },
  { sv: "hatt", it: "il cappello" },
  { sv: "handskar", it: "i guanti" },
  { sv: "jacka", it: "la giacca" },
  { sv: "tröja", it: "il maglione" },
  { sv: "byxor", it: "i pantaloni" },
  { sv: "klänning", it: "il vestito" },
  { sv: "skjorta", it: "la camicia" },
  { sv: "kappa", it: "il cappotto" },
  { sv: "strumpa", it: "il calzino" },
  { sv: "väska", it: "la borsa" },
  { sv: "resväska", it: "la valigia" },
  { sv: "paraply", it: "l’ombrello" },
  { sv: "bokhylla", it: "la libreria" },
  { sv: "skrivbord", it: "la scrivania" },
  { sv: "stol", it: "la sedia" },
  { sv: "bord", it: "il tavolo" },
  { sv: "glas", it: "il bicchiere" },
  { sv: "tallrik", it: "il piatto" },
  { sv: "kniv", it: "il coltello" },
  { sv: "gaffel", it: "la forchetta" },
  { sv: "sked", it: "il cucchiaio" },
  { sv: "teknik", it: "la tecnologia" },
  { sv: "dator", it: "il computer" },
  { sv: "tangentbord", it: "la tastiera" },
  { sv: "mus", it: "il mouse" },
  { sv: "telefon", it: "il telefono" },
  { sv: "TV", it: "la TV" },
  { sv: "radio", it: "la radio" },
  { sv: "foto", it: "la foto" },
  { sv: "dagbok", it: "il diario" },
  { sv: "kalender", it: "il calendario" },
  { sv: "adress", it: "l’indirizzo" },
  { sv: "postnummer", it: "il CAP" },
  { sv: "stadshus", it: "il municipio" },
  { sv: "polisstation", it: "la stazione di polizia" },
  { sv: "brandstation", it: "la stazione dei pompieri" },
  { sv: "bibliotek", it: "la biblioteca" },
  { sv: "universitet", it: "l’università" },
  { sv: "park", it: "il parco" },
  { sv: "lekplats", it: "il parco giochi" },
  { sv: "strand", it: "la spiaggia" },
  { sv: "pool", it: "la piscina" },
  { sv: "sjukhus", it: "l’ospedale" },
  { sv: "apotek", it: "la farmacia" },
  { sv: "restaurang", it: "il ristorante" },
  { sv: "café", it: "il bar" },
  { sv: "marknad", it: "il mercato" },

  // --- Adjektiv (25) ---
  { sv: "ny", it: "nuovo" },
  { sv: "ren", it: "pulito" },
  { sv: "smutsig", it: "sporco" },
  { sv: "torr", it: "secco" },
  { sv: "våt", it: "bagnato" },
  { sv: "mjuk", it: "morbido" },
  { sv: "hård", it: "duro" },
  { sv: "bred", it: "largo" },
  { sv: "smal", it: "stretto" },
  { sv: "lång", it: "lungo" },
  { sv: "kort", it: "corto" },
  { sv: "tjock", it: "spesso" },
  { sv: "tunn", it: "sottile" },
  { sv: "glad", it: "felice" },
  { sv: "ledsen", it: "triste" },
  { sv: "rolig", it: "divertente" },
  { sv: "tråkig", it: "noioso" },
  { sv: "varm", it: "caldo" },
  { sv: "kall", it: "freddo" },
  { sv: "dyr", it: "caro" },
  { sv: "billig", it: "economico" },
  { sv: "viktig", it: "importante" },
  { sv: "intressant", it: "interessante" },
  { sv: "trött", it: "stanco" },
  { sv: "hungrig", it: "affamato" },

  // --- Verb (25) ---
  { sv: "springa", it: "correre" },
  { sv: "hoppa", it: "saltare" },
  { sv: "simma", it: "nuotare" },
  { sv: "cykla", it: "andare in bicicletta" },
  { sv: "leka", it: "giocare" },
  { sv: "sjunga", it: "cantare" },
  { sv: "dans", it: "ballare" },
  { sv: "måla", it: "dipingere" },
  { sv: "rita", it: "disegnare" },
  { sv: "bygga", it: "costruire" },
  { sv: "låna", it: "prendere in prestito" },
  { sv: "vända", it: "girare" },
  { sv: "passera", it: "passare" },
  { sv: "köra", it: "guidare" },
  { sv: "resa", it: "viaggiare" },
  { sv: "städa", it: "pulire" },
  { sv: "tvätta", it: "lavare" },
  { sv: "packa", it: "fare le valigie" },
  { sv: "tänka", it: "pensare" },
  { sv: "lyssna", it: "ascoltare" },
  { sv: "tala", it: "parlare" },
  { sv: "förklara", it: "spiegare" },
  { sv: "fråga", it: "chiedere" },
  { sv: "svara", it: "rispondere" },
  { sv: "ta", it: "prendere" },

  // --- Övrigt / fraser (50) ---
  { sv: "på", it: "su" },
  { sv: "i", it: "in" },
  { sv: "under", it: "sotto" },
  { sv: "över", it: "sopra" },
  { sv: "nära", it: "vicino" },
  { sv: "långt", it: "lontano" },
  { sv: "framåt", it: "avanti" },
  { sv: "bakåt", it: "indietro" },
  { sv: "vänster", it: "sinistra" },
  { sv: "höger", it: "destra" },
  { sv: "idag", it: "oggi" },
  { sv: "imorgon", it: "domani" },
  { sv: "igår", it: "ieri" },
  { sv: "snart", it: "presto" },
  { sv: "aldrig", it: "mai" },
  { sv: "alltid", it: "sempre" },
  { sv: "ibland", it: "qualche volta" },
  { sv: "många", it: "molti" },
  { sv: "få", it: "pochi" },
  { sv: "några", it: "alcuni" },
  { sv: "ingen", it: "nessuno" },
  { sv: "någon", it: "qualcuno" },
  { sv: "något", it: "qualcosa" },
  { sv: "alla", it: "tutti" },
  { sv: "var", it: "dove" },
  { sv: "hur", it: "come" },
  { sv: "varför", it: "perché" },
  { sv: "vad", it: "cosa" },
  { sv: "vem", it: "chi" },
  { sv: "vilken", it: "quale" },
  { sv: "vilket", it: "quale" },
  { sv: "vilka", it: "quali" },
  { sv: "hur mycket", it: "quanto" },
  { sv: "hur många", it: "quanti" },
  { sv: "igen", it: "di nuovo" },
  { sv: "snälla", it: "per favore" },
  { sv: "Tack så mycket", it: "Grazie mille" },
  { sv: "Ingen orsak", it: "Di nulla" },
  { sv: "Vi ses", it: "Ci vediamo" },
  { sv: "Hej då", it: "Arrivederci" },
  { sv: "God morgon", it: "Buongiorno" },
  { sv: "God kväll", it: "Buonasera" },
  { sv: "God natt", it: "Buonanotte" },
  { sv: "Ursäkta", it: "Scusi" },
  { sv: "Förlåt", it: "Mi dispiace" },
  { sv: "ja", it: "sì" },
  { sv: "nej", it: "no" },
  { sv: "kanske", it: "forse" },
  { sv: "jag vet det", it: "lo so" },
  { sv: "det vet jag inte", it: "non lo so" },
];

function normalizeApostrof(text) {
  return text.replace(/['’]/g, "'").toLowerCase().trim();
}

function SlumpOrdÖvning() {
  // Riktning: 1 = från början till slut, -1 = från slut till början
  const [riktning] = useState(Math.random() < 0.5 ? 1 : -1);
  const [index, setIndex] = useState(riktning === 1 ? 0 : ordlista.length - 1);
  const [nuvarandeOrd, setNuvarandeOrd] = useState(ordlista[index]);
  const [svar, setSvar] = useState("");
  const [resultat, setResultat] = useState(null);
  const [poäng, setPoäng] = useState({ rätt: 0, fel: 0 });
  const [rattAnimation, setRattAnimation] = useState(false);

  // Uppdatera nuvarande ord när index ändras
  useEffect(() => {
    setNuvarandeOrd(ordlista[index]);
    setSvar("");
    setResultat(null);
    setRattAnimation(false);
  }, [index]);

  const kollaSvar = () => {
    const korrekt = normalizeApostrof(svar) === normalizeApostrof(nuvarandeOrd.it);
    if (korrekt) {
      setResultat(true);
      setPoäng({ ...poäng, rätt: poäng.rätt + 1 });
      setRattAnimation(true);

      // Efter kort delay, gå till nästa ord
      setTimeout(() => {
        let nyttIndex = index + riktning;
        // Loopar tillbaka om vi når slutet/början
        if (nyttIndex >= ordlista.length) nyttIndex = 0;
        if (nyttIndex < 0) nyttIndex = ordlista.length - 1;
        setIndex(nyttIndex);
      }, 200);
    } else {
      setResultat(false);
      setPoäng({ ...poäng, fel: poäng.fel + 1 });
      setSvar(""); // Nollställ inputfältet direkt vid fel
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") kollaSvar();
  };

  const nyttOrdManuellt = () => {
    let nyttIndex = index + riktning;
    if (nyttIndex >= ordlista.length) nyttIndex = 0;
    if (nyttIndex < 0) nyttIndex = ordlista.length - 1;
    setIndex(nyttIndex);
  };

  return (
    <div className="slump-ord-övning">
      <h1><span className="highlight-blue">ÖVA PÅ ORD</span></h1>
      <p>Översätt detta svenska ord till italienska: <b>{nuvarandeOrd.sv}</b></p>

      <input
        type="text"
        value={svar}
        onChange={(e) => setSvar(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Skriv italienska översättningen"
        className={`slump-input ${rattAnimation ? 'input-ratt' : ''}`}
      />

      <div className="slump-knappar">
        <button onClick={kollaSvar} className="kontroll-knapp">Kontrollera</button>
        <button onClick={nyttOrdManuellt} className="nyttord-knapp">Nästa ord</button>
      </div>

      {resultat !== null && (
        <p className={`resultat-text ${resultat ? 'ratt' : 'fel'}`}>
          {resultat ? "Rätt!" : `Fel! Rätt svar: ${nuvarandeOrd.it}`}
        </p>
      )}

      <div className="poang">
        <p>Poäng: Rätt: {poäng.rätt} | Fel: {poäng.fel}</p>
      </div>
    </div>
  );
}

export default SlumpOrdÖvning;