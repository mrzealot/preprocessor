---
layout: post
title: A kontextusváltásról
cover: contextswitch
tags: [szösszenet]
date: 2022-04-13 00:01
excerpt: >
    Az emberi agy is pont úgy képes a párhuzamosságra, mint a számítógépek -- sehogy.
    Az időosztásos rendszerek tulajdonképpen annyit tesznek, hogy gyorsan váltogatnak különböző programok között, ezzel keltve azt a látszatot, hogy minden szál párhuzamosan halad.
    Ez a váltogatás viszont nem olcsó, ami a gépekhez hasonlóan az emberi produktivitásra is nagyban kihat...
---

Az emberi agy is pont úgy képes a párhuzamosságra, mint a számítógépek -- sehogy.
Jó, igen, manapság már közhely az olyan processzor, ami valóban több magos, de az igazából nem más, mint több, szorosan együttműködő számítógép egybe csomagolva.
Egy gép csak egy dolgot csinál.
És különben is, eddig sem a magok száma határozta meg, hogy hány dolog futhat egyszerre.

És hogy akkor hogyan lehet egy időben zenét hallgatni és reddit-et böngészni, miközben a háttérben még valami letöltés is megy?
Erre valók az időosztásos rendszerek.
Ígérem, megpróbálok nem túl kockául fogalmazni.

Az időosztásos rendszerek tulajdonképpen annyit tesznek, hogy gyorsan váltogatnak különböző programok (akár különböző felhasználók programjai) között, ezzel keltve azt a látszatot, hogy minden szál párhuzamosan halad.
Ennek keretében a gép csinálgatja szépen azt a pontosan egy dolgot, amit csinál, amíg az ún. *ütemező* valamilyen bölcs és igazságos stratégia alapján ki nem kiáltja, hogy melyik tennivaló legyen a következő.
Ekkor az operációs rendszer elmenti, hogy hol tartott az eddigiekkel, milyen részeredményeket számolt ki, hol érheti el őket a memóriában -- kb. tesz egy könyvjelzőt, és tiszta lapot nyit az új feladatnak.
Persze ha az "új" feladat is fut már egy ideje, akkor az ő részeredményeit meg be kell tölteni, a memóriáját helyreállítani, visszakeresni a pontot, ahonnan folytatni kéne a végrehajtást, stb.

Ezt a bizonyos adminisztratív nagytakarítást nevezzük "kontextusváltásnak", ami láthatóan erőforrás igényes.
És ne feledjük, hogy ez a sok rendezkedés önmagában tekintve semmivel nem juttat előrébb -- az egész csak azért kell ugyebár, hogy látszólag több program is futhasson egyszerre, és *megjátszhassuk* a párhuzamosságot.
Nagyon nem mindegy tehát, hogy hogyan állunk a kontextusváltáshoz, mert a váltás nehézségétől és gyakoriságától függően drasztikusan más lesz a hasznos és a haszontalan pörgés aránya.

<br>

Szemléltetésként hadd hozzam a saját példámat.
Borzasztóan nehezen tudok átzökkenni egyik dologból a másikba.
A blog addig dübörgött megállíthatatlannak tűnő lendülettel, amíg gyakorlatilag csak az volt a radaromon.
Minden más alárendelt szerepbe került, és emiatt minden más épphogy csak csordogált, ha nem konkrétan egy helyben toporgott -- de a blog legalább ment.
Ezt borította meg, amikor nem régiben (a kiégés jeleit észlelve) el nem kezdtem tudatosan korlátozni a blogos energiakvótámat, és behozni mellé a másik mániámat, a billentyűzeteket.

Ilyenkor azt várná az ember, hogy habár a blog lassul, cserébe a billentyűzetes haladás viszont meglódul egy kicsit.
Ehelyett meg...
Ööö, nem azt mondom, hogy nem történik semmi; viszont ami történik, az marhára nem hatékonyan történik.
A blog arányában sokkal többet lassult, mint amennyit bármi más gyorsult volna.
Több a holtidő, kevesebb az eredmény, viszont semmivel nem kevesebb a mentális lefáradás.
Jó adag önvizsgálat pedig azt mutatja, hogy ez (legalább részben) a kontextusváltások számlájára írható.

A tetejébe ez a blog kontra billentyűzet ellentét is nyilván csak egy egyszerűsítés, hiszen mellettük ott van még a munka, a lakás, a kocsi, a család, a barátok, és az a pár mókás bónusz energiacsapda, amit az élet rendszeresen és előszeretettel dobál a háttérben.
Hopp, anyunak elromlott a telefonja; hopp, a biciklimnek kilyukadt a kereke; hopp, a kései stádiumú kapitalizmus materialista önimádatában eléggé árral szemben kell úszni pusztán ahhoz, hogy az ember bármilyen szinten képes legyen jelentőségteljesnek megélni a nyomorult kis hétköznapjait.
Khmm...
Jól vagyok... Jól vagyok.

<br>

Szóval semmiképp nem árt, ha a "fontos" dolgok listáját eleve relatíve rövidre szabjuk (lásd [Esszencializmus]({% post_url 2021-11-06-greg-mckeown-esszencializmus %})).
Ennek egyik véglete a totál szakbarbárság.
Vagy ahogy Ron Swanson mondaná:

> Soha ne csinálj két dolgot fél seggel. Egy dolgot csinálj, de azt egész seggel.
> > Never half-ass two things. Whole-ass one thing.

Na igen ám, de mi van, ha nem adatik meg az a luxus, hogy a végeredmény csak egyetlen terület, amibe onnantól teljes gőzzel belevethetjük magunkat.
Itt jöhet kapóra a kontextusváltás ötlete.
A következőkben tehát azon leszek, hogy ha már kellenek a váltások, akkor legalább okosítsak egy kicsit az ütemező algoritmusomon.

- **Egyrészt**:
Szép és jó lenne, ha a napokat kezelhetném egységként, és minden egyes napba beleférne egy arányosan kis darabka az összes aktuális projektből és fenntartandó területből.
Végülis hosszú távon ezekből a pici időszeletkékből is ugyanaz a totál adódik össze, nem?

    Hát, nem.
    Mint látjuk, a kontextusváltásokra meglepően sok energia pazarolható feleslegesen.
    Ha pedig tudom, hogy nálam jó esetben is lassú az átbillenés, akkor igyekezzek már úgy intézni a napirendemet, hogy minél kevesebbre legyen szükség.

    Ezért törekedni fogok a nagyobb tömbösítésre -- hogy így arányában több befektetett munka kaphassa a "hasznos" cimkét.
    Elvégre az előbbi időszeletkék megközelítés ellentéte sem járhatatlan: elég hosszú távban gondolkozva az is "párhuzamosra" jön ki, ha pár évig csak az egyiket csinálom, aztán pár évig a másikat.
    Nyilván remélem azért, hogy a kettő között akad majd valami arany középút, de na.

- **Másrészt**:
Fontos lenne egy tiszta prioritási sor, ami alapján a mentális ütemezőm kezelni tudja az esetleges ütközéseket.
Mondhatnám, hogy az is a kontextusváltáshoz tartozó elpazarolt idő, amit azzal töltünk, hogy fontolgatjuk, mit is kéne csinálnunk.
Az önvizsgálat hangos hirdetőjeként azért ezt így természetesen nem mondom...
Mondom viszont, hogy az ilyen jellegű fontolgatásnak hónapról hónapra, vagy akár évről évre kéne csak előkerülnie, percről percre marhára nem.

    Ezért törekedni fogok, hogy a blogot (vagyis, az írást) részesítsem előnyben, és a többit akkor ütemezzem, amikor a blog kvóta már megvan.
    Ettől még beállhat bárhova a végső egyensúly -- akár oda is, hogy összességében a billentyűzetekkel foglalkozok többet.
    De a bloggal foglalkozok **előbb**, hogy bármiféle csúszás esetén az legyen, ami nem marad el.

- **Harmadrészt**:
Továbbra is elengedhetetlen a fókusz fejlesztése, ami ilyen szempontból kb. a kontextusváltás ellentéte.
Mert hát ha már egyszer megvan, hogy mit kéne csinálni, és van is rá egy relatíve nagyobb, egybefüggő blokkom, akkor az alatt nehogy már **ne** azt csináljam!
Sokszor kaptam például azon magam, hogy a blogolós olvasás/írás alatt a billentyűzeteken gondolkoztam, a billentyűzetes időben pedig azt sirattam, hogy most épp nem halad a blog.
Zseniális, mi?

    Ezért kell a [meditáció]({% post_url 2020-11-14-thich-nhat-hanh-a-tudatossag-csodaja %}), és ezért fogom újraolvasni a [szokásformálás]({% post_url 2021-01-09-james-clear-atomi-szokasok %}) "környezeti ingerek" részét is.

<br>

Hogy ennek lesz-e értelme?
Nem tudom; majd meglátjuk.
Aki kész válaszokért jött, azt sajnos ki kell ábrándítsam.

Nyújthatok viszont egy frankó mentális modellt, amivel talán sikerül már megvilágításba helyezni a problémát.
Én legalábbis nagy tantusz leesésnek éltem meg, amikor sikerült összekötnöm egy informatika alapképzésről megmaradt infómorzsát az aktuális produktivitási botladozásaimmal.
Remélem másnak is hasznos lehet...
