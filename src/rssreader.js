let Parser = require("rss-parser");
let parser = new Parser({});
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let data = [];
export const readRSS = (url) => {
  parser.parseURL(CORS_PROXY + url, function (err, feed) {
    if (err) throw err;
    feed.items.forEach((entry) => {
      let feedObject = {
        "feedTitle": feed.title,
        "entryTitle": entry.title,
        "content": entry.content,
        "pubDate": entry.pubDate,
        "link": entry.link,
        "contentSnippet": entry.contentSnippet,
      };
      data.push(feedObject);
    });
  });
  return data;
};
export default readRSS;
