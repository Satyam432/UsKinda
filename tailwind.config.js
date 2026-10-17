/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { midnight:'#111827', indigo:'#211936', rose:'#FF8FAB', blush:'#FFB3C6', lavender:'#C4B5FD', gold:'#FFD6A5', cream:'#FFF8F0' }, fontFamily: { sans:['DM Sans','sans-serif'], display:['Fraunces','serif'], round:['Nunito','sans-serif'] } } },
  plugins: [],
}
