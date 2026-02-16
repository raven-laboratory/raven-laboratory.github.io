---
title: "Parallel and External-Memory Construction of Minimal Perfect Hash Functions with PTHash"
collection: publications
category: manuscripts
permalink: /publication/giulio_2
authors: "Giulio Ermanno Pibiri and Roberto Trani"
preliminary: "Preliminary version published in SIGIR 2021."
venue: "IEEE Transactions on Knowledge and Data Engineering, Volume 36, Issue 3"
date: 2023-01-01
paperurl: "https://doi.org/10.1109/TKDE.2023.3303341"
---

A function f : U → {0,...,n−1} is a minimal perfect hash function for a set S ⊆ U of size n, if f bijectively maps S into the first n natural numbers. These functions are important for many practical applications in computing, such as search engines, computer networks, and databases. Several algorithms have been proposed to build minimal perfect hash functions that: scale well to large sets, retain fast evaluation time, and take very little space, e.g., 2 – 3 bits/key. PTHash is one such algorithm, achieving very fast evaluation in compressed space, typically many times faster than other techniques.

In this work, we propose a new construction algorithm for PTHash enabling: (1) multi-threading, to either build functions more quickly or more space-efficiently, and (2) external-memory processing, to scale to inputs much larger than the available internal memory. Only few other algorithms in the literature share these features, despite of their practical impact. We conduct an extensive experimental assessment on large real-world string collections and show that, with respect to other techniques, PTHash is competitive in construction time and space consumption, but retains 2 – 6× better lookup time.