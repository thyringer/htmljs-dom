/*

© 2025 Enrico Rippin <e@rippin.org>

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

*/

// 1 Additional Element Methods

/**
 * Adds a set of attributes to an HTML element.
 * @param {Object} attributes An object representing the attributes to set.
 * @returns The element itself for chaining.
 */
HTMLElement.prototype.set = function(attributes){
	for (const [key, value] of Object.entries(attributes)) {
		if (key === "class" && Array.isArray(value)) {
			this.setAttribute("class", value.join(" "));
		}
		else {
			this.setAttribute(key, value);
		}
	}
	return this;
}


// 2 Builder for Normal Elements

/**
 * Creates a builder function for generating elements with the specified tag name.
 * @param {string} tagName Name of the HTML element to create.
 * @returns Function that accepts content and generates an HTML element.
 */
export function getElementBuilder(tagName) {
	/**
	 * Creates an element with the specified tagName and appends the given content to it.
	 * @param  {...any} content HTML element or something else with specific `toString` implementation; ignoring null and undefined
	 * @returns {HTMLElement} Created HTML element with the appended content.
	 */
	return (...content) => {
		const elem = document.createElement(tagName);
		
		for (const arg of content) {
			if (arg instanceof HTMLElement) {
				elem.appendChild(arg);
			}
			else if (arg == null) {
				continue;
			}
			else {
				elem.appendChild(document.createTextNode(arg.toString()));
			}
		}

		return elem;
	}
}


//

/**
 * Creates and returns an anchor.
 * @param  {...any} content If more than one string is passed, the first one is automatically interpreted as the link address for the `href` attribute.
 * @returns {HTMLElement}
 */
export function a(...content) {
	const elem = document.createElement("a");

	if (typeof content[0] === "string" && typeof content[1] === "string") {
		elem.setAttribute("href", content.shift());
	}
		
	for (const arg of content) {
		if (arg instanceof HTMLElement) {
			elem.appendChild(arg);
		}
		else if (arg == null) {
			continue;
		}
		else {
			elem.appendChild(document.createTextNode(arg.toString()));
		}
	}

	return elem;
}


//

function __button(type) {
	return (text, action=null) => {
		const button = document.createElement("button");
		button.appendChild(document.createTextNode(text));
		if (action) button.onclick = action;
		button.type = type;
		return button;
	}
}


/**
 * Creates a button element with the specified text, action, and type.
 * @param {string} text - The text to display on the button.
 * @param {function(Event): void} action - The function to call when the button is clicked.
 * @returns {HTMLButtonElement} - The created button element.
 */
export const button = __button("button");


/**
 * Creates a submit button element with the specified text, action, and type.
 * @param {string} text - The text to display on the button.
 * @param {function(Event): void} action - The function to call when the button is clicked.
 * @returns {HTMLButtonElement} - The created button element.
 */
button.submit = __button("submit");


/**
 * Creates a reset button element with the specified text, action, and type.
 * @param {string} text - The text to display on the button.
 * @param {function(Event): void} action - The function to call when the button is clicked.
 * @returns {HTMLButtonElement} - The created button element.
 */
button.reset = __button("reset");


//

export const address = getElementBuilder("address");
export const article = getElementBuilder("article");
export const aside = getElementBuilder("aside");
export const audio = getElementBuilder("audio");
export const b = getElementBuilder("b");
export const bdi = getElementBuilder("bdi");
export const bdo = getElementBuilder("bdo");
export const blockquote = getElementBuilder("blockquote");
export const body = getElementBuilder("body");
export const canvas = getElementBuilder("canvas");
export const caption = getElementBuilder("caption");
export const cite = getElementBuilder("cite");
export const code = getElementBuilder("code");
export const colgroup = getElementBuilder("colgroup");
export const data = getElementBuilder("data");
export const datalist = getElementBuilder("datalist");
export const details = getElementBuilder("details");
export const div = getElementBuilder("div");
export const dl = getElementBuilder("dl");
export const dt = getElementBuilder("dt");
export const em = getElementBuilder("em");
export const fieldset = getElementBuilder("fieldset");
export const figcaption = getElementBuilder("figcaption");
export const figure = getElementBuilder("figure");
export const footer = getElementBuilder("footer");
export const form = getElementBuilder("form");
export const h1 = getElementBuilder("h1");
export const h2 = getElementBuilder("h2");
export const h3 = getElementBuilder("h3");
export const h4 = getElementBuilder("h4");
export const h5 = getElementBuilder("h5");
export const h6 = getElementBuilder("h6");
export const header = getElementBuilder("header");
export const html = getElementBuilder("html");
export const i = getElementBuilder("i");
export const iframe = getElementBuilder("iframe");
export const ins = getElementBuilder("ins");
export const kbd = getElementBuilder("kbd");
export const label = getElementBuilder("label");
export const legend = getElementBuilder("legend");
export const li = getElementBuilder("li");
export const main = getElementBuilder("main");
export const map = getElementBuilder("map");
export const mark = getElementBuilder("mark");
export const menu = getElementBuilder("menu");
export const menuitem = getElementBuilder("menuitem");
export const meter = getElementBuilder("meter");
export const nav = getElementBuilder("nav");
export const noscript = getElementBuilder("noscript");
export const object = getElementBuilder("object");
export const ol = getElementBuilder("ol");
export const optgroup = getElementBuilder("optgroup");
export const option = getElementBuilder("option");
export const output = getElementBuilder("output");
export const p = getElementBuilder("p");
export const param = getElementBuilder("param");
export const picture = getElementBuilder("picture");
export const pre = getElementBuilder("pre");
export const progress = getElementBuilder("progress");
export const q = getElementBuilder("q");
export const rp = getElementBuilder("rp");
export const rt = getElementBuilder("rt");
export const ruby = getElementBuilder("ruby");
export const s = getElementBuilder("s");
export const samp = getElementBuilder("samp");
export const script = getElementBuilder("script");
export const section = getElementBuilder("section");
export const select = getElementBuilder("select");
export const small = getElementBuilder("small");
export const span = getElementBuilder("span");
export const strong = getElementBuilder("strong");
export const style = getElementBuilder("style");
export const sub = getElementBuilder("sub");
export const summary = getElementBuilder("summary");
export const sup = getElementBuilder("sup");
export const table = getElementBuilder("table");
export const tbody = getElementBuilder("tbody");
export const td = getElementBuilder("td");
export const template = getElementBuilder("template");
export const textarea = getElementBuilder("textarea");
export const tfoot = getElementBuilder("tfoot");
export const th = getElementBuilder("th");
export const thead = getElementBuilder("thead");
export const time = getElementBuilder("time");
export const title = getElementBuilder("title");
export const tr = getElementBuilder("tr");
export const u = getElementBuilder("u");
export const ul = getElementBuilder("ul");
export const variable = getElementBuilder("var");
export const video = getElementBuilder("video");


// 3 Builders for Void Elements

export const area = () => document.createElement("area");
export const base = () => document.createElement("base");
export const br = () => document.createElement("br");
export const col = () => document.createElement("col");
export const embed = () => document.createElement("embed");
export const hr = () => document.createElement("hr");
export const img = () => document.createElement("img");
export const input = () => document.createElement("input");
export const link = () => document.createElement("link");
export const meta = () => document.createElement("meta");
export const source = () => document.createElement("source");
export const track = () => document.createElement("track");
export const wbr = () => document.createElement("wbr");
