setTimeout(function () {
  var warpperEl = document.createElement('div')
  warpperEl.className = 'padr'
  warpperEl.style = `position: fixed !important;right: 20px !important;top: 66px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`
  var sponsorEl = document.createElement('div')
  sponsorEl.className = 'xe-sponsor'
  var wwDiv = document.createElement('div')
  wwDiv.className = 'wwads-cn wwads-vertical'
  wwDiv.setAttribute('data-id', '214')
  wwDiv.style = 'max-width: 200px !important;'
  warpperEl.appendChild(sponsorEl)
  warpperEl.appendChild(wwDiv)
  document.body.appendChild(warpperEl)
})
