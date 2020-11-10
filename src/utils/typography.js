import Typography from "typography"

const typography = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.666,
	scaleRatio: 3.05,
	headerWeight: 500,
	headerFontFamily: [
		"Roboto",
		"sans-serif",
	],
	bodyFontFamily: ["Rokkitt", "serif"],
	googleFonts: [
		{
			name: 'Roboto',
			styles: [
				'500',
			],
		},
		{
			name: 'Rokkitt',
			styles: [
				'400',
				'400i',
				'500',
				'500i',
			],
		},
	],
})

export default typography
