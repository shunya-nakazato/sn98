import fs from 'fs';
import path from 'path';
import { parse, HtmlGenerator } from 'latex.js';
import { createHTMLWindow } from 'svgdom';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

global.window = createHTMLWindow();
global.document = window.document;

const inputDir = path.join(__dirname, 'app/articles/_contents');
const outputDir = path.join(__dirname, 'app/articles/_contents/html');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Get all .tex files from the input directory
const files = fs.readdirSync(inputDir)
	.filter(file => file.endsWith('.tex'));

files.forEach(file => {
	const tex = fs.readFileSync(path.join(inputDir, file), 'utf8');
	const generator = new HtmlGenerator({ hyphenate: false });
	const doc = parse(tex, { generator }).htmlDocument();
	const html = doc.body.innerHTML;
	fs.writeFileSync(path.join(outputDir, file.replace('.tex', '.html')), html);
}); 