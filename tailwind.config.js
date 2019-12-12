module.exports = {
	theme: {
		// overriding the current configs
		fontFamily: {
			sans: [
				'Open Sans',
				'sans-serif',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
			serif: [ 'Playfair Display', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif' ],
			mono: [
				'Permanent Marker',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace'
			]
		},
		extend: {
			// adding new configs
			colors: {
				'app-green': {
					500: '#0A9A1F'
				}
			}
		}
	},
	variants: {},
	plugins: []
};
