// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const postcssPlugins = [ tailwind(), autoprefixer() ];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
	siteName: 'custom tailwind starter',
	plugins: [],
	/**
   * Post css plugins
   */
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins
			}
		}
	}
};
