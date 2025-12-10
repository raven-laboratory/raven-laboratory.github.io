---
title: "Compressed Indexes for Strings"
excerpt: "We study compressed space algorithms and data structures to process and index large genomic textual datasets"
white-logo: "/images/indexes_string_logo.png"
black-logo: "/images/indexes_string_logo.png"
people_slugs:
  - cenzato-davide
  - prezza-nicola
---

## Description

The ever-growing amount of repetitive data generated in bioinformatics sequencing projects has motivated an increasing interest in developing new indexing methods capable of addressing the computational challenges posed by large-scale data processing. Notably, an increase in data size does not always correspond to a proportional increase in the informational content. This is particularly evident in genomic data, where genomes from individuals of the same species are often almost identical and therefore highly compressible.

Compressed text indexes take advantage of this redundancy by employing compression techniques that achieve space usage close to the dataset’s actual informational content while supporting efficient pattern-matching functionalities directly on the compressed data, without the need to decompress it.

## Software

1 - Suffix-array (SA) sampling indexing

- [STPD-index](https://github.com/regindex/STPD-index) - Software that implements a text index based on the *Suffix-Tree Path Decomposition* SA sampling scheme, supporting efficient locate-one and locate-all queries.
- [suffixient-array](https://github.com/regindex/suffixient-array) - Software that implements a text index based on the *suffixient array* SA sampling scheme, supporting efficient locate-one and MEM finding queries.

2 - BWT-based indexing

- [*r*-index](https://github.com/nicolaprezza/r-index) - Software that implements the *r*-index, a text index supporting count and locate queries in space proportional to the number of runs of the run-length compressed BWT.
- [extended *r*-index](https://github.com/davidecenzato/extended_r-index) - Software that implements the extended *r*-index, an extension of the original *r*-index to the extended BWT (eBWT) of Mantaci et al., enabling efficient querying of circular genomes.

---

3 - BWT-construction algorithms

- [PFP-eBWT](https://github.com/davidecenzato/PFP-eBWT.git) - Software that implements a variant of the Prefix-Free Parsing preprocessing (PFP) for computing the eBWT.
- [optimalBWT](https://github.com/davidecenzato/optimalBWT.git) - Software to compute the optimal BWT of Bentley et al. minimizing the number of runs *r* of the resulting transform.
- [cais](https://github.com/davidecenzato/cais) - Software that implements the conjugate array induced sorting algorithm for computing several BWT variants.

---