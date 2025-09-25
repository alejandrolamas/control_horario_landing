/*********************************************************
 Tailwind Config for fichaje.app landing (dark, awwwards vibe)
**********************************************************/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0b0f',
        surface: '#0f1117',
        primary: '#8B5CF6',
        secondary: '#22D3EE',
        accent: '#F59E0B',
        muted: '#94a3b8',
        stroke: '#1f2230'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
        display: ['Urbanist', 'Inter', 'system-ui']
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.35)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
