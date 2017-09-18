const settings = {
    flickr: {
        FLICKR_SEARCH_METHOD: 'flickr.photos.search',
        FLICKR_BASE_URL: 'http://api.flickr.com/services/rest/',
        FLICKR_KEY: 'c3001732c0651103d2384e411eade33c',
        FLICKR_SECRET: 'fb9174d0271b92da'
    },
    /**
     * Get full API URL:
     * Usage: settings.getPath('search')
     */
    getUrl: (() => `${settings.flickr.FLICKR_BASE_URL}/?method=${settings.FLICKR_SEARCH_METHOD}`)
};

export default settings;