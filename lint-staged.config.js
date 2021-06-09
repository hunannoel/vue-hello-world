module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write', 'eslint --fix', 'git add'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json',
  ],
  'package.json': ['prettier --write', 'git add'],
  '*.vue': ['prettier --write', 'git add'],
  '*.{scss,less,styl,css,html}': ['prettier --write', 'git add'],
  '*.md': ['prettier --write', 'git add'],
};
