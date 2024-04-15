---
title: "Fine-grained Parameterized Algorithms"
semester: "SoSe 2024"
ects: "10"
sws: "4V, 2Ü"
kürzel:
  - program: "Master"
    modul: "M-AfgD-12-K"
    veranstaltung: "FPA12"
qis: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=372653&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
toc: yes
layout: single
aliases:
  - "/parameterized/2024"
schedule:
  - title: "Introduction to Parameterized Algorithms"
    subtitle: "Vertex-Cover, Kernelization"
    links:
      - "Cygan et al., Chapter 1+2"
  - title: "Bounded-search trees"
    links:
      - "Cygan et al., Chapter 3"
  - title: "Iterative Compression"
    links:
      - "Cygan et al., Chapter 4"
  - title: "Randomized Algorithms"
    links:
      - "Cygan et al., Chapter 5"
  - title: "Dynamic Programming Techniques"
    subtitle: "Pathwidth, Treewidth, Tree Decompositions, Courcelle's Theorem"
    links:
      - "Cygan et al., Chapter 7"
  - title: "Treewidth"
    subtitle: "Computing Treewidth, Cops and Robber, Graph Minor Theorem, Win/Win-Algorithms"
    links:
      - "Cygan et al., Chapter 7"
  - title: "Algebraic Algorithms I"
    subtitle: "Inclusion-Exclusion, Möbius Transform, Subset Convolution"
    links:
      - "Cygan et al., Chapter 10"
  - title: "Algebraic Algorithms II"
    subtitle: "k-Path`"
    links:
      - "Cygan et al., Chapter 10"
  - title: "Fixed-Parameter Intractability"
    subtitle: "Parameterized reductions, Clique, Independent Set, Vertex Cover, W-Hierarchy"
    links:
      - "Cygan et al., Chapter 13"
  - title: "Introduction to Fine-grained Complexity"
    subtitle: "Schoening's Algorithm for k-CNF-SAT, Strong Exponential Time Hypothesis (SETH), Orthogonal Vectors"
    links:
      - "Bringmann/Künnemann, Chapter 1+2"
  - title: "The Polynomial Method"
    subtitle: "Fast Matrix Multiplication, Fast Multivariate Polynomial Evaluation, Razborov/Smolensky"
    links:
      - "Bringmann/Künnemann, Chapter 4"
  - title: "The Polynomial Method for APSP"
    links:
      - "Bringmann/Künnemann, Chapter 5"
  - title: "Review of the Semester"
---

## Contents

This course introduces you to the exciting areas of _parameterized algorithms_ and _fine-grained complexity theory_.
In these areas, we analyze the complexity of problems in more detail than just "polynomial time" and "NP-hard".
You will discover beautiful algorithmic techniques to develop algorithms that are faster than the naive brute-force approach, and you will learn to prove that certain problems probably do not have faster algorithms.

## Organizational Details

- **Moodle:** Please register at the [Moodle-Page](https://moodle.studiumdigitale.uni-frankfurt.de/moodle/course/view.php?id=6259), all further communication will be done there.
- **First lecture:** April 16, 2024 at 14:15.
- **Time:** Tue/Wed/Thu 14-16.
- **Location:** Bockenheim Hörsaalzentrum, H 3.
- **Format:** In-person lectures and tutorials.
- **Mandatory activities:** Mandatory exercises, in-class tests, hand-in assignments, and oral presentations throughout the semester. For each activity, you will receive constructive feedback and an evaluation according to the [EMRN rubric](/images/EMRN-rubric-2020.png).
  - **Exercises.** Every week, you will work on a set of exercises. The solutions will be discussed each Tuesday. The solutions are not directly graded, but they are a prerequisite for the in-class tests.
  - **In-class tests.** During the semester, you will write six in-class tests, typically on a Wednesday. The tests ask you to reproduce some parts of the material of the preceding two weeks. To be admitted to the exam, you must earn at least *Meets Expectations* in five of the tests.
  - **Hand-in assignments.** You will hand in solutions to two assignments during the course. You can discuss the solutions beforehand, but you are not allowed to share the writing. The point of this activity is to train you to use precise formal mathematical language and reasoning, so your solution must be as formal and complete as you are able, and it must be written in LaTeX using this LaTeX-template: [https://github.com/goethe-tcs/note-template](github.com/goethe-tcs/note-template). To be admitted to the exam, you must submit two written solutions and receive at least *Meets Expectations* on both submissions.
  - **Oral presentations.** You must present at least one solution to an exercise during the tutorial session, and you must present at least one topic from the lecture (typically a proof from the book). Blackboard presentations are welcome. To be admitted to the exam, you must receive at least *Meets Expectations* on both presentations.
  - **Revisions.** If you received *Revision Needed* in an activity, you can still earn *Meets Expectations* by revising your answers in writing - we discuss your revision orally and your evaluation may get updated. If you receive *Not Assessable*, you must individually meet with the senior staff to discuss your learning progress, and you will be re-assessed on the same material at a later point during the semester.
- **Exam:** The final exam is an oral exam.
- **Time commitment:** 10 ECTS with 25h each = 250h. Subtracting 50 hours of exam preparation, we arrive at 14h per week. Of these, 4h are lectures, 2h are exercise groups, and 8h are self-study.

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
