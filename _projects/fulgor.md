---
title: "Fulgor"
excerpt: "Fulgor is a colored de Bruijn graph index for large-scale matching and color queries, powered by SSHash and GGCAT."
white-logo: "/images/fulgor_logo.png"
black-logo: "/images/fulgor_logo.png"
people_slugs:
  - pibiri-giulio
  - campanelli-alessio
  - cologni-davide
website: "https://github.com/jermp/fulgor"
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
