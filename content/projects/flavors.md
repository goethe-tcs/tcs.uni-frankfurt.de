---
title: "General project flavors"
author: "[Holger Dell](https://holgerdell.com)"
date: "2019-01-12"
show_author_date_info: false
estimated_reading_time: false
toc: true
---

## Who is this document for?

This document is intended for students at Goethe University who are considering to write a Bachelor/Master thesis in the theoretical computer science group and want to find a topic.

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
- Depending on your chosen topic, design and perform systematic algorithmic performance experiments, and optimize your software.
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
[Color Refinement](https://holgerdell.github.io/color-refinement/), and
Graph Width Visualizer.

**Non-examples:**
Your visualization project should do something _new_. For example, visualizing different sorting algorithms has been done before (a lot), so if that's your proposal, you need to provide a very strong argument why your visualization idea is novel.

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
