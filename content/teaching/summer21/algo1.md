---
title: "Algorithmen und Datenstrukturen 1"
shortname: "B-ALGO1"
semester: "SoSe-2021"
qis: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=313037&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
toc: yes
---

## Allgemeine Infos

- Der Kurs findet _nur synchron_ und _vollständig online_ statt.
- **Kernzeiten: Dienstag und Donnerstag 8-10.**
- Nebenzeiten: mindestens ein weiterer Termin, wahrscheinlich Freitag 14-16 und Montag 14-16. Vielleicht auch noch Mittwoch 14-16. (Teilnahme zu mindestens einem Termin ist für Sie von Vorteil.)
- Die Anmeldung wird bald freigeschaltet, bitte schreiben Sie uns keine Emails zu diesem Thema.

### Dozent
- [Holger Dell](https://tcs.uni-frankfurt.de/~dell/) (Sprechstunde ohne Anmeldung: Montag 14-16 Uhr im [BBB](https://bbb.uni-frankfurt.de/b/hol-ncl-30h-kvo))

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

### Voraussetzungen

Sie brauchen für den Kurs Basisfähigkeiten im Programmieren sowie grundlegende mathematische Fähigkeiten. Mit [diesem Selbsttest](uebung00.pdf) können Sie vorab Ihre Fähigkeiten prüfen und auffrischen.


## Material
- **CLRS**: _Algorithmen &ndash; Eine Einführung_ (4. Auflage) von Cormen, Leiserson, Rivest, Stein. [[Volltext als eBook](https://hds.hebis.de/ubffm/Record/HEB45339454X)]

## Wochenplan
Die erste Vorlesung findet auf Zoom statt, am 13.4.2021 pünktlich um 08:15.

Die Veranstaltung dauert 14 Wochen, die Pläne sind vorläufig:

1. **Einführung und Peaks**\
CLRS Kapitel 1 · [Plan](uebung01.pdf) · Video · [Folien](introduction.pdf)<br>

1. **Suchen und Sortieren**\
CLRS Kapitel 2 · [Plan](uebung02.pdf) · Video · [Folien](searchingandsorting.pdf)<br>

1. **Analyse von Algorithmen, Asymptotische Notation, Rekursionsgleichungen, Mastertheorem**\
CLRS Kapitel 3, 4.3-4.5 · Plan · Video · [Folien](analysis.pdf)<br>

1. **Stacks, Queues, Verkette Listen, Bäume**\
CLRS Einleitung von Teil III und Kapitel 10<br>

1. **Wörterbücher, Hashing**\
CLRS Kapitel 11 ohne 11.5<br>

1. **Priority Queues, Heaps**\
CLRS Kapitel 6 + Appendix B.5<br>

1. **Traversierung, Binäre Suchbäume, Rot-Schwarz-Bäume**\
CLRS Kapitel 12-13 ohne 12.4<br>

1. **Disjunkte Mengen, Union-Find**\
CLRS Kapitel 21 ohne 21.4 (oder [Algorithms 4ed. Kapitel 1.5](http://www2.compute.dtu.dk/courses/02105/2021/materials/Algs4edUnionFind.pdf))<br>

1. **Darstellung von Gaphen, Breitensuche, Tiefensuche, Topologisches Sortieren**\
CLRS Einleitung von Teil VI + Kapitel 22.1-22.4 + Appendix B.4-B.5<br>

1. **Minimale Spannbäume: Borůvkas Algorithmus, Jarník–Prims Algorithmus, Kruskals Algorithmus**\
E Kapitel 7 (oder CLRS Kapitel 23)<br>

1. **Dijkstras Algorithmus, kürzeste Wege**\
E Kapitel 8 ohne 8.7 (oder CLRS Kapitel 24 außer 24.1 und 24.4)<br>

1. **Greedy-Algorithmen, Scheduling, Huffman-Codierungen**\
CLRS Kapitel 16 bis 16.3<br>

1. **Dynamische Programmierung, längste gemeinsame DNA-Teilsequenz**\
CLRS Kapitel 15.4<br>

1. **Flussprobleme, Lineare Programmierung**\
E Kapitel 10 bis 10.4 (oder CLRS Kapitel 26)
<!--1. Strassens Algorithmus,  (CLRS, Kapitel 4.2)-->

## Übungen

Alleine ein Buch lesen oder Videos anschauen können Sie auch ohne diesen Kurs.
Mit 1-2 anderen Student:innen zusammen Übungsaufgaben bearbeiten, und dabei unsere Unterstützung und unser Feedback erfahren, das sind die Qualitäten, die Sie ohne diesen Kurs nicht haben.
Daher sind Übungen und die Möglichkeit zum direkten mündlichen Gespräch mit Tutor:innen oder dem Dozent das zentrale Angebot dieses Kurses.

## ⭐

Manche Übungsaufgaben sind besonders, denn sie sind mit ⭐ markiert.
Diese Aufgaben lösen Sie außerhalb des Synchronbetriebs und geben sie als PDF-Datei ab;
fotografieren Sie hierzu Ihre lesbare Handschrift mit einer Scanner-App oder benutzen Sie [solution-template.tex](solution-template.tex).
Sie erhalten nützliches Feedback von den Tutor:innen auf Ihre Lösung, und Ihre Lösung wird anhand objektiver Kriterien entweder _akzeptiert_ oder _nicht akzeptiert_.
Wenn Ihre Lösung akzeptiert wird, erhalten Sie einen _Stern_ ⭐, der möglicherweise Ihre Klausurnote verbessert.
**Folgende Regeln sind verpflichtend zu beachten:**
- Sie dürfen in einer Gruppe von bis zu drei Student:innen zusammen abgeben. Aber: Bevor Sie anfangen, eine ⭐-Aufgabe zu bearbeiten, legen Sie sich _verbindlich_ auf diese Gruppe fest.
- Außerhalb Ihrer Lerngruppe dürfen Sie über Lösungen, Ideen, Ansätze, oder sonstige Hinweise zu ⭐-Aufgaben **nicht** sprechen oder diese anderweitig kommunizieren.
- Tutor:innen und Dozent:innen und Freunde und Fremde dürfen Ihrer Lerngruppe bei der Bearbeitung von ⭐-Aufgaben **in keiner Weise** helfen.
- Sie dürfen auch keine Lösungsansätze zu ähnlichen Aufgaben aus vergangenen Jahren oder aus ähnlichen Kursen oder aus dem Internet oder von irgendwohersonst anschauen.
- Sie dürfen die Lösung einer ⭐-Aufgabe weder weitergeben noch von sich abschreiben lassen noch irgendwo für Andere sichtbar hochladen noch liegen lassen.
- Wenn Sie gegen diese Regeln verstoßen, werden beim *ersten* Vergehen *alle* Mitglieder der betroffenen Lerngruppen von allen ⭐-Programmen dieser Professur ausgeschlossen. Wenn Sie von sich abschreiben lassen oder selbst abschreiben, schaden Sie also immer mindestens zwei ganzen Lerngruppen.


## Klausur

- Klausurtermin: 02.08.2021
- Nachklausurtermin: 11.10.2021

Die Klausur ist die einzige verpflichtende Komponente des Moduls B-ALGO1.

Falls Sie die Klausur bestehen, erhöhen gesammelte ⭐ Ihr Klausurergebnis um *bis zu 10%*. Das heißt, eine mit 50% der Punkte gerade so bestandene Klausur kann im besten Fall als 60% gewertet werden, aber eine mit 49% nicht bestandene Klausur bleibt nicht bestanden.
Der Bonus berechnet sich als 10% * #(von Ihnen gesammelte ⭐) / #(insgesamt verfügbare ⭐).

## Verwandte Vorlesungen

- Vorbild für diese Vorlesung ist eine [Lockdown-Vorlesung von Philip Bille und Inge Li Gørtz](http://www2.compute.dtu.dk/courses/02105/2021/) an der DTU Kopenhagen. _Mange tak Philip og Inge!_
- Eine vorherige Iteration von B-ALGO1 wurde im [SoSe-2020](https://ae.cs.uni-frankfurt.de/algo120) (Prof. Meyer) angeboten, wofür [Videos](https://ae.cs.uni-frankfurt.de/videos/algo120.html) aus Präcoronazeiten zusammengeschnitten wurden. Videos sind auch verfügbar aus dem [SoSe-2019](http://algo.cs.uni-frankfurt.de/lehre/ds/sommer19/ds19.php) und [WiSe-2019/20](http://algo.cs.uni-frankfurt.de/lehre/algo2/winter1920/algo21920.php) (Prof. Hoefer)
- Weitere exzellente Videoaufzeichnungen zu denselben Themen finden Sie auf [MIT Open Courseware](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/).

## Zusätzliche Literatur

- **E**: _Algorithms_ von Jeff Erickson. [[pdf](https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf), [web](https://jeffe.cs.illinois.edu/teaching/algorithms/)]. _(Ein wunderschönes Buch, das die ersten Themen von ALGO1 aber nur überfliegt.)_
- **DMS**: _Algorithmen und Datenstrukturen_ von Martin Dietzfelbinger, Kurt Mehlhorn und Peter Sanders [[UB](https://hds.hebis.de/ubffm/Record/HEB224838512)] _(kompakter, besser organisiert, und formaler als CLRS, gut zum Nachschlagen von Detailfragen.)_
- **Sa**: Skript "Datenstrukturen" von Georg Schnitger [[pdf](https://ae.cs.uni-frankfurt.de/teaching/20ss/+algo1/skript_ds.pdf)] _(ähnliche Auswahl von Themen; wurde in den vergangenen Jahren an der Goethe-Uni benutzt.)_
- **Sb**: Skript "Theoretische Informatik 1" von Georg Schnitger [[pdf](https://ae.cs.uni-frankfurt.de/teaching/20ss/+algo1/skript_gl1_ws1213.pdf)] _(für ALGO1 ist nur das Kapitel "Effiziente Algorithmen" relevant.)_
- **KT**: Kleinberg, Tardos. Algorithm Design. [[UB](https://hds.hebis.de/ubffm/Record/HEB129608459)] _(Ein modernes Buch, dass die verschiedenen Designmethoden in den Mittelpunkt stellt, anstatt einzelner Probleme.)_
- **SWa**: Sedgewick, Wayne, Algorithms, Fourth Edition, 2011. _(konkreter und leichter zugänglich als CLRS und DMS, denn hier werden alle besprochenen Datenstrukturen und Algorithmen penibel implementiert, in [Java](https://github.com/kevin-wayne/algs4/) oder [Python](https://github.com/itu-algorithms/itu.algs4).)_
- **SWb**: Sedgewick, Wayne. Introduction to Programming in Java, 2017. [[pdf](https://introcs.cs.princeton.edu/java/home/chapter1.pdf)] _(Nützlich, falls Sie die Grundlagen der Programmierung auffrischen möchten.)_

## Weitere Hinweise

- Die Prüfungsvarianten Algo1a und Algo1b stehen für Student:innen aus der alten Studienordnung zur Verfügung. Siehe hierzu die [Äquivalenzregelung des Prüfungsamts](https://www.informatik.uni-frankfurt.de/images/pdf/PA/aequivalenz_bach_11_19.pdf). (In diesem Fall zählen nur die ⭐, die für die jeweilige Unterprüfung relevant sind. Für Algo1b ist relevant: Graphalgorithmen. Für Algo1a ist außer Sortieren alles andere relevant.)
- Es gibt [Altklausuren](https://ae.cs.uni-frankfurt.de/teaching/altklausuren.html). Algorithmen und Datenstrukturen 1 war früher aufgeteilt in "Datenstrukturen" und "Theoretische Informatik 1".