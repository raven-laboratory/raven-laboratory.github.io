---
title: "Algorithmic Fairness"
excerpt: "We study computational problems with a focus on fairness guarantees, predominantly problems related to social networks."
white-logo: "/images/alg_fairness.png"
black-logo: "/images/alg_fairness.png"
people_slugs:
  - becker-ruben
collaborators:
  - name: Gianlorenzo D’Angelo
    url: https://cs.gssi.it/gianlorenzo.dangelo/
  - name: Cosimo Vinci
    url: https://sites.google.com/view/cosimo-vinci
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

We consider classical computational problems that occur in the real world, e.g., problems related to the spreading of information in social networks. Instead of studying them from the traditional efficiency-focused perspective, we aim at algorithms that optimize fairness in this context. This is a research project at the intersection of combinatorial algorithms, probabilistic analysis, network theory, and stochastic optimization.

{% if page.collaborators and page.collaborators.size > 0 %}
## Frequent Collaborators
<ul>
{% for c in page.collaborators %}
  {% if c.name and c.url %}
    <li><a href="{{ c.url }}">{{ c.name }}</a></li>
  {% else %}
    {% assign html = c | markdownify %}
    <li>{{ html | strip_newlines | remove: "<p>" | remove: "</p>" }}</li>
  {% endif %}
{% endfor %}
</ul>
{% endif %}

## Selected Publications

- Ruben Becker, Bojana Kodric, Cosimo Vinci.  
  **Greedily Maximizing Ex-Ante Fairness.**  
  40th AAAI Conference on Artificial Intelligence (AAAI 2026).

- Ruben Becker, Gianlorenzo D’Angelo, Sajjad Ghobadi.  
  **[Improving Fairness in Information Exposure by Adding Links.](https://ojs.aaai.org/index.php/AAAI/article/view/26652)** \
  37th AAAI Conference on Artificial Intelligence (AAAI 2023).

- Ruben Becker, Gianlorenzo D’Angelo, Sajjad Ghobadi.  
  **[On the Cost of Demographic Parity in Influence Maximization.](https://ojs.aaai.org/index.php/AAAI/article/view/26651)**  
  37th AAAI Conference on Artificial Intelligence (AAAI 2023).

- Ruben Becker, Gianlorenzo D’Angelo, Sajjad Ghobadi, Hugo Gilbert.  
  **[Fairness in Influence Maximization through Randomization.](https://www.google.com/search?client=safari&rls=en&q=Fairness+in+Influence+Maximization+through+Randomization.&ie=UTF-8&oe=UTF-8)**  
  Journal of Artificial Intelligence Research (JAIR), 2022.

- Ruben Becker, Federico Coró, Gianlorenzo D’Angelo, Hugo Gilbert.  
  **[Balancing Spreads of Influence in a Social Network.](https://ojs.aaai.org/index.php/AAAI/article/view/5327)**  
  34th AAAI Conference on Artificial Intelligence (AAAI 2020).
