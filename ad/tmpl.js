setTimeout(function () {
  var warpperEl = document.createElement('div')
  warpperEl.className = 'pagead-right'
  warpperEl.style = 'position: fixed !important;right: 20px !important;top: 50px !important;width: 280px !important;padding: 0 !important;margin: 0 !important;z-index: 999999 !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;'
  var wwDiv = document.createElement('div')
  wwDiv.className = 'wwads-cn wwads-vertical'
  wwDiv.setAttribute('data-id', '214')
  wwDiv.style = 'max-width: 180px !important;margin: 20px auto 0 auto !important;opacity: 1!important;visibility: visible !important;display: block !important;transform: none !important;'
  warpperEl.appendChild(wwDiv)
  document.body.appendChild(warpperEl)
})
