import axios from 'axios';

import settings from '../../settings';

/**
 * fetchFlickrResults
 * @param tags
 * @returns {{type: string, payload: {text: *}}}
 */

export function fetchFlickrResults(tags) {
    return {
        type: 'FETCH_FLICKR_RESULTS',
        payload: axios.get(settings.getUrl(tags))
    }
}
