---
title: "Decentralized Low-Stretch Trees via Low Diameter Graph Decompositions"
collection: publications
category: manuscripts
permalink: /publication/jacm-2023
excerpt: 'Ruben Becker, Yuval Emek, Mohsen Ghaffari, Christoph Lenzen. <br>Two preliminary conference versions were published in DISC 2019 and ITCS 2020.
'
date: 2023-08-12
venue: 'SIAM J. Comput. 53(2): 247-286 (2024).'
paperurl: '[https://dl.acm.org/doi/10.1145/3607471](https://doi.org/10.1137/22M1489034 
)'
---

We study the problem of approximating the distances in an undirected weighted graph 𝐺 by the distances in trees based on the notion of stretch. Focusing on decentralized models of computation such as the 𝖢𝖮𝖭𝖦𝖤𝖲𝖳, 𝖯𝖱𝖠𝖬, and semi-streaming models, our main results are as follows: (1) We develop a simple randomized algorithm that constructs a spanning tree such that the expected stretch of every edge is 𝑂⁡(log^3⁡𝑛), where 𝑛 is the number of nodes in 𝐺. If 𝐺 is unweighted, then this algorithm can be implemented to run in 𝑂⁡(hop⁡(𝐺)) rounds in the 𝖢𝖮𝖭𝖦𝖤𝖲𝖳 model, where hop⁡(𝐺) is the hop-diameter of 𝐺; thus our algorithm is asymptotically optimal in this case. In the weighted case, the run-time of the algorithm matches the currently best known bound for exact single source shortest path (SSSP) computations, which despite recent progress is still separated from the lower bound of Ω⁢(√𝑛 +hop⁡(𝐺)) by polynomial factors. A naive attempt to replace exact SSSP computations with approximate ones in order to improve the complexity in the weighted case encounters a fundamental challenge, as the underlying decomposition technique fails to work under distance approximation. (2) We overcome this obstacle by developing a technique termed blurry ball growing. This technique, in combination with a clever algorithmic idea of Miller, Peng, and Xu (SPAA 2013), allows us to obtain low diameter graph decompositions with small edge cutting probabilities based solely on approximate SSSP computations. (3) Using these decompositions, we in turn obtain metric tree embedding algorithms in the vein of the celebrated work of Bartal (FOCS 1996), whose computational complexity is optimal up to polylogarithmic factors not only in the 𝖢𝖮𝖭𝖦𝖤𝖲𝖳 model but also in the 𝖯𝖱𝖠𝖬 and semi-streaming models. Our embeddings have the additional useful property that the tree can be mapped back to the original graph such that each edge is “used” only logarithmically many times. This property is of interest for capacitated problems and for simulating 𝖢𝖮𝖭𝖦𝖤𝖲𝖳 algorithms on the tree into which the graph is embedded.
