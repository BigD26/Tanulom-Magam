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
    },
    {
      szoveg: "Rendezd a következő számokat növekvő sorrendbe!",
      tipus: "sorrend",
      valaszok: ["3", "1", "4", "2"], // megjelenítendő elemek
      helyes: ["1", "2", "3", "4"]    // helyes sorrend
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
      szoveg: "Párosítsd a Python sztring literálokat és értékeiket, ha e = 42, v = 42.16 és s = '4216'.",
      tipus: "dragdrop",
      parok: [
        { bal: "'Hello 42!'", jobb: "f'Hello {e}!'" },
        { bal: "'Hello 42.16!'", jobb: "f'Hello {v}!'" },
        { bal: "'Hello 02a!'", jobb: "f'Hello {e:03x}!'" },
        { bal: "'Hello _42_!'", jobb: "f'Hello {e:_^4}!'" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "Mi a szintaxis?",
      tipus: "radio",
      valaszok: ["Az adott nyelvben érvényes jelsorozatokat definiáló szabályhalmaz.", "Egy program tervezésének első lépése.", "Ez adja meg, hogy az adott nyelven értelmes jelsorozatoknak mi a jelentése.", "Egy algoritmusnak egy adott programozási nyelven történő leírása."],
      helyes: "Az adott nyelvben érvényes jelsorozatokat definiáló szabályhalmaz.",
      kep: null
    },
    {
      szoveg: "Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.", "Minden függvénynek pontosan meghatározott számú paramétere van, és pontosan ennyi argumantummal kell meghívni.", "Minden paraméter értéke megadható kulcsszavas argumentumként.", "A kulcsszavas argumentumok meg kell, hogy előzzék a sorrendi argumentumokat."],
      helyes: "Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.",
      kep: null
    },
    {
      szoveg: "Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: "CPU", jobb: "Hardver" },
        { bal: ["PYTHON", "LINUX"], jobb: "Szoftver" },
      ],
      kihagyhato: ["PDF"]
    },
  ]
];
