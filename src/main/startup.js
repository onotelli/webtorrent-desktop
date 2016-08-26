module.exports = {
  install,
  uninstall
}

var startup = require('user-startup')

function install () {
  var appPath = process.execPath

  startup.add('webtorrent-desktop', appPath)
}

function uninstall () {
  startup.remove('webtorrent-desktop')
}
