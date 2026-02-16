---
title: "Minimal Perfect Hashing"
excerpt: "This research line investigates the design of minimal perfect hash functions that enable constant-time, collision-free access to large static datasets while compressing storage requirements near the information-theoretic lower bound."
white-logo: "/images/pthash_logo.png"
black-logo: "/images/pthash_logo.png"
people_slugs:
  - giulio-ermanno-pibiri
---

## Description

Given a set *S* of *n* distinct keys, a function *f* that bijectively maps the keys of *S* into the first *n* natural numbers is called a minimal perfect hash function (MPHF) for *S*. Algorithms that find such functions when *n* is large and retain constant evaluation time are of practical interest. For instance, search engines and databases typically use minimal perfect hash functions to quickly assign identifiers to static sets of variable-length keys such as strings.

The challenge is to design an algorithm which is efficient in three different aspects: time to find *f* (construction time), time to evaluate *f* on a key of *S* (lookup time), and space of representation for *f*.

The main, general-purpose, MPHF developed and maintained by RAVEN is **PTHash**. PTHash combines very fast construction with good space effectiveness and very fast lookup time. (Interestingly, PTHash inspired subsequent development, such as PHOBIC, PtrHash, and PHast.)

## Main Collaborations

- Peter Sanders' group (KIT, Germany).

## Software

- **[PTHash](https://github.com/jermp/pthash)**: PTHash is a fast and compact minimal perfect hash function.

- **[LPHash](https://github.com/jermp/lphash)**: LPHash is a fast and compact locality-preserving minimal perfect hashing for k-mer sets.

## Publications

- **[PTHash: Revisiting FCH Minimal Perfect Hashing](https://dl.acm.org/doi/10.1145/3404835.3462849)**
  _International ACM Conference on Research and Development in Information Retrieval_ (SIGIR), 2021.

- **[Parallel and External-Memory Construction of Minimal Perfect Hash Functions with PTHash](https://ieeexplore.ieee.org/document/10210677)**
  _IEEE Transactions on Knowledge and Data Engineering_ (TKDE), 2023.

- **[Locality-Preserving Minimal Perfect Hashing of k-mers](https://doi.org/10.1093/bioinformatics/btad219)**
  _Bioinformatics_, 2023.

- **[PHOBIC: Perfect Hashing with Optimized Bucket Sizes and Interleaved Coding](https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESA.2024.69)**
  _Annual European Symposium on Algorithms_ (ESA), 2024.

- **[Modern Minimal Perfect Hashing: A Survey](https://dl.acm.org/doi/10.1145/3797036)**
  _ACM Computing Surveys_ (CSUR), 2026
