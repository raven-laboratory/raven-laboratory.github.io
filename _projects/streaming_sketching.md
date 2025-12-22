---
title: "Streaming and Sketching"
excerpt: "We study streaming and sketching algorithms for processing large datasets"
white-logo: "/images/streaming_logo.png"
black-logo: "/images/streaming_logo.png"
people_slugs:
  - ruben-becker
  - davide-cenzato
  - nicola-prezza
  - carlo-tosoni
---

## Description

When working with very large datasets, extracting useful information can become challenging due to limitations in computational resources. Streaming and sketching are two techniques designed to address these challenges by enabling efficient processing of massive data volumes under limited memory constraints. Streaming algorithms process data sequentially as it arrives, allowing computations to be performed without storing the entire dataset. On the other hand, sketching techniques summarize information in sub-linear space, enabling the approximation of useful statistics such as high-order moments, norms, and frequencies, among others. Moreover, most data sketches can be computed directly on data streams in sub-linear space, making the combination of these two techniques particularly attractive for large-scale data scenarios.

In this project, we focus on adapting and applying these techniques to solve practical problems in real-research settings, such as approximating the output size of a dictionary compressor or estimating string similarities.


## Software

- [substring-complexity](https://github.com/regindex/substring-complexity) - Software that implements a streaming algorithm for computing a (1&#8239;±&#8239;ε)-approximation, with high probability, of the string complexity measure δ (and corresponding string distance), using sublinear working space.


