---
title: "Where the patterns are: repetition-aware compression for colored de Bruijn graphs"
collection: publications
category: manuscripts
permalink: /publication/alessio_1
authors: "Alessio Campanelli,  Giulio Ermanno Pibiri, Jason Fan, and Rob Patro"
preliminary: "Preliminary version published in RECOMB 2024."
venue: "Journal of Computational Biology, Vol. 31, No. 10"
date: 2024-01-01
paperurl: "https://www.liebertpub.com/doi/abs/10.1089/cmb.2024.0714"
---

We describe lossless compressed data structures for the colored de Bruijn graph (or c-dBG). Given a collection of reference sequences, a c-dBG can be essentially regarded as a map from k-mers to their color sets. The color set of a k-mer is the set of all identifiers, or colors, of the references that contain the k-mer. While these maps find countless applications in computational biology (e.g., basic query, reading mapping, abundance estimation, etc.), their memory usage represents a serious challenge for large-scale sequence indexing.

Our solutions leverage on the intrinsic repetitiveness of the color sets when indexing large collections of related genomes. Hence, the described algorithms factorize the color sets into patterns that repeat across the entire collection and represent these patterns once instead of redundantly replicating their representation as would happen if the sets were encoded as atomic lists of integers.

Experimental results across a range of datasets and query workloads show that these representations substantially improve over the space effectiveness of the best previous solutions (sometimes, even dramatically, yielding indexes that are smaller by an order of magnitude). Despite the space reduction, these indexes only moderately impact the efficiency of the queries compared to the fastest indexes.
