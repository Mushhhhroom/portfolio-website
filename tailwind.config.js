/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,jsx}'],
 darkMode: 'class',
 theme: {
 extend: {
 fontFamily: {
 sans: ['Inter', 'system-ui', 'sans-serif'],
 display: ['Instrument Serif', 'Georgia', 'serif'],
 mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
 },
 colors: {
 ink: {
 50: '#fafaf9',
 100: '#f4f4f2',
 200: '#e7e5e0',
 300: '#d3d0c8',
 400: '#a8a49a',
 500: '#78756c',
 600: '#52514a',
 700: '#3a3935',
 800: '#26251f',
 900: '#17160f',
 950: '#0a0a0a',
 },
 accent: {
 DEFAULT: '#ff4d2e',
 soft: '#fff5f0',
 dark: '#e6341a',
 },
 violet: {
 400: '#a78bfa',
 500: '#8b5cf6',
 600: '#7c3aed',
 },
 blue: {
 400: '#60a5fa',
 500: '#3b82f6',
 },
 amber: {
 400: '#fbbf24',
 500: '#f59e0b',
 },
 rose: {
 400: '#fb7185',
 500: '#f43f5e',
 },
 emerald: {
 400: '#34d399',
 500: '#10b981',
 },
 },
 maxWidth: {
 container: '76rem',
 prose: '68ch',
 },
 transitionTimingFunction: {
 'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
 'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
 },
 },
 },
 plugins: [],
};
