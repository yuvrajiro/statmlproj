---
layout: left_toc_wide
classes: wide
title:  "Probability Theory (Series)"
date:   2024-01-22 02:54:23 +0530
toc: true
toc_sticky: true
tags: 
  - Probability theory
category: statistics
share: true
comments: true
---

> This series is an introduction to Probability Theory, It closely follows the book "Probability Essentials" by Jean Jacod and Philip Protter. 

## Day 0 : Philosphical Introduction to Probability Theory

Lets Start with a Random Experiment, A random experiment is an experiment whose outcome is not predictable with certainty. For example, tossing a coin, rolling a die, etc. 

Now a random experiment consist of three things:

1. **State Space**: The set of all possible outcomes of a random experiment is called the state space, denoted by $\Omega$. For example, in the case of tossing a coin, the state space is $\Omega = \{H, T\}$, where $H$ denotes head and $T$ denotes tail.
2. **Event**: An event is a question about random experiment outcome whose answer is either true or false. For example, in the case of tossing a coin, the event "Head" is true if the outcome is head and false otherwise. In mathematical terms, an event is a subset of the state space $\Omega$. And since It is a set, It must adhere to set properties like union, intersection, complement, etc. From this suppose we have two event $A$ and $B$, then following are the set operations:
    - *Conmpliment*: The compliment of an event $A$ is denoted by $A^c$ and is defined as $A^c = \Omega - A$. In the case of tossing a coin, the compliment of event "Head" is "Tail".Hence if A is the event "Head", then $A^c = \{T\}$.
      - *Union*: The union of two events $A$ and $B$ is denoted by $A \cup B$ and is defined as $A \cup B = \{x \in \Omega : x \in A \text{ or } x \in B\}$. In the case of tossing a coin, the union of event "Head" and "Tail" is the entire state space $\Omega$.
      - *Intersection*: The intersection of two events $A$ and $B$ is denoted by $A \cap B$ and is defined as $A \cap B = \{x \in \Omega : x \in A \text{ and } x \in B\}$. In the case of tossing a coin, the intersection of event "Head" and "Tail" is an empty set $\emptyset$.
      - *Sure Event*: The sure event is the event that is always true, It is denoted by $\Omega$.
      - *Impossible Event*: The impossible event is the event that is always false, It is denoted by $\emptyset$.
      - *Elementary Event*: The elementary event is the event that contains only one outcome, A singleton i.e a subset $\{\omega\}$ of the state space $\Omega$.

  The family of all events is called the $\sigma$-algebra denoted by $\mathcal{A}$. The $\sigma$-algebra must satisfy the following properties:

   - $\Omega \in \mathcal{A}$
   - If $A \in \mathcal{A}$, then $A^c \in \mathcal{A}$
   - If $A_1, A_2, \ldots \in \mathcal{A}$, then $\cup_{i=1}^{\infty} A_i \in \mathcal{A}$
      These condition ensures the point mentioned above named as compliment, union, intersection, sure event, impossible event, and elementary event.

3. **Probability**: The probability is a function that assigns a number between 0 and 1 to each event in the $\sigma$-algebra $\mathcal{A}$. Going by the conventional approach probability can be seen as limits of the freequency of occurrence of an event in a large number of trials under Identitcal Conditions. For example, the probability of getting a head in a coin toss is 0.5, which means in a large number of coin tosses, the number of heads will be half of the total number of tosses. The probability function must satisfy the following properties:
    - *Non-Negativity*: The probability of any event is non-negative, i.e $P(A) \geq 0$.
    - *Normalization*: The probability of the sure event is 1, i.e $P(\Omega) = 1$.
    - *Additivity*: The probability of the union of two disjoint events is the sum of the probability of the individual events, i.e $P(A \cup B) = P(A) + P(B)$ if $A \cap B = \emptyset$.
    We will discuss the Proability in detail in the upcoming posts. A fourth notion that is closely related to probability is the random variable, which we will discuss in the next post.

## Day 1 : Random Variables (Upcoming)
   





