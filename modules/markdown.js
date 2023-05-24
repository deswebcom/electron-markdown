const md = require('markdown-it')();

const convertToHTML = (event, markdown) => {
  console.log(md.render(markdown));
  return md.render(markdown);
}

module.exports = {
  convertToHTML,
}