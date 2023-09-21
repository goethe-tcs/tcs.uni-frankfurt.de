---
title: "Algorithmen und Datenstrukturen 2"
ects: "8"
sws: "3V, 2Ü"
aliases:
  - "/algo2/2023"
kürzel:
  - program: "Bachelor"
    modul: "B-ALGO-2"
    veranstaltung: "ALGO2"
semester: "WiSe-2023/24"
links:
  - name: QIS
    url: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=359273&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
  # - name: Moodle
  #   url: "https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241"
toc: yes
layout: single
lang: de
schedule:
  - title: Einführung und All-Pairs Shortest Paths
    weekstart: "2023-10-16"
  - title: Network Flow I
    subtitle: Max-flow min-cut theorem, augmenting paths, Ford-Fulkerson
    weekstart: "2023-10-23"
  - title: Network Flow II
    subtitle: scaling, Edmonds-Karp, applications, maximum bipartite matching, disjoint paths
    weekstart: "2023-10-30"
  - title: Amortisierte Analyse
    subtitle: Dynamische Tabellen, MultiPop Stacks, Splay Trees
    weekstart: "2023-11-06"
  - title: Randomisierte Algorithmen I
    subtitle: Contention resolution, Minimum cut
    weekstart: "2023-11-13"
  - title: Randomisierte Algorithmen II
    subtitle: Selection, Quicksort
    weekstart: "2023-11-20"
  - title: Hartnäckigkeit I
    subtitle: Sprachen, Polynomialzeitreduktionen
    weekstart: "2023-11-27"
  - title: Hartnäckigkeit II
    subtitle: P, NP, NP-Vollständigkeit
    weekstart: "2023-12-04"
  - title: Berechnungsmodelle
    subtitle: Endliche Automaten, Turing-Maschinen, Nicht-Determinismus, starke Church-Turing Hypothese, Word-RAM
    weekstart: "2023-12-11"
  - title: Recap I
    weekstart: "2023-12-18"
  - title: Berechenbarkeit
    subtitle: Halteproblem, Satz von Rice
    weekstart: "2024-01-08"
  - title: Lineare Programmierung I
    subtitle: Konvexität, Polytope, Simplex-Algorithmus
    weekstart: "2024-01-15"
  - title: Lineare Programmierung II
    subtitle: Dualität, Integrale Lineare Programmierung
    weekstart: "2024-01-22"
  - title: Algorithmen für NP-schwere Probleme
    subtitle: Approximationsalgorithmen für Vertex-Cover durch LP-Relaxierung, Randomisiertes Runden, Greedy; FPT-Algorithmus für Vertex-Cover durch Bounded Search Trees
    weekstart: "2024-01-29"
  - title: Recap II
    weekstart: "2024-02-05"
---

## Organisatorisches

- **Termine.** Dienstag und Donnerstag, 08:15-09:30, H VI (Hörsaaltrakt Bockenheim).
- **Erste Veranstaltung:** Dienstag, 17.10.2023, 8-10 Uhr, H VI (Hörsaaltrakt Bockenheim).
- **Voraussetzungen.** Der Kurs baut auf [Algorithmen und Datenstrukturen 1](/algo1/) (ALGO1) auf. Sie müssen die Kompetenzen aus ALGO1 bereits meistern, um an ALGO2 teilnehmen zu können.
- **Organisatorische und inhaltliche Fragen:** Die meisten Fragen sind vielleicht weiter unten bereits beantwortet? Ansonsten gerne eine E-Mail an [algo1-2023@uni-frankfurt.de](mailto:algo1-2023@uni-frankfurt.de) (nicht: dell@ oder moodle)
<!-- - **Anmeldung zu den Übungsgruppen:** Auf dem [Anmeldesystem AUGE](https://anmeldung.studiumdigitale.uni-frankfurt.de/auge/index.php?newCourse=&fachbereich=FB+12+Informatik+und+Mathematik&kurs=179)
- **Anmeldung in Moodle:** In [diesem Moodle-Kurs](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=3919). -->

## Vorlesungskonzept

Der Kurs findet als _Flipped Classroom_ statt, das heißt:

- **Eigenständige Vorbereitung**: Video der Woche, Buchkapitel und erste Übungen durcharbeiten.
- **„Plenum“** (Dienstag und Donnerstag, 8:15–9:30 in Hörsaal VI, mit allen Studierenden und Professor oder Dozent:in): Fragen & Antworten, Quizze, Kurzpräsentationen, Präsenzübungen und Lösungsspaziergänge. _Diese Präsenzzeit findet ausschließlich im Hörsaal statt und wird nicht hybrid übertragen._
- **„Tutorium“** (in kleinen Gruppen mit Tutor:in): Diskussionen, Präsenzübungen, Lösungsspaziergänge und individuelle Betreuung. (Einzelne Tutorien oder Helpdesks werden möglicherweise online stattfinden.)

## Wochenplan

Die Veranstaltung dauert 15 Wochen:

{{< weekplan >}}

## Literatur

- **E**: _Algorithms_ von Jeff Erickson. [[pdf](https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf) · [web](https://jeffe.cs.illinois.edu/teaching/algorithms/)]. _(Ein wunderschönes Buch.)_
- **KT**: _Algorithm Design_ von Jon Kleinberg und Éva Tardos. [[pdf](https://github.com/davie890/CS102-Algorithm-Analysis/raw/master/Algorithm%20Design%20by%20Jon%20Kleinberg%2C%20Eva%20Tardos.pdf) · [e-UB](https://ubffm.hds.hebis.de/Record/HEB486267229) · [UB](https://ubffm.hds.hebis.de/Record/HEB129608459)]. _(Ein modernes Buch, das die verschiedenen Entwurfsmethoden in den Mittelpunkt stellt, anstatt einzelner Probleme.)_
- **CLRS**: _Algorithmen &ndash; Eine Einführung_ (4. Auflage) von Cormen, Leiserson, Rivest, Stein. [[e-UB](https://ubffm.hds.hebis.de/Record/HEB45339454X)]. _(Das Standardwerk.)_
- **C**: _Linear Programming_ von Vašek Chvátal. [[UB](https://ubffm.hds.hebis.de/Record/HEB023756578)] _(Für eine Einführung in die Lineare Programmierung.)_
- **V**: _Approximation Algorithms_ von Vijay V. Vazirani [[e-UB](https://ubffm.hds.hebis.de/Record/HEB471959707) · [UB](https://ubffm.hds.hebis.de/Record/HEB098805355)] _(Für eine Einführung in Approximationsalgorithmen.)_
- **CFKLMPPS**: _Parameterized Algorithms_ von Cygan, Fomin, Kowalik, _et al_. [[pdf](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf) · [e-UB](https://ubffm.hds.hebis.de/Record/HEB486266346) · [UB](https://ubffm.hds.hebis.de/Record/HEB367892626)] _(Für eine Einführung in parametrisierte Algorithmen.)_

## Lernziele

Nach der Veranstaltung können die Studierenden:

- Algorithmen und Datenstrukturen aus dem erweiterten Grundkanon und den Vertiefungsgebieten **beschreiben**, **anwenden**, und **implementieren**,
- sie an neue Problemstellungen **anpassen**,
- Eigenschaften (wie etwa die Komplexität und Korrektheit) dieser und ähnlicher Algorithmen **untersuchen** und **begründen**,
- neue Algorithmen für verwandte Problemstellungen **entwickeln**.

Außerdem können die Studierenden:

- Wichtige Ergebnisse und Konzepte in den Bereichen der NP-Vollständigkeit und Entscheidbarkeit **wiedergeben**, **anwenden**, und **erläutern**,
- **einschätzen**, welche praktischen und theoretischen Konsequenzen die Hartnäckigkeit eines Problems hat,
- **untersuchen** und **begründen**, ob und warum ein gegebenes Problem hartnäckig ist.

## Inhalt

- **Erweiterter Grundkanon von Algorithmen und Datenstrukturen:** All Pairs Shortest Paths, Network Flow, Amortisierte Analyse, Randomisierte Algorithmen, Lineare Programmierung
- **Hartnäckigkeit:** Reduktionen, P und NP, NP-Vollständigkeit, Berechenbarkeit
- **Vertiefungsgebiete**, die in der Frankfurter Theorie vertreten sind: Approximationsalgorithmen, Parametrisierte Algorithmen, und weitere.

## Vorlesungsteam

- Holger Dell (Professor) | <span class="text-sm">Sprechstunde: Dienstag 10-11 Uhr, Raum 302, RMS 11-15</span>
- Claudia Gressler (Sekretärin)
- Anselm Haak (Dozent)
- Tutor:innen

## Klausur

- **Erstklausur:** 13.02.2024
- **Zweitklausur:** 26.03.2024
<!-- - **Weitere Hinweise zur Klausur finden Sie ganz oben in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241).** -->

## Ähnliche Kurse

- [Algorithms and Data Structures II](http://www2.imm.dtu.dk/courses/02110/2021/) von Inge Li Gørtz (DTU Copenhagen).
- [Algorithm Design](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/) von Kevin Wayne (Princeton University).
- [Algorithms and Models of Computation](https://courses.engr.illinois.edu/cs374/fa2021/A/) von Jeff Erickson (University of Illinois)
- [Algorithms](https://courses.engr.illinois.edu/cs473/sp2020/) von Jeff Erickson (University of Illinois)
- Eine vorherige Iteration von ALGO2 wurde im [WiSe-2020](https://ae.cs.uni-frankfurt.de/algo220) (Prof. Meyer) angeboten, wofür Videos aus Präcoronazeiten zusammengeschnitten wurden.
