---
title: "Project Ideas"
author: "[Holger Dell](/~dell)"
date: "2019-01-12"
show_author_date_info: yes
estimated_reading_time: yes
toc: yes
---

## Who is this document for?

This document is intended for students at Goethe University who want to write a Bachelor/Master thesis in the theoretical computer science group.

## Project Types

Depending on your interests and talents, different _types_ of projects are possible:

- implementation and experimentation
- literature review
- problem-solving

Often, there is some overlap between different types.

### Implementation and Experimentation

In this type of project, you will:

- Contribute to an open source implementation of a piece of software.
- Use industry-standard programming languages that are suitable for the chosen topic. Typical programming languages are Rust, C/C++, Python, JavaScript.
- Use industry-standard collaboration tools (git).
- Depending on your chosen topic, perform experiments and optimize your software.
- Write a thesis that reviews the chosen topic, your approach, describes your implementation, and your experiments.
- It is recommended that you publish it on your GitHub page.

### Literature review

In this type of project, you will choose a topic in theoretical computer science and write a literature review of existing research on this topic. This involves tracking down as many relevant papers and preprints on the topic as feasible, reading and understanding them, identifying the most important results as well as the most important open problems and goals of the research direction, and writing a comprehensive report. A project with a more limited scope could be to rewrite a specific proof from a research paper.

### Problem-solving

In this type of project, you will prove new theorems in theoretical computer science.
This could be upper bounds (algorithms, data structures) or lower bounds (hardness reductions, complexity).
A project with a limited scope would be to analyze the proof of an existing theorem in a special case, and write it up as elegantly as possible.
Problem-solving projects are *much more challenging* than a typical thesis project.

## Themes and Topics

Depending on your interests and talents, different _themes_ of project topics are possible:
_Theory_, _Engineering_, _Visualization_, and _AI Alignment_.

### Theory

**Goal:** perform a literature review or solve open problems in theoretical computer science.

**What you get out of it:**

- Exposure to beautiful mathematical ideas.
- Experience with literature search, scientific writing, and research.
- Preparation for a PhD in theoretical computer science or an adjacent field.
- The most successful projects may lead to a scientific publication.

**What you need to bring:**

- Strong mathematical background.

### Algorithmic Engineering

**Goal:** implement algorithms that may have never been implemented before! Test them rigorously, and compare their performance to other algorithms and implementations.

**What you get out of it:**

- Exposure to algorithms that can range in difficulty.
- Experience with coding, hardware requirements, performance experiments, and scientific writing.
- Preparation for a PhD in algorithmic engineering or an adjacent field.

**What you need to bring:**

- Ambition to improve on the state-of-the-art.
- Very good performance in your past algorithm courses.

**More specific aspects of a possible projects:**

- Develop a prototype implementation in a suitable high-level programming language or framework (such as Python, SciKit, and Matlab. Other languages are also possible if you're more comfortable with that)
- Contribute to a high-performance implementation in a suitable programming language (such as Rust or C++).
- Design and run experiments that test the correctness, performance, and scalability of implementations.
- Participate in a research-level programming competition.

Software and benchmarks generated in your projects are developed under an open-source license, and when they're ready will be published in a suitable outlet.

### Visualization of Algorithmic Concepts

**Goal:** develop beautiful and easy-to-use educational visualizations of algorithmic and mathematical concepts.
Make no mistake, the project should still include scientific writing in the form of a comprehensive Bachelor or Master thesis that describes the topic on a formal level, reviews the literature (both of the concept involved and its possibly pre-existing visualizations), discusses some experiments (maybe with different possible visualization and interaction patterns), and justifies your choices.

**Examples:** Past projects that are at the level of a Bachelor thesis include
[Algorithms with Albot](https://enutie.github.io/),
[Color Refinement](https://holgerdell.com/cr/), and
Graph Width Visualizer.

**Non-examples:**
Your visualization project should do something *new*. For example, visualizing different sorting algorithms has been done before (a lot), so if that's your proposal, you need to provide a very strong argument why your visualization idea is novel.

**What you get out of it:**

- In-depth understanding of some non-trivial algorithms and mathematical concepts. (You will likely visualize something that you haven't seen before)
- Experience with software development and UX design.
- Visually pleasing products that you can use to explain algorithmic concepts to your friends and family.

**What you need to bring:**

- Interest in graphical design, gamification, as well as teaching.
- Good mathematical background.
- For a Master thesis, you need to have taken at least one advanced course or seminar in algorithms, complexity, graph theory, or a related course.

Since I want the results of visualization projects to be as accessible as possible, the applications will be browser-based and therefore use JavaScript (or a suitable other language, such as Python, in combination with WebAssembly).
All products generated in your projects are developed under an open-source license, and when they're ready will be publicly available.

**More specific aspects of possible projects:**

- Find or help develop a library for drawing, animating, and interacting with graphs, stacks, queues, etc.
- Find suitable ways of visualizing a specific algorithm, compare it to previously existing visualizations from the literature and the web.
- Develop a suitable language for specifying (a) which objects need to be drawn, (b) how they're to be updated over time, and (c) how to animate the objects.
- Extract run-time data from real implementations and visualize this data effectively.
- If you have experience with developing for VR/AR, I would be excited to try some algorithm visualizations in this setting.

**Links to existing visualization projects.**

- [University of San Francisco](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

### Human-aligned artificial intelligence

**Goal:** perform a literature review, or contribute to original research on the alignment problem. In particular, I would be most interested in connections to traditional, technical topics in theoretical computer science (algorithms, complexity, game theory, logics, cryptography). Topics such as "safe machine learning" are also possible.

**What you get out of it:**

- Exposure to one of the most important problems in humanity's mid-term future.

**What you need to bring:**

- Good background in relevant courses (for example, algorithms, complexity, machine learning, decision theory, etc.); some background in philosophy would be beneficial, too.
- A higher than average ability to work on your own. In particular, you need to propose the topic for your thesis on your own and do most of the literature research. I will of course discuss the topic and your thoughts with you.

**Some introductory resources:**

- [AI Alignment Research Overview](https://docs.google.com/document/d/1FbTuRvC4TFWzGYerTKpBU7FJlyvjeOvVYF2uYNFSlOc/edit?usp=sharing) by Jacob Steinhardt
- Talk by [Brian Christian](https://brianchristian.org/) at the Simons Institute: [The Alignment Problem: Machine Learning and Human Values](https://www.youtube.com/watch?v=CzoVn8LUaDs)
- [Research guide](https://intelligence.org/research-guide/) by [Machine Intelligence Research Institute](https://intelligence.org/).
- [Effective Thesis in Computer Science](https://effectivethesis.org/theses/?discipline=computer+science#disciplines)
- [AGI safety from first principles](https://www.lesswrong.com/s/mzgtmmTKKn5MuCzFJ)
- [Embedded Agency](https://www.lesswrong.com/posts/i3BTagvt3HbPMx6PN/embedded-agency-full-text-version)
- [Is Optimization a Sufficient Language for Understanding Deep Learning?](http://www.offconvex.org/2019/06/03/trajectories/)

## Supervision Process and Grading

As supervisor, I'm in a strange role conflict: During the project, I am your coach and want you to succeed, and in the end I'm expected to be an impartial referee and give you a grade. To reduce the stress level of everyone involved, let's explicitly discuss some expectations upfront.

### Timeline

Writing a Bachelor/Master thesis consists of several steps:

- Choose a topic
- Write a project plan
- Register the thesis with the Prüfungsamt
- Do the main work [9 weeks Bachelor / 6 months Master]
- Submit the thesis to the Prüfungsamt
- Give a talk on your thesis

### Choosing a topic

First, choose a _type_ and _theme_ for your project, and let me know in your first E-Mail which ones you're interested in and which courses in algorithms, theoretical computer science, and/or maths you have already taken.
What you choose should depend on your interests and career plans.
For example, if you want to become a **software engineer**, then you can train your coding skills and build up your GitHub profile in Algorithmic Engineering or Visualization type projects, all while getting some exposure to algorithms research.
If you want to do a **PhD** in a traditional subfield of computer science, mathematics, and/or physics, then, I would say, choose a topic in Theory or Algorithmic Engineering, or work on the Visualization of a highly non-trivial algorithm.
If you want a low-risk topic that will be most likely to yield results within the given time frame, choose an implementation project.
In any case, choose something that you are genuinely excited about!
Life's too short.

Assuming that I have one ready, you can also ask me for a few topics. I will then briefly outline an initial, concrete project idea, and you can familiarize yourself with the relevant literature to some extent.
You can also propose your own topic, but I'm picky. I want there to be some scientific component in your thesis, that is, it should rely on and refer to knowledge and skills that you have learned during your studies.

### Project Plan

Before the project is started formally, I want you to design and agree with me on an informal **project plan** (1-2 pages).
The plan describes the state-of-the-art, as well as general and specific goals for the project, and a rough timeline (I do **not** want a Gantt chart). The main benefits of the project plan are: 1) You learn what you are getting into by accepting the project, 2) during the project, you can come back to the plan to re-focus your efforts, and 3) it makes grading more objective in that grades will be determined based on how well the final outcome matches with the project plan. Of course, I know extremely well that plans can go wrong, so it is possible to change course if there is a good reason to do so---for example, if the original idea simply doesn't work as expected.

### Expectations

Your project is *yours*. It is not my responsibility to monitor your progress or to make sure that you get a good grade.
That said, I will meet with you throughout the semester to discuss the project, make suggestions for improvements, and also give feedback on which aspects aren't fully satisfactory yet.
I will also be available electronically.
If the project involves coding, I will do some code review.
Every project involves scientific writing, and I will read and give feedback on your written drafts.
However, I will not provide iterative feedback, because this would blur the line too much between you writing your thesis and me writing your thesis, so in total I will read and comment on at most one full draft so long as you present it to me with ample time before the deadline (at least two weeks).

### Writing Advice

The Bachelor thesis is likely the first longer scientific text that you will write.
I expect all students to reflect on their thesis writing process throughout the thesis project.
In particular:

- Watch all of these videos on OLAT: Wissenschaftliches Schreiben für Informatiker:innen [Teil1](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8726249474) und [Teil2](https://olat-ce.server.uni-frankfurt.de/olat/auth/RepositoryEntry/8726249476)\
  _Reason: Knowing what is and isn't important in writing will help tremendously with your writing process._
- Talk to the people at the [schreibzentrum](https://www.starkerstart.uni-frankfurt.de/67276085/Schreibberatung) before you start your project!\
  _Reason: They have good advice and provide individual feedback on your writing process. Getting help from the schreibzentrum allows the supervision to focus on the content._
- Use [this latex template](https://github.com/holgerdell/latex-mimosis/) based on latex-mimosis!\
  _Reason: A good template makes it much easier for you to focus on the content. Yes, you must use latex, as this is the standard tool that we use in computer science to write scientific texts._ (Other templates are fine if they're at least as pretty.)
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

### Guidelines for Implementation projects

Implementation projects have some or all of the following components:

- Must-read: Chapters 1 and 2 of McGeoch (2012). *A Guide to Experimental Algorithmics*. [[full text in the library](https://hds.hebis.de/ubffm/Record/HEB418724474)]
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

### Formalities

If the project has not formally started yet, and I haven't heard from you in three weeks, then I may give the topic to another student. (Note that formally starting the project requires several people signing a form, or the project being officially registered with the university.)

Lesen Sie den Paragraphen zu Bachelor/Masterarbeiten in Ihrer Studienordnung und übernehmen Sie Mitverantwortung dafür, dass er befolgt wird:
[§ 35 in BSc Informatik 2019](https://www.cs.uni-frankfurt.de/images/pdf/informatik/bachelor19/bachelorordnung.pdf),
[§ 25 in BSc Informatik 2012](https://www.cs.uni-frankfurt.de/images/pdf/informatik/bachelor2/bachelorordnung_neu.pdf),
[§ 34 in MSc Informatik 2019](https://www.cs.uni-frankfurt.de/images/pdf/informatik/master2019/ordnung_master_2019.pdf),
oder
[§ 35 in MSc Informatik 2015](https://www.cs.uni-frankfurt.de/images/pdf/informatik/master2015/ordnung_master_2015.pdf).
