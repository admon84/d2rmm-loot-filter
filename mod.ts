import { parseColorMarkers } from './color'

type ItemMod = {
  key: string
  newName: string
}

type ApplyTarget = {
  filePath: string
  mods: ItemMod[]
  configKey: string
}

const itemNamesMods: ItemMod[] = [
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
  { key: 'tbk', newName: '{blue}!{white}TP{blue}!{white}' },
  { key: 'tsc', newName: 'TP{blue}!{white}' },

  // Identify book and scroll
  { key: 'ibk', newName: '{red}!{white}ID{red}!{white}' },
  { key: 'isc', newName: 'ID{red}!{white}' },

  // Gems
  { key: 'gzv', newName: '{purple}+{white}Flawless {purple}Amethyst{white}' },
  { key: 'gpv', newName: '{purple}+{white}Perfect {purple}Amethyst{white}' },
  { key: 'gly', newName: '{yellow}+{white}Flawless {yellow}Topaz{white}' },
  { key: 'gpy', newName: '{yellow}+{white}Perfect {yellow}Topaz{white}' },
  { key: 'glb', newName: '{blue}+{white}Flawless {blue}Sapphire{white}' },
  { key: 'gpb', newName: '{blue}+{white}Perfect {blue}Sapphire{white}' },
  { key: 'glg', newName: '{green3}+{white}Flawless {green3}Emerald{white}' },
  { key: 'gpg', newName: '{green3}+{white}Perfect {green3}Emerald{white}' },
  { key: 'glr', newName: '{red}+{white}Flawless {red}Ruby{white}' },
  { key: 'gpr', newName: '{red}+{white}Perfect {red}Ruby{white}' },

  {
    key: 'glw',
    newName: '{lightblue}+{white}Flawless {lightblue}Diamond{white}'
  },
  {
    key: 'gpw',
    newName: '{lightblue}+{white}Perfect {lightblue}Diamond{white}'
  },

  { key: 'skl', newName: '{gray1}+{white}Flawless {gray1}Skull{white}' },
  { key: 'skz', newName: '{gray1}+{white}Perfect {gray1}Skull{white}' },

  // Health potions
  { key: 'hp1', newName: 'HP{red}1{white}' },
  { key: 'hp2', newName: 'HP{red}2{white}' },
  { key: 'hp3', newName: 'HP{red}3{white}' },
  { key: 'hp4', newName: 'HP{red}4{white}' },
  { key: 'hp5', newName: 'HP{red}5{white}' },

  // Mana potions
  { key: 'mp1', newName: 'MP{blue}1{white}' },
  { key: 'mp2', newName: 'MP{blue}2{white}' },
  { key: 'mp3', newName: 'MP{blue}3{white}' },
  { key: 'mp4', newName: 'MP{blue}4{white}' },
  { key: 'mp5', newName: 'MP{blue}5{white}' },

  // Rejuvenation potions
  { key: 'rvs', newName: '{purple}+{white}Rejuv' },
  { key: 'rvl', newName: '{purple}+{white}Full Rejuv' },

  // Other potions
  { key: 'vps', newName: '{yellow}+{white}Stam' },
  { key: 'yps', newName: '{darkgreen1}+{white}Anti' },
  { key: 'wms', newName: '{blue}+{white}Thaw' },

  // Other
  { key: 'key', newName: '{gray}Key{white}' },
  { key: 'ear', newName: '{gray}Ear{white}' }
]

const itemNameaffixesMods: ItemMod[] = [
  // Superior item + gray color
  { key: 'Hiquality', newName: '{gray}+{white}' },

  // Low quality items + gray color
  { key: 'Low Quality', newName: '{gray}-{white}' },
  { key: 'Damaged', newName: '{gray}-{white}' },
  { key: 'Cracked', newName: '{gray}-{white}' },
  { key: 'Crude', newName: '{gray}-{white}' },

  { key: 'gld', newName: '{gold}g{white}' }
]

const itemRunesMods: ItemMod[] = [
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

const applyTargets: ApplyTarget[] = [
  {
    filePath: 'local/lng/strings/item-names.json',
    mods: itemNamesMods,
    configKey: 'itemNames'
  },
  {
    filePath: 'local/lng/strings/item-nameaffixes.json',
    mods: itemNameaffixesMods,
    configKey: 'itemNameaffixes'
  },
  {
    filePath: 'local/lng/strings/item-runes.json',
    mods: itemRunesMods,
    configKey: 'itemRunes'
  }
]

function applyMods(filePath: string, mods: ItemMod[], configKey: string) {
  if (!config[configKey]) {
    console.log(`Skipped ${filePath} (disabled in config)`)
    return 0
  }

  const data = D2RMM.readJson(filePath)
  if (!Array.isArray(data)) {
    console.warn(`Skipped ${filePath} (expected JSON array)`)
    return 0
  }

  let modifiedCount = 0
  const parsedNamesByKey = new Map<string, string>()

  for (const mod of mods) {
    parsedNamesByKey.set(mod.key, parseColorMarkers(mod.newName))
  }

  for (const row of data) {
    if (typeof row !== 'object' || row === null || Array.isArray(row)) continue

    const record = row as Record<string, JSONData>
    if (typeof record.Key !== 'string') continue

    const replacement = parsedNamesByKey.get(record.Key)
    if (replacement === undefined) continue

    record.enUS = replacement
    // console.log(`Modified ${filePath}: ${record.Key} -> "${replacement}"`)
    modifiedCount++
  }

  if (modifiedCount > 0) {
    D2RMM.writeJson(filePath, data)
    console.log(`Saved ${modifiedCount} changes to ${filePath}`)
  }

  return modifiedCount
}

function main() {
  let totalMods = 0
  for (const target of applyTargets) {
    totalMods += applyMods(target.filePath, target.mods, target.configKey)
  }
}

main()
