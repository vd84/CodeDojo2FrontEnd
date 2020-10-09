let Parser = require('rss-parser');
let parser = new Parser({});
<<<<<<< HEAD
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
=======
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
    });
    return data;
  });
};
export default readRSS;
>>>>>>> master
