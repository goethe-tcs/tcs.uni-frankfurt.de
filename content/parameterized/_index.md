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

- **Lectures & Exercises**: Tue/Wed/Thu 14-16 (subject to change)
- **Format**: in-person lectures and exercise groups
- **Exam**: to be determined. Likely a project with an oral exam.
- **Time commitment**: 10 ECTS with 25h each = 250h. Subtracting 50 hours of exam preparation, we arrive at 14h per week. Of these, 4h are lectures, 2h are exercise groups, and 8h are self-study.

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
