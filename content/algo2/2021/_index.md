---
title: "Algorithmen und Datenstrukturen 2"
ects: "8"
sws: "3V, 2Ü"
aliases:
  - "/algo2/2021"
kürzel:
  - program: "Bachelor"
    modul: "B-ALGO-2"
    veranstaltung: "ALGO2"
semester: "WiSe-2021/22"
links:
  - name: QIS
    url: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=321520&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
  - name: Moodle
    url: "https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241"
toc: true
layout: single
lang: de
schedule:
  - title: Einführung und All-Pairs Shortest Paths
    links:
      - E 9.1, 9.2, 9.5, 9.6, 9.8
      - "[Organisationsfolien](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-Organisation.pdf)"
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week01.pdf)"
  - title: Network Flow I
    subtitle: Max-flow min-cut theorem, augmenting paths, Ford-Fulkerson
    links:
      - KT 7.1, 7.2, 7.3
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week02.pdf)"
  - title: Network Flow II
    subtitle: scaling, Edmonds-Karp, applications, maximum bipartite matching, disjoint paths
    links:
      - KT 7.3, 7.5, 7.6
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week03.pdf)"
  - title: Amortisierte Analyse
    subtitle: Dynamische Tabellen, MultiPop Stacks, Splay Trees
    links:
      - CLRS 17.4
      - "[Lecture 9](https://jeffe.cs.illinois.edu/teaching/algorithms/notes/09-amortize.pdf) und [Lecture 10.1, 10.5, 10.6](https://jeffe.cs.illinois.edu/teaching/algorithms/notes/10-scapegoat-splay.pdf) aus den Notizen von [Ericksons _Director's Cut_](https://jeffe.cs.illinois.edu/teaching/algorithms/#notes)"
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week04.pdf)"
  - title: Randomisierte Algorithmen I
    subtitle: Contention resolution, Minimum cut
    links:
      - KT 13, 13.1, 13.2, 13.12
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week05.pdf)"
  - title: Randomisierte Algorithmen II
    subtitle: Selection, Quicksort
    links:
      - KT 13.3, 13.5
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week06.pdf)"
  - title: NP-Vollständigkeit I
    subtitle: Sprachen, Polynomialzeitreduktionen
    links:
      - E 12, 12.1-12.3, 12.5-12.9
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week07.pdf)"
  - title: NP-Vollständigkeit II
    subtitle: P, NP, NP-Vollständigkeit
    links:
      - E 12.10-12.14
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week08.pdf)"
  - title: Recap I
  - title: Berechenbarkeit I
    subtitle: Endliche Automaten, Turing-Maschinen, Nicht-Determinismus, starke Church-Turing Hypothese, Word-RAM
    links:
      - "[Kapitel 6](https://jeffe.cs.illinois.edu/teaching/algorithms/models/06-turing-machines.pdf) in Ericksons [_Models of Computation_](https://jeffe.cs.illinois.edu/teaching/algorithms/#models)"
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week10.pdf)"
  - title: Berechenbarkeit II
    subtitle: Halteproblem, Satz von Rice
    links:
      - "[Kapitel 7](https://jeffe.cs.illinois.edu/teaching/algorithms/models/07-undecidable.pdf) in Ericksons [_Models of Computation_](https://jeffe.cs.illinois.edu/teaching/algorithms/#models)"
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week11.pdf)"
  - title: Lineare Programmierung I
    subtitle: Konvexität, Polytope, Simplex-Algorithmus
    links:
      - "[Notes I](http://jeffe.cs.illinois.edu/teaching/algorithms/notes/I-simplex.pdf) von Ericksons [Extended Lecture Notes](http://jeffe.cs.illinois.edu/teaching/algorithms/)"
      - "[Linear Programming I](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/LinearProgrammingI.pdf) von Kevin Wayne "
      - "[Linear Programming III](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/LinearProgrammingIII.pdf) von Kevin Wayne"
      - "[Linear Programming and Polyhedral Combinatorics](https://math.mit.edu/~goemans/18433S13/polyhedral.pdf) von Michel Goemans"
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week12.pdf)"
  - title: Lineare Programmierung II
    subtitle: Dualität, Integrale Lineare Programmierung
    links:
      - "[Notes H](http://jeffe.cs.illinois.edu/teaching/algorithms/notes/H-lp.pdf) von Ericksons [Extended Lecture Notes](http://jeffe.cs.illinois.edu/teaching/algorithms/)"
      - "[Linear Programming II](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/LinearProgrammingII.pdf) von Kevin Wayne"
      - "[Linear Programming and Polyhedral Combinatorics](https://math.mit.edu/~goemans/18433S13/polyhedral.pdf) von Michel Goemans"
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week13.pdf)"
  - title: Algorithmen für NP-schwere Probleme
    subtitle: Approximationsalgorithmen für Vertex-Cover durch LP-Relaxierung, Randomisiertes Runden, Greedy; FPT-Algorithmus für Vertex-Cover durch Bounded Search Trees
    links:
      - "[Notes J](http://jeffe.cs.illinois.edu/teaching/algorithms/notes/J-approx.pdf) von Ericksons [Extended Lecture Notes](http://jeffe.cs.illinois.edu/teaching/algorithms/)"
      - KT 10.1
      - "[Übungsblatt](https://files.tcs.uni-frankfurt.de/algo2/2021/ALGO2-week14.pdf)"
  - title: Recap II
---

## Übersicht

<!--
- **Präsenztermine.** (Zutritt nur mit offiziellem 3G-Nachweis und Lichtbildausweis.)
  - Di 08:00–09:45 s.t., Bockenheim Hörsaal VI.
  - Do 08:00–09:45 s.t., Bockenheim Hörsaal IV (und ggf. Hörsaal III).
-->
<!--- **Chat.** Im [Discordserver des Lernzentrums](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8206712847?5) ist fast jederzeit ein:e Tutor:in erreichbar.-->

- Ab sofort finden die Veranstaltungen Di/Do 8:00-9:45 **vollständig online** statt:
  - Der Zoom-Link hat die Meeting-ID [**966 9678 8856**](https://uni-frankfurt.zoom.us/j/96696788856?pwd=ZG9OMFkzOUh1eGdtUXB2bWluMjlyZz09) und den Passcode 004040. Bei schlechter Internetverbindung kann man sich auch telefonisch einwählen unter der Nummer `+49 69 3807 9883`.
  - Zeiten:
    - **8:00-8:15 auf Zoom.** Besprechung, Tipps, Überblick, Einordnung, Beispiele.
    - **8:15-9:15 auf Discord.** Die Tutor:innen sind auf Discord verfügbar! Arbeiten Sie dort in Gruppen und rufen Sie die Tutor:innen!
    - **9:15-9:45 auf Zoom.** Lösungsspaziergang. (Sie dürfen _keine Screenshots oder Mitschnitte_ machen, weitergeben oder empfangen!)
  - Die Helpdesks finden weiterhin als Mix zwischen Online und Präsenz statt.
- **Moodle.** Die meisten Lernangebote und Informationen finden sich in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241).
- **Bei wichtigen Fragen:** Sie erreichen den _senior staff_ unter [algo221@uni-frankfurt.de](mailto:algo221@uni-frankfurt.de) (nicht: dell@ oder moodle)

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

## Allgemeines

- **Kursformat.**
  - Präsenzelemente: Betreute Gruppenarbeit, Lösungsspaziergänge, Besprechungen im Plenum.
  - Online-Elemente: Videos, Folien, Literatur, Übungsblätter, ⭐-Aufgaben, 🌱-Aufgaben, Chat, Helpdesk, individuelles Feedback auf ⭐-Aufgaben.
- **Voraussetzungen.** Der Kurs baut auf [Algorithmen und Datenstrukturen 1](/algo1/) (ALGO1) auf. Sie müssen die Kompetenzen aus ALGO1 bereits meistern, um an ALGO2 teilnehmen zu können.
- **Anmeldung.** Bitte melden Sie sich in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241) an.<!-- und in [AUGE](https://anmeldung.studiumdigitale.uni-frankfurt.de/auge/index.php?newCourse=&fachbereich=FB+12+Informatik+und+Mathematik&kurs=113) an. In AUGE müssen Sie dreimal denselben Termin angeben. --> Eine Anmeldung per E-Mail ist _nicht_ nötig! Auch die Anmeldung zur Klausur erfolgt nur über QIS oder das Prüfungsamt.
- **E-Mail.** Nur bei organisatorischen Anliegen (Nachteilsausgleich, Prüfungsvarianten, etc.): E-Mail an [algo221@uni-frankfurt.de](mailto:algo221@uni-frankfurt.de).

## Vorlesungsteam

- Holger Dell (Professor)
- Claudia Gressler (Sekretärin)
- Leo Krull (Dozentin)
- Anselm Haak (Dozent)
- Tutor:innen

## Klausur

- **Klausur:** 22.02.2022 · [Klausuraufgaben](https://files.tcs.uni-frankfurt.de/algo2/ALGO221-klausur.pdf) · [Musterlösung](https://files.tcs.uni-frankfurt.de/algo2/ALGO221-klausur-solutions.pdf)
- **Nachklausur:** 05.04.2022 · [Klausuraufgaben](https://files.tcs.uni-frankfurt.de/algo2/ALGO221-nachklausur.pdf) · [Musterlösung](https://files.tcs.uni-frankfurt.de/algo2/ALGO221-nachklausur-solutions.pdf)
- **Weitere Hinweise zur Klausur finden Sie ganz oben in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241).**

## Ähnliche Kurse

- [Algorithms and Data Structures II](http://www2.imm.dtu.dk/courses/02110/2021/) von Inge Li Gørtz (DTU Copenhagen).
- [Algorithm Design](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/) von Kevin Wayne (Princeton University).
- [Algorithms and Models of Computation](https://courses.engr.illinois.edu/cs374/fa2021/A/) von Jeff Erickson (University of Illinois)
- [Algorithms](https://courses.engr.illinois.edu/cs473/sp2020/) von Jeff Erickson (University of Illinois)
- Eine vorherige Iteration von ALGO2 wurde im [WiSe-2020](https://ae.cs.uni-frankfurt.de/algo220) (Prof. Meyer) angeboten, wofür Videos aus Präcoronazeiten zusammengeschnitten wurden.
