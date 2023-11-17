export const getPost = async (id: string): Promise<{ title: string; content: string }> => {
	return {
		title: `Title for ${id} goes here`,
		content: `<p>Content for ${id} goes here</p>`
	};
};
