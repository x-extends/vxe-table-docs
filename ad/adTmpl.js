setTimeout(function () {
  var warpperEl = document.getElementById('xe_ad_2410')
  if (!warpperEl) {
    warpperEl = document.createElement('div')
    warpperEl.className = 'padr'
    warpperEl.style = `position: fixed !important;right: 20px !important;top: 104px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`
    document.body.appendChild(warpperEl)
  }
  var wwDiv = document.createElement('div')
  wwDiv.className = 'wwads-cn wwads-vertical'
  wwDiv.setAttribute('data-id', '214')
  wwDiv.style = 'max-width: 200px !important;'
  warpperEl.appendChild(wwDiv)
})
