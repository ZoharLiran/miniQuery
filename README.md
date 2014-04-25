# miniQuery challenge

##Learning Competencies
- Create modular code in Javascript.
- Implement css selector library in Javascript.
- Implement DOM manipulation library in Javascript.
- Implement event dispatch library in Javascript.
- Implement http requests library in Javascript.
- Understand and reimplement jQuery as a toolbelt that collects various libraries.

##Summary
[jQuery](http://jquery.com/) is a very popular Javascript toolbelt. It is a collection of tools, each tool allows you to do a very specific job, for example:

  - Select elements with css: $('#id'), $('.class'), $('element')
  - Manipulate the DOM: .show(), .hide(), .addClass(), .removeClass(), etc.
  - Dispatch and listen for events: .trigger(...), .on(...)
  - Send http requests: $.ajax

It's important to realize that jQuery is not just one thing, it's a collection of things grouped under one framework. In fact, some parts of it could be used as standalone tools. For example, jQuery uses [Sizzle](https://github.com/jquery/sizzle) under the hood as its selector engine.

In this challenge we will decompose jQuery and reimplement some of its functionality. We will start by implementing each tool on its own. Eventually, we will group everything together under one toolbelt: miniQuery. The objective is to remove the "magic" from jQuery and realize that it's nothing you couldn't write. It's also important to separate the different tools that jQuery provides you by function and to be able to identify them as separate components collected under one umbrella.


###Dive Deeper
- [Bonzo](https://github.com/ded/bonzo)
- [reqwest](https://github.com/ded/reqwest)
- [Bean](https://github.com/fat/bean)
