---
layout: post
title: A termosztátprogramozásról
cover: thermostat
tags: [szösszenet]
date: 2022-12-24 00:01
excerpt: >
    ...avagy hogyan tesztelte az élet, hogy a Dweck-féle növekedési szemléletmód leckét szó szerint "álmomból felkeltve" is tudom-e.
---

Némi kontextusként kezdjük talán ott, hogy festés miatt ideiglenesen száműzetésbe kerültünk szerény hajlékunkból.
Akinek van egy csöpp esze (és mondjuk a felújítás költségei nem darálták be teljesen a tartalékait), az ilyenkor biztos wellness-ezni megy, de nekünk maradt a szülők és barátok kanapéján "szörfölés".
Persze sehol nem szerettük volna túlzottan kiverni a vendéglátási biztosítékot, így a folyamat vége felé csak akadt egy pár napos szakasz, amire apartmant béreltünk.

Kiváló egy ilyen kiruccanás arra, hogy az ember újraértékelje, mije is van otthon.
Amit eddig természetesnek vett, az hirtelen nem (vagy nem *úgy*) áll rendelkezésre, ami mindjárt más megvilágításba helyezi a hétköznapokat.
Az ilyen *kultúrsokkok* személyiségformáló hatásáról általánosságban is regényt lehetne írni, de most szorítkozzunk csak a fűtésre.

Panellakók (avagy, a gyakori közmegítélés alapján, "panelpatkányok") vagyunk.
Ez nyilván jár némi zaj- és szagbázisú kellemetlenségekkel, de amivel soha nincs gond, az a meleg.
A távfűtés ár-érték arányának elemezgetését meghagyom a [Kiszámolónak](https://kiszamolo.hu/){:target="_blank"} -- lényeg, hogy fázni itt kb. soha nem fázunk.
Ezután már a falusi szülőknél konvektorozás is nagy szakadék volt, de az apartmanban szándékosan lekorlátozott padlófűtés még inkább.

A gondnok szerint "soha nem szokott baj lenni", a padlófűtés rendszerint minden vendégnek elég, de van még pluszban fűtős klíma is, ha esetleg, netalántán mégsem.
Na hát ez nekünk úgy nyilvánult meg, hogy a termosztátot legfeljebb 22 fokig lehetett feltekerni, ami valahogy még mindig zokniban-is-jéghideg járólapokat eredményezett.
Emellett meg köhöghetett szerencsétlen klíma akár névlegesen 32 fokon is -- kb. annyit ért, mintha belehelni próbáltam volna a szobát.

Semmi gáz, úgyis csak aludni vagyunk ott, napközben lehet menni kirándulni.
Éjszakára meg jéger, zokni, pulcsi, paplan, és csak nem fagyunk oda.
Gondoltam én.
Kicsiny feleségem hajnali 2-kor kelt, hogy hát ő nagyon fázik, és biztos nem lehet még állítani azon a termosztáton?

Na itt kezdődik a [Dweck]({% post_url 2021-01-16-carol-s-dweck-szemleletvaltas %})-elés, mert habár az első reakcióm az lett volna, hogy szart se értek én a termosztátokhoz, mégsem ragadtam meg ezen a ponton.
Indulhat egy [távirányítójavításhoz]({% post_url 2021-10-02-a-taviranyitojavitasrol %}) hasonlatos kaland, csak most csipás szemmel, félálomban!

Első lépés, hogy mik ezek az ikonok?
Napocska, holdacska, külön időszakok tervezése...
Jaaa, és ez a bacon szalonna logó lesz biztos az, hogy épp fűt-e.
Jó, de ez abban még mindig nem segít, hogy egyik módban sem megy feljebb a mutató, mint 22°C.

Akkor mondjuk nézzük, mi van ráírva a dobozra.
"BVF Heating Solutions" 601-es modell.
Csodás; telefonon guglit elő, `bvf 601`, enter.
**Első** találat egy magyar nyelvű, szájbarágós, modell-specifikus [kézikönyv](https://www.bvfheating.hu/files/termosztatok/bvf_601_hasznalati_utmutato.pdf){:target="_blank"}.
Műszaki adatok, ikonmagyarázatok, és **ÁHÁ!**, a végén egy gyanúsan hasznos "Gyári értékek és szenzor üzemmód módosítása" szekció, azon belül is a "Komfort üzemmód limit" változó.

Ez gyárilag 29°C kéne, hogy legyen, csak hát költséghatékony főbérlőink ezt 22°C-re mérsékelték.
Nincs viszont semmi fizikai akadálya, hogy én ezen döntésüket önkényesen felülbíráljam.
A kézikönyv ugyanis szépen leírja, hogy ebbe a speciális menübe a fogaskerék és a felnyilacska gomb együttes, 10 másodperc hosszú megnyomásával lehet bejutni (hogy a laikus parasztnak véletlenül biztos ne sikerüljön).
Ott aztán már gyerekjáték átpötyögni a limitet 29 fokig, és mehet is a "komfortosabb" fűtés.
Ilyen jót még nem aludtunk...

És hogy mi ebből a bugyuta kis sztoriból a tanulság?
Mert hát nincs most épp kéznél aktuális analfabetizmus statisztikám, de feltételezem, hogy a lakosság túlnyomó többsége tud írni és olvasni.
A szövegértés már egy fokkal nagyobb elvárás (mint ahogy azt az iskolai kompetenciamérések átlaga mutatni szokta), de azért nem is Shakespeare-t kellett elemezni.
Én pedig objektív szempontból nem csináltam mást, mint elolvastam a termék nevét, beírtam egy keresőbe, értelmeztem a kézikönyvét, és átállítottam, amit akartam.
Ennyi.

Szerintem erre a teljesítményre már egy felső tagozatos diáknak se kéne büszkének lennie -- én se azért írok róla, hogy magam fényezzem, mert nincs is mire.
A mondanivaló szerintem ott bújik meg, hogy ezek a nagyon alap, egyszerű elvárások ellenére is mennyire sokan leakadnának az "Á, nem értek én ehhez" lépcsőfoknál.
Esélyt se adnának a megoldásnak, mert a kudarctól való félelem egész életükben arra nevelte őket, hogy ami nem biztos győzelem, abba inkább ne menjenek bele -- mert hát csak úgy garantálható, hogy nem sülnek fel.

Régebben én is leakadtam ezen a szinten.
Sőt, azóta is az az első reakcióm.
De aztán tovább imbolygok, és gyakran lesz is belőle valami...