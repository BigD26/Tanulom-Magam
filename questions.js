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
    {
      szoveg: "Mely állítások igazak a Python dict adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az <b>[]</b> operátor és az értékadás művelet segítségével.", "A <b>-</b> operátor is értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      helyes: ["A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az [] operátor és az értékadás művelet segítségével."],
      kep: null
    },
    {
      szoveg: "Tegye sorrendbe a Vízesés modell alábbi lépéseit!",
      tipus: "sorrend",
      valaszok: ["Algoritmustervezés", "Megvalósítás", "Tesztelés", "Fenntartás"],
      helyes: ["Algoritmustervezés", "Megvalósítás", "Tesztelés", "Fenntartás"]
    },
    {
      szoveg: "Python-ban működnek a rekurzív eljáráshívások, mert a függvény visszatérési értékét mindenképpen fel kell használnunk a rekurzív lépés során.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Az első állítás igaz, a második hamis.",
      kep: null
    },
    {
      szoveg: "Hogyan lehet megkapni egy container nevű dictionary (dict) értékeit egy x változóban Python-ban?",
      tipus: "radio",
      valaszok: ["for i in container:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in container:", "for i in range(len(container)):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in range(len(container)):"],
      helyes: "for i in container:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]",
      kep: null
    },
    {
      szoveg: "Mit írhat elő leginkább az ismétléses vezérlés?",
      tipus: "radio",
      valaszok: ["Egy utasítás megadott számú ismétlését.", "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Két utasítás közül valamilyen feltétel alapján az egyik végrehajtását.", "Egy előre megadott részalgoritmus alkalmazását valamilyen adatokra."],
      helyes: "Egy utasítás megadott számú ismétlését.",
      kep: null
    },
    {
      szoveg: "Az alábbiak közül általánosan melyik állítás igaz az adattárolás mutable és immutable jellemzőire?",
      tipus: "radio",
      valaszok: ["Az immutable értékre hivatkozó azonosító értéke az azonosítónak történő újabb értékadásig nem változhat meg.", "Egy immutable értékre hivatkozó azonosítónak a program futása során csak egyszer adhatunk értéket.", "A mutable értékek 'véletlenül' is megváltozhatnak, míg az immutable értékeket csak 'szándékosan' tudjuk megváltoztatni.", "Egy-egy minden másban megegyező mutable és immutable érték különböző típusúnak számít."],
      helyes: "Az immutable értékre hivatkozó azonosító értéke az azonosítónak történő újabb értékadásig nem változhat meg.",
      kep: null
    },
    {
      szoveg: "Hogyan használhatjuk Python-ban az f fájlt, ha az f = open('random.txt', 'wt') utasítással nyitottuk meg? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Használhatjuk az f.write(s) metódushívást, ami az s sztring tartalmát kiírja a fájlba.", "Használhatjuk az print(v, file=f) függvényhívást, ami a v változót és egy sorvége karaktert ír ki a fájlba.", "Használhatjuk az f.read() metódushívást, ami a fájl teljes tartalmát adja vissza egyetlen sztringként.", "Használhatjuk az f.readline() metódushívást, ami a fájl következő sorát adja vissza egy sztringként.", "Használhatjuk az f.readlines() metódushívást, ami a fájl teljes tartalmát adja vissza, sorok (sztringek) listájeként."],
      helyes: ["Használhatjuk az f.write(s) metódushívást, ami az s sztring tartalmát kiírja a fájlba.", "Használhatjuk az print(v, file=f) függvényhívást, ami a v változót és egy sorvége karaktert ír ki a fájlba."],
      kep: null
    },
    {
      szoveg: "Mely állítások igazak a Python bool adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>-</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "A <b>=></b> operátor az implikáció logikai műveletet valósítja meg."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A - operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[1, 3, 5, 7]", jobb: "C[:-1]" },
        { bal: "[1, 5, 9]", jobb: "C[0::2]" },
        { bal: "[3, 7]", jobb: "C[1::2]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "Mely állítások igazak a Python str adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>not</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatók az <b>[]</b> operátor és az értékadás művelet segítségével."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A not operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "Számsorozat határértékeinek és átlagának meghatározásakor érdemes a sorozat minden elemét előre beolvasni és eltárolni, mert a beolvasó és feldolgozó utasítások keverése általában rossz algoritmushoz vezet.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Egyik állítás sem igaz.",
      kep: null
    },
    {
      szoveg: "A szoftverfejlesztés folyamatok mely lépésében fogalmazzuk meg a problémát valamilyen formálisabb (pl. matematikai) nyelven?",
      tipus: "radio",
      valaszok: ["Specifikáció", "Algoritmustervezés", "Tesztelés", "Fenntartás"],
      helyes: "Specifikáció",
      kep: null
    },
    {
      szoveg: "Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: ["CPU", "ROM"], jobb: "Hardver" },
        { bal: "LINUX", jobb: "Szoftver" },
      ],
      kihagyhato: ["HTML"]
    },
    {
      szoveg: "Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[1, 3, 5, 7, 9]", jobb: "C[::]" },
        { bal: "[3, 7]", jobb: "C[1::2]" },
        { bal: "[1]", jobb: "C[:1]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "Mely állítások igazak a Python float adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>/</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "A <b>//</b> operátor <b>int</b> típusú eredménye a maradékos osztás hányadosa."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A / operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "Hogyan használhatjuk Python-ban az f fájlt, ha az f = open('random.txt', 'rt') utasítással nyitottuk meg? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Használhatjuk a <b>for l in f:</b> utasítást, ami végigiterál a fájl sorain (amiket az 1 változóban egyenként kapunk meg).", "Használhatjuk az <b>f.close()</b> metódushívást, ami lezárja a fájlt.", "Használhatjuk az <b>f.write(s)</b> metódushívást, ami az <b>s</b> sztring tartalmát kiírja a fájlba.", "Használhatjuk az <b>f.write(s)</b> metódushívást, ami az <b>s</b> sztring tartalmát és egy sorvége karaktert ír ki a fájlba.", "Használhatjuk az <b>print(v, file=f)</b> függvényhívást, ami a <b>v</b> változót és egy sorvége karaktert ír ki a fájlba."],
      helyes: ["Használhatjuk a for l in f: utasítást, ami végigiterál a fájl sorain (amiket az 1 változóban egyenként kapunk meg).", "Használhatjuk az f.close() metódushívást, ami lezárja a fájlt."],
      kep: null
    },
    {
      szoveg: "Mi a szemantika?",
      tipus: "radio",
      valaszok: ["Az adott nyelven szabályos jelsorozatok értelmezését adja meg.", "Az az egység, amelyet az értékkészlet és a műveletek határoznak meg.", "Adott típusú összes feladat megoldására vonatkozó pontos előírás.", "Egy program tervezésének első lépése."],
      helyes: "Az adott nyelven szabályos jelsorozatok értelmezését adja meg.",
      kep: null
    },
    {
      szoveg: "Milyen tevékenységek nem kifejezetten szoftverfejlesztési feladatok?",
      tipus: "radio",
      valaszok: ["Hiba kijavítása.", "Program futtatása átalános adatokkal.", "Annak ellenőrzése, hogy a program elég gyors és könnyen használható-e.", "Hibajavítás után a program újraellenőrzése, hogy megjavult-e a hiba?"],
      helyes: "Hiba kijavítása.",
      kep: null
    },
    {
      szoveg: "Mely állítások igazak a Python str adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>not</b> operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre.", "A <b>-</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "Három elkülönülő altípusa van, 'normál', 'f-sztring' és 'raw sztring'."],
      helyes: ["A not operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      kep: null
    },
    {
      szoveg: "Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Egy konkrét paraméterhez tartozó argumentum csak akkor maradhat ki a híváslistából, ha a paraméter default értékkel rendelkezik.", "Minden függvénynek pontosan meghatározott számú paramétere van, és pontosan ennyi argumentummal kell meghívni.", "A függvény paraméterei kizárólag az argumentumok sorrendje alapján kapják meg az értékeiket.", "Minden paraméter értéke megadható kulcsszavas argumentumként."],
      helyes: "Egy konkrét paraméterhez tartozó argumentum csak akkor maradhat ki a híváslistából, ha a paraméter default értékkel rendelkezik.",
      kep: null
    },
    {
      szoveg: "Az alábbiak közül általánosan melyik állítás igaz az adattárolás direkt és indirekt jellemzőire?",
      tipus: "radio",
      valaszok: ["Indirekt adattárolás esetén értékadás után előfordulhat, hogy az eredeti változó értékének módosulása kihat az új változó értékére is.", "Indirekt adattárolás esetén értékadás után a másolt érték kétszer szerepel a memóriában.", "A direkt és indirekt adattárolás között manapság már nincs érdemi különbség.", "Indirekt adattárolás csak konstansokkal valósítható meg."],
      helyes: "Indirekt adattárolás esetén értékadás után előfordulhat, hogy az eredeti változó értékének módosulása kihat az új változó értékére is.",
      kep: null
    },
    {
      szoveg: "Mikor és milyen hatása van a break utasításnak Python-ban?",
      tipus: "radio",
      valaszok: ["Egy ciklusban végrehajtva a ciklus befejeződik, és a ciklus utáni utasításra ugrik a vezérlés.", "Hatására a ciklus azonnal a következő iteráció végrehajtásával folytatódik (vagy az <b>else</b> ággal, ha nincs több iteráció).", "A ciklus végrehajtása felfüggesztésre kerül a következő <b>continue</b> utasítás végrehajtásáig.", "A ciklus végrehajtása várakozás nélkül a következő <b>continue</b> utasítással folytatódik."],
      helyes: "Egy ciklusban végrehajtva a ciklus befejeződik, és a ciklus utáni utasításra ugrik a vezérlés.",
      kep: null
    },
    {
      szoveg: "Milyen vezérlési szerkezet megvalósítása látható az alábbi kódban (2 helyes válasz van, a többi hamis.):",
      tipus: "checkbox",
      valaszok: ["Egyszerű szelekciós vezérlés", "Kezdőfeltételes ismétléses vezérlés", "Szekvenciális vezérlés", "Végfeltételes ismétléses vezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Egyszerű szelekciós vezérlés", "Kezdőfeltételes ismétléses vezérlés"],
      kep: "program2.png"
    },
  ]
];
