---
title: Algorithmen und Datenstrukturen 1
semester: SoSe-2023
ects: "8"
sws: 3V, 2Ü
aliases:
  - "/algo1/2023"
kürzel:
  - program: Bachelor
    modul: B-ALGO-1
    veranstaltung: ALGO1
links:
  - name: QIS
    url: https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=349474&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung
  - name: Moodle
    url: https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=3919
  - name: algo-learn
    url: https://tcs.uni-frankfurt.de/algo-learn/
toc: true
layout: single
lang: de
---

## Organisatorisches

- **Erste Veranstaltung:** Dienstag, 11.04.2023, 8-10 Uhr, H V (Hörsaaltrakt Bockenheim). **Wichtig:** Bearbeiten Sie vorher eigenständig die [Übungen zur Vorbereitung auf ALGO1](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-00-prerequisites.pdf)
- **Anmeldung zu den Übungsgruppen:** Auf dem [Anmeldesystem AUGE](https://anmeldung.studiumdigitale.uni-frankfurt.de/auge/index.php?newCourse=&fachbereich=FB+12+Informatik+und+Mathematik&kurs=179)
- **Anmeldung in Moodle:** In [diesem Moodle-Kurs](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=3919).
- **Organisatorische und inhaltliche Fragen:** Die meisten Fragen sind vielleicht weiter unten bereits beantwortet? Ansonsten gerne eine E-Mail an [algo1-2023@uni-frankfurt.de](mailto:algo1-2023@uni-frankfurt.de) (nicht: dell@ oder moodle)

## Vorlesungskonzept

Der Kurs findet als *Flipped Classroom* statt, das heißt:

- **Eigenständige Vorbereitung**: Video der Woche, Buchkapitel und erste Übungen durcharbeiten.
- **„Plenum“** (Dienstag und Donnerstag, 8:15–9:30 in Hörsaal V, mit allen Studierenden und Professor oder Dozent:in): Fragen & Antworten, Quizze, Kurzpräsentationen, Präsenzübungen und Lösungsspaziergänge. *Diese Präsenzzeit findet ausschließlich im Hörsaal statt und wird nicht hybrid übertragen.*
- **„Tutorium“** (in kleinen Gruppen mit Tutor:in): Diskussionen, Präsenzübungen, Lösungsspaziergänge und individuelle Betreuung. (Einzelne Tutorien oder Helpdesks werden möglicherweise online stattfinden.)

## Vorlesungsteam

- Holger Dell (Professor), Sprechstunde: Dienstag, 10-11 Uhr, Raum 302, RMS 11-15.
- Claudia Gressler (Sekretärin)
- Leo Krull (Dozentin)
- Anselm Haak (Dozent)
- Tutor:innen

## Literatur

- **CLRS**: _Algorithmen &ndash; Eine Einführung_ (4. Auflage) von Cormen, Leiserson, Rivest, Stein. [[Volltext als E-Book](https://ubffm.hds.hebis.de/Record/HEB45339454X)]. *(Das Standardwerk.)*
- **E**: *Algorithms* von Jeff Erickson. [[pdf](https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf) · [web](https://jeffe.cs.illinois.edu/teaching/algorithms/)]. *(Ein wunderschönes Buch, das die ersten Themen von ALGO1 aber nur überfliegt.)*

## Wochenplan

Die Veranstaltung dauert 14 Wochen:

<div class="border-4 border-indigo-500 bg-gray-200 dark:bg-gray-800">
<div class="p-5">

0. **Vorbereitung**\
[Übungen zur eigenständigen Vorbereitung auf ALGO1](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-00-prerequisites.pdf) · [Organisationsfolien](https://files.tcs.uni-frankfurt.de/algo1/2023/ALGO1-00-Organisation-2023.pdf)

1. **Einführung und Peaks**\
CLRS [Kapitel 1 in Teil I](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=25) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-01-introduction.pdf) · [📽️](https://files.tcs.uni-frankfurt.de/algo1/introduction.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/introduction.pdf)<br>

2. **Suchen und Sortieren**\
CLRS [Kapitel 2](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=37) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-02-searchingandsorting.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/searching.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/sorting.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/searchingandsorting.pdf) · [Plenum](https://files.tcs.uni-frankfurt.de/algo1/2023/ALGO1-02-Plenum-Donnerstag.pdf)<br>

3. **Analyse von Algorithmen, Asymptotische Notation, Rekursionsgleichungen, Mastertheorem**\
CLRS [Kapitel 3](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=65), [4.3-4.5](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=105) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-03-analysis.pdf) · [📽️](https://files.tcs.uni-frankfurt.de/algo1/analysis.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/analysis.pdf)<br>

4. **Elementare Datenstrukturen: Stapel, Warteschlangen, Verkettete Listen, Bäume**\
CLRS Einleitung von [Teil III](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=247), [Kapitel 10](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=253), [Kapitel 17.4 bis Mitte von 17.4.1](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=486) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-04-introtodatastructures.pdf) · [📽️](https://files.tcs.uni-frankfurt.de/algo1/introtodatastructures.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/introtodatastructures.pdf)<br>

5. **Darstellung von Graphen, Breitensuche, Tiefensuche**\
CLRS Einleitung von [Teil VI](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=379) + [Kapitel 22.1-22.4](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=619) + [Appendix B.4-B.5](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=1198) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-05-introtographs.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/introtographs1.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/introtographs2.mp4) · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/introtographs3.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/introtographs.pdf)<br>

6. **Gerichtete Graphen, Suche, Topologisches Sortieren, Starke Zusammenhangskomponenten**\
CLRS Einleitung von [Teil VI](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=379) + [Kapitel 22.1-22.4](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=619) + [Appendix B.4-B.5](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=1198) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-06-directedgraphs.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/directedgraphs-1.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/directedgraphs-2.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/directedgraphs.pdf)<br>

7. **Prioritätswarteschlangen, Heaps**\
CLRS [Kapitel 6](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=173) + [Appendix B.5](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=1203) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-07-priorityqueues.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/priorityqueues-1.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/priorityqueues-2.mp4) · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/priorityqueues-3.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/priorityqueues.pdf)<br>

8. **Disjunkte Mengen, Union-Find**\
CLRS [Kapitel 21](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=589) ohne 21.4 (oder [Algorithms 4ed. Kapitel 1.5](https://www2.compute.dtu.dk/courses/02105/2021/materials/Algs4edUnionFind.pdf)) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-08-unionfind.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/unionfind-1.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/unionfind-2.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/unionfind.pdf)<br>

9. **Minimale Spannbäume: Jarník–Prims Algorithmus, Kruskals Algorithmus**\
E Kapitel 7 (oder CLRS [Kapitel 23](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=655)) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-09-minimumspanningtrees.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/minimumspanningtrees-properties.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/minimumspanningtrees-prim.mp4) · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/minimumspanningtrees-kruskal.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/minimumspanningtrees.pdf)<br>

</div>
<div class="bg-yellow-500/10">
<div class="text-indigo-500 m-auto max-w-max font-bold uppercase text-xs">↓↓↓ Entwurf! Hier kann sich noch was ändern ↓↓↓</div>
<div class="p-5">

10. **Dijkstras Algorithmus, kürzeste Wege**\
E Kapitel 8 ohne 8.7 (oder CLRS [Kapitel 24](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=675) außer 24.1 und 24.4) · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-10-shortestpaths.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/shortestpaths-properties.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/shortestpaths-dijkstra.mp4)  · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/shortestpaths-DAGs.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/shortestpaths.pdf)<br>

11. **Wörterbücher, Hashing**\
CLRS [Kapitel 11](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=275) ohne 11.5 · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-11-hashing.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/hashing-1.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/hashing-2.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/hashing.pdf) · [cuckoo hashing](https://www.itu.dk/people/pagh/papers/cuckoo-undergrad.pdf)<br>

12. **Traversierung, binäre Suchbäume, AVL-Bäume**\
CLRS [Kapitel 12](https://ebookcentral.proquest.com/lib/senc/reader.action?docID=4822097&ppg=309) ohne 12.4 · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-12-binarysearchtrees.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/binarysearchtrees-intro.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/binarysearchtrees-avl.mp4) · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/binarysearchtrees-algorithms-on-trees.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/binarysearchtrees.pdf)<br>

13. **Dynamische Programmierung, Fibonacci, längste gemeinsame DNA-Teilsequenz, Teilmengensumme, DP auf Bäumen**\
E Kapitel 3 ohne 3.6 und 3.9 · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-13-dynamicprogramming.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/dynamicprogramming-fibonacci.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/dynamicprogramming-words.mp4) · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/dynamicprogramming-editdistance.mp4) · [📽️4](https://files.tcs.uni-frankfurt.de/algo1/dynamicprogramming-subsetsum.mp4) · [📽️5](https://files.tcs.uni-frankfurt.de/algo1/dynamicprogramming-MIS-on-trees.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/dynamicprogramming.pdf)<br>

14. **Greedy-Algorithmen, Scheduling, Huffman-Codierungen**\
E Kapitel 4 · [Übungsblatt](https://goethe-tcs.github.io/algo1-exercises/ALGO1-Blatt-14-greedyalgorithms.pdf) · [📽️1](https://files.tcs.uni-frankfurt.de/algo1/greedyalgorithms-intro.mp4) · [📽️2](https://files.tcs.uni-frankfurt.de/algo1/greedyalgorithms-tapes.mp4) · [📽️3](https://files.tcs.uni-frankfurt.de/algo1/greedyalgorithms-scheduling.mp4) · [📽️4](https://files.tcs.uni-frankfurt.de/algo1/greedyalgorithms-huffman.mp4) · [📽️5](https://files.tcs.uni-frankfurt.de/algo1/greedyalgorithms-stablematching.mp4) · [Folien](https://files.tcs.uni-frankfurt.de/algo1/greedyalgorithms.pdf)<br>

</div>
</div>
</div>

## Lernziele

Nach der Veranstaltung können die Studierenden:

- Grundlegende Algorithmen und Datenstrukturen in Pseudocode und natürlicher Sprache **beschreiben**, an kleinen Beispielen **anwenden**, und **implementieren**,
- sie an neue Problemstellungen **anpassen**,
- Eigenschaften wie etwa die Laufzeit, den Platzbedarf oder die Korrektheit dieser und ähnlicher Algorithmen **ermitteln**, **vergleichen** und mathematisch **beweisen**,
- sich über fachbezogene Inhalte mündlich und schriftlich **austauschen**,
- neue Algorithmen und Datenstrukturen mit Hilfe grundlegender Entwurfsmethoden **entwickeln**.

## Inhalte

- Analyse von sequentiellen Algorithmen (Laufzeit, Platzbedarf, asymptotische Notation)
- Rekursionsgleichungen (Rekursionsbäume)
- Grundlegende Algorithmen (zum Beispiel binäre Suche, Mergesort, Editierdistanz, Scheduling, Huffman-Codierung, oder andere)
- Grundlegende abstrakte und konkrete Datenstrukturen (Stacks, Queues, Verkettete Listen, Heaps, Union-Find, Hash-Tabellen, Suchbäume)
- Grundlegende Entwurfsmethoden (Divide and Conquer, Dynamische Programmierung, Gierige Algorithmen)
- Graphalgorithmen (Tiefensuche, Breitensuche, Kruskal, Prim, Dijkstra) für verschiedene Arten von Graphen (ungewichtet, gewichtet, ungerichtet, gerichtet).

## Verwandte Vorlesungen

- ALGO1 an der Goethe Universität:
  - [SoSe-2022](https://algo.cs.uni-frankfurt.de/lehre/algo1/sommer22/algo122.php) (Prof. Hoefer) mit [Vorlesungsmitschnitten](https://video01.uni-frankfurt.de/Mediasite/Channel/hoefer-algorithmenunddatenstrukturen/browse/null/most-recent/null/0/null)
  - [SoSe-2021](https://tcs.uni-frankfurt.de/algo1/2021) (Prof. Dell) mit Videos
  - [SoSe-2020](https://ae.cs.uni-frankfurt.de/algo120) (Prof. Meyer) mit [Vorlesungsmitschnitten](https://ae.cs.uni-frankfurt.de/videos/algo120.html)
- Vorbild für diese Vorlesung war eine [Lockdown-Vorlesung von Philip Bille und Inge Li Gørtz](https://www2.compute.dtu.dk/courses/02105/2021/) an der DTU Kopenhagen. *Mange tak Philip og Inge!*
- Weitere exzellente Videoaufzeichnungen zu denselben Themen finden Sie auf [MIT Open Courseware](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/video_galleries/lecture-videos/).
- Vorsemesterkurs Informatik (Einführung in Python) im [WiSe-2021](https://www-stud.informatik.uni-frankfurt.de/~lz_inf/Vorkurs/WS2021/webseite.html).

## Zusätzliche Literatur

- **DMS**: *Algorithmen und Datenstrukturen* von Martin Dietzfelbinger, Kurt Mehlhorn und Peter Sanders [[UB](https://ubffm.hds.hebis.de/Record/HEB224838512)] *(kompakter, besser organisiert, und formaler als CLRS, gut zum Nachschlagen von Detailfragen.)*
- **Sa**: Skript „Datenstrukturen“ von Georg Schnitger [[pdf](https://ae.cs.uni-frankfurt.de/teaching/20ss/+algo1/skript_ds.pdf)] *(ähnliche Auswahl von Themen; wurde in den vergangenen Jahren an der Goethe-Uni benutzt.)*
- **Sb**: Skript „Theoretische Informatik 1“ von Georg Schnitger [[pdf](https://ae.cs.uni-frankfurt.de/teaching/20ss/+algo1/skript_gl1_ws1213.pdf)] *(für ALGO1 ist nur das Kapitel „Effiziente Algorithmen“ relevant.)*
- **KT**: Kleinberg, Tardos. Algorithm Design. [[UB](https://ubffm.hds.hebis.de/Record/HEB129608459)] *(Ein modernes Buch, das die verschiedenen Entwurfsmethoden in den Mittelpunkt stellt, anstatt einzelner Probleme.)*
- **SWa**: Sedgewick, Wayne, Algorithms, Fourth Edition, 2011. *(konkreter und leichter zugänglich als CLRS und DMS, denn hier werden alle besprochenen Datenstrukturen und Algorithmen penibel implementiert, in [Java](https://github.com/kevin-wayne/algs4/) oder [Python](https://github.com/itu-algorithms/itu.algs4).)*
- **SWb**: Sedgewick, Wayne. Introduction to Programming in Java, 2017. [[pdf](https://introcs.cs.princeton.edu/java/home/chapter1.pdf)] *(Nützlich, falls Sie die Grundlagen der Programmierung auffrischen möchten.)*
- **GL**: Gogol-Döring, Letschert. Algorithmen und Datenstrukturen für Dummies. [[E-Book](https://ubffm.hds.hebis.de/Record/HEB45444821X)] *(Ähnliche Themen wie ALGO1, benutzt möglichst wenig Mathematik.)*

## Klausur

Um an der Klausur teilzunehmen, müssen Sie sich mindestens zwei Wochen vorher über das QIS-System oder über das Prüfungsamt Ihres Studiengangs anmelden! Eine Anmeldung über das ALGO1-Team ist **nicht** möglich. Weitere Informationen zu den Informatikstudiengängen finden Sie auf der [entsprechenden Seite](https://www.uni-frankfurt.de/104029374/Pruefungsorganisation_und_Fristen) des Prüfungsamts Informatik.

- **Erstklausur:** 24. Juli 2023
- **Zweitklausur:** 2. Oktober 2023
- **Organisatorische Fragen:** E-Mail an [algo1-2023@uni-frankfurt.de](mailto:algo1-2023@uni-frankfurt.de) (nicht: dell@ oder moodle).

Wenn Sie eine Klausur verpassen oder nicht bestehen, müssen Sie bis zur nächsten Klausur warten. Eine mündliche Prüfung ist nicht möglich.

## Weitere Hinweise

- **Altklausuren.** [Dieses zip-Archiv](https://cloud.tcs.uni-frankfurt.de/s/KxYPRjabCKk5oza) enthält alle ALGO1-Klausuren samt Lösungsvorschlägen seitdem das Modul B-ALGO-1 in der aktuellen Form existiert.
- **Kattis.** Um die Lerninhalte durch Programmieraufgaben zu vertiefen, eignen sich [diese Kattis-Probleme](/algo1/kattis).
- **Algo1a/Algo1b.** Die Prüfungsvarianten Algo1a und Algo1b stehen nicht mehr zur Verfügung. Studierende aus alten Studienordnungen müssen die volle ALGO1 Prüfung bestehen.
- **Bonuspunkte.** Im Sommersemester 2023 gibt es keine „Bonuspunkte“.
