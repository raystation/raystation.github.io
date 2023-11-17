---
title: Photography
layout: app-main.html
---

# Photography

<p class='intro'>
  A collection of photos taken on my X-100.
</p>

<ul>
  {%- for post in collections.photography -%}
  <li><a href='{{ post.url }}'>{{ post.data.title }}</a>
  {%- endfor -%}
</ul>
