let Parser = require('rss-parser');
let parser = new Parser({});
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
export const readRSS = (url) => {
  let data = [];
  return parser.parseURL(CORS_PROXY + url).then((feed) => {
    feed.items.map((entry) => {
      data.push({
        entryTitle: entry.title,
        feedTitle: feed.title,
        content: entry.content,
        pubDate: entry.pubDate,
        link: entry.link,
        contentSnippet: entry.contentSnippet,
      });
      return true
    });
    return data;
  }).catch(err => console.log(err));
};
export default readRSS;
