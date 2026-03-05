// Diablo 2 Resurrected color codes
const colorCodes = {
  white: 'ÿc0',
  red: 'ÿc1',
  green: 'ÿc2',
  blue: 'ÿc3',
  gold: 'ÿc4',
  gray: 'ÿc5',
  black: 'ÿc6',
  tan: 'ÿc7',
  orange: 'ÿc8',
  yellow: 'ÿc9',
  purple: 'ÿc;',
  white1: 'ÿc=',
  gray2: 'ÿcK',
  gray3: 'ÿcI',
  black1: 'ÿcM',
  lightred: 'ÿcE',
  lightblue: 'ÿcU',
  darkred: 'ÿcS',
  orange1: 'ÿc@',
  orange2: 'ÿcJ',
  orange3: 'ÿcL',
  lightgold: 'ÿcH',
  gold1: 'ÿcD',
  yellow1: 'ÿcR',
  green1: 'ÿcQ',
  green2: 'ÿcC',
  green3: 'ÿc<',
  darkgreen: 'ÿcA',
  darkgreen2: 'ÿc:',
  gold2: 'ÿcN',
  red2: 'ÿcT',
  lightblue2: 'ÿcF',
  lightblue3: 'ÿcP',
  blue1: 'ÿcB',
  lightpink: 'ÿcG',
  pink: 'ÿcO'
}
type ColorMarker = keyof typeof colorCodes

const regexColorVar = /\{([a-zA-Z0-9]+)\}/g

export function parseColors(value: string): string {
  return value.replace(
    regexColorVar,
    (match, marker: ColorMarker) => colorCodes[marker] || match
  )
}
