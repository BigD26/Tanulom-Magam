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
      szoveg: "★★ Mi az eredménye az assert f(x) == c, m utasításnak?",
      tipus: "radio",
      valaszok: ["Ha az <b>f(x)</b> visszatérési értéke nem <b>c</b>, akkor a program az <b>m</b> üzenetet tartalmazó hibával leáll.", "Az <b>f(x)</b> függvény végeredményét határozza meg (ami ebben az esetben két érték egyszerre, <b>c</b> és <b>m</b>).", "Ha az <b>f(x)</b> két visszatérési értéke <b>c</b> és <b>m</b>, akkor a program tovább fut.", "Az <b>f(x)</b> visszatérési értékét korlátozza a <b>c</b> ... <b>m</b> intervallumra."],
      helyes: "Ha az f(x) visszatérési értéke nem c, akkor a program az m üzenetet tartalmazó hibával leáll.",
      kep: null
    },
    {
      szoveg: "★ Milyen vezérlési szerkezet megvalósítása látható az alábbi kódban (2 helyes válasz van, a többi hamis.):",
      tipus: "checkbox",
      valaszok: ["Egyszerű szelekciós vezérlés", "Függvényvezérlés", "Kezdőfeltételes ismétléses vezérlés", "Végfeltételes ismétléses vezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Egyszerű szelekciós vezérlés", "Függvényvezérlés"],
      kep: "program1.png"
    },
    {
      szoveg: "★★ Minek a definíciója a következő: A program olyan komponense, amely a hozzárendelt értéket azonosítja, és ez az érték a program végrehajtása során nem változtatható meg?",
      tipus: "radio",
      valaszok: ["Konstans", "Adattípus", "Literál", "Kifejezés"],
      helyes: "Konstans",
      kep: null
    },
    {
      szoveg: "★ Mely állítások igazak a Python dict adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az <b>[]</b> operátor és az értékadás művelet segítségével.", "A <b>-</b> operátor is értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      helyes: ["A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az [] operátor és az értékadás művelet segítségével."],
      kep: null
    },
    {
      szoveg: "★★ Mire jó a Python print() függvénye?",
      tipus: "radio",
      valaszok: ["Kizárólag sztring argumentumok értékét tudja a standard kimenetre vagy valamilyen más fájlba kiírni.", "Egy rövid üzenet kiírása után visszaadja a felhasználó által megadott sort.", "A standard bemenetről lehet vele sztringeket beolvasni.", "A standard kimenetre lehet vele különféle értékeket kiíratni."],
      helyes: "A standard kimenetre lehet vele különféle értékeket kiíratni.",
      kep: null
    },
    {
      szoveg: "★★ Melyik szoftverfejlesztési modell (igaz), és melyik nem az (hamis)?",
      tipus: "checkbox",
      valaszok: ["Vízesés modell", "V-modell", "Extrém programozás", "Rugó-modell", "O-modell", "U-modell", "Algoritmikus programozás", "Funkcionális programozás", "Spirál-modell"],
      helyes: ["Vízesés modell", "V-modell", "Extrém programozás", "O-modell", "Spirál-modell"],
      kep: null
    },
    {
      szoveg: "★ Mely állítások igazak a Python str adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>not</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatók az <b>[]</b> operátor és az értékadás művelet segítségével."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A not operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python sztring literálokat és értékeiket, ha e = 42, v = 42.16 és s = '4216'.",
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
      szoveg: "★★ Mi a szintaxis?",
      tipus: "radio",
      valaszok: ["Az adott nyelvben érvényes jelsorozatokat definiáló szabályhalmaz.", "Egy program tervezésének első lépése.", "Ez adja meg, hogy az adott nyelven értelmes jelsorozatoknak mi a jelentése.", "Egy algoritmusnak egy adott programozási nyelven történő leírása."],
      helyes: "Az adott nyelvben érvényes jelsorozatokat definiáló szabályhalmaz.",
      kep: null
    },
    {
      szoveg: "★★ Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.", "Minden függvénynek pontosan meghatározott számú paramétere van, és pontosan ennyi argumantummal kell meghívni.", "Minden paraméter értéke megadható kulcsszavas argumentumként.", "A kulcsszavas argumentumok meg kell, hogy előzzék a sorrendi argumentumokat."],
      helyes: "Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.",
      kep: null
    },
    {
      szoveg: "★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: "CPU", jobb: "Hardver" },
        { bal: ["PYTHON", "LINUX"], jobb: "Szoftver" },
      ],
      kihagyhato: ["PDF"]
    },
    {
      szoveg: "★ Számsorozat határértékeinek és átlagának meghatározásakor érdemes a sorozat minden elemét előre beolvasni és eltárolni, mert a beolvasó és feldolgozó utasítások keverése általában rossz algoritmushoz vezet.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Egyik állítás sem igaz.",
      kep: null
    },
    {
      szoveg: "★★ Tegye sorrendbe a Vízesés modell alábbi lépéseit!",
      tipus: "sorrend",
      valaszok: ["Algoritmustervezés", "Megvalósítás", "Tesztelés", "Fenntartás"],
      helyes: ["Algoritmustervezés", "Megvalósítás", "Tesztelés", "Fenntartás"]
    },
    {
      szoveg: "★ Mely állítások igazak a Python bool adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>-</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "A <b>=></b> operátor az implikáció logikai műveletet valósítja meg."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A - operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "★★ Python-ban működnek a rekurzív eljáráshívások, mert a függvény visszatérési értékét mindenképpen fel kell használnunk a rekurzív lépés során.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Az első állítás igaz, a második hamis.",
      kep: null
    },
    {
      szoveg: "★ Hogyan lehet megkapni egy container nevű dictionary (dict) értékeit egy x változóban Python-ban?",
      tipus: "radio",
      valaszok: ["for i in container:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in container:", "for i in range(len(container)):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in range(len(container)):"],
      helyes: "for i in container:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]",
      kep: null
    },
    {
      szoveg: "★★ Mit írhat elő leginkább az ismétléses vezérlés?",
      tipus: "radio",
      valaszok: ["Egy utasítás megadott számú ismétlését.", "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Két utasítás közül valamilyen feltétel alapján az egyik végrehajtását.", "Egy előre megadott részalgoritmus alkalmazását valamilyen adatokra."],
      helyes: "Egy utasítás megadott számú ismétlését.",
      kep: null
    },
    {
      szoveg: "?★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás mutable és immutable jellemzőire?",
      tipus: "radio",
      valaszok: ["Az immutable értékre hivatkozó azonosító értéke az azonosítónak történő újabb értékadásig nem változhat meg.", "Egy immutable értékre hivatkozó azonosítónak a program futása során csak egyszer adhatunk értéket.", "A mutable értékek \"véletlenül\" is megváltozhatnak, míg az immutable értékeket csak \"szándékosan\" tudjuk megváltoztatni.", "Egy-egy minden másban megegyező mutable és immutable érték különböző típusúnak számít."],
      helyes: "Az immutable értékre hivatkozó azonosító értéke az azonosítónak történő újabb értékadásig nem változhat meg.",
      kep: null
    },
    {
      szoveg: "★★ Hogyan használhatjuk Python-ban az f fájlt, ha az f = open('random.txt', 'wt') utasítással nyitottuk meg? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Használhatjuk az f.write(s) metódushívást, ami az s sztring tartalmát kiírja a fájlba.", "Használhatjuk az print(v, file=f) függvényhívást, ami a v változót és egy sorvége karaktert ír ki a fájlba.", "Használhatjuk az f.read() metódushívást, ami a fájl teljes tartalmát adja vissza egyetlen sztringként.", "Használhatjuk az f.readline() metódushívást, ami a fájl következő sorát adja vissza egy sztringként.", "Használhatjuk az f.readlines() metódushívást, ami a fájl teljes tartalmát adja vissza, sorok (sztringek) listájeként."],
      helyes: ["Használhatjuk az f.write(s) metódushívást, ami az s sztring tartalmát kiírja a fájlba.", "Használhatjuk az print(v, file=f) függvényhívást, ami a v változót és egy sorvége karaktert ír ki a fájlba."],
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[1, 3, 5, 7]", jobb: "C[:-1]" },
        { bal: "[1, 5, 9]", jobb: "C[0::2]" },
        { bal: "[3, 7]", jobb: "C[1::2]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★ A szoftverfejlesztés folyamatok mely lépésében fogalmazzuk meg a problémát valamilyen formálisabb (pl. matematikai) nyelven?",
      tipus: "radio",
      valaszok: ["Specifikáció", "Algoritmustervezés", "Tesztelés", "Fenntartás"],
      helyes: "Specifikáció",
      kep: null
    },
    {
      szoveg: "★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: ["CPU", "ROM"], jobb: "Hardver" },
        { bal: "LINUX", jobb: "Szoftver" },
      ],
      kihagyhato: ["HTML"]
    },
    {
      szoveg: "★★ Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[1, 3, 5, 7, 9]", jobb: "C[::]" },
        { bal: "[3, 7]", jobb: "C[1::2]" },
        { bal: "[1]", jobb: "C[:1]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Mely állítások igazak a Python float adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>/</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "A <b>//</b> operátor <b>int</b> típusú eredménye a maradékos osztás hányadosa."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A / operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "★★ Hogyan használhatjuk Python-ban az f fájlt, ha az f = open('random.txt', 'rt') utasítással nyitottuk meg? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Használhatjuk a <b>for l in f:</b> utasítást, ami végigiterál a fájl sorain (amiket az 1 változóban egyenként kapunk meg).", "Használhatjuk az <b>f.close()</b> metódushívást, ami lezárja a fájlt.", "Használhatjuk az <b>f.write(s)</b> metódushívást, ami az <b>s</b> sztring tartalmát kiírja a fájlba.", "Használhatjuk az <b>f.write(s)</b> metódushívást, ami az <b>s</b> sztring tartalmát és egy sorvége karaktert ír ki a fájlba.", "Használhatjuk az <b>print(v, file=f)</b> függvényhívást, ami a <b>v</b> változót és egy sorvége karaktert ír ki a fájlba."],
      helyes: ["Használhatjuk a for l in f: utasítást, ami végigiterál a fájl sorain (amiket az 1 változóban egyenként kapunk meg).", "Használhatjuk az f.close() metódushívást, ami lezárja a fájlt."],
      kep: null
    },
    {
      szoveg: "★★ Mi a szemantika?",
      tipus: "radio",
      valaszok: ["Az adott nyelven szabályos jelsorozatok értelmezését adja meg.", "Az az egység, amelyet az értékkészlet és a műveletek határoznak meg.", "Adott típusú összes feladat megoldására vonatkozó pontos előírás.", "Egy program tervezésének első lépése."],
      helyes: "Az adott nyelven szabályos jelsorozatok értelmezését adja meg.",
      kep: null
    },
    {
      szoveg: "★★ Milyen tevékenységek nem kifejezetten szoftverfejlesztési feladatok?",
      tipus: "radio",
      valaszok: ["Hiba kijavítása.", "Program futtatása átalános adatokkal.", "Annak ellenőrzése, hogy a program elég gyors és könnyen használható-e.", "Hibajavítás után a program újraellenőrzése, hogy megjavult-e a hiba?"],
      helyes: "Hiba kijavítása.",
      kep: null
    },
    {
      szoveg: "★★ Mely állítások igazak a Python str adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>not</b> operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre.", "A <b>-</b> operátor is értelmezett az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "Három elkülönülő altípusa van, 'normál', 'f-sztring' és 'raw sztring'."],
      helyes: ["A not operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      kep: null
    },
    {
      szoveg: "★ Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Egy konkrét paraméterhez tartozó argumentum csak akkor maradhat ki a híváslistából, ha a paraméter default értékkel rendelkezik.", "Minden függvénynek pontosan meghatározott számú paramétere van, és pontosan ennyi argumentummal kell meghívni.", "A függvény paraméterei kizárólag az argumentumok sorrendje alapján kapják meg az értékeiket.", "Minden paraméter értéke megadható kulcsszavas argumentumként."],
      helyes: "Egy konkrét paraméterhez tartozó argumentum csak akkor maradhat ki a híváslistából, ha a paraméter default értékkel rendelkezik.",
      kep: null
    },
    {
      szoveg: "★★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás direkt és indirekt jellemzőire?",
      tipus: "radio",
      valaszok: ["Indirekt adattárolás esetén értékadás után előfordulhat, hogy az eredeti változó értékének módosulása kihat az új változó értékére is.", "Indirekt adattárolás esetén értékadás után a másolt érték kétszer szerepel a memóriában.", "A direkt és indirekt adattárolás között manapság már nincs érdemi különbség.", "Indirekt adattárolás csak konstansokkal valósítható meg."],
      helyes: "Indirekt adattárolás esetén értékadás után előfordulhat, hogy az eredeti változó értékének módosulása kihat az új változó értékére is.",
      kep: null
    },
    {
      szoveg: "★★ Mikor és milyen hatása van a break utasításnak Python-ban?",
      tipus: "radio",
      valaszok: ["Egy ciklusban végrehajtva a ciklus befejeződik, és a ciklus utáni utasításra ugrik a vezérlés.", "Hatására a ciklus azonnal a következő iteráció végrehajtásával folytatódik (vagy az <b>else</b> ággal, ha nincs több iteráció).", "A ciklus végrehajtása felfüggesztésre kerül a következő <b>continue</b> utasítás végrehajtásáig.", "A ciklus végrehajtása várakozás nélkül a következő <b>continue</b> utasítással folytatódik."],
      helyes: "Egy ciklusban végrehajtva a ciklus befejeződik, és a ciklus utáni utasításra ugrik a vezérlés.",
      kep: null
    },
    {
      szoveg: "★★ Milyen vezérlési szerkezet megvalósítása látható az alábbi kódban (2 helyes válasz van, a többi hamis.):",
      tipus: "checkbox",
      valaszok: ["Egyszerű szelekciós vezérlés", "Kezdőfeltételes ismétléses vezérlés", "Szekvenciális vezérlés", "Végfeltételes ismétléses vezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Egyszerű szelekciós vezérlés", "Kezdőfeltételes ismétléses vezérlés"],
      kep: "program2.png"
    },
    {
      szoveg: "★★ Minek a definíciója a következő: A program olyan komponense, amely valamilyen típusú konstans értéket jelöl közvetlen, vagyis nem külön azonosítóval ellátott formában?",
      tipus: "radio",
      valaszok: ["Literál", "Konstans", "Függvény", "Kifejezés"],
      helyes: "Literál",
      kep: null
    },
    {
      szoveg: "★★ Mire jó a Python with utasítása/környezete?",
      tipus: "radio",
      valaszok: ["Erőforrások használata során biztosítja az erőforrás lezárását, akár volt hiba a használat közben, akár nem.", "Ez az utasítás nyitja meg a fájlokat és adja vissza őkez az as kulcsszó után megadott néven.", "Végigiterál a megnyitott fájlon, és egyenként visszaadja annak a sorait az as kulcsszó után megadott változóban.", "Ez az utasítás szükséges az erőforrások használatához."],
      helyes: "Erőforrások használata során biztosítja az erőforrás lezárását, akár volt hiba a használat közben, akár nem.",
      kep: null
    },
    {
      szoveg: "★ Mit írhat elő leginkább a szekvenciális vezérlés?",
      tipus: "radio",
      valaszok: ["Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Két utasítás közül valamilyen feltétel alapján az egyik végrehajtását.", "Több utasítás közül valamilyen feltételek alapján az egyik végrehajtását.", "Egy utasítás megadott számú ismétlését."],
      helyes: "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.",
      kep: null
    },
    {
      szoveg: "★ Tegye sorrendbe a függvényhívás végrehajtásának technikai lépéseit!",
      tipus: "sorrend",
      valaszok: ["Függvényhívás argumentumainak kiértékelése.", "Argumentumok értékének átadása a függvény paraméterei részére.", "Visszatérési érték kiszámítása.", "Vezérlés visszaadása a hívó félnek."],
      helyes: ["Függvényhívás argumentumainak kiértékelése.", "Argumentumok értékének átadása a függvény paraméterei részére.", "Visszatérési érték kiszámítása.", "Vezérlés visszaadása a hívó félnek."]
    },
    {
      szoveg: "★★ A szinusz(x) értékét kell közelíteni az összegképlet segítségével. Mely állítások igazak az algoritmustervezéssel és Python megvalósítással kapcsolatban?",
      tipus: "radio",
      valaszok: ["Az összegképlet következő tagját érdemes az előző tagból kiszámolni, nem pedig teljesen újonnan előállítani.", "Az összegképletben használt faktoriális műveletet érdemes külön függvénybe kiszervezni.", "Az összegzés egy számlálásos vezérlésen alapul.", "Az összegképlet tagjait érdemes egy halmazban gyűjteni, majd utólag összegezni."],
      helyes: "Az összegképlet következő tagját érdemes az előző tagból kiszámolni, nem pedig teljesen újonnan előállítani.",
      kep: null
    },
    {
      szoveg: "★ Mely állítások igazak a Python set adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>-</b> operátor is értelmezett az értékein.", "A <b>not</b> operátor is értelmezett az értékein.", "A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az <b>[]</b> operátor és az értékadás művelet segítségével.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      helyes: ["A - operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      kep: null
    },
    {
      szoveg: "★★ Meg kell határozni az összes prímszámot egy, a felhasználó által megadott számig. Mely állítások igazak az algoritmustervezéssel és Python megvalósítással kapcsolatban?",
      tipus: "radio",
      valaszok: ["A kérdéses intervallumba eső számokról egyesével eldönteni, hogy prím-e, alapvetően kevésbé hatékony megvalósításhoz vezet.", "Az Eratoszthenészi szita algoritmus minden esetben gyorsabb megvalósításhoz vezet, mint a számok egyedi elbírálásán alapuló algoritmus.", "Az Eratoszthenészi szita algoritmus lista típussal történő megvalósítása Python-ban hatékonyabb, mint a halmazzal való megvalósítás.", "Az Eratoszthenészi szita algoritmus halmazos és listás megvalósítása között Python-ban nem igazán van hatékonyságbeli különbség."],
      helyes: "A kérdéses intervallumba eső számokról egyesével eldönteni, hogy prím-e, alapvetően kevésbé hatékony megvalósításhoz vezet.",
      kep: null
    },
    {
      szoveg: "★★ Milyen tevékenységek nem kifejezetten szoftverfejlesztési feladatok?",
      tipus: "radio",
      valaszok: ["Annak eldöntése, hogy elhalasztjuk a szoftver kiadását.", "A program követelményeinek, specifikációjának átnézése.", "A program forráskódjának átnézése.", "Vélemény kialakítása a szoftver minőségéről."],
      helyes: "Annak eldöntése, hogy elhalasztjuk a szoftver kiadását.",
      kep: null
    },
    {
      szoveg: "★★ A rekurzió nem csak függvényekre, hanem eljárásokra is működik, mert a visszatérési érték felhasználása a rekurzió során nem kötelező.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Mindkét állítás igaz, és összefüggés van köztük.",
      kep: null
    },
    {
      szoveg: "★★ Milyen vezérlési szerkezet megvalósítása látható az alábbi kódban (2 helyes válasz van, a többi hamis.):",
      tipus: "checkbox",
      valaszok: ["Szekvenciális vezérlés", "Kezdőfeltételes ismétléses vezérlés", "Diszkrét ismétléses vezérlés", "Eljárásvezérlés", "Függvényvezérlés"],
      helyes: ["Szekvenciális vezérlés", "Kezdőfeltételes ismétléses vezérlés"],
      kep: "program3.png"
    },
    {
      szoveg: "★★ Mit írhat elő leginkább a szekvenciális vezérlés?",
      tipus: "radio",
      valaszok: ["Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Az algoritmus lépéseinek megadott sorrendben történő többszöri végrehajtását.", "Egy kifejezés értéke alapján több utasítás közül az egyik végrehajtását.", "Egy utasítás különböző értékekre történő végrehajtását."],
      helyes: "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.",
      kep: null
    },
    {
      szoveg: "★★ Mire jó a Python input() függvénye?",
      tipus: "radio",
      valaszok: ["A standard bemenetről lehet vele kizárólag sztringeket beolvastatni.", "A standard bemenetről lehet vele számokat beolvastatni.", "Olvasásra megnyitott fájlokból tudunk vele sorokat beolvasni.", "Írásra megnyitott fájlokba is lehet a segítségével adatot írni."],
      helyes: "A standard bemenetről lehet vele kizárólag sztringeket beolvastatni.",
      kep: null
    },
    {
      szoveg: "★★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás konstans és változó fogalmaira?",
      tipus: "radio",
      valaszok: ["Egy változóazonosító megkaphatja egy konstans azonosító értékét, és ez fordítva is lehetséges.", "Egy konstans azonosítóhoz a program futása során nem rendelhetünk értéket.", "Egy konstans azonosító által hivatkozott érték a program futása során semmilyen körülmények között nem változhat meg.", "Egy konstans azonosító megkaphatja egy változó értékét, de ez fordítva nem lehetséges."],
      helyes: "Egy változóazonosító megkaphatja egy konstans azonosító értékét, és ez fordítva is lehetséges.",
      kep: null
    },
    {
      szoveg: "★ Tegye sorrendbe a függvényhívás végrehajtásának technikai lépésit!",
      tipus: "sorrend",
      valaszok: ["Függvényhívás argumentumainak kiértékelése.", "Vezérlés átadása a hívott függvénynek.", "Függvény utasításainak végrehajtása.", "Vezérlés visszaadása a hívó félnek."],
      helyes: ["Függvényhívás argumentumainak kiértékelése.", "Vezérlés átadása a hívott függvénynek.", "Függvény utasításainak végrehajtása.", "Vezérlés visszaadása a hívó félnek."]
    },
    {
      szoveg: "★★ Minek a definíciója a következő: A program olyan komponense, amely műveletek hatására tetszőleges értéket felvehet, és értékét a program végrehajtása során akárhányszor módosíthatjuk?",
      tipus: "radio",
      valaszok: ["Változó", "Literál", "Konstans", "Függvény"],
      helyes: "Változó",
      kep: null
    },
    {
      szoveg: "★★ Melyik állítás a leginkább igaz a fájlok használatával kapcsolatban a programírás tekintetében?",
      tipus: "radio",
      valaszok: ["Egy fájlt egy megnyitáskor szöveges vagy bináris módban tudunk megnyitni, vegyes módban nem.", "A fájlokat mindig eltérő hosszú, karakterekből álló sorok sorozatának tekintjük.", "A fájlokat mindig azonos hosszú, bájtokból álló sorozatok listájának tekintjük.", "Egy fájlt egy adott alkalommal vagy csak írásra, vagy csak olvasásra tudunk megnyitni."],
      helyes: "Egy fájlt egy megnyitáskor szöveges vagy bináris módban tudunk megnyitni, vegyes módban nem.",
      kep: null
    },
    {
      szoveg: "★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: "RAM", jobb: "Hardver" },
        { bal: ["JPEG", "BIOS"], jobb: "Szoftver" }
      ],
      kihagyhato: ["PDF"]
    },
    {
      szoveg: "★★ Mely állítások igazak a Python float adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Az értékkészlete korlátozott, van egy legkisebb és egy legnagyobb ábrázolható értéke.", "Nem képes ábrázolni az absztrakt adattípusához tartozó minden egyes értéket.", "Értékkészlete összetett értékekből áll.", "Az értékkészlet tartományán belül bármely érték tárolására képes.", "Lehetséges értékei a <b>False</b> és a <b>True</b>."],
      helyes: ["Az értékkészlete korlátozott, van egy legkisebb és egy legnagyobb ábrázolható értéke.", "Nem képes ábrázolni az absztrakt adattípusához tartozó minden egyes értéket."],
      kep: null
    },
    {
      szoveg: "★★ Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.", "A függvény paraméterei kizárólag az argumentumok sorrendje alapján kapják meg az értékeiket.", "Minden paraméter értéke megadható kulcsszavas argumentumként.", "A kulcsszavas argumentumok meg kell, hogy előzzék a sorrendi argumentumokat."],
      helyes: "Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.",
      kep: null
    },
    {
      szoveg: "★★ Hogyan lehet megkapni egy container nevű dictionary (dict) kulcsait egy x változóban Python-ban?",
      tipus: "radio",
      valaszok: ["for i in container:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in container:", "for i in range(len(container)):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in range(len(container)):"],
      helyes: "for x in container:",
      kep: null
    },
    {
      szoveg: "★★ Mi a szemantika?",
      tipus: "radio",
      valaszok: ["Ez adja meg, hogy az adott nyelven értelmes jelsorozatoknak mi a jelentése.", "Az az egység, amelyet az értékkészlet és a műveletek határoznak meg.", "Egy algoritmusnak egy adott programozási nyelven történő leírása.", "Szabályok összessége, mely leírja, hogy egy adott nyelvben mik az érvényes jelsorozatok."],
      helyes: "Ez adja meg, hogy az adott nyelven értelmes jelsorozatoknak mi a jelentése.",
      kep: null
    },
    {
      szoveg: "★★ A szoftverfejlesztési folyamatok mely lépésében hozzuk létre a problémát megoldó algoritmust?",
      tipus: "radio",
      valaszok: ["Algoritmustervezés", "Specifikáció", "Megvalósítás", "Fenntartás"],
      helyes: "Algoritmustervezés",
      kep: null
    },
    {
      szoveg: "★ Mit ad meg egy nyelv szemantikája?",
      tipus: "radio",
      valaszok: ["Többek között azt, hogy egy nyelvben mire lehet a kulcsszavakat használni.", "Azt, hogy a szövegszerkesztőben milyen színnel jelenjenek meg az egyes elemek.", "Például, hogy milyen előre megírt függvényeket használhatunk.", "Azt, hogy mik a nyelvben érvényes jelsorozatok."],
      helyes: "Többek között azt, hogy egy nyelvben mire lehet a kulcsszavakat használni.",
      kep: null
    },
    {
      szoveg: "★ Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Lehetőség van tetszőleges (előre nem definiált) kulcsszavas argumentumok kezelésére.", "Minden függvénynek pontosan meghatározott számú paramétere van, és pontosan ennyi argumentummal kell meghívni.", "Minden paraméter értéke megadható kulcsszavas argumentumként.", "A paraméterlistában vegyesen lehetnek default értékekkel ellátott és default érték nélküli paraméterek."],
      helyes: "Lehetőség van tetszőleges (előre nem definiált) kulcsszavas argumentumok kezelésére.",
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python comprehension kifejezéseket az előálló értékekkel. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[-1, 1]", jobb: "[a - 2 for a in [-3, -1, 1, 3] if a > 0]" },
        { bal: "{-1}", jobb: "{a - 2 for a in {-3: -1, 1: 3} if a > 0}" },
        { bal: "{1:3, -1:1}", jobb: "{a - 2: a for a in {-3, -1, 1, 3} if a > 0}" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Hogyan lehet megkapni egy container nevű dictionary (dict) elemeit egy x változóban Python-ban?",
      tipus: "radio",
      valaszok: ["for i in container:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in container:", "for i in range(len(container)):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = container[i]", "for x in range(len(container)):"],
      helyes: "for x in container:",
      kep: null
    },
    {
      szoveg: "★★ Mire jó a Python with utasítása/környezete?",
      tipus: "radio",
      valaszok: ["Az utasítás \"magjában\" valamely erőforrást tudunk biztonságosan használni, és ennek lezárásával nem kell külön foglalkoznunk.", "Ez az utasítás nyitja meg a fájlokat és adja vissza őkez az <b>as</b> kulcsszó után megadott néven.", "Végigiterál a megnyitott fájlon, és egyenként visszaadja annak a sorait az <b>as</b> kulcsszó után megadott változóban.", "Ez az utasítás zárja le a fájlokat."],
      helyes: "Az utasítás \"magjában\" valamely erőforrást tudunk biztonságosan használni, és ennek lezárásával nem kell külön foglalkoznunk.",
      kep: null
    },
    {
      szoveg: "★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: ["CPU", "SSD"], jobb: "Hardver" },
        { bal: "BIOS", jobb: "Szoftver" }
      ],
      kihagyhato: ["PDF"]
    },
    {
      szoveg: "★ Melyik állítás a leginkább igaz a fájlok használatával kapcsolatban a programírás tekintetében?",
      tipus: "radio",
      valaszok: ["Egy fájl tartalmát általában folyamatában dolgozunk fel, és a fájlműveletek működése ehhez igazodik.", "Egy fájlt szöveges bináris és vegyes módban is meg tudunk nyitni.", "Egy szöveges fájlt könnyű egy tetszőleges sorszámú sor elejétől kezdve feldolgozni.", "A fájl tartalma határozza meg, hogy bináris vagy szöveges módban lehet-e megnyitni."],
      helyes: "Egy fájl tartalmát általában folyamatában dolgozunk fel, és a fájlműveletek működése ehhez igazodik.",
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python sztring literálokat és értékeiket, ha e = 42, v = 42.16 és s = '4216'.",
      tipus: "dragdrop",
      parok: [
        { bal: "'Hello 42!'", jobb: "f'Hello {e}!'" },
        { bal: "'Hello 42.2!'", jobb: "f'Hello {v:_.1f}!'" },
        { bal: "'Hello _42_!'", jobb: "f'Hello {s:_^4.2s}!'" },
        { bal: "'Hello 4216'", jobb: "f'Hello {s:_^4.4s}!'" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★ Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Lehetőség van tetszőleges (előre nem definiált) számú sorrendi argumentum kezelésére.", "Minden paraméter értéke megadható kulcsszavas argumentumként.", "A kulcsszavas argumentumok meg kell, hogy előzzék a sorrendi argumentumokat.", "A paraméterlistában vegyesen lehetnek default értékekkel ellátott és default érték nélküli paraméterek."],
      helyes: "Lehetőség van tetszőleges (előre nem definiált) számú sorrendi argumentum kezelésére.",
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[1, 3, 5, 7, 9]", jobb: "C[::]" },
        { bal: "[1, 3, 5, 7]", jobb: "C[:-1]" },
        { bal: "[9, 7, 5]", jobb: "C[-1:1:-1]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás konstans és változó fogalmaira?",
      tipus: "radio",
      valaszok: ["Egy változóazonosító megkaphatja egy konstans azonosító értékét, és ez fordítva is lehetséges.", "Egy konstans azonosítóhoz a program futása során nem rendelhetünk értéket.", "Egy konstans azonosító által hivatkozott érték a program futása során semmilyen körülmények között nem változhat meg.", "Egy konstans azonosító megkaphatja egy változó értékét, de ez fordítva nem lehetséges."],
      helyes: "Egy változóazonosító megkaphatja egy konstans azonosító értékét, és ez fordítva is lehetséges.",
      kep: null
    },
    {
      szoveg: "★★ Milyen vezérlési szerkezetek megvalósítása látható az alábbi kódban: (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Eljárásvezérlés", "Függvényvezérlés", "Kezdőfeltételes ismétléses vezérlés", "Számlálásos ismétléses vezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Eljárásvezérlés", "Függvényvezérlés"],
      kep: "program4.png"
    },
    {
      szoveg: "★★ Python-ban nem lehet rekurzívan függvényt hívni, mert a visszatérési érték felhasználása a rekurzió során nem kötelező.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Az első állítás hamis, a második igaz.",
      kep: null
    },
    {
      szoveg: "★★ Mi a szintaxis?",
      tipus: "radio",
      valaszok: ["Az adott nyelvben érvényes jelsorozatokat definiáló szabályhalmaz.", "Az az egység, amelyet az értékkészlet és a műveletek határoznak meg.", "Egy adattípus műveleteinek leírása.", "Adott típusú összes feladat megoldására vonatkozó pontos előírás."],
      helyes: "Az adott nyelvben érvényes jelsorozatokat definiáló szabályhalmaz.",
      kep: null
    },
    {
      szoveg: "★★ Meg kell határozni az összes prímszámot egy, a felhasználó által megadott számig. Mely állítások igazak az algoritmustervezéssel és Python megvalósítással kapcsolatban?",
      tipus: "radio",
      valaszok: ["A kérdéses intervallumba eső számokról egyesével eldönteni, hogy prím-e, alapvetően kevésbé hatékony megvalósításhoz vezet.", "Az Eratoszthenészi szita algoritmus minden esetben gyorsabb megvalósításhoz vezet, mint a számok egyedi elbírálásán alapuló algoritmus.", "Az Eratoszthenészi szita algoritmus halmazos és listás megvalósítása között Python-ban nem igazán van hatékonyságbeli különbség.", "Egy konkrét számról eldönteni, hogy prím-e, hatékonyabb az Eratoszthenészi szita algoritmussal, mint egyedi ellenőrzéssel."],
      helyes: "A kérdéses intervallumba eső számokról egyesével eldönteni, hogy prím-e, alapvetően kevésbé hatékony megvalósításhoz vezet.",
      kep: null
    },
    {
      szoveg: "★★ Mit írhat elő leginkább az ismétléses vezérlés?",
      tipus: "radio",
      valaszok: ["Egy utasítás megadott számú ismétlését.", "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Egy kifejezés értéke alapján több utasítás közül az egyik végrehajtását.", "Egy előre megadott részalgoritmus alkalmazását valamilyen adatokra."],
      helyes: "Egy utasítás megadott számú ismétlését.",
      kep: null
    },
    {
      szoveg: "★ Mely állítások igazak a Python tuple adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>not</b> operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre.", "A <b>-</b> operátor is értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az <b>[]</b> operátor és az értékadás művelet segítségével."],
      helyes: ["A not operátor is értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      kep: null
    },
    {
      szoveg: "★ Mi történik a szoftverfejlesztés \"Specifikáció\" nevű lépésében?",
      tipus: "radio",
      valaszok: ["Valamilyen formálisabb (pl. matematikai) nyelven megfogalmazzuk a problémát.", "Létrehozzuk a problémát megoldó algoritmust.", "Ellenőrizzük hogy a létrehozott program megfelel-e a vele szemben támasztott követelményeknek.", "Ellenőrizzük, hogy a létrehozott program használható-e arra, amire tervezték."],
      helyes: "Valamilyen formálisabb (pl. matematikai) nyelven megfogalmazzuk a problémát.",
      kep: null
    },
    {
      szoveg: "★★ Mi a szemantika?",
      tipus: "radio",
      valaszok: ["Az adott nyelven szabályos jelsorozatok értelmezését adja meg.", "Az az egység, amelyet az értékkészlet és a műveletek határoznak meg.", "Szabályok összessége, mely leírja, hogy egy adott nyelvben mik az érvényes jelsorozatok.", "Adott típusú összes feladat megoldására vonatkozó pontos előírás."],
      helyes: "Az adott nyelven szabályos jelsorozatok értelmezését adja meg.",
      kep: null
    },
    {
      szoveg: "★★ Mire jó a Python input() függvénye?",
      tipus: "radio",
      valaszok: ["A standard bemenetről lehet vele kizárólag sztringeket beolvastatni.", "A standard bemenetről lehet vele számokat beolvastatni.", "Egy másik modulban (.py fájlban) található függvényeket tudunk használni a segítségével.", "Írásra megnyitott fájlokba is lehet a segítségével adatot írni."],
      helyes: "A standard bemenetről lehet vele kizárólag sztringeket beolvastatni.",
      kep: null
    },
    {
      szoveg: "★★ Milyen tevékenységek nem kifejezetten szoftverfejlesztési feladatok?",
      tipus: "radio",
      valaszok: ["Hiba okának megkeresése.", "Annak ellenőrzése, hogy a program elég gyors és könnyen használható-e.", "A program forráskódjának átnézése.", "Program futtatása általános adatokkal."],
      helyes: "Hiba okának megkeresése.",
      kep: null
    },
    {
      szoveg: "★ Milyen vezérlési szerkezetek megvalósítása látható az alábbi kódban: (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Számlálásos ismétléses vezérlés", "Függvényvezérlés", "Végfeltételes ismétléses vezérlés", "Szekvenciális vezérlés", "Egyszerű szelekciós vezérlés"],
      helyes: ["Szekvenciális vezérlés", "Egyszerű szelekciós vezérlés"],
      kep: "program3.png"
    },
    {
      szoveg: "★★ Mit írhat elő leginkább a szekvenciális vezérlés?",
      tipus: "radio",
      valaszok: ["Egy utasítás megadott számú ismétlését.", "Egy előre megadott részalgoritmus alkalmazását valamilyen adatokra.", "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Egy utasítás valamilyen feltételhez kötött többszöri ismétlését."],
      helyes: "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.",
      kep: null
    },
    {
      szoveg: "★★ Mely állítások igazak a Python int adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>/</b> operátor <b>int</b> típusú eredménye a maradékos osztás hányadosa.", "A <b>-</b> operátor is értelmezett az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "A <b>/</b> operátor is értelmezett az értékein."],
      helyes: ["A - operátor is értelmezett az értékein.", "A / operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás mutable és immutable jellemzőire?",
      tipus: "radio",
      valaszok: ["Immutable érték látszólagos megváltozása esetén valójában új érték jön létre.", "Egy mutable értékre hivatkozó azonosítónak a program futása során csak egyszer adhatunk értéket.", "A mutable értékek \"véletlenül\" is megváltozhatnak, míg az immutable értékeket csak \"szándékosan\" tudjuk megváltoztatni.", "Egy immutable értékre hivatkozó azonosítónak a program futása során csak egyszer adhatunk értéket."],
      helyes: "Immutable érték látszólagos megváltozása esetén valójában új érték jön létre.",
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[9, 7, 5]", jobb: "C[-1:1:-1]" },
        { bal: "[1, 5, 9]", jobb: "C[0::2]" },
        { bal: "[3, 7]", jobb: "C[1::2]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Mely állítások igazak a Python tuple adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>%</b> operátor nem értelmezett az értékein.", "A <b>-</b> operátor is értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre.", "Egy adott értékének elemei módosíthatóak az <b>[]</b> operátor és az értékadás művelet segítségével."],
      helyes: ["A % operátor nem értelmezett az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      kep: null
    },
    {
      szoveg: "★★ Tegye sorrendbe a függvényhívás végrehajtásának technikai lépésit!",
      tipus: "sorrend",
      valaszok: ["Argumentumok értékének átadása a függvény paraméterei részére.", "Vezérlés átadása a hívott függvénynek.", "A függvény lokális változóinak törlése", "Vezérlés visszaadása a hívó félnek."],
      helyes: ["Argumentumok értékének átadása a függvény paraméterei részére.", "Vezérlés átadása a hívott függvénynek.", "A függvény lokális változóinak törlése", "Vezérlés visszaadása a hívó félnek."]
    },
    {
      szoveg: "★★ Hogyan használhatjuk Python-ban az f fájlt, ha az f = open('random.txt', 'rt') utasítással nyitottuk meg? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Használhatjuk a <b>for l in f:</b> utasítást, ami végigiterál a fájl sorain (amiket az 1 változóban egyenként kapunk meg).", "Használhatjuk az <b>print(v, file=f)</b> függvényhívást, ami a <b>v</b> változót és egy sorvége karaktert ír ki a fájlba.", "Használhatjuk az <b>f.read()</b> metódushívást, ami a fájl teljes tartalmát adja vissza sorok (sztringek) listájaként.", "Használhatjuk az <b>f.close()</b> metódushívást, ami lezárja a fájlt.", "Használhatjuk az <b>f.readlines()</b> metódushívást, ami a fájl teljes tartalmát adja vissza egyetlen sztringként."],
      helyes: ["Használhatjuk a for l in f: utasítást, ami végigiterál a fájl sorain (amiket az 1 változóban egyenként kapunk meg).", "Használhatjuk az f.close() metódushívást, ami lezárja a fájlt."],
      kep: null
    },
    {
      szoveg: "★★ Mely állítások igazak a Python range adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Értékkészlete elemi értékekből áll.", "Az értékkészletét egész számok számtani sorozatai alkotják.", "Az értékkészletét tetszőleges értékekből álló sorozatok alkotják.", "Egy adott értékének hossza/mérete a gyakorlatban a rendelkezésre álló memória által érdemben korlátozott.", "Az értékkészletét azonos típusú értékekből álló sorozatok alkotják."],
      helyes: ["Az értékkészletét egész számok számtani sorozatai alkotják.", "Az értékkészletét azonos típusú értékekből álló sorozatok alkotják."],
      kep: null
    },
    {
      szoveg: "★★ A rekurzió nem csak függvényekre, hanem eljárásokra is működik, mert a függvény visszatérési értékét mindenképpen fel kell használnunk a rekurzív lépés során.",
      tipus: "radio",
      valaszok: ["(nincs válasz)", "Egyik állítás sem igaz.", "Az első állítás igaz, a második hamis.", "Az első állítás hamis, a második igaz.", "Mindkét állítás igaz, de nincs összefüggés köztük.", "Mindkét állítás igaz, és összefüggés van köztük."],
      helyes: "Az első állítás igaz, a második hamis.",
      kep: null
    },
    {
      szoveg: "?★ Mely problémákat nem ajánlott rekurzióval megoldani, illetve melyeket érdemesebb vagy nem rosszabb rekurzívan, mint nem rekurzívan megoldani? (A válasz nem feltétlenül esik egybe azzal, ahogyan az előadáson megoldottuk az egyes problémákat!)",
      tipus: "dragdrop",
      parok: [
        { bal: ["Csúszóátlag számítás", "Prímszámok meghatározása adott n-ig", "n alatt k kiszámítása", "n! (n faktoriális) kiszámítása"], jobb: "Nem ajánlott rekurzióval megoldani" },
        { bal: [], jobb: "Érdemes, vagy nem kifejezetten rossz a rekurzió" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★ Mely állítások igazak a Python tuple adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>-</b> operátor is értelmezett az értékein.", "A <b>not</b> operátor is értelmezett az értékein.", "A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Egy adott értékének elemei módosíthatóak az <b>[]</b> operátor és az értékadás művelet segítségével."],
      helyes: ["A not operátor is értelmezett az értékein.", "A + és * operátorok is értelmezettek az értékein."],
      kep: null
    },
    {
      szoveg: "?★ Mely állítások igazak a Python int adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Értékkészlete elemi értékekből áll.", "Az értékkészlete korlátozott, van egy legkisebb és egy legnagyobb ábrázolható értéke.", "Nem képes ábrázolni az absztrakt addattípusához tartozó minden egyes értéket.", "Értékkészlete összetett értékekből áll.", "Lehetséges értékei az egész számok."],
      helyes: ["Értékkészlete elemi értékekből áll.", "Lehetséges értékei az egész számok."],
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python sztring literálokat és értékeiket, ha e = 42, v = 42.16 és s = '4216'.",
      tipus: "dragdrop",
      parok: [
        { bal: "'Hello 42!'", jobb: "f'Hello {e}!'" },
        { bal: "'Hello 42.16!'", jobb: "f'Hello {v}!'" },
        { bal: "'Hello 4216!'", jobb: "f'Hello {s}!'" },
        { bal: "'Hello 02a!'", jobb: "f'Hello {e:03x}!'" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Mit írhat elő leginkább a szelekciós vezérlés?",
      tipus: "radio",
      valaszok: ["Értékek kiszámítását valamely előre megadott részalgoritmus alkalmazása segítségével.", "Egy utasítás megadott számú ismétlését.", "Az algoritmus lépéseinek megadott sorrendben történő többszöri végrehajtását.", "Két utasítás közül valamilyen feltétel alapján az egyik végrehajtását."],
      helyes: "Két utasítás közül valamilyen feltétel alapján az egyik végrehajtását.",
      kep: null
    },
    {
      szoveg: "★★ Mely állítás igaz a Python függvények argumentumátadásával kapcsolatban?",
      tipus: "radio",
      valaszok: ["Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.", "A kulcsszavas argumentumok meg kell, hogy előzzék a sorrendi argumentumokat.", "Minden függvénynek pontosan meghatározott számú paramétere van, és pontosan ennyi argumentummal kell meghívni.", "A sorrendi és kulcsszavas argumentumok teljesen vegyesen használhatóak."],
      helyes: "Lehetnek olyan paraméterek, amelyek csak kulcsszavas argumentummal adhatóak meg.",
      kep: null
    },
    {
      szoveg: "★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: ["HDD", "ROM"], jobb: "Hardver" },
        { bal: "BIOS", jobb: "Szoftver" },
      ],
      kihagyhato: ["PDF"]
    },
    {
      szoveg: "★ Milyen vezérlési szerkezetek megvalósítása látható az alábbi kódban: (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Végfeltételes ismétléses vezérlés", "Egyszerű szelekciós vezérlés", "Kezdőfeltételes ismétléses vezérlés", "Eljárásvezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Egyszerű szelekciós vezérlés", "Kezdőfeltételes ismétléses vezérlés"],
      kep: "program2.png"
    },
    {
      szoveg: "★★ Mikor és milyen hatása van a continue utasításnak Python-ban?",
      tipus: "radio",
      valaszok: ["Egy ciklusban végrehajtva az adott iteráció további lépéseit átugorjuk, de  a ciklus maga folytatódik.", "A break utasítás várakozás nélkül ennek az utasításnak adja át a vezérlést.", "Egy ciklusban végrehajtva a ciklus befejeződik, és a ciklushoz tartozó else ágra ugrik a vezérlés.", "A break utasítás által okozott végrehajtás-felfüggesztésből lehet vele folytatni a program végrehajtását."],
      helyes: "Egy ciklusban végrehajtva az adott iteráció további lépéseit átugorjuk, de  a ciklus maga folytatódik.",
      kep: null
    },
    {
      szoveg: "★★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás konstans és változó fogalmaira?",
      tipus: "radio",
      valaszok: ["Egy változóazonosítóhoz a program futása során akárhányszor új értéket rendelhetünk.", "Egy változóazonosító nem kaphatja meg egy konstans azonosító értékét, és fordítva sem lehetséges az értékadás.", "Egy változóazonosító megkaphatja egy konstans azonosító értékét, de ez fordítva nem lehetséges.", "Egy konstans azonosító által hivatkozott érték a program futása során semmilyen körülmények között nem változhat meg."],
      helyes: "Egy változóazonosítóhoz a program futása során akárhányszor új értéket rendelhetünk.",
      kep: null
    },
    {
      szoveg: "★★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: "RAM", jobb: "Hardver" },
        { bal: ["WINDOWS", "PYTHON", "JPEG"], jobb: "Szoftver" },
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: ["RAM", "SSD"], jobb: "Hardver" },
        { bal: "WINDOWS", jobb: "Szoftver" },
      ],
      kihagyhato: ["PDF"]
    },
    {
      szoveg: "★★ Melyik állítás a leginkább igaz a fájlok használatával kapcsolatban a programírás tekintetében?",
      tipus: "radio",
      valaszok: ["A fájlokat használat előtt meg kell nyitni, és használat után le kell zárni.", "A fájlból könnyű véletlenszerű sorrendben kiolvasni a benne tárolt adatokat.", "A fájlokat mindig eltérő hosszú, karakterekből álló sorok sorozatának tekintjük.", "A fájl tartalma határozza meg, hogy bináris vagy szöveges módban lehet-e megnyitni."],
      helyes: "A fájlokat használat előtt meg kell nyitni, és használat után le kell zárni.",
      kep: null
    },
    {
      szoveg: "★★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: ["CPU", "HDD"], jobb: "Hardver" },
        { bal: "WINDOWS", jobb: "Szoftver" },
      ],
      kihagyhato: ["HTML"]
    },
    {
      szoveg: "★ Mely állítások igazak a Python list adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>%</b> operátor nem értelmezett az értékein.", "A <b>not</b> operátor is értelmezett az értékein.", "A <b>-</b> operátor is értelmezett az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein.", "Bármely (látszólag) értékmódosító művelete egy új értéket hoz létre."],
      helyes: ["A % operátor nem értelmezett az értékein.", "A not operátor is értelmezett az értékein."],
      kep: null
    },
    {
      szoveg: "★★ Minek a definíciója a következő: A program egy olyan komponense, amely egy (rész)algoritmust valósít meg és és többször felhasználható?",
      tipus: "radio",
      valaszok: ["Függvény", "Változó", "Literál", "Konstans"],
      helyes: "Függvény",
      kep: null
    },
    {
      szoveg: "★★ Mely állítások igazak a Python range adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Az értékkészletét elemek halmazai alkotják.", "Jól használható tetszőleges számlálásos vezérlés megvalósítására.", "Az értékkészletét tetszőleges értékekből álló sorozatok alkotják.", "Egy adott értékének hossza/mérete a gyakorlatban a rendelkezésre álló memória által érdemben korlátozott.", "Az értékkészletét azonos típusú értékekből álló sorozatok alkotják."],
      helyes: ["Jól használható tetszőleges számlálásos vezérlés megvalósítására.", "Az értékkészletét azonos típusú értékekből álló sorozatok alkotják."],
      kep: null
    },
    {
      szoveg: "★★ Milyen vezérlési szerkezetek megvalósítása látható az alábbi kódban: (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Egyszerű szelekciós vezérlés", "Eljárásvezérlés", "Kezdőfeltételes ismétléses vezérlés", "Végfeltételes ismétléses vezérlés", "Számlálásos ismétléses vezérlés"],
      helyes: ["Egyszerű szelekciós vezérlés", "Eljárásvezérlés"],
      kep: "program1.png"
    },
    {
      szoveg: "★★ Mely állítások igazak a Python float adattípusára? (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["A <b>+</b> és <b>*</b> operátorok is értelmezettek az értékein.", "A <b>**</b> és <b>//</b> operátorok is értelmezettek az értékein.", "A <b>%</b> operátor nem értelmezett az értékein.", "A kisebb-nagyobb relációs operátorok nem értelmezettek az értékein.", "Az <b>and</b> és <b>or</b> operátorok nem értelmezettek az értékein."],
      helyes: ["A + és * operátorok is értelmezettek az értékein.", "A ** és // operátorok is értelmezettek az értékein."],
      kep: null
    },
    {
      szoveg: "★★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás direkt és indirekt jellemzőire?",
      tipus: "radio",
      valaszok: ["Az azonosítóhoz rendelt memóriaterületen direkt adattárolás esetén maga az érték, indirekt tárolás esetén az érték memóriabeli helye van eltárolva.", "Indirekt adattárolás esetén \"véletlenül\" tároljuk a változók értékeit, direkt adattárolás esetén \"szándékosan\".", "Indirekt adattárolás esetén értékadás után a másolt érték kétszer szerepel a memóriában.", "A direkt és indirekt adattárolás között manapság már nincs érdemi különbség."],
      helyes: "Az azonosítóhoz rendelt memóriaterületen direkt adattárolás esetén maga az érték, indirekt tárolás esetén az érték memóriabeli helye van eltárolva.",
      kep: null
    },
    {
      szoveg: "★★ Milyen absztrakt adattípusokat használna legalább egytized Celsius-fokos pontosságú hőmérsékleti értékek sorozatának tárolására?",
      tipus: "radio",
      valaszok: ["Lista", "Egész szám", "Sztring", "Dictionary"],
      helyes: "Lista",
      kep: null
    },
    {
      szoveg: "★★ Mely problémákat nem ajánlott rekurzióval megoldani, illetve melyeket érdemesebb vagy nem rosszabb rekurzívan, mint nem rekurzívan megoldani? (A válasz nem feltétlenül esik egybe azzal, ahogyan az előadáson megoldottuk az egyes problémákat!)",
      tipus: "dragdrop",
      parok: [
        { bal: ["Csúszóátlag számítás", "Prímszámok meghatározása adott n-ig", "n alatt k kiszámítása"], jobb: "Nem ajánlott rekurzióval megoldani" },
        { bal: "Két szám legnagyobb közös osztója", jobb: "Érdemes, vagy nem kifejezetten rossz a rekurzió" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Mikor és milyen hatása van a break utasításnak Python-ban?",
      tipus: "radio",
      valaszok: ["Hatására a ciklushoz tartozó <b>else</b> ág végrehajtása nélkül befejeződik a ciklus végrehajtása.", "Hatására a ciklus azonnal a következő iteráció végrehajtásával folytatódik (vagy az <b>else</b> ággal, ha nincs több iteráció).", "A ciklus végrehajtása felfüggesztésre kerül a következő <b>continue</b> utasítás végrehajtásáig.", "A ciklus végrehajtása várakozás nélkül a következő <b>continue</b> utasítástól folytatódik."],
      helyes: "Hatására a ciklushoz tartozó else ág végrehajtása nélkül befejeződik a ciklus végrehajtása.",
      kep: null
    },
    {
      szoveg: "★★ Mi történik a szoftverfejlesztés \"Fenntartás\" nevű lépésében?",
      tipus: "radio",
      valaszok: ["Kijavítjuk a használat közben megtalált hibákat.", "A (későbbi) felhasználó a saját nyelvén megfogalmazza a problémát.", "Létrehozzuk a problémát megoldó algoritmust.", "Ellenőrízzük, hogy a létrehozott program megfelel-e a vele szemben támasztott követelményeknek."],
      helyes: "Kijavítjuk a használat közben megtalált hibákat.",
      kep: null
    },
    {
      szoveg: "★★ Tegye sorrendbe a függvényhívás végrehajtásának technikai lépéseit!",
      tipus: "sorrend",
      valaszok: ["Függvényhívás argumentumainak kiértékelése", "Függvény utasításainak végrehajtása", "A függvény lokális változóinak törlése", "Vezérlés visszaadása a hívó félnek"],
      helyes: ["Függvényhívás argumentumainak kiértékelése", "Függvény utasításainak végrehajtása", "A függvény lokális változóinak törlése", "Vezérlés visszaadása a hívó félnek"]
    },
    {
      szoveg: "★★ Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[1, 3, 5, 7, 9]", jobb: "C[::]" },
        { bal: "[1, 3, 5, 7]", jobb: "C[:-1]" },
        { bal: "[]", jobb: "C[:-1:-1]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Mi történik a szoftverfejlesztés \"Megvalósítás\" nevű lépésében?",
      tipus: "radio",
      valaszok: ["Létrehozzuk a problémát megoldó programot.", "A (későbbi) felhasználó a saját nyelvén megfogalmazza a problémát.", "Ellenőrízzük, hogy a létrehozott program megfelel-e a vele szemben támasztott követelményeknek.", "Ellenőrízzük, hogy a létrehozott program használható-e arra, amire tervezték."],
      helyes: "Létrehozzuk a problémát megoldó programot.",
      kep: null
    },
    {
      szoveg: "★★ Milyen vezérlési szerkezetek megvalósítása látható az alábbi kódban: (2 helyes válasz van, a többi hamis.)",
      tipus: "checkbox",
      valaszok: ["Többszörös szelekciós vezérlés", "Függvényvezérlés", "Szekvenciális vezérlés", "Végfeltételes ismétléses vezérlés", "Diszkrét ismétléses vezérlés"],
      helyes: ["Többszörös szelekciós vezérlés", "Függvényvezérlés"],
      kep: "program5.png"
    },
    {
      szoveg: "★★ Csoportosítsd a következő elemeket!",
      tipus: "dragdrop",
      parok: [
        { bal: "CPU", jobb: "Hardver" },
        { bal: ["WINDOWS", "PYTHON"], jobb: "Szoftver" },
      ],
      kihagyhato: ["HTML"]
    },
    {
      szoveg: "★★ Mi a szintaxis?",
      tipus: "radio",
      valaszok: ["Szabályok összessége, mely leírja, hogy egy adott nyelvben mik az érvényes jelsorozatok.", "Egy program tervezésének első lépése.", "Egy adattípus műveleteinek leírása.", "Ez adja meg, hogy az adott nyelvben értelmes jelsorozatoknak mi a jelentése."],
      helyes: "Szabályok összessége, mely leírja, hogy egy adott nyelvben mik az érvényes jelsorozatok.",
      kep: null
    },
    {
      szoveg: "★★ Mely állítás igaz az eljárásvezérlés argumentumkezelési módjaival kapcsolatban?",
      tipus: "radio",
      valaszok: ["Kimenő módú argumentumkezelés esetén a paraméter argumantummal megadott kezdőértéke az algoritmusban soha nem lesz felhasználva.", "Vegyes módú argumentumkezelés esetén a paraméter értékének megváltoztatása nem lesz hatással az argumentum értékére.", "Bemenő módú argumentumkezelés esetén a paraméter argumentummal megadott kezdőértéke az algoritmusban soha nem lesz felhasználva.", "Vegyes módú argumentumkezelés esetén a paraméter argumentummal megadott kezdőértéke az algoritmusban soha nem lesz felhasználva."],
      helyes: "Kimenő módú argumentumkezelés esetén a paraméter argumantummal megadott kezdőértéke az algoritmusban soha nem lesz felhasználva.",
      kep: null
    },
    {
      szoveg: "★★ Párosítsd a Python slicing kifejezéseket az előálló értékekkel, ha C = [1, 3, 5, 7, 9]. (1 elemnek nincs párja.)",
      tipus: "dragdrop",
      parok: [
        { bal: "[9, 7, 5, 3, 1]", jobb: "C[::-1]" },
        { bal: "[]", jobb: "C[:-1:-1]" },
        { bal: "[9, 7, 5]", jobb: "C[-1:1:-1]" }
      ],
      kihagyhato: []
    },
    {
      szoveg: "★★ Mi az eredménye az assert f(x) == c, m utasításnak?",
      tipus: "radio",
      valaszok: ["Ha az <b>f(x)</b> visszatérési értéke <b>c</b>, akkor a program tovább fut.", "Az <b>f(x)</b> függvény végeredményét határozza meg (ami ebben az esetben két érték egyszerre, <b>c</b> és <b>m</b>).", "Ha az <b>f(x)</b> két visszatérési értéke <b>c</b> és <b>m</b>, akkor a program tovább fut.", "Az <b>f(x)</b> visszatérési értéke nem <b>c</b> vagy <b>m</b> akkor a program hibát fog dobni."],
      helyes: "Ha az f(x) visszatérési értéke c, akkor a program tovább fut.",
      kep: null
    },
    {
      szoveg: "★★ Mit írhat elő leginkább a szelekciós vezérlés?",
      tipus: "radio",
      valaszok: ["Egy kifejezés értéke alapján több utasítás közül az egyik végrehajtását.", "Az algoritmus lépéseinek megadott sorrendben történő egyszeri végrehajtását.", "Egy utasítás megadott számú ismétlését.", "Értékek kiszámítását valamely előre megadott részalgoritmus alkalmazása segítségével."],
      helyes: "Egy kifejezés értéke alapján több utasítás közül az egyik végrehajtását.",
      kep: null
    },
    {
      szoveg: "★★ Az alábbiak közül általánosan melyik állítás igaz az adattárolás direkt és indirekt jellemzőire?",
      tipus: "radio",
      valaszok: ["Indirekt adattárolás esetén az érték nem az azonosítóhoz rendelt memóriaterületen van tárolva.", "Indirekt adattárolás esetén értékadás után a másolt érték kétszer szerepel a memóriában.", "Direkt adattárolás esetén értékadás után előfordulhat, hogy az eredeti változó értékének módosulása kihat az új változó értékére is.", "A direkt és indirekt adattárolás között manapság már nincs érdemi különbség."],
      helyes: "Indirekt adattárolás esetén az érték nem az azonosítóhoz rendelt memóriaterületen van tárolva.",
      kep: null
    },
    {
      szoveg: "?★ Meg kell határozni az összes prímszámot egy, a felhasználó által megadott számig. Mely állítások igazak az algoritmustervezéssel és Python megvalósítással kapcsolatban?",
      tipus: "radio",
      valaszok: ["Az Eratoszthenészi szita algoritmus halmaz típussal történő megvalósítása Python-ban hatékonyabb, mint a listás megvalósítás.", "Az Eratoszthenészi szita algoritmus lista típussal történő megvalósítása Python-ban hatékonyabb, mint a halmazzal való megvalósítás.", "Az Eratoszthenészi szita algoritmus halmazos és listás megvalósítása között Python-ban nem igazán van hatékonyságbeli különbség.", "Egy konkrét számról eldönteni, hogy prím-e, hatékonyabb az Eratoszthenészi szita algoritmussal, mint egyedi ellenőrzéssel."],
      helyes: "Az Eratoszthenészi szita algoritmus halmaz típussal történő megvalósítása Python-ban hatékonyabb, mint a listás megvalósítás.",
      kep: null
    },
    {
      szoveg: "★★ Mire jó a Python with utasítása/környezete?",
      tipus: "radio",
      valaszok: ["Például fájlok biztonságos, hibafüggetlen lezárását tudjuk megvalósítani a segítségével.", "Fájlokat csak ennek a környezetnek a segítségével tudunk megnyitni, a fájlmegnyitás máshogy nem működik.", "Python-ban nincs ilyen utasítás (a <b>while</b> van, ami hasonló).", "Ez az utasítás szükséges az erőforrások használatához."],
      helyes: "Például fájlok biztonságos, hibafüggetlen lezárását tudjuk megvalósítani a segítségével.",
      kep: null
    },
  ]
];
