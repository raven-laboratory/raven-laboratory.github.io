---
title: "Near-Optimal Approximate Shortest Paths and Transshipment in Distributed and Streaming Models"
collection: publications
category: manuscripts
permalink: /publication/ruben_2
excerpt: 'Ruben Becker, Sebastian Forster, Andreas Karrenbauer, Christoph Lenzen. <br>A preliminary conference version was published in DISC 2017.'
venue: 'SIAM J. Comput. 50(3): 815-856'
date: 2021-01-01
paperurl: 'https://doi.org/10.1137/19M1286955'
---

We present a method for solving the transshipment problem — also known as uncapacitated minimum cost flow — up to a multiplicative error of 1 +𝜀 in undirected graphs with nonnegative edge weights using a tailored gradient descent algorithm. Using ˜𝑂⁡( ⋅) to hide polylogarithmic factors in 𝑛 (the number of nodes in the graph), our gradient descent algorithm takes ˜𝑂⁡(𝜀^{−2}) iterations, and in each iteration it solves an instance of the transshipment problem up to a multiplicative error of polylog 𝑛. In particular, this allows us to perform a single iteration by computing a solution on a sparse spanner of logarithmic stretch. Using a randomized rounding scheme, we can further extend the method to finding approximate solutions for the single-source shortest paths (SSSP) problem. As a consequence, we improve upon prior works by obtaining the following results: (1) Broadcast CONGEST model: (1 +𝜀)-approximate SSSP using ˜𝑂⁡((√𝑛 +𝐷)⁢𝜀^{−3}) rounds, where 𝐷 is the (hop) diameter of the network. (2) Broadcast Congested Clique model: (1 +𝜀)-approximate transshipment and SSSP using ˜𝑂⁡(𝜀^{−2}) rounds. (3) Multipass Streaming model: (1 +𝜀)-approximate transshipment and SSSP using ˜𝑂⁡(𝑛) space and ˜𝑂⁡(𝜀^{−2}) passes. The previously fastest SSSP algorithms for these models leverage sparse hop sets. We bypass the hop set construction; computing a spanner is sufficient with our method. The above bounds assume nonnegative edge weights that are polynomially bounded in 𝑛; for general nonnegative weights, there is an additional multiplicative overhead equal to the logarithm of the maximum ratio between nonzero weights. Our algorithms can also handle asymmetric costs for traversing edges in opposite directions. In this case, we obtain an additional multiplicative dependence of the maximum ratio between the two costs on some edge.
