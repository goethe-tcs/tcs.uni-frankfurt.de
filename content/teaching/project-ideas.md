---
title: "Project Ideas"
author: "[Holger Dell](/~dell)"
date: "2019-01-12"
show_author_date_info: yes
estimated_reading_time: yes
toc: yes
---


## Who is this document for?
This document is addressed to Bachelor and Master students at Goethe University, who wish to write their research or thesis project in theoretical computer science.


## Types

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
- It is recommended that you publish it on your github page.

### Literature review

In this type of project, you will choose a topic in theoretical computer science and write a literature review of existing research on this topic. This involves tracking down as many relevant papers and preprints on the topic as feasible, reading and understanding them, identifying the most important results as well as the most important open problems and goals of the research direction, and writing a comprehensive report. A project with a more limited scope could be to rewrite a specific proof from a research paper.

### Problem-solving

In this type of project, you will prove new theorems in theoretical computer science.
This could be upper bounds (algorithms, data structures) or lower bounds (hardness reductions, complexity).
A project with a limited scope would be to analyze the proof of an existing theorem in a special case, and write it up as elegantly as possible.
Problem-solving projects are *much more challenging* than a typical thesis project.


## Themes
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
- Preparation for a PhD in algorithm engineering or an adjacent field.

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
- Find or help develop a library for drawing, animating, and interacting with graphs, stacks, queues, etc..
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

### Choosing a topic

Which topic you choose should depend on your interests and career plans.
For example, if you want to become a **software engineer**, then you can train your coding skills and build up your github profile in Algorithm Engineering type projects, all while getting some exposure to algorithms research.
If you want to do a **PhD** in a traditional subfield of computer science, mathematics, and/or physics, then, I would say, choose a topic in Theory or Algorithmic Engineering, or work on the Visualization of a highly non-trivial algorithm.
If you want a low-risk topic that will be most likely to yield results within the given timeframe, choose a literature review, or an implementation project in Algorithmic Engineering or Visualization.
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
We will typically meet once every 2-3 weeks---more if needed. I will also be available electronically.
If the project involves coding, I will do some code review.
Every project involves scientific writing, and I will read and give feedback on your written drafts.
However, I will not provide iterative feedback, because this would blur the line too much between you writing your thesis and me writing your thesis, so in total I will read and comment on at most one full draft so long as you present it to me with ample time before the deadline (at least two weeks).

### Writing Advice

The Bachelor thesis is likely the first longer scientific text that you will write.
There are many resources on the internet that can help you. Start with these:

- [Writing a Bachelor Thesis in Computer Science](https://liacs.leidenuniv.nl/~nijssensgr/bachelorklas-2014-2015/writing.pdf) by Siegfried Nijssen
- [Checklist and advice for projects and theses](https://www.itu.dk/people/sestoft/itu/thesis-checklist.html) by Peter Sestoft

I expect all my students to go to the [schreibzentrum](https://www.starkerstart.uni-frankfurt.de/67276085/Schreibberatung) before they start their project. They provide individual help with planning your project and with writing your thesis.

### Formalities

If the project has not formally started yet, and I haven't heard from you in three weeks, then I may give the topic to another student. (Note that formally starting the project requires several people signing a form, or the project being officially registered with the university.)

Lesen Sie den Bachelor/Masterarbeits-Abschnitt Ihrer Studienordnung und übernehmen Sie Mitverantwortung dafür, dass er befolgt wird:
[§35 in BSc Informatik 2019](https://www.cs.uni-frankfurt.de/images/pdf/informatik/bachelor19/bachelorordnung.pdf),
[§25 in BSc Informatik 2012](https://www.cs.uni-frankfurt.de/images/pdf/informatik/bachelor2/bachelorordnung_neu.pdf),
[§34 in MSc Informatik 2019](https://www.cs.uni-frankfurt.de/images/pdf/informatik/master2019/ordnung_master_2019.pdf),
oder
[§35 in MSc Informatik 2015](https://www.cs.uni-frankfurt.de/images/pdf/informatik/master2015/ordnung_master_2015.pdf).