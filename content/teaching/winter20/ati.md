---
title: "Aktuelle Themen der Theoretischen Informatik 1+2"
---
### "Feinkörnige Komplexität und Parameterisierte Algorithmen"
Diese Vorlesung behandelt aktuelle Forschungsthemen aus der theoretischen Informatik und richtet sich an Student:innen, die Algorithmen und theoretische Informatik gut finden.
Es werden etwa hälftig algorithmische und komplexitätstheoretische Fragen und Ergebnisse abgedeckt.
Vorrausgesetzt werden Grundbegriffe aus Algorithmen und Datenstrukturen sowie Grundwissen in diskreter Mathematik. Komplexitätstheorie und algorithmische Vertiefungsvorlesungen sind von Vorteil, werden aber nicht formal vorausgesetzt.

### Vorlesungsmaterial

In **Teil 1** folgen wir dem Buch "Parameterized Algorithms" [[pdf](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf)].
Hier ist der (vorläufige) Plan:

- Woche 1 (Nov 2-6):
  - [[video](/teaching/winter20/ati/01-VertexCover.mp4)] [Kapitel 1, 2.2.1, 3.1, 3.2] Vertex-Cover: Reduktionsregeln, \(O(k^2)\)-Kernelisierung, einfache Branching-Algorithmen 
  - [[video](/teaching/winter20/ati/02-Definitionen.mp4)] [Kapitel 1, 2.1] Grundlegende Definitionen, Äquivalenz von Kernelisierung und FPT
  - [[video](/teaching/winter20/ati/03-Kernels.mp4)] [Kapitel 2.2.3, 2.3, 2.5] Kernelisierung von Edge Clique Cover, Crown Reduktion für Vertex-Cover, Kernels via Lineare Programmierung
  - [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment01.pdf)] Erstes Übungsblatt (bitte ignorieren Sie organisatorische Anmerkungen auf dem Blatt, es stammt aus einer alten Iteration). Sie werden die Lösungen nächste Woche in der Übungsgruppe vorstellen.

- Woche 2 (Nov 9-13):
  - [[video](/teaching/winter20/ati/04-BoundedSearchTrees.mp4)] [3.1, 3.4] Bounded Search Trees (Vertex Cover Above LP)
  - [[video](/teaching/winter20/ati/05-IterativeCompression.mp4)] [4.1, 4.3.1] Iterative Kompression (Vertex Cover, Feedback Vertex Set)
  - [[video](/teaching/winter20/ati/06-ColorCoding.mp4)] [5.1, 5.2] Randomisierte Algorithmen (Feedback Vertex Set, Color-coding)
  - Übungen: Aufgaben 2.1, 2.2, 2.3 von Blatt 2 [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment02.pdf)] und Aufgaben 3.1, 3.3, 3.4 von Blatt 3 [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment03.pdf)]. Die Lösungen werden am 20.11. besprochen.

- Woche 3 (Nov 16-20):
  - [[video](/teaching/winter20/ati/Woche03-intro.mp4) 6 min] Überblick über die Themen der Woche
  - [[video](/teaching/winter20/ati/07-Trees-NarrowGrids.mp4) 39 min] [7.1] Dynamische Programmierung (auf Bäumen, schmalen Gittern)
  - [[video](/teaching/winter20/ati/08-Pfadweite.mp4) 44 min] [7.2] Pfadweite (Definition, Separationseigenschaft, nette Pfadzerlegungen)
  - [[video](/teaching/winter20/ati/09-Baumzerlegung.mp4) 19 min] [7.2] Baumweite (Definition, Separationseigenschaft, nette Baumzerlegungen)
  - [[video](/teaching/winter20/ati/10-WIS-DP-tw.mp4) 35 min] [7.3.1] Dynamische Programmierung auf Graphen beschränkter Baumweite
  - [[video](/teaching/winter20/ati/11-Courcelle.mp4) 35 min] [7.4] Satz von Courcelle
  - Alle Übungsaufgaben auf "Problem set 5" [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment05.pdf)]. Die Lösungen werden erst nächste Woche besprochen.
  - Übungsgruppe am **20.11.**: Wir besprechen die Lösungen der Aufgaben aus **Wochen 1 und 2**.

- Woche 4 (Nov 23-27):
  - [[video](/teaching/winter20/ati/Woche04-0-Intro.mp4) 6 min] Überblick über die Themen der Woche
  - [[video](/teaching/winter20/ati/Woche04-2-SeparatorenLemmas.mp4) 45 min] [7.6] Berechnung von Baumweite, Lemmas zu Balancierte Separatoren
  - [[video](/teaching/winter20/ati/Woche04-3-Korollar-7.21.mp4) 12 min] [7.6] Korollar 7.21
  - [[video](/teaching/winter20/ati/Woche04-4-BaumweiteAlgorithmus.mp4) 52 min] [7.6] Baumweite berechnen: Algorithmus und Korrektheitsbeweis
  - [[video](/teaching/winter20/ati/Woche04-1-CopsRobber.mp4) 11 min] Cops and Robber [7.5]
  - [[video](/teaching/winter20/ati/Woche04-5-Graphminoren.mp4) 26 min] Graphminoren [6.3], Ausgeschlossene Minoren und Gitter [7.7]
  - [[video](/teaching/winter20/ati/Woche04-6-WinWin.mp4) 14 min] Win/Win-Algorithmen und Bidimensionalität [7.7]
  - Übungsaufgaben 7.35, 7.37, 7.40, 7.54 im Buch. Diese Aufgaben werden erst nächste Woche besprochen.
  - Übungsgruppe am **27.11.**: Wir besprechen die Lösungen der Aufgaben aus **Woche 3**.

- Woche 5 (Nov 30 - Dec 4): Algebraische Methoden
  - [[video](/teaching/winter20/ati/Woche05-0-Intro.mp4) 3 min] Überblick über die Themen der Woche
  - [[video](/teaching/winter20/ati/Woche05-1-InclusionExclusion.mp4) 16 min] Methode: Das Prinzip von Inklusion und Exklusion [10.1]
  - [[video](/teaching/winter20/ati/Woche05-2-HamCycles.mp4) 20 min] Beispiel: Hamiltonkreise zählen mit Inklusion-Exklusion [10.1.1]
  - [[video](/teaching/winter20/ati/Woche05-3-SteinerTrees.mp4) 41 min] Beispiel: Steinerbäume finden mit Inklusion-Exklusion [10.1.2]
  - [[video](/teaching/winter20/ati/Woche05-4-FastZetaTransform.mp4) 27 min] Methode: Schnelle Möbius Transformation [10.2]
  - [[video](/teaching/winter20/ati/Woche05-5-SubsetConvolution.mp4) 29 min] Methode: Schnelle Teilmengenfaltung, echte Färbungen zählen [10.3, 10.3.1]
  - Übungsaufgaben: Aufgaben 10.6 und 10.9 im Buch, für Mutige auch Problem 7.4 auf diesem Übungsblatt [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment07.pdf)].
  - Übungsgruppe am **4.12.**.

- Woche 6 (Dec 7-11):
  - [todo] Überblick über die Themen der Woche
  - [[video](/teaching/winter20/ati/Woche06-1-kPath.mp4) 84 min] \(k\)-Pfade in Zeit \(O(2^k)\) finden [10.4]
  - Übungsaufgabe: 10.19 im Buch.
  - Übungsgruppe am **11.12.**: Wir besprechen die Lösungen der Blattaufgabe 3.4 aus **Woche 2**, Blattaufgabe 5.4 aus **Woche 3**, und die Buchaufgaben der **Woche 4**.

- Woche 7 (Dec 14-18): Fixed-Parameter Intractability
  - [[video](/teaching/winter20/ati/Woche07-1-Reduktionen.mp4) 21 min] Parameterized reductions 13.1
  - [[video](/teaching/winter20/ati/Woche07-2-Clique-IndSet-VertexCover.mp4) 12 min] Clique, Independent Set, Vertex Cover 13.1
  - [[video](/teaching/winter20/ati/Woche07-3-MulticoloredClique-and-friends.mp4) 37 min] Multicolored Clique and Friends 13.2
  - [[video](/teaching/winter20/ati/Woche07-4-DomSet-and-friends.mp4) 15 min] Dominating Set and Friends 13.2
  - [[video](/teaching/winter20/ati/Woche07-5-W-hierarchy.mp4) 24 min] W-Hierarchy 13.3
  - Übungsaufgaben: 13.1, 13.2, 13.23
  - Übungsgruppe am **18.12.**: Wir besprechen die Lösungen der Aufgaben aus **Woche 5** und **Woche 6**.

In **Teil 2** folgen wir in wesentlichen Teilen der Vorlesung von Bringmann/Künnemann (henceforth refered to as BK).

- Woche 8 & 9 (Jan 18-29): Introduction to Fine-grained complexity
  - [[video](/teaching/winter20/ati/Woche08-1-Intro.mp4) 5 min] Introduction
  - [[video](/teaching/winter20/ati/Woche08-2-Schoening.mp4) 45 min] [[lecture notes](/teaching/winter20/ati/schoening.pdf)] Schoening's Algorithm for k-CNF-SAT
  - [[video](/teaching/winter20/ati/Woche08-3-SETH.mp4) 16 min] Strong Exponential Time Hypothesis (SETH)
  - [[video](/teaching/winter20/ati/Woche08-4-OV.mp4) 14 min] The Orthogonal Vector Problem
  - [[video](/teaching/winter20/ati/Woche08-5-CNFSAT-to-OV.mp4) 25 min]: **new** Reduction from CNF-SAT to OV
  - please read [BK, chapter 1](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/lec1.pdf) and [BK, chapter 2](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/lec2.pdf)
  - Exercises: Exercises 1 and 2a from [ex00.pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/ex00.pdf) and Exercises 1, 2b, 4 from [ex01.pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/ex01.pdf)
  - Übungsgruppe am **22.01.** und **28.01.**: Wir besprechen Übungsaufgaben und Fragen.

- Woche 10 (Feb 1-5): The Polynomial Method 
  - [[video](/teaching/winter20/ati/Woche10-1-Ziel.mp4) 19 min] Ziel: Subquadratischer Algorithmus für OV wenn \(d=O(\log n)\).
  - [[video](/teaching/winter20/ati/Woche10-2-MatrixMult.mp4) 10 min] Schnelle Multiplikation von Rechtecksmatrizen
  - [[video](/teaching/winter20/ati/Woche10-3-MultivariatePolynomialEvaluation.mp4) 20 min] Schnelle Evaluation von Multivariaten Polynomen
  - [[video](/teaching/winter20/ati/Woche10-4-Conversion-to-Polynomial.mp4) 10 min] Boolsche Formel für OV wird übersetzt in Arithmetische Formel
  - [[video](/teaching/winter20/ati/Woche10-5-RazborovSmolensky.mp4) 37 min] Probabilistische Polynome, Satz von Razborov und Smolensky
  - [[video](/teaching/winter20/ati/Woche10-6-ProbPolyOV.mp4) 19 min] Probabilistisches Polynom für OV
  - [[video](/teaching/winter20/ati/Woche10-7-WrapUp.mp4) 28 min] Zusammenfassung, Gesamtalgorithmus, Korrektheit, Laufzeit
  - please read [BK, chapter 4](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/lec4.pdf)
  - Exercises: Exercise 1 and 2 from [ex02.pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/ex02.pdf)
  - Übungsgruppe am **03.02.** um 12:30: Wir besprechen Übungsaufgaben und Fragen.
  - Übungsgruppe am **05.02.**: Wir besprechen Übungsaufgaben und Fragen.

- Woche 11 (Feb 8-12): The Polynomial Method for APSP
  - please read [BK, chapter 5](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/lec5.pdf)
  - Exercises: Exercise 3 and 5 from [ex03.pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/summer19/finegrained/ex03.pdf)
  - Übungsgruppe am **11.02.**: Wir besprechen Übungsaufgaben und Fragen.

- Woche 12 (Feb 15-19): Review of the semester
  - Zwei Videositzungen (je 1h, Termin wird noch gefunden), in denen wir Themen des Semesters wiederholen:
    - Parameterized algorithms
    - Fine-grained complexity
  - Übungsgruppe am **18.02.**: Wir besprechen noch offene Übungsaufgaben und Fragen.


### Organisation

Um sich anzumelden und das Zoom-Passwort zu erhalten, tragen Sie sich bitte hier ein (falls Sie sich bereits per Email angemeldet haben, sollten Sie das Formular nicht benutzen):
<form action='https://api.tcs.uni-frankfurt.de/register' method='POST'>
    Anrede:
    <select name='anrede'>
      <option value='Frau'>Frau</option>
      <option value='Herr'>Herr</option>
      <option value='Divers'>Divers</option>
    </select>
    <br>
    Vorname: <input name='vorname'>
    <br>
    Nachname: <input name='nachname'>
    <br>
    Matrikelnummer: <input name='mtknr'>
    <br>
    HRZ-Emailadresse: <input name='mail'>
    <br>
    <input type='submit'>
</form>

**Weitere Details:**

- Für welche Module Sie diese Veranstaltung einbringen können, können Sie im [qis](https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=301071&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung) nachlesen.
- Die **Vorlesungen** finden online statt. Der Termin ist Di-Mi 14-16.
- Die **Übungen** finden Fr 10-12 online statt. Jede Woche gibt es Übungen, deren Lösungen in der Übungsgruppe besprochen werden.
- Die **mündliche Prüfung** findet am 25.02.2021 (+/- ein Tag) statt, Termine werden einzeln vereinbart.
- **Zeitaufwand**: 10 ECTS mit je 25h = 250h. Mit 50 Stunden Klausurvorbereitung landen wir bei 200h/14 = 14h pro Woche. Davon sind 4h Vorlesung, 2h Übungsgruppe und 8h Übungsaufgaben+Vorlesungsnachbereitung.

### Inhalt

In dieser Vorlesung geht es um schnelle Algorithmen für "schwere" Berechnungsprobleme und immer auch um die Frage, ob noch schnellere Algorithmen möglich sind.
Der Ausgangspunkt ist die Beobachtung, dass NP-Vollständigkeit und die Klassifikation von Problemen in Polynomialzeit und NP-schwer oft zu grobkörnig ist, um genaue Aussagen über die bestmöglich Laufzeit zu erzielen.

Wenn ein Algorithmus in Zeit \(O(n^3)\) läuft, ist dennoch von höchstem Interesse, ob es nicht einen cleveren und noch unbekannten Algorithmus geben könnte, der nur Zeit \(O(n^{2.99})\) oder \(O(n)\) braucht.
Und nur weil ein Problem NP-schwer ist und damit keinen Polynomialzeitalgorithmus hat, heißt das noch lange nicht, dass man das Problem nicht gelöst haben möchte. Daher ist die Frage interessant, wie schnell man das Problem denn nun lösen kann: Vielleicht in Zeit \(O(n^n)\), \(O(2^n)\) oder gar \(O(1.3^k n)\) wo \(k\) ein weiterer Parameter der Eingabe ist?

Dieser Kurs vermittelt spannende algorithmische Techniken, um die Komplexität von NP-schweren und Polynomialzeitproblemen genauer zu analysieren.
Die Übungen bilden einen wichtigen Teil der Veranstaltung: Darin werden Sie algorithmische Techniken selbständig anwenden und auch Komplexitätsannahmen benutzen, um zu zeigen, dass bestimmte Probleme keine schnelleren Algorithmen zulassen.


### Lernziele

Nach der Veranstaltung kann der:die Student:in

- verschiedene Komplexitätsannahmen aus dem Gebiet der parametrisierten und feinkörnigen Komplexität nennen und miteinander vergleichen,
- wichtige Ergebnisse, Algorithmen und Beweistechniken aus dem Gebiet reproduzieren und auf ähnliche Probleme übertragen,
- die Möglichkeiten und Grenzen der Methoden des Gebiets einschätzen.

### Literatur und Links

- Cygan et al. "Parameterized Algorithms" [[preprint pdf](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf) | [ISBN 978-3-319-21274-6](https://dblp.org/rec/html/books/sp/CyganFKLMPPS15)].
- Eine vorherige Iteration dieses Kurses: [Multivariate Algorithmics](https://bit.ly/MulAlg18) (2018).
- Vorlesungsskript der Vorlesung von Bringmann and Künnemann an der Universität des Saarlandes [[url](https://www.mpi-inf.mpg.de/departments/algorithms-complexity/teaching/summer19/fine-complexity/)]
- Diverse wissenschaftliche Publikationen aus dem Gebiet.

Weitere Literatur:

- Flum and Grohe "[Parameterized Complexity Theory](https://www.springer.com/de/book/9783540299523)"
- Downey and Fellows "[Fundamentals of Parameterized Complexity](https://www.springer.com/de/book/9781447155584)"
- [Parameterized complexity course](https://www.mpi-inf.mpg.de/departments/algorithms-complexity/teaching/summer20/parameterized-algorithms) von Dániel Marx und Pranabendu Misra. (Mit Videos und Folien)