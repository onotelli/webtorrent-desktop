module.exports = {
  install,
  uninstall
}

var AutoLaunch = require('auto-launch')

var appLauncher = new AutoLaunch({
  name: 'WebTorrent Desktop'
})

function install () {
  return appLauncher.isEnabled()
      .then(function (enabled) {
        if (enabled) return
        return appLauncher.enable()
      })
}

function uninstall () {
  return appLauncher.isEnabled()
      .then(function (enabled) {
        if (enabled) return appLauncher.disable()
      })
}
