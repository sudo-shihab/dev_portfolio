module.exports = {
	theme: {
		// overridng screens
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1638px'
		},
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
