  export const DBConfig = {
    name: 'RssStorage',
    version: 1,
    objectStoresMeta: [
      {
        store: 'rssDataStore',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
            { name: 'feedTitle', keypath: 'feedTitle', options: { unique: false } },
            { name: 'entryTitle', keypath: 'entryTitle', options: { unique: true } },
            { name: 'content', keypath: 'content', options: { unique: false } },
            { name: 'pubDate', keypath: 'pubDate', options: { unique: false } },
            { name: 'link', keypath: 'link', options: { unique: false } },
            { name: 'contentSnippet', keypath: 'contentSnippet', options: { unique: false } },
        ]
      }
    ]
  };