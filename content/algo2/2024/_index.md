---
draft: true
title: "Algorithmen und Datenstrukturen 2"
ects: "8"
sws: "3V, 2Ü"
kürzel:
  - program: "Bachelor"
    modul: "B-ALGO-2"
    veranstaltung: "ALGO2"
semester: "!!draft!!"
links:
  - name: QIS
    url: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=380890&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
  - name: Moodle
    url: "https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=5636"
toc: true
layout: single
lang: de
schedule:
  - title: Einführung
    weekstart: "2024-10-14"
  - title: All-Pairs Shortest Paths
    weekstart: "2024-10-21"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-01-APSP.pdf)"
      - "E 9.1, 9.2, 9.5, 9.6, 9.8"
      - "[📽️](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week01-APSP.mp4)"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week01-APSP.pdf)"
  - title: Network Flow I
    subtitle: Ford-Fulkerson, max-flow min-cut, capacity scaling, Edmonds-Karp
    weekstart: "2024-10-28"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-02-Netzwerkfluss-I.pdf)"
      - "E 10 (oder KT 7.1, 7.2, 7.3)"
      - "[📽️1](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week02-NF1a.mp4)"
      - "[📽️2](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week02-NF1b.mp4)"
      - "[📽️3](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week02-NF1c.mp4)"
      - "[📽️4](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week02-NF1d.mp4)"
      - "[📽️5](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week02-NF1e.mp4)"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week02-NetworkFlowI.pdf)"
  - title: Network Flow II
    subtitle: applications, maximum bipartite matching, disjoint paths
    weekstart: "2024-11-04"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-03-Netzwerkfluss-II.pdf)"
      - "E 11 (oder KT 7.3, 7.5, 7.6)"
      - "[📽️1](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week03-NF-review.mp4)"
      - "[📽️2](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week03-NF-applications.mp4)"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week03-NetworkFlowII.pdf)"
  - title: Amortisierte Analyse von Datenstrukturen
    subtitle: Aggregationsmethode, Buchhaltungsmethode, Potentialmethode, Dynamische Tabellen, Stack mit MultiPop, Splay-Bäume
    weekstart: "2024-11-11"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-04-Amortisierte-Analyse.pdf)"
      - "CLRS 17.4"
      - "Ericksons Director's Cut, [Kapitel 9](https://jeffe.cs.illinois.edu/teaching/algorithms/notes/09-amortize.pdf) und [Kapitel 10.1, 10.5, 10.6](https://jeffe.cs.illinois.edu/teaching/algorithms/notes/10-scapegoat-splay.pdf)"
      - "[📽️1](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week04-a-aggregate.mp4)"
      - "[📽️2](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week04-b-accounting.mp4)"
      - "[📽️3](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week04-c-stack.mp4)"
      - "[📽️4](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week04-d-potential.mp4)"
      - "[📽️5](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week04-e-splay-trees.mp4)"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week04-Amortized.pdf)"
  - title: Randomisierte Algorithmen I
    subtitle: Contention resolution, Minimum cut
    weekstart: "2024-11-18"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-05-Randomisierte-Algorithmen-I.pdf)"
      - "KT 13, 13.1, 13.2, 13.12"
      - "[📽️ Grundlagen](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week05-a-probability.mp4) [13 min]"
      - "[📽️ Contention Resolution](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week05-b-contention-resolution.mp4) [19 min]"
      - "[📽️ Minimum Cut](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week05-c-minimum-cut.mp4) [24 min]"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week05-randomized-I.pdf)"
  - title: Randomisierte Algorithmen II
    subtitle: Selection, Quicksort
    weekstart: "2024-11-25"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-06-Randomisierte-Algorithmen-II.pdf)"
      - "KT 13.3, 13.5"
      - "[📽️ Erwartungswert](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week06-a-expectation.mp4) [23 min]"
      - "[📽️ Median und Select](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week06-b-quickselect.mp4) [13 min]"
      - "[📽️ Quicksort](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week06-c-quicksort.mp4) [10 min]"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week06-randomized-II.pdf)"
  - title: NP-Vollständigkeit I
    # subtitle: Sprachen, Polynomialzeitreduktionen, P, NP, CircuitSAT, 3SAT, Independent Set, Clique, Vertex-Cover
    weekstart: "2024-12-02"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-07-NP-Haerte-I.pdf)"
      - "E 12.1–12.9"
      - "[📽️ Motivation](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-a-Motivation.mp4) [8 min]"
      - "[📽️ CircuitSAT](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-b-CircuitSAT.mp4) [7 min]"
      - "[📽️ P versus NP](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-c-P-versus-NP.mp4) [10 min]"
      - "[📽️ NP-hardness and NP-completeness](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-d-NP-hardness.mp4) [7 min]"
      - "[📽️ SAT](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-e-SAT.mp4) [8 min]"
      - "[📽️ 3SAT](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-f-3SAT.mp4) [8 min]"
      - "[📽️ Maximum Independent Set](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-g-MaxIndSet.mp4) [9 min]"
      - "[📽️ Maximum Clique, Minimum Vertex-Cover](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week07-h-Clique-VC.mp4) [9 min]"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week07-NP-I.pdf)"
  - title: NP-Vollständigkeit II
    # subtitle: P, NP, NP-Vollständigkeit
    weekstart: "2024-12-09"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-08-NP-Haerte-II.pdf)"
      - "E 12.10–12.14"
      - "[📽️ Graphfärbung](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week08-a-Coloring.mp4) [13 min]"
      - "[📽️ Hamiltonische Kreise](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week08-b-DirectedHamiltonianCycle.mp4) [20 min]"
      - "[📽️ Teilmengensumme](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week08-c-SubsetSum.mp4) [19 min]"
      - "[Gekritzel](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week08-NP-II.pdf)"
  - title: Berechenbarkeit I
    # subtitle: Endliche Automaten, Turing-Maschinen, Nicht-Determinismus, starke Church-Turing Hypothese, Word-RAM
    weekstart: "2024-12-16"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-09-Turingmaschinen.pdf)"
      - "[Kapitel 6](https://jeffe.cs.illinois.edu/teaching/algorithms/models/06-turing-machines.pdf) in Ericksons [_Models of Computation_](https://jeffe.cs.illinois.edu/teaching/algorithms/#models)"
      - "[📽️ Turing-Maschine](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week09-a-tm-motivation_definition.mp4) [24 min]"
      - "[📽️ Entscheidbarkeit](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week09-b-entscheidbarkeit.mp4) [23 min]"
      - "[📽️ Berechenbarkeit](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week09-c-berechenbarkeit.mp4) [5 min]"
      - "[📽️ Semi-Entscheidbarkeit](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week09-d-semi-entscheidbarkeit.mp4) [10 min]"
      - "[📽️ Variationen der Turing-Maschine](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week09-e-tm-variationen.mp4) [18 min]"
      - "[📽️ Komplexität](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week09-f-tm-komplexität.mp4) [9 min]"
      - "[Gekritzel](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week09-Turingmaschinen.pdf)"
  - title: Berechenbarkeit II
    subtitle: Halteproblem, Satz von Rice
    weekstart: "2025-01-13"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-10-Berechenbarkeit.pdf)"
      - "[Kapitel 7](https://jeffe.cs.illinois.edu/teaching/algorithms/models/07-undecidable.pdf) in Ericksons [_Models of Computation_](https://jeffe.cs.illinois.edu/teaching/algorithms/#models)"
      - "[📽️ Entscheidbarkeit und Semientscheidbarkeit](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week10-a-eigenschaften_entscheidbarkeit.mp4) [10 min]"
      - "[📽️ Eine universelle Turingmaschine](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week10-b-universelle_turingmaschine.mp4) [19 min]"
      - "[📽️ Eine unentscheidbare Sprache](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week10-c-unentscheidbare_sprache.mp4) [5 min]"
      - "[📽️ Unentscheidbarkeit mittels Reduktion](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week10-d-reduktion_fuer_unentscheidbarkeit.mp4) [12 min]"
      - "[📽️ Der Satz von Rice](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week10-e-satz_von_rice.mp4) [17 min]"
      - "[Gekritzel](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week10-Unentscheidbarkeit.pdf)"

  - title: Lineare Programmierung I
    weekstart: "2025-01-20"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-12-Lineare-Programmierung-I.pdf)"
      - "[Notes I](http://jeffe.cs.illinois.edu/teaching/algorithms/notes/I-simplex.pdf) von Ericksons [Extended Lecture Notes](http://jeffe.cs.illinois.edu/teaching/algorithms/)"
      - "[Linear Programming I](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/LinearProgrammingI.pdf) von Kevin Wayne"
      - "[Linear Programming III](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/LinearProgrammingIII.pdf) von Kevin Wayne"
      - "[Linear Programming and Polyhedral Combinatorics](https://math.mit.edu/~goemans/18433S13/polyhedral.pdf) von Michel Goemans"
      - "[📽️ LP Definition](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week12-a-lp_definition.mp4) [12 min]"
      - "[📽️ Zulässige und optimale Lösungen](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week12-b-feasible_region_optimal_solutions.mp4) [22 min]"
      - "[📽️ LP Algorithmen](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week12-c-lp_algorithms.mp4) [17 min]"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week12-LP-I.pdf)"

  - title: Lineare Programmierung II
    weekstart: "2025-02-27"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-13-Lineare-Programmierung-II.pdf)"
      - "[Notes H](http://jeffe.cs.illinois.edu/teaching/algorithms/notes/H-lp.pdf) von Ericksons [Extended Lecture Notes](http://jeffe.cs.illinois.edu/teaching/algorithms/)"
      - "[Linear Programming II](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/LinearProgrammingII.pdf) von Kevin Wayne"
      - "[Linear Programming and Polyhedral Combinatorics](https://math.mit.edu/~goemans/18433S13/polyhedral.pdf) von Michel Goemans"
      - "[📽️ Primal und Dual LP](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week13-a-primal_dual_lp.mp4) [10 min]"
      - "[📽️ Dualität](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week13-b-duality_theorems.mp4) [20 min]  [⛴](https://en.wikipedia.org/wiki/USS_Yorktown_(CG-48)#Smart_ship_testbed)"
      - "[📽️ (M)(I)LP Komplexität](https://files.tcs.uni-frankfurt.de/algo2/vid/ALGO2-week13-c-milp_complexity.mp4) [20 min]"
      - "[Folien](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week13-LP-II.pdf)"

  - title: Algorithmen für NP-schwere Probleme
    subtitle: Approximationsalgorithmen für Vertex-Cover durch LP-Relaxierung, Randomisiertes Runden, Greedy; FPT-Algorithmus für Vertex-Cover durch Bounded Search Trees
    weekstart: "2025-02-03"
    links:
      - "[Übungsblatt](https://goethe-tcs.github.io/algo2-exercises/ALGO2-Blatt-11-Fortgeschrittene-Algorithmen.pdf)"
      - "[Notes J](http://jeffe.cs.illinois.edu/teaching/algorithms/notes/J-approx.pdf) von Ericksons [Extended Lecture Notes](http://jeffe.cs.illinois.edu/teaching/algorithms/)"
      - "KT 10.1"
      - "(ergänzend: **V** 12, 13.1, 1, 2; **KT** 11.4, 11.6; **CFKLMPPS** 3.1)"
      - "[📽️ Approximationsalgorithmen für Vertex-Cover](https://cloud.tcs.uni-frankfurt.de/s/mtiBdFHHTa6Loiy) [4 min]"
      - "[📽️ LP-Rundung, **E** J.6, J.2](https://cloud.tcs.uni-frankfurt.de/s/4knDibdeXNBAnA9) [15 min]"
      - "[📽️ Randomisierte LP-Rundung, **E** J.7](https://cloud.tcs.uni-frankfurt.de/s/3C5cGo3zQ2WWkws) [8 min]"
      - "[📽️ Gierige Algorithmen, **E** J.3, J.5](https://cloud.tcs.uni-frankfurt.de/s/wQznae6ABkSWz8k) [13 min]"
      - "[📽️ Übersicht](https://cloud.tcs.uni-frankfurt.de/s/zLjAoJbLGLZPwCA) [2 min]"
      - "[📽️ Approximationsalgorithmen für Load Balancing, **E** J.1](https://cloud.tcs.uni-frankfurt.de/s/tH664Y8e6rBs2r8) [24 min]"
      - "[📽️ Exakter Bounded Search Tree Algorithmus für Vertex-Cover, **KT** 10.1](https://cloud.tcs.uni-frankfurt.de/s/PBnkAapNWLZrB38) [14 min]"
      - "[**Gekritzel**](https://files.tcs.uni-frankfurt.de/algo2/ALGO2-week11-AlgorithmsForHardProblems.pdf)"
  - title: Abschluss
    weekstart: "2025-02-10"
---

## Organisatorisches

- **Erste Veranstaltung:** Dienstag, 15.10.2024, 8:30-9:45 Uhr, H VI (Hörsaaltrakt Bockenheim).
- **Termine.** Dienstag und Donnerstag, 8:30-9:45, H VI (Hörsaaltrakt Bockenheim).
- **Voraussetzungen.** Der Kurs baut auf [Algorithmen und Datenstrukturen 1](/algo1/) (ALGO1) auf.
- **Organisatorische und inhaltliche Fragen:** Die meisten Fragen sind vielleicht weiter unten bereits beantwortet? Ansonsten gerne eine E-Mail an die Kursleitung: [algo2-2024@dlist.uni-frankfurt.de](mailto:algo2-2024@dlist.uni-frankfurt.de) (nicht: dell@ oder moodle)
<!-- - **Anmeldung zu den Übungsgruppen:** Auf dem [Anmeldesystem AUGE](https://anmeldung.studiumdigitale.uni-frankfurt.de/auge/index.php?newCourse=&fachbereich=FB+12+Informatik+und+Mathematik&kurs=179)
- **Anmeldung in Moodle:** In [diesem Moodle-Kurs](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=3919). -->

<!-- <div class="border-goethe-800 dark:border-goethe-100 p-2 my-4 rounded-lg border-2 bg-goethe-100 dark:bg-goethe-800 italic">Note: While videos, lectures, and exercise sheets are in German, it is possible to follow this course in English. The textbooks are available in English, and the written exams will be available bilingually.</div> -->
<div class="alert italic">
    {{< svg-alert >}}
    <div>While videos, lectures, and exercise sheets are in German, it is possible to follow this course and ask questions in English. The textbooks are available in English, and the written exams are bilingual.</div>
</div>

## Vorlesungskonzept

Der Kurs findet als _Flipped Classroom_ statt, das heißt:

- **Vorbereitung**: Video der Woche, Buchkapitel und erste Übungen durcharbeiten.
- **„Plenum“** (Dienstag und Donnerstag, 8:15–9:30 in Hörsaal VI, mit allen Studierenden): Fragen & Antworten, Quizze, Kurzpräsentationen, Präsenzübungen, Minitests und Lösungsspaziergänge. _Diese Präsenzzeit findet ausschließlich im Hörsaal statt und wird nicht hybrid übertragen._
- **„Tutorium“** (in kleinen Gruppen): Individuelles Feedback. _Diese Präsenzzeit findet ausschließlich im Seminarraum statt und wird nicht hybrid übertragen._
- **Lernzentrum**: Das [Ingo Wegner-Lernzentrum](https://www.tinygu.de/lz-inf) hat flexible Öffnungszeiten und bietet fachliche Beratung zu den Lerninhalten von ALGO-2 an. Einfach ohne Anmeldung hineinschauen!

## Notenrelevante Übungsaufgaben

Während des Semesters werden Übungsaufgaben angeboten, die für deine Modulnote relevant sind:

- **20 Standardaufgaben**, die in regelmäßigen Minitests im Hörsaal und ohne Hilfsmittel überprüft werden. Jede Standardaufgabe wird im Semesterverlauf _dreimal_ angeboten. Du hast also mehrere Chancen, das zugehörige Lernziel zu erreichen.
- **10 Vertiefungsaufgaben**, an denen du knobeln kannst, und die du eigenständig aufschreiben und abgeben musst. Falls deine Abgabe nicht zufriedenstellend war, kannst du es beliebig oft neu versuchen. Allerdings kannst du jede Woche nur bis zu zwei Vertiefungsaufgaben abgeben (z.B. eine neue Abgabe und eine überarbeitete Abgabe). Nach dem 14. Februar 2025 ist keine Abgabe mehr möglich!

Jede abgegebene Lösung wird vom Vorlesungsteam mit _zufriedenstellend_ oder _nicht zufriedenstellend_ bewertet.
Um _zufriedenstellend_ zu erreichen, darf kein Zweifel daran bestehen, dass du das Lernziel erreicht hast (_zufriedenstellend_ entspricht also in etwa der Notenstufe _gut_).
Bei Vertiefungsaufgaben gibt es zusätzlich die Auszeichnung _exzellent_ für besonders gute Abgaben.

## Anforderungen an Abgaben

Deine Abgaben zu Vertiefungsaufgaben müssen folgende Anforderungen erfüllen, damit sie bewertet werden:

- **Dateiformat.** Verwende ein Textverarbeitungsprogramm, das mathematische Formeln korrekt setzen kann (LaTeX mit [diesem Template](https://github.com/goethe-tcs/note-template)). Reiche deine Abgabe als PDF-Datei auf Moodle ein. Abgaben, die ganz oder teilweise handschriftlich verfasst sind oder bei denen mathematische Formeln nicht korrekt gesetzt sind, werden nicht akzeptiert.
- **KI-Tools.** Es ist **nicht zulässig**, sich Lösungen ganz oder teilweise von großen Sprachmodellen generieren zu lassen (z.B. GPT, Gemini, Claude, Llama, etc.). Falls der Anschein besteht, dass du gegen diese Anforderung verstoßen hast, wird dies als Betrugsversuch betrachtet, führt zum Ausschluss aus der Veranstaltung und kann rechtliche Konsequenzen haben. *Es lohnt sich nicht, deine Karriere aufs Spiel zu setzen!* Explizit zulässig sind die Rechtschreibe- und Grammatikprüfung. Große Sprachmodelle sind zugelassen, um Fragen zu korrekter LaTeX-Syntax zu beantworten (z.B. "Wie schreibe ich eine Liste in LaTeX?" oder "Warum kompilieren die folgenden Zeilen LaTeX-Code nicht richtig?"), sowie allgemeine Fragen zum Vorlesungsmaterial ("Hilf mir, den Ford-Fulkerson Algorithmus zu verstehen." oder "Welche Aspekte sind wichtig, wenn ich einen Beweis verständlich aufschreiben möchte?").
- **Eigenständigkeit.** Du musst die Aufgaben eigenständig aufschreiben. Unter keinen Umständen ist es zulässig, deine schriftliche Lösung anderen direkt oder indirekt zu zeigen, oder Lösungen abzuschreiben, die von anderen Menschen oder Sprachmodellen generiert wurden, auch nicht in modifizierten Auszügen. Falls Plagiate entdeckt werden, führt dies für alle betroffenen Studierenden zum sofortigen Ausschluss aus der Veranstaltung und kann rechtliche Konsequenzen haben. **Betrügen ist gar nicht nötig**, da du beliebig viele Versuche hast, um dich zu verbessern. Außerdem sind die Abgaben nicht zum Bestehen notwendig.

## Berechnung der Modulnote

Um eine bestimmte Note in diesem Modul zu erreichen, musst du während des Semesters deinen Lernerfolg nachweisen und ein bestimmtes Paket an Aufgaben zufriedenstellend lösen.
Die Basisnote für das Modul berechnet sich wie folgt:

<table class="ring-accent ring-1 mx-auto">
  <thead class="bg-accent text-accent-content">
    <tr>
      <th class="p-2">Note</th>
      <th class="p-2">Mindestens erforderliche Leistungen</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-base text-base-content">
      <td class="p-2">sehr gut</td>
      <td class="p-2">
        <ul>
          <li><strong>19</strong> Standardaufgaben in Minitests</li>
          <li><strong>10</strong> Vertiefungsaufgaben, davon <strong>5</strong> <em>exzellent</em></li>
          <li><em>gut</em> in der Klausur</li>
        </ul>
      </td>
    </tr>
    <tr class="bg-base-200 text-base-content">
      <td class="p-2">gut</td>
      <td class="p-2">
        <ul>
          <li><strong>17</strong> Standardaufgaben in Minitests</li>
          <li><strong>7</strong> Vertiefungsaufgaben, davon <strong>3</strong> <em>exzellent</em></li>
          <li><em>befriedigend</em> in der Klausur</li>
        </ul>
      </td>
    </tr>
    <tr class="bg-base text-base-content">
      <td class="p-2">befriedigend</td>
      <td class="p-2">
        <ul>
          <li><strong>15</strong> Standardaufgaben in Minitests</li>
          <li><strong>5</strong> Vertiefungsaufgaben</li>
          <li><em>ausreichend</em> in der Klausur</li>
        </ul>
      </td>
    </tr>
    <tr class="bg-base-200 text-base-content">
      <td class="p-2">ausreichend</td>
      <td class="p-2">
        <ul>
          <li><em>ausreichend</em> in der Klausur</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Hinweise zur Notengebung

- Deine Endnote kann nie schlechter sein als deine Note in der Abschlussklausur.
- **Alle Angaben zur Notengebung sind ohne Gewähr und können sich noch in jede Richtung ändern.**

## Klausur

- **Anmeldung:** Die Anmeldung zu den Klausuren erfolgt ausschließlich über QIS.
- **Erstklausur:** ??.??.2025
- **Zweitklausur:** ??.??.2025
- **Altklausuren.** [Dieses Verzeichnis](https://files.tcs.uni-frankfurt.de/algo2/exams/) enthält alle ALGO2-Klausuren samt Lösungsvorschlägen seitdem das Modul B-ALGO-2 in der aktuellen Form existiert.

<div class="alert italic">
    {{< svg-alert >}}
    <div>If and only if you want to take the exam as an <b>Erasmus</b> student or a <b>PhD</b> student, you need to register two weeks before the exam at <a href="mailto:algo2-2024@dlist.uni-frankfurt.de">algo2-2024@dlist.uni-frankfurt.de</a>.</div>
</div>

## Wochenplan

Die Veranstaltung dauert 15 Wochen:

{{< weekplan >}}

## Literatur

- **E**: _Algorithms_ von Jeff Erickson. [[pdf](https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf) · [web](https://jeffe.cs.illinois.edu/teaching/algorithms/)]. _(Ein wunderschönes Buch.)_
- **KT**: _Algorithm Design_ von Jon Kleinberg und Éva Tardos. [[pdf](https://github.com/davie890/CS102-Algorithm-Analysis/raw/master/Algorithm%20Design%20by%20Jon%20Kleinberg%2C%20Eva%20Tardos.pdf) · [e-UB](https://ubffm.hds.hebis.de/Record/HEB486267229) · [UB](https://ubffm.hds.hebis.de/Record/HEB129608459)]. _(Ein modernes Buch, das die verschiedenen Entwurfsmethoden in den Mittelpunkt stellt, anstatt einzelner Probleme.)_
- **CLRS**: _Algorithmen &ndash; Eine Einführung_ (4. Auflage) von Cormen, Leiserson, Rivest, Stein. [[Volltext als E-Book (deutsch)](https://ubffm.hds.hebis.de/Record/HEB45339454X) · [Full text as E-Book (english)](https://ubffm.hds.hebis.de/Record/HEB500903913)]. _(Das Standardwerk.)_
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
- Tutor:innen

Die Kursleitung ist nur über [algo2-2024@dlist.uni-frankfurt.de](mailto:algo2-2024@dlist.uni-frankfurt.de) erreichbar.

## Ähnliche Kurse

- [Algorithms and Data Structures II](http://www2.imm.dtu.dk/courses/02110/2021/) von Inge Li Gørtz (DTU Copenhagen).
- [Algorithm Design](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/) von Kevin Wayne (Princeton University).
- [Algorithms and Models of Computation](https://courses.engr.illinois.edu/cs374/fa2021/A/) von Jeff Erickson (University of Illinois)
- [Algorithms](https://courses.engr.illinois.edu/cs473/sp2020/) von Jeff Erickson (University of Illinois)
- Eine vorherige Iteration von ALGO2 wurde im [WiSe-2020](https://ae.cs.uni-frankfurt.de/algo220) (Prof. Meyer) angeboten, wofür Videos aus Präcoronazeiten zusammengeschnitten wurden.
