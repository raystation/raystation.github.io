---
title: Recommendations
layout: app-main.html
---
# Recommendations
<ul>
{%- for post in collections.recs -%}
	<li><a href='{{ post.url }}'>{{ post.data.title }}</a>
{%- endfor -%}
</ul>

## Best of the Year
<ul>
{%- for post in collections.top2023 -%}
	<li><a href='{{ post.url }}'>{{ post.data.title }}</a>
{%- endfor -%}
</ul>