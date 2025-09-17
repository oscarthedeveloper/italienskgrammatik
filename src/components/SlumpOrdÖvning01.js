import React, { useState, useEffect } from "react";
import './SlumpOrdÖvning.css'; // Extern CSS

// Ordlista: svenska -> italienska
const ordlista = [
  { sv: "huset", it: "la casa" },
  { sv: "skolan", it: "la scuola" },
  { sv: "boken", it: "il libro" },
  { sv: "bordet", it: "il tavolo" },
  { sv: "stolen", it: "la sedia" },
  { sv: "fönstret", it: "la finestra" },
  { sv: "dörren", it: "la porta" },
  { sv: "gatan", it: "la strada" },
  { sv: "bilen", it: "l’auto" },
  { sv: "cykeln", it: "la bicicletta" },
  { sv: "bussen", it: "l’autobus" },
  { sv: "tåget", it: "il treno" },
  { sv: "flygplanet", it: "l’aereo" },
  { sv: "parken", it: "il parco" },
  { sv: "sjön", it: "il lago" },
  { sv: "havet", it: "il mare" },
  { sv: "floden", it: "il fiume" },
  { sv: "skogen", it: "la foresta" },
  { sv: "berget", it: "la montagna" },
  { sv: "dalen", it: "la valle" },
  { sv: "solen", it: "il sole" },
  { sv: "månen", it: "la luna" },
  { sv: "stjärnan", it: "la stella" },
  { sv: "himlen", it: "il cielo" },
  { sv: "vinden", it: "il vento" },
  { sv: "regnet", it: "la pioggia" },
  { sv: "snön", it: "la neve" },
  { sv: "isen", it: "il ghiaccio" },
  { sv: "blomman", it: "il fiore" },
  { sv: "trädet", it: "l’albero" },
  { sv: "gräset", it: "l’erba" },
  { sv: "stenen", it: "la pietra" },
  { sv: "djuret", it: "l’animale" },
  { sv: "hunden", it: "il cane" },
  { sv: "katten", it: "il gatto" },
  { sv: "fågeln", it: "l’uccello" },
  { sv: "fisken", it: "il pesce" },
  { sv: "hästen", it: "il cavallo" },
  { sv: "kon", it: "la mucca" },
  { sv: "fåret", it: "la pecora" },
  { sv: "grisen", it: "il maiale" },
  { sv: "kycklingen", it: "il pollo" },
  { sv: "ägg", it: "l’uovo" },
  { sv: "mjölken", it: "il latte" },
  { sv: "brödet", it: "il pane" },
  { sv: "osten", it: "il formaggio" },
  { sv: "frukten", it: "la frutta" },
  { sv: "äpplet", it: "la mela" },
  { sv: "bananen", it: "la banana" },
  { sv: "apelsinen", it: "l’arancia" },
  { sv: "druvorna", it: "l’uva" },
  { sv: "päronet", it: "la pera" },
  { sv: "jordgubben", it: "la fragola" },
  { sv: "tomaten", it: "il pomodoro" },
  { sv: "moroten", it: "la carota" },
  { sv: "potatisen", it: "la patata" },
  { sv: "soppan", it: "la zuppa" },
  { sv: "middagen", it: "la cena" },
  { sv: "frukosten", it: "la colazione" },
  { sv: "lunchen", it: "il pranzo" },
  { sv: "glaset", it: "il bicchiere" },
  { sv: "koppen", it: "la tazza" },
  { sv: "tallriken", it: "il piatto" },
  { sv: "skeden", it: "il cucchiaio" },
  { sv: "gaffeln", it: "la forchetta" },
  { sv: "kniven", it: "il coltello" },
  { sv: "tiden", it: "il tempo" },
  { sv: "året", it: "l’anno" },
  { sv: "månaden", it: "il mese" },
  { sv: "veckan", it: "la settimana" },
  { sv: "dagen", it: "il giorno" },
  { sv: "kvällen", it: "la sera" },
  { sv: "morgonen", it: "la mattina" },
  { sv: "natten", it: "la notte" },
  { sv: "vännen", it: "l’amico" },
  { sv: "familjen", it: "la famiglia" },
  { sv: "mamman", it: "la mamma" },
  { sv: "pappan", it: "il papà" },
  { sv: "barnet", it: "il bambino" },
  { sv: "dottern", it: "la figlia" },
  { sv: "sonen", it: "il figlio" },
  { sv: "brodern", it: "il fratello" },
  { sv: "systern", it: "la sorella" },
  { sv: "människan", it: "l’uomo" },
  { sv: "jobbet", it: "il lavoro" },
  { sv: "skriveriet", it: "la scrittura" },
  { sv: "pengarna", it: "i soldi" },
  { sv: "butiken", it: "il negozio" },
  { sv: "staden", it: "la città" },
  { sv: "landet", it: "la campagna" },
  { sv: "väskan", it: "la borsa" },
  { sv: "skon", it: "la scarpa" },
  { sv: "jackan", it: "la giacca" },
  { sv: "skjortan", it: "la camicia" },
  { sv: "tröjan", it: "il maglione" },
  { sv: "byxorna", it: "i pantaloni" },
  { sv: "klänningen", it: "il vestito" },
  { sv: "hatten", it: "il cappello" },
  { sv: "färgen", it: "il colore" },
  { sv: "språket", it: "la lingua" },
  { sv: "ordet", it: "la parola" },
  // --- Adjektiv (25) ---
  { sv: "vacker", it: "bello" },
  { sv: "stor", it: "grande" },
  { sv: "liten", it: "piccolo" },
  { sv: "gammal", it: "vecchio" },
  { sv: "ung", it: "giovane" },
  { sv: "snabb", it: "veloce" },
  { sv: "långsam", it: "lento" },
  { sv: "ny", it: "nuovo" },
  { sv: "gammalmodig", it: "antiquato" },
  { sv: "viktig", it: "importante" },
  { sv: "intressant", it: "interessante" },
  { sv: "tråkig", it: "noioso" },
  { sv: "glad", it: "felice" },
  { sv: "ledsen", it: "triste" },
  { sv: "trött", it: "stanco" },
  { sv: "hungrig", it: "affamato" },
  { sv: "törstig", it: "assetato" },
  { sv: "kall", it: "freddo" },
  { sv: "varm", it: "caldo" },
  { sv: "dyr", it: "caro" },
  { sv: "billig", it: "economico" },
  { sv: "ren", it: "pulito" },
  { sv: "smutsig", it: "sporco" },
  { sv: "ljus", it: "chiaro" },
  { sv: "mörk", it: "scuro" },
  // --- Verb (25) ---
  { sv: "äta", it: "mangiare" },
  { sv: "dricka", it: "bere" },
  { sv: "gå", it: "andare" },
  { sv: "komma", it: "venire" },
  { sv: "se", it: "vedere" },
  { sv: "höra", it: "sentire" },
  { sv: "läsa", it: "leggere" },
  { sv: "skriva", it: "scrivere" },
  { sv: "prata", it: "parlare" },
  { sv: "bo", it: "abitare" },
  { sv: "arbeta", it: "lavorare" },
  { sv: "studera", it: "studiare" },
  { sv: "sova", it: "dormire" },
  { sv: "vakna", it: "svegliarsi" },
  { sv: "köpa", it: "comprare" },
  { sv: "sälja", it: "vendere" },
  { sv: "öppna", it: "aprire" },
  { sv: "stänga", it: "chiudere" },
  { sv: "älska", it: "amare" },
  { sv: "gilla", it: "piacere" },
  { sv: "hjälpa", it: "aiutare" },
  { sv: "hitta", it: "trovare" },
  { sv: "resa", it: "viaggiare" },
  { sv: "stanna", it: "restare" },
  // --- Övrigt / idiom (50) ---
  { sv: "och", it: "e" },
  { sv: "men", it: "ma" },
  { sv: "eller", it: "o" },
  { sv: "för", it: "per" },
  { sv: "eftersom", it: "perché" },
  { sv: "när", it: "quando" },
  { sv: "innan", it: "prima che" },
  { sv: "efter att", it: "dopo che" },
  { sv: "så att", it: "così che" },
  { sv: "om", it: "se" },
  { sv: "trots att", it: "nonostante" },
  { sv: "fastän", it: "benché" },
  { sv: "Jag ser fram emot det", it: "Non vedo l’ora" },
  { sv: "Ta det lugnt", it: "Stai tranquillo" },
  { sv: "Hur mår du?", it: "Come stai?" },
  { sv: "Allt bra", it: "Tutto bene" },
  { sv: "Det är kallt", it: "Fa freddo" },
  { sv: "Det är varmt", it: "Fa caldo" },
  { sv: "Ingen fara", it: "Nessun problema" },
  { sv: "Varsågod", it: "Prego" },
  { sv: "Tack så mycket", it: "Grazie mille" },
  { sv: "Ingen orsak", it: "Di nulla" },
  { sv: "Vi ses snart", it: "A presto" },
  { sv: "God morgon", it: "Buongiorno" },
  { sv: "God kväll", it: "Buonasera" },
  { sv: "God natt", it: "Buonanotte" },
  { sv: "Hej då", it: "Arrivederci" },
  { sv: "Hejdå (informellt)", it: "Ciao" },
  { sv: "Ursäkta", it: "Scusi" },
  { sv: "Förlåt", it: "Mi dispiace" },
  { sv: "ja", it: "sì" },
  { sv: "nej", it: "no" },
  { sv: "kanske", it: "forse" },
  { sv: "snälla", it: "per favore" },
  { sv: "bra", it: "bene" },
  { sv: "dålig", it: "male" },
  { sv: "vänligen", it: "gentilmente" },
  { sv: "förstå", it: "capire" },
  { sv: "fråga", it: "domandare" },
  { sv: "svara", it: "rispondere" },
  { sv: "gå ut", it: "uscire" },
  { sv: "kom in", it: "entrare" },
  { sv: "sitta ner", it: "sedersi" },
  { sv: "stå upp", it: "alzarsi" },
  { sv: "springa", it: "correre" },
  { sv: "titta", it: "guardare" },
  { sv: "lyssna", it: "ascoltare" },
  { sv: "prata", it: "parlare" },
  { sv: "skriva ner", it: "scrivere" },
  { sv: "läsa upp", it: "leggere" },
  { sv: "gå hem", it: "andare a casa" },
  { sv: "komma tillbaka", it: "tornare" },
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