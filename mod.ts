const BLANK_VIDEOS = [
  // hd/global
  'hd/global/video/blizzardlogos.webm',
  'hd/global/video/d2intro.webm',
  'hd/global/video/d2x_intro.webm',
  'hd/global/video/logoanim.webm',
  'hd/global/video/act2/act02start.webm',
  'hd/global/video/act3/act03start.webm',
  'hd/global/video/act4/act04end.webm',
  'hd/global/video/act4/act04start.webm',
  'hd/global/video/act5/d2x_out.webm',
  // hd/local
  'hd/local/video/act1/blizzardlogos.flac',
  'hd/local/video/act1/d2intro.flac',
  'hd/local/video/act1/d2x_intro.flac',
  'hd/local/video/act1/logoanim.flac',
  'hd/local/video/act2/act02start.flac',
  'hd/local/video/act3/act03start.flac',
  'hd/local/video/act4/act04end.flac',
  'hd/local/video/act4/act04start.flac',
  'hd/local/video/act5/d2x_out.flac',
  // global
  'global/video/bliznorth.webm',
  'global/video/d2intro.webm',
  'global/video/d2x_intro.webm',
  'global/video/new_bliz.webm',
  'global/video/act2/act02start.webm',
  'global/video/act3/act03start.webm',
  'global/video/act4/act04end.webm',
  'global/video/act4/act04start.webm',
  'global/video/act5/d2x_out.webm',
  // local
  'local/video/act1/d2intro.flac',
  'local/video/act1/d2x_intro.flac',
  'local/video/act2/act02start.flac',
  'local/video/act3/act03start.flac',
  'local/video/act4/act04end.flac',
  'local/video/act4/act04start.flac',
  'local/video/act5/d2x_out.flac'
]

function install() {
  D2RMM.writeJson('global/ui/layouts/loadscreenpanelhd.json', {
    type: 'TitleScreenHDPanel',
    name: 'LoadScreenPanel'
  })
  D2RMM.writeJson('global/ui/layouts/loadscreenpanel.json', {})

  for (const file of BLANK_VIDEOS) {
    D2RMM.writeTxt(file, '')
  }
}

install()
