<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/_components/ui/logo.svelte';
	import { Button, Input, Label, Spinner, Checkbox, Helper, Radio } from 'flowbite-svelte';
	import ErrorNotice from '../../../(auth)/_components/error-notice.svelte';

	export let form;
	let isLoading = false;
	let company_status = '';

	let { errors } = form ?? {};

	$: ({ errors, first_name, last_name, company_code, company_name } = form ?? {
		company_code: '',
		company_name: '',
		first_name: '',
		last_name: '',
		errors: undefined
	});
</script>

<svelte:head>
	<title>HRMS | Onboarding</title>
</svelte:head>

<section class="bg-white grid gap-4 lg:grid-cols-[400px,_1fr] min-h-screen">
	<div class="bg-[#f4f4f4] p-5 sticky top-0">
		<Logo />
		<br />
		<h3 class="text-2xl font-semibold styled-heading">Welcome to HRMS!</h3>
		<p class="text-neutral-400 mt-2">Let's get you started.</p>
	</div>
	<div class="container max-w-lg mx-auto px-6 py-12 space-y-5">
		{#if errors?.api}
			<ErrorNotice error={errors.api} />
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
					<span>First Name</span>
					<Input value={first_name} size="md" name="first_name" />
				</Label>
				{#if errors?.first_name}
					<small class="text-red-500 text-sm mt-2" id="first_name-error">{errors?.first_name}</small
					>
				{/if}
			</div>
			<div>
				<Label class="text-primary-base space-y-2">
					<span>Last Name</span>
					<Input value={last_name} size="md" name="last_name" />
				</Label>
				{#if errors?.last_name}
					<small class="text-red-500 text-sm mt-2" id="last_name-error">{errors?.last_name}</small>
				{/if}
			</div>
			<div>
				<Label class="text-primary-base space-y-3">
					<span>Employment Status</span>
					<Radio bind:group={company_status} value="employer">
						I’m registering as a company representative
					</Radio>
					<Radio bind:group={company_status} value="employee">
						I’m an employee joining my company
					</Radio>
				</Label>
				<Helper id="helper-checkbox-text" class="text-primary-400 mt-3">
					Choose the appropriate option based on your role within the company.
				</Helper>
			</div>
			{#if company_status === 'employer'}
				<div>
					<Label class="text-primary-base space-y-2">
						<span>Company Name</span>
						<Input value={company_name} size="md" name="company_name" />
					</Label>
					{#if errors?.company_name}
						<small class="text-red-500 text-sm mt-2" id="company_name-error">
							{errors?.company_name}
						</small>
					{/if}
					<Helper id="helper-checkbox-text" class="text-primary-400 mt-2">
						A company will be created with this name after you complete onboarding.
					</Helper>
				</div>
			{/if}
			{#if company_status === 'employee'}
				<div>
					<div>
						<Label class="text-primary-base space-y-2">
							<span>Company Code</span>
							<Input value={company_code} size="md" name="company_code" />
						</Label>
						{#if errors?.company_code}
							<small class="text-red-500 text-sm mt-2" id="company_code-error">
								{errors?.company_code}
							</small>
						{/if}
						<Helper id="helper-checkbox-text" class="text-primary-400 mt-2">
							Enter the company code provided by your company.
						</Helper>
					</div>
				</div>
			{/if}
			<Button class="w-full" type="submit" disabled={isLoading}>
				{#if isLoading}
					<Spinner class="mr-3" size="4" color="white" />
				{/if}
				{isLoading ? 'Completing Onboarding...' : 'Complete Onboarding'}
			</Button>
		</form>
	</div>
</section>
