const kerdesek = [
  [ // MINTA KÉRDÉSSOR
    "Minta kérdések",
    {
      szoveg: "Melyik állatok emlősök? (Több is lehet)",
      tipus: "checkbox",
      valaszok: ["Kutya", "Krokodil", "Macska", "Varjú"],
      helyes: ["Kutya", "Macska"],
      kep: "sample.jpg"
    },
    {
      szoveg: "Melyik bolygó a Naprendszerben a harmadik?",
      tipus: "radio",
      valaszok: ["Merkúr", "Föld", "Mars", "Vénusz"],
      helyes: "Föld",
      kep: null
    },
    {
      szoveg: "Írd be a víz képletét:",
      tipus: "text",
      helyes: "H2O",
      kep: null
    },
    {
      szoveg: "Húzd a megfelelő fogalmakat a definíciókhoz!",
      tipus: "dragdrop",
      parok: [
        { bal: "CPU", jobb: "Központi feldolgozó egység" },
        { bal: "RAM", jobb: "Ideiglenes memória" }
      ],
      kihagyhato: ["SSD", "HDD"]
    }

  ],

  [
    "Programozás alapjai kérdések",
    {
      szoveg: "Mi az eredménye az assert f(x) == c, m utasításnak?",
      tipus: "radio",
      valaszok: ["Ha az <b>f(x)</b> visszatérési értéke nem <b>c</b>, akkor a program az <b>m</b> üzenetet tartalmazó hibával leáll.", "Az <b>f(x)</b> függvény végeredményét határozza meg (ami ebben az esetben két érték egyszerre, <b>c</b> és <b>m</b>).", "Ha az <b>f(x)</b> két visszatérési értéke <b>c</b> és <b>m</b>, akkor a program tovább fut.", "Az <b>f(x)</b> visszatérési értékét korlátozza a <b>c</b> ... <b>m</b> intervallumra."],
      helyes: "Ha az f(x) visszatérési értéke nem c, akkor a program az m üzenetet tartalmazó hibával leáll.",
      kep: null
    },
    {
      szoveg: "Milyen vezérlési szerkezet megvalósítása látható az alábbi kódban (2 helyes válasz van, a többi hamis.):",
      tipus: "checkbox",
      valaszok: ["Egyszerű szelekciós vezérlés", "Függvényvezérlés", "Kezdőfeltételes ismétléses vezérlés", "Végfeltételes ismétléses vezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Egyszerű szelekciós vezérlés", "Függvényvezérlés"],
      kep: "program1.png"
    },
    {
      szoveg: "Minek a definíciója a következő: A program olyan komponense, amely a hozzárendelt értéket azonosítja, és ez az érték a program végrehajtása során nem változtatható meg?",
      tipus: "radio",
      valaszok: ["Konstans", "Adattípus", "Literál", "Kifejezés"],
      helyes: "Konstans",
      kep: null
    },
    {
      szoveg: "Mire jó a Python print() függvénye?",
      tipus: "radio",
      valaszok: ["Kizárólag sztring argumentumok értékét tudja a standard kimenetre vagy valamilyen más fájlba kiírni.", "Egy rövid üzenet kiírása után visszaadja a felhasználó által megadott sort.", "A standard bemenetről lehet vele sztringeket beolvasni.", "A standard kimenetre lehet vele különféle értékeket kiíratni."],
      helyes: "A standard kimenetre lehet vele különféle értékeket kiíratni.",
      kep: null
    },
    {
      szoveg: "Melyik szoftverfejlesztési modell (igaz), és melyik nem az (hamis)?",
      tipus: "checkbox",
      valaszok: ["Vízesés modell", "V-modell", "Extrém programozás", "Rugó-modell", "O-modell", "U-modell", "Algoritmikus programozás", "Funkcionális programozás", "Spirál-modell"],
      helyes: ["Vízesés modell", "V-modell", "Extrém programozás", "O-modell", "Spirál-modell"],
      kep: null
    },
    {
      szoveg: "Húzd a megfelelő fogalmakat a definíciókhoz!",
      tipus: "dragdrop",
      parok: [
        { bal: "CPU", jobb: "Központi feldolgozó egység" },
        { bal: "RAM", jobb: "Ideiglenes memória" }
      ],
      kihagyhato: ["SSD", "HDD"]
    }
  ]
];
