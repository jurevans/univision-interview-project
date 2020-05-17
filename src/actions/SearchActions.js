/**
 * textEntered
 * @param text
 * @returns {{type: string, payload: {text: *}}}
 */
export function textEntered(text) {
  return {
    type: 'SEARCH_TEXT_ENTERED',
    payload: {
      text: text
    }
  }
}
