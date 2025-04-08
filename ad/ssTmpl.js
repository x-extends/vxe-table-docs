var warpperEl = document.getElementById('{VXE_AD_WRAPPER_ID}')
if (!warpperEl) {
  warpperEl = document.createElement('div')
  warpperEl.id = '{VXE_AD_WRAPPER_ID}'
  warpperEl.style = '{VXE_AD_WRAPPER_STYLE}'
  document.body.appendChild(warpperEl)
}
var sponsorEl = document.createElement('div')
sponsorEl.id = '{VXE_AD_SPONSOR_ID}'
warpperEl.appendChild(sponsorEl)
