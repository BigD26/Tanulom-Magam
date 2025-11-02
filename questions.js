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
    }
  ],

  [
  "Számítógép Hálózatok",
  {
    "szoveg": "Mi az 5G technológia egyik legfontosabb jellemzője a hálózati kapacitás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Masszív eszközkapcsolat, akár 1 millió eszköz/km² sűrűséggel",
      "Korlátozott eszközkapcsolat, maximum 100 ezer eszköz/km² sűrűséggel",
      "Változatlan eszközkapcsolati kapacitás a 4G-hez képest"
    ],
    "helyes": "Masszív eszközkapcsolat, akár 1 millió eszköz/km² sűrűséggel"
  },
  {
    "szoveg": "Mi az IoT (Internet of Things) definíciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hálózatba kapcsolt eszközök rendszere, amelyek képesek adatokat gyűjteni, feldolgozni és megosztani egymással és a felhővel",
      "Kizárólag okostelefonokból álló hálózat, amely lehetővé teszi a felhasználók közötti kommunikációt",
      "Olyan rendszer, amely csak ipari környezetben használható gépek vezérlésére"
    ],
    "helyes": "Hálózatba kapcsolt eszközök rendszere, amelyek képesek adatokat gyűjteni, feldolgozni és megosztani egymással és a felhővel"
  },
  {
    "szoveg": "Hogyan értelmezhető az 5G technológia 'hálózatszeletelés' funkciója a különböző alkalmazások szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi különböző virtuális hálózatok létrehozását, amelyek optimalizáltak specifikus alkalmazásokhoz és szolgáltatásokhoz",
      "A hálózat fizikai felosztását jelenti különálló, egymással nem kommunikáló részekre",
      "Az 5G hálózat teljes sávszélességének egyenlő elosztását jelenti az összes felhasználó között"
    ],
    "helyes": "Lehetővé teszi különböző virtuális hálózatok létrehozását, amelyek optimalizáltak specifikus alkalmazásokhoz és szolgáltatásokhoz"
  },
  {
    "szoveg": "Hogyan értelmezhető az IoT hatása a felhőalapú szolgáltatásokra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IoT eszközök által generált hatalmas adatmennyiség növeli a felhőalapú szolgáltatások iránti igényt az adatok tárolása, feldolgozása és elemzése céljából",
      "Az IoT csökkenti a felhőalapú szolgáltatások iránti igényt, mivel minden adatfeldolgozás lokálisan történik az eszközökön",
      "Az IoT nincs hatással a felhőalapú szolgáltatásokra, mivel teljesen független rendszerként működik"
    ],
    "helyes": "Az IoT eszközök által generált hatalmas adatmennyiség növeli a felhőalapú szolgáltatások iránti igényt az adatok tárolása, feldolgozása és elemzése céljából"
  },
  {
    "szoveg": "Milyen következményei lehetnek az 5G és IoT együttes elterjedésének az egészségügyi szektorban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé válik a valós idejű távmonitorozás és a személyre szabott kezelések széles körű alkalmazása",
      "Az orvosok szerepe teljesen megszűnik, minden diagnózist és kezelést automatizált rendszerek végeznek",
      "Az egészségügyi ellátás kizárólag virtuális valóságban történik, megszüntetve a fizikai orvos-beteg találkozásokat"
    ],
    "helyes": "Lehetővé válik a valós idejű távmonitorozás és a személyre szabott kezelések széles körű alkalmazása"
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le az 5G és IoT elterjedésének hatásáról az ipari folyamatokra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ipari folyamatok optimalizálódnak, lehetővé téve a prediktív karbantartást és a rugalmas gyártást",
      "Az ipari termelés teljesen megszűnik, minden gyártási folyamatot robotok végeznek emberi felügyelet nélkül",
      "Az 5G és IoT nincs hatással az ipari folyamatokra, a gyártás változatlan marad"
    ],
    "helyes": "Az ipari folyamatok optimalizálódnak, lehetővé téve a prediktív karbantartást és a rugalmas gyártást"
  },
  {
    "szoveg": "Hogyan ítélhető meg az 5G és IoT elterjedésének hatása az adatvédelem és biztonság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Növeli a kiberbiztonsági kockázatokat a megnövekedett támadási felület miatt, de új lehetőségeket is teremt a fejlett biztonsági megoldásokra",
      "Teljesen biztonságossá teszi az internetet, megszüntetve minden adatvédelmi és biztonsági kockázatot",
      "Nincs hatással az adatvédelemre és biztonságra, a jelenlegi biztonsági megoldások tökéletesen megfelelőek maradnak"
    ],
    "helyes": "Növeli a kiberbiztonsági kockázatokat a megnövekedett támadási felület miatt, de új lehetőségeket is teremt a fejlett biztonsági megoldásokra"
  },
  {
    "szoveg": "Hogyan ítélhető meg az 5G és IoT együttes hatása a társadalomra és a munkaerőpiacra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Jelentős változásokat hoz, új lehetőségeket teremt, de kihívásokat is jelent, például a munkaerőpiaci átalakulás és a digitális szakadék terén",
      "Kizárólag pozitív hatásai vannak, minden társadalmi problémát megold és minden munkakört automatizál",
      "Nincs jelentős hatása a társadalomra és a munkaerőpiacra, minden marad a jelenlegi állapotában"
    ],
    "helyes": "Jelentős változásokat hoz, új lehetőségeket teremt, de kihívásokat is jelent, például a munkaerőpiaci átalakulás és a digitális szakadék terén"
  },
  {
    "szoveg": "Hogyan értelmezhető a hálózati semlegesség elve a modern internetes környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az internetszolgáltatóknak minden internetes forgalmat egyenlően kell kezelniük, függetlenül annak tartalmától, forrásától vagy céljától.",
      "Az internetszolgáltatóknak jogukban áll bizonyos típusú forgalmakat előnyben részesíteni a hálózat hatékonyabb működése érdekében.",
      "A hálózati semlegesség elve csak a nagy tech cégekre vonatkozik, a kisebb szolgáltatókra nem."
    ],
    "helyes": "Az internetszolgáltatóknak minden internetes forgalmat egyenlően kell kezelniük, függetlenül annak tartalmától, forrásától vagy céljától."
  },
  {
    "szoveg": "Milyen módon értelmezhető a 'zero-rating' szolgáltatás a hálózati semlegesség kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'zero-rating' szolgáltatás a hálózati semlegesség elvének potenciális megsértéseként értelmezhető, mivel bizonyos szolgáltatásokat előnyben részesít.",
      "A 'zero-rating' szolgáltatás teljes mértékben összhangban van a hálózati semlegesség elvével, mivel ingyenes hozzáférést biztosít.",
      "A 'zero-rating' szolgáltatás irreleváns a hálózati semlegesség szempontjából, mivel csak az adatforgalom mennyiségére vonatkozik."
    ],
    "helyes": "A 'zero-rating' szolgáltatás a hálózati semlegesség elvének potenciális megsértéseként értelmezhető, mivel bizonyos szolgáltatásokat előnyben részesít."
  },
  {
    "szoveg": "Hogyan ítélhető meg a hálózati semlegesség elve a hálózati infrastruktúrába történő befektetések szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati semlegesség korlátozhatja a befektetési hajlandóságot, de hosszú távon elősegíti az innovációt és a versenyt.",
      "A hálózati semlegesség egyértelműen növeli a befektetési hajlandóságot az infrastruktúrába.",
      "A hálózati semlegesség nincs hatással a hálózati infrastruktúrába történő befektetésekre."
    ],
    "helyes": "A hálózati semlegesség korlátozhatja a befektetési hajlandóságot, de hosszú távon elősegíti az innovációt és a versenyt."
  },
  {
    "szoveg": "Hogyan ítélhető meg a hálózati semlegesség elve a streaming szolgáltatások priorizálása szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A streaming szolgáltatások priorizálása sérti a hálózati semlegesség elvét, de javíthatja a felhasználói élményt bizonyos esetekben.",
      "A streaming szolgáltatások priorizálása teljes mértékben összhangban van a hálózati semlegesség elvével.",
      "A streaming szolgáltatások priorizálása irreleváns a hálózati semlegesség szempontjából."
    ],
    "helyes": "A streaming szolgáltatások priorizálása sérti a hálózati semlegesség elvét, de javíthatja a felhasználói élményt bizonyos esetekben."
  },
  {
    "szoveg": "Milyen hipotézist lehet felállítani a hálózati semlegesség jövőjére vonatkozóan az 5G hálózatok elterjedésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G hálózatok új kihívásokat hoznak a hálózati semlegesség terén, és valószínűleg a szabályozás finomhangolására lesz szükség.",
      "Az 5G hálózatok teljesen feleslegessé teszik a hálózati semlegesség elvét a megnövekedett kapacitás miatt.",
      "Az 5G hálózatok nem befolyásolják a hálózati semlegesség kérdését, a jelenlegi szabályozás változatlan marad."
    ],
    "helyes": "Az 5G hálózatok új kihívásokat hoznak a hálózati semlegesség terén, és valószínűleg a szabályozás finomhangolására lesz szükség."
  },
  {
    "szoveg": "Milyen hipotézist lehet felállítani a mesterséges intelligencia (AI) alapú hálózatmenedzsment hatásáról a hálózati semlegességre?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AI-alapú hálózatmenedzsment új kihívásokat hoz a hálózati semlegesség terén, és szükségessé teheti a szabályozási keretek újragondolását.",
      "Az AI-alapú hálózatmenedzsment teljes mértékben megoldja a hálózati semlegesség problémáját, feleslegessé téve minden szabályozást.",
      "Az AI-alapú hálózatmenedzsment nem lesz hatással a hálózati semlegességre, a jelenlegi szabályozás változatlan marad."
    ],
    "helyes": "Az AI-alapú hálózatmenedzsment új kihívásokat hoz a hálózati semlegesség terén, és szükségessé teheti a szabályozási keretek újragondolását."
  },
  {
    "szoveg": "Hogyan értelmezhető a sávszélesség fogalma a számítógépes hálózatok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A sávszélesség egy kommunikációs csatorna maximális elméleti adatátviteli kapacitása, amely meghatározza a csatorna potenciális teljesítményét.",
      "A sávszélesség a ténylegesen átvitt adatmennyiség egy adott időegység alatt, amely változik a hálózati körülményektől függően.",
      "A sávszélesség a hálózati eszközök fizikai méretét jelöli, amely meghatározza az adatátvitel sebességét."
    ],
    "helyes": "A sávszélesség egy kommunikációs csatorna maximális elméleti adatátviteli kapacitása, amely meghatározza a csatorna potenciális teljesítményét."
  },
  {
    "szoveg": "Mit jelent az átviteli sebesség fogalma a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átviteli sebesség a ténylegesen átvitt adatmennyiség egy adott időegység alatt, amely változik a hálózati körülményektől függően.",
      "Az átviteli sebesség egy kommunikációs csatorna maximális elméleti adatátviteli kapacitása, amely állandó érték egy adott rendszerre vonatkozóan.",
      "Az átviteli sebesség a hálózati eszközök közötti fizikai távolságot jelöli, amely befolyásolja az adatátvitel gyorsaságát."
    ],
    "helyes": "Az átviteli sebesség a ténylegesen átvitt adatmennyiség egy adott időegység alatt, amely változik a hálózati körülményektől függően."
  },
  {
    "szoveg": "Milyen fő különbség van a sávszélesség és az átviteli sebesség között a hálózati teljesítmény szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A sávszélesség egy elméleti maximum, míg az átviteli sebesség a gyakorlatban megvalósuló, változó teljesítmény.",
      "A sávszélesség a valós idejű adatátvitelt mutatja, míg az átviteli sebesség a hálózat maximális kapacitását jelzi.",
      "A sávszélesség csak vezetékes hálózatokra vonatkozik, míg az átviteli sebesség kizárólag vezeték nélküli hálózatokra értelmezhető."
    ],
    "helyes": "A sávszélesség egy elméleti maximum, míg az átviteli sebesség a gyakorlatban megvalósuló, változó teljesítmény."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz a sávszélesség és az átviteli sebesség értéke egy tipikus hálózati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átviteli sebesség általában alacsonyabb vagy egyenlő a sávszélességgel, de soha nem haladja meg azt.",
      "Az átviteli sebesség mindig magasabb, mint a sávszélesség, mivel a valós adatátvitel gyorsabb, mint az elméleti maximum.",
      "A sávszélesség és az átviteli sebesség mindig megegyezik, mivel mindkettő az adatátvitel sebességét méri."
    ],
    "helyes": "Az átviteli sebesség általában alacsonyabb vagy egyenlő a sávszélességgel, de soha nem haladja meg azt."
  },
  {
    "szoveg": "Milyen példával illusztrálható a sávszélesség és az átviteli sebesség közötti különbség egy otthoni internetkapcsolat esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy 100 Mbps-os kapcsolatnál a sávszélesség állandó 100 Mbps, míg az átviteli sebesség változhat 95 Mbps-tól 5 Mbps-ig a használattól és körülményektől függően.",
      "Egy 100 Mbps-os kapcsolatnál a sávszélesség és az átviteli sebesség mindig azonos, 100 Mbps, függetlenül a használattól és körülményektől.",
      "Egy 100 Mbps-os kapcsolatnál a sávszélesség változik 50-150 Mbps között, míg az átviteli sebesség állandó 100 Mbps."
    ],
    "helyes": "Egy 100 Mbps-os kapcsolatnál a sávszélesség állandó 100 Mbps, míg az átviteli sebesség változhat 95 Mbps-tól 5 Mbps-ig a használattól és körülményektől függően."
  },
  {
    "szoveg": "Hogyan illusztrálható a sávszélesség és az átviteli sebesség közötti különbség egy közlekedési analógiával?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A sávszélesség olyan, mint egy autópálya szélessége, míg az átviteli sebesség az autók tényleges haladási sebessége az adott pillanatban.",
      "A sávszélesség olyan, mint az autók sebességmérője, míg az átviteli sebesség az autópálya hossza.",
      "A sávszélesség olyan, mint az autók száma az autópályán, míg az átviteli sebesség az autópálya kapacitása."
    ],
    "helyes": "A sávszélesség olyan, mint egy autópálya szélessége, míg az átviteli sebesség az autók tényleges haladási sebessége az adott pillanatban."
  },
  {
    "szoveg": "Hogyan járul hozzá az állapotmentes hálózat koncepciója az internet skálázhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati eszközök nem tárolnak kapcsolat-specifikus információkat, így könnyebben bővíthető a hálózat új eszközökkel.",
      "Az állapotmentes hálózat lehetővé teszi a végpontok számára, hogy több kapcsolatot kezeljenek egyidejűleg.",
      "Az állapotmentes hálózat automatikusan optimalizálja az adatátviteli útvonalakat a jobb teljesítmény érdekében."
    ],
    "helyes": "A hálózati eszközök nem tárolnak kapcsolat-specifikus információkat, így könnyebben bővíthető a hálózat új eszközökkel."
  },
  {
    "szoveg": "Mit jelent a végponti intelligencia koncepciója az internet architektúrájában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat 'intelligens' funkciói a végpontokban (pl. kliensek, szerverek) vannak megvalósítva, nem a hálózat belsejében.",
      "A hálózati eszközök automatikusan alkalmazkodnak a végpontok igényeihez és optimalizálják a teljesítményt.",
      "A végpontok csak egyszerű adatküldési és -fogadási feladatokat látnak el, míg a komplex funkciók a hálózat belsejében vannak."
    ],
    "helyes": "A hálózat 'intelligens' funkciói a végpontokban (pl. kliensek, szerverek) vannak megvalósítva, nem a hálózat belsejében."
  },
  {
    "szoveg": "Milyen hatása lehet az állapotmentes hálózati koncepciónak egy nagy forgalmú webszolgáltatás teljesítményére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Javíthatja a teljesítményt, mert a hálózati eszközök egyszerűbben és gyorsabban tudják továbbítani a csomagokat.",
      "Csökkentheti a teljesítményt, mert minden kérést újra kell építeni a végpontokon.",
      "Nem befolyásolja jelentősen a teljesítményt, mert csak a hálózat belső működését érinti."
    ],
    "helyes": "Javíthatja a teljesítményt, mert a hálózati eszközök egyszerűbben és gyorsabban tudják továbbítani a csomagokat."
  },
  {
    "szoveg": "Hogyan befolyásolhatja a végponti intelligencia koncepciója az új hálózati technológiák, például az IoT (Internet of Things) fejlődését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elősegítheti az IoT gyors fejlődését, mert az új funkciók könnyen implementálhatók a végponti eszközökben.",
      "Lassíthatja az IoT fejlődését, mert minden eszköznek komplexebbnek kell lennie.",
      "Nem lesz jelentős hatása, mert az IoT főleg a hálózat belső működésére támaszkodik."
    ],
    "helyes": "Elősegítheti az IoT gyors fejlődését, mert az új funkciók könnyen implementálhatók a végponti eszközökben."
  },
  {
    "szoveg": "Mennyire hatékony az állapotmentes hálózati modell a modern internet kihívásainak kezelésében, például a kiberbiztonság területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Részben hatékony, mert egyszerűsíti a hálózatot, de a biztonsági funkciókat a végpontokra hárítja.",
      "Teljesen hatékony, mert megakadályozza a hálózaton belüli támadásokat.",
      "Nem hatékony, mert nem teszi lehetővé a hálózaton belüli biztonsági ellenőrzéseket."
    ],
    "helyes": "Részben hatékony, mert egyszerűsíti a hálózatot, de a biztonsági funkciókat a végpontokra hárítja."
  },
  {
    "szoveg": "Mennyire alkalmas a végponti intelligencia koncepciója a jövő internetes technológiáinak fejlesztésére, figyelembe véve a növekvő komplexitást és a biztonsági követelményeket?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nagyon alkalmas, mert rugalmasságot biztosít az innovációhoz, de kihívásokat is jelent a biztonság és komplexitás kezelésében.",
      "Kevéssé alkalmas, mert túl nagy terhet ró a végpontokra, ami lassítja a fejlődést.",
      "Nem alkalmas, mert nem teszi lehetővé a hálózat szintű optimalizációt és biztonsági intézkedéseket."
    ],
    "helyes": "Nagyon alkalmas, mert rugalmasságot biztosít az innovációhoz, de kihívásokat is jelent a biztonság és komplexitás kezelésében."
  },
  {
    "szoveg": "Melyik hálózati topológiában kapcsolódik minden eszköz egy központi csomóponthoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Csillag topológia",
      "Busz topológia",
      "Gyűrű topológia"
    ],
    "helyes": "Csillag topológia"
  },
  {
    "szoveg": "Melyik hálózati topológia jellemzője, hogy az adatok egyirányban haladnak egy zárt hurokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Gyűrű topológia",
      "Mesh topológia",
      "Busz topológia"
    ],
    "helyes": "Gyűrű topológia"
  },
  {
    "szoveg": "Miért tekinthető a mesh topológia a legmegbízhatóbbnak a hálózati topológiák közül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert minden eszköz közvetlenül kapcsolódik a többi eszközhöz, így több útvonal áll rendelkezésre az adattovábbításhoz.",
      "Mert egyetlen központi csomópont kezeli az összes kapcsolatot, csökkentve a hibalehetőségeket.",
      "Mert az adatok csak egy irányban haladhatnak, így nincs lehetőség ütközésekre."
    ],
    "helyes": "Mert minden eszköz közvetlenül kapcsolódik a többi eszközhöz, így több útvonal áll rendelkezésre az adattovábbításhoz."
  },
  {
    "szoveg": "Hogyan befolyásolja a busz topológia jellemzője a hálózat működését egy kábel meghibásodása esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az egész hálózat leáll, mert minden eszköz ugyanazon a fő kábelen osztozik.",
      "Csak a meghibásodott kábel két végén lévő eszközök közötti kommunikáció szakad meg.",
      "A hálózat automatikusan átirányítja a forgalmat egy alternatív útvonalra."
    ],
    "helyes": "Az egész hálózat leáll, mert minden eszköz ugyanazon a fő kábelen osztozik."
  },
  {
    "szoveg": "Hogyan viszonyul a csillag topológia megbízhatósága a busz topológiáéhoz egy eszköz meghibásodása esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csillag topológia megbízhatóbb, mert egy eszköz meghibásodása nem befolyásolja a többi eszköz működését.",
      "A busz topológia megbízhatóbb, mert nincs központi pont, ami meghibásodhat.",
      "Mindkét topológia egyformán megbízható, mert azonos számú kapcsolattal rendelkeznek."
    ],
    "helyes": "A csillag topológia megbízhatóbb, mert egy eszköz meghibásodása nem befolyásolja a többi eszköz működését."
  },
  {
    "szoveg": "Milyen szempontból előnyösebb a mesh topológia a csillag topológiához képest nagy kiterjedésű hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A mesh topológia jobb skálázhatóságot és nagyobb redundanciát biztosít.",
      "A mesh topológia egyszerűbb felépítésű és könnyebben karbantartható.",
      "A mesh topológia alacsonyabb költségű és kevesebb kábelt igényel."
    ],
    "helyes": "A mesh topológia jobb skálázhatóságot és nagyobb redundanciát biztosít."
  },
  {
    "szoveg": "Melyik hálózati topológiára példa egy modern otthoni Wi-Fi hálózat, ahol minden eszköz egy központi routerhez csatlakozik?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Csillag topológia",
      "Busz topológia",
      "Gyűrű topológia"
    ],
    "helyes": "Csillag topológia"
  },
  {
    "szoveg": "Melyik hálózati topológiára példa egy városi Wi-Fi hálózat, ahol több hozzáférési pont kapcsolódik egymáshoz a lefedettség növelése érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mesh topológia",
      "Gyűrű topológia",
      "Busz topológia"
    ],
    "helyes": "Mesh topológia"
  },
  {
    "szoveg": "Hogyan járul hozzá a modularitás a hálózatok skálázhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modularitás lehetővé teszi a hálózat egyes komponenseinek független bővítését és fejlesztését, így a rendszer könnyebben alkalmazkodik a növekvő terheléshez.",
      "A modularitás csökkenti a hálózat komplexitását, ezáltal korlátozva annak növekedési lehetőségeit.",
      "A modularitás kizárólag a hálózat fizikai infrastruktúrájának bővítését teszi lehetővé, a szoftveres komponensek változtatása nélkül."
    ],
    "helyes": "A modularitás lehetővé teszi a hálózat egyes komponenseinek független bővítését és fejlesztését, így a rendszer könnyebben alkalmazkodik a növekvő terheléshez."
  },
  {
    "szoveg": "Mit jelent a modularitás koncepciója a számítógépes hálózatok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati funkciók és protokollok különálló, jól definiált rétegekbe és komponensekbe szervezése.",
      "A hálózati hardverek fizikai elkülönítése különböző helyiségekben.",
      "A hálózati forgalom szigorú elkülönítése különböző felhasználói csoportok között."
    ],
    "helyes": "A hálózati funkciók és protokollok különálló, jól definiált rétegekbe és komponensekbe szervezése."
  },
  {
    "szoveg": "Hogyan kapcsolódik össze a modularitás és a terheléselosztás a hálózatok skálázhatóságában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A moduláris felépítés lehetővé teszi a terhelés hatékony elosztását különböző komponensek között, ami javítja a skálázhatóságot.",
      "A modularitás és a terheléselosztás egymást kizáró koncepciók, amelyek nem alkalmazhatók együtt a hálózatokban.",
      "A terheléselosztás csak nem moduláris hálózatokban valósítható meg hatékonyan."
    ],
    "helyes": "A moduláris felépítés lehetővé teszi a terhelés hatékony elosztását különböző komponensek között, ami javítja a skálázhatóságot."
  },
  {
    "szoveg": "Milyen kapcsolat van a modularitás, a hibakeresés és a hálózatok skálázhatósága között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modularitás megkönnyíti a hibakeresést és -javítást, ami hozzájárul a hálózat hatékonyabb skálázhatóságához és karbantarthatóságához.",
      "A modularitás megnehezíti a hibakeresést, de javítja a skálázhatóságot, így kompromisszumot kell kötni.",
      "A hibakeresés és a skálázhatóság független a hálózat modularitásától."
    ],
    "helyes": "A modularitás megkönnyíti a hibakeresést és -javítást, ami hozzájárul a hálózat hatékonyabb skálázhatóságához és karbantarthatóságához."
  },
  {
    "szoveg": "Milyen példa illusztrálja jól a modularitás szerepét a hálózatok skálázhatóságában egy vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalat csak a switch-eket és router-eket cseréli nagyobb kapacitásúakra a hálózat bővítésekor, anélkül hogy az egész infrastruktúrát újraterveznék.",
      "Egy vállalat teljesen új hálózati infrastruktúrát épít ki minden alkalommal, amikor bővíteni kell a rendszert.",
      "Egy vállalat kizárólag szoftveres megoldásokkal próbálja meg növelni a hálózat kapacitását, figyelmen kívül hagyva a hardveres komponenseket."
    ],
    "helyes": "Egy vállalat csak a switch-eket és router-eket cseréli nagyobb kapacitásúakra a hálózat bővítésekor, anélkül hogy az egész infrastruktúrát újraterveznék."
  },
  {
    "szoveg": "Hogyan illusztrálja az OSI (Open Systems Interconnection) modell a modularitás és skálázhatóság kapcsolatát a hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell hét független réteget definiál, lehetővé téve egy réteg fejlesztését a többi módosítása nélkül, ami elősegíti a skálázhatóságot.",
      "Az OSI modell egyetlen összefüggő egységként kezeli a hálózati kommunikációt, ami korlátozza a skálázhatóságot.",
      "Az OSI modell kizárólag a fizikai rétegre koncentrál, figyelmen kívül hagyva a magasabb szintű protokollokat."
    ],
    "helyes": "Az OSI modell hét független réteget definiál, lehetővé téve egy réteg fejlesztését a többi módosítása nélkül, ami elősegíti a skálázhatóságot."
  },
  {
    "szoveg": "Hogyan működik a csomagkapcsolás elve a hálózati adattovábbításban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatokat kisebb csomagokra bontják, amelyek egymástól függetlenül haladnak a hálózaton, majd a célállomáson újra összeállítják őket.",
      "Az adatokat egy folyamatos, dedikált kapcsolaton keresztül továbbítják a forrástól a célig, megszakítás nélkül.",
      "Az adatokat teljes egészében, egyetlen nagy egységként küldik át a hálózaton, a legrövidebb útvonalat választva."
    ],
    "helyes": "Az adatokat kisebb csomagokra bontják, amelyek egymástól függetlenül haladnak a hálózaton, majd a célállomáson újra összeállítják őket."
  },
  {
    "szoveg": "Mit jelent az áramkörkapcsolás elve a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Dedikált, folyamatos kapcsolatot hoz létre a küldő és a fogadó között, lefoglalva a teljes kommunikációs útvonalat a kapcsolat idejére.",
      "Az adatokat dinamikusan osztja szét különböző hálózati útvonalak között, optimalizálva az erőforrás-kihasználást.",
      "Az adatokat titkosítja és csak a megfelelő kulccsal rendelkező fogadó fél tudja dekódolni."
    ],
    "helyes": "Dedikált, folyamatos kapcsolatot hoz létre a küldő és a fogadó között, lefoglalva a teljes kommunikációs útvonalat a kapcsolat idejére."
  },
  {
    "szoveg": "Milyen szempontból előnyösebb a csomagkapcsolás az áramkörkapcsoláshoz képest a hálózati erőforrások kihasználása terén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csomagkapcsolás hatékonyabban osztja meg az erőforrásokat több felhasználó között, míg az áramkörkapcsolás dedikált erőforrásokat használ.",
      "A csomagkapcsolás állandó sávszélességet biztosít, míg az áramkörkapcsolás változó sávszélességet használ a forgalom függvényében.",
      "A csomagkapcsolás kizárólagos hozzáférést biztosít a hálózati erőforrásokhoz, míg az áramkörkapcsolás megosztja azokat."
    ],
    "helyes": "A csomagkapcsolás hatékonyabban osztja meg az erőforrásokat több felhasználó között, míg az áramkörkapcsolás dedikált erőforrásokat használ."
  },
  {
    "szoveg": "Milyen különbség van a csomagkapcsolás és az áramkörkapcsolás között a hálózati hibákkal szembeni ellenállóképesség tekintetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csomagkapcsolás rugalmasabb és ellenállóbb a hálózati hibákkal szemben, mivel a csomagok alternatív útvonalakon is eljuthatnak a célba.",
      "Az áramkörkapcsolás ellenállóbb a hálózati hibákkal szemben, mert dedikált útvonalat használ, ami nem változik a kommunikáció során.",
      "Mindkét módszer egyformán ellenálló a hálózati hibákkal szemben, nincs jelentős különbség közöttük ebben a tekintetben."
    ],
    "helyes": "A csomagkapcsolás rugalmasabb és ellenállóbb a hálózati hibákkal szemben, mivel a csomagok alternatív útvonalakon is eljuthatnak a célba."
  },
  {
    "szoveg": "Milyen példa illusztrálja legjobban a csomagkapcsolás elvének működését a mindennapi internethasználatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy nagy méretű fájl e-mailben történő küldése, ahol a fájl több kisebb csomagra bomlik, külön-külön halad a hálózaton, majd a célállomáson újra összeáll.",
      "Egy videóhívás, ahol a hang és a kép folyamatos, megszakítás nélküli átvitele történik a két fél között.",
      "Egy online banki tranzakció, ahol a teljes adatátvitel egyetlen, titkosított csomagban történik a biztonság érdekében."
    ],
    "helyes": "Egy nagy méretű fájl e-mailben történő küldése, ahol a fájl több kisebb csomagra bomlik, külön-külön halad a hálózaton, majd a célállomáson újra összeáll."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban az áramkörkapcsolás elvének alkalmazását a kommunikációs technológiákban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy hagyományos vezetékes telefonhívás, ahol dedikált kapcsolat jön létre a két fél között a teljes beszélgetés idejére.",
      "Egy weboldal böngészése, ahol az adatok kis csomagokban érkeznek a szerverről a böngészőbe.",
      "Egy fájl letöltése torrent technológiával, ahol az adatok különböző forrásokból, darabokban érkeznek."
    ],
    "helyes": "Egy hagyományos vezetékes telefonhívás, ahol dedikált kapcsolat jön létre a két fél között a teljes beszélgetés idejére."
  },
  {
    "szoveg": "Hogyan segíti elő az absztrakció elve a hálózati rétegek közötti kommunikációt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden réteg csak a közvetlenül alatta lévő réteggel kommunikál, és csak a szükséges információkat osztja meg.",
      "Minden réteg közvetlenül kommunikál az összes többi réteggel, megosztva minden információt.",
      "A rétegek közötti kommunikáció teljesen megszűnik, és minden réteg önállóan működik."
    ],
    "helyes": "Minden réteg csak a közvetlenül alatta lévő réteggel kommunikál, és csak a szükséges információkat osztja meg."
  },
  {
    "szoveg": "Mi az absztrakció elvének fő előnye a hálózati architektúrában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a komplex hálózati rendszerek egyszerűbb kezelését és fejlesztését.",
      "Növeli a hálózati kommunikáció sebességét azáltal, hogy minden réteget egyidejűleg optimalizál.",
      "Csökkenti a hálózati biztonságot azáltal, hogy minden réteg hozzáfér az összes információhoz."
    ],
    "helyes": "Lehetővé teszi a komplex hálózati rendszerek egyszerűbb kezelését és fejlesztését."
  },
  {
    "szoveg": "Hogyan járul hozzá az absztrakció elve a hálózati protokollok és technológiák fejlesztéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a moduláris fejlesztést és cserét anélkül, hogy az egész rendszert újra kellene tervezni.",
      "Megköveteli, hogy minden protokollt és technológiát egyszerre fejlesszenek és implementáljanak.",
      "Korlátozza az új technológiák bevezetését, hogy megőrizze a meglévő rendszerek stabilitását."
    ],
    "helyes": "Lehetővé teszi a moduláris fejlesztést és cserét anélkül, hogy az egész rendszert újra kellene tervezni."
  },
  {
    "szoveg": "Milyen szerepet játszik az absztrakció elve a különböző gyártók eszközeinek együttműködésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elősegíti az interoperabilitást azáltal, hogy csak a rétegek közötti interfészeket kell standardizálni.",
      "Megköveteli, hogy minden gyártó azonos hardvert és szoftvert használjon.",
      "Korlátozza az együttműködést, hogy csak azonos gyártótól származó eszközök kommunikálhassanak egymással."
    ],
    "helyes": "Elősegíti az interoperabilitást azáltal, hogy csak a rétegek közötti interfészeket kell standardizálni."
  },
  {
    "szoveg": "Hogyan szemlélteti egy e-mail küldése az absztrakció elvét a hálózati rétegek között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazási réteg csak az üzenet tartalmával és címzésével foglalkozik, míg az alsóbb rétegek kezelik az átvitelt és útvonalválasztást.",
      "Minden réteg részletesen foglalkozik az e-mail teljes útjával a feladótól a címzettig.",
      "Az e-mail küldése egyetlen rétegben történik, amely az összes feladatot elvégzi."
    ],
    "helyes": "Az alkalmazási réteg csak az üzenet tartalmával és címzésével foglalkozik, míg az alsóbb rétegek kezelik az átvitelt és útvonalválasztást."
  },
  {
    "szoveg": "Milyen példával lehet szemléltetni az absztrakció elvének jelentőségét a hálózati technológiák fejlődésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G hálózatok bevezetése nem igényelte a teljes internetes infrastruktúra újratervezését.",
      "Az új hálózati technológiák bevezetése mindig a teljes hálózati stack újratervezését igényli.",
      "A hálózati technológiák fejlődése megállt, mert az absztrakció elve nem teszi lehetővé az innovációt."
    ],
    "helyes": "Az 5G hálózatok bevezetése nem igényelte a teljes internetes infrastruktúra újratervezését."
  },
  {
    "szoveg": "Mely eszköz felelős elsődlegesen a kisvállalati hálózatban a belső hálózat és az internet összekapcsolásáért, valamint a forgalom irányításáért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Router",
      "Switch",
      "Tűzfal"
    ],
    "helyes": "Router"
  },
  {
    "szoveg": "Mi a fő feladata egy NAS (Network Attached Storage) eszköznek egy kisvállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hálózati adattárolás és gyors fájlmegosztás biztosítása",
      "E-mailek kezelése és tárolása",
      "Hálózati forgalom monitorozása"
    ],
    "helyes": "Hálózati adattárolás és gyors fájlmegosztás biztosítása"
  },
  {
    "szoveg": "Hogyan járul hozzá egy switch a kisvállalati hálózat hatékony működéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Összekapcsolja a helyi hálózat eszközeit, lehetővé téve a hatékony kommunikációt és adatátvitelt közöttük",
      "Biztosítja a vezeték nélküli kapcsolatot a mobil eszközök számára",
      "Védi a belső hálózatot a külső fenyegetésektől"
    ],
    "helyes": "Összekapcsolja a helyi hálózat eszközeit, lehetővé téve a hatékony kommunikációt és adatátvitelt közöttük"
  },
  {
    "szoveg": "Miért fontos egy VPN (Virtual Private Network) megoldás alkalmazása egy kisvállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a biztonságos távoli hozzáférést a vállalati hálózathoz",
      "Növeli a helyi hálózat sávszélességét",
      "Automatikusan frissíti a vállalati szoftvereket"
    ],
    "helyes": "Lehetővé teszi a biztonságos távoli hozzáférést a vállalati hálózathoz"
  },
  {
    "szoveg": "Egy 15 fős grafikai stúdió hálózatának mely komponense felelős elsődlegesen a nagy méretű tervfájlok gyors és hatékony tárolásáért és megosztásáért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "NAS (Network Attached Storage) eszköz",
      "Levelezőszerver",
      "Router"
    ],
    "helyes": "NAS (Network Attached Storage) eszköz"
  },
  {
    "szoveg": "Egy 25 fős könyvelőiroda hálózatában milyen típusú szerver lenne a legalkalmasabb a vállalat-specifikus pénzügyi szoftverek futtatására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alkalmazásszerver",
      "Fájlszerver",
      "Webszerver"
    ],
    "helyes": "Alkalmazásszerver"
  },
  {
    "szoveg": "Mikor és milyen projekt keretében fejlesztették ki a TCP/IP protokollkészletet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 1970-es években az Egyesült Államok Védelmi Minisztériumának ARPANET projektje keretében.",
      "Az 1980-as években a NASA űrkutatási programja részeként.",
      "Az 1990-es években a CERN által az internet létrehozása céljából."
    ],
    "helyes": "Az 1970-es években az Egyesült Államok Védelmi Minisztériumának ARPANET projektje keretében."
  },
  {
    "szoveg": "Mi volt a TCP/IP protokollkészlet eredeti fejlesztési célja?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy robusztus és rugalmas kommunikációs rendszer létrehozása, amely képes túlélni akár egy nukleáris támadást is.",
      "Egy gyors és hatékony protokoll kifejlesztése a vállalati belső hálózatok számára.",
      "Egy egyszerű kommunikációs rendszer létrehozása az egyetemek közötti adatcseréhez."
    ],
    "helyes": "Egy robusztus és rugalmas kommunikációs rendszer létrehozása, amely képes túlélni akár egy nukleáris támadást is."
  },
  {
    "szoveg": "Hogyan járul hozzá a TCP/IP protokollkészlet rétegzett felépítése az interoperabilitáshoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett felépítés lehetővé teszi a moduláris fejlesztést és hibaelhárítást, valamint különböző protokollok használatát az egyes rétegekben.",
      "A rétegzett felépítés korlátozza a különböző gyártók eszközeinek együttműködését, ezáltal növelve a biztonságot.",
      "A rétegzett felépítés kizárólag a hálózati sebesség növelését szolgálja, nem járul hozzá az interoperabilitáshoz."
    ],
    "helyes": "A rétegzett felépítés lehetővé teszi a moduláris fejlesztést és hibaelhárítást, valamint különböző protokollok használatát az egyes rétegekben."
  },
  {
    "szoveg": "Miért tekinthető a TCP/IP protokollkészlet \\\\\\\"közös nyelvnek\\\\\\\" a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert univerzális szabványt biztosít, amely lehetővé teszi különböző rendszerek közötti adatcserét, függetlenül azok gyártójától vagy típusától.",
      "Mert minden hálózati eszköz ugyanazt a programozási nyelvet használja a kommunikációhoz.",
      "Mert kizárólag angol nyelvű parancsokat használ a hálózati kommunikáció során."
    ],
    "helyes": "Mert univerzális szabványt biztosít, amely lehetővé teszi különböző rendszerek közötti adatcserét, függetlenül azok gyártójától vagy típusától."
  },
  {
    "szoveg": "Milyen főbb előnyöket biztosít a TCP/IP protokollkészlet az interoperábilis hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Szabványosítás, skálázhatóság, rétegzett felépítés és platformfüggetlenség.",
      "Magas sebesség, alacsony költség, egyszerű telepítés és automatikus hibajavítás.",
      "Teljes titkosítás, valós idejű fordítás, mesterséges intelligencia alapú routing és kvantum-kommunikáció."
    ],
    "helyes": "Szabványosítás, skálázhatóság, rétegzett felépítés és platformfüggetlenség."
  },
  {
    "szoveg": "Hogyan biztosítja a TCP/IP protokollkészlet az interoperabilitást egy vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi különböző operációs rendszerek, szerverek és eszközök zökkenőmentes kommunikációját és erőforrás-megosztását egységes protokollok használatával.",
      "Kötelezővé teszi egyetlen operációs rendszer és hardver platform használatát az összes vállalati eszközön.",
      "Automatikusan fordítja a különböző rendszerek közötti kommunikációt, így azok mindig a saját nyelvüket használhatják."
    ],
    "helyes": "Lehetővé teszi különböző operációs rendszerek, szerverek és eszközök zökkenőmentes kommunikációját és erőforrás-megosztását egységes protokollok használatával."
  },
  {
    "szoveg": "Melyik hálózati eszköz felelős elsődlegesen az adatcsomagok különböző hálózatok közötti továbbításáért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Router (útválasztó)",
      "Switch (kapcsoló)",
      "Szerver"
    ],
    "helyes": "Router (útválasztó)"
  },
  {
    "szoveg": "Mi a végpontok elsődleges szerepe egy számítógépes hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszik a felhasználók számára a hálózati szolgáltatások elérését és használatát",
      "Adatcsomagok továbbítása különböző hálózatok között",
      "Központosított adattárolás és alkalmazásfuttatás biztosítása"
    ],
    "helyes": "Lehetővé teszik a felhasználók számára a hálózati szolgáltatások elérését és használatát"
  },
  {
    "szoveg": "Hogyan járul hozzá egy switch (kapcsoló) a helyi hálózat hatékony működéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "MAC-címek alapján továbbítja a csomagokat, így csökkentve a felesleges adatforgalmat",
      "IP-címek alapján irányítja a forgalmat különböző hálózatok között",
      "Központosított adattárolást és alkalmazásfuttatást biztosít a hálózat számára"
    ],
    "helyes": "MAC-címek alapján továbbítja a csomagokat, így csökkentve a felesleges adatforgalmat"
  },
  {
    "szoveg": "Miért fontos a routerek szerepe a modern hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszik a különböző hálózatok közötti kommunikációt és az optimális útvonalak meghatározását",
      "Biztosítják a helyi hálózaton belüli gyors adattovábbítást MAC-címek alapján",
      "Központosított szolgáltatásokat nyújtanak, mint például webhosting vagy e-mail kezelés"
    ],
    "helyes": "Lehetővé teszik a különböző hálózatok közötti kommunikációt és az optimális útvonalak meghatározását"
  },
  {
    "szoveg": "Egy multinacionális vállalat hálózatában hogyan működnek együtt a különböző hálózati eszközök a hatékony kommunikáció érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A végpontok switchekhez csatlakoznak, a switchek routereken keresztül kapcsolódnak más telephelyekhez, a szerverek pedig központi szolgáltatásokat nyújtanak",
      "Minden eszköz közvetlenül az internethez csatlakozik, és a felhőben tárolt adatokat használja",
      "A végpontok közvetlenül a szerverekhez kapcsolódnak, kiiktatva a switcheket és routereket"
    ],
    "helyes": "A végpontok switchekhez csatlakoznak, a switchek routereken keresztül kapcsolódnak más telephelyekhez, a szerverek pedig központi szolgáltatásokat nyújtanak"
  },
  {
    "szoveg": "Hogyan illusztrálná egy otthoni hálózat felépítését a különböző hálózati eszközök funkcióinak szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az internetszolgáltató routere kapcsolódik az otthoni routerhez, amely switchként és Wi-Fi access pointként is működik, a végpontok pedig vezetékesen vagy vezeték nélkül csatlakoznak",
      "Minden otthoni eszköz közvetlenül az internetszolgáltató központi szerveréhez csatlakozik",
      "Az otthoni eszközök egymással peer-to-peer kapcsolatban állnak, nincs szükség központi routerre vagy switchre"
    ],
    "helyes": "Az internetszolgáltató routere kapcsolódik az otthoni routerhez, amely switchként és Wi-Fi access pointként is működik, a végpontok pedig vezetékesen vagy vezeték nélkül csatlakoznak"
  },
  {
    "szoveg": "Melyik átviteli közeg rendelkezik a legnagyobb sávszélességgel és adatátviteli sebességgel a felsoroltak közül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Optikai szál",
      "Rézkábel",
      "Vezeték nélküli közeg"
    ],
    "helyes": "Optikai szál"
  },
  {
    "szoveg": "Melyik átviteli közeg támogatja a Power over Ethernet (PoE) technológiát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rézkábel",
      "Optikai szál",
      "Vezeték nélküli közeg"
    ],
    "helyes": "Rézkábel"
  },
  {
    "szoveg": "Miért tekinthető az optikai szál biztonságosabbnak az adatátvitel szempontjából a rézkábelhez képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert az optikai jeleket nehezebb lehallgatni, mint az elektromos jeleket.",
      "Mert az optikai szál fizikailag erősebb, mint a rézkábel.",
      "Mert az optikai szál nem vezeti az elektromosságot."
    ],
    "helyes": "Mert az optikai jeleket nehezebb lehallgatni, mint az elektromos jeleket."
  },
  {
    "szoveg": "Hogyan befolyásolja a vezeték nélküli közegek teljesítményét a környezet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai akadályok és az interferencia csökkenthetik a teljesítményt és a hatótávolságot.",
      "A környezeti tényezők nem befolyásolják a vezeték nélküli közegek teljesítményét.",
      "A magasabb hőmérséklet növeli a vezeték nélküli közegek teljesítményét."
    ],
    "helyes": "A fizikai akadályok és az interferencia csökkenthetik a teljesítményt és a hatótávolságot."
  },
  {
    "szoveg": "Hogyan viszonyul az optikai szál és a rézkábel egymáshoz a hosszú távú adatátvitel szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az optikai szál sokkal alkalmasabb hosszú távú adatátvitelre, mint a rézkábel.",
      "A rézkábel és az optikai szál egyformán alkalmas hosszú távú adatátvitelre.",
      "A rézkábel alkalmasabb hosszú távú adatátvitelre, mint az optikai szál."
    ],
    "helyes": "Az optikai szál sokkal alkalmasabb hosszú távú adatátvitelre, mint a rézkábel."
  },
  {
    "szoveg": "Milyen szempontból előnyösebb a vezeték nélküli technológia a vezetékes megoldásokkal szemben a hálózati infrastruktúra kiépítésénél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rugalmasság és gyors telepíthetőség szempontjából.",
      "Adatátviteli sebesség és stabilitás szempontjából.",
      "Energiahatékonyság és környezetvédelem szempontjából."
    ],
    "helyes": "Rugalmasság és gyors telepíthetőség szempontjából."
  },
  {
    "szoveg": "Egy nagyvállalat új irodaházának hálózati infrastruktúráját tervezi. Melyik megoldás lenne a legmegfelelőbb a gerinchálózat kiépítésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Optikai szálas hálózat",
      "Rézkábeles (Cat6a) hálózat",
      "Vezeték nélküli (Wi-Fi 6) hálózat"
    ],
    "helyes": "Optikai szálas hálózat"
  },
  {
    "szoveg": "Egy kis méretű, korlátozott költségvetésű startup cég irodájának hálózati infrastruktúráját tervezi. Melyik megoldás lenne a legmegfelelőbb számukra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rézkábeles (Cat6) hálózat Wi-Fi hozzáférési pontokkal kiegészítve",
      "Tisztán optikai szálas hálózat",
      "Kizárólag vezeték nélküli (Wi-Fi) hálózat"
    ],
    "helyes": "Rézkábeles (Cat6) hálózat Wi-Fi hozzáférési pontokkal kiegészítve"
  },
  {
    "szoveg": "Hogyan értelmezhető a Shannon-Weaver kommunikációs modell 'csatorna' eleme a digitális kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csatorna lehet vezetékes (pl. Ethernet kábel) vagy vezeték nélküli (pl. Wi-Fi) hálózat, amelyen keresztül az információ továbbítódik.",
      "A csatorna kizárólag a felhasználó által használt számítógépet vagy okostelefont jelenti.",
      "A csatorna az a szoftver, amely az üzenetet bináris kóddá alakítja át."
    ],
    "helyes": "A csatorna lehet vezetékes (pl. Ethernet kábel) vagy vezeték nélküli (pl. Wi-Fi) hálózat, amelyen keresztül az információ továbbítódik."
  },
  {
    "szoveg": "Milyen szerepet tölt be a 'zajforrás' a Shannon-Weaver modell digitális kommunikációra való alkalmazásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A zajforrás olyan tényezőket jelent, mint az elektromos interferencia, hálózati torlódás vagy adatvesztés, amelyek zavarhatják a kommunikációt.",
      "A zajforrás a kommunikáció tartalmát gazdagító extra információkat jelenti.",
      "A zajforrás az a személy, aki létrehozza az eredeti üzenetet a kommunikáció során."
    ],
    "helyes": "A zajforrás olyan tényezőket jelent, mint az elektromos interferencia, hálózati torlódás vagy adatvesztés, amelyek zavarhatják a kommunikációt."
  },
  {
    "szoveg": "Milyen példával illusztrálható a Shannon-Weaver kommunikációs modell alkalmazása egy tipikus e-mail küldési folyamatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az e-mail kliens az adó, az internet a csatorna, a címzett e-mail szervere a vevő, és a hálózati problémák a zajforrás.",
      "Az e-mail szerver az adó, a felhasználó számítógépe a csatorna, és a spam szűrő a vevő.",
      "A billentyűzet az adó, az e-mail kliens a csatorna, és a monitor a vevő."
    ],
    "helyes": "Az e-mail kliens az adó, az internet a csatorna, a címzett e-mail szervere a vevő, és a hálózati problémák a zajforrás."
  },
  {
    "szoveg": "Hogyan illusztrálható a Shannon-Weaver modell 'adó' és 'vevő' elemeinek szerepe egy okosotthon-rendszer működésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az okosotthon központi egysége az adó, amely utasításokat küld, míg az egyes okoseszközök a vevők, amelyek végrehajtják ezeket az utasításokat.",
      "A lakástulajdonos az adó, aki hangutasításokat ad, és az okosotthon rendszer a vevő, amely végrehajtja ezeket.",
      "Az internet-szolgáltató az adó, és az okosotthon Wi-Fi routere a vevő."
    ],
    "helyes": "Az okosotthon központi egysége az adó, amely utasításokat küld, míg az egyes okoseszközök a vevők, amelyek végrehajtják ezeket az utasításokat."
  },
  {
    "szoveg": "Melyik hálózati szint fedi le a legnagyobb földrajzi területet és köti össze akár kontinenseket is?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "WAN (Wide Area Network - Nagykiterjedésű hálózat)",
      "MAN (Metropolitan Area Network - Városi hálózat)",
      "LAN (Local Area Network - Helyi hálózat)"
    ],
    "helyes": "WAN (Wide Area Network - Nagykiterjedésű hálózat)"
  },
  {
    "szoveg": "Mi a PAN (Personal Area Network) definíciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A legkisebb kiterjedésű hálózat, amely általában egy személy közvetlen környezetében lévő eszközöket köti össze.",
      "Egy város vagy nagyobb település méretű területet lefedő hálózat.",
      "Egy korlátozott földrajzi területen belül működő hálózat, amely általában egy épületen vagy épületcsoporton belül található."
    ],
    "helyes": "A legkisebb kiterjedésű hálózat, amely általában egy személy közvetlen környezetében lévő eszközöket köti össze."
  },
  {
    "szoveg": "Hogyan értelmezhető a hálózati szintek hierarchikus rendszere?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kisebb hálózatok beágyazódnak a nagyobbakba, például egy otthoni LAN csatlakozik az internethez, ami egy WAN.",
      "A nagyobb hálózatok mindig tartalmazzák a kisebbeket, például egy WAN mindig tartalmaz több MAN-t.",
      "A hálózati szintek egymástól függetlenül működnek, nincs köztük hierarchikus kapcsolat."
    ],
    "helyes": "A kisebb hálózatok beágyazódnak a nagyobbakba, például egy otthoni LAN csatlakozik az internethez, ami egy WAN."
  },
  {
    "szoveg": "Miért fontos a hálózati szintek megértése a hálózattervezés során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Segít a megfelelő technológiák kiválasztásában és a hálózati problémák hatékony megoldásában az adott szint igényei szerint.",
      "Kizárólag a hálózat méretének meghatározásában játszik szerepet.",
      "Csak a hálózati eszközök kompatibilitásának ellenőrzésére szolgál."
    ],
    "helyes": "Segít a megfelelő technológiák kiválasztásában és a hálózati problémák hatékony megoldásában az adott szint igényei szerint."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban egy MAN (Metropolitan Area Network) működését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy város különböző pontjain elhelyezett közbiztonsági kamerarendszer hálózata.",
      "Egy multinacionális vállalat globális irodáit összekötő hálózat.",
      "Egy otthoni Wi-Fi hálózat, amely összeköti a család eszközeit."
    ],
    "helyes": "Egy város különböző pontjain elhelyezett közbiztonsági kamerarendszer hálózata."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban egy LAN (Local Area Network) tipikus alkalmazását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalat irodai hálózata, amely összeköti a számítógépeket, nyomtatókat és szervereket egy épületen belül.",
      "Egy okostelefon és egy vezeték nélküli fülhallgató közötti Bluetooth kapcsolat.",
      "Egy országos bankfiók-hálózat, amely összeköti az összes fiókot."
    ],
    "helyes": "Egy vállalat irodai hálózata, amely összeköti a számítógépeket, nyomtatókat és szervereket egy épületen belül."
  },
  {
    "szoveg": "Melyik adatátviteli mód esetén történik az adatcsomag továbbítása egy konkrét, egyedi címzettnek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Unicast",
      "Multicast",
      "Broadcast"
    ],
    "helyes": "Unicast"
  },
  {
    "szoveg": "Melyik adatátviteli mód során jut el az adatcsomag a hálózat összes eszközéhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Broadcast",
      "Unicast",
      "Multicast"
    ],
    "helyes": "Broadcast"
  },
  {
    "szoveg": "Hogyan értelmezhető a multicast adatátviteli mód hatékonysága a hálózati erőforrások szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hatékonyabb, mint a unicast több címzett esetén, de speciális hálózati konfigurációt igényel",
      "Kevésbé hatékony, mint a broadcast, de nem terheli túl a hálózatot",
      "Ugyanolyan hatékony, mint a unicast, de több címzettet ér el egyszerre"
    ],
    "helyes": "Hatékonyabb, mint a unicast több címzett esetén, de speciális hálózati konfigurációt igényel"
  },
  {
    "szoveg": "Milyen hatása lehet a túlzott broadcast használatnak egy hálózaton belül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hálózati torlódást és teljesítménycsökkenést okozhat",
      "Növeli a hálózat biztonságát és stabilitását",
      "Csökkenti az adatátviteli sebességet, de javítja a kapcsolat minőségét"
    ],
    "helyes": "Hálózati torlódást és teljesítménycsökkenést okozhat"
  },
  {
    "szoveg": "Melyik adatátviteli módra példa az, amikor egy vállalat szoftverfrissítéseket terjeszt egyszerre több, de nem az összes számítógépnek a hálózatán?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Multicast",
      "Unicast",
      "Broadcast"
    ],
    "helyes": "Multicast"
  },
  {
    "szoveg": "Melyik adatátviteli módra példa az, amikor egy felhasználó e-mailt küld egy másik felhasználónak?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Unicast",
      "Multicast",
      "Broadcast"
    ],
    "helyes": "Unicast"
  },
  {
    "szoveg": "Hogyan segíti a rétegzés elve az új hálózati technológiák integrálását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi egy adott réteg technológiájának frissítését anélkül, hogy a többi réteget módosítani kellene, amennyiben betartják a rétegek közötti interfészek szabványait.",
      "Megköveteli az összes réteg egyidejű frissítését az új technológia bevezetésekor, biztosítva a teljes rendszer kompatibilitását.",
      "Kizárólag a fizikai rétegben teszi lehetővé az új technológiák bevezetését, míg a felsőbb rétegek változatlanok maradnak."
    ],
    "helyes": "Lehetővé teszi egy adott réteg technológiájának frissítését anélkül, hogy a többi réteget módosítani kellene, amennyiben betartják a rétegek közötti interfészek szabványait."
  },
  {
    "szoveg": "Mit jelent a rétegzés elve a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati kommunikáció felosztását különálló, egymásra épülő rétegekre, ahol minden réteg specifikus funkciókat lát el és csak a szomszédos rétegekkel kommunikál közvetlenül.",
      "A hálózati eszközök fizikai elrendezését egymásra épülő rétegekben a jobb jelerősség érdekében.",
      "A hálózati forgalom prioritizálását különböző rétegekbe, ahol a magasabb rétegek nagyobb prioritást élveznek."
    ],
    "helyes": "A hálózati kommunikáció felosztását különálló, egymásra épülő rétegekre, ahol minden réteg specifikus funkciókat lát el és csak a szomszédos rétegekkel kommunikál közvetlenül."
  },
  {
    "szoveg": "Milyen példa illusztrálja jól a rétegzés elvének alkalmazását az új technológiák integrálásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IEEE 802.11 (Wi-Fi) szabványcsalád folyamatos fejlődése, ahol az új verziók (pl. 802.11ac, 802.11ax) bevezetése csak az alsóbb rétegeket érinti, míg a felsőbb rétegek változatlanok maradnak.",
      "Az Ethernet kábel cseréje optikai kábelre, ami a teljes hálózati protokoll stack újratervezését igényli a nagyobb sebesség kihasználása érdekében.",
      "Egy új operációs rendszer bevezetése, amely teljesen új hálózati protokollokat használ, és nem kompatibilis a régi alkalmazásokkal."
    ],
    "helyes": "Az IEEE 802.11 (Wi-Fi) szabványcsalád folyamatos fejlődése, ahol az új verziók (pl. 802.11ac, 802.11ax) bevezetése csak az alsóbb rétegeket érinti, míg a felsőbb rétegek változatlanok maradnak."
  },
  {
    "szoveg": "Hogyan illusztrálja az 5G technológia bevezetése a rétegzés elvének előnyeit?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G új rádiós interfészt és hálózati architektúrát vezet be az alsóbb rétegekben, miközben a meglévő alkalmazások és szolgáltatások továbbra is működőképesek maradnak a felsőbb rétegekben.",
      "Az 5G bevezetése teljes mértékben lecseréli a korábbi mobilhálózati technológiákat, beleértve az összes réteget és alkalmazást.",
      "Az 5G kizárólag a fizikai rétegben hoz változásokat, míg az összes többi réteg változatlan marad a 4G-hez képest."
    ],
    "helyes": "Az 5G új rádiós interfészt és hálózati architektúrát vezet be az alsóbb rétegekben, miközben a meglévő alkalmazások és szolgáltatások továbbra is működőképesek maradnak a felsőbb rétegekben."
  },
  {
    "szoveg": "Hogyan alkalmazná a rétegzés elvét egy új, nagy sebességű hálózati protokoll bevezetésekor egy meglévő vállalati hálózatba?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai és adatkapcsolati rétegeket frissíteném az új protokollal, miközben a felsőbb rétegek és alkalmazások változatlanok maradnának, biztosítva a kompatibilitást és minimalizálva a megszakítást.",
      "Az összes hálózati réteget egyszerre cserélném le az új protokollra, hogy maximalizáljam a teljesítményt, függetlenül a kompatibilitástól.",
      "Csak az alkalmazási réteget frissíteném, hogy kihasználjam az új protokoll előnyeit, anélkül hogy az alsóbb rétegeket érinteném."
    ],
    "helyes": "A fizikai és adatkapcsolati rétegeket frissíteném az új protokollal, miközben a felsőbb rétegek és alkalmazások változatlanok maradnának, biztosítva a kompatibilitást és minimalizálva a megszakítást."
  },
  {
    "szoveg": "Hogyan használná fel a rétegzés elvét egy új IoT (Internet of Things) eszköz integrálásához egy meglévő vállalati hálózatba?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IoT eszköz specifikus protokollját egy átjáró segítségével illeszteném a meglévő hálózati infrastruktúrához, csak az érintett rétegeket módosítva, míg a többi réteg változatlan maradna.",
      "A teljes hálózati infrastruktúrát lecserélném, hogy natívan támogassa az új IoT eszköz protokollját minden rétegben.",
      "Kizárólag az alkalmazási rétegben vezetnék be változtatásokat az IoT eszköz kezeléséhez, figyelmen kívül hagyva az alsóbb rétegek kompatibilitási kérdéseit."
    ],
    "helyes": "Az IoT eszköz specifikus protokollját egy átjáró segítségével illeszteném a meglévő hálózati infrastruktúrához, csak az érintett rétegeket módosítva, míg a többi réteg változatlan maradna."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a rétegzés elvének jövőbeli szerepéről a hálózati technológiák fejlődésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzés elve továbbra is kulcsfontosságú lesz, lehetővé téve az új technológiák, mint az 5G, IoT és kvantumkommunikáció fokozatos és zökkenőmentes integrálását a meglévő infrastruktúrába.",
      "A rétegzés elve elavulttá válik, és helyét egy teljesen új, monolitikus hálózati architektúra veszi át, amely jobban kezeli a jövő komplex technológiáit.",
      "A rétegzés elve kizárólag a vezetékes hálózatokban marad releváns, míg a vezeték nélküli technológiák teljesen új megközelítést igényelnek."
    ],
    "helyes": "A rétegzés elve továbbra is kulcsfontosságú lesz, lehetővé téve az új technológiák, mint az 5G, IoT és kvantumkommunikáció fokozatos és zökkenőmentes integrálását a meglévő infrastruktúrába."
  },
  {
    "szoveg": "Milyen előrejelzést tehetünk a rétegzés elvének alkalmazásáról a kvantumkommunikációs technológiák jövőbeli bevezetésével kapcsolatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kvantumkommunikációs technológiák valószínűleg a rétegzett modell alsóbb rétegeibe integrálódnak, lehetővé téve a fokozatos átmenetet és a klasszikus rendszerekkel való együttműködést.",
      "A kvantumkommunikáció teljesen felváltja a klasszikus kommunikációs modellt, szükségtelenné téve a rétegzés elvét.",
      "A kvantumkommunikáció kizárólag az alkalmazási rétegben lesz jelen, nem érintve az alsóbb hálózati rétegeket."
    ],
    "helyes": "A kvantumkommunikációs technológiák valószínűleg a rétegzett modell alsóbb rétegeibe integrálódnak, lehetővé téve a fokozatos átmenetet és a klasszikus rendszerekkel való együttműködést."
  },
  {
    "szoveg": "Hogyan segítik elő a rétegzett modellek a különböző technológiák és eszközök interoperabilitását a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modellek standardizált interfészeket és protokollokat definiálnak minden rétegben, lehetővé téve a különböző gyártók eszközeinek együttműködését.",
      "A rétegzett modellek minden eszköz számára azonos hardvert és szoftvert írnak elő, így biztosítva a kompatibilitást.",
      "A rétegzett modellek egyetlen, univerzális kommunikációs protokollt használnak, amelyet minden eszköznek támogatnia kell."
    ],
    "helyes": "A rétegzett modellek standardizált interfészeket és protokollokat definiálnak minden rétegben, lehetővé téve a különböző gyártók eszközeinek együttműködését."
  },
  {
    "szoveg": "Miért fontos a rétegzett modellek használata a modern hálózati kommunikációban a technológiai fejlődés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modellek lehetővé teszik egy adott réteg fejlesztését vagy cseréjét anélkül, hogy ez hatással lenne a többi rétegre, így biztosítva a rugalmas fejlődést és a visszafelé kompatibilitást.",
      "A rétegzett modellek megakadályozzák az új technológiák bevezetését, ezáltal stabilizálva a hálózati infrastruktúrát.",
      "A rétegzett modellek minden réteg egyidejű fejlesztését követelik meg, így biztosítva a teljes rendszer egységes fejlődését."
    ],
    "helyes": "A rétegzett modellek lehetővé teszik egy adott réteg fejlesztését vagy cseréjét anélkül, hogy ez hatással lenne a többi rétegre, így biztosítva a rugalmas fejlődést és a visszafelé kompatibilitást."
  },
  {
    "szoveg": "Milyen példa illusztrálja legjobban a rétegzett modellek szerepét a különböző technológiák és eszközök interoperabilitásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy okostelefon képes csatlakozni és kommunikálni egy vállalati hálózattal, függetlenül attól, hogy Wi-Fi-t, 4G-t vagy 5G-t használ a kapcsolódáshoz.",
      "Egy számítógép csak akkor tud kommunikálni egy nyomtatóval, ha mindkettő ugyanattól a gyártótól származik és ugyanazt az operációs rendszert használja.",
      "Egy okosóra csak akkor tud adatokat küldeni egy okostelefonnak, ha mindkét eszköz ugyanazt a márkájú és típusú Bluetooth chipet használja."
    ],
    "helyes": "Egy okostelefon képes csatlakozni és kommunikálni egy vállalati hálózattal, függetlenül attól, hogy Wi-Fi-t, 4G-t vagy 5G-t használ a kapcsolódáshoz."
  },
  {
    "szoveg": "Hogyan illusztrálja egy weboldalhoz való hozzáférés folyamata a rétegzett modellek szerepét az interoperabilitásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A folyamat során minden réteg együttműködik, függetlenül a konkrét eszköztől vagy hálózattól, például a böngésző HTTP kérést generál, a TCP biztosítja az adatátvitelt, az IP kezeli az útválasztást, míg a Wi-Fi vagy mobilhálózat biztosítja a fizikai kapcsolatot.",
      "A weboldal elérése során minden réteg csak a saját eszközén belül működik együtt, és nincs szükség más eszközökkel vagy hálózatokkal való interoperabilitásra.",
      "A weboldalhoz való hozzáférés folyamata csak egyetlen réteget használ, amely az összes kommunikációs feladatot ellátja, így biztosítva az egyszerű interoperabilitást."
    ],
    "helyes": "A folyamat során minden réteg együttműködik, függetlenül a konkrét eszköztől vagy hálózattól, például a böngésző HTTP kérést generál, a TCP biztosítja az adatátvitelt, az IP kezeli az útválasztást, míg a Wi-Fi vagy mobilhálózat biztosítja a fizikai kapcsolatot."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a rétegzett modellek jövőbeli jelentőségéről az Internet of Things (IoT) terjedésével kapcsolatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modellek jelentősége várhatóan növekedni fog, mivel kulcsfontosságúak lesznek a sokféle IoT eszköz közötti interoperabilitás biztosításában.",
      "A rétegzett modellek jelentősége csökkenni fog, mert az IoT eszközök egyszerűbb, közvetlen kommunikációs módszereket fognak használni.",
      "A rétegzett modellek szerepe változatlan marad, mert az IoT eszközök nem igényelnek hálózati kommunikációt."
    ],
    "helyes": "A rétegzett modellek jelentősége várhatóan növekedni fog, mivel kulcsfontosságúak lesznek a sokféle IoT eszköz közötti interoperabilitás biztosításában."
  },
  {
    "szoveg": "Hogyan befolyásolhatja a rétegzett modellek használata az 5G és jövőbeli hálózati technológiák fejlesztését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modellek lehetővé teszik az 5G és jövőbeli technológiák integrálását a meglévő rendszerekbe, biztosítva a kompatibilitást és a fokozatos fejlesztést.",
      "Az 5G és jövőbeli technológiák teljesen új, rétegzetlen modelleket fognak használni a nagyobb sebesség érdekében.",
      "A rétegzett modellek használata lelassítja az 5G és jövőbeli technológiák fejlesztését, ezért valószínűleg elhagyják őket."
    ],
    "helyes": "A rétegzett modellek lehetővé teszik az 5G és jövőbeli technológiák integrálását a meglévő rendszerekbe, biztosítva a kompatibilitást és a fokozatos fejlesztést."
  },
  {
    "szoveg": "Hogyan viszonyul a rétegzett modell a monolitikus rendszerekhez a hálózati kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modellek modulárisabbak és rugalmasabbak, míg a monolitikus rendszerek integráltak, de kevésbé flexibilisek.",
      "A rétegzett modellek és a monolitikus rendszerek azonos módon kezelik a hálózati kommunikációt, nincs köztük lényeges különbség.",
      "A monolitikus rendszerek minden esetben hatékonyabbak és gyorsabbak, mint a rétegzett modellek."
    ],
    "helyes": "A rétegzett modellek modulárisabbak és rugalmasabbak, míg a monolitikus rendszerek integráltak, de kevésbé flexibilisek."
  },
  {
    "szoveg": "Milyen előnyöket és hátrányokat mutat a rétegzett modell a monolitikus rendszerekhez képest a hálózati technológiák fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modell rugalmasabb és könnyebben fejleszthető, de némi teljesítményveszteséggel járhat, míg a monolitikus rendszerek hatékonyabbak lehetnek, de nehezebben módosíthatók.",
      "A rétegzett modell minden szempontból felülmúlja a monolitikus rendszereket, beleértve a teljesítményt és a fejlesztési sebességet is.",
      "A monolitikus rendszerek minden esetben rugalmasabbak és könnyebben fejleszthetők, mint a rétegzett modellek."
    ],
    "helyes": "A rétegzett modell rugalmasabb és könnyebben fejleszthető, de némi teljesítményveszteséggel járhat, míg a monolitikus rendszerek hatékonyabbak lehetnek, de nehezebben módosíthatók."
  },
  {
    "szoveg": "Hogyan járul hozzá a rétegzett modell a hálózati komplexitás kezeléséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegzett modell felosztja a hálózati funkciókat különálló rétegekre, ahol minden réteg specifikus feladatokat lát el és csak a szomszédos rétegekkel kommunikál közvetlenül, így egyszerűsítve a rendszer megértését és kezelését.",
      "A rétegzett modell növeli a hálózat komplexitását azáltal, hogy több különálló réteget hoz létre, amelyek mindegyike külön kezelést igényel.",
      "A rétegzett modell kizárólag a fizikai rétegre összpontosít, figyelmen kívül hagyva a magasabb szintű protokollokat, így csökkentve a rendszer összetettségét."
    ],
    "helyes": "A rétegzett modell felosztja a hálózati funkciókat különálló rétegekre, ahol minden réteg specifikus feladatokat lát el és csak a szomszédos rétegekkel kommunikál közvetlenül, így egyszerűsítve a rendszer megértését és kezelését."
  },
  {
    "szoveg": "Mit jelent az absztrakció a hálózatok komplexitásának kezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az absztrakció a hálózati funkciók egyszerűsített reprezentációját jelenti, elrejtve a részletes implementációt a felhasználók és más komponensek elől, így könnyítve meg a rendszer megértését és kezelését.",
      "Az absztrakció a hálózati protokollok teljes eltávolítását jelenti, hogy a rendszer kizárólag hardveres szinten működjön.",
      "Az absztrakció a hálózati rétegek számának növelését jelenti, hogy minden funkció külön réteget kapjon a jobb elkülönítés érdekében."
    ],
    "helyes": "Az absztrakció a hálózati funkciók egyszerűsített reprezentációját jelenti, elrejtve a részletes implementációt a felhasználók és más komponensek elől, így könnyítve meg a rendszer megértését és kezelését."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz a szabványosítás és az innováció a hálózati technológiákban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szabványosítás közös alapot teremt, ami lehetővé teszi, hogy a fejlesztők új, innovatív megoldásokra összpontosítsanak, miközben biztosítja az interoperabilitást és a kompatibilitást.",
      "A szabványosítás és az innováció ellentétes folyamatok; a szabványosítás korlátozza az innovációt azáltal, hogy szigorú kereteket szab a fejlesztésnek.",
      "A szabványosítás és az innováció független folyamatok; a szabványosítás csak a meglévő technológiákat érinti, míg az innováció kizárólag új, nem szabványosított megoldásokra fókuszál."
    ],
    "helyes": "A szabványosítás közös alapot teremt, ami lehetővé teszi, hogy a fejlesztők új, innovatív megoldásokra összpontosítsanak, miközben biztosítja az interoperabilitást és a kompatibilitást."
  },
  {
    "szoveg": "Milyen szempontból különbözik a modularitás és a rétegzett modell a hálózatok komplexitásának kezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modularitás a rendszer komponenseinek független fejlesztését és cseréjét teszi lehetővé, míg a rétegzett modell a hálózati funkciókat hierarchikus rétegekbe szervezi, szabályozva a rétegek közötti kommunikációt.",
      "A modularitás kizárólag a hardveres komponensekre vonatkozik, míg a rétegzett modell csak a szoftveres protokollokat érinti a hálózatokban.",
      "A modularitás a hálózat teljes újratervezését igényli minden változtatásnál, míg a rétegzett modell nem teszi lehetővé a rendszer egyes részeinek módosítását."
    ],
    "helyes": "A modularitás a rendszer komponenseinek független fejlesztését és cseréjét teszi lehetővé, míg a rétegzett modell a hálózati funkciókat hierarchikus rétegekbe szervezi, szabályozva a rétegek közötti kommunikációt."
  },
  {
    "szoveg": "Milyen hatása lehet a jövőbeli hálózati technológiák (pl. 5G, IoT, kvantum-kommunikáció) elterjedésének a hálózatok komplexitására és szabványosítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A komplexitás várhatóan növekedni fog, ami még fontosabbá teszi a hatékony szabványosítást és az új technológiák integrálását a meglévő infrastruktúrába, miközben meg kell őrizni a kompatibilitást és a teljesítményt.",
      "Az új technológiák bevezetése automatikusan egyszerűsíti a hálózatokat, csökkentve a komplexitást és a szabványosítás szükségességét.",
      "A jövőbeli technológiák nem befolyásolják jelentősen a hálózatok komplexitását vagy a szabványosítás folyamatát, mivel teljesen elkülönülnek a meglévő rendszerektől."
    ],
    "helyes": "A komplexitás várhatóan növekedni fog, ami még fontosabbá teszi a hatékony szabványosítást és az új technológiák integrálását a meglévő infrastruktúrába, miközben meg kell őrizni a kompatibilitást és a teljesítményt."
  },
  {
    "szoveg": "Hogyan befolyásolhatja a szabványosítás a hálózati technológiák globális elterjedését és fejlődését a jövőben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szabványosítás várhatóan elősegíti a globális összekapcsolhatóságot, gyorsítja az innovációt és csökkenti a költségeket, lehetővé téve a hálózati technológiák szélesebb körű elterjedését és fejlődését.",
      "A szabványosítás valószínűleg lelassítja a technológiai fejlődést, mivel minden újítást hosszadalmas jóváhagyási folyamatnak kell alávetni, ami gátolja a gyors innovációt.",
      "A szabványosítás várhatóan irrelevánssá válik, mivel a jövőben minden régió és vállalat saját, egyedi hálózati megoldásokat fog kifejleszteni és használni."
    ],
    "helyes": "A szabványosítás várhatóan elősegíti a globális összekapcsolhatóságot, gyorsítja az innovációt és csökkenti a költségeket, lehetővé téve a hálózati technológiák szélesebb körű elterjedését és fejlődését."
  },
  {
    "szoveg": "Milyen példával illusztrálható a szabványosítás szerepe a hálózati technológiák fejlődésében és elterjedésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Wi-Fi (IEEE 802.11) szabvány folyamatos fejlődése, amely lehetővé tette a vezeték nélküli hálózatok széles körű elterjedését, miközben biztosította a különböző verziók közötti kompatibilitást.",
      "A Betamax videóformátum, amely annak ellenére, hogy nem vált szabvánnyá, széles körben elterjedt és dominálta a videótechnológia piacát.",
      "Az egyedi, gyártóspecifikus mobilhálózati protokollok, amelyek lehetővé tették a globális roaming szolgáltatásokat szabványosítás nélkül."
    ],
    "helyes": "A Wi-Fi (IEEE 802.11) szabvány folyamatos fejlődése, amely lehetővé tette a vezeték nélküli hálózatok széles körű elterjedését, miközben biztosította a különböző verziók közötti kompatibilitást."
  },
  {
    "szoveg": "Milyen példa illusztrálja a komplexitás kezelésének fontosságát a modern hálózati technológiákban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szoftveres hálózatkezelés (SDN) bevezetése, amely elválasztja a hálózat irányítási síkját az adatsíktól, egyszerűsítve a komplex hálózatok kezelését és konfigurálását.",
      "A kizárólag manuális konfigurációt igénylő hálózati eszközök használata, amely növeli a hálózatüzemeltetők közvetlen ellenőrzését minden egyes eszköz felett.",
      "A hálózati protokollok számának növelése minden egyes új alkalmazáshoz, biztosítva, hogy minden szolgáltatásnak saját, dedikált protokollja legyen."
    ],
    "helyes": "A szoftveres hálózatkezelés (SDN) bevezetése, amely elválasztja a hálózat irányítási síkját az adatsíktól, egyszerűsítve a komplex hálózatok kezelését és konfigurálását."
  },
  {
    "szoveg": "Hogyan segíti az OSI modell a hálózati problémák diagnosztizálását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a szakembereknek, hogy szisztematikusan ellenőrizzék az egyes rétegeket, azonosítva a probléma forrását.",
      "Automatikusan jelzi, melyik rétegben van a hiba, így nincs szükség manuális ellenőrzésre.",
      "Kizárólag a fizikai rétegre összpontosít, mivel a legtöbb probléma ott keletkezik."
    ],
    "helyes": "Lehetővé teszi a szakembereknek, hogy szisztematikusan ellenőrizzék az egyes rétegeket, azonosítva a probléma forrását."
  },
  {
    "szoveg": "Milyen szerepet játszik az OSI modell a hálózati eszközök tervezésében és fejlesztésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Iránymutatást nyújt a gyártóknak a szabványos protokollok és interfészek implementálásához.",
      "Előírja a gyártóknak, hogy pontosan milyen hardvert használjanak az eszközökben.",
      "Kizárólag a szoftverek fejlesztésére fókuszál, a hardvert figyelmen kívül hagyja."
    ],
    "helyes": "Iránymutatást nyújt a gyártóknak a szabványos protokollok és interfészek implementálásához."
  },
  {
    "szoveg": "Egy vállalat új hálózati protokollt fejleszt. Hogyan alkalmazná az OSI modellt a fejlesztési folyamatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell rétegeit használnám iránymutatásként, meghatározva, mely rétegekben kell a protokollnak működnie és milyen funkciókat kell ellátnia.",
      "Figyelmen kívül hagynám az OSI modellt, mivel az elavult és nem alkalmazható modern protokollokra.",
      "Kizárólag az alkalmazási rétegre összpontosítanék, mivel az OSI modell többi rétege nem releváns az új protokollok fejlesztésében."
    ],
    "helyes": "Az OSI modell rétegeit használnám iránymutatásként, meghatározva, mely rétegekben kell a protokollnak működnie és milyen funkciókat kell ellátnia."
  },
  {
    "szoveg": "Hogyan használná az OSI modellt egy vállalati hálózat biztonsági auditjának elvégzéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell minden rétegét szisztematikusan átvizsgálnám, azonosítva az egyes rétegekhez kapcsolódó potenciális biztonsági kockázatokat és védelmeket.",
      "Kizárólag a hálózati rétegre összpontosítanék, mivel az OSI modell szerint ez a legfontosabb biztonsági szempontból.",
      "Az OSI modellt figyelmen kívül hagynám, és csak a fizikai biztonságra koncentrálnék, mivel az a legkritikusabb aspektus."
    ],
    "helyes": "Az OSI modell minden rétegét szisztematikusan átvizsgálnám, azonosítva az egyes rétegekhez kapcsolódó potenciális biztonsági kockázatokat és védelmeket."
  },
  {
    "szoveg": "Hogyan értékelné az OSI modell jelentőségét a modern hálózati technológiák kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell továbbra is értékes elméleti keretrendszer, de a gyakorlatban korlátozottan alkalmazható a modern technológiákra.",
      "Az OSI modell teljesen elavult, és nincs relevanciája a modern hálózati technológiákban.",
      "Az OSI modell tökéletesen leírja és irányítja az összes modern hálózati technológiát."
    ],
    "helyes": "Az OSI modell továbbra is értékes elméleti keretrendszer, de a gyakorlatban korlátozottan alkalmazható a modern technológiákra."
  },
  {
    "szoveg": "Milyen ítéletet alkotna az OSI modell jövőbeli szerepéről a hálózati technológiák fejlődésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell valószínűleg megőrzi jelentőségét az oktatásban és a koncepcionális tervezésben, de a gyakorlati implementációkban továbbra is a rugalmasabb modellek lesznek előnyben.",
      "Az OSI modell teljesen el fog tűnni, és helyét új, még nem ismert modellek veszik át.",
      "Az OSI modell ismét dominánssá válik, és minden új technológia szigorúan követni fogja a hét rétegét."
    ],
    "helyes": "Az OSI modell valószínűleg megőrzi jelentőségét az oktatásban és a koncepcionális tervezésben, de a gyakorlati implementációkban továbbra is a rugalmasabb modellek lesznek előnyben."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a TCP/IP modell szerepét a mai internet architektúrában a skálázhatóság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP/IP modell lehetővé teszi az internet folyamatos bővülését és fejlődését az alapvető architektúra megváltoztatása nélkül.",
      "A TCP/IP modell korlátozza az internet növekedését, hogy megőrizze az eredeti architektúrát.",
      "A TCP/IP modell csak meghatározott méretű hálózatokkal kompatibilis, így limitálja a skálázhatóságot."
    ],
    "helyes": "A TCP/IP modell lehetővé teszi az internet folyamatos bővülését és fejlődését az alapvető architektúra megváltoztatása nélkül."
  },
  {
    "szoveg": "Hogyan értelmezhető a TCP/IP modell rétegelt struktúrájának jelentősége a hálózati technológiák fejlődésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rétegelt struktúra lehetővé teszi az egyes rétegek független fejlesztését és optimalizálását.",
      "A rétegelt struktúra megakadályozza az új technológiák bevezetését a hálózati kommunikációban.",
      "A rétegelt struktúra kizárólag a biztonság növelésére szolgál a hálózati kommunikációban."
    ],
    "helyes": "A rétegelt struktúra lehetővé teszi az egyes rétegek független fejlesztését és optimalizálását."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a TCP/IP modell jövőjére vonatkozóan az IoT és 5G technológiák elterjedésével kapcsolatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP/IP modellnek alkalmazkodnia kell az IoT és 5G technológiák által támasztott új követelményekhez.",
      "Az IoT és 5G technológiák teljesen felváltják a TCP/IP modellt a közeljövőben.",
      "A TCP/IP modell változatlan marad, az IoT és 5G technológiáknak kell hozzá igazodniuk."
    ],
    "helyes": "A TCP/IP modellnek alkalmazkodnia kell az IoT és 5G technológiák által támasztott új követelményekhez."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a TCP/IP modell biztonsági aspektusainak jövőbeli fejlődéséről?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modell folyamatos fejlesztése szükséges a növekvő kiberbiztonsági fenyegetések kezelésére.",
      "A jelenlegi biztonsági megoldások elegendőek lesznek a jövőbeli fenyegetések kezelésére.",
      "A biztonság kérdése másodlagossá válik a teljesítmény növelése mellett."
    ],
    "helyes": "A modell folyamatos fejlesztése szükséges a növekvő kiberbiztonsági fenyegetések kezelésére."
  },
  {
    "szoveg": "Hogyan hasonlítható össze a TCP/IP modell és az OSI modell a gyakorlati alkalmazás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP/IP modell az internet alapját képezi, míg az OSI modell inkább elméleti referencia.",
      "Az OSI modell az internet alapja, míg a TCP/IP modell csak elméleti jelentőségű.",
      "Mindkét modell egyformán elterjedt a gyakorlati hálózati implementációkban."
    ],
    "helyes": "A TCP/IP modell az internet alapját képezi, míg az OSI modell inkább elméleti referencia."
  },
  {
    "szoveg": "Hogyan hasonlítható össze a TCP/IP és az OSI modell a rétegek száma és struktúrája szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP/IP modell 4 réteget használ, míg az OSI modell 7 réteget definiál.",
      "Mindkét modell azonos számú és típusú réteget használ.",
      "A TCP/IP modell 7 réteget használ, míg az OSI modell 4 réteget definiál."
    ],
    "helyes": "A TCP/IP modell 4 réteget használ, míg az OSI modell 7 réteget definiál."
  },
  {
    "szoveg": "Milyen példával illusztrálható a TCP/IP modell működése egy e-mail küldése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SMTP kezeli az üzenet formázását, a TCP biztosítja a megbízható adatátvitelt, az IP gondoskodik az útvonalválasztásról, a hálózati hozzáférési réteg pedig a fizikai adatátvitelről.",
      "Az FTP kezeli az üzenet küldését, az UDP biztosítja a gyors adatátvitelt, a DNS gondoskodik az útvonalválasztásról, az Ethernet pedig a fizikai kapcsolatról.",
      "A HTTP kezeli az üzenet formázását, az ICMP biztosítja a hibaellenőrzést, az ARP gondoskodik a címfordításról, a Wi-Fi pedig a vezeték nélküli átvitelről."
    ],
    "helyes": "Az SMTP kezeli az üzenet formázását, a TCP biztosítja a megbízható adatátvitelt, az IP gondoskodik az útvonalválasztásról, a hálózati hozzáférési réteg pedig a fizikai adatátvitelről."
  },
  {
    "szoveg": "Milyen példával illusztrálható a TCP/IP modell rugalmassága és interoperabilitása a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy okostelefon képes csatlakozni az internethez Wi-Fi-n, mobilhálózaton vagy Bluetooth-on keresztül, ugyanazokat az alkalmazásokat használva.",
      "Egy számítógép csak egyféle hálózati kapcsolatot tud használni az internethez való csatlakozáshoz.",
      "Egy hálózati nyomtató csak azonos gyártótól származó eszközökkel tud kommunikálni."
    ],
    "helyes": "Egy okostelefon képes csatlakozni az internethez Wi-Fi-n, mobilhálózaton vagy Bluetooth-on keresztül, ugyanazokat az alkalmazásokat használva."
  },
  {
    "szoveg": "Hogyan különbözik az OSI és a TCP/IP modell a rétegek számában és funkcióiban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell 7 réteget tartalmaz, míg a TCP/IP modell 4 réteget használ, ahol az OSI Viszony és Megjelenítési rétegei a TCP/IP Alkalmazási rétegébe integrálódnak.",
      "Az OSI modell 5 réteget tartalmaz, míg a TCP/IP modell 6 réteget használ, ahol a TCP/IP modell további biztonsági réteget tartalmaz.",
      "Mindkét modell azonos számú és funkciójú réteget tartalmaz, csak az elnevezésük különbözik."
    ],
    "helyes": "Az OSI modell 7 réteget tartalmaz, míg a TCP/IP modell 4 réteget használ, ahol az OSI Viszony és Megjelenítési rétegei a TCP/IP Alkalmazási rétegébe integrálódnak."
  },
  {
    "szoveg": "Milyen fő különbség van az OSI és a TCP/IP modell fejlesztési megközelítésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modellt elméleti alapokon fejlesztették ki, míg a TCP/IP modell gyakorlati tapasztalatokon alapul.",
      "A TCP/IP modellt elméleti alapokon fejlesztették ki, míg az OSI modell gyakorlati tapasztalatokon alapul.",
      "Mindkét modellt azonos módon, elméleti és gyakorlati megközelítések kombinációjával fejlesztették ki."
    ],
    "helyes": "Az OSI modellt elméleti alapokon fejlesztették ki, míg a TCP/IP modell gyakorlati tapasztalatokon alapul."
  },
  {
    "szoveg": "Miben különbözik az OSI és a TCP/IP modell a protokollok függetlensége szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell szigorúan elkülöníti a protokollokat minden rétegben, míg a TCP/IP modell rugalmasabb, és a protokollok kevésbé kötődnek egy adott réteghez.",
      "A TCP/IP modell szigorúan elkülöníti a protokollokat minden rétegben, míg az OSI modell rugalmasabb a protokollok elhelyezésében.",
      "Mindkét modell azonos módon kezeli a protokollok függetlenségét, nincs köztük különbség ebben a tekintetben."
    ],
    "helyes": "Az OSI modell szigorúan elkülöníti a protokollokat minden rétegben, míg a TCP/IP modell rugalmasabb, és a protokollok kevésbé kötődnek egy adott réteghez."
  },
  {
    "szoveg": "Hogyan különbözik az OSI és a TCP/IP modell a rétegek közötti kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modellben a kommunikáció szigorúan vertikális, míg a TCP/IP modellben rugalmasabb, lehetővé téve a rétegek közötti közvetlen interakciót is.",
      "A TCP/IP modellben a kommunikáció szigorúan vertikális, míg az OSI modellben rugalmasabb, lehetővé téve a rétegek közötti közvetlen interakciót.",
      "Mindkét modellben a kommunikáció azonos módon, kizárólag vertikálisan történik a szomszédos rétegek között."
    ],
    "helyes": "Az OSI modellben a kommunikáció szigorúan vertikális, míg a TCP/IP modellben rugalmasabb, lehetővé téve a rétegek közötti közvetlen interakciót is."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az OSI és TCP/IP modellek közötti különbséget az alkalmazhatóság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell univerzálisabb, bármilyen kommunikációs rendszerre alkalmazható, míg a TCP/IP modell specifikusan az internetes kommunikációra lett tervezve.",
      "A TCP/IP modell univerzálisabb, bármilyen kommunikációs rendszerre alkalmazható, míg az OSI modell specifikusan a helyi hálózatokra lett tervezve.",
      "Mindkét modell egyformán univerzális és specifikus, nincs köztük különbség az alkalmazhatóság szempontjából."
    ],
    "helyes": "Az OSI modell univerzálisabb, bármilyen kommunikációs rendszerre alkalmazható, míg a TCP/IP modell specifikusan az internetes kommunikációra lett tervezve."
  },
  {
    "szoveg": "Hogyan értelmezhető a két modell közötti különbség a gyakorlati implementáció és használat szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Bár az OSI modell átfogóbb, a TCP/IP modell vált elterjedtté a gyakorlatban az internet fejlődése során, és a legtöbb modern hálózati technológia ezt követi.",
      "Az OSI modell dominál a gyakorlati implementációkban, míg a TCP/IP modell főként elméleti referenciakeretként szolgál a hálózati oktatásban.",
      "Mindkét modell egyformán elterjedt a gyakorlati implementációkban, és párhuzamosan használják őket a modern hálózati technológiákban."
    ],
    "helyes": "Bár az OSI modell átfogóbb, a TCP/IP modell vált elterjedtté a gyakorlatban az internet fejlődése során, és a legtöbb modern hálózati technológia ezt követi."
  },
  {
    "szoveg": "Hogyan befolyásolhatja a virtualizáció és a szoftver-definiált hálózatok (SDN) elterjedése az OSI és TCP/IP modellek jövőbeli értelmezését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A virtualizáció és SDN új megközelítéseket hozhatnak a rétegek közötti interakciókban, ami rugalmasabb értelmezést igényelhet mindkét modellnél.",
      "A virtualizáció és SDN valószínűleg az OSI modell teljes elvetéséhez és a TCP/IP modell kizárólagos használatához vezetnek.",
      "A virtualizáció és SDN nem befolyásolják jelentősen a modellek értelmezését, azok változatlanok maradnak."
    ],
    "helyes": "A virtualizáció és SDN új megközelítéseket hozhatnak a rétegek közötti interakciókban, ami rugalmasabb értelmezést igényelhet mindkét modellnél."
  },
  {
    "szoveg": "Milyen hatással lehetnek az 5G és IoT technológiák az OSI és TCP/IP modellek jövőbeli alkalmazására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G és IoT új kihívásokat hozhatnak, amelyek a modellek rugalmasabb értelmezését és esetleges kiterjesztését igényelhetik, különösen a végponti eszközök és hálózati erőforrások kezelése terén.",
      "Az 5G és IoT technológiák valószínűleg teljesen új hálózati modell kialakítását teszik szükségessé, felváltva mind az OSI, mind a TCP/IP modellt.",
      "Az 5G és IoT technológiák nem befolyásolják jelentősen a meglévő modelleket, azok változatlan formában alkalmazhatók maradnak."
    ],
    "helyes": "Az 5G és IoT új kihívásokat hozhatnak, amelyek a modellek rugalmasabb értelmezését és esetleges kiterjesztését igényelhetik, különösen a végponti eszközök és hálózati erőforrások kezelése terén."
  },
  {
    "szoveg": "Egy vállalati hálózatban a felhasználók nem tudnak csatlakozni egy belső webszerverhez. Hogyan alkalmaznád az OSI modell alapú hibaelhárítást ebben a helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai rétegtől kezdve felfelé haladva ellenőrizném a kábeleket, hálózati eszközöket, IP-címzést, majd a webszerver konfigurációját és a böngészők beállításait.",
      "Az alkalmazási rétegtől kezdve lefelé haladva ellenőrizném a webszerver konfigurációját, majd a hálózati kapcsolatot, végül a fizikai csatlakozásokat.",
      "Kizárólag a hálózati réteget vizsgálnám, ellenőrizve az IP-címeket és az útválasztást, mivel a probléma valószínűleg itt található."
    ],
    "helyes": "A fizikai rétegtől kezdve felfelé haladva ellenőrizném a kábeleket, hálózati eszközöket, IP-címzést, majd a webszerver konfigurációját és a böngészők beállításait."
  },
  {
    "szoveg": "Egy távoli iroda nem tud kapcsolódni a központi adatbázishoz. Hogyan alkalmaznád a 'Follow the path' (kövesd az utat) modellt a probléma megoldására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Traceroute eszközt használnék a hálózati út vizsgálatára, ellenőrizném a közbenső csomópontokat, a tűzfal szabályokat, és végül az adatbázis szerver konfigurációját.",
      "Csak az adatbázis szerver konfigurációját ellenőrizném, mivel a probléma valószínűleg ott van.",
      "Kizárólag a távoli iroda helyi hálózatát vizsgálnám, mivel a probléma valószínűleg ott keletkezett."
    ],
    "helyes": "Traceroute eszközt használnék a hálózati út vizsgálatára, ellenőrizném a közbenső csomópontokat, a tűzfal szabályokat, és végül az adatbázis szerver konfigurációját."
  },
  {
    "szoveg": "Egy nagyvállalat új VoIP rendszert telepített, de a hangminőség gyenge. Hogyan hajtanád végre a hibaelhárítást a Top-down modell segítségével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazási réteggel kezdeném, ellenőrizve a VoIP szoftver beállításait, majd lefelé haladnék a hálózati és fizikai rétegekig, vizsgálva a QoS beállításokat és a sávszélességet.",
      "A fizikai rétegnél kezdeném, ellenőrizve a kábelezést és a hálózati eszközöket, majd felfelé haladnék az alkalmazási rétegig.",
      "Kizárólag a szállítási réteget vizsgálnám, mivel a hangminőség problémák általában itt jelentkeznek."
    ],
    "helyes": "Az alkalmazási réteggel kezdeném, ellenőrizve a VoIP szoftver beállításait, majd lefelé haladnék a hálózati és fizikai rétegekig, vizsgálva a QoS beállításokat és a sávszélességet."
  },
  {
    "szoveg": "Egy vállalati hálózatban lassú az internetkapcsolat. Hogyan hajtanád végre a hibaelhárítást a 'Divide and conquer' (oszd meg és uralkodj) modell segítségével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózatot belső és külső részekre osztanám, külön tesztelném a belső hálózat és a külső internetkapcsolat sebességét, majd az eredmények alapján fókuszálnék a problémás részre.",
      "Csak a külső internetkapcsolatot ellenőrizném, mivel a lassúság valószínűleg az ISP hibája.",
      "Kizárólag a belső hálózatot vizsgálnám, mivel a lassúság valószínűleg a helyi eszközök túlterheltsége miatt van."
    ],
    "helyes": "A hálózatot belső és külső részekre osztanám, külön tesztelném a belső hálózat és a külső internetkapcsolat sebességét, majd az eredmények alapján fókuszálnék a problémás részre."
  },
  {
    "szoveg": "Milyen példával illusztrálnád a Bottom-up hibaelhárítási modell alkalmazását egy olyan helyzetben, amikor egy felhasználó nem tud csatlakozni a vállalati e-mail szerverhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai kapcsolat ellenőrzésével kezdeném, majd a hálózati beállításokat vizsgálnám, végül az e-mail szerver és kliens konfigurációját ellenőrizném.",
      "Először ellenőrizném az e-mail kliens beállításait, majd a szerver konfigurációját, végül a hálózati kapcsolatot.",
      "Kizárólag az e-mail szerver konfigurációját vizsgálnám, mivel a probléma valószínűleg ott van."
    ],
    "helyes": "A fizikai kapcsolat ellenőrzésével kezdeném, majd a hálózati beállításokat vizsgálnám, végül az e-mail szerver és kliens konfigurációját ellenőrizném."
  },
  {
    "szoveg": "Hogyan illusztrálnád az OSI modell alapú hibaelhárítás alkalmazását egy olyan helyzetben, amikor egy felhasználó nem tud csatlakozni egy távoli fájlszerverhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai rétegtől kezdve felfelé haladva ellenőrizném a kábeleket, hálózati eszközöket, IP-címzést, útvonalválasztást, majd a fájlmegosztási protokollokat és jogosultságokat.",
      "Csak az alkalmazási réteget vizsgálnám, ellenőrizve a fájlszerver konfigurációját és a felhasználói jogosultságokat.",
      "Kizárólag a hálózati réteget vizsgálnám, ellenőrizve az IP-címeket és az útválasztást."
    ],
    "helyes": "A fizikai rétegtől kezdve felfelé haladva ellenőrizném a kábeleket, hálózati eszközöket, IP-címzést, útvonalválasztást, majd a fájlmegosztási protokollokat és jogosultságokat."
  },
  {
    "szoveg": "Egy nagyvállalat IT osztálya a Top-down és Bottom-up hibaelhárítási modelleket használja. Melyik modellt ítélnéd hatékonyabbnak egy összetett hálózati probléma esetén, és miért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Bottom-up modell hatékonyabb, mert szisztematikusan kizárja az alapvető infrastrukturális problémákat, mielőtt a komplexebb kérdésekre fókuszálna.",
      "A Top-down modell hatékonyabb, mert gyorsabban azonosítja az alkalmazás szintű problémákat, amelyek a leggyakoribbak.",
      "Mindkét modell egyformán hatékony, nincs jelentős különbség közöttük összetett problémák esetén."
    ],
    "helyes": "A Bottom-up modell hatékonyabb, mert szisztematikusan kizárja az alapvető infrastrukturális problémákat, mielőtt a komplexebb kérdésekre fókuszálna."
  },
  {
    "szoveg": "Egy vállalat IT menedzsere azt javasolja, hogy kizárólag a 'Divide and conquer' (oszd meg és uralkodj) modellt használják minden hálózati probléma megoldására. Hogyan ítélnéd meg ezt a javaslatot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Részben egyetértenék, de javasolnám más modellek használatát is, mivel különböző problémák különböző megközelítéseket igényelhetnek.",
      "Teljes mértékben támogatnám, mert a 'Divide and conquer' modell minden helyzetben a leghatékonyabb megoldást nyújtja.",
      "Elutasítanám, mert a 'Divide and conquer' modell nem alkalmas hálózati problémák megoldására."
    ],
    "helyes": "Részben egyetértenék, de javasolnám más modellek használatát is, mivel különböző problémák különböző megközelítéseket igényelhetnek."
  },
  {
    "szoveg": "Hogyan értelmezhető a PDU-k egymásba ágyazásának folyamata a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A magasabb rétegek PDU-i beágyazódnak az alacsonyabb rétegek PDU-iba, így biztosítva a teljes kommunikációs folyamatot.",
      "Az alacsonyabb rétegek PDU-i beágyazódnak a magasabb rétegek PDU-iba, így biztosítva a hatékony adatátvitelt.",
      "A PDU-k egymás mellett helyezkednek el, nem ágyazódnak egymásba, hanem külön-külön továbbítódnak a hálózaton."
    ],
    "helyes": "A magasabb rétegek PDU-i beágyazódnak az alacsonyabb rétegek PDU-iba, így biztosítva a teljes kommunikációs folyamatot."
  },
  {
    "szoveg": "Mit jelent a PDU fogalma a hálózati kommunikációban, és miért fontos a megértése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PDU (Protocol Data Unit) egy adott hálózati réteg által kezelt adategység, amelynek megértése kulcsfontosságú a hálózati kommunikáció és protokollok működésének elemzéséhez.",
      "A PDU (Protocol Data Unit) kizárólag a fizikai rétegben használt adategység, amely a bitek továbbítását szabályozza a hálózaton.",
      "A PDU (Protocol Data Unit) egy speciális titkosítási módszer, amelyet a biztonságos adatátvitel érdekében használnak a hálózatokban."
    ],
    "helyes": "A PDU (Protocol Data Unit) egy adott hálózati réteg által kezelt adategység, amelynek megértése kulcsfontosságú a hálózati kommunikáció és protokollok működésének elemzéséhez."
  },
  {
    "szoveg": "Hogyan hasonlítható össze egy TCP szegmens és egy IP csomag felépítése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP szegmens tartalmaz port számokat és sorszámokat, míg az IP csomag IP címeket és TTL értéket tartalmaz. Mindkettő rendelkezik fejrésszel és adatmezővel.",
      "A TCP szegmens és az IP csomag teljesen azonos felépítésűek, csak a protokoll neve különbözik.",
      "A TCP szegmens csak adatokat tartalmaz, míg az IP csomag kizárólag vezérlőinformációkat hordoz."
    ],
    "helyes": "A TCP szegmens tartalmaz port számokat és sorszámokat, míg az IP csomag IP címeket és TTL értéket tartalmaz. Mindkettő rendelkezik fejrésszel és adatmezővel."
  },
  {
    "szoveg": "Milyen hasonlóságok és különbségek figyelhetők meg egy Ethernet keret és egy IP csomag között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mindkettő tartalmaz forrás és cél címeket, de az Ethernet MAC címeket, az IP pedig IP címeket használ. Az Ethernet keret rövidebb és egyszerűbb felépítésű.",
      "Az Ethernet keret és az IP csomag teljesen azonos felépítésűek, csak különböző rétegekben használatosak.",
      "Az Ethernet keret csak vezérlőinformációkat tartalmaz, míg az IP csomag kizárólag adatokat hordoz."
    ],
    "helyes": "Mindkettő tartalmaz forrás és cél címeket, de az Ethernet MAC címeket, az IP pedig IP címeket használ. Az Ethernet keret rövidebb és egyszerűbb felépítésű."
  },
  {
    "szoveg": "Milyen példával illusztrálható egy HTTP kérés útja a hálózati rétegeken keresztül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy HTTP GET kérés alkalmazási rétegbeli üzenetként indul, TCP szegmensbe csomagolódik, majd IP csomagba kerül, végül Ethernet keretbe foglalódik, mielőtt bitekké alakulva továbbítódik a hálózaton.",
      "Egy HTTP GET kérés közvetlenül IP csomagba kerül, majd azonnal bitekké alakul és továbbítódik a hálózaton, kihagyva a többi réteget.",
      "Egy HTTP GET kérés Ethernet keretként indul, majd TCP szegmensbe csomagolódik, végül IP csomagként továbbítódik a hálózaton."
    ],
    "helyes": "Egy HTTP GET kérés alkalmazási rétegbeli üzenetként indul, TCP szegmensbe csomagolódik, majd IP csomagba kerül, végül Ethernet keretbe foglalódik, mielőtt bitekké alakulva továbbítódik a hálózaton."
  },
  {
    "szoveg": "Hogyan illusztrálható a PDU-k elemzésének jelentősége egy konkrét hálózati probléma esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy weboldal lassú betöltődése esetén a PDU-k elemzése segíthet azonosítani, hogy a probléma a TCP kapcsolat lassúságából, az IP útválasztás hibájából vagy az alkalmazási réteg túlterheléséből ered-e.",
      "A PDU-k elemzése kizárólag a hálózati eszközök fizikai hibáinak felderítésére szolgál, és nem nyújt információt a magasabb rétegek problémáiról.",
      "A PDU-k elemzése csak a hálózat biztonsági kérdéseinek vizsgálatára alkalmas, és nem használható teljesítményproblémák vagy protokollhibák azonosítására."
    ],
    "helyes": "Egy weboldal lassú betöltődése esetén a PDU-k elemzése segíthet azonosítani, hogy a probléma a TCP kapcsolat lassúságából, az IP útválasztás hibájából vagy az alkalmazási réteg túlterheléséből ered-e."
  },
  {
    "szoveg": "Hogyan befolyásolja az encapsulation folyamata a hálózati teljesítményt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az encapsulation extra adatokat ad hozzá az eredeti adatokhoz, ami növelheti az átviteli időt és csökkentheti a hálózat átviteli sebességét.",
      "Az encapsulation csökkenti az átvitelre kerülő adatok mennyiségét, ezáltal növelve a hálózat átviteli sebességét.",
      "Az encapsulation nem befolyásolja a hálózati teljesítményt, csak a biztonságot javítja."
    ],
    "helyes": "Az encapsulation extra adatokat ad hozzá az eredeti adatokhoz, ami növelheti az átviteli időt és csökkentheti a hálózat átviteli sebességét."
  },
  {
    "szoveg": "Milyen szerepet játszik a de-encapsulation folyamata a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A de-encapsulation során a fogadó oldal eltávolítja a fejléceket és lábléceket, visszaállítva az eredeti adatokat.",
      "A de-encapsulation új fejléceket ad hozzá az adatokhoz a fogadó oldalon.",
      "A de-encapsulation titkosítja az adatokat a biztonságos átvitel érdekében."
    ],
    "helyes": "A de-encapsulation során a fogadó oldal eltávolítja a fejléceket és lábléceket, visszaállítva az eredeti adatokat."
  },
  {
    "szoveg": "Milyen következményekkel járhat, ha egy hálózati eszköz nem képes elég gyorsan elvégezni az encapsulation és de-encapsulation folyamatokat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megnövekedett késleltetés és csökkent adatátviteli sebesség a hálózatban.",
      "Jobb adatbiztonság és titkosítás a lassabb feldolgozás miatt.",
      "Az adatok automatikus tömörítése a hálózati teljesítmény javítása érdekében."
    ],
    "helyes": "Megnövekedett késleltetés és csökkent adatátviteli sebesség a hálózatban."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az encapsulation folyamata a hálózati biztonságot a jövőben, figyelembe véve a növekvő adatforgalmat és a fejlődő támadási technikákat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az encapsulation lehetővé teszi a többrétegű titkosítást és fejlettebb hozzáférés-szabályozást, de új típusú támadási felületeket is teremthet.",
      "Az encapsulation teljesen elavulttá válik, és új biztonsági mechanizmusok veszik át a helyét.",
      "Az encapsulation csak az adatátvitel sebességét fogja befolyásolni, de nem lesz hatással a biztonságra."
    ],
    "helyes": "Az encapsulation lehetővé teszi a többrétegű titkosítást és fejlettebb hozzáférés-szabályozást, de új típusú támadási felületeket is teremthet."
  },
  {
    "szoveg": "Egy nagy adatforgalmú vállalati hálózatban hogyan optimalizálná az encapsulation és de-encapsulation folyamatokat a teljesítmény javítása érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hatékony hardveres gyorsítók használata, optimalizált protokollok implementálása és a csomagméret gondos beállítása.",
      "Az encapsulation és de-encapsulation folyamatok teljes kiiktatása a hálózatból.",
      "Minden adat maximális szintű titkosítása, függetlenül a teljesítményre gyakorolt hatástól."
    ],
    "helyes": "Hatékony hardveres gyorsítók használata, optimalizált protokollok implementálása és a csomagméret gondos beállítása."
  },
  {
    "szoveg": "Hogyan implementálná az encapsulation folyamatát egy új, nagy sebességű IoT (Internet of Things) protokoll tervezése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minimális méretű fejlécek használata, hardveres gyorsítás támogatása, és adaptív encapsulation technikák alkalmazása.",
      "Maximális méretű fejlécek használata a lehető legtöbb információ tárolásához.",
      "Az encapsulation teljes mellőzése a sebesség maximalizálása érdekében."
    ],
    "helyes": "Minimális méretű fejlécek használata, hardveres gyorsítás támogatása, és adaptív encapsulation technikák alkalmazása."
  },
  {
    "szoveg": "Hogyan értékelné az encapsulation és de-encapsulation folyamatok hatékonyságát egy nagyvállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati teljesítmény, biztonsági mutatók és alkalmazás-válaszidők komplex elemzésével, figyelembe véve a hálózati eszközök terhelését is.",
      "Kizárólag a hálózat átviteli sebességének mérésével.",
      "Az encapsulation és de-encapsulation folyamatok teljes kiiktatásával és az eredmények összehasonlításával."
    ],
    "helyes": "A hálózati teljesítmény, biztonsági mutatók és alkalmazás-válaszidők komplex elemzésével, figyelembe véve a hálózati eszközök terhelését is."
  },
  {
    "szoveg": "Milyen kritériumok alapján ítélné meg egy új hálózati protokoll encapsulation mechanizmusának hatékonyságát és biztonságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az overhead mértéke, a feldolgozási sebesség, a biztonsági funkciók erőssége és a kompatibilitás más protokollokkal.",
      "Kizárólag az adatátviteli sebesség alapján, figyelmen kívül hagyva a biztonsági szempontokat.",
      "Csak a protokoll által használt titkosítás erőssége alapján, figyelmen kívül hagyva a teljesítményt."
    ],
    "helyes": "Az overhead mértéke, a feldolgozási sebesség, a biztonsági funkciók erőssége és a kompatibilitás más protokollokkal."
  },
  {
    "szoveg": "Hogyan járul hozzá a Separation of Concerns (SoC) elve a komplex rendszerek karbantarthatóságához a moduláris felépítés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi, hogy a rendszer egyes részeit külön fejlesszük vagy módosítsuk anélkül, hogy az egész rendszert érintenénk.",
      "Növeli a rendszer komponensei közötti függőségeket, ezáltal javítva a teljesítményt.",
      "Centralizálja a rendszer funkcióit, így egyszerűsítve a fejlesztési folyamatot."
    ],
    "helyes": "Lehetővé teszi, hogy a rendszer egyes részeit külön fejlesszük vagy módosítsuk anélkül, hogy az egész rendszert érintenénk."
  },
  {
    "szoveg": "Milyen szerepet játszik a Separation of Concerns elve a hálózati protokollok rétegekbe szervezésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden réteg specifikus feladatokat lát el, például az adatkapcsolati réteg a közvetlen kapcsolatért, míg a hálózati réteg a routolásért felelős.",
      "A rétegek közötti szoros integráció biztosítja a hatékony adatátvitelt.",
      "A protokoll rétegek egyesítése egyszerűsíti a hálózati kommunikációt."
    ],
    "helyes": "Minden réteg specifikus feladatokat lát el, például az adatkapcsolati réteg a közvetlen kapcsolatért, míg a hálózati réteg a routolásért felelős."
  },
  {
    "szoveg": "Egy e-kereskedelmi weboldal fejlesztése során hogyan alkalmazná a Separation of Concerns elvét a rendszer architektúrájának kialakításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elkülöníteném a felhasználói felületet, az üzleti logikát, az adatbázis-kezelést és a fizetési rendszert külön modulokba.",
      "Egyetlen nagy, integrált modult hoznék létre, amely az összes funkciót tartalmazza a gyorsabb fejlesztés érdekében.",
      "Csak a felhasználói felületet és az adatbázist különíteném el, minden más funkciót egy közös modulba integrálnék."
    ],
    "helyes": "Elkülöníteném a felhasználói felületet, az üzleti logikát, az adatbázis-kezelést és a fizetési rendszert külön modulokba."
  },
  {
    "szoveg": "Hogyan illusztrálná a Separation of Concerns elvét egy okosotthon rendszer tervezésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Külön modulokat hoznék létre a világításvezérlésre, fűtésszabályozásra, biztonsági rendszerre és a központi vezérlőegységre.",
      "Egy központi egységet terveznék, amely minden funkciót magában foglal a hatékonyabb energiafelhasználás érdekében.",
      "Csak a biztonsági rendszert különíteném el, minden más funkciót egy közös modulba integrálnék."
    ],
    "helyes": "Külön modulokat hoznék létre a világításvezérlésre, fűtésszabályozásra, biztonsági rendszerre és a központi vezérlőegységre."
  },
  {
    "szoveg": "Egy nagyvállalati hálózat tervezése során hogyan alkalmazná a Separation of Concerns elvét a hálózati infrastruktúra kialakításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Külön alhálózatokat hoznék létre különböző funkciókra, például adatbázis szervereknek, alkalmazás szervereknek és felhasználói hozzáférésnek, valamint elkülöníteném a biztonsági és menedzsment funkciókat.",
      "Egyetlen nagy, egységes hálózatot terveznék az összes eszköz számára a könnyebb kezelhetőség érdekében.",
      "Csak a szervereket és a felhasználói eszközöket különíteném el, minden más funkciót egy közös hálózati szegmensbe integrálnék."
    ],
    "helyes": "Külön alhálózatokat hoznék létre különböző funkciókra, például adatbázis szervereknek, alkalmazás szervereknek és felhasználói hozzáférésnek, valamint elkülöníteném a biztonsági és menedzsment funkciókat."
  },
  {
    "szoveg": "Hogyan alkalmazná a Separation of Concerns elvét egy többrétegű webalkalmazás fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elkülöníteném a prezentációs réteget, az üzleti logikai réteget és az adathozzáférési réteget, valamint külön kezelném a biztonsági és naplózási funkciókat.",
      "Egy monolitikus alkalmazást fejlesztenék, ahol minden funkció egyetlen nagy kódbázisban található a gyorsabb fejlesztés érdekében.",
      "Csak a felhasználói felületet és az adatbázist különíteném el, minden más funkciót egy közös rétegbe integrálnék."
    ],
    "helyes": "Elkülöníteném a prezentációs réteget, az üzleti logikai réteget és az adathozzáférési réteget, valamint külön kezelném a biztonsági és naplózási funkciókat."
  },
  {
    "szoveg": "Milyen hosszú távú előnyöket jósolna egy olyan rendszernek, amely szigorúan követi a Separation of Concerns elvét a fejlesztés során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Könnyebb karbantarthatóság, jobb skálázhatóság és rugalmasabb alkalmazkodás a változó követelményekhez.",
      "Gyorsabb kezdeti fejlesztés, de nehezebb hosszú távú karbantartás és frissítés.",
      "Alacsonyabb kezdeti költségek, de magasabb üzemeltetési költségek hosszú távon."
    ],
    "helyes": "Könnyebb karbantarthatóság, jobb skálázhatóság és rugalmasabb alkalmazkodás a változó követelményekhez."
  },
  {
    "szoveg": "Milyen potenciális kihívásokat látna előre egy olyan nagyszabású projekt esetén, amely nem megfelelően alkalmazza a Separation of Concerns elvét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nehézségek a kód karbantartásában, lassú fejlesztési ciklusok és problémák a rendszer skálázásában.",
      "Gyorsabb kezdeti fejlesztés, de magasabb hardverköltségek a redundancia miatt.",
      "Jobb teljesítmény rövid távon, de nehézségek új technológiák integrálásában."
    ],
    "helyes": "Nehézségek a kód karbantartásában, lassú fejlesztési ciklusok és problémák a rendszer skálázásában."
  },
  {
    "szoveg": "Hogyan értelmezi a Hourglass Model az internet architektúráját, és mi ennek a jelentősége a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modell egy homokóra alakját veszi fel, ahol a középső, legszűkebb rész az IP réteget jelképezi, ami univerzális interfészt biztosít a különböző alkalmazások és hálózati technológiák együttműködéséhez.",
      "A modell egy piramis alakot vesz fel, ahol az alsó, legszélesebb rész az IP réteget jelképezi, ami a legfontosabb szerepet játssza a hálózati kommunikációban.",
      "A modell egy kocka alakot vesz fel, ahol minden oldal egyenlő fontosságú, és nincs kiemelt szerepe az IP rétegnek a hálózati kommunikációban."
    ],
    "helyes": "A modell egy homokóra alakját veszi fel, ahol a középső, legszűkebb rész az IP réteget jelképezi, ami univerzális interfészt biztosít a különböző alkalmazások és hálózati technológiák együttműködéséhez."
  },
  {
    "szoveg": "Milyen módon értelmezi a Hourglass Model a szoftverfejlesztés és a hálózati technológiák kapcsolatát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modell lehetővé teszi, hogy a szoftverfejlesztők az IP réteggel kommunikáljanak, miközben az alsóbb rétegek változhatnak, így növelve a fejlesztés rugalmasságát és egyszerűségét.",
      "A modell megköveteli, hogy a szoftverfejlesztők részletesen ismerjék minden hálózati réteg működését, beleértve a fizikai rétegeket is.",
      "A modell szerint a szoftverfejlesztésnek és a hálózati technológiáknak szorosan össze kell fonódniuk, nem lehetnek függetlenek egymástól."
    ],
    "helyes": "A modell lehetővé teszi, hogy a szoftverfejlesztők az IP réteggel kommunikáljanak, miközben az alsóbb rétegek változhatnak, így növelve a fejlesztés rugalmasságát és egyszerűségét."
  },
  {
    "szoveg": "Hogyan befolyásolhatja a Hourglass Model a jövőbeli hálózati innovációkat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi új alkalmazások és hálózati technológiák fejlesztését az IP réteg módosítása nélkül, elősegítve a folyamatos innovációt mind a végpontokban, mind az alsóbb rétegekben.",
      "Korlátozza az innovációt, mert minden új fejlesztésnek kompatibilisnek kell lennie a meglévő IP réteggel, ami lassítja a technológiai előrehaladást.",
      "Megszünteti a különbséget az alkalmazási és a fizikai rétegek között, így minden jövőbeli innováció egységesen fog hatni a teljes hálózati struktúrára."
    ],
    "helyes": "Lehetővé teszi új alkalmazások és hálózati technológiák fejlesztését az IP réteg módosítása nélkül, elősegítve a folyamatos innovációt mind a végpontokban, mind az alsóbb rétegekben."
  },
  {
    "szoveg": "Milyen potenciális kihívásokat vagy korlátokat jósolhatunk a Hourglass Model jövőbeli alkalmazásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP réteg szűk keresztmetszete korlátozhatja bizonyos innovációk megvalósítását, és nehezítheti a minőségi szolgáltatás (QoS) és a biztonság implementálását.",
      "A modell teljesen megakadályozza új hálózati protokollok bevezetését, mivel minden kommunikációnak az IP rétegen keresztül kell történnie.",
      "A jövőben az alkalmazások nem lesznek képesek közvetlenül kommunikálni az IP réteggel, ami jelentősen lelassítja a szoftverfejlesztést."
    ],
    "helyes": "Az IP réteg szűk keresztmetszete korlátozhatja bizonyos innovációk megvalósítását, és nehezítheti a minőségi szolgáltatás (QoS) és a biztonság implementálását."
  },
  {
    "szoveg": "Milyen példa illusztrálja legjobban a Hourglass Model előnyeit a modern streaming szolgáltatások fejlesztésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy új generációs streaming szolgáltatás fejleszthető anélkül, hogy a fejlesztőknek foglalkozniuk kellene azzal, hogy a felhasználók Wi-Fi-n, mobilhálózaton vagy vezetékes interneten keresztül csatlakoznak.",
      "Egy streaming szolgáltatás csak akkor fejleszthető, ha a fejlesztők részletesen ismerik és optimalizálják minden lehetséges hálózati technológiát, amin keresztül a felhasználók csatlakozhatnak.",
      "A streaming szolgáltatások fejlesztése során a fejlesztőknek külön verziót kell készíteniük minden egyes hálózati technológiához, hogy biztosítsák a kompatibilitást."
    ],
    "helyes": "Egy új generációs streaming szolgáltatás fejleszthető anélkül, hogy a fejlesztőknek foglalkozniuk kellene azzal, hogy a felhasználók Wi-Fi-n, mobilhálózaton vagy vezetékes interneten keresztül csatlakoznak."
  },
  {
    "szoveg": "Milyen példa szemlélteti legjobban a Hourglass Model hatását a hálózati technológiák fejlődésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G hálózatok bevezetése nem igényelte a meglévő webalkalmazások módosítását, mivel az IP réteg elrejti az alsóbb rétegek változásait.",
      "Az 5G hálózatok bevezetésekor minden meglévő webalkalmazást újra kellett írni, hogy kompatibilisek legyenek az új technológiával.",
      "Az 5G hálózatok bevezetése teljesen új internetes protokollok kifejlesztését igényelte, felváltva a régi IP-alapú kommunikációt."
    ],
    "helyes": "Az 5G hálózatok bevezetése nem igényelte a meglévő webalkalmazások módosítását, mivel az IP réteg elrejti az alsóbb rétegek változásait."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Separation of Concerns (SoC) elvét a szoftverfejlesztésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SoC elv szerint a szoftverrendszert különálló, jól elkülöníthető részekre bontjuk, ahol minden rész egy specifikus funkcionalitásért vagy aspektusért felelős, ezáltal javítva a rendszer modulárisságát és karbantarthatóságát.",
      "A SoC elv azt jelenti, hogy a fejlesztőknek csak egy-egy konkrét területre kell specializálódniuk, és nem kell ismerniük a teljes rendszert.",
      "A SoC elv lényege, hogy minden funkcionalitást egyetlen nagy, központi modulba sűrítsünk, így biztosítva a rendszer egységességét és könnyű áttekinthetőségét."
    ],
    "helyes": "A SoC elv szerint a szoftverrendszert különálló, jól elkülöníthető részekre bontjuk, ahol minden rész egy specifikus funkcionalitásért vagy aspektusért felelős, ezáltal javítva a rendszer modulárisságát és karbantarthatóságát."
  },
  {
    "szoveg": "Milyen módon járul hozzá a Separation of Concerns elve a szoftverrendszerek hosszú távú fenntarthatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SoC elv alkalmazásával a rendszer különböző részei függetlenül fejleszthetők és karbantarthatók, ami megkönnyíti a változtatások kezelését és csökkenti a hibák továbbterjedésének kockázatát.",
      "A SoC elv biztosítja, hogy a rendszer minden része azonos technológiával készüljön, így egyszerűsítve a fejlesztést és karbantartást.",
      "A SoC elv alkalmazásával a rendszer teljesítménye automatikusan javul, ami hosszú távon csökkenti a hardverköltségeket."
    ],
    "helyes": "A SoC elv alkalmazásával a rendszer különböző részei függetlenül fejleszthetők és karbantarthatók, ami megkönnyíti a változtatások kezelését és csökkenti a hibák továbbterjedésének kockázatát."
  },
  {
    "szoveg": "Milyen példával illusztrálható a Separation of Concerns elv alkalmazása egy webáruház fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználói felület (HTML, CSS, JavaScript), az üzleti logika (termékkezelés, kosár funkciók), és az adatelérési réteg (adatbázis műveletek) elkülönítése különálló komponensekbe.",
      "Az összes funkció (felhasználói felület, üzleti logika, adatbázis műveletek) egyetlen nagy PHP fájlba való implementálása a gyors fejlesztés érdekében.",
      "A webáruház teljes funkcionalitásának JavaScript-ben való megvalósítása, beleértve a szerveroldali logikát és az adatbázis-kezelést is."
    ],
    "helyes": "A felhasználói felület (HTML, CSS, JavaScript), az üzleti logika (termékkezelés, kosár funkciók), és az adatelérési réteg (adatbázis műveletek) elkülönítése különálló komponensekbe."
  },
  {
    "szoveg": "Hogyan illusztrálható a Separation of Concerns elv alkalmazása az aspektusorientált programozásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A naplózás és hibakezelés elkülönítése a fő üzleti logikától, lehetővé téve ezek központi kezelését és könnyű módosítását a teljes alkalmazásban.",
      "Az összes üzleti logika és segédfunkció (pl. naplózás, hibakezelés) egy közös osztályba való beépítése a kód centralizálása érdekében.",
      "A naplózás és hibakezelés kódjának másolása és beillesztése minden egyes üzleti logikai osztályba a teljes lefedettség biztosítása érdekében."
    ],
    "helyes": "A naplózás és hibakezelés elkülönítése a fő üzleti logikától, lehetővé téve ezek központi kezelését és könnyű módosítását a teljes alkalmazásban."
  },
  {
    "szoveg": "Hogyan alkalmazná a Separation of Concerns elvét egy mobilalkalmazás fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználói felület, az üzleti logika és az adatkezelés külön rétegekbe szervezésével, valamint a platformspecifikus kód elkülönítésével a közös logikától.",
      "Az összes funkcionalitás egyetlen nagy osztályba való implementálásával, hogy minden egy helyen legyen könnyen elérhető.",
      "A teljes alkalmazás natív kódban való megírásával, mellőzve bármilyen absztrakciós réteget vagy keretrendszert."
    ],
    "helyes": "A felhasználói felület, az üzleti logika és az adatkezelés külön rétegekbe szervezésével, valamint a platformspecifikus kód elkülönítésével a közös logikától."
  },
  {
    "szoveg": "Hogyan használná a Separation of Concerns elvét egy nagy méretű webalkalmazás adatbázis-kezelésének megtervezésekor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Külön adatelérési réteget hoznék létre, amely elrejti az adatbázis-specifikus részleteket, és tiszta interfészt biztosít az üzleti logika számára az adatok kezeléséhez.",
      "Az adatbázis-lekérdezéseket közvetlenül az üzleti logikai osztályokba építeném be, hogy gyorsabb legyen a fejlesztés és az adatelérés.",
      "Minden adatbázis-műveletet tárolt eljárásokkal valósítanék meg, és ezeket hívnám meg közvetlenül a felhasználói felület kódjából."
    ],
    "helyes": "Külön adatelérési réteget hoznék létre, amely elrejti az adatbázis-specifikus részleteket, és tiszta interfészt biztosít az üzleti logika számára az adatok kezeléséhez."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a Separation of Concerns elv alkalmazásának hatásairól egy nagy szoftverrendszer hosszú távú karbantarthatóságára vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SoC elv következetes alkalmazása várhatóan csökkenti a karbantartási költségeket és megkönnyíti a rendszer továbbfejlesztését, mivel a változtatások hatása jobban izolálható.",
      "A SoC elv alkalmazása valószínűleg növeli a kezdeti fejlesztési időt, de nem befolyásolja jelentősen a hosszú távú karbantarthatóságot.",
      "A SoC elv alkalmazása várhatóan csökkenti a rendszer teljesítményét, de egyszerűbbé teszi a fejlesztők munkáját a karbantartás során."
    ],
    "helyes": "A SoC elv következetes alkalmazása várhatóan csökkenti a karbantartási költségeket és megkönnyíti a rendszer továbbfejlesztését, mivel a változtatások hatása jobban izolálható."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a Separation of Concerns elv alkalmazásának hatásairól egy szoftverfejlesztő csapat együttműködésére vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SoC elv alkalmazása várhatóan javítja a csapatmunkát, lehetővé téve a párhuzamos fejlesztést és csökkentve a konfliktusokat a kódban.",
      "A SoC elv alkalmazása valószínűleg megnehezíti a csapatmunkát, mivel a fejlesztőknek több különálló komponenst kell megérteniük.",
      "A SoC elv alkalmazása nem befolyásolja jelentősen a csapatmunkát, csak a kód struktúráját érinti."
    ],
    "helyes": "A SoC elv alkalmazása várhatóan javítja a csapatmunkát, lehetővé téve a párhuzamos fejlesztést és csökkentve a konfliktusokat a kódban."
  },
  {
    "szoveg": "Hogyan ítélné meg a Separation of Concerns elv alkalmazásának hatékonyságát egy olyan projektben, ahol a fejlesztési idő kritikusan rövid?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SoC elv alkalmazása még rövid határidő esetén is előnyös lehet, ha megfelelően alkalmazzuk, mert segíti a párhuzamos fejlesztést és csökkenti a hibák számát.",
      "Rövid határidő esetén a SoC elv alkalmazása felesleges luxus, jobb minden funkcionalitást gyorsan, egy helyre implementálni.",
      "A SoC elv csak hosszú távú projekteknél hasznos, rövid határidő esetén inkább hátráltatja a fejlesztést."
    ],
    "helyes": "A SoC elv alkalmazása még rövid határidő esetén is előnyös lehet, ha megfelelően alkalmazzuk, mert segíti a párhuzamos fejlesztést és csökkenti a hibák számát."
  },
  {
    "szoveg": "Hogyan ítélné meg a Separation of Concerns elv túlzott alkalmazásának potenciális következményeit egy szoftverrendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SoC elv túlzott alkalmazása vezethet túlkomplikált rendszerarchitektúrához, ami megnehezítheti a fejlesztést és csökkentheti a teljesítményt.",
      "A SoC elv túlzott alkalmazása mindig javítja a rendszer minőségét, nincs negatív következménye.",
      "A SoC elv túlzott alkalmazása csak a dokumentáció mennyiségét növeli, de nem befolyásolja a rendszer működését vagy fejleszthetőségét."
    ],
    "helyes": "A SoC elv túlzott alkalmazása vezethet túlkomplikált rendszerarchitektúrához, ami megnehezítheti a fejlesztést és csökkentheti a teljesítményt."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az interfész és implementáció szétválasztásának koncepcióját a hálózati protokollok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az interfész a protokoll külvilág felé mutatott, szabványosított felülete, míg az implementáció a protokoll belső működését valósítja meg, lehetővé téve különböző megvalósításokat azonos interfész mellett.",
      "Az interfész a protokoll fizikai rétege, míg az implementáció a logikai réteg, amely meghatározza a kommunikáció szabályait.",
      "Az interfész a hálózati hardver, míg az implementáció a szoftver, amely a hardvert működteti."
    ],
    "helyes": "Az interfész a protokoll külvilág felé mutatott, szabványosított felülete, míg az implementáció a protokoll belső működését valósítja meg, lehetővé téve különböző megvalósításokat azonos interfész mellett."
  },
  {
    "szoveg": "Milyen előnyöket nyújt az interfész és implementáció szétválasztása a hálózati protokollok fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a protokoll belső működésének fejlesztését anélkül, hogy a meglévő alkalmazásokat módosítani kellene, növelve a rugalmasságot és a visszafelé kompatibilitást.",
      "Csökkenti a hálózati forgalmat azáltal, hogy optimalizálja az adatátvitelt az interfész és az implementáció között.",
      "Automatikusan javítja a hálózati biztonságot az interfész és implementáció közötti szigorú elválasztás révén."
    ],
    "helyes": "Lehetővé teszi a protokoll belső működésének fejlesztését anélkül, hogy a meglévő alkalmazásokat módosítani kellene, növelve a rugalmasságot és a visszafelé kompatibilitást."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban az interfész és implementáció szétválasztásának előnyeit a hálózati protokollok területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP/IP protokollcsalád, ahol az alkalmazások a socket interfészt használják, miközben az alsóbb rétegek implementációja (pl. TCP, IP) fejlődhet anélkül, hogy ez befolyásolná a felsőbb rétegek működését.",
      "Az Ethernet protokoll, ahol a fizikai réteg és az adatkapcsolati réteg szorosan összefonódik, biztosítva a maximális teljesítményt.",
      "A HTTP protokoll, ahol minden verzióváltás új interfészt és implementációt igényel az alkalmazások számára."
    ],
    "helyes": "A TCP/IP protokollcsalád, ahol az alkalmazások a socket interfészt használják, miközben az alsóbb rétegek implementációja (pl. TCP, IP) fejlődhet anélkül, hogy ez befolyásolná a felsőbb rétegek működését."
  },
  {
    "szoveg": "Milyen példával illusztrálható az interfész és implementáció szétválasztásának előnye a hálózati protokollok verziókezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv4 és IPv6 protokollok párhuzamos használata, ahol az alkalmazások ugyanazt a socket interfészt használhatják mindkét verzióhoz, miközben az alsóbb rétegek kezelik a különbségeket.",
      "A HTTP/1.1 és HTTP/2 protokollok, ahol minden alkalmazásnak külön implementációt kell használnia az egyes verziókhoz.",
      "Az FTP protokoll, ahol a kliens és szerver implementációjának mindig pontosan meg kell egyeznie a sikeres kommunikációhoz."
    ],
    "helyes": "Az IPv4 és IPv6 protokollok párhuzamos használata, ahol az alkalmazások ugyanazt a socket interfészt használhatják mindkét verzióhoz, miközben az alsóbb rétegek kezelik a különbségeket."
  },
  {
    "szoveg": "Hogyan hasonlítható össze egy olyan rendszer, ahol az interfész és implementáció szorosan összefonódik, egy olyannal, ahol ezek szét vannak választva a hálózati protokollok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szétválasztott rendszer rugalmasabb és könnyebben karbantartható, míg az összefonódott rendszer potenciálisan gyorsabb lehet, de nehezebben módosítható és kevésbé alkalmazkodóképes.",
      "A szétválasztott rendszer mindig gyorsabb és biztonságosabb, míg az összefonódott rendszer csak egyszerűbb feladatokra alkalmas.",
      "Az összefonódott rendszer rugalmasabb és jobban skálázható, míg a szétválasztott rendszer stabilabb, de nehezebben fejleszthető."
    ],
    "helyes": "A szétválasztott rendszer rugalmasabb és könnyebben karbantartható, míg az összefonódott rendszer potenciálisan gyorsabb lehet, de nehezebben módosítható és kevésbé alkalmazkodóképes."
  },
  {
    "szoveg": "Milyen szempontok alapján hasonlítható össze az interfész és implementáció szétválasztásának hatása a hálózati protokollok fejlesztésére és karbantartására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szétválasztás növeli a fejlesztési rugalmasságot és a visszafelé kompatibilitást, de extra komplexitást adhat a rendszerhez, míg az összefonódás egyszerűbb lehet, de korlátozza a fejlesztési lehetőségeket.",
      "A szétválasztás mindig csökkenti a rendszer teljesítményét, míg az összefonódás garantálja a maximális sebességet minden esetben.",
      "A szétválasztás kizárólag nagy rendszerekre alkalmazható, míg az összefonódás csak kisebb projektekben hasznos."
    ],
    "helyes": "A szétválasztás növeli a fejlesztési rugalmasságot és a visszafelé kompatibilitást, de extra komplexitást adhat a rendszerhez, míg az összefonódás egyszerűbb lehet, de korlátozza a fejlesztési lehetőségeket."
  },
  {
    "szoveg": "Milyen következtetéseket vonhatunk le az interfész és implementáció szétválasztásának jövőbeli szerepéről a hálózati protokollok fejlődésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szétválasztás egyre fontosabbá válik a mikroszolgáltatás-alapú architektúrák és felhőalapú rendszerek terjedésével, elősegítve a gyorsabb innovációt és jobb skálázhatóságot.",
      "A szétválasztás jelentősége csökkenni fog, mivel a jövőben az összes hálózati protokoll egyetlen, univerzális szabványra fog épülni.",
      "Az interfész és implementáció közötti határvonal teljesen el fog tűnni, létrehozva egy új, hibrid megközelítést a protokolltervezésben."
    ],
    "helyes": "A szétválasztás egyre fontosabbá válik a mikroszolgáltatás-alapú architektúrák és felhőalapú rendszerek terjedésével, elősegítve a gyorsabb innovációt és jobb skálázhatóságot."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az interfész és implementáció szétválasztásának elve a jövőbeli hálózati protokollok tervezését és bevezetését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi új, hatékonyabb protokollok fokozatos bevezetését a meglévő alkalmazások jelentős módosítása nélkül, elősegítve a folyamatos innovációt és a visszafelé kompatibilitást.",
      "Megszünteti az új protokollok fejlesztésének szükségességét, mivel a meglévő interfészek minden jövőbeli igényt kielégítenek majd.",
      "Korlátozza az innovációt, mert minden új protokollnak szigorúan követnie kell a régi interfészeket."
    ],
    "helyes": "Lehetővé teszi új, hatékonyabb protokollok fokozatos bevezetését a meglévő alkalmazások jelentős módosítása nélkül, elősegítve a folyamatos innovációt és a visszafelé kompatibilitást."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a visszafelé kompatibilitás elvét a számítógépes hálózatok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy új hálózati protokoll vagy rendszer képes együttműködni és kommunikálni a korábbi verziókkal, lehetővé téve a fokozatos technológiai átállást.",
      "A régebbi hálózati protokollok és rendszerek képesek automatikusan frissíteni magukat az újabb verziókra, hogy lépést tartsanak a technológiai fejlődéssel.",
      "A hálózati eszközök csak a saját generációjukkal kompatibilis protokollokat és rendszereket támogatják, ezzel biztosítva a maximális teljesítményt."
    ],
    "helyes": "Egy új hálózati protokoll vagy rendszer képes együttműködni és kommunikálni a korábbi verziókkal, lehetővé téve a fokozatos technológiai átállást."
  },
  {
    "szoveg": "Mit jelent a 'fallback mechanizmus' a visszafelé kompatibilitás megvalósításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy olyan rendszer, amely automatikusan visszaáll egy régebbi, kompatibilis működési módra, ha az újabb funkciók nem működnek.",
      "Egy biztonsági protokoll, amely megakadályozza a régebbi, kevésbé biztonságos verziók használatát a hálózatban.",
      "Egy olyan mechanizmus, amely lehetővé teszi az újabb eszközök számára, hogy teljes mértékben kihasználják a régebbi hálózati infrastruktúrát."
    ],
    "helyes": "Egy olyan rendszer, amely automatikusan visszaáll egy régebbi, kompatibilis működési módra, ha az újabb funkciók nem működnek."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a visszafelé kompatibilitás elvét a hálózati protokollok területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 protokoll képes együttműködni az IPv4-gyel, lehetővé téve a fokozatos átállást az új címzési rendszerre.",
      "Az 5G hálózatok teljes mértékben lecserélik a 4G infrastruktúrát, így biztosítva a maximális teljesítményt.",
      "Az új Wi-Fi routerek csak a legújabb 802.11ax (Wi-Fi 6) szabványt támogatják a hatékonyság növelése érdekében."
    ],
    "helyes": "Az IPv6 protokoll képes együttműködni az IPv4-gyel, lehetővé téve a fokozatos átállást az új címzési rendszerre."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a visszafelé kompatibilitás elvét a vezeték nélküli hálózati technológiák területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az újabb Wi-Fi szabványok (pl. 802.11ac, 802.11ax) visszafelé kompatibilisek a régebbi verziókkal (pl. 802.11n, 802.11g).",
      "Az 5G mobiltelefonok kizárólag 5G hálózatokon működnek, nem képesek csatlakozni 4G vagy 3G hálózatokhoz.",
      "Az új Bluetooth 5.0 eszközök csak egymással képesek kommunikálni, a régebbi Bluetooth verziókkal nem kompatibilisek."
    ],
    "helyes": "Az újabb Wi-Fi szabványok (pl. 802.11ac, 802.11ax) visszafelé kompatibilisek a régebbi verziókkal (pl. 802.11n, 802.11g)."
  },
  {
    "szoveg": "Milyen következményekre számíthatunk, ha egy új hálózati protokoll nem tartja be a visszafelé kompatibilitás elvét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A régebbi eszközök és rendszerek nem tudnak kommunikálni az új protokollt használó hálózatokkal, ami jelentős infrastrukturális és költségbeli problémákat okozhat.",
      "Az új protokoll gyorsabban és hatékonyabban terjed el, mivel minden felhasználó kénytelen azonnal frissíteni az eszközeit.",
      "A hálózati biztonság jelentősen javul, mivel csak a legújabb, legbiztonságosabb protokollok maradnak használatban."
    ],
    "helyes": "A régebbi eszközök és rendszerek nem tudnak kommunikálni az új protokollt használó hálózatokkal, ami jelentős infrastrukturális és költségbeli problémákat okozhat."
  },
  {
    "szoveg": "Hogyan befolyásolhatja a visszafelé kompatibilitás elve egy új hálózati technológia teljesítményét és funkcionalitását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az új technológia teljes potenciálja korlátozódhat, mivel figyelembe kell vennie a régebbi rendszerek korlátait a kompatibilitás érdekében.",
      "A visszafelé kompatibilitás mindig javítja az új technológia teljesítményét, mivel ötvözi a régi és új rendszerek legjobb tulajdonságait.",
      "Nincs hatással a teljesítményre vagy funkcionalitásra, csak a kommunikációs protokollokat érinti."
    ],
    "helyes": "Az új technológia teljes potenciálja korlátozódhat, mivel figyelembe kell vennie a régebbi rendszerek korlátait a kompatibilitás érdekében."
  },
  {
    "szoveg": "Hogyan viszonyul a TCP/IP modell az OSI modellhez a rétegek számát és gyakorlati alkalmazhatóságát tekintve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP/IP modell 4 réteget tartalmaz és gyakorlatiasabb megközelítést alkalmaz, közvetlenül az internetre összpontosítva.",
      "A TCP/IP modell 7 réteget tartalmaz, és elméleti megközelítést alkalmaz, nem kifejezetten az internetre fókuszálva.",
      "A TCP/IP modell és az OSI modell egyaránt 7 réteget tartalmaz, de a TCP/IP modell kizárólag vezetékes hálózatokra alkalmazható."
    ],
    "helyes": "A TCP/IP modell 4 réteget tartalmaz és gyakorlatiasabb megközelítést alkalmaz, közvetlenül az internetre összpontosítva."
  },
  {
    "szoveg": "Miben különbözik az SDN (Software-Defined Networking) megközelítés az OSI modelltől a hálózat vezérlése szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN elválasztja a hálózat vezérlési síkját az adatsíktól, központosított intelligenciát biztosítva, míg az OSI modell nem foglalkozik explicit módon a vezérlés centralizálásával.",
      "Az SDN és az OSI modell egyaránt 7 réteget definiál, de az SDN kizárólag szoftveres megoldásokat alkalmaz minden rétegben.",
      "Az SDN csak a fizikai és adatkapcsolati rétegeket definiálja újra, míg az OSI modell többi rétege változatlan marad."
    ],
    "helyes": "Az SDN elválasztja a hálózat vezérlési síkját az adatsíktól, központosított intelligenciát biztosítva, míg az OSI modell nem foglalkozik explicit módon a vezérlés centralizálásával."
  },
  {
    "szoveg": "Mit jelent a 'network slicing' koncepció az 5G hálózati architektúrában, és hogyan viszonyul ez az OSI modell megközelítéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'network slicing' lehetővé teszi több virtuális hálózat működtetését egyetlen fizikai infrastruktúrán, ami rugalmasabb erőforrás-kezelést biztosít, mint az OSI modell statikus rétegei.",
      "A 'network slicing' az OSI modell rétegeinek további felosztását jelenti, ami még részletesebb kommunikációs protokollokat eredményez.",
      "A 'network slicing' az OSI modell fizikai rétegének optimalizálását jelenti az 5G hálózatokban, ami nagyobb adatátviteli sebességet tesz lehetővé."
    ],
    "helyes": "A 'network slicing' lehetővé teszi több virtuális hálózat működtetését egyetlen fizikai infrastruktúrán, ami rugalmasabb erőforrás-kezelést biztosít, mint az OSI modell statikus rétegei."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az IEEE 802 modell megközelítését az alacsonyabb szintű hálózati folyamatok szempontjából az OSI modellhez viszonyítva?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IEEE 802 modell részletesebben tárgyalja az alacsonyabb szintű folyamatokat, különös tekintettel az Adatkapcsolati réteg felosztására LLC és MAC alrétegekre.",
      "Az IEEE 802 modell egyszerűsíti az alacsonyabb szintű folyamatokat, összevonva az OSI modell Fizikai és Adatkapcsolati rétegeit.",
      "Az IEEE 802 modell kizárólag a Fizikai réteggel foglalkozik, figyelmen kívül hagyva az OSI modell magasabb rétegeit."
    ],
    "helyes": "Az IEEE 802 modell részletesebben tárgyalja az alacsonyabb szintű folyamatokat, különös tekintettel az Adatkapcsolati réteg felosztására LLC és MAC alrétegekre."
  },
  {
    "szoveg": "Melyik hálózati modell vagy megközelítés a legalkalmasabb egy nagy, nemzetközi vállalat komplex, többféle technológiát integráló hálózati infrastruktúrájának tervezéséhez és menedzseléséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN (Software-Defined Networking) megközelítés kombinálva a TCP/IP modellel, kiegészítve az 5G architektúra egyes elemeivel.",
      "Kizárólag az OSI modell, annak átfogó és részletes jellege miatt.",
      "Az IEEE 802 modell, mivel ez kezeli legrészletesebben az alacsony szintű hálózati folyamatokat."
    ],
    "helyes": "Az SDN (Software-Defined Networking) megközelítés kombinálva a TCP/IP modellel, kiegészítve az 5G architektúra egyes elemeivel."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhetjük meg az OSI modell relevanciáját a modern hálózati technológiák és architektúrák fényében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az OSI modell továbbra is fontos referenciapont, de a gyakorlati alkalmazásokban gyakran az alternatív modellek vagy ezek kombinációi bizonyulnak hatékonyabbnak.",
      "Az OSI modell teljesen elavult, és már semmilyen relevanciával nem bír a modern hálózati technológiák területén.",
      "Az OSI modell változatlanul a legalkalmasabb minden modern hálózati technológia és architektúra leírására és implementálására."
    ],
    "helyes": "Az OSI modell továbbra is fontos referenciapont, de a gyakorlati alkalmazásokban gyakran az alternatív modellek vagy ezek kombinációi bizonyulnak hatékonyabbnak."
  },
  {
    "szoveg": "Hogyan értelmezi a Kerckhoffs-elv a kriptográfiai rendszerek biztonságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonságnak kizárólag a kulcs titkosságán kell alapulnia, nem a rendszer titkosságán.",
      "A biztonságnak mind a kulcs, mind a rendszer titkosságán kell alapulnia.",
      "A biztonságnak kizárólag a rendszer titkosságán kell alapulnia, a kulcs lehet nyilvános."
    ],
    "helyes": "A biztonságnak kizárólag a kulcs titkosságán kell alapulnia, nem a rendszer titkosságán."
  },
  {
    "szoveg": "Mit jelent a Shannon-elv szerinti 'tökéletes titkosság' koncepciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A titkosított üzenet nem ad semmilyen információt a nyílt szövegről a kulcs ismerete nélkül.",
      "A titkosított üzenet csak részleges információt ad a nyílt szövegről.",
      "A titkosított üzenet teljes mértékben feltörhetetlen, függetlenül a kulcs hosszától."
    ],
    "helyes": "A titkosított üzenet nem ad semmilyen információt a nyílt szövegről a kulcs ismerete nélkül."
  },
  {
    "szoveg": "Hogyan hasonlítható össze a Kerckhoffs-elv és a Shannon-elv a gyakorlati alkalmazhatóság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Kerckhoffs-elv gyakorlatiasabb és szélesebb körben alkalmazható, míg a Shannon-elv inkább elméleti és nehezebben megvalósítható.",
      "Mindkét elv egyformán könnyen alkalmazható a mindennapi kriptográfiai rendszerekben.",
      "A Shannon-elv gyakorlatiasabb és szélesebb körben alkalmazható, míg a Kerckhoffs-elv inkább elméleti."
    ],
    "helyes": "A Kerckhoffs-elv gyakorlatiasabb és szélesebb körben alkalmazható, míg a Shannon-elv inkább elméleti és nehezebben megvalósítható."
  },
  {
    "szoveg": "Milyen szempontból különbözik a Kerckhoffs-elv és a Shannon-elv a biztonság megközelítésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Kerckhoffs-elv a gyakorlati megvalósíthatóságra összpontosít, míg a Shannon-elv az elméleti tökéletességre.",
      "A Kerckhoffs-elv az elméleti tökéletességre összpontosít, míg a Shannon-elv a gyakorlati megvalósíthatóságra.",
      "Mindkét elv egyformán a gyakorlati megvalósíthatóságra és az elméleti tökéletességre összpontosít."
    ],
    "helyes": "A Kerckhoffs-elv a gyakorlati megvalósíthatóságra összpontosít, míg a Shannon-elv az elméleti tökéletességre."
  },
  {
    "szoveg": "Milyen példa illusztrálja legjobban a Kerckhoffs-elv alkalmazását a modern kriptográfiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AES (Advanced Encryption Standard) algoritmus, amely nyilvános, de titkos kulcsokkal működik.",
      "Egy titkos katonai kódolási rendszer, amelynek mind az algoritmusa, mind a kulcsa titkos.",
      "Egy egyszer használatos jegyzettömb (one-time pad) rendszer, ahol a kulcs olyan hosszú, mint az üzenet."
    ],
    "helyes": "Az AES (Advanced Encryption Standard) algoritmus, amely nyilvános, de titkos kulcsokkal működik."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a Shannon-elv szerinti tökéletes titkosságot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az egyszer használatos jegyzettömb (one-time pad) titkosítás, ahol minden üzenethez egyedi, véletlenszerű kulcsot használnak.",
      "Az RSA titkosítás, amely nyilvános kulcsú kriptográfiát használ.",
      "A Caesar-rejtjel, ahol az ábécé betűit egy fix számmal eltolják."
    ],
    "helyes": "Az egyszer használatos jegyzettömb (one-time pad) titkosítás, ahol minden üzenethez egyedi, véletlenszerű kulcsot használnak."
  },
  {
    "szoveg": "Hogyan ítélhető meg a Kerckhoffs-elv jelentősége a modern kriptográfiai rendszerek fejlesztésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rendkívül fontos, mert lehetővé teszi a nyílt forráskódú biztonsági megoldások fejlesztését és ellenőrzését.",
      "Kevésbé fontos, mert a titkos algoritmusok biztonságosabbak.",
      "Nem releváns, mert a modern rendszerek túl komplexek ahhoz, hogy nyilvánosak legyenek."
    ],
    "helyes": "Rendkívül fontos, mert lehetővé teszi a nyílt forráskódú biztonsági megoldások fejlesztését és ellenőrzését."
  },
  {
    "szoveg": "Milyen ítélet alkotható a Shannon-elv gyakorlati alkalmazhatóságáról a mindennapi kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Korlátozottan alkalmazható, mert a tökéletes titkosság követelményei nehezen teljesíthetők nagy mennyiségű adatnál.",
      "Széles körben alkalmazható, mert egyszerű megvalósítani bármilyen kommunikációs rendszerben.",
      "Teljesen alkalmazhatatlan, mert túl bonyolult a modern technológiák számára."
    ],
    "helyes": "Korlátozottan alkalmazható, mert a tökéletes titkosság követelményei nehezen teljesíthetők nagy mennyiségű adatnál."
  },
  {
    "szoveg": "Hogyan értelmezhető a CIA triád 'Bizalmasság' eleme a hálózati biztonság kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az információhoz csak az arra jogosult személyek férhetnek hozzá, védve az adatokat a jogosulatlan hozzáféréstől, kiszivárgástól vagy lopástól.",
      "Az adatok mindig nyilvánosan elérhetőek, hogy bárki hozzáférhessen az információkhoz.",
      "A rendszer képes gyorsan helyreállni a meghibásodások után, biztosítva a folyamatos működést."
    ],
    "helyes": "Az információhoz csak az arra jogosult személyek férhetnek hozzá, védve az adatokat a jogosulatlan hozzáféréstől, kiszivárgástól vagy lopástól."
  },
  {
    "szoveg": "Mit jelent a CIA triád 'Integritás' eleme a hálózati biztonság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatok pontosak, teljesek és megbízhatóak maradnak teljes életciklusuk során, és nem módosíthatják vagy törölhetik őket illetéktelen személyek.",
      "A rendszer képes gyorsan feldolgozni nagy mennyiségű adatot anélkül, hogy lelassulna.",
      "Az adatok titkosítva vannak, így senki sem férhet hozzájuk engedély nélkül."
    ],
    "helyes": "Az adatok pontosak, teljesek és megbízhatóak maradnak teljes életciklusuk során, és nem módosíthatják vagy törölhetik őket illetéktelen személyek."
  },
  {
    "szoveg": "Melyik elem tartozik a CIA triádhoz az alábbiak közül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rendelkezésre állás",
      "Rugalmasság",
      "Redundancia"
    ],
    "helyes": "Rendelkezésre állás"
  },
  {
    "szoveg": "Melyik nem tartozik a CIA triád elemei közé?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Skálázhatóság",
      "Bizalmasság",
      "Integritás"
    ],
    "helyes": "Skálázhatóság"
  },
  {
    "szoveg": "Milyen következménye lehet a túl szigorú bizalmassági intézkedéseknek a CIA triád szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Csökkentheti a rendelkezésre állást.",
      "Növelheti az adatok integritását.",
      "Javíthatja a rendszer skálázhatóságát."
    ],
    "helyes": "Csökkentheti a rendelkezésre állást."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az integritás fenntartása a CIA triád más elemeit?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lassíthatja a rendszereket, ami hatással lehet a rendelkezésre állásra.",
      "Növelheti a bizalmasságot anélkül, hogy más elemekre hatna.",
      "Javíthatja a rendelkezésre állást a rendszer teljesítményének növelésével."
    ],
    "helyes": "Lassíthatja a rendszereket, ami hatással lehet a rendelkezésre állásra."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a 'Bizalmasság' elvét a CIA triádban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalat titkosítja az e-maileket, hogy megakadályozza a bizalmas információk illetéktelen kezekbe kerülését.",
      "Egy bank tranzakciós rendszere ellenőrző összegeket használ az adatok pontosságának biztosítására.",
      "Egy e-kereskedelmi weboldal redundáns szervereket alkalmaz a folyamatos elérhetőség érdekében."
    ],
    "helyes": "Egy vállalat titkosítja az e-maileket, hogy megakadályozza a bizalmas információk illetéktelen kezekbe kerülését."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a 'Rendelkezésre állás' elvét a CIA triádban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy e-kereskedelmi weboldal redundáns szervereket és terheléselosztást alkalmaz, hogy biztosítsa a folyamatos elérhetőséget még csúcsidőszakokban is.",
      "Egy vállalat kétfaktoros hitelesítést használ a felhasználói fiókok védelmére.",
      "Egy bank digitális aláírásokat használ a tranzakciók hitelességének igazolására."
    ],
    "helyes": "Egy e-kereskedelmi weboldal redundáns szervereket és terheléselosztást alkalmaz, hogy biztosítsa a folyamatos elérhetőséget még csúcsidőszakokban is."
  },
  {
    "szoveg": "Hogyan értelmezhető a hálózati biztonság 'bizalmasság' célkitűzése a modern informatikai környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A bizalmasság azt jelenti, hogy az információkhoz csak az arra jogosult személyek férhetnek hozzá, megakadályozva az illetéktelen hozzáférést és adatszivárgást.",
      "A bizalmasság azt jelenti, hogy minden felhasználó szabadon hozzáférhet bármilyen információhoz a hálózaton belül.",
      "A bizalmasság kizárólag a titkosított adatátvitelre vonatkozik, és nem érinti a tárolt adatok védelmét."
    ],
    "helyes": "A bizalmasság azt jelenti, hogy az információkhoz csak az arra jogosult személyek férhetnek hozzá, megakadályozva az illetéktelen hozzáférést és adatszivárgást."
  },
  {
    "szoveg": "Miként értelmezhető a 'rendelkezésre állás' mint a hálózati biztonság egyik fő célkitűzése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendelkezésre állás biztosítja, hogy a jogosult felhasználók folyamatosan hozzáférjenek a hálózati erőforrásokhoz és szolgáltatásokhoz, minimalizálva a leállásokat és zavarokat.",
      "A rendelkezésre állás azt jelenti, hogy a hálózat csak munkaidőben érhető el a felhasználók számára.",
      "A rendelkezésre állás kizárólag a szerverek fizikai biztonságára vonatkozik, és nem érinti a szolgáltatások elérhetőségét."
    ],
    "helyes": "A rendelkezésre állás biztosítja, hogy a jogosult felhasználók folyamatosan hozzáférjenek a hálózati erőforrásokhoz és szolgáltatásokhoz, minimalizálva a leállásokat és zavarokat."
  },
  {
    "szoveg": "Hogyan foglalható össze a hálózati biztonság jelentősége a modern üzleti környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati biztonság kritikus az üzleti folytonosság, adatvédelem, jogszabályi megfelelőség és a vállalati hírnév védelme szempontjából, miközben védi a szervezet digitális eszközeit a növekvő számú és kifinomultságú kiberfenyegetésekkel szemben.",
      "A hálózati biztonság kizárólag a hackerek elleni védelemre összpontosít, és nincs hatása az üzleti folyamatokra vagy a vállalati hírnévre.",
      "A hálózati biztonság csak a nagy multinacionális vállalatok számára fontos, a kis- és középvállalkozásoknak nem kell foglalkozniuk vele."
    ],
    "helyes": "A hálózati biztonság kritikus az üzleti folytonosság, adatvédelem, jogszabályi megfelelőség és a vállalati hírnév védelme szempontjából, miközben védi a szervezet digitális eszközeit a növekvő számú és kifinomultságú kiberfenyegetésekkel szemben."
  },
  {
    "szoveg": "Hogyan foglalható össze a hálózati biztonság öt fő célkitűzése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati biztonság öt fő célkitűzése a bizalmasság, integritás, rendelkezésre állás, hitelesség és elszámoltathatóság biztosítása, amelyek együttesen védik az adatokat és a hálózati erőforrásokat.",
      "A hálózati biztonság fő céljai a sebesség növelése, a költségek csökkentése és a felhasználói élmény javítása, függetlenül a biztonsági kockázatoktól.",
      "A hálózati biztonság egyetlen célja a hackerek távoltartása, más szempontok nem relevánsak."
    ],
    "helyes": "A hálózati biztonság öt fő célkitűzése a bizalmasság, integritás, rendelkezésre állás, hitelesség és elszámoltathatóság biztosítása, amelyek együttesen védik az adatokat és a hálózati erőforrásokat."
  },
  {
    "szoveg": "Milyen példával illusztrálható a többfaktoros hitelesítés szerepe a hálózati biztonságban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy banki alkalmazás, ahol a felhasználónak a jelszaván kívül egy, a mobiltelefonjára küldött egyszer használatos kódot is meg kell adnia a bejelentkezéshez, így két független faktort használva növeli a biztonságot.",
      "Egy weboldal, ahol a felhasználónak csak egy egyszerű jelszót kell megadnia a bejelentkezéshez, függetlenül a fiók fontosságától.",
      "Egy vállalati rendszer, ahol minden alkalmazott ugyanazt az általános jelszót használja a belépéshez, a könnyű megjegyezhetőség érdekében."
    ],
    "helyes": "Egy banki alkalmazás, ahol a felhasználónak a jelszaván kívül egy, a mobiltelefonjára küldött egyszer használatos kódot is meg kell adnia a bejelentkezéshez, így két független faktort használva növeli a biztonságot."
  },
  {
    "szoveg": "Hogyan illusztrálható a titkosítási protokollok (pl. SSL/TLS) szerepe a hálózati biztonságban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy online vásárlás során, amikor a böngésző zöld lakat ikont mutat, jelezve, hogy a kommunikáció titkosított, így a bankkártya adatok és személyes információk védve vannak a lehallgatástól az interneten keresztül történő átvitel során.",
      "Egy nyílt Wi-Fi hálózaton történő böngészés során, ahol minden adat titkosítás nélkül kerül továbbításra, lehetővé téve bárki számára az adatok olvasását.",
      "Egy vállalati e-mail rendszerben, ahol minden üzenet nyílt szövegként kerül tárolásra és továbbításra a könnyebb kezelhetőség érdekében."
    ],
    "helyes": "Egy online vásárlás során, amikor a böngésző zöld lakat ikont mutat, jelezve, hogy a kommunikáció titkosított, így a bankkártya adatok és személyes információk védve vannak a lehallgatástól az interneten keresztül történő átvitel során."
  },
  {
    "szoveg": "Hogyan ítélhető meg a hálózati biztonság jelentősége egy multinacionális vállalat szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati biztonság kritikus fontosságú, mivel védi a vállalat érzékeny adatait, biztosítja az üzleti folytonosságot, segíti a jogszabályi megfelelést, és hozzájárul a vállalati hírnév megőrzéséhez, ami elengedhetetlen a globális versenyben való sikeres részvételhez.",
      "A hálózati biztonság másodlagos jelentőségű, mivel a vállalat mérete és erőforrásai elegendőek bármilyen biztonsági incidens következményeinek kezelésére.",
      "A hálózati biztonság csak a IT osztály felelőssége, és nincs jelentős hatása a vállalat általános működésére vagy stratégiájára."
    ],
    "helyes": "A hálózati biztonság kritikus fontosságú, mivel védi a vállalat érzékeny adatait, biztosítja az üzleti folytonosságot, segíti a jogszabályi megfelelést, és hozzájárul a vállalati hírnév megőrzéséhez, ami elengedhetetlen a globális versenyben való sikeres részvételhez."
  },
  {
    "szoveg": "Hogyan ítélhető meg a hálózati biztonság jelentősége az egyéni felhasználók szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati biztonság kritikus fontosságú az egyéni felhasználók számára, mivel védi személyes adataikat, pénzügyi információikat és online identitásukat, hozzájárulva a digitális életterük biztonságához és a magánélet védelméhez.",
      "A hálózati biztonság csak a vállalatok és szervezetek számára fontos, az egyéni felhasználóknak nem kell foglalkozniuk vele.",
      "Az egyéni felhasználók számára a hálózati biztonság csak akkor releváns, ha online bankolást vagy e-kereskedelmet használnak, más online tevékenységeknél nincs jelentősége."
    ],
    "helyes": "A hálózati biztonság kritikus fontosságú az egyéni felhasználók számára, mivel védi személyes adataikat, pénzügyi információikat és online identitásukat, hozzájárulva a digitális életterük biztonságához és a magánélet védelméhez."
  },
  {
    "szoveg": "Hogyan értelmezhető a hitelesítés (autentikáció) folyamata a számítógépes hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hitelesítés az a folyamat, amely során ellenőrizzük egy felhasználó vagy entitás identitását, megbizonyosodva arról, hogy valóban az, akinek állítja magát.",
      "A hitelesítés az a folyamat, amely során meghatározzuk, hogy egy felhasználó milyen műveleteket végezhet a rendszerben.",
      "A hitelesítés az a folyamat, amely során titkosítjuk a felhasználó adatait a hálózati kommunikáció során."
    ],
    "helyes": "A hitelesítés az a folyamat, amely során ellenőrizzük egy felhasználó vagy entitás identitását, megbizonyosodva arról, hogy valóban az, akinek állítja magát."
  },
  {
    "szoveg": "Mit jelent az autorizáció (jogosultságkezelés) a hálózati biztonság kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az autorizáció az a folyamat, amely meghatározza, hogy egy hitelesített felhasználónak milyen jogosultságai vannak a rendszerben, szabályozva a hozzáférést és a végezhető műveleteket.",
      "Az autorizáció az a folyamat, amely során a felhasználó bizonyítja a személyazonosságát a rendszernek.",
      "Az autorizáció az a folyamat, amely során a rendszer titkosítja a felhasználó adatait a biztonságos kommunikáció érdekében."
    ],
    "helyes": "Az autorizáció az a folyamat, amely meghatározza, hogy egy hitelesített felhasználónak milyen jogosultságai vannak a rendszerben, szabályozva a hozzáférést és a végezhető műveleteket."
  },
  {
    "szoveg": "Milyen fő különbségek vannak a hitelesítés és az autorizáció között a hálózati biztonság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hitelesítés az identitás ellenőrzésére fókuszál és megelőzi az autorizációt, míg az autorizáció a jogosultságok meghatározására összpontosít és a hitelesítés után következik.",
      "A hitelesítés a jogosultságok meghatározására szolgál, míg az autorizáció az identitás ellenőrzésére fókuszál.",
      "A hitelesítés és az autorizáció ugyanazt a folyamatot jelöli, csak különböző kontextusban használjuk őket."
    ],
    "helyes": "A hitelesítés az identitás ellenőrzésére fókuszál és megelőzi az autorizációt, míg az autorizáció a jogosultságok meghatározására összpontosít és a hitelesítés után következik."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz a hitelesítés és az autorizáció változékonysága a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hitelesítési adatok ritkábban változnak (pl. jelszócsere), míg a jogosultságok gyakrabban módosulhatnak (pl. előléptetés esetén).",
      "A hitelesítési adatok gyakrabban változnak, míg a jogosultságok ritkábban módosulnak.",
      "A hitelesítési adatok és a jogosultságok ugyanolyan gyakorisággal változnak."
    ],
    "helyes": "A hitelesítési adatok ritkábban változnak (pl. jelszócsere), míg a jogosultságok gyakrabban módosulhatnak (pl. előléptetés esetén)."
  },
  {
    "szoveg": "Melyik kategóriába tartozik az a folyamat, amikor egy rendszer ellenőrzi egy felhasználó jogosultságát egy adott fájl módosítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Autorizáció",
      "Hitelesítés",
      "Titkosítás"
    ],
    "helyes": "Autorizáció"
  },
  {
    "szoveg": "Melyik biztonsági folyamat kategóriájába tartozik az ujjlenyomat-olvasó használata egy okostelefonon?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hitelesítés",
      "Autorizáció",
      "Titkosítás"
    ],
    "helyes": "Hitelesítés"
  },
  {
    "szoveg": "Milyen következménye lehet a gyenge hitelesítésnek egy hálózati rendszerben, még ha az autorizáció megfelelő is?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer sebezhetővé válik, mert illetéktelen személyek könnyebben hozzáférhetnek a rendszerhez.",
      "A rendszer lassabban működik, mert több erőforrást használ a hitelesítésre.",
      "A felhasználók több jogosultságot kapnak, mint amennyi szükséges lenne."
    ],
    "helyes": "A rendszer sebezhetővé válik, mert illetéktelen személyek könnyebben hozzáférhetnek a rendszerhez."
  },
  {
    "szoveg": "Milyen jövőbeli trend várható a hitelesítési és autorizációs rendszerek fejlődésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyre kifinomultabb hitelesítési módszerek (pl. AI alapú viselkedéselemzés) és dinamikusabb autorizációs rendszerek (pl. kontextus-alapú jogosultságkezelés elterjedése várható.",
      "Visszatérés az egyszerűbb, jelszó alapú hitelesítési módszerekhez és statikus jogosultságkezeléshez.",
      "A hitelesítés és autorizáció teljes elhagyása a felhasználói élmény javítása érdekében."
    ],
    "helyes": "Egyre kifinomultabb hitelesítési módszerek (pl. AI alapú viselkedéselemzés) és dinamikusabb autorizációs rendszerek (pl. kontextus-alapú jogosultságkezelés elterjedése várható."
  },
  {
    "szoveg": "Hogyan működik az aszimmetrikus titkosítás üzenetküldés során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A küldő a címzett nyilvános kulcsával titkosítja az üzenetet, amit csak a címzett tud visszafejteni a saját privát kulcsával.",
      "A küldő a saját privát kulcsával titkosítja az üzenetet, amit a címzett a küldő nyilvános kulcsával fejt vissza.",
      "Mind a küldő, mind a címzett ugyanazt a titkos kulcsot használja a titkosításhoz és a visszafejtéshez."
    ],
    "helyes": "A küldő a címzett nyilvános kulcsával titkosítja az üzenetet, amit csak a címzett tud visszafejteni a saját privát kulcsával."
  },
  {
    "szoveg": "Miért nevezik az aszimmetrikus titkosítást 'nyilvános kulcsú titkosításnak' is?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert az egyik kulcs (a nyilvános kulcs) szabadon megosztható és használható titkosításra, míg a másik (a privát kulcs) titkos marad.",
      "Mert minden kulcs nyilvánosan elérhető bárki számára.",
      "Mert csak kormányzati szervek használhatják nyilvánosan."
    ],
    "helyes": "Mert az egyik kulcs (a nyilvános kulcs) szabadon megosztható és használható titkosításra, míg a másik (a privát kulcs) titkos marad."
  },
  {
    "szoveg": "Mi az aszimmetrikus titkosítás két kulcsának neve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nyilvános kulcs és privát kulcs",
      "Titkosító kulcs és visszafejtő kulcs",
      "Elsődleges kulcs és másodlagos kulcs"
    ],
    "helyes": "Nyilvános kulcs és privát kulcs"
  },
  {
    "szoveg": "Melyik matematikai probléma NEM szolgál alapul az aszimmetrikus titkosítási algoritmusokhoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fibonacci-sorozat generálása",
      "Prímszámok szorzatának faktorizálása",
      "Diszkrét logaritmus probléma elliptikus görbéken"
    ],
    "helyes": "Fibonacci-sorozat generálása"
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le az aszimmetrikus titkosítás működéséből a kulcsok kezelésére vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A privát kulcsot rendkívül biztonságosan kell tárolni, míg a nyilvános kulcs szabadon terjeszthető.",
      "Mindkét kulcsot egyformán titkosan kell kezelni a biztonság érdekében.",
      "A kulcsokat rendszeresen cserélni kell a biztonság fenntartása érdekében."
    ],
    "helyes": "A privát kulcsot rendkívül biztonságosan kell tárolni, míg a nyilvános kulcs szabadon terjeszthető."
  },
  {
    "szoveg": "Milyen következménye lenne annak, ha egy támadó hozzáférne valakinek a privát kulcsához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A támadó képes lenne visszafejteni az adott személynek küldött összes titkosított üzenetet és hamisítani az ő digitális aláírását.",
      "A támadó csak az új üzeneteket tudná elolvasni, a régebbieket nem.",
      "A támadó csak a digitális aláírásokat tudná hamisítani, de az üzeneteket nem tudná visszafejteni."
    ],
    "helyes": "A támadó képes lenne visszafejteni az adott személynek küldött összes titkosított üzenetet és hamisítani az ő digitális aláírását."
  },
  {
    "szoveg": "Az alábbiak közül melyik tartozik az aszimmetrikus titkosítási módszerek közé?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "RSA (Rivest-Shamir-Adleman) algoritmus",
      "AES (Advanced Encryption Standard)",
      "DES (Data Encryption Standard)"
    ],
    "helyes": "RSA (Rivest-Shamir-Adleman) algoritmus"
  },
  {
    "szoveg": "Az alábbiak közül melyik NEM jellemző az aszimmetrikus titkosítási módszerekre?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Gyorsabb működés, mint a szimmetrikus titkosítási módszereké",
      "Két különböző kulcs használata (nyilvános és privát)",
      "Alkalmazhatóság digitális aláírások létrehozására"
    ],
    "helyes": "Gyorsabb működés, mint a szimmetrikus titkosítási módszereké"
  },
  {
    "szoveg": "Hogyan működik a szimmetrikus titkosítás alapvetően?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ugyanazt a kulcsot használja mind a titkosításhoz, mind a visszafejtéshez, egy matematikai algoritmus segítségével keverve össze az üzenetet és a kulcsot.",
      "Két különböző kulcsot használ, egyet a titkosításhoz és egy másikat a visszafejtéshez, így biztosítva a maximális biztonságot.",
      "Nem használ kulcsot, hanem egy bonyolult matematikai algoritmust alkalmaz, amely önmagában biztosítja az üzenet titkosságát."
    ],
    "helyes": "Ugyanazt a kulcsot használja mind a titkosításhoz, mind a visszafejtéshez, egy matematikai algoritmus segítségével keverve össze az üzenetet és a kulcsot."
  },
  {
    "szoveg": "Mi a szimmetrikus titkosítás egyik fő előnye az aszimmetrikus titkosítással szemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Gyorsabb feldolgozás és hatékonyabb nagy adatmennyiségek esetén.",
      "Biztonságosabb kulcscsere nyílt hálózatokon keresztül.",
      "Kevesebb számítási kapacitást igényel a kulcsok generálása során."
    ],
    "helyes": "Gyorsabb feldolgozás és hatékonyabb nagy adatmennyiségek esetén."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a szimmetrikus titkosítás működését a mindennapi életben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy lakás, ahol ugyanazzal a kulccsal lehet kinyitni és bezárni az ajtót.",
      "Egy bank széfje, ahol az ügyfélnek és a banknak is külön kulcsa van a nyitáshoz.",
      "Egy digitális aláírás, ahol a dokumentum hitelességét egy nyilvános kulccsal lehet ellenőrizni."
    ],
    "helyes": "Egy lakás, ahol ugyanazzal a kulccsal lehet kinyitni és bezárni az ajtót."
  },
  {
    "szoveg": "Melyik szimmetrikus titkosítási algoritmus használata jellemző a modern internetes kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "AES (Advanced Encryption Standard)",
      "ROT13",
      "Enigma"
    ],
    "helyes": "AES (Advanced Encryption Standard)"
  },
  {
    "szoveg": "Miben különbözik a szimmetrikus titkosítás az aszimmetrikus titkosítástól a kulcshasználat szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szimmetrikus titkosítás egy kulcsot használ titkosításra és visszafejtésre, míg az aszimmetrikus két különböző kulcsot alkalmaz.",
      "A szimmetrikus titkosítás két kulcsot használ, az aszimmetrikus pedig hármat a nagyobb biztonság érdekében.",
      "A szimmetrikus titkosítás nem használ kulcsot, az aszimmetrikus viszont egy kulcspárt alkalmaz."
    ],
    "helyes": "A szimmetrikus titkosítás egy kulcsot használ titkosításra és visszafejtésre, míg az aszimmetrikus két különböző kulcsot alkalmaz."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz a szimmetrikus és az aszimmetrikus titkosítás a feldolgozási sebesség tekintetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szimmetrikus titkosítás általában gyorsabb, mint az aszimmetrikus.",
      "Az aszimmetrikus titkosítás mindig gyorsabb, mint a szimmetrikus.",
      "A két módszer feldolgozási sebessége azonos, nincs köztük különbség."
    ],
    "helyes": "A szimmetrikus titkosítás általában gyorsabb, mint az aszimmetrikus."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a digitális aláírás szerepét a modern kriptográfiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A digitális aláírás egy matematikai séma, amely biztosítja az üzenet integritását, a küldő hitelesítését és a letagadhatatlanságot a számítógépes hálózatokban.",
      "A digitális aláírás egy titkosítási módszer, amely kizárólag az üzenet tartalmának elrejtésére szolgál.",
      "A digitális aláírás egy olyan technika, amely csak a küldő személyazonosságának igazolására használható."
    ],
    "helyes": "A digitális aláírás egy matematikai séma, amely biztosítja az üzenet integritását, a küldő hitelesítését és a letagadhatatlanságot a számítógépes hálózatokban."
  },
  {
    "szoveg": "Milyen szerepet töltenek be a hash függvények a digitális aláírás folyamatában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hash függvények az eredeti üzenet 'ujjlenyomatát' állítják elő, amit aztán aláírnak a privát kulccsal, gyorsítva és biztonságosabbá téve a folyamatot.",
      "A hash függvények titkosítják az üzenetet, hogy csak a címzett tudja elolvasni.",
      "A hash függvények kizárólag az üzenet méretének csökkentésére szolgálnak a hálózati forgalom optimalizálása érdekében."
    ],
    "helyes": "A hash függvények az eredeti üzenet 'ujjlenyomatát' állítják elő, amit aztán aláírnak a privát kulccsal, gyorsítva és biztonságosabbá téve a folyamatot."
  },
  {
    "szoveg": "Hogyan hasonlítható össze a digitális aláírás a hagyományos, kézírásos aláírással?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A digitális aláírás nehezebben hamisítható és automatikusan ellenőrizhető, míg a kézírásos aláírás könnyebben hamisítható és manuális ellenőrzést igényel.",
      "A digitális aláírás és a kézírásos aláírás egyformán biztonságos, csak a felhasználási környezetük különbözik.",
      "A kézírásos aláírás biztonságosabb, mert fizikailag létezik, míg a digitális aláírás csak virtuális és könnyen másolható."
    ],
    "helyes": "A digitális aláírás nehezebben hamisítható és automatikusan ellenőrizhető, míg a kézírásos aláírás könnyebben hamisítható és manuális ellenőrzést igényel."
  },
  {
    "szoveg": "Milyen szempontok alapján hasonlíthatjuk össze a különböző hash algoritmusokat, például az MD5-öt és az SHA-3-at?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az összehasonlítás fő szempontjai a biztonság, az ütközésmentesség és a feldolgozási sebesség, ahol az SHA-3 biztonságosabb és ütközésmentesebb, mint az elavult MD"
    ],
    "helyes": "Az összehasonlítás fő szempontjai a biztonság, az ütközésmentesség és a feldolgozási sebesség, ahol az SHA-3 biztonságosabb és ütközésmentesebb, mint az elavult MD"
  },
  {
    "szoveg": "Az egyetlen lényeges szempont a hash érték hossza, ahol a hosszabb hash mindig jobb, függetlenül az algoritmus más tulajdonságaitól.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fő szempont az algoritmus népszerűsége, ahol az MD5 még mindig előnyben van az SHA-3-mal szemben széles körű elterjedtsége miatt."
    ],
    "helyes": "A fő szempont az algoritmus népszerűsége, ahol az MD5 még mindig előnyben van az SHA-3-mal szemben széles körű elterjedtsége miatt."
  },
  {
    "szoveg": "Milyen példával illusztrálható a hash függvények szerepe a jelszavak biztonságos tárolásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy weboldal a felhasználók jelszavainak csak a hash értékét tárolja. Bejelentkezéskor a megadott jelszó hash-ét hasonlítja össze a tárolt értékkel, így még adatszivárgás esetén sem kerülnek napvilágra az eredeti jelszavak.",
      "Egy weboldal a jelszavakat titkosítva tárolja, és minden bejelentkezéskor visszafejti azokat az összehasonlításhoz, így biztosítva a maximális biztonságot.",
      "Egy weboldal a jelszavakat egyszerű szövegként tárolja, de erős tűzfallal védi az adatbázist, ami elegendő védelmet nyújt a hackerekkel szemben."
    ],
    "helyes": "Egy weboldal a felhasználók jelszavainak csak a hash értékét tárolja. Bejelentkezéskor a megadott jelszó hash-ét hasonlítja össze a tárolt értékkel, így még adatszivárgás esetén sem kerülnek napvilágra az eredeti jelszavak."
  },
  {
    "szoveg": "Hogyan illusztrálható a digitális aláírás használata egy konkrét példán keresztül a szoftverfrissítések területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy operációs rendszer frissítésekor a fejlesztő cég digitálisan aláírja a frissítő csomagot. A felhasználó gépe automatikusan ellenőrzi ezt az aláírást telepítés előtt, biztosítva, hogy a frissítés valóban a hivatalos forrásból származik és nem módosították.",
      "A szoftverfrissítéseket titkosítják, és csak a felhasználó gépe tudja visszafejteni azokat egy egyedi kulcs segítségével, így biztosítva, hogy csak az adott gép tudja telepíteni a frissítést.",
      "A szoftverfrissítéseket csak fizikai adathordozón, például CD-n terjesztik, amit postán küldenek el a felhasználóknak, így biztosítva a frissítések hitelességét."
    ],
    "helyes": "Egy operációs rendszer frissítésekor a fejlesztő cég digitálisan aláírja a frissítő csomagot. A felhasználó gépe automatikusan ellenőrzi ezt az aláírást telepítés előtt, biztosítva, hogy a frissítés valóban a hivatalos forrásból származik és nem módosították."
  },
  {
    "szoveg": "Hogyan ítélhető meg a digitális aláírás hatékonysága a dokumentumok hitelességének biztosításában az elektronikus ügyintézés során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A digitális aláírás rendkívül hatékony, mert matematikailag bizonyíthatóan biztosítja a dokumentum integritását, a küldő azonosítását és a letagadhatatlanságot, jelentősen felülmúlva a hagyományos módszereket.",
      "A digitális aláírás csak mérsékelten hatékony, mert bár biztonságos, de túl bonyolult a legtöbb felhasználó számára, ezért gyakran hibásan alkalmazzák.",
      "A digitális aláírás nem hatékony, mert könnyen másolható és beilleszthető más dokumentumokba, így nem nyújt valódi biztonságot."
    ],
    "helyes": "A digitális aláírás rendkívül hatékony, mert matematikailag bizonyíthatóan biztosítja a dokumentum integritását, a küldő azonosítását és a letagadhatatlanságot, jelentősen felülmúlva a hagyományos módszereket."
  },
  {
    "szoveg": "Hogyan ítélhető meg a hash függvények alkalmazásának hatékonysága a blockchain technológiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hash függvények rendkívül hatékonyak a blockchain-ben, mert biztosítják az adatok integritását, a blokkok összekapcsolását és a proof-of-work mechanizmust, ami alapvető a technológia működéséhez és biztonságához.",
      "A hash függvények csak korlátozottan hatékonyak a blockchain-ben, mert bár biztosítják az adatok titkosítását, de lassítják a tranzakciók feldolgozását.",
      "A hash függvények nem hatékonyak a blockchain-ben, mert nem képesek megakadályozni a kettős költés problémáját, ami a kriptovaluták fő kihívása."
    ],
    "helyes": "A hash függvények rendkívül hatékonyak a blockchain-ben, mert biztosítják az adatok integritását, a blokkok összekapcsolását és a proof-of-work mechanizmust, ami alapvető a technológia működéséhez és biztonságához."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a többfaktoros hitelesítés (MFA) szerepét a biztonság növelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az MFA több, különböző típusú hitelesítési módszer kombinálásával jelentősen megnehezíti a jogosulatlan hozzáférést, mivel a támadónak több akadályt kell leküzdenie.",
      "Az MFA csupán lelassítja a bejelentkezési folyamatot, de nem növeli érdemben a biztonságot.",
      "Az MFA kizárólag a jelszó alapú hitelesítés megerősítésére szolgál, más hitelesítési módszerekkel nem kombinálható."
    ],
    "helyes": "Az MFA több, különböző típusú hitelesítési módszer kombinálásával jelentősen megnehezíti a jogosulatlan hozzáférést, mivel a támadónak több akadályt kell leküzdenie."
  },
  {
    "szoveg": "Hogyan értelmezhető a Single Sign-On (SSO) módszer előnye és potenciális kockázata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SSO kényelmes a felhasználóknak, de ha feltörik, több rendszerhez is hozzáférést biztosíthat a támadónak.",
      "Az SSO csak a biztonságot növeli, kényelmi szempontból nincs jelentősége.",
      "Az SSO kizárólag a vállalati rendszerekben használható, személyes felhasználásra nem alkalmas."
    ],
    "helyes": "Az SSO kényelmes a felhasználóknak, de ha feltörik, több rendszerhez is hozzáférést biztosíthat a támadónak."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a biometrikus hitelesítés alkalmazását egy modern okostelefonon?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználó ujjlenyomatával vagy arcfelismeréssel oldja fel a telefon képernyőzárját és hitelesíti magát alkalmazásokban.",
      "A felhasználó egy fizikai tokent csatlakoztat a telefonhoz minden bejelentkezéskor.",
      "A telefon automatikusan bejelentkezteti a felhasználót, amint az belép egy előre meghatározott Wi-Fi hálózatba."
    ],
    "helyes": "A felhasználó ujjlenyomatával vagy arcfelismeréssel oldja fel a telefon képernyőzárját és hitelesíti magát alkalmazásokban."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a többfaktoros hitelesítés (MFA) alkalmazását egy online banki tranzakció során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználó bejelentkezik jelszavával, majd egy mobilalkalmazáson keresztül kapott egyszer használatos kóddal hagyja jóvá a tranzakciót.",
      "A felhasználó csak a jelszavát adja meg a tranzakció jóváhagyásához.",
      "A bank automatikusan jóváhagyja a tranzakciót, ha az a szokásos összeghatáron belül van."
    ],
    "helyes": "A felhasználó bejelentkezik jelszavával, majd egy mobilalkalmazáson keresztül kapott egyszer használatos kóddal hagyja jóvá a tranzakciót."
  },
  {
    "szoveg": "Sorolja fel a leggyakoribb alapvető hitelesítési módszereket!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Jelszó alapú, többfaktoros (MFA), biometrikus, token alapú, tanúsítvány alapú és Single Sign-On (SSO).",
      "Csak jelszó alapú és biometrikus hitelesítés létezik.",
      "E-mail alapú, SMS alapú és telefonhívás alapú hitelesítés."
    ],
    "helyes": "Jelszó alapú, többfaktoros (MFA), biometrikus, token alapú, tanúsítvány alapú és Single Sign-On (SSO)."
  },
  {
    "szoveg": "Sorolja fel a többfaktoros hitelesítés (MFA) tipikus faktorait!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Valami, amit a felhasználó tud; valami, ami a felhasználóé; és valami, ami a felhasználó.",
      "Csak jelszó és SMS-kód.",
      "Felhasználónév, e-mail cím és telefonszám."
    ],
    "helyes": "Valami, amit a felhasználó tud; valami, ami a felhasználóé; és valami, ami a felhasználó."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a jövőbeli hitelesítési módszerek fejlődésére vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biometrikus és AI-alapú hitelesítési módszerek elterjedése várható, amelyek folyamatosan figyelik a felhasználó viselkedését.",
      "A jelszó alapú hitelesítés marad az egyetlen használt módszer a jövőben is.",
      "A hitelesítési módszerek teljesen eltűnnek, és minden rendszer nyitott lesz."
    ],
    "helyes": "A biometrikus és AI-alapú hitelesítési módszerek elterjedése várható, amelyek folyamatosan figyelik a felhasználó viselkedését."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a kvantumszámítógépek megjelenésének hatásáról a hitelesítési módszerekre?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Új, kvantum-rezisztens hitelesítési módszerek kifejlesztésére lesz szükség a biztonság fenntartása érdekében.",
      "A kvantumszámítógépek megjelenése nem lesz hatással a jelenlegi hitelesítési módszerekre.",
      "A kvantumszámítógépek teljesen feleslegessé teszik majd a hitelesítést."
    ],
    "helyes": "Új, kvantum-rezisztens hitelesítési módszerek kifejlesztésére lesz szükség a biztonság fenntartása érdekében."
  },
  {
    "szoveg": "Hogyan járulnak hozzá a tanúsítványkiadó szervezetek (CA-k) a biztonságos online kommunikációhoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CA-k által kibocsátott digitális tanúsítványok lehetővé teszik a biztonságos HTTPS kapcsolatokat, titkosított e-mail kommunikációt és digitális aláírásokat, növelve az online tranzakciók és kommunikáció biztonságát.",
      "A CA-k kizárólag a weboldalak domain nevének ellenőrzésével foglalkoznak, és nem játszanak szerepet a kommunikáció titkosításában.",
      "A CA-k csak a vállalatok belső hálózatainak biztonságáért felelősek, és nem befolyásolják a nyilvános internetes kommunikációt."
    ],
    "helyes": "A CA-k által kibocsátott digitális tanúsítványok lehetővé teszik a biztonságos HTTPS kapcsolatokat, titkosított e-mail kommunikációt és digitális aláírásokat, növelve az online tranzakciók és kommunikáció biztonságát."
  },
  {
    "szoveg": "Mit jelent a 'bizalmi lánc' a tanúsítványkiadó szervezetek (CA-k) kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CA-k hierarchikus rendszere, ahol a gyökér CA-k hitelesítik az alárendelt CA-kat, létrehozva egy megbízható hitelesítési rendszert.",
      "A CA-k közötti verseny, ahol a legmegbízhatóbb CA kapja a legtöbb megrendelést.",
      "A tanúsítványok összekapcsolódása, ahol minden tanúsítvány közvetlenül kapcsolódik az összes többi tanúsítványhoz."
    ],
    "helyes": "A CA-k hierarchikus rendszere, ahol a gyökér CA-k hitelesítik az alárendelt CA-kat, létrehozva egy megbízható hitelesítési rendszert."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban egy tanúsítványkiadó szervezet (CA) működését a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Let's Encrypt, amely ingyenes SSL/TLS tanúsítványokat biztosít webhelyek számára, lehetővé téve a biztonságos HTTPS kapcsolatokat.",
      "Egy antivírus szoftver, amely rendszeresen frissíti a vírusdefiníciókat a felhasználók számítógépein.",
      "Egy online banki alkalmazás, amely kétfaktoros hitelesítést használ a bejelentkezéshez."
    ],
    "helyes": "A Let's Encrypt, amely ingyenes SSL/TLS tanúsítványokat biztosít webhelyek számára, lehetővé téve a biztonságos HTTPS kapcsolatokat."
  },
  {
    "szoveg": "Hogyan illusztrálja egy webáruház működése a tanúsítványkiadó szervezetek (CA-k) szerepét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A webáruház HTTPS kapcsolatot használ, amelynek tanúsítványát egy CA bocsátotta ki, biztosítva a vásárlók adatainak biztonságos átvitelét.",
      "A webáruház termékfotóit egy CA hitelesíti, hogy azok valóban az eladásra kínált termékeket ábrázolják.",
      "A webáruház árait egy CA ellenőrzi és hagyja jóvá, mielőtt azok megjelennének a weboldalon."
    ],
    "helyes": "A webáruház HTTPS kapcsolatot használ, amelynek tanúsítványát egy CA bocsátotta ki, biztosítva a vásárlók adatainak biztonságos átvitelét."
  },
  {
    "szoveg": "Hogyan változhat a tanúsítványkiadó szervezetek (CA-k) szerepe az IoT (Internet of Things) eszközök elterjedésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CA-k szerepe várhatóan még fontosabbá válik, mivel az egyre növekvő számú IoT eszköz biztonságos kommunikációjához és hitelesítéséhez elengedhetetlen lesz a megbízható tanúsítványkiadó rendszer.",
      "A CA-k szerepe csökkenni fog, mert az IoT eszközök saját belső biztonsági rendszereket fognak kifejleszteni.",
      "A CA-k szerepe változatlan marad, mert az IoT eszközök nem igényelnek magas szintű biztonsági intézkedéseket."
    ],
    "helyes": "A CA-k szerepe várhatóan még fontosabbá válik, mivel az egyre növekvő számú IoT eszköz biztonságos kommunikációjához és hitelesítéséhez elengedhetetlen lesz a megbízható tanúsítványkiadó rendszer."
  },
  {
    "szoveg": "Milyen kihívásokkal nézhetnek szembe a tanúsítványkiadó szervezetek (CA-k) a kvantumszámítógépek fejlődésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CA-knak új, kvantumbiztos titkosítási módszereket kell majd alkalmazniuk a tanúsítványok biztonságának megőrzése érdekében.",
      "A kvantumszámítógépek teljesen feleslegessé teszik a CA-k szerepét, mert automatikusan biztosítják a kommunikáció titkosítását.",
      "A CA-knak csak a jelenlegi titkosítási módszereiket kell megerősíteniük, új módszerek bevezetése nélkül."
    ],
    "helyes": "A CA-knak új, kvantumbiztos titkosítási módszereket kell majd alkalmazniuk a tanúsítványok biztonságának megőrzése érdekében."
  },
  {
    "szoveg": "Melyik hitelesítési módszer használ két különböző faktort a felhasználó azonosításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kétfaktoros hitelesítés (2FA)",
      "Jelszavas hitelesítés",
      "Tanúsítvány-alapú hitelesítés"
    ],
    "helyes": "Kétfaktoros hitelesítés (2FA)"
  },
  {
    "szoveg": "Mi a szerepkör-alapú hozzáférés-vezérlés (RBAC) fő jellemzője az autorizáció során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jogosultságokat szerepkörökhöz rendelik, nem közvetlenül felhasználókhoz",
      "Minden felhasználónak egyedi jogosultságokat állítanak be",
      "A jogosultságokat kizárólag az erőforrások tulajdonságai határozzák meg"
    ],
    "helyes": "A jogosultságokat szerepkörökhöz rendelik, nem közvetlenül felhasználókhoz"
  },
  {
    "szoveg": "Hogyan járul hozzá a hitelesítés és az autorizáció együttes alkalmazása a rendszer biztonságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Biztosítja a felhasználó azonosítását és a megfelelő hozzáférési jogok kiosztását",
      "Kizárólag a felhasználók azonosítását végzi el",
      "Csak az erőforrásokhoz való hozzáférést szabályozza"
    ],
    "helyes": "Biztosítja a felhasználó azonosítását és a megfelelő hozzáférési jogok kiosztását"
  },
  {
    "szoveg": "Miért előnyös a szerepkör-alapú hozzáférés-vezérlés (RBAC) használata nagy szervezetekben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyszerűsíti a jogosultságkezelést és csökkenti az adminisztrációs terhet",
      "Lehetővé teszi minden felhasználó egyedi jogosultságainak beállítását",
      "Automatikusan detektálja és blokkolja a biztonsági fenyegetéseket"
    ],
    "helyes": "Egyszerűsíti a jogosultságkezelést és csökkenti az adminisztrációs terhet"
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a kétfaktoros hitelesítés (2FA) alkalmazását a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy online banki bejelentkezés, ahol a felhasználó a jelszava mellett egy SMS-ben kapott kódot is megad",
      "Egy vállalati hálózatba való belépés, ahol csak felhasználónév és jelszó szükséges",
      "Egy publikus Wi-Fi hálózathoz való csatlakozás, ahol nincs szükség hitelesítésre"
    ],
    "helyes": "Egy online banki bejelentkezés, ahol a felhasználó a jelszava mellett egy SMS-ben kapott kódot is megad"
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban az attribútum-alapú hozzáférés-vezérlés (ABAC) alkalmazását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy felhőalapú dokumentumkezelő rendszer, amely a felhasználó pozíciója, tartózkodási helye és a dokumentum érzékenysége alapján szabályozza a hozzáférést",
      "Egy vállalati e-mail rendszer, ahol minden alkalmazott azonos hozzáférési jogokkal rendelkezik",
      "Egy nyilvános weboldal, ahol minden látogató ugyanazokat a tartalmakat láthatja"
    ],
    "helyes": "Egy felhőalapú dokumentumkezelő rendszer, amely a felhasználó pozíciója, tartózkodási helye és a dokumentum érzékenysége alapján szabályozza a hozzáférést"
  },
  {
    "szoveg": "Soroljon fel három fő kategóriát az alapvető fenyegetések és támadási vektorok közül a számítógépes hálózatok biztonságát illetően!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Malware, hálózati támadások, szociális manipuláció",
      "Vírusok, férgek, trójai programok",
      "Adathalászat, kémszoftverek, zsarolóvírusok"
    ],
    "helyes": "Malware, hálózati támadások, szociális manipuláció"
  },
  {
    "szoveg": "Soroljon fel három példát a webalapú támadásokra!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "SQL injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF)",
      "Phishing, Pretexting, Social engineering",
      "DDoS, Man-in-the-Middle, Packet sniffing"
    ],
    "helyes": "SQL injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF)"
  },
  {
    "szoveg": "Melyik kategóriába sorolná a ransomware-t az alapvető fenyegetések és támadási vektorok közül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Malware (rosszindulatú szoftverek)",
      "Hálózati támadások",
      "Szociális manipuláció"
    ],
    "helyes": "Malware (rosszindulatú szoftverek)"
  },
  {
    "szoveg": "Melyik kategóriába sorolná a 'shoulder surfing' támadást az alapvető fenyegetések és támadási vektorok közül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fizikai támadások",
      "Hálózati támadások",
      "Szociális manipuláció"
    ],
    "helyes": "Fizikai támadások"
  },
  {
    "szoveg": "Hogyan értelmezhető a 'Man-in-the-Middle' támadás a hálózati kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A támadó közbeékelődik a kommunikáló felek közé, és lehallgatja vagy módosítja az üzeneteket.",
      "A támadó túlterheli a célpont szervereit, megakadályozva a legitim forgalmat.",
      "A támadó hamis IP-címeket használ a forrás elrejtésére."
    ],
    "helyes": "A támadó közbeékelődik a kommunikáló felek közé, és lehallgatja vagy módosítja az üzeneteket."
  },
  {
    "szoveg": "Hogyan értelmezhető a 'social engineering' támadás az információbiztonság kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Pszichológiai manipuláció, amely során a támadó ráveszi az áldozatot bizalmas információk kiadására vagy biztonsági szabályok megszegésére.",
      "Automatizált szkript, amely sebezhetőségeket keres a célpont rendszerében.",
      "Hálózati forgalom elemzése titkosított adatok megszerzése céljából."
    ],
    "helyes": "Pszichológiai manipuláció, amely során a támadó ráveszi az áldozatot bizalmas információk kiadására vagy biztonsági szabályok megszegésére."
  },
  {
    "szoveg": "Mi a digitális tanúsítvány elsődleges célja?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonságos online kommunikáció és tranzakciók lehetővé tétele",
      "A számítógépes vírusok elleni védelem biztosítása",
      "Az internetes sávszélesség növelése"
    ],
    "helyes": "A biztonságos online kommunikáció és tranzakciók lehetővé tétele"
  },
  {
    "szoveg": "Ki bocsátja ki a digitális tanúsítványokat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hitelesítésszolgáltatók (Certificate Authority, CA)",
      "Internetszolgáltatók (ISP)",
      "Webböngészők fejlesztői"
    ],
    "helyes": "Hitelesítésszolgáltatók (Certificate Authority, CA)"
  },
  {
    "szoveg": "Hogyan járul hozzá egy digitális tanúsítvány a webböngészés biztonságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a HTTPS protokoll használatát, biztosítva a biztonságos kapcsolatot",
      "Automatikusan blokkolja a káros weboldalakat",
      "Gyorsítja a weboldalak betöltését"
    ],
    "helyes": "Lehetővé teszi a HTTPS protokoll használatát, biztosítva a biztonságos kapcsolatot"
  },
  {
    "szoveg": "Miért fontos a digitális tanúsítvány az e-kereskedelemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Biztosítja az online vásárlások és pénzügyi tranzakciók biztonságát",
      "Automatikusan összehasonlítja az árakat különböző webshopokban",
      "Növeli a webshop termékválasztékát"
    ],
    "helyes": "Biztosítja az online vásárlások és pénzügyi tranzakciók biztonságát"
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a digitális tanúsítvány használatát a mindennapi életben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy online banki tranzakció végrehajtása biztonságos weboldalon keresztül",
      "Egy papíralapú szerződés aláírása",
      "Egy offline vásárlás lebonyolítása egy üzletben"
    ],
    "helyes": "Egy online banki tranzakció végrehajtása biztonságos weboldalon keresztül"
  },
  {
    "szoveg": "Hogyan illusztrálja egy VPN kapcsolat a digitális tanúsítványok alkalmazását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Biztosítja a biztonságos távoli hozzáférést vállalati hálózatokhoz",
      "Automatikusan frissíti a számítógép operációs rendszerét",
      "Növeli az internet sebességét otthoni használat során"
    ],
    "helyes": "Biztosítja a biztonságos távoli hozzáférést vállalati hálózatokhoz"
  },
  {
    "szoveg": "Hogyan járul hozzá az aszimmetrikus titkosítás a nyilvános kulcsú infrastruktúra (PKI) működéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az aszimmetrikus titkosítás lehetővé teszi a biztonságos kommunikációt és hitelesítést két különböző, de matematikailag összefüggő kulcs használatával: egy nyilvános és egy privát kulccsal.",
      "Az aszimmetrikus titkosítás csak egyetlen kulcsot használ, amely mind titkosításra, mind visszafejtésre alkalmas, így egyszerűsítve a PKI működését.",
      "Az aszimmetrikus titkosítás kizárólag a digitális aláírások létrehozására szolgál a PKI-ben, és nem játszik szerepet az adatok titkosításában."
    ],
    "helyes": "Az aszimmetrikus titkosítás lehetővé teszi a biztonságos kommunikációt és hitelesítést két különböző, de matematikailag összefüggő kulcs használatával: egy nyilvános és egy privát kulccsal."
  },
  {
    "szoveg": "Mi a tanúsítvány-visszavonási listák (CRL) szerepe a nyilvános kulcsú infrastruktúrában (PKI)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CRL-ek tartalmazzák az érvénytelenített vagy visszavont tanúsítványokat, megakadályozva a kompromittált vagy már nem érvényes tanúsítványok használatát.",
      "A CRL-ek új tanúsítványok kiadására szolgálnak, és tartalmazzák az összes aktív tanúsítvány listáját.",
      "A CRL-ek kizárólag a tanúsítvány-kibocsátó hatóságok (CA) azonosítására szolgálnak a PKI rendszerben."
    ],
    "helyes": "A CRL-ek tartalmazzák az érvénytelenített vagy visszavont tanúsítványokat, megakadályozva a kompromittált vagy már nem érvényes tanúsítványok használatát."
  },
  {
    "szoveg": "Milyen valós életbeli példa illusztrálja legjobban a digitális tanúsítványok használatát a nyilvános kulcsú infrastruktúrában (PKI)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy online banki tranzakció során a böngésző ellenőrzi a bank webszerverének digitális tanúsítványát, biztosítva a biztonságos kapcsolatot.",
      "Egy papíralapú személyi igazolvány használata egy kormányzati hivatalban való személyazonosság igazolására.",
      "Egy hagyományos, kézzel aláírt szerződés két vállalat között, amely postai úton kerül elküldésre."
    ],
    "helyes": "Egy online banki tranzakció során a böngésző ellenőrzi a bank webszerverének digitális tanúsítványát, biztosítva a biztonságos kapcsolatot."
  },
  {
    "szoveg": "Hogyan illusztrálja a bizalmi lánc koncepciója a nyilvános kulcsú infrastruktúra (PKI) működését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mint egy fa struktúra, ahol a gyökér CA a törzs, és a különböző szintű közbenső CA-k és végfelhasználói tanúsítványok az ágak és levelek.",
      "Mint egy kör, ahol minden tanúsítvány közvetlenül kapcsolódik egymáshoz, hierarchia nélkül.",
      "Mint egy egyenes vonal, ahol minden tanúsítvány csak a közvetlenül felette lévővel van kapcsolatban."
    ],
    "helyes": "Mint egy fa struktúra, ahol a gyökér CA a törzs, és a különböző szintű közbenső CA-k és végfelhasználói tanúsítványok az ágak és levelek."
  },
  {
    "szoveg": "Hogyan használná a nyilvános kulcsú infrastruktúrát (PKI) egy vállalat IT-rendszergazdája a belső kommunikáció biztonságának növelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Digitális tanúsítványokat állítana ki minden alkalmazottnak, lehetővé téve a biztonságos e-mail kommunikációt és dokumentum-aláírást.",
      "Egyetlen közös jelszót osztana meg az összes alkalmazottal a vállalati rendszerekhez való hozzáféréshez.",
      "Kizárólag fizikai biztonsági intézkedéseket vezetne be, mint például biometrikus beléptetőrendszerek."
    ],
    "helyes": "Digitális tanúsítványokat állítana ki minden alkalmazottnak, lehetővé téve a biztonságos e-mail kommunikációt és dokumentum-aláírást."
  },
  {
    "szoveg": "Hogyan alkalmazná egy webáruház üzemeltetője a nyilvános kulcsú infrastruktúrát (PKI) a vásárlók bizalmának növelésére és a tranzakciók biztonságának javítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "SSL/TLS tanúsítványt szerezne be egy megbízható CA-tól, és HTTPS protokollt használna az összes weboldalon.",
      "Csak készpénzes fizetést fogadna el, elkerülve minden online tranzakciót.",
      "Saját, nem hitelesített titkosítási rendszert fejlesztene ki és használna."
    ],
    "helyes": "SSL/TLS tanúsítványt szerezne be egy megbízható CA-tól, és HTTPS protokollt használna az összes weboldalon."
  },
  {
    "szoveg": "Egy kriptográfiai rendszerben mi a különbség a nyílt szöveg és a titkosított szöveg között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nyílt szöveg az eredeti, olvasható üzenet, míg a titkosított szöveg ennek átalakított, olvashatatlan formája.",
      "A nyílt szöveg csak számokat tartalmazhat, míg a titkosított szöveg betűket és számokat egyaránt.",
      "A nyílt szöveg mindig rövidebb, mint a titkosított szöveg, függetlenül a titkosítási módszertől."
    ],
    "helyes": "A nyílt szöveg az eredeti, olvasható üzenet, míg a titkosított szöveg ennek átalakított, olvashatatlan formája."
  },
  {
    "szoveg": "Hogyan értelmezhető a kulcs szerepe a kriptográfiai folyamatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kulcs egy speciális adat, amely lehetővé teszi a titkosítást és a visszafejtést a kriptográfiai rendszerben.",
      "A kulcs csak díszítőelem, nincs valódi funkciója a titkosítási folyamatban.",
      "A kulcs kizárólag a titkosított szöveg tárolására szolgál."
    ],
    "helyes": "A kulcs egy speciális adat, amely lehetővé teszi a titkosítást és a visszafejtést a kriptográfiai rendszerben."
  },
  {
    "szoveg": "Mi a nyílt szöveg a kriptográfiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eredeti, olvasható üzenet vagy adat, amelyet titkosítani szeretnénk.",
      "A titkosítási folyamat végeredménye.",
      "A titkosításhoz használt kulcs."
    ],
    "helyes": "Az eredeti, olvasható üzenet vagy adat, amelyet titkosítani szeretnénk."
  },
  {
    "szoveg": "Mit jelent a titkosított szöveg fogalma a kriptográfiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nyílt szöveg átalakított, olvashatatlan formája, amely a titkosítási folyamat eredménye.",
      "Az eredeti üzenet, amelyet még nem titkosítottak.",
      "A titkosításhoz és visszafejtéshez használt kulcsok összessége."
    ],
    "helyes": "A nyílt szöveg átalakított, olvashatatlan formája, amely a titkosítási folyamat eredménye."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a kulcsok használatáról a modern kriptográfiai rendszerekben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kulcsok használata lehetővé teszi, hogy ugyanaz az algoritmus különböző titkosításokat eredményezzen, növelve a biztonságot.",
      "A kulcsok használata feleslegessé teszi a titkosítási algoritmusokat.",
      "A kulcsok használata csökkenti a titkosítás hatékonyságát és sebességét."
    ],
    "helyes": "A kulcsok használata lehetővé teszi, hogy ugyanaz az algoritmus különböző titkosításokat eredményezzen, növelve a biztonságot."
  },
  {
    "szoveg": "Ha egy új titkosítási módszert fejlesztenek ki, milyen következtetést vonhatunk le a kulcsok szerepéről ebben a rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kulcsok valószínűleg központi szerepet játszanak az új módszer biztonságában és rugalmasságában.",
      "Az új módszer valószínűleg teljesen eliminálja a kulcsok szükségességét.",
      "A kulcsok szerepe valószínűleg csökken, és helyüket átveszik a komplex matematikai algoritmusok."
    ],
    "helyes": "A kulcsok valószínűleg központi szerepet játszanak az új módszer biztonságában és rugalmasságában."
  },
  {
    "szoveg": "Hogyan használná a kriptográfiai alapfogalmakat egy egyszerű üzenetküldő alkalmazás tervezésekor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználó által beírt üzenetet (nyílt szöveg) egy kulcs segítségével titkosítanám, majd a titkosított szöveget továbbítanám a címzettnek.",
      "Minden üzenetet változtatás nélkül továbbítanék, mivel a titkosítás túl bonyolult folyamat.",
      "Csak a kulcsokat küldeném el, az üzeneteket nem, mert a kulcsok önmagukban elegendőek a kommunikációhoz."
    ],
    "helyes": "A felhasználó által beírt üzenetet (nyílt szöveg) egy kulcs segítségével titkosítanám, majd a titkosított szöveget továbbítanám a címzettnek."
  },
  {
    "szoveg": "Hogyan alkalmazná a kriptográfiai alapfogalmakat egy biztonságos fájltároló rendszer kialakításakor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fájlokat (nyílt szöveg) titkosítanám egy kulcs segítségével, és csak a titkosított adatokat tárolnám, a visszafejtéshez szükséges kulcsot pedig biztonságosan kezelném.",
      "Minden fájlt eredeti formájában tárolnék, de a fájlneveket titkosítanám.",
      "Csak a kulcsokat tárolnám, a fájlokat nem, mert a kulcsok önmagukban elegendőek a fájlok rekonstruálásához."
    ],
    "helyes": "A fájlokat (nyílt szöveg) titkosítanám egy kulcs segítségével, és csak a titkosított adatokat tárolnám, a visszafejtéshez szükséges kulcsot pedig biztonságosan kezelném."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a nyilvános és privát kulcsok szerepét a digitális aláírás folyamatában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A privát kulccsal készítjük az aláírást, amit a nyilvános kulccsal lehet ellenőrizni, így biztosítva az üzenet eredetiségét és sértetlenségét.",
      "A nyilvános kulccsal készítjük az aláírást, amit a privát kulccsal lehet ellenőrizni, így biztosítva az üzenet titkosságát.",
      "Mind a nyilvános, mind a privát kulcsot használjuk az aláírás készítéséhez és ellenőrzéséhez, így biztosítva a kétirányú hitelesítést."
    ],
    "helyes": "A privát kulccsal készítjük az aláírást, amit a nyilvános kulccsal lehet ellenőrizni, így biztosítva az üzenet eredetiségét és sértetlenségét."
  },
  {
    "szoveg": "Milyen szerepet játszanak a nyilvános és privát kulcsok az aszimmetrikus titkosításban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nyilvános kulccsal titkosítjuk az üzenetet, amit csak a megfelelő privát kulccsal lehet visszafejteni.",
      "A privát kulccsal titkosítjuk az üzenetet, amit bárki visszafejthet a nyilvános kulccsal.",
      "Mind a nyilvános, mind a privát kulcsot használjuk a titkosításhoz és a visszafejtéshez is."
    ],
    "helyes": "A nyilvános kulccsal titkosítjuk az üzenetet, amit csak a megfelelő privát kulccsal lehet visszafejteni."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a nyilvános és privát kulcsok használatát a mindennapi életben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy online banki tranzakció végrehajtása HTTPS protokollon keresztül.",
      "Egy jelszóval védett ZIP fájl létrehozása és megosztása.",
      "Egy Wi-Fi hálózat jelszavának beállítása és használata."
    ],
    "helyes": "Egy online banki tranzakció végrehajtása HTTPS protokollon keresztül."
  },
  {
    "szoveg": "Milyen példa illusztrálja legjobban a nyilvános és privát kulcsok szerepét a szoftver integritás ellenőrzésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy nyílt forráskódú szoftver letöltése és a digitális aláírás ellenőrzése a fejlesztő nyilvános kulcsával.",
      "Egy szoftver jelszóval való védése a jogosulatlan másolás ellen.",
      "Egy szoftver titkosítása a felhasználó privát kulcsával a biztonságos tárolás érdekében."
    ],
    "helyes": "Egy nyílt forráskódú szoftver letöltése és a digitális aláírás ellenőrzése a fejlesztő nyilvános kulcsával."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a nyilvános kulcsú infrastruktúra (PKI) szükségességéről a nyilvános és privát kulcsok használata során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PKI elengedhetetlen a nyilvános kulcsok hitelességének biztosításához és a kulcsok hatékony kezeléséhez nagy rendszerekben.",
      "A PKI szükségtelen, mert a nyilvános kulcsok szabadon terjeszthetők bármilyen hitelesítés nélkül.",
      "A PKI csak a privát kulcsok biztonságos tárolására szolgál, a nyilvános kulcsok kezelésében nincs szerepe."
    ],
    "helyes": "A PKI elengedhetetlen a nyilvános kulcsok hitelességének biztosításához és a kulcsok hatékony kezeléséhez nagy rendszerekben."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a nyilvános és privát kulcsok használatának jövőjéről a kvantumszámítógépek fejlődésének fényében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jelenlegi nyilvános kulcsú rendszereket kvantumrezisztens algoritmusokkal kell felváltani a biztonság megőrzése érdekében.",
      "A kvantumszámítógépek nem jelentenek fenyegetést a jelenlegi nyilvános kulcsú rendszerekre, így nem szükséges változtatás.",
      "A nyilvános kulcsú kriptográfiát teljesen el kell hagyni, és kizárólag szimmetrikus kulcsú rendszerekre kell áttérni."
    ],
    "helyes": "A jelenlegi nyilvános kulcsú rendszereket kvantumrezisztens algoritmusokkal kell felváltani a biztonság megőrzése érdekében."
  },
  {
    "szoveg": "Hogyan ítélhetjük meg a nyilvános és privát kulcsok használatának hatékonyságát a biztonságos e-mail kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rendkívül hatékony módszer, amely biztosítja a titkosítást és a hitelesítést, de a kulcskezelés és a felhasználói elfogadás kihívást jelenthet.",
      "Kevésbé hatékony, mint a hagyományos jelszavas védelem, mert túl bonyolult a felhasználók számára.",
      "Teljesen hatástalan módszer, mert a kulcsokat könnyen el lehet lopni vagy hamisítani."
    ],
    "helyes": "Rendkívül hatékony módszer, amely biztosítja a titkosítást és a hitelesítést, de a kulcskezelés és a felhasználói elfogadás kihívást jelenthet."
  },
  {
    "szoveg": "Hogyan ítélhetjük meg a nyilvános és privát kulcsok szerepét a blockchain technológiában és a kriptovalutákban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kulcsfontosságú és nélkülözhetetlen, biztosítja a tranzakciók biztonságát és a felhasználók anonimitását, de a kulcsok elvesztése komoly kockázatot jelent.",
      "Felesleges bonyolítás, a centralizált banki rendszerek biztonságosabbak és hatékonyabbak.",
      "Csak elméleti jelentőségű, a gyakorlatban nem játszik fontos szerepet a blockchain működésében."
    ],
    "helyes": "Kulcsfontosságú és nélkülözhetetlen, biztosítja a tranzakciók biztonságát és a felhasználók anonimitását, de a kulcsok elvesztése komoly kockázatot jelent."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a switch tanulási folyamatát a MAC cím táblák kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A switch dinamikusan frissíti a MAC cím táblát a beérkező keretek forrás MAC címe alapján, így építve fel és karbantartva a hálózati topológia ismeretét.",
      "A switch statikus MAC cím táblát használ, amelyet a hálózati adminisztrátor manuálisan konfigurál és frissít rendszeres időközönként.",
      "A switch véletlenszerűen generál MAC címeket és portokat a táblázatához, majd teszteli ezeket a kombinációkat a hálózaton a helyes konfiguráció megtalálásához."
    ],
    "helyes": "A switch dinamikusan frissíti a MAC cím táblát a beérkező keretek forrás MAC címe alapján, így építve fel és karbantartva a hálózati topológia ismeretét."
  },
  {
    "szoveg": "Mit jelent a MAC cím tábla 'dinamikus frissítése' a switch működésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A MAC cím tábla bejegyzései automatikusan frissülnek és törlődnek a hálózati forgalom alapján, alkalmazkodva a változásokhoz.",
      "A switch rendszeresen lekérdezi az összes csatlakoztatott eszközt a MAC címük megerősítéséért, és ennek alapján frissíti a táblát.",
      "A MAC cím tábla frissítése azt jelenti, hogy a switch véletlenszerűen törli a régi bejegyzéseket, hogy helyet csináljon az újaknak."
    ],
    "helyes": "A MAC cím tábla bejegyzései automatikusan frissülnek és törlődnek a hálózati forgalom alapján, alkalmazkodva a változásokhoz."
  },
  {
    "szoveg": "Egy hálózati adminisztrátor azt a feladatot kapja, hogy ellenőrizze egy switch MAC cím táblájának tartalmát. Milyen lépéseket kell végrehajtania?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Csatlakozzon a switch-hez, lépjen be a privilegizált módba, majd használja a 'show mac-address-table' parancsot a MAC cím tábla megjelenítéséhez.",
      "Indítson el egy hálózati forgalom generáló eszközt, amely minden lehetséges MAC címre küld csomagokat, majd figyelje meg a switch viselkedését.",
      "Kapcsolja ki a switch-et, távolítsa el a memória modulját, és használjon egy speciális hardver olvasót a MAC cím tábla kiolvasásához."
    ],
    "helyes": "Csatlakozzon a switch-hez, lépjen be a privilegizált módba, majd használja a 'show mac-address-table' parancsot a MAC cím tábla megjelenítéséhez."
  },
  {
    "szoveg": "Egy új eszköz csatlakoztatásakor hogyan frissíti a switch a MAC cím tábláját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A switch automatikusan hozzáadja az új eszköz MAC címét és portját a táblához, amikor az első keretet kapja az eszköztől.",
      "A switch azonnal elküldi az ARP kérést az új eszköznek, és a válasz alapján frissíti a MAC cím táblát.",
      "Az új eszköz csatlakoztatásakor a switch törli a teljes MAC cím táblát, és újraépíti azt az összes csatlakoztatott eszköz alapján."
    ],
    "helyes": "A switch automatikusan hozzáadja az új eszköz MAC címét és portját a táblához, amikor az első keretet kapja az eszköztől."
  },
  {
    "szoveg": "Egy kis irodai hálózatban három számítógép (A, B és C) csatlakozik egy switch-hez. Hogyan illusztrálja ez a helyzet a MAC cím tábla működését, amikor A számítógép küld egy keretet B-nek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A switch megtanulja A MAC címét és portját, majd továbbítja a keretet B-nek. Ha B válaszol, a switch megtanulja B MAC címét és portját is, frissítve ezzel a MAC cím táblát.",
      "A switch elküldi a keretet minden portjára, kivéve ahonnan érkezett, majd várja B válaszát, hogy frissítse a MAC cím táblát mindkét eszköz adataival.",
      "A switch először ellenőrzi a MAC cím táblát, és csak akkor továbbítja a keretet, ha mind A, mind B MAC címe már szerepel benne. Ha nem, eldobja a keretet."
    ],
    "helyes": "A switch megtanulja A MAC címét és portját, majd továbbítja a keretet B-nek. Ha B válaszol, a switch megtanulja B MAC címét és portját is, frissítve ezzel a MAC cím táblát."
  },
  {
    "szoveg": "Hogyan illusztrálja egy nagy forgalmú vállalati hálózat a MAC cím tábla dinamikus frissítésének fontosságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A gyakori eszközcsere és mozgás miatt a MAC cím tábla folyamatosan frissül, törölve a régi bejegyzéseket és hozzáadva az újakat, így biztosítva a hatékony forgalomirányítást.",
      "A vállalati hálózatban minden eszköz fix IP címmel rendelkezik, ezért a MAC cím tábla statikus és ritkán változik, illusztrálva a stabilitás fontosságát.",
      "A nagy forgalom miatt a switch óránként törli és újraépíti a teljes MAC cím táblát, hogy elkerülje a túlterhelést és a memóriaproblémákat."
    ],
    "helyes": "A gyakori eszközcsere és mozgás miatt a MAC cím tábla folyamatosan frissül, törölve a régi bejegyzéseket és hozzáadva az újakat, így biztosítva a hatékony forgalomirányítást."
  },
  {
    "szoveg": "Hogyan működik a CRC (Ciklikus Redundancia-ellenőrzés) az adatkapcsolati rétegben a hibadetektálás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatot egy előre meghatározott polinom alapján osztják, a maradékot hozzáadják az eredeti adathoz ellenőrző összegként, majd a fogadó oldalon ugyanezt a műveletet elvégzik és összehasonlítják az eredményt.",
      "Az adathoz hozzáadnak egy extra bitet, amelynek értékét úgy állítják be, hogy az 1-esek száma páros vagy páratlan legyen, majd a fogadó oldalon ellenőrzik ezt a paritást.",
      "Az adatot több kisebb blokkra osztják, minden blokkhoz egy ellenőrző összeget számolnak, majd ezeket az összegeket külön csomagban küldik el az eredeti adattal együtt."
    ],
    "helyes": "Az adatot egy előre meghatározott polinom alapján osztják, a maradékot hozzáadják az eredeti adathoz ellenőrző összegként, majd a fogadó oldalon ugyanezt a műveletet elvégzik és összehasonlítják az eredményt."
  },
  {
    "szoveg": "Mit jelent az ARQ (Automatic Repeat reQuest) protokollok működése az adatkapcsolati rétegben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ARQ protokollok hibadetektálást és újraküldést kombinálnak, különböző stratégiákat alkalmazva a hibás csomagok kezelésére.",
      "Az ARQ protokollok kizárólag hibajavítást végeznek, extra redundáns információt adva az adathoz, ami lehetővé teszi a hibák javítását újraküldés nélkül.",
      "Az ARQ protokollok csak hibadetektálást végeznek, és jelzik a felsőbb rétegeknek, ha hibát észleltek, de nem foglalkoznak az újraküldéssel."
    ],
    "helyes": "Az ARQ protokollok hibadetektálást és újraküldést kombinálnak, különböző stratégiákat alkalmazva a hibás csomagok kezelésére."
  },
  {
    "szoveg": "Hogyan hajtaná végre a paritásbit ellenőrzését egy 8 bites adatcsomagnál páros paritás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megszámolom az 1-esek számát az adatcsomagban, hozzáadok egy 0-ás paritásbitet, ha az 1-esek száma páros, vagy egy 1-es paritásbitet, ha páratlan, hogy a végeredmény páros legyen.",
      "Megszámolom az 1-esek számát az adatcsomagban, hozzáadok egy 1-es paritásbitet, ha az 1-esek száma páros, vagy egy 0-ás paritásbitet, ha páratlan, hogy a végeredmény páratlan legyen.",
      "Kiszámolom az adatcsomag bitjeinek összegét, és ha ez páros szám, akkor 0-ás paritásbitet adok hozzá, ha páratlan, akkor 1-est, függetlenül az 1-esek számától."
    ],
    "helyes": "Megszámolom az 1-esek számát az adatcsomagban, hozzáadok egy 0-ás paritásbitet, ha az 1-esek száma páros, vagy egy 1-es paritásbitet, ha páratlan, hogy a végeredmény páros legyen."
  },
  {
    "szoveg": "Hogyan hajtaná végre a CRC számítását egy adott adatcsomagnál, ha a generátor polinom 1011?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatcsomaghoz annyi 0-át fűzök, amennyi a generátor polinom hossza mínusz egy. Ezután elvégzem a bináris osztást a generátor polinommal. A maradék lesz a CRC érték, amit az eredeti adathoz csatolok.",
      "Az adatcsomagot közvetlenül elosztom a generátor polinommal bináris osztással. Az osztás eredménye lesz a CRC érték, amit az eredeti adathoz csatolok.",
      "A generátor polinomot hozzáadom az adatcsomaghoz, majd az eredményt elosztom 2-vel. A maradék lesz a CRC érték, amit az eredeti adathoz csatolok."
    ],
    "helyes": "Az adatcsomaghoz annyi 0-át fűzök, amennyi a generátor polinom hossza mínusz egy. Ezután elvégzem a bináris osztást a generátor polinommal. A maradék lesz a CRC érték, amit az eredeti adathoz csatolok."
  },
  {
    "szoveg": "Mi a fő különbség a CRC és a paritásbit módszer között a hibadetektálás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CRC képes több bites hibák észlelésére és hatékonyabb hibadetektálást biztosít, míg a paritásbit csak páratlan számú bithibát képes detektálni.",
      "A CRC csak egyetlen bithiba detektálására képes, míg a paritásbit módszer több bites hibákat is észlel.",
      "A CRC és a paritásbit módszer egyformán hatékonyak a hibadetektálásban, de a CRC kevesebb többlet adatot igényel."
    ],
    "helyes": "A CRC képes több bites hibák észlelésére és hatékonyabb hibadetektálást biztosít, míg a paritásbit csak páratlan számú bithibát képes detektálni."
  },
  {
    "szoveg": "Hogyan különbözik a Hamming-kód a CRC és a paritásbit módszertől a hibajavítás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Hamming-kód képes nemcsak detektálni, hanem javítani is az egybites hibákat, míg a CRC és a paritásbit csak hibadetektálásra alkalmas.",
      "A Hamming-kód és a CRC egyaránt képes hibajavításra, de a paritásbit csak detektálni tudja a hibákat.",
      "Mindhárom módszer csak hibadetektálásra alkalmas, de a Hamming-kód pontosabban jelzi a hiba helyét."
    ],
    "helyes": "A Hamming-kód képes nemcsak detektálni, hanem javítani is az egybites hibákat, míg a CRC és a paritásbit csak hibadetektálásra alkalmas."
  },
  {
    "szoveg": "Mi a fizikai réteg elsődleges feladata az OSI modellben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nyers bitek átvitele a fizikai médiumon keresztül",
      "Az adatcsomagok útvonalának meghatározása",
      "A hálózati címek kezelése"
    ],
    "helyes": "A nyers bitek átvitele a fizikai médiumon keresztül"
  },
  {
    "szoveg": "Melyik NEM tartozik a fizikai réteg fő funkciói közé az OSI modellben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatcsomagok titkosítása",
      "Bitsebesség meghatározása",
      "Szinkronizáció biztosítása"
    ],
    "helyes": "Az adatcsomagok titkosítása"
  },
  {
    "szoveg": "Hogyan járul hozzá a fizikai réteg szinkronizációs funkciója a megbízható adatátvitelhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Biztosítja, hogy az adó és vevő eszközök órajelei összhangban legyenek, lehetővé téve a bitek pontos időzítését és feldolgozását",
      "Meghatározza az adatcsomagok sorrendjét a hálózatban",
      "Ellenőrzi az adatok integritását és javítja a hibákat"
    ],
    "helyes": "Biztosítja, hogy az adó és vevő eszközök órajelei összhangban legyenek, lehetővé téve a bitek pontos időzítését és feldolgozását"
  },
  {
    "szoveg": "Miért fontos a bitsebesség meghatározása a fizikai rétegben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Meghatározza az adatátvitel sebességét és kapacitását, befolyásolva a hálózat teljesítményét",
      "Szabályozza az adatcsomagok méretét a hálózatban",
      "Meghatározza a hálózati protokollok típusát"
    ],
    "helyes": "Meghatározza az adatátvitel sebességét és kapacitását, befolyásolva a hálózat teljesítményét"
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a fizikai réteg jelátviteli funkcióját egy vezetékes Ethernet hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Digitális bitek átalakítása elektromos jelekké, amelyek a réz Ethernet kábelen keresztül továbbítódnak",
      "IP-címek hozzárendelése a hálózati eszközökhöz",
      "Adatcsomagok titkosítása a biztonságos kommunikáció érdekében"
    ],
    "helyes": "Digitális bitek átalakítása elektromos jelekké, amelyek a réz Ethernet kábelen keresztül továbbítódnak"
  },
  {
    "szoveg": "Hogyan illusztrálja egy Wi-Fi hálózat a fizikai réteg működését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A digitális adatok rádióhullámokká alakítása és továbbítása a levegőben, különböző modulációs technikák alkalmazásával",
      "A Wi-Fi jelszó titkosítása és továbbítása a hálózaton",
      "A Wi-Fi router IP-címének beállítása"
    ],
    "helyes": "A digitális adatok rádióhullámokká alakítása és továbbítása a levegőben, különböző modulációs technikák alkalmazásával"
  },
  {
    "szoveg": "Hogyan értelmezhetjük a CSMA/CD protokoll működését az Ethernet hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CSMA/CD egy olyan protokoll, amely lehetővé teszi több állomás számára a közös átviteli közeg megosztását, miközben figyeli és kezeli az esetleges ütközéseket.",
      "A CSMA/CD egy olyan protokoll, amely előre meghatározott időréseket oszt ki az állomásoknak az adatküldésre, így elkerülve az ütközéseket.",
      "A CSMA/CD egy olyan protokoll, amely egy token körbeadásával szabályozza a hálózati hozzáférést, biztosítva, hogy egyszerre csak egy állomás küldhessen adatot."
    ],
    "helyes": "A CSMA/CD egy olyan protokoll, amely lehetővé teszi több állomás számára a közös átviteli közeg megosztását, miközben figyeli és kezeli az esetleges ütközéseket."
  },
  {
    "szoveg": "Milyen szerepet tölt be a CSMA/CD az Ethernet hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CSMA/CD biztosítja a hatékony sávszélesség-kihasználást, kezeli az ütközéseket, és skálázható megoldást nyújt különböző méretű hálózatokhoz.",
      "A CSMA/CD kizárólag az adatbiztonságot szolgálja, titkosítva az állomások közötti kommunikációt.",
      "A CSMA/CD feladata a hálózati topológia automatikus konfigurálása és az optimális útvonalak meghatározása."
    ],
    "helyes": "A CSMA/CD biztosítja a hatékony sávszélesség-kihasználást, kezeli az ütközéseket, és skálázható megoldást nyújt különböző méretű hálózatokhoz."
  },
  {
    "szoveg": "Egy irodai Ethernet hálózatban három számítógép (A, B és C) próbál egyszerre adatot küldeni. Melyik példa illusztrálja helyesen a CSMA/CD működését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A gép elkezd adatot küldeni. B észleli, hogy a vonal foglalt és vár. C ugyanakkor akar küldeni, mint B, ütközés történik. B és C észlelik az ütközést, leállnak, és véletlenszerű ideig várnak az újrapróbálkozás előtt.",
      "A, B és C gép egyszerre kezd adatot küldeni. Az ütközést észlelve mindhárom gép azonnal újrakezdi az adatküldést, amíg sikeresen el nem küldik az adatot.",
      "A gép elkezd adatot küldeni. B és C észlelik, hogy a vonal foglalt, ezért előre meghatározott sorrendben várnak a küldésre, így elkerülve az ütközéseket."
    ],
    "helyes": "A gép elkezd adatot küldeni. B észleli, hogy a vonal foglalt és vár. C ugyanakkor akar küldeni, mint B, ütközés történik. B és C észlelik az ütközést, leállnak, és véletlenszerű ideig várnak az újrapróbálkozás előtt."
  },
  {
    "szoveg": "Egy egyetemi számítógépes laborban 20 hallgató egyszerre próbál nagy fájlokat feltölteni a szerverre az Ethernet hálózaton keresztül. Hogyan kezeli ezt a helyzetet a CSMA/CD protokoll?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CSMA/CD lehetővé teszi, hogy a hallgatók versengjenek a hálózati erőforrásokért. Az állomások figyelik a vonalat, és ha ütközés történik, véletlenszerű ideig várnak az újrapróbálkozás előtt.",
      "A CSMA/CD automatikusan sorba állítja a 20 hallgató kérését, és egyesével engedi őket feltölteni a fájlokat, így elkerülve minden ütközést.",
      "A CSMA/CD egyenlő sávszélességet oszt ki mind a 20 hallgatónak, lehetővé téve számukra a szimultán feltöltést ütközések nélkül."
    ],
    "helyes": "A CSMA/CD lehetővé teszi, hogy a hallgatók versengjenek a hálózati erőforrásokért. Az állomások figyelik a vonalat, és ha ütközés történik, véletlenszerű ideig várnak az újrapróbálkozás előtt."
  },
  {
    "szoveg": "Miben különbözik a CSMA/CD protokoll a Token Ring protokolltól?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CSMA/CD versengésen alapul és ütközéseket kezel, míg a Token Ring egy token körbeadásával szabályozza a hozzáférést, elkerülve az ütközéseket.",
      "A CSMA/CD csak vezetékes hálózatokban használható, míg a Token Ring kizárólag vezeték nélküli hálózatokban alkalmazható.",
      "A CSMA/CD központi vezérlést igényel, míg a Token Ring teljesen decentralizált működésű."
    ],
    "helyes": "A CSMA/CD versengésen alapul és ütközéseket kezel, míg a Token Ring egy token körbeadásával szabályozza a hozzáférést, elkerülve az ütközéseket."
  },
  {
    "szoveg": "Hogyan különbözik a CSMA/CD protokoll működése egy modern, kapcsolt (switched) Ethernet hálózatban a hagyományos, megosztott médiumú Ethernet hálózathoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kapcsolt Ethernet hálózatokban a CSMA/CD protokoll szerepe minimálisra csökken, mivel a switch-ek pont-pont kapcsolatokat hoznak létre, így gyakorlatilag kiküszöbölik az ütközéseket.",
      "A kapcsolt Ethernet hálózatokban a CSMA/CD protokoll még fontosabbá válik, mivel a megnövekedett forgalom miatt több ütközést kell kezelnie.",
      "A CSMA/CD protokoll működése azonos a kapcsolt és a megosztott médiumú Ethernet hálózatokban, nincs különbség a két esetben."
    ],
    "helyes": "A kapcsolt Ethernet hálózatokban a CSMA/CD protokoll szerepe minimálisra csökken, mivel a switch-ek pont-pont kapcsolatokat hoznak létre, így gyakorlatilag kiküszöbölik az ütközéseket."
  },
  {
    "szoveg": "Hogyan befolyásolja a Hidden Terminal Problem a vezeték nélküli hálózatok teljesítményét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Csökkenti a hálózat átviteli sebességét és hatékonyságát az ütközések és újraküldések miatt.",
      "Növeli a hálózat átviteli sebességét, mert több eszköz tud egyszerre kommunikálni.",
      "Nincs jelentős hatása a hálózat teljesítményére, csak a biztonságot befolyásolja."
    ],
    "helyes": "Csökkenti a hálózat átviteli sebességét és hatékonyságát az ütközések és újraküldések miatt."
  },
  {
    "szoveg": "Miért jelent kihívást a Hidden Terminal Problem megoldása a vezeték nélküli hálózatok tervezésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert az állomások nem tudják közvetlenül érzékelni egymás jelenlétét, ami megnehezíti az ütközések elkerülését.",
      "Mert túl sok energiát igényel a probléma kezelése, ami nem hatékony a mobil eszközöknél.",
      "Mert a probléma csak nagy méretű hálózatokban fordul elő, ami ritka a gyakorlatban."
    ],
    "helyes": "Mert az állomások nem tudják közvetlenül érzékelni egymás jelenlétét, ami megnehezíti az ütközések elkerülését."
  },
  {
    "szoveg": "Mi a Hidden Terminal Problem definíciója a vezeték nélküli hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Amikor két vagy több állomás, amelyek nem érzékelik egymás jeleit, egyidejűleg próbálnak kommunikálni egy közös vevőállomással.",
      "Amikor egy állomás nem képes kommunikálni a hálózat többi részével a gyenge jelerősség miatt.",
      "Amikor egy állomás szándékosan elrejti magát a hálózat többi részétől biztonsági okokból."
    ],
    "helyes": "Amikor két vagy több állomás, amelyek nem érzékelik egymás jeleit, egyidejűleg próbálnak kommunikálni egy közös vevőállomással."
  },
  {
    "szoveg": "Milyen fő hatásai vannak a Hidden Terminal Problemnek a vezeték nélküli kommunikációra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ütközések, teljesítménycsökkenés, késleltetés növekedése és megnövekedett energiafogyasztás.",
      "Jelerősség növekedése, adatátviteli sebesség javulása és csökkent energiafogyasztás.",
      "Hálózati biztonság javulása, csökkent interferencia és megnövekedett hatótávolság."
    ],
    "helyes": "Ütközések, teljesítménycsökkenés, késleltetés növekedése és megnövekedett energiafogyasztás."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a Hidden Terminal Problem jelenségét egy vezeték nélküli hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Három laptop egy kávézóban, ahol A és C nem érzékeli egymást, de mindkettő kommunikálni tud B-vel, és egyszerre próbálnak adatot küldeni.",
      "Két okostelefon, amelyek túl messze vannak egymástól ahhoz, hogy kommunikáljanak, de mindkettő csatlakozik ugyanahhoz a Wi-Fi routerhez.",
      "Egy laptop és egy nyomtató, amelyek ugyanahhoz a vezetékes hálózathoz csatlakoznak, de nem tudnak közvetlenül kommunikálni egymással."
    ],
    "helyes": "Három laptop egy kávézóban, ahol A és C nem érzékeli egymást, de mindkettő kommunikálni tud B-vel, és egyszerre próbálnak adatot küldeni."
  },
  {
    "szoveg": "Milyen valós életbeli szituáció modellezi legjobban a Hidden Terminal Problem hatását a kommunikációra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Két ember egy zsúfolt, zajos teremben, akik nem látják egymást, de mindketten próbálnak beszélni egy közös barátjukkal, aki középen áll.",
      "Két ember, akik különböző nyelveken beszélnek, és egy tolmácson keresztül próbálnak kommunikálni.",
      "Egy csoport ember, akik körben állnak és sorban beszélnek egymással."
    ],
    "helyes": "Két ember egy zsúfolt, zajos teremben, akik nem látják egymást, de mindketten próbálnak beszélni egy közös barátjukkal, aki középen áll."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az Exponential Backoff algoritmus szerepét a Wi-Fi ütközéselkerülésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az algoritmus exponenciálisan növekvő várakozási időt alkalmaz az ütközések után, csökkentve az újabb ütközések valószínűségét és optimalizálva a hálózat teljesítményét.",
      "Az algoritmus lineárisan növekvő várakozási időt alkalmaz az ütközések után, növelve az újabb ütközések valószínűségét.",
      "Az algoritmus állandó várakozási időt alkalmaz minden ütközés után, függetlenül az ütközések számától."
    ],
    "helyes": "Az algoritmus exponenciálisan növekvő várakozási időt alkalmaz az ütközések után, csökkentve az újabb ütközések valószínűségét és optimalizálva a hálózat teljesítményét."
  },
  {
    "szoveg": "Mi az Exponential Backoff algoritmus fő célja a Wi-Fi hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ütközések számának minimalizálása és a hálózati teljesítmény optimalizálása, különösen nagy forgalom esetén.",
      "A Wi-Fi eszközök energiafogyasztásának csökkentése az állandó várakozási idők bevezetésével.",
      "A Wi-Fi csatornák számának növelése a jobb lefedettség érdekében."
    ],
    "helyes": "Az ütközések számának minimalizálása és a hálózati teljesítmény optimalizálása, különösen nagy forgalom esetén."
  },
  {
    "szoveg": "Egy Wi-Fi hálózatban két eszköz (A és B) ütközést tapasztal az adatküldés során. Hogyan hajtja végre az Exponential Backoff algoritmust az A eszköz az első ütközés után?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az A eszköz véletlenszerűen választ egy számot 0 és 1 között, és ennyi időegységet vár, mielőtt újra próbálkozna az adatküldéssel.",
      "Az A eszköz azonnal újrapróbálkozik az adatküldéssel, nem alkalmazva várakozási időt.",
      "Az A eszköz 10 időegységet vár, mielőtt újra próbálkozna az adatküldéssel."
    ],
    "helyes": "Az A eszköz véletlenszerűen választ egy számot 0 és 1 között, és ennyi időegységet vár, mielőtt újra próbálkozna az adatküldéssel."
  },
  {
    "szoveg": "Hogyan változik a várakozási idő tartománya az Exponential Backoff algoritmusban a harmadik ütközés után?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A várakozási idő tartománya 0-tól 7-ig terjed (0 és 2^3-1 között).",
      "A várakozási idő tartománya 0-tól 3-ig terjed (0 és 2^2-1 között).",
      "A várakozási idő tartománya 0-tól 15-ig terjed (0 és 2^4-1 között)."
    ],
    "helyes": "A várakozási idő tartománya 0-tól 7-ig terjed (0 és 2^3-1 között)."
  },
  {
    "szoveg": "Milyen példával illusztrálható az Exponential Backoff algoritmus hatékonysága egy zsúfolt Wi-Fi hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy kávézóban 20 felhasználó próbál egyszerre csatlakozni a Wi-Fi hálózathoz. Az Exponential Backoff algoritmus segítségével az eszközök fokozatosan, ütközések nélkül tudnak csatlakozni, optimalizálva a hálózat teljesítményét.",
      "Egy irodában minden eszköz azonos időközönként próbál adatot küldeni, ami folyamatos ütközésekhez vezet, függetlenül az Exponential Backoff algoritmus alkalmazásától.",
      "Egy otthoni hálózatban egyetlen eszköz használja a Wi-Fi-t, és az Exponential Backoff algoritmus jelentősen lelassítja az adatátvitelt."
    ],
    "helyes": "Egy kávézóban 20 felhasználó próbál egyszerre csatlakozni a Wi-Fi hálózathoz. Az Exponential Backoff algoritmus segítségével az eszközök fokozatosan, ütközések nélkül tudnak csatlakozni, optimalizálva a hálózat teljesítményét."
  },
  {
    "szoveg": "Hogyan illusztrálható az Exponential Backoff algoritmus adaptív természete egy példán keresztül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy konferencián reggel 100 résztvevő érkezik és kapcsolódik a Wi-Fi hálózathoz. Az algoritmus nagy várakozási időket alkalmaz a sok ütközés miatt. Délután, amikor csak 20 aktív felhasználó marad, az algoritmus automatikusan kisebb várakozási időket használ, javítva a hálózat reakcióidejét.",
      "Egy iskolában minden diák pontosan 8:00-kor kapcsolódik a Wi-Fi hálózathoz, és az algoritmus minden nap ugyanazt a fix várakozási időt alkalmazza, függetlenül a felhasználók számától.",
      "Egy családi házban éjszaka, amikor senki sem használja a Wi-Fi-t, az algoritmus továbbra is nagy várakozási időket alkalmaz, jelentősen lelassítva a reggeli első csatlakozásokat."
    ],
    "helyes": "Egy konferencián reggel 100 résztvevő érkezik és kapcsolódik a Wi-Fi hálózathoz. Az algoritmus nagy várakozási időket alkalmaz a sok ütközés miatt. Délután, amikor csak 20 aktív felhasználó marad, az algoritmus automatikusan kisebb várakozási időket használ, javítva a hálózat reakcióidejét."
  },
  {
    "szoveg": "Egy nagyvállalat adatközpontjában szeretnénk nagy mennyiségű adatot gyorsan és megbízhatóan továbbítani a szerverek között. Melyik hálózati technológia lenne a legalkalmasabb erre a célra, és miért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Vezetékes hálózat, mert nagyobb sebességet és megbízhatóbb kapcsolatot biztosít, ami kulcsfontosságú az adatközpontok esetében.",
      "Vezeték nélküli hálózat, mert rugalmasabb és könnyebben bővíthető, ami előnyös lehet egy növekvő adatközpont számára.",
      "Műholdas hálózat, mert globális lefedettséget biztosít, ami hasznos lehet egy nemzetközi vállalat számára."
    ],
    "helyes": "Vezetékes hálózat, mert nagyobb sebességet és megbízhatóbb kapcsolatot biztosít, ami kulcsfontosságú az adatközpontok esetében."
  },
  {
    "szoveg": "Egy mobil alkalmazás fejlesztése során hogyan befolyásolja a választott hálózati technológia (vezetékes vs. vezeték nélküli) az alkalmazás tervezését és implementációját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezeték nélküli hálózat választása esetén figyelembe kell venni a változó kapcsolatminőséget és az esetleges megszakadásokat, ami robusztusabb hibakezelést és offline működési képességet igényel.",
      "A vezetékes hálózat választása esetén nagyobb hangsúlyt kell fektetni a mobilitásra és a felhasználói élményre, mivel a felhasználók helyhez kötöttek lesznek.",
      "A hálózati technológia választása nem befolyásolja jelentősen a mobil alkalmazás tervezését és implementációját, mivel a modern eszközök automatikusan kezelik a hálózati különbségeket."
    ],
    "helyes": "A vezeték nélküli hálózat választása esetén figyelembe kell venni a változó kapcsolatminőséget és az esetleges megszakadásokat, ami robusztusabb hibakezelést és offline működési képességet igényel."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a vezetékes és vezeték nélküli hálózatok közötti biztonsági különbségeket egy vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezetékes hálózatok alapvetően biztonságosabbak a fizikai hozzáférés korlátozottsága miatt, míg a vezeték nélküli hálózatok potenciálisan sebezhetőbbek, és erősebb titkosítási protokollokat igényelnek.",
      "A vezeték nélküli hálózatok biztonságosabbak, mert a modern titkosítási protokollok teljesen kivédhetetlenné teszik a támadásokat, míg a vezetékes hálózatok sebezhetőbbek a fizikai hozzáférés miatt.",
      "Nincs jelentős biztonsági különbség a vezetékes és vezeték nélküli hálózatok között, mivel mindkettő ugyanolyan szintű titkosítást használ."
    ],
    "helyes": "A vezetékes hálózatok alapvetően biztonságosabbak a fizikai hozzáférés korlátozottsága miatt, míg a vezeték nélküli hálózatok potenciálisan sebezhetőbbek, és erősebb titkosítási protokollokat igényelnek."
  },
  {
    "szoveg": "Hogyan értelmezhető a megbízhatóság fogalma a vezetékes és vezeték nélküli hálózatok összehasonlításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A megbízhatóság a kapcsolat stabilitását és a szolgáltatás folyamatosságát jelenti, ahol a vezetékes hálózatok általában jobban teljesítenek a környezeti tényezőkre való kisebb érzékenységük miatt.",
      "A megbízhatóság kizárólag a hálózat sebességét jelenti, ahol a vezeték nélküli hálózatok mindig megbízhatóbbak a nagyobb rugalmasságuk miatt.",
      "A megbízhatóság csak a hálózat biztonságát jelenti, és ebben nincs különbség a vezetékes és vezeték nélküli hálózatok között."
    ],
    "helyes": "A megbízhatóság a kapcsolat stabilitását és a szolgáltatás folyamatosságát jelenti, ahol a vezetékes hálózatok általában jobban teljesítenek a környezeti tényezőkre való kisebb érzékenységük miatt."
  },
  {
    "szoveg": "Egy nagyvárosi környezetben tervezett IoT (Internet of Things) projekt esetében hogyan ítélné meg a vezetékes és vezeték nélküli hálózati technológiák alkalmazhatóságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezeték nélküli technológiák alkalmasabbak, mert nagyobb rugalmasságot és lefedettséget biztosítanak, ami kulcsfontosságú a széleskörűen elhelyezett IoT eszközök esetében.",
      "A vezetékes technológiák előnyösebbek, mert stabilabb kapcsolatot biztosítanak, ami elengedhetetlen az IoT eszközök folyamatos működéséhez.",
      "Mindkét technológia egyformán alkalmas, nincs jelentős különbség közöttük egy IoT projekt szempontjából."
    ],
    "helyes": "A vezeték nélküli technológiák alkalmasabbak, mert nagyobb rugalmasságot és lefedettséget biztosítanak, ami kulcsfontosságú a széleskörűen elhelyezett IoT eszközök esetében."
  },
  {
    "szoveg": "Egy multinacionális vállalat globális hálózati infrastruktúrájának tervezésekor hogyan ítélné meg a vezetékes és vezeték nélküli technológiák szerepét és arányát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hibrid megközelítés javasolt, ahol a vezetékes technológiák dominálnak a fő adatközpontok és irodák között, míg a vezeték nélküli megoldások a mobil munkavégzést és a távoli helyszíneket támogatják.",
      "Kizárólag vezetékes technológiákat érdemes alkalmazni, mert ezek biztosítják a legnagyobb sebességet és biztonságot globális szinten.",
      "Teljes mértékben vezeték nélküli megoldásokra kell támaszkodni, mert ezek biztosítják a legnagyobb rugalmasságot és költséghatékonyságot."
    ],
    "helyes": "Hibrid megközelítés javasolt, ahol a vezetékes technológiák dominálnak a fő adatközpontok és irodák között, míg a vezeték nélküli megoldások a mobil munkavégzést és a távoli helyszíneket támogatják."
  },
  {
    "szoveg": "Mi a PPP protokoll elsődleges feladata a soros vonalak kommunikációjában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megbízható és hatékony adatátvitel biztosítása két hálózati csomópont között",
      "Hálózati címek kiosztása a csomópontok között",
      "Vezeték nélküli kommunikáció lehetővé tétele az eszközök között"
    ],
    "helyes": "Megbízható és hatékony adatátvitel biztosítása két hálózati csomópont között"
  },
  {
    "szoveg": "Melyik NEM tartozik a PPP protokoll főbb jellemzői közé?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatikus útvonalválasztás",
      "Keretezés",
      "Hibadetektálás"
    ],
    "helyes": "Automatikus útvonalválasztás"
  },
  {
    "szoveg": "Hogyan járul hozzá a PPP protokoll a soros vonalak kommunikációjának biztonságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Autentikációs mechanizmusokat biztosít a kapcsolódó felek hitelesítésére",
      "Titkosítja az összes átvitt adatot",
      "Tűzfalat épít a kommunikáló felek közé"
    ],
    "helyes": "Autentikációs mechanizmusokat biztosít a kapcsolódó felek hitelesítésére"
  },
  {
    "szoveg": "Miért tekinthető a PPP protokoll rugalmasnak a soros vonalak kommunikációjában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alkalmazkodik különböző sebességű és típusú soros kapcsolatokhoz",
      "Képes automatikusan váltani vezetékes és vezeték nélküli kommunikáció között",
      "Dinamikusan változtatja a protokoll szabályait az adatforgalom függvényében"
    ],
    "helyes": "Alkalmazkodik különböző sebességű és típusú soros kapcsolatokhoz"
  },
  {
    "szoveg": "Hogyan értelmezhetjük a MAC alréteg szerepét az adatkapcsolati rétegben a hálózati kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A MAC alréteg szabályozza a fizikai közeg közvetlen elérését, biztosítva a hatékony és igazságos erőforrás-megosztást az eszközök között.",
      "A MAC alréteg kizárólag az adatok titkosításáért felelős, hogy megvédje a kommunikációt a lehallgatástól.",
      "A MAC alréteg feladata csak az, hogy az IP-címeket MAC-címekké alakítsa át a hatékonyabb routolás érdekében."
    ],
    "helyes": "A MAC alréteg szabályozza a fizikai közeg közvetlen elérését, biztosítva a hatékony és igazságos erőforrás-megosztást az eszközök között."
  },
  {
    "szoveg": "Milyen módon értelmezhetjük a MAC alréteg keretezési funkcióját az adatátvitel szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A keretezés során az adatok strukturált egységekbe szerveződnek, amelyek tartalmazzák a szükséges vezérlő információkat és ellenőrző összegeket.",
      "A keretezés kizárólag az adatok tömörítését jelenti a hatékonyabb átvitel érdekében.",
      "A keretezés során a MAC alréteg csak a hibajavító kódokat adja hozzá az adatokhoz."
    ],
    "helyes": "A keretezés során az adatok strukturált egységekbe szerveződnek, amelyek tartalmazzák a szükséges vezérlő információkat és ellenőrző összegeket."
  },
  {
    "szoveg": "Melyik kategóriába sorolható a CSMA/CD protokoll a MAC alréteg funkciói közül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Közeghozzáférés-vezérlés",
      "Hibadetektálás",
      "Címzés"
    ],
    "helyes": "Közeghozzáférés-vezérlés"
  },
  {
    "szoveg": "Melyik MAC alréteg funkcióba sorolható a CRC (Cyclic Redundancy Check) használata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hibadetektálás",
      "Forgalomszabályozás",
      "Keretezés"
    ],
    "helyes": "Hibadetektálás"
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a MAC alréteg címzési funkcióját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy hálózati kártya, amelynek egyedi azonosítója 00:1A:2B:3C:4D:5E",
      "Egy router, amely dinamikusan osztja ki az IP-címeket a hálózatban",
      "Egy switch, amely a portjain érkező adatcsomagokat a céleszköz felé továbbítja"
    ],
    "helyes": "Egy hálózati kártya, amelynek egyedi azonosítója 00:1A:2B:3C:4D:5E"
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a MAC alréteg közeghozzáférés-vezérlési funkcióját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy Wi-Fi hálózat, ahol az eszközök véletlenszerű várakozási időt iktatnak be az adás előtt a CSMA/CA protokoll szerint",
      "Egy hálózati switch, amely MAC-cím táblázatot használ a keretek továbbításához",
      "Egy router, amely NAT-ot (Network Address Translation) használ a belső hálózat IP-címeinek elrejtésére"
    ],
    "helyes": "Egy Wi-Fi hálózat, ahol az eszközök véletlenszerű várakozási időt iktatnak be az adás előtt a CSMA/CA protokoll szerint"
  },
  {
    "szoveg": "Mi a switch elsődleges feladata az adatkapcsolati rétegben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A beérkező kereteket a célállomás MAC címe alapján továbbítja a megfelelő portra.",
      "Az IP-címek alapján irányítja a csomagokat a hálózatban.",
      "A beérkező kereteket minden csatlakoztatott eszköznek továbbítja."
    ],
    "helyes": "A beérkező kereteket a célállomás MAC címe alapján továbbítja a megfelelő portra."
  },
  {
    "szoveg": "Milyen információt tárol a switch MAC-cím táblája (CAM tábla)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A portokhoz tartozó MAC címeket.",
      "Az eszközök IP-címeit és alhálózati maszkjait.",
      "A csatlakoztatott eszközök felhasználóneveit és jelszavait."
    ],
    "helyes": "A portokhoz tartozó MAC címeket."
  },
  {
    "szoveg": "Hogyan segíti elő a switch a hálózat teljesítményének növelését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Szegmentálja a hálózatot, csökkentve az ütközési tartományokat és lehetővé téve a full-duplex kommunikációt.",
      "Növeli a hálózat sávszélességét új kábelek telepítésével.",
      "Automatikusan frissíti a csatlakoztatott eszközök szoftvereit."
    ],
    "helyes": "Szegmentálja a hálózatot, csökkentve az ütközési tartományokat és lehetővé téve a full-duplex kommunikációt."
  },
  {
    "szoveg": "Mit jelent az 'elárasztás' (flooding) a switch működésében, és mikor alkalmazza ezt a módszert?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A switch minden portra elküldi a keretet, kivéve ahonnan érkezett, ha a célállomás MAC címe ismeretlen.",
      "A switch szándékosan túlterheli a hálózatot a teljesítmény tesztelése céljából.",
      "A switch rendszeresen frissíti a MAC-cím tábláját új címekkel."
    ],
    "helyes": "A switch minden portra elküldi a keretet, kivéve ahonnan érkezett, ha a célállomás MAC címe ismeretlen."
  },
  {
    "szoveg": "Egy hálózatban három eszköz csatlakozik egy switch-hez: laptop (MAC: AA:AA:AA:AA:AA:AA) az 1-es porton, nyomtató (MAC: BB:BB:BB:BB:BB:BB) a 2-es porton, és szerver (MAC: CC:CC:CC:CC:CC:CC) a 3-as porton. Ha a laptop küld egy keretet a nyomtatónak, hogyan kezeli ezt a switch?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A switch csak a 2-es portra (nyomtató) továbbítja a keretet, miután megtanulta a laptop MAC címét az 1-es porthoz.",
      "A switch minden portra elküldi a keretet, beleértve a 3-as portot (szerver) is.",
      "A switch eldobja a keretet, mert nem ismeri fel a nyomtató MAC címét."
    ],
    "helyes": "A switch csak a 2-es portra (nyomtató) továbbítja a keretet, miután megtanulta a laptop MAC címét az 1-es porthoz."
  },
  {
    "szoveg": "Egy vállalati hálózatban egy switch-hez csatlakozik egy HR osztály számítógépe (MAC: DD:DD:DD:DD:DD:DD) az 1-es porton, egy IT osztály számítógépe (MAC: EE:EE:EE:EE:EE:EE) a 2-es porton, és egy közös nyomtató (MAC: FF:FF:FF:FF:FF:FF) a 3-as porton. Hogyan segíti a switch a VLAN-ok kialakítását ebben a környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A switch lehetővé teszi, hogy az 1-es és 3-as portot egy VLAN-ba, a 2-es és 3-as portot egy másik VLAN-ba soroljuk, így szabályozva a hozzáférést.",
      "A switch automatikusan létrehoz egy VLAN-t minden csatlakoztatott eszköz számára.",
      "A switch nem támogatja a VLAN-okat, minden eszköz ugyanabban a hálózati szegmensben marad."
    ],
    "helyes": "A switch lehetővé teszi, hogy az 1-es és 3-as portot egy VLAN-ba, a 2-es és 3-as portot egy másik VLAN-ba soroljuk, így szabályozva a hozzáférést."
  },
  {
    "szoveg": "Hogyan járul hozzá a CSMA/CA elv a Wi-Fi hálózatok hatékony működéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eszközök először hallgatóznak, mielőtt adatot küldenének, csökkentve az ütközések valószínűségét és optimalizálva a sávszélesség-kihasználást.",
      "Az eszközök folyamatosan adatot küldenek, és csak ütközés esetén állnak le, így maximalizálva az átviteli sebességet.",
      "Az eszközök előre meghatározott időközönként küldhetnek csak adatot, függetlenül a csatorna állapotától."
    ],
    "helyes": "Az eszközök először hallgatóznak, mielőtt adatot küldenének, csökkentve az ütközések valószínűségét és optimalizálva a sávszélesség-kihasználást."
  },
  {
    "szoveg": "Mi a CSMA/CA elv fő célja a Wi-Fi hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ütközések elkerülése és a hatékony sávszélesség-kihasználás biztosítása.",
      "A vezeték nélküli jelek erősségének növelése és a hatótávolság kiterjesztése.",
      "A hálózati eszközök energiafogyasztásának csökkentése és az akkumulátor élettartamának növelése."
    ],
    "helyes": "Az ütközések elkerülése és a hatékony sávszélesség-kihasználás biztosítása."
  },
  {
    "szoveg": "Egy zsúfolt kávézóban több vendég használja egyidejűleg a Wi-Fi hálózatot. Hogyan segíti a CSMA/CA elv a hatékony kommunikációt ebben a helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden laptop \\\\\\\"hallgatózik\\\\\\\" adatküldés előtt, és csak akkor küld, ha a csatorna szabad, így csökkentve az ütközések esélyét.",
      "A kávézó Wi-Fi routere előre meghatározott sorrendben osztja ki az adatküldési jogot minden csatlakozott eszköznek.",
      "Az eszközök folyamatosan küldik az adatokat, és a router automatikusan kijavítja az esetleges ütközéseket."
    ],
    "helyes": "Minden laptop \\\\\\\"hallgatózik\\\\\\\" adatküldés előtt, és csak akkor küld, ha a csatorna szabad, így csökkentve az ütközések esélyét."
  },
  {
    "szoveg": "Egy irodában több munkaállomás használja ugyanazt a Wi-Fi hálózatot nagy fájlok átvitelére. Hogyan segíti a CSMA/CA elv a hálózat teljesítményének fenntartását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eszközök várakoznak és újrapróbálkoznak, ha a csatorna foglalt, így csökkentve az ütközéseket és optimalizálva a sávszélesség használatát.",
      "A router egyenlő időintervallumokat oszt ki minden munkaállomásnak a fájlok küldésére.",
      "A CSMA/CA automatikusan csökkenti a fájlok méretét az átvitel előtt a hálózati terhelés csökkentése érdekében."
    ],
    "helyes": "Az eszközök várakoznak és újrapróbálkoznak, ha a csatorna foglalt, így csökkentve az ütközéseket és optimalizálva a sávszélesség használatát."
  },
  {
    "szoveg": "Miben különbözik a CSMA/CA elv alkalmazása a Wi-Fi hálózatokban a CSMA/CD elvtől, amit a vezetékes Ethernet hálózatokban használnak?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CSMA/CA az ütközések elkerülésére törekszik, míg a CSMA/CD az ütközések detektálására és kezelésére.",
      "A CSMA/CA nagyobb sávszélességet biztosít, míg a CSMA/CD alacsonyabb késleltetést eredményez.",
      "A CSMA/CA csak vezeték nélküli hálózatokban működik, míg a CSMA/CD mind vezetékes, mind vezeték nélküli hálózatokban alkalmazható."
    ],
    "helyes": "A CSMA/CA az ütközések elkerülésére törekszik, míg a CSMA/CD az ütközések detektálására és kezelésére."
  },
  {
    "szoveg": "Hogyan különbözik a CSMA/CA elv \\\\\\\"fairness\\\\\\\" (méltányosság) megközelítése a determinisztikus hozzáférési módszerektől?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CSMA/CA véletlenszerű várakozási időket alkalmaz, míg a determinisztikus módszerek fix időréseket osztanak ki.",
      "A CSMA/CA csak a nagy adatforgalmú eszközöknek biztosít hozzáférést, míg a determinisztikus módszerek minden eszköznek egyenlő esélyt adnak.",
      "A CSMA/CA csak az alacsony prioritású adatokra alkalmazza a méltányosság elvét, míg a determinisztikus módszerek minden adattípusra egyformán érvényesítik azt."
    ],
    "helyes": "A CSMA/CA véletlenszerű várakozási időket alkalmaz, míg a determinisztikus módszerek fix időréseket osztanak ki."
  },
  {
    "szoveg": "Hogyan értelmezi a Nyquist tétel a maximális adatsebességet egy ideális, zajmentes csatornán?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A maximális adatsebesség egyenlő a csatorna sávszélességének kétszeresével, szorozva a jelszintek számának logaritmusával kettő alapon.",
      "A maximális adatsebesség egyenlő a csatorna sávszélességével, szorozva a jelszintek számával.",
      "A maximális adatsebesség egyenlő a csatorna sávszélességének négyzetével, osztva a jelszintek számával."
    ],
    "helyes": "A maximális adatsebesség egyenlő a csatorna sávszélességének kétszeresével, szorozva a jelszintek számának logaritmusával kettő alapon."
  },
  {
    "szoveg": "Hogyan értelmezi a Shannon-Hartley tétel a csatornakapacitást egy zajos kommunikációs csatornán?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csatornakapacitás egyenlő a sávszélesség és a jel-zaj viszony logaritmusának szorzatával, figyelembe véve a zaj hatását.",
      "A csatornakapacitás egyenlő a sávszélesség és a jel-zaj viszony összegével, figyelmen kívül hagyva a zaj hatását.",
      "A csatornakapacitás egyenlő a sávszélesség négyzetével, osztva a jel-zaj viszonnyal, minimalizálva a zaj hatását."
    ],
    "helyes": "A csatornakapacitás egyenlő a sávszélesség és a jel-zaj viszony logaritmusának szorzatával, figyelembe véve a zaj hatását."
  },
  {
    "szoveg": "Egy 5000 Hz sávszélességű csatornán 4 jelszintet használunk az adatátvitelhez. A Nyquist tétel alapján mi lesz a maximális adatsebesség?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "40000 bit/s",
      "20000 bit/s",
      "10000 bit/s"
    ],
    "helyes": "40000 bit/s"
  },
  {
    "szoveg": "Egy 10000 Hz sávszélességű csatornán a jel-zaj viszony 20 dB. A Shannon-Hartley tétel alapján körülbelül mekkora lesz a csatornakapacitás?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "66000 bit/s",
      "33000 bit/s",
      "100000 bit/s"
    ],
    "helyes": "66000 bit/s"
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a Nyquist tétel alkalmazását a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy modem tervezése, amely maximalizálja az adatátviteli sebességet egy adott sávszélességű telefonvonalon.",
      "Egy Wi-Fi router beállítása a legjobb jelerősség elérése érdekében egy lakásban.",
      "Egy mobiltelefon akkumulátor-élettartamának optimalizálása az energiafogyasztás csökkentésével."
    ],
    "helyes": "Egy modem tervezése, amely maximalizálja az adatátviteli sebességet egy adott sávszélességű telefonvonalon."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a Shannon-Hartley tétel alkalmazását a valós életben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy 5G mobilhálózat tervezése, amely maximalizálja az adatátviteli sebességet zajos városi környezetben.",
      "Egy optikai kábel gyártása, amely minimalizálja a fény szóródását nagy távolságokon.",
      "Egy számítógép processzorának órajelének növelése a teljesítmény fokozása érdekében."
    ],
    "helyes": "Egy 5G mobilhálózat tervezése, amely maximalizálja az adatátviteli sebességet zajos városi környezetben."
  },
  {
    "szoveg": "Hogyan járul hozzá a moduláció a hatékonyabb spektrumhasználathoz az adatátvitel során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A moduláció lehetővé teszi, hogy az információt magasabb frekvenciájú vivőjelre ültessük, ami jobb spektrumkihasználást eredményez.",
      "A moduláció csökkenti az átvitelhez szükséges frekvenciasáv szélességét, így több adat fér el ugyanabban a sávszélességben.",
      "A moduláció növeli az átviteli csatorna kapacitását azáltal, hogy csökkenti a jel amplitúdóját."
    ],
    "helyes": "A moduláció lehetővé teszi, hogy az információt magasabb frekvenciájú vivőjelre ültessük, ami jobb spektrumkihasználást eredményez."
  },
  {
    "szoveg": "Milyen szerepet játszik a moduláció a zajcsökkentésben az adatátvitel során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A moduláció segít elkülöníteni a hasznos jelet a zajtól, javítva ezzel az átvitel minőségét.",
      "A moduláció csökkenti a jel amplitúdóját, így a zaj kevésbé tud hatni rá.",
      "A moduláció növeli a jel frekvenciáját, ami automatikusan kiszűri a zajt."
    ],
    "helyes": "A moduláció segít elkülöníteni a hasznos jelet a zajtól, javítva ezzel az átvitel minőségét."
  },
  {
    "szoveg": "Melyik példa illusztrálja legjobban a moduláció alkalmazását a mindennapi életben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az FM rádióadás, ahol a zene és beszéd információját egy magasabb frekvenciájú vivőjelre modulálják.",
      "Egy hagyományos vezetékes telefon, ahol a hang közvetlenül, moduláció nélkül kerül átvitelre.",
      "Egy optikai kábel, ahol a fény intenzitása változatlan marad az adatátvitel során."
    ],
    "helyes": "Az FM rádióadás, ahol a zene és beszéd információját egy magasabb frekvenciájú vivőjelre modulálják."
  },
  {
    "szoveg": "Melyik modern kommunikációs technológia használja a modulációt az adatátvitel során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Wi-Fi hálózatok, amelyek különböző digitális modulációs technikákat alkalmaznak az adatok továbbítására.",
      "Az Ethernet kábel, amely moduláció nélkül továbbítja az adatokat a számítógépek között.",
      "A hagyományos faxgép, amely analóg jeleket használ moduláció nélkül."
    ],
    "helyes": "A Wi-Fi hálózatok, amelyek különböző digitális modulációs technikákat alkalmaznak az adatok továbbítására."
  },
  {
    "szoveg": "Melyik hibadetektáló technika működik úgy, hogy az adatbitekhez egy extra bitet adunk hozzá, amely 1 vagy 0 lehet attól függően, hogy az 1-esek száma páros vagy páratlan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Paritásbit",
      "Ellenőrző összeg",
      "CRC (Cyclic Redundancy Check)"
    ],
    "helyes": "Paritásbit"
  },
  {
    "szoveg": "Melyik hibadetektáló technika alapul polinomiális osztáson és használja a maradékot ellenőrző bitként?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "CRC (Cyclic Redundancy Check)",
      "Ellenőrző összeg",
      "Paritásbit"
    ],
    "helyes": "CRC (Cyclic Redundancy Check)"
  },
  {
    "szoveg": "Az alábbiak közül melyik hibadetektáló technika tartozik a legegyszerűbb kategóriába az implementáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Paritásbit",
      "Ellenőrző összeg",
      "CRC (Cyclic Redundancy Check)"
    ],
    "helyes": "Paritásbit"
  },
  {
    "szoveg": "Melyik hibadetektáló technika tartozik a legösszetettebb kategóriába az implementáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "CRC (Cyclic Redundancy Check)",
      "Ellenőrző összeg",
      "Paritásbit"
    ],
    "helyes": "CRC (Cyclic Redundancy Check)"
  },
  {
    "szoveg": "Hogyan értelmezhetjük az ellenőrző összeg (checksum) működését a hibadetektálás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatblokkokat összeadjuk, a túlcsordulást visszaforgatjuk, és az eredmény komplementerét használjuk ellenőrzésre.",
      "Az adatbitekhez egy extra bitet adunk, amely az 1-esek számának paritását jelzi.",
      "Az adatot egy generátor polinommal osztjuk, és a maradékot használjuk ellenőrzésre."
    ],
    "helyes": "Az adatblokkokat összeadjuk, a túlcsordulást visszaforgatjuk, és az eredmény komplementerét használjuk ellenőrzésre."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a CRC (Cyclic Redundancy Check) működését a hibadetektálás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatot egy előre meghatározott generátor polinommal osztjuk, és a maradékot használjuk ellenőrző bitként.",
      "Az adatblokkokat összeadjuk, és az összeg komplementerét használjuk ellenőrzésre.",
      "Az adatbitekhez egy extra bitet adunk, amely az 1-esek számának paritását mutatja."
    ],
    "helyes": "Az adatot egy előre meghatározott generátor polinommal osztjuk, és a maradékot használjuk ellenőrző bitként."
  },
  {
    "szoveg": "Mi a Hamming-kód fő célja az adatátvitel során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyetlen bithiba javítása és két bithiba észlelése",
      "Több egymást követő bithiba (burst error) javítása",
      "Az adatátviteli sebesség növelése"
    ],
    "helyes": "Egyetlen bithiba javítása és két bithiba észlelése"
  },
  {
    "szoveg": "Melyik állítás igaz a Reed-Solomon kódokra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Blokk-alapú hibajavító kódok, amelyek polinomiális algebrát használnak",
      "Csak egyetlen bithiba javítására képesek",
      "Kizárólag digitális televíziózásban használatosak"
    ],
    "helyes": "Blokk-alapú hibajavító kódok, amelyek polinomiális algebrát használnak"
  },
  {
    "szoveg": "Hogyan értelmezhető a Hamming-kód és a Reed-Solomon kód közötti fő különbség a hibajavítás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Hamming-kód egyszerűbb és gyorsabb egyetlen bithiba javításában, míg a Reed-Solomon kód hatékonyabb több egymást követő hiba kezelésében",
      "A Hamming-kód kizárólag adattárolásra használható, míg a Reed-Solomon kód csak adatátvitelre",
      "A Hamming-kód nagyobb adatmennyiségeknél hatékonyabb, míg a Reed-Solomon kód csak kis adatmennyiségeknél használható"
    ],
    "helyes": "A Hamming-kód egyszerűbb és gyorsabb egyetlen bithiba javításában, míg a Reed-Solomon kód hatékonyabb több egymást követő hiba kezelésében"
  },
  {
    "szoveg": "Hogyan értelmezhető a hibajavító kódok jelentősége a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Növelik az adatátvitel megbízhatóságát és pontosságát, különösen zajos csatornákon",
      "Kizárólag az adatátviteli sebesség növelésére szolgálnak",
      "Csökkentik a hálózati forgalmat az adatok tömörítésével"
    ],
    "helyes": "Növelik az adatátvitel megbízhatóságát és pontosságát, különösen zajos csatornákon"
  },
  {
    "szoveg": "Hogyan értelmezhetjük az IPv6 címtartományának bővülését az IoT (Internet of Things) eszközök szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 128 bites címtartománya lehetővé teszi gyakorlatilag korlátlan számú IoT eszköz egyedi azonosítását és hálózatba kapcsolását.",
      "Az IPv6 címtartománya csak minimális mértékben növeli az IoT eszközök csatlakoztathatóságát az IPv4-hez képest.",
      "Az IPv6 címtartománya nem releváns az IoT eszközök szempontjából, mert azok főleg lokális hálózatokban működnek."
    ],
    "helyes": "Az IPv6 128 bites címtartománya lehetővé teszi gyakorlatilag korlátlan számú IoT eszköz egyedi azonosítását és hálózatba kapcsolását."
  },
  {
    "szoveg": "Hogyan értelmezhető az IPv6 'Flow Label' mezőjének szerepe a hálózati forgalom kezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'Flow Label' mező lehetővé teszi a hálózati forgalom hatékonyabb priorizálását és a QoS (Quality of Service) jobb kezelését, különösen fontos a valós idejű alkalmazásoknál.",
      "A 'Flow Label' mező kizárólag a csomagok sorrendjének meghatározására szolgál, nincs hatása a QoS-re.",
      "A 'Flow Label' mező csak statisztikai célokat szolgál, nincs közvetlen hatása a hálózati forgalom kezelésére."
    ],
    "helyes": "A 'Flow Label' mező lehetővé teszi a hálózati forgalom hatékonyabb priorizálását és a QoS (Quality of Service) jobb kezelését, különösen fontos a valós idejű alkalmazásoknál."
  },
  {
    "szoveg": "Összehasonlítva az IPv4 és IPv6 protokollokat, melyik állítás igaz a fejléc struktúrájukra vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 fejléc egyszerűbb és hatékonyabb, mint az IPv4 fejléc, ami gyorsabb csomagfeldolgozást tesz lehetővé.",
      "Az IPv6 fejléc komplexebb és több mezőt tartalmaz, mint az IPv4 fejléc, ami részletesebb csomagkezelést tesz lehetővé.",
      "Az IPv4 és IPv6 fejlécek struktúrája azonos, csak a címmezők hosszában térnek el egymástól."
    ],
    "helyes": "Az IPv6 fejléc egyszerűbb és hatékonyabb, mint az IPv4 fejléc, ami gyorsabb csomagfeldolgozást tesz lehetővé."
  },
  {
    "szoveg": "Hogyan hasonlítható össze az IPv4 és IPv6 biztonsági megoldásainak implementációja?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6-ban az IPsec beépített és kötelező, míg az IPv4-ben opcionális kiegészítés.",
      "Mind az IPv4, mind az IPv6 azonos módon implementálja az IPsec-et, nincs különbség közöttük.",
      "Az IPv4 fejlettebb biztonsági megoldásokat kínál, mint az IPv6, mivel régebb óta fejlesztik."
    ],
    "helyes": "Az IPv6-ban az IPsec beépített és kötelező, míg az IPv4-ben opcionális kiegészítés."
  },
  {
    "szoveg": "Hogyan ítélhető meg az IPv6 protokoll bevezetésének szükségessége a modern internet infrastruktúra szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 bevezetése elengedhetetlen a modern internet infrastruktúra számára a címtartomány bővítése, jobb teljesítmény és fejlett funkciók miatt.",
      "Az IPv6 bevezetése szükségtelen, mert az IPv4 még mindig elegendő funkcionalitást biztosít a jelenlegi igényekhez.",
      "Az IPv6 bevezetése káros, mert túl bonyolult és nehezen implementálható a meglévő rendszerekben."
    ],
    "helyes": "Az IPv6 bevezetése elengedhetetlen a modern internet infrastruktúra számára a címtartomány bővítése, jobb teljesítmény és fejlett funkciók miatt."
  },
  {
    "szoveg": "Hogyan ítélhető meg az IPv6 automatikus konfigurálási képessége (SLAAC) a hálózatkezelés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A SLAAC jelentősen egyszerűsíti a hálózat konfigurálását és kezelését, különösen nagy és dinamikus hálózatokban.",
      "A SLAAC növeli a hálózat sebezhetőségét, ezért használata nem ajánlott vállalati környezetben.",
      "A SLAAC nem jelent érdemi előnyt az IPv4 DHCP-hez képest, ezért bevezetése felesleges."
    ],
    "helyes": "A SLAAC jelentősen egyszerűsíti a hálózat konfigurálását és kezelését, különösen nagy és dinamikus hálózatokban."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az aggregáció elvét a hálózati technológiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az aggregáció több kisebb egység (pl. hálózati címek, útvonalak, adatcsomagok) egyetlen nagyobb egységbe való összevonását jelenti a hatékonyabb kezelés és erőforrás-optimalizálás érdekében.",
      "Az aggregáció a hálózati eszközök fizikai összekapcsolását jelenti egy központi hub segítségével a jobb kommunikáció érdekében.",
      "Az aggregáció a hálózati forgalom szétválasztását jelenti kisebb, könnyebben kezelhető egységekre a jobb teljesítmény érdekében."
    ],
    "helyes": "Az aggregáció több kisebb egység (pl. hálózati címek, útvonalak, adatcsomagok) egyetlen nagyobb egységbe való összevonását jelenti a hatékonyabb kezelés és erőforrás-optimalizálás érdekében."
  },
  {
    "szoveg": "Milyen hatással van az aggregáció a hálózati forgalomra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az aggregáció csökkenti a routing táblák méretét, optimalizálja a sávszélességet és csökkenti a hálózati torlódást.",
      "Az aggregáció növeli a routing táblák méretét, csökkenti a sávszélességet és fokozza a hálózati torlódást.",
      "Az aggregációnak nincs jelentős hatása a hálózati forgalomra, csak az adatok tárolását befolyásolja."
    ],
    "helyes": "Az aggregáció csökkenti a routing táblák méretét, optimalizálja a sávszélességet és csökkenti a hálózati torlódást."
  },
  {
    "szoveg": "Milyen következményei lehetnek az aggregáció alkalmazásának egy gyorsan növekvő vállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat képes lesz kezelni a növekvő eszközszámot és forgalmat anélkül, hogy arányosan növelné az erőforrásigényt, javítva a skálázhatóságot és a teljesítményt.",
      "A hálózat teljesítménye csökkenni fog, mivel az aggregáció megnöveli a feldolgozási időt és a routing táblák méretét.",
      "Az aggregáció nem lesz hatással a hálózat növekedésére, csak a meglévő eszközök közötti kommunikációt optimalizálja."
    ],
    "helyes": "A hálózat képes lesz kezelni a növekvő eszközszámot és forgalmat anélkül, hogy arányosan növelné az erőforrásigényt, javítva a skálázhatóságot és a teljesítményt."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az IP-cím aggregáció (CIDR) alkalmazása egy nagy méretű vállalati hálózat jövőbeli bővíthetőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-cím aggregáció lehetővé teszi a rugalmasabb címkiosztást és hatékonyabb útvonalösszevonást, ami megkönnyíti a hálózat jövőbeli bővítését és kezelését.",
      "Az IP-cím aggregáció korlátozza a rendelkezésre álló IP-címek számát, ami megnehezíti a hálózat jövőbeli bővítését.",
      "Az IP-cím aggregáció nincs hatással a hálózat bővíthetőségére, csak a jelenlegi címkiosztást optimalizálja."
    ],
    "helyes": "Az IP-cím aggregáció lehetővé teszi a rugalmasabb címkiosztást és hatékonyabb útvonalösszevonást, ami megkönnyíti a hálózat jövőbeli bővítését és kezelését."
  },
  {
    "szoveg": "Hogyan ítélhető meg az aggregáció alkalmazásának hatékonysága egy nagy forgalmú adatközpontban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az aggregáció hatékonysága mérhető a csökkent routing tábla mérettel, a javult sávszélesség-kihasználtsággal és a csökkent hálózati torlódással, figyelembe véve az esetleges latencia növekedést.",
      "Az aggregáció hatékonysága kizárólag a hálózati eszközök számának csökkenésével mérhető, függetlenül a teljesítmény más aspektusaitól.",
      "Az aggregáció hatékonysága nem mérhető objektíven, csak szubjektív felhasználói visszajelzések alapján értékelhető."
    ],
    "helyes": "Az aggregáció hatékonysága mérhető a csökkent routing tábla mérettel, a javult sávszélesség-kihasználtsággal és a csökkent hálózati torlódással, figyelembe véve az esetleges latencia növekedést."
  },
  {
    "szoveg": "Milyen szempontok alapján lehet megítélni, hogy egy adott hálózatban érdemes-e bevezetni az aggregációt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat mérete, komplexitása, a forgalom jellege, a skálázhatósági igények és a jelenlegi teljesítményproblémák alapján, mérlegelve az aggregáció előnyeit és potenciális hátrányait.",
      "Kizárólag a hálózat mérete alapján, mivel az aggregáció csak nagy méretű hálózatokban hatékony.",
      "Csak a rendelkezésre álló költségvetés alapján, mivel az aggregáció bevezetése mindig jelentős beruházást igényel."
    ],
    "helyes": "A hálózat mérete, komplexitása, a forgalom jellege, a skálázhatósági igények és a jelenlegi teljesítményproblémák alapján, mérlegelve az aggregáció előnyeit és potenciális hátrányait."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a NAT (Network Address Translation) szerepét a modern hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT lehetővé teszi a korlátozott számú nyilvános IP-cím hatékony felhasználását és növeli a hálózati biztonságot.",
      "A NAT kizárólag a hálózati sebesség növelésére szolgál, és nincs hatása a biztonságra.",
      "A NAT csak nagy vállalati hálózatokban használatos, otthoni környezetben nincs jelentősége."
    ],
    "helyes": "A NAT lehetővé teszi a korlátozott számú nyilvános IP-cím hatékony felhasználását és növeli a hálózati biztonságot."
  },
  {
    "szoveg": "Milyen hatása van a NAT használatának a hálózati kommunikációra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT módosítja a hálózati csomagok IP-címeit és gyakran a portszámokat is, miközben azok áthaladnak egy útválasztó eszközön.",
      "A NAT titkosítja a hálózati forgalmat, így növelve a biztonságot.",
      "A NAT lelassítja a hálózati kommunikációt, de növeli a megbízhatóságot."
    ],
    "helyes": "A NAT módosítja a hálózati csomagok IP-címeit és gyakran a portszámokat is, miközben azok áthaladnak egy útválasztó eszközön."
  },
  {
    "szoveg": "Mi a Basic NAT (Statikus NAT) fő jellemzője?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy belső privát IP-cím mindig ugyanarra a nyilvános IP-címre fordítódik.",
      "Dinamikusan osztja ki a nyilvános IP-címeket a belső eszközöknek.",
      "Csak a portszámokat módosítja, az IP-címeket nem."
    ],
    "helyes": "Egy belső privát IP-cím mindig ugyanarra a nyilvános IP-címre fordítódik."
  },
  {
    "szoveg": "Mi a NAPT (Network Address and Port Translation) fő előnye a Basic NAT-tal szemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi, hogy több belső eszköz osszon meg egyetlen nyilvános IP-címet.",
      "Gyorsabb adatátvitelt biztosít a hálózaton belül.",
      "Automatikusan titkosítja a hálózati forgalmat."
    ],
    "helyes": "Lehetővé teszi, hogy több belső eszköz osszon meg egyetlen nyilvános IP-címet."
  },
  {
    "szoveg": "Egy otthoni hálózatban hogyan működik a NAPT, amikor több eszköz próbál egyszerre internetre csatlakozni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A router minden eszköz kérését egyedi port-IP kombinációval fordítja le, és nyilvántartja ezeket egy NAT táblázatban.",
      "Minden eszköz kap egy ideiglenes nyilvános IP-címet a routertől.",
      "A router sorba állítja a kéréseket, és egyszerre csak egy eszköz kommunikálhat az internettel."
    ],
    "helyes": "A router minden eszköz kérését egyedi port-IP kombinációval fordítja le, és nyilvántartja ezeket egy NAT táblázatban."
  },
  {
    "szoveg": "Hogyan segíti elő a NAT a hálózati biztonságot? Illusztrálja egy példával!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT elrejti a belső hálózat struktúráját, megnehezítve a külső támadók dolgát, például egy otthoni hálózatban lévő számítógép nem közvetlenül érhető el az internetről.",
      "A NAT titkosítja az összes kimenő adatforgalmat, így a hackerek nem tudják elolvasni az elküldött információkat.",
      "A NAT automatikusan blokkolja az összes bejövő kapcsolatot, teljesen elszigetelve a belső hálózatot az internettől."
    ],
    "helyes": "A NAT elrejti a belső hálózat struktúráját, megnehezítve a külső támadók dolgát, például egy otthoni hálózatban lévő számítógép nem közvetlenül érhető el az internetről."
  },
  {
    "szoveg": "Hogyan járul hozzá az IP címzés hierarchikus felépítése a globális hálózati kommunikáció hatékonyságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hierarchikus felépítés lehetővé teszi a hálózatok és alhálózatok logikus szervezését, ami elősegíti a hatékony útvonalválasztást és a skálázhatóságot.",
      "A hierarchikus felépítés kizárólag a helyi hálózatok kommunikációját segíti elő, és nincs hatással a globális kommunikációra.",
      "Az IP címek hierarchikus felépítése csak az IPv6 protokollban létezik, és nem játszik szerepet az IPv4-alapú globális kommunikációban."
    ],
    "helyes": "A hierarchikus felépítés lehetővé teszi a hálózatok és alhálózatok logikus szervezését, ami elősegíti a hatékony útvonalválasztást és a skálázhatóságot."
  },
  {
    "szoveg": "Miért tekinthető az IP címzési rendszer rugalmassága és adaptálhatósága kulcsfontosságúnak a globális hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi különböző hálózati technológiák és protokollok együttműködését egy heterogén környezetben.",
      "Kizárólag a vezeték nélküli hálózatok hatékony működését biztosítja.",
      "Csak a nagy sebességű optikai hálózatok esetében játszik szerepet a kommunikáció optimalizálásában."
    ],
    "helyes": "Lehetővé teszi különböző hálózati technológiák és protokollok együttműködését egy heterogén környezetben."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az IPv6 bevezetése a jövőbeli Internet of Things (IoT) eszközök elterjedését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 lehetővé teszi gyakorlatilag korlátlan számú eszköz egyedi címzését, ami elősegíti az IoT eszközök széles körű elterjedését.",
      "Az IPv6 bevezetése csökkenti az elérhető IP címek számát, ami korlátozza az IoT eszközök elterjedését.",
      "Az IPv6 nem befolyásolja az IoT eszközök elterjedését, mert ezek az eszközök kizárólag IPv4 címeket használnak."
    ],
    "helyes": "Az IPv6 lehetővé teszi gyakorlatilag korlátlan számú eszköz egyedi címzését, ami elősegíti az IoT eszközök széles körű elterjedését."
  },
  {
    "szoveg": "Milyen potenciális kihívásokkal szembesülhetnek a hálózati szakemberek az IPv4-ről IPv6-ra való globális átállás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kompatibilitási problémák a régi és új rendszerek között, valamint a hálózati eszközök és szoftverek frissítésének szükségessége.",
      "Az IPv6 címek rövidebb hossza miatt csökken a hálózat biztonsága és a címzési lehetőségek.",
      "Az IPv6 protokoll nem támogatja a vezeték nélküli kommunikációt, ami korlátozza a mobil eszközök használatát."
    ],
    "helyes": "Kompatibilitási problémák a régi és új rendszerek között, valamint a hálózati eszközök és szoftverek frissítésének szükségessége."
  },
  {
    "szoveg": "Egy multinacionális vállalat globális videokonferencia-rendszert szeretne implementálni. Hogyan segíti az IP címzés ezt a projektet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP címzés lehetővé teszi, hogy a világ különböző pontjain lévő irodák eszközei egyedileg azonosíthatók és elérhetők legyenek, biztosítva a zökkenőmentes kommunikációt.",
      "Az IP címzés csak a helyi hálózaton belüli kommunikációt teszi lehetővé, így nem alkalmas globális videokonferencia-rendszer megvalósítására.",
      "Az IP címzés kizárólag szöveges adatok továbbítására alkalmas, ezért nem használható videokonferencia-rendszerekben."
    ],
    "helyes": "Az IP címzés lehetővé teszi, hogy a világ különböző pontjain lévő irodák eszközei egyedileg azonosíthatók és elérhetők legyenek, biztosítva a zökkenőmentes kommunikációt."
  },
  {
    "szoveg": "Egy nagy e-kereskedelmi platform globális terjeszkedést tervez. Hogyan támogatja az IP címzési rendszer ezt a folyamatot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP címzés lehetővé teszi a földrajzilag elosztott szerverek és CDN-ek hatékony működését, biztosítva a gyors és megbízható hozzáférést a világ minden pontjáról.",
      "Az IP címzés csak egy országon belül teszi lehetővé a szerverek működését, így nem alkalmas globális e-kereskedelmi platform kiszolgálására.",
      "Az IP címzés kizárólag a fizetési tranzakciók biztonságos lebonyolítását szolgálja, és nem játszik szerepet a platform globális elérhetőségében."
    ],
    "helyes": "Az IP címzés lehetővé teszi a földrajzilag elosztott szerverek és CDN-ek hatékony működését, biztosítva a gyors és megbízható hozzáférést a világ minden pontjáról."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az IPv4-ről IPv6-ra történő átállás szükségességét a modern internetes infrastruktúra szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átállás elengedhetetlen az internetes eszközök számának növekedése miatt, mivel az IPv4 címtartománya kimerülőben van, és az IPv6 jobb teljesítményt, valamint fejlettebb biztonsági funkciókat kínál.",
      "Az átállás csupán egy technológiai divat, amely nem hoz jelentős előnyöket a jelenlegi hálózati infrastruktúrához képest.",
      "Az IPv6-ra való átállás kizárólag a nagyvállalatok számára szükséges, a kisebb felhasználók továbbra is használhatják az IPv4-et problémamentesen."
    ],
    "helyes": "Az átállás elengedhetetlen az internetes eszközök számának növekedése miatt, mivel az IPv4 címtartománya kimerülőben van, és az IPv6 jobb teljesítményt, valamint fejlettebb biztonsági funkciókat kínál."
  },
  {
    "szoveg": "Milyen módon értelmezhetjük a 'Dual Stack' módszert az IPv4-ről IPv6-ra történő átállás kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'Dual Stack' lehetővé teszi, hogy az eszközök egyidejűleg támogassák mind az IPv4, mind az IPv6 protokollt, megkönnyítve a fokozatos átmenetet.",
      "A 'Dual Stack' egy olyan módszer, amely automatikusan konvertálja az IPv4 címeket IPv6 címekké, így nincs szükség külön beállításokra.",
      "A 'Dual Stack' kizárólag az IPv6 protokoll használatát teszi lehetővé, teljesen kiiktatva az IPv4-et a hálózatból."
    ],
    "helyes": "A 'Dual Stack' lehetővé teszi, hogy az eszközök egyidejűleg támogassák mind az IPv4, mind az IPv6 protokollt, megkönnyítve a fokozatos átmenetet."
  },
  {
    "szoveg": "Milyen következményekre számíthatunk az IPv6 szélesebb körű elterjedésével kapcsolatban az IoT (Internet of Things) eszközök területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IoT eszközök számának ugrásszerű növekedése, fejlettebb biztonsági funkciók és hatékonyabb kommunikáció az eszközök között.",
      "Az IoT eszközök számának csökkenése, mivel az IPv6 protokoll túl bonyolult lesz a kisebb eszközök számára.",
      "Az IoT eszközök teljesítményének jelentős romlása az IPv6 protokoll nagyobb erőforrásigénye miatt."
    ],
    "helyes": "Az IoT eszközök számának ugrásszerű növekedése, fejlettebb biztonsági funkciók és hatékonyabb kommunikáció az eszközök között."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le az IPv6 adaptáció jövőjére vonatkozóan, figyelembe véve a jelenlegi trendeket és kihívásokat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 adaptáció folyamatosan növekszik, de az IPv4 még hosszú ideig párhuzamosan fog működni, különösen a kisebb vállalkozások és otthoni felhasználók körében.",
      "Az IPv6 adaptáció hirtelen felgyorsul, és teljesen kiszorítja az IPv4-et a következő 2-3 éven belül minden felhasználói szegmensben.",
      "Az IPv6 adaptáció lelassul és végül megáll, mivel a legtöbb felhasználó és vállalkozás megelégszik az IPv4 által nyújtott lehetőségekkel."
    ],
    "helyes": "Az IPv6 adaptáció folyamatosan növekszik, de az IPv4 még hosszú ideig párhuzamosan fog működni, különösen a kisebb vállalkozások és otthoni felhasználók körében."
  },
  {
    "szoveg": "Hogyan ítélhetjük meg az IPv6 protokoll bevezetésének sikerességét egy nagyvállalat esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A sikeres bevezetés jelei közé tartozik a zökkenőmentes kommunikáció az IPv6 és IPv4 hálózatok között, a hálózati teljesítmény javulása, és a biztonsági incidensek számának csökkenése.",
      "A sikeres bevezetés egyetlen mércéje az IPv4 használatának teljes megszüntetése a vállalaton belül, függetlenül a teljesítménytől vagy biztonsági megfontolásokról.",
      "Az IPv6 bevezetése akkor sikeres, ha a vállalat összes partnere és ügyfele is áttért az IPv6 használatára, függetlenül a belső hálózat állapotától."
    ],
    "helyes": "A sikeres bevezetés jelei közé tartozik a zökkenőmentes kommunikáció az IPv6 és IPv4 hálózatok között, a hálózati teljesítmény javulása, és a biztonsági incidensek számának csökkenése."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhetjük meg, hogy egy ország vagy régió felkészült-e az IPv6 széles körű bevezetésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felkészültség jelei közé tartozik a megfelelő szabályozási környezet, az internetszolgáltatók IPv6 támogatása, a hálózati infrastruktúra korszerűsítése és az IT szakemberek képzettsége.",
      "Egy ország vagy régió akkor felkészült, ha minden internetfelhasználó tisztában van az IPv6 technikai részleteivel és képes önállóan konfigurálni eszközeit.",
      "A felkészültség egyetlen mércéje az IPv4 címek teljes kimerülése az adott országban vagy régióban."
    ],
    "helyes": "A felkészültség jelei közé tartozik a megfelelő szabályozási környezet, az internetszolgáltatók IPv6 támogatása, a hálózati infrastruktúra korszerűsítése és az IT szakemberek képzettsége."
  },
  {
    "szoveg": "Mit jelent az IP protokoll állapotmentessége a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-réteg minden csomagot függetlenül kezel, nem tárol információt a korábbi vagy következő csomagokról.",
      "Az IP-réteg minden csomagot azonos útvonalon továbbít a hálózaton keresztül.",
      "Az IP-réteg minden csomagot titkosít, hogy megvédje az adatok bizalmasságát."
    ],
    "helyes": "Az IP-réteg minden csomagot függetlenül kezel, nem tárol információt a korábbi vagy következő csomagokról."
  },
  {
    "szoveg": "Hogyan befolyásolja az IP protokoll állapotmentessége a hálózati útválasztók (routerek) működését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az útválasztók egyszerűbben működhetnek, mivel nem kell állapotinformációkat tárolniuk minden kapcsolatról.",
      "Az útválasztóknak bonyolultabb algoritmusokat kell használniuk a csomagok kezeléséhez.",
      "Az útválasztóknak minden csomag esetén kapcsolatba kell lépniük a küldő és fogadó eszközökkel."
    ],
    "helyes": "Az útválasztók egyszerűbben működhetnek, mivel nem kell állapotinformációkat tárolniuk minden kapcsolatról."
  },
  {
    "szoveg": "Milyen következménye lehet az IP protokoll állapotmentességének a jövőbeli Internet of Things (IoT) eszközök kommunikációjára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IoT eszközök hatékonyabban kommunikálhatnak, kihasználva az állapotmentes protokoll skálázhatóságát.",
      "Az IoT eszközöknek komplexebb protokollokat kell majd használniuk az állapotmentesség miatt.",
      "Az állapotmentesség miatt az IoT eszközök nem lesznek képesek megbízható kommunikációra."
    ],
    "helyes": "Az IoT eszközök hatékonyabban kommunikálhatnak, kihasználva az állapotmentes protokoll skálázhatóságát."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az IP protokoll állapotmentessége a jövőbeli 5G hálózatok teljesítményét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az állapotmentesség hozzájárulhat a 5G hálózatok jobb skálázhatóságához és alacsonyabb késleltetéséhez.",
      "Az állapotmentesség miatt a 5G hálózatoknak nehezebb lesz kezelni a nagy adatforgalmat.",
      "Az állapotmentesség csökkenti a 5G hálózatok biztonságát és megbízhatóságát."
    ],
    "helyes": "Az állapotmentesség hozzájárulhat a 5G hálózatok jobb skálázhatóságához és alacsonyabb késleltetéséhez."
  },
  {
    "szoveg": "Hogyan értékelhető az IP protokoll állapotmentességének szerepe a modern hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az állapotmentesség kulcsfontosságú az Internet skálázhatósága szempontjából, de a megbízhatóságot magasabb rétegeknek kell biztosítaniuk.",
      "Az állapotmentesség elavult koncepció, amely gátolja a modern hálózatok fejlődését és teljesítményét.",
      "Az állapotmentesség csak kis hálózatokban hasznos, nagy skálájú rendszerekben inkább hátrányt jelent."
    ],
    "helyes": "Az állapotmentesség kulcsfontosságú az Internet skálázhatósága szempontjából, de a megbízhatóságot magasabb rétegeknek kell biztosítaniuk."
  },
  {
    "szoveg": "Milyen szempontok alapján lehet kritikusan értékelni az IP protokoll állapotmentességének hatását a hálózati biztonságra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az állapotmentesség növeli a rugalmasságot, de a biztonsági funkciókat magasabb rétegeknek kell megvalósítaniuk.",
      "Az állapotmentesség önmagában elegendő a hálózati biztonság garantálásához.",
      "Az állapotmentesség lehetetlenné teszi bármilyen hatékony biztonsági intézkedés megvalósítását."
    ],
    "helyes": "Az állapotmentesség növeli a rugalmasságot, de a biztonsági funkciókat magasabb rétegeknek kell megvalósítaniuk."
  },
  {
    "szoveg": "Milyen fő funkciókat lát el az adat sík a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Adatátvitel, csomagfeldolgozás, pufferelés, forgalom osztályozás és QoS kezelése",
      "Útvonalválasztás, protokoll-konverzió, titkosítás és felhasználói hitelesítés",
      "Hálózati topológia tervezése, eszközök konfigurálása és szoftverfrissítések kezelése"
    ],
    "helyes": "Adatátvitel, csomagfeldolgozás, pufferelés, forgalom osztályozás és QoS kezelése"
  },
  {
    "szoveg": "Hogyan járulnak hozzá az adat sík elemei a hálózat biztonságos és hatékony működéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csomagszűrés, forgalom osztályozás és QoS kezelés együttes alkalmazásával",
      "Kizárólag a fizikai kapcsolatok titkosításával és a felhasználók azonosításával",
      "A hálózati eszközök folyamatos monitorozásával és automatikus javításával"
    ],
    "helyes": "A csomagszűrés, forgalom osztályozás és QoS kezelés együttes alkalmazásával"
  },
  {
    "szoveg": "Mit jelent a pufferelés az adat sík kontextusában, és milyen problémát old meg?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csomagok ideiglenes tárolása, ami segít kezelni a hálózati torlódásokat",
      "A csomagok titkosítása, ami növeli az adatátvitel biztonságát",
      "A csomagok méretének csökkentése, ami gyorsítja az adatátvitelt"
    ],
    "helyes": "A csomagok ideiglenes tárolása, ami segít kezelni a hálózati torlódásokat"
  },
  {
    "szoveg": "Hogyan kapcsolódik össze az adat sík és a kontroll sík működése a hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kontroll sík által meghatározott szabályok és útvonalak alapján történik az adatok továbbítása az adat síkban",
      "Az adat sík határozza meg a hálózati topológiát, amit a kontroll sík használ",
      "A két sík egymástól függetlenül működik, nincs közvetlen kapcsolat közöttük"
    ],
    "helyes": "A kontroll sík által meghatározott szabályok és útvonalak alapján történik az adatok továbbítása az adat síkban"
  },
  {
    "szoveg": "Hogyan segíti elő a hierarchikus címzés a hálózatok skálázhatóságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi új alhálózatok hozzáadását a teljes címzési rendszer újratervezése nélkül.",
      "Növeli a hálózati eszközök számát, így automatikusan bővíti a hálózatot.",
      "Csökkenti a hálózati forgalmat, ezáltal lehetővé téve több eszköz csatlakozását."
    ],
    "helyes": "Lehetővé teszi új alhálózatok hozzáadását a teljes címzési rendszer újratervezése nélkül."
  },
  {
    "szoveg": "Miért tekinthető a hierarchikus címzés hatékony módszernek a hálózatkezelésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert a címek struktúrája információt hordoz a hálózat topológiájáról, megkönnyítve a kezelést és hibaelhárítást.",
      "Mert minden eszköznek egyedi, véletlenszerű címet ad, ami növeli a biztonságot.",
      "Mert csökkenti a szükséges IP-címek számát, így spórolva a címtartománnyal."
    ],
    "helyes": "Mert a címek struktúrája információt hordoz a hálózat topológiájáról, megkönnyítve a kezelést és hibaelhárítást."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az IPv6 bevezetése a hierarchikus címzés jelentőségét a jövőben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPv6 várhatóan növeli a hierarchikus címzés jelentőségét, több címzési szintet és lehetőséget biztosítva.",
      "Az IPv6 valószínűleg csökkenti a hierarchikus címzés fontosságát, mivel végtelen számú egyedi címet biztosít.",
      "Az IPv6 várhatóan nem befolyásolja a hierarchikus címzést, mivel csak a címek hosszát növeli meg."
    ],
    "helyes": "Az IPv6 várhatóan növeli a hierarchikus címzés jelentőségét, több címzési szintet és lehetőséget biztosítva."
  },
  {
    "szoveg": "Milyen hatása lehet a hierarchikus címzésnek az IoT (Internet of Things) eszközök terjedésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hierarchikus címzés várhatóan kulcsfontosságúvá válik az IoT eszközök hatékony kezelésében és szervezésében.",
      "Az IoT eszközök valószínűleg nem fogják használni a hierarchikus címzést, mert túl bonyolult a kis eszközök számára.",
      "A hierarchikus címzés várhatóan lelassítja az IoT eszközök kommunikációját, ezért más megoldásokat fognak előnyben részesíteni."
    ],
    "helyes": "A hierarchikus címzés várhatóan kulcsfontosságúvá válik az IoT eszközök hatékony kezelésében és szervezésében."
  },
  {
    "szoveg": "Milyen példával illusztrálható a hierarchikus címzés egy vállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-cím 192.168.10.25, ahol 192.168 a vállalat fő hálózata, 10 egy részleg alhálózata, és 25 egy konkrét eszköz azonosítója.",
      "Az IP-cím 10.0.0.1, ahol minden szám egy különböző vállalati részleget jelöl.",
      "A MAC-cím 00:1A:2B:3C:4D:5E, ahol minden kettős szám egy hierarchikus szintet reprezentál a vállalaton belül."
    ],
    "helyes": "Az IP-cím 192.168.10.25, ahol 192.168 a vállalat fő hálózata, 10 egy részleg alhálózata, és 25 egy konkrét eszköz azonosítója."
  },
  {
    "szoveg": "Hogyan illusztrálható a hierarchikus címzés jelentősége egy egyetemi kampusz hálózatában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-cím 10.2.3.45, ahol 10 az egyetem, 2 egy kar, 3 egy tanszék, és 45 egy konkrét számítógép azonosítója.",
      "Az IP-cím 192.168.1.1, ahol minden szám egy különböző egyetemi épületet jelöl.",
      "A domain név student1.dept.faculty.university.edu, ahol minden szint egy fizikai hálózati eszközt reprezentál."
    ],
    "helyes": "Az IP-cím 10.2.3.45, ahol 10 az egyetem, 2 egy kar, 3 egy tanszék, és 45 egy konkrét számítógép azonosítója."
  },
  {
    "szoveg": "Milyen szerepet tölt be az alhálózati maszk az IPv4 címzésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Meghatározza, hogy az IP-cím mely része azonosítja a hálózatot, és mely része az eszközt a hálózaton belül.",
      "Kizárólag a hálózat azonosítására szolgál, nincs köze az eszközök azonosításához.",
      "Csak az eszközök azonosítására használják, a hálózat azonosítása más módon történik."
    ],
    "helyes": "Meghatározza, hogy az IP-cím mely része azonosítja a hálózatot, és mely része az eszközt a hálózaton belül."
  },
  {
    "szoveg": "Mit jelent a CIDR jelölésben a '/24' az IPv4 címzésnél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alhálózati maszkban 24 darab '1'-es bit található.",
      "A hálózat 24 különböző alhálózatra van felosztva.",
      "Az IP-cím utolsó 24 bitje használható eszközök címzésére."
    ],
    "helyes": "Az alhálózati maszkban 24 darab '1'-es bit található."
  },
  {
    "szoveg": "Hogyan számítható ki egy IPv4 hálózat broadcast címe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati cím host részének minden bitjét 1-re állítjuk.",
      "A hálózati cím minden bitjét 1-re állítjuk.",
      "Az IP-cím és az alhálózati maszk OR műveletével."
    ],
    "helyes": "A hálózati cím host részének minden bitjét 1-re állítjuk."
  },
  {
    "szoveg": "Hogyan határozható meg egy IPv4 hálózat első használható IP-címe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati cím utolsó oktettjét 1-gyel növeljük.",
      "A broadcast cím első oktettjét 1-gyel csökkentjük.",
      "Az alhálózati maszk első oktettjét 1-gyel növeljük."
    ],
    "helyes": "A hálózati cím utolsó oktettjét 1-gyel növeljük."
  },
  {
    "szoveg": "Milyen címtartományt fed le a 192.168.10.0/25 alhálózat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "192.168.10.0 - 192.168.10.127",
      "192.168.10.0 - 192.168.10.255",
      "192.168.10.128 - 192.168.10.255"
    ],
    "helyes": "192.168.10.0 - 192.168.10.127"
  },
  {
    "szoveg": "Hogyan osztható fel a 172.16.0.0/16 hálózat négy egyenlő méretű alhálózatra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "172.16.0.0/18, 172.16.64.0/18, 172.16.128.0/18, 172.16.192.0/18",
      "172.16.0.0/17, 172.16.128.0/17, 172.17.0.0/17, 172.17.128.0/17",
      "172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24, 172.16.3.0/24"
    ],
    "helyes": "172.16.0.0/18, 172.16.64.0/18, 172.16.128.0/18, 172.16.192.0/18"
  },
  {
    "szoveg": "Hogyan értelmezhetjük a NAT (Network Address Translation) szerepét az IPv4-címek megőrzésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT lehetővé teszi, hogy több belső eszköz osszon meg egyetlen nyilvános IP-címet, így csökkentve a szükséges nyilvános IPv4-címek számát.",
      "A NAT automatikusan generál új IPv4-címeket, amikor a meglévők elfogynak.",
      "A NAT konvertálja az IPv4-címeket IPv6-címekké, így növelve a rendelkezésre álló címek számát."
    ],
    "helyes": "A NAT lehetővé teszi, hogy több belső eszköz osszon meg egyetlen nyilvános IP-címet, így csökkentve a szükséges nyilvános IPv4-címek számát."
  },
  {
    "szoveg": "Milyen módon értelmezhetjük a NAT hatását a hálózati biztonságra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT egyfajta alapszintű tűzfalként működik, elrejtve a belső hálózat struktúráját és megnehezítve a kívülről érkező közvetlen támadásokat.",
      "A NAT teljes körű védelmet nyújt minden típusú hálózati támadás ellen.",
      "A NAT automatikusan titkosítja az összes hálózati forgalmat, így növelve a biztonságot."
    ],
    "helyes": "A NAT egyfajta alapszintű tűzfalként működik, elrejtve a belső hálózat struktúráját és megnehezítve a kívülről érkező közvetlen támadásokat."
  },
  {
    "szoveg": "Hogyan hasonlítható össze a NAT hatása kis és nagy méretű hálózatokban a skálázhatóság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kis hálózatokban a NAT hatékonyan működik és segíti a skálázhatóságot, míg nagy hálózatokban szűk keresztmetszetet jelenthet és korlátozhatja a teljesítményt.",
      "A NAT egyformán hatékony és problémamentes mind kis, mind nagy méretű hálózatokban.",
      "A NAT csak nagy méretű hálózatokban hatékony, kis hálózatokban felesleges terhelést jelent."
    ],
    "helyes": "Kis hálózatokban a NAT hatékonyan működik és segíti a skálázhatóságot, míg nagy hálózatokban szűk keresztmetszetet jelenthet és korlátozhatja a teljesítményt."
  },
  {
    "szoveg": "Hogyan hasonlítható össze a NAT hatása a hálózati alkalmazások működésére a hagyományos, NAT nélküli hálózatokkal?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT megnehezítheti bizonyos alkalmazások, különösen a peer-to-peer és a közvetlen kapcsolatot igénylő alkalmazások működését, míg a hagyományos hálózatokban ezek problémamentesen működnek.",
      "A NAT minden esetben javítja az alkalmazások teljesítményét a hagyományos hálózatokhoz képest.",
      "A NAT és a hagyományos hálózatok között nincs különbség az alkalmazások működése szempontjából."
    ],
    "helyes": "A NAT megnehezítheti bizonyos alkalmazások, különösen a peer-to-peer és a közvetlen kapcsolatot igénylő alkalmazások működését, míg a hagyományos hálózatokban ezek problémamentesen működnek."
  },
  {
    "szoveg": "Hogyan ítélhető meg a NAT használata egy kis méretű vállalati hálózatban, ahol a költséghatékonyság és az alapszintű biztonság a fő szempont?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT használata előnyös, mert költséghatékony megoldást nyújt az IP-cím kezelésre és alapszintű biztonsági védelmet biztosít.",
      "A NAT használata kerülendő, mert túl bonyolult és drága megoldás egy kis méretű vállalat számára.",
      "A NAT használata közömbös, nincs jelentős hatása sem a költségekre, sem a biztonságra."
    ],
    "helyes": "A NAT használata előnyös, mert költséghatékony megoldást nyújt az IP-cím kezelésre és alapszintű biztonsági védelmet biztosít."
  },
  {
    "szoveg": "Hogyan ítélhető meg a NAT alkalmazása egy nagy forgalmú e-kereskedelmi weboldal infrastruktúrájában, ahol a skálázhatóság és a magas rendelkezésre állás kritikus fontosságú?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A NAT alkalmazása nem ajánlott, mert korlátozhatja a teljesítményt és a skálázhatóságot, valamint megnehezítheti a terheléselosztást.",
      "A NAT alkalmazása ideális megoldás, mert maximalizálja a biztonságot és a teljesítményt.",
      "A NAT alkalmazása közömbös, nincs jelentős hatása a teljesítményre vagy a skálázhatóságra."
    ],
    "helyes": "A NAT alkalmazása nem ajánlott, mert korlátozhatja a teljesítményt és a skálázhatóságot, valamint megnehezítheti a terheléselosztást."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a DHCP szerepét egy nagy vállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DHCP automatizálja az IP-címek kiosztását, csökkentve az adminisztrációs terheket és biztosítva a hatékony címkezelést a sok eszköz számára.",
      "A DHCP kizárólag a vezeték nélküli eszközök IP-címeinek kiosztásáért felelős, míg a vezetékes eszközök statikus IP-címeket kapnak.",
      "A DHCP feladata a hálózati forgalom titkosítása és a felhasználók hitelesítése a vállalati hálózaton belül."
    ],
    "helyes": "A DHCP automatizálja az IP-címek kiosztását, csökkentve az adminisztrációs terheket és biztosítva a hatékony címkezelést a sok eszköz számára."
  },
  {
    "szoveg": "Miként értelmezhető a DHCP 'DORA' folyamata a hálózati kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DORA folyamat egy strukturált kommunikációs protokoll az ügyfél és a DHCP szerver között, amely biztosítja a megbízható és automatizált IP-cím kiosztást.",
      "A DORA folyamat egy biztonsági ellenőrzési mechanizmus, amely megakadályozza az illetéktelen eszközök csatlakozását a hálózathoz.",
      "A DORA folyamat egy adatátviteli protokoll, amely optimalizálja a hálózati sávszélességet az eszközök között."
    ],
    "helyes": "A DORA folyamat egy strukturált kommunikációs protokoll az ügyfél és a DHCP szerver között, amely biztosítja a megbízható és automatizált IP-cím kiosztást."
  },
  {
    "szoveg": "Mi a DHCP protokoll fő célja?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-címek és egyéb hálózati konfigurációs információk automatikus és dinamikus kiosztása.",
      "A hálózati forgalom titkosítása és a felhasználók hitelesítése.",
      "A hálózati eszközök fizikai címeinek (MAC-címek) nyilvántartása és kezelése."
    ],
    "helyes": "Az IP-címek és egyéb hálózati konfigurációs információk automatikus és dinamikus kiosztása."
  },
  {
    "szoveg": "Milyen fő lépésekből áll a DHCP működése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Discover, Offer, Request, Acknowledge (DORA)",
      "Connect, Authenticate, Transfer, Disconnect (CATD)",
      "Search, Find, Configure, Confirm (SFCC)"
    ],
    "helyes": "Discover, Offer, Request, Acknowledge (DORA)"
  },
  {
    "szoveg": "Milyen példával illusztrálható a DHCP működése egy mindennapi helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy laptop automatikusan kap IP-címet és hálózati beállításokat, amikor csatlakozik egy kávézó Wi-Fi hálózatához.",
      "Egy okostelefon manuálisan beállítja az IP-címét, amikor csatlakozik az otthoni Wi-Fi hálózathoz.",
      "Egy asztali számítógép statikus IP-címet használ, amit a rendszergazda állított be a vállalati hálózaton."
    ],
    "helyes": "Egy laptop automatikusan kap IP-címet és hálózati beállításokat, amikor csatlakozik egy kávézó Wi-Fi hálózatához."
  },
  {
    "szoveg": "Hogyan illusztrálható a DHCP szerepe egy nagy irodaépület hálózatának működésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DHCP szerver automatikusan oszt ki IP-címeket az alkalmazottak laptopjainak és okostelefonjainak, amikor azok csatlakoznak a vállalati Wi-Fi-hez, lehetővé téve a zökkenőmentes munkavégzést különböző emeleteken és tárgyalókban.",
      "Az IT részleg manuálisan állítja be minden új eszköz IP-címét, amikor az alkalmazottak először csatlakoznak a hálózathoz, biztosítva a pontos nyilvántartást.",
      "Minden alkalmazott saját magának állítja be az IP-címét egy előre meghatározott tartományból, amikor először csatlakozik a vállalati hálózathoz."
    ],
    "helyes": "A DHCP szerver automatikusan oszt ki IP-címeket az alkalmazottak laptopjainak és okostelefonjainak, amikor azok csatlakoznak a vállalati Wi-Fi-hez, lehetővé téve a zökkenőmentes munkavégzést különböző emeleteken és tárgyalókban."
  },
  {
    "szoveg": "Egy vállalat IT-menedzsere azt fontolgatja, hogy a belső hálózatukhoz a 172.18.0.0/16 címtartományt használja. Hogyan értelmeznéd ezt a döntést a privát és publikus címtartományok szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez egy megfelelő döntés, mivel a 172.18.0.0/16 tartomány a privát címtartományba tartozik, ami ideális belső hálózatokhoz.",
      "Ez egy hibás döntés, mert a 172.18.0.0/16 tartomány publikus címtartomány, amit nem szabad belső hálózatokban használni.",
      "Ez egy kockázatos döntés, mert a 172.18.0.0/16 tartomány sem nem privát, sem nem publikus, hanem egy speciális, fenntartott tartomány."
    ],
    "helyes": "Ez egy megfelelő döntés, mivel a 172.18.0.0/16 tartomány a privát címtartományba tartozik, ami ideális belső hálózatokhoz."
  },
  {
    "szoveg": "Egy hálózati adminisztrátor azt tapasztalja, hogy a vállalat belső szerverének IP-címe 8.8.8.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Hogyan értelmeznéd ezt a helyzetet a privát és publikus címtartományok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez egy szokatlan és potenciálisan problémás konfiguráció, mivel a 8.8.8.8 egy publikus IP-cím, amit általában nem használnak belső szerverekhez.",
      "Ez egy standard konfiguráció, mivel a 8.8.8.8 egy privát IP-cím, amit gyakran használnak belső szerverekhez.",
      "Ez egy ideális konfiguráció, mert a 8.8.8.8 egy speciális, belső használatra fenntartott IP-cím."
    ],
    "helyes": "Ez egy szokatlan és potenciálisan problémás konfiguráció, mivel a 8.8.8.8 egy publikus IP-cím, amit általában nem használnak belső szerverekhez."
  },
  {
    "szoveg": "Egy hálózati szakember a következő IP-címeket látja egy vállalati hálózatban: 10.0.0.1, 172.31.255.254, 192.168.1.100, 203.0.113.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Hogyan osztályoznád ezeket az IP-címeket?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "10.0.0.1, 172.31.255.254, 192.168.1.100 privát címek; 203.0.113.25 publikus cím",
      "10.0.0.1, 192.168.1.100 privát címek; 172.31.255.254, 203.0.113.25 publikus címek",
      "Minden felsorolt IP-cím privát cím"
    ],
    "helyes": "10.0.0.1, 172.31.255.254, 192.168.1.100 privát címek; 203.0.113.25 publikus cím"
  },
  {
    "szoveg": "Egy kis startup cég hálózati adminisztrátora a következő IP-címtartományokat tervezi használni: 192.168.0.0/24 a belső hálózathoz, és 11.0.0.0/8 a szerverekhez. Hogyan osztályoznád ezeket a választásokat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 192.168.0.0/24 helyes választás privát hálózathoz, de a 11.0.0.0/8 hibás, mert ez publikus tartomány",
      "Mindkét választás helyes, mind a 192.168.0.0/24, mind a 11.0.0.0/8 privát tartományok",
      "A 192.168.0.0/24 hibás választás privát hálózathoz, de a 11.0.0.0/8 helyes, mert ez privát tartomány"
    ],
    "helyes": "A 192.168.0.0/24 helyes választás privát hálózathoz, de a 11.0.0.0/8 hibás, mert ez publikus tartomány"
  },
  {
    "szoveg": "Egy középméretű vállalat IT-vezetője azt javasolja, hogy használjanak 10.0.0.0/8 címtartományt a belső hálózatukhoz, és alkalmazzanak NAT-ot az internetes kommunikációhoz. Hogyan ítélnéd meg ezt a javaslatot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez egy megfelelő és biztonságos megközelítés, amely hatékonyan használja a privát címtartományt és védi a belső hálózatot.",
      "Ez egy elavult megközelítés, mert a modern hálózatokban már nem szükséges privát címtartományokat használni.",
      "Ez egy kockázatos megközelítés, mert a 10.0.0.0/8 tartomány túl nagy, és nehezen kezelhető egy vállalati környezetben."
    ],
    "helyes": "Ez egy megfelelő és biztonságos megközelítés, amely hatékonyan használja a privát címtartományt és védi a belső hálózatot."
  },
  {
    "szoveg": "Egy startup cég vezetője azt javasolja, hogy használjanak kizárólag publikus IP-címeket a teljes vállalati infrastruktúrájukhoz, beleértve a belső hálózatot is, a 'jobb láthatóság és egyszerűbb kezelhetőség' érdekében. Hogyan ítélnéd meg ezt a javaslatot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez egy kockázatos és nem ajánlott megközelítés, amely szükségtelenül növeli a biztonsági kockázatokat és pazarolja a korlátozott publikus IP-címeket.",
      "Ez egy innovatív és hatékony megközelítés, amely maximalizálja a hálózat rugalmasságát és skálázhatóságát.",
      "Ez egy semleges megközelítés, amelynek előnyei és hátrányai kiegyenlítik egymást, így nincs jelentős hatása a hálózat működésére."
    ],
    "helyes": "Ez egy kockázatos és nem ajánlott megközelítés, amely szükségtelenül növeli a biztonsági kockázatokat és pazarolja a korlátozott publikus IP-címeket."
  },
  {
    "szoveg": "Hogyan járult hozzá a CIDR (Classless Inter-Domain Routing) az IPv4 címtartomány hatékonyabb kihasználásához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CIDR rugalmas alhálózati maszkokat használ, lehetővé téve a hálózati címtartományok tetszőleges felosztását, így a hálózatok méretéhez jobban illeszkedő címtartományok oszthatók ki.",
      "A CIDR kizárólag nagy méretű hálózatokhoz rendel IP-címeket, így csökkentve a kihasználatlan címtartományokat.",
      "A CIDR automatikusan újraosztja a nem használt IP-címeket más hálózatoknak, így biztosítva a folyamatos címellátást."
    ],
    "helyes": "A CIDR rugalmas alhálózati maszkokat használ, lehetővé téve a hálózati címtartományok tetszőleges felosztását, így a hálózatok méretéhez jobban illeszkedő címtartományok oszthatók ki."
  },
  {
    "szoveg": "Milyen hatással volt a CIDR bevezetése az internetes útválasztó táblák méretére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CIDR csökkentette az internetes útválasztó táblák méretét az útvonalak összevonásával.",
      "A CIDR növelte az útválasztó táblák méretét a részletesebb címzési információk miatt.",
      "A CIDR nem volt hatással az útválasztó táblák méretére, csak a címkiosztást befolyásolta."
    ],
    "helyes": "A CIDR csökkentette az internetes útválasztó táblák méretét az útvonalak összevonásával."
  },
  {
    "szoveg": "Mikor vezették be a CIDR-t, és mi volt a fő célja?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "1993-ban, az IPv4 címtartomány hatékonyabb kihasználása és az internetes útválasztó táblák méretének csökkentése érdekében.",
      "2000-ben, az IPv6 bevezetésének előkészítése céljából.",
      "1985-ben, a hálózati biztonság növelése érdekében."
    ],
    "helyes": "1993-ban, az IPv4 címtartomány hatékonyabb kihasználása és az internetes útválasztó táblák méretének csökkentése érdekében."
  },
  {
    "szoveg": "Mi a CIDR-címek jellemző formátuma?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "IP-cím/prefix hossz (pl. 192.168.1.0/24)",
      "IP-cím.alhálózati maszk (pl. 192.168.1.0.255.255.255.0)",
      "Hálózati osztály:IP-cím (pl. C:192.168.1.0)"
    ],
    "helyes": "IP-cím/prefix hossz (pl. 192.168.1.0/24)"
  },
  {
    "szoveg": "Miben különbözik a CIDR az osztályalapú címzési rendszertől a hálózati címtartományok felosztása szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CIDR rugalmas alhálózati maszkokat használ, míg az osztályalapú rendszer fix méretű osztályokat alkalmaz.",
      "A CIDR csak nagy hálózatokra alkalmazható, míg az osztályalapú rendszer minden méretű hálózatra használható.",
      "A CIDR kizárólag IPv6 címekre vonatkozik, míg az osztályalapú rendszer csak IPv4 címeket kezel."
    ],
    "helyes": "A CIDR rugalmas alhálózati maszkokat használ, míg az osztályalapú rendszer fix méretű osztályokat alkalmaz."
  },
  {
    "szoveg": "Hogyan viszonyul a CIDR az IPv6-hoz a címzési és útválasztási elvek tekintetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CIDR elvei és gyakorlata az IPv6-ban is megmaradtak, biztosítva a hatékony címzést és útválasztást.",
      "Az IPv6 teljesen eltérő címzési és útválasztási elveket használ, a CIDR-t nem alkalmazza.",
      "A CIDR csak az IPv4-re vonatkozik, az IPv6 nem igényel hasonló megoldásokat a nagy címtartomány miatt."
    ],
    "helyes": "A CIDR elvei és gyakorlata az IPv6-ban is megmaradtak, biztosítva a hatékony címzést és útválasztást."
  },
  {
    "szoveg": "Az 5G és a jövőbeli 6G technológiák elterjedésével milyen következményre számíthatunk az adat sík fejlesztésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatforgalom exponenciális növekedése miatt új, nagy kapacitású adattovábbítási megoldások fejlesztésére lesz szükség.",
      "Az adatforgalom csökkenni fog, mivel az új technológiák hatékonyabban kezelik az adatokat.",
      "Az adatforgalom változatlan marad, csak a sebesség növekszik."
    ],
    "helyes": "Az adatforgalom exponenciális növekedése miatt új, nagy kapacitású adattovábbítási megoldások fejlesztésére lesz szükség."
  },
  {
    "szoveg": "Milyen hatása lehet az edge computing terjedésének az adat sík fejlesztésére a jövőben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adat sík decentralizálódik, és a peremhálózati eszközök képességei bővülnek.",
      "Az adat sík centralizálódik, és a felhő alapú megoldások válnak dominánssá.",
      "Az adat sík változatlan marad, csak a feldolgozási sebesség növekszik."
    ],
    "helyes": "Az adat sík decentralizálódik, és a peremhálózati eszközök képességei bővülnek."
  },
  {
    "szoveg": "Milyen hipotézist állíthatunk fel az energiahatékonyság és a növekvő adatforgalom kapcsolatáról az adat sík jövőbeli fejlesztésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az energiahatékony hardverek és intelligens energiamenedzsment rendszerek fejlesztése kulcsfontosságúvá válik a növekvő adatforgalom kezelésében.",
      "Az energiafogyasztás növekedése elkerülhetetlen, és nem lesz jelentős hatással az adat sík fejlesztésére.",
      "Az adatforgalom növekedése automatikusan javítja az energiahatékonyságot a méretgazdaságosság miatt."
    ],
    "helyes": "Az energiahatékony hardverek és intelligens energiamenedzsment rendszerek fejlesztése kulcsfontosságúvá válik a növekvő adatforgalom kezelésében."
  },
  {
    "szoveg": "Milyen hipotézist állíthatunk fel a mesterséges intelligencia integrációjának hatásáról az adat sík jövőbeli fejlődésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AI integrációja lehetővé teszi az adat sík önoptimalizálását, javítva a hálózat teljesítményét és biztonságát.",
      "Az AI integrációja csökkenti az adat sík rugalmasságát és növeli a komplexitását.",
      "Az AI integrációja nem lesz jelentős hatással az adat sík működésére és fejlődésére."
    ],
    "helyes": "Az AI integrációja lehetővé teszi az adat sík önoptimalizálását, javítva a hálózat teljesítményét és biztonságát."
  },
  {
    "szoveg": "Mekkora egy IPv6 cím hossza bitekben kifejezve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "128 bit",
      "64 bit",
      "256 bit"
    ],
    "helyes": "128 bit"
  },
  {
    "szoveg": "Mi az IPv6 címek általános formátuma?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "8 darab 16 bites hexadecimális számcsoport, kettőspontokkal elválasztva",
      "4 darab 32 bites decimális számcsoport, pontokkal elválasztva",
      "16 darab 8 bites bináris számcsoport, vesszőkkel elválasztva"
    ],
    "helyes": "8 darab 16 bites hexadecimális számcsoport, kettőspontokkal elválasztva"
  },
  {
    "szoveg": "Hogyan értelmezzük az IPv6 címekben használt kettős kettőspont (::) jelölést?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vagy több egymást követő nulla blokkot helyettesít",
      "Az alhálózat és a host rész közötti határt jelöli",
      "A cím végét jelzi, ha nem használjuk ki mind a 128 bitet"
    ],
    "helyes": "Egy vagy több egymást követő nulla blokkot helyettesít"
  },
  {
    "szoveg": "Mit jelent az, ha egy IPv6 cím a fe80::/10 prefixszel kezdődik?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez egy Link-Local unicast cím",
      "Ez egy Global Unicast cím",
      "Ez egy Multicast cím"
    ],
    "helyes": "Ez egy Link-Local unicast cím"
  },
  {
    "szoveg": "Sorolja fel az IPv6 címek három fő típusát!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Unicast, Multicast, Anycast",
      "Unicast, Broadcast, Multicast",
      "Global, Local, Multicast"
    ],
    "helyes": "Unicast, Multicast, Anycast"
  },
  {
    "szoveg": "Sorolja fel az IPv6 Unicast címek három fő altípusát!",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Global Unicast, Link-Local, Unique Local",
      "Public Unicast, Private Unicast, Loopback",
      "Global Unicast, Site-Local, Node-Local"
    ],
    "helyes": "Global Unicast, Link-Local, Unique Local"
  },
  {
    "szoveg": "Melyik példa illusztrálja helyesen egy érvényes, rövidített IPv6 címet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "2001:db8::1428:57ab",
      "2001::db8::1428:57ab",
      "2001:db8:0:0:0:1428:57ab"
    ],
    "helyes": "2001:db8::1428:57ab"
  },
  {
    "szoveg": "Melyik példa illusztrálja helyesen egy IPv6 multicast cím formátumát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "ff02::1",
      "fe80::1234",
      "2001:db8::1"
    ],
    "helyes": "ff02::1"
  },
  {
    "szoveg": "Mely funkciók tartoznak a vezérlési sík (Control Plane) alapvető feladatai közé a hálózati architektúrában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Útvonalválasztási információk cseréje és kezelése, hálózati topológia felderítése és karbantartása, forgalomirányítási döntések meghozatala.",
      "Adatcsomagok továbbítása, fizikai kapcsolatok létrehozása, alkalmazások közötti kommunikáció biztosítása.",
      "Felhasználói interfészek kezelése, adatbázisok szinkronizálása, szoftverfrissítések telepítése."
    ],
    "helyes": "Útvonalválasztási információk cseréje és kezelése, hálózati topológia felderítése és karbantartása, forgalomirányítási döntések meghozatala."
  },
  {
    "szoveg": "Milyen főbb komponensek és protokollok tartoznak a vezérlési síkhoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Útvonalválasztó protokollok (pl. OSPF, BGP), címzési és névfeloldási rendszerek (pl. DNS), hálózatmenedzsment protokollok (pl. SNMP).",
      "Tűzfalak, vírusirtók, titkosítási algoritmusok.",
      "Webszerverek, adatbázis-kezelők, alkalmazásprogramozási interfészek (API-k)."
    ],
    "helyes": "Útvonalválasztó protokollok (pl. OSPF, BGP), címzési és névfeloldási rendszerek (pl. DNS), hálózatmenedzsment protokollok (pl. SNMP)."
  },
  {
    "szoveg": "Hogyan járul hozzá a vezérlési sík a hálózatok skálázhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a hálózat növekedését és alkalmazkodását a változó igényekhez, dinamikusan kezelve az útvonalválasztást és erőforrás-allokációt.",
      "Korlátozza a hálózat méretét, hogy fenntartsa a teljesítményt és a biztonságot.",
      "Kizárólag statikus konfigurációkat alkalmaz, biztosítva a hálózat stabilitását növekedés során."
    ],
    "helyes": "Lehetővé teszi a hálózat növekedését és alkalmazkodását a változó igényekhez, dinamikusan kezelve az útvonalválasztást és erőforrás-allokációt."
  },
  {
    "szoveg": "Milyen kapcsolat van a vezérlési sík és az adatsík között a modern hálózati architektúrában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezérlési sík irányítja a hálózatot és döntéseket hoz, míg az adatsík ezek alapján továbbítja a tényleges adatforgalmat, szoros együttműködésben egymással.",
      "A vezérlési sík és az adatsík egymástól teljesen függetlenül működnek, nincs köztük interakció.",
      "Az adatsík irányítja a vezérlési síkot, meghatározva a hálózat konfigurációját és működését."
    ],
    "helyes": "A vezérlési sík irányítja a hálózatot és döntéseket hoz, míg az adatsík ezek alapján továbbítja a tényleges adatforgalmat, szoros együttműködésben egymással."
  },
  {
    "szoveg": "Összefoglalva, mi a vezérlési sík (Control Plane) fő szerepe és jelentősége a hálózatok működésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati kommunikáció irányítása, optimalizálása és a hálózati erőforrások kezelése, biztosítva a hatékonyságot, megbízhatóságot és rugalmasságot.",
      "Kizárólag a fizikai kapcsolatok létrehozása és fenntartása a hálózati eszközök között.",
      "Az alkalmazások közötti adatcsere biztosítása és a felhasználói interfészek kezelése."
    ],
    "helyes": "A hálózati kommunikáció irányítása, optimalizálása és a hálózati erőforrások kezelése, biztosítva a hatékonyságot, megbízhatóságot és rugalmasságot."
  },
  {
    "szoveg": "Hogyan befolyásolják a modern hálózati trendek, mint például az SDN és NFV, a vezérlési sík evolúcióját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Centralizálják és programozhatóvá teszik a vezérlési síkot, növelve a rugalmasságot és az automatizációt a hálózatkezelésben.",
      "Teljesen megszüntetik a vezérlési sík szükségességét, áthelyezve minden funkciót az adatsíkba.",
      "Kizárólag a vezérlési sík biztonságára összpontosítanak, figyelmen kívül hagyva a teljesítményt és a skálázhatóságot."
    ],
    "helyes": "Centralizálják és programozhatóvá teszik a vezérlési síkot, növelve a rugalmasságot és az automatizációt a hálózatkezelésben."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz az adat sík és a vezérlési sík működési sebessége és komplexitása a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adat sík gyorsabb, hardver-alapú és egyszerűbb műveleteket végez, míg a vezérlési sík lassabb, szoftver-alapú és komplexebb logikát igényel.",
      "Az adat sík és a vezérlési sík azonos sebességgel működnek, de az adat sík komplexebb műveleteket végez.",
      "A vezérlési sík gyorsabb és egyszerűbb műveleteket végez, míg az adat sík lassabb és komplexebb logikát igényel."
    ],
    "helyes": "Az adat sík gyorsabb, hardver-alapú és egyszerűbb műveleteket végez, míg a vezérlési sík lassabb, szoftver-alapú és komplexebb logikát igényel."
  },
  {
    "szoveg": "Miben különbözik az adat sík és a vezérlési sík funkcionalitása és frissítési gyakorisága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adat sík egyszerű továbbítást végez és állandóan működik, míg a vezérlési sík döntéseket hoz, konfigurál és ritkábban frissül.",
      "Az adat sík döntéseket hoz és gyakran frissül, míg a vezérlési sík egyszerű továbbítást végez és ritkán frissül.",
      "Mind az adat sík, mind a vezérlési sík egyforma funkcionalitással rendelkezik és azonos gyakorisággal frissül."
    ],
    "helyes": "Az adat sík egyszerű továbbítást végez és állandóan működik, míg a vezérlési sík döntéseket hoz, konfigurál és ritkábban frissül."
  },
  {
    "szoveg": "Mit jelent az, hogy 'a vezérlési sík döntései alapján konfigurálódik az adat sík működése' a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezérlési sík által meghatározott szabályok és útvonalak szerint történik az adatcsomagok továbbítása az adat síkon.",
      "Az adat sík határozza meg a vezérlési sík működését és konfigurációját.",
      "A vezérlési sík és az adat sík egymástól függetlenül működnek, nincs köztük kapcsolat."
    ],
    "helyes": "A vezérlési sík által meghatározott szabályok és útvonalak szerint történik az adatcsomagok továbbítása az adat síkon."
  },
  {
    "szoveg": "Hogyan értelmezhető a vezérlési sík és az adat sík kapcsolata a hálózati kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezérlési sík biztosítja a 'szabályokat', amelyek alapján az adat sík gyorsan és hatékonyan továbbítja az adatokat a hálózaton keresztül.",
      "Az adat sík határozza meg a vezérlési sík működését, és a vezérlési sík ez alapján továbbítja az adatokat.",
      "A vezérlési sík és az adat sík egymástól teljesen függetlenül működnek, nincs köztük semmilyen kapcsolat."
    ],
    "helyes": "A vezérlési sík biztosítja a 'szabályokat', amelyek alapján az adat sík gyorsan és hatékonyan továbbítja az adatokat a hálózaton keresztül."
  },
  {
    "szoveg": "Milyen valós életből vett példával illusztrálható az adat sík és a vezérlési sík működése egy hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy úthálózatban az autók mozgása az utakon reprezentálja az adat síkot, míg a közlekedési lámpák és útjelző táblák a vezérlési síkot.",
      "Egy könyvtárban a könyvek mozgatása reprezentálja az adat síkot, míg a könyvtárosok a vezérlési síkot.",
      "Egy étteremben az ételek elkészítése reprezentálja az adat síkot, míg a pincérek a vezérlési síkot."
    ],
    "helyes": "Egy úthálózatban az autók mozgása az utakon reprezentálja az adat síkot, míg a közlekedési lámpák és útjelző táblák a vezérlési síkot."
  },
  {
    "szoveg": "Hogyan illusztrálható egy router működésében az adat sík és a vezérlési sík kapcsolata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A router routing táblája (vezérlési sík) határozza meg, hogy a beérkező csomagok (adat sík) mely kimeneti portra kerüljenek továbbításra.",
      "A router fizikai portjai (adat sík) határozzák meg, hogy milyen routing protokollokat (vezérlési sík) használjon az eszköz.",
      "A router csak az adat síkot használja, nincs szüksége vezérlési síkra a csomagok továbbításához."
    ],
    "helyes": "A router routing táblája (vezérlési sík) határozza meg, hogy a beérkező csomagok (adat sík) mely kimeneti portra kerüljenek továbbításra."
  },
  {
    "szoveg": "Hogyan járulnak hozzá az alhálózatok a hálózati teljesítmény javításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alhálózatok csökkentik a broadcast domainek méretét, ami kevesebb felesleges adatforgalmat és gyorsabb hálózati kommunikációt eredményez.",
      "Az alhálózatok növelik a broadcast domainek méretét, ami több adatforgalmat és lassabb hálózati kommunikációt eredményez.",
      "Az alhálózatok nem befolyásolják a broadcast domaineket, csak a routing táblák méretét csökkentik."
    ],
    "helyes": "Az alhálózatok csökkentik a broadcast domainek méretét, ami kevesebb felesleges adatforgalmat és gyorsabb hálózati kommunikációt eredményez."
  },
  {
    "szoveg": "Milyen szerepet játszanak az alhálózatok a hálózati biztonság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alhálózatok lehetővé teszik a különböző biztonsági szintű hálózati szegmensek elkülönítését, javítva az általános hálózati biztonságot.",
      "Az alhálózatok kizárólag a hálózati teljesítmény javítására szolgálnak, nincs biztonsági funkciójuk.",
      "Az alhálózatok csökkentik a hálózati biztonságot, mert több belépési pontot hoznak létre a támadók számára."
    ],
    "helyes": "Az alhálózatok lehetővé teszik a különböző biztonsági szintű hálózati szegmensek elkülönítését, javítva az általános hálózati biztonságot."
  },
  {
    "szoveg": "Egy gyorsan növekvő vállalat új irodát nyit egy másik városban. Hogyan segíthetnek az alhálózatok a hálózat bővítésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alhálózatok lehetővé teszik az új iroda egyszerű integrálását a meglévő hálózati struktúrába anélkül, hogy a teljes hálózatot át kellene tervezni.",
      "Az alhálózatok használata megnehezíti az új iroda integrálását, mert minden meglévő alhálózatot újra kell konfigurálni.",
      "Az alhálózatok nem játszanak szerepet a hálózat bővítésében, csak a meglévő hálózat optimalizálására szolgálnak."
    ],
    "helyes": "Az alhálózatok lehetővé teszik az új iroda egyszerű integrálását a meglévő hálózati struktúrába anélkül, hogy a teljes hálózatot át kellene tervezni."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az alhálózatok használata egy nagy vállalat hálózatának hibaelhárítási folyamatait?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alhálózatok segítségével a hálózati problémák könnyebben lokalizálhatók és izolálhatók, ami gyorsabb hibaelhárítást tesz lehetővé.",
      "Az alhálózatok használata megnehezíti a hibaelhárítást, mert több hálózati szegmenst kell ellenőrizni.",
      "Az alhálózatoknak nincs hatása a hibaelhárítási folyamatokra, csak a hálózat teljesítményét befolyásolják."
    ],
    "helyes": "Az alhálózatok segítségével a hálózati problémák könnyebben lokalizálhatók és izolálhatók, ami gyorsabb hibaelhárítást tesz lehetővé."
  },
  {
    "szoveg": "Egy egyetemi kampusz hálózatának tervezésekor hogyan alkalmazhatók az alhálózatok a különböző felhasználói csoportok kezelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Külön alhálózatok hozhatók létre a hallgatók, oktatók, adminisztratív személyzet és vendégek számára, biztosítva a megfelelő hozzáférési jogosultságokat és erőforrás-elosztást.",
      "Az egyetemi hálózatban nincs szükség alhálózatokra, minden felhasználó ugyanazt a hálózatot használja azonos jogosultságokkal.",
      "Csak két alhálózat szükséges: egy a hallgatók és egy az oktatók számára, minden más felhasználó ezeket használja."
    ],
    "helyes": "Külön alhálózatok hozhatók létre a hallgatók, oktatók, adminisztratív személyzet és vendégek számára, biztosítva a megfelelő hozzáférési jogosultságokat és erőforrás-elosztást."
  },
  {
    "szoveg": "Hogyan segíthetnek az alhálózatok egy multinacionális vállalat globális hálózatának kialakításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alhálózatok lehetővé teszik a földrajzilag elkülönült irodák logikus szervezését, optimalizálva a forgalmat és javítva a biztonsági kontrollokat.",
      "Az alhálózatok használata nem ajánlott globális hálózatokban, mert megnehezítik a központi irányítást.",
      "Globális hálózatokban az alhálózatok csak a helyi irodákon belül használhatók, a különböző országok között nem."
    ],
    "helyes": "Az alhálózatok lehetővé teszik a földrajzilag elkülönült irodák logikus szervezését, optimalizálva a forgalmat és javítva a biztonsági kontrollokat."
  },
  {
    "szoveg": "Egy hálózati adminisztrátor azt a feladatot kapta, hogy ossza fel a 192.168.10.0/24 hálózatot négy egyenlő méretű alhálózatra. Melyik CIDR jelölést kell használnia az új alhálózatokhoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "192.168.10.0/26, 192.168.10.64/26, 192.168.10.128/26, 192.168.10.192/26",
      "192.168.10.0/25, 192.168.10.128/25, 192.168.10.256/25, 192.168.10.384/25",
      "192.168.10.0/28, 192.168.10.16/28, 192.168.10.32/28, 192.168.10.48/28"
    ],
    "helyes": "192.168.10.0/26, 192.168.10.64/26, 192.168.10.128/26, 192.168.10.192/26"
  },
  {
    "szoveg": "Egy vállalat IT részlege a 172.16.0.0/16 címtartományt kapta meg. A feladat az, hogy hozzanak létre 8 egyenlő méretű alhálózatot. Melyik alhálózati maszkot kell használni az új alhálózatokhoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "255.255.224.0",
      "255.255.240.0",
      "255.255.248.0"
    ],
    "helyes": "255.255.224.0"
  },
  {
    "szoveg": "Egy rendszergazda egy webalkalmazást szeretne telepíteni, amely maximum 60 eszközt fog kiszolgálni. Melyik CIDR jelölést kell használnia a leghatékonyabb címkiosztás érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "/26",
      "/24",
      "/28"
    ],
    "helyes": "/26"
  },
  {
    "szoveg": "Egy vállalat 10.0.0.0/8 privát címtartományt használ, és szeretné ezt felosztani osztályonként. Melyik CIDR jelölést kell használni az értékesítési osztály számára, ha maximum 1000 eszközre van szükségük?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "/22",
      "/20",
      "/24"
    ],
    "helyes": "/22"
  },
  {
    "szoveg": "Mit jelent a 192.168.1.0/24 CIDR jelölésben a '/24' rész?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-cím első 24 bitje azonosítja a hálózatot.",
      "A hálózat 24 különböző eszközt tartalmazhat.",
      "Az IP-cím utolsó 24 bitje azonosítja az eszközt."
    ],
    "helyes": "Az IP-cím első 24 bitje azonosítja a hálózatot."
  },
  {
    "szoveg": "Hogyan értelmezhető a 255.255.255.192 alhálózati maszk CIDR jelölésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "/26",
      "/24",
      "/28"
    ],
    "helyes": "/26"
  },
  {
    "szoveg": "Egy vállalat hálózatát tervezi, ahol négy különböző osztályt kell elkülöníteni: Marketing, Pénzügy, IT és HR. A rendelkezésre álló IP-címtartomány 172.16.0.0/",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Hogyan osztaná fel ezt a címtartományt a négy osztály között, ha mindegyiknek egyenlő méretű alhálózatot szeretne biztosítani?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Marketing: 172.16.0.0/24, Pénzügy: 172.16.1.0/24, IT: 172.16.2.0/24, HR: 172.16.3.0/24",
      "Marketing: 172.16.0.0/23, Pénzügy: 172.16.1.0/23, IT: 172.16.2.0/23, HR: 172.16.3.0/23",
      "Marketing: 172.16.0.0/22, Pénzügy: 172.16.1.0/22, IT: 172.16.2.0/22, HR: 172.16.3.0/22"
    ],
    "helyes": "Marketing: 172.16.0.0/24, Pénzügy: 172.16.1.0/24, IT: 172.16.2.0/24, HR: 172.16.3.0/24"
  },
  {
    "szoveg": "Egy kis cég hálózatát tervezi, ahol három alhálózatra van szükség: Alkalmazottak, Szerverek és Vendégek. A rendelkezésre álló IP-címtartomány 192.168.0.0/",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Hogyan osztaná fel ezt a címtartományt, ha az Alkalmazottak alhálózatnak a legtöbb, a Vendégek alhálózatnak alegkevesebb IP-címre van szüksége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alkalmazottak: 192.168.0.0/25, Szerverek: 192.168.0.128/26, Vendégek: 192.168.0.192/26",
      "Alkalmazottak: 192.168.0.0/26, Szerverek: 192.168.0.64/26, Vendégek: 192.168.0.128/25",
      "Alkalmazottak: 192.168.0.0/24, Szerverek: 192.168.1.0/24, Vendégek: 192.168.2.0/24"
    ],
    "helyes": "Alkalmazottak: 192.168.0.0/25, Szerverek: 192.168.0.128/26, Vendégek: 192.168.0.192/26"
  },
  {
    "szoveg": "Az alhálózati struktúrák tervezésénél mely szempontot NEM kell figyelembe venni az igények felmérése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati eszközök gyártójának preferenciáit",
      "A hálózat felhasználóinak számát és típusát",
      "A szükséges sávszélességet és a várható forgalmat"
    ],
    "helyes": "A hálózati eszközök gyártójának preferenciáit"
  },
  {
    "szoveg": "Az alhálózati struktúrák tervezése során melyik lépés NEM tartozik az IP-címzési terv készítéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati kábelezés típusának kiválasztása",
      "A megfelelő IP-címtartomány kiválasztása",
      "Az IPv4 vagy IPv6 protokoll használatának eldöntése"
    ],
    "helyes": "A hálózati kábelezés típusának kiválasztása"
  },
  {
    "szoveg": "Egy középméretű vállalat hálózatát tervezi, ahol öt különböző osztályt kell elkülöníteni: Értékesítés, Marketing, Fejlesztés, HR és IT. A rendelkezésre álló IP-címtartomány 10.0.0.0/",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Tervezze meg az alhálózati struktúrát úgy, hogy minden osztály egyenlő méretű alhálózatot kapjon, és maradjon hely a jövőbeli bővítésre is.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Értékesítés: 10.0.0.0/24, Marketing: 10.0.1.0/24, Fejlesztés: 10.0.2.0/24, HR: 10.0.3.0/24, IT: 10.0.4.0/24, Tartalék: 10.0.5.0/24, 10.0.6.0/24, 10.0.7.0/24",
      "Értékesítés: 10.0.0.0/23, Marketing: 10.0.2.0/23, Fejlesztés: 10.0.4.0/23, HR: 10.0.6.0/23, IT: 10.0.8.0/23",
      "Értékesítés: 10.0.0.0/25, Marketing: 10.0.0.128/25, Fejlesztés: 10.0.1.0/25, HR: 10.0.1.128/25, IT: 10.0.2.0/25, Tartalék: 10.0.2.128/25, 10.0.3.0/24"
    ],
    "helyes": "Értékesítés: 10.0.0.0/24, Marketing: 10.0.1.0/24, Fejlesztés: 10.0.2.0/24, HR: 10.0.3.0/24, IT: 10.0.4.0/24, Tartalék: 10.0.5.0/24, 10.0.6.0/24, 10.0.7.0/24"
  },
  {
    "szoveg": "Egy kis startup cég hálózatát tervezi, ahol három alhálózatra van szükség: Fejlesztők, Adminisztráció és Tesztkörnyezet. A rendelkezésre álló IP-címtartomány 192.168.100.0/",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Tervezze meg az alhálózati struktúrát úgy, hogy a Fejlesztők kapják a legtöbb címet, az Adminisztráció a legkevesebbet, és maradjon néhány cím tartalékban is.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fejlesztők: 192.168.100.0/25, Tesztkörnyezet: 192.168.100.128/26, Adminisztráció: 192.168.100.192/27, Tartalék: 192.168.100.224/27",
      "Fejlesztők: 192.168.100.0/24, Tesztkörnyezet: 192.168.101.0/24, Adminisztráció: 192.168.102.0/24",
      "Fejlesztők: 192.168.100.0/26, Tesztkörnyezet: 192.168.100.64/26, Adminisztráció: 192.168.100.128/26, Tartalék: 192.168.100.192/26"
    ],
    "helyes": "Fejlesztők: 192.168.100.0/25, Tesztkörnyezet: 192.168.100.128/26, Adminisztráció: 192.168.100.192/27, Tartalék: 192.168.100.224/27"
  },
  {
    "szoveg": "Hogyan működik a 'longest prefix match' elv a routing táblában, és miért fontos ez az útválasztás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A router a leghosszabb egyezést mutató hálózati prefixet választja ki, ami a legspecifikusabb útvonalat jelenti a célhoz, így biztosítva a legpontosabb útválasztást.",
      "A router a legrövidebb egyezést mutató hálózati prefixet választja ki, ami a leggyorsabb útvonalat jelenti a célhoz, így minimalizálva a késleltetést.",
      "A router véletlenszerűen választ a egyező prefixek közül, ami egyenletes terheléselosztást biztosít a hálózatban."
    ],
    "helyes": "A router a leghosszabb egyezést mutató hálózati prefixet választja ki, ami a legspecifikusabb útvonalat jelenti a célhoz, így biztosítva a legpontosabb útválasztást."
  },
  {
    "szoveg": "Mi az adminisztratív távolság szerepe az útválasztásban, és hogyan befolyásolja a router döntéseit?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adminisztratív távolság az útválasztási információforrás megbízhatóságát jelzi, és a router az alacsonyabb értékű forrást részesíti előnyben több útvonal esetén.",
      "Az adminisztratív távolság a hálózati csomópontok közötti fizikai távolságot jelöli, és a router mindig a legrövidebb utat választja.",
      "Az adminisztratív távolság az útvonal népszerűségét mutatja, és a router a leggyakrabban használt útvonalat választja."
    ],
    "helyes": "Az adminisztratív távolság az útválasztási információforrás megbízhatóságát jelzi, és a router az alacsonyabb értékű forrást részesíti előnyben több útvonal esetén."
  },
  {
    "szoveg": "Egy vállalati hálózatban az alábbi routing tábla bejegyzések találhatók egy routeren. Melyik útvonalat fogja választani a router egy 172.16.5.10 célcímű csomag esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "172.16.0.0/16 - Next hop: 192.168.1.2 ;",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "172.16.5.0/24 - Next hop: 192.168.1.3 ;",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "172.16.0.0/12 - Next hop: 192.168.1.4 ;",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "0.0.0.0/0 - Next hop: 192.168.1.1",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      ""
    ],
    "helyes": ""
  },
  {
    "szoveg": "172.16.5.0/24 - Next hop: 192.168.1.3",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "172.16.0.0/16 - Next hop: 192.168.1.2",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "172.16.0.0/12 - Next hop: 192.168.1.4",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Egy internetszolgáltató hálózatában az alábbi adminisztratív távolság értékek vannak beállítva különböző útválasztási protokollokhoz:- OSPF: 110- BGP: 20- Statikus útvonal: 1- RIP: 120 Ha egy adott célhálózathoz mind a négy protokoll kínál útvonalat, melyiket fogja a router választani, és miért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A statikus útvonalat, mert ennek a legalacsonyabb az adminisztratív távolsága (1).",
      "A BGP útvonalat, mert ez a legszélesebb körben használt protokoll az interneten.",
      "Az OSPF útvonalat, mert ez a leggyorsabban konvergáló protokoll."
    ],
    "helyes": "A statikus útvonalat, mert ennek a legalacsonyabb az adminisztratív távolsága (1)."
  },
  {
    "szoveg": "Egy router routing táblája a következő bejegyzéseket tartalmazza:",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "192.168.1.0/24 - Közvetlenül csatlakoztatott;",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "10.0.0.0/8 - Next hop: 192.168.1.254;",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "172.16.0.0/16 - Next hop: 192.168.1.253;",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "0.0.0.0/0 (alapértelmezett útvonal) - Next hop: 192.168.1.1\tHogyan fogja a router kezelni egy 10.1.2.3 célcímű csomag továbbítását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A router a csomagot a 192.168.1.254 címre továbbítja a"
    ],
    "helyes": "A router a csomagot a 192.168.1.254 címre továbbítja a"
  },
  {
    "szoveg": "szabály alapján.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A router a csomagot a 192.168.1.1 címre továbbítja az alapértelmezett útvonal alapján.",
      "A router eldobja a csomagot, mert nincs pontos egyezés a routing táblában."
    ],
    "helyes": "A router a csomagot a 192.168.1.1 címre továbbítja az alapértelmezett útvonal alapján."
  },
  {
    "szoveg": "Egy hálózati adminisztrátor új statikus útvonalat akar hozzáadni egy Cisco routerhez. Az új hálózat címe 172.20.0.0/16, és a next hop IP címe 192.168.1.1",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Milyen parancsot kell használnia a konfigurációs módban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "ip route 172.20.0.0 255.255.0.0 192.168.1.100",
      "route add 172.20.0.0/16 via 192.168.1.100",
      "static route 172.20.0.0 255.255.0.0 next-hop 192.168.1.100"
    ],
    "helyes": "ip route 172.20.0.0 255.255.0.0 192.168.1.100"
  },
  {
    "szoveg": "Hogyan működik a distance-vector algoritmus az útválasztók közötti információcsere szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az útválasztók rendszeresen megosztják a hálózat többi csomópontjához vezető legjobb ismert útvonalakat és azok költségeit a szomszédos útválasztókkal.",
      "Az útválasztók csak akkor osztják meg az útvonal-információkat, ha változás történik a hálózati topológiában.",
      "Az útválasztók kizárólag a közvetlen szomszédaikhoz vezető útvonalakat tárolják és osztják meg egymással."
    ],
    "helyes": "Az útválasztók rendszeresen megosztják a hálózat többi csomópontjához vezető legjobb ismert útvonalakat és azok költségeit a szomszédos útválasztókkal."
  },
  {
    "szoveg": "Mi a RIP (Routing Information Protocol) fő jellemzője a távolság mérése szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hop-count (ugrásszám) metrikát használja, maximum 15 ugrással.",
      "A link sávszélességét használja a távolság mérésére.",
      "Az útvonal késleltetését (latency) veszi figyelembe elsődleges metrikaként."
    ],
    "helyes": "A hop-count (ugrásszám) metrikát használja, maximum 15 ugrással."
  },
  {
    "szoveg": "Egy hálózatban három útválasztó van: A, B és C. A közvetlenül kapcsolódik B-hez, B pedig C-hez. Hogyan frissül A útválasztó táblázata a distance-vector algoritmus első információcseréje után?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A megtudja, hogy C elérhető B-n keresztül, és hozzáadja C-t a táblázatához 2 ugrás távolsággal.",
      "A táblázata nem változik, mert csak a közvetlen szomszédjával, B-vel kommunikál.",
      "A közvetlenül hozzáadja C-t a táblázatához 1 ugrás távolsággal."
    ],
    "helyes": "A megtudja, hogy C elérhető B-n keresztül, és hozzáadja C-t a táblázatához 2 ugrás távolsággal."
  },
  {
    "szoveg": "Egy 5 útválasztóból álló hálózatban az egyik kapcsolat megszakad. Hogyan reagál erre a RIP protokoll a konvergencia szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lassan konvergál, több frissítési cikluson keresztül terjeszti az információt a változásról.",
      "Azonnal konvergál, minden útválasztó egyidejűleg frissíti a táblázatát.",
      "Nem konvergál, amíg manuálisan nem frissítik az útválasztó táblákat."
    ],
    "helyes": "Lassan konvergál, több frissítési cikluson keresztül terjeszti az információt a változásról."
  },
  {
    "szoveg": "Milyen valós hálózati helyzetben lenne előnyös a RIP protokoll használata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy kis méretű vállalati hálózatban, ahol az egyszerűség és az alacsony erőforrásigény fontos szempont.",
      "Egy nagy méretű adatközpontban, ahol gyors konvergencia szükséges a gyakori topológiaváltozások miatt.",
      "Egy internet szolgáltató gerinchálózatában, ahol nagy mennyiségű forgalmat kell kezelni."
    ],
    "helyes": "Egy kis méretű vállalati hálózatban, ahol az egyszerűség és az alacsony erőforrásigény fontos szempont."
  },
  {
    "szoveg": "Hogyan illusztrálná a 'count-to-infinity' problémát egy egyszerű hálózati példán keresztül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Két útválasztó, A és B, egymásnak jelenti egy C célállomás elérhetőségét növekvő költséggel, miután C elérhetetlenné vált.",
      "Három útválasztó folyamatosan csökkenti az egymás közötti útvonalak költségét, amíg el nem érik a nulla értéket.",
      "Egy útválasztó végtelen hurokba kerül, mert nem tudja eldönteni, melyik szomszédja felé továbbítsa a csomagokat."
    ],
    "helyes": "Két útválasztó, A és B, egymásnak jelenti egy C célállomás elérhetőségét növekvő költséggel, miután C elérhetetlenné vált."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a link-state algoritmusok, például az OSPF működésének alapelvét a hálózati útválasztásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden router teljes képet alakít ki a hálózat topológiájáról, és ez alapján számítja ki a legrövidebb útvonalakat.",
      "A routerek csak a közvetlen szomszédaikról tárolnak információt, és lépésről lépésre továbbítják a csomagokat.",
      "A hálózat központi szervere tárolja a teljes topológiát, és ez osztja ki az útvonalakat a routereknek."
    ],
    "helyes": "Minden router teljes képet alakít ki a hálózat topológiájáról, és ez alapján számítja ki a legrövidebb útvonalakat."
  },
  {
    "szoveg": "Mit jelent az OSPF protokoll hierarchikus felépítése, és hogyan értelmezhető ennek előnye a nagy hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat területekre (area) osztása, ami javítja a skálázhatóságot és csökkenti a routerek terhelését.",
      "A routerek fontossági sorrendbe állítása, ahol a magasabb szintű routerek irányítják az alacsonyabb szintűeket.",
      "A hálózati forgalom prioritások szerinti osztályozása, ami lehetővé teszi a fontosabb adatok gyorsabb továbbítását."
    ],
    "helyes": "A hálózat területekre (area) osztása, ami javítja a skálázhatóságot és csökkenti a routerek terhelését."
  },
  {
    "szoveg": "Egy hálózati adminisztrátor OSPF protokollt konfigurál egy új routeren. Milyen lépéseket kell végrehajtania a router alapvető OSPF beállításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "OSPF folyamat indítása, hálózatok hirdetése, router ID beállítása, területek konfigurálása.",
      "BGP szomszédok beállítása, statikus útvonalak konfigurálása, VLAN-ok létrehozása.",
      "NAT konfigurálása, tűzfal szabályok beállítása, DHCP szerver aktiválása."
    ],
    "helyes": "OSPF folyamat indítása, hálózatok hirdetése, router ID beállítása, területek konfigurálása."
  },
  {
    "szoveg": "Egy hálózatban két egyenlő költségű útvonal létezik egy célállomás felé. Hogyan kell konfigurálni az OSPF-et, hogy kihasználja mindkét útvonalat a forgalom elosztására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ECMP (Equal-Cost Multi-Path) funkció engedélyezésével és a maximális útvonalak számának beállításával.",
      "Manuálisan kell beállítani a forgalom 50-50%-os elosztását a két útvonal között.",
      "Az egyik útvonalat elsődlegesként, a másikat tartalékként kell konfigurálni."
    ],
    "helyes": "Az ECMP (Equal-Cost Multi-Path) funkció engedélyezésével és a maximális útvonalak számának beállításával."
  },
  {
    "szoveg": "Milyen példával illusztrálható az OSPF protokoll gyors konvergenciája egy hálózati változás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy link meghibásodásakor a routerek másodperceken belül újraszámolják és frissítik útvonalaikat.",
      "Új router csatlakozásakor a hálózat 24 órán belül alkalmazkodik a változáshoz.",
      "Hálózati torlódás esetén az OSPF automatikusan növeli a sávszélességet."
    ],
    "helyes": "Egy link meghibásodásakor a routerek másodperceken belül újraszámolják és frissítik útvonalaikat."
  },
  {
    "szoveg": "Hogyan illusztrálható az OSPF területekre osztásának (area) előnye egy nagy vállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy 1000 routeres hálózat 10 területre osztva, ahol a routerek csak a saját területük részletes topológiáját kezelik.",
      "Minden router külön virtuális gépként fut, így izolálva egymástól a különböző hálózati szegmenseket.",
      "A hálózat felosztása különböző színű kábelekkel, ahol minden szín egy-egy részleget jelöl."
    ],
    "helyes": "Egy 1000 routeres hálózat 10 területre osztva, ahol a routerek csak a saját területük részletes topológiáját kezelik."
  },
  {
    "szoveg": "Hogyan különbözik a distance-vector és a link-state algoritmusok konvergencia sebessége nagyobb hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A link-state algoritmusok általában gyorsabban konvergálnak nagyobb hálózatokban.",
      "A distance-vector algoritmusok általában gyorsabban konvergálnak nagyobb hálózatokban.",
      "Mindkét algoritmus konvergencia sebessége azonos nagyobb hálózatokban."
    ],
    "helyes": "A link-state algoritmusok általában gyorsabban konvergálnak nagyobb hálózatokban."
  },
  {
    "szoveg": "Milyen szempontból előnyösebb a distance-vector algoritmus a link-state algoritmushoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kisebb erőforrásigény és egyszerűbb implementáció.",
      "Gyorsabb konvergencia és jobb skálázhatóság.",
      "Pontosabb útvonalválasztás és kevesebb routing hurok."
    ],
    "helyes": "Kisebb erőforrásigény és egyszerűbb implementáció."
  },
  {
    "szoveg": "Mit jelent a 'konvergencia' fogalma az útvonalválasztó algoritmusok kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az az időtartam, ami alatt az összes router egységes és pontos képet alakít ki a hálózat állapotáról egy változás után.",
      "Az az időtartam, ami alatt az összes router közvetlenül kommunikál egymással.",
      "Az az időtartam, ami alatt az összes router frissíti a routing táblázatát, függetlenül a hálózat állapotától."
    ],
    "helyes": "Az az időtartam, ami alatt az összes router egységes és pontos képet alakít ki a hálózat állapotáról egy változás után."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a 'skálázhatóság' fogalmát a link-state és distance-vector algoritmusok összehasonlításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az algoritmus hatékonysága és teljesítménye a hálózat méretének növekedésével.",
      "Az algoritmus által kezelhető routerek maximális száma.",
      "Az algoritmus által támogatott hálózati protokollok száma."
    ],
    "helyes": "Az algoritmus hatékonysága és teljesítménye a hálózat méretének növekedésével."
  },
  {
    "szoveg": "Milyen valós életbeli példával illusztrálható a distance-vector algoritmus működése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy város, ahol minden kereszteződésben csak azt tudjuk, melyik irányba mennyi idő alatt érünk el egy adott célponthoz.",
      "Egy GPS rendszer, amely valós időben mutatja a teljes úthálózatot és a forgalmi viszonyokat.",
      "Egy légiirányítási rendszer, amely minden repülőgép pontos helyzetét és útvonalát követi."
    ],
    "helyes": "Egy város, ahol minden kereszteződésben csak azt tudjuk, melyik irányba mennyi idő alatt érünk el egy adott célponthoz."
  },
  {
    "szoveg": "Hogyan illusztrálható a link-state algoritmus működése egy mindennapi példával?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy GPS navigációs rendszer, amely ismeri a teljes úthálózatot és valós idejű forgalmi információkat használ.",
      "Egy postás, aki csak a szomszédos utcákat ismeri, és mindig a legközelebbi címre viszi először a leveleket.",
      "Egy telefonkönyv, amely csak a helyi számokat tartalmazza, de nem ad információt a hívások útvonalairól."
    ],
    "helyes": "Egy GPS navigációs rendszer, amely ismeri a teljes úthálózatot és valós idejű forgalmi információkat használ."
  },
  {
    "szoveg": "Hogyan értelmezi a Dijkstra algoritmus a 'végtelen' távolságot az inicializálás során, és mi ennek a jelentősége a hálózati útválasztásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'végtelen' távolság azt jelzi, hogy még nem találtunk utat az adott csúcshoz, és lehetővé teszi, hogy az algoritmus később frissítse ezt az értéket, ha talál egy érvényes útvonalat.",
      "A 'végtelen' távolság azt jelenti, hogy az adott csúcs nem érhető el a hálózatban, és az algoritmus figyelmen kívül hagyja ezeket a csúcsokat.",
      "A 'végtelen' távolság egy fix, nagy számértéket jelent, amely korlátozza az algoritmus által vizsgált maximális úthosszt a hálózatban."
    ],
    "helyes": "A 'végtelen' távolság azt jelzi, hogy még nem találtunk utat az adott csúcshoz, és lehetővé teszi, hogy az algoritmus később frissítse ezt az értéket, ha talál egy érvényes útvonalat."
  },
  {
    "szoveg": "Miért tekinthető a Dijkstra algoritmus 'mohó' algoritmusnak a hálózati útválasztás kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mert minden lépésben a lokálisan optimális döntést hozza meg, kiválasztva a legközelebbi nem véglegesített csúcsot, anélkül hogy visszalépne.",
      "Mert mindig a leghosszabb útvonalat választja ki először, hogy aztán optimalizálja azt.",
      "Mert minden lehetséges útvonalat kipróbál, mielőtt kiválasztja a legrövidebbet."
    ],
    "helyes": "Mert minden lépésben a lokálisan optimális döntést hozza meg, kiválasztva a legközelebbi nem véglegesített csúcsot, anélkül hogy visszalépne."
  },
  {
    "szoveg": "Egy hálózatban az A, B, C és D csomópontok között a következő késleltetések vannak: A-B: 5ms, A-C: 2ms, B-D: 4ms, C-D: 3ms. Alkalmazza a Dijkstra algoritmust az A csomópontból kiindulva! Mi lesz a D csomóponthoz vezető leggyorsabb útvonal és annak összkésleltetése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A-C-D útvonal, 5ms összkésleltetéssel",
      "A-B-D útvonal, 9ms összkésleltetéssel",
      "A-C-B-D útvonal, 11ms összkésleltetéssel"
    ],
    "helyes": "A-C-D útvonal, 5ms összkésleltetéssel"
  },
  {
    "szoveg": "Egy összetettebb hálózatban az A, B, C, D, E és F csomópontok között a következő késleltetések vannak: A-B: 4ms, A-C: 2ms, B-D: 3ms, B-E: 1ms, C-D: 5ms, C-F: 6ms, D-F: 2ms, E-F: 4ms. Alkalmazza a Dijkstra algoritmust az A csomópontból kiindulva! Mi lesz az F csomóponthoz vezető leggyorsabb útvonal és annak összkésleltetése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A-B-E-F útvonal, 9ms összkésleltetéssel",
      "A-C-F útvonal, 8ms összkésleltetéssel",
      "A-C-D-F útvonal, 9ms összkésleltetéssel"
    ],
    "helyes": "A-B-E-F útvonal, 9ms összkésleltetéssel"
  },
  {
    "szoveg": "Egy városi közlekedési hálózatban hogyan alkalmazható a Dijkstra algoritmus a leggyorsabb útvonal megtalálására? Milyen elemek felelnek meg a gráf csúcsainak és éleinek, és mit reprezentálnak az élsúlyok?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csúcsok a kereszteződések, az élek az utcák, az élsúlyok az utcákon való áthaladás ideje. Az algoritmus megtalálja a leggyorsabb útvonalat két kereszteződés között.",
      "A csúcsok az utcák, az élek a kereszteződések, az élsúlyok a kereszteződésekben töltött várakozási idő. Az algoritmus megtalálja a legkevesebb kereszteződést tartalmazó útvonalat.",
      "A csúcsok a járművek, az élek az utasok, az élsúlyok az utazási költségek. Az algoritmus megtalálja a legolcsóbb utazási lehetőséget."
    ],
    "helyes": "A csúcsok a kereszteződések, az élek az utcák, az élsúlyok az utcákon való áthaladás ideje. Az algoritmus megtalálja a leggyorsabb útvonalat két kereszteződés között."
  },
  {
    "szoveg": "Hogyan alkalmazható a Dijkstra algoritmus egy számítógépes hálózatban az adatcsomagok optimális útválasztására? Milyen hálózati elemek felelnek meg a gráf komponenseinek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csúcsok a routerek, az élek a közvetlen kapcsolatok, az élsúlyok a kapcsolatok késleltetése vagy költsége. Az algoritmus megtalálja a leggyorsabb vagy legolcsóbb útvonalat az adatcsomagoknak.",
      "A csúcsok az adatcsomagok, az élek a routerek, az élsúlyok a routerek feldolgozási ideje. Az algoritmus megtalálja a legkevesebb routert érintő útvonalat.",
      "A csúcsok a szerverek, az élek a kliensek, az élsúlyok a szerverek tárolókapacitása. Az algoritmus megtalálja a legnagyobb tárolókapacitású szervert."
    ],
    "helyes": "A csúcsok a routerek, az élek a közvetlen kapcsolatok, az élsúlyok a kapcsolatok késleltetése vagy költsége. Az algoritmus megtalálja a leggyorsabb vagy legolcsóbb útvonalat az adatcsomagoknak."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Bellman-Ford algoritmus szerepét a távolságvektor alapú routing protokollokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az algoritmus lehetővé teszi a routerek számára, hogy meghatározzák a legrövidebb utat minden célállomáshoz, még negatív élsúlyok esetén is, és ezt az információt megosszák szomszédaikkal.",
      "Az algoritmus kizárólag a routerek közötti fizikai kapcsolatok felderítésére szolgál, és nem veszi figyelembe az útvonalak költségét.",
      "A Bellman-Ford algoritmus csak statikus routing táblák létrehozására alkalmas, és nem képes dinamikusan frissíteni az útvonalakat."
    ],
    "helyes": "Az algoritmus lehetővé teszi a routerek számára, hogy meghatározzák a legrövidebb utat minden célállomáshoz, még negatív élsúlyok esetén is, és ezt az információt megosszák szomszédaikkal."
  },
  {
    "szoveg": "Miért fontos a Bellman-Ford algoritmus azon képessége, hogy negatív élsúlyokkal is tud dolgozni a távolságvektor alapú routingban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez lehetővé teszi a routing protokoll számára, hogy kezelje az olyan helyzeteket, ahol egy link költsége csökkenhet, például terhelésmegosztás vagy dinamikus költségszámítás esetén.",
      "A negatív élsúlyok kezelése csak elméleti jelentőségű, a gyakorlati hálózatokban nincs szerepe.",
      "A negatív élsúlyok kezelése kizárólag a hálózati torlódások elkerülésére szolgál."
    ],
    "helyes": "Ez lehetővé teszi a routing protokoll számára, hogy kezelje az olyan helyzeteket, ahol egy link költsége csökkenhet, például terhelésmegosztás vagy dinamikus költségszámítás esetén."
  },
  {
    "szoveg": "Hogyan hajtaná végre a Bellman-Ford algoritmust egy egyszerű hálózatban, ahol A, B és C routerek vannak, és a következő linkek léteznek: A-B (költség: 1), B-C (költség: 2), A-C (költség: 5)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      ""
    ],
    "helyes": ""
  },
  {
    "szoveg": "Inicializálás: A:{A:0, B:1, C:5}, B:{A:1, B:0, C:2}, C:{A:5, B:2, C:0};",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Frissítés: A:{A:0, B:1, C:3}, B:{A:1, B:0, C:2}, C:{A:3, B:2, C:0};",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Újabb frissítés: nincs változás, algoritmus befejeződik.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Inicializálás: A:{A:0, B:1, C:5}, B:{A:1, B:0, C:2}, C:{A:5, B:2, C:0};",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Frissítés: A:{A:0, B:1, C:5}, B:{A:1, B:0, C:2}, C:{A:5, B:2, C:0};",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Algoritmus befejeződik, mert nincs változás.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Inicializálás: A:{A:0, B:1, C:∞}, B:{A:1, B:0, C:2}, C:{A:∞, B:2, C:0};",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Frissítés: A:{A:0, B:1, C:3}, B:{A:1, B:0, C:2}, C:{A:3, B:2, C:0};",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Újabb frissítés: A:{A:0, B:1, C:3}, B:{A:1, B:0, C:2}, C:{A:3, B:2, C:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Egy négy routerből (A, B, C, D) álló hálózatban a következő linkek és költségek vannak: A-B:1, B-C:2, C-D:3, A-D:",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Hogyan hajtaná végre a Bellman-Ford algoritmust ebben a hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      ""
    ],
    "helyes": ""
  },
  {
    "szoveg": "Inicializálás: A:{A:0,B:1,C:∞,D:8}, B:{A:1,B:0,C:2,D:∞}, C:{A:∞,B:2,C:0,D:3}, D:{A:8,B:∞,C:3,D:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Frissítés: A:{A:0,B:1,C:3,D:6}, B:{A:1,B:0,C:2,D:5}, C:{A:3,B:2,C:0,D:3}, D:{A:6,B:5,C:3,D:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Újabb frissítés: nincs változás, algoritmus befejeződik.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Inicializálás: A:{A:0,B:1,C:∞,D:8}, B:{A:1,B:0,C:2,D:∞}, C:{A:∞,B:2,C:0,D:3}, D:{A:8,B:∞,C:3,D:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Frissítés: A:{A:0,B:1,C:3,D:8}, B:{A:1,B:0,C:2,D:5}, C:{A:3,B:2,C:0,D:3}, D:{A:8,B:5,C:3,D:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Algoritmus befejeződik.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Inicializálás: A:{A:0,B:1,C:∞,D:8}, B:{A:1,B:0,C:2,D:∞}, C:{A:∞,B:2,C:0,D:3}, D:{A:8,B:∞,C:3,D:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Frissítés: A:{A:0,B:1,C:3,D:6}, B:{A:1,B:0,C:2,D:5}, C:{A:3,B:2,C:0,D:3}, D:{A:6,B:5,C:3,D:0}",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Újabb frissítés: A:{A:0,B:1,C:3,D:5}, algoritmus folytatódik.",
    "tipus": "radio",
    "kep": null,
    "valaszok": [],
    "helyes": null
  },
  {
    "szoveg": "Milyen példával illusztrálná a 'count-to-infinity' problémát a távolságvektor alapú routing protokollokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Három router (A, B, C) körben összekapcsolva. Ha C kiesik, A és B folyamatosan növelik egymás távolságát C-hez, mert mindkettő azt hiszi, hogy a másikon keresztül még elérhető C.",
      "Két router (A és B) között két párhuzamos útvonal van. Ha az egyik útvonal költsége hirtelen megnő, a routerek azonnal átváltanak a másik útvonalra.",
      "Négy router (A, B, C, D) csillag topológiában, ahol B a központi csomópont. Ha B kiesik, A, C és D azonnal felismerik, hogy nincs útvonal közöttük."
    ],
    "helyes": "Három router (A, B, C) körben összekapcsolva. Ha C kiesik, A és B folyamatosan növelik egymás távolságát C-hez, mert mindkettő azt hiszi, hogy a másikon keresztül még elérhető C."
  },
  {
    "szoveg": "Hogyan illusztrálná a Bellman-Ford algoritmus előnyét egy olyan hálózatban, ahol az útvonalak költsége dinamikusan változhat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy hálózatban, ahol A-B-C-D útvonalon a B-C link költsége 5-ről 1-re csökken terheléscsökkenés miatt. A Bellman-Ford algoritmus képes ezt a változást detektálni és az útvonalakat újraszámolni, optimalizálva a forgalmat.",
      "Egy statikus hálózatban, ahol minden link költsége állandó. A Bellman-Ford algoritmus egyszer lefut, és többé nem változtatja az útvonalakat.",
      "Egy hálózatban, ahol minden router csak a közvetlen szomszédaival kommunikál, és nem osztják meg egymással a teljes útvonal információkat."
    ],
    "helyes": "Egy hálózatban, ahol A-B-C-D útvonalon a B-C link költsége 5-ről 1-re csökken terheléscsökkenés miatt. A Bellman-Ford algoritmus képes ezt a változást detektálni és az útvonalakat újraszámolni, optimalizálva a forgalmat."
  },
  {
    "szoveg": "Mi az Autonomous System (AS) definíciója a hálózati kommunikáció kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy hálózat vagy hálózatok csoportja, amelyet egy közös adminisztratív felügyelet alatt álló szervezet irányít, és egyedi AS számmal rendelkezik.",
      "Egy olyan hálózati protokoll, amely az internetes forgalom irányítását végzi a különböző hálózatok között.",
      "Egy fizikai eszköz, amely összeköti a különböző internetszolgáltatók hálózatait a globális interneten."
    ],
    "helyes": "Egy hálózat vagy hálózatok csoportja, amelyet egy közös adminisztratív felügyelet alatt álló szervezet irányít, és egyedi AS számmal rendelkezik."
  },
  {
    "szoveg": "Milyen típusú AS-ek léteznek az internetes kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Tranzit AS, Stub AS, Multihomed AS",
      "Primer AS, Szekunder AS, Tercier AS",
      "Központi AS, Perifériás AS, Hibrid AS"
    ],
    "helyes": "Tranzit AS, Stub AS, Multihomed AS"
  },
  {
    "szoveg": "Hogyan járul hozzá az Autonomous System (AS) koncepció az internet skálázhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AS-ek lehetővé teszik a hálózati címek aggregálását és független útválasztási politikák alkalmazását, csökkentve a globális útválasztási táblák méretét és komplexitását.",
      "Az AS-ek növelik a hálózati forgalom sebességét azáltal, hogy minden csomagot a legrövidebb úton továbbítanak.",
      "Az AS-ek centralizálják az internet irányítását, egyszerűsítve a globális hálózatkezelést."
    ],
    "helyes": "Az AS-ek lehetővé teszik a hálózati címek aggregálását és független útválasztási politikák alkalmazását, csökkentve a globális útválasztási táblák méretét és komplexitását."
  },
  {
    "szoveg": "Miért fontos a BGP (Border Gateway Protocol) az Autonomous System-ek működésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A BGP felelős az AS-ek közötti útvonalak hirdetéséért és a legjobb útvonalak kiválasztásáért, lehetővé téve a globális internet működését.",
      "A BGP kizárólag az AS-eken belüli forgalom irányítására szolgál, optimalizálva a belső hálózati kommunikációt.",
      "A BGP feladata az AS-ek közötti fizikai kapcsolatok létrehozása és fenntartása."
    ],
    "helyes": "A BGP felelős az AS-ek közötti útvonalak hirdetéséért és a legjobb útvonalak kiválasztásáért, lehetővé téve a globális internet működését."
  },
  {
    "szoveg": "Hogyan különbözik egy Tranzit AS egy Stub AS-től a forgalomkezelés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Tranzit AS forgalmat továbbít más AS-ek között, míg a Stub AS csak saját forgalmát kezeli.",
      "A Tranzit AS csak bejövő forgalmat fogad, míg a Stub AS csak kimenő forgalmat generál.",
      "A Tranzit AS kizárólag helyi forgalmat kezel, míg a Stub AS globális forgalmat irányít."
    ],
    "helyes": "A Tranzit AS forgalmat továbbít más AS-ek között, míg a Stub AS csak saját forgalmát kezeli."
  },
  {
    "szoveg": "Miben különbözik az eBGP (external BGP) az iBGP-től (internal BGP) az AS-ek kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eBGP különböző AS-ek közötti kommunikációra szolgál, míg az iBGP egy AS-en belüli BGP routerek közötti kommunikációt biztosítja.",
      "Az eBGP csak vezetékes kapcsolatokon működik, míg az iBGP kizárólag vezeték nélküli hálózatokban használatos.",
      "Az eBGP IPv4 címeket használ, míg az iBGP csak IPv6 címzést támogat."
    ],
    "helyes": "Az eBGP különböző AS-ek közötti kommunikációra szolgál, míg az iBGP egy AS-en belüli BGP routerek közötti kommunikációt biztosítja."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Policy-Based Routing (PBR) koncepcióját a hagyományos útválasztáshoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PBR lehetővé teszi a csomagok útválasztását nem csak a célcím, hanem egyéb kritériumok alapján is, mint például a forrás IP-cím, protokoll típusa vagy portszámok.",
      "A PBR kizárólag a célcím alapján határozza meg a csomagok útját, de gyorsabban, mint a hagyományos útválasztási protokollok.",
      "A PBR csak a QoS (Quality of Service) követelmények alapján irányítja a forgalmat, figyelmen kívül hagyva minden más szempontot."
    ],
    "helyes": "A PBR lehetővé teszi a csomagok útválasztását nem csak a célcím, hanem egyéb kritériumok alapján is, mint például a forrás IP-cím, protokoll típusa vagy portszámok."
  },
  {
    "szoveg": "Milyen módon értelmezhető a Policy-Based Routing hatása a hálózati erőforrások kihasználására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PBR lehetővé teszi a hálózati erőforrások optimális kihasználását a forgalom precíz irányításával és a szolgáltatásminőség javításával.",
      "A PBR csökkenti a hálózati erőforrások kihasználását azáltal, hogy minden forgalmat egyetlen útvonalra terel.",
      "A PBR nem befolyásolja a hálózati erőforrások kihasználását, csak a csomagok sorrendjét változtatja meg."
    ],
    "helyes": "A PBR lehetővé teszi a hálózati erőforrások optimális kihasználását a forgalom precíz irányításával és a szolgáltatásminőség javításával."
  },
  {
    "szoveg": "Egy nagyvállalat IT vezetője azt fontolgatja, hogy bevezeti a Policy-Based Routing-ot. Milyen szempontokat kell mérlegelnie a döntés során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mérlegelnie kell a PBR által nyújtott előnyöket, mint a nagyobb rugalmasság és jobb erőforrás-kihasználás, szemben a megnövekedett komplexitással és adminisztrációs teherrel.",
      "Csak a PBR bevezetésének költségeit kell figyelembe vennie, mivel a technológia minden esetben javítja a hálózat teljesítményét.",
      "Kizárólag a biztonsági szempontokat kell mérlegelnie, mivel a PBR fő célja a hálózat biztonságának növelése."
    ],
    "helyes": "Mérlegelnie kell a PBR által nyújtott előnyöket, mint a nagyobb rugalmasság és jobb erőforrás-kihasználás, szemben a megnövekedett komplexitással és adminisztrációs teherrel."
  },
  {
    "szoveg": "Egy hálózati adminisztrátor azt javasolja, hogy alkalmazzanak Policy-Based Routing-ot minden hálózati forgalomra, beleértve a rutinszerű belső kommunikációt is. Hogyan ítélné meg ezt a javaslatot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez túlzó megközelítés lehet, mivel növeli a hálózat komplexitását és az adminisztrációs terhet, miközben nem minden forgalom igényel speciális kezelést.",
      "Ez egy kiváló javaslat, mivel maximalizálja a hálózat teljesítményét és biztonságát minden helyzetben.",
      "Ez a megközelítés ajánlott, mert egyszerűsíti a hálózatkezelést azáltal, hogy minden forgalmat egységesen kezel."
    ],
    "helyes": "Ez túlzó megközelítés lehet, mivel növeli a hálózat komplexitását és az adminisztrációs terhet, miközben nem minden forgalom igényel speciális kezelést."
  },
  {
    "szoveg": "Milyen példával illusztrálható a Policy-Based Routing alkalmazása a forgalom optimalizálására egy vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalat két internetkapcsolattal rendelkezik: egy gyors üzleti vonallal és egy lassabb lakossági vonallal. A PBR segítségével a kritikus üzleti forgalmat a gyors vonalra, míg a kevésbé fontos forgalmat a lassabb vonalra irányítják.",
      "Egy vállalat minden bejövő e-mailt automatikusan titkosít a PBR segítségével, függetlenül azok tartalmától vagy forrásától.",
      "Egy vállalat a PBR-t arra használja, hogy minden alkalmazottjának egyenlő sávszélességet biztosítson, függetlenül a munkakörüktől vagy az általuk használt alkalmazásoktól."
    ],
    "helyes": "Egy vállalat két internetkapcsolattal rendelkezik: egy gyors üzleti vonallal és egy lassabb lakossági vonallal. A PBR segítségével a kritikus üzleti forgalmat a gyors vonalra, míg a kevésbé fontos forgalmat a lassabb vonalra irányítják."
  },
  {
    "szoveg": "Hogyan illusztrálható a Policy-Based Routing alkalmazása a szolgáltatásminőség (QoS) javítására egy vállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalat a PBR segítségével prioritizálja a VoIP forgalmat, biztosítva számára a dedikált sávszélességet és az alacsony késleltetésű útvonalat, míg az e-mail forgalmat alacsonyabb prioritású útvonalra irányítja.",
      "Egy vállalat a PBR-t arra használja, hogy minden alkalmazottjának azonos minőségű internetkapcsolatot biztosítson, függetlenül a hálózati forgalom típusától.",
      "Egy vállalat a PBR segítségével blokkolja az összes nem üzleti célú forgalmat, ezáltal javítva az üzleti alkalmazások teljesítményét."
    ],
    "helyes": "Egy vállalat a PBR segítségével prioritizálja a VoIP forgalmat, biztosítva számára a dedikált sávszélességet és az alacsony késleltetésű útvonalat, míg az e-mail forgalmat alacsonyabb prioritású útvonalra irányítja."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Policy-Based Routing (PBR) szerepét a hálózati forgalom irányításában a hagyományos útválasztási protokollokhoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PBR lehetővé teszi a hálózati adminisztrátorok számára, hogy speciális követelmények vagy üzleti szabályok alapján finomhangolják a forgalom útját, túllépve a hagyományos útválasztási protokollok korlátain.",
      "A PBR kizárólag a hagyományos útválasztási protokollok helyettesítésére szolgál, teljesen kiváltva azokat a modern hálózatokban.",
      "A PBR csak a hálózati biztonság növelésére használható, nem befolyásolja a forgalom irányítását."
    ],
    "helyes": "A PBR lehetővé teszi a hálózati adminisztrátorok számára, hogy speciális követelmények vagy üzleti szabályok alapján finomhangolják a forgalom útját, túllépve a hagyományos útválasztási protokollok korlátain."
  },
  {
    "szoveg": "Milyen módon értelmezhető a Policy-Based Routing hatása a hálózat szolgáltatásminőségére (QoS)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PBR lehetővé teszi a kritikus alkalmazások forgalmának priorizálását, biztosítva a megfelelő sávszélességet és alacsony késleltetést, ami javítja a szolgáltatásminőséget.",
      "A PBR kizárólag a hálózati biztonságot javítja, nincs hatása a szolgáltatásminőségre.",
      "A PBR csökkenti a hálózat általános teljesítményét, ezáltal rontva a szolgáltatásminőséget minden alkalmazás esetében."
    ],
    "helyes": "A PBR lehetővé teszi a kritikus alkalmazások forgalmának priorizálását, biztosítva a megfelelő sávszélességet és alacsony késleltetést, ami javítja a szolgáltatásminőséget."
  },
  {
    "szoveg": "Hogyan ítélhető meg a Policy-Based Routing alkalmazásának hatása egy nagyvállalati hálózat üzemeltetési költségeire?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PBR alkalmazása potenciálisan csökkentheti az üzemeltetési költségeket a sávszélesség-használat optimalizálásával, de a komplexitás növekedése miatt többlet erőforrást igényelhet a konfigurációhoz és karbantartáshoz.",
      "A PBR mindig jelentősen növeli az üzemeltetési költségeket a szükséges extra hardver és szoftver miatt, függetlenül a hálózat méretétől.",
      "A PBR alkalmazása garantáltan csökkenti az üzemeltetési költségeket minden esetben, mivel automatizálja az összes hálózati folyamatot."
    ],
    "helyes": "A PBR alkalmazása potenciálisan csökkentheti az üzemeltetési költségeket a sávszélesség-használat optimalizálásával, de a komplexitás növekedése miatt többlet erőforrást igényelhet a konfigurációhoz és karbantartáshoz."
  },
  {
    "szoveg": "Hogyan ítélhető meg a Policy-Based Routing hatása a hálózat biztonságára és a forgalom elkülönítésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A PBR javíthatja a hálózat biztonságát a forgalom precízebb irányításával és elkülönítésével, de helytelen konfiguráció esetén biztonsági réseket is okozhat.",
      "A PBR kizárólag a hálózat teljesítményét befolyásolja, nincs hatása a biztonságra vagy a forgalom elkülönítésére.",
      "A PBR automatikusan megold minden biztonsági problémát, teljesen biztonságossá téve a hálózatot külső beavatkozás nélkül."
    ],
    "helyes": "A PBR javíthatja a hálózat biztonságát a forgalom precízebb irányításával és elkülönítésével, de helytelen konfiguráció esetén biztonsági réseket is okozhat."
  },
  {
    "szoveg": "Milyen példával illusztrálható a Policy-Based Routing alkalmazása egy vállalati környezetben a VoIP forgalom optimalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalat két internetszolgáltatóval rendelkezik, és a PBR segítségével a VoIP forgalmat a megbízhatóbb, alacsonyabb késleltetésű ISP-re irányítja a jobb hangminőség érdekében, míg az általános forgalom az olcsóbb ISP-n halad.",
      "Egy vállalat a PBR-t használja arra, hogy minden forgalmat, beleértve a VoIP-ot is, kizárólag a legolcsóbb ISP-n keresztül irányítson, figyelmen kívül hagyva a szolgáltatás minőségét.",
      "Egy vállalat a PBR-t alkalmazza, hogy minden VoIP forgalmat blokkoljon a hálózatában, kizárólag hagyományos telefonvonalakat engedélyezve a kommunikációhoz."
    ],
    "helyes": "Egy vállalat két internetszolgáltatóval rendelkezik, és a PBR segítségével a VoIP forgalmat a megbízhatóbb, alacsonyabb késleltetésű ISP-re irányítja a jobb hangminőség érdekében, míg az általános forgalom az olcsóbb ISP-n halad."
  },
  {
    "szoveg": "Milyen példával szemléltethető a Policy-Based Routing alkalmazása a hálózati biztonság növelésére egy pénzügyi intézményben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy bank a PBR-t használja arra, hogy az összes pénzügyi tranzakciós forgalmat egy erősen titkosított, dedikált hálózati útvonalon keresztül irányítsa, míg az általános internetes forgalom egy külön, kevésbé szigorú útvonalon halad.",
      "Egy bank a PBR-t alkalmazza, hogy minden forgalmat, beleértve a pénzügyi tranzakciókat is, a leggyorsabb, de nem feltétlenül a legbiztonságosabb útvonalon irányítson.",
      "Egy bank a PBR-t használja arra, hogy minden külső hálózati kapcsolatot blokkoljon, kizárólag belső kommunikációt engedélyezve."
    ],
    "helyes": "Egy bank a PBR-t használja arra, hogy az összes pénzügyi tranzakciós forgalmat egy erősen titkosított, dedikált hálózati útvonalon keresztül irányítsa, míg az általános internetes forgalom egy külön, kevésbé szigorú útvonalon halad."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Szoftveresen Definiált Hálózatok (SDN) alapkoncepcióját a hálózati síkok szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN elválasztja a vezérlési síkot az adatsíktól, lehetővé téve a hálózat központi irányítását és programozhatóságát.",
      "Az SDN egyesíti a vezérlési és adatsíkot egy komplex, integrált rendszerbe a hatékonyabb működés érdekében.",
      "Az SDN kizárólag a vezérlési síkra összpontosít, teljesen elhagyva az adatsík funkcióit a modern hálózatokban."
    ],
    "helyes": "Az SDN elválasztja a vezérlési síkot az adatsíktól, lehetővé téve a hálózat központi irányítását és programozhatóságát."
  },
  {
    "szoveg": "Mit jelent az SDN architektúrában a vezérlési sík absztrakciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati infrastruktúra egyszerűsített reprezentációját, amely megkönnyíti a hálózatkezelést és -konfigurálást.",
      "A vezérlési sík teljes eltávolítását a hálózati eszközökből, centralizálva azt egy felhő alapú rendszerben.",
      "A vezérlési és adatsík funkcióinak összevonását egy egységes, komplex irányítási rendszerbe."
    ],
    "helyes": "A hálózati infrastruktúra egyszerűsített reprezentációját, amely megkönnyíti a hálózatkezelést és -konfigurálást."
  },
  {
    "szoveg": "Milyen következményei lehetnek az SDN technológia széles körű elterjedésének a hálózati szakemberek készségeire nézve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati szakembereknek fejleszteniük kell programozási és automatizálási készségeiket, valamint mélyebb ismereteket kell szerezniük a szoftveres hálózatkezelésről.",
      "A hagyományos hálózati ismeretek teljesen elavulttá válnak, és kizárólag szoftverfejlesztői készségekre lesz szükség.",
      "A hálózati szakemberek szerepe jelentéktelenné válik, mivel az SDN teljesen automatizálja a hálózatkezelést."
    ],
    "helyes": "A hálózati szakembereknek fejleszteniük kell programozási és automatizálási készségeiket, valamint mélyebb ismereteket kell szerezniük a szoftveres hálózatkezelésről."
  },
  {
    "szoveg": "Hogyan befolyásolhatja az SDN technológia az 5G hálózatok és az IoT infrastruktúrák jövőbeli fejlődését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN várhatóan kulcsszerepet játszik az 5G és IoT infrastruktúrák rugalmasságának és skálázhatóságának növelésében, lehetővé téve a dinamikus erőforrás-allokációt és a hatékonyabb hálózatkezelést.",
      "Az SDN valószínűleg lelassítja az 5G és IoT fejlődését, mivel túl komplex a széles körű implementációhoz.",
      "Az SDN technológia várhatóan teljesen helyettesíti az 5G és IoT specifikus protokollokat, egységesítve minden hálózati kommunikációt."
    ],
    "helyes": "Az SDN várhatóan kulcsszerepet játszik az 5G és IoT infrastruktúrák rugalmasságának és skálázhatóságának növelésében, lehetővé téve a dinamikus erőforrás-allokációt és a hatékonyabb hálózatkezelést."
  },
  {
    "szoveg": "Milyen példával illusztrálható az SDN működése egy vállalati környezetben a videókonferencia-forgalom kezelése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN kontroller észleli a megnövekedett videókonferencia-forgalmat, és automatikusan újrakonfigurálja a hálózatot, prioritást adva ennek a forgalomtípusnak a jobb szolgáltatásminőség (QoS) biztosítása érdekében.",
      "Az SDN rendszer leállítja az összes nem videókonferenciához kapcsolódó forgalmat, hogy kizárólagos sávszélességet biztosítson a videóhívásoknak.",
      "Az SDN kontroller manuálisan értesíti a hálózati adminisztrátort a megnövekedett videóforgalomról, aki aztán kézzel állítja be a szükséges változtatásokat."
    ],
    "helyes": "Az SDN kontroller észleli a megnövekedett videókonferencia-forgalmat, és automatikusan újrakonfigurálja a hálózatot, prioritást adva ennek a forgalomtípusnak a jobb szolgáltatásminőség (QoS) biztosítása érdekében."
  },
  {
    "szoveg": "Hogyan illusztrálható az SDN előnye egy e-kereskedelmi weboldal forgalmának kezelésében egy nagy kiárusítás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN kontroller észleli a hirtelen megnövekedett forgalmat, és automatikusan átirányítja azt több szerverre, valamint optimalizálja az útvonalakat a terhelés egyenletes elosztása érdekében.",
      "Az SDN rendszer leállítja az összes nem e-kereskedelemhez kapcsolódó forgalmat a hálózaton, hogy kizárólagos hozzáférést biztosítson a webáruház számára.",
      "Az SDN kontroller értesíti a rendszergazdát a megnövekedett forgalomról, aki manuálisan növeli a sávszélességet az e-kereskedelmi oldal számára."
    ],
    "helyes": "Az SDN kontroller észleli a hirtelen megnövekedett forgalmat, és automatikusan átirányítja azt több szerverre, valamint optimalizálja az útvonalakat a terhelés egyenletes elosztása érdekében."
  },
  {
    "szoveg": "Egy hálózati alkalmazásban a TCP folyamatvezérlés során a fogadó ablakmérete hirtelen nullára csökken. Mit jelent ez a kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fogadó puffere megtelt, és átmenetileg nem tud több adatot fogadni, amíg nem dolgozza fel a már megérkezett adatokat.",
      "A kapcsolat megszakadt, és újra kell építeni a TCP kapcsolatot a kommunikáció folytatásához.",
      "A hálózatban torlódás lépett fel, és a küldőnek csökkentenie kell az adatküldés sebességét."
    ],
    "helyes": "A fogadó puffere megtelt, és átmenetileg nem tud több adatot fogadni, amíg nem dolgozza fel a már megérkezett adatokat."
  },
  {
    "szoveg": "Hogyan értelmezzük a TCP sliding window mechanizmusban azt a helyzetet, amikor az ablak mérete megegyezik a kapcsolat sávszélesség-késleltetés szorzatával (bandwidth-delay product)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ablakméret optimális, mert pontosan annyi adat van úton, amennyit a hálózat maximális kihasználtsággal képes kezelni.",
      "Az ablakméret túl nagy, ami csomagvesztéshez vezethet a hálózatban.",
      "Az ablakméret túl kicsi, ami miatt a sávszélesség nincs megfelelően kihasználva."
    ],
    "helyes": "Az ablakméret optimális, mert pontosan annyi adat van úton, amennyit a hálózat maximális kihasználtsággal képes kezelni."
  },
  {
    "szoveg": "Egy nagy fájl átvitele során hogyan modellezhető a TCP sliding window működése, ha a hálózatban hirtelen megnő a késleltetés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nyugták később érkeznek vissza, az ablak lassabban csúszik előre, de az átvitel folyamatos marad, csak alacsonyabb effektív sebességgel.",
      "Az ablak mérete azonnal lecsökken, és az átvitel megszakad a késleltetés miatt.",
      "Az ablak mérete megnő, hogy kompenzálja a megnövekedett késleltetést."
    ],
    "helyes": "A nyugták később érkeznek vissza, az ablak lassabban csúszik előre, de az átvitel folyamatos marad, csak alacsonyabb effektív sebességgel."
  },
  {
    "szoveg": "Hogyan modellezhető a TCP flow control viselkedése egy olyan helyzetben, ahol a fogadó feldolgozási sebessége jelentősen ingadozik?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fogadó ablakmérete dinamikusan változik a feldolgozási sebesség függvényében, így szabályozva a küldő adatküldési sebességét.",
      "A küldő fix sebességgel folytatja az adatok küldését, függetlenül a fogadó feldolgozási sebességétől.",
      "Az átvitel szünetel, amíg a fogadó feldolgozási sebessége nem stabilizálódik."
    ],
    "helyes": "A fogadó ablakmérete dinamikusan változik a feldolgozási sebesség függvényében, így szabályozva a küldő adatküldési sebességét."
  },
  {
    "szoveg": "Egy videóstreaming alkalmazásban hogyan használható fel a TCP flow control a lejátszási puffer optimális méretének meghatározásához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A flow control jelzéseiből meghatározható a hálózat ingadozása, ami alapján kiszámítható az optimális pufferméret a folyamatos lejátszáshoz.",
      "A flow control nem használható fel erre a célra, mert csak az adatátvitel sebességét szabályozza.",
      "A flow control alapján fix méretű puffert kell használni, ami mindig a maximális ablakmérettel egyezik meg."
    ],
    "helyes": "A flow control jelzéseiből meghatározható a hálózat ingadozása, ami alapján kiszámítható az optimális pufferméret a folyamatos lejátszáshoz."
  },
  {
    "szoveg": "Hogyan használható fel a sliding window mechanizmus egy nagy fájlok szinkronizálására szolgáló alkalmazásban a hatékony sávszélesség-kihasználás érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ablakméret dinamikus állításával és a nyugtázások optimalizálásával, figyelembe véve a hálózati körülményeket és a fájlok méretét.",
      "Fix méretű ablak használatával, ami minden fájl esetén ugyanakkora.",
      "Az ablakméret minimálisra állításával, hogy biztosan ne legyen adatvesztés."
    ],
    "helyes": "Az ablakméret dinamikus állításával és a nyugtázások optimalizálásával, figyelembe véve a hálózati körülményeket és a fájlok méretét."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy TCP implementáció flow control mechanizmusának hatékonysága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átviteli sebesség stabilitása, a puffer-kihasználtság és a felesleges újraküldések minimalizálása alapján.",
      "Kizárólag a maximális átviteli sebesség alapján, függetlenül más tényezőktől.",
      "Csak a fogadó oldali puffer-túlcsordulások száma alapján."
    ],
    "helyes": "Az átviteli sebesség stabilitása, a puffer-kihasználtság és a felesleges újraküldések minimalizálása alapján."
  },
  {
    "szoveg": "Hogyan ítélhető meg a sliding window mechanizmus megfelelősége különböző típusú hálózati alkalmazások esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazás követelményei (késleltetés, megbízhatóság, sávszélesség) és a mechanizmus által biztosított teljesítménymutatók összevetésével.",
      "Kizárólag az ablakméret alapján, nagyobb ablakméret mindig jobb teljesítményt jelent.",
      "Csak a hálózati kapcsolat sebessége alapján, figyelmen kívül hagyva az alkalmazás követelményeit."
    ],
    "helyes": "Az alkalmazás követelményei (késleltetés, megbízhatóság, sávszélesség) és a mechanizmus által biztosított teljesítménymutatók összevetésével."
  },
  {
    "szoveg": "Egy vállalati hálózatban a VoIP telefonálás minősége hirtelen romlani kezd a nagy fájlátvitelek során. Melyik QoS mechanizmus alkalmazása oldaná meg leghatékonyabban ezt a problémát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A forgalom osztályozása és priorizálása, ahol a VoIP forgalom magasabb prioritást kap a fájlátvitelhez képest",
      "A teljes hálózati sávszélesség növelése további hálózati eszközök beszerzésével",
      "A VoIP szolgáltatás áthelyezése egy teljesen különálló fizikai hálózatra"
    ],
    "helyes": "A forgalom osztályozása és priorizálása, ahol a VoIP forgalom magasabb prioritást kap a fájlátvitelhez képest"
  },
  {
    "szoveg": "Egy streaming szolgáltatás esetében melyik QoS paraméter optimalizálása a legkritikusabb a felhasználói élmény szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A késleltetés-ingadozás (jitter) minimalizálása és a stabil sávszélesség biztosítása",
      "A maximális átviteli sebesség növelése a többi forgalom teljes korlátozásával",
      "A végponttól végpontig terjedő késleltetés minimalizálása"
    ],
    "helyes": "A késleltetés-ingadozás (jitter) minimalizálása és a stabil sávszélesség biztosítása"
  },
  {
    "szoveg": "Hogyan modellezhető egy többszintű QoS rendszer működése egy nagyvállalati környezetben, ahol különböző típusú alkalmazások futnak párhuzamosan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hierarchikus forgalmi osztályok létrehozásával, ahol a valós idejű alkalmazások a legfelső, az általános adatforgalom az alsóbb szinteken helyezkedik el, mindegyikhez dedikált erőforrásokkal",
      "Minden alkalmazás számára azonos prioritás beállításával, így biztosítva az egyenlő erőforrás-elosztást",
      "Az alkalmazások véletlenszerű prioritás-hozzárendelésével, dinamikusan változó erőforrás-kiosztással"
    ],
    "helyes": "Hierarchikus forgalmi osztályok létrehozásával, ahol a valós idejű alkalmazások a legfelső, az általános adatforgalom az alsóbb szinteken helyezkedik el, mindegyikhez dedikált erőforrásokkal"
  },
  {
    "szoveg": "Milyen QoS modellt érdemes alkalmazni egy olyan hálózatban, ahol sok különböző típusú alkalmazás fut, de nincs szükség folyamonkénti részletes erőforrás-foglalásra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "DiffServ modellt, amely forgalmi osztályok szerint kezeli a különböző típusú adatfolyamokat",
      "IntServ modellt, amely minden egyes folyamhoz külön erőforrásokat foglal",
      "Best Effort modellt, amely nem alkalmaz semmilyen szolgáltatásminőségi garanciát"
    ],
    "helyes": "DiffServ modellt, amely forgalmi osztályok szerint kezeli a különböző típusú adatfolyamokat"
  },
  {
    "szoveg": "Egy videokonferencia rendszer implementálásánál hogyan alkalmazná a QoS mechanizmusokat a megfelelő szolgáltatásminőség biztosításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A videokonferencia forgalom magas prioritású osztályba sorolása, alacsony késleltetési garancia és jitter kontroll beállítása, valamint minimális sávszélesség garantálása",
      "A teljes rendelkezésre álló sávszélesség lefoglalása a videokonferencia számára",
      "A videokonferencia forgalom best effort alapú kezelése, bízva a hálózat általános teljesítményében"
    ],
    "helyes": "A videokonferencia forgalom magas prioritású osztályba sorolása, alacsony késleltetési garancia és jitter kontroll beállítása, valamint minimális sávszélesség garantálása"
  },
  {
    "szoveg": "Hogyan implementálná a QoS mechanizmusokat egy olyan hálózatban, ahol kritikus üzleti alkalmazások és általános internetforgalom is jelen van?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többszintű prioritási rendszer kialakítása, ahol a kritikus alkalmazások garantált sávszélességet és alacsony késleltetést kapnak, míg az általános forgalom alacsonyabb prioritással fut",
      "Az összes forgalom egyenlő prioritással történő kezelése a fairness érdekében",
      "Az általános internetforgalom teljes tiltása a kritikus alkalmazások védelme érdekében"
    ],
    "helyes": "Többszintű prioritási rendszer kialakítása, ahol a kritikus alkalmazások garantált sávszélességet és alacsony késleltetést kapnak, míg az általános forgalom alacsonyabb prioritással fut"
  },
  {
    "szoveg": "Egy vállalati hálózatban alkalmazott QoS konfiguráció hatékonyságának értékelésekor mely szempontokat kell figyelembe venni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kritikus alkalmazások teljesítménymutatóit, a felhasználói elégedettséget, és a hálózati erőforrások kihasználtságának egyensúlyát",
      "Kizárólag a hálózat maximális átviteli sebességét",
      "Csak a kritikus alkalmazások működését, figyelmen kívül hagyva más szolgáltatásokat"
    ],
    "helyes": "A kritikus alkalmazások teljesítménymutatóit, a felhasználói elégedettséget, és a hálózati erőforrások kihasználtságának egyensúlyát"
  },
  {
    "szoveg": "Milyen szempontok alapján lehet megítélni, hogy egy adott hálózatban szükség van-e QoS mechanizmusok bevezetésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati forgalom típusainak elemzése, az alkalmazások kritikussága, és a jelenlegi szolgáltatásminőségi problémák vizsgálata alapján",
      "Kizárólag a hálózat mérete alapján",
      "Csak a rendelkezésre álló költségvetés alapján"
    ],
    "helyes": "A hálózati forgalom típusainak elemzése, az alkalmazások kritikussága, és a jelenlegi szolgáltatásminőségi problémák vizsgálata alapján"
  },
  {
    "szoveg": "A TCP kapcsolat felépítése során mi a SYN-ACK csomag szerepe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szerver nyugtázza a kliens kezdeti sorszámát és elküldi saját kezdeti sorszámát, jelezve hogy kész a kapcsolat folytatására",
      "A kliens jelzi a szervernek, hogy szeretne kapcsolatot létesíteni és elküldi a kezdeti sorszámát",
      "A kliens nyugtázza a szerver sorszámát és jelzi hogy a kapcsolat létrejött"
    ],
    "helyes": "A szerver nyugtázza a kliens kezdeti sorszámát és elküldi saját kezdeti sorszámát, jelezve hogy kész a kapcsolat folytatására"
  },
  {
    "szoveg": "Mit jelent a TIME_WAIT állapot a TCP kapcsolat bontása során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy biztonsági időszak, amely alatt a rendszer várja az esetlegesen késve érkező csomagok megérkezését, hogy azok ne okozhassanak problémát egy új kapcsolatban",
      "Az az időszak, amíg a szerver várakozik a kliens válaszára a kapcsolat bontása során",
      "Az az állapot, amikor a kapcsolat már lezárult, de a rendszer még fenntartja a portfoglalást"
    ],
    "helyes": "Egy biztonsági időszak, amely alatt a rendszer várja az esetlegesen késve érkező csomagok megérkezését, hogy azok ne okozhassanak problémát egy új kapcsolatban"
  },
  {
    "szoveg": "Hogyan modellezhető egy sikertelen TCP kapcsolat felépítési kísérlet, ahol a szerver nem válaszol?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kliens elküldi a SYN csomagot, timeout után újraküldi, majd több sikertelen próbálkozás után feladja a kapcsolódási kísérletet",
      "A kliens elküldi a SYN csomagot, a szerver RST flaggel válaszol, majd a kapcsolat azonnal megszakad",
      "A kliens folyamatosan küldi a SYN csomagokat mindaddig, amíg választ nem kap vagy manuálisan meg nem szakítják"
    ],
    "helyes": "A kliens elküldi a SYN csomagot, timeout után újraküldi, majd több sikertelen próbálkozás után feladja a kapcsolódási kísérletet"
  },
  {
    "szoveg": "Hogyan modellezhető egy normál TCP kapcsolat bontása, ha mindkét fél egyszerre kezdeményezi a bontást?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mindkét fél FIN csomagot küld egyszerre, majd mindketten ACK csomaggal válaszolnak a másik FIN-jére, végül TIME_WAIT állapotba kerülnek",
      "Az egyik fél FIN csomagja elsőbbséget élvez, és a normál four-way handshake folytatódik",
      "Mindkét fél RST csomagot küld, és azonnal lezárják a kapcsolatot"
    ],
    "helyes": "Mindkét fél FIN csomagot küld egyszerre, majd mindketten ACK csomaggal válaszolnak a másik FIN-jére, végül TIME_WAIT állapotba kerülnek"
  },
  {
    "szoveg": "Hogyan használható fel a TCP kapcsolat felépítési mechanizmusa egy megbízható fájlátviteli alkalmazás fejlesztésénél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kapcsolat felépítése során egyeztetett kezdeti sorszámokat használhatjuk a fájl szegmenseinek sorrendhelyes átviteléhez és a hiányzó részek detektálásához",
      "A kapcsolat felépítése után ignorálhatjuk a TCP mechanizmusait és saját protokollt használhatunk",
      "A kapcsolat felépítése csak az első fájl küldéséhez szükséges, utána új kapcsolat nélkül küldhetjük a további fájlokat"
    ],
    "helyes": "A kapcsolat felépítése során egyeztetett kezdeti sorszámokat használhatjuk a fájl szegmenseinek sorrendhelyes átviteléhez és a hiányzó részek detektálásához"
  },
  {
    "szoveg": "Hogyan használható fel a TCP kapcsolatbontási mechanizmusa egy webszerver implementációjában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szerver várhat a kapcsolat bontásával amíg minden válaszadat elküldésre került, majd kezdeményezheti a szabályos négylépéses bontást",
      "A szerver azonnal RST csomaggal bonthatja a kapcsolatot az adatok elküldése után",
      "A szervernek meg kell várnia, hogy a kliens kezdeményezze a bontást"
    ],
    "helyes": "A szerver várhat a kapcsolat bontásával amíg minden válaszadat elküldésre került, majd kezdeményezheti a szabályos négylépéses bontást"
  },
  {
    "szoveg": "Milyen valós példa illusztrálja legjobban a TCP kapcsolat felépítésének fontosságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Online banki tranzakció, ahol a kapcsolat felépítése során egyeztetett sorszámok és titkosítási paraméterek biztosítják a biztonságos kommunikációt",
      "Video streaming, ahol nem kritikus a kapcsolat megbízhatósága",
      "Játék ping-pong labda mozgásának követése, ahol a gyorsaság fontosabb mint a megbízhatóság"
    ],
    "helyes": "Online banki tranzakció, ahol a kapcsolat felépítése során egyeztetett sorszámok és titkosítási paraméterek biztosítják a biztonságos kommunikációt"
  },
  {
    "szoveg": "Milyen gyakorlati példa szemlélteti legjobban a TCP kapcsolat szabályos bontásának jelentőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nagy fájl feltöltése egy felhő szolgáltatásba, ahol a kapcsolat szabályos bontása biztosítja, hogy az utolsó adatcsomagok is megérkezzenek",
      "Azonnali üzenetküldés, ahol nem kritikus az utolsó üzenetek megérkezése",
      "Weboldal bezárása, ahol nem szükséges megvárni az összes erőforrás letöltését"
    ],
    "helyes": "Nagy fájl feltöltése egy felhő szolgáltatásba, ahol a kapcsolat szabályos bontása biztosítja, hogy az utolsó adatcsomagok is megérkezzenek"
  },
  {
    "szoveg": "Egy TCP kapcsolatban a cwnd (torlódási ablak) mérete 32 MSS, és a kapcsolat a torlódáselkerülés fázisban van. Ha sikeresen megérkezik egy nyugta (ACK), hogyan változik a cwnd értéke?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A cwnd értéke 1/32 MSS-sel növekszik, így az új érték 32,03125 MSS lesz",
      "A cwnd értéke megduplázódik, így az új érték 64 MSS lesz",
      "A cwnd értéke 1 MSS-sel növekszik, így az új érték 33 MSS lesz"
    ],
    "helyes": "A cwnd értéke 1/32 MSS-sel növekszik, így az új érték 32,03125 MSS lesz"
  },
  {
    "szoveg": "Mit jelent a TCP torlódáskezelésben a 'Fast Recovery' mechanizmus szerepe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi, hogy enyhe torlódás esetén (3 duplikált ACK) ne kelljen visszatérni a lassú kezdéshez, hanem közvetlenül torlódáselkerülés fázisba léphessünk",
      "Azonnal visszaállítja a cwnd értékét 1 MSS-re bármilyen torlódási esemény esetén",
      "Megduplázza a küldési ablak méretét minden sikeres nyugta után"
    ],
    "helyes": "Lehetővé teszi, hogy enyhe torlódás esetén (3 duplikált ACK) ne kelljen visszatérni a lassú kezdéshez, hanem közvetlenül torlódáselkerülés fázisba léphessünk"
  },
  {
    "szoveg": "Hogyan modellezhető egy TCP kapcsolat viselkedése, ha a hálózatban hirtelen megnő a késleltetés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A megnövekedett RTT miatt a nyugták később érkeznek, ami lassítja az ablakméret növekedését és csökkenti az effektív átviteli sebességet",
      "A kapcsolat azonnal leáll és újraindul a lassú kezdés fázissal",
      "Az ablakméret exponenciálisan növekszik a késleltetés kompenzálására"
    ],
    "helyes": "A megnövekedett RTT miatt a nyugták később érkeznek, ami lassítja az ablakméret növekedését és csökkenti az effektív átviteli sebességet"
  },
  {
    "szoveg": "Milyen hatása van a torlódáskezelési algoritmus működésére egy nagy sávszélességű-késleltetésű hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nagy szorzat miatt a hagyományos algoritmusok nem tudják hatékonyan kihasználni a rendelkezésre álló sávszélességet, mert túl lassan növelik az ablakot",
      "A nagy sávszélesség automatikusan kompenzálja a késleltetést, így nincs szükség különleges kezelésre",
      "A késleltetés nincs hatással a sávszélesség kihasználására"
    ],
    "helyes": "A nagy szorzat miatt a hagyományos algoritmusok nem tudják hatékonyan kihasználni a rendelkezésre álló sávszélességet, mert túl lassan növelik az ablakot"
  },
  {
    "szoveg": "Ha egy hálózatban sok rövid TCP kapcsolat és néhány hosszú kapcsolat verseng, mi várható a torlódáskezelés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rövid kapcsolatok hátrányba kerülnek, mert nem tudják elhagyni a lassú kezdés fázist mielőtt befejeződnek",
      "A rövid kapcsolatok előnyben vannak, mert gyorsabban tudnak alkalmazkodni a hálózati feltételekhez",
      "A kapcsolat hossza nem befolyásolja a torlódáskezelés hatékonyságát"
    ],
    "helyes": "A rövid kapcsolatok hátrányba kerülnek, mert nem tudják elhagyni a lassú kezdés fázist mielőtt befejeződnek"
  },
  {
    "szoveg": "Milyen következményekkel járhat, ha egy TCP implementáció agresszívebben növeli az ablakméretét a torlódáselkerülés fázisban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rövid távon nagyobb sávszélességet érhet el, de növeli a torlódás és csomagvesztés kockázatát, ami instabilitáshoz vezethet",
      "Minden esetben jobb teljesítményt eredményez, mert gyorsabban alkalmazkodik a változásokhoz",
      "Nincs hatása a hálózat működésére, mert a többi kapcsolat kompenzálja a változást"
    ],
    "helyes": "Rövid távon nagyobb sávszélességet érhet el, de növeli a torlódás és csomagvesztés kockázatát, ami instabilitáshoz vezethet"
  },
  {
    "szoveg": "Hogyan értékelhető a TCP BBR algoritmus hatékonysága a hagyományos veszteség-alapú algoritmusokkal szemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A BBR hatékonyabb nagy BDP hálózatokban, mert közvetlenül méri a sávszélességet, de problémás lehet a fairness szempontjából más TCP változatokkal való együttműködésben",
      "A BBR minden szempontból felülmúlja a hagyományos algoritmusokat, nincs hátránya",
      "A BBR rosszabbul teljesít, mert nem veszi figyelembe a csomagvesztést"
    ],
    "helyes": "A BBR hatékonyabb nagy BDP hálózatokban, mert közvetlenül méri a sávszélességet, de problémás lehet a fairness szempontjából más TCP változatokkal való együttműködésben"
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy új torlódáskezelési algoritmus alkalmassága a modern internetes környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hatékonyan kell kezelnie a változó hálózati körülményeket, fairnek kell lennie más folyamokkal szemben, és stabilnak kell maradnia különböző hálózati feltételek mellett",
      "Kizárólag a maximális átviteli sebesség elérése a fontos kritérium",
      "Csak a csomagvesztési arány minimalizálása számít"
    ],
    "helyes": "Hatékonyan kell kezelnie a változó hálózati körülményeket, fairnek kell lennie más folyamokkal szemben, és stabilnak kell maradnia különböző hálózati feltételek mellett"
  },
  {
    "szoveg": "Hogyan valósítja meg a TCP protokoll a méltányos sávszélesség-elosztást több kapcsolat között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AIMD algoritmus segítségével, amely lineárisan növeli a küldési rátát torlódás hiányában, és multiplicative módon csökkenti torlódás esetén",
      "Minden kapcsolat számára fix sávszélességet allokál a teljes rendelkezésre álló sávszélességből",
      "A kapcsolatok prioritási sorrendjét figyelembe véve osztja el a sávszélességet"
    ],
    "helyes": "Az AIMD algoritmus segítségével, amely lineárisan növeli a küldési rátát torlódás hiányában, és multiplicative módon csökkenti torlódás esetén"
  },
  {
    "szoveg": "Mit jelent a TCP fairness koncepciója egy szűk keresztmetszetű link esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "K darab TCP kapcsolat esetén ideálisan minden kapcsolat a sávszélesség 1/K részét kapja",
      "A nagyobb adatmennyiséget küldő kapcsolatok több sávszélességet kapnak",
      "A régebben létesített kapcsolatok több sávszélességet kapnak"
    ],
    "helyes": "K darab TCP kapcsolat esetén ideálisan minden kapcsolat a sávszélesség 1/K részét kapja"
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz két TCP kapcsolat sávszélesség-felhasználása, ha az egyik kapcsolat RTT-je kétszer akkora, mint a másiké?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kisebb RTT-vel rendelkező kapcsolat arányosan több sávszélességet fog kapni",
      "A nagyobb RTT-vel rendelkező kapcsolat több sávszélességet fog kapni",
      "Az RTT különbség nincs hatással a sávszélesség-elosztásra"
    ],
    "helyes": "A kisebb RTT-vel rendelkező kapcsolat arányosan több sávszélességet fog kapni"
  },
  {
    "szoveg": "Milyen hatással van az UDP forgalom jelenléte a TCP fairness mechanizmusára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az UDP forgalom zavarhatja a TCP fairness működését, mivel nem vesz részt a torlódásvezérlésben",
      "Az UDP forgalom segíti a TCP fairness működését a hálózat kiegyensúlyozásával",
      "Az UDP forgalomnak nincs hatása a TCP fairness működésére"
    ],
    "helyes": "Az UDP forgalom zavarhatja a TCP fairness működését, mivel nem vesz részt a torlódásvezérlésben"
  },
  {
    "szoveg": "Mi várható a TCP kapcsolatok viselkedésétől egy nagy sávszélességű hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP nem mindig tudja optimálisan kihasználni a nagy sávszélességet a konzervatív növekedési mechanizmusa miatt",
      "A TCP kapcsolatok azonnal maximális sebességgel tudnak kommunikálni",
      "A TCP kapcsolatok mindig teljes mértékben kihasználják a rendelkezésre álló sávszélességet"
    ],
    "helyes": "A TCP nem mindig tudja optimálisan kihasználni a nagy sávszélességet a konzervatív növekedési mechanizmusa miatt"
  },
  {
    "szoveg": "Hogyan befolyásolja a kapcsolatok hossza a TCP fairness megvalósulását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rövid kapcsolatok esetén nehezebb elérni a fair elosztást, mert nem jut idő a konvergenciára",
      "A kapcsolat hossza nem befolyásolja a fairness megvalósulását",
      "Rövid kapcsolatok esetén könnyebb elérni a fair elosztást"
    ],
    "helyes": "Rövid kapcsolatok esetén nehezebb elérni a fair elosztást, mert nem jut idő a konvergenciára"
  },
  {
    "szoveg": "Mennyire tekinthető megfelelőnek a TCP fairness mechanizmusa a modern hálózati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Korlátozott hatékonyságú, különösen nagy sávszélességű és vezeték nélküli hálózatokban, ezért új megoldások (pl. QUIC) fejlesztése szükséges",
      "Tökéletesen működik minden modern hálózati környezetben",
      "Teljesen elavult és használhatatlan a modern hálózatokban"
    ],
    "helyes": "Korlátozott hatékonyságú, különösen nagy sávszélességű és vezeték nélküli hálózatokban, ezért új megoldások (pl. QUIC) fejlesztése szükséges"
  },
  {
    "szoveg": "Hogyan értékelhető az AIMD algoritmus szerepe a TCP fairness megvalósításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hatékony alapmechanizmus, de modern hálózatokban kiegészítő megoldásokra lehet szükség a jobb teljesítmény érdekében",
      "Teljesen elavult mechanizmus, amely azonnal lecserélendő",
      "Tökéletes megoldás minden hálózati környezetben"
    ],
    "helyes": "Hatékony alapmechanizmus, de modern hálózatokban kiegészítő megoldásokra lehet szükség a jobb teljesítmény érdekében"
  },
  {
    "szoveg": "Egy nagy sávszélességű, de jelentős késleltetésű hálózati kapcsolat esetén (például kontinensek közötti kommunikáció) melyik TCP optimalizációs technika alkalmazása a legmegfelelőbb a maximális átviteli sebesség eléréséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Window Scale opció engedélyezése, amely lehetővé teszi a nagyobb méretű ablakok használatát a magas Bandwidth-Delay Product kezeléséhez",
      "A Keep-alive időzítők gyakoriságának növelése a kapcsolat stabilitásának javításához",
      "Az Initial Window méretének csökkentése a hálózat túlterhelésének elkerülése érdekében"
    ],
    "helyes": "A Window Scale opció engedélyezése, amely lehetővé teszi a nagyobb méretű ablakok használatát a magas Bandwidth-Delay Product kezeléséhez"
  },
  {
    "szoveg": "Hogyan értelmezhető a bufferbloat probléma a TCP teljesítmény optimalizálás kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A túl nagy pufferméret miatt megnövekedett késleltetés, amely akadályozza a torlódásvezérlés hatékony működését",
      "A túl kicsi pufferméret miatt gyakori csomagvesztés, amely csökkenti az átviteli sebességet",
      "A puffer teljes hiánya miatt kialakuló közvetlen csomagtovábbítás"
    ],
    "helyes": "A túl nagy pufferméret miatt megnövekedett késleltetés, amely akadályozza a torlódásvezérlés hatékony működését"
  },
  {
    "szoveg": "Egy webszerver TCP kapcsolatainak optimalizálása során milyen beállításokat alkalmazna a szerveroldali teljesítmény maximalizálásához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nagy méretű fogadói puffer, SACK engedélyezése és megfelelően beállított kezdeti ablakméret az új kapcsolatokhoz",
      "Minimális méretű fogadói puffer a memóriahasználat optimalizálásához és gyakori keep-alive üzenetek",
      "Keep-alive időzítők kikapcsolása és fix méretű congestion window használata minden kapcsolathoz"
    ],
    "helyes": "Nagy méretű fogadói puffer, SACK engedélyezése és megfelelően beállított kezdeti ablakméret az új kapcsolatokhoz"
  },
  {
    "szoveg": "Milyen TCP optimalizációs stratégiát alkalmazna egy olyan alkalmazásnál, amely kis méretű, de időkritikus adatcsomagokat továbbít (például online játék)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kisebb MSS használata, agresszívebb nyugtázási stratégia és minimalizált pufferméret a késleltetés csökkentésére",
      "Nagy pufferméret és window scale opció használata a maximális átviteli sebesség érdekében",
      "Slow start kikapcsolása és fix méretű congestion window használata"
    ],
    "helyes": "Kisebb MSS használata, agresszívebb nyugtázási stratégia és minimalizált pufferméret a késleltetés csökkentésére"
  },
  {
    "szoveg": "Egy nagy fájlátviteli alkalmazás esetén milyen következményekkel járhat a TCP torlódásvezérlés túl agresszív beállítása?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megnövekedett csomagvesztés, ami végül az átviteli sebesség csökkenéséhez és a hálózat instabilitásához vezet",
      "A kapcsolat stabilabb lesz és növekszik az átviteli sebesség",
      "Csökken a késleltetés és javul a hálózat kihasználtsága"
    ],
    "helyes": "Megnövekedett csomagvesztés, ami végül az átviteli sebesség csökkenéséhez és a hálózat instabilitásához vezet"
  },
  {
    "szoveg": "Milyen teljesítményváltozás várható, ha egy nagy sávszélességű hálózatban túl alacsonyra állítjuk a TCP fogadói puffer méretét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átviteli sebesség jelentősen csökken, mert a fogadó ablak korlátozza a küldő által használható ablak méretét",
      "A teljesítmény javul, mert csökken a memóriahasználat és a feldolgozási idő",
      "Nincs jelentős hatása a teljesítményre, mert a torlódásvezérlés kompenzálja a kis pufferméretet"
    ],
    "helyes": "Az átviteli sebesség jelentősen csökken, mert a fogadó ablak korlátozza a küldő által használható ablak méretét"
  },
  {
    "szoveg": "Egy vállalati környezetben működő kritikus alkalmazás TCP kapcsolatainak optimalizálása során melyik megközelítés a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fokozatos, monitorozáson alapuló finomhangolás, amely figyelembe veszi mind a teljesítményt, mind a stabilitást",
      "Agresszív optimalizálás a maximális átviteli sebesség azonnali elérése érdekében",
      "Minimális beavatkozás az alapértelmezett TCP beállításokba a kockázatok elkerülése érdekében"
    ],
    "helyes": "Fokozatos, monitorozáson alapuló finomhangolás, amely figyelembe veszi mind a teljesítményt, mind a stabilitást"
  },
  {
    "szoveg": "Hogyan értékelné egy olyan TCP optimalizációs stratégiát, amely kizárólag a pufferméretek növelésére koncentrál?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nem megfelelő, mert figyelmen kívül hagyja a késleltetés problémáját és a bufferbloat kockázatát",
      "Optimális megoldás, mert maximalizálja az átviteli sebességet minden helyzetben",
      "Megfelelő stratégia, mert egyszerűen implementálható és karbantartható"
    ],
    "helyes": "Nem megfelelő, mert figyelmen kívül hagyja a késleltetés problémáját és a bufferbloat kockázatát"
  },
  {
    "szoveg": "Egy hálózati alkalmazás TCP kapcsolatában a fogadó folyamatosan csökkenti a fogadási ablak (receive window) méretét. Mit jelez ez a viselkedés a TCP megbízhatósági mechanizmusok szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fogadó puffer telítődik, és a folyamatvezérlés mechanizmus aktívan szabályozza az adatáramlást a túlterhelés elkerülése érdekében.",
      "A hálózatban torlódás alakult ki, és a torlódásvezérlés mechanizmus csökkenti az átviteli sebességet.",
      "Az adatok sérülten érkeznek meg, ezért a TCP újraküldési mechanizmusa aktiválódik."
    ],
    "helyes": "A fogadó puffer telítődik, és a folyamatvezérlés mechanizmus aktívan szabályozza az adatáramlást a túlterhelés elkerülése érdekében."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a TCP működésében a három egymást követő azonos nyugta (ACK) érkezését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy csomag elveszett a hálózatban, és a fogadó még mindig ugyanazt a következő sorszámot várja, ami gyors újraküldést vált ki.",
      "A kapcsolat megszakadt, és a fogadó nem képes új adatokat fogadni.",
      "Az adatok sikeresen megérkeztek, és a fogadó megerősíti a vételt."
    ],
    "helyes": "Egy csomag elveszett a hálózatban, és a fogadó még mindig ugyanazt a következő sorszámot várja, ami gyors újraküldést vált ki."
  },
  {
    "szoveg": "Egy új TCP kapcsolat felépítésekor hogyan modellezhető a Slow Start mechanizmus működése az első 3 körben (RTT), ha nem történik csomagvesztés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az első körben 1 csomag, a másodikban 2 csomag, a harmadikban 4 csomag kerül átvitelre, mivel minden sikeres nyugtázás után duplázódik a torlódási ablak mérete.",
      "Minden körben 1 csomaggal nő az átvitt csomagok száma: 1, majd 2, majd 3 csomag.",
      "Az első körben 1 csomag, majd minden következő körben ugyanennyi kerül átvitelre a stabil kapcsolat érdekében."
    ],
    "helyes": "Az első körben 1 csomag, a másodikban 2 csomag, a harmadikban 4 csomag kerül átvitelre, mivel minden sikeres nyugtázás után duplázódik a torlódási ablak mérete."
  },
  {
    "szoveg": "Hogyan modellezhető a TCP viselkedése, ha egy hosszú, stabil kapcsolatban hirtelen csomagvesztés történik?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A torlódási ablak mérete felére csökken, majd lineáris növekedéssel folytatódik a Congestion Avoidance fázisban, miközben az elveszett csomag újraküldésre kerül.",
      "A kapcsolat megszakad és újra kell építeni a teljes TCP kapcsolatot a Slow Start fázistól kezdve.",
      "A torlódási ablak mérete változatlan marad, csak az elveszett csomag kerül újraküldésre."
    ],
    "helyes": "A torlódási ablak mérete felére csökken, majd lineáris növekedéssel folytatódik a Congestion Avoidance fázisban, miközben az elveszett csomag újraküldésre kerül."
  },
  {
    "szoveg": "Egy TCP kapcsolatban a nyugták késési ideje folyamatosan növekszik. Mit lehet ebből következtetni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózatban valószínűleg torlódás alakul ki, ami növekvő késleltetést okoz a csomagok továbbításában.",
      "A fogadó alkalmazás gyorsabban dolgozza fel az adatokat, mint korábban.",
      "Az adatkapcsolat sebessége növekszik, ezért több idő kell a nyugták feldolgozására."
    ],
    "helyes": "A hálózatban valószínűleg torlódás alakul ki, ami növekvő késleltetést okoz a csomagok továbbításában."
  },
  {
    "szoveg": "Ha egy TCP kapcsolatban gyakori az újraküldések száma, de a sávszélesség kihasználtsága alacsony marad, mire következtethetünk?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózatban valószínűleg magas a csomagvesztési arány, ami nem torlódásból ered (például vezeték nélküli kapcsolat interferencia miatt).",
      "A torlódásvezérlés túl agresszíven csökkenti az átviteli sebességet.",
      "A fogadó ablak mérete túl kicsi, ami korlátozza az átvitelt."
    ],
    "helyes": "A hálózatban valószínűleg magas a csomagvesztési arány, ami nem torlódásból ered (például vezeték nélküli kapcsolat interferencia miatt)."
  },
  {
    "szoveg": "Mennyire hatékony a TCP megbízhatósági mechanizmusa nagy késleltetésű és magas sávszélességű hálózatokban (például műholdas kapcsolatok esetén)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kevésbé hatékony, mert a nagy késleltetés miatt a torlódási ablak lassabban növekszik, és a sávszélesség kihasználtsága nem optimális.",
      "Teljesen hatékony, mert a nagy sávszélesség kompenzálja a késleltetésből adódó problémákat.",
      "Ugyanolyan hatékony, mint kis késleltetésű hálózatokban, mert a TCP mechanizmusai függetlenek a késleltetéstől."
    ],
    "helyes": "Kevésbé hatékony, mert a nagy késleltetés miatt a torlódási ablak lassabban növekszik, és a sávszélesség kihasználtsága nem optimális."
  },
  {
    "szoveg": "Hogyan ítélhető meg a TCP megbízhatósági mechanizmusainak hatékonysága rövid életű kapcsolatok (például webböngészés) esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nem optimális, mert a Slow Start miatt a rövid kapcsolatok gyakran véget érnek, mielőtt elérnék a maximális átviteli sebességet.",
      "Tökéletesen hatékony, mert a rövid kapcsolatok nem igényelnek jelentős sávszélességet.",
      "Maximálisan hatékony, mert a rövid kapcsolatok esetén nincs szükség torlódásvezérlésre."
    ],
    "helyes": "Nem optimális, mert a Slow Start miatt a rövid kapcsolatok gyakran véget érnek, mielőtt elérnék a maximális átviteli sebességet."
  },
  {
    "szoveg": "Egy hálózati rendszerben a csomagok érkezése között eltelt idő exponenciális eloszlást mutat, és az érkezések egymástól függetlenek. Mit jelent ez a forgalom szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A forgalom Poisson-folyamatként modellezhető, ahol a véletlenszerű érkezések statisztikailag jól jellemezhetők.",
      "A forgalom önhasonló (self-similar) tulajdonságot mutat, ami azt jelenti, hogy különböző időskálákon azonos mintázatokat látunk.",
      "A forgalom determinisztikus és előre jelezhető mintázatot követ, ami megkönnyíti a hálózat méretezését."
    ],
    "helyes": "A forgalom Poisson-folyamatként modellezhető, ahol a véletlenszerű érkezések statisztikailag jól jellemezhetők."
  },
  {
    "szoveg": "Mit jelent a hálózati forgalom burst-ös jellege a teljesítménymetrikák szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat teljesítménymutatói (késleltetés, csomagvesztés) hirtelen romlást mutathatnak a forgalmi csúcsok alatt, ami átmeneti szolgáltatásminőség-romláshoz vezethet.",
      "A hálózat teljesítménymutatói egyenletesen változnak a terheléssel, ami kiszámítható működést eredményez.",
      "A teljesítménymutatók csak hosszú távon változnak, a rövid távú ingadozások nem befolyásolják a szolgáltatásminőséget."
    ],
    "helyes": "A hálózat teljesítménymutatói (késleltetés, csomagvesztés) hirtelen romlást mutathatnak a forgalmi csúcsok alatt, ami átmeneti szolgáltatásminőség-romláshoz vezethet."
  },
  {
    "szoveg": "Hogyan modellezhető egy olyan hálózat működése, ahol különböző típusú alkalmazások (pl. videóstreaming, webböngészés, e-mail) forgalma keveredik?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű modellel, ahol az egyes alkalmazástípusok különböző forgalmi karakterisztikáit és QoS-igényeit külön-külön figyelembe vesszük, majd ezeket integráljuk egy összetett modellbe.",
      "Egyszerű Poisson-modellel, ami minden alkalmazástípusra egységesen alkalmazható.",
      "Kizárólag a legnagyobb sávszélességet igénylő alkalmazás forgalmának modellezésével, ami meghatározza a teljes rendszer viselkedését."
    ],
    "helyes": "Többrétegű modellel, ahol az egyes alkalmazástípusok különböző forgalmi karakterisztikáit és QoS-igényeit külön-külön figyelembe vesszük, majd ezeket integráljuk egy összetett modellbe."
  },
  {
    "szoveg": "Milyen modellt érdemes alkalmazni egy nagy forgalmú webszerver terhelésének vizsgálatára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Önhasonló (self-similar) forgalmi modellt, amely figyelembe veszi a különböző időskálákon megjelenő forgalmi mintázatokat és a burst-ös jelleget.",
      "Egyszerű lineáris modellt, amely csak az átlagos forgalmat veszi figyelembe.",
      "Konstans sebességű forgalmi modellt, amely csak a csúcsidőszaki terhelést veszi alapul."
    ],
    "helyes": "Önhasonló (self-similar) forgalmi modellt, amely figyelembe veszi a különböző időskálákon megjelenő forgalmi mintázatokat és a burst-ös jelleget."
  },
  {
    "szoveg": "Egy hálózat monitorozása során azt tapasztaljuk, hogy a forgalom intenzitása folyamatosan növekszik. Mit jelezhet előre ez a trend?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jelenlegi kapacitás hamarosan elégtelenné válhat, ami teljesítményromláshoz vezethet, ezért kapacitásbővítés vagy forgalomoptimalizálás válhat szükségessé.",
      "A hálózat automatikusan alkalmazkodni fog a növekvő forgalomhoz, nincs szükség beavatkozásra.",
      "A trend időszakos, ezért várhatóan magától normalizálódik a forgalom."
    ],
    "helyes": "A jelenlegi kapacitás hamarosan elégtelenné válhat, ami teljesítményromláshoz vezethet, ezért kapacitásbővítés vagy forgalomoptimalizálás válhat szükségessé."
  },
  {
    "szoveg": "Hogyan változhat a hálózat teljesítménye, ha a jelenlegi, főként webes forgalom mellett jelentős mennyiségű valós idejű videókonferencia forgalom jelenik meg?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A késleltetés és a jitter kritikusabbá válik, és a QoS-mechanizmusok megfelelő konfigurálása nélkül mindkét szolgáltatás minősége romolhat.",
      "A különböző típusú forgalmak automatikusan kiegyenlítik egymást, így nem várható teljesítményromlás.",
      "Csak a webes forgalom sebessége fog csökkenni, a videókonferencia minősége nem változik."
    ],
    "helyes": "A késleltetés és a jitter kritikusabbá válik, és a QoS-mechanizmusok megfelelő konfigurálása nélkül mindkét szolgáltatás minősége romolhat."
  },
  {
    "szoveg": "Hogyan ítélhető meg egy forgalmi modell megfelelősége egy nagyvállalati hálózat tervezése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A modell akkor megfelelő, ha figyelembe veszi a különböző alkalmazások forgalmi karakterisztikáit, a csúcsidőszaki terhelést, és validálható valós mérési adatokkal.",
      "A modell akkor megfelelő, ha az átlagos forgalmat pontosan előrejelzi, függetlenül az egyéb szempontoktól.",
      "A modell akkor megfelelő, ha a lehető legegyszerűbb matematikai leírást használja a forgalom jellemzésére."
    ],
    "helyes": "A modell akkor megfelelő, ha figyelembe veszi a különböző alkalmazások forgalmi karakterisztikáit, a csúcsidőszaki terhelést, és validálható valós mérési adatokkal."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy hálózat forgalommenedzsment rendszerének hatékonysága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer képessége a szolgáltatásminőség fenntartására különböző terhelési szinteken, a hatékony erőforrás-kihasználtság és a gyors reagálás a forgalmi változásokra.",
      "Kizárólag a maximális áteresztőképesség alapján, mivel ez a legfontosabb teljesítménymutató.",
      "A rendszer egyszerűsége és a konfigurációs lehetőségek minimalizálása alapján."
    ],
    "helyes": "A rendszer képessége a szolgáltatásminőség fenntartására különböző terhelési szinteken, a hatékony erőforrás-kihasználtság és a gyors reagálás a forgalmi változásokra."
  },
  {
    "szoveg": "Egy telekommunikációs mérnök azt vizsgálja, hogyan lehet optimalizálni egy 5G hálózatot önvezető járművek támogatására. Az alábbi megoldások közül melyik értelmezés a legmegfelelőbb a késleltetés csökkentésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Edge computing infrastruktúra telepítése a főbb közlekedési csomópontokhoz, ami a feldolgozási kapacitást közelebb hozza a járművekhez, így csökkentve a hálózati késleltetést.",
      "A központi adatközpont számítási kapacitásának növelése, hogy gyorsabban tudja feldolgozni a beérkező adatokat az önvezető járművektől.",
      "Az 5G antennák számának növelése a területen, anélkül hogy figyelembe vennénk a feldolgozási kapacitás elhelyezkedését."
    ],
    "helyes": "Edge computing infrastruktúra telepítése a főbb közlekedési csomópontokhoz, ami a feldolgozási kapacitást közelebb hozza a járművekhez, így csökkentve a hálózati késleltetést."
  },
  {
    "szoveg": "Hogyan értelmezhető a network slicing szerepe egy nagy ipari létesítmény 5G kommunikációs infrastruktúrájában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi különböző virtuális hálózatok létrehozását, ahol az időkritikus ipari folyamatok elkülönített, garantált erőforrásokkal rendelkező hálózati szeleteket kapnak.",
      "A hálózat fizikai szétválasztását jelenti különböző részlegek között, ahol minden részleg saját független 5G infrastruktúrát kap.",
      "Az adatok szétdarabolását és párhuzamos továbbítását jelenti a gyorsabb átvitel érdekében."
    ],
    "helyes": "Lehetővé teszi különböző virtuális hálózatok létrehozását, ahol az időkritikus ipari folyamatok elkülönített, garantált erőforrásokkal rendelkező hálózati szeleteket kapnak."
  },
  {
    "szoveg": "Egy városi 5G hálózat tervezésénél milyen következtetést vonhatunk le az eszközsűrűség és az interferencia kapcsolatáról?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nagy eszközsűrűség miatt fejlett interferenciakezelési technikákat kell alkalmazni, például beamforming és massive MIMO technológiákat a jelminőség fenntartásához.",
      "Az eszközök számának növekedésével az interferencia lineárisan csökken, mivel az eszközök egymást segítik a jelterjedésben.",
      "Az interferencia független az eszközsűrűségtől, csak az időjárási viszonyoktól függ."
    ],
    "helyes": "A nagy eszközsűrűség miatt fejlett interferenciakezelési technikákat kell alkalmazni, például beamforming és massive MIMO technológiákat a jelminőség fenntartásához."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le az 5G hálózatok energiafogyasztásáról a jelenlegi implementációk alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G hálózatok energiaigénye jelentősen magasabb a korábbi generációknál, ami új energiahatékonysági megoldásokat és intelligens erőforrás-menedzsmentet igényel.",
      "Az 5G technológia automatikusan energiahatékonyabb a 4G-nél, nincs szükség további optimalizációra.",
      "Az energiafogyasztás független a hálózati terheléstől és a szolgáltatások típusától."
    ],
    "helyes": "Az 5G hálózatok energiaigénye jelentősen magasabb a korábbi generációknál, ami új energiahatékonysági megoldásokat és intelligens erőforrás-menedzsmentet igényel."
  },
  {
    "szoveg": "Hogyan modellezhető egy 5G hálózat viselkedése egy kritikus ipari alkalmazás esetén, ahol több száz szenzor kommunikál valós időben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat dedikált network slice-t használ a szenzoroknak, edge computing támogatással és QoS-alapú ütemezéssel, garantálva a determinisztikus késleltetést.",
      "A szenzorok véletlenszerűen versenyeznek a hálózati erőforrásokért, és a leggyorsabb eszköz nyer hozzáférést.",
      "Minden szenzor különálló fizikai csatornát használ, függetlenül a többi eszköztől."
    ],
    "helyes": "A hálózat dedikált network slice-t használ a szenzoroknak, edge computing támogatással és QoS-alapú ütemezéssel, garantálva a determinisztikus késleltetést."
  },
  {
    "szoveg": "Milyen modellt alkothatunk egy városi 5G hálózat kapacitástervezéséhez, figyelembe véve a különböző felhasználói igényeket?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű modell, amely kombinálja a makro cellák széles lefedettségét, small cell-ek nagy kapacitását, és edge szerverek elosztott feldolgozását a forgalmi hot-spotokban.",
      "Egységes lefedettségi modell, ahol minden területen azonos kapacitású makro cellák működnek.",
      "Kizárólag nagy teljesítményű makro cellákra épülő modell, központosított feldolgozással."
    ],
    "helyes": "Többrétegű modell, amely kombinálja a makro cellák széles lefedettségét, small cell-ek nagy kapacitását, és edge szerverek elosztott feldolgozását a forgalmi hot-spotokban."
  },
  {
    "szoveg": "Hogyan ítélhető meg egy 5G hálózat alkalmassága távműtétek végrehajtására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózatnak képesnek kell lennie garantálni az állandó, 1 ms alatti késleltetést és 99.999% feletti megbízhatóságot, dedikált network slice-szal és redundáns kapcsolatokkal.",
      "Elegendő a standard internet kapcsolat minősége, mivel a műtéti eszközök kompenzálják a hálózati problémákat.",
      "A sávszélesség az egyetlen fontos paraméter, a késleltetés és megbízhatóság másodlagos."
    ],
    "helyes": "A hálózatnak képesnek kell lennie garantálni az állandó, 1 ms alatti késleltetést és 99.999% feletti megbízhatóságot, dedikált network slice-szal és redundáns kapcsolatokkal."
  },
  {
    "szoveg": "Hogyan ítélhető meg az 5G technológia alkalmassága egy nagy autógyár teljes gyártási folyamatának digitalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G alkalmas a feladatra, ha megfelelően tervezett network slicing-ot, edge computing-ot és redundáns infrastruktúrát alkalmaznak a különböző gyártási folyamatok követelményeinek kielégítésére.",
      "Az 5G nem alkalmas ipari környezetre, mert a vezeték nélküli kommunikáció sosem lehet elég megbízható.",
      "Elegendő egyetlen általános célú 5G hálózat telepítése, speciális konfiguráció nélkül."
    ],
    "helyes": "Az 5G alkalmas a feladatra, ha megfelelően tervezett network slicing-ot, edge computing-ot és redundáns infrastruktúrát alkalmaznak a különböző gyártási folyamatok követelményeinek kielégítésére."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a QUIC protokoll azon képességét, hogy egyesíti",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "a TCP és UDP előnyeit?",
      "A QUIC az UDP gyors adatátvitelét kombinálja a TCP megbízhatósági mechanizmusaival, miközben saját megoldást implementál a sorrendhelyesség és adatvesztés kezelésére.",
      "A QUIC egyszerűen váltogat a TCP és UDP protokollok között az aktuális hálózati körülményektől függően.",
      "A QUIC párhuzamosan használja mind a TCP-t, mind az UDP-t, így biztosítva a megbízható és gyors átvitelt."
    ],
    "helyes": "A QUIC az UDP gyors adatátvitelét kombinálja a TCP megbízhatósági mechanizmusaival, miközben saját megoldást implementál a sorrendhelyesség és adatvesztés kezelésére."
  },
  {
    "szoveg": "Mit jelent a QUIC protokoll kontextusában a 0-RTT kapcsolatfelvétel?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A korábban már felkeresett szerverekkel azonnal megkezdhető az adatátvitel, újbóli kézfogás nélkül, a korábbi kapcsolat paramétereinek újrafelhasználásával.",
      "A kapcsolat felépítéséhez egyáltalán nincs szükség adatcserére a kliens és szerver között.",
      "A kapcsolat felépítése során nem történik titkosítási kulcscsere."
    ],
    "helyes": "A korábban már felkeresett szerverekkel azonnal megkezdhető az adatátvitel, újbóli kézfogás nélkül, a korábbi kapcsolat paramétereinek újrafelhasználásával."
  },
  {
    "szoveg": "Milyen hatása lehet a QUIC protokoll széles körű elterjedésének a jövőbeli webes alkalmazások fejlesztésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fejlesztők komplexebb, interaktívabb webalkalmazásokat készíthetnek, mivel a QUIC hatékonyabb kapcsolatkezelése és alacsonyabb késleltetése stabilabb felhasználói élményt biztosít.",
      "A webalkalmazások fejlesztése jelentősen egyszerűsödik, mivel nem kell foglalkozni a hálózati kommunikáció kezelésével.",
      "A webalkalmazások mérete jelentősen csökken, mivel a QUIC automatikusan tömöríti az összes adatot."
    ],
    "helyes": "A fejlesztők komplexebb, interaktívabb webalkalmazásokat készíthetnek, mivel a QUIC hatékonyabb kapcsolatkezelése és alacsonyabb késleltetése stabilabb felhasználói élményt biztosít."
  },
  {
    "szoveg": "Milyen következményekkel járhat a QUIC protokoll bevezetése a mobil alkalmazások területén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A mobilalkalmazások stabilabban működhetnek gyenge vagy változó hálózati körülmények között, és hatékonyabban kezelhetik a hálózatváltásokat.",
      "A mobilalkalmazások teljesen függetlenné válnak a hálózati kapcsolat minőségétől.",
      "A mobilalkalmazásoknak nem kell többé foglalkozniuk a hálózati kommunikáció implementálásával."
    ],
    "helyes": "A mobilalkalmazások stabilabban működhetnek gyenge vagy változó hálózati körülmények között, és hatékonyabban kezelhetik a hálózatváltásokat."
  },
  {
    "szoveg": "Miben különbözik a QUIC protokoll kapcsolatkezelése a hagyományos TCP+TLS megoldástól?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QUIC egyetlen kézfogással kezeli mind a kapcsolat felépítését, mind a titkosítást, míg a TCP+TLS esetén ez két külön folyamat, ami több körös kommunikációt igényel.",
      "A QUIC nem használ titkosítást, így gyorsabb a kapcsolat felépítése, mint a TCP+TLS esetén.",
      "A QUIC csak a kapcsolat kezdetén használ titkosítást, utána már nem, szemben a TCP+TLS folyamatos titkosításával."
    ],
    "helyes": "A QUIC egyetlen kézfogással kezeli mind a kapcsolat felépítését, mind a titkosítást, míg a TCP+TLS esetén ez két külön folyamat, ami több körös kommunikációt igényel."
  },
  {
    "szoveg": "Hogyan viszonyul a QUIC protokoll torlódásvezérlése a TCP torlódásvezérléséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QUIC rugalmasabb torlódásvezérlést valósít meg, amely könnyebben módosítható és fejleszthető, mivel az alkalmazási rétegben implementált, szemben a TCP kernelszintű megvalósításával.",
      "A QUIC egyáltalán nem implementál torlódásvezérlést, teljes mértékben a hálózatra bízza azt.",
      "A QUIC kizárólag a sávszélesség alapján vezérli a torlódást, míg a TCP több paramétert is figyelembe vesz."
    ],
    "helyes": "A QUIC rugalmasabb torlódásvezérlést valósít meg, amely könnyebben módosítható és fejleszthető, mivel az alkalmazási rétegben implementált, szemben a TCP kernelszintű megvalósításával."
  },
  {
    "szoveg": "Mennyire indokolt a QUIC protokoll bevezetése a modern webes kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QUIC bevezetése indokolt, mert jelentősen javítja a webes kommunikáció hatékonyságát és biztonságát, miközben megoldást kínál a modern webes alkalmazások specifikus kihívásaira.",
      "A QUIC bevezetése felesleges, mert a jelenlegi TCP+TLS megoldások tökéletesen kielégítik a modern web igényeit.",
      "A QUIC bevezetése csak nagy tech cégek számára előnyös, kisebb weboldalaknak nincs szükségük rá."
    ],
    "helyes": "A QUIC bevezetése indokolt, mert jelentősen javítja a webes kommunikáció hatékonyságát és biztonságát, miközben megoldást kínál a modern webes alkalmazások specifikus kihívásaira."
  },
  {
    "szoveg": "Hogyan értékelhető a QUIC protokoll hatása a hálózati biztonságra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QUIC pozitív hatással van a biztonságra, mivel beépített, kötelező titkosítást használ és csökkenti a támadási felületet a kapcsolat felépítése során.",
      "A QUIC negatív hatással van a biztonságra, mivel az UDP használata miatt könnyebben támadható.",
      "A QUIC biztonsági szempontból semleges, mivel ugyanazokat a biztonsági mechanizmusokat használja, mint a TCP+TLS."
    ],
    "helyes": "A QUIC pozitív hatással van a biztonságra, mivel beépített, kötelező titkosítást használ és csökkenti a támadási felületet a kapcsolat felépítése során."
  },
  {
    "szoveg": "Egy nagyvállalat hálózatában különböző típusú forgalmakat kell kezelni: valós idejű videokonferenciát, email forgalmat és fájlmegosztást. Hogyan viszonyul egymáshoz a QoS és Best Effort megközelítés ebben a helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QoS képes priorizálni a videokonferencia forgalmat és garantált sávszélességet biztosítani számára, míg a Best Effort minden forgalmat egyenlően kezelne, ami a videokonferencia minőségének romlásához vezethet.",
      "A Best Effort jobb teljesítményt nyújt minden alkalmazás számára, mert nem pazarol erőforrásokat a forgalom osztályozására.",
      "A QoS és Best Effort azonos módon kezeli a különböző típusú forgalmakat, csak más technológiai megoldással."
    ],
    "helyes": "A QoS képes priorizálni a videokonferencia forgalmat és garantált sávszélességet biztosítani számára, míg a Best Effort minden forgalmat egyenlően kezelne, ami a videokonferencia minőségének romlásához vezethet."
  },
  {
    "szoveg": "Milyen különbségek vannak a QoS és Best Effort megközelítések között az implementációs komplexitás és költségek tekintetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QoS implementációja összetettebb és költségesebb, mivel forgalomosztályozást és-kezelést igényel, míg a Best Effort egyszerűbb és költséghatékonyabb megoldás.",
      "Mindkét megközelítés azonos komplexitású és költségű, csak más technológiai alapokon nyugszanak.",
      "A Best Effort implementációja összetettebb és drágább, mert több erőforrást igényel a forgalom egyenlő kezeléséhez."
    ],
    "helyes": "A QoS implementációja összetettebb és költségesebb, mivel forgalomosztályozást és-kezelést igényel, míg a Best Effort egyszerűbb és költséghatékonyabb megoldás."
  },
  {
    "szoveg": "Egy vállalat hálózatában folyamatosan problémák vannak a VoIP szolgáltatás minőségével. Mit jelezhet ez a QoS és Best Effort kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat valószínűleg Best Effort alapon működik, és nem biztosít megfelelő prioritást a VoIP forgalom számára a többi forgalommal szemben.",
      "A QoS beállítások túl szigorúak, és túl sok erőforrást foglalnak le a VoIP számára.",
      "A VoIP szolgáltatás hibás, mivel a QoS és Best Effort egyaránt megfelelő minőséget biztosítana."
    ],
    "helyes": "A hálózat valószínűleg Best Effort alapon működik, és nem biztosít megfelelő prioritást a VoIP forgalom számára a többi forgalommal szemben."
  },
  {
    "szoveg": "Hogyan értelmezhető a hálózati erőforrások kihasználtsága QoS és Best Effort esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QoS esetén az erőforrások elosztása tervezett és garantált, míg Best Effort esetén dinamikus és egyenlő az elosztás, függetlenül az alkalmazások igényeitől.",
      "Best Effort esetén jobb az erőforrások kihasználtsága, mert nincs szükség extra kapacitásra a garanciákhoz.",
      "QoS és Best Effort azonos módon osztja el az erőforrásokat, csak más technikai megoldással."
    ],
    "helyes": "A QoS esetén az erőforrások elosztása tervezett és garantált, míg Best Effort esetén dinamikus és egyenlő az elosztás, függetlenül az alkalmazások igényeitől."
  },
  {
    "szoveg": "Egy új IoT projekt bevezetésénél milyen hálózati forgalomkezelési következményekre lehet számítani?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A különböző IoT eszközök eltérő prioritású adatokat generálhatnak, ami QoS alapú forgalomkezelést tehet szükségessé a kritikus szenzoradatok védelme érdekében.",
      "Az IoT eszközök kis adatforgalma miatt a Best Effort megközelítés minden esetben elegendő lesz.",
      "Az IoT eszközök csak QoS környezetben képesek működni, Best Effort hálózatban nem használhatók."
    ],
    "helyes": "A különböző IoT eszközök eltérő prioritású adatokat generálhatnak, ami QoS alapú forgalomkezelést tehet szükségessé a kritikus szenzoradatok védelme érdekében."
  },
  {
    "szoveg": "Hogyan változhat a hálózati forgalomkezelés jelentősége az 5G és SDN technológiák elterjedésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A natív QoS támogatás és a szoftveresen definiált hálózatok rugalmasabb, automatizált forgalomkezelést tesznek lehetővé, ami a QoS szélesebb körű alkalmazásához vezethet.",
      "Az új technológiák olyan gyors hálózatokat biztosítanak, ahol már nem lesz szükség forgalomkezelésre.",
      "A Best Effort megközelítés lesz domináns, mert az új technológiák mellett nem lesz szükség QoS-re."
    ],
    "helyes": "A natív QoS támogatás és a szoftveresen definiált hálózatok rugalmasabb, automatizált forgalomkezelést tesznek lehetővé, ami a QoS szélesebb körű alkalmazásához vezethet."
  },
  {
    "szoveg": "Egy középméretű vállalat szempontjából melyik megközelítés (QoS vagy Best Effort) választása indokolt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A döntést a kritikus alkalmazások jelenléte és a hálózat terheltsége alapján kell meghozni: ha vannak időkritikus szolgáltatások és magas a terhelés, a QoS indokolt lehet a magasabb költségek ellenére.",
      "Mindig a QoS a jobb választás, mert magasabb szolgáltatási minőséget biztosít.",
      "A Best Effort mindig elegendő, mert költséghatékonyabb és egyszerűbb megoldást jelent."
    ],
    "helyes": "A döntést a kritikus alkalmazások jelenléte és a hálózat terheltsége alapján kell meghozni: ha vannak időkritikus szolgáltatások és magas a terhelés, a QoS indokolt lehet a magasabb költségek ellenére."
  },
  {
    "szoveg": "Milyen szempontok alapján értékelhető egy meglévő Best Effort hálózat QoS-re való áttérésének szükségessége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az áttérés szükségességét a jelenlegi szolgáltatásminőségi problémák, a kritikus alkalmazások követelményei és a várható megtérülés alapján kell értékelni.",
      "Kizárólag a költségek alapján kell dönteni, mivel a QoS mindig jobb szolgáltatásminőséget biztosít.",
      "Csak akkor szükséges az áttérés, ha a hálózat már egyáltalán nem működik megfelelően."
    ],
    "helyes": "Az áttérés szükségességét a jelenlegi szolgáltatásminőségi problémák, a kritikus alkalmazások követelményei és a várható megtérülés alapján kell értékelni."
  },
  {
    "szoveg": "Egy hálózati alkalmazás fejlesztése során azt tapasztaljuk, hogy a csomagok 15%-a elvész az interneten. Az alkalmazás feladata nagy mennyiségű szenzor adat továbbítása valós időben, ahol a legfontosabb követelmény az azonnali továbbítás. Melyik protokoll választása a legmegfelelőbb ebben az esetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "UDP, mert bár elveszhetnek csomagok, a késleltetés minimális marad, és a valós idejű adatátvitelnél ez fontosabb, mint a teljesen megbízható átvitel.",
      "TCP, mert garantálja az összes csomag megérkezését, és automatikusan újraküldi az elveszett csomagokat.",
      "Egyik sem megfelelő, ilyen magas csomagvesztési arány mellett új hálózati kapcsolatot kell keresni."
    ],
    "helyes": "UDP, mert bár elveszhetnek csomagok, a késleltetés minimális marad, és a valós idejű adatátvitelnél ez fontosabb, mint a teljesen megbízható átvitel."
  },
  {
    "szoveg": "Egy banki tranzakciókat kezelő rendszer fejlesztésénél melyik protokoll használata indokolt, és miért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TCP, mert garantálja az adatok teljes, sorrendhelyes és hibamentes átvitelét, ami elengedhetetlen pénzügyi tranzakciók esetén.",
      "UDP, mert gyorsabb adatátvitelt biztosít, és a modern banki rendszerek képesek kezelni az esetleges adatvesztést.",
      "Mindkettő megfelelő lehet, mert a banki szoftver alkalmazási rétege úgyis ellenőrzi a tranzakciókat."
    ],
    "helyes": "TCP, mert garantálja az adatok teljes, sorrendhelyes és hibamentes átvitelét, ami elengedhetetlen pénzügyi tranzakciók esetén."
  },
  {
    "szoveg": "Egy videókonferencia alkalmazás fejlesztése során azt tapasztaljuk, hogy a TCP használata esetén a beszélgetés akadozik és jelentős késések tapasztalhatók. Mi ennek az oka?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP újraküldési és sorrendhelyességi mechanizmusai késleltetést okoznak, ami akadozó videó- és hangátvitelhez vezet.",
      "A TCP nagyobb fejléc mérete miatt több adatot kell átvinni a hálózaton, ez okozza a késést.",
      "A TCP kapcsolatfelépítési folyamata minden egyes képkocka küldésekor újraindul, ez okozza az akadozást."
    ],
    "helyes": "A TCP újraküldési és sorrendhelyességi mechanizmusai késleltetést okoznak, ami akadozó videó- és hangátvitelhez vezet."
  },
  {
    "szoveg": "Egy fájlmegosztó alkalmazás fejlesztése során miért előnyösebb a TCP használata az UDP-vel szemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP garantálja a fájl összes részének pontos és sorrendhelyes megérkezését, így a fogadó oldalon nem kell külön mechanizmust implementálni az adatok ellenőrzésére.",
      "A TCP kisebb sávszélességet használ, ezért nagyobb fájlok átvitelére alkalmasabb.",
      "A TCP automatikusan tömöríti az átvitt adatokat, így gyorsabb a fájlátvitel."
    ],
    "helyes": "A TCP garantálja a fájl összes részének pontos és sorrendhelyes megérkezését, így a fogadó oldalon nem kell külön mechanizmust implementálni az adatok ellenőrzésére."
  },
  {
    "szoveg": "Egy online játék fejlesztése során a játékos pozíciójának folyamatos követéséhez melyik protokollt célszerű használni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "UDP, mivel a pozíció gyakori frissítése esetén fontosabb a gyors adatátvitel, és egy-egy pozíció adat elvesztése nem kritikus, mert a következő frissítés hamar érkezik.",
      "TCP, mert fontos, hogy a játékos pozíciója mindig pontosan szinkronban legyen a szerver és a kliens között.",
      "A TCP és UDP kombinációját, ahol a TCP a pontos pozíciót, az UDP pedig a mozgás irányát továbbítja."
    ],
    "helyes": "UDP, mivel a pozíció gyakori frissítése esetén fontosabb a gyors adatátvitel, és egy-egy pozíció adat elvesztése nem kritikus, mert a következő frissítés hamar érkezik."
  },
  {
    "szoveg": "Egy webes banki alkalmazás fejlesztése során hogyan használná a TCP és UDP protokollokat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A tranzakciókhoz és bejelentkezéshez TCP-t használnék a megbízhatóság miatt, míg az árfolyamok valós idejű közvetítéséhez UDP-t a gyorsabb frissítés érdekében.",
      "Kizárólag TCP-t használnék minden funkcióhoz, mivel banki alkalmazásnál nem engedhető meg semmilyen adatvesztés.",
      "Kizárólag UDP-t használnék, mert a modern titkosítási módszerek már biztosítják az adatok sértetlenségét."
    ],
    "helyes": "A tranzakciókhoz és bejelentkezéshez TCP-t használnék a megbízhatóság miatt, míg az árfolyamok valós idejű közvetítéséhez UDP-t a gyorsabb frissítés érdekében."
  },
  {
    "szoveg": "Egy IoT rendszerben, ahol több ezer szenzor küld másodpercenként adatokat, melyik megoldás a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "UDP használata aggregált adatküldéssel, ahol az alkalmazás rétegben történik az esetleges adatvesztés kezelése és a kritikus adatok újraküldésének megoldása.",
      "TCP használata minden szenzorral külön kapcsolatot fenntartva a megbízható adatátvitel érdekében.",
      "Kizárólag UDP használata, figyelmen kívül hagyva az adatvesztés lehetőségét, mivel sok szenzor esetén nem kritikus néhány mérés elvesztése."
    ],
    "helyes": "UDP használata aggregált adatküldéssel, ahol az alkalmazás rétegben történik az esetleges adatvesztés kezelése és a kritikus adatok újraküldésének megoldása."
  },
  {
    "szoveg": "Egy kritikus ipari folyamatvezérlő rendszer esetén melyik protokoll választása indokolt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TCP dedikált hálózati kapcsolattal, mivel a folyamatvezérlés megköveteli az adatok garantált és sorrendhelyes átvitelét, amit a TCP biztosít.",
      "UDP, mert a gyors reagálás fontosabb, mint az adatok megbízható átvitele.",
      "UDP redundáns adatküldéssel, ami kiváltja a TCP megbízhatósági mechanizmusait."
    ],
    "helyes": "TCP dedikált hálózati kapcsolattal, mivel a folyamatvezérlés megköveteli az adatok garantált és sorrendhelyes átvitelét, amit a TCP biztosít."
  },
  {
    "szoveg": "Egy valós idejű online játék fejlesztése során melyik protokoll választása a legmegfelelőbb a játékosok pozíciójának továbbításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "UDP, mert a kis késleltetés és az esetleges csomagvesztés kevésbé kritikus, mint a valós idejű játékélmény biztosítása",
      "TCP, mert garantálja az adatok megérkezését és a sorrendhelyes továbbítást",
      "SMTP, mert megbízható és széles körben támogatott protokoll"
    ],
    "helyes": "UDP, mert a kis késleltetés és az esetleges csomagvesztés kevésbé kritikus, mint a valós idejű játékélmény biztosítása"
  },
  {
    "szoveg": "Egy banki tranzakciókat kezelő alkalmazás fejlesztése során melyik protokollt célszerű választani az átutalási adatok továbbításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TCP, mert garantálja az adatok megbízható és sorrendhelyes továbbítását, valamint beépített hibajavítással rendelkezik",
      "UDP, mert gyorsabb adatátvitelt biztosít és kisebb az overhead",
      "ICMP, mert egyszerű és hatékony protokoll a hálózati kommunikációhoz"
    ],
    "helyes": "TCP, mert garantálja az adatok megbízható és sorrendhelyes továbbítását, valamint beépített hibajavítással rendelkezik"
  },
  {
    "szoveg": "Hogyan implementálná egy videókonferencia alkalmazás hang- és képátviteli komponensét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hangot és képet UDP protokollon keresztül továbbítanám, míg a kapcsolat vezérlő jelzéseket TCP-n keresztül",
      "Mind a hangot, mind a képet, mind a vezérlő jelzéseket TCP protokollon keresztül továbbítanám",
      "Mind a hangot, mind a képet, mind a vezérlő jelzéseket UDP protokollon keresztül továbbítanám"
    ],
    "helyes": "A hangot és képet UDP protokollon keresztül továbbítanám, míg a kapcsolat vezérlő jelzéseket TCP-n keresztül"
  },
  {
    "szoveg": "Egy fájlmegosztó alkalmazás fejlesztése során hogyan valósítaná meg a nagy méretű fájlok küldését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TCP protokollt használnék, a fájlt blokkokra osztanám, és folyamatos visszajelzést kérnék a sikeres fogadásról",
      "UDP protokollt használnék a gyorsabb átvitel érdekében, és az alkalmazás szintjén kezelném az esetleges hibákat",
      "ICMP protokollt használnék, mert ez biztosítja a leghatékonyabb fájlátvitelt"
    ],
    "helyes": "TCP protokollt használnék, a fájlt blokkokra osztanám, és folyamatos visszajelzést kérnék a sikeres fogadásról"
  },
  {
    "szoveg": "Hogyan integrálná egy komplex alkalmazásban a különböző protokollokat a különböző típusú adatok kezelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Protokoll absztrakciós réteget hoznék létre, ami a követelmények alapján automatikusan választja ki a megfelelő protokollt az adott kommunikációs feladathoz",
      "Kizárólag TCP protokollt használnék minden kommunikációhoz az egyszerűbb implementáció érdekében",
      "Minden adattípushoz külön alkalmazást fejlesztenék, saját protokoll implementációval"
    ],
    "helyes": "Protokoll absztrakciós réteget hoznék létre, ami a követelmények alapján automatikusan választja ki a megfelelő protokollt az adott kommunikációs feladathoz"
  },
  {
    "szoveg": "Milyen szempontok alapján integrálná a különböző protokollokat egy elosztott rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adattípusok és kommunikációs minták alapján csoportosítanám a funkciókat, és minden csoporthoz a legmegfelelőbb protokollt rendelném",
      "Minden komponens között ugyanazt a protokollt használnám az egységesség érdekében",
      "Minden komponenspárhoz egyedi protokollt fejlesztenék a speciális igények kielégítésére"
    ],
    "helyes": "Az adattípusok és kommunikációs minták alapján csoportosítanám a funkciókat, és minden csoporthoz a legmegfelelőbb protokollt rendelném"
  },
  {
    "szoveg": "Hogyan ellenőrizné egy alkalmazás protokollválasztásának helyességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Teljesítménytesztek és terheléses vizsgálatok végzésével, különös tekintettel a kritikus követelményekre és határesetekre",
      "Kizárólag a protokoll dokumentációjának áttekintésével",
      "A fejlesztőcsapat szavazása alapján"
    ],
    "helyes": "Teljesítménytesztek és terheléses vizsgálatok végzésével, különös tekintettel a kritikus követelményekre és határesetekre"
  },
  {
    "szoveg": "Milyen módszerrel ellenőrizné egy valós idejű alkalmazás protokollválasztásának megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Késleltetés és jitter mérésével különböző hálózati körülmények között, valamint a felhasználói élmény vizsgálatával",
      "Csak az adatátviteli sebesség mérésével ideális hálózati körülmények között",
      "A protokoll elméleti tulajdonságainak elemzésével"
    ],
    "helyes": "Késleltetés és jitter mérésével különböző hálózati körülmények között, valamint a felhasználói élmény vizsgálatával"
  },
  {
    "szoveg": "Hogyan értékelné egy kritikus üzleti alkalmazás esetén a TCP és UDP protokollok közötti választást?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A megbízhatósági követelmények, az adatvesztés következményei és a késleltetési tolerancia alapján, figyelembe véve az üzleti kritikusságot",
      "Kizárólag a protokollok sebessége alapján",
      "A protokollok implementációjának egyszerűsége alapján"
    ],
    "helyes": "A megbízhatósági követelmények, az adatvesztés következményei és a késleltetési tolerancia alapján, figyelembe véve az üzleti kritikusságot"
  },
  {
    "szoveg": "Milyen szempontok alapján ítélné meg egy IoT alkalmazás protokollválasztásának helyességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az energiahatékonyság, sávszélesség-használat és skálázhatóság alapján, figyelembe véve az eszközök korlátait",
      "Kizárólag a protokoll népszerűsége alapján",
      "Csak a protokoll dokumentációjának terjedelme alapján"
    ],
    "helyes": "Az energiahatékonyság, sávszélesség-használat és skálázhatóság alapján, figyelembe véve az eszközök korlátait"
  },
  {
    "szoveg": "Hogyan értelmezhető a network slicing hatása a valós idejű alkalmazások szállítási rétegbeli működésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A network slicing lehetővé teszi dedikált, alacsony késleltetésű szeletek létrehozását, ahol a szállítási réteg paraméterei optimalizálhatók a valós idejű követelményekhez.",
      "A network slicing kizárólag a sávszélesség felosztását jelenti a különböző alkalmazások között, a késleltetést nem befolyásolja.",
      "A network slicing csak az alkalmazási rétegben érvényesül, nincs hatása a szállítási réteg működésére."
    ],
    "helyes": "A network slicing lehetővé teszi dedikált, alacsony késleltetésű szeletek létrehozását, ahol a szállítási réteg paraméterei optimalizálhatók a valós idejű követelményekhez."
  },
  {
    "szoveg": "Milyen módon befolyásolja a network slicing a TCP protokoll működését különböző típusú szolgáltatások esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TCP protokoll paraméterei (ablakméret, időzítések, újraküldési stratégiák) szeletenként különbözően konfigurálhatók az adott szolgáltatás igényeinek megfelelően.",
      "A TCP protokoll működése egységes marad minden szelet esetében, csak az alkalmazási réteg paraméterei változnak.",
      "A network slicing kizárólag az UDP protokollra van hatással, a TCP működését nem befolyásolja."
    ],
    "helyes": "A TCP protokoll paraméterei (ablakméret, időzítések, újraküldési stratégiák) szeletenként különbözően konfigurálhatók az adott szolgáltatás igényeinek megfelelően."
  },
  {
    "szoveg": "Milyen következményekkel járhat a jövőben a network slicing széles körű elterjedése a hálózati alkalmazások fejlesztésére nézve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazásfejlesztők specifikus hálózati szeletekre optimalizálhatják szolgáltatásaikat, ami jobb teljesítményt és hatékonyabb erőforrás-kihasználást eredményez.",
      "Az alkalmazásfejlesztés egyszerűsödik, mivel nem kell figyelembe venni a hálózati paramétereket.",
      "A network slicing miatt az alkalmazások csak egyetlen specifikus hálózati környezetben lesznek képesek működni."
    ],
    "helyes": "Az alkalmazásfejlesztők specifikus hálózati szeletekre optimalizálhatják szolgáltatásaikat, ami jobb teljesítményt és hatékonyabb erőforrás-kihasználást eredményez."
  },
  {
    "szoveg": "Milyen hatása lehet a network slicingnak a hálózati torlódások kezelésére a szállítási rétegben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A különböző szeletek izolációja és az erőforrások garantált elosztása miatt a torlódások hatása korlátozódik az egyes szeletekre, nem terjed át másokra.",
      "A torlódások egyenletesen oszlanak el minden szelet között, függetlenül azok prioritásától.",
      "A network slicing növeli a torlódások valószínűségét a komplexebb hálózati struktúra miatt."
    ],
    "helyes": "A különböző szeletek izolációja és az erőforrások garantált elosztása miatt a torlódások hatása korlátozódik az egyes szeletekre, nem terjed át másokra."
  },
  {
    "szoveg": "Hogyan modellezhető egy IoT alkalmazás számára optimalizált hálózati szelet a szállítási rétegben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kis késleltetésű, energiahatékony átvitelt biztosító szelet, optimalizált TCP paraméterekkel és korlátozott, de garantált sávszélességgel az IoT eszközök számára.",
      "Nagy sávszélességű, magas késleltetésű szelet, maximális átviteli sebességgel az IoT eszközök számára.",
      "Változó sávszélességű és késleltetésű szelet, dinamikusan változó TCP paraméterekkel."
    ],
    "helyes": "Kis késleltetésű, energiahatékony átvitelt biztosító szelet, optimalizált TCP paraméterekkel és korlátozott, de garantált sávszélességgel az IoT eszközök számára."
  },
  {
    "szoveg": "Hogyan modellezhető egy streaming szolgáltatás számára optimalizált hálózati szelet működése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nagy sávszélességű, stabil átvitelt biztosító szelet, adaptív TCP paraméterekkel és pufferelési stratégiákkal a folyamatos streaming élmény érdekében.",
      "Kis sávszélességű, alacsony késleltetésű szelet, minimális puffereléssel.",
      "Változó sávszélességű szelet, véletlenszerű késleltetéssel és csomagvesztéssel."
    ],
    "helyes": "Nagy sávszélességű, stabil átvitelt biztosító szelet, adaptív TCP paraméterekkel és pufferelési stratégiákkal a folyamatos streaming élmény érdekében."
  },
  {
    "szoveg": "Mennyire hatékony megoldás a network slicing a különböző típusú hálózati forgalmak izolációjára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rendkívül hatékony, mivel hardveres és szoftveres szinten is biztosítja a forgalom elkülönítését, garantálva az egyes szeletek szolgáltatásminőségét.",
      "Kevéssé hatékony, mivel jelentős többletterhelést jelent a hálózati infrastruktúrának.",
      "Csak elméleti szinten működőképes, gyakorlati implementációja nem megvalósítható."
    ],
    "helyes": "Rendkívül hatékony, mivel hardveres és szoftveres szinten is biztosítja a forgalom elkülönítését, garantálva az egyes szeletek szolgáltatásminőségét."
  },
  {
    "szoveg": "Milyen mértékben indokolt a network slicing alkalmazása egy modern telekommunikációs hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Erősen indokolt, mivel lehetővé teszi a különböző szolgáltatások optimális kiszolgálását és az erőforrások hatékony kihasználását egyetlen fizikai infrastruktúrán.",
      "Csak speciális esetekben indokolt, általános használata túlkomplikálja a hálózatot.",
      "Nem indokolt, mert a hagyományos QoS megoldások is elegendőek a szolgáltatások megfelelő kezeléséhez."
    ],
    "helyes": "Erősen indokolt, mivel lehetővé teszi a különböző szolgáltatások optimális kiszolgálását és az erőforrások hatékony kihasználását egyetlen fizikai infrastruktúrán."
  },
  {
    "szoveg": "Melyik hálózati teljesítménymutató méri az időegység alatt átvitt adatmennyiséget?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átviteli sebesség (throughput), amely bit/másodperc mértékegységben fejezi ki az átvitt adatok mennyiségét.",
      "A késleltetés (latency), amely milliszekundumban méri az adatátvitel sebességét.",
      "A csomagvesztés (packet loss), amely az időegység alatt elveszett adatmennyiséget méri."
    ],
    "helyes": "Az átviteli sebesség (throughput), amely bit/másodperc mértékegységben fejezi ki az átvitt adatok mennyiségét."
  },
  {
    "szoveg": "Mi a késleltetés-ingadozás (jitter) definíciója a hálózati teljesítménymutatók között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati késleltetés változékonyságát méri, vagyis azt, hogy mennyire ingadozik a csomagok érkezési ideje között eltelt idő.",
      "Az adatcsomagok maximális késleltetési idejét mutatja meg a hálózatban.",
      "Az elveszett csomagok késleltetési idejének átlagát méri."
    ],
    "helyes": "A hálózati késleltetés változékonyságát méri, vagyis azt, hogy mennyire ingadozik a csomagok érkezési ideje között eltelt idő."
  },
  {
    "szoveg": "Egy videókonferencia alkalmazás esetében hogyan értelmezhető a magas jitter hatása?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A résztvevők képe és hangja akadozhat, a mozgás nem folyamatos, a beszéd szaggatottá válhat.",
      "A videó és hang minősége kiváló marad, csak a felbontás csökken automatikusan.",
      "A konferencia résztvevői közötti kommunikáció megszakad, és újra kell csatlakozni."
    ],
    "helyes": "A résztvevők képe és hangja akadozhat, a mozgás nem folyamatos, a beszéd szaggatottá válhat."
  },
  {
    "szoveg": "Hogyan értelmezhető a csomagvesztés hatása egy nagy fájl letöltése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A letöltés hosszabb ideig tart, mert az elveszett csomagokat újra kell küldeni, de az átvitt fájl végül hibátlan lesz.",
      "A letöltött fájl hiányos lesz, és nem lehet majd megnyitni.",
      "A letöltés azonnal megszakad, és hibaüzenetet kapunk."
    ],
    "helyes": "A letöltés hosszabb ideig tart, mert az elveszett csomagokat újra kell küldeni, de az átvitt fájl végül hibátlan lesz."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban az alacsony késleltetés (latency) jelentőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy online FPS játékban a játékos azonnal látja lövése eredményét, és azonnal tud reagálni az ellenfelek mozgására.",
      "Egy nagy felbontású film streamelése közben a kép és hang tökéletesen szinkronban van.",
      "Egy nagy méretű fájl letöltése maximális sebességgel történik."
    ],
    "helyes": "Egy online FPS játékban a játékos azonnal látja lövése eredményét, és azonnal tud reagálni az ellenfelek mozgására."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a magas átviteli sebesség (throughput) jelentőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy 4K felbontású élő sportközvetítés zökkenőmentes streamelése több néző számára egyidejűleg.",
      "Egy online sakk játszma, ahol a lépések azonnal megjelennek mindkét játékosnál.",
      "Egy rövid szöveges üzenet azonnali elküldése egy csevegő alkalmazásban."
    ],
    "helyes": "Egy 4K felbontású élő sportközvetítés zökkenőmentes streamelése több néző számára egyidejűleg."
  },
  {
    "szoveg": "Hogyan járul hozzá a DNS hierarchikus felépítése a rendszer skálázhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hierarchikus struktúra lehetővé teszi, hogy minden domain-szint önállóan kezelje az alatta lévő tartományokat, így a rendszer decentralizáltan tud növekedni anélkül, hogy egyetlen központi pontot túlterhelnénk.",
      "A hierarchikus felépítés miatt minden névfeloldási kérésnek végig kell járnia a teljes utat a gyökértől a céldomainig, ami biztosítja a rendszer konzisztenciáját a növekedés során.",
      "A DNS hierarchia minden szintjén azonos számú bejegyzést kell tárolni, ami egyenletes terheléselosztást biztosít a különböző szintű névszerverek között."
    ],
    "helyes": "A hierarchikus struktúra lehetővé teszi, hogy minden domain-szint önállóan kezelje az alatta lévő tartományokat, így a rendszer decentralizáltan tud növekedni anélkül, hogy egyetlen központi pontot túlterhelnénk."
  },
  {
    "szoveg": "Mit jelent a DNS hierarchiában az adminisztratív autonómia elve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden domain-szint független döntéseket hozhat az alatta lévő tartományok kezeléséről, saját szabályokat alkothat és delegálhat jogosultságokat anélkül, hogy a felsőbb szintek beavatkoznának.",
      "A DNS hierarchiában minden szintnek kötelezően követnie kell a gyökér névszerverek által meghatározott egységes szabályrendszert a teljes konzisztencia érdekében.",
      "Az adminisztratív autonómia azt jelenti, hogy minden domain csak a közvetlenül felette lévő szinttel kommunikálhat, így biztosítva a hierarchikus struktúra integritását."
    ],
    "helyes": "Minden domain-szint független döntéseket hozhat az alatta lévő tartományok kezeléséről, saját szabályokat alkothat és delegálhat jogosultságokat anélkül, hogy a felsőbb szintek beavatkoznának."
  },
  {
    "szoveg": "Hogyan modellezhető egy multinacionális vállalat DNS struktúrája a hierarchikus névtér elvei alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vállalat fő domainje alatt országonként aldomainek hozhatók létre (pl. us.company.com, uk.company.com), amelyek alatt további funkcionális aldomainek (pl. sales.us.company.com, support.uk.company.com) helyezkednek el.",
      "Minden országban külön fődomaint kell regisztrálni (company.us, company.uk), és ezeket egy központi DNS szerveren keresztül össze kell kapcsolni a hatékony működés érdekében.",
      "A vállalat minden részlegének közvetlenül a legfelső szintű domain alatt kell elhelyezkednie (sales.company.com, support.company.com) a gyors elérés érdekében."
    ],
    "helyes": "A vállalat fő domainje alatt országonként aldomainek hozhatók létre (pl. us.company.com, uk.company.com), amelyek alatt további funkcionális aldomainek (pl. sales.us.company.com, support.uk.company.com) helyezkednek el."
  },
  {
    "szoveg": "Hogyan modellezné egy egyetem belső hálózatának DNS struktúráját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fő domain alatt karok szerinti aldomainek (btk.university.hu), ezek alatt tanszéki aldomainek (angol.btk.university.hu), majd szolgáltatás-specifikus hostok (moodle.angol.btk.university.hu) helyezkednek el.",
      "Minden tanszék és szolgáltatás közvetlenül a fő domain alatt helyezkedik el (angol.university.hu, moodle.university.hu) a könnyebb kezelhetőség érdekében.",
      "Az egyetem minden egysége külön domaint használ (btk-university.hu, ttk-university.hu), amelyeket egy központi rendszer kapcsol össze."
    ],
    "helyes": "A fő domain alatt karok szerinti aldomainek (btk.university.hu), ezek alatt tanszéki aldomainek (angol.btk.university.hu), majd szolgáltatás-specifikus hostok (moodle.angol.btk.university.hu) helyezkednek el."
  },
  {
    "szoveg": "Mi a fő különbség a lapos (flat) és a hierarchikus névtér között a névkezelés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hierarchikus névtérben a nevek kezelése delegálható különböző szintekre, míg a lapos névtérben minden név kezelését központilag kell végezni, ami korlátozza a skálázhatóságot.",
      "A lapos névtér gyorsabb névfeloldást tesz lehetővé, mivel nincs szükség a hierarchia szintjein való végighaladásra, míg a hierarchikus névtér lassabb, de biztonságosabb.",
      "A hierarchikus névtér csak korlátozott számú nevet tud kezelni a szintek közötti függőségek miatt, míg a lapos névtér korlátlan számú nevet képes befogadni."
    ],
    "helyes": "A hierarchikus névtérben a nevek kezelése delegálható különböző szintekre, míg a lapos névtérben minden név kezelését központilag kell végezni, ami korlátozza a skálázhatóságot."
  },
  {
    "szoveg": "Hogyan különbözik a DNS hierarchia felépítése egy vállalati szervezeti struktúrától?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS hierarchiában egy node csak egy szülővel rendelkezhet és a nevek globálisan egyediek, míg egy vállalati struktúrában lehetnek átfedések és több felettes egység is.",
      "A DNS hierarchia csak három szintet engedélyez a hatékony működés érdekében, míg a vállalati struktúra tetszőleges mélységű lehet a szervezet igényei szerint.",
      "A DNS hierarchiában minden szintnek azonos számú alárendelt eleme kell legyen, míg a vállalati struktúra szabadon alakítható az igények szerint."
    ],
    "helyes": "A DNS hierarchiában egy node csak egy szülővel rendelkezhet és a nevek globálisan egyediek, míg egy vállalati struktúrában lehetnek átfedések és több felettes egység is."
  },
  {
    "szoveg": "Milyen példával szemléltethető a DNS hierarchia rugalmassága egy gyorsan növekvő startup esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A startup kezdheti egy egyszerű domain-nel (startup.com), majd ahogy nemzetközivé válik, létrehozhat országspecifikus aldomaineket (uk.startup.com) és szolgáltatás-specifikus aldomaineket (api.uk.startup.com) anélkül, hogy a meglévő struktúrát módosítania kellene.",
      "A startupnak minden új piacra lépéskor új fődomaint kell regisztrálnia (startup-uk.com, startup-de.com), és ezeket egy központi rendszerben össze kell kapcsolnia.",
      "A startup minden új szolgáltatásához külön domaint kell regisztrálnia (startup-api.com, startup-blog.com) a szolgáltatások függetlenségének megőrzése érdekében."
    ],
    "helyes": "A startup kezdheti egy egyszerű domain-nel (startup.com), majd ahogy nemzetközivé válik, létrehozhat országspecifikus aldomaineket (uk.startup.com) és szolgáltatás-specifikus aldomaineket (api.uk.startup.com) anélkül, hogy a meglévő struktúrát módosítania kellene."
  },
  {
    "szoveg": "Hogyan illusztrálható a DNS hierarchia használata egy nemzetközi oktatási platform esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az edu-platform.com fő domain alatt létrehozhatók nyelvi verziók (en.edu-platform.com), ezek alatt kurzuskategóriák (math.en.edu-platform.com), majd konkrét kurzusok (calculus.math.en.edu-platform.com) aldomainjei.",
      "Minden kurzushoz külön domaint kell regisztrálni (math-edu-platform.com, physics-edu-platform.com), hogy a tartalmak függetlenül kezelhetők legyenek.",
      "A platform minden funkcióját közvetlenül a fő domain alatt kell elhelyezni (courses.edu-platform.com, users.edu-platform.com) a gyors elérés érdekében."
    ],
    "helyes": "Az edu-platform.com fő domain alatt létrehozhatók nyelvi verziók (en.edu-platform.com), ezek alatt kurzuskategóriák (math.en.edu-platform.com), majd konkrét kurzusok (calculus.math.en.edu-platform.com) aldomainjei."
  },
  {
    "szoveg": "Egy webalkalmazás fejlesztése során hostname feloldást kell implementálni. Melyik megközelítés a legmegfelelőbb egy modern, platform-független alkalmazás esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A getaddrinfo() függvény használata, amely támogatja mind az IPv4, mind az IPv6 címeket, és platform-független megoldást biztosít a hostname feloldásra.",
      "A gethostbyname() függvény használata, amely bár csak IPv4 címeket támogat, de egyszerűbb implementációt tesz lehetővé és széles körben elterjedt.",
      "Saját DNS resolver implementálása UDP socketek használatával, amely teljes kontrollt biztosít a feloldási folyamat felett és független a rendszer beállításaitól."
    ],
    "helyes": "A getaddrinfo() függvény használata, amely támogatja mind az IPv4, mind az IPv6 címeket, és platform-független megoldást biztosít a hostname feloldásra."
  },
  {
    "szoveg": "Egy nagy forgalmú alkalmazásban hogyan implementálná a hostname feloldást a legjobb teljesítmény érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Aszinkron DNS feloldás implementálása lokális cache-el, megfelelő TTL kezeléssel és párhuzamos lekérdezések támogatásával a válaszidő optimalizálására.",
      "Szinkron DNS feloldás implementálása közvetlen UDP socket kommunikációval a DNS szerverekkel, ami minimalizálja a rendszer overhead-et.",
      "Előre feloldott IP címek tárolása egy statikus konfigurációs állományban, amely periodikusan frissül, így elkerülve a dinamikus DNS lekérdezéseket."
    ],
    "helyes": "Aszinkron DNS feloldás implementálása lokális cache-el, megfelelő TTL kezeléssel és párhuzamos lekérdezések támogatásával a válaszidő optimalizálására."
  },
  {
    "szoveg": "Milyen alapvető biztonsági intézkedéseket kell implementálni a hostname feloldás során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Timeout értékek beállítása, DNS válaszok validálása, cache poisoning elleni védelem implementálása, és megfelelő hibakezelési mechanizmusok bevezetése.",
      "A DNS szerverek válaszainak titkosítása, a lekérdezések naplózása, és a válaszok digitális aláírásának ellenőrzése minden esetben.",
      "A DNS lekérdezések korlátozása előre meghatározott szerverekre, és csak biztonságos kapcsolaton keresztüli kommunikáció engedélyezése."
    ],
    "helyes": "Timeout értékek beállítása, DNS válaszok validálása, cache poisoning elleni védelem implementálása, és megfelelő hibakezelési mechanizmusok bevezetése."
  },
  {
    "szoveg": "Hogyan implementálná a hostname feloldás hibakezelését egy robusztus alkalmazásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többszintű retry mechanizmus implementálása exponenciális visszalépéssel, alternatív DNS szerverek használata fallback-ként, és részletes hibanaplózás megvalósítása.",
      "Egyszerű újrapróbálkozás fix időközönként, és hiba esetén azonnali hibaüzenet küldése a felhasználónak további próbálkozások nélkül.",
      "Csak az elsődleges DNS szerver használata, és sikertelen feloldás esetén a kérés azonnali elutasítása a rendszer stabilitásának megőrzése érdekében."
    ],
    "helyes": "Többszintű retry mechanizmus implementálása exponenciális visszalépéssel, alternatív DNS szerverek használata fallback-ként, és részletes hibanaplózás megvalósítása."
  },
  {
    "szoveg": "Hogyan integrálná a hostname feloldási funkcionalitást egy mikroszerviz architektúrába?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Központi DNS feloldó szolgáltatás implementálása, amely kezeli a cache-elést, monitorozást biztosít, és egységes API-t nyújt a többi szolgáltatás számára.",
      "Minden mikroszerviz saját DNS feloldó logikával rendelkezik, amely független a többi szolgáltatástól és közvetlenül kommunikál a DNS szerverekkel.",
      "A DNS feloldást kizárólag az API Gateway szintjén implementáljuk, és minden belső kommunikáció IP címekkel történik."
    ],
    "helyes": "Központi DNS feloldó szolgáltatás implementálása, amely kezeli a cache-elést, monitorozást biztosít, és egységes API-t nyújt a többi szolgáltatás számára."
  },
  {
    "szoveg": "Hogyan integrálná a hostname feloldást egy nagy teljesítményű elosztott rendszerbe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elosztott cache rendszer implementálása a DNS válaszokhoz, terheléselosztással és automatikus szinkronizációval a különböző régiók között.",
      "Minden régióban független DNS feloldás implementálása, lokális cache-eléssel és közvetlen kommunikációval a helyi DNS szerverekkel.",
      "Központosított DNS feloldás egyetlen régióban, amely az összes többi régió számára biztosítja a szolgáltatást."
    ],
    "helyes": "Elosztott cache rendszer implementálása a DNS válaszokhoz, terheléselosztással és automatikus szinkronizációval a különböző régiók között."
  },
  {
    "szoveg": "Hogyan ellenőrizné egy hostname feloldó implementáció megfelelő működését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált tesztekkel különböző hálózati feltételek mellett, teljesítmény metrikák mérésével, biztonsági tesztekkel és terheléses tesztekkel.",
      "Manuális teszteléssel néhány hostname feloldásával és az eredmények vizuális ellenőrzésével a fejlesztői környezetben.",
      "A DNS szerverek válaszainak folyamatos monitorozásával és a sikertelen feloldások számolásával."
    ],
    "helyes": "Automatizált tesztekkel különböző hálózati feltételek mellett, teljesítmény metrikák mérésével, biztonsági tesztekkel és terheléses tesztekkel."
  },
  {
    "szoveg": "Milyen metrikákat és ellenőrzéseket implementálna a hostname feloldás monitorozásához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Válaszidők mérése, sikertelen feloldások száma, cache hit/miss arány, DNS szerver válaszidők és retry statisztikák gyűjtése és elemzése.",
      "Csak a sikertelen DNS lekérdezések számának mérése és a válaszidők átlagának számítása napi szinten.",
      "A DNS szerverek elérhetőségének ellenőrzése és a sikeres feloldások számának naplózása."
    ],
    "helyes": "Válaszidők mérése, sikertelen feloldások száma, cache hit/miss arány, DNS szerver válaszidők és retry statisztikák gyűjtése és elemzése."
  },
  {
    "szoveg": "Milyen kritériumok alapján ítélné meg egy hostname feloldó implementáció minőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megbízhatóság, teljesítmény, biztonság, skálázhatóság és a hibakezelés minősége alapján, figyelembe véve a válaszidőket és erőforrás-használatot.",
      "Kizárólag a sikeres feloldások aránya és a válaszidők alapján, függetlenül más szempontoktól.",
      "A kód komplexitása és a implementáció egyszerűsége alapján, figyelmen kívül hagyva a teljesítményt és megbízhatóságot."
    ],
    "helyes": "Megbízhatóság, teljesítmény, biztonság, skálázhatóság és a hibakezelés minősége alapján, figyelembe véve a válaszidőket és erőforrás-használatot."
  },
  {
    "szoveg": "Hogyan ítélné meg egy hostname feloldó rendszer megfelelőségét különböző méretű szervezetek esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szervezet mérete, forgalma és követelményei alapján, figyelembe véve a skálázhatóságot, költségeket és karbantarthatóságot a különböző esetekben.",
      "Kizárólag a rendszer teljesítménye alapján, függetlenül a szervezet méretétől és egyéb követelményeitől.",
      "A implementáció komplexitása alapján, feltételezve hogy a komplexebb rendszerek minden esetben jobbak."
    ],
    "helyes": "A szervezet mérete, forgalma és követelményei alapján, figyelembe véve a skálázhatóságot, költségeket és karbantarthatóságot a különböző esetekben."
  },
  {
    "szoveg": "Egy DNS szerver a következő választ küldi: 'Nem ismerem a kért domain nevét, de itt van a .com TLD szerver címe.' Melyik lekérdezési típust szemlélteti ez a válasz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Iteratív DNS lekérdezést, ahol a szerver a következő lehetséges állomás címét adja meg, és a kliensnek kell folytatnia a keresést",
      "Rekurzív DNS lekérdezést, ahol a szerver automatikusan továbbküldi a kérést a következő szervernek a teljes válasz megtalálásáig",
      "Hibrid DNS lekérdezést, ahol a szerver véletlenszerűen választ az iteratív és rekurzív módszer között a terhelés alapján"
    ],
    "helyes": "Iteratív DNS lekérdezést, ahol a szerver a következő lehetséges állomás címét adja meg, és a kliensnek kell folytatnia a keresést"
  },
  {
    "szoveg": "Mit jelent a DNS kontextusában az a kifejezés, hogy 'a szerver autoritatív választ adott'?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A válasz közvetlenül attól a DNS szervertől származik, amely az adott domain névért hivatalosan felelős és a végleges, hiteles információt tárolja",
      "A válasz egy gyorsítótárból (cache) származik, amely ideiglenesen tárolja a korábban lekért domain nevek adatait",
      "A válasz egy közvetítő DNS szervertől származik, amely más szerverektől gyűjtötte össze az információt"
    ],
    "helyes": "A válasz közvetlenül attól a DNS szervertől származik, amely az adott domain névért hivatalosan felelős és a végleges, hiteles információt tárolja"
  },
  {
    "szoveg": "Hogyan modellezhető egy rekurzív DNS lekérdezés folyamata a www.example.com domain név feloldásakor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kliens egyetlen kérést küld a helyi DNS szervernek, amely önállóan végigköveti a teljes láncolatot: gyökér DNS -> .com TLD -> example.com autoritatív szerver, majd visszaküldi a végeredményt",
      "A kliens először lekérdezi a gyökér DNS-t, majd annak válasza alapján a .com TLD-t, végül az example.com szervert, minden lépést önállóan végrehajtva",
      "A kliens és a DNS szerver felváltva küldik a kéréseket a különböző szintű DNS szervereknek, megosztva a feloldás feladatát"
    ],
    "helyes": "A kliens egyetlen kérést küld a helyi DNS szervernek, amely önállóan végigköveti a teljes láncolatot: gyökér DNS -> .com TLD -> example.com autoritatív szerver, majd visszaküldi a végeredményt"
  },
  {
    "szoveg": "Egy új DNS szerver implementációjánál hogyan modellezné a cache működését a rekurzív lekérdezések során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szerver minden sikeres lekérdezés eredményét eltárolja a TTL értékkel együtt, rendszeresen ellenőrzi az érvényességet, és csak az érvényes cache bejegyzéseket használja fel a válaszadáshoz",
      "A szerver minden lekérdezést közvetlenül továbbít az autoritatív szervereknek, nem tárol cache információkat a konzisztencia biztosítása érdekében",
      "A szerver végtelen ideig tárolja a lekérdezések eredményeit, így minimalizálva a hálózati forgalmat és a válaszidőt"
    ],
    "helyes": "A szerver minden sikeres lekérdezés eredményét eltárolja a TTL értékkel együtt, rendszeresen ellenőrzi az érvényességet, és csak az érvényes cache bejegyzéseket használja fel a válaszadáshoz"
  },
  {
    "szoveg": "Mi a fő különbség a rekurzív és iteratív DNS lekérdezés erőforrásigénye között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rekurzív lekérdezés nagyobb terhelést jelent a DNS szerverre, mert az végzi az összes lépést, míg az iteratív esetben a terhelés megoszlik a kliensek között",
      "Az iteratív lekérdezés terheli jobban a DNS szervert, mert több különálló kérést kell feldolgoznia ugyanahhoz a feloldáshoz",
      "Mindkét módszer azonos erőforrásigénnyel rendelkezik, csak a végrehajtás sorrendjében különböznek"
    ],
    "helyes": "A rekurzív lekérdezés nagyobb terhelést jelent a DNS szerverre, mert az végzi az összes lépést, míg az iteratív esetben a terhelés megoszlik a kliensek között"
  },
  {
    "szoveg": "Hogyan különbözik a cache használata a rekurzív és iteratív DNS lekérdezéseknél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rekurzív esetben a DNS szerver cache-eli az összes közbenső választ, míg iteratív esetben a kliens tárolja a részeredményeket a további lekérdezésekhez",
      "Csak a rekurzív lekérdezés használ cache-elést, az iteratív mindig friss adatokat kér minden szervertől",
      "Az iteratív lekérdezés több cache bejegyzést tárol, mint a rekurzív, mivel több szerverrel kommunikál közvetlenül"
    ],
    "helyes": "Rekurzív esetben a DNS szerver cache-eli az összes közbenső választ, míg iteratív esetben a kliens tárolja a részeredményeket a további lekérdezésekhez"
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a rekurzív DNS lekérdezés előnyeit egy nagy vállalati hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy 500 fős iroda, ahol a helyi DNS szerver cache-eli a gyakran látogatott oldalak címeit, így a dolgozók gyorsabban érik el a vállalati alkalmazásokat és weboldalakat",
      "Egy otthoni hálózat, ahol egyetlen számítógép közvetlenül végzi a DNS lekérdezéseket az internetszolgáltató szervereitől",
      "Egy mobiltelefon, amely különböző wifi hálózatokhoz csatlakozik, és minden alkalommal új DNS beállításokat kap"
    ],
    "helyes": "Egy 500 fős iroda, ahol a helyi DNS szerver cache-eli a gyakran látogatott oldalak címeit, így a dolgozók gyorsabban érik el a vállalati alkalmazásokat és weboldalakat"
  },
  {
    "szoveg": "Milyen valós példa szemlélteti legjobban az iteratív DNS lekérdezés használatának előnyeit?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy globális CDN szolgáltató DNS szervere, amely naponta milliárd lekérdezést kezel, és az iteratív módszerrel csökkenti a szerverterhelést",
      "Egy kisvállalati hálózat helyi DNS szervere, amely csak a belső hálózat névfeloldását végzi",
      "Egy otthoni router beépített DNS szervere, amely csak továbbítja a kéréseket az internetszolgáltató felé"
    ],
    "helyes": "Egy globális CDN szolgáltató DNS szervere, amely naponta milliárd lekérdezést kezel, és az iteratív módszerrel csökkenti a szerverterhelést"
  },
  {
    "szoveg": "Egy webszolgáltatás üzemeltetője azt tapasztalja, hogy a DNS változtatások nem érvényesülnek azonnal a felhasználóknál. Mi lehet ennek a technikai magyarázata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS cache-ben tárolt bejegyzések a TTL lejártáig érvényesek maradnak, így a változások csak fokozatosan terjednek el a rendszerben.",
      "A DNS szerverek csak meghatározott időközönként szinkronizálják adatbázisukat egymással, ami késlelteti a változások terjedését.",
      "A böngészők biztonsági okokból csak naponta egyszer frissítik a DNS bejegyzéseiket, függetlenül a TTL értéktől."
    ],
    "helyes": "A DNS cache-ben tárolt bejegyzések a TTL lejártáig érvényesek maradnak, így a változások csak fokozatosan terjednek el a rendszerben."
  },
  {
    "szoveg": "Hogyan befolyásolja a DNS cache működése egy népszerű weboldal betöltési idejét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A cache-elt DNS válaszok miatt a domain név feloldása azonnal megtörténik, jelentősen csökkentve a kezdeti betöltési időt.",
      "A cache miatt minden betöltéskor ellenőrizni kell a TTL értéket, ami növeli a betöltési időt a cache nélküli működéshez képest.",
      "A DNS cache nincs hatással a betöltési időre, mert a modern böngészők már nem használnak DNS gyorsítótárazást."
    ],
    "helyes": "A cache-elt DNS válaszok miatt a domain név feloldása azonnal megtörténik, jelentősen csökkentve a kezdeti betöltési időt."
  },
  {
    "szoveg": "Egy nagy forgalmú webszolgáltatás esetén hogyan működik együtt a DNS cache és a terheléselosztás?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rövid TTL értékkel és dinamikus DNS válaszokkal a cache lehetővé teszi a terhelés gyors átirányítását különböző szerverek között.",
      "A hosszú TTL értékkel biztosítható, hogy minden kérés ugyanarra a szerverre érkezzen, optimalizálva a cache használatot.",
      "A DNS cache kikapcsolásával és közvetlen IP címek használatával érhető el a leghatékonyabb terheléselosztás."
    ],
    "helyes": "A rövid TTL értékkel és dinamikus DNS válaszokkal a cache lehetővé teszi a terhelés gyors átirányítását különböző szerverek között."
  },
  {
    "szoveg": "Milyen hatása van a DNS cache architektúrának egy esetleges DNS szerver kiesés esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A cache-elt bejegyzések miatt a szolgáltatás a TTL lejártáig elérhető marad, akkor is, ha az autoritatív DNS szerver nem válaszol.",
      "A DNS szerver kiesése esetén a cache azonnal törlődik, hogy elkerülje az elavult adatok használatát.",
      "A cache automatikusan megduplázza a TTL értékeket szerver kiesés esetén, hogy fenntartsa a szolgáltatást."
    ],
    "helyes": "A cache-elt bejegyzések miatt a szolgáltatás a TTL lejártáig elérhető marad, akkor is, ha az autoritatív DNS szerver nem válaszol."
  },
  {
    "szoveg": "Mi történik egy domain névvel kapcsolatos kérésekkel, ha a TTL értéke lejár egy DNS cache-ben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Új DNS lekérdezés indul az autoritatív szerverhez, és az új válasz az új TTL értékkel cache-elődik.",
      "A rendszer automatikusan meghosszabbítja a TTL értéket további 24 órával a folyamatos működés érdekében.",
      "A cache törli a bejegyzést, és minden további kérést közvetlenül a root DNS szerverekhez irányít."
    ],
    "helyes": "Új DNS lekérdezés indul az autoritatív szerverhez, és az új válasz az új TTL értékkel cache-elődik."
  },
  {
    "szoveg": "Hogyan befolyásolja a TTL érték megválasztása egy domain név változtatásának propagációs idejét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rövidebb TTL gyorsabb propagációt tesz lehetővé, míg hosszabb TTL esetén a változások lassabban terjednek el a rendszerben.",
      "A TTL érték nem befolyásolja a propagációs időt, csak a cache méretét határozza meg a DNS szervereken.",
      "A TTL értéktől függetlenül a változások azonnal propagálódnak, ha a DNS szerverek közötti szinkronizáció aktív."
    ],
    "helyes": "Rövidebb TTL gyorsabb propagációt tesz lehetővé, míg hosszabb TTL esetén a változások lassabban terjednek el a rendszerben."
  },
  {
    "szoveg": "Milyen TTL értéket célszerű választani egy gyakran változó IP címmel rendelkező szolgáltatás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rövid (300-600 másodperc) TTL érték javasolt, hogy a változások gyorsan érvényesülhessenek a rendszerben.",
      "Hosszú (86400 másodperc) TTL érték ajánlott a DNS szerverek terhelésének minimalizálása érdekében.",
      "Változó TTL érték használata javasolt, amely automatikusan alkalmazkodik a lekérdezések gyakoriságához."
    ],
    "helyes": "Rövid (300-600 másodperc) TTL érték javasolt, hogy a változások gyorsan érvényesülhessenek a rendszerben."
  },
  {
    "szoveg": "Hogyan kell megválasztani a TTL értéket egy kritikus, magas rendelkezésre állású szolgáltatás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Közepes TTL érték (1800-3600 másodperc) javasolt, egyensúlyozva a gyors failover lehetőségét és a stabil működést.",
      "Nulla TTL érték ajánlott, hogy minden kérés közvetlenül az autoritatív szerverhez menjen a maximális kontroll érdekében.",
      "Extrém hosszú TTL (1 hét) javasolt a DNS infrastruktúra teljes tehermentesítése érdekében."
    ],
    "helyes": "Közepes TTL érték (1800-3600 másodperc) javasolt, egyensúlyozva a gyors failover lehetőségét és a stabil működést."
  },
  {
    "szoveg": "Egy rendszergazda azt tapasztalja, hogy a kontinensek közötti hálózati forgalomban gyakran elvesznek a csomagok, mielőtt elérnék a céljukat. Mi lehet ennek a legvalószínűbb magyarázata a TTL szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A beállított TTL érték túl alacsony az interkontinentális útvonalak hosszához képest, így a csomagok idő előtt elévülnek",
      "A beállított TTL érték túl magas, ami miatt a csomagok túl sokáig keringenek a hálózatban és végül torlódást okoznak",
      "A TTL érték dinamikusan változik az útválasztók között, ami instabilitást okoz a hosszú távú kapcsolatokban"
    ],
    "helyes": "A beállított TTL érték túl alacsony az interkontinentális útvonalak hosszához képest, így a csomagok idő előtt elévülnek"
  },
  {
    "szoveg": "Hogyan értelmezhető a TTL érték szerepe egy nagy vállalati hálózat különböző részein az optimális működés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat különböző szegmenseiben eltérő TTL értékek alkalmazása szükséges, a helyi forgalomhoz alacsonyabb, a távoli forgalomhoz magasabb értékekkel",
      "Egységes, magas TTL érték használata minden hálózati szegmensben, hogy minden csomag biztosan célba érjen",
      "A TTL értékek véletlenszerű beállítása a különböző hálózati szegmensekben a forgalom egyenletes eloszlása érdekében"
    ],
    "helyes": "A hálózat különböző szegmenseiben eltérő TTL értékek alkalmazása szükséges, a helyi forgalomhoz alacsonyabb, a távoli forgalomhoz magasabb értékekkel"
  },
  {
    "szoveg": "Egy új VoIP szolgáltatás bevezetésénél hogyan állítaná be a TTL értékeket a hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatás kritikus jellege miatt magasabb TTL értéket állítanék be, figyelembe véve a hálózat méretét és a redundáns útvonalakat",
      "Minimális TTL értéket használnék a késleltetés csökkentése érdekében, hiszen a VoIP szolgáltatás időkritikus",
      "A standard 64-es TTL értéket alkalmaznám, mivel ez minden típusú forgalom esetén megfelelő kompromisszumot jelent"
    ],
    "helyes": "A szolgáltatás kritikus jellege miatt magasabb TTL értéket állítanék be, figyelembe véve a hálózat méretét és a redundáns útvonalakat"
  },
  {
    "szoveg": "Hogyan implementálná a TTL értékek beállítását egy olyan hálózatban, ahol gyakran változik a topológia?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Adaptív TTL mechanizmust implementálnék, amely a hálózati feltételek és topológia változásai alapján dinamikusan módosítja az értékeket",
      "Fix, magas TTL értéket állítanék be minden eszközön, hogy biztosan kezelje a változó topológiát",
      "Minden változás esetén manuálisan állítanám be a TTL értékeket az aktuális topológiának megfelelően"
    ],
    "helyes": "Adaptív TTL mechanizmust implementálnék, amely a hálózati feltételek és topológia változásai alapján dinamikusan módosítja az értékeket"
  },
  {
    "szoveg": "Egy nagy forgalmú webszolgáltatás teljesítményproblémái esetén milyen következtetéseket vonhatunk le a TTL értékek vizsgálatából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A magas csomagvesztési arány és alacsony TTL értékek kombinációja arra utal, hogy a hálózati útvonalak hosszabbak vagy komplexebbek a tervezettnél",
      "A magas TTL értékek önmagukban felelősek a teljesítményproblémákért, mivel növelik a hálózati késleltetést",
      "A TTL értékek nem befolyásolják jelentősen a webszolgáltatás teljesítményét, ezért más paramétereket kell vizsgálni"
    ],
    "helyes": "A magas csomagvesztési arány és alacsony TTL értékek kombinációja arra utal, hogy a hálózati útvonalak hosszabbak vagy komplexebbek a tervezettnél"
  },
  {
    "szoveg": "Milyen következtetéseket vonhatunk le egy hálózat skálázhatóságáról a TTL optimalizálási lehetőségek alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A TTL értékek rugalmas beállíthatósága és a különböző hálózati szegmensek eltérő kezelési lehetősége jó skálázhatóságra utal",
      "A TTL értékek gyakori módosításának szükségessége azt jelzi, hogy a hálózat nem megfelelően skálázható",
      "A magas TTL értékek használata önmagában biztosítja a hálózat jó skálázhatóságát"
    ],
    "helyes": "A TTL értékek rugalmas beállíthatósága és a különböző hálózati szegmensek eltérő kezelési lehetősége jó skálázhatóságra utal"
  },
  {
    "szoveg": "Hogyan ítélhető meg egy hálózat TTL-konfigurációjának hatékonysága a teljesítménymutatók alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A csomagvesztési arány, késleltetés és sávszélesség-kihasználtság együttes vizsgálata alapján, figyelembe véve a különböző forgalmi típusok követelményeit",
      "Kizárólag a csomagvesztési arány alapján, mivel ez a legfontosabb mutató a TTL beállítások szempontjából",
      "A hálózati eszközök processzorterhelése alapján, mivel ez mutatja meg a TTL-feldolgozás hatékonyságát"
    ],
    "helyes": "A csomagvesztési arány, késleltetés és sávszélesség-kihasználtság együttes vizsgálata alapján, figyelembe véve a különböző forgalmi típusok követelményeit"
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy új TTL-optimalizálási stratégia bevezetésének sikeressége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati teljesítmény javulása, az üzemeltetési költségek változása és a felhasználói élmény együttes értékelése alapján",
      "Kizárólag a hálózati teljesítmény javulása alapján, mivel ez a legfontosabb szempont",
      "Az implementáció egyszerűsége és a konfigurációs idő csökkenése alapján"
    ],
    "helyes": "A hálózati teljesítmény javulása, az üzemeltetési költségek változása és a felhasználói élmény együttes értékelése alapján"
  },
  {
    "szoveg": "Hogyan járul hozzá a delegáció elve a DNS rendszer skálázhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felelősség és adminisztráció hierarchikus elosztásával minden zóna csak a saját tartományáért felel, így párhuzamosan, elosztott módon kezelhető a teljes névtér.",
      "A delegáció révén minden DNS kérés először a root szervereken keresztül halad, ami központosított, de hatékony feldolgozást tesz lehetővé.",
      "A delegáció lehetővé teszi, hogy minden domain név kezelése egyetlen központi adatbázisban történjen, ami egyszerűsíti a rendszer működését."
    ],
    "helyes": "A felelősség és adminisztráció hierarchikus elosztásával minden zóna csak a saját tartományáért felel, így párhuzamosan, elosztott módon kezelhető a teljes névtér."
  },
  {
    "szoveg": "Mi a delegáció elvének szerepe a DNS rendszer hibatűrésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A delegált zónák függetlensége miatt egy zóna meghibásodása nem befolyásolja a többi zóna működését és elérhetőségét a rendszerben.",
      "A delegáció biztosítja, hogy minden DNS kérés több útvonalon is eljuthasson a célszerverhez, így növelve a rendszer redundanciáját.",
      "A delegáció lehetővé teszi, hogy a root szerverek automatikusan átvegyék a meghibásodott zónák kezelését a folyamatos működés érdekében."
    ],
    "helyes": "A delegált zónák függetlensége miatt egy zóna meghibásodása nem befolyásolja a többi zóna működését és elérhetőségét a rendszerben."
  },
  {
    "szoveg": "Hogyan modellezhető egy új domain delegálásának folyamata a DNS rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szülő zóna NS rekordokat és szükség esetén glue rekordokat ad hozzá a zónafájljához, majd a gyermek zóna névszerverei átveszik a delegált domain kezelését.",
      "A root szerverek közvetlenül frissítik az összes DNS szerver adatbázisát az új domain információival, biztosítva az azonnali globális elérhetőséget.",
      "Az új domain automatikusan propagálódik a DNS hierarchiában, és minden szerver azonnal értesül a változásról egy központi broadcast mechanizmus révén."
    ],
    "helyes": "A szülő zóna NS rekordokat és szükség esetén glue rekordokat ad hozzá a zónafájljához, majd a gyermek zóna névszerverei átveszik a delegált domain kezelését."
  },
  {
    "szoveg": "Milyen szerepet játszanak a glue rekordok a DNS delegáció modelljében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A glue rekordok feloldják a körkörös függőséget azáltal, hogy közvetlenül megadják a delegált zóna névszervereinek IP címeit a szülő zónában.",
      "A glue rekordok titkosítják a delegált zóna és a szülő zóna közötti kommunikációt, növelve a biztonságot.",
      "A glue rekordok automatikusan szinkronizálják a delegált zóna változásait a szülő zónával, biztosítva az adatok konzisztenciáját."
    ],
    "helyes": "A glue rekordok feloldják a körkörös függőséget azáltal, hogy közvetlenül megadják a delegált zóna névszervereinek IP címeit a szülő zónában."
  },
  {
    "szoveg": "Hogyan alkalmazható a DNS delegáció elve egy nagyvállalat belső hálózatának strukturálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vállalat különböző részlegei saját DNS zónákat kaphatnak, amelyeket helyi adminisztrátorok kezelhetnek, miközben a központi IT megőrzi a fő domain feletti kontrollt.",
      "Minden részleg számára külön DNS szervert kell létrehozni, amelyek egymástól teljesen függetlenül működnek, központi koordináció nélkül.",
      "A vállalat összes DNS bejegyzését egyetlen központi szerveren kell kezelni a maximális biztonság és konzisztencia érdekében."
    ],
    "helyes": "A vállalat különböző részlegei saját DNS zónákat kaphatnak, amelyeket helyi adminisztrátorok kezelhetnek, miközben a központi IT megőrzi a fő domain feletti kontrollt."
  },
  {
    "szoveg": "Hogyan használható fel a DNS delegáció egy nemzetközi vállalat földrajzilag elosztott infrastruktúrájának kialakításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A különböző földrajzi régiók saját delegált zónákat kapnak, helyi DNS szerverekkel és adminisztrációval, ami optimalizálja a válaszidőket és a terhelést.",
      "Minden régió számára azonos DNS konfigurációt kell alkalmazni egy központi szerverről, a konzisztencia megőrzése érdekében.",
      "A DNS kéréseket mindig a vállalat központi szervereihez kell irányítani, függetlenül a földrajzi elhelyezkedéstől."
    ],
    "helyes": "A különböző földrajzi régiók saját delegált zónákat kapnak, helyi DNS szerverekkel és adminisztrációval, ami optimalizálja a válaszidőket és a terhelést."
  },
  {
    "szoveg": "Hogyan értékelhető a DNS delegáció hatékonysága egy nagy forgalmú webszolgáltatás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A delegáció hatékonysága mérhető a DNS válaszidők, a terheléselosztás sikeressége és a zónák közötti függetlenség mértéke alapján.",
      "A delegáció hatékonyságát kizárólag a DNS szerverek számával és földrajzi eloszlásával lehet mérni.",
      "A delegáció hatékonyságát csak a központi DNS szerver terhelésének csökkenése alapján kell értékelni."
    ],
    "helyes": "A delegáció hatékonysága mérhető a DNS válaszidők, a terheléselosztás sikeressége és a zónák közötti függetlenség mértéke alapján."
  },
  {
    "szoveg": "Milyen kritériumok alapján ítélhető meg egy DNS delegációs struktúra biztonsági szempontból?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNSSEC implementáció minősége, a delegációs lánc integritása és a zónák közötti bizalmi kapcsolatok erőssége alapján.",
      "Kizárólag a DNS szerverek fizikai biztonsága és a tűzfal konfigurációk alapján.",
      "Csak a DNS lekérdezések számának és típusának statisztikai elemzése alapján."
    ],
    "helyes": "A DNSSEC implementáció minősége, a delegációs lánc integritása és a zónák közötti bizalmi kapcsolatok erőssége alapján."
  },
  {
    "szoveg": "Hogyan járul hozzá az Anycast DNS koncepció a DNS szolgáltatás megbízhatóságához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az azonos IP címmel rendelkező, földrajzilag elosztott szerverek automatikusan átveszik egymás szerepét meghibásodás esetén, így biztosítva a folyamatos működést.",
      "A szerverek közötti rendszeres adatszinkronizáció révén minden szerver naprakész információkkal rendelkezik, ami növeli a válaszok pontosságát.",
      "Az Anycast DNS szerverek között létrejövő peer-to-peer kapcsolatok biztosítják az információk redundáns tárolását és gyors elérését."
    ],
    "helyes": "Az azonos IP címmel rendelkező, földrajzilag elosztott szerverek automatikusan átveszik egymás szerepét meghibásodás esetén, így biztosítva a folyamatos működést."
  },
  {
    "szoveg": "Mit jelent a DNS kontextusában az, hogy az Anycast 'a legközelebbi szerverhez' irányítja a forgalmat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati topológia szempontjából legközelebb eső, legkevesebb hopon keresztül elérhető szerverhez irányítja a kéréseket az útválasztási protokoll.",
      "A fizikai távolság alapján választja ki a földrajzilag legközelebb eső szervert, függetlenül a hálózati útvonalaktól.",
      "A szerverek processzorterhelése alapján választja ki a legkevésbé terhelt, így 'legközelebbi' szervert a válaszadáshoz."
    ],
    "helyes": "A hálózati topológia szempontjából legközelebb eső, legkevesebb hopon keresztül elérhető szerverhez irányítja a kéréseket az útválasztási protokoll."
  },
  {
    "szoveg": "Hogyan modellezhető egy Anycast DNS alapú rendszer viselkedése DDoS támadás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A támadó forgalom megoszlik a különböző földrajzi helyeken lévő szerverek között, így egyetlen szerver sem telítődik túl, miközben a legitim kérések továbbra is kiszolgálásra kerülnek.",
      "A támadó forgalom egy központi szűrőrendszeren keresztül halad, amely azonosítja és blokkolja a káros kéréseket, mielőtt elérnék a DNS szervereket.",
      "A rendszer automatikusan új szervereket indít a támadás alatt, majd a támadás elmúltával leállítja azokat, így dinamikusan alkalmazkodva a terheléshez."
    ],
    "helyes": "A támadó forgalom megoszlik a különböző földrajzi helyeken lévő szerverek között, így egyetlen szerver sem telítődik túl, miközben a legitim kérések továbbra is kiszolgálásra kerülnek."
  },
  {
    "szoveg": "Milyen modellt követ egy Anycast DNS rendszer a hibakezelés szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Passzív hibatűrési modellt, ahol a routing protokollok automatikusan kezelik a hibákat új útvonalak választásával, emberi beavatkozás nélkül.",
      "Aktív hibakezelési modellt, ahol a szerverek folyamatosan monitorozzák egymást és explicit módon átveszik a hibás szerver feladatait.",
      "Hierarchikus hibakezelési modellt, ahol a fő szerver meghibásodása esetén előre meghatározott sorrendben lépnek be a tartalék szerverek."
    ],
    "helyes": "Passzív hibatűrési modellt, ahol a routing protokollok automatikusan kezelik a hibákat új útvonalak választásával, emberi beavatkozás nélkül."
  },
  {
    "szoveg": "Miben különbözik az Anycast DNS megközelítés egy hagyományos, georedundáns DNS rendszertől?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Anycast rendszerben ugyanaz az IP cím több szerverhez tartozik és a forgalom automatikusan oszlik meg, míg a georedundáns rendszerben különböző IP címek vannak és explicit átirányításra van szükség.",
      "Az Anycast rendszer csak regionális szinten működik, míg a georedundáns rendszer globális lefedettséget biztosít különböző kontinenseken.",
      "Az Anycast rendszer központi load balancert használ a forgalom elosztásához, míg a georedundáns rendszer független szervereket működtet."
    ],
    "helyes": "Az Anycast rendszerben ugyanaz az IP cím több szerverhez tartozik és a forgalom automatikusan oszlik meg, míg a georedundáns rendszerben különböző IP címek vannak és explicit átirányításra van szükség."
  },
  {
    "szoveg": "Hogyan hasonlítható össze az Anycast DNS és egy hagyományos DNS szerver teljesítménye nagy terhelés esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Anycast DNS a terhelést földrajzilag elosztja a szerverek között, így stabilabb teljesítményt nyújt, míg a hagyományos szerver egy ponton túl túlterhelődhet.",
      "A hagyományos DNS szerver gyorsabb válaszidőt biztosít, mivel nincs szükség a kérések földrajzi elosztására és útválasztására.",
      "Mindkét megoldás azonos teljesítményt nyújt, mivel a DNS protokoll határozza meg a válaszidőt, nem pedig a szerverek elrendezése."
    ],
    "helyes": "Az Anycast DNS a terhelést földrajzilag elosztja a szerverek között, így stabilabb teljesítményt nyújt, míg a hagyományos szerver egy ponton túl túlterhelődhet."
  },
  {
    "szoveg": "Milyen következményekkel járna egy új Anycast DNS szerver hozzáadása egy már működő rendszerhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A környező régiókból érkező forgalom egy része automatikusan az új szerverhez irányítódna, csökkentve a meglévő szerverek terhelését és javítva a válaszidőket.",
      "A teljes DNS forgalmat újra kellene konfigurálni és manuálisan elosztani a szerverek között a megfelelő működéshez.",
      "Az új szerver csak akkor kapna forgalmat, ha valamelyik meglévő szerver meghibásodik, addig tartalékként működne."
    ],
    "helyes": "A környező régiókból érkező forgalom egy része automatikusan az új szerverhez irányítódna, csökkentve a meglévő szerverek terhelését és javítva a válaszidőket."
  },
  {
    "szoveg": "Mi várható egy Anycast DNS rendszerben, ha egy régióban jelentősen megnő a kérések száma?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A megnövekedett forgalom elsősorban a régióhoz legközelebbi szervert terheli, de ha az túlterhelődik, a kérések automatikusan más szerverekhez irányítódnak át.",
      "A rendszer azonnal új szervereket indít az érintett régióban a megnövekedett terhelés kezelésére.",
      "A régió összes kérése egyenlően oszlik meg az összes elérhető Anycast szerver között, függetlenül azok földrajzi helyzetétől."
    ],
    "helyes": "A megnövekedett forgalom elsősorban a régióhoz legközelebbi szervert terheli, de ha az túlterhelődik, a kérések automatikusan más szerverekhez irányítódnak át."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a DNSSEC által biztosított bizalmi lánc működését a DNS hierarchiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A gyökérzónától kezdve minden szint digitálisan aláírja az alatta lévő szint kulcsait, így biztosítva a teljes lánc hitelességét a végpontig.",
      "Minden DNS szerver független tanúsítványokat használ, amelyeket egy központi hatóság állít ki, így biztosítva a különálló zónák közötti bizalmat.",
      "A DNS szerverek peer-to-peer hálózatot alkotnak, ahol minden szerver egyenrangúként hitelesíti a többiek válaszait digitális aláírásokkal."
    ],
    "helyes": "A gyökérzónától kezdve minden szint digitálisan aláírja az alatta lévő szint kulcsait, így biztosítva a teljes lánc hitelességét a végpontig."
  },
  {
    "szoveg": "Mit jelent a DNSSEC kontextusában a 'hiteles tagadás' koncepciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy kriptográfiailag igazolt válasz, amely bizonyítja, hogy egy kért DNS rekord vagy domain név nem létezik az adott zónában.",
      "Egy biztonsági mechanizmus, amely megakadályozza a nem létező domain nevek lekérdezését a szerverektől.",
      "Egy automatikus válaszüzenet, amely blokkolja a gyanús forrásból érkező DNS lekérdezéseket a szerver túlterhelésének elkerülése érdekében."
    ],
    "helyes": "Egy kriptográfiailag igazolt válasz, amely bizonyítja, hogy egy kért DNS rekord vagy domain név nem létezik az adott zónában."
  },
  {
    "szoveg": "Hogyan modellezhető a DNSSEC kulcskezelési rendszere egy nagyméretű DNS zónában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Két különböző kulcstípus használata: ZSK a rekordok napi aláírásához és KSK a ZSK-k hitelesítéséhez, rendszeres kulcsrotációval és biztonsági mentésekkel.",
      "Egyetlen kulcspár használata minden művelethez, amely évente egyszer kerül frissítésre a maximális biztonság érdekében.",
      "Minden DNS rekordhoz külön kulcspár generálása, amelyek automatikusan frissülnek havonta a terheléselosztás érdekében."
    ],
    "helyes": "Két különböző kulcstípus használata: ZSK a rekordok napi aláírásához és KSK a ZSK-k hitelesítéséhez, rendszeres kulcsrotációval és biztonsági mentésekkel."
  },
  {
    "szoveg": "Milyen modellt követ a DNSSEC a DNS cache mérgezés elleni védelem biztosításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kriptográfiai aláírások láncolatát használja, ahol minden DNS válasz tartalmazza az eredeti zóna aláírását és a szülő zónák által hitelesített kulcsokat.",
      "Titkosított csatornákat hoz létre a DNS szerverek között, amelyeken keresztül csak hitelesített szerverek kommunikálhatnak egymással.",
      "Valós idejű ellenőrzőlistákat használ a gyanús DNS szerverek azonosítására és blokkolására a hálózaton."
    ],
    "helyes": "Kriptográfiai aláírások láncolatát használja, ahol minden DNS válasz tartalmazza az eredeti zóna aláírását és a szülő zónák által hitelesített kulcsokat."
  },
  {
    "szoveg": "Milyen következtetést vonhatunk le a DNSSEC bevezetésének hatásairól egy nagy forgalmú weboldal DNS infrastruktúrájára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Növekedett erőforrásigény és sávszélesség-használat várható, valamint komplexebb rendszerüzemeltetés szükséges a kulcskezelés és aláírások miatt.",
      "A rendszer teljesítménye azonnal javul, és az üzemeltetési költségek csökkennek a automatizált biztonsági mechanizmusok miatt.",
      "A DNS lekérdezések száma jelentősen csökken, mivel a DNSSEC automatikusan gyorsítótárazza az összes választ."
    ],
    "helyes": "Növekedett erőforrásigény és sávszélesség-használat várható, valamint komplexebb rendszerüzemeltetés szükséges a kulcskezelés és aláírások miatt."
  },
  {
    "szoveg": "Milyen következtetéseket vonhatunk le a DNSSEC használatának hatásairól az IoT eszközök biztonságára vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IoT eszközök megbízhatóbb domain feloldást kapnak, de a korlátozott erőforrásaik miatt a DNSSEC ellenőrzést gyakran a helyi hálózati átjárónak kell végeznie.",
      "Az IoT eszközök teljes körű DNSSEC támogatással automatikusan védettek lesznek minden hálózati támadás ellen.",
      "A DNSSEC használata felesleges az IoT eszközöknél, mivel azok csak helyi hálózaton kommunikálnak."
    ],
    "helyes": "Az IoT eszközök megbízhatóbb domain feloldást kapnak, de a korlátozott erőforrásaik miatt a DNSSEC ellenőrzést gyakran a helyi hálózati átjárónak kell végeznie."
  },
  {
    "szoveg": "Hogyan ítélhető meg a DNSSEC bevezetésének szükségessége egy kisméretű vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A bevezetés indokolt, ha a vállalat online szolgáltatásokat nyújt vagy érzékeny adatokat kezel, de figyelembe kell venni az üzemeltetési többletterhet és a szükséges szakértelem biztosítását.",
      "A DNSSEC bevezetése minden esetben kötelező, függetlenül a vállalat méretétől és tevékenységétől, a maximális biztonság érdekében.",
      "Kisméretű vállalatoknak nem érdemes DNSSEC-et bevezetni, mert a hagyományos DNS is elegendő védelmet nyújt számukra."
    ],
    "helyes": "A bevezetés indokolt, ha a vállalat online szolgáltatásokat nyújt vagy érzékeny adatokat kezel, de figyelembe kell venni az üzemeltetési többletterhet és a szükséges szakértelem biztosítását."
  },
  {
    "szoveg": "Hogyan ítélhető meg a DNSSEC hatékonysága a modern internetes fenyegetésekkel szemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNSSEC hatékony védelmet nyújt a DNS-specifikus támadások ellen, de önmagában nem elegendő a teljes körű internetes biztonsághoz, további biztonsági megoldásokkal kell kiegészíteni.",
      "A DNSSEC teljesen elavult technológia, amely nem képes megvédeni a modern támadásoktól, ezért más megoldásokat kell keresni.",
      "A DNSSEC önmagában teljes körű védelmet biztosít minden típusú internetes támadással szemben, további biztonsági megoldások nélkül is."
    ],
    "helyes": "A DNSSEC hatékony védelmet nyújt a DNS-specifikus támadások ellen, de önmagában nem elegendő a teljes körű internetes biztonsághoz, további biztonsági megoldásokkal kell kiegészíteni."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz a DoH és a DoT protokoll a hálózati forgalom azonosíthatósága szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DoT forgalom könnyebben azonosítható a dedikált 853-as port miatt, míg a DoH a HTTPS forgalomba (443-as port) rejtve nehezebben szűrhető.",
      "A DoH forgalom könnyebben azonosítható a dedikált 443-as port miatt, míg a DoT a TLS forgalomba rejtve nehezebben szűrhető.",
      "Mindkét protokoll ugyanolyan könnyen azonosítható, mivel mindkettő dedikált portot használ a DNS kérések továbbítására."
    ],
    "helyes": "A DoT forgalom könnyebben azonosítható a dedikált 853-as port miatt, míg a DoH a HTTPS forgalomba (443-as port) rejtve nehezebben szűrhető."
  },
  {
    "szoveg": "Milyen különbségek vannak a hagyományos DNS és a DoH teljesítménye között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hagyományos DNS gyorsabb, mert egyszerűbb protokollt használ és nincs titkosítási overhead, míg a DoH lassabb a HTTPS protokoll többlet terhelése miatt.",
      "A DoH gyorsabb, mert modern protokollt használ és a titkosítás optimalizált, míg a hagyományos DNS lassabb az elavult UDP protokoll miatt.",
      "Nincs jelentős különbség a két protokoll teljesítménye között, mivel mindkettő optimalizált a gyors névfeloldásra."
    ],
    "helyes": "A hagyományos DNS gyorsabb, mert egyszerűbb protokollt használ és nincs titkosítási overhead, míg a DoH lassabb a HTTPS protokoll többlet terhelése miatt."
  },
  {
    "szoveg": "Mit jelent a DNS over HTTPS (DoH) működésében a 'web forgalomba rejtett DNS lekérdezések' koncepció?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS kérések a normál HTTPS forgalom részeként, attól külső szemlélő számára megkülönböztethetetlenül kerülnek továbbításra.",
      "A DNS kérések titkosítva vannak, de külön csatornán keresztül kerülnek továbbításra a web forgalomtól.",
      "A DNS kérések csak akkor kerülnek elküldésre, amikor aktív web böngészés történik a rendszeren."
    ],
    "helyes": "A DNS kérések a normál HTTPS forgalom részeként, attól külső szemlélő számára megkülönböztethetetlenül kerülnek továbbításra."
  },
  {
    "szoveg": "Hogyan értelmezhető a DNS over TLS (DoT) biztonsági modellje a hagyományos DNS-hez képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DoT a TLS titkosítással védi a DNS kéréseket a lehallgatás és manipuláció ellen, miközben megtartja a DNS protokoll alapvető működési elveit.",
      "A DoT csak a kérések titkosítását végzi, de nem nyújt védelmet a manipuláció ellen, így részben sebezhető marad.",
      "A DoT teljesen új biztonsági modellt vezet be, amely nem kompatibilis a hagyományos DNS működési elveivel."
    ],
    "helyes": "A DoT a TLS titkosítással védi a DNS kéréseket a lehallgatás és manipuláció ellen, miközben megtartja a DNS protokoll alapvető működési elveit."
  },
  {
    "szoveg": "Egy vállalati környezetben, ahol fontos a hálózati forgalom monitorozása, melyik DNS protokoll használata a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS over TLS (DoT), mert biztosítja a titkosítást, miközben a dedikált port miatt a forgalom azonosítható és követhető marad.",
      "A DNS over HTTPS (DoH), mert a web forgalomba rejtett DNS kérések maximális biztonságot nyújtanak a vállalati adatoknak.",
      "A hagyományos DNS, mert a titkosítatlan forgalom könnyebben monitorozható és szűrhető a vállalati hálózaton."
    ],
    "helyes": "A DNS over TLS (DoT), mert biztosítja a titkosítást, miközben a dedikált port miatt a forgalom azonosítható és követhető marad."
  },
  {
    "szoveg": "Milyen esetekben érdemes egy otthoni felhasználónak DoH protokollra váltania?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ha fokozott adatvédelemre van szüksége és el szeretné rejteni DNS lekérdezéseit az internetszolgáltató elől, miközben elfogadható számára a valamivel nagyobb késleltetés.",
      "Ha a lehető leggyorsabb böngészési sebességet szeretné elérni, és nem foglalkozik a DNS lekérdezések titkosításával.",
      "Ha a helyi hálózatán belül szeretné korlátozni bizonyos weboldalak elérését a DNS szűrés segítségével."
    ],
    "helyes": "Ha fokozott adatvédelemre van szüksége és el szeretné rejteni DNS lekérdezéseit az internetszolgáltató elől, miközben elfogadható számára a valamivel nagyobb késleltetés."
  },
  {
    "szoveg": "Hogyan értékelhető a DoH protokoll használata egy olyan országban, ahol internet cenzúra van érvényben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DoH hatékony eszköz lehet a cenzúra megkerülésére, mivel a DNS kérések nem szűrhetők egyszerűen, de ez etikai és jogi kérdéseket vet fel a helyi szabályozással kapcsolatban.",
      "A DoH használata minden esetben ajánlott, mivel a szabad információáramlás alapvető emberi jog, függetlenül a helyi szabályozástól.",
      "A DoH használata kerülendő ilyen környezetben, mivel a helyi szabályozások betartása minden esetben elsőbbséget élvez a technikai lehetőségekkel szemben."
    ],
    "helyes": "A DoH hatékony eszköz lehet a cenzúra megkerülésére, mivel a DNS kérések nem szűrhetők egyszerűen, de ez etikai és jogi kérdéseket vet fel a helyi szabályozással kapcsolatban."
  },
  {
    "szoveg": "Milyen szempontok alapján értékelhető a DoT protokoll megfelelősége egy kritikus infrastruktúra esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DoT megfelelő választás lehet, mert biztosítja a titkosítást, miközben lehetővé teszi a forgalom monitorozását, de figyelembe kell venni a szervezet biztonsági követelményeit és a teljesítményigényeket.",
      "A DoT minden kritikus infrastruktúra esetében a legjobb választás, mivel maximális biztonságot nyújt minden körülmények között.",
      "A DoT használata kritikus infrastruktúrában kerülendő, mivel a titkosítás miatt nem lehet megfelelően ellenőrizni a forgalmat."
    ],
    "helyes": "A DoT megfelelő választás lehet, mert biztosítja a titkosítást, miközben lehetővé teszi a forgalom monitorozását, de figyelembe kell venni a szervezet biztonsági követelményeit és a teljesítményigényeket."
  },
  {
    "szoveg": "Hogyan értelmezhető a Reverse DNS szerepe az email rendszerek biztonságában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A levelezőszerverek ellenőrzik a küldő IP-címének reverse DNS bejegyzését, és ha az nem létezik vagy nem egyezik a forward DNS-sel, akkor a levelet potenciális spamként kezelhetik.",
      "A reverse DNS segítségével a levelezőszerverek ellenőrzik a levél tartalmát, és ha gyanús kulcsszavakat találnak, akkor automatikusan blokkolják a küldőt.",
      "A reverse DNS kizárólag a levél titkosítását ellenőrzi, és ha nem megfelelő a titkosítás szintje, akkor a szerver visszautasítja a kapcsolatot."
    ],
    "helyes": "A levelezőszerverek ellenőrzik a küldő IP-címének reverse DNS bejegyzését, és ha az nem létezik vagy nem egyezik a forward DNS-sel, akkor a levelet potenciális spamként kezelhetik."
  },
  {
    "szoveg": "Mit jelent a reverse DNS működésének folyamata a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IP-cím speciális formátumra alakítása (pl. 1.2.0.192.in-addr.arpa), majd ebből a PTR rekord lekérdezése a domain név meghatározásához.",
      "A domain név közvetlen átalakítása IP-címmé egy központi adatbázis segítségével, majd ennek visszaellenőrzése a helyi DNS szerveren.",
      "Az IP-cím titkosítása egy speciális algoritmussal, majd a titkosított érték összevetése a DNS szervereken tárolt értékekkel."
    ],
    "helyes": "Az IP-cím speciális formátumra alakítása (pl. 1.2.0.192.in-addr.arpa), majd ebből a PTR rekord lekérdezése a domain név meghatározásához."
  },
  {
    "szoveg": "Hogyan használható a reverse DNS egy nagyvállalati hálózat biztonsági incidensének kivizsgálásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A naplófájlokban szereplő IP-címek domain nevekké alakításával azonosíthatók a támadók forrásai és a belső hálózat érintett eszközei.",
      "A reverse DNS segítségével csak a belső hálózat eszközeinek IP-címeit lehet domain névvé alakítani, külső címeket nem.",
      "A reverse DNS kizárólag a támadó eszközök operációs rendszerének azonosítására használható a biztonsági vizsgálatok során."
    ],
    "helyes": "A naplófájlokban szereplő IP-címek domain nevekké alakításával azonosíthatók a támadók forrásai és a belső hálózat érintett eszközei."
  },
  {
    "szoveg": "Hogyan alkalmazható a reverse DNS egy CDN szolgáltatás optimalizálásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználók IP-címeihez tartozó reverse DNS bejegyzések alapján pontosabban meghatározható a földrajzi helyzetük, így optimalizálható a tartalomkiszolgálás.",
      "A reverse DNS kizárólag a CDN szerverek közötti kommunikáció titkosítására használható, más célra nem alkalmazható.",
      "A reverse DNS csak a CDN cache szerverek IP-címeinek elrejtésére szolgál, a szolgáltatás optimalizálásában nem játszik szerepet."
    ],
    "helyes": "A felhasználók IP-címeihez tartozó reverse DNS bejegyzések alapján pontosabban meghatározható a földrajzi helyzetük, így optimalizálható a tartalomkiszolgálás."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a reverse DNS használatát a hálózati hibakeresésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy rendszergazda a hálózati forgalom monitorozása során észlelt ismeretlen IP-címeket reverse DNS lekérdezéssel azonosítja, így derítve fel egy rosszul konfigurált router által okozott routing hurkot.",
      "Egy felhasználó a böngészőjében beírja a weboldal címét, és a DNS szerver visszaadja a megfelelő IP-címet.",
      "Egy tűzfal automatikusan blokkolja az összes olyan IP-címet, amelyhez nem tartozik reverse DNS bejegyzés."
    ],
    "helyes": "Egy rendszergazda a hálózati forgalom monitorozása során észlelt ismeretlen IP-címeket reverse DNS lekérdezéssel azonosítja, így derítve fel egy rosszul konfigurált router által okozott routing hurkot."
  },
  {
    "szoveg": "Mi lehet egy jó példa a reverse DNS használatára egy nagyvállalati levelezőrendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A levelezőszerver minden bejövő kapcsolatnál ellenőrzi a küldő IP-címének reverse DNS bejegyzését, és ha az egy ismert spamküldő domainre mutat, automatikusan elutasítja a kapcsolatot.",
      "A levelezőszerver csak a belső hálózatból érkező leveleket fogadja, és minden külső címről érkező levelet automatikusan blokkol.",
      "A levelezőszerver kizárólag a levél tartalmát vizsgálja, és nem foglalkozik a küldő IP-címének ellenőrzésével."
    ],
    "helyes": "A levelezőszerver minden bejövő kapcsolatnál ellenőrzi a küldő IP-címének reverse DNS bejegyzését, és ha az egy ismert spamküldő domainre mutat, automatikusan elutasítja a kapcsolatot."
  },
  {
    "szoveg": "Hogyan ítélhető meg a reverse DNS jelentősége egy modern vállalati hálózat biztonságában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A reverse DNS kritikus biztonsági elem, mivel segít azonosítani és szűrni a gyanús forgalmat, támogatja a naplóelemzést és a biztonsági incidensek kivizsgálását.",
      "A reverse DNS egy elavult technológia, amely nem nyújt valódi védelmet a modern kibertámadások ellen, ezért használata elhagyható.",
      "A reverse DNS kizárólag a hálózati teljesítmény optimalizálására szolgál, a biztonságban nincs szerepe."
    ],
    "helyes": "A reverse DNS kritikus biztonsági elem, mivel segít azonosítani és szűrni a gyanús forgalmat, támogatja a naplóelemzést és a biztonsági incidensek kivizsgálását."
  },
  {
    "szoveg": "Hogyan értékelhető a reverse DNS konfiguráció hiányának hatása egy szervezet működésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hiányzó vagy hibás reverse DNS konfiguráció jelentősen korlátozhatja a szervezet kommunikációs képességeit, különösen az email szolgáltatások terén, és megnehezíti a hálózati problémák diagnosztizálását.",
      "A reverse DNS konfiguráció hiánya nem okoz problémát, mert a modern hálózati protokollok automatikusan kezelik ezt a helyzetet.",
      "A reverse DNS konfiguráció csak a webszerverek működését befolyásolja, más szolgáltatásokra nincs hatással."
    ],
    "helyes": "A hiányzó vagy hibás reverse DNS konfiguráció jelentősen korlátozhatja a szervezet kommunikációs képességeit, különösen az email szolgáltatások terén, és megnehezíti a hálózati problémák diagnosztizálását."
  },
  {
    "szoveg": "Egy globális vállalat DNS infrastruktúrájának tervezésekor melyik megoldás biztosítja a leghatékonyabb terheléselosztást és válaszidőt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Anycast címzés használata a DNS szervereken, kombinálva régiónként elhelyezett rekurzív névszerverekkel és megfelelően beállított TTL értékekkel",
      "Egyetlen központi DNS szerver használata nagy teljesítményű hardverrel és magas sávszélességű kapcsolattal, valamint hosszú TTL értékekkel a cache-elés maximalizálására",
      "Több DNS szerver random földrajzi elhelyezése round-robin DNS terheléselosztással, rögzített TTL értékekkel és központosított cache kezeléssel"
    ],
    "helyes": "Anycast címzés használata a DNS szervereken, kombinálva régiónként elhelyezett rekurzív névszerverekkel és megfelelően beállított TTL értékekkel"
  },
  {
    "szoveg": "Egy kritikus DNS infrastruktúra katasztrófa-elhárítási tervének kialakításakor melyik megközelítés nyújtja a legnagyobb biztonságot?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több földrajzi régióban elhelyezett aktív-aktív DNS szerverek automatikus failover mechanizmussal, folyamatos replikációval és rendszeres DR tesztekkel",
      "Napi biztonsági mentések készítése egy távoli helyszínen, manuális failover eljárással és évente végzett DR tesztekkel",
      "Egyetlen tartalék helyszín kialakítása aktív-passzív konfigurációban, heti mentésekkel és dokumentált helyreállítási eljárásokkal"
    ],
    "helyes": "Több földrajzi régióban elhelyezett aktív-aktív DNS szerverek automatikus failover mechanizmussal, folyamatos replikációval és rendszeres DR tesztekkel"
  },
  {
    "szoveg": "Hogyan kell megvalósítani egy nagyvállalati DNS infrastruktúra monitoring rendszerét a leghatékonyabb hibadetektálás érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többszintű monitoring rendszer implementálása, amely kombinálja a DNS szerverek belső metrikáit, külső elérhetőségi teszteket és prediktív analitikát, automatizált riasztásokkal",
      "Egyszerű ICMP ping alapú monitoring beállítása a szerverek elérhetőségének ellenőrzésére, napi rendszerességű manuális log elemzéssel",
      "Kizárólag a szerverek erőforrás-használatának (CPU, memória, disk) monitorozása, heti teljesítményjelentések készítésével"
    ],
    "helyes": "Többszintű monitoring rendszer implementálása, amely kombinálja a DNS szerverek belső metrikáit, külső elérhetőségi teszteket és prediktív analitikát, automatizált riasztásokkal"
  },
  {
    "szoveg": "Milyen DNSSEC implementációs stratégiát kell alkalmazni egy nagy, elosztott DNS infrastruktúrában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált kulcskezelési rendszer bevezetése, rendszeres kulcsrotációval, HSM használatával és több aláíró szerver alkalmazásával, szigorú monitoring mellett",
      "Manuális kulcskezelés bevezetése egyetlen aláíró szerverrel, éves kulcsrotációval és szoftveres kulcstárolással",
      "DNSSEC implementálása csak a kritikus zónákra, alkalmi kulcsrotációval és megosztott kulcstárolással a DNS szervereken"
    ],
    "helyes": "Automatizált kulcskezelési rendszer bevezetése, rendszeres kulcsrotációval, HSM használatával és több aláíró szerver alkalmazásával, szigorú monitoring mellett"
  },
  {
    "szoveg": "Hogyan kell megtervezni egy nagy DNS infrastruktúra cache-elési stratégiáját a különböző régiók és felhasználói minták figyelembevételével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Adaptív TTL értékek és régiónként optimalizált cache méret használata, figyelembe véve a helyi forgalmi mintákat és a zóna változási gyakoriságát",
      "Egységes, hosszú TTL értékek alkalmazása minden rekordra és fix cache méret beállítása minden szerveren a konzisztencia érdekében",
      "Minimális TTL értékek használata a konzisztencia maximalizálására és a cache méret korlátozása a szerverek erőforrásainak kímélése érdekében"
    ],
    "helyes": "Adaptív TTL értékek és régiónként optimalizált cache méret használata, figyelembe véve a helyi forgalmi mintákat és a zóna változási gyakoriságát"
  },
  {
    "szoveg": "Milyen módon kell összekapcsolni a DNS infrastruktúra különböző komponenseit a maximális hatékonyság és biztonság érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű hálózati architektúra kialakítása dedikált management hálózattal, szegmentált DNS forgalommal és redundáns kapcsolatokkal minden kritikus komponens között",
      "Egyszerű flat hálózati struktúra használata minden DNS komponens számára, központi management szerverrel és egyetlen kapcsolati úttal",
      "A DNS szerverek izolált hálózatokban való elhelyezése, minimális kapcsolattal más komponensekkel a biztonság maximalizálása érdekében"
    ],
    "helyes": "Többrétegű hálózati architektúra kialakítása dedikált management hálózattal, szegmentált DNS forgalommal és redundáns kapcsolatokkal minden kritikus komponens között"
  },
  {
    "szoveg": "Hogyan lehet hatékonyan ellenőrizni egy nagy DNS infrastruktúra teljesítményét és megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált teljesítménytesztek és biztonsági ellenőrzések kombinációja, valós felhasználói forgalom szimulációval és folyamatos megfelelőségi monitoringgal",
      "Időszakos manuális tesztek végrehajtása és a szervernaplók elemzése havi rendszerességgel a teljesítmény értékeléséhez",
      "Kizárólag a végfelhasználói panaszok alapján történő reaktív ellenőrzések és alkalmi terheléstesztek végrehajtása"
    ],
    "helyes": "Automatizált teljesítménytesztek és biztonsági ellenőrzések kombinációja, valós felhasználói forgalom szimulációval és folyamatos megfelelőségi monitoringgal"
  },
  {
    "szoveg": "Milyen módszerekkel lehet ellenőrizni egy DNS infrastruktúra biztonsági megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rendszeres penetrációs tesztek, automatizált biztonsági auditok és valós idejű biztonsági események monitorozása, DNSSEC validációs tesztekkel kiegészítve",
      "Éves biztonsági audit végrehajtása és a szerverek patch szintjének ellenőrzése negyedévente",
      "Ad-hoc biztonsági ellenőrzések végzése és a tűzfal szabályok időszakos felülvizsgálata"
    ],
    "helyes": "Rendszeres penetrációs tesztek, automatizált biztonsági auditok és valós idejű biztonsági események monitorozása, DNSSEC validációs tesztekkel kiegészítve"
  },
  {
    "szoveg": "Milyen kritériumok alapján kell értékelni egy DNS infrastruktúra költséghatékonyságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatási szint mutatók (válaszidő, rendelkezésre állás) és az üzemeltetési költségek aránya, figyelembe véve a skálázhatóságot és a jövőbeli növekedési igényeket",
      "Kizárólag a hardver és szoftver licenc költségek összehasonlítása más megoldásokkal, figyelmen kívül hagyva az üzemeltetési szempontokat",
      "Az infrastruktúra kezdeti kiépítési költségeinek minimalizálása, függetlenül a hosszú távú üzemeltetési és skálázhatósági szempontoktól"
    ],
    "helyes": "A szolgáltatási szint mutatók (válaszidő, rendelkezésre állás) és az üzemeltetési költségek aránya, figyelembe véve a skálázhatóságot és a jövőbeli növekedési igényeket"
  },
  {
    "szoveg": "Hogyan kell értékelni egy DNS infrastruktúra biztonsági kockázatait és a védelmi intézkedések megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kockázatelemzési mátrix alkalmazása, amely figyelembe veszi a fenyegetések valószínűségét, potenciális hatását és a védelmi intézkedések hatékonyságát, rendszeres felülvizsgálattal",
      "A biztonsági incidensek számának egyszerű összehasonlítása az iparági átlaggal, figyelmen kívül hagyva a specifikus kockázati tényezőket",
      "A bevezetett biztonsági megoldások költségeinek értékelése, tekintet nélkül azok tényleges hatékonyságára"
    ],
    "helyes": "Kockázatelemzési mátrix alkalmazása, amely figyelembe veszi a fenyegetések valószínűségét, potenciális hatását és a védelmi intézkedések hatékonyságát, rendszeres felülvizsgálattal"
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Split-horizon DNS működési elvét egy vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer ugyanarra a DNS kérésre különböző válaszokat ad attól függően, hogy a kérés a belső hálózatból vagy külső forrásból érkezik, így optimalizálva a forgalmat és növelve a biztonságot.",
      "A rendszer minden DNS kérésre ugyanazt a választ adja, de a belső hálózatból érkező kéréseket magasabb prioritással kezeli, így gyorsítva a belső kommunikációt.",
      "A rendszer a DNS kéréseket véletlenszerűen osztja el a belső és külső szerverek között, ezáltal biztosítva a terheléselosztást a hálózatban."
    ],
    "helyes": "A rendszer ugyanarra a DNS kérésre különböző válaszokat ad attól függően, hogy a kérés a belső hálózatból vagy külső forrásból érkezik, így optimalizálva a forgalmat és növelve a biztonságot."
  },
  {
    "szoveg": "Mit jelent a DNS Views koncepció a Split-horizon DNS megvalósításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyetlen DNS szerveren belül különböző válaszhalmazokat definiálunk a kérések forrása alapján, így optimalizálva az erőforrás-felhasználást.",
      "Több DNS szervert használunk párhuzamosan, amelyek mindegyike ugyanazokat a válaszokat szolgáltatja a redundancia érdekében.",
      "A DNS szerverek közötti automatikus szinkronizációt biztosító mechanizmust, amely a változásokat azonnal propagálja minden szerverre."
    ],
    "helyes": "Egyetlen DNS szerveren belül különböző válaszhalmazokat definiálunk a kérések forrása alapján, így optimalizálva az erőforrás-felhasználást."
  },
  {
    "szoveg": "Egy vállalat új felhő-alapú szolgáltatást vezet be. Hogyan alkalmazná a Split-horizon DNS-t az optimális működés érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A belső felhasználóknak közvetlen elérést konfigurálnék a belső hálózaton keresztül, míg a külső felhasználókat a terheléselosztón keresztül irányítanám a szolgáltatáshoz.",
      "Minden felhasználót a terheléselosztón keresztül irányítanék a szolgáltatáshoz, függetlenül attól, hogy belső vagy külső hálózatról érkeznek.",
      "A belső felhasználókat is a külső útvonalon keresztül irányítanám, hogy egységes legyen a hozzáférés és a monitorozás."
    ],
    "helyes": "A belső felhasználóknak közvetlen elérést konfigurálnék a belső hálózaton keresztül, míg a külső felhasználókat a terheléselosztón keresztül irányítanám a szolgáltatáshoz."
  },
  {
    "szoveg": "Hogyan implementálná a Split-horizon DNS-t egy olyan vállalatnál, ahol kritikus a belső erőforrások védelme?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "DNS Views konfigurálásával, szigorú ACL-ekkel, ahol a belső nézet csak a privát IP-címeket tartalmazza, és a külső nézet kizárólag a publikusan elérhető szolgáltatások címeit mutatja.",
      "Egyszerű DNS szerver beállításával, ahol minden erőforrás címe publikusan elérhető, de tűzfal szabályokkal korlátozva a hozzáférést.",
      "Minden DNS kérés átirányításával egy külső DNS szolgáltatóhoz, aki kezeli a különböző válaszokat a források alapján."
    ],
    "helyes": "DNS Views konfigurálásával, szigorú ACL-ekkel, ahol a belső nézet csak a privát IP-címeket tartalmazza, és a külső nézet kizárólag a publikusan elérhető szolgáltatások címeit mutatja."
  },
  {
    "szoveg": "Milyen példa szemlélteti legjobban a Split-horizon DNS előnyeit egy nemzetközi vállalatnál?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy belső dokumentumkezelő rendszer, amely a helyi irodákban közvetlen belső címen érhető el, míg távoli munkavégzés esetén egy biztonságos külső átjárón keresztül szolgálja ki a kéréseket.",
      "Egy nyilvános weboldal, amely minden felhasználó számára ugyanazon a címen érhető el, függetlenül a hozzáférés helyétől.",
      "Egy levelezőrendszer, amely minden esetben külső szolgáltatón keresztül érhető el a egységes kezelhetőség érdekében."
    ],
    "helyes": "Egy belső dokumentumkezelő rendszer, amely a helyi irodákban közvetlen belső címen érhető el, míg távoli munkavégzés esetén egy biztonságos külső átjárón keresztül szolgálja ki a kéréseket."
  },
  {
    "szoveg": "Milyen példa mutatja be legjobban a DNS Views használatának hatékonyságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy vállalati alkalmazás, amely a központi irodában 10.0.0.10 címen, a távoli irodákban 192.168.1.10 címen, míg az interneten keresztül app.company.com néven érhető el.",
      "Egy webes alkalmazás, amely minden felhasználó számára egységesen a www.company.com címen érhető el.",
      "Egy felhő szolgáltatás, amely kizárólag VPN kapcsolaton keresztül érhető el minden felhasználó számára."
    ],
    "helyes": "Egy vállalati alkalmazás, amely a központi irodában 10.0.0.10 címen, a távoli irodákban 192.168.1.10 címen, míg az interneten keresztül app.company.com néven érhető el."
  },
  {
    "szoveg": "Hogyan ítélné meg a Split-horizon DNS alkalmazását egy kis méretű vállalkozás esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A komplexitás és karbantartási igény miatt túlzó megoldás lehet, kivéve ha specifikus biztonsági követelmények vagy teljesítményigények indokolják.",
      "Minden esetben ajánlott megoldás, mivel jelentősen növeli a hálózat biztonságát és teljesítményét.",
      "Kizárólag akkor alkalmazandó, ha a vállalkozás több telephellyel rendelkezik, egyéb esetekben szükségtelen."
    ],
    "helyes": "A komplexitás és karbantartási igény miatt túlzó megoldás lehet, kivéve ha specifikus biztonsági követelmények vagy teljesítményigények indokolják."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélné meg egy Split-horizon DNS implementáció sikerességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A belső és külső felhasználók zavartalan hozzáférése, optimális válaszidők, minimális biztonsági incidensek és egyszerű karbantarthatóság alapján.",
      "Kizárólag a rendszer válaszideje és a DNS szerverek terhelése alapján, figyelmen kívül hagyva a biztonsági szempontokat.",
      "Csak a implementáció költségei és a karbantartásra fordított idő alapján, függetlenül a felhasználói élménytől."
    ],
    "helyes": "A belső és külső felhasználók zavartalan hozzáférése, optimális válaszidők, minimális biztonsági incidensek és egyszerű karbantarthatóság alapján."
  },
  {
    "szoveg": "Egy nagyvállalat DNS infrastruktúrájának tervezésekor milyen következtetést vonhatunk le a TTL (Time To Live) értékek beállításával kapcsolatban, ha gyakran változnak a DNS bejegyzések?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alacsonyabb TTL értékeket érdemes beállítani, hogy a változások gyorsabban érvényre jussanak, bár ez növeli a DNS szerverek terhelését.",
      "Magasabb TTL értékeket kell beállítani, hogy csökkentsük a DNS szerverek terhelését, és a változások később kerüljenek érvényesítésre a rendszerben.",
      "A TTL értékek beállítása nincs hatással a DNS bejegyzések változásának sebességére, csak a cache méretét befolyásolja a kliens oldalon."
    ],
    "helyes": "Alacsonyabb TTL értékeket érdemes beállítani, hogy a változások gyorsabban érvényre jussanak, bár ez növeli a DNS szerverek terhelését."
  },
  {
    "szoveg": "Hogyan értelmezhető a split-DNS architektúra szerepe egy vállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A belső és külső felhasználók különböző DNS válaszokat kapnak ugyanarra a domain névre, ami lehetővé teszi a biztonságos és optimalizált erőforrás-elérést mindkét csoport számára.",
      "A DNS lekérdezések véletlenszerűen oszlanak meg a különböző DNS szerverek között, ami növeli a rendszer teljesítményét és biztonságát.",
      "A DNS szerverek közötti kommunikáció titkosítva történik, ami megakadályozza a man-in-the-middle támadásokat és biztosítja az adatok integritását."
    ],
    "helyes": "A belső és külső felhasználók különböző DNS válaszokat kapnak ugyanarra a domain névre, ami lehetővé teszi a biztonságos és optimalizált erőforrás-elérést mindkét csoport számára."
  },
  {
    "szoveg": "Egy nemzetközi vállalat DNS infrastruktúrájának tervezésekor milyen modellt állítana fel a szerverek földrajzi elhelyezésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szervereket a főbb földrajzi régiókban elosztva, anycast címzéssel és load balancing megoldással kiegészítve, ahol minden régió rendelkezik elsődleges és másodlagos szerverekkel.",
      "Egyetlen központi helyszínen telepített nagy teljesítményű szerverklaszter, amely magas rendelkezésre állással szolgálja ki az összes régiót.",
      "Minden telephelyen azonos konfigurációjú szerverek telepítése, amelyek egymástól függetlenül működnek és nem szinkronizálnak egymással."
    ],
    "helyes": "A szervereket a főbb földrajzi régiókban elosztva, anycast címzéssel és load balancing megoldással kiegészítve, ahol minden régió rendelkezik elsődleges és másodlagos szerverekkel."
  },
  {
    "szoveg": "Milyen modellt állítana fel egy vállalati DNS infrastruktúra biztonsági rendszerének kialakításakor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű biztonsági modell, amely magában foglalja a DNSSEC-et, ACL-eket, DDoS védelmet és titkosított zóna-transzfereket, rendszeres biztonsági audittal kiegészítve.",
      "Egyszerű tűzfal alapú védelem, amely csak a megbízható IP címekről engedi a DNS lekérdezéseket, kiegészítve alapszintű naplózással.",
      "Kizárólag DNSSEC alapú védelem, amely a DNS válaszok hitelességét biztosítja, más biztonsági megoldások nélkül."
    ],
    "helyes": "Többrétegű biztonsági modell, amely magában foglalja a DNSSEC-et, ACL-eket, DDoS védelmet és titkosított zóna-transzfereket, rendszeres biztonsági audittal kiegészítve."
  },
  {
    "szoveg": "Hogyan használná fel a DNS infrastruktúrát egy új szolgáltatás bevezetésekor a fokozatos átállás (rolling upgrade) megvalósításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS round-robin és súlyozott válaszok kombinációjával, fokozatosan növelve az új szolgáltatás súlyát, közben monitorozva a teljesítményt és a hibákat.",
      "Az összes forgalmat azonnal átirányítanám az új szolgáltatásra, a DNS TTL értékeket minimálisra állítva a gyors propagáció érdekében.",
      "Párhuzamosan futtatnám a régi és új szolgáltatást különböző domain neveken, a felhasználókra bízva a választást."
    ],
    "helyes": "A DNS round-robin és súlyozott válaszok kombinációjával, fokozatosan növelve az új szolgáltatás súlyát, közben monitorozva a teljesítményt és a hibákat."
  },
  {
    "szoveg": "Hogyan használná fel a DNS infrastruktúrát egy többrégiós alkalmazás földrajzi alapú forgalomirányításának megvalósításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "GeoDNS és anycast technológiák kombinációjával, ahol a DNS válaszok a kliens földrajzi helyzetét figyelembe véve irányítják a forgalmat a legközelebbi vagy legoptimálisabb adatközpontba.",
      "Statikus DNS bejegyzésekkel, ahol minden régió saját aldomaint kap, és a felhasználóknak manuálisan kell választaniuk a megfelelő régiót.",
      "Véletlenszerű DNS válaszokkal, amelyek egyenletesen osztják el a forgalmat az összes régió között, függetlenül a kliens földrajzi helyzetétől."
    ],
    "helyes": "GeoDNS és anycast technológiák kombinációjával, ahol a DNS válaszok a kliens földrajzi helyzetét figyelembe véve irányítják a forgalmat a legközelebbi vagy legoptimálisabb adatközpontba."
  },
  {
    "szoveg": "Hogyan ítélné meg egy vállalati DNS infrastruktúra hatékonyságát a katasztrófa-helyreállítási szempontok alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A helyreállítási idő (RTO) és adatvesztési célérték (RPO) teljesülése mellett értékelném a földrajzi redundancia mértékét, a failover mechanizmusok automatizáltságát és a dokumentált helyreállítási folyamatok tesztelésének eredményeit.",
      "Kizárólag a biztonsági mentések meglétét és a szerverek számát vizsgálnám, mivel ezek határozzák meg a rendszer helyreállíthatóságát.",
      "A DNS szerverek teljesítményét és válaszidejét mérném normál működés során, feltételezve, hogy ezek korrelálnak a helyreállítási képességekkel."
    ],
    "helyes": "A helyreállítási idő (RTO) és adatvesztési célérték (RPO) teljesülése mellett értékelném a földrajzi redundancia mértékét, a failover mechanizmusok automatizáltságát és a dokumentált helyreállítási folyamatok tesztelésének eredményeit."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélné meg egy DNS infrastruktúra skálázhatóságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A terheléselosztás hatékonysága, az automatizált menedzsment megoldások megléte, a monitoring rendszer átfogó jellege és a bővítési folyamatok dokumentáltsága alapján, figyelembe véve a növekedési trendeket.",
      "Kizárólag a jelenlegi szerverkapacitás és a hálózati sávszélesség alapján, mivel ezek határozzák meg a rendszer teljesítményét.",
      "A DNS szerverek számának növelési lehetősége alapján, figyelmen kívül hagyva az automatizálási és menedzsment szempontokat."
    ],
    "helyes": "A terheléselosztás hatékonysága, az automatizált menedzsment megoldások megléte, a monitoring rendszer átfogó jellege és a bővítési folyamatok dokumentáltsága alapján, figyelembe véve a növekedési trendeket."
  },
  {
    "szoveg": "Egy DNS resolver alkalmazás fejlesztése során milyen megközelítést alkalmazna a DNSSEC validációs hibák kezelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többszintű hibakezelési stratégiát implementálnék, amely magában foglalja a SERVFAIL válaszok újrapróbálását alternatív resolverekkel, időtúllépések esetén exponenciális visszalépést, és részletes hibanaplózást a későbbi diagnosztikához.",
      "Egyszerű hibakezelést alkalmaznék, amely minden DNSSEC validációs hiba esetén azonnal megszakítja a lekérdezést és hibát jelez a felhasználónak, ezzel biztosítva a maximális biztonságot.",
      "A validációs hibákat figyelmen kívül hagynám, és minden esetben elfogadnám a kapott DNS válaszokat, hogy biztosítsam az alkalmazás folyamatos működését és a felhasználói élményt."
    ],
    "helyes": "Többszintű hibakezelési stratégiát implementálnék, amely magában foglalja a SERVFAIL válaszok újrapróbálását alternatív resolverekkel, időtúllépések esetén exponenciális visszalépést, és részletes hibanaplózást a későbbi diagnosztikához."
  },
  {
    "szoveg": "Hogyan implementálná a DNSSEC trust anchor frissítési mechanizmust egy hosszú távon futó DNS resolver alkalmazásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az RFC 5011 protokoll implementálásával, amely automatikusan kezeli a kulcsok gördülését, rendszeres időközönként ellenőrzi az új trust anchorokat, és biztonságosan frissíti azokat a megfelelő validációs folyamat után.",
      "A trust anchorokat statikusan tárolnám az alkalmazásban, és csak manuális frissítést engednék meg a rendszergazdának, így biztosítva a maximális kontrollt a frissítések felett.",
      "Naponta automatikusan letölteném az új trust anchorokat egy központi szerverről, és azonnal alkalmaznám őket további ellenőrzés nélkül a gyors frissítés érdekében."
    ],
    "helyes": "Az RFC 5011 protokoll implementálásával, amely automatikusan kezeli a kulcsok gördülését, rendszeres időközönként ellenőrzi az új trust anchorokat, és biztonságosan frissíti azokat a megfelelő validációs folyamat után."
  },
  {
    "szoveg": "Milyen lépéseket kell végrehajtani egy DNS resolver inicializálásakor a DNSSEC támogatás megfelelő beállításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A resolver inicializálásakor be kell állítani a DNSSEC validációt, konfigurálni kell a root trust anchort, inicializálni kell a kriptográfiai könyvtárakat, és be kell állítani a validációs paramétereket, mint például a signature életidő ellenőrzést.",
      "Elegendő a DNSSEC flag beállítása a resolver konfigurációjában, mivel a modern DNS könyvtárak automatikusan kezelik az összes többi beállítást és validációs folyamatot.",
      "A resolvert debug módban kell elindítani, majd manuálisan kell betölteni minden zóna kulcsait, és egyenként kell tesztelni a validációt minden rekordtípusra."
    ],
    "helyes": "A resolver inicializálásakor be kell állítani a DNSSEC validációt, konfigurálni kell a root trust anchort, inicializálni kell a kriptográfiai könyvtárakat, és be kell állítani a validációs paramétereket, mint például a signature életidő ellenőrzést."
  },
  {
    "szoveg": "Hogyan implementálná a DNSSEC validációs láncot egy DNS resolver alkalmazásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Rekurzív validációs algoritmust implementálnék, amely a root zónától kezdve ellenőrzi az aláírásokat és DNSKEY rekordokat, követi a DS rekordokat a delegációs pontokon, és csak akkor fogadja el a választ, ha a teljes lánc érvényes.",
      "Csak a végponti zóna RRSIG rekordjait ellenőrizném, mivel ez elegendő a válasz hitelességének megállapításához, és jelentősen egyszerűsíti az implementációt.",
      "A validációs láncot párhuzamosan ellenőrizném minden lehetséges útvonalon, és a leggyorsabban visszaérkező érvényes eredményt fogadnám el."
    ],
    "helyes": "Rekurzív validációs algoritmust implementálnék, amely a root zónától kezdve ellenőrzi az aláírásokat és DNSKEY rekordokat, követi a DS rekordokat a delegációs pontokon, és csak akkor fogadja el a választ, ha a teljes lánc érvényes."
  },
  {
    "szoveg": "Hogyan integrálná a DNSSEC validációt egy nagy teljesítményű, elosztott DNS szolgáltatásba?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többszintű gyorsítótárazást implementálnék validált rekordokhoz, terheléselosztást alkalmaznék több resolver között, és aszinkron validációs folyamatokat használnék a párhuzamos kérések kezelésére, közös kulcstárral.",
      "Minden DNS kérést különálló folyamatban validálnék, független kulcstárakkal és gyorsítótárakkal, hogy maximalizáljam a biztonságot az egyes kérések között.",
      "A validációt csak a kritikus zónákra korlátozném, és a többi kérést validáció nélkül továbbítanám a teljesítmény maximalizálása érdekében."
    ],
    "helyes": "Többszintű gyorsítótárazást implementálnék validált rekordokhoz, terheléselosztást alkalmaznék több resolver között, és aszinkron validációs folyamatokat használnék a párhuzamos kérések kezelésére, közös kulcstárral."
  },
  {
    "szoveg": "Milyen módon integrálná a DNSSEC validációs hibák monitorozását egy nagy méretű DNS infrastruktúrába?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű monitorozási rendszert implementálnék, amely figyeli a validációs hibákat, teljesítménymetrikákat, kulcslejáratokat, és automatikus riasztásokat küld kritikus események esetén, mindezt központi log aggregációval és elemzéssel.",
      "Egyszerű hibanaplózást alkalmaznék, amely csak a sikertelen validációkat rögzíti egy lokális log fájlba, amit a rendszergazdák rendszeresen ellenőrizhetnek.",
      "Minden validációs eseményt részletesen naplóznék egy központi adatbázisba, beleértve a sikeres validációkat is, a teljes körű auditálhatóság érdekében."
    ],
    "helyes": "Többrétegű monitorozási rendszert implementálnék, amely figyeli a validációs hibákat, teljesítménymetrikákat, kulcslejáratokat, és automatikus riasztásokat küld kritikus események esetén, mindezt központi log aggregációval és elemzéssel."
  },
  {
    "szoveg": "Hogyan ellenőrizné egy DNSSEC-képes resolver implementációjának helyességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Átfogó tesztkészletet készítenék, amely tartalmaz érvényes és érvénytelen aláírásokat, lejárt kulcsokat, különböző rekordtípusokat, stresszteszteket, és validációs útvonal-ellenőrzéseket, automatizált regressziós tesztekkel.",
      "Néhány alapvető tesztesetet futtatnék érvényes DNSSEC válaszokkal, és manuálisan ellenőrizném a resolver működését normál körülmények között.",
      "Kizárólag a produkciós környezetben tesztelném a resolvert valós forgalommal, mivel csak ez mutatja meg a valódi működést."
    ],
    "helyes": "Átfogó tesztkészletet készítenék, amely tartalmaz érvényes és érvénytelen aláírásokat, lejárt kulcsokat, különböző rekordtípusokat, stresszteszteket, és validációs útvonal-ellenőrzéseket, automatizált regressziós tesztekkel."
  },
  {
    "szoveg": "Milyen módszerrel ellenőrizné a DNSSEC validáció teljesítményét éles környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Folyamatos teljesítménymérést végeznék, figyelve a validációs időket, cache hit rátát, erőforrás-használatot, és összehasonlítanám ezeket előre definiált teljesítményküszöbökkel, anomália-detektálással kiegészítve.",
      "Időszakos mintavételezéssel ellenőrizném a válaszidőket, és csak akkor avatkoznék be, ha jelentős lassulást tapasztalok a rendszerben.",
      "Kizárólag a felhasználói panaszok alapján vizsgálnám a teljesítményt, mivel ez mutatja meg a valódi problémákat."
    ],
    "helyes": "Folyamatos teljesítménymérést végeznék, figyelve a validációs időket, cache hit rátát, erőforrás-használatot, és összehasonlítanám ezeket előre definiált teljesítményküszöbökkel, anomália-detektálással kiegészítve."
  },
  {
    "szoveg": "Hogyan értékelné egy meglévő DNSSEC implementáció biztonsági megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Átfogó biztonsági auditot végeznék, amely magában foglalja a kriptográfiai beállítások ellenőrzését, kulcskezelési gyakorlatok értékelését, ismert támadások szimulációját, és a validációs politikák felülvizsgálatát.",
      "Csak a legújabb CVE-ket ellenőrizném az implementációban használt szoftverkomponensekre vonatkozóan.",
      "Kizárólag a sikeres validációk arányát vizsgálnám, mivel ez a legfontosabb biztonsági metrika."
    ],
    "helyes": "Átfogó biztonsági auditot végeznék, amely magában foglalja a kriptográfiai beállítások ellenőrzését, kulcskezelési gyakorlatok értékelését, ismert támadások szimulációját, és a validációs politikák felülvizsgálatát."
  },
  {
    "szoveg": "Milyen kritériumok alapján döntene egy DNSSEC validációs hiba esetén a további műveletek folytatásáról?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hiba típusa, kritikussága, az érintett zóna fontossága, és a validációs lánc állapota alapján, figyelembe véve a biztonsági politikát és az alkalmazás követelményeit, dokumentált döntési fa szerint.",
      "Minden validációs hiba esetén azonnal leállítanám a műveleteket, mivel bármilyen hiba potenciális biztonsági kockázatot jelent.",
      "A felhasználói élmény alapján döntenék, és csak akkor állítanám le a műveleteket, ha a hiba közvetlenül befolyásolja a szolgáltatás elérhetőségét."
    ],
    "helyes": "A hiba típusa, kritikussága, az érintett zóna fontossága, és a validációs lánc állapota alapján, figyelembe véve a biztonsági politikát és az alkalmazás követelményeit, dokumentált döntési fa szerint."
  },
  {
    "szoveg": "Egy vállalat több adatközponttal rendelkezik világszerte. Hogyan használható a DNS rendszer a szolgáltatások optimális elosztására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS segítségével földrajzi alapú terheléselosztás valósítható meg, ahol a felhasználók kérései a hozzájuk legközelebbi adatközpontba irányíthatók, csökkentve a válaszidőt és optimalizálva az erőforrások használatát.",
      "A DNS kizárólag a domain nevek és IP címek közötti statikus megfeleltetést végzi, így nem alkalmas dinamikus terheléselosztásra vagy földrajzi alapú szolgáltatásirányításra az adatközpontok között.",
      "A DNS rendszer csak az elsődleges adatközpont IP címét képes visszaadni, a többi adatközpontot csak meghibásodás esetén, manuális konfigurációval lehet elérhetővé tenni."
    ],
    "helyes": "A DNS segítségével földrajzi alapú terheléselosztás valósítható meg, ahol a felhasználók kérései a hozzájuk legközelebbi adatközpontba irányíthatók, csökkentve a válaszidőt és optimalizálva az erőforrások használatát."
  },
  {
    "szoveg": "Milyen szerepet játszik a DNS gyorsítótárazás (caching) a weboldalak betöltési sebességében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS gyorsítótárazás csökkenti a névfeloldáshoz szükséges időt azáltal, hogy a gyakran használt domain nevek IP címeit ideiglenesen tárolja, így nem kell minden alkalommal a teljes DNS hierarchiát lekérdezni.",
      "A DNS gyorsítótárazás csak a weboldal tartalmát tárolja lokálisan, a névfeloldást minden esetben újra el kell végezni a DNS szervereken keresztül.",
      "A DNS gyorsítótárazás kizárólag a böngésző előzményeket tárolja, nincs hatással a domain nevek feloldásának sebességére vagy a weboldalak betöltési idejére."
    ],
    "helyes": "A DNS gyorsítótárazás csökkenti a névfeloldáshoz szükséges időt azáltal, hogy a gyakran használt domain nevek IP címeit ideiglenesen tárolja, így nem kell minden alkalommal a teljes DNS hierarchiát lekérdezni."
  },
  {
    "szoveg": "Hogyan működik együtt a DNS rendszer egy nagy látogatottságú weboldal terheléselosztásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS szerver round-robin vagy súlyozott algoritmusok alapján különböző szerverek IP címeit adja vissza a kérésekre, így elosztva a terhelést több kiszolgáló között, miközben a felhasználók ugyanazt a domain nevet használják.",
      "A DNS szerver mindig ugyanazt az IP címet adja vissza, és a terheléselosztást kizárólag a webszerver végzi a beérkező kérések között, független a DNS rendszertől.",
      "A DNS szerver véletlenszerűen választ a rendelkezésre álló IP címek közül, figyelmen kívül hagyva a szerverek aktuális terhelését és válaszidejét."
    ],
    "helyes": "A DNS szerver round-robin vagy súlyozott algoritmusok alapján különböző szerverek IP címeit adja vissza a kérésekre, így elosztva a terhelést több kiszolgáló között, miközben a felhasználók ugyanazt a domain nevet használják."
  },
  {
    "szoveg": "Milyen módon biztosítja a DNS rendszer egy weboldal folyamatos elérhetőségét szerverhibák esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több A rekord beállításával és egészség-ellenőrzéssel a DNS rendszer automatikusan átirányíthatja a forgalmat a működő szerverekre, ha az elsődleges szerver meghibásodik, fenntartva a szolgáltatás folytonosságát.",
      "A DNS rendszer csak egyetlen szervert tud kezelni egy domain névhez, a redundancia kizárólag a webszerver szintjén valósítható meg.",
      "A DNS rendszer csak manuális beavatkozással képes a forgalom átirányítására, automatikus hibakezelésre nem alkalmas."
    ],
    "helyes": "Több A rekord beállításával és egészség-ellenőrzéssel a DNS rendszer automatikusan átirányíthatja a forgalmat a működő szerverekre, ha az elsődleges szerver meghibásodik, fenntartva a szolgáltatás folytonosságát."
  },
  {
    "szoveg": "Mi történne az internetes kommunikációval, ha a gyökér DNS szerverek 30 percre elérhetetlenné válnának?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A legtöbb szolgáltatás továbbra is működne a DNS gyorsítótárak miatt, de az új, még nem gyorsítótárazott domain nevek feloldása sikertelen lenne a 30 perces időszak alatt.",
      "Az összes internetes kommunikáció azonnal megszűnne, mivel minden DNS lekérdezéshez szükség van a gyökér DNS szerverek elérésére.",
      "Csak a nemzetközi kommunikáció szűnne meg, a helyi hálózatokon belüli forgalom zavartalanul folytatódna a gyökér DNS szerverek nélkül is."
    ],
    "helyes": "A legtöbb szolgáltatás továbbra is működne a DNS gyorsítótárak miatt, de az új, még nem gyorsítótárazott domain nevek feloldása sikertelen lenne a 30 perces időszak alatt."
  },
  {
    "szoveg": "Hogyan befolyásolná egy új DNS rekordtípus bevezetése a meglévő internetes infrastruktúrát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A régebbi DNS szerverek figyelmen kívül hagynák az új rekordtípust, de továbbra is megfelelően kezelnék a hagyományos rekordokat, így fokozatos bevezetés válna lehetővé.",
      "Minden DNS szervert egyszerre kellene frissíteni az új rekordtípus támogatásához, különben a teljes rendszer működésképtelenné válna.",
      "Az új rekordtípus bevezetése csak akkor lehetséges, ha minden internetes eszköz egyszerre kerül frissítésre."
    ],
    "helyes": "A régebbi DNS szerverek figyelmen kívül hagynák az új rekordtípust, de továbbra is megfelelően kezelnék a hagyományos rekordokat, így fokozatos bevezetés válna lehetővé."
  },
  {
    "szoveg": "Mennyire tekinthető biztonságosnak egy domain név tulajdonjogának igazolása kizárólag DNS rekordok alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nem biztonságos, mert a DNS rekordok manipulálhatók, és a DNS cache poisoning támadások lehetővé teszik hamis bejegyzések létrehozását, ezért további hitelesítési mechanizmusok szükségesek.",
      "Teljesen biztonságos, mert a DNS rekordokat csak a domain tulajdonosa módosíthatja, és a módosítások azonnal globálisan érvénybe lépnek.",
      "Közepesen biztonságos, mert bár a DNS rekordok módosíthatók, de a változtatások naplózása lehetővé teszi a visszaélések utólagos felderítését."
    ],
    "helyes": "Nem biztonságos, mert a DNS rekordok manipulálhatók, és a DNS cache poisoning támadások lehetővé teszik hamis bejegyzések létrehozását, ezért további hitelesítési mechanizmusok szükségesek."
  },
  {
    "szoveg": "Hogyan értékelhető a DNSSEC protokoll bevezetésének hatékonysága a DNS biztonság növelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNSSEC jelentősen növeli a DNS biztonságát a válaszok integritásának és eredetének igazolásával, de a lassabb működés és a komplexebb konfiguráció miatt nem minden domain alkalmazza.",
      "A DNSSEC tökéletes megoldást nyújt minden DNS biztonsági problémára, és használata minden esetben indokolt a teljes védelem érdekében.",
      "A DNSSEC bevezetése felesleges, mert a modern titkosítási protokollok önmagukban is elegendő védelmet nyújtanak a DNS támadások ellen."
    ],
    "helyes": "A DNSSEC jelentősen növeli a DNS biztonságát a válaszok integritásának és eredetének igazolásával, de a lassabb működés és a komplexebb konfiguráció miatt nem minden domain alkalmazza."
  },
  {
    "szoveg": "Hogyan különbözik az IMAP és a POP3 protokoll az email üzenetek kezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IMAP az üzeneteket a szerveren tárolja és szinkronizálja több eszköz között, míg a POP3 letölti és alapértelmezetten törli azokat a szerverről.",
      "Az IMAP csak az üzenetek fejlécét tölti le, míg a POP3 a teljes üzenetet a mellékletekkel együtt szinkronizálja.",
      "Az IMAP csak egy eszközről teszi lehetővé a hozzáférést, míg a POP3 több eszközről is elérhetővé teszi az üzeneteket."
    ],
    "helyes": "Az IMAP az üzeneteket a szerveren tárolja és szinkronizálja több eszköz között, míg a POP3 letölti és alapértelmezetten törli azokat a szerverről."
  },
  {
    "szoveg": "Mi a fő különbség az SMTP és a POP3/IMAP protokollok kommunikációs irányában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SMTP push protokoll (küldő kezdeményez), míg a POP3/IMAP pull protokollok (fogadó kezdeményez).",
      "Az SMTP kétirányú kommunikációt használ, míg a POP3/IMAP csak egyirányút.",
      "Az SMTP csak szerverek között kommunikál, míg a POP3/IMAP csak kliensek között."
    ],
    "helyes": "Az SMTP push protokoll (küldő kezdeményez), míg a POP3/IMAP pull protokollok (fogadó kezdeményez)."
  },
  {
    "szoveg": "Mit jelent az SMTP protokoll esetében a 'relay' funkció?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az email üzenet továbbítását több SMTP szerveren keresztül, amíg el nem éri a célszervert.",
      "Az email üzenet titkosítását a biztonságos továbbítás érdekében.",
      "Az email üzenet automatikus másolását biztonsági mentés céljából."
    ],
    "helyes": "Az email üzenet továbbítását több SMTP szerveren keresztül, amíg el nem éri a célszervert."
  },
  {
    "szoveg": "Hogyan értelmezzük az IMAP protokoll 'szinkronizációs' képességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az email kliens és szerver közötti kétirányú kommunikáció, amely biztosítja, hogy minden eszközön ugyanaz az állapot látszódjon.",
      "Az üzenetek automatikus törlése mindkét oldalon, ha azok már nem relevánsak.",
      "Az üzenetek tömörítése a hatékonyabb adatátvitel érdekében."
    ],
    "helyes": "Az email kliens és szerver közötti kétirányú kommunikáció, amely biztosítja, hogy minden eszközön ugyanaz az állapot látszódjon."
  },
  {
    "szoveg": "Hogyan épül fel egy tipikus email küldési folyamat az SMTP protokoll szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kliens SMTP-vel küldi az üzenetet a saját szerverének, majd az továbbítja SMTP-vel a címzett szerverének, végül a címzett letölti POP3/IMAP-pal.",
      "A kliens közvetlenül küldi az üzenetet SMTP-vel a címzett szerverének, majd a címzett azonnal megkapja azt.",
      "A küldő szerver POP3-mal fogadja az üzenetet a klienstől, majd IMAP-pal továbbítja a címzett szerverének."
    ],
    "helyes": "Kliens SMTP-vel küldi az üzenetet a saját szerverének, majd az továbbítja SMTP-vel a címzett szerverének, végül a címzett letölti POP3/IMAP-pal."
  },
  {
    "szoveg": "Milyen komponensekből áll az email infrastruktúra modellje?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Email kliensek, SMTP szerverek a küldéshez, mailbox szerverek a tároláshoz, és a köztük lévő protokollok (SMTP, POP3, IMAP).",
      "Csak SMTP szerverek és kliensek, amelyek közvetlenül kommunikálnak egymással.",
      "Webszerverek és böngészők, amelyek HTTP protokollon keresztül továbbítják az emaileket."
    ],
    "helyes": "Email kliensek, SMTP szerverek a küldéshez, mailbox szerverek a tároláshoz, és a köztük lévő protokollok (SMTP, POP3, IMAP)."
  },
  {
    "szoveg": "Melyik protokoll választása a legmegfelelőbb egy nagy vállalat esetében, ahol az alkalmazottak több eszközről dolgoznak?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "IMAP, mert támogatja a több eszközös hozzáférést és a szerveroldali mappakezelést, valamint a szinkronizációt.",
      "POP3, mert kisebb sávszélességet igényel és gyorsabb a működése.",
      "Csak SMTP, mert ez biztosítja a legbiztonságosabb kommunikációt."
    ],
    "helyes": "IMAP, mert támogatja a több eszközös hozzáférést és a szerveroldali mappakezelést, valamint a szinkronizációt."
  },
  {
    "szoveg": "Milyen protokollt érdemes választani egy korlátozott sávszélességű, gyakran megszakadó internetkapcsolattal rendelkező környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "POP3, mert egyszeri letöltés után offline is használható, és kevesebb adatforgalmat generál.",
      "IMAP, mert folyamatos szinkronizációt biztosít a szerverrel.",
      "Webmail, mert a böngészőben mindig elérhető az aktuális állapot."
    ],
    "helyes": "POP3, mert egyszeri letöltés után offline is használható, és kevesebb adatforgalmat generál."
  },
  {
    "szoveg": "Hogyan értelmezhető az IMAP protokoll szerepe a modern többeszközös email használatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IMAP lehetővé teszi az emailek szerveroldali tárolását és szinkronizálását több eszköz között, így minden eszközön ugyanaz az emailes állapot látható.",
      "Az IMAP csak letölti az emaileket a szerverről és törli azokat, így minden eszközön független emailkezelés valósítható meg.",
      "Az IMAP kizárólag az emailek küldését végzi, és nem foglalkozik az üzenetek tárolásával vagy szinkronizálásával."
    ],
    "helyes": "Az IMAP lehetővé teszi az emailek szerveroldali tárolását és szinkronizálását több eszköz között, így minden eszközön ugyanaz az emailes állapot látható."
  },
  {
    "szoveg": "Milyen szerepet tölt be a MIME a modern email kommunikációban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi különböző típusú tartalmak (képek, dokumentumok, videók) szabványos továbbítását az email rendszerben.",
      "Kizárólag az email címek titkosítását végzi a biztonságos kommunikáció érdekében.",
      "Az email szerverek közötti kapcsolat sebességét optimalizálja a jobb teljesítmény érdekében."
    ],
    "helyes": "Lehetővé teszi különböző típusú tartalmak (képek, dokumentumok, videók) szabványos továbbítását az email rendszerben."
  },
  {
    "szoveg": "Az email protokollok jelenlegi fejlődési trendjei alapján milyen változások várhatók a közeljövőben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A mesterséges intelligencia alapú spam szűrés és automatikus kategorizálás széles körű elterjedése, valamint a biztonsági megoldások további erősödése.",
      "Az email rendszerek teljes kiváltása azonnali üzenetküldő alkalmazásokkal, az SMTP protokoll fokozatos megszűnése.",
      "A mellékletek méretének korlátozása a szerverek terhelésének csökkentése érdekében, visszatérés az egyszerűbb formátumokhoz."
    ],
    "helyes": "A mesterséges intelligencia alapú spam szűrés és automatikus kategorizálás széles körű elterjedése, valamint a biztonsági megoldások további erősödése."
  },
  {
    "szoveg": "Milyen hatása lesz a felhő alapú szolgáltatások további terjedésének az email protokollok fejlődésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A protokollok továbbfejlődnek a valós idejű együttműködés és a különböző platformok közötti zökkenőmentes integráció irányába.",
      "A felhő alapú szolgáltatások teljesen kiváltják a hagyományos email protokollokat, megszüntetve az SMTP használatát.",
      "Az email rendszerek visszatérnek az egyszerűbb, lokális tárolási megoldásokhoz a felhő biztonsági kockázatai miatt."
    ],
    "helyes": "A protokollok továbbfejlődnek a valós idejű együttműködés és a különböző platformok közötti zökkenőmentes integráció irányába."
  },
  {
    "szoveg": "Hogyan modellezhető az email biztonsági protokollok együttműködése a modern rendszerekben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SPF, DKIM és DMARC egymásra épülő réteges védelmet biztosít, ahol az SPF ellenőrzi a küldőt, a DKIM az üzenet integritását, a DMARC pedig egyesíti és szabályozza ezeket.",
      "A biztonsági protokollok egymástól függetlenül működnek, mindegyik saját szabályrendszert használ az üzenetek ellenőrzésére.",
      "Csak egy protokoll aktív egyszerre, a többi tartalék rendszerként működik meghibásodás esetén."
    ],
    "helyes": "Az SPF, DKIM és DMARC egymásra épülő réteges védelmet biztosít, ahol az SPF ellenőrzi a küldőt, a DKIM az üzenet integritását, a DMARC pedig egyesíti és szabályozza ezeket."
  },
  {
    "szoveg": "Hogyan modellezhető az email rendszerek energiahatékonyságának fejlődése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szerverek optimalizálása, a felhő erőforrások dinamikus skálázása és az intelligens spam szűrés együttesen csökkenti az energiafogyasztást.",
      "Az energiahatékonyság kizárólag a hardveres fejlesztésektől függ, a szoftveres megoldások nem befolyásolják.",
      "Az email rendszerek energiafogyasztása állandó, nem optimalizálható a szolgáltatás minőségének romlása nélkül."
    ],
    "helyes": "A szerverek optimalizálása, a felhő erőforrások dinamikus skálázása és az intelligens spam szűrés együttesen csökkenti az energiafogyasztást."
  },
  {
    "szoveg": "Hogyan értékelhető a POP3 és IMAP protokollok hatékonysága a modern többeszközös környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IMAP hatékonyabb megoldást nyújt a modern használati szokásokhoz, mivel szerveroldali szinkronizációt és eszközfüggetlen hozzáférést biztosít.",
      "A POP3 hatékonyabb, mert kisebb hálózati forgalmat generál az emailek egyszeri letöltésével.",
      "Mindkét protokoll egyformán hatékony, nincs jelentős különbség közöttük a modern használatban."
    ],
    "helyes": "Az IMAP hatékonyabb megoldást nyújt a modern használati szokásokhoz, mivel szerveroldali szinkronizációt és eszközfüggetlen hozzáférést biztosít."
  },
  {
    "szoveg": "Milyen szempontok alapján értékelhető az email titkosítási megoldások (PGP, S/MIME) gyakorlati alkalmazhatósága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A használhatóság, a kompatibilitás és a biztonsági szint együttes mérlegelése alapján, figyelembe véve a felhasználói igényeket és technikai korlátokat.",
      "Kizárólag a titkosítás erőssége alapján, függetlenül a gyakorlati használhatóságtól.",
      "Csak a bevezetés költségei alapján, figyelmen kívül hagyva a biztonsági szempontokat."
    ],
    "helyes": "A használhatóság, a kompatibilitás és a biztonsági szint együttes mérlegelése alapján, figyelembe véve a felhasználói igényeket és technikai korlátokat."
  },
  {
    "szoveg": "Egy nagyvállalat email szerverének konfigurálása során milyen következtetést vonhatunk le az SMTP portok (25, 465, 587) különböző felhasználási módjairól?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A különböző portok eltérő biztonsági szintű és célú email továbbítást tesznek lehetővé, ahol a 465-ös és 587-es portok a biztonságos, autentikált kommunikációt szolgálják, míg a 25-ös port a szerverek közötti kommunikációra használatos.",
      "Mindhárom port ugyanazt a funkciót látja el, csak redundancia miatt vannak különböző portszámok definiálva a nagyobb rendelkezésre állás érdekében.",
      "A portok közötti különbség csak történeti jellegű, ma már bármelyik használható bármilyen email kommunikációra, a választás tetszőleges."
    ],
    "helyes": "A különböző portok eltérő biztonsági szintű és célú email továbbítást tesznek lehetővé, ahol a 465-ös és 587-es portok a biztonságos, autentikált kommunikációt szolgálják, míg a 25-ös port a szerverek közötti kommunikációra használatos."
  },
  {
    "szoveg": "Hogyan értelmezhető az email szerver teljesítmény-optimalizálásában a 'rate limiting' szerepe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rate limiting megakadályozza a szerver túlterhelését azáltal, hogy korlátozza az egy forrásból érkező kapcsolatok és küldések számát, így biztosítva a szolgáltatás stabilitását és védelmét a túlterheléses támadásokkal szemben.",
      "A rate limiting kizárólag a bejövő emailek méretét korlátozza, hogy ne telítődjon a szerver tárhelye.",
      "A rate limiting csak a kimenő emailek sebességét szabályozza, hogy ne terheljük túl a címzett szervereket."
    ],
    "helyes": "A rate limiting megakadályozza a szerver túlterhelését azáltal, hogy korlátozza az egy forrásból érkező kapcsolatok és küldések számát, így biztosítva a szolgáltatás stabilitását és védelmét a túlterheléses támadásokkal szemben."
  },
  {
    "szoveg": "Egy új email szerver telepítésekor hogyan implementálná a biztonsági beállításokat egy pénzügyi szolgáltató esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TLS 1.3 kötelező használata, SPF/DKIM/DMARC implementálása, többfaktoros authentikáció bevezetése az admin felülethez, részletes auditálási napló vezetése, és szigorú spam szűrési szabályok alkalmazása.",
      "Alapértelmezett SMTP beállítások használata, egyszerű jelszavas védelem az admin felülethez, és alapszintű vírusirtó telepítése.",
      "Nyílt relay engedélyezése a gyorsabb kommunikáció érdekében, és csak a legszükségesebb biztonsági beállítások alkalmazása a teljesítmény maximalizálásához."
    ],
    "helyes": "TLS 1.3 kötelező használata, SPF/DKIM/DMARC implementálása, többfaktoros authentikáció bevezetése az admin felülethez, részletes auditálási napló vezetése, és szigorú spam szűrési szabályok alkalmazása."
  },
  {
    "szoveg": "Hogyan oldaná meg egy nemzetközi vállalat email szerverének magas rendelkezésre állását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Földrajzilag elosztott, redundáns szerverek használata automatikus failover megoldással, load balancing implementálása, és valós idejű replikáció beállítása a szerverek között, rendszeres backup készítéssel.",
      "Egyetlen nagy teljesítményű szerver használata RAID rendszerrel és napi mentéssel.",
      "Két szerver használata master-slave konfigurációban, heti mentéssel és manuális átkapcsolási lehetőséggel."
    ],
    "helyes": "Földrajzilag elosztott, redundáns szerverek használata automatikus failover megoldással, load balancing implementálása, és valós idejű replikáció beállítása a szerverek között, rendszeres backup készítéssel."
  },
  {
    "szoveg": "Milyen összefüggések vannak az email szerver különböző biztonsági komponensei között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A spam szűrés, vírusvédelem, SPF/DKIM ellenőrzés és rate limiting együttesen alkotnak egy többrétegű védelmi rendszert, ahol minden komponens más-más típusú fenyegetés ellen véd, de együttműködve teljes körű védelmet biztosítanak.",
      "A biztonsági komponensek egymástól függetlenül működnek, nincs közöttük kapcsolat vagy együttműködés.",
      "Elegendő egyetlen biztonsági komponens használata, mert mindegyik ugyanazt a védelmi funkciót látja el különböző módszerekkel."
    ],
    "helyes": "A spam szűrés, vírusvédelem, SPF/DKIM ellenőrzés és rate limiting együttesen alkotnak egy többrétegű védelmi rendszert, ahol minden komponens más-más típusú fenyegetés ellen véd, de együttműködve teljes körű védelmet biztosítanak."
  },
  {
    "szoveg": "Hogyan modellezhető egy email szerver erőforrás-menedzsment rendszere?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az erőforrás-menedzsment egy dinamikus rendszer, ahol a CPU, memória és tárhely használat folyamatosan monitorozva van, és a terhelés függvényében automatikusan skálázódnak az erőforrások, figyelembe véve a prioritásokat és korlátozásokat.",
      "Az erőforrások statikusan vannak elosztva a különböző folyamatok között, fix limitekkel.",
      "Az erőforrások igény szerint korlátlanul bővíthetők, nincs szükség menedzsment rendszerre."
    ],
    "helyes": "Az erőforrás-menedzsment egy dinamikus rendszer, ahol a CPU, memória és tárhely használat folyamatosan monitorozva van, és a terhelés függvényében automatikusan skálázódnak az erőforrások, figyelembe véve a prioritásokat és korlátozásokat."
  },
  {
    "szoveg": "Hogyan értékelhető egy email szerver biztonsági konfigurációjának megfelelősége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonsági konfiguráció megfelelősége mérhető a beállított protokollok korszerűségével, a védelmi mechanizmusok többrétegűségével, a naplózás részletességével, és a rendszeres biztonsági auditok eredményeivel, valamint a sikeres támadások hiányával.",
      "A biztonság megfelelősége kizárólag a telepített vírusirtó szoftver típusától függ.",
      "A biztonsági konfiguráció akkor megfelelő, ha a szerver működik és fogadja az emaileket."
    ],
    "helyes": "A biztonsági konfiguráció megfelelősége mérhető a beállított protokollok korszerűségével, a védelmi mechanizmusok többrétegűségével, a naplózás részletességével, és a rendszeres biztonsági auditok eredményeivel, valamint a sikeres támadások hiányával."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy email szerver teljesítmény-optimalizációjának sikeressége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A teljesítmény-optimalizáció sikeressége mérhető a kézbesítési idők, a sorban állási idők, az erőforrás-kihasználtság, a sikeres kézbesítések aránya és a felhasználói visszajelzések alapján, figyelembe véve a költséghatékonyságot is.",
      "A teljesítmény kizárólag az egy másodperc alatt feldolgozott emailek számával mérhető.",
      "A teljesítmény-optimalizáció sikerességét csak a szerverhez allokált erőforrások mennyisége határozza meg."
    ],
    "helyes": "A teljesítmény-optimalizáció sikeressége mérhető a kézbesítési idők, a sorban állási idők, az erőforrás-kihasználtság, a sikeres kézbesítések aránya és a felhasználói visszajelzések alapján, figyelembe véve a költséghatékonyságot is."
  },
  {
    "szoveg": "Egy nagyvállalat email rendszerében azt tapasztalják, hogy a kimenő levelek gyakran a címzettek spam mappájába kerülnek. Az SPF, DKIM és DMARC technológiák közül melyik beállítása segíthet leghatékonyabban ennek megelőzésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SPF rekord megfelelő konfigurálása, amely pontosan meghatározza a vállalat összes jogosult email küldő szerverét.",
      "A DMARC policy beállítása 'reject' értékre, hogy minden gyanús levél azonnal elutasításra kerüljön.",
      "A DKIM kulcsok gyakori cseréje és hosszabb kulcsok használata a biztonság növelése érdekében."
    ],
    "helyes": "Az SPF rekord megfelelő konfigurálása, amely pontosan meghatározza a vállalat összes jogosult email küldő szerverét."
  },
  {
    "szoveg": "Hogyan értelmezhető a DMARC szerepe az email biztonsági rendszerben az SPF és DKIM mellett?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DMARC egy koordináló és szabályozó réteg, amely az SPF és DKIM ellenőrzések eredményei alapján egységes házirend szerint kezeli a leveleket.",
      "A DMARC egy önálló hitelesítési mechanizmus, amely felülírja az SPF és DKIM eredményeit.",
      "A DMARC kizárólag statisztikai adatokat gyűjt az SPF és DKIM működéséről, beavatkozási lehetőség nélkül."
    ],
    "helyes": "A DMARC egy koordináló és szabályozó réteg, amely az SPF és DKIM ellenőrzések eredményei alapján egységes házirend szerint kezeli a leveleket."
  },
  {
    "szoveg": "Milyen folyamatot követ egy email üzenet hitelesítése az SPF, DKIM és DMARC együttes használata esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fogadó szerver először ellenőrzi az SPF rekordot és a DKIM aláírást, majd a DMARC policy alapján dönt a levél kezeléséről az eredmények függvényében.",
      "A DMARC először ellenőrzi a levelet, majd továbbítja az SPF és DKIM ellenőrzésekhez, végül összesíti az eredményeket.",
      "Az SPF, DKIM és DMARC ellenőrzések párhuzamosan, egymástól függetlenül történnek, és mindegyiknek sikeresnek kell lennie."
    ],
    "helyes": "A fogadó szerver először ellenőrzi az SPF rekordot és a DKIM aláírást, majd a DMARC policy alapján dönt a levél kezeléséről az eredmények függvényében."
  },
  {
    "szoveg": "Hogyan modellezhető egy sikeres email spoofing támadás megakadályozása a három technológia együttes használatával?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A támadó hamis feladó címmel küld levelet, de az SPF ellenőrzés jelzi a jogosulatlan küldőt, a DKIM aláírás hiányzik, így a DMARC policy alapján a levél elutasításra kerül.",
      "A DMARC önmagában felismeri a hamis feladót és automatikusan blokkolja a levelet, függetlenül az SPF és DKIM eredményétől.",
      "Az SPF rekord folyamatosan frissül a támadó IP címével, így a rendszer azonnal felismeri és blokkolja a támadót."
    ],
    "helyes": "A támadó hamis feladó címmel küld levelet, de az SPF ellenőrzés jelzi a jogosulatlan küldőt, a DKIM aláírás hiányzik, így a DMARC policy alapján a levél elutasításra kerül."
  },
  {
    "szoveg": "Egy vállalat email rendszerének biztonságossá tételéhez hogyan alkalmazná az SPF, DKIM és DMARC technológiákat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Először beállítanám az SPF rekordot az összes legitim küldő szerverrel, majd implementálnám a DKIM aláírást, végül fokozatosan szigorítanám a DMARC policyt.",
      "Azonnal beállítanám mindhárom technológiát a legmagasabb biztonsági szinten, hogy maximális védelmet biztosítsak.",
      "Csak a DMARC-ot állítanám be reject módban, mivel ez automatikusan kezeli az SPF és DKIM beállításokat is."
    ],
    "helyes": "Először beállítanám az SPF rekordot az összes legitim küldő szerverrel, majd implementálnám a DKIM aláírást, végül fokozatosan szigorítanám a DMARC policyt."
  },
  {
    "szoveg": "Hogyan használná a DMARC jelentéseket egy vállalati email rendszer biztonságának javítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jelentések alapján azonosítanám a legitim, de hibásan konfigurált küldő szervereket, és fokozatosan javítanám az SPF és DKIM beállításokat.",
      "A jelentéseket csak archiválnám későbbi referencia céljából, mivel a DMARC automatikusan kezeli a problémákat.",
      "A jelentéseket kizárólag a sikertelen kézbesítések nyomon követésére használnám."
    ],
    "helyes": "A jelentések alapján azonosítanám a legitim, de hibásan konfigurált küldő szervereket, és fokozatosan javítanám az SPF és DKIM beállításokat."
  },
  {
    "szoveg": "Mennyire tekinthető megfelelőnek egy olyan email biztonsági konfiguráció, ahol csak az SPF van beállítva, de a DKIM és DMARC nincs implementálva?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nem megfelelő, mert bár az SPF véd a közvetlen hamisítás ellen, de a DKIM és DMARC hiánya jelentős biztonsági réseket hagy.",
      "Teljesen megfelelő, mivel az SPF önmagában is elegendő védelmet nyújt az email hamisítás ellen.",
      "Megfelelő, ha a vállalat csak belső levelezést folytat, külső kommunikáció nélkül."
    ],
    "helyes": "Nem megfelelő, mert bár az SPF véd a közvetlen hamisítás ellen, de a DKIM és DMARC hiánya jelentős biztonsági réseket hagy."
  },
  {
    "szoveg": "Hogyan értékelhető egy olyan DMARC konfiguráció hatékonysága, amely örökké 'none' módban marad?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nem hatékony, mert bár információt gyűjt, de nem védi aktívan a domaint a visszaélésektől, így nem használja ki a technológia védelmi képességeit.",
      "Teljesen hatékony, mert a megfigyelés önmagában is elegendő a biztonság fenntartásához.",
      "Hatékonyabb, mint a szigorúbb beállítások, mert nem kockáztatja a legitim levelek elvesztését."
    ],
    "helyes": "Nem hatékony, mert bár információt gyűjt, de nem védi aktívan a domaint a visszaélésektől, így nem használja ki a technológia védelmi képességeit."
  },
  {
    "szoveg": "Egy vállalat IT biztonsági szakembere azt tapasztalja, hogy a DKIM protokoll által generált digitális aláírások ellenőrzése során egyes levelek nem felelnek meg a hitelesítési követelményeknek. Mit jelez ez a helyzet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A küldő domain nevében valaki jogosulatlanul próbál leveleket küldeni, vagy a levelek tartalmát manipulálták útközben.",
      "A levelezőszerver túlterhelt és nem tudja megfelelően feldolgozni a beérkező üzeneteket.",
      "A címzettek levelezőprogramja nem támogatja a modern titkosítási protokollokat."
    ],
    "helyes": "A küldő domain nevében valaki jogosulatlanul próbál leveleket küldeni, vagy a levelek tartalmát manipulálták útközben."
  },
  {
    "szoveg": "Hogyan értelmezhető az SPF rekord szerepe a következő helyzetben: egy cég több különböző országban működtet levelezőszervereket, és mindegyikről szeretne legitim módon e-maileket küldeni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SPF rekordban fel kell sorolni az összes levelezőszerver IP-címét vagy tartományát, ahonnan a cég nevében email küldhető.",
      "Elegendő a cég központi szerverének IP-címét megadni az SPF rekordban.",
      "Az SPF rekordot minden országban külön kell beállítani a helyi szerverekhez."
    ],
    "helyes": "Az SPF rekordban fel kell sorolni az összes levelezőszerver IP-címét vagy tartományát, ahonnan a cég nevében email küldhető."
  },
  {
    "szoveg": "Ha egy szervezet bevezeti a DMARC protokollt, milyen változások várhatók a közeljövőben a levelezési rendszer működésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A domain nevében küldött hamis levelek automatikusan kiszűrhetők lesznek, és részletes jelentések készülnek a sikertelen kézbesítési kísérletekről.",
      "A levelezési rendszer teljesítménye jelentősen csökkenni fog a megnövekedett ellenőrzési folyamatok miatt.",
      "A felhasználóknak minden kimenő levelet manuálisan kell majd hitelesíteniük."
    ],
    "helyes": "A domain nevében küldött hamis levelek automatikusan kiszűrhetők lesznek, és részletes jelentések készülnek a sikertelen kézbesítési kísérletekről."
  },
  {
    "szoveg": "Milyen következményekkel járhat, ha egy nagyvállalat nem megfelelően konfigurálja az SPF rekordját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A legitim levelek egy része spam-ként jelölődhet, és a vállalat nevében könnyebben küldhetők csaló levelek.",
      "A levelezőszerver automatikusan leáll és újraindul minden hibás konfiguráció esetén.",
      "A vállalat összes email címe azonnal blokkolásra kerül az interneten."
    ],
    "helyes": "A legitim levelek egy része spam-ként jelölődhet, és a vállalat nevében könnyebben küldhetők csaló levelek."
  },
  {
    "szoveg": "Hogyan alkalmazná a többrétegű email biztonsági megoldásokat egy új vállalati levelezőrendszer bevezetésekor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SPF, DKIM és DMARC protokollokat együttesen konfigurálnám, fokozatosan szigorítva a beállításokat a tapasztalatok alapján.",
      "Csak a DMARC protokollt vezetném be, mivel az önmagában is teljes védelmet nyújt.",
      "A protokollokat egymástól függetlenül, random sorrendben állítanám be."
    ],
    "helyes": "Az SPF, DKIM és DMARC protokollokat együttesen konfigurálnám, fokozatosan szigorítva a beállításokat a tapasztalatok alapján."
  },
  {
    "szoveg": "Egy nemzetközi vállalat különböző országokban működő részlegei gyakran küldenek egymásnak emaileket. Hogyan használná az email biztonsági protokollokat ebben a helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Központilag koordinált, egységes biztonsági protokoll beállításokat alkalmaznék, minden részleg szerverét megfelelően regisztrálva az SPF rekordokban.",
      "Minden országban független biztonsági beállításokat alkalmaznék, egymástól elkülönítve.",
      "Kikapcsolnám a biztonsági protokollokat a belső kommunikációhoz."
    ],
    "helyes": "Központilag koordinált, egységes biztonsági protokoll beállításokat alkalmaznék, minden részleg szerverét megfelelően regisztrálva az SPF rekordokban."
  },
  {
    "szoveg": "Mennyire tekinthető hatékonynak egy olyan email biztonsági megoldás, amely csak az SPF protokollt alkalmazza?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Csak részleges védelmet nyújt, mivel nem biztosítja az üzenetek sértetlenségét és nem ad visszajelzést a sikertelen kézbesítésekről.",
      "Teljes körű védelmet biztosít minden típusú email alapú támadás ellen.",
      "Felesleges, mivel önmagában nem nyújt semmilyen védelmet."
    ],
    "helyes": "Csak részleges védelmet nyújt, mivel nem biztosítja az üzenetek sértetlenségét és nem ad visszajelzést a sikertelen kézbesítésekről."
  },
  {
    "szoveg": "Hogyan értékelhető egy olyan szervezet email biztonsági stratégiája, amely csak akkor vezet be új biztonsági protokollokat, amikor már támadás érte?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nem megfelelő, mert a reaktív megközelítés jelentős károkat okozhat, amit a megelőző védelem megakadályozhatott volna.",
      "Költséghatékony megoldás, mivel csak akkor költ védelemre, amikor az valóban szükséges.",
      "Ideális stratégia, mert így pontosan tudja, milyen támadások ellen kell védekeznie."
    ],
    "helyes": "Nem megfelelő, mert a reaktív megközelítés jelentős károkat okozhat, amit a megelőző védelem megakadályozhatott volna."
  },
  {
    "szoveg": "Egy nagyvállalat email infrastruktúrájában azt tapasztalják, hogy sok spam üzenet jut át a szűrőkön. Melyik megoldás-kombináció lenne a leghatékonyabb a probléma kezelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű spamszűrés bevezetése Bayesian filteringgel, RBL használata és DMARC rekordok implementálása a domain spoofing ellen.",
      "Kizárólag IP-alapú feketelisták alkalmazása és a bejövő levelek méretének korlátozása.",
      "A levelezőszerver áthelyezése DMZ-be és SSL tanúsítvány telepítése."
    ],
    "helyes": "Többrétegű spamszűrés bevezetése Bayesian filteringgel, RBL használata és DMARC rekordok implementálása a domain spoofing ellen."
  },
  {
    "szoveg": "Egy vállalat email rendszerének biztonsági naplózását tervezik. Melyik megoldás biztosítja a leghatékonyabb nyomon követhetőséget?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden kritikus művelet, hozzáférési kísérlet és rendszeresemény központi naplózása, automatikus riasztásokkal és rendszeres auditálással.",
      "Kizárólag a sikertelen bejelentkezési kísérletek naplózása heti jelentésekkel.",
      "Csak a kimenő levelek naplózása és a szerverterhelés monitorozása."
    ],
    "helyes": "Minden kritikus művelet, hozzáférési kísérlet és rendszeresemény központi naplózása, automatikus riasztásokkal és rendszeres auditálással."
  },
  {
    "szoveg": "Egy pénzügyi szolgáltató email infrastruktúrájának magas rendelkezésre állását tervezik. Milyen architektúrát javasolna?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "DMZ-ben elhelyezett redundáns email átjárók load balancinggal, szeparált belső és külső szerverekkel, automatikus failover megoldással.",
      "Egyetlen nagy teljesítményű szerver DMZ-ben, napi biztonsági mentéssel.",
      "Két független szerver azonos konfigurációval, manuális átkapcsolási lehetőséggel."
    ],
    "helyes": "DMZ-ben elhelyezett redundáns email átjárók load balancinggal, szeparált belső és külső szerverekkel, automatikus failover megoldással."
  },
  {
    "szoveg": "Hogyan tervezné meg egy egészségügyi intézmény email infrastruktúrájának titkosítási rendszerét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "End-to-end titkosítás S/MIME vagy PGP használatával, kötelező TLS a szerverek között, és titkosított adattárolás a szervereken.",
      "Alapszintű SSL titkosítás a webmail felületen és jelszavas tömörítés a bizalmas mellékleteknél.",
      "Kizárólag szerver oldali titkosítás és spam szűrés alkalmazása."
    ],
    "helyes": "End-to-end titkosítás S/MIME vagy PGP használatával, kötelező TLS a szerverek között, és titkosított adattárolás a szervereken."
  },
  {
    "szoveg": "Egy multinacionális vállalat új spam szűrési megoldást keres. Hogyan implementálná a rendszert?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fokozatos bevezetés tesztkörnyezetben, kezdetben párhuzamos futtatás a régi rendszerrel, majd teljes migráció részletes monitorozással és finomhangolással.",
      "Azonnali teljes körű bevezetés minden felhasználóra egyszerre, alapértelmezett beállításokkal.",
      "A régi rendszer lekapcsolása és az új azonnali élesítése hétvégén, minimális teszteléssel."
    ],
    "helyes": "Fokozatos bevezetés tesztkörnyezetben, kezdetben párhuzamos futtatás a régi rendszerrel, majd teljes migráció részletes monitorozással és finomhangolással."
  },
  {
    "szoveg": "Hogyan implementálná a DMARC védelmet egy olyan vállalatnál, ahol korábban nem használtak email hitelesítési megoldásokat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "SPF és DKIM bevezetése monitoring módban, fokozatos szigorítás az eredmények alapján, végül DMARC implementálása reject policy-val.",
      "DMARC azonnali bevezetése reject policy-val, utólagos SPF konfiguráció.",
      "Kizárólag SPF rekord létrehozása, DKIM és DMARC nélkül."
    ],
    "helyes": "SPF és DKIM bevezetése monitoring módban, fokozatos szigorítás az eredmények alapján, végül DMARC implementálása reject policy-val."
  },
  {
    "szoveg": "Egy bank email biztonsági rendszerének éves auditja során milyen szempontok alapján értékelné a rendszer megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megfelelőség a banki szabályozásoknak, sikeres penetrációs tesztek, naprakész biztonsági frissítések, hatékony incidenskezelés és dokumentált folyamatok megléte.",
      "Kizárólag a spam szűrés hatékonysága és a szerverek üzemideje alapján.",
      "Csak a felhasználói visszajelzések és a költséghatékonyság szempontjából."
    ],
    "helyes": "Megfelelőség a banki szabályozásoknak, sikeres penetrációs tesztek, naprakész biztonsági frissítések, hatékony incidenskezelés és dokumentált folyamatok megléte."
  },
  {
    "szoveg": "Milyen kritériumok alapján értékelné egy újonnan bevezetett email titkosítási megoldás sikerességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A sikeres titkosított kommunikáció aránya, felhasználói elfogadás mértéke, teljesítményhatás minimalizálása és a biztonsági incidensek számának csökkenése.",
      "Kizárólag a bevezetés gyorsasága és a kezdeti költségek alapján.",
      "Csak a titkosítás erőssége alapján, figyelmen kívül hagyva a használhatóságot."
    ],
    "helyes": "A sikeres titkosított kommunikáció aránya, felhasználói elfogadás mértéke, teljesítményhatás minimalizálása és a biztonsági incidensek számának csökkenése."
  },
  {
    "szoveg": "Egy nagy méretű, globális fájlmegosztó rendszer tervezésénél mely P2P architektúra típus összehasonlítási szempontjai a legkedvezőbbek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hibrid P2P architektúra, mert a szupercsomópontok révén jó skálázhatóságot biztosít, miközben a megbízhatósága és teljesítménye is megfelelő szinten marad a decentralizált jelleg miatt.",
      "A tiszta P2P architektúra, mert bár a keresés lassabb, de a teljesen decentralizált jelleg miatt jobban skálázódik és megbízhatóbb, mint bármely más architektúra típus.",
      "A centralizált P2P architektúra, mivel a központi szerver révén gyorsabb a keresés és egyszerűbb a menedzselhetőség, ami nagy rendszereknél kritikus szempont."
    ],
    "helyes": "A hibrid P2P architektúra, mert a szupercsomópontok révén jó skálázhatóságot biztosít, miközben a megbízhatósága és teljesítménye is megfelelő szinten marad a decentralizált jelleg miatt."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz a strukturált és a tiszta P2P architektúra a keresési hatékonyság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A strukturált P2P architektúra hatékonyabb, mert a DHT alapú szervezés determinisztikus keresést tesz lehetővé, míg a tiszta P2P-ben a keresés elárasztásos módszerrel történik, ami jelentős hálózati terhelést okoz.",
      "A tiszta P2P architektúra hatékonyabb, mert nincs szükség extra erőforrásokra a struktúra fenntartásához, és minden peer közvetlenül kommunikálhat egymással.",
      "Mindkét architektúra azonos hatékonyságú, csak más-más módon érik el: a strukturált P2P a DHT-vel, a tiszta P2P pedig a közvetlen peer kapcsolatokkal."
    ],
    "helyes": "A strukturált P2P architektúra hatékonyabb, mert a DHT alapú szervezés determinisztikus keresést tesz lehetővé, míg a tiszta P2P-ben a keresés elárasztásos módszerrel történik, ami jelentős hálózati terhelést okoz."
  },
  {
    "szoveg": "Hogyan működik a hibrid P2P architektúra a szupercsomópontok szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szupercsomópontok olyan kiemelt peerek, amelyek koordinálják a hozzájuk tartozó normál peerek kommunikációját, indexelik a tartalmukat, és közvetítik a kereséseket más szupercsomópontok felé.",
      "A szupercsomópontok központi szerverként működnek, amelyek teljes kontrollt gyakorolnak a hálózat felett, és minden kommunikáció rajtuk keresztül történik.",
      "A szupercsomópontok csak a tartalmak másolatait tárolják és a biztonsági mentésekért felelősek, de nem vesznek részt a hálózati kommunikáció koordinálásában."
    ],
    "helyes": "A szupercsomópontok olyan kiemelt peerek, amelyek koordinálják a hozzájuk tartozó normál peerek kommunikációját, indexelik a tartalmukat, és közvetítik a kereséseket más szupercsomópontok felé."
  },
  {
    "szoveg": "Mit jelent a strukturált P2P architektúrában a DHT (Distributed Hash Table) alapú szervezés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat egy előre meghatározott topológia szerint épül fel, ahol minden erőforráshoz és csomóponthoz egy egyedi azonosító tartozik, és a keresések ezen azonosítók alapján történnek determinisztikus módon.",
      "A hálózatban minden csomópont véletlenszerűen kapcsolódik más csomópontokhoz, és a hash táblák csak a lokális tartalmak indexelésére szolgálnak.",
      "A DHT egy központi adatbázis, amely tárolja az összes peer elérhetőségét és tartalmát, és ezt az információt osztja meg a hálózat tagjaival."
    ],
    "helyes": "A hálózat egy előre meghatározott topológia szerint épül fel, ahol minden erőforráshoz és csomóponthoz egy egyedi azonosító tartozik, és a keresések ezen azonosítók alapján történnek determinisztikus módon."
  },
  {
    "szoveg": "Hogyan működne egy hibrid P2P alapú streaming szolgáltatás?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szupercsomópontok koordinálnák a stream továbbítását, optimalizálva a sávszélességet és a késleltetést, míg a normál peerek egymás között is megosztanák a már letöltött tartalmakat a terhelés elosztása érdekében.",
      "Minden peer közvetlenül a központi szerverről töltené le a streamet, és a P2P kapcsolatok csak a metaadatok megosztására szolgálnának.",
      "A peerek véletlenszerűen kapcsolódnának egymáshoz, és mindenki csak a közvetlen szomszédjaitól kapná a stream adatait, központi koordináció nélkül."
    ],
    "helyes": "A szupercsomópontok koordinálnák a stream továbbítását, optimalizálva a sávszélességet és a késleltetést, míg a normál peerek egymás között is megosztanák a már letöltött tartalmakat a terhelés elosztása érdekében."
  },
  {
    "szoveg": "Milyen architektúrát választana egy blockchain alapú decentralizált alkalmazás fejlesztéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Strukturált P2P architektúrát, ahol a DHT alapú szervezés biztosítja a hatékony blokk és tranzakció keresést, valamint a determinisztikus működést, ami kritikus a konszenzus mechanizmusok szempontjából.",
      "Centralizált P2P architektúrát, ahol egy megbízható központi szerver validálja és koordinálja a tranzakciókat a nagyobb biztonság érdekében.",
      "Tiszta P2P architektúrát véletlenszerű kapcsolódásokkal, ahol minden node közvetlenül kommunikál minden másikkal a teljes decentralizáció érdekében."
    ],
    "helyes": "Strukturált P2P architektúrát, ahol a DHT alapú szervezés biztosítja a hatékony blokk és tranzakció keresést, valamint a determinisztikus működést, ami kritikus a konszenzus mechanizmusok szempontjából."
  },
  {
    "szoveg": "Melyik P2P architektúra a legalkalmasabb egy kis létszámú, zárt fejlesztői közösség kollaborációs rendszeréhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A centralizált P2P architektúra, mert kis méretű, zárt rendszerben a központi koordináció előnyei (egyszerű keresés, konzisztencia, felügyelet) felülmúlják a single point of failure kockázatát.",
      "A tiszta P2P architektúra, mert a teljes decentralizáció maximális rugalmasságot biztosít a fejlesztők számára a kollaborációban.",
      "A hibrid P2P architektúra, mert a szupercsomópontok révén optimális kompromisszumot nyújt a skálázhatóság és kezelhetőség között."
    ],
    "helyes": "A centralizált P2P architektúra, mert kis méretű, zárt rendszerben a központi koordináció előnyei (egyszerű keresés, konzisztencia, felügyelet) felülmúlják a single point of failure kockázatát."
  },
  {
    "szoveg": "Milyen P2P architektúrát válasszon egy nagy fájlok megosztására specializálódott szolgáltatás?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A strukturált P2P architektúrát, mert a DHT alapú szervezés hatékony keresést biztosít, és a nagy fájlok darabolva, elosztva tárolhatók, miközben a rendszer jól skálázható marad.",
      "A centralizált P2P architektúrát, mert a központi szerver hatékonyan tudja koordinálni a nagy fájlok átvitelét és nyilvántartását.",
      "A tiszta P2P architektúrát, mert a közvetlen kapcsolatok révén gyorsabb a nagy fájlok átvitele a peerek között."
    ],
    "helyes": "A strukturált P2P architektúrát, mert a DHT alapú szervezés hatékony keresést biztosít, és a nagy fájlok darabolva, elosztva tárolhatók, miközben a rendszer jól skálázható marad."
  },
  {
    "szoveg": "A BitTorrent rendszerben mi a tracker elsődleges feladata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nyilvántartja az aktív felhasználókat és koordinálja a kapcsolatokat a peer-ek között, anélkül hogy részt venne a fájlok megosztásában.",
      "Tárolja és szétosztja a letöltendő fájlokat a felhasználók között, valamint ellenőrzi a fájlok integritását.",
      "Titkosítja a peer-ek közötti kommunikációt és biztosítja a rendszer anonimitását."
    ],
    "helyes": "Nyilvántartja az aktív felhasználókat és koordinálja a kapcsolatokat a peer-ek között, anélkül hogy részt venne a fájlok megosztásában."
  },
  {
    "szoveg": "Mi a .torrent fájl szerepe a BitTorrent protokollban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Tartalmazza a letöltendő fájl metaadatait, a tracker címét és a fájldarabok hash értékeit az integritás ellenőrzéshez.",
      "Tárolja a letöltendő fájl tartalmát tömörített formában és a seederek IP címeit.",
      "Biztosítja a peer-ek közötti közvetlen kapcsolatot és tárolja a letöltési előzményeket."
    ],
    "helyes": "Tartalmazza a letöltendő fájl metaadatait, a tracker címét és a fájldarabok hash értékeit az integritás ellenőrzéshez."
  },
  {
    "szoveg": "Hogyan optimalizálja a BitTorrent protokoll a fájldarabok letöltési sorrendjét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'rarest first' stratégiával előnyben részesíti a legritkábban elérhető fájldarabok letöltését, így biztosítva a tartalom jobb elérhetőségét.",
      "Mindig a fájl elejétől kezdi a letöltést, és sorban halad a vége felé a konzisztencia érdekében.",
      "A legnagyobb méretű fájldarabokat tölti le először, hogy minimalizálja a hálózati kapcsolatok számát."
    ],
    "helyes": "A 'rarest first' stratégiával előnyben részesíti a legritkábban elérhető fájldarabok letöltését, így biztosítva a tartalom jobb elérhetőségét."
  },
  {
    "szoveg": "Milyen módon ösztönzi a BitTorrent protokoll a felhasználókat a megosztásra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 'tit-for-tat' elvvel, amely a feltöltési sebességet a letöltési arányhoz köti, így jutalmazva az aktív megosztókat.",
      "Pénzjutalmat oszt ki azoknak a felhasználóknak, akik hosszabb ideig megosztanak tartalmakat.",
      "Automatikusan korlátozza a letöltési sebességet azoknál, akik nem osztanak meg tartalmakat."
    ],
    "helyes": "A 'tit-for-tat' elvvel, amely a feltöltési sebességet a letöltési arányhoz köti, így jutalmazva az aktív megosztókat."
  },
  {
    "szoveg": "Hogyan biztosítja a BitTorrent protokoll a rendszer skálázhatóságát nagy számú felhasználó esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A terhelést elosztja a peer-ek között, ahol minden résztvevő egyszerre lehet letöltő és feltöltő, valamint a choking mechanizmus szabályozza a kapcsolatok számát.",
      "Központi szervereket használ a fájlok tárolására, amelyek automatikusan skálázódnak a terhelés függvényében.",
      "A fájlokat kisebb darabokra osztja, és minden peer csak egyetlen másik peer-rel kommunikál egyszerre."
    ],
    "helyes": "A terhelést elosztja a peer-ek között, ahol minden résztvevő egyszerre lehet letöltő és feltöltő, valamint a choking mechanizmus szabályozza a kapcsolatok számát."
  },
  {
    "szoveg": "Milyen folyamatot követ egy új peer csatlakozása a BitTorrent hálózathoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Először beszerzi a .torrent fájlt, kapcsolódik a trackerhez, megkapja az aktív peer-ek listáját, majd párhuzamosan kezdi a fájldarabok letöltését és megosztását.",
      "Közvetlenül csatlakozik egy véletlenszerű seederhez, letölti a teljes fájlt, majd csak ezután kezdi el a megosztást más peer-ekkel.",
      "Regisztrál a központi szerveren, kifizeti a használati díjat, majd kizárólagos hozzáférést kap egy dedikált seederhez."
    ],
    "helyes": "Először beszerzi a .torrent fájlt, kapcsolódik a trackerhez, megkapja az aktív peer-ek listáját, majd párhuzamosan kezdi a fájldarabok letöltését és megosztását."
  },
  {
    "szoveg": "Egy fejlesztőcsapat decentralizált alkalmazást készít, ahol a felhasználóknak lehetőségük van digitális műalkotásokat tokenizálni és kereskedni velük. Melyik megközelítés biztosítja leghatékonyabban az alkalmazás decentralizált jellegét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az NFT metaadatok és képek IPFS-en történő tárolása, smart kontraktok használata a tulajdonjog kezelésére, és Web3 wallet integráció a tranzakciók hitelesítésére.",
      "A műalkotások centralizált szerveren történő tárolása, de blockchain alapú tranzakciók használata a kereskedéshez.",
      "Az NFT-k metaadatainak blockchain-en történő tárolása, de a képek centralizált CDN használata a gyorsabb betöltés érdekében."
    ],
    "helyes": "Az NFT metaadatok és képek IPFS-en történő tárolása, smart kontraktok használata a tulajdonjog kezelésére, és Web3 wallet integráció a tranzakciók hitelesítésére."
  },
  {
    "szoveg": "Egy DApp fejlesztése során hogyan implementálná legmegfelelőbben a felhasználói jogosultságok kezelését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Role-based access control smart kontraktok implementálásával, ahol a szerepköröket és jogosultságokat on-chain tároljuk, és eseményekkel követjük a változásokat.",
      "Centralizált adatbázisban tárolt felhasználói jogosultságokkal, amelyeket a backend szolgáltatás kezel.",
      "Statikus jogosultságkezeléssel, ahol a jogosultságokat közvetlenül a smart kontraktba égetjük deployment során."
    ],
    "helyes": "Role-based access control smart kontraktok implementálásával, ahol a szerepköröket és jogosultságokat on-chain tároljuk, és eseményekkel követjük a változásokat."
  },
  {
    "szoveg": "Milyen lépéseket kell végrehajtani egy DApp smart kontraktjának biztonságos deployment folyamata során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Teszt hálózaton való tesztelés, független biztonsági audit elvégzése, fokozatos bevezetés időzárral, monitoring rendszer beállítása és vészleállítási mechanizmus implementálása.",
      "Közvetlenül főhálózatra történő deployment, majd utólagos biztonsági tesztelés és monitoring beállítása.",
      "Lokális tesztelés után azonnali főhálózati deployment, majd dokumentáció készítése és felhasználói visszajelzések gyűjtése."
    ],
    "helyes": "Teszt hálózaton való tesztelés, független biztonsági audit elvégzése, fokozatos bevezetés időzárral, monitoring rendszer beállítása és vészleállítási mechanizmus implementálása."
  },
  {
    "szoveg": "Hogyan implementálná egy DApp frissítési mechanizmusát a legbiztonságosabb módon?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Proxy pattern használata időzárral, többsigneres admin rendszerrel és részletes eseménynaplózással, fokozatos bevezetési stratégiával.",
      "Új kontraktok deploymentje és a régi kontraktok deaktiválása admin kulccsal.",
      "A kontraktok módosítható változóként való implementálása, hogy közvetlenül lehessen frissíteni a kódot."
    ],
    "helyes": "Proxy pattern használata időzárral, többsigneres admin rendszerrel és részletes eseménynaplózással, fokozatos bevezetési stratégiával."
  },
  {
    "szoveg": "Hogyan integrálná leghatékonyabban a különböző blokkláncokat egy cross-chain DApp fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Szabványos bridge protokollok használata, atomic swap mechanizmusok implementálása és eseményvezérelt szinkronizációs rendszer kiépítése a különböző láncok között.",
      "Központi szerver használata a különböző blokkláncok közötti adatszinkronizációhoz.",
      "Minden funkcionalitás egy kiválasztott fő blokkláncra való korlátozása, és a többi lánc figyelmen kívül hagyása."
    ],
    "helyes": "Szabványos bridge protokollok használata, atomic swap mechanizmusok implementálása és eseményvezérelt szinkronizációs rendszer kiépítése a különböző láncok között."
  },
  {
    "szoveg": "Hogyan oldaná meg egy DApp különböző komponenseinek hatékony együttműködését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Event-driven architektúra implementálása, szabványos interfészek használata és aszinkron kommunikációs pattern-ek alkalmazása a komponensek között.",
      "Szoros coupling kialakítása a komponensek között a gyorsabb kommunikáció érdekében.",
      "Minden komponens különálló működésének biztosítása, kommunikáció minimalizálása."
    ],
    "helyes": "Event-driven architektúra implementálása, szabványos interfészek használata és aszinkron kommunikációs pattern-ek alkalmazása a komponensek között."
  },
  {
    "szoveg": "Milyen szempontok alapján ellenőrizné egy DApp smart kontraktjainak biztonságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált biztonsági eszközök futtatása, ismert sebezhetőségek tesztelése, gas optimalizáció ellenőrzése és formális verifikációs módszerek alkalmazása.",
      "Kizárólag manuális kód áttekintés végzése a fejlesztőcsapat által.",
      "Csak a leggyakoribb támadási vektorok ellenőrzése alapszintű tesztekkel."
    ],
    "helyes": "Automatizált biztonsági eszközök futtatása, ismert sebezhetőségek tesztelése, gas optimalizáció ellenőrzése és formális verifikációs módszerek alkalmazása."
  },
  {
    "szoveg": "Hogyan ellenőrizné egy DApp teljesítményét és skálázhatóságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Terheléses tesztek végzése különböző hálózati körülmények között, tranzakciós költségek monitorozása, válaszidők mérése és erőforráshasználat elemzése.",
      "Kizárólag lokális környezetben végzett teljesítménytesztek alapján.",
      "Csak a sikeres tranzakciók számának mérése alapján."
    ],
    "helyes": "Terheléses tesztek végzése különböző hálózati körülmények között, tranzakciós költségek monitorozása, válaszidők mérése és erőforráshasználat elemzése."
  },
  {
    "szoveg": "Hogyan értékelné egy DApp gazdasági modelljének fenntarthatóságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A tokenomikai modell elemzése, tranzakciós költségek vizsgálata, felhasználói aktivitás metrikák értékelése és hosszú távú ösztönzők hatásának vizsgálata.",
      "Kizárólag a token árfolyamának vizsgálata alapján.",
      "Csak a kezdeti befektetők megtérülésének elemzése alapján."
    ],
    "helyes": "A tokenomikai modell elemzése, tranzakciós költségek vizsgálata, felhasználói aktivitás metrikák értékelése és hosszú távú ösztönzők hatásának vizsgálata."
  },
  {
    "szoveg": "Milyen kritériumok alapján értékelné egy DApp decentralizációs szintjét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A node-ok földrajzi eloszlása, validátorok sokfélesége, governance mechanizmusok decentralizáltsága és az infrastruktúra függőségek elemzése alapján.",
      "Kizárólag a smart kontraktok száma alapján.",
      "Csak a token holders számának vizsgálata alapján."
    ],
    "helyes": "A node-ok földrajzi eloszlása, validátorok sokfélesége, governance mechanizmusok decentralizáltsága és az infrastruktúra függőségek elemzése alapján."
  },
  {
    "szoveg": "Egy blockchain hálózatban egy új blokk éppen validálás alatt áll. A blokk tartalmazza az előző blokk hash értékét, időbélyeget, tranzakciós adatokat és egy nonce értéket. Mit jelent ez a folyamat a hálózat működése szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat csomópontjai ellenőrzik és konszenzusra jutnak a blokk érvényességéről, mielőtt az a lánchoz adódna, biztosítva ezzel az adatok integritását és a decentralizált működést.",
      "A központi szerver ellenőrzi a blokkot, majd értesíti a többi csomópontot a blokk érvényességéről, így biztosítva a hálózat konzisztenciáját.",
      "A blokk automatikusan érvényessé válik, amint létrejön, és azonnal hozzáadódik a lánchoz, mivel tartalmazza a szükséges elemeket."
    ],
    "helyes": "A hálózat csomópontjai ellenőrzik és konszenzusra jutnak a blokk érvényességéről, mielőtt az a lánchoz adódna, biztosítva ezzel az adatok integritását és a decentralizált működést."
  },
  {
    "szoveg": "Hogyan értelmezhető a Proof of Stake (PoS) konszenzus algoritmus működése a blockchain hálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A validátorok a letétbe helyezett tokenjeik arányában vehetnek részt a blokkok érvényesítésében, így biztosítva az energiahatékony és gyors tranzakció-feldolgozást.",
      "A validátorok számítási kapacitásuk alapján versenyeznek a blokkok érvényesítéséért, ami nagy energiafogyasztással jár.",
      "A validátorok véletlenszerűen kerülnek kiválasztásra, függetlenül a birtokolt vagy letétbe helyezett tokeneiktől."
    ],
    "helyes": "A validátorok a letétbe helyezett tokenjeik arányában vehetnek részt a blokkok érvényesítésében, így biztosítva az energiahatékony és gyors tranzakció-feldolgozást."
  },
  {
    "szoveg": "Egy vállalat blockchain alapú ellátási lánc rendszert tervez. Hogyan modellezhető a termékek nyomon követése ebben a rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden termékmozgás új tranzakcióként kerül a blokkláncba, tartalmazva a termék azonosítóját, helyzetét, időbélyegét és a kapcsolódó szereplők digitális aláírását.",
      "A termékek mozgását egy központi adatbázisban tárolják, és csak a napi összesítések kerülnek fel a blokkláncra.",
      "A termékek mozgását kizárólag a szállítók dokumentálják saját rendszereikben, és hetente szinkronizálják a blokkláncra."
    ],
    "helyes": "Minden termékmozgás új tranzakcióként kerül a blokkláncba, tartalmazva a termék azonosítóját, helyzetét, időbélyegét és a kapcsolódó szereplők digitális aláírását."
  },
  {
    "szoveg": "Hogyan modellezhető egy decentralizált alkalmazás (DApp) működése a blockchain hálózaton?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazás okosszerződéseken keresztül kommunikál a blokklánccal, ahol a felhasználói műveletek tranzakciókként kerülnek végrehajtásra és validálásra a hálózat által.",
      "Az alkalmazás közvetlenül módosítja a blockchain adatait egy API-n keresztül, megkerülve a konszenzus mechanizmust.",
      "Az alkalmazás csak olvasási műveleteket végez a blokkláncon, minden írási műveletet egy központi szerver hajt végre."
    ],
    "helyes": "Az alkalmazás okosszerződéseken keresztül kommunikál a blokklánccal, ahol a felhasználói műveletek tranzakciókként kerülnek végrehajtásra és validálásra a hálózat által."
  },
  {
    "szoveg": "Hogyan használható fel a blockchain technológia egy digitális szavazási rendszer implementálásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szavazatok tranzakciókként kerülnek rögzítésre, ahol minden szavazó egyedi kulccsal rendelkezik, és a szavazatok visszakövethetők, de anonimek maradnak.",
      "A szavazatokat egy központi szerverbe gyűjtik, majd a végeredményt tárolják csak a blokkláncon.",
      "A szavazók közvetlenül módosítják a blockchain adatbázist, ami automatikusan összesíti a szavazatokat."
    ],
    "helyes": "A szavazatok tranzakciókként kerülnek rögzítésre, ahol minden szavazó egyedi kulccsal rendelkezik, és a szavazatok visszakövethetők, de anonimek maradnak."
  },
  {
    "szoveg": "Hogyan használható fel a blockchain egy decentralizált pénzügyi (DeFi) szolgáltatás létrehozásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Okosszerződések implementálásával, amelyek automatikusan végrehajtják a pénzügyi műveleteket a előre meghatározott feltételek teljesülésekor, központi közvetítő nélkül.",
      "A tranzakciók rögzítésével egy központi adatbázisban, amit később szinkronizálnak a blokkláncra.",
      "A pénzügyi műveletek manuális jóváhagyásával egy kijelölt hatóság által, amit aztán a blockchain rögzít."
    ],
    "helyes": "Okosszerződések implementálásával, amelyek automatikusan végrehajtják a pénzügyi műveleteket a előre meghatározott feltételek teljesülésekor, központi közvetítő nélkül."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy blockchain projekt skálázhatósága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A másodpercenkénti tranzakciószám, az energiahatékonyság, a validálási sebesség és a hálózati terhelés egyensúlya alapján.",
      "Kizárólag a másodpercenkénti tranzakciószám alapján, függetlenül más tényezőktől.",
      "Csak a hálózatban résztvevő csomópontok száma alapján."
    ],
    "helyes": "A másodpercenkénti tranzakciószám, az energiahatékonyság, a validálási sebesség és a hálózati terhelés egyensúlya alapján."
  },
  {
    "szoveg": "Hogyan ítélhető meg egy konszenzus algoritmus hatékonysága a blockchain hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonság, energiahatékonyság, tranzakció-feldolgozási sebesség és decentralizáltság mértékének együttes értékelésével.",
      "Kizárólag a tranzakció-feldolgozási sebesség alapján.",
      "Csak az energiafogyasztás mértéke alapján."
    ],
    "helyes": "A biztonság, energiahatékonyság, tranzakció-feldolgozási sebesség és decentralizáltság mértékének együttes értékelésével."
  },
  {
    "szoveg": "Egy nagyvállalat különböző országokban lévő üzleteiben szeretné a készletnyilvántartást és árképzést optimalizálni. A rendszernek valós időben kell működnie, és offline esetben is biztosítania kell az alapvető funkciókat. Melyik számítási paradigma a legalkalmasabb erre a célra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Edge Computing, mert lehetővé teszi a helyi adatfeldolgozást, alacsony késleltetést biztosít, és offline működésre is képes az egyes üzletekben.",
      "Serverless Computing, mert automatikusan skálázódik és csak a tényleges használat után kell fizetni, így költséghatékony megoldást nyújt.",
      "Mikroszolgáltatások, mert független szolgáltatásokra bontható a rendszer, és minden üzlet saját adatbázissal rendelkezhet."
    ],
    "helyes": "Edge Computing, mert lehetővé teszi a helyi adatfeldolgozást, alacsony késleltetést biztosít, és offline működésre is képes az egyes üzletekben."
  },
  {
    "szoveg": "Egy startup cég olyan rendszert fejleszt, amely nagy mennyiségű képet dolgoz fel és elemez mesterséges intelligencia segítségével. A terhelés erősen változó, és fontos a költséghatékonyság. Melyik számítási paradigma a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Serverless Computing, mert automatikusan skálázódik a terheléshez, és csak a tényleges feldolgozásért kell fizetni, nincs állandó infrastruktúra költség.",
      "Edge Computing, mert a képfeldolgozást közvetlenül a felhasználók eszközein végezheti el, csökkentve a központi szerverek terhelését.",
      "Mikroszolgáltatások, mert külön szolgáltatásként lehet kezelni a képfeltöltést, feldolgozást és elemzést, így jobban skálázható a rendszer."
    ],
    "helyes": "Serverless Computing, mert automatikusan skálázódik a terheléshez, és csak a tényleges feldolgozásért kell fizetni, nincs állandó infrastruktúra költség."
  },
  {
    "szoveg": "Hogyan értelmezhető a Serverless Computing 'NoOps' megközelítése a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fejlesztők teljes mértékben a kód írására koncentrálhatnak, mivel az infrastruktúra kezelését, skálázását és karbantartását a szolgáltató végzi automatikusan.",
      "A rendszer működéséhez egyáltalán nem szükséges üzemeltetési feladatokat végezni, minden folyamat teljesen automatizált.",
      "Az alkalmazás működéséhez nem szükséges szerver, minden művelet közvetlenül a felhasználó eszközén fut."
    ],
    "helyes": "A fejlesztők teljes mértékben a kód írására koncentrálhatnak, mivel az infrastruktúra kezelését, skálázását és karbantartását a szolgáltató végzi automatikusan."
  },
  {
    "szoveg": "Mit jelent az Edge Computing kontextusában a 'földrajzilag elosztott skálázhatóság'?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatfeldolgozási kapacitás növelése új edge eszközök telepítésével különböző földrajzi helyeken, ami csökkenti a késleltetést és optimalizálja az erőforrás-kihasználást.",
      "A központi szerverek számának növelése különböző földrajzi régiókban a jobb elérhetőség érdekében.",
      "A felhő szolgáltatások replikálása több adatközpontban a redundancia növelése érdekében."
    ],
    "helyes": "Az adatfeldolgozási kapacitás növelése új edge eszközök telepítésével különböző földrajzi helyeken, ami csökkenti a késleltetést és optimalizálja az erőforrás-kihasználást."
  },
  {
    "szoveg": "Hogyan modellezhető egy modern videóstreaming szolgáltatás a különböző számítási paradigmák kombinálásával?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Edge Computing a tartalom gyorsítótárazásához és helyi továbbításához, Mikroszolgáltatások a felhasználói profilok és ajánlások kezeléséhez, Serverless a videók feldolgozásához és kódolásához.",
      "Kizárólag Mikroszolgáltatások használata, ahol minden funkció (streaming, felhasználókezelés, ajánlórendszer) külön szolgáltatásként működik.",
      "Tisztán Edge Computing alapú megoldás, ahol minden feldolgozás és tárolás a felhasználókhoz közeli eszközökön történik."
    ],
    "helyes": "Edge Computing a tartalom gyorsítótárazásához és helyi továbbításához, Mikroszolgáltatások a felhasználói profilok és ajánlások kezeléséhez, Serverless a videók feldolgozásához és kódolásához."
  },
  {
    "szoveg": "Hogyan modellezhető egy IoT alapú okosváros közlekedési rendszere a modern számítási paradigmák segítségével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Edge Computing az érzékelők adatainak valós idejű feldolgozásához, Serverless a ritkább elemzésekhez, Mikroszolgáltatások a komplex forgalomirányítási logikához.",
      "Kizárólag Serverless megoldások használata minden adatfeldolgozási és irányítási feladatra.",
      "Tisztán Mikroszolgáltatás alapú architektúra, ahol minden szenzor külön szolgáltatásként működik."
    ],
    "helyes": "Edge Computing az érzékelők adatainak valós idejű feldolgozásához, Serverless a ritkább elemzésekhez, Mikroszolgáltatások a komplex forgalomirányítási logikához."
  },
  {
    "szoveg": "Milyen szempontok alapján kell megítélni egy új fejlesztési projekt esetén a megfelelő számítási paradigma kiválasztását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A projekt mérete, komplexitása, a fejlesztőcsapat képességei, a teljesítményi követelmények és a rendelkezésre álló erőforrások együttes figyelembevételével.",
      "Kizárólag a költséghatékonysági szempontok alapján, mivel ez határozza meg leginkább a projekt sikerességét.",
      "Csak a technológiai szempontok alapján, mivel ezek határozzák meg a rendszer működőképességét."
    ],
    "helyes": "A projekt mérete, komplexitása, a fejlesztőcsapat képességei, a teljesítményi követelmények és a rendelkezésre álló erőforrások együttes figyelembevételével."
  },
  {
    "szoveg": "Hogyan kell megítélni a vendor lock-in kockázatát a különböző számítási paradigmák esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Serverless Computing esetén a legnagyobb a kockázat a szoros szolgáltatói integráció miatt, míg a Mikroszolgáltatások és Edge Computing esetén ez jobban kezelhető a szabványos interfészek használatával.",
      "Minden paradigma esetén ugyanakkora a vendor lock-in kockázata, mivel mindegyik használ valamilyen szolgáltatói megoldást.",
      "A vendor lock-in csak az Edge Computing esetén jelent kockázatot a speciális hardverkövetelmények miatt."
    ],
    "helyes": "A Serverless Computing esetén a legnagyobb a kockázat a szoros szolgáltatói integráció miatt, míg a Mikroszolgáltatások és Edge Computing esetén ez jobban kezelhető a szabványos interfészek használatával."
  },
  {
    "szoveg": "Egy vállalat mikroszolgáltatás-alapú architektúrára való átállást tervez. Hogyan értelmezhető ez a változás a fejlesztési folyamat szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatások független fejlesztése és telepítése válik lehetővé, ami párhuzamos fejlesztést és gyorsabb kiadási ciklusokat eredményez.",
      "A teljes alkalmazást egyben kell fejleszteni és telepíteni, de a szolgáltatások között tisztább interfészek alakulnak ki.",
      "A fejlesztési folyamat lelassul, mivel minden szolgáltatás változtatása esetén az összes többi szolgáltatást is újra kell tesztelni."
    ],
    "helyes": "A szolgáltatások független fejlesztése és telepítése válik lehetővé, ami párhuzamos fejlesztést és gyorsabb kiadási ciklusokat eredményez."
  },
  {
    "szoveg": "Hogyan értelmezhető a 'Security by Design' elv a modern alkalmazásfejlesztésben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonság az architektúra szerves része, amit már a tervezési fázisban figyelembe vesznek és beépítenek a fejlesztési folyamatba.",
      "A biztonsági tesztelést a fejlesztés befejezése után, külön fázisban végzik el szakértők.",
      "A biztonságért kizárólag a biztonsági csapat felel, függetlenül a fejlesztési folyamattól."
    ],
    "helyes": "A biztonság az architektúra szerves része, amit már a tervezési fázisban figyelembe vesznek és beépítenek a fejlesztési folyamatba."
  },
  {
    "szoveg": "Milyen változások várhatók a fejlesztői kompetenciákban a következő 5 évben a modern architektúrák térnyerésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fejlesztőknek egyre inkább érteniük kell a felhő-natív technológiákhoz, automatizációhoz és DevOps gyakorlatokhoz a hagyományos programozási készségek mellett.",
      "A fejlesztőknek kizárólag a programozási nyelvekre kell koncentrálniuk, minden más feladatot specializált csapatok végeznek.",
      "A fejlesztői szerepkör változatlan marad, csak az üzemeltetési csapat feladatköre bővül."
    ],
    "helyes": "A fejlesztőknek egyre inkább érteniük kell a felhő-natív technológiákhoz, automatizációhoz és DevOps gyakorlatokhoz a hagyományos programozási készségek mellett."
  },
  {
    "szoveg": "Hogyan befolyásolja a konténerizáció elterjedése az alkalmazások üzemeltetését a jövőben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az üzemeltetés automatizáltabbá és konzisztensebbé válik, mivel a konténerek standardizált környezetet biztosítanak minden alkalmazás számára.",
      "Az üzemeltetés nehezebbé válik, mert minden konténert egyedileg kell konfigurálni és kezelni.",
      "A konténerizáció nem befolyásolja jelentősen az üzemeltetést, csak a fejlesztést egyszerűsíti."
    ],
    "helyes": "Az üzemeltetés automatizáltabbá és konzisztensebbé válik, mivel a konténerek standardizált környezetet biztosítanak minden alkalmazás számára."
  },
  {
    "szoveg": "Hogyan modellezhető egy modern, felhő-natív alkalmazás automatikus skálázási mechanizmusa?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Terhelésfigyelés alapján automatikusan új konténer példányok indítása vagy leállítása, horizontális skálázással a forgalom függvényében.",
      "Fix számú szerver manuális konfigurálása a várható maximális terhelés alapján.",
      "Vertikális skálázás alkalmazása, ahol a meglévő szerverek erőforrásait növeljük a terhelés függvényében."
    ],
    "helyes": "Terhelésfigyelés alapján automatikusan új konténer példányok indítása vagy leállítása, horizontális skálázással a forgalom függvényében."
  },
  {
    "szoveg": "Hogyan modellezhető egy mikroszolgáltatás-alapú rendszer hibakezelési stratégiája?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Circuit breaker mintával, visszanyomásos vezérléssel és fallback mechanizmusokkal, amelyek automatikusan kezelik a szolgáltatások közötti hibákat.",
      "Központi hibanaplózással és manuális beavatkozással a hibák észlelésekor.",
      "A hibás szolgáltatás azonnali újraindításával, további logika nélkül."
    ],
    "helyes": "Circuit breaker mintával, visszanyomásos vezérléssel és fallback mechanizmusokkal, amelyek automatikusan kezelik a szolgáltatások közötti hibákat."
  },
  {
    "szoveg": "Hogyan ítélhető meg a szervernélküli (serverless) architektúra alkalmazhatósága egy nagyvállalati környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megfelelő eseményvezérelt mikroszolgáltatásokhoz és rövid futásidejű feladatokhoz, de nem minden típusú alkalmazáshoz alkalmas a költségmodell és a teljesítménykorlátok miatt.",
      "Minden típusú alkalmazás esetében a legjobb választás, mivel minimalizálja az üzemeltetési költségeket.",
      "Kizárólag kis méretű, hobbi projektekhez alkalmas, vállalati környezetben nem használható."
    ],
    "helyes": "Megfelelő eseményvezérelt mikroszolgáltatásokhoz és rövid futásidejű feladatokhoz, de nem minden típusú alkalmazáshoz alkalmas a költségmodell és a teljesítménykorlátok miatt."
  },
  {
    "szoveg": "Hogyan ítélhető meg a DevOps gyakorlatok bevezetésének hatékonysága egy tradicionális szervezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A bevezetés sikere főként a szervezeti kultúra változási képességén és a folyamatok fokozatos átalakításán múlik, nem csak technológiai kérdés.",
      "A megfelelő eszközök bevezetése automatikusan biztosítja a sikeres átállást, függetlenül a szervezeti kultúrától.",
      "A DevOps gyakorlatok bevezetése csak új szervezeteknél lehet sikeres, meglévő cégeknél nem érdemes próbálkozni vele."
    ],
    "helyes": "A bevezetés sikere főként a szervezeti kultúra változási képességén és a folyamatok fokozatos átalakításán múlik, nem csak technológiai kérdés."
  },
  {
    "szoveg": "Egy elosztott rendszerben a mikroszolgáltatások közötti kommunikáció tervezésekor milyen következményekkel jár az aszinkron kommunikációs modell választása?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Jobb skálázhatóságot és rugalmasságot biztosít, mivel a szolgáltatások nem blokkolódnak a válaszra várva, viszont komplexebb hibakezelést és állapotkövetést igényel.",
      "Egyszerűbb implementációt tesz lehetővé, mivel a kérés-válasz folyamat azonnal lezajlik, de nagyobb erőforrásigénnyel jár a várakozó kapcsolatok miatt.",
      "Csökkenti a rendszer komplexitását és a hálózati forgalmat, viszont nem teszi lehetővé a szolgáltatások közötti megbízható kommunikációt."
    ],
    "helyes": "Jobb skálázhatóságot és rugalmasságot biztosít, mivel a szolgáltatások nem blokkolódnak a válaszra várva, viszont komplexebb hibakezelést és állapotkövetést igényel."
  },
  {
    "szoveg": "Hogyan értelmezhető az állapotmentesség (statelessness) koncepciója egy elosztott rendszer kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatások nem tárolnak session-specifikus információkat, minden kérésnek tartalmaznia kell a feldolgozásához szükséges összes adatot, ami jobb skálázhatóságot eredményez.",
      "A rendszer komponensei nem kommunikálnak egymással közvetlenül, minden interakció egy központi állapotkezelőn keresztül történik.",
      "A szolgáltatások nem tárolnak semmilyen adatot, minden információt minden alkalommal újra kell számolniuk a bejövő kérések alapján."
    ],
    "helyes": "A szolgáltatások nem tárolnak session-specifikus információkat, minden kérésnek tartalmaznia kell a feldolgozásához szükséges összes adatot, ami jobb skálázhatóságot eredményez."
  },
  {
    "szoveg": "Egy nagy forgalmú e-kereskedelmi rendszer tervezésekor milyen architektúrális megoldással biztosítható a rendszer rugalmas skálázhatósága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mikroszolgáltatás-alapú architektúra bevezetése, ahol az egyes funkciók (pl. kosárkezelés, rendelés, készletkezelés) külön szolgáltatásokként futnak, független skálázási lehetőséggel.",
      "Monolitikus architektúra használata több szerverrel, ahol minden szerver a teljes alkalmazást futtatja és egy terheléselosztó osztja el a forgalmat.",
      "Hibrid architektúra, ahol a kritikus komponensek egy központi szerveren futnak, míg a kevésbé fontos funkciók különálló szervereken."
    ],
    "helyes": "Mikroszolgáltatás-alapú architektúra bevezetése, ahol az egyes funkciók (pl. kosárkezelés, rendelés, készletkezelés) külön szolgáltatásokként futnak, független skálázási lehetőséggel."
  },
  {
    "szoveg": "Milyen architektúrális modellt érdemes alkalmazni egy olyan elosztott rendszerben, ahol kritikus követelmény a valós idejű adatkonzisztencia?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elsődleges-másodlagos (primary-secondary) replikációs modell szinkron replikációval, ahol az írási műveletek csak az elsődleges példányon történhetnek, és a változások azonnal szinkronizálódnak.",
      "Peer-to-peer replikációs modell, ahol minden csomópont egyenrangú, és a változások aszinkron módon terjednek a rendszerben.",
      "Multi-master replikációs modell időbélyeg-alapú konfliktuskezeléssel, ahol bármely csomóponton történhet írási művelet."
    ],
    "helyes": "Elsődleges-másodlagos (primary-secondary) replikációs modell szinkron replikációval, ahol az írási műveletek csak az elsődleges példányon történhetnek, és a változások azonnal szinkronizálódnak."
  },
  {
    "szoveg": "Hogyan implementálná egy elosztott rendszer hibatűrő cache rétegét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több cache szerver használata Redis Sentinel vagy hasonló megoldással, ami automatikus failover-t biztosít, valamint konzisztens hash-elést a cache kulcsok elosztására.",
      "Egyetlen nagy teljesítményű cache szerver használata redundáns hálózati kapcsolatokkal és rendszeres biztonsági mentésekkel.",
      "Lokális cache használata minden alkalmazás szerveren, időszakos szinkronizációval a szerverek között."
    ],
    "helyes": "Több cache szerver használata Redis Sentinel vagy hasonló megoldással, ami automatikus failover-t biztosít, valamint konzisztens hash-elést a cache kulcsok elosztására."
  },
  {
    "szoveg": "Milyen implementációs stratégiát alkalmazna egy elosztott rendszer naplózási alrendszerének kialakításakor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Aszinkron naplózás egy központi log aggregátorba (pl. ELK stack), strukturált log formátummal és korrelációs ID-k használatával a kérések követéséhez.",
      "Szinkron naplózás közvetlenül egy központi adatbázisba, ahol minden szolgáltatás közvetlenül írja a saját naplóbejegyzéseit.",
      "Lokális fájlrendszerre történő naplózás minden szolgáltatásnál, időszakos manuális összegyűjtéssel és elemzéssel."
    ],
    "helyes": "Aszinkron naplózás egy központi log aggregátorba (pl. ELK stack), strukturált log formátummal és korrelációs ID-k használatával a kérések követéséhez."
  },
  {
    "szoveg": "Hogyan értékelné egy elosztott rendszer skálázhatóságát a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Terheléstesztek végzésével különböző forgalmi mintákkal, a válaszidők, erőforráshasználat és költségek mérésével, valamint a szűk keresztmetszetek azonosításával.",
      "A kódbázis méretének és komplexitásának elemzésével, valamint a fejlesztői visszajelzések alapján történő értékeléssel.",
      "A rendszer dokumentációjának és architektúrális terveinek áttekintésével, elméleti számítások alapján."
    ],
    "helyes": "Terheléstesztek végzésével különböző forgalmi mintákkal, a válaszidők, erőforráshasználat és költségek mérésével, valamint a szűk keresztmetszetek azonosításával."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélné meg egy elosztott rendszer biztonsági megoldásainak megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonsági kontrollok többrétegűsége, penetrációs tesztek eredményei, megfelelés a biztonsági szabványoknak, és a valós incidensekre való reagálási képesség alapján.",
      "Kizárólag a legújabb biztonsági technológiák implementálásának megléte alapján.",
      "A rendszerben alkalmazott titkosítási algoritmusok erőssége és a tűzfal konfigurációk összetettsége alapján."
    ],
    "helyes": "A biztonsági kontrollok többrétegűsége, penetrációs tesztek eredményei, megfelelés a biztonsági szabványoknak, és a valós incidensekre való reagálási képesség alapján."
  },
  {
    "szoveg": "Egy nagyvállalat IoT szenzorokat telepít a gyártósorára a hatékonyság növelése érdekében. Hogyan értelmezhető az edge computing szerepe ebben a környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az edge computing lehetővé teszi, hogy a szenzoradatok feldolgozása közvetlenül a gyártósor közelében történjen, csökkentve a késleltetést és a hálózati terhelést, miközben csak a releváns információk kerülnek továbbításra a központi rendszerbe.",
      "Az edge computing biztosítja, hogy minden szenzor adata közvetlenül a felhőbe kerüljön, ahol központilag történik az összes adat feldolgozása és elemzése, majd az eredmények visszajuttatása a gyártósorra.",
      "Az edge computing kizárólag a szenzorok közötti kommunikációt biztosítja, az adatok feldolgozása és elemzése mindig a vállalat központi szerverein történik a megfelelő biztonság érdekében."
    ],
    "helyes": "Az edge computing lehetővé teszi, hogy a szenzoradatok feldolgozása közvetlenül a gyártósor közelében történjen, csökkentve a késleltetést és a hálózati terhelést, miközben csak a releváns információk kerülnek továbbításra a központi rendszerbe."
  },
  {
    "szoveg": "Hogyan értelmezhető a mesterséges intelligencia szerepe a modern hálózatok forgalomirányításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A mesterséges intelligencia folyamatosan elemzi a hálózati forgalmat, előrejelzi a várható terhelést, és dinamikusan optimalizálja az útvonalakat, biztosítva a hálózati erőforrások hatékony kihasználását.",
      "A mesterséges intelligencia kizárólag a hálózati hibák utólagos elemzésére szolgál, és nem vesz részt aktívan a forgalomirányítási döntésekben.",
      "A mesterséges intelligencia csak a hálózati forgalom naplózását végzi, és nem képes beavatkozni a forgalomirányítási folyamatokba."
    ],
    "helyes": "A mesterséges intelligencia folyamatosan elemzi a hálózati forgalmat, előrejelzi a várható terhelést, és dinamikusan optimalizálja az útvonalakat, biztosítva a hálózati erőforrások hatékony kihasználását."
  },
  {
    "szoveg": "Milyen változások várhatók a hálózati biztonság területén a kvantumszámítógépek megjelenésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jelenlegi titkosítási módszerek sebezhetővé válnak, szükségessé téve a kvantumrezisztens titkosítási megoldások és új biztonsági protokollok kifejlesztését és implementálását.",
      "A meglévő titkosítási módszerek továbbra is megfelelő védelmet nyújtanak, csak nagyobb kulcsméreteket kell használni a biztonság fenntartásához.",
      "A kvantumszámítógépek megjelenése nem befolyásolja a hálózati biztonságot, mivel csak specifikus matematikai problémák megoldására alkalmasak."
    ],
    "helyes": "A jelenlegi titkosítási módszerek sebezhetővé válnak, szükségessé téve a kvantumrezisztens titkosítási megoldások és új biztonsági protokollok kifejlesztését és implementálását."
  },
  {
    "szoveg": "Hogyan befolyásolja az IoT eszközök tömeges elterjedése a jövő hálózatainak architektúráját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati architektúra decentralizáltabbá válik, előtérbe kerül az edge computing, és új protokollok jelennek meg az energiahatékony, kis késleltetésű kommunikáció biztosítására.",
      "A hálózati architektúra továbbra is centralizált marad, csak nagyobb kapacitású központi szerverekre lesz szükség az IoT eszközök kiszolgálásához.",
      "Az IoT eszközök nem befolyásolják jelentősen a hálózati architektúrát, csak a végpontok száma növekszik meg."
    ],
    "helyes": "A hálózati architektúra decentralizáltabbá válik, előtérbe kerül az edge computing, és új protokollok jelennek meg az energiahatékony, kis késleltetésű kommunikáció biztosítására."
  },
  {
    "szoveg": "Hogyan modellezhető egy öngyógyító hálózat működése az AI/ML technológiák felhasználásával?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AI folyamatosan monitorozza a hálózati metrikákat, anomáliákat detektál, előrejelzi a potenciális hibákat, és automatikusan végrehajtja a szükséges korrekciókat, mindezt egy zárt visszacsatolási hurokban.",
      "Az AI csak a már bekövetkezett hibákat észleli, és értesíti a rendszergazdát a szükséges beavatkozásról, de nem végez automatikus javításokat.",
      "Az AI kizárólag a hálózati forgalom mintázatait elemzi, de nem vesz részt a hibajavítási folyamatokban."
    ],
    "helyes": "Az AI folyamatosan monitorozza a hálózati metrikákat, anomáliákat detektál, előrejelzi a potenciális hibákat, és automatikusan végrehajtja a szükséges korrekciókat, mindezt egy zárt visszacsatolási hurokban."
  },
  {
    "szoveg": "Milyen modellt alkothatunk az IT és OT konvergenciájának megvalósítására egy modern gyártási környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy integrált rendszer, ahol az IT infrastruktúra és az operatív technológiák közös platformon működnek, valós idejű adatcserével, közös biztonsági protokollokkal és egységes irányítással.",
      "Két független rendszer, amely alkalmanként adatokat cserél, de megőrzi teljes függetlenségét mind működési, mind biztonsági szempontból.",
      "Az IT rendszerek teljes mértékben átveszik az OT funkcióit, megszüntetve a különálló operatív technológiákat."
    ],
    "helyes": "Egy integrált rendszer, ahol az IT infrastruktúra és az operatív technológiák közös platformon működnek, valós idejű adatcserével, közös biztonsági protokollokkal és egységes irányítással."
  },
  {
    "szoveg": "Hogyan ítélhető meg a kvantumkommunikáció gyakorlati alkalmazhatósága a jelenlegi hálózati infrastruktúrában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kvantumkommunikáció jelenleg korlátozott gyakorlati alkalmazhatósággal bír a technológiai kihívások és infrastrukturális követelmények miatt, de specifikus biztonsági alkalmazásokban már használható.",
      "A kvantumkommunikáció azonnal és teljes mértékben helyettesítheti a jelenlegi kommunikációs infrastruktúrát minden alkalmazási területen.",
      "A kvantumkommunikáció csak elméleti jelentőséggel bír, gyakorlati alkalmazása a közeljövőben nem várható."
    ],
    "helyes": "A kvantumkommunikáció jelenleg korlátozott gyakorlati alkalmazhatósággal bír a technológiai kihívások és infrastrukturális követelmények miatt, de specifikus biztonsági alkalmazásokban már használható."
  },
  {
    "szoveg": "Hogyan ítélhető meg az AI/ML alapú hálózatmenedzsment megbízhatósága kritikus infrastruktúrák esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az AI/ML alapú rendszerek megfelelő teszteléssel és emberi felügyelettel kombinálva alkalmazhatók, de kritikus döntéseknél szükséges a redundáns ellenőrzési mechanizmusok és visszaállítási lehetőségek biztosítása.",
      "Az AI/ML rendszerek teljes mértékben megbízhatóak és emberi felügyelet nélkül is alkalmazhatók minden kritikus infrastruktúrában.",
      "Az AI/ML rendszerek túl kockázatosak a kritikus infrastruktúrákban, ezért kizárólag hagyományos menedzsment módszerek alkalmazhatók."
    ],
    "helyes": "Az AI/ML alapú rendszerek megfelelő teszteléssel és emberi felügyelettel kombinálva alkalmazhatók, de kritikus döntéseknél szükséges a redundáns ellenőrzési mechanizmusok és visszaállítási lehetőségek biztosítása."
  },
  {
    "szoveg": "Az MQTT protokoll működésében mi a broker szerepe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A broker egy központi közvetítő komponens, amely fogadja a publikált üzeneteket és továbbítja azokat a megfelelő feliratkozott klienseknek a témakörök alapján.",
      "A broker egy végponti eszköz, amely csak üzenetek fogadására képes, és azokat lokálisan tárolja további feldolgozásra.",
      "A broker egy hálózati protokoll konverter, amely az MQTT üzeneteket más protokollokra (például HTTP) alakítja át."
    ],
    "helyes": "A broker egy központi közvetítő komponens, amely fogadja a publikált üzeneteket és továbbítja azokat a megfelelő feliratkozott klienseknek a témakörök alapján."
  },
  {
    "szoveg": "A CoAP protokoll mely üzenettípusa igényel kötelezően nyugtázást a fogadó féltől?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Confirmable (CON) üzenet, amely explicit nyugtázást (ACK) vár a megbízható kézbesítés érdekében.",
      "A Non-confirmable (NON) üzenet, amely alapértelmezetten nyugtázást igényel a fogadó féltől.",
      "Az Acknowledgement (ACK) üzenet, amelyre a fogadónak egy újabb nyugtával kell válaszolnia."
    ],
    "helyes": "A Confirmable (CON) üzenet, amely explicit nyugtázást (ACK) vár a megbízható kézbesítés érdekében."
  },
  {
    "szoveg": "Hogyan értelmezhető az MQTT protokoll QoS 1 (legalább egyszer) szolgáltatási szintje?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az üzenet garantáltan eljut a címzetthez legalább egyszer, a küldő nyugtát vár, és újraküldi az üzenetet, ha nem kap visszajelzést, így előfordulhat duplikáció.",
      "Az üzenet pontosan egyszer jut el a címzetthez, a protokoll automatikusan kiszűri a duplikációkat és garantálja az egyszeri kézbesítést.",
      "Az üzenet legfeljebb egyszer kerül kézbesítésre, nincs nyugtázás és újraküldés, így az üzenet elveszhet a kommunikáció során."
    ],
    "helyes": "Az üzenet garantáltan eljut a címzetthez legalább egyszer, a küldő nyugtát vár, és újraküldi az üzenetet, ha nem kap visszajelzést, így előfordulhat duplikáció."
  },
  {
    "szoveg": "Mit jelent a CoAP protokoll REST alapú működési modellje a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az erőforrások URI-kon keresztül érhetők el, és a protokoll a HTTP-hez hasonló műveleteket (GET, POST, PUT, DELETE) használ az erőforrások kezelésére.",
      "Az eszközök közötti kommunikáció kizárólag publish/subscribe modellen alapul, ahol az erőforrások témakörökként vannak definiálva.",
      "Az eszközök csak előre definiált parancsokat küldhetnek egymásnak, és nem kezelhetnek dinamikusan erőforrásokat."
    ],
    "helyes": "Az erőforrások URI-kon keresztül érhetők el, és a protokoll a HTTP-hez hasonló műveleteket (GET, POST, PUT, DELETE) használ az erőforrások kezelésére."
  },
  {
    "szoveg": "Milyen alapvető különbség van az MQTT és CoAP protokollok kommunikációs modellje között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az MQTT publish/subscribe modellt használ központi brokerrel, míg a CoAP kérés-válasz alapú közvetlen kommunikációt alkalmaz REST elvek szerint.",
      "Az MQTT kérés-válasz alapú protokoll központi szerver nélkül, míg a CoAP publish/subscribe modellt használ központi brokerrel.",
      "Mindkét protokoll azonos kommunikációs modellt használ, csak a szállítási rétegbeli protokolljuk különbözik."
    ],
    "helyes": "Az MQTT publish/subscribe modellt használ központi brokerrel, míg a CoAP kérés-válasz alapú közvetlen kommunikációt alkalmaz REST elvek szerint."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz az MQTT és CoAP protokollok megbízhatósága és hatékonysága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az MQTT TCP alapú és magasabb megbízhatóságú, de nagyobb overhead-del, míg a CoAP UDP alapú, gyorsabb, de kevésbé megbízható átvitelt biztosít.",
      "A CoAP TCP alapú és magasabb megbízhatóságú, míg az MQTT UDP alapú és gyorsabb, de kevésbé megbízható átvitelt biztosít.",
      "Mindkét protokoll azonos megbízhatósági szintet és hatékonyságot biztosít, mivel ugyanazt a szállítási protokollt használják."
    ],
    "helyes": "Az MQTT TCP alapú és magasabb megbízhatóságú, de nagyobb overhead-del, míg a CoAP UDP alapú, gyorsabb, de kevésbé megbízható átvitelt biztosít."
  },
  {
    "szoveg": "Egy IoT alapú okosotthon rendszer fejlesztése során milyen adatkezelési megoldást választana a különböző szenzorok által generált adatok tárolására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Idősor-adatbázist (pl. InfluxDB), amely optimalizált a rendszeresen érkező szenzor adatok tárolására és lekérdezésére, valamint hatékonyan kezeli az időbélyegekkel ellátott méréseket.",
      "Dokumentum alapú adatbázist (pl. MongoDB), amely rugalmas sémakezelést biztosít, de nem optimalizált az idősorok kezelésére és a nagy mennyiségű szenzor adat tárolására.",
      "Relációs adatbázist (pl. MySQL), amely erős konzisztenciát biztosít, de nem skálázódik jól a folyamatosan érkező szenzor adatok esetén és nem optimalizált idősorok kezelésére."
    ],
    "helyes": "Idősor-adatbázist (pl. InfluxDB), amely optimalizált a rendszeresen érkező szenzor adatok tárolására és lekérdezésére, valamint hatékonyan kezeli az időbélyegekkel ellátott méréseket."
  },
  {
    "szoveg": "Egy AI-alapú prediktív karbantartási rendszer fejlesztése során hogyan implementálná a modell monitorozását és frissítését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált teljesítménymetrika követéssel és visszacsatolási mechanizmussal, amely figyeli a modell pontosságát, és szükség esetén újratanítást kezdeményez a friss adatokkal.",
      "Havi rendszerességű manuális ellenőrzéssel, ahol egy szakértő átnézi a modell előrejelzéseit és dönt az esetleges újratanításról.",
      "Fix időközönként történő automatikus újratanítással, függetlenül a modell aktuális teljesítményétől és a rendelkezésre álló új adatok mennyiségétől."
    ],
    "helyes": "Automatizált teljesítménymetrika követéssel és visszacsatolási mechanizmussal, amely figyeli a modell pontosságát, és szükség esetén újratanítást kezdeményez a friss adatokkal."
  },
  {
    "szoveg": "Hogyan valósítaná meg egy IoT eszközökből álló hálózat biztonságos kommunikációját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TLS titkosítással védett MQTT protokoll használatával, kétirányú autentikációval és hozzáférés-szabályozással, valamint rendszeres biztonsági auditok implementálásával.",
      "Egyszerű HTTP protokoll használatával, alapszintű felhasználónév/jelszó autentikációval, titkosítás nélkül a jobb teljesítmény érdekében.",
      "Saját fejlesztésű kommunikációs protokoll implementálásával, amely egyedi titkosítási módszert használ a biztonság növelése érdekében."
    ],
    "helyes": "TLS titkosítással védett MQTT protokoll használatával, kétirányú autentikációval és hozzáférés-szabályozással, valamint rendszeres biztonsági auditok implementálásával."
  },
  {
    "szoveg": "Milyen módon implementálná egy AI-alapú képfelismerő rendszer modell-frissítési mechanizmusát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Canary deployment alkalmazásával, ahol az új modell először csak a forgalom kis részén fut, és csak sikeres validáció után kerül teljes bevezetésre, közben folyamatos teljesítménymonitorozással.",
      "Az új modell azonnali, teljes körű bevezetésével, a régi modell egyidejű leállításával, hogy minimalizáljuk az átállási időt.",
      "Két modell párhuzamos futtatásával hosszú távon, ahol a felhasználók választhatják ki, melyik modellt szeretnék használni."
    ],
    "helyes": "Canary deployment alkalmazásával, ahol az új modell először csak a forgalom kis részén fut, és csak sikeres validáció után kerül teljes bevezetésre, közben folyamatos teljesítménymonitorozással."
  },
  {
    "szoveg": "Hogyan integrálná egy IoT rendszer különböző komponenseit egy egységes monitoring megoldásba?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Központi monitoring rendszer kialakításával, amely egyesíti az eszközök állapotát, a hálózati teljesítményt, az alkalmazás metrikákat és a biztonsági eseményeket, automatizált riasztásokkal és dashboardokkal.",
      "Különálló monitoring eszközök használatával minden komponenshez, ahol a rendszergazdák manuálisan követik az egyes részrendszerek állapotát.",
      "Egyszerű log fájl alapú monitorozással, ahol az események naplózásra kerülnek, és szükség esetén manuálisan elemezhetők."
    ],
    "helyes": "Központi monitoring rendszer kialakításával, amely egyesíti az eszközök állapotát, a hálózati teljesítményt, az alkalmazás metrikákat és a biztonsági eseményeket, automatizált riasztásokkal és dashboardokkal."
  },
  {
    "szoveg": "Hogyan integrálná az AI modell predikciós eredményeit egy IoT vezérlőrendszerbe?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Aszinkron üzenetsorral és eseményvezérelt architektúrával, amely biztosítja a predikciók megbízható továbbítását és feldolgozását, valamint tartalmaz fallback mechanizmust a modell hibája esetén.",
      "Közvetlen API hívásokon keresztül, szinkron kommunikációval, ahol a vezérlőrendszer várja a predikciós eredményeket minden döntés előtt.",
      "Batch feldolgozással, ahol a predikciók periodikusan kerülnek kiszámításra és alkalmazásra a vezérlőrendszerben."
    ],
    "helyes": "Aszinkron üzenetsorral és eseményvezérelt architektúrával, amely biztosítja a predikciók megbízható továbbítását és feldolgozását, valamint tartalmaz fallback mechanizmust a modell hibája esetén."
  },
  {
    "szoveg": "Hogyan ellenőrizné egy IoT-AI rendszer biztonsági megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált biztonsági tesztek, rendszeres penetrációs tesztek és biztonsági auditok kombinációjával, valamint folyamatos sebezhetőség-vizsgálattal és megfelelőségi ellenőrzésekkel.",
      "Kizárólag automatizált biztonsági szkennelések futtatásával, amelyek azonosítják az ismert sebezhetőségeket.",
      "Éves biztonsági audit elvégzésével, ahol külső szakértők manuálisan vizsgálják a rendszer biztonságát."
    ],
    "helyes": "Automatizált biztonsági tesztek, rendszeres penetrációs tesztek és biztonsági auditok kombinációjával, valamint folyamatos sebezhetőség-vizsgálattal és megfelelőségi ellenőrzésekkel."
  },
  {
    "szoveg": "Milyen módszerrel ellenőrizné egy AI modell teljesítményét IoT környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Valós idejű teljesítménymetrikák követésével, A/B teszteléssel és visszamenőleges teljesítményértékeléssel, automatizált anomália detektálással és riasztási rendszerrel.",
      "Kizárólag offline tesztkészleten végzett teljesítményméréssel, időszakos manuális kiértékeléssel.",
      "A felhasználói visszajelzések alapján történő szubjektív értékeléssel, havi rendszerességgel."
    ],
    "helyes": "Valós idejű teljesítménymetrikák követésével, A/B teszteléssel és visszamenőleges teljesítményértékeléssel, automatizált anomália detektálással és riasztási rendszerrel."
  },
  {
    "szoveg": "Hogyan értékelné egy IoT-AI rendszer skálázhatósági megoldásának megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Terheléses tesztek, teljesítménymérések és költségelemzés kombinációjával, figyelembe véve a jövőbeli növekedési előrejelzéseket és a rendszer kritikus pontjait.",
      "Kizárólag a jelenlegi terhelés mellett végzett teljesítménymérésekkel, a pillanatnyi költségek alapján.",
      "A hasonló rendszerek tapasztalatainak összehasonlításával, konkrét mérések nélkül."
    ],
    "helyes": "Terheléses tesztek, teljesítménymérések és költségelemzés kombinációjával, figyelembe véve a jövőbeli növekedési előrejelzéseket és a rendszer kritikus pontjait."
  },
  {
    "szoveg": "Milyen szempontok alapján értékelné egy IoT-AI rendszer adatvédelmi megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A GDPR követelmények teljesülése, az adatgyűjtés és -feldolgozás jogszerűsége, a beépített adatvédelem elvének megvalósulása és a biztonsági intézkedések megfelelősége alapján.",
      "Kizárólag a technikai biztonsági intézkedések megléte alapján, függetlenül az adatkezelés jogszerűségétől.",
      "Az iparági standardok általános betartása alapján, részletes jogi megfelelőségi vizsgálat nélkül."
    ],
    "helyes": "A GDPR követelmények teljesülése, az adatgyűjtés és -feldolgozás jogszerűsége, a beépített adatvédelem elvének megvalósulása és a biztonsági intézkedések megfelelősége alapján."
  },
  {
    "szoveg": "Egy webfejlesztő azt tapasztalja, hogy a felhasználók minden oldalbetöltésnél újra be kell jelentkezniük az alkalmazásba. Mi magyarázza ezt a viselkedést a HTTP protokoll természetéből adódóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A HTTP állapotmentes protokoll, ami azt jelenti, hogy minden kérés független az előzőektől, és nem őrzi meg automatikusan a kapcsolat állapotát.",
      "A HTTP protokoll minden kérés-válasz ciklust önállóan kezel, és alapértelmezetten nem biztosít beépített mechanizmust a felhasználói munkamenet állapotának megőrzésére.",
      "A HTTP protokoll architektúrája szerint minden egyes kérés egyedi kontextusban kerül feldolgozásra, így a korábbi kapcsolatok információi nem öröklődnek automatikusan."
    ],
    "helyes": "A HTTP állapotmentes protokoll, ami azt jelenti, hogy minden kérés független az előzőektől, és nem őrzi meg automatikusan a kapcsolat állapotát."
  },
  {
    "szoveg": "Egy webalkalmazás fejlesztése során hogyan modellezhető egy sikeres fájlfeltöltési folyamat a HTTP kérés-válasz ciklus szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kliens POST kérést küld a fájl tartalmával és metaadataival, a szerver feldolgozza és tárolja a fájlt, majd 200 OK státuszkóddal és a feltöltött fájl azonosítójával válaszol.",
      "A kliens multipart/form-data formátumban küldi el a fájlt HTTP POST kérésben, a szerver validálja és feldolgozza az adatokat, majd visszaküldi a tárolási helyet és a generált egyedi azonosítót.",
      "A kliens biztonságos HTTP POST kapcsolaton keresztül továbbítja a fájlt és annak metaadatait, a szerver ellenőrzi és menti az állományt, majd visszajelzi a művelet",
      "sikerességét."
    ],
    "helyes": "A kliens POST kérést küld a fájl tartalmával és metaadataival, a szerver feldolgozza és tárolja a fájlt, majd 200 OK státuszkóddal és a feltöltött fájl azonosítójával válaszol."
  },
  {
    "szoveg": "Egy mobilalkalmazás fejlesztése során hogyan kell megfelelően kezelni egy sikertelen HTTP kérést (pl. 404-es hibakód esetén)?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hibakódot értelmezni kell, megfelelő hibaüzenetet megjeleníteni a felhasználónak, és alternatív megoldást kínálni (pl. visszalépés, újrapróbálkozás lehetősége).",
      "A rendszernek automatikusan elemeznie kell a hibakódot, naplóznia kell a problémát, és előre meghatározott újrapróbálkozási stratégiát kell alkalmaznia a kapcsolat helyreállításához.",
      "A hibakódot részletesen dokumentálni kell a rendszernaplóban, majd a felhasználót átirányítani egy alternatív erőforráshoz vagy cache-elt tartalomhoz a folytonosság érdekében."
    ],
    "helyes": "A hibakódot értelmezni kell, megfelelő hibaüzenetet megjeleníteni a felhasználónak, és alternatív megoldást kínálni (pl. visszalépés, újrapróbálkozás lehetősége)."
  },
  {
    "szoveg": "Egy webszolgáltatás tervezése során melyik megközelítés biztosítja a legmegfelelőbb HTTP kérés-válasz kezelést nagy terhelés esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Aszinkron kéréskezelés implementálása, megfelelő cache-elési stratégia alkalmazása, és a válaszok tömörítése a sávszélesség optimalizálásához.",
      "Szinkron kéréskezelés implementálása load balancer használatával, memória alapú gyorsítótárazás és adaptív válasz-tömörítési mechanizmusok mellőzésével.",
      "Többszintű cache rendszer kialakítása elosztott feldolgozással, de szinkron végrehajtási modell mellett, válasz-optimalizálás és tömörítés mellőzésével."
    ],
    "helyes": "Aszinkron kéréskezelés implementálása, megfelelő cache-elési stratégia alkalmazása, és a válaszok tömörítése a sávszélesség optimalizálásához."
  },
  {
    "szoveg": "Egy webszerver fejlesztése során azt tapasztaljuk, hogy egy erőforrás lekérésekor a kliens néha 404-es, néha pedig 500-as hibakódot kap. Mit jelez ez a viselkedés a HTTP státuszkódok értelmezése alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer inkonzisztens állapotban van, mivel ugyanarra a kérésre hol azt jelzi, hogy nem létezik az erőforrás (404), hol pedig azt, hogy szerverhiba történt (500).",
      "A webszerver működése nem megbízható, mivel a kérések feldolgozása során véletlenszerűen váltakozik az erőforrás elérhetősége és a belső feldolgozási folyamatok stabilitása.",
      "A szerveroldali erőforráskezelés és hibakezelési mechanizmus nem megfelelően implementált, ami a válaszkódok következetlen generálását eredményezi a kérések során."
    ],
    "helyes": "A rendszer inkonzisztens állapotban van, mivel ugyanarra a kérésre hol azt jelzi, hogy nem létezik az erőforrás (404), hol pedig azt, hogy szerverhiba történt (500)."
  },
  {
    "szoveg": "Egy webáruház fejlesztése során melyik HTTP metódust kell használni a kosár tartalmának frissítéséhez, ha a rendszer biztonságát és a helyes működést tartjuk szem előtt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "POST metódust, mert nem idempotens műveletről van szó, és az adatok a kérés törzsében biztonságosan továbbíthatók.",
      "GET metódust, mivel ez biztosítja a kérések átlátható naplózását és nyomon követhetőségét, valamint lehetővé teszi a böngésző gyorsítótárazási mechanizmusainak kihasználását az adatok kezelésében.",
      "PUT metódust, mivel ez garantálja a kosár tartalmának atomikus frissítését és konzisztenciáját, valamint biztosítja az idempotenciát a párhuzamos kérések esetén is."
    ],
    "helyes": "POST metódust, mert nem idempotens műveletről van szó, és az adatok a kérés törzsében biztonságosan továbbíthatók."
  },
  {
    "szoveg": "Az alábbiak közül melyik példa szemlélteti legjobban a HTTP státuszkódok helyes használatát egy fájlfeltöltő rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Sikeres feltöltés esetén 201 Created, túl nagy fájl esetén 413 Payload Too Large, nem megfelelő jogosultság esetén 403 Forbidden státuszkód küldése.",
      "Sikeres feltöltés esetén 200 OK státuszkód küldése, túlméretezett fájl esetén 413 Payload Too Large, míg szerveroldali feldolgozási hiba esetén 500 Internal Server Error státuszkód alkalmazása.",
      "Sikeres feltöltés visszaigazolása 201 Created státuszkóddal, hibás formátum esetén 415 Unsupported Media Type, hálózati timeout esetén pedig 504 Gateway Timeout státuszkód használata."
    ],
    "helyes": "Sikeres feltöltés esetén 201 Created, túl nagy fájl esetén 413 Payload Too Large, nem megfelelő jogosultság esetén 403 Forbidden státuszkód küldése."
  },
  {
    "szoveg": "Egy webalkalmazás fejlesztése során a csapat úgy döntött, hogy minden sikertelen műveletnél 500-as hibakódot küld vissza. Milyen szakmai megítélést érdemel ez a döntés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Helytelen gyakorlat, mert elfedi a valódi hibákat és megnehezíti a hibakeresést, valamint félrevezeti a kliens alkalmazásokat a hiba természetét illetően.",
      "Nem megfelelő megoldás, mivel a különböző hibatípusok egységes kezelése megnehezíti a rendszer karbantarthatóságát és a hibák pontos azonosítását a naplófájlokban.",
      "Szakmailag kifogásolható megoldás, mert a HTTP protokoll által biztosított részletes hibakód-rendszer előnyeit figyelmen kívül hagyja, ami rontja az alkalmazás használhatóságát."
    ],
    "helyes": "Helytelen gyakorlat, mert elfedi a valódi hibákat és megnehezíti a hibakeresést, valamint félrevezeti a kliens alkalmazásokat a hiba természetét illetően."
  },
  {
    "szoveg": "Egy webshop alkalmazás fejlesztése során RESTful API-t kell tervezned a termékek kezeléséhez. Melyik URI és HTTP metódus kombináció a legmegfelelőbb egy új termék létrehozásához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "POST /api/v1/products - A POST metódus új erőforrás létrehozására szolgál, a többes számú főnév pedig követi a RESTful konvenciókat",
      "PUT /api/v1/product/new - A PUT metódus új erőforrás létrehozására szolgál, az egyes számú főnév használata és az explicit 'new' végpont pedig a szabványos REST architektúra részét képezi",
      "GET /api/v1/products/create - A GET metódus biztonságosabb választás új erőforrások létrehozásához, mivel idempotens művelet és követi a modern API tervezési alapelveket"
    ],
    "helyes": "POST /api/v1/products - A POST metódus új erőforrás létrehozására szolgál, a többes számú főnév pedig követi a RESTful konvenciókat"
  },
  {
    "szoveg": "Egy RESTful API implementálása során hogyan valósítanád meg a megfelelő hibakezelést egy sikertelen autentikáció esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "HTTP 401 státuszkód visszaadása egy JSON válaszban, amely tartalmazza a hiba részletes leírását és egy egyedi hibaazonosítót",
      "HTTP 200 státuszkód visszaadása egy részletes hibaüzenettel és hibakezelési metaadatokkal, valamint egy egyedi azonosítóval a nyomonkövethetőség érdekében",
      "HTTP 500 státuszkód visszaadása strukturált JSON formátumban, amely tartalmazza a részletes hibaüzenetet és a kapcsolódó biztonsági naplózási információkat"
    ],
    "helyes": "HTTP 401 státuszkód visszaadása egy JSON válaszban, amely tartalmazza a hiba részletes leírását és egy egyedi hibaazonosítót"
  },
  {
    "szoveg": "Hogyan integrálnád a JWT (JSON Web Token) alapú autentikációt egy meglévő RESTful API-ba?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A JWT tokent az Authorization header Bearer sémájában küldjük, és middleware-rel ellenőrizzük minden védett végponton",
      "A JWT tokent query paraméterként továbbítjuk a kérésekben, és dedikált autentikációs szolgáltatással validáljuk minden védett erőforrás elérésekor",
      "A JWT tokent a kérés törzsében továbbítjuk JSON formátumban, és egy központi autentikációs middleware segítségével ellenőrizzük a hozzáférési jogosultságokat"
    ],
    "helyes": "A JWT tokent az Authorization header Bearer sémájában küldjük, és middleware-rel ellenőrizzük minden védett végponton"
  },
  {
    "szoveg": "Milyen szempontokat kell ellenőrizni egy RESTful API végpont tesztelése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A helyes HTTP státuszkódok visszaadását, a válasz formátumát, a hibakezelést, és a különböző bemeneti paraméterek kezelését",
      "A válaszformátumok validációját, a különböző HTTP metódusok működését, és a teljesítmény-metrikák ellenőrzését a sikeres kérések esetén",
      "Az autentikációs mechanizmusok működését, a válaszidők monitorozását, és a különböző formátumú válaszok megfelelő szerializációját"
    ],
    "helyes": "A helyes HTTP státuszkódok visszaadását, a válasz formátumát, a hibakezelést, és a különböző bemeneti paraméterek kezelését"
  },
  {
    "szoveg": "Hogyan ítélnéd meg egy meglévő RESTful API tervezésének minőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az API konzisztenciája, dokumentáltsága, hibakezelése, biztonsági megoldásai és a REST alapelvek betartása alapján",
      "A válaszidők optimalizálása, teljesítménymérési mutatók elemzése, és a szerveroldali erőforrás-kihasználtság hatékonysága alapján",
      "A végpontok strukturáltsága, az implementáció komplexitásának mértéke, valamint a kódbázis modularitása és skálázhatósága alapján"
    ],
    "helyes": "Az API konzisztenciája, dokumentáltsága, hibakezelése, biztonsági megoldásai és a REST alapelvek betartása alapján"
  },
  {
    "szoveg": "Hogyan javítja a HTTP/1.1 perzisztens kapcsolatok mechanizmusa a webes kommunikáció hatékonyságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyetlen TCP kapcsolaton keresztül több kérés-válasz pár küldhető, így elkerülhető a kapcsolatok ismételt felépítésének többletköltsége.",
      "A TCP kapcsolatok újrafelhasználásával és a kapcsolati állapot megőrzésével csökkenti a hálózati erőforrások felhasználását és minimalizálja a késleltetést.",
      "Az állandó kapcsolatok fenntartásával és a kérések sorbaállításával optimalizálja az erőforrások kihasználtságát és javítja az átviteli sebességet."
    ],
    "helyes": "Egyetlen TCP kapcsolaton keresztül több kérés-válasz pár küldhető, így elkerülhető a kapcsolatok ismételt felépítésének többletköltsége."
  },
  {
    "szoveg": "Egy weboldal betöltésekor hogyan működik együtt a perzisztens kapcsolat és a pipelining mechanizmusa?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A perzisztens kapcsolaton keresztül a kliens egymás után elküldheti a kéréseit várakozás nélkül, a szerver pedig sorrendben válaszol rájuk, így optimalizálva az átvitelt.",
      "A perzisztens kapcsolat fenntartja a kommunikációs csatornát, miközben a pipelining mechanizmus sorba állítja a kéréseket, de minden válasz után új szinkronizációt igényel a biztonságos átvitel érdekében.",
      "A perzisztens kapcsolat egy dedikált csatornát biztosít, amelyen keresztül a pipelining mechanizmus párhuzamosan kezeli a kéréseket, de csak meghatározott időközönként engedi azok feldolgozását."
    ],
    "helyes": "A perzisztens kapcsolaton keresztül a kliens egymás után elküldheti a kéréseit várakozás nélkül, a szerver pedig sorrendben válaszol rájuk, így optimalizálva az átvitelt."
  },
  {
    "szoveg": "Egy webszerver konfigurálása során hogyan állítaná be a perzisztens kapcsolatok kezelését nagy terhelésű környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Beállítanék egy optimális timeout értéket és maximális kapcsolatszámot szerverenként, hogy egyensúlyban tartsam a teljesítményt és az erőforrás-használatot.",
      "Implementálnék egy dinamikus kapcsolatkezelési stratégiát, amely a szerverterhelés alapján automatikusan szabályozza a timeout értékeket és a kapcsolatok maximális számát.",
      "Konfigurálnék egy adaptív terheléselosztó rendszert, amely a forgalom mintázatok alapján optimalizálja a kapcsolatok élettartamát és számát a szerveren."
    ],
    "helyes": "Beállítanék egy optimális timeout értéket és maximális kapcsolatszámot szerverenként, hogy egyensúlyban tartsam a teljesítményt és az erőforrás-használatot."
  },
  {
    "szoveg": "Milyen szempontok alapján döntene a HTTP pipelining használata mellett vagy ellen egy modern webalkalmazás fejlesztése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A HTTP/2 multiplexing jobb alternatíva, mivel kiküszöböli a head-of-line blocking problémát és szélesebb körű támogatottsággal rendelkezik.",
      "A pipelining technológia ugyan hatékonyabb erőforrás-kihasználást tesz lehetővé a szekvenciális kérések esetén, de a modern böngészők korlátozottan támogatják és gyakran okoz teljesítményproblémákat.",
      "A pipelining és HTTP/2 multiplexing összehasonlításakor figyelembe kell venni, hogy bár mindkettő javítja a teljesítményt, a pipelining implementációs nehézségei jelentősen korlátozzák használhatóságát."
    ],
    "helyes": "A HTTP/2 multiplexing jobb alternatíva, mivel kiküszöböli a head-of-line blocking problémát és szélesebb körű támogatottsággal rendelkezik."
  },
  {
    "szoveg": "Hogyan működik a HTTP/2 multiplexing mechanizmusa a webes erőforrások letöltése során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyetlen TCP kapcsolaton belül több párhuzamos adatfolyamot kezel, ahol minden folyam független kéréseket és válaszokat tartalmaz, megszüntetve a head-of-line blocking problémát.",
      "Több párhuzamos TCP kapcsolatot használ intelligens erőforrás-elosztással, ahol minden kapcsolat önálló stream-kezelést és prioritizálást végez a kérések hatékony feldolgozásához.",
      "A kéréseket és válaszokat dinamikusan osztja szét több adatfolyam között egy TCP kapcsolaton belül, miközben folyamatosan optimalizálja az átviteli sebességet és erőforrás-kihasználást."
    ],
    "helyes": "Egyetlen TCP kapcsolaton belül több párhuzamos adatfolyamot kezel, ahol minden folyam független kéréseket és válaszokat tartalmaz, megszüntetve a head-of-line blocking problémát."
  },
  {
    "szoveg": "Milyen előnyöket nyújt a HTTP/2 header tömörítés (HPACK) a HTTP/1.1 fejléc kezeléséhez képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A HPACK dinamikus és statikus táblázatokat használ, az ismétlődő fejléceket csak egyszer küldi el, és hatékonyan tömöríti az új fejléceket, jelentősen csökkentve az átvitt adatmennyiséget.",
      "A HPACK fejlett indexelési mechanizmusokat és Huffman-kódolást alkalmaz a fejlécek kezelésére, ami optimalizálja az átvitelt, de nem biztosít teljes visszafelé kompatibilitást a korábbi verziókkal.",
      "A protokoll intelligens cache-elési stratégiát és adaptív tömörítési algoritmusokat használ a fejlécek feldolgozására, ami javítja a teljesítményt, de növeli a szerverek erőforrásigényét."
    ],
    "helyes": "A HPACK dinamikus és statikus táblázatokat használ, az ismétlődő fejléceket csak egyszer küldi el, és hatékonyan tömöríti az új fejléceket, jelentősen csökkentve az átvitt adatmennyiséget."
  },
  {
    "szoveg": "Egy webfejlesztő szeretné optimalizálni weboldala betöltési sebességét HTTP/2 használatával. Melyik megoldás használja ki leghatékonyabban a protokoll képességeit?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Server Push használata a kritikus erőforrásokhoz, multiplexing kihasználása több kis fájl párhuzamos letöltésével, és a fejlécek optimalizálása a HPACK tömörítéshez.",
      "A modern HTTP/2 protokoll képességeinek kihasználása stream prioritizálással, hatékony erőforrás-kezeléssel és dinamikus folyam-menedzsmenttel a szerveroldali optimalizációhoz.",
      "Intelligens kapcsolatkezelés implementálása többszintű gyorsítótárazással, adaptív folyamvezérléssel és fejlett protokoll-specifikus erőforrás-szétosztással."
    ],
    "helyes": "Server Push használata a kritikus erőforrásokhoz, multiplexing kihasználása több kis fájl párhuzamos letöltésével, és a fejlécek optimalizálása a HPACK tömörítéshez."
  },
  {
    "szoveg": "Egy nagy forgalmú weboldal üzemeltetőjeként hogyan értékelné a HTTP/2 Server Push funkcióját a teljesítmény szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Server Push hatékony lehet specifikus esetekben, de körültekintően kell használni, mert felesleges erőforrás-küldés esetén növelheti a sávszélesség-használatot és a szerverterhelést.",
      "A Server Push technológia általában javíthatja a teljesítményt, de csak megfelelő konfigurációval és monitorozással érdemes használni, figyelembe véve a kliens cache állapotát és a hálózati körülményeket.",
      "A Server Push implementációja komplex feladat, amely gondos tervezést és folyamatos optimalizációt igényel, mivel nem megfelelő használat esetén jelentősen ronthatja a felhasználói élményt és a rendszer hatékonyságát."
    ],
    "helyes": "A Server Push hatékony lehet specifikus esetekben, de körültekintően kell használni, mert felesleges erőforrás-küldés esetén növelheti a sávszélesség-használatot és a szerverterhelést."
  },
  {
    "szoveg": "Hogyan javítja a HTTP/2 multiplexelési képessége a webes teljesítményt a HTTP/1.1-hez képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyetlen TCP kapcsolaton belül több párhuzamos kérés-válasz stream-et kezel, megszüntetve a head-of-line blocking problémáját és csökkentve a késleltetést.",
      "Több TCP kapcsolatot használ párhuzamosan az erőforrások kezelésére, miközben fejlett forgalomirányítási algoritmusokkal optimalizálja az adatátvitelt és csökkenti a hálózati terhelést.",
      "Intelligens sorrendezési mechanizmust alkalmaz az egyetlen TCP kapcsolaton belüli kérések kezelésére, prioritizálva a kritikus erőforrásokat és optimalizálva az átviteli sebességet."
    ],
    "helyes": "Egyetlen TCP kapcsolaton belül több párhuzamos kérés-válasz stream-et kezel, megszüntetve a head-of-line blocking problémáját és csökkentve a késleltetést."
  },
  {
    "szoveg": "Egy nagy forgalmú webáruház HTTP/2-re való átállása után milyen teljesítményváltozások várhatók?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az oldal betöltési ideje 20-60%-kal csökken, a sávszélesség-használat optimalizálódik, és a szerverterhelés is alacsonyabb lesz a hatékonyabb erőforrás-kezelés miatt.",
      "Az oldal betöltési ideje és a sávszélesség-használat jelentősen javul a multiplexelés révén, azonban a szerveroldali erőforrások kihasználtsága magasabb lesz a protokoll összetettebb működése miatt.",
      "A protokoll fejlett funkciói révén az oldal válaszideje és erőforrás-kezelése optimalizálódik, de a header tömörítés és a server push miatt a sávszélesség-használat átmenetileg növekedhet."
    ],
    "helyes": "Az oldal betöltési ideje 20-60%-kal csökken, a sávszélesség-használat optimalizálódik, és a szerverterhelés is alacsonyabb lesz a hatékonyabb erőforrás-kezelés miatt."
  },
  {
    "szoveg": "Egy mobilalkalmazás fejlesztése során hogyan érdemes kihasználni a HTTP/2 server push funkcióját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szerver proaktívan küldheti a várhatóan szükséges erőforrásokat (képek, stíluslapok) az első kérés után, még mielőtt a kliens explicit módon kérné azokat.",
      "A szerver intelligensen elemzi a felhasználói viselkedést és előrejelzési algoritmusok alapján küldi el a valószínűleg szükséges erőforrásokat, optimalizálva a sávszélesség kihasználását.",
      "A szerver fejlett gyorsítótárazási mechanizmusokat alkalmaz, és a kliens igényeinek megfelelően, adaptív módon továbbítja az erőforrásokat a kapcsolat minőségének függvényében."
    ],
    "helyes": "A szerver proaktívan küldheti a várhatóan szükséges erőforrásokat (képek, stíluslapok) az első kérés után, még mielőtt a kliens explicit módon kérné azokat."
  },
  {
    "szoveg": "Egy nagy látogatottságú hírportál esetében mikor NEM ajánlott a HTTP/2 protokollra való átállás?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ha a látogatók jelentős része olyan régi proxy szervereket vagy tűzfalakat használ, amelyek nem támogatják a HTTP/2-t, és ez szolgáltatás-kiesést okozhat.",
      "Ha a weboldal jelenlegi infrastruktúrája és konfigurációja optimálisan működik a HTTP/1.1 protokollal, és az átállás jelentős fejlesztési és üzemeltetési erőforrásokat igényelne a bizonytalan előnyökért.",
      "Ha a szerver jelenlegi architektúrája és terheléselosztó rendszere kifejezetten a HTTP/1.1 protokollra van optimalizálva, és az átállás veszélyeztetné a szolgáltatás stabilitását."
    ],
    "helyes": "Ha a látogatók jelentős része olyan régi proxy szervereket vagy tűzfalakat használ, amelyek nem támogatják a HTTP/2-t, és ez szolgáltatás-kiesést okozhat."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a HTTP/2 multiplexelési képességének hatását a hálózati erőforrások kihasználására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A multiplexelés lehetővé teszi több kérés párhuzamos kezelését egyetlen TCP kapcsolaton keresztül, ami jelentősen csökkenti az erőforrásigényt és a késleltetést.",
      "A multiplexelés lehetővé teszi a kérések dinamikus ütemezését és prioritizálását egyetlen kapcsolaton belül, ami optimalizálja az erőforrások kihasználását, de növeli a feldolgozási komplexitást.",
      "A multiplexelés egy fejlett forgalomkezelési mechanizmust vezet be, amely egyesíti a párhuzamos adatfolyamokat és optimalizálja az átvitelt, de extra szerveroldali erőforrásokat igényel."
    ],
    "helyes": "A multiplexelés lehetővé teszi több kérés párhuzamos kezelését egyetlen TCP kapcsolaton keresztül, ami jelentősen csökkenti az erőforrásigényt és a késleltetést."
  },
  {
    "szoveg": "Milyen következményekkel járhat a HTTP/2 protokoll bevezetése egy nagy forgalmú webshop infrastruktúrájára nézve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szerverek CPU terhelése csökkenhet a kevesebb TCP kapcsolat miatt, de szükség lehet a terheléselosztók és monitorozó rendszerek frissítésére a multiplexelt kapcsolatok megfelelő kezeléséhez.",
      "A szerverek erőforrás-kihasználása optimalizálódik a multiplexelt kapcsolatok révén, azonban a terheléselosztó rendszerek és monitorozó eszközök jelentős átalakítást igényelhetnek az új protokoll sajátosságai miatt.",
      "A hálózati infrastruktúra teljesítménye javul a kapcsolatok hatékonyabb kezelése miatt, de szükséges a load balancerek és monitoring rendszerek protokoll-kompatibilitásának biztosítása a megfelelő működéshez."
    ],
    "helyes": "A szerverek CPU terhelése csökkenhet a kevesebb TCP kapcsolat miatt, de szükség lehet a terheléselosztók és monitorozó rendszerek frissítésére a multiplexelt kapcsolatok megfelelő kezeléséhez."
  },
  {
    "szoveg": "Hogyan modellezhető egy weboldal betöltési folyamata HTTP/2 protokoll használata esetén, különös tekintettel a szerver push funkcióra?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kliens kezdeti HTML kérésére válaszul a szerver proaktívan küldheti a kapcsolódó CSS és JavaScript fájlokat, még mielőtt a kliens kérné azokat, így optimalizálva a betöltési folyamatot.",
      "A szerver elemzi a kezdeti HTML kérést, majd intelligens sorrendben, automatikusan továbbítja a szükséges erőforrásokat a kapcsolódó stíluslapokkal és szkriptekkel együtt, várható felhasználási sorrendben.",
      "A kliens HTML kérését követően a szerver előre meghatározott szabályok alapján azonosítja és továbbítja az összes függő erőforrást, optimalizálva a sávszélesség kihasználását."
    ],
    "helyes": "A kliens kezdeti HTML kérésére válaszul a szerver proaktívan küldheti a kapcsolódó CSS és JavaScript fájlokat, még mielőtt a kliens kérné azokat, így optimalizálva a betöltési folyamatot."
  },
  {
    "szoveg": "Egy nagyvállalati környezetben milyen szempontok alapján kell megítélni a HTTP/2 protokollra való átállás időzítését és stratégiáját?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az átállást a jelenlegi infrastruktúra kompatibilitása, a várható teljesítményjavulás, a biztonsági követelmények és a fokozatos bevezetés lehetősége alapján kell megítélni.",
      "Az átállás tervezésekor a rendszerkompatibilitási felmérések, a konkurens vállalatok tapasztalatai, valamint a protokoll technikai előnyeinek részletes elemzése és a fokozatos implementáció ütemezése szükséges.",
      "A migrációs folyamat során elsődlegesen az infrastrukturális követelmények felmérése, a teljesítményoptimalizálási lehetőségek vizsgálata és a biztonsági megfelelőség validálása alapján kell döntést hozni."
    ],
    "helyes": "Az átállást a jelenlegi infrastruktúra kompatibilitása, a várható teljesítményjavulás, a biztonsági követelmények és a fokozatos bevezetés lehetősége alapján kell megítélni."
  },
  {
    "szoveg": "Hogyan valósítja meg a QUIC protokoll a hatékonyabb adatátvitelt a hagyományos TCP-alapú megoldásokhoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az UDP-re épülve multiplexelt streameket használ beépített titkosítással, és fejlett kapcsolatkezeléssel minimalizálja a késleltetést.",
      "Az UDP protokollt alapként használva párhuzamos adatfolyamokat kezel, miközben a kapcsolatok integritását és biztonságát optimalizált algoritmusokkal garantálja.",
      "Fejlett kapcsolatkezelési mechanizmusokat implementál az UDP-n keresztül, kombinálva a modern titkosítási eljárásokkal és hatékony forgalomirányítással."
    ],
    "helyes": "Az UDP-re épülve multiplexelt streameket használ beépített titkosítással, és fejlett kapcsolatkezeléssel minimalizálja a késleltetést."
  },
  {
    "szoveg": "Egy mobilalkalmazás fejlesztése során hogyan befolyásolja a QUIC használata az alkalmazás működését, ha a felhasználó gyakran vált Wi-Fi és mobilnet között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kapcsolatazonosítók révén az alkalmazás megszakítás nélkül folytathatja a kommunikációt, automatikusan kezelve a hálózatváltást.",
      "Az alkalmazás képes fenntartani a kapcsolatot, de minden hálózatváltáskor újra kell szinkronizálnia az állapotát, ami rövid késleltetést eredményez a kommunikációban.",
      "A protokoll újraazonosítja a kapcsolatot minden hálózatváltáskor, ami transzparens az alkalmazás számára, de befolyásolja az adatátvitel sebességét."
    ],
    "helyes": "A kapcsolatazonosítók révén az alkalmazás megszakítás nélkül folytathatja a kommunikációt, automatikusan kezelve a hálózatváltást."
  },
  {
    "szoveg": "Milyen következményekkel járhat a QUIC protokoll széles körű elterjedése a jövőbeli internetes alkalmazások fejlesztésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fejlesztők rugalmasabb, jobb felhasználói élményt nyújtó alkalmazásokat készíthetnek, különös tekintettel a mobil és változó hálózati környezetekre.",
      "Az alkalmazásfejlesztés folyamata összetettebb lesz, mivel a fejlesztőknek részletesen meg kell ismerniük a QUIC protokoll működését és annak optimális implementációs stratégiáit a különböző hálózati környezetekben.",
      "A webes alkalmazások fejlesztési ciklusa jelentősen módosul, mivel a QUIC protokoll speciális követelményei és biztonsági megfontolásai új tervezési és tesztelési módszereket igényelnek a fejlesztőktől."
    ],
    "helyes": "A fejlesztők rugalmasabb, jobb felhasználói élményt nyújtó alkalmazásokat készíthetnek, különös tekintettel a mobil és változó hálózati környezetekre."
  },
  {
    "szoveg": "Egy nagyvállalati környezetben mikor indokolt a QUIC protokoll bevezetése a meglévő TCP/TLS alapú megoldások helyett?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ha a vállalat jelentős mobil forgalmat kezel, gyakori a hálózatváltás, és kritikus a késleltetés minimalizálása a felhasználói élmény szempontjából.",
      "Ha a vállalat nagy mennyiségű adatforgalmat bonyolít vezetékes hálózaton, és elsődleges szempont a kapcsolatok stabilitása és a hagyományos biztonsági protokollok használata.",
      "Ha a szervezet többféle alkalmazást futtat párhuzamosan, és kulcsfontosságú a szerverek erőforrás-kihasználásának optimalizálása a hálózati teljesítmény rovására."
    ],
    "helyes": "Ha a vállalat jelentős mobil forgalmat kezel, gyakori a hálózatváltás, és kritikus a késleltetés minimalizálása a felhasználói élmény szempontjából."
  },
  {
    "szoveg": "Hogyan járul hozzá a QUIC protokoll használata a HTTP/3 hatékonyabb működéséhez a kapcsolatfelépítés során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A QUIC lehetővé teszi a 0-RTT kapcsolatfelvételt ismert szerverek esetén, és a beépített TLS 1.3 titkosítással együtt egyetlen körben létrehozza a biztonságos kapcsolatot.",
      "A QUIC protokoll újratervezett kapcsolatkezelési mechanizmusa a TCP handshake folyamatot optimalizálja, és a beépített titkosítási réteggel párhuzamosan végzi a kapcsolat inicializálását.",
      "A QUIC protokoll fejlett kapcsolatkezelési mechanizmusa a hálózati rétegek közötti kommunikációt gyorsítja, miközben automatikusan optimalizálja a titkosított adatátvitelt."
    ],
    "helyes": "A QUIC lehetővé teszi a 0-RTT kapcsolatfelvételt ismert szerverek esetén, és a beépített TLS 1.3 titkosítással együtt egyetlen körben létrehozza a biztonságos kapcsolatot."
  },
  {
    "szoveg": "Miben különbözik a HTTP/3 stream-kezelése a HTTP/2 megoldásától?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A HTTP/3-ban a stream-ek teljesen függetlenek egymástól, így egy csomagvesztés csak az érintett stream-et blokkolja, míg HTTP/2-nél a TCP miatt az összes stream blokkolódik.",
      "A HTTP/3 UDP-alapú QUIC protokollja lehetővé teszi a stream-ek hatékonyabb kezelését és független hibakezelését, míg a HTTP/2 TCP-alapú megoldása miatt minden stream ugyanazon kapcsolat korlátait örökli.",
      "A HTTP/3 fejlett multiplexelési mechanizmusa biztosítja a stream-ek izolált működését és hibatűrését, szemben a HTTP/2 TCP-alapú architektúrájával, ami közös hibakezelést alkalmaz."
    ],
    "helyes": "A HTTP/3-ban a stream-ek teljesen függetlenek egymástól, így egy csomagvesztés csak az érintett stream-et blokkolja, míg HTTP/2-nél a TCP miatt az összes stream blokkolódik."
  },
  {
    "szoveg": "Egy mobilalkalmazás fejlesztése során mely HTTP/3 tulajdonságot érdemes kihasználni a hálózatváltások kezelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kapcsolatazonosítóval történő azonosítást, ami lehetővé teszi a kapcsolat fenntartását IP-címváltás esetén is, például Wi-Fi-ről mobilnetre váltáskor.",
      "A kapcsolat folyamatos monitorozását és automatikus újrakonfigurálását IP-címváltás esetén, ami biztosítja az adatátvitel megszakításmentes folytonosságát a különböző hálózatok között.",
      "A kapcsolat állapotának intelligens kezelését és automatikus helyreállítását hálózatváltáskor, ami lehetővé teszi a zökkenőmentes kommunikáció fenntartását az alkalmazás számára."
    ],
    "helyes": "A kapcsolatazonosítóval történő azonosítást, ami lehetővé teszi a kapcsolat fenntartását IP-címváltás esetén is, például Wi-Fi-ről mobilnetre váltáskor."
  },
  {
    "szoveg": "Egy nagyvállalati környezetben milyen szempontokat kell mérlegelni a HTTP/3 bevezetése előtt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vállalati tűzfalak és biztonsági eszközök UDP-kezelési képességeit, a szerverek erőforrásigényét, és a hálózati infrastruktúra kompatibilitását a QUIC protokollal.",
      "A hálózati infrastruktúra teljesítményének optimalizálását, a szerverek terheléselosztásának konfigurálását, valamint a sávszélesség-kihasználás és kapcsolatkezelés finomhangolását a QUIC protokoll sajátosságaihoz.",
      "A végfelhasználói eszközök protokoll-kompatibilitásának felmérését, a biztonsági megfelelőség vizsgálatát, valamint a hálózati monitoring rendszerek és forgalomelemzők QUIC-támogatásának ellenőrzését."
    ],
    "helyes": "A vállalati tűzfalak és biztonsági eszközök UDP-kezelési képességeit, a szerverek erőforrásigényét, és a hálózati infrastruktúra kompatibilitását a QUIC protokollal."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a HTTP/3 protokoll alapvető működési elvét a korábbi verziókhoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A HTTP/3 UDP alapú QUIC protokollra épül beépített titkosítással, ami lehetővé teszi a párhuzamos, független adatfolyamok kezelését fejlett multiplexeléssel.",
      "A HTTP/3 egy továbbfejlesztett TCP alapú protokoll, amely beépített TLS 1.3 titkosítással és fejlett folyamkezeléssel optimalizálja az adatátvitelt a modern hálózati környezetekben.",
      "A HTTP/3 egy innovatív hibrid protokoll, amely dinamikusan váltogatja a TCP és UDP kapcsolatokat, miközben beépített biztonsági mechanizmusokkal és fejlett multiplexeléssel javítja a teljesítményt."
    ],
    "helyes": "A HTTP/3 UDP alapú QUIC protokollra épül beépített titkosítással, ami lehetővé teszi a párhuzamos, független adatfolyamok kezelését fejlett multiplexeléssel."
  },
  {
    "szoveg": "Milyen következményekre számíthatunk egy nagyvállalati környezetben a HTTP/3 protokoll bevezetésekor a hálózati infrastruktúra szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A meglévő tűzfalak és biztonsági eszközök frissítésre szorulnak, és új monitoring megoldásokat kell bevezetni az UDP-alapú forgalom kezelésére.",
      "A hálózati infrastruktúra teljes felülvizsgálata szükséges, beleértve a load balancerek és proxy szerverek frissítését, valamint új UDP-optimalizált forgalomirányítási szabályok bevezetését.",
      "A teljes biztonsági architektúra újratervezése szükséges, mivel az UDP alapú QUIC protokoll kezelése új típusú védelmi mechanizmusokat és speciális forgalomfigyelési módszereket igényel."
    ],
    "helyes": "A meglévő tűzfalak és biztonsági eszközök frissítésre szorulnak, és új monitoring megoldásokat kell bevezetni az UDP-alapú forgalom kezelésére."
  },
  {
    "szoveg": "Egy nagy forgalmú weboldal fejlesztőjeként hogyan implementálná a HTTP/3 támogatást a fokozatos bevezetés elvét követve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alt-Svc header implementálásával, amely lehetővé teszi a HTTP/3 képességek hirdetését, miközben fenntartjuk a HTTP/2 fallback lehetőséget és folyamatosan monitorozzuk a teljesítménymetrikákat.",
      "A protokoll fokozatos bevezetése load balancer szintű implementációval, amely párhuzamosan kezeli a HTTP/2 és HTTP/3 forgalmat, miközben részletes teljesítményelemzést végez a kapcsolatok minőségéről.",
      "Többrétegű protokoll-kezelés implementálása, amely a kliens képességei alapján dinamikusan választja meg a kommunikációs protokollt, folyamatos teljesítménymonitorozás mellett."
    ],
    "helyes": "Alt-Svc header implementálásával, amely lehetővé teszi a HTTP/3 képességek hirdetését, miközben fenntartjuk a HTTP/2 fallback lehetőséget és folyamatosan monitorozzuk a teljesítménymetrikákat."
  },
  {
    "szoveg": "Hogyan értékelhető a HTTP/3 protokoll bevezetésének indokoltsága egy elsősorban belső hálózaton működő vállalati alkalmazás esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A bevezetés csak akkor indokolt, ha jelentős mobil használat vagy változó minőségű hálózati kapcsolatok jellemzőek, és a fejlesztési/üzemeltetési költségek megtérülnek a jobb felhasználói élmény által.",
      "A bevezetés mérlegelendő, ha a belső hálózati infrastruktúra jelentős fejlesztésen esik át, és a felhasználói igények indokolják a modern protokollok által nyújtott teljesítményelőnyök kihasználását, figyelembe véve a bevezetés összes járulékos költségét.",
      "A protokoll implementációja akkor lehet megfelelő döntés, ha a vállalati alkalmazás felhasználói bázisa földrajzilag osztott, és a kapcsolatok minősége változó, valamint a szervezet rendelkezik a bevezetéshez szükséges technikai és anyagi erőforrásokkal."
    ],
    "helyes": "A bevezetés csak akkor indokolt, ha jelentős mobil használat vagy változó minőségű hálózati kapcsolatok jellemzőek, és a fejlesztési/üzemeltetési költségek megtérülnek a jobb felhasználói élmény által."
  },
  {
    "szoveg": "Hogyan biztosítja az SSL/TLS protokoll a biztonságos kommunikációt egy webshop és a felhasználó között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kézfogás során egyeztetett titkosítási kulcsokkal védi az adatokat, miközben a tanúsítványok segítségével biztosítja a webshop hitelességét",
      "A kommunikációt dinamikusan generált titkosítási algoritmusokkal és session-specifikus kulcsokkal védi, miközben ellenőrzi az adatintegritást a teljes folyamat során",
      "A biztonságos csatornát többrétegű titkosítással és digitális aláírásokkal hozza létre, folyamatosan monitorozva a kapcsolat megbízhatóságát"
    ],
    "helyes": "A kézfogás során egyeztetett titkosítási kulcsokkal védi az adatokat, miközben a tanúsítványok segítségével biztosítja a webshop hitelességét"
  },
  {
    "szoveg": "Egy bank új online banki rendszert fejleszt. Milyen folyamatnak kell lezajlania az SSL/TLS protokollban, amikor egy ügyfél először kapcsolódik a rendszerhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kliens és szerver egyeztet a titkosításról, a bank elküldi tanúsítványát, közös titkos kulcsot generálnak, majd hitelesítik a kapcsolatot",
      "A kliens és szerver között létrejön a kapcsolat, egyeztetik a titkosítási protokollokat, majd a bank hitelesíti magát és létrehozzák a biztonságos csatornát",
      "A kliens kezdeményezi a kapcsolatot, a bank validálja a kérést, megtörténik a protokoll egyeztetés és a titkosított csatorna kialakítása"
    ],
    "helyes": "A kliens és szerver egyeztet a titkosításról, a bank elküldi tanúsítványát, közös titkos kulcsot generálnak, majd hitelesítik a kapcsolatot"
  },
  {
    "szoveg": "Egy webfejlesztő csapat új e-kereskedelmi platformot készít. Hogyan kell megfelelően implementálni az SSL/TLS védelmet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megbízható CA által kiállított tanúsítványt kell beszerezni, csak TLS 1.2 vagy újabb verziót használni, és minden oldalt HTTPS-re kényszeríteni",
      "Megbízható tanúsítványkezelő rendszert kell implementálni, a legújabb titkosítási protokollokat alkalmazni, és folyamatos biztonsági monitorozást bevezetni",
      "Szabványos biztonsági protokollokat kell alkalmazni, rendszeres tanúsítvány-frissítéseket végezni, és átfogó titkosítást bevezetni"
    ],
    "helyes": "Megbízható CA által kiállított tanúsítványt kell beszerezni, csak TLS 1.2 vagy újabb verziót használni, és minden oldalt HTTPS-re kényszeríteni"
  },
  {
    "szoveg": "Egy vállalat belső rendszerében még mindig TLS 1.0-át használnak. Milyen szakmai döntést kell hozni ezzel kapcsolatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Azonnali frissítés szükséges TLS 1.2 vagy 1.3 verzióra, mivel a TLS 1.0 ismert sebezhetőségekkel rendelkezik és nem felel meg a modern biztonsági követelményeknek",
      "A rendszer biztonsági felülvizsgálata és azonnali protokollfrissítés javasolt, mivel a TLS 1.0 használata jelentős kockázatot jelent a belső hálózati kommunikáció biztonságára nézve",
      "Sürgős biztonsági audit és protokollfrissítés végrehajtása szükséges, mivel a TLS 1.0 használata veszélyezteti a vállalati adatok biztonságát és integritását"
    ],
    "helyes": "Azonnali frissítés szükséges TLS 1.2 vagy 1.3 verzióra, mivel a TLS 1.0 ismert sebezhetőségekkel rendelkezik és nem felel meg a modern biztonsági követelményeknek"
  },
  {
    "szoveg": "Egy webshop HTTPS tanúsítványának ellenőrzésekor a böngésző azt jelzi, hogy a tanúsítványt egy közbenső CA írta alá. Mit jelent ez a tanúsítvány hitelességére nézve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A tanúsítvány akkor hiteles, ha a közbenső CA-t egy megbízható gyökér CA hitelesítette, és a teljes tanúsítványlánc érvényes.",
      "A tanúsítvány megbízhatósága komplex folyamat eredménye, amely során ellenőrizni kell a teljes hitelesítési láncot, de mivel nem közvetlen gyökér CA által lett kiállítva, fokozott biztonsági kockázatot jelent.",
      "A tanúsítvány hitelességének megállapításához szükséges a közbenső CA által létrehozott digitális aláírás és a kapcsolódó időbélyegek teljes körű ellenőrzése a hierarchikus struktúrában."
    ],
    "helyes": "A tanúsítvány akkor hiteles, ha a közbenső CA-t egy megbízható gyökér CA hitelesítette, és a teljes tanúsítványlánc érvényes."
  },
  {
    "szoveg": "Egy vállalat saját belső tanúsítványkezelő rendszert szeretne kiépíteni. Milyen alapvető komponenseket kell tartalmaznia a rendszernek a biztonságos működéshez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Tanúsítványkibocsátó szerver biztonságos kulcstárolással, visszavonási lista kezelő rendszer, tanúsítványállapot-ellenőrző szolgáltatás és naplózó rendszer.",
      "Biztonságos webszerver SSL/TLS támogatással, tanúsítványtároló adatbázis-rendszer, kulcsgenerálási és -visszavonási mechanizmusok, valamint részletes biztonsági naplózás.",
      "Központi tanúsítványkezelő infrastruktúra titkosított kulcstárolással, automatizált tanúsítványmegújítási rendszer, állapotfigyelő szolgáltatás és audit naplózás."
    ],
    "helyes": "Tanúsítványkibocsátó szerver biztonságos kulcstárolással, visszavonási lista kezelő rendszer, tanúsítványállapot-ellenőrző szolgáltatás és naplózó rendszer."
  },
  {
    "szoveg": "Egy webfejlesztő csapat új e-kereskedelmi oldalt készít. Milyen tanúsítványtípust kellene választaniuk az oldalhoz?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kiterjesztett érvényesítésű (EV) SSL tanúsítványt, amely tartalmazza a cég jogi adatait és a legmagasabb szintű ellenőrzésen esett át.",
      "Szervezeti hitelesítésű (OV) SSL tanúsítványt, amely alapszintű céges validációt biztosít, de nem nyújt olyan részletes ellenőrzést, mint az EV típus.",
      "Domain-validált (DV) SSL tanúsítványt, amely gyors kiállítású és automatizált ellenőrzéssel rendelkezik, de nem tartalmaz céges információkat."
    ],
    "helyes": "Kiterjesztett érvényesítésű (EV) SSL tanúsítványt, amely tartalmazza a cég jogi adatait és a legmagasabb szintű ellenőrzésen esett át."
  },
  {
    "szoveg": "Egy vállalati rendszergazda észleli, hogy az egyik tanúsító szervezet kompromittálódott. Milyen döntést kell hoznia a szervezet által korábban kibocsátott tanúsítványokkal kapcsolatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Azonnal blokkolni kell az érintett CA által kibocsátott összes tanúsítványt, és új tanúsítványokat kell igényelni egy másik megbízható CA-tól.",
      "A biztonsági protokollok szerint azonnal fel kell függeszteni minden érintett tanúsítvány működését, és folyamatos monitorozás mellett új hitelesítési folyamatot kell kezdeményezni.",
      "Az összes korábban kibocsátott digitális tanúsítványt érvényteleníteni kell a rendszerben, és sürgősséggel új, megbízható forrásból származó hitelesítést kell bevezetni."
    ],
    "helyes": "Azonnal blokkolni kell az érintett CA által kibocsátott összes tanúsítványt, és új tanúsítványokat kell igényelni egy másik megbízható CA-tól."
  },
  {
    "szoveg": "Egy új webalkalmazás fejlesztése során a felhasználói regisztrációs folyamatot kell implementálnia. Melyik megoldás biztosítja a legnagyobb biztonságot a jelszavak kezelésénél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jelszavakat modern, lassú hash függvénnyel (pl. bcrypt) és egyedi sóval kell hashelni, majd csak a hash értéket tárolni az adatbázisban.",
      "A jelszavakat erős titkosítási algoritmussal és egyedi inicializációs vektorral kell védeni, majd a titkosított adatot biztonságos kulcskezeléssel tárolni az adatbázisban.",
      "A jelszavakat kriptográfiai hash függvénnyel kell feldolgozni, többkörös iterációval és véletlenszerű salt értékkel kombinálva tárolni az adatbázisban."
    ],
    "helyes": "A jelszavakat modern, lassú hash függvénnyel (pl. bcrypt) és egyedi sóval kell hashelni, majd csak a hash értéket tárolni az adatbázisban."
  },
  {
    "szoveg": "Hogyan implementálná a legbiztonságosabban egy webalkalmazás SQL lekérdezéseit a felhasználói input kezelésénél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Prepared statement-ek használatával, ahol a paramétereket a driver automatikusan escape-eli és típusellenőrzést végez.",
      "Az SQL parancsok paramétereinek kezelése string összefűzéssel, előtte mysql_real_escape_string() függvénnyel és típuskonverzióval történő validálással.",
      "A felhasználói input feldolgozása során szigorú típusellenőrzést végzünk, majd az adatbázis-specifikus escape függvényekkel és karakterkódolással biztosítjuk a biztonságot."
    ],
    "helyes": "Prepared statement-ek használatával, ahol a paramétereket a driver automatikusan escape-eli és típusellenőrzést végez."
  },
  {
    "szoveg": "Hogyan integrálná a biztonsági mechanizmusokat egy többrétegű webalkalmazásba a Defense in Depth elv alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden rétegben külön biztonsági kontrollokat alkalmazunk: hálózati szinten tűzfal és TLS, alkalmazás szinten input validáció és autentikáció, adatbázis szinten prepared statement-ek és jogosultságkezelés.",
      "Többszintű biztonsági rendszert implementálunk egy központi védelmi rétegben, amely tartalmazza a tűzfalat, TLS titkosítást, felhasználói hitelesítést és jogosultságkezelést az alkalmazás belépési pontjánál.",
      "Az alkalmazás külső rétegében komplex biztonsági mechanizmusokat vezetünk be, beleértve a fejlett tűzfalat, titkosítást, hitelesítést és jogosultságkezelést a teljes védelem érdekében."
    ],
    "helyes": "Minden rétegben külön biztonsági kontrollokat alkalmazunk: hálózati szinten tűzfal és TLS, alkalmazás szinten input validáció és autentikáció, adatbázis szinten prepared statement-ek és jogosultságkezelés."
  },
  {
    "szoveg": "Milyen szempontok alapján ellenőrizné egy webalkalmazás session kezelésének biztonságosságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Session azonosító megfelelő entrópiája, secure és httpOnly flag használata, session timeout beállítása, session fixation elleni védelem implementálása, és biztonságos tárolás ellenőrzése.",
      "Session azonosító véletlenszerűségének és komplexitásának vizsgálata, cookie biztonsági beállítások ellenőrzése, időkorlátok megfelelő konfigurálása, és a szerveroldali tárolás biztonsági auditálása.",
      "Session kezelő mechanizmusok teljes körű biztonsági auditja, beleértve az azonosítók generálását, cookie beállításokat, időzítéseket és a szerveroldali implementáció részletes vizsgálatát."
    ],
    "helyes": "Session azonosító megfelelő entrópiája, secure és httpOnly flag használata, session timeout beállítása, session fixation elleni védelem implementálása, és biztonságos tárolás ellenőrzése."
  },
  {
    "szoveg": "Egy webalkalmazás biztonsági auditja során melyik megállapítás indokolja leginkább a teljes biztonsági architektúra újratervezését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazás nem követi a Security by Design elvet, a biztonsági mechanizmusok utólag lettek hozzáadva, nincs egységes biztonsági koncepció, és több kritikus sérülékenység is ebből ered.",
      "Az alkalmazás több súlyos biztonsági rést tartalmaz, köztük SQL injection sérülékenységeket és nem megfelelően implementált hozzáférés-kezelést, amelyek javítása jelentős erőforrásokat igényel.",
      "A rendszer biztonsági mechanizmusai elavultak, beleértve a kriptográfiai megoldásokat és authentikációs protokollokat, amelyek nem felelnek meg a modern biztonsági követelményeknek."
    ],
    "helyes": "Az alkalmazás nem követi a Security by Design elvet, a biztonsági mechanizmusok utólag lettek hozzáadva, nincs egységes biztonsági koncepció, és több kritikus sérülékenység is ebből ered."
  },
  {
    "szoveg": "Egy webszerver HTTPS teljesítményének optimalizálása során milyen szerepet tölt be a TLS session resumption mechanizmus?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé teszi a korábban létrehozott TLS munkamenetek újrafelhasználását, így csökkentve az új kapcsolatok létesítéséhez szükséges teljes kézfogási folyamatot.",
      "Optimalizálja a titkosítási folyamatot a korábbi munkamenetek kulcsainak és paramétereinek újrafelhasználásával, jelentősen csökkentve a kapcsolatok létrehozásának erőforrásigényét.",
      "Gyorsítótárazza a TLS munkamenetek biztonsági paramétereit és azonosítóit, lehetővé téve a gyorsabb kapcsolatfelvételt ismételt csatlakozások esetén a szerverhez."
    ],
    "helyes": "Lehetővé teszi a korábban létrehozott TLS munkamenetek újrafelhasználását, így csökkentve az új kapcsolatok létesítéséhez szükséges teljes kézfogási folyamatot."
  },
  {
    "szoveg": "Egy nagy forgalmú e-kereskedelmi weboldal fejlesztőjeként hogyan implementálná a HTTPS teljesítmény optimalizációját a következő követelmények mellett: magas rendelkezésre állás, alacsony latency és megfelelő biztonsági szint?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "CDN használata, TLS 1.3 bevezetése, connection pooling alkalmazása és load balancer beállítása SSL termination funkcióval.",
      "Globális CDN hálózat implementálása HTTPS gyorsítótárazással, session alapú kapcsolatkezelés és redundáns SSL proxy szerverek konfigurálása automatikus failover funkcióval.",
      "Elosztott cache rendszer kiépítése edge szerverekkel, TLS session újrafelhasználás implementálása és többrétegű terheléselosztás HTTPS offloading támogatással."
    ],
    "helyes": "CDN használata, TLS 1.3 bevezetése, connection pooling alkalmazása és load balancer beállítása SSL termination funkcióval."
  },
  {
    "szoveg": "Ha egy webszerveren bevezetjük a HTTP/2 protokollt és a TLS 1.3-at, milyen várható teljesítményjavulásra számíthatunk a hagyományos HTTP/1.1 és TLS 1.2 konfigurációhoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kapcsolat létesítési idő csökken a gyorsabb TLS kézfogásnak köszönhetően, és több kérés kezelhető párhuzamosan egy kapcsolaton belül a multiplexing miatt.",
      "A szerver erőforrás-kihasználtsága optimalizálódik a fejlett kapcsolatkezelésnek és a modern titkosítási mechanizmusoknak köszönhetően, ami gyorsabb válaszidőket eredményez.",
      "Az adatátviteli sebesség jelentősen javul a fejlett protokoll-optimalizációknak és a kapcsolatok hatékonyabb újrafelhasználásának köszönhetően a kérések során."
    ],
    "helyes": "A kapcsolat létesítési idő csökken a gyorsabb TLS kézfogásnak köszönhetően, és több kérés kezelhető párhuzamosan egy kapcsolaton belül a multiplexing miatt."
  },
  {
    "szoveg": "Egy biztonsági audit során hogyan értékelné azt a javaslatot, hogy a HTTPS teljesítmény növelése érdekében vezessék be a 0-RTT (Zero Round Trip Time) funkciót minden API végponton?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A 0-RTT csak olyan végpontokon alkalmazható, ahol az újrajátszásos támadások nem jelentenek kockázatot, például csak olvasási műveleteknél.",
      "A 0-RTT protokoll kizárólag olyan speciális esetekben implementálható biztonságosan, ahol a kapcsolat teljesítménye kritikus, és a TLS 1.3 további biztonsági mechanizmusai kompenzálják a kockázatokat.",
      "A 0-RTT technológia bevezetése kizárólag olyan végpontokon mérlegelhető, ahol a kapcsolat sebessége elsődleges szempont, és a biztonsági követelmények másodlagosak."
    ],
    "helyes": "A 0-RTT csak olyan végpontokon alkalmazható, ahol az újrajátszásos támadások nem jelentenek kockázatot, például csak olvasási műveleteknél."
  },
  {
    "szoveg": "Hogyan befolyásolja a CDN a webtartalmak elérési sebességét egy globális webszolgáltatás esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználóhoz földrajzilag közelebb lévő szerverek gyorsabb válaszidőt biztosítanak a tartalom kiszolgálásában, csökkentve a késleltetést.",
      "A CDN szerverek közötti folyamatos szinkronizáció és a tartalom replikációs mechanizmusok összetett működése miatt a válaszidő növekszik a hálózati terhelés függvényében.",
      "A CDN infrastruktúra kizárólag a sávszélesség optimalizálására fókuszál a különböző régiók között, de a tényleges tartalomkiszolgálás sebességét nem befolyásolja érdemben."
    ],
    "helyes": "A felhasználóhoz földrajzilag közelebb lévő szerverek gyorsabb válaszidőt biztosítanak a tartalom kiszolgálásában, csökkentve a késleltetést."
  },
  {
    "szoveg": "Egy globális videóstreaming szolgáltatás esetén hogyan működik együtt a CDN rendszer különböző komponensei a hatékony tartalomszolgáltatás érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A load balancer a felhasználó földrajzi helyzetét elemezve a legközelebbi edge szerverhez irányítja a kérést, amely cache-eli és szolgálja ki a gyakran kért tartalmakat.",
      "A terheléselosztó rendszer elemzi a felhasználói kéréseket és az origin szerver terhelését, majd ennek alapján osztja szét a forgalmat a hálózatban található szerverek között, figyelmen kívül hagyva a földrajzi optimalizációt.",
      "Az edge szerverek és az origin szerver közötti folyamatos kommunikáció során a rendszer automatikusan meghatározza a kiszolgálás útvonalát, miközben a tartalmak elérhetőségét és a hálózati terhelést monitorozza."
    ],
    "helyes": "A load balancer a felhasználó földrajzi helyzetét elemezve a legközelebbi edge szerverhez irányítja a kérést, amely cache-eli és szolgálja ki a gyakran kért tartalmakat."
  },
  {
    "szoveg": "Egy vállalati weboldal fejlesztőjeként hogyan implementálná a CDN használatát a statikus tartalmak (képek, CSS, JavaScript fájlok) kiszolgálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A statikus erőforrások URL-jeit a CDN domain-jére mutató hivatkozásokra cserélem, és beállítom a megfelelő cache-elési szabályokat a CDN konfigurációjában.",
      "Létrehozok egy globális elosztott rendszert a statikus tartalmak szinkronizálására, ahol minden régióban dedikált szerverek működnek automatikus replikációval és terheléselosztással.",
      "Implementálok egy központi proxy réteget a webszerver előtt, ami intelligens útválasztással és dinamikus cache-eléssel továbbítja a kéréseket a megfelelő CDN végpontokra."
    ],
    "helyes": "A statikus erőforrások URL-jeit a CDN domain-jére mutató hivatkozásokra cserélem, és beállítom a megfelelő cache-elési szabályokat a CDN konfigurációjában."
  },
  {
    "szoveg": "Milyen szempontok alapján érdemes dönteni egy kisméretű, lokális webshop esetében a CDN szolgáltatás bevezetéséről?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A célközönség földrajzi eloszlása, a forgalom mennyisége és a költség-haszon arány alapján, figyelembe véve, hogy lokális felhasználóbázis esetén a CDN többletköltsége nem feltétlenül térül meg.",
      "A webshop jelenlegi és várható forgalmi adatai, a termékképek és tartalmak mennyisége, valamint a felhasználói élmény szempontjai alapján, figyelembe véve a technikai infrastruktúra hosszú távú skálázhatóságát.",
      "A piaci versenytársak technológiai megoldásainak elemzése és a nemzetközi trendek alapján, különös tekintettel a felhasználói elvárásokra és a webshop jövőbeli növekedési potenciáljára a globális piacon."
    ],
    "helyes": "A célközönség földrajzi eloszlása, a forgalom mennyisége és a költség-haszon arány alapján, figyelembe véve, hogy lokális felhasználóbázis esetén a CDN többletköltsége nem feltétlenül térül meg."
  },
  {
    "szoveg": "Egy vállalat hálózati infrastruktúrájában hogyan érvényesül a védelem mélysége koncepció a hálózati forgalom védelme során?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A külső tűzfal szűri a bejövő forgalmat, a belső szegmentálás korlátozza a laterális mozgást, míg az alkalmazásszintű tűzfalak a specifikus szolgáltatásokat védik.",
      "A többrétegű védelmi rendszer tartalmaz külső és belső tűzfalakat, hálózati szegmentációt és forgalomfigyelő rendszereket, amelyek központosított felügyelettel működnek.",
      "A komplex biztonsági architektúra magában foglalja a perimeter védelmet, a hálózati zónák elkülönítését és a szolgáltatás-specifikus védelmi mechanizmusokat."
    ],
    "helyes": "A külső tűzfal szűri a bejövő forgalmat, a belső szegmentálás korlátozza a laterális mozgást, míg az alkalmazásszintű tűzfalak a specifikus szolgáltatásokat védik."
  },
  {
    "szoveg": "Egy banki környezetben hogyan épül fel a védelem mélysége az ügyféladatok védelme érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fizikai beléptetés ellenőrzése, hálózati szegmentálás, titkosított adattárolás, hozzáférés-szabályozás és folyamatos monitorozás együttes alkalmazása.",
      "Többszintű azonosítási rendszerek implementálása, rendszeres biztonsági auditok végrehajtása, valamint szigorú jogosultságkezelés és naplózási folyamatok alkalmazása a",
      "teljes infrastruktúrában.",
      "Komplex biztonsági protokollok bevezetése, redundáns tűzfalrendszerek üzemeltetése, valamint titkosított adattárolás és valós idejű biztonsági eseménykezelés megvalósítása."
    ],
    "helyes": "Fizikai beléptetés ellenőrzése, hálózati szegmentálás, titkosított adattárolás, hozzáférés-szabályozás és folyamatos monitorozás együttes alkalmazása."
  },
  {
    "szoveg": "Egy vállalati rendszergazda hogyan alkalmazhatja a védelem mélysége koncepciót egy új webszolgáltatás bevezetésekor?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "DMZ-be helyezi a webszervert, WAF-ot telepít, többfaktoros authentikációt vezet be, és rendszeres biztonsági auditokat végez.",
      "Többrétegű biztonsági infrastruktúrát implementál, beleértve a hálózati szegmentálást, forgalomszűrést és rendszeres biztonsági frissítéseket.",
      "Komplex védelmi rendszert alakít ki, amely magában foglalja a hozzáférés-szabályozást, titkosítást és folyamatos monitorozást."
    ],
    "helyes": "DMZ-be helyezi a webszervert, WAF-ot telepít, többfaktoros authentikációt vezet be, és rendszeres biztonsági auditokat végez."
  },
  {
    "szoveg": "Egy középméretű vállalat biztonsági rendszerének értékelésekor mely megközelítés tekinthető megfelelőnek a védelem mélysége szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű védelem, amely tartalmaz perimeter védelmet, belső szegmentálást, végpontvédelmet és rendszeres biztonsági képzéseket a felhasználóknak.",
      "Komplex határvédelmi rendszer implementálása, amely magában foglalja a fejlett tűzfalakat, behatolás-észlelő rendszereket és forgalomszűrést, kiegészítve rendszeres biztonsági auditokkal.",
      "Átfogó végpontvédelmi stratégia alkalmazása, amely egyesíti a fejlett malware védelmet, titkosítást, hozzáférés-kezelést és automatizált biztonsági frissítéseket minden eszközön."
    ],
    "helyes": "Többrétegű védelem, amely tartalmaz perimeter védelmet, belső szegmentálást, végpontvédelmet és rendszeres biztonsági képzéseket a felhasználóknak."
  },
  {
    "szoveg": "Hogyan különbözik a Zero Trust modell és a hagyományos perimétervédelem a belső hálózat kezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A perimétervédelem megbízhatónak tekinti a belső hálózatot, míg a Zero Trust minden belső kapcsolatot is folyamatosan ellenőriz és hitelesít.",
      "A perimétervédelem kizárólag a határvonalakon alkalmaz biztonsági ellenőrzéseket, míg a Zero Trust minden egyes hozzáférési pontnál szigorú azonosítást és folyamatos monitorozást követel meg.",
      "A perimétervédelem statikus biztonsági szabályokat alkalmaz a hálózati határok mentén, miközben a Zero Trust dinamikus ellenőrzéseket végez minden egyes tranzakció során."
    ],
    "helyes": "A perimétervédelem megbízhatónak tekinti a belső hálózatot, míg a Zero Trust minden belső kapcsolatot is folyamatosan ellenőriz és hitelesít."
  },
  {
    "szoveg": "Mit jelent a Zero Trust modellben a mikroszegmentáció koncepciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat kisebb, izolált szegmensekre osztását, ahol minden szegmens között szigorú hozzáférés-szabályozás működik.",
      "A hálózati erőforrások logikai elkülönítését és dinamikus izolációját, ahol minden szegmens között automatizált biztonsági ellenőrzések futnak.",
      "A hálózati infrastruktúra moduláris felosztását különálló biztonsági zónákra, ahol minden kapcsolódási pont szigorú authentikációt igényel."
    ],
    "helyes": "A hálózat kisebb, izolált szegmensekre osztását, ahol minden szegmens között szigorú hozzáférés-szabályozás működik."
  },
  {
    "szoveg": "Egy vállalat távmunkára áll át. Hogyan építene fel egy Zero Trust alapú biztonsági modellt?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többfaktoros hitelesítés bevezetése, eszközállapot-ellenőrzés, titkosított VPN kapcsolatok, folyamatos hozzáférés-monitorozás és automatikus jogosultságkezelés implementálása.",
      "Fejlett biztonsági protokollok implementálása, valós idejű eszközazonosítás és hozzáférés-felügyelet, dinamikus jogosultságkezelés VPN-en keresztül, és részletes biztonsági naplózás bevezetése.",
      "Intelligens hálózati szegmentáció kialakítása, folyamatos biztonsági auditok végrehajtása, adaptív hozzáférés-szabályozás és titkosított kommunikációs csatornák létrehozása."
    ],
    "helyes": "Többfaktoros hitelesítés bevezetése, eszközállapot-ellenőrzés, titkosított VPN kapcsolatok, folyamatos hozzáférés-monitorozás és automatikus jogosultságkezelés implementálása."
  },
  {
    "szoveg": "Egy nagyvállalat szempontjából melyik állítás értékeli helyesen a Zero Trust modell bevezetésének következményeit?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Bár a kezdeti bevezetési költségek és komplexitás magasak, hosszú távon a jobb biztonság és a rugalmasabb működés miatt megtérülő befektetés.",
      "A jelentős kezdeti erőforrásigény és összetettség miatt csak kivételes esetekben ajánlott a bevezetése, amikor a hagyományos biztonsági megoldások már nem elegendőek a modern kihívások kezelésére.",
      "A bevezetési folyamat gondos tervezést és jelentős szervezeti átalakítást igényel, de a modern kiberfenyegetések elleni védelem szempontjából elkerülhetetlen technológiai fejlesztésnek tekinthető."
    ],
    "helyes": "Bár a kezdeti bevezetési költségek és komplexitás magasak, hosszú távon a jobb biztonság és a rugalmasabb működés miatt megtérülő befektetés."
  },
  {
    "szoveg": "Egy vállalat hálózati infrastruktúrájában több különböző biztonsági megoldást alkalmaznak párhuzamosan. Mi a többrétegű védelem (defense in depth) legfontosabb előnye ebben a kontextusban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ha egy biztonsági réteg kompromittálódik, a többi réteg továbbra is védelmet nyújt a rendszernek, így csökkentve a teljes rendszer sebezhetőségét.",
      "A különböző biztonsági rétegek együttesen biztosítják a rendszer védelmét, ahol minden réteg egyedi módon járul hozzá a teljes infrastruktúra biztonságához és stabilitásához.",
      "A többszörös védelmi mechanizmusok egymást kiegészítve működnek, így biztosítva a rendszer folyamatos védelmét és az esetleges biztonsági incidensek hatékony kezelését."
    ],
    "helyes": "Ha egy biztonsági réteg kompromittálódik, a többi réteg továbbra is védelmet nyújt a rendszernek, így csökkentve a teljes rendszer sebezhetőségét."
  },
  {
    "szoveg": "Egy nagyvállalat új biztonsági architektúrát tervez. Hogyan kell felépíteni a védelmi rétegeket a leghatékonyabb védelem érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kívülről befelé haladva: hálózati védelem (tűzfal, IDS), rendszervédelem (OS hardening), alkalmazásvédelem, végül adatvédelem (titkosítás), minden rétegnél különböző védelmi mechanizmusokkal.",
      "Többszintű hálózati határvédelem kialakítása fejlett tűzfalakkal, behatolásdetektáló rendszerekkel és biztonsági zónákkal, kiegészítve folyamatos monitorozással és incidenskezeléssel.",
      "Integrált védelmi rendszer implementálása, amely magában foglalja a hálózati határvédelmet, központosított hozzáférés-kezelést és titkosítást, valamint valós idejű biztonsági monitorozást."
    ],
    "helyes": "Kívülről befelé haladva: hálózati védelem (tűzfal, IDS), rendszervédelem (OS hardening), alkalmazásvédelem, végül adatvédelem (titkosítás), minden rétegnél különböző védelmi mechanizmusokkal."
  },
  {
    "szoveg": "Egy vállalat új webalkalmazást fejleszt, amely érzékeny adatokat kezel. Hogyan kell alkalmazni a többrétegű biztonsági modellt ebben az esetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "WAF használata a webes támadások ellen, erős autentikáció implementálása, adatbázis titkosítás és hozzáférés-szabályozás bevezetése, rendszeres biztonsági auditok végzése.",
      "Többszintű tűzfalrendszer implementálása, biztonsági tokenek alkalmazása a hozzáférés-kezelésben, titkosított adattárolás és adatátvitel megvalósítása, valamint rendszeres penetrációs tesztek végrehajtása.",
      "Fejlett hálózati monitorozó rendszerek telepítése, többfaktoros azonosítás bevezetése, adatbázis szintű jogosultságkezelés kialakítása és automatizált biztonsági ellenőrzések ütemezése."
    ],
    "helyes": "WAF használata a webes támadások ellen, erős autentikáció implementálása, adatbázis titkosítás és hozzáférés-szabályozás bevezetése, rendszeres biztonsági auditok végzése."
  },
  {
    "szoveg": "Egy vállalat biztonsági architektúrájának értékelésekor melyik megközelítés tekinthető a legmegfelelőbbnek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A védelmi rétegek közötti kapcsolatok és átfedések elemzése, a biztonsági incidensek statisztikáinak vizsgálata, és a védelem költség-hatékonyságának értékelése.",
      "A biztonsági rendszerek integrációjának és hatékonyságának részletes elemzése, a technológiai megoldások korszerűségének felmérése, valamint a beruházások megtérülésének vizsgálata.",
      "A védelmi mechanizmusok működési hatékonyságának komplex értékelése, az incidenskezelési folyamatok eredményességének mérése és az erőforrás-felhasználás optimalizálása."
    ],
    "helyes": "A védelmi rétegek közötti kapcsolatok és átfedések elemzése, a biztonsági incidensek statisztikáinak vizsgálata, és a védelem költség-hatékonyságának értékelése."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Next-Generation Firewall (NGFW) mélyreható csomagvizsgálatának (DPI) szerepét a modern hálózati biztonságban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DPI lehetővé teszi a csomagok tartalmának részletes elemzését, így az alkalmazás-szintű fenyegetések azonosítását és blokkolását, függetlenül a használt portoktól és protokolloktól.",
      "A DPI technológia részletes protokoll-elemzést és valós idejű forgalomfigyelést végez, de csak előre definiált biztonsági szabályok alapján képes a veszélyes tartalmak kiszűrésére a hálózati forgalomból.",
      "A DPI rendszer folyamatosan monitorozza és elemzi a hálózati forgalmat, azonosítja az alkalmazásokat és protokollokat, de csak a nem titkosított kommunikáció esetén képes teljes körű védelmet nyújtani."
    ],
    "helyes": "A DPI lehetővé teszi a csomagok tartalmának részletes elemzését, így az alkalmazás-szintű fenyegetések azonosítását és blokkolását, függetlenül a használt portoktól és protokolloktól."
  },
  {
    "szoveg": "Egy vállalat új NGFW-t telepít, és Ön azt a feladatot kapja, hogy konfigurálja az alkalmazás-szintű szabályokat. Melyik megközelítés biztosítja a leghatékonyabb védelmet a modern fenyegetésekkel szemben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazások azonosítása és kategorizálása után részletes szabályrendszer létrehozása, amely figyelembe veszi az alkalmazások kockázati szintjét és a felhasználói szerepköröket.",
      "A hálózati forgalom mélyreható elemzése alapján egyedi szabályrendszer kialakítása, amely figyelembe veszi az alkalmazások viselkedését és a biztonsági kockázatokat, miközben optimalizálja a rendszer erőforrásait.",
      "Az alkalmazások részletes biztonsági auditálása után olyan többszintű védelmi mechanizmus implementálása, amely az ismert sérülékenységek és viselkedési minták alapján szűri a forgalmat."
    ],
    "helyes": "Az alkalmazások azonosítása és kategorizálása után részletes szabályrendszer létrehozása, amely figyelembe veszi az alkalmazások kockázati szintjét és a felhasználói szerepköröket."
  },
  {
    "szoveg": "Egy komplex támadási kísérlet során hogyan működik együtt az NGFW különböző védelmi mechanizmusai a fenyegetés elhárításában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DPI azonosítja a gyanús mintázatokat, az IPS blokkolja a támadást, az SSL vizsgálat a titkosított forgalmat ellenőrzi, míg a viselkedés-elemzés a további gyanús tevékenységeket figyeli.",
      "A különböző védelmi mechanizmusok párhuzamosan elemzik a hálózati forgalmat, de csak a legmagasabb prioritású komponens riasztása alapján történik beavatkozás a rendszer optimális teljesítménye érdekében.",
      "Az NGFW komponensei előre meghatározott sorrendben vizsgálják a forgalmat, ahol minden réteg saját speciális elemzést végez, és csak kritikus fenyegetés esetén aktiválódik az összes védelmi mechanizmus."
    ],
    "helyes": "A DPI azonosítja a gyanús mintázatokat, az IPS blokkolja a támadást, az SSL vizsgálat a titkosított forgalmat ellenőrzi, míg a viselkedés-elemzés a további gyanús tevékenységeket figyeli."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy NGFW megoldás megfelelősége egy nagyvállalat számára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A teljesítmény, skálázhatóság, integrációs képességek, automatizálási lehetőségek és a részletes jelentési funkciók együttes értékelése alapján, figyelembe véve a vállalat specifikus biztonsági követelményeit.",
      "A beszerzési költség, üzemeltetési erőforrásigény, gyártói támogatás minősége és időtartama, valamint a technológiai fejlesztési ütemterv részletes elemzése alapján, figyelembe véve a vállalat pénzügyi lehetőségeit.",
      "A fenyegetések elleni védelem hatékonysága, a hálózati forgalom elemzési képességek, a biztonsági szabályrendszer testreszabhatósága és a valós idejű monitorozási lehetőségek átfogó vizsgálata alapján."
    ],
    "helyes": "A teljesítmény, skálázhatóság, integrációs képességek, automatizálási lehetőségek és a részletes jelentési funkciók együttes értékelése alapján, figyelembe véve a vállalat specifikus biztonsági követelményeit."
  },
  {
    "szoveg": "Egy vállalat hálózatában több különböző biztonsági zónát alakítottak ki, ahol a belső hálózat, a DMZ és az internetes kapcsolat különböző tűzfalakkal van elválasztva. Mi a jelentősége ennek a többrétegű megközelítésnek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A különböző biztonsági zónák és tűzfalak együttesen mélyebb védelmet biztosítanak, mivel egy védelem áttörése esetén további akadályokba ütközik a támadó.",
      "A többszintű biztonsági architektúra lehetővé teszi a hálózati forgalom hatékonyabb szűrését és ellenőrzését, miközben az egyes rétegek között szigorú ellenőrzési pontokat hoz létre.",
      "A szegmentált biztonsági struktúra révén minden zóna egyedi védelmi protokollokat alkalmaz, ami jelentősen megnöveli a teljes rendszer védelmi képességeit és ellenállóságát."
    ],
    "helyes": "A különböző biztonsági zónák és tűzfalak együttesen mélyebb védelmet biztosítanak, mivel egy védelem áttörése esetén további akadályokba ütközik a támadó."
  },
  {
    "szoveg": "Egy nagyvállalat új biztonsági architektúrát tervez, ahol a belső hálózatot, a vendég WiFi-t és a szervereket különböző zónákba kell szervezni. Hogyan valósítaná meg a megfelelő szegmentálást a biztonság maximalizálása érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szervereket DMZ-be helyezném, a belső hálózatot és vendég WiFi-t külön VLAN-okba szervezném, mindegyik zóna között állapottartó tűzfalakkal és szigorú forgalmi szabályokkal.",
      "A hálózati zónákat dedikált tűzfalakkal és biztonsági eszközökkel szeparálnám, a szervereket DMZ-be helyezném, a felhasználói szegmenseket pedig szigorú hozzáférés-vezérléssel és forgalommonitorozással különíteném el.",
      "Többrétegű védelmi rendszert implementálnék, ahol a szerverek DMZ-ben, a felhasználói hálózatok elkülönített VLAN-okban kapnának helyet, kiegészítve IPS/IDS rendszerekkel és részletes naplózással."
    ],
    "helyes": "A szervereket DMZ-be helyezném, a belső hálózatot és vendég WiFi-t külön VLAN-okba szervezném, mindegyik zóna között állapottartó tűzfalakkal és szigorú forgalmi szabályokkal."
  },
  {
    "szoveg": "Egy vállalat új tűzfal-szabálykészletet implementál. Melyik megközelítés biztosítja a legnagyobb biztonságot a gyakorlati használhatóság megtartása mellett?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alapértelmezett tiltás beállítása, majd csak a dokumentált és jóváhagyott üzleti igényekhez szükséges forgalom explicit engedélyezése, részletes naplózással.",
      "Alapértelmezett engedélyezés beállítása, majd a kockázatelemzés alapján azonosított veszélyes forgalmak fokozatos tiltása, folyamatos monitorozás és biztonsági auditálás mellett.",
      "Többszintű biztonsági zónák kialakítása szigorú hozzáférés-szabályozással, valamint az alkalmazás- és protokoll-szintű forgalom részletes vizsgálata és szűrése."
    ],
    "helyes": "Alapértelmezett tiltás beállítása, majd csak a dokumentált és jóváhagyott üzleti igényekhez szükséges forgalom explicit engedélyezése, részletes naplózással."
  },
  {
    "szoveg": "Egy vállalat tűzfal architektúrájának értékelése során melyik szempontrendszer alapján lehet leghatékonyabban megítélni annak megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A biztonsági zónák megfelelő szeparációja, a szabályrendszer granularitása, a naplózás részletessége és a rendszeres biztonsági auditok eredményei alapján.",
      "A hálózati forgalom elemzése, a biztonsági incidensek statisztikái, a teljesítménymutatók és a válaszidők részletes monitorozása, valamint a rendszerterhelés vizsgálata alapján.",
      "A tűzfal konfigurációs beállításainak komplexitása, a biztonsági protokollok implementációjának mélysége, valamint a hálózati szegmentáció hatékonysági mutatói alapján."
    ],
    "helyes": "A biztonsági zónák megfelelő szeparációja, a szabályrendszer granularitása, a naplózás részletessége és a rendszeres biztonsági auditok eredményei alapján."
  },
  {
    "szoveg": "Mi a legfontosabb működési különbség az IDS és IPS rendszerek között a hálózati forgalom kezelése szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IDS csak megfigyeli a hálózati forgalom másolatát, míg az IPS inline módon, aktívan kezeli az áthaladó forgalmat",
      "Az IDS passzívan monitorozza a hálózati forgalmat és jelentéseket készít, míg az IPS valós időben szűri és módosítja az áthaladó adatcsomagokat",
      "Az IDS kizárólag a hálózati események naplózását végzi távoli megfigyelőként, míg az IPS közvetlenül a forgalom útvonalába épülve végez biztonsági ellenőrzést"
    ],
    "helyes": "Az IDS csak megfigyeli a hálózati forgalom másolatát, míg az IPS inline módon, aktívan kezeli az áthaladó forgalmat"
  },
  {
    "szoveg": "Hogyan értelmezhetjük az anomália alapú detektálás működését a behatolásérzékelő rendszerekben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer először megtanulja a normál működési mintákat, majd riaszt, ha jelentős eltérést észlel ettől a viselkedéstől",
      "A rendszer folyamatosan elemzi és összehasonlítja a hálózati forgalmat előre meghatározott biztonsági szabályokkal, majd jelzi az esetleges eltéréseket",
      "A rendszer valós időben monitorozza a hálózati aktivitást, és a beépített szignatúrák alapján azonosítja a potenciális biztonsági fenyegetéseket"
    ],
    "helyes": "A rendszer először megtanulja a normál működési mintákat, majd riaszt, ha jelentős eltérést észlel ettől a viselkedéstől"
  },
  {
    "szoveg": "Egy vállalati hálózatban hogyan működne együtt az IDS és IPS rendszer egy többrétegű védelmi stratégiában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IPS a kritikus rendszerek előtt blokkolja a támadásokat, míg az IDS a teljes hálózatot monitorozza és részletes elemzést biztosít a biztonsági eseményekről",
      "Az IDS és IPS rendszerek párhuzamosan működnek különböző hálózati szegmensekben, ahol az IPS aktív védelmet nyújt, míg az IDS folyamatos megfigyelést és naplózást végez a teljes infrastruktúrában",
      "Az IPS valós idejű védelmet biztosít a kritikus pontokon, miközben az IDS átfogó hálózati analízist végez és riasztásokat generál a biztonsági incidensek esetén"
    ],
    "helyes": "Az IPS a kritikus rendszerek előtt blokkolja a támadásokat, míg az IDS a teljes hálózatot monitorozza és részletes elemzést biztosít a biztonsági eseményekről"
  },
  {
    "szoveg": "Egy nagyvállalati környezetben mely esetben indokolt kizárólag IDS rendszer telepítése IPS helyett?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Amikor a fő cél a megfelelőségi audit és biztonsági események utólagos elemzése, és a valós idejű beavatkozás üzleti kockázatot jelentene",
      "Amikor a hálózati forgalom folyamatos monitorozása és naplózása szükséges, de az automatikus beavatkozás veszélyeztetné a kritikus üzleti folyamatok zavartalan működését",
      "Amikor a biztonsági események részletes dokumentálása és elemzése elsődleges prioritás, és a valós idejű beavatkozások potenciális üzemszünetet okozhatnak"
    ],
    "helyes": "Amikor a fő cél a megfelelőségi audit és biztonsági események utólagos elemzése, és a valós idejű beavatkozás üzleti kockázatot jelentene"
  },
  {
    "szoveg": "Egy nagyvállalat hálózatában az IDS/IPS rendszer teljesítménye csökken a növekvő forgalom miatt. Mit jelent ebben a kontextusban a horizontális skálázás?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több párhuzamos IDS/IPS eszköz telepítése és a hálózati forgalom elosztása közöttük terheléselosztók segítségével",
      "Az IDS/IPS infrastruktúra kiterjesztése több azonos képességű eszközzel és a hálózati forgalom intelligens elosztása load balancing megoldásokkal",
      "A biztonsági monitorozó rendszer kapacitásának növelése párhuzamos feldolgozó egységek implementálásával és forgalom-szétosztó mechanizmusokkal"
    ],
    "helyes": "Több párhuzamos IDS/IPS eszköz telepítése és a hálózati forgalom elosztása közöttük terheléselosztók segítségével"
  },
  {
    "szoveg": "Egy komplex vállalati környezetben hogyan építene fel egy skálázható IDS/IPS architektúrát a következő követelményekkel: 24/7 működés, 99.99% rendelkezésre állás, 40Gbps aggregált forgalom?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hierarchikus architektúra load balancerekkel, redundáns IDS/IPS klaszterekkel minden rétegben, központi menedzsmenttel és automatikus failover megoldással",
      "Többrétegű architektúra georedundáns adatközpontokkal, terheléselosztott IDS/IPS klaszterekkel és valós idejű szinkronizációval ellátott magas rendelkezésre állású menedzsment rendszerrel",
      "Elosztott architektúra redundáns IDS/IPS komponensekkel, intelligens forgalomirányítással és automatizált feladatátvételi mechanizmusokkal, központosított felügyelettel kiegészítve"
    ],
    "helyes": "Hierarchikus architektúra load balancerekkel, redundáns IDS/IPS klaszterekkel minden rétegben, központi menedzsmenttel és automatikus failover megoldással"
  },
  {
    "szoveg": "Egy vállalat új 100 Gbps gerinchálózatot telepít. Hogyan alkalmazná az IDS/IPS rendszereket a nagy sebességű forgalom hatékony vizsgálatához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Forgalom szegmentálása és elosztása több párhuzamos IDS/IPS között, intelligens mintavételezéssel és adaptív szabályrendszerrel",
      "A hálózati forgalom elosztott feldolgozása dedikált hardveres IDS/IPS klaszterekkel, valós idejű anomália detektálással és dinamikus terheléskezeléssel",
      "Többszintű biztonsági architektúra implementálása elosztott IDS/IPS komponensekkel, gépi tanulás alapú mintázatfelismeréssel és adaptív szűréssel"
    ],
    "helyes": "Forgalom szegmentálása és elosztása több párhuzamos IDS/IPS között, intelligens mintavételezéssel és adaptív szabályrendszerrel"
  },
  {
    "szoveg": "Egy nagyvállalat több telephellyel rendelkezik, mindegyiken saját IDS/IPS rendszerrel. Melyik megközelítés a legmegfelelőbb a teljes infrastruktúra védelméhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hierarchikus, központilag menedzselt architektúra helyi autonómiával, egységes szabályrendszerrel és lokális finomhangolási lehetőséggel",
      "Decentralizált biztonsági architektúra független telephelyi menedzsmenttel, amely lehetővé teszi a helyi szabályok testreszabását, de korlátozza az egységes védelmi képességeket",
      "Központosított biztonsági felügyelet egységes szabályrendszerrel és automatizált távoli érzékeléssel, amely standardizált védelmet biztosít minden telephelyen keresztül"
    ],
    "helyes": "Hierarchikus, központilag menedzselt architektúra helyi autonómiával, egységes szabályrendszerrel és lokális finomhangolási lehetőséggel"
  },
  {
    "szoveg": "Egy webshop folyamatosan lassú válaszidőket és időszakos elérhetetlenséget tapasztal. A naplófájlok azt mutatják, hogy másodpercenként több ezer HTTP GET kérés érkezik különböző IP címekről, amelyek mind ugyanazt a termékkereső oldalt célozzák. Mit jelez ez a helyzet?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Alkalmazásréteg szintű DDoS támadást, amely a webszerver erőforrásait meríti ki célzott HTTP GET kérésekkel",
      "Túlterheléses forgalmi csúcsot, amely során több ezer felhasználó egyidejű kérése meríti ki a webszerver erőforrásait és processzorkapacitását",
      "Elosztott hálózati támadást, amely a webszerver feldolgozási kapacitását és erőforrásait célozza ismétlődő HTTP kérésekkel különböző forrásokból"
    ],
    "helyes": "Alkalmazásréteg szintű DDoS támadást, amely a webszerver erőforrásait meríti ki célzott HTTP GET kérésekkel"
  },
  {
    "szoveg": "Az alábbi támadási minták közül melyik tartozik a protokoll alapú DDoS támadások kategóriájába?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Nagy mennyiségű félbehagyott TCP kapcsolat kezdeményezése SYN csomagokkal, amely a szerver kapcsolati táblázatát telíti",
      "Nagy mennyiségű speciálisan formázott DNS lekérdezés küldése hamis forráscímmel, amely a rekurzív feldolgozás során túlterheli a kiszolgáló erőforrásait",
      "Nagyszámú összetett HTTP kérés kezdeményezése részleges adatküldéssel, amely hosszú ideig foglalja a webszerver feldolgozási erőforrásait"
    ],
    "helyes": "Nagy mennyiségű félbehagyott TCP kapcsolat kezdeményezése SYN csomagokkal, amely a szerver kapcsolati táblázatát telíti"
  },
  {
    "szoveg": "Egy vállalat DDoS védelmi rendszert szeretne implementálni. Melyik megoldáskombináció lenne a leghatékonyabb a különböző típusú támadások ellen?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "CDN szolgáltatás, WAF implementáció és forgalomszűrő rendszer együttes használata, kiegészítve terheléselosztással",
      "Több szolgáltatón keresztüli redundáns internetkapcsolat kiépítése, fejlett forgalommonitorozással és automatikus támadásdetektálással kiegészítve",
      "Elosztott architektúrájú tűzfalrendszer implementálása, intelligens forgalomelemzéssel és valós idejű támadásmegelőző mechanizmusokkal"
    ],
    "helyes": "CDN szolgáltatás, WAF implementáció és forgalomszűrő rendszer együttes használata, kiegészítve terheléselosztással"
  },
  {
    "szoveg": "Egy nagyvállalat biztonsági csapata azt fontolgatja, hogy minden bejövő forgalmat automatikusan egy tisztító központba irányít. Milyen szempontok alapján kell megítélni ennek a stratégiának a helyességét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A döntésnél mérlegelni kell a szolgáltatás költségét, a latency növekedését, és a hamis pozitívok kockázatát a védelmi előnyökkel szemben",
      "A megoldás teljes költséghatékonyságát kell elemezni, beleértve az infrastrukturális követelményeket, az üzemeltetési ráfordításokat és a várható biztonsági incidensek költségeit",
      "Az implementáció technikai komplexitását és annak hosszútávú hatásait kell vizsgálni, figyelembe véve a hálózati teljesítményt és a rendszerek közötti kompatibilitást"
    ],
    "helyes": "A döntésnél mérlegelni kell a szolgáltatás költségét, a latency növekedését, és a hamis pozitívok kockázatát a védelmi előnyökkel szemben"
  },
  {
    "szoveg": "Egy nagyvállalat hálózati infrastruktúrájában miért tekinthető kulcsfontosságú tervezési szempontnak a redundancia?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A redundáns kapcsolatok biztosítják a folyamatos működést és az automatikus hibakezelést hálózati meghibásodások esetén, minimalizálva a szolgáltatáskiesést.",
      "A redundáns kapcsolatok lehetővé teszik a hálózati erőforrások optimális kihasználását és a terheléselosztást, miközben biztosítják a rendszer rugalmas skálázhatóságát.",
      "A redundáns kapcsolatok elsődlegesen a hálózati infrastruktúra monitorozását és a proaktív hibaelhárítást támogatják, javítva az üzemeltetés hatékonyságát."
    ],
    "helyes": "A redundáns kapcsolatok biztosítják a folyamatos működést és az automatikus hibakezelést hálózati meghibásodások esetén, minimalizálva a szolgáltatáskiesést."
  },
  {
    "szoveg": "Egy pénzügyi szolgáltató vállalat új adatközpontjának tervezésekor milyen hálózati topológiát és biztonsági mechanizmusokat alkalmazna az optimális működés érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mesh topológiát többszörös redundáns kapcsolatokkal, fizikailag elkülönített útvonalakkal, és többrétegű biztonsági zónákkal, ahol a kritikus pénzügyi rendszerek külön szegmensen működnek.",
      "Egyszerű csillag topológiát központi kapcsolóval, alapszintű tűzfallal és egyszeres internet kapcsolattal a költséghatékonyság érdekében.",
      "Sín topológiát egyetlen fő kommunikációs csatornával, ahol minden rendszer ugyanazon a hálózati szegmensen osztozik a könnyebb menedzselhetőség érdekében."
    ],
    "helyes": "Mesh topológiát többszörös redundáns kapcsolatokkal, fizikailag elkülönített útvonalakkal, és többrétegű biztonsági zónákkal, ahol a kritikus pénzügyi rendszerek külön szegmensen működnek."
  },
  {
    "szoveg": "Egy meglévő vállalati hálózatban gyakori teljesítményproblémák jelentkeznek. Hogyan alkalmazná a hálózati monitoring eszközöket a probléma megoldásához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több monitoring pontot telepítenék a kritikus csomópontokra, baseline méréseket végeznék, majd a forgalmi minták és teljesítménymutatók elemzésével azonosítanám a szűk keresztmetszeteket.",
      "Részletes hálózati teljesítményelemzést végeznék az eszközökön, majd a kapott adatok alapján új hardverelemeket telepítenék a kritikus pontokon, figyelmen kívül hagyva a monitoring rendszer jelzéseit.",
      "A felhasználói visszajelzéseket összegyűjteném és elemezném, majd ezek alapján végeznék célzott beavatkozásokat a hálózati infrastruktúrában, mellőzve a szisztematikus teljesítményméréseket."
    ],
    "helyes": "Több monitoring pontot telepítenék a kritikus csomópontokra, baseline méréseket végeznék, majd a forgalmi minták és teljesítménymutatók elemzésével azonosítanám a szűk keresztmetszeteket."
  },
  {
    "szoveg": "Egy multinacionális vállalat új gerinchálózati infrastruktúrájának tervezési javaslatait kell értékelnie. Melyik megoldás a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Földrajzilag diverzifikált, DWDM alapú optikai gyűrűk mesh topológiával, automatikus útvonalváltással és többszintű QoS mechanizmusokkal, amely optimális egyensúlyt teremt a redundancia, teljesítmény és költségek között.",
      "Redundáns optikai kapcsolatok földrajzilag elosztott csomópontokkal és dedikált tartalék útvonalakkal, amely magas rendelkezésre állást biztosít, de a komplex architektúra miatt jelentős üzemeltetési költségekkel és menedzselési kihívásokkal jár.",
      "Intelligens forgalomirányítással ellátott, többrétegű hálózati architektúra georedundáns kialakítással és adaptív sávszélesség-menedzsmenttel, amely rugalmas skálázhatóságot biztosít, de a kezdeti implementációs költségek magasak."
    ],
    "helyes": "Földrajzilag diverzifikált, DWDM alapú optikai gyűrűk mesh topológiával, automatikus útvonalváltással és többszintű QoS mechanizmusokkal, amely optimális egyensúlyt teremt a redundancia, teljesítmény és költségek között."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz az SSL/TLS, IPsec és SSH protokollok működési rétege és alkalmazhatósága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SSL/TLS és SSH az alkalmazási rétegben működik és alkalmazásspecifikus, míg az IPsec a hálózati rétegben működik és transzparens az alkalmazások számára",
      "A szállítási rétegben az SSL/TLS és SSH specifikus alkalmazási protokollokat használ, míg az IPsec a hálózati forgalom teljes körű titkosítását végzi, de mindegyik különböző implementációs követelményekkel rendelkezik",
      "Az IPsec a hálózati rétegben biztosít titkosítást minden alkalmazás számára, míg az SSL/TLS és SSH az alkalmazási rétegben nyújt célzott védelmet, de eltérő konfigurációs beállításokat igényelnek"
    ],
    "helyes": "Az SSL/TLS és SSH az alkalmazási rétegben működik és alkalmazásspecifikus, míg az IPsec a hálózati rétegben működik és transzparens az alkalmazások számára"
  },
  {
    "szoveg": "Milyen következményekkel jár az IPsec hálózati rétegben való működése a biztonságos kommunikáció szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az alkalmazásoknak nem kell tudniuk a biztonsági mechanizmusokról, mivel a védelem automatikusan kiterjed minden IP-alapú kommunikációra",
      "Az alkalmazásoknak nincs szükségük egyedi biztonsági beállításokra, mivel a hálózati réteg korlátozza a kommunikációt, de ez csökkenti a teljesítményt",
      "Az alkalmazások számára láthatatlan a biztonsági mechanizmus működése, de ez korlátozza a protokollok rugalmasságát és a hálózati kommunikációt"
    ],
    "helyes": "Az alkalmazásoknak nem kell tudniuk a biztonsági mechanizmusokról, mivel a védelem automatikusan kiterjed minden IP-alapú kommunikációra"
  },
  {
    "szoveg": "Egy vállalat biztonságos távoli munkavégzést szeretne bevezetni. Melyik protokoll-kombinációt érdemes alkalmazni a különböző felhasználási esetekhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "IPsec VPN a hálózati kapcsolathoz, SSH a szerverek adminisztrációjához, és SSL/TLS a webes alkalmazások eléréséhez",
      "SSL/TLS protokoll alkalmazása a hálózati kapcsolatok titkosítására, kiegészítve dedikált biztonsági átjárókkal és többfaktoros hitelesítéssel a különböző rendszerek eléréséhez",
      "SSH protokoll implementálása az összes távoli kapcsolat titkosítására, kiegészítve fejlett hozzáférés-kezeléssel és rendszeres biztonsági auditálással a maximális védelem érdekében"
    ],
    "helyes": "IPsec VPN a hálózati kapcsolathoz, SSH a szerverek adminisztrációjához, és SSL/TLS a webes alkalmazások eléréséhez"
  },
  {
    "szoveg": "Egy új webes banki alkalmazás fejlesztésénél melyik biztonsági protokoll választása a legmegfelelőbb, és miért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "TLS (Transport Layer Security), mert szabványos tanúsítványrendszert használ, széles körben támogatott, és biztonságos kapcsolatot biztosít a webes alkalmazások számára",
      "IPsec protokoll, mert szabványos hálózati rétegbeli védelmet és tanúsítványalapú hitelesítést biztosít, valamint támogatja a különböző titkosítási algoritmusokat a biztonságos adatátvitelhez",
      "SSH protokoll, mivel fejlett kriptográfiai megoldásokat és többfaktoros hitelesítést támogat, valamint biztosítja az adatok integritását és titkosítását a teljes kommunikációs folyamat során"
    ],
    "helyes": "TLS (Transport Layer Security), mert szabványos tanúsítványrendszert használ, széles körben támogatott, és biztonságos kapcsolatot biztosít a webes alkalmazások számára"
  },
  {
    "szoveg": "Egy nagyvállalat kulcsmenedzsment rendszerében azt tapasztaljuk, hogy a kulcsok generálása és szétosztása jelentős késéseket okoz a rendszer működésében. Mit jelez ez a probléma a rendszer tervezési szempontjainak megvalósításával kapcsolatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hatékonysági követelmény nem teljesül megfelelően, ami veszélyezteti a skálázhatóságot és a felhasználói élményt",
      "A biztonsági mechanizmusok túl szigorúak, ezért le kell csökkenteni a biztonsági szintet",
      "A redundancia hiánya okozza a problémát, több backup szerver beállítása megoldaná a késéseket"
    ],
    "helyes": "A hatékonysági követelmény nem teljesül megfelelően, ami veszélyezteti a skálázhatóságot és a felhasználói élményt"
  },
  {
    "szoveg": "Egy új kulcsmenedzsment rendszer tervezésénél hogyan építené fel a kulcsok kezelésének és tárolásának hierarchikus struktúráját a maximális biztonság és hatékonyság érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Főkulcs (master key) a legfelső szinten, alatta dedikált köztes kulcsok az egyes részlegeknek, legalul pedig a felhasználói kulcsok, minden szinten titkosított tárolással és szigorú hozzáférés-szabályozással",
      "Központi adatbázisban tárolt felhasználói kulcsok többszintű titkosítással és redundáns biztonsági mechanizmusokkal, elosztott hozzáférés-vezérléssel és rendszeres kulcsrotációs protokollokkal",
      "Decentralizált kulcstárolási rendszer implementálása részlegenként elkülönített titkosítási rétegekkel, automatizált kulcsmenedzsmenttel és valós idejű monitorozási képességekkel"
    ],
    "helyes": "Főkulcs (master key) a legfelső szinten, alatta dedikált köztes kulcsok az egyes részlegeknek, legalul pedig a felhasználói kulcsok, minden szinten titkosított tárolással és szigorú hozzáférés-szabályozással"
  },
  {
    "szoveg": "Egy meglévő kulcsmenedzsment rendszerben új biztonsági követelményként jelenik meg a GDPR megfelelőség. Hogyan implementálná a szükséges változtatásokat a rendszer működésének megszakítása nélkül?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Fokozatos átállással: először audit naplózás bevezetése, majd titkosítási módszerek frissítése, végül hozzáférés-szabályozás szigorítása, közben folyamatos működés fenntartásával",
      "A rendszer komponenseinek fokozatos modernizálása és biztonsági frissítése, kezdve a naplózási mechanizmusokkal, majd a titkosítási protokollok korszerűsítése és végül a jogosultságkezelés átdolgozása",
      "Az infrastruktúra elemenkénti fejlesztése és megfeleltetése az új követelményeknek, beleértve a naplózási rendszer kiépítését, kriptográfiai megoldások implementálását és hozzáférési szabályok kialakítását"
    ],
    "helyes": "Fokozatos átállással: először audit naplózás bevezetése, majd titkosítási módszerek frissítése, végül hozzáférés-szabályozás szigorítása, közben folyamatos működés fenntartásával"
  },
  {
    "szoveg": "Egy vállalati kulcsmenedzsment rendszer tervezési dokumentációját vizsgálva, hogyan értékelné azt a döntést, hogy a rendszer kizárólag szimmetrikus kulcsokat használ a könnyebb kezelhetőség érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez egy hibás tervezési döntés, mert a kizárólag szimmetrikus kulcsok használata jelentősen korlátozza a rendszer biztonságát és rugalmasságát, különösen a kulcscsere és a felhasználók közötti biztonságos kommunikáció szempontjából",
      "Ez egy nem megfelelő megközelítés, mivel a szimmetrikus titkosítás önmagában nem biztosítja a szükséges biztonsági funkciókat, és a kulcsok biztonságos elosztása jelentős kihívásokat okoz a nagyméretű vállalati környezetekben",
      "Ez egy kockázatos architektúrális döntés, mivel a kizárólagos szimmetrikus titkosítás alkalmazása nem teszi lehetővé a modern biztonsági követelmények teljesítését, és jelentősen megnehezíti a felhasználók közötti biztonságos adatcserét"
    ],
    "helyes": "Ez egy hibás tervezési döntés, mert a kizárólag szimmetrikus kulcsok használata jelentősen korlátozza a rendszer biztonságát és rugalmasságát, különösen a kulcscsere és a felhasználók közötti biztonságos kommunikáció szempontjából"
  },
  {
    "szoveg": "Egy nagyvállalat IT biztonsági csapata észleli, hogy több szerverükön is szokatlan hálózati forgalom jelentkezik. Mi a helyes értelmezése az Incident Response folyamat első kritikus lépéseinek ebben a helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az azonosítás során dokumentálni kell a szokatlan forgalmat, felmérni az érintett rendszereket, majd az elszigetelés során meg kell akadályozni a probléma továbbterjedését más rendszerekre.",
      "A biztonsági esemény azonosítását követően részletes dokumentációt kell készíteni a szokatlan hálózati forgalomról, majd a szerverek izolálásával kell megakadályozni a további kompromittálódást.",
      "Az incidens észlelése után azonnal meg kell kezdeni a forgalmi minták elemzését és dokumentálását, majd szigorú biztonsági protokollok aktiválásával kell megvédeni a többi rendszert."
    ],
    "helyes": "Az azonosítás során dokumentálni kell a szokatlan forgalmat, felmérni az érintett rendszereket, majd az elszigetelés során meg kell akadályozni a probléma továbbterjedését más rendszerekre."
  },
  {
    "szoveg": "Egy szervezet Incident Response folyamatának modelljében milyen ok-okozati összefüggések figyelhetők meg a felkészülési fázis és a tényleges incidenskezelés hatékonysága között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A jól kidolgozott biztonsági szabályzatok és előre definiált eljárásrendek lehetővé teszik a gyorsabb reagálást és hatékonyabb incidenskezelést, mivel a csapat előre meghatározott protokollok szerint járhat el.",
      "A felkészülési fázis során kialakított dokumentációs és eljárásrendi keretrendszer valójában lassítja az incidenskezelést, mivel a formális folyamatok követése több időt vesz igénybe a gyors reagálásnál.",
      "A felkészülési fázisban létrehozott protokollok és eljárásrendek csak elméleti jelentőséggel bírnak, mivel valós incidens esetén a szakértői csapat kizárólag a gyakorlati tapasztalataira támaszkodhat."
    ],
    "helyes": "A jól kidolgozott biztonsági szabályzatok és előre definiált eljárásrendek lehetővé teszik a gyorsabb reagálást és hatékonyabb incidenskezelést, mivel a csapat előre meghatározott protokollok szerint járhat el."
  },
  {
    "szoveg": "Egy vállalat rendszerében ransomware támadást észleltek. Hogyan alkalmazná az Incident Response folyamat lépéseit ebben a konkrét esetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Azonosítanám a fertőzött rendszereket, leválasztanám őket a hálózatról, megvizsgálnám a fertőzés forrását, eltávolítanám a ransomware-t, majd tiszta mentésből állítanám helyre a rendszereket a biztonsági rések megszüntetése után.",
      "Azonnal izolálnám az érintett rendszereket, részletes biztonsági naplóelemzést végeznék a támadás útvonalának feltérképezésére, majd szakértői csapat bevonásával végezném el a kártevő eltávolítását és a rendszerek helyreállítását a biztonsági protokollok szigorítása mellett.",
      "Először dokumentálnám a támadás részleteit, majd leválasztanám az érintett rendszereket, forensics vizsgálatot végeznék a fertőzés terjedési útvonalának meghatározására, végül szakszerű mentesítés után állítanám helyre a tisztított rendszereket."
    ],
    "helyes": "Azonosítanám a fertőzött rendszereket, leválasztanám őket a hálózatról, megvizsgálnám a fertőzés forrását, eltávolítanám a ransomware-t, majd tiszta mentésből állítanám helyre a rendszereket a biztonsági rések megszüntetése után."
  },
  {
    "szoveg": "Egy szervezet Incident Response csapata sikeresen kezelt egy súlyos biztonsági incidenst. Milyen szempontok alapján lehet megítélni a folyamat hatékonyságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az incidens észlelése és megoldása közötti idő, az üzleti folyamatok folytonossága, a helyreállítás teljessége, és a jövőbeli hasonló incidensek megelőzésére tett intézkedések alapján.",
      "Az incidens kezelésének teljes időtartama, a biztonsági rendszerek működőképességének helyreállítása, valamint a szervezeti egységek közötti kommunikáció és együttműködés hatékonysága alapján.",
      "A helyreállítási folyamat során felhasznált erőforrások optimalizálása, a dokumentáció részletessége, valamint a biztonsági események utólagos elemzésének minősége és az ebből levont következtetések alapján."
    ],
    "helyes": "Az incidens észlelése és megoldása közötti idő, az üzleti folyamatok folytonossága, a helyreállítás teljessége, és a jövőbeli hasonló incidensek megelőzésére tett intézkedések alapján."
  },
  {
    "szoveg": "Egy rendszergazda azt állítja, hogy a hálózati forensics vizsgálat során elegendő a hálózati forgalomról készült naplófájlokat elemezni. Miért nem helyes ez a megközelítés a digitális forensics alapelvei szerint?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A bizonyítékok integritásának és hitelességének igazolásához szükséges az eredeti hálózati forgalom rögzítése és hash-értékekkel való védelme, a naplófájlok önmagukban nem elegendőek.",
      "A naplófájlok elemzése nem biztosítja a teljes körű bizonyítékgyűjtést, mivel az eredeti adatfolyam részletes metaadatai és időbélyegei nélkül nem lehet garantálni a vizsgálat reprodukálhatóságát és a bizonyítékok hitelességét.",
      "A naplófájlok önmagukban nem alkalmasak a forensics vizsgálatok követelményeinek teljesítésére, mivel nem tartalmazzák az eredeti adatfolyam teljes tartalmát és a kapcsolódó kriptográfiai ellenőrzőösszegeket."
    ],
    "helyes": "A bizonyítékok integritásának és hitelességének igazolásához szükséges az eredeti hálózati forgalom rögzítése és hash-értékekkel való védelme, a naplófájlok önmagukban nem elegendőek."
  },
  {
    "szoveg": "Egy cégnél adatszivárgás gyanúja merült fel. Milyen sorrendben kell végrehajtani a forensics vizsgálat lépéseit a megfelelő bizonyítékgyűjtéshez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Először a hálózati forgalom rögzítése írásvédett módon, majd hash-érték generálása, ezután a gyanús tevékenységek időbélyegeinek azonosítása, végül a részletes forgalomelemzés elvégzése.",
      "Először a hálózati forgalom és rendszerállapot dokumentálása, majd a gyanús tevékenységek azonosítása időrendi sorrendben, végül a részletes elemzés elvégzése hash-értékek folyamatos ellenőrzése mellett.",
      "Először az összes hálózati eszköz állapotának rögzítése írásvédett módon, majd a biztonsági naplók időbélyegeinek elemzése, végül a teljes forgalom rekonstruálása hash-ellenőrzéssel."
    ],
    "helyes": "Először a hálózati forgalom rögzítése írásvédett módon, majd hash-érték generálása, ezután a gyanús tevékenységek időbélyegeinek azonosítása, végül a részletes forgalomelemzés elvégzése."
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a memória forensics jelentőségét egy biztonsági incidens kivizsgálásában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egy fejlett malware, amely csak a memóriában fut és nem hagy nyomot a merevlemezen, csak a RAM tartalom elemzésével azonosítható, beleértve a futó folyamatok és a hálózati kapcsolatok vizsgálatát.",
      "Egy kifinomult zsarolóvírus, amely kizárólag a memóriában tárolja a titkosítási kulcsokat és a fertőzött rendszerek listáját, miközben folyamatosan monitorozza és naplózza a felhasználói tevékenységeket a RAM-ban.",
      "Egy fejlett hátsóajtó program, amely a memóriában rejti el a vezérlő szerverekkel való kommunikációt és a lopott adatokat, miközben folyamatosan változtatja a futó folyamatok neveit az álcázás érdekében."
    ],
    "helyes": "Egy fejlett malware, amely csak a memóriában fut és nem hagy nyomot a merevlemezen, csak a RAM tartalom elemzésével azonosítható, beleértve a futó folyamatok és a hálózati kapcsolatok vizsgálatát."
  },
  {
    "szoveg": "Egy vállalati biztonsági incidens kivizsgálása során a forensics szakértő a saját laptopját használta a bizonyítékok elemzéséhez. Hogyan értékelhető ez az eljárás a digitális forensics szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eljárás szakszerűtlen és elfogadhatatlan, mert sérti a bizonyítékok integritásának és nyomkövethetőségének alapelvét, valamint veszélyezteti a vizsgálat hitelességét és a bizonyítékok elfogadhatóságát.",
      "Az eljárás szakmailag kifogásolható, mivel a személyes eszközök használata nem biztosítja a bizonyítékok megfelelő izolációját és a vizsgálati környezet integritását, továbbá nem felel meg a forensics szabványoknak.",
      "Az eljárás nem felel meg a digitális forensics követelményeinek, mivel a személyes eszközök használata nem garantálja a bizonyítékok sértetlenségét és a vizsgálati folyamat reprodukálhatóságát."
    ],
    "helyes": "Az eljárás szakszerűtlen és elfogadhatatlan, mert sérti a bizonyítékok integritásának és nyomkövethetőségének alapelvét, valamint veszélyezteti a vizsgálat hitelességét és a bizonyítékok elfogadhatóságát."
  },
  {
    "szoveg": "Egy nagyvállalat hálózati rendszerében számos biztonsági incidens történt. Hogyan értelmezné a forensic-képes rendszerarchitektúra szerepét ebben a kontextusban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Olyan infrastruktúra, amely lehetővé teszi az incidensek utólagos rekonstruálását, bizonyítékok gyűjtését és elemzését, miközben garantálja az adatok hitelességét és integritását.",
      "Olyan komplex rendszer, amely a hálózati forgalom valós idejű monitorozását és szűrését végzi, miközben biztosítja az események részletes dokumentálását és a támadások azonnali észlelését.",
      "Olyan fejlett biztonsági architektúra, amely egyesíti a felhasználói tevékenységek naplózását és a hálózati események rögzítését, de nem terjed ki az incidensek mélyreható elemzésére."
    ],
    "helyes": "Olyan infrastruktúra, amely lehetővé teszi az incidensek utólagos rekonstruálását, bizonyítékok gyűjtését és elemzését, miközben garantálja az adatok hitelességét és integritását."
  },
  {
    "szoveg": "Tervezzen egy forensic-képes rendszerarchitektúrát egy pénzügyi szolgáltató számára! Melyik modell biztosítja leghatékonyabban a bizonyítékok gyűjtését és megőrzését?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű architektúra központosított naplógyűjtéssel, redundáns tárolással, titkosított adattovábbítással és elkülönített forensic szerverekkel, ahol minden réteg külön auditálható.",
      "Egyszerű kliens-szerver architektúra központosított naplógyűjtéssel és redundáns tárolással, de korlátozott titkosítással és alapszintű auditálási képességekkel, ami nem felel meg a szigorú forensic követelményeknek.",
      "Elosztott architektúra központosított naplókezeléssel, többszintű titkosítással és redundáns tárolással, de az elkülönített forensic szerverek és a réteges auditálás hiányával, ami korlátozza a bizonyítékok kezelését."
    ],
    "helyes": "Többrétegű architektúra központosított naplógyűjtéssel, redundáns tárolással, titkosított adattovábbítással és elkülönített forensic szerverekkel, ahol minden réteg külön auditálható."
  },
  {
    "szoveg": "Egy vállalat forensic rendszerében gyanús hálózati tevékenységet észleltek. Hogyan használná a rendelkezésre álló forensic képességeket a helyzet kivizsgálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A központi naplórendszerben azonosítanám az időpontot, lekérném a kapcsolódó hálózati forgalmat, ellenőrizném a biztonsági eseményeket és korrelálnám az adatokat a bizonyítéklánc megőrzése mellett.",
      "A rendszer biztonsági naplóit és hálózati forgalmát részletesen elemezném, dokumentálnám a gyanús tevékenységeket, majd a protokollnak megfelelően archiválnám az összes bizonyítékot további vizsgálatra.",
      "Szisztematikusan átvizsgálnám a hálózati forgalmat, azonosítanám az anomáliákat a naplófájlokban, majd az incidenskezelési eljárásrend szerint dokumentálnám a talált bizonyítékokat."
    ],
    "helyes": "A központi naplórendszerben azonosítanám az időpontot, lekérném a kapcsolódó hálózati forgalmat, ellenőrizném a biztonsági eseményeket és korrelálnám az adatokat a bizonyítéklánc megőrzése mellett."
  },
  {
    "szoveg": "Egy vállalat új forensic rendszert tervez bevezetni. Az alábbiak közül melyik megoldás felel meg leginkább a szakmai és jogi követelményeknek?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Időbélyeggel ellátott, digitálisan aláírt naplózás, központosított WORM tárolás, dokumentált hozzáférés-szabályozás és auditálható adatkezelési folyamatok implementálása.",
      "Központosított naplózási rendszer implementálása redundáns tárolással, alapszintű titkosítással és hozzáférés-szabályozással, valamint részleges auditálási képességekkel és korlátozott adatmegőrzési politikával.",
      "Többszintű naplózási architektúra kialakítása elosztott tárolással, standard titkosítási megoldásokkal és alapvető jogosultságkezeléssel, valamint dokumentált adatkezelési eljárásrenddel."
    ],
    "helyes": "Időbélyeggel ellátott, digitálisan aláírt naplózás, központosított WORM tárolás, dokumentált hozzáférés-szabályozás és auditálható adatkezelési folyamatok implementálása."
  },
  {
    "szoveg": "Egy nagyvállalat két telephelye között nagy mennyiségű, bizalmas adatot kell rendszeresen továbbítani. A telephelyek saját belső hálózattal rendelkeznek. Melyik VPN megoldás összehasonlításában látható a legmegfelelőbb választás az adott helyzetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Site-to-Site VPN előnyösebb a Remote Access VPN-nél, mert állandó, nagy teljesítményű, dedikált kapcsolatot biztosít a telephelyek között, és nem igényel egyedi klienseket a felhasználóktól.",
      "A Remote Access VPN előnyösebb a Site-to-Site VPN-nél, mert rugalmas konfigurációt, automatikus skálázhatóságot és költséghatékony működést biztosít a telephelyek közötti biztonságos adatátvitelhez.",
      "Az SSL VPN előnyösebb a Site-to-Site VPN-nél, mert szabványos titkosítási protokollokat használ, egyszerűen konfigurálható és nem igényel speciális hálózati infrastruktúrát a telephelyek között."
    ],
    "helyes": "A Site-to-Site VPN előnyösebb a Remote Access VPN-nél, mert állandó, nagy teljesítményű, dedikált kapcsolatot biztosít a telephelyek között, és nem igényel egyedi klienseket a felhasználóktól."
  },
  {
    "szoveg": "Hogyan értelmezné a VPN technológia szerepét egy vállalat biztonsági stratégiájában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A VPN egy többrétegű biztonsági megoldás, amely titkosított csatornát biztosít az adatforgalomnak, miközben lehetővé teszi a hozzáférés-szabályozást és a felhasználók hitelesítését a vállalati erőforrásokhoz.",
      "A VPN egy komplex hálózati protokoll, amely elsősorban az adatok titkosítására és továbbítására szolgál, de nem tartalmaz fejlett biztonsági funkciókat a felhasználók azonosításához és a hozzáférések kezeléséhez.",
      "A VPN technológia egy speciális hálózati megoldás, amely kizárólag a távoli kapcsolatok létrehozására összpontosít, figyelmen kívül hagyva a modern vállalati biztonsági követelményeket és szabványokat."
    ],
    "helyes": "A VPN egy többrétegű biztonsági megoldás, amely titkosított csatornát biztosít az adatforgalomnak, miközben lehetővé teszi a hozzáférés-szabályozást és a felhasználók hitelesítését a vállalati erőforrásokhoz."
  },
  {
    "szoveg": "Egy multinacionális vállalat új irodát nyit egy távoli országban. Milyen VPN megoldást alkalmazna az új iroda biztonságos integrálásához a meglévő vállalati hálózatba?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "IPSec alapú Site-to-Site VPN redundáns kapcsolattal, amely dedikált VPN eszközöket használ mindkét végponton, automatikus failover funkcióval és központi menedzseléssel.",
      "Dedikált Remote Access VPN infrastruktúra kiépítése központi authentikációval és titkosított csatornákkal, amely lehetővé teszi a felhasználók biztonságos hozzáférését a vállalati erőforrásokhoz.",
      "Többrétegű SSL VPN megoldás implementálása dedikált hardveres biztonsági átjárókkal és fejlett hozzáférés-vezérléssel, amely támogatja a vállalati alkalmazások távoli elérését."
    ],
    "helyes": "IPSec alapú Site-to-Site VPN redundáns kapcsolattal, amely dedikált VPN eszközöket használ mindkét végponton, automatikus failover funkcióval és központi menedzseléssel."
  },
  {
    "szoveg": "Egy középvállalat IT vezetőjeként kell döntést hoznia a megfelelő VPN megoldásról. A cég dolgozóinak 60%-a rendszeresen távmunkában dolgozik, és különböző eszközökről (laptop, tablet, telefon) kell hozzáférniük a vállalati rendszerekhez. Melyik megoldás a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "SSL VPN megoldás többfaktoros hitelesítéssel, amely támogatja a különböző eszközöket, könnyen használható webes felülettel rendelkezik, és részletes hozzáférés-szabályozást tesz lehetővé eszköztípus és felhasználói jogosultság alapján.",
      "Nagyvállalati szintű IPSec VPN infrastruktúra kiépítése központi menedzsmenttel, amely támogatja a különböző platformokat, és fejlett titkosítási protokollokat használ a biztonságos távoli munkavégzés érdekében.",
      "Felhőalapú VPN szolgáltatás implementálása automatikus eszközfelismeréssel és dinamikus forgalomirányítással, amely biztosítja a skálázható és biztonságos hozzáférést a vállalati erőforrásokhoz."
    ],
    "helyes": "SSL VPN megoldás többfaktoros hitelesítéssel, amely támogatja a különböző eszközöket, könnyen használható webes felülettel rendelkezik, és részletes hozzáférés-szabályozást tesz lehetővé eszköztípus és felhasználói jogosultság alapján."
  },
  {
    "szoveg": "Egy nagyvállalat VPN infrastruktúrájának tervezésekor mit jelent a horizontális skálázás koncepciója?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több VPN koncentrátor párhuzamos üzemeltetése a terhelés elosztása érdekében, lehetővé téve több felhasználó egyidejű kiszolgálását",
      "A meglévő VPN infrastruktúra kapacitásának bővítése további hardveres erőforrások és redundáns komponensek integrálásával a teljesítmény optimalizálása érdekében",
      "A VPN rendszer teljesítményének fokozása elosztott architektúra kialakításával és nagyobb sávszélességű hálózati kapcsolatok implementálásával a hatékonyabb működés érdekében"
    ],
    "helyes": "Több VPN koncentrátor párhuzamos üzemeltetése a terhelés elosztása érdekében, lehetővé téve több felhasználó egyidejű kiszolgálását"
  },
  {
    "szoveg": "Egy nemzetközi vállalat globális VPN infrastruktúrájának tervezésekor milyen architektúrális modellt érdemes alkalmazni a legjobb felhasználói élmény érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Földrajzilag elosztott, többközpontú VPN architektúra load balancing megoldással és regionális VPN szerverekkel",
      "Központosított, nagy teljesítményű VPN infrastruktúra redundáns kapcsolatokkal és földrajzilag optimalizált útvonalválasztással",
      "Hibrid felhő-alapú VPN megoldás georedundáns kiszolgálókkal és intelligens forgalomirányítási mechanizmusokkal"
    ],
    "helyes": "Földrajzilag elosztott, többközpontú VPN architektúra load balancing megoldással és regionális VPN szerverekkel"
  },
  {
    "szoveg": "Egy vállalat VPN infrastruktúrájának bővítésekor hogyan alkalmazná a split tunneling technológiát a hálózati terhelés optimalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A belső erőforrásokhoz irányuló forgalom VPN-en keresztül, míg az internetes forgalom közvetlenül a felhasználó internetkapcsolatán keresztül halad",
      "A vállalati hálózati forgalom titkosított VPN csatornán keresztül halad, míg a publikus internetes forgalom a helyi hálózati kapcsolaton át közvetlenül éri el a célállomást",
      "A bizalmas adatforgalom dedikált VPN alagúton keresztül zajlik, miközben az általános webes kommunikáció a felhasználó saját internetkapcsolatát használja"
    ],
    "helyes": "A belső erőforrásokhoz irányuló forgalom VPN-en keresztül, míg az internetes forgalom közvetlenül a felhasználó internetkapcsolatán keresztül halad"
  },
  {
    "szoveg": "Egy nagyvállalat VPN infrastruktúrájának biztonsági értékelésekor melyik megoldás nyújtja a legmegfelelőbb kompromisszumot a biztonság és használhatóság között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többfaktoros autentikáció bevezetése biometrikus azonosítással és időalapú tokenekkel, szerepkör alapú hozzáférés-szabályozással kombinálva",
      "Többszintű hálózati autentikáció megvalósítása digitális tanúsítványokkal és intelligens kártyákkal, kiegészítve részletes naplózással és rendszeres biztonsági audittal",
      "Központosított identitáskezelő rendszer implementálása fejlett titkosítási protokollokkal és adaptív hozzáférés-vezérléssel, valós idejű monitorozás mellett"
    ],
    "helyes": "Többfaktoros autentikáció bevezetése biometrikus azonosítással és időalapú tokenekkel, szerepkör alapú hozzáférés-szabályozással kombinálva"
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz az IaaS és a PaaS szolgáltatási modell a felhasználói kontroll szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IaaS nagyobb kontrollt biztosít az infrastruktúra felett, míg a PaaS esetében a platform kezelése automatizált, de kevesebb a közvetlen irányítási lehetőség",
      "A PaaS szolgáltatási modell magasabb szintű absztrakciót kínál az infrastruktúra kezelésében, miközben az automatizált platformkezelés révén csökkenti a közvetlen irányítási lehetőségeket és a rendszergazdai feladatokat",
      "Az infrastruktúra menedzselése mindkét szolgáltatási modellben eltérő megközelítést igényel, de a PaaS automatizált környezete korlátozza a részletes konfigurációs beállításokat"
    ],
    "helyes": "Az IaaS nagyobb kontrollt biztosít az infrastruktúra felett, míg a PaaS esetében a platform kezelése automatizált, de kevesebb a közvetlen irányítási lehetőség"
  },
  {
    "szoveg": "Mit jelent a felhő computing 'mért szolgáltatás' alapelve a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer automatikusan nyomon követi és optimalizálja az erőforrás-használatot, és a felhasználók csak a ténylegesen igénybe vett szolgáltatásokért fizetnek",
      "A szolgáltató folyamatosan monitorozza és elemzi az erőforrás-felhasználást, majd előre meghatározott díjcsomagok alapján számlázza a szolgáltatásokat a felhasználóknak",
      "A rendszer részletes statisztikákat készít az erőforrások kihasználtságáról, és a felhasználóknak havi jelentésekben kell igazolniuk a felhasznált szolgáltatások mennyiségét"
    ],
    "helyes": "A rendszer automatikusan nyomon követi és optimalizálja az erőforrás-használatot, és a felhasználók csak a ténylegesen igénybe vett szolgáltatásokért fizetnek"
  },
  {
    "szoveg": "Egy vállalat szerverterheléseinek ingadozását figyelembe véve, hogyan modellezhető a felhő alapú infrastruktúra működése a költségoptimalizálás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatikus skálázási szabályokat kell beállítani, amelyek a terhelés függvényében növelik vagy csökkentik az erőforrásokat, így optimalizálva a költségeket",
      "Előre meghatározott erőforrás-allokációs stratégiát kell alkalmazni, amely a maximális terhelésre méretezett kapacitást biztosít folyamatos rendelkezésre állással és redundanciával",
      "Intelligens erőforrás-menedzsment rendszert kell implementálni, amely az üzemeltetői beavatkozások és előre definiált időzítések alapján szabályozza a kapacitást"
    ],
    "helyes": "Automatikus skálázási szabályokat kell beállítani, amelyek a terhelés függvényében növelik vagy csökkentik az erőforrásokat, így optimalizálva a költségeket"
  },
  {
    "szoveg": "Egy kritikus üzleti alkalmazás esetében melyik felhő szolgáltatási modell választása a legmegfelelőbb, ha a biztonság és a teljes kontroll elsődleges szempont?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "IaaS, mert teljes kontrollt biztosít az infrastruktúra felett, lehetővé téve a részletes biztonsági beállításokat és a specifikus megfelelőségi követelmények teljesítését",
      "SaaS, mert a szolgáltató által biztosított komplex biztonsági rendszer és automatizált megfelelőségi mechanizmusok révén maximális védelmet nyújt, miközben minimalizálja az üzemeltetési terheket",
      "PaaS, mert a beépített biztonsági protokollok és testreszabható védelmi mechanizmusok révén optimális egyensúlyt teremt a fejlesztői szabadság és az infrastrukturális biztonság között"
    ],
    "helyes": "IaaS, mert teljes kontrollt biztosít az infrastruktúra felett, lehetővé téve a részletes biztonsági beállításokat és a specifikus megfelelőségi követelmények teljesítését"
  },
  {
    "szoveg": "Egy nagyvállalat IT infrastruktúrájában egyes alkalmazások nagy terhelésingadozást mutatnak, míg más rendszerek szigorú biztonsági előírásoknak kell megfeleljenek. Melyik felhő telepítési modell értelmezése a legmegfelelőbb ebben az esetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hibrid felhő, ahol az érzékeny adatokat kezelő rendszerek privát felhőben, míg a változó terhelésű alkalmazások publikus felhőben futnak",
      "Privát felhő környezet, amely dedikált erőforrásokkal és szigorú biztonsági protokollokkal biztosítja a vállalati alkalmazások futtatását, miközben a terheléselosztást belső virtualizációval oldja meg",
      "Publikus felhő infrastruktúra, amely fejlett biztonsági mechanizmusokkal és automatikus erőforrás-skálázással biztosítja az alkalmazások optimális működését a költséghatékonyság mellett"
    ],
    "helyes": "Hibrid felhő, ahol az érzékeny adatokat kezelő rendszerek privát felhőben, míg a változó terhelésű alkalmazások publikus felhőben futnak"
  },
  {
    "szoveg": "Egy egészségügyi intézmény új rendszert tervez bevezetni a páciensadatok kezelésére. Az adatvédelmi előírások szigorúak, a költségvetés korlátozott. Melyik felhő telepítési modellt érdemes választani?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Közösségi felhő más egészségügyi intézményekkel közösen, amely biztosítja a megfelelő biztonsági szintet és megosztja a költségeket",
      "Publikus felhő szolgáltatás igénybevétele, amely ugyan költséghatékony megoldást kínál, de nem felel meg teljes mértékben az egészségügyi adatok szigorú védelmi előírásainak",
      "Dedikált privát felhő infrastruktúra kiépítése és üzemeltetése, amely maximális biztonságot nyújt, de a magas kezdeti beruházási és fenntartási költségek miatt nem fenntartható"
    ],
    "helyes": "Közösségi felhő más egészségügyi intézményekkel közösen, amely biztosítja a megfelelő biztonsági szintet és megosztja a költségeket"
  },
  {
    "szoveg": "Melyik példa szemlélteti legjobban a privát felhő előnyeit egy pénzügyi szolgáltató esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A bank tranzakció-feldolgozó rendszere saját adatközpontban fut, teljes kontroll alatt, dedikált biztonsági protokollokkal és azonnali beavatkozási lehetőséggel",
      "A bank ügyféladatait kezelő rendszer egy szigorúan elkülönített infrastruktúrán működik, saját biztonsági szabályokkal és folyamatos monitorozással, garantálva az adatok védelmét",
      "A bank kritikus alkalmazásai dedikált szervereken futnak, teljes körű felügyelettel és szabályozási megfelelőséggel, biztosítva a maximális rendelkezésre állást"
    ],
    "helyes": "A bank tranzakció-feldolgozó rendszere saját adatközpontban fut, teljes kontroll alatt, dedikált biztonsági protokollokkal és azonnali beavatkozási lehetőséggel"
  },
  {
    "szoveg": "Egy multinacionális vállalat teljes IT infrastruktúráját publikus felhőbe szeretné költöztetni a költségcsökkentés érdekében. Hogyan értékelhető ez a döntés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A döntés kockázatos, mert nem veszi figyelembe az adatvédelmi követelményeket, a megfelelőségi előírásokat és a kritikus üzleti folyamatok biztonságát",
      "A döntés megfelelőnek tűnhet költségvetési szempontból, azonban figyelmen kívül hagyja a komplex biztonsági követelményeket és a hosszú távú üzemeltetési kihívásokat",
      "A döntés elsősorban pénzügyi megfontolásokra alapoz, de nem számol az adatszuverenitási előírásokkal és a kritikus rendszerek rendelkezésre állási követelményeivel"
    ],
    "helyes": "A döntés kockázatos, mert nem veszi figyelembe az adatvédelmi követelményeket, a megfelelőségi előírásokat és a kritikus üzleti folyamatok biztonságát"
  },
  {
    "szoveg": "Egy vállalat szeretné átköltöztetni az alkalmazásait felhő környezetbe, de szigorú adatvédelmi előírásoknak kell megfelelnie. Hogyan értelmezhető ebben a kontextusban a hibrid felhő megoldás előnye?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hibrid felhő lehetővé teszi, hogy az érzékeny adatokat privát felhőben tárolják, míg a nyilvános szolgáltatásokat publikus felhőben futtatják, így optimalizálva a költségeket és a biztonságot.",
      "A hibrid felhő egy olyan komplex infrastruktúrát biztosít, amely a publikus felhő rugalmasságát ötvözi többrétegű biztonsági protokollokkal, miközben az adatok központosított kezelését teszi lehetővé a szervezet számára.",
      "A hibrid felhő olyan elosztott rendszert alkot, amely különböző földrajzi régiókban elhelyezett privát adatközpontokat kapcsol össze, biztosítva a maximális rendelkezésre állást és adatbiztonságot."
    ],
    "helyes": "A hibrid felhő lehetővé teszi, hogy az érzékeny adatokat privát felhőben tárolják, míg a nyilvános szolgáltatásokat publikus felhőben futtatják, így optimalizálva a költségeket és a biztonságot."
  },
  {
    "szoveg": "Egy e-kereskedelmi vállalat mikroszolgáltatás-alapú architektúrát tervez bevezetni. Hogyan modellezhető a rendszer felépítése a különböző üzleti funkciók szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer különálló szolgáltatásokra bontható: termékkatalógus, kosárkezelés, fizetési rendszer és rendeléskezelés, amelyek független skálázást és frissítést tesznek lehetővé.",
      "A rendszer moduláris felépítésű, ahol minden komponens egy monolitikus alkalmazásba van integrálva, biztosítva a szoros együttműködést és az erőforrások hatékony megosztását a szolgáltatások között.",
      "Az architektúra különálló mikroszolgáltatásokból áll, amelyek egy központi adatbázist és közös erőforráskezelő rendszert használnak a hatékony működés és konzisztencia biztosításához."
    ],
    "helyes": "A rendszer különálló szolgáltatásokra bontható: termékkatalógus, kosárkezelés, fizetési rendszer és rendeléskezelés, amelyek független skálázást és frissítést tesznek lehetővé."
  },
  {
    "szoveg": "Egy startup vállalkozás szerverterhelése erősen ingadozik a nap során. Hogyan használható a felhő infrastruktúra a költséghatékony működés érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatikus skálázási szabályok beállításával, ahol a rendszer a terhelés alapján növeli vagy csökkenti az erőforrásokat, csak a ténylegesen használt kapacitásért fizetve.",
      "Előre konfigurált erőforrás-menedzsment rendszer alkalmazásával, amely a historikus terhelési adatok alapján optimalizálja a kapacitást és automatikusan kezeli a csúcsidőszakokat.",
      "Intelligens terheléselosztó rendszer implementálásával, amely valós időben monitorozza és újraosztja az erőforrásokat a különböző szerverek között a költségoptimalizálás érdekében."
    ],
    "helyes": "Automatikus skálázási szabályok beállításával, ahol a rendszer a terhelés alapján növeli vagy csökkenti az erőforrásokat, csak a ténylegesen használt kapacitásért fizetve."
  },
  {
    "szoveg": "Egy nemzetközi vállalat több régióban szeretné működtetni szolgáltatásait. Milyen szempontok alapján kell megítélni a megfelelő felhő architektúra kiválasztását?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A helyi adatvédelmi szabályozások, a szolgáltatási szint követelmények, a latencia igények és a költséghatékonyság együttes figyelembevételével kell dönteni a multi-region vagy multi-cloud megoldások között.",
      "A szolgáltatások globális elérhetőségét és a rendszer skálázhatóságát kell elsődlegesen figyelembe venni, miközben a helyi szabályozásokat és költségoptimalizálást másodlagos szempontként kezeljük a tervezés során.",
      "Az infrastruktúra redundanciáját és a szolgáltatások magas rendelkezésre állását kell biztosítani, figyelembe véve a különböző régiók közötti adatreplikációs követelményeket és teljesítmény optimalizálási lehetőségeket."
    ],
    "helyes": "A helyi adatvédelmi szabályozások, a szolgáltatási szint követelmények, a latencia igények és a költséghatékonyság együttes figyelembevételével kell dönteni a multi-region vagy multi-cloud megoldások között."
  },
  {
    "szoveg": "Hogyan járulnak hozzá az orchestration platformok a modern hálózati alkalmazások hatékony működéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Automatizált konténerkezeléssel, terheléselosztással és öngyógyító képességekkel biztosítják a szolgáltatások folyamatos és skálázható működését.",
      "Automatizált erőforrás-menedzsmenttel és izolált fejlesztői környezetekkel biztosítják az alkalmazások verziókezelését és a szolgáltatások zavartalan működését a különböző infrastruktúrákon.",
      "Folyamatos monitorozással, automatikus hibadetektálással és proaktív erőforrás-optimalizálással biztosítják a rendszerek megbízható és hatékony üzemeltetését a teljes életciklus során."
    ],
    "helyes": "Automatizált konténerkezeléssel, terheléselosztással és öngyógyító képességekkel biztosítják a szolgáltatások folyamatos és skálázható működését."
  },
  {
    "szoveg": "Egy vállalat microservice architektúrára szeretne áttérni. Melyik megoldás biztosítja a leghatékonyabb átállást és üzemeltetést?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kubernetes platform bevezetése, amely támogatja a szolgáltatások automatikus skálázását, a terheléselosztást és a service discovery funkciókat.",
      "Különálló virtuális gépek implementálása minden szolgáltatáshoz, automatizált monitoring rendszerrel és terheléselosztó proxy megoldással kiegészítve.",
      "Az alkalmazások Docker konténerekben való futtatása dedikált orchestrációs rendszer nélkül, manuális konfigurációval és egyedi terheléselosztással."
    ],
    "helyes": "Kubernetes platform bevezetése, amely támogatja a szolgáltatások automatikus skálázását, a terheléselosztást és a service discovery funkciókat."
  },
  {
    "szoveg": "Egy e-kereskedelmi rendszer terheléselosztását kell megtervezni Black Friday időszakra. Hogyan valósítaná meg az orchestration platform segítségével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Horizontális autoskálázás konfigurálása CPU és memória metrikák alapján, több availability zone-ban elosztva, előre definiált minimális és maximális replikaszámmal.",
      "Automatikus terheléselosztás implementálása több régióban, előre konfigurált teljesítménymetrikák alapján történő skálázással és redundáns infrastruktúra kialakításával a csúcsidőszakra.",
      "Dinamikus erőforrás-allokáció beállítása load balancer mögött, teljesítménymonitorozással és automatikus failover mechanizmussal kiegészítve a magas rendelkezésre állás érdekében."
    ],
    "helyes": "Horizontális autoskálázás konfigurálása CPU és memória metrikák alapján, több availability zone-ban elosztva, előre definiált minimális és maximális replikaszámmal."
  },
  {
    "szoveg": "Egy kritikus banki alkalmazás esetében melyik orchestration platform megoldás a legmegfelelőbb az üzembiztonság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Kubernetes enterprise disztribúció többszörös master node-dal, dedikált biztonsági modulokkal és tanúsított compliance megfelelőséggel.",
      "Nyílt forráskódú konténer orchestration platform redundáns manager node-okkal, de korlátozott vállalati támogatással és alapszintű biztonsági tanúsítványokkal.",
      "Professzionális konténer menedzsment rendszer többrétegű biztonsági protokollokkal, de egyetlen központi vezérlőegységgel és részleges megfelelőségi dokumentációval."
    ],
    "helyes": "Kubernetes enterprise disztribúció többszörös master node-dal, dedikált biztonsági modulokkal és tanúsított compliance megfelelőséggel."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Service Mesh adatsík (Data Plane) és vezérlősík (Control Plane) közötti kapcsolatot a mikroszolgáltatások kontextusában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatsík proxyk hálózataként kezeli a közvetlen kommunikációt, míg a vezérlősík központilag konfigurálja és felügyeli ezeket a proxykat, biztosítva a szabályok egységes érvényesítését.",
      "Az adatsík a szolgáltatások közötti forgalom irányításáért és a terheléselosztásért felel, míg a vezérlősík a konfigurációs beállításokat és biztonsági szabályokat kezeli központosított módon a teljes infrastruktúrában.",
      "Az adatsík felügyeli a mikroszolgáltatások közötti kommunikációs folyamatokat és protokollokat, miközben a vezérlősík az infrastruktúra szintű beállításokat és szolgáltatás-felfedezést koordinálja a rendszerben."
    ],
    "helyes": "Az adatsík proxyk hálózataként kezeli a közvetlen kommunikációt, míg a vezérlősík központilag konfigurálja és felügyeli ezeket a proxykat, biztosítva a szabályok egységes érvényesítését."
  },
  {
    "szoveg": "Egy nagy forgalmú e-kereskedelmi rendszerben mikroszolgáltatások közötti kommunikációs problémákat tapasztalnak. Hogyan alkalmazná a Service Mesh megoldást a helyzet javítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Service Mesh bevezetésével implementálnék automatikus load balancing-ot, circuit breaking-et és retry logikát a sidecar proxyk segítségével, valamint központi monitorozást a hibák gyors azonosításához.",
      "Implementálnék egy komplex proxy réteget minden szolgáltatáshoz, amely tartalmazza a forgalom irányítását, terheléselosztást és hibakezelést, mindezt egyedi fejlesztésű komponensekkel megvalósítva.",
      "Létrehoznék egy központosított kommunikációs infrastruktúrát dedikált proxy szerverekkel, automatikus skálázással és hibatűrő mechanizmusokkal a szolgáltatások közötti adatforgalom optimalizálására."
    ],
    "helyes": "Service Mesh bevezetésével implementálnék automatikus load balancing-ot, circuit breaking-et és retry logikát a sidecar proxyk segítségével, valamint központi monitorozást a hibák gyors azonosításához."
  },
  {
    "szoveg": "Hogyan modellezhető egy új mikroszolgáltatás biztonságos integrálása egy meglévő Service Mesh infrastruktúrába?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatás mellé sidecar proxy telepítése, TLS tanúsítványok konfigurálása a vezérlősíkban, hozzáférési szabályok definiálása, majd a szolgáltatás fokozatos bevezetése traffic splitting segítségével.",
      "A szolgáltatás biztonságos integrálása során először a sidecar proxy és TLS konfiguráció implementálása szükséges, majd a hálózati forgalom fokozatos átirányítása load balancer segítségével, folyamatos monitorozás mellett.",
      "Az infrastruktúra előkészítése service discovery beállításával, biztonsági protokollok konfigurálása a control plane-ben, majd canary deployment végrehajtása teljes körű metrika monitorozással."
    ],
    "helyes": "A szolgáltatás mellé sidecar proxy telepítése, TLS tanúsítványok konfigurálása a vezérlősíkban, hozzáférési szabályok definiálása, majd a szolgáltatás fokozatos bevezetése traffic splitting segítségével."
  },
  {
    "szoveg": "Egy nagyvállalati környezetben érdemes-e bevezetni a Service Mesh architektúrát, ha a rendszer jelenleg 5 mikroszolgáltatásból áll, de várhatóan 50+ szolgáltatásra bővül a következő két évben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Igen, mert a jövőbeli növekedés során a Service Mesh infrastruktúra előnyei (központi felügyelet, egységes biztonság, megfigyelhetőség) jelentősen meghaladják a kezdeti komplexitás és erőforrásigény hátrányait.",
      "Nem, mert a jelenlegi infrastruktúra átállítása és a Service Mesh architektúra implementálása jelentős erőforrásokat igényel, és a központosított felügyelet előnyei csak nagyobb rendszerméret esetén válnak költséghatékonnyá.",
      "Nem, mert a mikroszolgáltatások közötti kommunikáció és biztonság menedzselése hagyományos eszközökkel is megoldható, a Service Mesh bevezetése pedig szükségtelen komplexitást eredményez a rendszerben."
    ],
    "helyes": "Igen, mert a jövőbeli növekedés során a Service Mesh infrastruktúra előnyei (központi felügyelet, egységes biztonság, megfigyelhetőség) jelentősen meghaladják a kezdeti komplexitás és erőforrásigény hátrányait."
  },
  {
    "szoveg": "Egy serverless alkalmazásban azt tapasztaljuk, hogy a függvények első meghívása jelentősen lassabb a későbbieknél. Mit jelent ez a jelenség a teljesítmény-optimalizálás szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Ez a cold start jelenség, ami a függvény futtatókörnyezetének első inicializálásából adódó késleltetést jelenti, és jelentősen befolyásolja az alkalmazás válaszidejét.",
      "Ez egy komplex infrastrukturális folyamat eredménye, ahol a felhő erőforrások dinamikus allokációja és a konténerizált környezet előkészítése okoz átmeneti késleltetést az első végrehajtáskor.",
      "Ez egy automatikus erőforrás-optimalizációs mechanizmus következménye, amely során a rendszer első futtatáskor felméri a szükséges erőforrásigényeket és beállítja a megfelelő futtatási paramétereket."
    ],
    "helyes": "Ez a cold start jelenség, ami a függvény futtatókörnyezetének első inicializálásából adódó késleltetést jelenti, és jelentősen befolyásolja az alkalmazás válaszidejét."
  },
  {
    "szoveg": "Hogyan modellezhető egy serverless alkalmazás optimális erőforrás-allokációja a következő követelmények mellett: maximum 1 másodperces válaszidő, költséghatékony működés és megbízható teljesítmény?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Memória: 512MB-1GB között, időkorlát: 10-15 másodperc, warm instances: 2-3 példány, caching réteggel és aszinkron műveletekkel a hosszabb folyamatokhoz.",
      "Memória: 256MB-512MB között, időkorlát: 15-20 másodperc, warm instances: 4-5 példány, teljesítmény-optimalizált cache stratégiával és párhuzamos feldolgozással a",
      "kritikus műveleteknél.",
      "Memória: 1GB-2GB között, időkorlát: 8-12 másodperc, warm instances: 1-2 példány, előre skálázott erőforrásokkal és dedikált gyorsítótárazással a válaszidő optimalizálásához."
    ],
    "helyes": "Memória: 512MB-1GB között, időkorlát: 10-15 másodperc, warm instances: 2-3 példány, caching réteggel és aszinkron műveletekkel a hosszabb folyamatokhoz."
  },
  {
    "szoveg": "Egy nagy látogatottságú webshop serverless backend rendszerében hogyan implementálná a termékkeresési funkciót a legjobb teljesítmény érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elasticsearch szolgáltatás használata, eredmények gyorsítótárazása Redis-ben, és a keresési függvény warm pool konfigurációja auto-scaling beállításokkal.",
      "Keresőmotor implementálása managed szolgáltatásként, eredmények tárolása elosztott gyorsítótárban, és a függvények előmelegítése dinamikus terheléselosztással.",
      "Teljes szöveges keresés megvalósítása indexelt adatbázissal, válaszok memóriában tárolása és automatikus skálázási szabályok alkalmazása."
    ],
    "helyes": "Elasticsearch szolgáltatás használata, eredmények gyorsítótárazása Redis-ben, és a keresési függvény warm pool konfigurációja auto-scaling beállításokkal."
  },
  {
    "szoveg": "Egy serverless rendszerben a függvények 70%-a 128MB memóriával, 30%-a 1GB memóriával fut. A rendszer teljesíti a válaszidő követelményeket, de a költségek magasak. Milyen döntést hozna?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A nagy memóriaigényű függvényeket újratervezném kisebb, specializált függvényekre bontva, és bevezetném az eredmények gyorsítótárazását a költségek csökkentése érdekében.",
      "A rendszer architektúráját újragondolnám, és a nagy memóriaigényű komponenseket átdolgoznám párhuzamos feldolgozású, kisebb erőforrásigényű mikroszolgáltatásokká, optimalizálva a költséghatékonyságot.",
      "Az erőforrás-intensive függvényeket elemezném és átstrukturálnám, bevezetve a memória-optimalizált végrehajtást és az eredmények cache-elését a hatékonyabb működés érdekében."
    ],
    "helyes": "A nagy memóriaigényű függvényeket újratervezném kisebb, specializált függvényekre bontva, és bevezetném az eredmények gyorsítótárazását a költségek csökkentése érdekében."
  },
  {
    "szoveg": "Egy vállalat felhőbe költözteti az alkalmazásait, és VPC-t használ. Hogyan értelmezhetjük a VPC szerepét a hálózati biztonság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A VPC egy izolált hálózati környezetet biztosít, ahol a vállalat teljes kontrollt gyakorol a hálózati konfiguráció és biztonsági szabályok felett, miközben kihasználja a felhő előnyeit.",
      "A VPC egy komplex hálózati infrastruktúrát biztosít, amely kizárólag a felhőszolgáltatások elérését szabályozza és optimalizálja, miközben a biztonsági beállításokat automatikusan kezeli a szolgáltató.",
      "A VPC elsődlegesen a helyi és felhőalapú erőforrások közötti kapcsolatot menedzseli, valamint az adatforgalom titkosítását végzi, de az egyéb hálózati funkciókat a szolgáltató kezeli."
    ],
    "helyes": "A VPC egy izolált hálózati környezetet biztosít, ahol a vállalat teljes kontrollt gyakorol a hálózati konfiguráció és biztonsági szabályok felett, miközben kihasználja a felhő előnyeit."
  },
  {
    "szoveg": "Egy e-kereskedelmi weboldal terheléselosztó rendszerének tervezésekor milyen modellt állítana fel a Load Balancing as a Service implementálására csúcsidőszaki terhelés esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Több régióban elosztott, egészség-ellenőrzéssel ellátott terheléselosztók, amelyek least connections módszerrel osztják el a forgalmat az automatikusan skálázódó szervercsoportok között.",
      "Több adatközpontban működő, redundáns kialakítású terheléselosztó infrastruktúra, amely weighted round-robin módszerrel és session persistence támogatással osztja el a kéréseket.",
      "Globálisan elosztott, georedundáns terheléselosztó rendszer, amely adaptív algoritmusokkal és valós idejű teljesítménymonitorozással optimalizálja a forgalom elosztását."
    ],
    "helyes": "Több régióban elosztott, egészség-ellenőrzéssel ellátott terheléselosztók, amelyek least connections módszerrel osztják el a forgalmat az automatikusan skálázódó szervercsoportok között."
  },
  {
    "szoveg": "Egy mikroszolgáltatás-alapú alkalmazás fejlesztése során hogyan használná a VPC és LBaaS szolgáltatásokat a hatékony működés érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A mikroszolgáltatásokat különböző VPC szegmensekbe szervezném, és LBaaS-t használnék a szolgáltatások közötti forgalom optimalizálására, automatikus skálázással és egészség-ellenőrzéssel.",
      "A mikroszolgáltatásokat elkülönített VPC szegmensekben implementálnám, központi terheléselosztóval koordinálva a forgalmat, de az automatikus skálázás és egészség-monitorozás mellőzésével a komplexitás csökkentése érdekében.",
      "A mikroszolgáltatásokat izolált hálózati környezetben futtatnám VPC segítségével, kizárólag statikus terheléselosztási szabályokat alkalmazva a szolgáltatások közötti kommunikáció menedzselésére."
    ],
    "helyes": "A mikroszolgáltatásokat különböző VPC szegmensekbe szervezném, és LBaaS-t használnék a szolgáltatások közötti forgalom optimalizálására, automatikus skálázással és egészség-ellenőrzéssel."
  },
  {
    "szoveg": "Egy nagyvállalat biztonsági auditja során hogyan ítélné meg egy olyan architektúra megfelelőségét, amely minden szolgáltatást egyetlen VPC-ben futtat, minimális hálózati szegmentáció mellett?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az architektúra nem megfelelő, mert sérti a biztonsági zónák elkülönítésének elvét, és növeli a biztonsági incidensek potenciális hatását az összes szolgáltatásra.",
      "Az architektúra nem optimális, mert a modern biztonsági gyakorlatok szerint a szolgáltatások izolációja és a többrétegű védelmi mechanizmusok implementálása elengedhetetlen a kockázatok hatékony kezeléséhez.",
      "Az architektúra jelentős biztonsági kockázatokat hordoz, mivel nem alkalmazza a szükséges hálózati szegmentációt és a zero trust alapelveket a szolgáltatások megfelelő izolációjához."
    ],
    "helyes": "Az architektúra nem megfelelő, mert sérti a biztonsági zónák elkülönítésének elvét, és növeli a biztonsági incidensek potenciális hatását az összes szolgáltatásra."
  },
  {
    "szoveg": "Hogyan befolyásolja a CDN a webtartalmak kiszolgálását egy globális webshop esetében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A felhasználók a hozzájuk földrajzilag legközelebbi edge szerverről kapják meg a tartalmat, ami jelentősen csökkenti a válaszidőt és optimalizálja a sávszélesség-használatot.",
      "A központi szerverről érkező tartalom a CDN hálózatán keresztül optimalizált útvonalon jut el a felhasználókhoz, miközben intelligens forgalomirányítás és gyorsítótárazás biztosítja a hatékony adatátvitelt.",
      "A CDN infrastruktúra a statikus és dinamikus tartalmakat elosztott cache rendszerben tárolja, miközben fejlett load balancing algoritmusokkal optimalizálja az erőforrások kihasználtságát."
    ],
    "helyes": "A felhasználók a hozzájuk földrajzilag legközelebbi edge szerverről kapják meg a tartalmat, ami jelentősen csökkenti a válaszidőt és optimalizálja a sávszélesség-használatot."
  },
  {
    "szoveg": "Egy nagy forgalmú hírportál fejlesztőjeként hogyan implementálná a CDN használatát a képek és videók kiszolgálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A médiatartalmak URL-jeit a CDN domain-jére irányítanám, és beállítanám a megfelelő cache szabályokat a tartalmak optimális tárolási idejével.",
      "A médiatartalmakat a CDN hálózat edge szervereire replikálnám, és automatikus szinkronizációt állítanék be a központi tárhellyel, figyelembe véve a tárolási időkorlátokat.",
      "A statikus médiatartalmakat elosztott CDN infrastruktúrán tárolnám, és dinamikus cache-elési stratégiát alkalmaznék a felhasználói igények optimalizálására."
    ],
    "helyes": "A médiatartalmak URL-jeit a CDN domain-jére irányítanám, és beállítanám a megfelelő cache szabályokat a tartalmak optimális tárolási idejével."
  },
  {
    "szoveg": "Milyen folyamatot követ egy CDN-alapú rendszer, amikor egy felhasználó először kér le egy még nem cache-elt tartalmat?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A DNS a legközelebbi edge szerverhez irányítja a kérést, ami észleli a cache hiányát, lekéri a tartalmat az origin szerverről, eltárolja és kiszolgálja a felhasználónak.",
      "A rendszer először ellenőrzi a globális cache állapotot, majd a legközelebbi edge szerver hiányzó tartalom esetén az origin szerverhez fordul, miközben más edge szerverekkel is szinkronizál.",
      "Az edge szerver azonosítja a cache hiányát, párhuzamosan kezdeményezi a tartalom letöltését az origin szerverről és más edge szerverekről, majd optimalizált útvonalakon továbbítja azt."
    ],
    "helyes": "A DNS a legközelebbi edge szerverhez irányítja a kérést, ami észleli a cache hiányát, lekéri a tartalmat az origin szerverről, eltárolja és kiszolgálja a felhasználónak."
  },
  {
    "szoveg": "Egy nemzetközi streaming szolgáltatás esetében mikor NEM javasolt a CDN használata?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Amikor a tartalom kizárólag egy kis földrajzi területre korlátozódik, és a felhasználók mind közel vannak az origin szerverhez.",
      "Amikor a felhasználók globálisan szétszórtan helyezkednek el, és a tartalom nagy sávszélességet igényel, de a szolgáltatás mérete nem indokolja a CDN infrastruktúra költségeit.",
      "Amikor a streaming tartalom folyamatos frissítést igényel, és a felhasználói bázis földrajzilag diverzifikált, de az adatforgalom nem éri el a CDN rentábilis működtetéséhez szükséges szintet."
    ],
    "helyes": "Amikor a tartalom kizárólag egy kis földrajzi területre korlátozódik, és a felhasználók mind közel vannak az origin szerverhez."
  },
  {
    "szoveg": "Egy felhőszolgáltatás tervezésénél a rendszer 99.99%-os rendelkezésre állást ígér. Mit jelent ez a gyakorlatban a rendszer éves kiesési idejére vonatkozóan?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer maximum 52.56 perc kiesést engedhet meg egy év alatt, ami kevesebb mint 1 óra teljes szolgáltatás-kiesés.",
      "A rendszer maximum 52.56 perc szolgáltatás-kiesést eredményezhet évente, ami szigorú monitorozást és azonnali hibaelhárítási protokollokat igényel.",
      "A rendszer éves szinten legfeljebb 52.56 perc üzemszünetet tolerálhat, ami fejlett redundancia-mechanizmusok és automatizált helyreállítási rendszerek alkalmazását követeli meg."
    ],
    "helyes": "A rendszer maximum 52.56 perc kiesést engedhet meg egy év alatt, ami kevesebb mint 1 óra teljes szolgáltatás-kiesés."
  },
  {
    "szoveg": "Egy felhő alapú rendszer magas rendelkezésre állásának biztosításához milyen komponenseket és azok közötti kapcsolatokat kell megtervezni a georedundáns működéshez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Két vagy több földrajzilag elkülönült adatközpont, mindegyikben teljes infrastruktúra (szerverek, tárolók, hálózat), load balancer a forgalom elosztásához, és automatikus failover mechanizmus a replikált adatokkal.",
      "Több földrajzilag elkülönített adatközpont teljes infrastruktúrával és biztonsági mentésekkel, valós idejű adatszinkronizációval és automatizált terheléselosztással, valamint redundáns hálózati kapcsolatokkal a folyamatos működés érdekében.",
      "Földrajzilag diverzifikált adatközpontok komplett szerverinfrastruktúrával, intelligens forgalomirányítással és automatikus katasztrófa-helyreállítási mechanizmusokkal, folyamatos adatreplikációval és monitoring rendszerekkel."
    ],
    "helyes": "Két vagy több földrajzilag elkülönült adatközpont, mindegyikben teljes infrastruktúra (szerverek, tárolók, hálózat), load balancer a forgalom elosztásához, és automatikus failover mechanizmus a replikált adatokkal."
  },
  {
    "szoveg": "Egy vállalat új felhő infrastruktúrát tervez, ahol a kritikus üzleti alkalmazásoknak 99.99%-os rendelkezésre állást kell biztosítani. Hogyan alkalmaznád a redundancia elvét a hálózati kapcsolatok tervezésénél?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Minden adatközponthoz legalább két különböző szolgáltatótól származó, fizikailag független útvonalú internetkapcsolat kiépítése, automatikus átkapcsolással és BGP routing protokollal.",
      "Redundáns hálózati infrastruktúra kiépítése nagy sávszélességű főkapcsolattal, georedundáns útválasztással és automatikus failover mechanizmusokkal, valamint folyamatos monitorozással.",
      "Többszintű hálózati redundancia megvalósítása különböző szolgáltatói zónákban, intelligens forgalomirányítással és valós idejű terheléselosztással az optimális működésért."
    ],
    "helyes": "Minden adatközponthoz legalább két különböző szolgáltatótól származó, fizikailag független útvonalú internetkapcsolat kiépítése, automatikus átkapcsolással és BGP routing protokollal."
  },
  {
    "szoveg": "Egy felhőszolgáltató a következő redundancia-megoldásokat kínálja: A) Két adatközpont ugyanabban a városban, szinkron adatreplikációval, 5ms késleltetéssel, B) Két adatközpont különböző országokban, aszinkron replikációval, 85ms késleltetéssel. Melyik megoldás alkalmasabb egy nemzetközi pénzügyi szolgáltató számára?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A B) megoldás, mert a nagyobb földrajzi távolság jobb védelmet nyújt katasztrófák ellen, és a pénzügyi szektorban a szolgáltatás folytonossága fontosabb, mint a milliszekundumokban mérhető késleltetés.",
      "Az A) megoldás alkalmasabb, mivel a szinkron replikáció és az alacsony késleltetés garantálja a pénzügyi tranzakciók azonnali konzisztenciáját, és a városi infrastruktúra megbízhatósága elegendő védelmet biztosít a szolgáltatás folytonosságához.",
      "Egyik megoldás sem megfelelő a nemzetközi pénzügyi szolgáltatások számára, mivel a modern szabályozási környezet megköveteli legalább három független földrajzi régióban található adatközpont redundáns működtetését a megfelelő biztonsági szint eléréséhez."
    ],
    "helyes": "A B) megoldás, mert a nagyobb földrajzi távolság jobb védelmet nyújt katasztrófák ellen, és a pénzügyi szektorban a szolgáltatás folytonossága fontosabb, mint a milliszekundumokban mérhető késleltetés."
  },
  {
    "szoveg": "Hogyan valósítja meg az SDN architektúra a hálózat rugalmas irányítását a hagyományos hálózati architektúrákhoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vezérlési logika központosításával és a fizikai továbbítástól való szétválasztásával, ami lehetővé teszi a hálózat programozható kezelését",
      "A hálózati vezérlés és továbbítás szétválasztásával, valamint a hagyományos eszközök intelligens menedzsment rendszerekkel történő integrációjával",
      "A hálózati erőforrások dinamikus elosztásával és a forgalomirányítási döntések automatizált központi koordinációjával a teljes infrastruktúrában"
    ],
    "helyes": "A vezérlési logika központosításával és a fizikai továbbítástól való szétválasztásával, ami lehetővé teszi a hálózat programozható kezelését"
  },
  {
    "szoveg": "Egy vállalat új biztonsági szabályzatot vezet be, amely szerint bizonyos alkalmazások forgalmát elkülönítve kell kezelni. Hogyan valósítaná ezt meg SDN környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A központi SDN vezérlőben definiálnék forgalmi szabályokat, amelyek az alkalmazások azonosítása alapján különböző útvonalakra irányítják a forgalmat",
      "Az egyes hálózati eszközökön egyedi forgalmi szabályokat konfigurálnék, amelyek az alkalmazások azonosítóit felhasználva szeparált útvonalakat hoznak létre",
      "Minden alkalmazás számára dedikált virtuális hálózatot alakítanék ki, amelyek között a forgalmat szigorú biztonsági protokollok szabályozzák"
    ],
    "helyes": "A központi SDN vezérlőben definiálnék forgalmi szabályokat, amelyek az alkalmazások azonosítása alapján különböző útvonalakra irányítják a forgalmat"
  },
  {
    "szoveg": "Egy adatközpont terhelés-elosztását kell optimalizálni. Hogyan alkalmazná az SDN megoldást ebben az esetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az SDN vezérlőben implementálnék egy algoritmust, amely valós időben figyeli a hálózati terhelést és dinamikusan módosítja a forgalom útvonalát",
      "Intelligens terheléselosztási szabályokat konfigurálnék a hálózati eszközökön, amelyek előre meghatározott metrikák alapján osztják el a forgalmat",
      "A hálózati infrastruktúrában automatizált monitorozó rendszert telepítenék, amely előre definiált szabályok szerint módosítja a forgalom útját"
    ],
    "helyes": "Az SDN vezérlőben implementálnék egy algoritmust, amely valós időben figyeli a hálózati terhelést és dinamikusan módosítja a forgalom útvonalát"
  },
  {
    "szoveg": "Milyen szempontok alapján értékelné egy nagyvállalat esetében az SDN bevezetésének indokoltságát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat mérete, komplexitása, az automatizálási igények, és a jelenlegi hálózatkezelési költségek alapján, figyelembe véve a várható megtérülést",
      "A jelenlegi infrastruktúra skálázhatósági korlátai, az üzemeltetési erőforrások kihasználtsága és a hálózati szolgáltatások rugalmassági igényei alapján, mérlegelve a beruházás pénzügyi vonzatait",
      "Az aktuális hálózatmenedzsment hatékonysága, a virtualizációs lehetőségek kihasználása és az üzleti folyamatok automatizálási követelményei szerint, elemezve a várható működési előnyöket"
    ],
    "helyes": "A hálózat mérete, komplexitása, az automatizálási igények, és a jelenlegi hálózatkezelési költségek alapján, figyelembe véve a várható megtérülést"
  },
  {
    "szoveg": "Hogyan értelmezhető az SDN architektúrában a kontroll sík és adatsík szétválasztásának jelentősége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózati döntéshozatal központosítása révén rugalmasabb irányítást tesz lehetővé, miközben az adattovábbítás továbbra is hatékonyan történik a végpontokon",
      "A hálózati infrastruktúra logikai felosztása lehetővé teszi a központosított vezérlést és monitorozást, miközben az adatforgalom továbbítása dedikált csatornákon optimalizáltan zajlik",
      "A hálózati erőforrások hatékonyabb kihasználását biztosítja a központi vezérlés által, miközben az adatforgalom továbbítása automatizált módon történik az eszközökön"
    ],
    "helyes": "A hálózati döntéshozatal központosítása révén rugalmasabb irányítást tesz lehetővé, miközben az adattovábbítás továbbra is hatékonyan történik a végpontokon"
  },
  {
    "szoveg": "Egy vállalat több adatközponttal rendelkezik, és SDN architektúrát szeretne implementálni. Milyen vezérlő-architektúrát érdemes kialakítani a magas rendelkezésre állás érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hierarchikus vezérlő-struktúrát, ahol a helyi vezérlők lokális döntéseket hoznak, míg egy központi vezérlő koordinálja a globális politikákat",
      "Központosított vezérlő-architektúrát, ahol egy fő vezérlőegység felügyeli az összes adatközpontot, miközben tartalék vezérlők biztosítják a redundanciát és a terheléselosztást",
      "Elosztott vezérlő-rendszert, ahol az egyes adatközpontok autonóm vezérlői szinkronizált módon működnek együtt, biztosítva a helyi optimalizációt és a globális konzisztenciát"
    ],
    "helyes": "Hierarchikus vezérlő-struktúrát, ahol a helyi vezérlők lokális döntéseket hoznak, míg egy központi vezérlő koordinálja a globális politikákat"
  },
  {
    "szoveg": "Egy nagyvállalat fokozatosan szeretné bevezetni az SDN megoldásokat a meglévő hagyományos hálózati infrastruktúrájába. Milyen implementációs stratégiát célszerű alkalmazni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hibrid megközelítést alkalmazva, ahol az SDN vezérlő együttműködik a hagyományos hálózati protokollokkal, és fokozatosan bővítik az SDN-képes eszközök körét",
      "A teljes hálózati infrastruktúra tervezett modernizációja SDN-képes eszközökkel, figyelembe véve az üzletmenet folytonosságát és a fokozatos migrációs lehetőségeket a maximális hatékonyság érdekében",
      "Párhuzamos SDN infrastruktúra kiépítése a meglévő mellett, majd a szolgáltatások szisztematikus migrálása az új környezetbe, biztosítva a folyamatos működést és minimalizálva az átállási kockázatokat"
    ],
    "helyes": "Hibrid megközelítést alkalmazva, ahol az SDN vezérlő együttműködik a hagyományos hálózati protokollokkal, és fokozatosan bővítik az SDN-képes eszközök körét"
  },
  {
    "szoveg": "Hogyan értelmezhetjük az NFV (Network Functions Virtualization) architektúra működését a hagyományos hálózati infrastruktúrához képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az NFV a hálózati funkciókat szoftveresen, virtuális környezetben valósítja meg, függetlenítve azokat a dedikált hardverektől, így rugalmasan telepíthetők szabványos szervereken.",
      "Az NFV a hálózati funkciókat szoftveres absztrakcióként implementálja dedikált eszközök helyett, miközben megőrzi a fizikai infrastruktúra teljesítményét és biztonsági jellemzőit.",
      "Az NFV technológia lehetővé teszi a hálózati szolgáltatások virtualizált környezetben történő futtatását, miközben optimalizálja az erőforrások kihasználtságát a szabványos hardvereken."
    ],
    "helyes": "Az NFV a hálózati funkciókat szoftveresen, virtuális környezetben valósítja meg, függetlenítve azokat a dedikált hardverektől, így rugalmasan telepíthetők szabványos szervereken."
  },
  {
    "szoveg": "Egy telekommunikációs szolgáltató új VoIP szolgáltatást szeretne indítani NFV architektúrában. Hogyan épülne fel ennek a szolgáltatásnak a modellje?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A VoIP szerverek VNF-ként futnak az NFVI-n, az NFV MANO orchestrálja a szolgáltatást, automatikusan skálázva az erőforrásokat a forgalom függvényében, míg a VIM kezeli az alapvető infrastruktúrát.",
      "A VoIP szerverek virtualizált környezetben működnek az NFVI platformon, ahol az NFV MANO felügyeli a rendszer teljesítményét és erőforrásait, miközben a VIM biztosítja az infrastrukturális szolgáltatások folyamatos elérhetőségét.",
      "A VoIP szolgáltatás komponensei virtualizált formában futnak az NFVI rétegen, az NFV MANO rendszer végzi a szolgáltatások koordinációját és az erőforrások elosztását, a VIM pedig az alapinfrastruktúra menedzsmentjéért felel."
    ],
    "helyes": "A VoIP szerverek VNF-ként futnak az NFVI-n, az NFV MANO orchestrálja a szolgáltatást, automatikusan skálázva az erőforrásokat a forgalom függvényében, míg a VIM kezeli az alapvető infrastruktúrát."
  },
  {
    "szoveg": "Egy vállalat NFV alapú hálózati infrastruktúrát tervez bevezetni. Hogyan használná az NFV komponenseit a hálózati biztonság megvalósításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Tűzfal és IDS funkciókat VNF-ként implementálnék, amelyeket az NFV MANO automatikusan telepít és skáláz a biztonsági követelmények alapján, míg a VIM biztosítja az erőforrások megfelelő izolációját.",
      "A biztonsági funkciókat virtuális hálózati szolgáltatásként implementálnám, ahol a hardveres tűzfalakat VNF-ekkel helyettesíteném, és az NFV MANO rendszer felügyelné a teljes biztonsági infrastruktúra automatizált menedzsmentjét és skálázását.",
      "Az NFV infrastruktúrában a biztonsági szolgáltatásokat virtualizált komponensekként valósítanám meg, kihasználva a MANO által nyújtott orchestrációs lehetőségeket és a VIM által biztosított erőforrás-kezelési funkciókat."
    ],
    "helyes": "Tűzfal és IDS funkciókat VNF-ként implementálnék, amelyeket az NFV MANO automatikusan telepít és skáláz a biztonsági követelmények alapján, míg a VIM biztosítja az erőforrások megfelelő izolációját."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy NFV implementáció sikeressége egy nagy adatközpontban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az erőforrás-kihasználás javulása, a szolgáltatások gyorsabb telepítése és módosítása, valamint a működési költségek csökkenése mellett a teljesítmény és megbízhatóság fenntartása.",
      "Az infrastruktúra optimalizálása és a hardverköltségek csökkentése mellett az automatizált erőforrás-menedzsment bevezetése, figyelmen kívül hagyva a szolgáltatások rugalmasságát és skálázhatóságát.",
      "A virtualizált hálózati funkciók implementálásának mértéke és a fizikai eszközpark modernizációja, valamint az energiahatékonyság javítása, mellőzve a teljesítmény és üzemeltetési metrikákat."
    ],
    "helyes": "Az erőforrás-kihasználás javulása, a szolgáltatások gyorsabb telepítése és módosítása, valamint a működési költségek csökkenése mellett a teljesítmény és megbízhatóság fenntartása."
  },
  {
    "szoveg": "Egy telekommunikációs vállalat NFV platformot tervez bevezetni. Hogyan értelmezhető a vertikális és horizontális skálázhatóság közötti különbség ebben a kontextusban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A vertikális skálázás az egyes virtuális funkciók erőforrásainak (CPU, memória) növelését jelenti, míg a horizontális skálázás új példányok indítását azonos konfigurációval.",
      "A vertikális skálázás az egyes virtuális gépek hardveres erőforrásainak bővítését jelenti központi szinten, míg a horizontális megközelítés további azonos konfigurációjú példányok létrehozását eredményezi a terheléselosztáshoz.",
      "A vertikális skálázás során a meglévő virtuális erőforrások kapacitását növeljük a teljesítmény fokozása érdekében, míg a horizontális bővítésnél további párhuzamos instanciákat hozunk létre a terhelés elosztására."
    ],
    "helyes": "A vertikális skálázás az egyes virtuális funkciók erőforrásainak (CPU, memória) növelését jelenti, míg a horizontális skálázás új példányok indítását azonos konfigurációval."
  },
  {
    "szoveg": "Egy NFV platform tervezésekor milyen összefüggéseket kell figyelembe venni a teljesítmény, megbízhatóság és költségoptimalizálás között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A magas rendelkezésre állás és teljesítmény redundáns erőforrásokat igényel, ami növeli a költségeket, de az automatikus skálázás és erőforrás-optimalizálás csökkentheti a működési kiadásokat.",
      "A teljesítmény és megbízhatóság maximalizálása jelentős kezdeti beruházást igényel, de a fejlett automatizálási megoldások és dinamikus erőforrás-kezelés hosszú távon optimalizálhatja az üzemeltetési költségeket.",
      "A magas rendelkezésre állás biztosítása és az erőforrások hatékony kihasználása komplex tervezést igényel, mivel az infrastruktúra redundanciája és az automatizált menedzsment befolyásolja a költségszerkezetet."
    ],
    "helyes": "A magas rendelkezésre állás és teljesítmény redundáns erőforrásokat igényel, ami növeli a költségeket, de az automatikus skálázás és erőforrás-optimalizálás csökkentheti a működési kiadásokat."
  },
  {
    "szoveg": "Egy szolgáltató NFV platformján váratlan terhelésnövekedés jelentkezik. Hogyan alkalmazná az automatikus skálázási mechanizmusokat a probléma kezelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Terhelésfigyelő rendszert állítanék be előre definiált küszöbértékekkel, ami automatikusan indít új VNF példányokat és konfigurálja a terheléselosztót a forgalom egyenletes elosztásához.",
      "Automatizált erőforrás-menedzsment rendszert implementálnék, amely a CPU és memória allokációt dinamikusan optimalizálja a szolgáltatások aktuális igényei és prioritásai alapján.",
      "Intelligens terheléselosztási stratégiát vezetnék be, amely valós idejű monitorozással és prediktív analitikával optimalizálja az erőforrások elosztását a hálózati funkciók között."
    ],
    "helyes": "Terhelésfigyelő rendszert állítanék be előre definiált küszöbértékekkel, ami automatikusan indít új VNF példányokat és konfigurálja a terheléselosztót a forgalom egyenletes elosztásához."
  },
  {
    "szoveg": "Egy NFV platform tervezési javaslatot kell értékelnie, amely a költséghatékonyság érdekében minimális redundanciát tartalmaz. Milyen szempontok alapján hozna döntést ennek elfogadhatóságáról?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatási szint követelmények, az üzleti kritikusság és a potenciális szolgáltatáskiesés költségeinek elemzése alapján, összevetve ezeket a redundancia megvalósítási költségeivel.",
      "A teljes infrastruktúra költséghatékonysági elemzése alapján, figyelembe véve a kezdeti beruházási költségeket és a hosszú távú üzemeltetési kiadásokat, kockázatelemzéssel kiegészítve.",
      "Az iparági standardok és ajánlások, valamint a versenytársak gyakorlatának részletes elemzése alapján, figyelembe véve a technológiai trendeket és piaci elvárásokat."
    ],
    "helyes": "A szolgáltatási szint követelmények, az üzleti kritikusság és a potenciális szolgáltatáskiesés költségeinek elemzése alapján, összevetve ezeket a redundancia megvalósítási költségeivel."
  },
  {
    "szoveg": "Hogyan értelmezhetjük az Intent-Based Networking (IBN) működését a hagyományos hálózatkezeléshez képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IBN-ben a rendszergazda csak a kívánt végeredményt határozza meg, és a rendszer automatikusan végzi el a szükséges konfigurációkat, folyamatos visszacsatolással és korrekciókkal.",
      "Az IBN-ben a rendszergazda meghatározza a hálózati célokat, majd a rendszer előre definiált sablonok alapján konfigurálja a hálózatot, de a változtatásokat manuálisan kell jóváhagyni és monitorozni.",
      "Az IBN-ben a rendszer mesterséges intelligencia alapú javaslatokat tesz a hálózati beállításokra, amelyeket a rendszergazda felülvizsgál és implementál a megfelelő eszközökön keresztül."
    ],
    "helyes": "Az IBN-ben a rendszergazda csak a kívánt végeredményt határozza meg, és a rendszer automatikusan végzi el a szükséges konfigurációkat, folyamatos visszacsatolással és korrekciókkal."
  },
  {
    "szoveg": "Egy vállalat különböző típusú IoT eszközöket szeretne üzemeltetni ugyanazon a hálózati infrastruktúrán. Hogyan oldható meg ez Network Slicing segítségével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai hálózatot több virtuális szeletre osztjuk, ahol minden szelet más-más IoT alkalmazástípus egyedi követelményeinek megfelelően van optimalizálva (pl. sávszélesség, késleltetés).",
      "A hálózati infrastruktúrát virtuális szegmensekre bontjuk, ahol minden szegmens dedikált erőforrásokkal és egyedi konfigurációval rendelkezik az adott IoT eszközök optimális működtetéséhez.",
      "Az infrastruktúrát dinamikusan konfigurálható virtuális részekre osztjuk, amelyek mindegyike specifikus teljesítményparaméterekkel és biztonsági beállításokkal rendelkezik."
    ],
    "helyes": "A fizikai hálózatot több virtuális szeletre osztjuk, ahol minden szelet más-más IoT alkalmazástípus egyedi követelményeinek megfelelően van optimalizálva (pl. sávszélesség, késleltetés)."
  },
  {
    "szoveg": "Milyen következményekkel járhat az Intent-Based Networking és Network Slicing együttes alkalmazása a jövő hálózatüzemeltetésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az üzemeltetési költségek csökkennek, miközben nő a hálózat rugalmassága és automatizáltsága, valamint javul a szolgáltatásminőség az intelligens erőforrás-menedzsment révén.",
      "A hálózati infrastruktúra komplexitása miatt átmenetileg emelkedhetnek az üzemeltetési költségek, azonban a szolgáltatásminőség és a biztonsági mechanizmusok jelentősen fejlődnek az intelligens automatizációnak köszönhetően.",
      "Az automatizált rendszerek bevezetése ideiglenesen csökkentheti a hálózat rugalmasságát, azonban az üzemeltetési folyamatok egyszerűsödnek és a hosszú távú költséghatékonyság jelentősen javul az intelligens menedzsment révén."
    ],
    "helyes": "Az üzemeltetési költségek csökkennek, miközben nő a hálózat rugalmassága és automatizáltsága, valamint javul a szolgáltatásminőség az intelligens erőforrás-menedzsment révén."
  },
  {
    "szoveg": "Egy nagyvállalat szempontjából értékelve, melyik állítás tükrözi legpontosabban az IBN és Network Slicing együttes bevezetésének értékét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kezdeti magasabb beruházási költségek ellenére hosszú távon jelentős előnyökkel jár, mivel növeli a hálózat hatékonyságát, csökkenti az üzemeltetési költségeket és javítja a szolgáltatásminőséget.",
      "A technológiák jelentős kezdeti befektetést és szakértői erőforrásokat igényelnek, miközben a várható megtérülés bizonytalan, és az implementáció során felmerülő kihívások kezelése túlzott erőforrásokat emészthet fel.",
      "Az infrastruktúra modernizációja során érdemes megfontolni az egyedi megoldások alkalmazását, mivel a hagyományos hálózati architektúrák már bizonyították megbízhatóságukat és költséghatékonyságukat a vállalati környezetben."
    ],
    "helyes": "A kezdeti magasabb beruházási költségek ellenére hosszú távon jelentős előnyökkel jár, mivel növeli a hálózat hatékonyságát, csökkenti az üzemeltetési költségeket és javítja a szolgáltatásminőséget."
  },
  {
    "szoveg": "Egy nagy autóipari vállalat gyártósorának szenzorai másodpercenként több ezer adatpontot generálnak a gyártási folyamatról. Hogyan járul hozzá az Edge Computing a gyártási folyamat optimalizálásához ebben a környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatok helyi feldolgozásával azonnali döntések hozhatók, csökkentve a késleltetést és a hálózati terhelést, miközben csak a releváns összesített adatok kerülnek továbbításra a felhőbe.",
      "Az adatok valós idejű feldolgozása során a peremhálózati eszközök elemzik és szűrik az információkat, optimalizálva a sávszélességet, miközben a kritikus mintázatokat azonnal felismerik és kezelik.",
      "A gyártósori szenzorok által generált adatfolyamot intelligens peremeszközök dolgozzák fel helyben, biztosítva a gyors reakcióidőt és minimalizálva a szükségtelen adattovábbítást."
    ],
    "helyes": "Az adatok helyi feldolgozásával azonnali döntések hozhatók, csökkentve a késleltetést és a hálózati terhelést, miközben csak a releváns összesített adatok kerülnek továbbításra a felhőbe."
  },
  {
    "szoveg": "Egy okosváros közlekedési rendszerének tervezésekor hogyan alkalmazná a Fog Computing architektúrát a forgalomirányítás optimalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A közlekedési lámpák és szenzorok adatait kerületenként Fog node-okban dolgoznám fel, amelyek egymással kommunikálva optimalizálnák a forgalmat, és csak az aggregált adatokat küldenék a központi rendszerbe.",
      "A városi forgalmi adatokat elosztott feldolgozó egységekben elemezném, amelyek a felhő és az eszközök között helyezkednek el, így biztosítva a valós idejű döntéshozatalt és az optimális erőforrás-kihasználást.",
      "Az intelligens közlekedési rendszer adatait köztes feldolgozó rétegben kezelném, amely összehangolja a helyi forgalomirányítást és a központi rendszer működését a hatékony városszintű optimalizálás érdekében."
    ],
    "helyes": "A közlekedési lámpák és szenzorok adatait kerületenként Fog node-okban dolgoznám fel, amelyek egymással kommunikálva optimalizálnák a forgalmat, és csak az aggregált adatokat küldenék a központi rendszerbe."
  },
  {
    "szoveg": "Hogyan fog változni az Edge Computing szerepe az 5G és később a 6G hálózatok elterjedésével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Edge Computing jelentősége növekedni fog, mivel az új generációs hálózatok több IoT eszközt és nagyobb adatmennyiséget támogatnak, ami fokozott helyi feldolgozási kapacitást igényel.",
      "Az Edge Computing jelentősége várhatóan csökkenni fog, mivel a fejlett hálózati infrastruktúra és a megnövekedett sávszélesség lehetővé teszi az összes adat központi felhőben történő valós idejű feldolgozását és elemzését.",
      "Az Edge Computing szerepe és jelentősége változatlan szinten marad, mivel a jelenlegi elosztott számítási infrastruktúra és feldolgozási kapacitás már teljes mértékben kielégíti a jövőbeli hálózati igényeket is."
    ],
    "helyes": "Az Edge Computing jelentősége növekedni fog, mivel az új generációs hálózatok több IoT eszközt és nagyobb adatmennyiséget támogatnak, ami fokozott helyi feldolgozási kapacitást igényel."
  },
  {
    "szoveg": "Egy kritikus egészségügyi monitoring rendszer tervezésekor melyik megközelítés a legmegfelelőbb az Edge és Cloud Computing kombinálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hibrid architektúra, ahol a kritikus életfunkciókat helyben monitorozzuk és elemezzük, míg a hosszú távú adatelemzés és mintázatfelismerés a felhőben történik, redundáns biztonsági mechanizmusokkal.",
      "Tisztán felhő alapú megoldás, amely központosított adatfeldolgozást és tárolást biztosít, fejlett biztonsági protokollokkal és redundáns infrastruktúrával, miközben maximális számítási kapacitást és skálázhatóságot nyújt az elemzésekhez.",
      "Kizárólag Edge-alapú feldolgozási architektúra, amely a teljes adatfeldolgozást és elemzést lokálisan végzi, dedikált hardveres redundanciával és többszintű biztonsági mechanizmusokkal a maximális megbízhatóság érdekében."
    ],
    "helyes": "Hibrid architektúra, ahol a kritikus életfunkciókat helyben monitorozzuk és elemezzük, míg a hosszú távú adatelemzés és mintázatfelismerés a felhőben történik, redundáns biztonsági mechanizmusokkal."
  },
  {
    "szoveg": "Hogyan viszonyul az 5G hálózat eszközsűrűség-kezelési képessége a 4G-hez képest, és mi ennek a jelentősége az IoT alkalmazások szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az 5G 1 millió eszköz/km² sűrűséget támogat a 4G 100 ezer eszköz/km² értékével szemben, ami lehetővé teszi a nagy eszközszámú IoT alkalmazások hatékony működtetését.",
      "Az 5G technológia tízszeres adatátviteli kapacitást és 100 ezer eszköz/km² sűrűséget biztosít, ami jelentősen javítja a hálózati kommunikáció hatékonyságát az IoT rendszerekben.",
      "Az 5G hálózat fejlett eszközkezelési protokolljai és megnövelt sávszélessége lehetővé teszi a komplex IoT alkalmazások támogatását városi környezetben."
    ],
    "helyes": "Az 5G 1 millió eszköz/km² sűrűséget támogat a 4G 100 ezer eszköz/km² értékével szemben, ami lehetővé teszi a nagy eszközszámú IoT alkalmazások hatékony működtetését."
  },
  {
    "szoveg": "Mit jelent a Network Slicing koncepció az 5G hálózatokban, és hogyan szolgálja a különböző felhasználási eseteket?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A fizikai hálózati infrastruktúra felosztását különálló virtuális hálózatokra, amelyek mindegyike specifikus szolgáltatási követelményeknek felel meg.",
      "A hálózati erőforrások dinamikus szegmentálását és allokálását különböző felhasználói csoportok között, amely lehetővé teszi az egyedi szolgáltatásminőségi paraméterek garantált biztosítását minden szegmensben.",
      "A teljes hálózati infrastruktúra virtualizált particionálását elkülönített szolgáltatási rétegekre, amelyek mindegyike dedikált erőforrásokkal és optimalizált teljesítményjellemzőkkel rendelkezik."
    ],
    "helyes": "A fizikai hálózati infrastruktúra felosztását különálló virtuális hálózatokra, amelyek mindegyike specifikus szolgáltatási követelményeknek felel meg."
  },
  {
    "szoveg": "Hogyan épül fel egy modern 5G hálózat architektúrája a szolgáltatás-alapú megközelítés (SBA) szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Mikroszolgáltatás-alapú, felhő-natív komponensekből áll, ahol a hálózati funkciók független szolgáltatásokként kommunikálnak egymással szabványos API-kon keresztül.",
      "Monolitikus rendszerként működik, ahol a hálózati funkciók szorosan integrált modulokként futnak, és a kommunikáció belső interfészeken keresztül történik a maximális teljesítmény és megbízhatóság érdekében.",
      "Hierarchikus struktúrában szerveződik, ahol a hálózati funkciók rétegezett architektúrában működnek együtt, és a kommunikáció szigorúan szabályozott protokollok szerint történik a szomszédos rétegek között."
    ],
    "helyes": "Mikroszolgáltatás-alapú, felhő-natív komponensekből áll, ahol a hálózati funkciók független szolgáltatásokként kommunikálnak egymással szabványos API-kon keresztül."
  },
  {
    "szoveg": "Milyen szempontok alapján értékelhető az 5G hálózat bevezetésének indokoltsága egy ipari környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az ultra-alacsony késleltetés, magas megbízhatóság és eszközsűrűség szükségessége, valamint a Network Slicing által biztosított dedikált szolgáltatásminőség alapján.",
      "Az adatátviteli sebesség és sávszélesség-kapacitás optimalizálása, valamint a hálózati erőforrások dinamikus kezelése a gyártási folyamatok hatékonyságának növelése érdekében.",
      "A beruházási és üzemeltetési költségek megtérülése, illetve a hálózati infrastruktúra skálázhatósága és a végpontok közötti kommunikáció megbízhatósági mutatói alapján."
    ],
    "helyes": "Az ultra-alacsony késleltetés, magas megbízhatóság és eszközsűrűség szükségessége, valamint a Network Slicing által biztosított dedikált szolgáltatásminőség alapján."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a Network Slicing technológia alapvető működési elvét a modern mobilhálózatokban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Egyetlen fizikai hálózati infrastruktúra logikai felosztása több, egymástól független virtuális hálózatra, ahol minden szelet saját erőforrásokkal és szolgáltatási paraméterekkel rendelkezik.",
      "A fizikai hálózati infrastruktúra szegmentálása különálló virtuális rétegekre, ahol minden szegmens dedikált erőforrás-készlettel és egyedi szolgáltatási jellemzőkkel működik a többi rétegtől függetlenül.",
      "Az egységes hálózati architektúra dinamikus felosztása izolált virtuális szeletekre, amelyek mindegyike specifikus szolgáltatási követelményeknek megfelelően konfigurálható és menedzselhető."
    ],
    "helyes": "Egyetlen fizikai hálózati infrastruktúra logikai felosztása több, egymástól független virtuális hálózatra, ahol minden szelet saját erőforrásokkal és szolgáltatási paraméterekkel rendelkezik."
  },
  {
    "szoveg": "Egy telekommunikációs vállalat három különböző szolgáltatást szeretne nyújtani ugyanazon a hálózati infrastruktúrán: sürgősségi kommunikációt, ipari IoT alkalmazásokat és nagy felbontású videostreaminget. Hogyan valósítható meg ez Network Slicing segítségével?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Három különböző hálózati szelet konfigurálása: az első alacsony késleltetéssel és magas megbízhatósággal a sürgősségi kommunikációhoz, a második nagy eszközszámmal és energiahatékonysággal az IoT-hoz, a harmadik nagy sávszélességgel a streaminghez.",
      "Különálló virtuális hálózati rétegek létrehozása, ahol minden szolgáltatás saját dedikált erőforrásokkal és QoS paraméterekkel rendelkezik, miközben a hálózati vezérlő dinamikusan optimalizálja az erőforrások elosztását az aktuális igények alapján.",
      "Az infrastruktúra logikai felosztása három független virtuális hálózatra, amelyek mindegyike specifikus teljesítményparaméterekkel és erőforrás-garanciákkal rendelkezik az adott szolgáltatástípus optimális működésének biztosításához."
    ],
    "helyes": "Három különböző hálózati szelet konfigurálása: az első alacsony késleltetéssel és magas megbízhatósággal a sürgősségi kommunikációhoz, a második nagy eszközszámmal és energiahatékonysággal az IoT-hoz, a harmadik nagy sávszélességgel a streaminghez."
  },
  {
    "szoveg": "Egy okosváros projekt keretében hogyan alkalmazná a Network Slicing technológiát a különböző városi szolgáltatások optimális működtetéséhez?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Külön hálózati szeletek kialakítása a közlekedésirányításnak (alacsony késleltetés), a közműrendszerek IoT szenzorainak (nagy eszközszám), és a közbiztonsági kamerarendszernek (nagy sávszélesség), mindegyik saját optimalizált paramétereivel.",
      "Dedikált hálózati infrastruktúra kialakítása központi vezérléssel, ahol a szolgáltatások prioritás alapú erőforrás-hozzárendelést kapnak, valamint intelligens forgalommenedzsment és automatizált teljesítményoptimalizálás biztosítja a hatékony működést.",
      "A városi szolgáltatások területi alapú szegmentálása és virtualizációja, ahol minden körzet saját dedikált hálózati erőforrásokkal rendelkezik, automatikus terheléselosztással és redundáns biztonsági mechanizmusokkal kiegészítve."
    ],
    "helyes": "Külön hálózati szeletek kialakítása a közlekedésirányításnak (alacsony késleltetés), a közműrendszerek IoT szenzorainak (nagy eszközszám), és a közbiztonsági kamerarendszernek (nagy sávszélesség), mindegyik saját optimalizált paramétereivel."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy Network Slicing implementáció sikeressége egy nagy mobilszolgáltató hálózatában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szeletek közötti teljes izoláció megvalósulása, az egyes szeletek szolgáltatásminőségi mutatóinak teljesülése, és az erőforrások hatékony kihasználtsága alapján, figyelembe véve az üzemeltetési költségeket.",
      "A hálózati infrastruktúra teljesítményének átfogó értékelése alapján, beleértve az adatátviteli sebességet, rendszerválaszidőt és skálázhatóságot, valamint a virtualizált erőforrások kihasználtságának optimalizálását.",
      "A hálózati szeletelés implementációjának technikai paraméterei és felhasználói metrikái alapján, figyelembe véve a szeletenként elkülönített erőforrások mennyiségét és a szolgáltatási szint megállapodások teljesülését."
    ],
    "helyes": "A szeletek közötti teljes izoláció megvalósulása, az egyes szeletek szolgáltatásminőségi mutatóinak teljesülése, és az erőforrások hatékony kihasználtsága alapján, figyelembe véve az üzemeltetési költségeket."
  },
  {
    "szoveg": "Egy telekommunikációs vállalat 5G hálózatában jelentős késleltetést tapasztalnak a felhasználók egy nagyváros üzleti negyedében. Mi lehet ennek a legvalószínűbb értelmezése az 5G hálózati architektúra szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Multi-access Edge Computing (MEC) erőforrások nem megfelelő elhelyezése vagy kapacitása az üzleti negyedben, ami növeli a feldolgozási és továbbítási késleltetést.",
      "A milliméteres hullámhosszú (mmWave) antennák nem optimális konfigurációja és elhelyezése az üzleti negyed területén, ami jelentősen befolyásolja a jelfeldolgozás hatékonyságát és növeli a hálózati késleltetést.",
      "A hálózati szeletelés (network slicing) implementációjának nem megfelelő tervezése és az erőforrások nem hatékony felosztása az üzleti környezetben, ami többletkésleltetést eredményez a feldolgozási folyamatokban."
    ],
    "helyes": "A Multi-access Edge Computing (MEC) erőforrások nem megfelelő elhelyezése vagy kapacitása az üzleti negyedben, ami növeli a feldolgozási és továbbítási késleltetést."
  },
  {
    "szoveg": "Egy 5G hálózat tervezésekor hogyan modellezhető leghatékonyabban a hálózati erőforrások elosztása egy olyan városrészben, ahol mind lakossági, mind ipari IoT eszközök nagy számban vannak jelen?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Network slicing alapú modell, ahol külön virtuális hálózati szegmensek szolgálják ki a lakossági és az ipari felhasználókat, mindegyik saját QoS paraméterekkel és erőforrás-allokációval.",
      "Dinamikus erőforrás-menedzsment alapú modell, ahol az infrastruktúra intelligens algoritmusokkal osztja el a sávszélességet és egyéb erőforrásokat a felhasználói igények és prioritások alapján, figyelembe véve a szolgáltatási szint követelményeket.",
      "Adaptív hálózati szegmentálás és prioritás-alapú erőforrás-elosztási modell, amely valós időben optimalizálja a hálózati kapacitást a különböző felhasználói csoportok igényei szerint, garantált szolgáltatási szintekkel."
    ],
    "helyes": "Network slicing alapú modell, ahol külön virtuális hálózati szegmensek szolgálják ki a lakossági és az ipari felhasználókat, mindegyik saját QoS paraméterekkel és erőforrás-allokációval."
  },
  {
    "szoveg": "Egy nagy kiterjedésű ipari létesítményben hogyan alkalmazná az 5G hálózat tervezési elveit a lefedettség és a kapacitás optimalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Massive MIMO és beamforming technológiák kombinált alkalmazása, kiegészítve small cell-ekkel a nagy forgalmú területeken, valamint MEC szerverek stratégiai elhelyezése a kritikus alkalmazásokhoz.",
      "Nagy teljesítményű makrocellák és adaptív antenna rendszerek telepítése az épület stratégiai pontjain, kombinálva fejlett hálózati virtualizációval és dinamikus teljesítményszabályozással.",
      "Intelligens cellás architektúra kialakítása frekvencia-újrafelhasználással, többrétegű hálózati szegmentációval és automatizált teljesítményoptimalizálással a változó terhelés kezelésére."
    ],
    "helyes": "Massive MIMO és beamforming technológiák kombinált alkalmazása, kiegészítve small cell-ekkel a nagy forgalmú területeken, valamint MEC szerverek stratégiai elhelyezése a kritikus alkalmazásokhoz."
  },
  {
    "szoveg": "Egy 5G hálózat implementációja során hogyan ítélhető meg leghatékonyabban a network slicing konfiguráció megfelelősége?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A szolgáltatásminőségi mutatók (QoS) folyamatos monitorozásával minden szegmensben, a erőforrás-kihasználtság elemzésével, és a felhasználói élmény metrikák összevetésével a tervezett szolgáltatási szint megállapodásokkal (SLA).",
      "A hálózati teljesítmény átfogó elemzésével, beleértve az adatátviteli sebesség mérését, a késleltetési mutatók vizsgálatát és a felhasználói terhelés eloszlásának monitorozását különböző időszakokban, figyelmen kívül hagyva az egyedi szegmens-specifikus követelményeket.",
      "A rendszerszintű metrikák folyamatos értékelésével, beleértve a hardveres erőforrások kihasználtságát, a hálózati szegmensek közötti forgalom elemzését és a teljesítménymutatók vizsgálatát, az előre definiált szolgáltatási célok figyelembevétele nélkül."
    ],
    "helyes": "A szolgáltatásminőségi mutatók (QoS) folyamatos monitorozásával minden szegmensben, a erőforrás-kihasználtság elemzésével, és a felhasználói élmény metrikák összevetésével a tervezett szolgáltatási szint megállapodásokkal (SLA)."
  },
  {
    "szoveg": "Hogyan viszonyul egymáshoz az MQTT és CoAP protokoll a megbízhatóság és erőforrásigény szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az MQTT TCP-alapú, magasabb megbízhatságú és erőforrásigényű, míg a CoAP UDP-alapú, alacsonyabb megbízhatságú és erőforrásigényű protokoll.",
      "Az MQTT és CoAP protokollok közül az MQTT alacsonyabb megbízhatságú és erőforrásigényű TCP-alapú protokoll, míg a CoAP magasabb megbízhatóságú UDP-alapú megoldást kínál.",
      "Az MQTT és CoAP protokollok közül mindkettő TCP-alapú, de az MQTT alacsonyabb megbízhatóságú és erőforrásigényű, míg a CoAP magasabb megbízhatóságot biztosít."
    ],
    "helyes": "Az MQTT TCP-alapú, magasabb megbízhatságú és erőforrásigényű, míg a CoAP UDP-alapú, alacsonyabb megbízhatságú és erőforrásigényű protokoll."
  },
  {
    "szoveg": "Mit jelent az MQTT protokoll publish/subscribe kommunikációs modellje a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eszközök üzeneteket publikálnak különböző témákban, és más eszközök feliratkozhatnak ezekre a témákra, így kapva meg az üzeneteket egy központi brokeren keresztül.",
      "Az eszközök egy központi kommunikációs rendszeren keresztül továbbítják az üzeneteiket, ahol minden eszköz egyedi azonosítóval rendelkezik, és a címzettek közvetlen kapcsolat nélkül fogadják az adatokat.",
      "Az eszközök egy strukturált üzenetkezelő rendszerben osztják meg az információkat, ahol a kommunikáció aszinkron módon történik, és a fogadók előre definiált szabályok szerint kapják meg az adatokat."
    ],
    "helyes": "Az eszközök üzeneteket publikálnak különböző témákban, és más eszközök feliratkozhatnak ezekre a témákra, így kapva meg az üzeneteket egy központi brokeren keresztül."
  },
  {
    "szoveg": "Egy ipari környezetben működő, korlátozott erőforrású szenzorhálózat esetében, ahol nincs szükség garantált üzenetkézbesítésre, melyik protokollt célszerű használni?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A CoAP protokollt, mert kisebb erőforrásigényű és nem igényel központi szervert a működéshez.",
      "Az MQTT protokollt, mivel a központi broker architektúra és a TCP alapú kommunikáció jelentős erőforrásokat igényel a megbízható működéshez.",
      "A hagyományos HTTP protokollt, mert a REST alapú kommunikáció és a TCP kapcsolatok kezelése optimális megoldást nyújt az erőforráskorlátozott környezetben."
    ],
    "helyes": "A CoAP protokollt, mert kisebb erőforrásigényű és nem igényel központi szervert a működéshez."
  },
  {
    "szoveg": "Egy kritikus infrastruktúra távfelügyeleti rendszerének tervezésekor melyik protokoll választása indokolt, és miért?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az MQTT protokoll, mert garantált üzenetkézbesítést biztosít a TCP használatával, és a QoS szintek segítségével finomhangolható a megbízhatóság.",
      "A CoAP protokoll, mert az UDP alapú kommunikáció és a beépített visszaigazolási mechanizmusok biztosítják a megfelelő teljesítményt és megbízhatóságot a kritikus rendszerekben.",
      "A hagyományos HTTP protokoll, mivel szabványos működése és széleskörű támogatottsága révén megbízható alapot nyújt a kritikus infrastruktúrák felügyeletéhez."
    ],
    "helyes": "Az MQTT protokoll, mert garantált üzenetkézbesítést biztosít a TCP használatával, és a QoS szintek segítségével finomhangolható a megbízhatóság."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a LoRaWAN adaptív adatsebességének (ADR) működését az energiahatékonyság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eszköz a jelerősség és jel-zaj viszony alapján automatikusan optimalizálja az adatsebességet és adóteljesítményt, így minimalizálva az energiafogyasztást a megbízható kommunikáció fenntartása mellett.",
      "Az eszköz folyamatosan monitorozza a hálózati feltételeket és a maximális teljesítményszintet állítja be alapértelmezettként, majd fokozatosan csökkenti azt a jelerősség és környezeti paraméterek függvényében.",
      "Az eszköz dinamikusan szabályozza az adatátviteli paramétereket a gateway-től érkező visszajelzések alapján, előnyben részesítve a nagyobb adatsebességet az energiahatékonyság rovására."
    ],
    "helyes": "Az eszköz a jelerősség és jel-zaj viszony alapján automatikusan optimalizálja az adatsebességet és adóteljesítményt, így minimalizálva az energiafogyasztást a megbízható kommunikáció fenntartása mellett."
  },
  {
    "szoveg": "Egy ipari IoT rendszerben hogyan modellezhető a LoRaWAN és NB-IoT együttes használata a különböző típusú szenzorok esetén?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A ritkán kommunikáló, elemről működő szenzorok LoRaWAN-t használnak, míg a gyakori, valós idejű adatküldést igénylő, kritikus szenzorok NB-IoT-n kommunikálnak a garantált QoS miatt.",
      "A költséghatékony működtetés érdekében minden szenzor LoRaWAN technológiát alkalmaz, amely biztosítja az optimális energiafelhasználást és megfelelő kommunikációs sebességet a különböző alkalmazási területeken.",
      "Az ipari környezetben minden szenzor NB-IoT technológiát használ a megbízható kommunikáció és valós idejű adatátvitel érdekében, figyelembe véve a hálózati infrastruktúra kiépítésének szempontjait."
    ],
    "helyes": "A ritkán kommunikáló, elemről működő szenzorok LoRaWAN-t használnak, míg a gyakori, valós idejű adatküldést igénylő, kritikus szenzorok NB-IoT-n kommunikálnak a garantált QoS miatt."
  },
  {
    "szoveg": "Egy városi környezetben telepítendő okos parkolási rendszer esetében melyik LPWAN technológia használata a legcélszerűbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "NB-IoT, mert jobb épületen belüli lefedettséget biztosít, és a parkolóházakban is megbízható kommunikációt tesz lehetővé, valamint a valós idejű foglaltság-információk továbbítása is megoldható.",
      "LoRaWAN, mert bár épületen belül korlátozottabb a lefedettség, de a meglévő gateway infrastruktúra és az alacsonyabb energiafogyasztás miatt költséghatékonyabb megoldást biztosít a városi parkolási rendszerekhez.",
      "A Sigfox technológia lenne optimális, mivel a parkolási rendszerek kis adatmennyiséget továbbítanak, és a meglévő bázisállomás-hálózat megfelelő lefedettséget biztosít a városokban, alacsony üzemeltetési költségek mellett."
    ],
    "helyes": "NB-IoT, mert jobb épületen belüli lefedettséget biztosít, és a parkolóházakban is megbízható kommunikációt tesz lehetővé, valamint a valós idejű foglaltság-információk továbbítása is megoldható."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy mezőgazdasági monitoring rendszerben a LoRaWAN és NB-IoT alkalmazhatósága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A LoRaWAN előnyösebb, mert nagy területen biztosít lefedettséget, rendkívül alacsony energiafogyasztással és költséghatékonyan, miközben a mezőgazdasági szenzorok tipikusan nem igényelnek valós idejű kommunikációt.",
      "Az NB-IoT technológia magasabb adatátviteli sebességet és jobb városi lefedettséget biztosít, azonban a mezőgazdasági alkalmazásokban ezek az előnyök nem kompenzálják a magasabb energiafogyasztást és üzemeltetési költségeket.",
      "A mezőgazdasági monitoring rendszerek speciális követelményei, mint a nagy területi lefedettség és hosszú elemélettartam szempontjából mindkét technológia hasonló teljesítményt nyújt, de az üzemeltetési költségek jelentősen eltérnek."
    ],
    "helyes": "A LoRaWAN előnyösebb, mert nagy területen biztosít lefedettséget, rendkívül alacsony energiafogyasztással és költséghatékonyan, miközben a mezőgazdasági szenzorok tipikusan nem igényelnek valós idejű kommunikációt."
  },
  {
    "szoveg": "Egy IoT rendszerben az eszközök adatgyűjtési gyakoriságát 1 percről 5 percre növeltük. Hogyan értelmezhető ez a változtatás az energiahatékonyság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az eszközök energiafogyasztása csökken, mivel ritkábban kell felébredniük és adatot továbbítaniuk, ami hosszabb akkumulátor élettartamot eredményez.",
      "Az energiafogyasztás növekszik, mivel az eszközöknek gyakrabban kell aktiválniuk a rádió modult és több energiát fordítaniuk az adatok pufferelésére a hosszabb mintavételezési ciklusok során.",
      "Az energiafelhasználás nem változik jelentősen, mivel az eszközöknek ugyanannyi energiát kell fordítaniuk az adatgyűjtésre és továbbításra, csak más időbeli eloszlásban."
    ],
    "helyes": "Az eszközök energiafogyasztása csökken, mivel ritkábban kell felébredniük és adatot továbbítaniuk, ami hosszabb akkumulátor élettartamot eredményez."
  },
  {
    "szoveg": "Egy nagy kiterjedésű mezőgazdasági IoT rendszert tervezünk. Hogyan modellezhető a leghatékonyabb hálózati architektúra az energiafogyasztás és skálázhatóság szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hierarchikus mesh hálózat gateway-ekkel, ahol a szenzorok clusterei egy-egy gateway-hez kapcsolódnak, és csak a gateway-ek kommunikálnak a központi szerverrel.",
      "Közvetlen csillag topológiájú hálózat, ahol minden szenzor közvetlenül kommunikál a központi szerverrel, ami növeli az energiafogyasztást, de egyszerűsíti az adatgyűjtési folyamatot és a rendszer menedzselhetőségét.",
      "Egyszerű láncolt hálózati struktúra, ahol az eszközök csak a szomszédos nodokkal kommunikálnak, így optimalizálva az energiafelhasználást, miközben biztosítják az adatok továbbítását a központi feldolgozó egység felé."
    ],
    "helyes": "Hierarchikus mesh hálózat gateway-ekkel, ahol a szenzorok clusterei egy-egy gateway-hez kapcsolódnak, és csak a gateway-ek kommunikálnak a központi szerverrel."
  },
  {
    "szoveg": "Egy meglévő IoT hálózatban az eszközök akkumulátorainak élettartama túl rövid. Hogyan használná fel a rendelkezésre álló technológiákat a probléma megoldására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "LoRaWAN protokoll bevezetése adaptív adatsebességgel, alvó módok implementálása és helyi adatpufferelés alkalmazása az adatküldések optimalizálására.",
      "Energiahatékony kommunikációs protokollok implementálása, intelligens teljesítménykezelés bevezetése és az adatátviteli események optimalizálása időzített szinkronizációval.",
      "Alacsony fogyasztású rádiós technológia alkalmazása dinamikus teljesítményszabályozással, valamint az adatgyűjtés és továbbítás intelligens ütemezésének bevezetése."
    ],
    "helyes": "LoRaWAN protokoll bevezetése adaptív adatsebességgel, alvó módok implementálása és helyi adatpufferelés alkalmazása az adatküldések optimalizálására."
  },
  {
    "szoveg": "Egy IoT rendszer tervezésénél két megoldás közül kell választani: A) Óránkénti adatküldés nagy pontosságú szenzorokkal, B) 15 percenkénti adatküldés közepes pontosságú szenzorokkal. Melyik megoldás optimálisabb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az optimális megoldás az alkalmazási területtől függ: gyorsan változó folyamatoknál a B), lassan változó folyamatoknál az A) megoldás előnyösebb.",
      "A gyakoribb mintavételezés és közepes pontosság kombinációja általában költséghatékonyabb és rugalmasabb megoldást biztosít a legtöbb IoT alkalmazási területen, mivel jobban követi a változásokat.",
      "A ritkább, de pontosabb adatgyűjtés minden esetben megbízhatóbb eredményeket szolgáltat, mivel a mérési pontosság kritikusabb tényező, mint az időbeli felbontás az IoT rendszerekben."
    ],
    "helyes": "Az optimális megoldás az alkalmazási területtől függ: gyorsan változó folyamatoknál a B), lassan változó folyamatoknál az A) megoldás előnyösebb."
  },
  {
    "szoveg": "Milyen alapvető különbség van az Edge Computing és a Fog Computing erőforrás-kezelése között?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Edge Computing korlátozott, lokális erőforrásokkal rendelkezik közvetlenül az eszközöknél, míg a Fog Computing nagyobb, megosztott erőforrás-készletet biztosít egy köztes rétegben",
      "Az Edge Computing dedikált, eszközszintű erőforrásokat használ a végpontoknál, míg a Fog Computing elosztott feldolgozási kapacitást biztosít a hálózati infrastruktúra középső rétegében",
      "Az Edge Computing az eszközökhöz közeli, limitált számítási kapacitást alkalmaz, míg a Fog Computing rugalmas, skálázható erőforrás-poolokat biztosít a perem és a felhő között"
    ],
    "helyes": "Az Edge Computing korlátozott, lokális erőforrásokkal rendelkezik közvetlenül az eszközöknél, míg a Fog Computing nagyobb, megosztott erőforrás-készletet biztosít egy köztes rétegben"
  },
  {
    "szoveg": "Hogyan értelmezhető a Fog Computing szerepe egy okosváros közlekedési rendszerében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A Fog Computing összegyűjti és elemzi a különböző közlekedési szenzorok adatait egy lokális hálózaton belül, optimalizálva a forgalomirányítást, mielőtt továbbítaná az adatokat a felhőbe",
      "A Fog Computing egy központosított adatfeldolgozó rendszert működtet a felhőben, amely valós időben elemzi és továbbítja a közlekedési adatokat a városi infrastruktúra eszközei között, késleltetett helyi feldolgozás nélkül",
      "A Fog Computing egy összetett hálózati architektúrát alkalmaz, amely kizárólag a forgalmi csomópontok közvetlen irányítására koncentrál, mellőzve az átfogó adatelemzést és az intelligens forgalomoptimalizálást"
    ],
    "helyes": "A Fog Computing összegyűjti és elemzi a különböző közlekedési szenzorok adatait egy lokális hálózaton belül, optimalizálva a forgalomirányítást, mielőtt továbbítaná az adatokat a felhőbe"
  },
  {
    "szoveg": "Egy ipari IoT rendszerben hogyan működik együtt az Edge és Fog Computing egy gyártósor felügyeletében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Edge eszközök valós időben monitorozzák és szabályozzák a gyártósort, míg a Fog réteg összesíti és elemzi a termelési adatokat, támogatva a hosszabb távú optimalizációt",
      "Az Edge eszközök a gyártósor közvetlen felügyeletét végzik, míg a Fog réteg párhuzamosan futó folyamatokat kezel, de az adatfeldolgozás nem kapcsolódik össze a rendszer különböző szintjein",
      "Az Edge komponensek kizárólag adatgyűjtési feladatokat látnak el a gyártósoron, míg a Fog réteg végzi az összes vezérlési és szabályozási műveletet a termelési folyamat során"
    ],
    "helyes": "Az Edge eszközök valós időben monitorozzák és szabályozzák a gyártósort, míg a Fog réteg összesíti és elemzi a termelési adatokat, támogatva a hosszabb távú optimalizációt"
  },
  {
    "szoveg": "Egy kritikus ipari alkalmazás esetén, ahol a válaszidő és a megbízhatóság elsődleges, melyik megközelítés a megfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Edge Computing, mert minimális késleltetéssel és hálózati függőség nélkül képes működni, biztosítva a folyamatos felügyeletet és beavatkozást",
      "A Fog Computing, mert köztes rétegként működve optimalizálja az adatfeldolgozást és elosztott számítási kapacitást biztosít, bár némi hálózati késleltetéssel számolni kell",
      "A tisztán felhő alapú megoldás, mert központosított erőforrásaival és skálázható infrastruktúrájával képes kezelni a komplex feldolgozási feladatokat, távoli elérhetőséget biztosítva"
    ],
    "helyes": "Az Edge Computing, mert minimális késleltetéssel és hálózati függőség nélkül képes működni, biztosítva a folyamatos felügyeletet és beavatkozást"
  },
  {
    "szoveg": "Hogyan értelmezhetjük az Edge Intelligence koncepcióját a hagyományos felhő alapú feldolgozáshoz képest?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adatfeldolgozás és elemzés a hálózat peremén történik, közelebb az adatok forrásához, csökkentve a késleltetést és a központi felhő terhelését",
      "Az adatfeldolgozás központosított módon történik a felhőben, ami lehetővé teszi a nagy mennyiségű adat hatékony feldolgozását, miközben optimalizálja az erőforrások kihasználtságát",
      "Az adatfeldolgozási folyamatok párhuzamosan futnak a felhőben és a peremhálózaton, biztosítva a redundanciát és maximalizálva az elemzési kapacitást a teljes infrastruktúrában"
    ],
    "helyes": "Az adatfeldolgozás és elemzés a hálózat peremén történik, közelebb az adatok forrásához, csökkentve a késleltetést és a központi felhő terhelését"
  },
  {
    "szoveg": "Egy okosváros közlekedési rendszerében hogyan alkalmazná az Edge Intelligence-t a forgalomirányítás optimalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A forgalmi lámpáknál elhelyezett edge eszközök valós időben elemzik a forgalmi adatokat és azonnal módosítják a jelzéseket, csak a hosszú távú elemzéshez küldve adatokat a központba",
      "A forgalmi csomópontoknál telepített intelligens szenzorok folyamatosan továbbítják az adatokat a központi szervernek, amely feldolgozás után visszaküldi a módosított jelzésterveket a helyi vezérlőknek",
      "A közlekedési rendszer központi szerverén futó mesterséges intelligencia elemzi a városi forgalom mintázatait, és az eredmények alapján távvezérléssel optimalizálja a jelzőlámpák működését"
    ],
    "helyes": "A forgalmi lámpáknál elhelyezett edge eszközök valós időben elemzik a forgalmi adatokat és azonnal módosítják a jelzéseket, csak a hosszú távú elemzéshez küldve adatokat a központba"
  },
  {
    "szoveg": "Milyen rendszerarchitektúrát alakítana ki egy nagy kiterjedésű ipari IoT rendszerben az Edge Intelligence alkalmazásával?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Hierarchikus architektúra, ahol az edge eszközök végzik az elsődleges adatfeldolgozást, a gateway-ek az aggregálást, és csak az összesített adatok kerülnek a felhőbe hosszú távú elemzésre",
      "Centralizált architektúra, ahol az összes szenzor adatfeldolgozása közvetlenül a felhőben történik, és a gateway-ek csak az adattovábbítást végzik, miközben az edge eszközök kizárólag adatgyűjtési feladatokat látnak el",
      "Decentralizált edge hálózati struktúra, ahol az eszközök önállóan végzik a feldolgozást és elemzést, a gateway-ek koordinálják a kommunikációt, de a felhő csak biztonsági mentésként szolgál"
    ],
    "helyes": "Hierarchikus architektúra, ahol az edge eszközök végzik az elsődleges adatfeldolgozást, a gateway-ek az aggregálást, és csak az összesített adatok kerülnek a felhőbe hosszú távú elemzésre"
  },
  {
    "szoveg": "Hogyan értékelné az Edge Intelligence alkalmazhatóságát egy kritikus egészségügyi monitoring rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az Edge Intelligence ideális választás, mert a helyi feldolgozás biztosítja a gyors reakcióidőt vészhelyzetekben és az adatok biztonságát, miközben csökkenti a hálózati függőséget",
      "Az Edge Intelligence alkalmazása kockázatos lehet, mivel az elosztott feldolgozási architektúra és a peremeszközök esetleges meghibásodása veszélyeztetheti a rendszer folyamatos működését és az adatok integritását",
      "A központosított felhő alapú megoldások hatékonyabbak, mivel robusztus infrastruktúrájuk és skálázható erőforrásaik révén megbízhatóbb adatfeldolgozást és elemzést tesznek lehetővé az egészségügyi alkalmazásokban"
    ],
    "helyes": "Az Edge Intelligence ideális választás, mert a helyi feldolgozás biztosítja a gyors reakcióidőt vészhelyzetekben és az adatok biztonságát, miközben csökkenti a hálózati függőséget"
  },
  {
    "szoveg": "Egy vállalat edge computing infrastruktúrájában azt tapasztalják, hogy a felhasználók egy része magas késleltetést tapasztal. Mi a legvalószínűbb értelmezése ennek a problémának a tervezési szempontok alapján?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az edge szerverek földrajzi elhelyezkedése nem optimális, túl távol vannak bizonyos felhasználói csoportoktól",
      "Az edge szerverek hardveres erőforrás-elosztása és kapacitástervezése nem megfelelő a felhasználói igények kiszolgálásához",
      "A hálózati infrastruktúra és a biztonsági protokollok konfigurációja nem optimális a hatékony adatforgalom biztosításához"
    ],
    "helyes": "Az edge szerverek földrajzi elhelyezkedése nem optimális, túl távol vannak bizonyos felhasználói csoportoktól"
  },
  {
    "szoveg": "Egy új edge computing infrastruktúra tervezésénél milyen komponensek közötti kapcsolatokat kell figyelembe venni a teljes rendszermodell kialakításához?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Felhasználói végpontok, edge szerverek, központi felhő, hálózati kapcsolatok és terheléselosztók közötti interakciók",
      "A felhasználói eszközök, edge szerverek és hálózati infrastruktúra közötti kommunikációs útvonalak, figyelmen kívül hagyva a felhő komponenseket",
      "A szerverek közötti belső hálózati kapcsolatok, adatbázis-replikációk és terheléselosztás mechanizmusok a peremhálózati infrastruktúrában"
    ],
    "helyes": "Felhasználói végpontok, edge szerverek, központi felhő, hálózati kapcsolatok és terheléselosztók közötti interakciók"
  },
  {
    "szoveg": "Hogyan használná az edge computing infrastruktúrát egy olyan alkalmazás esetében, amely valós idejű videóelemzést végez biztonsági kamerák képein?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A videóelemzést az edge szervereken végezném, csak a feldolgozott eredményeket továbbítanám a központi felhőbe, így csökkentve a sávszélesség-igényt és a késleltetést",
      "A teljes videófolyamot a központi felhőbe továbbítanám elemzésre, miközben az edge szervereket a helyi gyorsítótárazásra és előfeldolgozásra használnám a hatékonyabb adattovábbítás érdekében",
      "A videóelemzést elsődlegesen a kamerákba építeném, az edge szervereket pedig az eredmények tárolására és aggregálására használnám, így optimalizálva a rendszer teljesítményét"
    ],
    "helyes": "A videóelemzést az edge szervereken végezném, csak a feldolgozott eredményeket továbbítanám a központi felhőbe, így csökkentve a sávszélesség-igényt és a késleltetést"
  },
  {
    "szoveg": "Egy edge computing infrastruktúra tervezésénél melyik megoldás tekinthető a legmegfelelőbbnek költség-haszon szempontból?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Moduláris, fokozatosan bővíthető infrastruktúra telepítése, kezdetben a kritikus területekre fókuszálva, automatizált erőforrás-menedzsmenttel",
      "Teljes körű infrastruktúra azonnali implementálása minden potenciális végponton, fejlett monitorozási rendszerrel és automatizált erőforrás-optimalizálással",
      "Alapszintű infrastruktúra kiépítése központosított architektúrával, igény szerinti bővítési lehetőségekkel és intelligens terheléselosztással"
    ],
    "helyes": "Moduláris, fokozatosan bővíthető infrastruktúra telepítése, kezdetben a kritikus területekre fókuszálva, automatizált erőforrás-menedzsmenttel"
  },
  {
    "szoveg": "Hogyan biztosítja a blockchain technológia a tranzakciók megmásíthatatlanságát a hálózatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A blokkok kriptográfiai hash-lánccal kapcsolódnak egymáshoz, és minden módosítás a teljes későbbi lánc újraszámolását igényelné, amit a konszenzus mechanizmus megakadályoz.",
      "A tranzakciók egy decentralizált hálózatban kerülnek validálásra, ahol minden csomópont ellenőrzi és tárolja a teljes láncot, így a módosítások azonnal észlelhetők és elutasításra kerülnek.",
      "A blokkláncban minden tranzakció digitális aláírással és időbélyeggel van ellátva, amit a hálózat összes résztvevője folyamatosan ellenőriz és validál a konszenzus protokoll szerint."
    ],
    "helyes": "A blokkok kriptográfiai hash-lánccal kapcsolódnak egymáshoz, és minden módosítás a teljes későbbi lánc újraszámolását igényelné, amit a konszenzus mechanizmus megakadályoz."
  },
  {
    "szoveg": "Egy vállalat blockchain alapú ellátási lánc rendszert tervez bevezetni. Milyen komponensekből épül fel a rendszer működési modellje?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Elosztott csomópontok hálózata, okos szerződések a validáláshoz, konszenzus mechanizmus a hitelesítéshez, és kriptográfiai hash-ek az adatok integritásának biztosításához.",
      "Központi adatbázis szerver a tranzakciók kezelésére, titkosított kommunikációs protokollok az adatátvitelhez, és elosztott validációs mechanizmusok a műveletek hitelesítéséhez.",
      "Felhő alapú elosztott infrastruktúra a tároláshoz, decentralizált hitelesítési protokollok a validáláshoz, és valós idejű szinkronizációs mechanizmusok az integritás biztosításához."
    ],
    "helyes": "Elosztott csomópontok hálózata, okos szerződések a validáláshoz, konszenzus mechanizmus a hitelesítéshez, és kriptográfiai hash-ek az adatok integritásának biztosításához."
  },
  {
    "szoveg": "Egy nemzetközi logisztikai cég digitális dokumentumhitelesítési rendszert szeretne implementálni blockchain technológiával. Melyik megoldás a legmegfelelőbb?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Privát blockchain hálózat implementálása okos szerződésekkel, ahol a dokumentumok hash-ei kerülnek tárolásra, és a résztvevők előre definiált jogosultságokkal rendelkeznek.",
      "Publikus blockchain hálózat implementálása elosztott konszenzus mechanizmussal, ahol a dokumentumok titkosított hash-ei tárolódnak, de a rendszer nyilvános ellenőrizhetősége megmarad.",
      "Hibrid blockchain architektúra implementálása többszintű hozzáférés-vezérléssel, ahol a dokumentumok digitális ujjlenyomatai és metaadatai elkülönítve tárolódnak."
    ],
    "helyes": "Privát blockchain hálózat implementálása okos szerződésekkel, ahol a dokumentumok hash-ei kerülnek tárolásra, és a résztvevők előre definiált jogosultságokkal rendelkeznek."
  },
  {
    "szoveg": "Egy új blockchain projekt a Proof of Stake (PoS) konszenzus mechanizmust választotta a Proof of Work (PoW) helyett. Mennyire megalapozott ez a döntés?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megfelelő döntés, mert a PoS energiahatékonyabb, skálázhatóbb és környezetbarátabb, miközben megfelelő biztonságot nyújt a hálózatnak a stake-alapú validálással.",
      "Helytelen döntés, mivel a PoS rendszer nem biztosítja azt a decentralizált működést és matematikai bizonyíthatóságot, amit a PoW nyújt, és a stake-alapú validálás hosszú távon centralizációhoz vezethet.",
      "Megkérdőjelezhető választás, mert bár az energiahatékonyság javul, a protokoll biztonsági garanciái és a validátorok kiválasztási mechanizmusa nem nyújt olyan robusztus védelmet, mint a PoW bányászat."
    ],
    "helyes": "Megfelelő döntés, mert a PoS energiahatékonyabb, skálázhatóbb és környezetbarátabb, miközben megfelelő biztonságot nyújt a hálózatnak a stake-alapú validálással."
  },
  {
    "szoveg": "Hogyan értelmezhető a blockchain technológia szerepe az IoT eszközök közötti biztonságos adatcserében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A blockchain decentralizált, kriptográfiailag védett főkönyvként működik, amely hitelesíti és rögzíti az IoT eszközök közötti kommunikációt, biztosítva az adatok integritását és visszakereshetőségét.",
      "A blockchain egy központosított adatkezelési rendszerként működik, amely az IoT eszközök közötti kommunikációt titkosítja és naplózza, miközben a hitelesítést és az adattárolást dedikált szervereken végzi.",
      "A blockchain egy elosztott hálózati protokollként funkcionál az IoT rendszerekben, amely kizárólag az eszközök azonosítását és hitelesítését végzi, de az adatok tárolását külső adatbázisokra bízza."
    ],
    "helyes": "A blockchain decentralizált, kriptográfiailag védett főkönyvként működik, amely hitelesíti és rögzíti az IoT eszközök közötti kommunikációt, biztosítva az adatok integritását és visszakereshetőségét."
  },
  {
    "szoveg": "Milyen következményekkel járhat a blockchain-IoT integráció széles körű elterjedése az ipari automatizálásban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az automatizált gyártási folyamatok megbízhatóbbá és átláthatóbbá válnak, mivel minden művelet és minőség-ellenőrzési lépés visszakövethető és manipulációbiztos módon kerül rögzítésre.",
      "A gyártási folyamatok hatékonysága átmenetileg csökkenhet, mivel a blockchain tranzakciók validálása és az IoT szenzorok adatainak feldolgozása jelentős számítási kapacitást és hálózati erőforrásokat igényel.",
      "Az ipari termelés biztonsági kockázatai növekedhetnek, mivel a decentralizált rendszerek és IoT eszközök összekapcsolása új támadási felületeket nyit meg, miközben a hagyományos védelmi mechanizmusok hatékonysága csökken."
    ],
    "helyes": "Az automatizált gyártási folyamatok megbízhatóbbá és átláthatóbbá válnak, mivel minden művelet és minőség-ellenőrzési lépés visszakövethető és manipulációbiztos módon kerül rögzítésre."
  },
  {
    "szoveg": "Egy okosváros közlekedési rendszerében hogyan modellezhető a blockchain-IoT integráció működése?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az IoT szenzorok valós idejű forgalmi adatokat küldenek, amelyeket a blockchain hitelesít és tárol, majd okos szerződések automatikusan optimalizálják a jelzőlámpák működését és a forgalomirányítást.",
      "A blockchain rendszer folyamatosan feldolgozza a szenzorok által gyűjtött forgalmi adatokat, majd statisztikai elemzések alapján hosszú távú stratégiai javaslatokat készít a városi infrastruktúra fejlesztéséhez.",
      "Az IoT szenzorhálózat és a blockchain technológia együttesen biztosítja a forgalmi adatok titkosított tárolását, miközben a decentralizált hálózat optimalizálja a városi közlekedés irányítását."
    ],
    "helyes": "Az IoT szenzorok valós idejű forgalmi adatokat küldenek, amelyeket a blockchain hitelesít és tárol, majd okos szerződések automatikusan optimalizálják a jelzőlámpák működését és a forgalomirányítást."
  },
  {
    "szoveg": "Hogyan értékelhető a blockchain-IoT integráció alkalmassága egy kritikus egészségügyi monitoring rendszerben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az integráció megfelelő lehet, ha a rendszer képes kezelni a valós idejű adatok azonnali feldolgozását, és a blockchain implementáció figyelembe veszi az egészségügyi adatok különleges védelmének követelményeit.",
      "Az integráció akkor lehet optimális megoldás, ha a blockchain technológia biztonsági protokolljai megfelelően konfiguráltak, és a rendszer teljesítménye lehetővé teszi a valós idejű adatfeldolgozást a kritikus egészségügyi környezetben.",
      "Az integráció alkalmazhatósága függ a rendszer válaszidejétől, az adatvédelmi szabályozások teljesítésétől, valamint a blockchain infrastruktúra skálázhatóságától és megbízhatóságától a klinikai környezetben."
    ],
    "helyes": "Az integráció megfelelő lehet, ha a rendszer képes kezelni a valós idejű adatok azonnali feldolgozását, és a blockchain implementáció figyelembe veszi az egészségügyi adatok különleges védelmének követelményeit."
  },
  {
    "szoveg": "Egy blockchain hálózatban a tranzakciók feldolgozási sebessége jelentősen lelassult. Melyik értelmezés magyarázza legpontosabban a skálázhatósági problémát?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A blokklánc alapvető architektúrája miatt a konszenzus mechanizmus és a blokk validáció folyamata természetes szűk keresztmetszetet jelent, ami korlátozza a másodpercenkénti tranzakciók számát.",
      "A decentralizált hálózati struktúra és a konszenzus protokoll komplex validációs követelményei jelentős erőforrásigényt támasztanak, ami természetes módon korlátozza a feldolgozási kapacitást a teljes rendszerben.",
      "A blockchain rendszer elosztott természete és a kriptográfiai műveletek összetett végrehajtási folyamata olyan alapvető teljesítménykorlátot eredményez, ami befolyásolja a tranzakciók feldolgozási sebességét."
    ],
    "helyes": "A blokklánc alapvető architektúrája miatt a konszenzus mechanizmus és a blokk validáció folyamata természetes szűk keresztmetszetet jelent, ami korlátozza a másodpercenkénti tranzakciók számát."
  },
  {
    "szoveg": "Egy nagy forgalmú blockchain alkalmazás tervezésekor milyen architektúrális modellt javasolna a skálázhatóság biztosítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Többrétegű architektúra Layer-2 megoldással, ahol a fő blokkláncon csak a végső elszámolások történnek, míg a gyakori tranzakciók off-chain zajlanak state channeleken keresztül.",
      "Elosztott többszintű architektúra magas rendelkezésre állással, ahol a tranzakciók feldolgozása párhuzamosan történik, és a konszenzus mechanizmus optimalizált a nagy forgalom kezelésére.",
      "Hibrid architektúrális megoldás, amely ötvözi a blokklánc biztonságát és a hagyományos elosztott rendszerek teljesítményét validátorok és szinkronizációs protokollok segítségével."
    ],
    "helyes": "Többrétegű architektúra Layer-2 megoldással, ahol a fő blokkláncon csak a végső elszámolások történnek, míg a gyakori tranzakciók off-chain zajlanak state channeleken keresztül."
  },
  {
    "szoveg": "Egy vállalati blockchain rendszer implementálásánál hogyan alkalmazná a sharding technológiát a skálázhatóság növelésére?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A tranzakciókat és az adatokat földrajzi vagy üzleti logika alapján különböző shardokra osztanám, ahol minden shard csak a saját adatait validálja, de kereszt-shard kommunikáció is lehetséges.",
      "A blockchain adatbázist földrajzi régiók szerint osztanám fel, ahol minden régió saját validációs protokollokat futtat, miközben szinkronizált replikációt biztosít a teljes hálózaton keresztül.",
      "Az adatbázist üzleti funkciók mentén szegmentálnám, ahol minden shard specializált validációs mechanizmusokat alkalmaz, fenntartva a konzisztenciát a teljes rendszerben."
    ],
    "helyes": "A tranzakciókat és az adatokat földrajzi vagy üzleti logika alapján különböző shardokra osztanám, ahol minden shard csak a saját adatait validálja, de kereszt-shard kommunikáció is lehetséges."
  },
  {
    "szoveg": "Hogyan értékelné egy blockchain hálózat skálázhatósági megoldásának megfelelőségét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A tranzakciós sebesség, a decentralizáció mértéke és a biztonsági garanciák közötti egyensúly alapján, figyelembe véve az alkalmazási terület specifikus követelményeit.",
      "A rendszer teljesítményének és skálázhatóságának elemzése a tranzakciós sebesség és hálózati áteresztőképesség alapján, figyelembe véve a csomópontok közötti kommunikációs protokollok hatékonyságát.",
      "A blokklánc infrastruktúra erőforrásigényének és technikai paramétereinek vizsgálata alapján, különös tekintettel a tárolási követelményekre és a hálózati kommunikáció optimalizálására."
    ],
    "helyes": "A tranzakciós sebesség, a decentralizáció mértéke és a biztonsági garanciák közötti egyensúly alapján, figyelembe véve az alkalmazási terület specifikus követelményeit."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a mesterséges intelligencia szerepét a modern hálózatok forgalomkezelésében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az MI valós időben elemzi a forgalmi mintákat, előrejelzi a terhelést, és dinamikusan optimalizálja az erőforrások elosztását a hálózati teljesítmény maximalizálása érdekében.",
      "Az MI folyamatosan figyeli a hálózati statisztikákat és havi jelentéseket készít, de csak passzív megfigyelőként működik, beavatkozási képesség nélkül a hálózati erőforrások dinamikus kezelésében.",
      "Az MI azonosítja az eszközöket és forgalmi típusokat, majd előre meghatározott szabályok alapján osztályozza őket, de nem képes valós idejű döntések meghozatalára vagy adaptív optimalizációra."
    ],
    "helyes": "Az MI valós időben elemzi a forgalmi mintákat, előrejelzi a terhelést, és dinamikusan optimalizálja az erőforrások elosztását a hálózati teljesítmény maximalizálása érdekében."
  },
  {
    "szoveg": "Egy nagyvállalati hálózatban hogyan alkalmazná az MI-t a hálózatbiztonság javítására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Gépi tanulási modelleket implementálnék a normál forgalmi minták megtanulására, majd valós időben detektálnám és blokkolnám az anomáliákat, automatizált válaszlépésekkel kiegészítve.",
      "Fejlett biztonsági algoritmusokat alkalmaznék a hálózati forgalom elemzésére, és előre meghatározott szabályok alapján szűrném a potenciális fenyegetéseket, rendszeres manuális felülvizsgálattal kombinálva.",
      "Intelligens mintafelismerő rendszereket telepítenék a ismert támadási vektorok azonosítására, és automatizált védelmi mechanizmusokat állítanék be a valós idejű monitorozás mellett."
    ],
    "helyes": "Gépi tanulási modelleket implementálnék a normál forgalmi minták megtanulására, majd valós időben detektálnám és blokkolnám az anomáliákat, automatizált válaszlépésekkel kiegészítve."
  },
  {
    "szoveg": "Hogyan konstruálná meg egy öngyógyító hálózat MI-alapú modelljét?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Létrehoznék egy többrétegű rendszert, amely monitoring, diagnosztika és automatikus hibajavítás komponensekből áll, gépi tanulási modellekkel a hibák előrejelzésére és automatikus korrekciós lépések végrehajtására.",
      "Implementálnék egy reaktív monitorozó rendszert, amely alapszintű hibadetektálást végez és értesítéseket küld, de nem tartalmaz fejlett prediktív analitikát vagy automatizált javítási mechanizmusokat a hálózati problémák kezelésére.",
      "Kifejlesztenék egy statikus szabályalapú rendszert előre definiált hibajavító protokollokkal, amely nem használ adaptív tanulási mechanizmusokat vagy prediktív elemzéseket a hálózati problémák megelőzésére."
    ],
    "helyes": "Létrehoznék egy többrétegű rendszert, amely monitoring, diagnosztika és automatikus hibajavítás komponensekből áll, gépi tanulási modellekkel a hibák előrejelzésére és automatikus korrekciós lépések végrehajtására."
  },
  {
    "szoveg": "Milyen kritériumok alapján ítélhető meg egy MI-alapú hálózatmenedzsment rendszer hatékonysága?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer teljesítményét a problémák megelőzési aránya, a valós idejű reagálási képesség, az automatizálási szint és a téves riasztások minimalizálása alapján kell értékelni, figyelembe véve az erőforráshatékonyságot is.",
      "A rendszer hatékonyságát a hálózati eszközök menedzselésének komplexitása, az automatikus konfigurációs változtatások pontossága, valamint a rendszerterhelés és erőforrásfelhasználás optimalizálásának mértéke alapján értékeljük.",
      "Az értékelés során figyelembe kell venni a hálózati incidensek detektálási sebességét, a proaktív problémakezelés hatékonyságát, valamint a rendszer skálázhatóságát és az üzemeltetési költségek optimalizálását."
    ],
    "helyes": "A rendszer teljesítményét a problémák megelőzési aránya, a valós idejű reagálási képesség, az automatizálási szint és a téves riasztások minimalizálása alapján kell értékelni, figyelembe véve az erőforráshatékonyságot is."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a kognitív hálózatok adaptív intelligenciájának szerepét a modern hálózati architektúrában?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Az adaptív intelligencia lehetővé teszi a hálózat számára, hogy valós időben érzékelje a környezeti változásokat, önállóan tanuljon és optimalizálja működését a tapasztalatok alapján.",
      "Az adaptív intelligencia folyamatosan monitorozza és elemzi a hálózati forgalmat, de kizárólag előre meghatározott paraméterek alapján képes reagálni, és nem rendelkezik valódi tanulási képességgel a környezeti változások kezelésére.",
      "Az adaptív intelligencia egy összetett megfigyelő rendszer, amely rögzíti a hálózati eseményeket és statisztikákat készít, de nem képes önálló döntéshozatalra vagy a működés dinamikus optimalizálására."
    ],
    "helyes": "Az adaptív intelligencia lehetővé teszi a hálózat számára, hogy valós időben érzékelje a környezeti változásokat, önállóan tanuljon és optimalizálja működését a tapasztalatok alapján."
  },
  {
    "szoveg": "Egy nagyvállalat új kognitív hálózati architektúrát tervez. Hogyan modelleznéd a rendszer működési ciklusát a maximális hatékonyság érdekében?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Megfigyelés → Elemzés → Döntés → Végrehajtás → Tanulás → Visszacsatolás a megfigyeléshez, ahol minden fázis eredménye befolyásolja a következőt és optimalizálja a rendszer működését.",
      "Megfigyelés → Elemzés → Végrehajtás → Tanulás → Visszacsatolás, ahol az automatizált folyamatok gyors adaptációja és a rendszerszintű optimalizáció biztosítja a hatékony működést.",
      "Elemzés → Döntés → Végrehajtás → Megfigyelés → Tanulás → Rendszerszintű visszacsatolás, ahol az intelligens algoritmusok folyamatosan finomítják a működési paramétereket."
    ],
    "helyes": "Megfigyelés → Elemzés → Döntés → Végrehajtás → Tanulás → Visszacsatolás a megfigyeléshez, ahol minden fázis eredménye befolyásolja a következőt és optimalizálja a rendszer működését."
  },
  {
    "szoveg": "Egy IoT-alapú okosváros projektben hogyan használná fel a kognitív hálózati architektúra elemeit a forgalomirányítás optimalizálására?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A kognitív motor valós idejű adatokat gyűjt a forgalmi szenzorokból, elemzi a mintázatokat, és dinamikusan módosítja a jelzőlámpák időzítését, miközben folyamatosan tanulja a forgalmi trendeket.",
      "A rendszer intelligens szenzorhálózatot használ a forgalom monitorozására, de csak előre definiált szabályok alapján módosítja a jelzőlámpák működését, mellőzve az adaptív tanulási mechanizmusokat és valós idejű optimalizációt.",
      "A forgalomirányítási rendszer komplex adatgyűjtést végez és tárolja az információkat, de a jelzőlámpák vezérlése kizárólag statisztikai elemzéseken alapul, figyelmen kívül hagyva a pillanatnyi forgalmi szituációkat."
    ],
    "helyes": "A kognitív motor valós idejű adatokat gyűjt a forgalmi szenzorokból, elemzi a mintázatokat, és dinamikusan módosítja a jelzőlámpák időzítését, miközben folyamatosan tanulja a forgalmi trendeket."
  },
  {
    "szoveg": "Milyen szempontok alapján ítélhető meg egy kognitív hálózati architektúra hatékonysága a gyakorlatban?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A rendszer adaptációs képessége, válaszideje, erőforrás-hatékonysága és a szolgáltatásminőség (QoS) együttes értékelése alapján, figyelembe véve a felhasználói élményt is.",
      "A hálózat teljesítményének és skálázhatóságának komplex elemzése alapján, beleértve az adatátviteli sebességet és a terheléselosztást, de figyelmen kívül hagyva az adaptációs képességet.",
      "A rendszer technikai paramétereinek és infrastrukturális hatékonyságának mérése alapján, különös tekintettel az energiafogyasztásra és az erőforrások kihasználtságára, mellőzve a QoS szempontokat."
    ],
    "helyes": "A rendszer adaptációs képessége, válaszideje, erőforrás-hatékonysága és a szolgáltatásminőség (QoS) együttes értékelése alapján, figyelembe véve a felhasználói élményt is."
  },
  {
    "szoveg": "Hogyan értelmezhetjük a 6G hálózatok háromdimenziós architektúráját a kommunikációs lefedettség szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A földi, légi és űrbeli kommunikációs rétegek integrált rendszert alkotnak, ahol minden réteg specifikus kommunikációs feladatokat lát el, és együttesen biztosítják a teljes lefedettséget.",
      "A kommunikációs rétegek önálló működési protokollokkal rendelkeznek, amelyek között nincs közvetlen integráció, így minden réteg független infrastruktúrát és szolgáltatási mechanizmust igényel.",
      "A háromdimenziós hálózati struktúra kizárólag a földfelszíni kommunikációs pontok térbeli elhelyezkedését koordinálja, figyelembe véve a magassági, szélességi és hosszúsági paramétereket."
    ],
    "helyes": "A földi, légi és űrbeli kommunikációs rétegek integrált rendszert alkotnak, ahol minden réteg specifikus kommunikációs feladatokat lát el, és együttesen biztosítják a teljes lefedettséget."
  },
  {
    "szoveg": "Milyen következményekkel járhat a terahertzes kommunikáció bevezetése a jövőbeli alkalmazások fejlesztésére nézve?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Lehetővé válik a valós idejű holografikus kommunikáció és a közvetlen agyi interfészek használata, ami forradalmasítja a távjelenlét és ember-gép interakció területét.",
      "A technológia elsősorban a meglévő alkalmazások teljesítményét optimalizálja és új kommunikációs protokollokat vezet be, de forradalmi változásokat nem eredményez az interakciós módszerekben.",
      "Az alkalmazásfejlesztés komplexitása jelentősen megnő, és a fejlesztőknek át kell értékelniük a jelenlegi kommunikációs paradigmákat, ami lelassítja az innovációt ezen a területen."
    ],
    "helyes": "Lehetővé válik a valós idejű holografikus kommunikáció és a közvetlen agyi interfészek használata, ami forradalmasítja a távjelenlét és ember-gép interakció területét."
  },
  {
    "szoveg": "Hogyan modellezhető a 6G hálózatok önszervező és öngyógyító képessége egy városi környezetben?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "A hálózat mesterséges intelligencia alapú algoritmusokkal folyamatosan monitorozza a forgalmat és a hálózati állapotot, automatikusan újrakonfigurálja az erőforrásokat és kerülő útvonalakat alakít ki meghibásodás esetén.",
      "A hálózat fejlett algoritmusokkal és prediktív analitikával elemzi a forgalmi mintákat, de csak előre meghatározott protokollok szerint képes reagálni, és komplex problémák esetén továbbra is szükséges a szakértői beavatkozás a helyreállításhoz.",
      "A rendszer valós idejű monitorozást végez és automatikusan optimalizálja a hálózati erőforrásokat, de az öngyógyító képessége csak az alapvető infrastruktúra elemekre terjed ki, a komplex hálózati topológia módosítása továbbra is manuális felügyeletet igényel."
    ],
    "helyes": "A hálózat mesterséges intelligencia alapú algoritmusokkal folyamatosan monitorozza a forgalmat és a hálózati állapotot, automatikusan újrakonfigurálja az erőforrásokat és kerülő útvonalakat alakít ki meghibásodás esetén."
  },
  {
    "szoveg": "Hogyan ítélhető meg a 6G technológia környezeti fenntarthatósága az energiafogyasztás és környezeti hatások szempontjából?",
    "tipus": "radio",
    "kep": null,
    "valaszok": [
      "Bár a technológia nagyobb energiaigényű, az intelligens energiagazdálkodás és a megújuló energiaforrások integrációja, valamint a hatékonyabb erőforrás-kihasználás összességében pozitív környezeti mérleget eredményezhet.",
      "A technológia jelentős energiafogyasztása ellenére a fejlett hálózati optimalizálás és az intelligens erőforrás-menedzsment rendszerek alkalmazása, valamint a zöld infrastruktúra fejlesztése hosszú távon kompenzálhatja a környezeti terhelést.",
      "Az új generációs hálózati architektúra magasabb energiaigénye mellett a smart grid technológiák implementációja és a megújuló energiaforrások széles körű integrációja biztosíthatja a fenntartható működést."
    ],
    "helyes": "Bár a technológia nagyobb energiaigényű, az intelligens energiagazdálkodás és a megújuló energiaforrások integrációja, valamint a hatékonyabb erőforrás-kihasználás összességében pozitív környezeti mérleget eredményezhet."
  }
]

];

