<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/_components/ui/logo.svelte';
	import { Button, Input, Label, Spinner } from 'flowbite-svelte';
	import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
	import ErrorNotice from '../_components/error-notice.svelte';

	let togglePassword = false;
	let toggleConfirmPassword = false;
	let isLoading = false;

	export let form;
	let { errors } = form ?? {};

	$: ({ errors } = form ?? {
		errors: undefined
	});
</script>

<svelte:head>
	<title>HRMS | Reset Password</title>
</svelte:head>

<section class="min-h-screen w-full">
	<div class="border-b p-5 flex justify-center items-center">
		<a href="/"> <Logo /></a>
	</div>
	<div class="w-full py-16">
		<div class="max-w-lg mx-auto px-6 space-y-5">
			<div>
				<h3 class="styled-heading text-2xl font-semibold text-primary-base">
					Create a new password
				</h3>
				<p class="text-neutral-400 mt-2">
					Provide us with your new password, and you're good to go!
				</p>
			</div>
			{#if errors?.api}
				<ErrorNotice error={errors.api} />
			{/if}
			<div>
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
						<Label class="text-primary-base mb-2">
							<span>Password</span>
						</Label>
						<Input
							id="show-password"
							type={togglePassword ? 'text' : 'password'}
							size="md"
							name="password"
							aria-describedby={errors?.password ? 'password-error' : undefined}
							disabled={isLoading}
						>
							<button
								slot="right"
								on:click={(event) => {
									event.preventDefault();
									togglePassword = !togglePassword;
								}}
								type="button"
								class="focus:outline-none"
								disabled={isLoading}
							>
								{#if togglePassword}
									<EyeOutline class="w-6 h-6" />
								{:else}
									<EyeSlashOutline class="w-6 h-6" />
								{/if}
							</button>
						</Input>
						{#if errors?.password}
							<small class="text-red-500 text-sm mt-2" id="password-error">{errors?.password}</small
							>
						{/if}
					</div>
					<div>
						<Label class="text-primary-base mb-2">
							<span>Confirm Password</span>
						</Label>
						<Input
							id="confirm-password"
							type={toggleConfirmPassword ? 'text' : 'password'}
							size="md"
							name="confirm_password"
							aria-describedby={errors?.password ? 'password-error' : undefined}
							disabled={isLoading}
						>
							<button
								slot="right"
								on:click={(event) => {
									event.preventDefault();
									toggleConfirmPassword = !toggleConfirmPassword;
								}}
								type="button"
								class="focus:outline-none"
								disabled={isLoading}
							>
								{#if toggleConfirmPassword}
									<EyeOutline class="w-6 h-6" />
								{:else}
									<EyeSlashOutline class="w-6 h-6" />
								{/if}
							</button>
						</Input>
						{#if errors?.password}
							<small class="text-red-500 text-sm mt-2" id="password-error">{errors?.password}</small
							>
						{/if}
					</div>
					<Button class="w-full" type="submit" disabled={isLoading}>
						{#if isLoading}
							<Spinner class="mr-3" size="4" color="white" />
						{/if}
						{isLoading ? 'Resetting Password...' : 'Reset Password'}
					</Button>
				</form>
			</div>
		</div>
	</div>
</section>
