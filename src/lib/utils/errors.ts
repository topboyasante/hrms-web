function formatError(input: string): string {
	const matches: { [key: string]: string } = {
		'password is invalid': 'The password you provided is incorrect.',
		'password is not strong enough': 'Your password needs to be stronger.',
		'confirm_password is not strong enough': 'Your password needs to be stronger.',
		'no user exists with the provided email': 'No user exists with the provided email.',
		'[p2002]: unique constraint failed on the fields: (`email`)': 'An account exists with the provided email.',
		'Passwords do not match': 'The provided passwords do not match.',
		'token has expired': 'The verification token has expired. Please try again.',
		'internal server error': 'An error occurred on our servers. Please try again in a few minutes.',
		'[p2002]: unique constraint failed on the fields: (`user_id`)': 'A company has already been created by this user.'
	};

	const formattedInput = input.toLowerCase();

	return matches[formattedInput] || 'An unknown error occurred. Please try again.';
}

export { formatError };
