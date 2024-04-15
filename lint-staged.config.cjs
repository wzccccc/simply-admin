module.exports = {
  "*.md": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "package.json": ["prettier --write"],
  "*.{scss,less,styl,html}": ["stylelint --fix --allow-empty-input", "prettier --write"]
};
