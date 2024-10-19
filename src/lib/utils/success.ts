function formatSuccessMessage(input: string): string {
	const matches: { [key: string]: string } = {
		'an email has been sent with a reset link.': 'An email has been sent with a reset link.'
	};

	const formattedInput = input.toLowerCase();

	return matches[formattedInput] || 'An unknown error occurred. Please try again.';
}

export { formatSuccessMessage };
