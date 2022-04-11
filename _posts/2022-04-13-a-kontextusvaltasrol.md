---
layout: post
title: A kontextusváltásról
cover: contextswitch
tags: [szösszenet]
date: 2022-04-13 00:01
excerpt: >
    
---

Az emberi agy is pont úgy képes a párhuzamosságra, mint a számítógépek -- sehogy.
Jó, igen, manapság már közhely az olyan processzor, ami valóban több magos, de az igazából több, szorosan együttműködő számítógép egyben.
Egy gép csak egy dolgot csinál.
És különben is, eddig sem a magok száma határozta meg, hogy hány dolog futhat egyszerre.

És hogy akkor hogyan lehet egy időben zenét hallgatni és reddit-et böngészni, miközben a háttérben még valami letöltés is megy?
Erre valók az időosztásos rendszerek.
Ígérem, megpróbálok nem túl kockául fogalmazni.

Az időosztásos rendszer tulajdonképpen nem más, mint gyorsan váltogatni különböző programok (akár különböző felhasználók programjai) között.
A gép csinálgatja azt a pontosan egy dolgot, amit csinál, amíg az ún. ütemező valamilyen bölcs és igazságos stratégia alapján ki nem kiáltja, hogy ki a következő.
Ekkor az operációs rendszer elmenti, hogy hol tartott az eddigiekkel, milyen részeredményeket számolt ki, hol érheti el őket a memóriában -- kb. tesz egy könyvjelzőt, és tiszta lapot nyit az új feladatnak.
Persze ha az "új" feladat is fut már egy ideje, akkor az ő részeredményeit meg be kell tölteni, a memóriáját helyreállítani, visszakeresni a pontot, ahonnan folytatni kéne, stb.

Ezt a bizonyos adminisztratív nagytakarítást nevezzük "kontextusváltásnak", ami láthatóan erőforrás igényes.
És ne feledjük, hogy ez a sok rendezkedés önmagában tekintve teljesen haszontalan -- mindez ugye csak azért kell, hogy látszólag több program is futhasson egyszerre, és *megjátszhassuk* a párhuzamosságot.
Nagyon nem mindegy tehát, hogy milyen gyakran váltunk kontextust.


Kontextus váltás, laikus magyarázat, mint Edinek a parkban, és hogy a váltás nehézségétől és gyakoriságától függően nagyon már lesz a hasznos és a haszontalan pörgés aránya

ron swanson whole ass one thing - egyszerű megoldás lenne, de mi van, ha több dolog is érdekli az embert MIKÖZBEN marha lassú a kontextus váltása




Nem azt mondom, hogy nem történik semmi; viszont ami történik, az marhára nem hatékonyan történik.


Ez nyilván egy egyszerűsítés, hiszen mellette ott van a munka, a lakás, a párkapcsolat, a szociális vonatkozások, és az a pár mókás bónusz, amit az élet csak úgy dob a háttérben.
Hopp, anyunak elromlott a telefonja; hopp, a biciklinek kilyukadt a kereke; hopp, a kései stádiumú kapitalizmus materialista önimádatában eléggé árral szemben kell úszni ahhoz, hogy az ember képes legyen jelentőségteljesnek megélni a nyomorult kis hétköznapjait.
Khmm...
Szóval semmiképp nem árt, ha a fontos dolgok listáját relatíve rövidre szabjuk (lásd Esszencializmus).

De mi van, ha nem adatik meg az a luxus, hogy a végeredmény csak egyetlen terület, amibe onnantól teljes gőzzel belevethetjük magunkat.
Ehhez jöhet kapóra a kontextusváltás ötlete.
A következőkben tehát azon leszek, hogy ha már kellenek a váltások, akkor legalább okosítsak egy kicsit az ütemező algoritmusomon.



és ennek már csak hab a tetejére, amikor a több terület még választási paralízissel is jár - vagyis nem pusztán lassan állok át egyikről a másikra, de pluszban arra is időt pazarlok, hogy most melyiket is kéne csinálnom. Ennek örömére egyiket sem csinálom, amitől ugyanúgy sikerül mentálisan lefáradnom, de így még csalódhatok is magamban.

blog tempó visszaesés is ezek miatt van - a sok sok ideig elfojtott billentyűzetesdit régész módra előásva bejött a kontext switch és a paralízis

megoldásom persze (még?) nincs - csak gondoltam már önmagában az is segítség, ha szavakba öntjük, és konkretizáljuk a problémát.

paralízis = egyértelmű hierarchia, legyen meg ki a fontosabb
kontext switch = nagyobb tömbösítés
elég hosszú távban gondolkozva az is "párhuzamosra" jön ki, ha pár évig csak az egyiket csinálom, aztán pár évig a másikat, nem?


