const sizes = {
	height: {
		'half-screen': '50vh',
		'one-third-screen': '33vh'
	},
	width: {
		'half-screen': '50vw',
		'one-third-screen': '33vw'
	}
}

// primary color: #2B6CB0

module.exports = {
	theme: {
		extend: {
			minWidth: sizes.width,
			maxWidth: sizes.width,
			minHeight: sizes.height,
			maxHeight: sizes.height,
			fontFamily: {
				sans: ['montserrat', 'helvetica', 'arial'],
				headline: ['montserrat', 'helvetica', 'arial'],
				mono: ['source code pro']
			}
		}
	},
	variants: {
		boxShadow: ['responsive', 'hover', 'focus']
	},
	plugins: [
		function({ addBase, config }) {
			addBase({
				// Add base styles when needed
			})
		}
	]
}
