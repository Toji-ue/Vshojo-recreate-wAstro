/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundPosition: {
			'20-100': '20% 100%',
		  },
		fontFamily: {
			mont: ["Montserrat Variable","sans-serif"]
		},
		animation:{
			'marquee': 'marquee 24s linear infinite'
		},
		extend: {
			translate: {
				'onScroll' : 'calc(-65rem * var(--scroll))'
			},
			gridTemplateColumns:{
				'meetImg': 'repeat(auto-fit,minmax(300px,1fr))'
			},
			gridTemplateRows: {
				'custom-layout': 'min-content 1fr',
			  },
			backgroundImage: {
				'hero-pattern': "url('./src/assets/wave.svg')",
			  },
			colors: {
				Vpink: "#F50F75",
				Vdarkgray: "#2A2A2A",
				Vlightgray: "#707070",
				red: "#FF0000",
				black: "#000000",
				white:"#FFFFFF",
				heroPink: "#FFD4FA"
			},
			dropShadow: {
				'custom': 'var(--drop-button-depth-3) var(--drop-button-depth-3) 0 #000000',
				'custom-x1': 'var(--drop-button-depth-1) var(--drop-button-depth-1) 0 #000000',
				'custom-x2': 'var(--drop-button-depth-2) var(--drop-button-depth-2) 0 #000000',
				'custom-x4': 'var(--drop-button-depth-4) var(--drop-button-depth-4) 0 #000000',
				'custom-a': 'var(--drop-button-animation) var(--drop-button-animation) 0 #000000)',
				'socialBtnHover': 'calc(var(--drop-button-depth-3)-var(--social-btn-hover)) calc(var(--drop-button-depth-3)-var(--social-btn-hover)) 0 #000000',
				'faqBtnHover': 'calc(var(--drop-button-depth-4) - var(--meet-btn-hover)) calc(var(--drop-button-depth-4) - var(--meet-btn-hover)) 0 #000000'
			  },
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		  },
	},
	plugins: [],
}
