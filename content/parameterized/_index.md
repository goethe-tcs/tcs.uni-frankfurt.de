---
title: "Fine-grained Parameterized Algorithms"
semester: "SoSe 2024"
ects: "10"
sws: "4V, 2Ü"
kürzel:
  - program: "Master"
    modul: "M-AfgD-12-K"
    veranstaltung: "FPA12"
links:
  - name: QIS
    url: https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=372653&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung
  - name: Moodle
    url: https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=6259
toc: yes
layout: single
aliases:
  - "/parameterized/2024"
schedule:
  - title: "Introduction to Parameterized Algorithms"
    subtitle: "Vertex-Cover, Kernelization"
    weekstart: "2024-04-15"
    links:
      - "Cygan et al., Chapter 1+2"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-01.pdf)"
  - title: "Bounded-search trees"
    weekstart: "2024-04-22"
    links:
      - "Cygan et al., Chapter 3"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-02.pdf)"
  - title: "Iterative Compression and Randomized Algorithms"
    weekstart: "2024-04-29"
    links:
      - "Cygan et al., Chapter 4"
      - "Cygan et al., Chapter 5"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-03.pdf)"
  - title: "Dynamic Programming Techniques"
    subtitle: "Pathwidth, Treewidth, Tree Decompositions, Courcelle's Theorem"
    weekstart: "2024-05-06"
    links:
      - "Cygan et al., Chapter 7"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-04.pdf)"
  - title: "Treewidth"
    subtitle: "Computing Treewidth, Cops and Robber, Graph Minor Theorem, Win/Win-Algorithms"
    weekstart: "2024-05-13"
    links:
      - "Cygan et al., Chapter 7"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-05.pdf)"
  - title: "Algebraic Algorithms I"
    subtitle: "Inclusion-Exclusion, Möbius Transform, Subset Convolution"
    weekstart: "2024-05-20"
    links:
      - "Cygan et al., Chapter 10"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-06.pdf)"
  - title: "Algebraic Algorithms II"
    subtitle: "k-Path"
    weekstart: "2024-05-27"
    links:
      - "Cygan et al., Chapter 10"
      - "[Problem set](https://goethe-tcs.github.io/fpa-2024-exercises/FPA-Exercises-07.pdf)"
  - title: "Recap"
    subtitle: "no new material"
    weekstart: "2024-06-03"
  - title: "Fixed-Parameter Intractability"
    subtitle: "Parameterized reductions, Clique, Independent Set, Vertex Cover, W-Hierarchy"
    weekstart: "2024-06-10"
    links:
      - "Cygan et al., Chapter 13"
  - title: "Introduction to Fine-grained Complexity"
    subtitle: "Schoening's Algorithm for k-CNF-SAT, Strong Exponential Time Hypothesis (SETH), Orthogonal Vectors"
    weekstart: "2024-06-17"
    links:
      - "Bringmann/Künnemann, Chapter 1+2"
  - title: "The Polynomial Method"
    subtitle: "Fast Matrix Multiplication, Fast Multivariate Polynomial Evaluation, Razborov/Smolensky"
    weekstart: "2024-06-24"
    links:
      - "Bringmann/Künnemann, Chapter 4"
  - title: "The Polynomial Method for APSP"
    weekstart: "2024-07-01"
    links:
      - "Bringmann/Künnemann, Chapter 5"
  - title: "TBD"
    subtitle: "to be determined"
    weekstart: "2024-07-08"
  - title: "Final Week"
    subtitle: "no new material"
    weekstart: "2024-07-15"
---

## Contents

This course introduces you to the exciting areas of _parameterized algorithms_ and _fine-grained complexity theory_.
In these areas, we analyze the complexity of problems in more detail than just "polynomial time" and "NP-hard".
You will discover beautiful algorithmic techniques to develop algorithms that are faster than the naive brute-force approach, and you will learn to prove that certain problems probably do not have faster algorithms.

## Organizational Details

- **Moodle:** Please register at the [Moodle-Page](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=6259), all further communication will be done there.
- **First lecture:** April 16, 2024 at 14:15.
- **Time:** Tue/Wed/Thu 14-16.
- **Location:** Room 307, Robert-Mayer-Straße 11-15, 60325 Frankfurt am Main.
- **Format:** In-person lectures and tutorials.
- **Mandatory activities:** The course has mandatory activities! They are required to be admitted to the exam. For each activity, you will receive constructive feedback and an evaluation according to the [EMRN rubric](/images/EMRN-rubric-2020.png). Moreover, you get several chances to be reassessed if you did not meet the expectations the first time.
  - **Exercises.** Every week, you will work on a problem set. You can discuss the solutions in groups beforehand, but you are not allowed to share the writing. Some problems are marked with ‼️. It is mandatory to hand in these solutions on the [Moodle-Page](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=6259) by the following Monday at 14:00. They will be graded, but you may get the chance to revise your answers. To be admitted to the exam, you must eventually prove to us that you are at the level of *Meets Expectations* in **every** marked exercise.
  - **Formal writing.** On the [Moodle-Page](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=6259), you must hand in two solutions for any non-trivial problem of your choice (most likely from the problem sets). In this activity, we will place a much higher standard at the formality of your writing. You should use very precise formal mathematical language and reasoning, so your solution must be as formal and complete as you are able, and it must be written in LaTeX using this LaTeX-template: [https://github.com/goethe-tcs/note-template](github.com/goethe-tcs/note-template). To be admitted to the exam, you must submit two written solutions and receive at least *Meets Expectations* on both submissions.
  - **Oral presentations.** We expect that you present several times throughout the semester. For example, you must present at least twice a solution to an exercise during the tutorial session, and at least once a topic from the lecture (typically a proof from the book). Blackboard presentations are welcome. To be admitted to the exam, you must receive at least *Meets Expectations* on two presentations.
  - **Revisions.** If you received *Revision Needed* in an activity, you can still earn *Meets Expectations* by revising your answers in writing - we discuss your revision orally and your evaluation may get updated. If you receive *Not Assessable*, you must individually meet with the senior staff to discuss your learning progress, and you will be re-assessed on the same material (likely with a different task) at a later point during the semester.
- **Exam:** The final exam is an oral exam. Since you are only admitted to the exam if you have completed all mandatory activities, the purpose of the oral exam is to verify that (1) your submissions are your own work, and (2) that you can explain important concepts and proofs that were covered in the lectures.
- **Time commitment:** 10 ECTS with 25h each = 250h. Subtracting 50 hours of exam preparation, we arrive at 14h per week. Of these, 4h are lectures, 2h are exercise groups, and 8h are self-study.

<!-- - **In-class tests.** During the semester, you will write six in-class tests, typically on a Wednesday. The tests ask you to reproduce some parts of the material of the preceding two weeks. To be admitted to the exam, you must earn at least *Meets Expectations* in five of the tests. -->

## Learning goals

After the course, you will be able to

- **describe** and **compare** various complexity assumptions in parameterized algorithms and fine-grained complexity,
- **reproduce** important results, algorithms, and proof techniques from the area,
- **analyze** the complexity of parameterized algorithms, **develop** new algorithms for similar problems, and **prove** correctness and hardness results,
- **assess** the power and limitations of the methods of the area.

## Weekplan

This is a preliminary weekplan. It will be updated as the course progresses.

{{< weekplan >}}

## Literature and Links

- This course was taught in [WiSe 2020/21](/parameterized/2020) with videos.
- Cygan et al. "Parameterized Algorithms" [[preprint pdf](https://www.mimuw.edu.pl/~malcin/book/parameterized-algorithms.pdf) • [e-UB](https://ubffm.hds.hebis.de/Record/HEB486266346) • [ISBN 978-3-319-21274-6](https://dblp.org/rec/html/books/sp/CyganFKLMPPS15)].
- A previous iteration of this course: [Multivariate Algorithmics](https://bit.ly/MulAlg18) (2018).
- Lecture notes of the course by Bringmann and Künnemann at Saarland University [[url](https://www.mpi-inf.mpg.de/departments/algorithms-complexity/teaching/summer19/fine-complexity/)]
- Flum and Grohe "[Parameterized Complexity Theory](https://ubffm.hds.hebis.de/Record/HEB367892626)" (2006).
- Downey and Fellows "[Fundamentals of Parameterized Complexity](https://ubffm.hds.hebis.de/Record/HEB367892626)" (2013).
- [Parameterized complexity course](https://www.mpi-inf.mpg.de/departments/algorithms-complexity/teaching/summer20/parameterized-algorithms) by Dániel Marx and Pranabendu Misra.
