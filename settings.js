const settings = {
  flickr: {
    API_ENDPOINT: 'https://api.flickr.com/services/rest',
    SEARCH_METHOD: 'flickr.photos.search',
    API_KEY: 'c3001732c0651103d2384e411eade33c',
    SECRET: 'fb9174d0271b92da',
    DEFAULT_MAX_PER_PAGE: 10
  },
  /**
   * Get full API URL:
   * Usage: settings.getPath()
   */
  getUrl: ((tags, perPage=settings.flickr.DEFAULT_MAX_PER_PAGE) =>
    `${settings.flickr.API_ENDPOINT}/`
      + `?method=${settings.flickr.SEARCH_METHOD}`
      + `&api_key=${settings.flickr.API_KEY}`
      + `&tags=${tags.replace(/\s+/g, ',')}` // Make this a little more robust!
      + `&per_page=${perPage}&format=json&nojsoncallback=1`)
};

export default settings;