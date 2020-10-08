
let Parser = require('rss-parser');
let parser = new Parser({
});

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export const readRSS = (url) => {
    parser.parseURL(CORS_PROXY + url, function (
        err,
        feed
      ) {
        if (err) throw err;
        console.log(feed.title);
        feed.items.forEach(function (entry) {
          console.log(entry.title + ":" + entry.link);
        });
      });
}

export default readRSS;