---
title: "New Entropy Measures for Tries with Applications to the XBWT"
collection: publications
category: manuscripts
permalink: /publication/carlo_1
authors: "Lorenzo Carfagna and Carlo Tosoni."
preliminary: "Preliminary version published in SPIRE 2025."
venue: "arXiv"
date: 2025-01-01
paperurl: "https://arxiv.org/abs/2512.11618"
---

Entropy quantifies the number of bits required to store objects under certain given assumptions. While this is a well established concept for strings, in the context of tries the state-of-the-art regarding entropies is less developed. The standard trie worst-case entropy considers the set of tries with a fixed number of nodes and alphabet size. However, this approach does not consider the frequencies of the symbols in the trie, thus failing to capture the compressibility of tries with skewed character distributions. On the other hand, the label entropy [FOCS '05], proposed for node-labeled trees, does not take into account the tree topology, which has to be stored separately. In this paper, we introduce two new entropy measures for tries - worst-case and empirical - which overcome the two aforementioned limitations. Notably, our entropies satisfy similar properties of their string counterparts, thereby becoming very natural generalizations of the (simpler) string case. Indeed, our empirical entropy is closely related to the worst-case entropy and is reachable through a natural extension of arithmetic coding from strings to tries. Moreover we show that, similarly to the FM-index for strings [JACM '05], the XBWT of a trie can be compressed and efficiently indexed within our k-th order empirical entropy plus o(n) bits, with n being the number of nodes. Interestingly, the space usage of this encoding includes the trie topology and the upper-bound holds for every k sufficiently small, simultaneously. This XBWT encoding is always strictly smaller than the original one [JACM '09] and we show that in certain cases it is asymptotically smaller. 
