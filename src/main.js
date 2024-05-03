import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Sebastian Wolfschmdit',
		// In the following fields you can either give a single string,
		// or an array of bullet points

		// What do you associate with the term 'CI/CD'?
		associations: [
			'Difficult to understand processes, especially if you have never heard of the inner workings before. Often fails for dubious reasons.'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Github, Gitlab Pipelines',
		// What do you want to learn in this workshop?
		expectations: [
			'Learn about what is going on in CI/CD and get a high-level overview.'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'cycling',
			'running',
			'basketball'
		]
	}
});

