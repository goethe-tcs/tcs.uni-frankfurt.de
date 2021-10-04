---
title: "Algorithmen und Datenstrukturen 1"
shortname: "ALGO1"
semester: "SoSe-2021"
qis: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=313037&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
toc: yes
---


## Klausur

- **Klausur:** 9. August 2021 · [Klausuraufgaben](ALGO121-klausur.pdf) · [Musterlösung](ALGO121-klausur-solutions.pdf)
- **Nachklausur:** 6. Oktober 2021
  - **Ausweise:** Studiausweis und Lichtbildausweis mitbringen und während der Klausur offen liegen lassen!
  - **Corona:**
    - **3G-Nachweis:** Sie müssen einen 3G-Nachweis mitbringen! Das heißt, Sie müssen einen offiziellen Nachweis mitbringen, dass Sie geimpft, getestet, oder genesen sind. Der Test darf höchstens 24 Stunden zurückliegen. **Ohne Nachweis können Sie nicht an der Klausur teilnehmen!** Falls Sie einen Test gemacht haben, der positiv ist, kommen Sie nicht zur Klausur. Informieren Sie umgehend das Prüfungsamt unter [pa_inf@cs.uni-frankfurt.de](mailto:pa_inf@cs.uni-frankfurt.de) und werden Sie wieder gesund.
    - **Formular mitbringen:** Drucken Sie, wenn möglich, das [Unterweisungsformular](Corona-Formular-unterschrieben-mitbringen.pdf) aus, füllen Sie es **vorab** aus, unterschreiben Sie es, und bringen Sie es mit in die Klausur. Hier ist das [Hygienekonzept](Corona-Infos.pdf) der ALGO1-Klausur.
    - **Maske:** Es ist verpflichtend, während der gesamten Klausur eine medizinische Maske zu tragen (chirurgische Maske / FFP2 / FFP3).
  - **Ort und Zeit:** Die Klausur findet im Hörsaalgebäude in Bockenheim statt. Den Hörsaal erfahren Sie erst vor Ort. Die Zeiten sind wie folgt:
    - Wenn Sie einen **Nachteilsausgleich** angemeldet haben oder **Algo1b** schreiben, müssen Sie um 9:30 da sein und am Haupteingang einchecken.
    - Wenn Sie die **Vollklausur** normal mitschreiben, erfolgt die Aufteilung nach der letzten Ziffer in Ihrer Matrikelnummer:
      - 0,1 einchecken um 7:50
      - 3,4 einchecken um 8:00
      - 5,6 einchecken um 8:10
      - 2,9 einchecken um 8:30
      - 7,8 einchecken um 9:00
  - **Organisatorische Fragen:** E-Mail an [algo121@uni-frankfurt.de](mailto:algo121@uni-frankfurt.de) (nicht: dell@ oder moodle).
  - **Hilfsmittel:** Ein Kugelschreiber (schwarz oder blau) ist mitzubringen. Sie dürfen ein mit der eigenen Hand beidseitig beschriebenes DIN-A4-Blatt mit in die Klausur bringen und benutzen. Alle elektronischen Geräte sind zu jedem Zeitpunkt untersagt und müssen ausgeschaltet werden und in Taschen und Rucksäcken verbleiben.
  - **Nachteilsausgleich:** Falls Sie einen Nachteilsausgleich erhalten (z.B. wegen einer Erkrankung), melden Sie diesen bis spätestens Freitag, den 1. Oktober, an. Senden Sie hierzu eine E-Mail an [algo121@uni-frankfurt.de](mailto:algo121@uni-frankfurt.de) mit dem vom Prüfungsausschuss ausgestellten Dokument im Anhang, und sagen Sie uns, welche Klausurvariante Sie schreiben (ALGO1, ALGO1a, oder ALGO1b).

## Allgemeine Informationen

Der Kurs findet _nur synchron_ und _vollständig online_ statt, und ist didaktisch so konzipiert, dass Student:innen in kleinen Gruppen gemeinsam Übungsaufgaben diskutieren und währenddessen individuell von einem freundlichen und kompetenten Team betreut werden.

### Ort und Zeit

- **Dienstag und Donnerstag 8:00–10:00.** Lagebesprechung, Gruppenarbeit, Helpdesks, Lösungsvorschläge.
- **Freitag 14:15–15:45.** Besprechung der ⭐-Aufgabe und Helpdesks.
- [Zoomlinks und genauer Fahrplan](https://docs.google.com/document/d/e/2PACX-1vS0EwhA9qzSTmVyuQtz9M6KRuGl_nWz3cyRrKcaqzlz2PdgJ-OZ1813HYRAkbX5sVFeW-7J-8YD5Vl0/pub).
- [Discordserver des Lernzentrums](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8206712847?5).

### Anmeldung

Bitte melden Sie sich in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=1325) an.<!-- und in [AUGE](https://anmeldung.studiumdigitale.uni-frankfurt.de/auge/index.php?newCourse=&fachbereich=FB+12+Informatik+und+Mathematik&kurs=113) an. In AUGE müssen Sie dreimal denselben Termin angeben. -->

### Dozent

- [Holger Dell](https://tcs.uni-frankfurt.de/~dell/) (Sprechstunde ohne Anmeldung: Montag 16–16:45 Uhr in [Zoom](https://uni-frankfurt.zoom.us/my/holgerdell))

### Tutor:innen

- Niklas Fleischer
- Marius Hagemann
- Alexander Hengstmann
- Lars Huth
- Melvin Kallmayer
- Dayana Khadush
- Aura Sofia Lohr
- Patrick Masny
- Patrick Raphael Melnic
- Julian Mende
- Anton Micke
- Jonas Strauch
- Tolga Tel
- Marc Viel

## Voraussetzungen

Sie brauchen für den Kurs Basisfähigkeiten im Programmieren sowie grundlegende mathematische Fähigkeiten. Mit [diesem Selbsttest](voraussetzungen.pdf) können Sie vorab Ihre Fähigkeiten prüfen und auffrischen.

## Literatur

- **CLRS**: _Algorithmen &ndash; Eine Einführung_ (4. Auflage) von Cormen, Leiserson, Rivest, Stein. [[Volltext als E-Book](https://hds.hebis.de/ubffm/Record/HEB45339454X)]. _(Das Standardwerk.)_
- **E**: _Algorithms_ von Jeff Erickson. [[pdf](https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf) · [web](https://jeffe.cs.illinois.edu/teaching/algorithms/)]. _(Ein wunderschönes Buch, das die ersten Themen von ALGO1 aber nur überfliegt.)_

## Wochenplan

Die Veranstaltung dauert 14 Wochen:

1. **Einführung und Peaks** <span style="color: grey;">· a</span>\
CLRS Kapitel 1 · [Plan](introduction-wochenplan.pdf) · [⭐](star01-2D-hills.pdf) · [📽️](introduction.mp4) · [Folien](introduction.pdf) · [Organisationsfolien](organisation.pdf)<br>

1. **Suchen und Sortieren** <span style="color: grey;">· a</span>\
CLRS Kapitel 2 · [Plan](searchingandsorting-wochenplan.pdf) · [⭐](star02-crossing-lines.pdf) · [📽️1](searching.mp4) · [📽️2](sorting.mp4) · [Folien](searchingandsorting.pdf)<br>

1. **Analyse von Algorithmen, Asymptotische Notation, Rekursionsgleichungen, Mastertheorem** <span style="color: grey;">· a</span>\
CLRS Kapitel 3, 4.3-4.5 · [Plan](analysis-wochenplan.pdf) · [⭐](star03-bitstrings.pdf) · [📽️](analysis.mp4) · [Folien](analysis.pdf) · [experiment.py](experiment.py) · [Lagebesprechung](Woche03_Dienstag.pdf)<br>

1. **Elementare Datenstrukturen: Stapel, Warteschlangen, Verkettete Listen, Bäume** <span style="color: grey;">· a</span>\
CLRS Einleitung von Teil III und Kapitel 10, Kapitel 17.4 bis Mitte von 17.4.1 · [Plan](introtodatastructures-wochenplan.pdf) · [⭐](star04-balance.pdf) · [📽️](introtodatastructures.mp4) · [Folien](introtodatastructures.pdf)<br>

1. **Darstellung von Graphen, Breitensuche, Tiefensuche** <span style="color: grey;">· b</span>\
CLRS Einleitung von Teil VI + Kapitel 22.1-22.4 + Appendix B.4-B.5 · [Plan](introtographs-wochenplan.pdf) · [⭐](star05-three-color-algorithm.pdf) · [📽️1](introtographs1.mp4) · [📽️2](introtographs2.mp4) · [📽️3](introtographs3.mp4) · [Folien](introtographs.pdf)<br>

1. **Gerichtete Graphen, Suche, Topologisches Sortieren, Starke Zusammenhangskomponenten** <span style="color: grey;">· b</span>\
CLRS Einleitung von Teil VI + Kapitel 22.1-22.4 + Appendix B.4-B.5 · [Plan](directedgraphs-wochenplan.pdf) · [⭐](star06-palindromic-walks.pdf) · [📽️1](directedgraphs-1.mp4) · [📽️2](directedgraphs-2.mp4) · [Folien](directedgraphs.pdf)<br>

1. **Prioritätswarteschlangen, Heaps** <span style="color: grey;">· a</span>\
CLRS Kapitel 6 + Appendix B.5 · [Plan](priorityqueues-wochenplan.pdf) · [⭐](star07-seatallocation.pdf) · [📽️1](priorityqueues-1.mp4) · [📽️2](priorityqueues-2.mp4) · [📽️3](priorityqueues-3.mp4) · [Folien](priorityqueues.pdf)<br>

1. **Disjunkte Mengen, Union-Find** <span style="color: grey;">· a</span>\
CLRS Kapitel 21 ohne 21.4 (oder [Algorithms 4ed. Kapitel 1.5](http://www2.compute.dtu.dk/courses/02105/2021/materials/Algs4edUnionFind.pdf)) · [Plan](unionfind-wochenplan.pdf) · [⭐](star08-unionfindmove.pdf) · [📽️1](unionfind-1.mp4) · [📽️2](unionfind-2.mp4) · [Folien](unionfind.pdf)<br>

1. **Minimale Spannbäume: Jarník–Prims Algorithmus, Kruskals Algorithmus** <span style="color: grey;">· b</span>\
E Kapitel 7 (oder CLRS Kapitel 23) · [Plan](minimumspanningtrees-wochenplan.pdf) · [⭐](star09-bottleneck.pdf) · [📽️1](minimumspanningtrees-properties.mp4) · [📽️2](minimumspanningtrees-prim.mp4) · [📽️3](minimumspanningtrees-kruskal.mp4) · [Folien](minimumspanningtrees.pdf)<br>

1. **Dijkstras Algorithmus, kürzeste Wege** <span style="color: grey;">· b</span>\
E Kapitel 8 ohne 8.7 (oder CLRS Kapitel 24 außer 24.1 und 24.4) · [Plan](shortestpaths-wochenplan.pdf) · [⭐](star10-reinsertion.pdf) · [📽️1](shortestpaths-properties.mp4) · [📽️2](shortestpaths-dijkstra.mp4)  · [📽️3](shortestpaths-DAGs.mp4) · [Folien](shortestpaths.pdf)<br>

1. **Wörterbücher, Hashing** <span style="color: grey;">· a</span>\
CLRS Kapitel 11 ohne 11.5 · [Plan](hashing-wochenplan.pdf) · [⭐](star11-hashing.pdf) · [📽️1](hashing-1.mp4) · [📽️2](hashing-2.mp4) · [Folien](hashing.pdf) · [cuckoo hashing](https://www.itu.dk/people/pagh/papers/cuckoo-undergrad.pdf)<br>

1. **Traversierung, binäre Suchbäume, AVL-Bäume** <span style="color: grey;">· a</span>\
CLRS Kapitel 12 ohne 12.4 · [Plan](binarysearchtrees-wochenplan.pdf) · [⭐](star12-zero.pdf) · [📽️1](binarysearchtrees-intro.mp4) · [📽️2](binarysearchtrees-avl.mp4) · [📽️3](binarysearchtrees-algorithms-on-trees.mp4) · [Folien](binarysearchtrees.pdf)<br>

1. **Dynamische Programmierung, Fibonacci, längste gemeinsame DNA-Teilsequenz, Teilmengensumme, DP auf Bäumen** <span style="color: grey;">· b</span>\
E Kapitel 3 ohne 3.6 und 3.9 · [Plan](dynamicprogramming-wochenplan.pdf) · [⭐](star13-secondary-structure.pdf) · [📽️1](dynamicprogramming-fibonacci.mp4) · [📽️2](dynamicprogramming-words.mp4) · [📽️3](dynamicprogramming-editdistance.mp4) · [📽️4](dynamicprogramming-subsetsum.mp4) · [📽️5](dynamicprogramming-MIS-on-trees.mp4) · [Folien](dynamicprogramming.pdf)<br>

1. **Greedy-Algorithmen, Scheduling, Huffman-Codierungen** <span style="color: grey;">· b</span>\
E Kapitel 4 · [Plan](greedyalgorithms-wochenplan.pdf) · [⭐](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/mod/quiz/view.php?id=83917) · [📽️1](greedyalgorithms-intro.mp4) · [📽️2](greedyalgorithms-tapes.mp4) · [📽️3](greedyalgorithms-scheduling.mp4) · [📽️4](greedyalgorithms-huffman.mp4) · [📽️5](greedyalgorithms-stablematching.mp4) · [Folien](greedyalgorithms.pdf)<br>

## Übungen

Alleine ein Buch lesen oder Videos anschauen können Sie auch ohne diesen Kurs.
Mit 1–2 anderen Student:innen zusammen Übungsaufgaben bearbeiten, und dabei unsere Unterstützung und unser Feedback erfahren, das sind die Qualitäten, die Sie ohne diesen Kurs nicht haben.
Daher sind Übungen und die Möglichkeit zum direkten mündlichen Gespräch mit Tutor:innen oder dem Dozenten das zentrale Angebot dieses Kurses.

## ⭐

Manche Übungsaufgaben sind besonders, denn sie sind mit ⭐ markiert.
Diese Aufgaben lösen Sie außerhalb des Synchronbetriebs und geben sie als PDF-Datei ab;
fotografieren Sie hierzu Ihre lesbare Handschrift mit einer Scanner-App oder benutzen Sie [solution-template.tex](solution-template.tex).
Sie erhalten nützliches Feedback von den Tutor:innen auf Ihre Lösung, und Ihre Lösung wird anhand objektiver Kriterien entweder _akzeptiert_ oder _nicht akzeptiert_.
Wenn Ihre Lösung akzeptiert wird, erhalten Sie einen _Stern_ ⭐, der möglicherweise Ihre Klausurnote verbessert.
⭐-Aufgaben verfolgen zwei Ziele: 1) Sie lernen, im sozialen Rahmen einer kleinen Gruppe Algorithmen für Ihnen vorher unbekannte algorithmische Probleme selbst zu entwickeln und zu analysieren. 2) Indem Sie die Lösung aufschreiben, verfassen Sie dadurch einen kurzen, wissenschaftlichen Text, und lernen dabei, die wissenschaftliche Sprache der Algorithmenforschung korrekt zu benutzen.
_Beide_ Aspekte sind wichtig und ergänzen sich gegenseitig, Sie sollten daher für Beides genügend Zeit einplanen.
**Folgende Regeln sind verpflichtend zu beachten:**

- Sie dürfen in einer Gruppe von bis zu drei Student:innen zusammen abgeben. Aber: Bevor Sie anfangen, eine ⭐-Aufgabe zu bearbeiten, legen Sie sich _verbindlich_ auf diese Gruppe fest.
- Außerhalb Ihrer Lerngruppe dürfen Sie über Lösungen, Ideen, Ansätze, oder sonstige Hinweise zu ⭐-Aufgaben **nicht** sprechen oder diese anderweitig kommunizieren.
- Tutor:innen und Dozent:innen und Freunde und Fremde dürfen Ihrer Lerngruppe bei der Bearbeitung von ⭐-Aufgaben **in keiner Weise** helfen.
- Sie dürfen auch keine Lösungsansätze zu ähnlichen Aufgaben aus vergangenen Jahren oder aus ähnlichen Kursen oder aus dem Internet oder von irgendwoher sonst anschauen.
- Sie dürfen die Lösung einer ⭐-Aufgabe weder weitergeben noch von sich abschreiben lassen noch irgendwo für Andere sichtbar hochladen noch liegen lassen.
- Wenn Sie gegen diese Regeln verstoßen, werden beim *ersten* Vergehen *alle* Mitglieder der betroffenen Lerngruppen von allen ⭐-Programmen dieser Professur ausgeschlossen. Wenn Sie von sich abschreiben lassen oder selbst abschreiben, schaden Sie also immer mindestens zwei ganzen Lerngruppen.
- Falls Sie die Klausur bestehen, erhöhen gesammelte ⭐ Ihr Klausurergebnis um *bis zu 10 %*. Das heißt, eine mit 50 % der Punkte gerade so bestandene Klausur kann im besten Fall als 60 % gewertet werden, aber eine mit 49 % nicht bestandene Klausur bleibt nicht bestanden. Der Bonus berechnet sich als 10 % * #(von Ihnen gesammelte ⭐) / #(insgesamt verfügbare ⭐).

## Verwandte Vorlesungen

- Vorbild für diese Vorlesung ist eine [Lockdown-Vorlesung von Philip Bille und Inge Li Gørtz](http://www2.compute.dtu.dk/courses/02105/2021/) an der DTU Kopenhagen. _Mange tak Philip og Inge!_
- Eine vorherige Iteration von ALGO1 wurde im [SoSe-2020](https://ae.cs.uni-frankfurt.de/algo120) (Prof. Meyer) angeboten, wofür [Videos](https://ae.cs.uni-frankfurt.de/videos/algo120.html) aus Präcoronazeiten zusammengeschnitten wurden. Videos sind auch verfügbar aus dem [SoSe-2019](http://algo.cs.uni-frankfurt.de/lehre/ds/sommer19/ds19.php) und [WiSe-2019/20](http://algo.cs.uni-frankfurt.de/lehre/algo2/winter1920/algo21920.php) (Prof. Hoefer).
- Weitere exzellente Videoaufzeichnungen zu denselben Themen finden Sie auf [MIT Open Courseware](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/).
- Vorsemesterkurs Informatik (Einführung in Python) im [WiSe-2021](https://www-stud.informatik.uni-frankfurt.de/~lz_inf/Vorkurs/WS2021/webseite.html).

## Zusätzliche Literatur

- **DMS**: _Algorithmen und Datenstrukturen_ von Martin Dietzfelbinger, Kurt Mehlhorn und Peter Sanders [[UB](https://hds.hebis.de/ubffm/Record/HEB224838512)] _(kompakter, besser organisiert, und formaler als CLRS, gut zum Nachschlagen von Detailfragen.)_
- **Sa**: Skript „Datenstrukturen“ von Georg Schnitger [[pdf](https://ae.cs.uni-frankfurt.de/teaching/20ss/+algo1/skript_ds.pdf)] _(ähnliche Auswahl von Themen; wurde in den vergangenen Jahren an der Goethe-Uni benutzt.)_
- **Sb**: Skript „Theoretische Informatik 1“ von Georg Schnitger [[pdf](https://ae.cs.uni-frankfurt.de/teaching/20ss/+algo1/skript_gl1_ws1213.pdf)] _(für ALGO1 ist nur das Kapitel „Effiziente Algorithmen“ relevant.)_
- **KT**: Kleinberg, Tardos. Algorithm Design. [[UB](https://hds.hebis.de/ubffm/Record/HEB129608459)] _(Ein modernes Buch, das die verschiedenen Entwurfsmethoden in den Mittelpunkt stellt, anstatt einzelner Probleme.)_
- **SWa**: Sedgewick, Wayne, Algorithms, Fourth Edition, 2011. _(konkreter und leichter zugänglich als CLRS und DMS, denn hier werden alle besprochenen Datenstrukturen und Algorithmen penibel implementiert, in [Java](https://github.com/kevin-wayne/algs4/) oder [Python](https://github.com/itu-algorithms/itu.algs4).)_
- **SWb**: Sedgewick, Wayne. Introduction to Programming in Java, 2017. [[pdf](https://introcs.cs.princeton.edu/java/home/chapter1.pdf)] _(Nützlich, falls Sie die Grundlagen der Programmierung auffrischen möchten.)_
- **GL**: Gogol-Döring, Letschert. Algorithmen und Datenstrukturen für Dummies. [[E-Book](https://lbsopac.rz.uni-frankfurt.de/DB=30/PPNSET?PPN=45444821X)] _(Ähnliche Themen wie ALGO1, benutzt möglichst wenig Mathematik.)_

## Weitere Hinweise

- Um die Lerninhalte durch Programmieraufgaben zu vertiefen, eignen sich [diese Kattis-Probleme](kattis/).
- Die Prüfungsvarianten Algo1a und Algo1b stehen für Student:innen aus der alten Studienordnung zur Verfügung. Siehe hierzu die [Äquivalenzregelung des Prüfungsamts](https://www.informatik.uni-frankfurt.de/images/pdf/PA/aequivalenz_bach_11_19.pdf). In diesem Fall zählen nur die ⭐, die für die jeweilige Unterprüfung relevant sind. Sie sehen in der Wochenübersicht 14 Wochen, jede Woche ist in Grau mit a oder b markiert. Beachten Sie, dass diese Einteilung vorläufig ist, und dass Algo1b auf Algo1a aufbaut, weshalb für viele Themen in Algo1b immer auch die Grundlagen aus Algo1a wichtig sind.
- Nur der Suchen-Teil von Suchen und Sortieren ist klausurrelevant für ALGO1, denn Sortieren ist Teil der ALGO2 Prüfung.
- Ein Übertrag von „Bonuspunkten“ aus den Vorjahren wird aus technischen und didaktischen Gründen nicht stattfinden. Dieser ist aber auch nicht nötig, da die Klausur nicht zulassungsbeschränkt ist. Sie können also einfach mitschreiben, wenn Sie sich rechtzeitig anmelden.
- Es gibt [Altklausuren](https://ae.cs.uni-frankfurt.de/teaching/altklausuren.html). Algorithmen und Datenstrukturen 1 war früher aufgeteilt in „Datenstrukturen“ und „Theoretische Informatik 1“.
