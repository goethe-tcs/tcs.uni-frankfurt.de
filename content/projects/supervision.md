---
title: "Project process"
author: "[Holger Dell](/~dell)"
date: "2022-04-01"
show_author_date_info: no
estimated_reading_time: no
toc: yes
---

## Who is this document for?

This document is intended for students are about to start a project in the theoretical computer science group. Please make sure to read the entire page.

## Time constraints

It is most important to agree on a timeline before starting the project.
For example, a Bachelor's thesis in the summer term of 2022 should _ideally_ follow this timeline:

- April 1: Application deadline.
- April 12: Topics assigned.
- April 22: Draft of project plan handed in for feedback.
- April 29: Give a 20-minute talk about your planned project.
- May 2: Project plan finalized & official registration of thesis with the [examination office](https://www.uni-frankfurt.de/103337868).
- June 20: Full thesis draft handed in for feedback.
- July 4: Thesis officially submitted.
- July 12: Give a 30-minute talk about the results of your project.

How much total time are you expected to invest in a project?
This is regulated in the _Prüfungsordnung_ as follows:

- Bachelor's thesis = 9 weeks full-time,
- Master's thesis = 6 months full-time,
- small Bachelor's research project (3 CP) = 90 hours,
- large Bachelor's research project (6 CP) = 180 hours.

We will not track your hours in any way. Note that these regulations are meant to protect you from being asked too much.

## Project Plan

Before the project is started formally, we expect you to design and agree with your supervisor on an informal **project plan** (1-2 pages).
The main purpose is to manage expectations in both directions: What we expect from you and what you expect from us. The plan describes

- the state-of-the-art by citing relevant literature,
- general and specific goals for the project,
- a rough timeline (**not** a Gantt chart) including main milestones, draft hand-ins, and planned meetings with your supervisor (when and how often?).

In the case of a group project, the plan should indicate who is mainly responsible for which work packages.

Of course, plans can go wrong, so it is possible to change course if there is a good reason to do so---for example, if you find out after a few weeks the original idea simply doesn't work as expected or if you found a better approach or question, then it is completely fine to deviate from the plan, so long as you describe the rationale for doing so in the final text.

## Expectations

Your project is _yours_. It is not the responsibility of your supervisor to monitor your progress or to make sure that you get a good grade.
Your supervisor may agree to meet with you several times throughout the semester to discuss the project, make suggestions for improvements, and also give feedback on which aspects aren't fully satisfactory yet.

Every project involves a scientific writing component, and your supervisor will read and give feedback on your written drafts.
However, we will not provide iterative feedback, because this would blur the line too much between you writing your thesis and your supervisor writing your thesis, so in total your supervisor will read and comment on at most one full draft so long as you present it to them with ample time before the deadline (at least two weeks). Of course, a "full draft" can contain unfinished parts and should contain to-dos in the text that explain what you are planning to add/change.

An ideal Bachelor's or Master's thesis should result in a scientific paper that can be published at an international conference.

## Writing Advice

The Bachelor thesis is likely the first longer scientific text that you will write.
We expect all students to reflect on their thesis writing process throughout the thesis project.
In particular:

- Use [this latex template](https://github.com/holgerdell/latex-mimosis/) based on latex-mimosis!\
  _Reason: A good template makes it much easier for you to focus on the content. Yes, you must use latex, as this is the standard tool that we use in computer science to write scientific texts._
- Watch all of these videos on OLAT: Wissenschaftliches Schreiben für Informatiker:innen [Teil1](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8726249474) und [Teil2](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8726249476), or an equivalent course on scientific writing.\
  _Reason: Knowing what is and isn't important in writing will help tremendously with your research and writing process._
- Talk to the people at the [schreibzentrum](https://www.starkerstart.uni-frankfurt.de/67276085/Schreibberatung) before you start your project!\
  _Reason: They have good advice and provide individual feedback on your writing process. Getting help from the schreibzentrum allows the supervision to focus on the content._
- Use a spell, grammar, and style checker! Personally, I can recommend [Visual Studio Code](https://code.visualstudio.com/) combined with the extensions [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) (for TeX support) and [LTeX](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) (for spell and style checking). The spell checker in Overleaf doesn't check grammar, but is a decent start. Also consider using [grammarly.com](https://www.grammarly.com/).\
  _Reason: It's all to easy to make spelling mistakes. Such mistakes distract the reader from the content. Moreover, if you are not writing in your native language, a grammar and style checker is very useful. Honestly, these style checkers often find some stylistic issues in my writing even when I write in my native language._
- Thoroughly read this [checklist and advice for projects and theses](https://www.itu.dk/people/sestoft/itu/thesis-checklist.html) by Peter Sestoft.\
  _Reason: This checklist contains some really useful information on how to plan your project and how to interact with your supervisor._
- Have a look at [The Grammar According to West](https://faculty.math.illinois.edu/~west/grammar.html) by Douglas B. West.\
  _Reason: This document contains a lot of useful rules on how to write mathematical texts; for example, how to use formulas in a grammatically correct way. It is a long list of rules, so I don't expect you to read/understand all of them. However, do refer to this list when you are writing and are unsure about how to express things._
- Read [Writing a Bachelor Thesis in Computer Science](https://liacs.leidenuniv.nl/~nijssensgr/bachelorklas-2014-2015/writing.pdf) by Siegfried Nijssen.\
  _Reason: These slides give a quick overview of how a thesis in computer science should be structured and contains some writing advice._
- Watch the entertaining one-hour talk [Linguistics, Style and Writing in the 21st Century](https://youtu.be/OV5J6BfToSw) by Steven Pinker. Also consider reading parts of his book _The sense of style_ [[UB](https://hds.hebis.de/ubffm/Record/HEB363194762) · [pdf](http://xidian-usa.org/wp-content/uploads/2019/07/The-Sense-of-Style.pdf)].\
  _Reason: Many authors of scientific texts write in convoluted sentences and make heavy use of complicated words. They do this, because they think it sounds more scientific. You shouldn't fall into this trap. Instead, you should prefer short, active sentences._

## Guidelines for Implementation projects

Implementation projects have some or all of the following components:

- Must-read: Chapters 1 and 2 of McGeoch (2012). _A Guide to Experimental Algorithmics_. [[full text in the library](https://hds.hebis.de/ubffm/Record/HEB418724474)]
- Formulate your hypotheses:
  - “When executing our implementation on inputs X Y Z, we will measure a running time O(2^k n).”
  - “Reduction rule X reduces graphs more than reduction rule Y.“
  - “For graphs of at most 20 nodes, the adjacency matrix representation is faster for algorithm Z than the adjacency list representation.”
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

If the project has not formally started yet, and we haven't heard from you in three weeks, then we may give the topic to another student. (Note that formally starting the project requires several people signing a form, or the project being officially registered with the university.)

Read the relevant paragraphs in the _Prüfungsordnung_ and make sure to follow the rules laid out therein:

- § 35 in der PO für BSc Informatik 2019
- § 25 in der PO für BSc Informatik 2012
- § 34 in der PO für MSc Informatik 2019
- § 35 in der PO für MSc Informatik 2015

You will find your _Prüfungsordnung_ at the [examination office](https://www.uni-frankfurt.de/103337868/).
