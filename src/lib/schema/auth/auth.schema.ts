import * as zod from 'zod';

export const AuthSchema = zod.object({
	email: zod.string().email({ message: 'Please enter a valid email address' }),
	password: zod.string().min(8, 'Password must be at least 8 characters')
});

export const ForgotPasswordSchema = zod.object({
	email: zod.string().email({ message: 'Please enter a valid email address' })
});

export const ResetPasswordSchema = zod.object({
	password: zod.string().min(8, { message: 'Password must be at least 8 characters' }),
	confirm_password: zod.string().min(8, {
		message: 'Password must be at least 8 characters'
	})
});

export const CompleteOnboardingSchema = zod.object({
	first_name: zod.string().min(2, { message: 'First Name must be at least 2 characters' }),
	last_name: zod.string().min(2, { message: 'Last Name must be at least 2 characters' }),
	company_name: zod
		.string()
		.min(2, { message: 'Company Name must be at least 2 characters' })
		.optional(),
	company_code: zod
		.string()
		.min(2, { message: 'Company Name must be at least 2 characters' })
		.optional()
});
