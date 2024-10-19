<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/_components/ui/logo.svelte';
	import { Button, Input, Label, Spinner } from 'flowbite-svelte';
	import { EyeOutline, EyeSlashOutline } from 'flowbite-svelte-icons';
	import ErrorNotice from '../_components/error-notice.svelte';

	let togglePassword = false;
	let isLoading = false;
	
	export let form;
	let { email, errors } = form ?? {};

	$: ({ email, errors } = form ?? {
		email: '',
		errors: undefined
	});
</script>

<svelte:head>
	<title>HRMS | Login</title>
</svelte:head>

<section class="min-h-screen w-full">
	<div class="border-b p-5 flex justify-center items-center">
		<a href="/"> <Logo /></a>
	</div>
	<div class="w-full py-16">
		<div class="max-w-lg mx-auto px-6 space-y-5">
			<div>
				<h3 class="styled-heading text-2xl font-semibold text-primary-base">Welcome back!</h3>
				<p class="text-neutral-400 mt-2">Log in to continue</p>
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
					action="?/login"
				>
					<div>
						<Label class="text-primary-base space-y-2">
							<span>Work Email</span>
							<Input
								value={email}
								size="md"
								name="email"
								aria-describedby={errors?.email ? 'email-error' : undefined}
								disabled={isLoading}
							/>
						</Label>
						{#if errors?.email}
							<small class="text-red-500 text-sm mt-2" id="email-error">{errors?.email}</small>
						{/if}
					</div>

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
					<a
						href="/forgot-password"
						class="inline-block text-sm text-primary-400 hover:text-primary-500">Forgot Password?</a
					>
					<Button class="w-full" type="submit" disabled={isLoading}>
						{#if isLoading}
							<Spinner class="mr-3" size="4" color="white" />
						{/if}
						{isLoading ? 'Signing In...' : 'Sign In'}
					</Button>
					<span class="inline-block text-sm text-gray-400"
						>Don't have an account? <a
							href="/register"
							class="text-primary-400 hover:text-primary-500">Sign Up</a
						></span
					>
				</form>
			</div>
		</div>
	</div>
</section>
