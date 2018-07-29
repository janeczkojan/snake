export const capitalizeFirstLetter = (text) => {
	if (!text || text.length <= 0) {
		return '';
	}

	return text.charAt(0).toUpperCase() + text.slice(1);
};