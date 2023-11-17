import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params: { slug } }) => {
	return await db.getPost(slug);
};
