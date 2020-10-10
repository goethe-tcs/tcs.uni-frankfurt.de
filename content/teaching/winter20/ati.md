---
title: "Aktuelle Themen der Theoretischen Informatik 1+2"
---
### "Feinkörnige Komplexität und Parameterisierte Algorithmen"
Diese Vorlesung behandelt aktuelle Forschungsthemen aus der theoretischen Informatik und richtet sich an Student:innen, die Algorithmen und theoretische Informatik gut finden.
Es werden etwa hälftig algorithmische und komplexitätstheoretische Fragen und Ergebnisse abgedeckt.
Vorrausgesetzt werden Grundbegriffe aus Algorithmen und Datenstrukturen sowie Grundwissen in diskreter Mathematik. Komplexitätstheorie und algorithmische Vertiefungsvorlesungen sind von Vorteil, werden aber nicht formal vorausgesetzt.


### Organisation

- Die Veranstaltung (4+2) füllt das **Modul** Aktuelle Themen der Theoretischen Informatik aus. [[qis](https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=301071&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung)]
- Die **Vorlesungen** finden je nach Zahl der Teilnehmer:innen und Coronalage im Hörsaal, online, oder offline statt. Der Termin ist Di-Mi 14-16
- Die **Übungen** finden Fr 10-12 statt. Alle 1-2 Wochen gibt es ein Übungsblatt, das in den Übungen besprochen wird.
- Die **Klausur** findet am Ende des Semesters statt und wird je nach Zahl der Teilnehmer:innen mündlich oder schriftlich sein.


### Inhalt

In dieser Vorlesung geht es um schnelle Algorithmen für "schwere" Berechnungsprobleme und immer auch um die Frage, ob noch schnellere Algorithmen möglich sind.
Der Ausgangspunkt ist die Beobachtung, dass NP-Vollständigkeit und die Klassifikation von Problemen in Polynomialzeit und NP-schwer oft zu grobkörnig ist, um genaue Aussagen über die bestmöglich Laufzeit zu erzielen.

Wenn ein Algorithmus in Zeit \\(O(n^3)\\) läuft, ist dennoch von höchstem Interesse, ob es nicht einen cleveren und noch unbekannten Algorithmus geben könnte, der nur Zeit \\(O(n^{2.99})\\) oder \\(O(n)\\) braucht.
Und nur weil ein Problem NP-schwer ist und damit keinen Polynomialzeitalgorithmus hat, heißt das noch lange nicht, dass man das Problem nicht gelöst haben möchte. Daher ist die Frage interessant, wie schnell man das Problem denn nun lösen kann: Vielleicht in Zeit \\(O(n^n)\\), \\(O(2^n)\\) oder gar \\(O(1.3^k n)\\) wo \\(k\\) ein weiterer Parameter der Eingabe ist?

Dieser Kurs vermittelt spannende algorithmische Techniken, um die Komplexität von NP-schweren und Polynomialzeitproblemen genauer zu analysieren.
Die Übungen bilden einen wichtigen Teil der Veranstaltung: Darin werden Sie algorithmische Techniken selbständig anwenden und auch Komplexitätsannahmen benutzen, um zu zeigen, dass bestimmte Probleme keine schnelleren Algorithmen zulassen.


### Lernziele

Nach der Veranstaltung kann der:die Student:in

- verschiedene Komplexitätsannahmen aus dem Gebiet der parametrisierten und feinkörnigen Komplexität nennen und miteinander vergleichen,
- wichtige Ergebnisse, Algorithmen und Beweistechniken aus dem Gebiet reproduzieren und auf ähnliche Probleme übertragen,
- die Möglichkeiten und Grenzen der Methoden des Gebiets einschätzen.

### Literatur

- Cygan et al. "Parameterized Algorithms" [[preprint pdf](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf) | [ISBN 978-3-319-21274-6](https://dblp.org/rec/html/books/sp/CyganFKLMPPS15)].
- Vorlesungsskript der Vorlesung von Bringmann and Künnemann an der Universität des Saarlandes [[url](https://www.mpi-inf.mpg.de/departments/algorithms-complexity/teaching/summer19/fine-complexity/)]
- Diverse wissenschaftliche Publikationen aus dem Gebiet.
