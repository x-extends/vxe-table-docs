var wwadId = ''
var hostname = location.hostname
if (hostname.indexOf('vxetable.cn') > -1) {
  wwadId = '214'
} else if (hostname.indexOf('vxeui.com') > -1) {
  wwadId = '344'
}
if (wwadId) {
  var warpperEl = document.getElementById('{VXE_AD_WRAPPER_ID}')
  if (!warpperEl) {
    warpperEl = document.createElement('div')
    warpperEl.id = '{VXE_AD_WRAPPER_ID}'
    warpperEl.style = `{VXE_AD_WRAPPER_STYLE}`
    document.body.appendChild(warpperEl)
  }
  var wwDiv = document.createElement('div')
  wwDiv.className = 'wwads-cn wwads-vertical'
  wwDiv.setAttribute('data-id', wwadId)
  wwDiv.style = '{VXE_AD_WWADS_STYLE}'
  warpperEl.appendChild(wwDiv)
}
