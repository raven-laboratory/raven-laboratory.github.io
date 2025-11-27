---
layout: archive
title: "People"
permalink: /people/
author_profile: true
---

{% include base_path %}

{% for person in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}
