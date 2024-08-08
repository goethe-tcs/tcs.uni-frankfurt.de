---
title: "Complexity Theory"
ects: "10"
sws: "4V, 2Ü"
kürzel:
   - program: "Bachelor"
     modul: "B-GeA-12"
     veranstaltung: "KTH12"
   - program: "Master"
     modul: "M-KLOG-12-K"
     veranstaltung: "KTH12"
semester: "WiSe-2024/25"
qis: "https://qis.server.uni-frankfurt.de/qisserver/rds?state=verpublish&status=init&vmfile=no&publishid=391816&moduleCall=webInfo&publishConfFile=webInfo&publishSubDir=veranstaltung"
toc: yes
layout: single
---

## Description

Complexity Theory is a beautiful field that studies different models of computation as well as their relationships to each other. The most famous open problem in this field is the P vs. NP problem. In this course, you will discover elegant proof techniques, fascinating ideas, and exciting open questions.

## Time and Place

- **First Session.** Monday, October 14th, 2024 at 10-14 in Bockenheim Hörsaal H1.
- **Lectures.** Mon 12-14, Wed 14-16 in H1.
- **Tutorials.** Mon 10-12 in H1.

## Grading

The grade will be based on your performance throughout the course and the final exam. There will be ample opportunity to receive feedback and improve your performance based on this feedback. Detailed rules will be published here later.

## Week plan

The winter term has 15 weeks, the following is a *preliminary* plan copied from an old iteration of this course. Please expect changes.

0. **Introduction.**\
   Course structure, grading scheme, and the first assignment.
1. **Efficient universal Turing machine.** [AB 1.2-1.4, 1.6-1.7]\
   In-class exercises: Example 1.1, Claims 1.5 and 1.6.\
   Homework: Exercises 1.5, 1.6*, 1.9, 1.10, 1.15. (* = hard, but well worth the effort)
2. **NP and NP completeness** [AB ch. 2.1-2.3, 2.5-2.7]\
   Homework: 2.10, 2.8, 2.25, 2.29, 2.6b*, 2.30*
3. **Diagonalization** [AB, ch. 3]\
   Homework: 3.5, 3.6, 3.7*, 3.8*
4. **Space complexity** [AB, ch. 4]\
   Homework: 4.1, 4.2, 4.3, 4.7\
   Written assignment: [pdf](https://github.com/goethe-tcs/complexity22-assignments/releases/download/latest/complexity-ex1.pdf)
5. **The polynomial hierarchy and alternations** [AB, ch.5]\
   Homework: 5.3, 5.7, 5.10, 5.13
6. **Boolean circuits** [AB, ch. 6]\
   Homework: 6.3, 6.8, 6.9*, 6.12
7. **Randomized computation** [AB, ch.7]\
   Homework: 7.4, 7.7, 7.9\
   Written assignment: [pdf](https://github.com/goethe-tcs/complexity22-assignments/releases/download/latest/complexity-ex2.pdf).
8. **Interactive proofs** [AB, ch. 8.1-8.3]\
   Homework: 8.1, 8.2, 8.6*
9. **PCP Theorem** [AB, ch. 11]\
   Homework: Read!, 11.2, 11.3, 11.6, 11.9*, 11.15
10. **Decision Trees** [AB, ch. 12]\
   Homework: 12.1, 12.2, 12.3, 12.6
11. **Complexity of Counting** [AB, ch. 17]\
   Homework: 17.2, 17.4, 17.6*\
   Written Assignment: Third and final written assignment: [pdf](https://github.com/goethe-tcs/complexity22-assignments/releases/download/latest/complexity-ex3.pdf).
12. **⊕ ∉ AC0** [AB, ch. 14.1]
13. **NEXP ⊈ ACC0** [[AB, addendum](https://theory.cs.princeton.edu/uploads/Compbook/accnexp.pdf) · [paper](https://people.csail.mit.edu/rrw/acc-lbs-ccc.pdf)]
14. To be announced.
15. **Final Assessment Week**

## Prerequisites

This course is available for Bachelor _and_ Master students!
You must have mastered Algorithms and Data Structures 1 and 2 (or equivalent).

## Contents

- Complexity classes: Log-space, NP, BPP, polynomial-time hierarchy, ACC0, EXP, NEXP, NP/poly, #P, etc.
- Karp-Lipton's Theorem, Hardness vs. Randomness, NEXP ⊈ ACC0, PCP theorem, etc.

## Literature

<a href="https://ubffm.hds.hebis.de/Record/HEB48053893X">
<img src="/complexity/AB-cover.jpg" alt="book cover" width="126" height="150" style="float: left; padding-right: 1em;" /></a>

**AB**: _Computational Complexity: A Modern Approach_ by Sanjeev Arora and Boaz Barak.\
[[Volltext als E-Book](https://ubffm.hds.hebis.de/Record/HEB48053893X)].

There is also a [pdf](https://theory.cs.princeton.edu/complexity/book.pdf) on the [book website](https://theory.cs.princeton.edu/complexity/), but be aware that it is not a final draft and has different chapter numbers.

## Further resources

- Similar Courses:
  - Dieter van Melkebeek's [Complexity Theory](https://pages.cs.wisc.edu/~dieter/Courses/2016s-CS710/Lectures/) at UW Madison.
  - Ryan Williams' [Automata, Computability, and Complexity Theory](https://people.csail.mit.edu/rrw/6.045-2020/) and [Advanced Complexity Theory](https://people.csail.mit.edu/rrw/6.841-2019/841.html) at MIT.
- For background reading on Turing machines, see:
  - [video lecture](https://mediaspace.illinois.edu/media/t/1_hv9tuhrn/223561603) on [chapter 6](https://jeffe.cs.illinois.edu/teaching/algorithms/models/06-turing-machines.pdf) in Jeff Erickson's [Models of Computation](https://jeffe.cs.illinois.edu/teaching/algorithms/#models) course.
  - [video lectures](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/video_galleries/video-lectures/) in Michael Sipser's course at MIT.
- Also see [TCS @ Princeton](https://theory.cs.princeton.edu/online-resources.html).
