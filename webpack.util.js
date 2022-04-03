const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const getHtml = () => {
  const html = [];
  glob.sync('./server/**/*.*(html)').forEach(item => {
    const filePath = item
    const filename = filePath.split(path.sep).pop()
    html.push(new HtmlWebpackPlugin({
      filename,
      template: filePath,
      chunks: [filename.replace('.html', '')]
    }))
  });
  return html;
}

const getEntryConfig = (origin) => {
  let entryObj = {};
  glob.sync(`./${origin}/**/*.*(ts)`).forEach(item => {
    const filePath = item
      .replace(`./${origin}/`, '')
      .replace('.ts', '')
    entryObj[filePath] = item;
  });
  return entryObj;
}


module.exports = {
  getHtml,
  getEntryConfig
}
