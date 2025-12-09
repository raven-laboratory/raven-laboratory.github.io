---
title: "Compressed Indexes for Regular Languages - REGINDEX"
excerpt: "Compressed Indexes for Regular Languages with Applications to Computational Pan-genomics."
white-logo: "/images/regindex_logo.jpg"
black-logo: "/images/regindex_logo.jpg"
people_slugs:
  - prezza-nicola
  - campanelli-alessio
  - puttini-daniel
  - tosoni-carlo
  - maso-riccardo
  - cenzato-davide
  - tonetto-davide
  - becker-ruben
grants:
  - name: "European Research Council (ERC) grant agreement No. 101039208."
    url: "https://cordis.europa.eu/project/id/101039208"
website: "https://pric.unive.it/projects/regindex/home"
---

## Description

Sorting is, arguably, the most powerful algorithmic building block when it comes to indexing data. At the same time, the regularities exposed by sorting are precisely those enabling data compression. In the last two decades, this fascinating duality has led researchers to the design of compressed full-text indexes: data structures supporting fast pattern matching queries over compressed text. In this project, we revisit the natural generalization of the problem to labeled graphs from a new perspective: we interpret graphs as finite-state automata and investigate the connections existing between their propensity to be sorted and the regular languages they recognize. This novel language-theoretic approach makes it possible to transfer fundamental results between the mature fields of regular language theory and compressed text indexing. The project aims at building this bridge by developing a new theory of compressed regular language indexing.

The project finds important applications to the rapidly-expanding field of computational pangenomics, where the goal is to study the variations contained in the genomes of an entire population. Recent research has shown that representing pan-genomes as labeled graphs is an important step to reduce reference allele bias. Existing approaches, however, can index only restricted classes of graphs, thereby limiting the practical applicability of such powerful pan-genome representations.

<div class="regindex-grid">
  <figure style="margin: 0;">
    <img src="{{ "/images/partial_order.png" | relative_url }}" alt="Partial co-lexicographic order of a DFA" style="width: 100%; height: auto; border: 1px solid var(--global-border-color); border-radius: 8px; margin-bottom: 0rem;">
    <figcaption style="font-size: 0.9em; color: var(--global-fig-caption-color); margin-bottom: 0.5rem;">Partial co-lexicographic order of a DFA</figcaption>
  </figure>
  <div>
    The project’s approach, based on sorting regular languages by partial co-lexicographic orders (see figure), changes the perspective from which the compressed indexing problem has been tackled in the literature. This project aims at developing a theory of graph indexing and compression based on the natural interplay between sorting and regular language theory.
  </div>
</div>

## Software

1 - Indexing

- [Minimum-WDFA-Constructor](https://github.com/regindex/Minimum-WDFA-Constructor)
- [NFA-index](https://github.com/regindex/NFA-index) - This tool build an index for a sorted NFA that support count, locate and membership query.

---

2 - Sorting

- [Finite-Automata-Partition-Refinement](https://github.com/regindex/Finite-Automata-Partition-Refinement)
- [DFA-suffix-doubling](https://github.com/regindex/DFA-suffix-doubling)

---

3 - Generation

- [Wheeler-DFA-generation](https://github.com/regindex/Wheeler-DFA-generation)
- [RegexpToAutomaton](https://github.com/regindex/RegexpToAutomaton)
