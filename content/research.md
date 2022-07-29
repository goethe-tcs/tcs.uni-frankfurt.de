---
title: Research
---

This page describes why the field of theoretical computer science is important, how it approaches its research questions, and what the concrete research topics of the TCS group at Goethe University are.

## Motivation

In the modern world, more and more real-life decisions about real people are made automatically using *algorithms*, sometimes also referred to as *artificial intelligence systems*.
It is natural to demand that these algorithms be *ethical*, in the sense that their behavior must be aligned with moral values.
A central question of theoretical computer science is the *Alignment Problem*:
"How can we design algorithms that are guaranteed to be aligned with our values?".
Here are some specific values that we may wish an algorithm to respect:

- **Explainability.** Human experts are able to fully understand the behavior of the algorithm.
- **Accuracy.** The algorithm produces accurate output for any given input.
- **Efficiency and Responsiveness.** The algorithm uses as little time, energy, and memory space as possible.
- **Simplicity.** The algorithm has a simple logical structure; this often means that the algorithm can be implemented as software that has fewer bugs and is easier to maintain.
- **Fairness and Privacy.** The algorithm makes fair decisions and preserves the privacy of confidential data.
- **Transparency.** The algorithm is open about what it is doing and provides proper feedback.
- **Security.** Whenever the algorithm interacts with untrusted systems, the computation is guaranteed to stay secured against attacks.
- **Robustness.** The algorithm is robust against hardware failures and against noise in the input.

## Challenges

Humanity still knows little about the power and limitations of algorithms.
Even the simplest algorithms based on a few step-by-step rules can behave in complex ways. This *emergent complexity* is notoriously difficult to understand and analyze, and so we must take great care if we want to design algorithms whose behavior we wish to predict and constrain with any certainty.

Moreover, there are decision tasks that are inherently difficult, in the sense that no algorithm could ever meet all requirements that we would like to put on it---in such cases, we must settle for algorithms that achieve *trade-offs* between competing requirements.

## Methods

Theoretical Computer Science uses rigorous mathematics as its main tool.
Our aim is to 1) design algorithms whose behavior is mathematically guaranteed to have desirable properties, and 2) prove that no algorithm can achieve a better trade-off between these properties.

## Concrete research interests of the group

The Theoretical Computer Science group at Goethe University has the following concrete research interests:

- Algorithms for and the complexity of specific computational tasks, such as exactly or approximately counting subgraph patterns in large networks.
- The implementation and validation of these algorithms on real networks (algorithmic engineering, network science, and data science).
- Novel algebraic techniques in algorithms, especially algebraic graph algorithms.
- Algorithmic aspects of combinatorics, graph theory, logics, and statistical physics.
- Machine models that are suitable to analyze modern hardware capabilities (such as GPUs) or situations in which the data is enormous (such as the streaming model).
- Pseudorandomness, derandomization, and hashing techniques.
- The structure of fine-grained and parameterized complexity, and the complexity of satisfiability problems.
- Kernelization, rigorous preprocessing, and compression algorithms for computational problems.

## Related research groups

In Frankfurt, we have close connections to these research groups:

- [Algorithms, Dynamics, and Information Flow in Networks](https://adyn.cs.uni-frankfurt.de/) (DFG research unit)
- [Algorithm Engineering](https://ae.cs.uni-frankfurt.de/) (research group of Ulrich Meyer)
- [Algorithms & Complexity](https://algo.cs.uni-frankfurt.de/) (research group of Martin Hoefer)
- [Discrete Mathematics](https://www.uni-frankfurt.de/46104797/Diskrete_Mathematik) (group of research groups)

Beyond Frankfurt, we have strong links with

- [Basic Algorithms Research Copenhagen (BARC)](https://barc.ku.dk/) (Copenhagen)
- [Max Planck Institute Computer Science](https://www.mpi-inf.mpg.de/departments/algorithms-complexity) (Saarbrücken)
