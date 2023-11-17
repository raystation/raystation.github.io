---
title: Projects
layout: app-main.html
---

# Projects
<ul>
  {%- for post in collections.projects -%}
  <li><a href='{{ post.url }}'>{{ post.data.title }}</a>
  {%- endfor -%}
</ul>