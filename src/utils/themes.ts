// Update the existing themes
export const themes = {
  classic: {
    name: 'Royal Classic',
    board: {
      light: 'bg-gradient-to-br from-amber-100 to-amber-200',
      dark: 'bg-gradient-to-br from-amber-800 to-amber-900',
      border: 'border-amber-900/80',
      highlight: 'ring-green-400/80',
      selected: 'ring-blue-400/80',
      possible: 'bg-green-400/50',
    },
    pieces: {
      white: 'text-amber-50 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]',
      black: 'text-amber-950 drop-shadow-[0_2px_3px_rgba(255,255,255,0.2)]',
    },
    background: 'bg-gradient-to-br from-amber-100 via-amber-50 to-amber-200',
  },
  cyber: {
    name: 'Cyber Neon',
    board: {
      light: 'bg-gradient-to-br from-zinc-800 to-zinc-700',
      dark: 'bg-gradient-to-br from-zinc-950 to-zinc-900',
      border: 'border-cyan-500/50',
      highlight: 'ring-purple-400/80',
      selected: 'ring-cyan-400/80',
      possible: 'bg-purple-400/50',
    },
    pieces: {
      white: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      black: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
    },
    background: 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-black',
  },
  crystal: {
    name: 'Crystal Palace',
    board: {
      light: 'bg-gradient-to-br from-blue-100/90 to-blue-200/90',
      dark: 'bg-gradient-to-br from-blue-700/90 to-blue-800/90',
      border: 'border-blue-300/50',
      highlight: 'ring-teal-400/80',
      selected: 'ring-sky-400/80',
      possible: 'bg-teal-400/50',
    },
    pieces: {
      white: 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]',
      black: 'text-blue-950 drop-shadow-[0_0_8px_rgba(23,37,84,0.5)]',
    },
    background: 'bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300',
  },
  dragon: {
    name: 'Dragon Fire',
    board: {
      light: 'bg-gradient-to-br from-orange-200 to-orange-300',
      dark: 'bg-gradient-to-br from-red-800 to-red-900',
      border: 'border-red-900/80',
      highlight: 'ring-yellow-400/80',
      selected: 'ring-orange-400/80',
      possible: 'bg-yellow-400/50',
    },
    pieces: {
      white: 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]',
      black: 'text-red-950 drop-shadow-[0_0_8px_rgba(69,10,10,0.5)]',
    },
    background: 'bg-gradient-to-br from-red-900 via-red-800 to-orange-900',
  },
};