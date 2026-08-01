<script lang="ts">
	import { resolve } from '$app/paths';
	import menuItems from '$lib/topNav';

	let mobileOpen: boolean = $state(false);

	const toggleMenu = (e: MouseEvent) => {
		e.preventDefault();
		mobileOpen = !mobileOpen;
	};

	const closeMobile = () => {
		mobileOpen = false;
	};
	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			mobileOpen = !mobileOpen;
		}
	};
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item has-text-weight-bold is-size-3" href={resolve('/')}> SV5-Bulma </a>

		<div
			role="button"
			tabindex="0"
			class={['navbar-burger', mobileOpen && 'is-active']}
			aria-label="menu"
			aria-expanded="false"
			data-target="top-nav"
			onclick={toggleMenu}
			onkeydown={handleKeydown}
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</div>
	</div>

	<div id="top-nav" class={['navbar-menu', mobileOpen && 'is-active']}>
		<div class="navbar-start">
			{#each menuItems as item, i (i)}
				{#if item.items}
					<div class="navbar-item has-dropdown is-hoverable">
						<div class="navbar-link">
							{item.title}
						</div>
						<div class="navbar-dropdown">
							{#each item.items as sub, j (j)}
								{#if sub.title === '-'}
									<hr class="navbar-divider" />
								{:else}
									<a
										id="topnav-{i + 1}-{j + 1}"
										class="navbar-item"
										href={resolve(sub.href ? sub.href : '/404')}
										onclick={closeMobile}
									>
										{sub.title}
									</a>
								{/if}
							{/each}
						</div>
					</div>
				{:else}
					<a
						id="topnav-{i + 1}"
						class={['navbar-item', item.items && 'is-hoverable', item.items && 'has-dropdown']}
						href={resolve(item.href ? item.href : '/404')}
						onclick={closeMobile}
					>
						{item.title}
					</a>
				{/if}
			{/each}
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a class="button is-primary" href={resolve('/test')}>
						<strong>Sign up</strong>
					</a>
					<a class="button is-light" href={resolve('/test')}> Log in </a>
				</div>
			</div>
		</div>
	</div>
</nav>
