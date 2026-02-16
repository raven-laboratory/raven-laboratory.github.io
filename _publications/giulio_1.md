---
title: "Sparse and skew hashing of kmers"
collection: publications
category: manuscripts
permalink: /publication/giulio_1
authors: "Giulio Ermanno Pibiri"
venue: "Bioinformatics, Volume 38"
date: 2022-01-01
paperurl: "https://doi.org/10.1093/bioinformatics/btac245"
---

A dictionary of k-mers is a data structure that stores a set of n distinct k-mers and supports membership queries. This data structure is at the hearth of many important tasks in computational biology. High-throughput sequencing of DNA can produce very large k-mer sets, in the size of billions of strings—in such cases, the memory consumption and query efficiency of the data structure is a concrete challenge.

To tackle this problem, we describe a compressed and associative dictionary for k-mers, that is: a data structure where strings are represented in compact form and each of them is associated to a unique integer identifier in the range [0,n). We show that some statistical properties of k-mer minimizers can be exploited by minimal perfect hashing to substantially improve the space/time trade-off of the dictionary compared to the best-known solutions.