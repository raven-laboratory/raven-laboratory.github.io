---
title: "Fully Functional Suffix Trees and Optimal Text Searching in BWT-Runs Bounded Space"
collection: publications
category: manuscripts
permalink: /publication/nicola_2
authors: "Travis Gagie, Gonzalo Navarro, and Nicola Prezza"
preliminary: "Preliminary version published in SODA 2018."
venue: "Journal of the ACM 67(1): 2:1-2:54"
date: 2020-01-01
paperurl: "https://doi.org/10.1145/3375890"
---

Indexing highly repetitive texts—such as genomic databases, software repositories and versioned text collections—has become an important problem since the turn of the millennium. A relevant compressibility measure for repetitive texts is r, the number of runs in their Burrows-Wheeler Transforms (BWTs). One of the earliest indexes for repetitive collections, the Run-Length FM-index, used O(r) space and was able to efficiently count the number of occurrences of a pattern of length m in a text of length n (in O(m log log n) time, with current techniques). However, it was unable to locate the positions of those occurrences efficiently within a space bounded in terms of r. In this article, we close this long-standing problem, showing how to extend the Run-Length FM-index so that it can locate the occ occurrences efficiently (in O(occ log log n) time) within O(r) space. By raising the space to O(r log log n), our index counts the occurrences in optimal time, O(m), and locates them in optimal time as well, O(m + occ). By further raising the space by an O(w/ log σ) factor, where σ is the alphabet size and w = Ω (log n) is the RAM machine size in bits, we support count and locate in O(⌈ m log (σ)/w ⌉) and O(⌈ m log (σ)/w ⌉ + occ) time, which is optimal in the packed setting and had not been obtained before in compressed space. We also describe a structure using O(r log (n/r)) space that replaces the text and extracts any text substring of length ℓ in the almost-optimal time O(log (n/r)+ℓ log (σ)/w). Within that space, we similarly provide access to arbitrary suffix array, inverse suffix array, and longest common prefix array cells in time O(log (n/r)), and extend these capabilities to full suffix tree functionality, typically in O(log (n/r)) time per operation. Our experiments show that our O(r)-space index outperforms the space-competitive alternatives by 1--2 orders of magnitude in time. Competitive implementations of the original FM-index are outperformed by 1--2 orders of magnitude in space and/or 2--3 in time.
