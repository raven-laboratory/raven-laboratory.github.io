---
title: "Compressed Indexes for k-mer Sets"
excerpt: "We research compact and fast data structures to represent large sets of genomic k-mers (strings of length k over the DNA alphabet)."
white-logo: "/images/sshash_logo.png"
black-logo: "/images/sshash_logo.png"
people_slugs:
  - giulio-ermanno-pibiri
  - alessio-campanelli
  - davide-cologni
---

## Description

Modern bioinformatics pipelines routinely manipulate billions of k-mers — substrings of fixed length k
extracted from large genomic datasets such as pangenomes, metagenomic samples, and high-coverage sequencing reads.
Storing and querying such massive k-mer sets efficiently is a pressing challenge:
naïve data structures are too large, while overly compact representations often become too slow for practical use.
This research project focuses on the design, analysis, and implementation of compressed indexes for k-mer sets,
with the goal of achieving succinct space, high query speed, and scalability to very large collections.
It brings together ideas from succinct data structures, (minimal and perfect) hashing, minimizer sampling theory,
and algorithm engineering.

The project consists of four related sub-projects.

- **Compressed dictionaries.**
This sub-project aims at designing space-efficient data structures for k-mer sets
that can answer (at least) two fundamental queries efficiently: Lookup and Access.
Such data structures are called "dictionaries". The k-mer dictionary developed and maintained
by the RAVEN laboratory is *SSHash*, based on sparse and skew hashing.

- **Compressed labels.**
Many applications require mapping each k-mer to labels such as abundances, taxonomic IDs, genome IDs, etc.
This sub-project investigates compression schemes to store and retrieve these label sets efficiently.
It combines the k-mer dictionary SSHash with repetition-aware compression of labels into
an index called *Fulgor*.

- **Sampling schemes.**
A sampling scheme is a rule that decides which positions in a DNA sequence should be selected
as representatives. Instead of storing every k-mer independently, we sample only a small fraction
and use them to partition the data.
A good sampling scheme chooses these positions evenly and predictably, which helps compress
indexes and speeds up queries.
This sub-project studies the theory behind such schemes and their applicability to large-scale
indexes like SSHash and Fulgor.

- **Query algorithms.**
This sub-project designs fast query algorithms for compressed dictionaries and label structures,
ranging from basic Lookup and streaming queries in SSHash to the more advanced
*pseudo-alignment* queries in Fulgor.

## Main Collaborations

- [COMBINE-Lab](https://github.com/COMBINE-Lab), lead by Rob Patro (University of Maryland, USA).

## Software

- **[SSHash](https://github.com/jermp/sshash)**: SSHash is a compressed, associative, exact, and weighted dictionary for k-mers
based on sparse and skew hashing.

- **[Fulgor](https://github.com/jermp/fulgor)**: Fulgor is a fast and space-efficient colored de Bruijn graph index.

- **[Minimizers](https://github.com/jermp/minimizers)**: A collection of minimizer-based sampling algorithms.

## Publications

- **[Sparse and Skew Hashing of k-mers](https://doi.org/10.1093/bioinformatics/btac245)**
  _Bioinformatics_, 2022.

- **[On Weighted k-mer Dictionaries](https://almob.biomedcentral.com/articles/10.1186/s13015-023-00226-2)**
  _Algorithms for Molecular Biology_, 2023.

- **[Locality-Preserving Minimal Perfect Hashing of k-mers](https://doi.org/10.1093/bioinformatics/btad219)**
  _Bioinformatics_, 2023.

- **[Spectrum preserving tilings enable sparse and modular reference indexing](https://link.springer.com/chapter/10.1007/978-3-031-29119-7_2)**
  _International Conference on Research in Computational Molecular Biology (RECOMB)_, 2023.

- **[Matchtigs: minimum plain text representation of k-mer sets.](https://link.springer.com/article/10.1186/s13059-023-02968-z)**
  _Genome Biology_, 2023.

- **[Fulgor: A Fast and Compact k-mer Index for Large-Scale Matching and Color Queries](https://almob.biomedcentral.com/articles/10.1186/s13015-024-00251-9)**
  _Algorithms for Molecular Biology_, 2024.

- **[Meta-colored Compacted de Bruijn Graphs](https://link.springer.com/chapter/10.1007/978-1-0716-3989-4_9)**
  _International Conference on Research in Computational Molecular Biology (RECOMB)_, 2024.

- **[The mod-minimizer: a simple and efficient sampling algorithm for long k-mers](https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.WABI.2024.11)**
  _International Conference on Algorithms in Bioinformatics (WABI)_, 2024.

- **[Where the Patterns Are: Repetition-Aware Compression for Colored de Bruijn Graphs](https://www.liebertpub.com/doi/10.1089/cmb.2024.0714)**
  _Journal of Computational Biology_, 2024.

- **[Fast Pseudoalignment Queries on Compressed Colored de Bruijn Graphs](https://doi.org/10.4230/LIPIcs.WABI.2025.6)**
  _International Conference on Algorithms for Bioinformatics (WABI)_, 2025.

- **[The open-closed mod-minimizer algorithm](https://link.springer.com/article/10.1186/s13015-025-00270-0)**
  _Algorithms for Molecular Biology_, 2025.
