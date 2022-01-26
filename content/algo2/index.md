---
title: "Algorithmen und Datenstrukturen 2"
shortname: "ALGO2"
semester: "WiSe-2021/22"
qis: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=321520&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
toc: yes
---

## Klausur

- Klausur: **22.02.2022**
- Nachklausur: **05.04.2022**
- **Weitere Hinweise zur Klausur finden Sie ganz oben in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241).**

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
    - **9:15-9:45 auf Zoom.** Lösungsspaziergang. (Sie dürfen *keine Screenshots oder Mitschnitte* machen, weitergeben oder empfangen!)
  - Die Helpdesks finden weiterhin als Mix zwischen Online und Präsenz statt.
- **Moodle.** Die meisten Lernangebote und Informationen finden sich in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241).
- **Bei wichtigen Fragen:** Sie erreichen den _senior staff_ unter [algo221@uni-frankfurt.de](mailto:algo221@uni-frankfurt.de) (nicht: dell@ oder moodle)

## Wochenplan

Die Veranstaltung dauert 15 Wochen, die Pläne sind vorläufig<!-- (🔥 = aktuelle Woche)-->:
<!-- Literatur · 📽️ · Folien · Übungen -->
  
1. **Einführung und All-Pairs Shortest Paths**

2. **Network Flow I:** Max-flow min-cut theorem, augmenting paths, Ford-Fulkerson

3. **Network Flow II:** scaling, Edmonds-Karp, applications, maximum bipartite matching, disjoint paths

4. **Amortisierte Analyse:** Dynamische Tabellen, MultiPop Stacks, Splay Trees

5. **Randomisierte Algorithmen I:** Contention resolution, Minimum cut

6. **Randomisierte Algorithmen II:** Selection, Quicksort

7. **Hartnäckigkeit I:** Sprachen, Polynomialzeitreduktionen

8. **Hartnäckigkeit II:** P, NP, NP-Vollständigkeit

9. **Recap**

10. **Berechnungsmodelle:** Endliche Automaten, Turing-Maschinen, Nicht-Determinismus, starke Church-Turing Hypothese, Word-RAM

11. **Berechenbarkeit:** Halteproblem, Satz von Rice

12. **Lineare Programmierung I:** Konvexität, Polytope, Simplex-Algorithmus
  
13. **Lineare Programmierung II:** Dualität, Integrale Lineare Programmierung

14. **Approximationsalgorithmen:** LP-Dualität, Greedy, Vertex-Cover, Set Cover.

15. **Parametrisierte Algorithmen:** Bounded Search Trees, Kernelisierung.

## Literatur

- **E**: _Algorithms_ von Jeff Erickson. [[pdf](https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf) · [web](https://jeffe.cs.illinois.edu/teaching/algorithms/)]. _(Ein wunderschönes Buch.)_
- **KT**: _Algorithm Design_ von Jon Kleinberg und Éva Tardos. [[pdf](https://github.com/davie890/CS102-Algorithm-Analysis/raw/master/Algorithm%20Design%20by%20Jon%20Kleinberg%2C%20Eva%20Tardos.pdf) · [e-UB](https://hds.hebis.de/ubffm/Record/HEB486267229) · [UB](https://hds.hebis.de/ubffm/Record/HEB129608459)]. _(Ein modernes Buch, das die verschiedenen Entwurfsmethoden in den Mittelpunkt stellt, anstatt einzelner Probleme.)_
- **CLRS**: _Algorithmen &ndash; Eine Einführung_ (4. Auflage) von Cormen, Leiserson, Rivest, Stein. [[e-UB](https://hds.hebis.de/ubffm/Record/HEB45339454X)]. _(Das Standardwerk.)_
- **C**: _Linear Programming_ von Vašek Chvátal. [[UB](https://hds.hebis.de/ubffm/Record/HEB023756578)] _(Für eine Einführung in die Lineare Programmierung.)_
- **V**: _Approximation Algorithms_ von Vijay V. Vazirani [[e-UB](https://hds.hebis.de/ubffm/Record/HEB471959707) · [UB](https://hds.hebis.de/ubffm/Record/HEB098805355)] _(Für eine Einführung in Approximationsalgorithmen.)_
- **CFKLMPPS**: _Parameterized Algorithms_ von Cygan, Fomin, Kowalik, _et al_. [[pdf](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf) · [e-UB](https://hds.hebis.de/ubffm/Record/HEB486266346) · [UB](https://hds.hebis.de/ubffm/Record/HEB367892626)] _(Für eine Einführung in parametrisierte Algorithmen.)_

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
- **Voraussetzungen.** Der Kurs baut auf [Algorithmen und Datenstrukturen 1](/teaching/summer21/algo1/) (ALGO1) auf. Sie müssen die Kompetenzen aus ALGO1 bereits meistern, um an ALGO2 teilnehmen zu können.
- **Anmeldung.** Bitte melden Sie sich in [Moodle](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=2241) an.<!-- und in [AUGE](https://anmeldung.studiumdigitale.uni-frankfurt.de/auge/index.php?newCourse=&fachbereich=FB+12+Informatik+und+Mathematik&kurs=113) an. In AUGE müssen Sie dreimal denselben Termin angeben. --> Eine Anmeldung per E-Mail ist *nicht* nötig! Auch die Anmeldung zur Klausur erfolgt nur über QIS oder das Prüfungsamt.
- **E-Mail.** Nur bei organisatorischen Anliegen (Nachteilsausgleich, Prüfungsvarianten, etc.): E-Mail an [algo221@uni-frankfurt.de](mailto:algo221@uni-frankfurt.de).

## Vorlesungsteam

- Holger Dell (Professor)
- Claudia Gressler (Sekretärin)
- Leo Krull (Dozentin)
- Anselm Haak (Dozent)
- Marius Hagemann (2x Tutor)
- Alexander Hengstmann (2x Tutor)
- Tolga Tel (2x Tutor)
- Aura Sofia Lohr (Tutorin)
- Julian Lorenz (Tutor)
- Melvin Kallmayer (Tutor)
- Julian Mende (Tutor)
- Timo Mertin (Tutor)
- Jonas Strauch (Tutor)
- Marc Viel (Tutor)

## Ähnliche Kurse

- [Algorithms and Data Structures II](http://www2.imm.dtu.dk/courses/02110/2021/) von Inge Li Gørtz (DTU Copenhagen).
- [Algorithm Design](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/) von Kevin Wayne (Princeton University).
- [Algorithms and Models of Computation](https://courses.engr.illinois.edu/cs374/fa2021/A/) von Jeff Erickson (University of Illinois)
- [Algorithms](https://courses.engr.illinois.edu/cs473/sp2020/) von Jeff Erickson (University of Illinois)
- Eine vorherige Iteration von ALGO2 wurde im [WiSe-2020](https://ae.cs.uni-frankfurt.de/algo220) (Prof. Meyer) angeboten, wofür Videos aus Präcoronazeiten zusammengeschnitten wurden.
