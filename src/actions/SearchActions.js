import axios from 'axios';

import settings from '../../settings';

//const FEATURED_VIDEO_API_URL = settings.getUrl('videos');

/**
 * fetchFlickrResults
 * @param text
 * @returns {{type: string, payload: {text: *}}}
 */
export function fetchFlickrResults(text) {
    return {
        type: 'FETCH_FLICKR_RESULTS',
        payload: {
            searchResults: {
                images: [
                    { test: 'test' },
                    { test: 'test' },
                    { test: 'test' },
                    { test: 'test' },
                ]
            }
        }
    }
}

export function textEntered(text) {
    return {
        type: 'SEARCH_TEXT_ENTERED',
        payload: {
            text: text
        }
    }
}
