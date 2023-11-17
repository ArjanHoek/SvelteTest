import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const load: PageLoad = ({ params }) => {
	if (params.slug === 'test-post') {
		return { title: 'Test post', content: 'This is a test post!' };
	}
	throw error(404, 'Not found');
};
