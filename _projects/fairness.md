---
title: "Algorithmic Fairness"
excerpt: "We study computational problems with a focus on fairness guarantees, predominantly problems related to social networks."
white-logo: "/images/alg_fairness.png"
black-logo: "/images/alg_fairness.png"
people_slugs:
  - ruben-becker
collaborators:
  - name: Gianlorenzo D’Angelo
    url: https://cs.gssi.it/gianlorenzo.dangelo/
  - name: Cosimo Vinci
    url: https://sites.google.com/view/cosimo-vinci
---

## Description
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
