setTimeout(function () {
  var warpperEl = document.getElementById('xe_ad_2410')
  if (!warpperEl) {
    warpperEl = document.createElement('div')
    warpperEl.id = 'xe_ad_2410'
    warpperEl.style = `position: fixed !important;right: 20px !important;top: 100px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`
    document.body.appendChild(warpperEl)
  }
  var sponsorEl = document.createElement('div')
  sponsorEl.className = 'xe_sponsor_2410'
  warpperEl.appendChild(sponsorEl)
})
