const md = require('markdown-it')();

const convertToHTML = (event, markdown) => {
  return md.render(markdown);
}

module.exports = {
  convertToHTML,
}