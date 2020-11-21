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

- Woche 1:
  - [[video](/teaching/winter20/ati/01-VertexCover.mp4)] [Kapitel 1, 2.2.1, 3.1, 3.2] Vertex-Cover: Reduktionsregeln, \(O(k^2)\)-Kernelisierung, einfache Branching-Algorithmen 
  - [[video](/teaching/winter20/ati/02-Definitionen.mp4)] [Kapitel 1, 2.1] Grundlegende Definitionen, Äquivalenz von Kernelisierung und FPT
  - [[video](/teaching/winter20/ati/03-Kernels.mp4)] [Kapitel 2.2.3, 2.3, 2.5] Kernelisierung von Edge Clique Cover, Crown Reduktion für Vertex-Cover, Kernels via Lineare Programmierung
  - [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment01.pdf)] Erstes Übungsblatt (bitte ignorieren Sie organisatorische Anmerkungen auf dem Blatt, es stammt aus einer alten Iteration). Sie werden die Lösungen nächste Woche in der Übungsgruppe vorstellen.

- Woche 2:
  - [[video](/teaching/winter20/ati/04-BoundedSearchTrees.mp4)] [3.1, 3.4] Bounded Search Trees (Vertex Cover Above LP)
  - [[video](/teaching/winter20/ati/05-IterativeCompression.mp4)] [4.1, 4.3.1] Iterative Kompression (Vertex Cover, Feedback Vertex Set)
  - [[video](/teaching/winter20/ati/06-ColorCoding.mp4)] [5.1, 5.2] Randomisierte Algorithmen (Feedback Vertex Set, Color-coding)
  - Übungen: Aufgaben 2.1, 2.2, 2.3 von Blatt 2 [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment02.pdf)] und Aufgaben 3.1, 3.3, 3.5 von Blatt 3 [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment03.pdf)]. Die Lösungen werden am 20.11. besprochen.

- Woche 3:
  - [[video](/teaching/winter20/ati/Woche03-intro.mp4) 6 min] Überblick über die Themen der Woche
  - [[video](/teaching/winter20/ati/07-Trees-NarrowGrids.mp4) 39 min] [7.1] Dynamische Programmierung (auf Bäumen, schmalen Gittern)
  - [[video](/teaching/winter20/ati/08-Pfadweite.mp4) 44 min] [7.2] Pfadweite (Definition, Separationseigenschaft, nette Pfadzerlegungen)
  - [[video](/teaching/winter20/ati/09-Baumzerlegung.mp4) 19 min] [7.2] Baumweite (Definition, Separationseigenschaft, nette Baumzerlegungen)
  - [[video](/teaching/winter20/ati/10-WIS-DP-tw.mp4) 35 min] [7.3.1] Dynamische Programmierung auf Graphen beschränkter Baumweite
  - [[video](/teaching/winter20/ati/11-Courcelle.mp4) 35 min] [7.4] Satz von Courcelle
  - Übungsgruppe:
    - Die Aufgaben zu den Themen dieser Woche sind auf "Problem set 5" [[pdf](https://www.mpi-inf.mpg.de/fileadmin/inf/d1/teaching/winter18/MultivariateAlgorithmics/Assignment05.pdf)]. Die Lösungen werden am 27.11. besprochen.
    - In der Übungsgruppe am 20.11. besprechen werden wir die Übungsaufgaben der Wochen 1 und 2!

- Woche 4:
  - [[video](/teaching/winter20/ati/Woche04-0-Intro.mp4) 6 min] Intro
  - [[video](/teaching/winter20/ati/Woche04-2-SeparatorenLemmas.mp4) 45 min] [7.6] Berechnung von Baumweite, Lemmas zu Balancierte Separatoren
  - [[video](/teaching/winter20/ati/Woche04-3-Korollar-7.21.mp4) 12 min] [7.6] Korollar 7.21
  - [[video](/teaching/winter20/ati/Woche04-4-BaumweiteAlgorithmus.mp4) 52 min] [7.6] Baumweite berechnen: Algorithmus und Korrektheitsbeweis
  - [[video](/teaching/winter20/ati/Woche04-1-CopsRobber.mp4) 11 min] Cops and Robber [7.5]
  - [[video](/teaching/winter20/ati/Woche04-5-Graphminoren.mp4) 26 min] Graphminoren [6.3], Ausgeschlossene Minoren und Gitter [7.7]
  - [[video](/teaching/winter20/ati/Woche04-6-WinWin.mp4) 14 min] Win/Win-Algorithmen und Bidimensionalität [7.7]

- Woche 5:
  - Algebraic Methods (Inclusion-Exclusion, Fast Möbius Transform, Fast Subset Convolution, Counting proper colorings)	[10.1.1, 10.2, 10.3, 10.3.1]
  - Fast Subset Convolution (Counting Perfect Matchings), Cut & Count (Steiner Tree)	[11.1.1, 11.2.1]
  - Extensor-coding [Sec. 1.2-3.3 von BDH18]

- Woche 6:
  - Cuts and Separators (Minimum Cuts, Important Cuts, Edge Multiway Cut)	[8.1, 8.2, 8.3]
  - Cuts and Separators (Bounding the number of important cuts, Steiner Tree) [8.2, 10.1.2]

- Woche 7:
  - Fixed-Parameter Intractability (Parameterized reductions, W-Hierarchy)	13.1, 13.2, 13.3
  - Hardness of Kernelization	15.1.1, 15.1.2

- Weitere mögliche Themen:
  - FPT in P (Maximum Matching by solution size, Diameter by vertex cover number)	Sec. 5 of [GMN15], Sec. A of [BHM18]
  - Representative Sets (Long Directed Cycles)	12.3, 12.3.5
  - ETH lower bounds (Definition of ETH/SETH, Sparsification Lemma, Lower bounds for 3-Coloring, Clique, Odd Set)	14.1, 14.2, 14.3.1, 14.4, 13.6.3
  - (S)ETH lower bounds (Lower bounds for Grid Tiling, Unit Disk Independent Set, Dominating Set)	14.4.1, 14.5.3

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
- Die **Übungen** finden Fr 10-12 online statt. Alle 1-2 Wochen gibt es ein Übungsblatt, das in den Übungen besprochen wird.
- Die **Klausur** findet am Ende des Semesters statt und wird je nach Zahl der Teilnehmer:innen mündlich oder schriftlich sein.
- **Zeitaufwand**: 10 ECTS mit je 25h = 250h. Mit 50 Stunden Klausurvorbereitung landen wir bei 200h/14 = 14h pro Woche. Davon sind 4h Vorlesung, 2h Übungsgruppe und 8h Übungsaufgaben.

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