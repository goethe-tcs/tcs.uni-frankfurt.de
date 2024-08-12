---
title: "Project Guidelines"
author: "[Holger Dell](/~dell)"
date: "2022-04-01"
show_author_date_info: false
estimated_reading_time: false
toc: true
aliases:
  - "/projects/process"
---

## Who is this document for?

This document is intended for students who want to work on a thesis or research project in the TCS group.
It is supposed to clarify what we expect from you and what you can expect from us.
Please make sure to read the entire page, and let us know if you have any questions.

<!-- 

It is important that you make a plan for how long
you must devise a schedule using precise dates.
For example, a Bachelor's thesis should follow this timeline:

- Write a 1-page project plan.
- Give a 20-minute talk on your planned project.
- Register your project with the [examination office](https://www.uni-frankfurt.de/103337868).
- Bachelor thesis registered with the [examination office](https://www.uni-frankfurt.de/103337868).
- April 1: Application deadline.
- April 12: Topics assigned.
- April 22: Draft of project plan handed in for feedback.
- April 29: Give a 20-minute talk about your planned project.
- May 2: Project plan finalized & official registration of thesis with the [examination office](https://www.uni-frankfurt.de/103337868).
- June 20: Full thesis draft handed in for feedback.
- July 4: Thesis officially submitted.
- July 12: Give a 30-minute talk about the results of your project.

How much total time are you expected to invest in a project? -->

## Timeline of a Bachelor's thesis

1. **Preparation phase.** Depending on your experience and the chosen project, you may require more or less preparation before you can actually start the project. If significant preparation is required, you can prepare as part of a seminar (in exchange for CPs), as a *Forschungsprojekt* (in exchange for CPs), or in your free-time (without receiving CPs). During the preparation phase, you will read and present on research papers, write a prototype implementation, design experiments, or develop a proof sketch. You must also pass [the course on scientific writing](https://www.starkerstart.uni-frankfurt.de/100074566/) offered by _Schreibzentrum_ of Goethe University Frankfurt. The outcome of the preparation phase is a concrete [project plan](#project-plan).
2. **Register your thesis project.** Hand in your [project plan](#project-plan) to the TCS group, together with the signed registration form [provided by the examination office](https://www.uni-frankfurt.de/104027741/Downloadbereich#a_92e3be26-e6c738da).
3. **Main work phase (9 weeks).** Write and polish your implementation, perform and analyze your algorithmic experiments, carefully write and polish your proofs, write your thesis, and polish and re-polish your writing (see our [Writing Advice](#writing-advice) below).
4. **Submit your work.**
   - Submit your thesis to the [examination office](https://www.uni-frankfurt.de/103337868) according to their official rules.
   - Submit the following files to the TCS group:
     - `Firstname Lastname - Bachelors Thesis.pdf`: The PDF file of your thesis. In this version, please remove all personal information, such as your date of birth or *Matrikelnummer*.
     - `Firstname Lastname - Usage Permission.pdf`: The PDF file of the signed usage permission form, indicating whether and how we are allowed to redistribute your thesis for the benefit of future students. (You can also submit this as a physical document.)
     - `Firstname Lastname - Source Code.zip`: If applicable, gather all program source code in a `.zip` file. Make sure the `.zip` file contains only the source files and not the `.git` directory or any compiled files. Make sure to include a file called `LICENSE` to ensure that future students are allowed to build on your work. We strongly recommend you use the [MIT License](https://choosealicense.com/licenses/mit/). Also make sure to include some documentation (typically in a `README` file) that explains how to compile and run your code. (Note: This `.zip` file is required for archival purposes, even in case your thesis already includes a link to a public git repository.)
5. **Give a talk on your thesis.** Around two weeks after submitting the thesis, you will give a talk (typically 25 minutes for the talk + 5 minutes for discussion).
6. **Grading.** Your thesis will be graded according to our [Grading Criteria](https://tcs.uni-frankfurt.de/projects/grading/). A common failure mode that may lead to worse grades is to spend too little time on polishing the text and figures in your thesis.

## Project Plan

Before the project is formally started, we expect you to design and agree with your supervisor on an informal **project plan** (at most 1-2 pages).
The plan describes

- general and specific goals for the project,
- the state-of-the-art by citing relevant literature,
- a rough timeline (**not** a Gantt chart) including:
  - the official registration date and deadline of the project,
  - main milestones (what will you have achieved when?),
  - submission of full draft (you must hand in a full draft at least two weeks before the deadline),
  - planned talk dates (one talk before the project starts and one when it is finished), and
  - planned meetings with your supervisor (when and how often?).

In the case of a group project, the plan must indicate who is mainly responsible for which aspect of the project.

Of course, plans can go wrong, so it is possible to change course if there is a good reason to do so---for example, if you find out after a few weeks the original idea simply doesn't work as expected or if you found a better approach or question, then it is completely fine to deviate from the plan, so long as you describe the rationale for doing so in the final text.

## *Oberseminar*

The *Oberseminar* takes place several times during the semester and is supposed to be a fun gathering place.
You will meet other students who are currently working on a project, and you are expected to give two talks on your project:

- When your project starts, you will talk for 10-20 minutes about your project plan. Ideally, this talk takes place *before* the project is officially registered.
- When your projects finishes, you will talk for 20-30 minutes about the results of your projects. Ideally, this should happen 1-2 weeks *after* you hand in your Bachelor's thesis or 4 weeks *before* you hand in your Master's thesis.

## Expectations

Your project is *yours*. It is not the responsibility of your supervisor to monitor your progress or to make sure that you get a good grade.
Your supervisor may agree to meet with you several times throughout the semester to discuss the project, make suggestions for improvements, and also give feedback on which aspects aren't fully satisfactory yet.

Every project involves a scientific writing component, and your supervisor may be able to read and give feedback on your written drafts.
However, we will not provide iterative feedback, because this would blur the line too much between you writing your thesis and your supervisor writing your thesis, so in total your supervisor will read and comment on at most one full draft so long as you present it to them with ample time before the deadline (at least two weeks). Of course, a "full draft" can contain unfinished parts and should contain TODOs in the text that explain what you are planning to add/change.

## Writing Advice

The Bachelor thesis is likely the first longer scientific text that you will write.
We expect all students to reflect on their thesis writing process throughout the thesis project.
In particular:

- For your thesis, use [this latex template](https://github.com/goethe-tcs/thesis-template/) based on latex-mimosis! It is also [available on Overleaf](https://www.overleaf.com/read/xgvdxhsphjdq), where you need an account and can then click "Copy Project" in order to create a private copy that you can edit. There is also a template that you can use for a shorter report or for your project plan: You can find it on [GitHub](https://github.com/goethe-tcs/note-template/) and [Overleaf](https://www.overleaf.com/read/bbxtmsfhsfkv).\
  *Reason: A good template makes it much easier for you to focus on the content. Yes, you must use latex, as this is the standard tool that we use in computer science to write scientific texts.*
- Watch all of these videos on OLAT: Wissenschaftliches Schreiben für Informatiker:innen [Teil1](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8726249474) und [Teil2](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8726249476), or an equivalent course on scientific writing.\
  *Reason: Knowing what is and isn't important in writing will help tremendously with your research and writing process.*
- Talk to the people at the [schreibzentrum](https://www.starkerstart.uni-frankfurt.de/67276085/Schreibberatung) before you start your project!\
  *Reason: They have good advice and provide individual feedback on your writing process. Getting help from the schreibzentrum allows the supervision to focus on the content.*
- Use a spell, grammar, and style checker! Personally, I can recommend [Visual Studio Code](https://code.visualstudio.com/) combined with the extensions [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) (for TeX support) and [LTeX](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) (for spell and style checking). The spell checker in Overleaf doesn't check grammar, but is a decent start. Also consider using [grammarly.com](https://www.grammarly.com/).\
  *Reason: It's all to easy to make spelling mistakes. Such mistakes distract the reader from the content. Moreover, if you are not writing in your native language, a grammar and style checker is very useful. Honestly, these style checkers often find some stylistic issues in my writing even when I write in my native language.*
- Thoroughly read this [checklist and advice for projects and theses](https://www.itu.dk/people/sestoft/itu/thesis-checklist.html) by Peter Sestoft.\
  *Reason: This checklist contains some really useful information on how to plan your project and how to interact with your supervisor.*
- Have a look at [The Grammar According to West](https://faculty.math.illinois.edu/~west/grammar.html) by Douglas B. West.\
  *Reason: This document contains a lot of useful rules on how to write mathematical texts; for example, how to use formulas in a grammatically correct way. It is a long list of rules, so I don't expect you to read/understand all of them. However, do refer to this list when you are writing and are unsure about how to express things.*
- Read [Writing a Bachelor Thesis in Computer Science](https://liacs.leidenuniv.nl/~nijssensgr/bachelorklas-2014-2015/writing.pdf) by Siegfried Nijssen.\
  *Reason: These slides give a quick overview of how a thesis in computer science should be structured and contains some writing advice.*
- Watch the entertaining one-hour talk [Linguistics, Style and Writing in the 21st Century](https://youtu.be/OV5J6BfToSw) by Steven Pinker. Also consider reading parts of his book *The sense of style* [[UB](https://ubffm.hds.hebis.de/Record/HEB363194762) · [pdf](http://xidian-usa.org/wp-content/uploads/2019/07/The-Sense-of-Style.pdf)].\
  *Reason: Many authors of scientific texts write in convoluted sentences and make heavy use of complicated words. They do this, because they think it sounds more scientific. You shouldn't fall into this trap. Instead, you should prefer short, active sentences.*

## Guidelines for Implementation projects

Implementation projects have some or all of the following components:

- Must-read: Chapters 1 and 2 of McGeoch (2012). *A Guide to Experimental Algorithmics*. [[full text in the library](https://ubffm.hds.hebis.de/Record/HEB418724474)]
- One of the most important aspects of the thesis is that your hypotheses are made explicit, and that the experimental setup is discussed separately from the experimental results.
- Formulate your hypotheses:
  - “When executing our implementation on inputs X Y Z, we will measure a running time O(2^k n).”
  - “Reduction rule X reduces graphs more than reduction rule Y.“
  - “For graphs of at most 20 nodes, the adjacency matrix representation is faster for algorithm Z than the adjacency list representation.”
- Before you continue, think of at most 3 concrete plots that could best validate or falsify your hypotheses. Your experiments will work towards creating these plots, and your thesis will work towards interpreting them.
- Design suitable experiments to test your hypotheses. For example:
  - Which factors does the experiment have (e.g., input parameters n and k, input instances, algorithm parameters, used data structures, ...)
  - Which combination of factors will you test and how? (e.g., fully factorial, doubling, ...)
  - Which design parameters are fixed? (e.g., the hardware on which you are testing.)
  - Systematically and automatically measure the running time, branch mispredictions, cache misses, ...
  - Choose and/or generate your input instances.
  - Use suitable plots (log-plots, log-log-plots, n vs run time, ...)
- Algorithm-Tuning:
  - Improve the implementation by selecting better algorithms and data structures.
- Code-Tuning:
  - Optimize your code by using profilers and flame graphs.
- We will try to arrange some peer-based code review with other students, so you may be asked to review the code of other students, and receive code reviews from them.

## Formalities

The *Prüfungsordnung* regulates how much time you are expected to invest in a project:

- Bachelor's thesis: 12 CP = 360 hours = 9 weeks full-time,
- Master's thesis: 30 CP = 900 hours = 6 months full-time,
- Research project ("Forschungsprojekt"):
  - B.Sc. small: 3 CP = 90 hours
  - B.Sc. large: 6 CP = 180 hours
  - M.Sc.: 8 CP = 240 hours

Note that these regulations are meant to protect you from being asked too much.
We will not track your hours in any way and will not remind you of your deadlines.
Before registering a project, please ensure that your supervisor is available for the duration of the project. Projects should start and finish during the semester, not during the semester break.

In case of a thesis project, make sure to read the relevant paragraphs in the *Prüfungsordnung* (PO) and to follow the rules laid out therein:

- § 35 in PO 2019 (BSc Computer Science)
- § 25 in PO 2012 (BSc Computer Science)
- § 34 in PO 2019 (MSc Computer Science)
- § 35 in PO 2015 (MSc Computer Science)

You will find your *Prüfungsordnung* at the [examination office](https://www.uni-frankfurt.de/103337868/).
