import {writeFileSync} from "fs";
import {collections} from "./src/data.js";

const LINE_BREAK = `\r\n`;
const PARAGRAPH_BREAK = `${LINE_BREAK}${LINE_BREAK}`;
const INITIAL_TITLE_LEVEL = 2;
const FILE_NAME = `blueprint.md`;
const DEFAULT_URL_ICON = "📜";
const URL_ICON_MAPPER = [
	["📹", ["youtube"]],
	["🔖", ["wikipeia"]],
	["🧪", ["codelab", "github"]],
	["⚙️", ["toolbox", "webaim", "w3c", "thinkwithgoogle", "w3"]],
	["🎓", ["course", "udacity"]],
	["📖", ["book", "amazon", "refactoringui.com"]],
	["📐", ["resource", "glitch.me", "codepen"]],
	["❓", ["quora", "stackoverflow"]],
];

/**
 * Returns the origin of the url.
 * @param url
 * @returns {string}
 */
function getURLOrigin (url) {
	try {
		return (new URL(url)).origin;
	} catch (err) {
		return url;
	}
}

/**
 * Returns an icon for a URL.
 * @param url
 * @returns {string}
 */
function iconForUrl (url) {
	for (const [icon, keywords] of URL_ICON_MAPPER) {
		if (keywords.find(k => url.includes(k)) != null) {
			return icon;
		}
	}

	return DEFAULT_URL_ICON;
}

/**
 * Returns a logo for a URL.
 * @param url
 * @returns {string}
 */
function logoForUrl (url) {
	return `<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=${encodeURIComponent(getURLOrigin(url))}" alt="Logo" />`;
}

/**
 * Generals markdown for a heading.
 * @param text
 * @param level
 * @returns {string}
 */
function generateMarkdownHeading (text, level) {
	return `${Array(Math.min(level, 6)).fill("#").join("")} ${text}`;
}

/**
 * Generates markdown for an array of links.
 * @param links
 * @returns {string}
 */
function generateLinksMarkdown (links) {
	//const parts = links.map(([name, url]) => `* [ ] ${iconForUrl(url)} [${name}](${url}) ${logoForUrl(url)}`);
	const parts = links.map(([name, url]) => `* [ ] [${logoForUrl(url)} ${name}](${url})`);
	//const parts = links.map(([name, url]) => `* [ ] <a href="${url}" target="_blank">${logoForUrl(url)} ${name}</a>`);
	return parts.join(LINE_BREAK);
}

/**
 * Generates markdown for a skill.
 * @param skill
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateSkillMarkdown (skill, area, collection, level) {
	const {name, description, skills} = skill;
	let markdown = `${generateMarkdownHeading(name, level)}${PARAGRAPH_BREAK}${description != null ? `${description.text != null ? `${description.text}${PARAGRAPH_BREAK}` : ""}${generateLinksMarkdown(description.links || [])}` : ""}${LINE_BREAK}`;
	if (skills != null) {
		markdown = `${markdown}${LINE_BREAK}${generateSkillsMarkdown(skills, area, collection, level + 1)}`
	}

	return markdown;
}

/**
 * Generates markdown for an array of skills.
 * @param skills
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateSkillsMarkdown (skills, area, collection, level) {
	const parts = skills.map(skill => generateSkillMarkdown(skill, area, collection, level));
	return parts.join(LINE_BREAK);
}

/**
 * Generates markdown for an area.
 * @param area
 * @param collection
 * @param level
 * @returns {string}
 */
function generateAreaMarkdown (area, collection, level) {
	return `${area.name != null ? `${generateMarkdownHeading(area.name, level)}${PARAGRAPH_BREAK}` : ""}${generateSkillsMarkdown(area.skills, area, collection, level)}`
}

/**
 * Generates markdown for a collection.
 * @param collection
 * @param level
 * @returns {string}
 */
function generateCollectionMarkdown (collection, level) {
	const parts = collection.areas.map(area => generateAreaMarkdown(area, collection, level + 1));
	return `${generateMarkdownHeading(collection.name, level)}${PARAGRAPH_BREAK}${parts.join(PARAGRAPH_BREAK)}`;
}

/**
 * Generates markdown for an array of collections.
 * @param collections
 * @returns {string}
 */
function generateCollectionsMarkdown (collections) {
	const parts = collections.map(collection => generateCollectionMarkdown(collection, INITIAL_TITLE_LEVEL));
	return parts.join(PARAGRAPH_BREAK);
}

// Generate the collections markdown
const collectionsMarkdown = generateCollectionsMarkdown(collections);

// Create the blueprint file.
writeFileSync(FILE_NAME, `<h1 align="center">Algorithm Skills</h1>
# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cbnu-community/algorithm_skills/blob/master/LICENSE.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/cbnu-community/algorithm_skills/wiki)
<p align="center">
	Algorithm Skills is a visual overview of various algorithms. Go to <a href="https://github.com/cbnu-community/algorithm_skills" target="_blank" aria-label="Link to Algorithm Skills">https://github.com/cbnu-community/algorithm_skills</a> to check out the visual overview or scroll through this readme to get the overview <a href="#-fundamentals" target="_blank" aria-label="Link to list of skills">as a list</a>. If you like the project you are very welcome to <a href="https://github.com/cbnu-community/algorithm_skills/stargazers" aria-label="Become stargazer link">become a stargazer 🤩</a>
</p> 
<p align="center">
	<a href="https://github.com/cbnu-community/algorithm_skills" target="_blank">
		<img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Algorithm Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 Table of Contents</summary>
<br />
{{ template:toc }}
</details>

## FAQ

### What is Algorithm Skills?

Algorithm Skills is a visual overview of useful algorithm skills to learn.

${collectionsMarkdown}
{{ template:contributors }}
{{ template:license }}`);