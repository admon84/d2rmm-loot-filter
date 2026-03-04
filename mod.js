// Color codes reference:
// ÿc0 - white
// ÿc1 - red
// ÿc2 - green
// ÿc3 - blue
// ÿc4 - gold
// ÿc5 - gray
// ÿc6 - black
// ÿc7 - tan
// ÿc8 - orange
// ÿc9 - yellow
// ÿc; - purple
// ÿc= - white1
// ÿcK - gray1
// ÿcI - gray2
// ÿcM - black1
// ÿcE - lightred
// ÿcU - lightblue
// ÿcS - darkred
// ÿc@ - orange1
// ÿcJ - orange2
// ÿcL - orange3
// ÿcH - lightgold1
// ÿcD - gold1
// ÿcR - yellow1
// ÿcQ - green1
// ÿcC - green2
// ÿc< - green3
// ÿcA - darkgreen1
// ÿc: - darkgreen2
// ÿcN - gold2
// ÿcT - red
// ÿcF - lightblue1
// ÿcP - lightblue2
// ÿcB - blue1
// ÿcG - lightpink
// ÿcO - pink

const itemNamesMods = [
  // Gas potions
  { key: 'gpl', newName: '' },
  { key: 'gpm', newName: '' },
  { key: 'gps', newName: '' },

  // Fire potions
  { key: 'opl', newName: '' },
  { key: 'opm', newName: '' },
  { key: 'ops', newName: '' },

  // Arrows
  { key: 'aqv', newName: '' },
  { key: 'cqv', newName: '' },

  // Town portal book and scroll
  { key: 'tbk', newName: 'ÿc3!ÿc0TPÿc3!ÿc0' },
  { key: 'tsc', newName: 'TPÿc3!ÿc0' },

  // Identify book and scroll
  { key: 'ibk', newName: 'ÿc1!ÿc0IDÿc1!ÿc0' },
  { key: 'isc', newName: 'IDÿc1!ÿc0' },

  // Gems
  { key: 'gzv', newName: 'ÿc;+ÿc0Flawless ÿc;Amethystÿc0' },
  { key: 'gpv', newName: 'ÿc;+ÿc0Perfect ÿc;Amethystÿc0' },

  { key: 'gly', newName: 'ÿc9+ÿc0Flawless ÿc9Topazÿc0' },
  { key: 'gpy', newName: 'ÿc9+ÿc0Perfect ÿc9Topazÿc0' },

  { key: 'glb', newName: 'ÿc3+ÿc0Flawless ÿc3Sapphireÿc0' },
  { key: 'gpb', newName: 'ÿc3+ÿc0Perfect ÿc3Sapphireÿc0' },

  { key: 'glg', newName: 'ÿc<+ÿc0Flawless ÿc<Emeraldÿc0' },
  { key: 'gpg', newName: 'ÿc<+ÿc0Perfect ÿc<Emeraldÿc0' },

  { key: 'glr', newName: 'ÿc1+ÿc0Flawless ÿc1Rubyÿc0' },
  { key: 'gpr', newName: 'ÿc1+ÿc0Perfect ÿc1Rubyÿc0' },

  { key: 'glw', newName: 'ÿcU+ÿc0Flawless ÿcUDiamondÿc0' },
  { key: 'gpw', newName: 'ÿcU+ÿc0Perfect ÿcUDiamondÿc0' },

  { key: 'skl', newName: 'ÿcK+ÿc0Flawless ÿcKSkullÿc0' },
  { key: 'skz', newName: 'ÿcK+ÿc0Perfect ÿcKSkullÿc0' },

  // Health potions
  { key: 'hp1', newName: 'HPÿc11ÿc0' },
  { key: 'hp2', newName: 'HPÿc12ÿc0' },
  { key: 'hp3', newName: 'HPÿc13ÿc0' },
  { key: 'hp4', newName: 'HPÿc14ÿc0' },
  { key: 'hp5', newName: 'HPÿc15ÿc0' },

  // Mana potions
  { key: 'mp1', newName: 'MPÿc31ÿc0' },
  { key: 'mp2', newName: 'MPÿc32ÿc0' },
  { key: 'mp3', newName: 'MPÿc33ÿc0' },
  { key: 'mp4', newName: 'MPÿc34ÿc0' },
  { key: 'mp5', newName: 'MPÿc35ÿc0' },

  // Rejuvenation potions
  { key: 'rvs', newName: 'ÿc;+ÿc0Rejuv' },
  { key: 'rvl', newName: 'ÿc;+ÿc0Full Rejuv' },

  // Other potions
  { key: 'vps', newName: 'ÿc9+ÿc0Stam' },
  { key: 'yps', newName: 'ÿcA+ÿc0Anti' },
  { key: 'wms', newName: 'ÿc3+ÿc0Thaw' },

  // Other
  { key: 'key', newName: 'ÿc5Keyÿc0' },
  { key: 'ear', newName: 'ÿc5Earÿc0' }
]

const itemNameaffixesMods = [
  { key: 'Hiquality', newName: 'ÿc5+ÿc0' },
  { key: 'Low Quality', newName: 'ÿc5-ÿc0' },
  { key: 'Damaged', newName: 'ÿc5-ÿc0' },
  { key: 'Cracked', newName: 'ÿc5-ÿc0' },
  { key: 'Crude', newName: 'ÿc5-ÿc0' },
  { key: 'gld', newName: 'ÿc4gÿc0' }
]

const itemRunesMods = [
  // Larger hitbox for high runes
  { key: 'r33', newName: '\n  Zod Rune  \n' },
  { key: 'r32', newName: '\n  Cham Rune  \n' },
  { key: 'r31', newName: '\n  Jah Rune  \n' },
  { key: 'r30', newName: '\n  Ber Rune  \n' },
  { key: 'r29', newName: '\n  Sur Rune  \n' },
  { key: 'r28', newName: '\n  Lo Rune  \n' },
  { key: 'r27', newName: '\n  Ohm Rune  \n' },
  { key: 'r26', newName: '\n  Vex Rune  \n' },
  { key: 'r25', newName: '\n  Gul Rune  \n' },
  { key: 'r24', newName: '\n  Ist Rune  \n' },
  { key: 'r23', newName: '\n  Mal Rune  \n' },
  { key: 'r22', newName: '\n  Um Rune  \n' }
]

// Function to apply modifications to a file (only if enabled in config)
function applyMods(filePath, mods, configKey) {
  if (!config[configKey]) {
    console.log(`Skipped ${filePath} (disabled in config)`)
    return 0
  }

  const data = D2RMM.readJson(filePath)
  let modifiedCount = 0

  for (const mod of mods) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Key === mod.key) {
        data[i].enUS = mod.newName
        // console.log(`Modified ${filePath} ${mod.key} to "${mod.newName}"`);
        modifiedCount++
        break
      }
    }
  }

  if (modifiedCount > 0) {
    D2RMM.writeJson(filePath, data)
    console.log(`Saved ${modifiedCount} changes to ${filePath}`)
  }

  return modifiedCount
}

// Apply modifications based on config toggles
let totalMods = 0
totalMods += applyMods(
  'local/lng/strings/item-names.json',
  itemNamesMods,
  'itemNames'
)
totalMods += applyMods(
  'local/lng/strings/item-nameaffixes.json',
  itemNameaffixesMods,
  'itemNameaffixes'
)
totalMods += applyMods(
  'local/lng/strings/item-runes.json',
  itemRunesMods,
  'itemRunes'
)

console.log(
  `${totalMods} total modifications! Check admon's D2R Loot Filter settings to toggle changes on/off.`
)
