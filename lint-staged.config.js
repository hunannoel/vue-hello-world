module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write', 'eslint --fix'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json',
  ],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write'],
  '*.{scss,less,styl,css,html}': ['prettier --write'],
  '*.md': ['prettier --write'],
};
