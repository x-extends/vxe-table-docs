setTimeout(function () {
  var warpperEl = document.createElement('div')
  warpperEl.className = 'vxe-ad-20240622'
  warpperEl.style = `position: fixed !important;right: 22px !important;top: 68px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 999 !important;display: block !important;text-align: left !important;`
  var sponsorEl = document.createElement('div')
  sponsorEl.className = 'vxe-ss-20240622'
  var wwDiv = document.createElement('div')
  wwDiv.className = 'wwads-cn wwads-vertical'
  wwDiv.setAttribute('data-id', '214')
  wwDiv.style = 'max-width: 200px !important;'
  warpperEl.appendChild(sponsorEl)
  warpperEl.appendChild(wwDiv)
  document.body.appendChild(warpperEl)
})
