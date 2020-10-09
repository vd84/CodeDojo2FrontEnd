let Parser = require("rss-parser");
let parser = new Parser({});
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let data = [];
const setObject = (
  feedTitle,
  entryTitle,
  content,
  pubDate,
  link,
  contentSnippet
) => {
  let feedObject = {
    feedTitle: feedTitle,
    entryTitle: entryTitle,
    content: content,
    pubDate: pubDate,
    link: link,
    contentSnippe: contentSnippet,
  };

  data.push(feedObject);
};
export const readRSS = async (url) => {
  parser.parseURL(CORS_PROXY + url, function (err, feed) {
    if (err) throw err;
    feed.items.map((entry) => {
      setObject(
        feed.title,
        entry.title,
        entry.content,
        entry.pubDate,
        entry.link,
        entry.contentSnippet
      );
    });
    console.log(data);
  });
  return data;

};

export default readRSS;
