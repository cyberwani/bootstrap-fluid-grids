Bootstrap Fluid Grids
=====================

##Summary
These stylesheets provide additional fluid-grid layouts, including a 5-, 7-, 15-, 16- and 24-column fluid grid systems using SCSS.

##Why?
Since Bootstrap replaced their 16-column grid system with a 12-column grid system, I've been wanting more. While the 12-column framework is a more versatile layout, I've seen what 24-column frameworks are capable of.

In addition, 12-column grid systems are not able to produce odd-numbered column layouts, such as 5- and 7-column layouts.

This project offers a way to have multiple grid systems using Bootstrap and to be able to switch between and even nest them as needed.



##Usage
The included stylesheets follow the same naming convention used by Bootstrap.

First, include the stylesheet(s) you want to use.

<pre>&lt;link href="lib/row-fluid-5.css" rel="stylesheet" /></pre>

The class name of the row will be <code>row-fluid-[columnCount]</code>.

<pre>
&lt;div class="row-fluid-5">
  &lt;div class="span2">&lt;/div>
  &lt;div class="span3">&lt;/div>
&lt;/div>
</pre>

Nesting rows is perfectly fine:

<pre>
&lt;div class="row-fluid-5">
  &lt;div class="span2">
    &lt;div class="row-fluid-5">
      &lt;div class="span1">&lt;/div>
      &lt;div class="span3">&lt;/div>
      &lt;div class="span1">&lt;/div>
    &lt;/div>
  &lt;/div>
  &lt;div class="span3">&lt;/div>
&lt;/div>
</pre>

These fluid grids also work with the original fluid grids (for readability purposes, I recommend using the included <code>.row-fluid-12</code> class instead of Bootstrap's default <code>.row-fluid</code>):

<pre>
&lt;div class="row-fluid">
  &lt;div class="span6">
    &lt;div class="row-fluid-5">
      &lt;div class="span1">&lt;/div>
      &lt;div class="span3">&lt;/div>
      &lt;div class="span1">&lt;/div>
    &lt;/div>
  &lt;/div>
  &lt;div class="span6">&lt;/div>
&lt;/div>
</pre>

That's it!


##I need a variation of one of your grid systems. How can I make my own?

I have provided a SCSS mixin that will allow you to create your own. Simply reference the following in a SCSS file of your own to compile your stylesheet:

<code>@include fluid-grid([columnCount(int)][, gutterWidth(px)][, includeResponsive(bool)][, className(string)])</code>

Note that if a class name is not provided, it will name the row <code>row-fluid-[columnCount]</code>.

The mixin will output all of the styles you need for your fluid grid. 
