import { FETCH_RESULTS, RESET_RESULTS } from '../actions/types';
import parseLink from './../common/parse_link';

export default function (state = null, action) {
	switch (action.type) {
		case FETCH_RESULTS:
			if (action.payload.data) {
				return parseLink(action.payload.request.getResponseHeader('Link'));
			} else {
				return null;
			}
			
		case RESET_RESULTS:
			return null;

		default:
			return state;
	}
}