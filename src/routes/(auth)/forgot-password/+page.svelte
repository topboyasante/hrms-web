<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/_components/ui/logo.svelte';
	import { Button, Input, Label, Spinner } from 'flowbite-svelte';
	import ErrorNotice from '../_components/error-notice.svelte';
	import SuccessNotice from '../_components/success-notice.svelte';

	let isLoading = false;

	export let form;
	let { email, errors, success } = form ?? {};

	$: ({ email, errors, success } = form ?? {
		email: '',
		success: '',
		errors: undefined
	});
</script>

<svelte:head>
	<title>HRMS | Forgot Password</title>
</svelte:head>

<section class="bg-white flex w-full justify-between items-center min-h-screen">
	<div class="container max-w-lg mx-auto px-6 py-12 space-y-5">
		<div>
			<Logo />
			<br />
			<h3 class="text-2xl font-semibold styled-heading">Forgot your password?</h3>
			<p class="text-neutral-400 mt-2">
				No worries. Provide your email, and we will send you reset instructions.
			</p>
		</div>
		{#if errors?.api}
			<ErrorNotice error={errors.api} />
		{/if}
		{#if success}
			<SuccessNotice message={success} />
		{/if}
		<form
			use:enhance={() => {
				isLoading = true;

				return async ({ update }) => {
					await update();
					isLoading = false;
				};
			}}
			class="space-y-5"
			method="POST"
		>
			<div>
				<Label class="text-primary-base space-y-2">
					<span>Work Email</span>
					<Input size="md" name="email" value={email} />
				</Label>
				{#if errors?.email}
					<small class="text-red-500 text-sm mt-2" id="email-error">{errors?.email}</small>
				{/if}
			</div>
			<Button class="w-full" type="submit" disabled={isLoading}>
				{#if isLoading}
					<Spinner class="mr-3" size="4" color="white" />
				{/if}
				{isLoading ? 'Sending Reset Instructions...' : 'Send Reset Instructions'}
			</Button>
			<a href="/login" class="inline-block text-sm text-primary-400 hover:text-primary-500"
				>I remember my password</a
			>
		</form>
	</div>
</section>
