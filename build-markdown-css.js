const css = require('css');
const fs = require('fs');
const path = require('path');

const input = path.resolve(__dirname, 'node_modules/github-markdown-css/github-markdown.css');
let data = fs.readFileSync(input).toString();
const styles = css.parse(data);

styles.stylesheet.rules.forEach((rule) => {
  const newSelectors = [];
  rule.selectors?.forEach((selector, i) => {
    if (selector.startsWith('.markdown-body ')) {
      rule.selectors[i] = selector.replace(/^.markdown-body /, '.markdown-body>');
      newSelectors.push(selector.replace(/^.markdown-body /, '.markdown-body>*:not(.example) '));
    }
  });
  rule.selectors?.push(...newSelectors);
});

data = css.stringify(styles);
const output = path.resolve(__dirname, 'docs/.vitepress/theme/github-markdown.css');
fs.writeFileSync(output, data);
