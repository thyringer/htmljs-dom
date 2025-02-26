# HTML.js DOM

**HTML.js DOM** is a minimal JavaScript library that provides functions to significantly reduce boilerplate code for dynamically creating and manipulating HTML on the client side.

Unlike React, **HTML.js DOM** does not require complex installation and is significantly more efficient, as it only places a minimal abstraction over the DOM API. More precisely, it provides a builder that returns a function for creating a specific nestable HTML element, as well as an additional method to set attributes, returning the element at the same time so it can be passed on immediately. That's all—and actually sufficient to make working with the DOM API much more convenient without resorting to fat, slow, and unnecessarily complicated frameworks.

For all HTML elements, predefined functions are already provided, which have exactly the same name as the HTML elements they create (with the sole exception of "var", which is called "varaibale" instead).

## Quod Erat Demonstrandum

To demonstrate the simplicity of this library, the following example is given:

```javascript
// Create the header with a title
const headerElement = header(
    h1('My Simple Website')
);

// Create a navigation bar
const navElement = nav(
    ul(
        li(a("#", "Home")),
        li(a("#about", "About")),
        li(a("#contact", "Contact"))
    )
);

// Create main content
const mainContent = main(
    section(
        h2('Welcome to My Website'),
        p('This is a simple single-page website created using JavaScript and the custom DSL.')
    ),
    section({ id: "about" },
        h2('About'),
        p('This section provides information about the website and its purpose.')
    ),
    section({ id: "contact" },
        h2('Contact'),
        p('This section will contain contact information.')
    )
);

// Create footer
const footerElement = footer(
    p('© 2025 My Simple Website')
);

// Assemble the whole page
document.body.appendChild(headerElement);
document.body.appendChild(navElement);
document.body.appendChild(mainContent);
document.body.appendChild(footerElement);
```

Basically, the functions provided do nothing other than create the HTML element they are named after and, if not empty, accept any number of other elements to append as children, or objects in general, which get automatically converted to text using toString(). This gives the impression of writing HTML directly in JavaScript. That's the whole magic behind it.

To see how much **HTML.js DOM** can reduce the amount of boilerplate code instead of using React, here is the raw version:

```javascript
// Create the header with a title
const headerElement = document.createElement("header");
const headerTitle = document.createElement("h1");
headerTitle.textContent = "My Simple Website";
headerElement.appendChild(headerTitle);

// Create a navigation bar
const navElement = document.createElement("nav");
const navList = document.createElement("ul");

const homeLink = document.createElement("li");
const homeAnchor = document.createElement("a");
homeAnchor.href = "#";
homeAnchor.textContent = "Home";
homeLink.appendChild(homeAnchor);

const aboutLink = document.createElement("li");
const aboutAnchor = document.createElement("a");
aboutAnchor.href = "#about";
aboutAnchor.textContent = "About";
aboutLink.appendChild(aboutAnchor);

const contactLink = document.createElement("li");
const contactAnchor = document.createElement("a");
contactAnchor.href = "#contact";
contactAnchor.textContent = "Contact";
contactLink.appendChild(contactAnchor);

navList.appendChild(homeLink);
navList.appendChild(aboutLink);
navList.appendChild(contactLink);

navElement.appendChild(navList);

// Create main content
const mainContent = document.createElement("main");

const welcomeSection = document.createElement("section");
const welcomeHeading = document.createElement("h2");
welcomeHeading.textContent = "Welcome to My Website";
const welcomeParagraph = document.createElement("p");
welcomeParagraph.textContent = "This is a simple single-page website created using JavaScript and the DOM API.";
welcomeSection.appendChild(welcomeHeading);
welcomeSection.appendChild(welcomeParagraph);

const aboutSection = document.createElement("section");
aboutSection.id = "about";
const aboutHeading = document.createElement("h2");
aboutHeading.textContent = "About";
const aboutParagraph = document.createElement("p");
aboutParagraph.textContent = "This section provides information about the website and its purpose.";
aboutSection.appendChild(aboutHeading);
aboutSection.appendChild(aboutParagraph);

const contactSection = document.createElement("section");
contactSection.id = "contact";
const contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact";
const contactParagraph = document.createElement("p");
contactParagraph.textContent = "This section will contain contact information.";
contactSection.appendChild(contactHeading);
contactSection.appendChild(contactParagraph);

mainContent.appendChild(welcomeSection);
mainContent.appendChild(aboutSection);
mainContent.appendChild(contactSection);

// Create footer
const footerElement = document.createElement("footer");
const footerParagraph = document.createElement("p");
footerParagraph.textContent = "© 2025 My Simple Website";
footerElement.appendChild(footerParagraph);

// Assemble the whole page
document.body.appendChild(headerElement);
document.body.appendChild(navElement);
document.body.appendChild(mainContent);
document.body.appendChild(footerElement);
```

Impressive, isn't it? And all this with less than 200 lines of boring library code and without any syntax extensions like JSX?! This is possible because *HTML.js DOM* does not try to abstract away the DOM API, but just adds a few convenience functions that simply summarize the recurring, same steps. Yes, it can be that simple!

React nonetheless offers more functionality. However, *HTML.js DOM* clearly shows that React is absolutely over-engineered nonsense from Facebook/Meta, which requires a lot of learning time with new models like components to grasp instead of simply writing vanilla JavaScript as if it were HTML.

## Server-side HTML generation

The counterpart for server-side rendering of HTML (with Node.js or Deno) is the library <a href="https://github.com/thyringer/htmljs">HTML.js</a>, which is not quite as minimal since it does not rely on an existing API, but nevertheless feels very similar in handling.

## Development Status

This library is "finished" and meant to last forever. Seriously, there's nothing really to add; maybe a few more specialized convenience functions similar to those for the buttons, but otherwise…

## License

This software is published under the Unlicense.
