module.exports = {
  install,
  uninstall
}

var config = require('../config')
var AutoLaunch = require('auto-launch')

var appLauncher = new AutoLaunch({
  name: config.APP_NAME
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
