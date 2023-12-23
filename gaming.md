---
title: Gaming
layout: app-main.html
---

<h1>Gaming</h1>

## Currently
{% for post in collections.media %}
  {% assign hasCurrentlyTag = false %}

  {% for tag in post.data.tags %}
    {% if tag == 'currently' %}
      {% assign hasCurrentlyTag = true %}
    {% endif %}
  {% endfor %}

  {%- if hasCurrentlyTag -%}
    <li><a href='{{ post.url }}'>{{ post.data.title }}</a></li>
  {%- endif -%}
{% endfor %}


## Previously
<ul>
{% for post in collections.media %}
  {% assign hasCurrentlyTag = false %}

  {% for tag in post.data.tags %}
    {% if tag == 'currently' %}
      {% assign hasCurrentlyTag = true %}
    {% endif %}
  {% endfor %}

  {%- if not hasCurrentlyTag -%}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {%- endif -%}
{% endfor %}
</ul>