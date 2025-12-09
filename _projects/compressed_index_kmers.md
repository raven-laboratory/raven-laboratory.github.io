---
title: "Compressed Indexes for k-mer Sets"
excerpt: "Compressed Indexes for k-mer Sets"
white-logo: "/images/sshash_logo.png"
black-logo: "/images/sshash_logo.png"
people_slugs:
  - pibiri-giulio-ermanno
  - campanelli-alessio
  - cologni-davide
---

<style>
  .project-hero { display: flex; align-items: center; border: 1px solid var(--global-border-color); border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
  .project-hero-logo { width: 72px; height: 72px; border-radius: 8px; margin-right: 1rem; border: 1px solid var(--global-border-color); object-fit: contain; }
  .project-hero-logo--dark { display: none; }
  html[data-theme="dark"] .project-hero-logo--light { display: none; }
  html[data-theme="dark"] .project-hero-logo--dark { display: inline; }
  .project-meta { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; }
  .project-meta-item { border: 1px solid var(--global-border-color); border-radius: 8px; padding: 0.75rem; }
  .project-cta { margin-bottom: 1rem; }
  .regindex-grid { display: grid; grid-template-columns: minmax(240px, 40%) 1fr; gap: 1rem; align-items: start; }
  @media (max-width: 768px) { .regindex-grid { grid-template-columns: 1fr; } .regindex-grid figure { margin-bottom: 0.5rem; } }
</style>

<div class="project-hero">
  <img class="project-hero-logo project-hero-logo--light" src="{{ page.white-logo | relative_url }}" alt="{{ page.title }} logo">
  <img class="project-hero-logo project-hero-logo--dark"  src="{{ page.black-logo | relative_url }}" alt="{{ page.title }} logo">
  <div>
    <h1 style="margin: 0;">{{ page.title }}</h1>
    <p style="margin: 0.5rem 0 0 0;">{{ page.excerpt }}</p>
  </div>
  <div style="margin-left: auto;" class="project-cta">
    {% if page.website %}
      <a class="btn" href="{{ page.website }}" target="_blank" rel="noopener">Website</a>
    {% endif %}
  </div>
</div>

<div class="project-meta">
  <div class="project-meta-item">
    <strong>People</strong><br>
    {% if page.people_slugs %}
      {% for slug in page.people_slugs %}
        {% assign person = site.people | where: "slug", slug | first %}
        {% if person %}
          <a href="{{ person.url | relative_url }}">{{ person.name }} {{ person.surname }}</a>{% unless forloop.last %}, {% endunless %}
        {% else %}
          {{ slug }}{% unless forloop.last %}, {% endunless %}
        {% endif %}
      {% endfor %}
    {% else %}
      —
    {% endif %}
  </div>
  {% if page.grants and page.grants.size > 0 %}
  <div class="project-meta-item">
    <strong>Grants</strong><br>
    {% for g in page.grants %}
      {% if g.url %}
        <a href="{{ g.url }}">{{ g.name | default: g }}</a>{% unless forloop.last %}, {% endunless %}
      {% elsif g.name %}
        {{ g.name }}{% unless forloop.last %}, {% endunless %}
      {% else %}
        {{ g }}{% unless forloop.last %}, {% endunless %}
      {% endif %}
    {% endfor %}
  </div>
  {% endif %}
</div>

# Fulgor

## Publications
The Fulgor index is described in the following papers.

- **[Fulgor: A Fast and Compact k-mer Index for Large-Scale Matching and Color Queries](https://almob.biomedcentral.com/articles/10.1186/s13015-024-00251-9)**  
  *Algorithms for Molecular Biology (ALMOB)*, 2024.

- **[Meta-colored Compacted de Bruijn Graphs](https://link.springer.com/chapter/10.1007/978-1-0716-3989-4_9)**  
  *International Conference on Research in Computational Molecular Biology (RECOMB)*, 2024.

- **[Where the Patterns Are: Repetition-Aware Compression for Colored de Bruijn Graphs](https://www.liebertpub.com/doi/10.1089/cmb.2024.0714)**  
  *Journal of Computational Biology (JCB)*, 2024.

- **[Fast Pseudoalignment Queries on Compressed Colored de Bruijn Graphs](https://doi.org/10.4230/LIPIcs.WABI.2025.6)**  
  *International Conference on Algorithms for Bioinformatics (WABI)*, 2025.

# SSHash

## Description

SSHash is a compressed dictionary data structure for k-mers (strings of length k over the DNA alphabet {A,C,G,T}), based on Sparse and Skew Hashing.

The data structure is described in the following papers:

1. **[Sparse and Skew Hashing of K-Mers](https://doi.org/10.1093/bioinformatics/btac245)**  
2. **[On Weighted K-Mer Dictionaries](https://almob.biomedcentral.com/articles/10.1186/s13015-023-00226-2)**

Please cite these papers if you use SSHash.

## Supported Queries

For a dictionary of *n* k-mers, two basic queries are supported:

- **Lookup**: `i = Lookup(g)`, where `i ∈ [0,n)` if the k-mer `g` is found in the dictionary or `i = -1` otherwise.  
- **Access**: `g = Access(i)`, where `g` is the k-mer associated to the identifier `i`.

If the weights of the k-mers (their frequency counts) are also stored, the dictionary is said to be **weighted** and additionally supports:

- **Weight**: `w = Weight(i)`, where `i` is a given k-mer identifier and `w` is the weight of the k-mer.

Other supported queries are:

- **Membership Queries**: determine if a given k-mer is present in the dictionary or not.  
- **Streaming Queries**: stream through all k-mers of a given DNA file (`.fasta` or `.fastq` formats) to determine their membership to the dictionary.  
- **Navigational Queries**: given a k-mer `g[1..k]`, determine if `g[2..k]+x` is present (forward neighbourhood) and if `x+g[1..k-1]` is present (backward neighbourhood), for `x = A, C, G, T` (`+` here means string concatenation).  
  SSHash internally stores a set of strings, called **contigs**, each associated to a distinct identifier. If a contig identifier is specified for a navigational query (rather than a k-mer), then the backward neighbourhood of the first k-mer and the forward neighbourhood of the last k-mer in the contig are returned.

> If you are interested in a membership-only version of SSHash, have a look at **SSHash-Lite**. It also works for input files with duplicate k-mers (e.g., matchtigs [4]). For a query sequence `S` and a given coverage threshold `E ∈ [0,1]`, the sequence is considered to be present in the dictionary if at least `E·(|S|−k+1)` of the k-mers of `S` are positive.

**Note**: It is assumed that two k-mers being the reverse complement of each other are the same.

