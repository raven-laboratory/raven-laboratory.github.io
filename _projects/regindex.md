---
title: "REGINDEX"
excerpt: "Compressed Indexes for Regular Languages with Applications to Computational Pan-genomics."
white-logo: "/images/regindex_logo_white.png"
black-logo: "/images/regindex_logo_black.jpg"
people_slugs:
  - prezza-nicola
  - becker-ruben
  - cenzato-davide
  - tosoni-carlo
  - puttini-daniel
  - campanelli-alessio
  - maso-riccardo
  - tonetto-davide
grants:
  - name: "European Research Council (ERC) grant agreement No. 101039208."
    url: "https://erc.europa.eu/"
website: "https://pric.unive.it/projects/regindex/home"
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
  <div class="project-meta-item">
    <strong>Grants</strong><br>
    {% if page.grants %}
      {% for g in page.grants %}
        {% if g.url %}
          <a href="{{ g.url }}">{{ g.name | default: g }}</a>{% unless forloop.last %}, {% endunless %}
        {% elsif g.name %}
          {{ g.name }}{% unless forloop.last %}, {% endunless %}
        {% else %}
          {{ g }}{% unless forloop.last %}, {% endunless %}
        {% endif %}
      {% endfor %}
    {% else %}
      —
    {% endif %}
  </div>
</div>

Sorting is, arguably, the most powerful algorithmic building block when it comes to indexing data. At the same time, the regularities exposed by sorting are precisely those enabling data compression. In the last two decades, this fascinating duality has led researchers to the design of compressed full-text indexes: data structures supporting fast pattern matching queries over compressed text. In this project, we revisit the natural generalization of the problem to labeled graphs from a new perspective: we interpret graphs as finite-state automata and investigate the connections existing between their propensity to be sorted and the regular languages they recognize. This novel language-theoretic approach makes it possible to transfer fundamental results between the mature fields of regular language theory and compressed text indexing. The project aims at building this bridge by developing a new theory of compressed regular language indexing.

The project finds important applications to the rapidly-expanding field of computational pangenomics, where the goal is to study the variations contained in the genomes of an entire population. Recent research has shown that representing pan-genomes as labeled graphs is an important step to reduce reference allele bias. Existing approaches, however, can index only restricted classes of graphs, thereby limiting the practical applicability of such powerful pan-genome representations. 

The project’s approach, based on sorting regular languages by partial co-lexicographic orders (see figure), changes the perspective from which the compressed indexing problem has been tackled in the literature. This project aims at developing a theory of graph indexing and compression based on the natural interplay between sorting and regular language theory. 
