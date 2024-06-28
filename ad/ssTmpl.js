setTimeout(function () {
  var warpperEl = document.getElementById('XET_AD_202406')
  if (!warpperEl) {
    warpperEl = document.createElement('div')
    warpperEl.id = 'XET_AD_202406'
    warpperEl.style = `position: fixed !important;right: 20px !important;top: 66px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`
    document.body.appendChild(warpperEl)
  }
  var sponsorEl = document.createElement('div')
  sponsorEl.className = 'xe-sponsor'
  warpperEl.appendChild(sponsorEl)
})
