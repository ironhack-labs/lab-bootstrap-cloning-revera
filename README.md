<p align="center"><img width="250" src="https://i.imgur.com/lMo1s1G.png"/></p>

# Cloning with Bootstrap

In this Lab we'll be reproducing an existing design using Bootstrap.

The [Significa](https://significa.co/) website is a beautiful example of what can be achieved with some simple styling and a minimalist mindset.

![Significa Base](https://raw.githubusercontent.com/josecarneiro/lab-bootstrap-cloning-template/master/starter-code/template.png)

## Deliverables

You should aim to get as close to the original design as possible, while using as little custom CSS as possible.

## Instructions

First, let's download Bootstrap from the [official website](https://getbootstrap.com). Select the compiled CSS + JS version, and download the `.zip` file. Inside, you'll find some of the compiled Bootstrap files we'll need to develop our Bootstrap-based website.

Copy the `css/bootstrap.min.css` file to the folder `stater-code/style`, and the `js/bootstrap.bundle.js` to the folder `stater-code/scripts`.

Inside of the `head` tag in our `index.html` let's import the following CSS files:

- A [CSS reset](https://meyerweb.com/eric/tools/css/reset/reset.css), to normalize the base stylings between every browser.
- The minified version of Bootstrap's stylesheets, `style/bootstrap.min.css`.
- Our custom styles, `styles/index.css`.

Additionally, include the [responsive meta tag](https://getbootstrap.com/docs/4.3/getting-started/introduction/#responsive-meta-tag).

At the bottom of the `body` tag in our `index.html`, include the following scripts:

- A [minified version of jQuery](https://code.jquery.com/jquery-3.3.1.slim.min.js), to provide Bootstrap with some of it's interactive functionalities.
- The minified version of Bootstrap's scripts, `scripts/bootstrap.bundle.js`.
- Our custom scripts, `scripts/script.js`.

### Iteration 1: Build the general layout

To start, focus on the [general layout](https://getbootstrap.com/docs/4.3/layout/overview/) of the page. Use semantically appropriate HTML tags to outline the contents of your page, and include Bootstrap [components](https://getbootstrap.com/docs/4.3/components/) when relevant.

Don't waste time on the minutia at this stage. Your priority should be placing things where they should be.

At this stage, you'll find its particularly useful to use the following Bootstrap classes: `container`, `row` and `col`.

Remember, you are not allowed to use custom CSS at this stage.

### Iteration 2: Apply utility classes

It's time to make things look good.

Using Bootstrap [utilities](https://getbootstrap.com/docs/4.3/utilities/), try to approximate your page as much as possible to the original.

Remember, you are not allowed to use custom CSS at this stage.

### Iteration 3: Add custom CSS

Now lets make it perfect.

By writing custom CSS in the `style/index.css` file, you should make your website look as close as possible to the original. You might want to use a custom font loaded from the [Google Fonts website](https://fonts.google.com/).

### Bonus | Iteration 4: Deploy

Deploy your project to [Netlify](https://www.netlify.com) or [GitHub Pages](https://pages.github.com/).

**Happy Coding!** 💙
