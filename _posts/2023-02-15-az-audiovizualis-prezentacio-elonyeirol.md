---
layout: post
title: Az audiovizuális prezentáció előnyeiről
cover: audiovisual
tags: [szösszenet]
date: 2023-02-15 00:01
excerpt: >
    ...avagy vééégre itt a Preprocessor YouTube csatorna!
---

TL;DR: https://youtube.com/@preprocessor

Kicsit hosszabban:

- Isti játszóteres beszélgetés 3 éve
    - ha már főként azoknak szánom a blogot, akik nem tudnak eleget olvasni (de amúgy szeretnének), akkor talán nem ártana nem **csak** írásos formában gyártani a tartalmat, nem?
    - másrészt a YouTube-ba valamilyen szinten alapból bele van építve a felfedezhetőség és a közönség bővítés, amibe eddig lássuk be, nem fektettem túl sok energiát

- szembeszél
    - nem szeretem a saját hangom
    - azóta sincs rendes mikrofonom
    - mi legyen a videó rész
        - ha én látszok, akkor meg kell tanulni kívülről a szövegeket (ami dealbreaker, mert hát baszki, mennyit írtam már, ez tanulja meg fejből, akinek Béla az anyja)
        - vagy képesnek kéne lennem egy egyszerű vázlat alapján, menet közben annyira folyékonyan generálnom a rizsát, mint mondjuk Ali Abdaal-nak (és az a szint azért még nem most lesz)
    - marad az alámondás, de akkor meg mi a vizualizáció?
        - pláne, hogy nulla kreativitásom
        - persze a nulláról is lehetne fejlődni, de az meg a tartalom elől venné el a hangsúlyt, amit megint csak nem szeretnék

- szerencsére programozó vagyok, és amúgy meg csak az a csoda, hogy az automatizációra való (túlzott) hajlamomat még nem automatizáltam valahogy
    - szóval úgy voltam vele, hogy akkor kockuljunk rá erre a területre is
    - az elmúlt 1-2 hónap során tehát...
    
    
    
    I wrote a custom chrome extension / server / puppeteer crawler trio to help me select icons from flaticon as smoothly as possible (so I can read the post and select the visualizations quickly, and have them downloaded in order, in the background), then I wrote a script that vectorizes the icons and dumps them into inkscape format, then I rewrote a custom inkscape extension to reorder individual paths in roughly topological order (so the drawing effect is not as disjointed) and distribute them automatically along a grid, and finally an aftereffects scipt (which I'm polishing right now) to A) automatically sequence individual icon animations with gaps and viewport scrolling in a sub-composition, and B) place time remap markers at each gap in the main compisition so I can expend the least amount of manual effort possible when retiming the drawings to the voiceover. 
    oh, I also have a custom template and effect chain in Ableton for the voiceover recording... and a photoshop template for the thumbnails

    - hát igen...

- az eremény valami ilyesmi: intro video
- a csatorna pedig (stílusosan) @preprocessor

- a belátható jövőben tehát az a cél, hogy a relatíve laza, tartható új tartalom generálási ütem mellett igyekszem majd a már létező okosságaimat audiovizuális formába is átkonvertálni
    - illetve a forrás posztjaiknál a blogba is beágyazni őket (mint fentebb az intro videómat)

- mindez remélhetőleg egy egyre szélesebb közönségnek tálalja majd a Preprocessor tanulságait
    - és ebben természetesen a már létező kedves olvasóimtól is szívesen veszek bárminemű támogatást!
    - nézzétek a csatornámat ismétlésen; hallgassátok munkába menet a kocsiban; osszátok meg a volt gimis osztálytársaitok facebook csoportjában.
    - a lényeg, hogy légyszi segítsetek a lelkemben tátongó, validációra éhező űrt lájkokkal és bekövetésekkel kitölteni.
    - öö... ezt az utolsó részt hangosan is kimondtam?!