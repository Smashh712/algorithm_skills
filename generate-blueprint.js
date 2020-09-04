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
	Algorithm Skills는 알고리즘 개요를 시각적으로 표현한 것입니다. <a href="https://github.com/cbnu-community/algorithm_skills" target="_blank" aria-label="Link to Algorithm Skills">https://github.com/cbnu-community/algorithm_skills</a>
	<br />
	저희 프로젝트가 맘에 드셨다면 <a href="https://github.com/cbnu-community/algorithm_skills/stargazers" aria-label="Become stargazer link">별을 붙여주세요 🤩</a>
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

###Algorithm Skills가 뭔가요?
Algorithm Skills는 알고리즘 개요를 시각적으로 표현한 것입니다.

###이 페이지에 나와있는 알고리즘의 선정 기준은 무엇인가요?
최근 코딩테스트 문제에서 많이 나오고, 활용되는 알고리즘들을 우선적으로 선정했습니다

###이 프로젝트에 도움을 주려면 어떻게 하나요?
Github 이 페이지로 가서 철자 수정을 도와주시거나, 오류를 알려주시거나 새로운 기능을 제안해주시면 됩니다! 어떤 도움이든 감사합니다!

###해결한 문제는 풀었다고 표시해두고 싶은데 어떻게 하나요?
페이지 하단에 가면 "구글 로그인"이라는 버튼이 있습니다. 그 버튼을 눌러 로그인 하시면, 문제 앞에 체크박스가 생깁니다. 푼 문제는 체크박스를 클릭해서 풀었다고 표시하면 됩니다!

###옆으로 스크롤하는 거 불편한데, 세로로 스크롤 할 수 없나요?
페이지 상단 왼쪽에 보면 컴팩트 모드로 바꿀 수 있는 스위치가 있습니다! 만약 컴팩트 모드를 다른 사람에게 공유하고 싶다면, url 끝에 ?compact 를 추가해서 공유해주세요

###제작자와 컨택하려면 어떻게 해야하나요?
brill_be@naver.com 로 이메일 주세요! 이 프로젝트에 관해 더 알고싶으면 연락주시면 됩니다.

${collectionsMarkdown}
{{ template:contributors }}`);