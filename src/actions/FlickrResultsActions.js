import axios from 'axios';

import settings from '../../settings';

const FLICKR_API_URL = settings.getUrl();

/**
 * fetchFlickrResults
 * @param text
 * @returns {{type: string, payload: {text: *}}}
 */
export function fetchFlickrResults(text) {
    return {
        type: 'FETCH_FLICKR_RESULTS',
        payload: {
            searchResults: { /* Example */
                images: [
                    { test: 'test1' },
                    { test: 'test2' },
                    { test: 'test3' },
                    { test: 'test4' },
                ]
            }
        }
    }
}
